"use client";

import { SectionHeader } from "./Features";
import { useLanguage } from "./Providers";

const LAYER_COLORS = ["#930df2", "#1e88e5", "#00897b", "#ffb300"];

export default function Architecture() {
  const { t } = useLanguage();

  return (
    <section id="architecture" className="py-32 px-6 bg-[#130f28]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label={t.architecture.heading} title={t.architecture.sub} />

        {/* Layer diagram */}
        <div className="mt-16 grid md:grid-cols-4 gap-4">
          {t.architecture.layers.map((layer, i) => (
            <div
              key={layer.label}
              className="rounded-2xl p-6 bg-[#0d0820] border border-white/8 hover:border-white/16 transition-colors"
            >
              <p
                className="text-xs tracking-[0.3em] uppercase font-bold mb-4"
                style={{ color: LAYER_COLORS[i] }}
              >
                {layer.label}
              </p>
              <ul className="space-y-2.5">
                {layer.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#bdbdbd]">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: LAYER_COLORS[i] }}
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
            {t.architecture.pipelineTitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {t.architecture.flow.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="text-sm px-4 py-2 rounded-lg bg-[#0d0820] border border-white/8 text-[#bdbdbd]">
                  {step}
                </span>
                {i < t.architecture.flow.length - 1 && (
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
