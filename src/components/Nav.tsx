"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "./Providers";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, t, toggle } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
        scrolled ? "bg-[#0d0820]/90 backdrop-blur-md border-b border-white/5" : ""
      }`}
    >
      <span className="text-base font-bold tracking-[0.15em] text-white uppercase">
        Serapeum
      </span>

      <div className="hidden md:flex items-center gap-8 text-sm text-[#bdbdbd]">
        <a href="#features" className="hover:text-white transition-colors">{t.nav.features}</a>
        <a href="#demo" className="hover:text-white transition-colors">{t.nav.tryOracle}</a>
        <a href="#architecture" className="hover:text-white transition-colors">{t.nav.architecture}</a>
        <a href="#download" className="hover:text-white transition-colors">{t.nav.download}</a>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggle}
          className="flex items-center border border-white/20 rounded-full px-3 py-1 text-sm hover:border-white/40 transition-colors"
          aria-label="Toggle language"
        >
          <span className={lang === "es" ? "text-[#930df2] font-semibold" : "text-white/40"}>ES</span>
          <span className="text-white/20 mx-1.5">|</span>
          <span className={lang === "en" ? "text-[#930df2] font-semibold" : "text-white/40"}>EN</span>
        </button>
      </div>
    </nav>
  );
}
