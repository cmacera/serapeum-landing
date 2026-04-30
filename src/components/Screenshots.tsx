"use client";

import Image from "next/image";
import { SectionHeader } from "./Features";
import { useLanguage } from "./Providers";

const MOBILE_SHOTS = [
  { src: "/screenshots/mobile-1.png", alt: "Serapeum — Oracle query" },
  { src: "/screenshots/mobile-2.png", alt: "Serapeum — Library view" },
  { src: "/screenshots/mobile-3.png", alt: "Serapeum — Detail view" },
];

// Vertical stagger for depth effect
const IPHONE_SHIFTS = ["translate-y-10", "translate-y-0", "translate-y-6"];

function IPhoneFrame({ src, alt, shift }: { src: string; alt: string; shift: string }) {
  return (
    <div className={`relative flex-shrink-0 ${shift}`} style={{ width: "210px" }}>
      {/* Device body */}
      <div
        style={{
          borderRadius: "1.75rem",
          padding: "10px",
          background: "linear-gradient(145deg, #2e2a45, #1e1b32)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.1), 0 40px 80px rgba(0,0,0,0.8), 0 0 60px rgba(147,13,242,0.18)",
          position: "relative",
        }}
      >
        {/* Left buttons: volume up/down */}
        <div
          style={{
            position: "absolute",
            left: "-3px",
            top: "96px",
            width: "3px",
            height: "28px",
            borderRadius: "2px 0 0 2px",
            background: "#28243c",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "-3px",
            top: "136px",
            width: "3px",
            height: "28px",
            borderRadius: "2px 0 0 2px",
            background: "#28243c",
          }}
        />
        {/* Right button: power */}
        <div
          style={{
            position: "absolute",
            right: "-3px",
            top: "110px",
            width: "3px",
            height: "48px",
            borderRadius: "0 2px 2px 0",
            background: "#28243c",
          }}
        />

        {/* Screen */}
        <div
          className="relative overflow-hidden"
          style={{ borderRadius: "1.25rem", aspectRatio: "9 / 19.5", background: "#000" }}
        >
          {/* Screen reflection */}
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%)",
            }}
          />
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: "cover" }}
            quality={90}
            sizes="210px"
          />
        </div>

      </div>
    </div>
  );
}

function MacBookFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full" style={{ maxWidth: "640px" }}>
      {/* Lid */}
      <div
        style={{
          borderRadius: "14px 14px 4px 4px",
          padding: "16px 14px 10px",
          background: "linear-gradient(160deg, #2a263f, #1c1930)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.1), 0 0 50px rgba(147,13,242,0.12), 0 50px 100px rgba(0,0,0,0.8)",
          position: "relative",
        }}
      >
        {/* Camera dot */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: "8px",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#38345a",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
          }}
        />

        {/* Screen */}
        <div
          className="relative overflow-hidden"
          style={{ borderRadius: "4px", aspectRatio: "16 / 10", background: "#000" }}
        >
          {/* Screen reflection */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 40%)",
            }}
          />
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: "cover" }}
            quality={90}
            sizes="(max-width: 768px) 90vw, 640px"
          />
        </div>
      </div>

      {/* Hinge */}
      <div
        style={{
          height: "6px",
          background: "linear-gradient(to bottom, #28243c, #1e1b2e)",
          boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.5)",
        }}
      />

      {/* Base / palm rest */}
      <div
        style={{
          width: "108%",
          marginLeft: "-4%",
          height: "22px",
          background: "linear-gradient(to bottom, #222035, #1a182a)",
          borderRadius: "0 0 10px 10px",
          boxShadow: "0 12px 30px rgba(0,0,0,0.9)",
          position: "relative",
        }}
      >
        {/* Trackpad hint */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-2"
          style={{
            width: "80px",
            height: "3px",
            borderRadius: "2px",
            background: "rgba(255,255,255,0.06)",
          }}
        />
      </div>

      {/* Foot */}
      <div
        className="mx-auto"
        style={{
          width: "85%",
          height: "3px",
          background: "#14121e",
          borderRadius: "0 0 4px 4px",
        }}
      />
    </div>
  );
}

export default function Screenshots() {
  const { t } = useLanguage();

  return (
    <section id="screenshots" className="py-32 px-6 bg-[var(--color-surface2)]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label={t.screenshots.heading} title={t.screenshots.sub} />

        <div className="mt-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-20 justify-center">
          {/* iPhone group */}
          <div className="flex gap-5 items-end justify-center flex-shrink-0">
            {MOBILE_SHOTS.map((s, i) => (
              <IPhoneFrame key={s.src} src={s.src} alt={s.alt} shift={IPHONE_SHIFTS[i]} />
            ))}
          </div>

          {/* MacBook */}
          <div className="w-full flex-1 flex justify-center lg:justify-start">
            <MacBookFrame src="/screenshots/desktop-1.png" alt="Serapeum app — Desktop view" />
          </div>
        </div>
      </div>
    </section>
  );
}
