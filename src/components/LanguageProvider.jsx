"use client";

import { copy } from "@/data/site";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-language");
    if (stored !== "id" && stored !== "en") return;
    setLanguage(stored);
    // Keep the document language in sync with the visible copy: without this the
    // stored Indonesian page still announces itself as English.
    document.documentElement.lang = stored;
  }, []);

  const value = useMemo(() => ({
    language,
    text: copy[language],
    toggleLanguage: () => {
      const next = language === "en" ? "id" : "en";
      setLanguage(next);
      window.localStorage.setItem("portfolio-language", next);
      document.documentElement.lang = next;
    },
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function localize(value, language) {
  if (value && typeof value === "object" && value.en && value.id) return value[language];
  return value;
}
