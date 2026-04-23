import { SectionHeader } from "./Features";

const layers = [
  {
    label: "Client",
    color: "#930df2",
    items: [
      "Flutter (macOS · Android · iOS)",
      "Riverpod state management",
      "GoRouter navigation",
      "Realm — offline-first local DB",
    ],
  },
  {
    label: "API Orchestrator",
    color: "#1e88e5",
    items: [
      "Genkit Flows (Node.js/TS)",
      "JWT Auth Middleware",
      "Multi-step AI pipeline",
      "Zod schema validation",
    ],
  },
  {
    label: "AI & External APIs",
    color: "#00897b",
    items: [
      "Multi-provider LLM routing",
      "TMDB — Movies & TV",
      "Google Books",
      "IGDB — Video Games",
    ],
  },
  {
    label: "Cloud Infrastructure",
    color: "#ffb300",
    items: [
      "Supabase Auth (JWT)",
      "Supabase Storage (Backup)",
      "Vercel (API Deployment)",
      "Sentry (Observability)",
    ],
  },
];

const flow = [
  "User query",
  "routerPrompt",
  "extractorPrompt",
  "Catalog Tools",
  "synthesizerPrompt",
  "Response",
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-32 px-6 bg-[#141414]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Architecture" title="Local-first meets cloud intelligence" />

        {/* Layer diagram */}
        <div className="mt-16 grid md:grid-cols-4 gap-4">
          {layers.map((layer) => (
            <div
              key={layer.label}
              className="rounded-2xl p-6 bg-[#0d0d0d] border border-white/8 hover:border-white/16 transition-colors"
            >
              <p
                className="text-xs tracking-[0.3em] uppercase font-bold mb-4"
                style={{ color: layer.color }}
              >
                {layer.label}
              </p>
              <ul className="space-y-2.5">
                {layer.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#bdbdbd]">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: layer.color }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Oracle pipeline flow */}
        <div className="mt-16">
          <p className="text-center text-xs tracking-[0.3em] uppercase text-[#bdbdbd] mb-8">
            Oracle Pipeline
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {flow.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="text-sm px-4 py-2 rounded-lg bg-[#0d0d0d] border border-white/8 text-[#bdbdbd]">
                  {step}
                </span>
                {i < flow.length - 1 && (
                  <span className="text-[#930df2] text-lg select-none">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
