"use client";

import { createContext, useContext, useState } from "react";
import { translations, type Language, type Translations } from "@/i18n/translations";

const LanguageContext = createContext<{
  lang: Language;
  t: Translations;
  toggle: () => void;
}>({ lang: "es", t: translations.es, toggle: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("es");
  const toggle = () => setLang((l) => (l === "es" ? "en" : "es"));
  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang] as Translations, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
