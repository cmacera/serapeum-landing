"use client";

import { SectionHeader } from "./Features";
import { useLanguage } from "./Providers";

export default function Context() {
  const { lang, t } = useLanguage();

  return (
    <section id="context" className="py-32 px-6 bg-[#0d0820]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label={t.context.heading} title={t.context.sub} />

        <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-10">
          {/* Problems column */}
          <div className="space-y-4">
            <p className="text-xs tracking-[0.4em] uppercase text-[#bdbdbd] mb-6">
              {lang === "es" ? "Hoy" : "Today"}
            </p>
            {t.context.problems.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 border border-white/8 bg-white/[0.02]"
              >
                <div className="flex items-start gap-4">
                  <span
                    className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: "rgba(255,80,80,0.12)", color: "#ff5050" }}
                  >
                    ✕
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                    <p className="text-sm text-[#bdbdbd] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Solutions column */}
          <div className="space-y-4">
            <p className="text-xs tracking-[0.4em] uppercase text-[#bdbdbd] mb-6">
              {lang === "es" ? "Con Serapeum" : "With Serapeum"}
            </p>
            {t.context.solutions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 border border-[#930df2]/20 bg-[#930df2]/[0.04]"
              >
                <div className="flex items-start gap-4">
                  <span
                    className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: "rgba(147,13,242,0.2)", color: "#b060ff" }}
                  >
                    ✓
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                    <p className="text-sm text-[#bdbdbd] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
