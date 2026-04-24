const features = [
  {
    title: "The Oracle",
    subtitle: "AI Discovery",
    description:
      "Describe what you're looking for in your own words. The Oracle understands intent, searches multiple catalogues simultaneously — books, films, series, and video games — and synthesises a rich, curated response. No keywords, no filters: just a conversation.",
    accent: "#930df2",
    accentLight: "#b060ff",
    dots: ["Natural language queries", "Parallel multi-catalogue search", "Curated AI responses"],
  },
  {
    title: "My Vault",
    subtitle: "Offline-First Library",
    description:
      "Your personal collection lives on-device and stays fully functional without internet. Add anything you discover, organise it with statuses and categories, and browse it instantly. The library is reactive: changes appear in real time across all views.",
    accent: "#1e88e5",
    accentLight: "#60c8ff",
    dots: ["Works 100% offline", "Real-time reactive updates", "Statuses, notes, categories"],
  },
  {
    title: "Cloud Backup",
    subtitle: "Secure Synchronisation",
    description:
      "Your entire Vault can be backed up to the cloud with a single tap and restored on any device. Backups are stored privately in your account — no shared databases, no third-party access. Everything you've catalogued travels with you.",
    accent: "#00897b",
    accentLight: "#4db6ac",
    dots: ["One-tap backup & restore", "Private per-user storage", "Cross-device continuity"],
  },
];

export function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-xs tracking-[0.4em] uppercase text-[#bdbdbd] mb-3">{label}</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
      <div className="mt-5 w-12 h-0.5 mx-auto" style={{ background: "#930df2" }} />
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Core Features" title="Three pillars of knowledge management" />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="relative rounded-2xl p-8 bg-[#130f28] border border-white/8 hover:border-white/16 transition-colors overflow-hidden"
            >
              {/* Subtle corner glow */}
              <div
                className="absolute top-0 left-0 w-40 h-40 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top left, ${f.accent}22 0%, transparent 70%)`,
                }}
              />

              <p
                className="text-xs tracking-[0.3em] uppercase font-semibold mb-2 relative z-10"
                style={{ color: f.accentLight }}
              >
                {f.subtitle}
              </p>
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">{f.title}</h3>
              <p className="text-sm text-[#bdbdbd] leading-relaxed mb-6 relative z-10">
                {f.description}
              </p>
              <ul className="space-y-2 relative z-10">
                {f.dots.map((dot) => (
                  <li key={dot} className="flex items-center gap-2 text-sm text-[#bdbdbd]/70">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: f.accent }}
                    />
                    {dot}
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
