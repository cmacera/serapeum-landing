import { SectionHeader } from "./Features";

const RELEASE_URL = "https://github.com/cmacera/serapeum-app/releases/latest";

const platforms = [
  {
    name: "Android",
    label: "APK",
    description:
      "Download the APK and install directly on any Android device. Enable 'Install from unknown sources' in Settings → Security before installing.",
    available: true,
    color: "#930df2",
  },
  {
    name: "macOS",
    label: "DMG",
    description:
      "Open the DMG, drag Serapeum to your Applications folder. On first launch, right-click → Open to bypass Gatekeeper (unsigned build).",
    available: true,
    color: "#930df2",
  },
  {
    name: "iOS",
    label: "Coming Soon",
    description:
      "iOS distribution requires an Apple Developer membership. A TestFlight build is planned for a future release.",
    available: false,
    color: "#bdbdbd",
  },
];

export default function Download() {
  return (
    <section id="download" className="py-32 px-6 bg-[#130f28]">
      <div className="max-w-4xl mx-auto">
        <SectionHeader label="Download" title="Run Serapeum on your device" />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {platforms.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 flex flex-col bg-[#0d0820] border transition-colors ${
                p.available ? "border-white/10 hover:border-[#930df2]/40" : "border-white/5 opacity-50"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">{p.name}</h3>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-semibold"
                  style={{
                    background: p.available ? "#930df222" : "#ffffff11",
                    color: p.available ? "#b060ff" : "#bdbdbd",
                  }}
                >
                  {p.label}
                </span>
              </div>

              <p className="text-sm text-[#bdbdbd] leading-relaxed flex-1 mb-6">
                {p.description}
              </p>

              {p.available ? (
                <a
                  href={RELEASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all"
                  style={{ background: "linear-gradient(135deg, #930df2, #b060ff)" }}
                >
                  Download
                </a>
              ) : (
                <span className="block text-center px-6 py-3 rounded-xl border border-white/8 text-[#bdbdbd]/40 text-sm cursor-not-allowed">
                  Not yet available
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Source code links */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/cmacera/serapeum-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-3 rounded-xl border border-white/10 text-[#bdbdbd] text-sm hover:border-white/25 hover:text-white transition-all"
          >
            Flutter App — GitHub
          </a>
          <a
            href="https://github.com/cmacera/serapeum-api"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-3 rounded-xl border border-white/10 text-[#bdbdbd] text-sm hover:border-white/25 hover:text-white transition-all"
          >
            Genkit API — GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
