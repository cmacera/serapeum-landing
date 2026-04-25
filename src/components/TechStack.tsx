"use client";

import { SectionHeader } from "./Features";
import { useLanguage } from "./Providers";

const CATEGORY_COLORS = ["#930df2", "#1e88e5", "#00897b", "#ffb300"];

export default function TechStack() {
  const { t } = useLanguage();

  return (
    <section id="stack" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label={t.techStack.heading} title={t.techStack.sub} />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.techStack.categories.map((group, i) => (
            <div key={group.category}>
              <p
                className="text-xs tracking-[0.3em] uppercase font-bold mb-4"
                style={{ color: CATEGORY_COLORS[i] }}
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
