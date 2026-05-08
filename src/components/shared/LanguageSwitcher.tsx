"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { Locale } from "@/lib/translations";

export default function LanguageSwitcher({ theme = "dark" }: { theme?: "light" | "dark" }) {
  const { locale, setLocale } = useLocale();
  const isLight = theme === "light";

  const langs: { code: Locale; label: string; flag: string }[] = [
    { code: "az", label: "AZ", flag: "🇦🇿" },
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "ru", label: "RU", flag: "🇷🇺" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="fixed top-6 right-6 z-50 flex items-center gap-1 p-1.5 rounded-full backdrop-blur-xl"
      style={{
        background: isLight ? "rgba(255,255,255,0.85)" : "rgba(10,11,30,0.7)",
        border: isLight ? "1px solid rgba(99,1" : "1px solid rgba(255,255,255,0.1)",
        boxShadow: isLight ? "0 8px 24px rgba(99,102,241,0.12)" : "0 8px 24px rgba(0,0,0,0.3)",
      }}
    >
      {langs.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-3 py-1.5 rounded-full text-xs font-bold tracking-wider transition-colors"
          style={{
            color: locale === lang.code ? "#ffffff" : isLight ? "#64748b" : "rgba(255,255,255,0.6)",
          }}
        >
          {locale === lang.code && (
            <motion.div
              layoutId="active-lang"
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent"
              transition={{ type: "spring", duration: 0.5 }}
              style={{ boxShadow: "0 4px 12px rgba(99,102,241,0.4)" }}
            />
          )}
          <span className="relative flex items-center gap-1.5">
            <span className="text-sm">{lang.flag}</span>
            {lang.label}
          </span>
        </motion.button>
      ))}
    </motion.div>
  );
}
