"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { translations, Locale, TranslationKeys } from "@/lib/translations";

interface LocaleContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: TranslationKeys;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("az");
  const t = translations[locale];

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
