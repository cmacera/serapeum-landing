export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-bold tracking-[0.15em] uppercase text-white mb-1">
            Serapeum
          </p>
          <p className="text-xs text-[#bdbdbd]/40">
            Master&apos;s Final Project · Carlos Martín · {year}
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-[#bdbdbd]/40">
          <a
            href="https://github.com/cmacera/serapeum-app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#bdbdbd] transition-colors"
          >
            App Repo
          </a>
          <span>·</span>
          <a
            href="https://github.com/cmacera/serapeum-api"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#bdbdbd] transition-colors"
          >
            API Repo
          </a>
          <span>·</span>
          <a
            href="https://api.serapeum.app/health"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#bdbdbd] transition-colors"
          >
            API Status
          </a>
        </div>
      </div>
    </footer>
  );
}
