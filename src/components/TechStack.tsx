import { SectionHeader } from "./Features";

const stack = [
  {
    category: "Client",
    color: "#930df2",
    items: [
      { name: "Flutter", role: "Multi-platform UI framework (macOS, Android, iOS)" },
      { name: "Riverpod", role: "Reactive state management with code generation" },
      { name: "Realm", role: "Offline-first embedded database with live queries" },
      { name: "GoRouter", role: "Declarative URL-based navigation" },
    ],
  },
  {
    category: "API & AI",
    color: "#1e88e5",
    items: [
      { name: "Genkit", role: "AI flow orchestration and multi-step pipelines" },
      { name: "Node.js 22", role: "TypeScript-strict API runtime on Vercel serverless" },
      { name: "Zod", role: "Runtime schema validation — single source of truth for types" },
      { name: "Langfuse", role: "AI observability and response quality tracking" },
    ],
  },
  {
    category: "Cloud",
    color: "#00897b",
    items: [
      { name: "Supabase", role: "Auth (JWT tokens) + Storage (library backups)" },
      { name: "Vercel", role: "Serverless API deployment with edge network" },
      { name: "Sentry", role: "Crash reporting across Flutter and Node.js" },
    ],
  },
  {
    category: "External APIs",
    color: "#ffb300",
    items: [
      { name: "TMDB", role: "Movies and TV shows catalogue" },
      { name: "Google Books", role: "Books catalogue and metadata" },
      { name: "IGDB", role: "Video games catalogue (Twitch)" },
      { name: "Tavily", role: "Web search for entity extraction" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Tech Stack" title="Built on modern, production-grade tooling" />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((group) => (
            <div key={group.category}>
              <p
                className="text-xs tracking-[0.3em] uppercase font-bold mb-4"
                style={{ color: group.color }}
              >
                {group.category}
              </p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.name} className="rounded-xl p-4 bg-[#130f28] border border-white/8 hover:border-white/16 transition-colors">
                    <p className="text-sm font-semibold text-white mb-1">{item.name}</p>
                    <p className="text-xs text-[#bdbdbd]/70 leading-relaxed">{item.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
