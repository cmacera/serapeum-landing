"use client";

import { useState, useEffect } from "react";
import OracleBars from "./OracleBars";
import { SectionHeader } from "./Features";

interface ResultItem {
  id?: string;
  title: string;
  year?: number;
  overview?: string;
  posterUrl?: string | null;
  kind?: "media" | "book" | "game";
}

const ALL_SUGGESTIONS = [
  "I'm in the mood for a dark psychological thriller",
  "Best sci-fi novels of the last decade",
  "Open-world RPGs with deep storytelling",
  "90s films that shaped modern cinema",
  "Animated series for adults with great writing",
  "Books similar to Dune but more accessible",
  "Horror games that rely on atmosphere, not jump scares",
  "Crime dramas set in Scandinavia",
  "Underrated RPGs from the early 2000s",
  "Short novels you can read in a weekend",
  "Strategy games with complex economies",
  "Mind-bending films with unreliable narrators",
  "Action-adventure games with rich lore",
  "Literary fiction set in Latin America",
  "Co-op games to play with a friend online",
  "Classic films everyone should watch once",
];

const LOADING_MESSAGES = [
  "Consulting the ancient scrolls…",
  "Summoning knowledge from the depths…",
  "Searching through endless catalogues…",
  "Weaving through worlds and timelines…",
  "Sifting through centuries of stories…",
  "Awakening the Oracle…",
  "Traversing the library…",
  "Reading between the lines…",
];

const BADGE_COLORS: Record<string, string> = {
  media: "#1e88e5",
  book: "#00897b",
  game: "#ffb300",
};

const BADGE_LABELS: Record<string, string> = {
  media: "Film / TV",
  book: "Book",
  game: "Game",
};

export default function OracleDemo() {
  const [result, setResult] = useState<{ text: string; items: ResultItem[] } | null>(null);
  const [input, setInput] = useState("");
  const [searching, setSearching] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [suggestions] = useState(() =>
    [...ALL_SUGGESTIONS].sort(() => Math.random() - 0.5).slice(0, 4)
  );
  const [loadingMsg, setLoadingMsg] = useState(LOADING_MESSAGES[0]);

  async function send(query: string) {
    if (!query.trim() || searching) return;
    setInput("");
    setSearching(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const json = await res.json();
      const items: ResultItem[] = [];

      if (json.data) {
        const { featured, media = [], books = [], games = [] } = json.data;
        if (featured) items.push(featured);
        items.push(...media, ...books, ...games);
      }

      setResult({ text: json.message ?? "Here are some suggestions.", items });
    } catch {
      setResult({ text: "The Oracle is temporarily unavailable. Please try again shortly.", items: [] });
    } finally {
      setSearching(false);
      setShowModal(true);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") send(input);
  }

  useEffect(() => {
    if (!searching) return;
    setLoadingMsg(LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)]);
    const id = setInterval(() => {
      setLoadingMsg(LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)]);
    }, 3000);
    return () => clearInterval(id);
  }, [searching]);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showModal]);

  function closeModal() {
    setShowModal(false);
    setResult(null);
  }

  return (
    <section id="demo" className="py-32 px-6 bg-[#0d0820]">
      <div className="max-w-3xl mx-auto">
        <SectionHeader label="Live Demo" title="Ask The Oracle anything" />
        <p className="text-center text-sm text-[#bdbdbd] mt-4 mb-12">
          Search books, films, series, and games with natural language — no login required.
        </p>

        {/* Compact card */}
        <div
          className="rounded-2xl border border-white/10 bg-[#130f28] overflow-hidden"
          style={{ boxShadow: "0 0 60px 0 rgba(147,13,242,0.08)" }}
        >
          {/* Oracle bars + loading message */}
          <div className="flex flex-col items-center justify-center py-8 gap-3 border-b border-white/5">
            <OracleBars searching={searching} />
            <p className={`text-xs text-[#bdbdbd]/50 transition-opacity duration-500 ${searching ? "opacity-100 animate-pulse" : "opacity-0"}`}>
              {loadingMsg}
            </p>
          </div>

          {/* Suggestions 2×2 */}
          <div className="grid grid-cols-2 gap-2 p-4">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                disabled={searching}
                className="text-left text-xs sm:text-sm px-3 py-3 rounded-xl bg-[#1b1735] border border-white/8 text-[#bdbdbd] hover:border-[#930df2]/50 hover:text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed leading-snug"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="px-4 pb-4">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1b1735] border border-white/10 focus-within:border-[#930df2]/60 transition-colors">
              <input
                className="flex-1 bg-transparent text-sm text-white placeholder-[#bdbdbd]/40 outline-none"
                placeholder="Ask for recommendations…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                disabled={searching}
              />
              <button
                onClick={() => send(input)}
                disabled={searching || !input.trim()}
                className="text-[#930df2] hover:text-[#b060ff] disabled:opacity-30 transition-colors"
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Result modal */}
      {showModal && result && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6"
          style={{ background: "rgba(7,4,20,0.8)", backdropFilter: "blur(6px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div
            className="relative w-full sm:max-w-2xl bg-[#130f28] border border-white/10 rounded-t-2xl sm:rounded-2xl flex flex-col"
            style={{ maxHeight: "85vh", boxShadow: "0 0 80px 0 rgba(147,13,242,0.18)" }}
          >
            {/* Modal header */}
            <div className="flex items-center justify-end px-5 py-3 border-b border-white/8 flex-shrink-0">
              <button
                onClick={closeModal}
                className="text-[#bdbdbd] hover:text-white transition-colors"
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="overflow-y-auto px-5 py-5 space-y-4">
              <p className="text-sm text-[#bdbdbd] leading-relaxed">{result.text}</p>

              {result.items.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {result.items.slice(0, 6).map((item, i) => (
                    <ResultCard key={i} item={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ResultCard({ item }: { item: ResultItem }) {
  const color = item.kind ? BADGE_COLORS[item.kind] : "#bdbdbd";
  const label = item.kind ? BADGE_LABELS[item.kind] : "";

  return (
    <div className="flex flex-col rounded-xl bg-[#1b1735] border border-white/8 overflow-hidden fade-in-up">
      <div className="relative w-full aspect-[2/3] bg-[#0d0820]">
        {item.posterUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.posterUrl} alt={item.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-2xl opacity-20">🎬</span>
          </div>
        )}
        {item.kind && (
          <span
            className="absolute top-1.5 left-1.5 text-[9px] px-1.5 py-0.5 rounded font-bold"
            style={{ background: color + "dd", color: "#fff" }}
          >
            {label}
          </span>
        )}
      </div>
      <div className="px-2 py-2">
        <p className="text-xs font-semibold text-white leading-snug line-clamp-2">{item.title}</p>
        {item.year && (
          <p className="text-[10px] text-[#bdbdbd]/50 mt-0.5">{item.year}</p>
        )}
      </div>
    </div>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
