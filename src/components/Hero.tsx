"use client";

import dynamic from "next/dynamic";
import OracleBars from "./OracleBars";
import { useLanguage } from "./Providers";

const ParticleBackground = dynamic(() => import("./ParticleBackground"), { ssr: false });

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <ParticleBackground />

      {/* Radial violet glow behind Oracle */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(147,13,242,0.18) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Oracle animation */}
      <div className="relative z-10 mb-10">
        <OracleBars searching={false} />
      </div>

      {/* Text content */}
      <div className="relative z-10 text-center max-w-3xl">
        <p className="text-xs tracking-[0.4em] uppercase text-[#bdbdbd] mb-4">
          {t.hero.eyebrow}
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 uppercase tracking-widest">
          Serapeum
        </h1>

        <p className="text-base md:text-lg text-[#bdbdbd] max-w-xl mx-auto leading-relaxed mb-10">
          {t.hero.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#demo"
            className="px-8 py-3 rounded-lg font-semibold text-sm text-white transition-all"
            style={{ background: "linear-gradient(135deg, #930df2, #b060ff)" }}
          >
            {t.hero.ctaOracle}
          </a>
          <a
            href="#download"
            className="px-8 py-3 rounded-lg border border-white/20 text-[#bdbdbd] font-semibold text-sm hover:border-white/40 hover:text-white transition-all"
          >
            {t.hero.ctaDownload}
          </a>
        </div>
      </div>

      {/* Platform badges */}
      <div className="relative z-10 mt-16 flex items-center gap-5 text-xs text-[#bdbdbd]/50 tracking-wider uppercase">
        <span>macOS</span>
        <span className="w-1 h-1 rounded-full bg-white/20" />
        <span>Android</span>
        <span className="w-1 h-1 rounded-full bg-white/20" />
        <span>iOS</span>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0d0820] to-transparent pointer-events-none" />
    </section>
  );
}
