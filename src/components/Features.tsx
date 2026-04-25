"use client";

import { useLanguage } from "./Providers";

const FEATURE_COLORS = [
  { accent: "#930df2", accentLight: "#b060ff" },
  { accent: "#1e88e5", accentLight: "#60c8ff" },
  { accent: "#00897b", accentLight: "#4db6ac" },
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
  const { t } = useLanguage();

  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label={t.features.heading} title={t.features.sub} />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {t.features.items.map((f, i) => {
            const { accent, accentLight } = FEATURE_COLORS[i];
            return (
              <div
                key={f.title}
                className="relative rounded-2xl p-8 bg-[#130f28] border border-white/8 hover:border-white/16 transition-colors overflow-hidden"
              >
                {/* Subtle corner glow */}
                <div
                  className="absolute top-0 left-0 w-40 h-40 rounded-full pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top left, ${accent}22 0%, transparent 70%)`,
                  }}
                />

                <p
                  className="text-xs tracking-[0.3em] uppercase font-semibold mb-2 relative z-10"
                  style={{ color: accentLight }}
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
                        style={{ background: accent }}
                      />
                      {dot}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
