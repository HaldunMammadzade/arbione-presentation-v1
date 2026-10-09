"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import SlideGridOverview from "./SlideGridOverview";
import { DECK } from "@/components/deck";
import { LogoMark } from "@/components/deck/logo";
import { Icon, LANGS, usePrefs, useT } from "@/components/deck/primitives";

interface Props {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (i: number) => void;
}

const btn = "w-9 h-9 rounded-full flex items-center justify-center transition-colors text-ink/70 hover:text-ink hover:bg-ink/[0.06] disabled:opacity-30 disabled:pointer-events-none shrink-0";

export default function Navigation({ current, total, onPrev, onNext, onGoTo }: Props) {
  const t = useT();
  const { lang, setLang, theme, toggleTheme } = usePrefs();
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onFs = () => setIsFullscreen(Boolean(document.fullscreenElement));
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "g" || e.key === "G") && !["input", "textarea"].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) setIsGridOpen((p) => !p);
    };
    document.addEventListener("fullscreenchange", onFs);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("fullscreenchange", onFs);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    const strip = dotsRef.current;
    const el = strip?.children[current] as HTMLElement | undefined;
    if (strip && el) strip.scrollTo({ left: Math.max(0, el.offsetLeft - (strip.clientWidth - el.offsetWidth) / 2), behavior: "smooth" });
  }, [current]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
    else document.exitFullscreen().catch(() => {});
  };

  return (
    <>
      <SlideGridOverview isOpen={isGridOpen} onClose={() => setIsGridOpen(false)} currentSlide={current} onSelectSlide={onGoTo} />

      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-ink/[0.06]">
        <motion.div className="h-full origin-left bg-brand" animate={{ scaleX: (current + 1) / total }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} />
      </div>

      <div className="fixed top-[3px] left-0 right-0 z-50 flex items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-4 pointer-events-none max-[999px]:bg-canvas/80 max-[999px]:backdrop-blur-xl max-[999px]:border-b max-[999px]:border-ink/[0.06]">
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-brand shrink-0">
            <LogoMark h={22} />
          </span>
          <AnimatePresence mode="wait">
            <motion.div key={current} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.2 }} className="flex items-baseline gap-2 min-w-0">
              <span className="font-mono text-[13px] font-semibold text-ink whitespace-nowrap">
                {String(current + 1).padStart(2, "0")}
                <span className="text-ink/35"> / {String(total).padStart(2, "0")}</span>
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/45 truncate max-w-[150px] sm:max-w-[240px]">{t(DECK[current].name)}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <div className="relative flex items-center rounded-full p-[3px] bg-card/80 backdrop-blur-xl border border-ink/[0.08] shadow-sm">
            {LANGS.map((l) => (
              <button key={l} onClick={() => setLang(l)} className="relative px-2.5 sm:px-3 h-7 rounded-full text-[11px] font-bold uppercase tracking-wider transition-colors" style={{ color: lang === l ? "#fff" : undefined }}>
                {lang === l && <motion.span layoutId="lang-pill" className="absolute inset-0 rounded-full bg-brand" transition={{ type: "spring", stiffness: 500, damping: 38 }} />}
                <span className={`relative ${lang === l ? "" : "text-ink/55 hover:text-ink"}`}>{l}</span>
              </button>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            aria-label={t(["Tema", "Theme", "Тема"])}
            className="w-[34px] h-[34px] rounded-full flex items-center justify-center bg-card/80 backdrop-blur-xl border border-ink/[0.08] shadow-sm text-ink/70 hover:text-ink transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={theme} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Icon name={theme === "dark" ? "sun" : "moon"} size={16} stroke={2} />
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-1/2 z-50 flex items-center gap-1 px-1.5 py-1.5 rounded-full bg-card/85 backdrop-blur-xl border border-ink/[0.08]"
        style={{ x: "-50%", bottom: "max(14px, calc(env(safe-area-inset-bottom, 0px) + 10px))", boxShadow: "0 18px 40px -18px rgb(var(--shadow) / 0.35)" }}
      >
        <button onClick={() => setIsGridOpen(true)} className={btn} aria-label={t(["Bütün slaydlar", "All slides", "Все слайды"])}>
          <Icon name="layout" size={17} />
        </button>
        <span className="w-px h-4 bg-ink/10 mx-0.5" />
        <button onClick={onPrev} disabled={current === 0} className={btn} aria-label="Prev">
          <Icon name="arrow" size={17} stroke={2} className="rotate-180" />
        </button>
        <div ref={dotsRef} className="flex gap-1.5 items-center max-w-[96px] sm:max-w-[300px] overflow-x-auto px-1" style={{ scrollbarWidth: "none" }}>
          {Array.from({ length: total }).map((_, i) => (
            <button key={i} onClick={() => onGoTo(i)} title={t(DECK[i].name)} className="h-5 flex items-center shrink-0">
              <motion.span className="block h-[6px] rounded-full" animate={{ width: current === i ? 22 : 6, backgroundColor: current === i ? "#7367F0" : "rgba(128,128,150,0.35)" }} transition={{ duration: 0.3 }} />
            </button>
          ))}
        </div>
        <button onClick={onNext} disabled={current === total - 1} className={btn} aria-label="Next">
          <Icon name="arrow" size={17} stroke={2} />
        </button>
        <span className="hidden sm:block w-px h-4 bg-ink/10 mx-0.5" />
        <button onClick={toggleFullscreen} className={`${btn} hidden sm:flex`} aria-label="Fullscreen">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {isFullscreen ? <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" /> : <path d="M15 3h6v6M9 21H3v-6M21 15v6h-6M3 9V3h6" />}
          </svg>
        </button>
        <button onClick={() => window.open("/print", "_blank")} className="hidden sm:flex items-center gap-1.5 h-9 px-3.5 rounded-full text-[12px] font-bold tracking-wider text-white bg-brand hover:bg-primary-dark transition-colors">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
          PDF
        </button>
      </motion.div>
    </>
  );
}
