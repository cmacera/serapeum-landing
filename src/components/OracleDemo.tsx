"use client";

import { useState, useRef, useEffect } from "react";
import OracleBars from "./OracleBars";
import { SectionHeader } from "./Features";

interface ResultItem {
  id?: string;
  title: string;
  year?: number;
  overview?: string;
  posterUrl?: string;
  kind?: "media" | "book" | "game";
}

interface Message {
  role: "user" | "oracle";
  text: string;
  items?: ResultItem[];
}

const SUGGESTIONS = [
  "I'm in the mood for a dark psychological thriller",
  "Best sci-fi novels of the last decade",
  "Open-world RPGs with deep storytelling",
  "90s films that shaped modern cinema",
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
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [searching, setSearching] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send(query: string) {
    if (!query.trim() || searching) return;
    const userMsg: Message = { role: "user", text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setSearching(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const json = await res.json();
      const agentResp = json.result ?? json;

      const items: ResultItem[] = [];
      if (agentResp.data) {
        const { featured, media = [], books = [], games = [] } = agentResp.data;
        if (featured) items.push({ ...featured });
        for (const m of media) items.push({ ...m, kind: "media" });
        for (const b of books) items.push({ ...b, kind: "book" });
        for (const g of games) items.push({ ...g, kind: "game" });
      }

      setMessages((prev) => [
        ...prev,
        { role: "oracle", text: agentResp.message ?? "Here are some suggestions.", items },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "oracle", text: "The Oracle is temporarily unavailable. Please try again shortly." },
      ]);
    } finally {
      setSearching(false);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") send(input);
  }

  const isEmpty = messages.length === 0;

  return (
    <section id="demo" className="py-32 px-6 bg-[#0d0820]">
      <div className="max-w-3xl mx-auto">
        <SectionHeader label="Live Demo" title="Ask The Oracle anything" />
        <p className="text-center text-sm text-[#bdbdbd] mt-4 mb-12">
          Search books, films, series, and games with natural language — no login required.
        </p>

        <div
          className="rounded-2xl border border-white/10 bg-[#130f28] overflow-hidden"
          style={{ boxShadow: "0 0 60px 0 rgba(147,13,242,0.08)" }}
        >
          {/* Oracle bars header */}
          <div className="flex items-center justify-center py-6 border-b border-white/5">
            <OracleBars searching={searching} />
          </div>

          {/* Messages */}
          <div className="h-[380px] overflow-y-auto px-6 py-4 space-y-4 scroll-smooth">
            {isEmpty && !searching && (
              <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
                <p className="text-sm text-[#bdbdbd]/50">Try one of these:</p>
                <div className="flex flex-col gap-2 w-full max-w-sm">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="w-full text-left text-sm px-4 py-3 rounded-xl bg-[#1b1735] border border-white/8 text-[#bdbdbd] hover:border-[#930df2]/50 hover:text-white transition-all"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "user" ? (
                  <div
                    className="max-w-[75%] rounded-2xl rounded-br-sm px-4 py-3 text-sm text-white"
                    style={{ background: "linear-gradient(135deg, #930df2, #b060ff)" }}
                  >
                    {msg.text}
                  </div>
                ) : (
                  <div className="max-w-[90%] space-y-3">
                    <div className="rounded-2xl rounded-bl-sm px-4 py-3 text-sm text-[#bdbdbd] bg-[#1b1735] border border-white/8">
                      {msg.text}
                    </div>
                    {msg.items && msg.items.length > 0 && (
                      <div className="flex flex-col gap-2">
                        {msg.items.slice(0, 5).map((item, j) => (
                          <ResultCard key={j} item={item} />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {searching && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 px-4 py-3 rounded-2xl rounded-bl-sm bg-[#1b1735] border border-white/8">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-[#930df2] animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-4 border-t border-white/5">
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
    </section>
  );
}

function ResultCard({ item }: { item: ResultItem }) {
  const color = item.kind ? BADGE_COLORS[item.kind] : "#bdbdbd";
  const label = item.kind ? BADGE_LABELS[item.kind] : "";

  return (
    <div className="flex gap-3 px-3 py-3 rounded-xl bg-[#1b1735] border border-white/8 fade-in-up">
      {item.posterUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.posterUrl}
          alt={item.title}
          className="w-10 h-14 object-cover rounded-md flex-shrink-0"
        />
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          {item.kind && (
            <span
              className="text-[10px] px-1.5 py-0.5 rounded font-semibold"
              style={{ background: color + "22", color }}
            >
              {label}
            </span>
          )}
          {item.year && (
            <span className="text-[10px] text-[#bdbdbd]/50">{item.year}</span>
          )}
        </div>
        <p className="text-sm font-medium text-white truncate">{item.title}</p>
        {item.overview && (
          <p className="text-xs text-[#bdbdbd]/60 leading-relaxed mt-0.5 line-clamp-2">
            {item.overview}
          </p>
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
