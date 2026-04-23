"use client";

// Heights and widths match the Flutter OracleLinesAnimation exactly:
// _heightFactors: [0.82, 1.0, 0.88], _lineWidths: [10, 12, 10], _lineSpacing: 34px
const BASE_H = 200; // approx 22.5% of a 900px screen
const bars = [
  { h: BASE_H * 0.82, w: 10 },
  { h: BASE_H * 1.00, w: 12 },
  { h: BASE_H * 0.88, w: 10 },
];

export default function OracleBars({ searching }: { searching: boolean }) {
  return (
    <div className="flex items-center justify-center gap-[34px]" style={{ height: BASE_H + 60 }}>
      {bars.map((bar, i) => (
        <div
          key={i}
          className={searching ? "oracle-bar-searching" : "oracle-bar-idle"}
          style={{
            width: bar.w,
            height: bar.h,
            borderRadius: 3,
            willChange: "transform, box-shadow",
          }}
        />
      ))}
    </div>
  );
}
