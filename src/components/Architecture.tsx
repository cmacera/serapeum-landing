"use client";

import { SectionHeader } from "./Features";
import { useLanguage } from "./Providers";

const LAYER_COLORS = ["#930df2", "#1e88e5", "#00897b", "#ffb300"];

type LaneKey = "outOfScope" | "discovery" | "specific" | "factual";

const LANE_COLORS: Record<LaneKey, string> = {
  outOfScope: "#b05050",
  discovery: "#1e88e5",
  specific: "#930df2",
  factual: "#00897b",
};

// Which categories participate in each pipeline step (by index)
const STEP_LANES: Record<number, LaneKey[]> = {
  0: [],
  1: ["discovery", "specific", "factual", "outOfScope"],
  2: ["discovery"],
  3: ["discovery"],
  4: ["discovery", "specific", "factual"],
  5: ["discovery", "specific", "factual"],
  6: ["specific", "factual"],
  7: ["discovery", "specific", "factual", "outOfScope"],
  8: ["discovery", "specific", "factual", "outOfScope"],
};

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
              <p className="text-xs tracking-[0.3em] uppercase font-bold mb-4" style={{ color: LAYER_COLORS[i] }}>
                {layer.label}
              </p>
              <ul className="space-y-2.5">
                {layer.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#bdbdbd]">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: LAYER_COLORS[i] }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Oracle pipeline — vertical stepper with category chips */}
        <div className="mt-20">
          <p className="text-center text-xs tracking-[0.3em] uppercase text-[#bdbdbd] mb-10">
            {t.architecture.pipelineTitle}
          </p>

          <div className="relative max-w-2xl mx-auto">
            {t.architecture.pipelineSteps.map((step, i) => {
              const lanes = STEP_LANES[i] ?? [];
              return (
                <div key={step.name} className="relative flex gap-5 pb-6 last:pb-0">
                  {/* Vertical connector line */}
                  {i < t.architecture.pipelineSteps.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-px bg-white/8" />
                  )}

                  {/* Step number */}
                  <div
                    className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: "#930df215", color: "#930df2", border: "1px solid #930df230" }}
                  >
                    {i + 1}
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-xl p-4 bg-[#0d0820] border border-white/8 mb-1">
                    {/* Title + category chips */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <p className="text-sm font-semibold text-white">{step.name}</p>
                      {lanes.map((lane) => (
                        <span
                          key={lane}
                          className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                          style={{
                            background: `${LANE_COLORS[lane]}18`,
                            color: LANE_COLORS[lane],
                            border: `1px solid ${LANE_COLORS[lane]}40`,
                          }}
                        >
                          {t.architecture.branchLabels[lane]}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-[#bdbdbd] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
