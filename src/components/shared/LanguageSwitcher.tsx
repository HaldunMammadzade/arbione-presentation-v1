"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { Locale } from "@/lib/translations";

const AzerbaijanFlag = () => (
  <svg viewBox="0 0 60 36" className="block w-full h-full" aria-label="AZ">
    <defs>
      <linearGradient id="azBlue" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#00C3EE"/>
        <stop offset="100%" stopColor="#0092C9"/>
      </linearGradient>
      <linearGradient id="azRed" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F04150"/>
        <stop offset="100%" stopColor="#D62030"/>
      </linearGradient>
      <linearGradient id="azGreen" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#5AA838"/>
        <stop offset="100%" stopColor="#3E7D24"/>
      </linearGradient>
      <linearGradient id="azEmblem" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FFFFFF"/>
        <stop offset="100%" stopColor="#E8E2FF"/>
      </linearGradient>
      <linearGradient id="azGloss" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.28"/>
        <stop offset="45%" stopColor="#fff" stopOpacity="0"/>
        <stop offset="100%" stopColor="#000" stopOpacity="0.14"/>
      </linearGradient>
    </defs>
    <rect width="60" height="12" fill="url(#azBlue)"/>
    <rect y="12" width="60" height="12" fill="url(#azRed)"/>
    <rect y="24" width="60" height="12" fill="url(#azGreen)"/>
    <g transform="translate(27,18)">
      <circle cx="0" cy="0" r="5.5" fill="url(#azEmblem)"/>
      <circle cx="3" cy="0" r="5.5" fill="url(#azRed)"/>
      <path d="M8.5,-4 L10.4,-1.9 L13.5,0 L10.4,1.9 L8.5,4 L6.6,1.9 L3.5,0 L6.6,-1.9 Z" fill="url(#azEmblem)"/>
    </g>
    <rect width="60" height="36" fill="url(#azGloss)"/>
  </svg>
);

const UKFlag = () => (
  <svg viewBox="0 0 60 36" className="block w-full h-full" aria-label="EN">
    <defs>
      <linearGradient id="ukBlue" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#012B7D"/>
        <stop offset="100%" stopColor="#001B5A"/>
      </linearGradient>
      <linearGradient id="ukRed" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#E3123A"/>
        <stop offset="100%" stopColor="#A50C24"/>
      </linearGradient>
      <linearGradient id="ukGloss" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.24"/>
        <stop offset="45%" stopColor="#fff" stopOpacity="0"/>
        <stop offset="100%" stopColor="#000" stopOpacity="0.16"/>
      </linearGradient>
    </defs>
    <rect width="60" height="36" fill="url(#ukBlue)"/>
    <path d="M-12,-12 72,48 M72,-12 -12,48" stroke="#fff" strokeWidth="8" fill="none"/>
    <path d="M-12,-12 72,48 M72,-12 -12,48" stroke="url(#ukRed)" strokeWidth="4" fill="none"/>
    <path d="M-4,-12 64,48 M64,-12 -4,48" stroke="#fff" strokeWidth="8" fill="none"/>
    <path d="M-4,-12 64,48 M64,-12 -4,48" stroke="url(#ukRed)" strokeWidth="4" fill="none"/>
    <path d="M30,-12 30,48 M-12,18 72,18" stroke="#fff" strokeWidth="16" fill="none"/>
    <path d="M30,-12 30,48 M-12,18 72,18" stroke="url(#ukRed)" strokeWidth="8" fill="none"/>
    <rect width="60" height="36" fill="url(#ukGloss)"/>
  </svg>
);

const RussiaFlag = () => (
  <svg viewBox="0 0 60 36" className="block w-full h-full" aria-label="RU">
    <defs>
      <linearGradient id="ruWhite" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFFFFF"/>
        <stop offset="100%" stopColor="#E8E8E8"/>
      </linearGradient>
      <linearGradient id="ruBlue" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0047B3"/>
        <stop offset="100%" stopColor="#00339A"/>
      </linearGradient>
      <linearGradient id="ruRed" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#E03A28"/>
        <stop offset="100%" stopColor="#C22A1A"/>
      </linearGradient>
      <linearGradient id="ruGloss" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.24"/>
        <stop offset="45%" stopColor="#fff" stopOpacity="0"/>
        <stop offset="100%" stopColor="#000" stopOpacity="0.16"/>
      </linearGradient>
    </defs>
    <rect width="60" height="12" fill="url(#ruWhite)"/>
    <rect y="12" width="60" height="12" fill="url(#ruBlue)"/>
    <rect y="24" width="60" height="12" fill="url(#ruRed)"/>
    <rect width="60" height="36" fill="url(#ruGloss)"/>
  </svg>
);

const Flag = ({ code }: { code: Locale }) => {
  if (code === "az") return <AzerbaijanFlag/>;
  if (code === "en") return <UKFlag/>;
  return <RussiaFlag/>;
};

export default function LanguageSwitcher({ theme = "dark" }: { theme?: "light" | "dark" }) {
  const { locale, setLocale } = useLocale();
  const isLight = theme === "light";

  const langs: { code: Locale; label: string }[] = [
    { code: "az", label: "AZ" },
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="fixed top-6 right-6 z-50 flex items-center gap-1 p-1.5 rounded-full backdrop-blur-xl"
      style={{
        background: isLight ? "rgba(255,255,255,0.85)" : "rgba(10,11,30,0.7)",
        border: isLight ? "1px solid rgba(99,102,241,0.2)" : "1px solid rgba(255,255,255,0.1)",
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
            <span className="w-[22px] h-[14px] rounded-[3px] overflow-hidden flex-shrink-0 border border-white/25 shadow-[0_1px_3px_rgba(0,0,0,0.4),inset_0_0_0_0.5px_rgba(255,255,255,0.25)]">
              <Flag code={lang.code}/>
            </span>
            {lang.label}
          </span>
        </motion.button>
      ))}
    </motion.div>
  );
}