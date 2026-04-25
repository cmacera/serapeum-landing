import { NextRequest, NextResponse } from "next/server";

const API_URL = "https://api.serapeum.app/orchestratorFlow";
const SUPABASE_URL = process.env.SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY ?? "";
const DEMO_EMAIL = process.env.DEMO_USER_EMAIL ?? "";
const DEMO_PASSWORD = process.env.DEMO_USER_PASSWORD ?? "";

// Best-effort module-level cache (survives warm serverless invocations)
let cachedToken: string | null = null;
let tokenExpiresAt = 0;

async function getAccessToken(): Promise<string> {
  const now = Date.now();
  if (cachedToken && tokenExpiresAt - now > 60_000) return cachedToken;

  const res = await fetch(
    `${SUPABASE_URL}/auth/v1/token?grant_type=password`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
      },
      body: JSON.stringify({ email: DEMO_EMAIL, password: DEMO_PASSWORD }),
    }
  );

  if (!res.ok) {
    const err = await res.text().catch(() => "");
    throw new Error(`Supabase sign-in failed (${res.status}): ${err}`);
  }

  const data = await res.json();
  cachedToken = data.access_token as string;
  tokenExpiresAt = now + (data.expires_in as number) * 1000;
  return cachedToken;
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const query = body?.query;

  if (!query || typeof query !== "string") {
    return NextResponse.json({ error: "query required" }, { status: 400 });
  }

  if (!SUPABASE_URL || !DEMO_EMAIL || !DEMO_PASSWORD) {
    return NextResponse.json({ error: "Demo not configured" }, { status: 503 });
  }

  let token: string;
  try {
    token = await getAccessToken();
  } catch (err) {
    console.error("Auth error:", err);
    return NextResponse.json({ error: "Auth failed" }, { status: 503 });
  }

  const upstream = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ data: { query, language: "en" } }),
  });

  if (!upstream.ok) {
    const text = await upstream.text().catch(() => "");
    console.error(`Upstream ${upstream.status}:`, text);
    return NextResponse.json({ error: "Upstream error" }, { status: upstream.status });
  }

  const raw = await upstream.json();
  return NextResponse.json(normalise(raw));
}

type Kind = "media" | "book" | "game";

function parseYear(date: unknown): number | undefined {
  if (typeof date === "string" && date.length >= 4) {
    const y = parseInt(date.slice(0, 4), 10);
    return isNaN(y) ? undefined : y;
  }
}

function normalisePoster(raw: Record<string, unknown>): string | null {
  const posterPath = raw.poster_path as string | undefined;
  const coverUrl = raw.cover_url as string | undefined;
  const thumbnail = (raw.imageLinks as Record<string, string> | undefined)?.thumbnail;
  if (posterPath) return `https://image.tmdb.org/t/p/w300${posterPath}`;
  if (coverUrl) return coverUrl;
  if (thumbnail) return thumbnail;
  return null;
}

function normaliseItem(raw: Record<string, unknown>, kind: Kind) {
  return {
    id:       raw.id,
    title:    (raw.title ?? raw.name ?? "") as string,
    year:     parseYear(raw.release_date ?? raw.publishedDate ?? raw.released),
    overview: (raw.overview ?? raw.description ?? raw.summary ?? "") as string,
    posterUrl: normalisePoster(raw),
    kind,
  };
}

function normalise(raw: Record<string, unknown>) {
  // Upstream wraps the payload in a `result` key
  const envelope = (raw?.result ?? raw) as Record<string, unknown>;
  const searchData = (envelope?.data ?? {}) as Record<string, unknown>;
  const featured = searchData.featured as { type: Kind; item: Record<string, unknown> } | undefined;

  return {
    message: (envelope.message ?? "") as string,
    data: {
      featured: featured ? normaliseItem(featured.item, featured.type) : undefined,
      media:  ((searchData.media  as unknown[]) ?? []).map((m) => normaliseItem(m as Record<string, unknown>, "media")),
      books:  ((searchData.books  as unknown[]) ?? []).map((b) => normaliseItem(b as Record<string, unknown>, "book")),
      games:  ((searchData.games  as unknown[]) ?? []).map((g) => normaliseItem(g as Record<string, unknown>, "game")),
    },
  };
}
