"use client";

import { SectionHeader } from "./Features";
import { useLanguage } from "./Providers";

const CATEGORY_COLORS = ["#930df2", "#1e88e5", "#00897b", "#ffb300"];

interface IconEntry {
  src: string;
  filter: string;
}

// filter values:
//   "brightness(0) invert(1)"  — transparent/dark icon → white
//   "invert(1)"                — white-bg icon → bg inverts to black, logo stays visible
//   "none"                     — already correct as-is
const TECH_ICONS: Record<string, IconEntry> = {
  "Flutter": { src: "/icons/flutter.png", filter: "none" },
  "Riverpod": { src: "/icons/riverpod.png", filter: "none" },
  "Realm": { src: "/icons/realm.png", filter: "none" },
  "GoRouter": { src: "/icons/goRouter.png", filter: "none" },
  "Node.js 22": { src: "/icons/nodedotjs.svg", filter: "none" },
  "Genkit": { src: "/icons/genkit.png", filter: "brightness(0) invert(1)" },
  "Zod": { src: "/icons/zod.webp", filter: "none" },
  "Langfuse": { src: "/icons/langfuse-icon.svg", filter: "none" },
  "Supabase": { src: "/icons/supabase.svg", filter: "none" },
  "Vercel": { src: "/icons/vercel.png", filter: "none" },
  "Sentry": { src: "/icons/sentry.svg", filter: "brightness(0) invert(1)" },
  "Google Books": { src: "/icons/google.svg", filter: "brightness(0) invert(1)" },
  "IGDB": { src: "/icons/igdb.svg", filter: "brightness(0) invert(1) sepia(1) saturate(8) hue-rotate(245deg)" },
  "Tavily": { src: "/icons/tavily.webp", filter: "none" },
  "TMDB": { src: "/icons/tmdb.png", filter: "none" },
};

function TechIcon({ name, accentColor }: { name: string; accentColor: string }) {
  const icon = TECH_ICONS[name];

  if (icon) {
    return (
      <div
        className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={icon.src}
          alt={name}
          width={22}
          height={22}
          style={{ filter: icon.filter, opacity: 0.85 }}
        />
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 text-xs font-bold"
      style={{ background: `${accentColor}22`, color: accentColor }}
    >
      {name.charAt(0)}
    </div>
  );
}

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
                className="text-xs tracking-[0.3em] uppercase font-bold mb-4 text-center"
                style={{ color: CATEGORY_COLORS[i] }}
              >
                {group.category}
              </p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start gap-3 rounded-xl p-4 bg-[#130f28] border border-white/8 hover:border-white/16 transition-colors"
                  >
                    <TechIcon name={item.name} accentColor={CATEGORY_COLORS[i]} />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white mb-0.5">{item.name}</p>
                      <p className="text-xs text-[#bdbdbd]/70 leading-relaxed">{item.role}</p>
                    </div>
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
