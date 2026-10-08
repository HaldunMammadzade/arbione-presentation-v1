"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import SlideGridOverview from "./SlideGridOverview";

interface Props {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (i: number) => void;
  theme?: "light" | "dark";
}

export default function Navigation({ current, total, onPrev, onNext, onGoTo, theme = "dark" }: Props) {
  const { t } = useLocale();
  const isLight = theme === "light";
  const progress = ((current + 1) / total) * 100;
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);
  const [isGridOpen, setIsGridOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const dotsStripRef = useRef<HTMLDivElement>(null);

  // Fullscreen change listener & 'G' shortcut listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "g" || e.key === "G") && !["input", "textarea"].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) {
        setIsGridOpen((prev) => !prev);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  return (
    <>
      {/* Slide Grid Overview Modal */}
      <SlideGridOverview
        isOpen={isGridOpen}
        onClose={() => setIsGridOpen(false)}
        currentSlide={current}
        onSelectSlide={onGoTo}
        totalSlides={total}
      />

      {/* Top Progress Bar — thicker for visibility on MacBook */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1.5" style={{ background: "rgba(0,0,0,0.15)" }}>
        <motion.div
          className="h-full origin-left"
          style={{
            background: isLight
              ? "linear-gradient(90deg, #6366f1, #a78bfa, #22d3ee)"
              : "linear-gradient(90deg, #818cf8, #c084fc, #22d3ee)",
            boxShadow: "0 0 16px rgba(129,140,248,0.9), 0 0 6px rgba(34,211,238,0.7)",
          }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        />
        {/* Glow tip */}
        <motion.div
          className="absolute top-0 h-1.5 w-8 rounded-full"
          style={{
            background: "rgba(255,255,255,0.95)",
            boxShadow: "0 0 20px 6px rgba(129,140,248,1)",
            filter: "blur(1px)",
            left: `calc(${progress}% - 16px)`,
          }}
          animate={{ left: `calc(${progress}% - 16px)` }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        />
      </div>

      {/* Slide counter — top left — hidden on xs mobile to save space */}
      <div className="fixed top-5 left-5 sm:top-5 sm:left-6 z-50 hidden sm:flex items-center gap-2 sm:gap-3 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: -8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="flex items-baseline gap-1.5"
          >
            <span
              className="text-2xl font-black tracking-tight"
              style={{
                color: isLight ? "#1e1b4b" : "white",
                textShadow: isLight
                  ? "0 2px 10px rgba(99,102,241,0.2)"
                  : "0 0 20px rgba(129,140,248,0.6)",
              }}
            >
              {String(current + 1).padStart(2, "0")}
            </span>
            <span
              className="text-xs font-semibold"
              style={{ color: isLight ? "rgba(99,102,241,0.6)" : "rgba(255,255,255,0.35)" }}
            >
              / {String(total).padStart(2, "0")}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Vertical divider */}
        <div
          className="h-4 w-px"
          style={{ background: isLight ? "rgba(99,102,241,0.2)" : "rgba(255,255,255,0.15)" }}
        />

        {/* Slide name badge */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.3 }}
              className="text-[10px] font-medium tracking-wider uppercase truncate max-w-[80px]"
              style={{ color: isLight ? "rgba(100,116,139,0.5)" : "rgba(255,255,255,0.25)" }}
            >
              {t.nav.slideNames[current]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Nav */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 sm:gap-3 px-2.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full backdrop-blur-xl"
        style={{
          paddingBottom: `max(6px, calc(env(safe-area-inset-bottom, 0px) + 6px))`,
          background: isLight ? "rgba(255,255,255,0.92)" : "rgba(10,11,30,0.85)",
          border: isLight ? "1px solid rgba(99,102,241,0.15)" : "1px solid rgba(255,255,255,0.1)",
          boxShadow: isLight
            ? "0 10px 40px rgba(99,102,241,0.15), 0 2px 8px rgba(0,0,0,0.05)"
            : "0 10px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(129,140,248,0.1)",
        }}
      >
        {/* Grid Overview Toggle Button */}
        <motion.button
          onClick={() => setIsGridOpen(true)}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0"
          style={{
            background: isLight ? "rgba(99,102,241,0.1)" : "rgba(255,255,255,0.1)",
            color: isLight ? "#4f46e5" : "white",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
          </svg>
        </motion.button>

        {/* Divider — hidden on mobile */}
        <div
          className="hidden sm:block w-[1px] h-4 flex-shrink-0"
          style={{ background: isLight ? "rgba(99,102,241,0.2)" : "rgba(255,255,255,0.15)" }}
        />

        {/* Prev button */}
        <motion.button
          onClick={onPrev}
          disabled={current === 0}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed relative overflow-hidden group flex-shrink-0"
          style={{
            background: isLight ? "rgba(99,102,241,0.1)" : "rgba(255,255,255,0.1)",
            color: isLight ? "#4f46e5" : "white",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="relative z-10">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </motion.button>

        {/* Dot indicators with tooltips */}
        <div ref={dotsStripRef} className="flex gap-[3px] sm:gap-1.5 items-center max-w-[90px] sm:max-w-[260px] overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              ref={current === i ? (el) => {
                const strip = dotsStripRef.current;
                if (el && strip) {
                  const left = el.offsetLeft - (strip.clientWidth - el.offsetWidth) / 2;
                  strip.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
                }
              } : null}
              className="relative flex items-center justify-center flex-shrink-0"
              onMouseEnter={() => setHoveredDot(i)}
              onMouseLeave={() => setHoveredDot(null)}
            >
              {/* Tooltip — desktop only */}
              <AnimatePresence>
                {hoveredDot === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 4, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.85 }}
                    transition={{ duration: 0.15 }}
                    className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded-lg text-[9px] font-semibold tracking-wider uppercase whitespace-nowrap pointer-events-none z-50 hidden sm:block"
                    style={{
                      background: isLight ? "#1e293b" : "rgba(255,255,255,0.95)",
                      color: isLight ? "white" : "#1e293b",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    }}
                  >
                    {t.nav.slideNames[i]}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                onClick={() => onGoTo(i)}
                animate={{
                  width: current === i ? [14, 20] : [5, 5],
                  height: [5, 5],
                  background: current === i
                    ? "linear-gradient(90deg, #818cf8, #c084fc)"
                    : isLight
                    ? "rgba(99,102,241,0.25)"
                    : "rgba(255,255,255,0.3)",
                  boxShadow: current === i ? "0 0 8px rgba(129,140,248,0.7)" : "none",
                }}
                transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                className="rounded-full sm:hidden"
                whileHover={{ scale: 1.3 }}
              />
              <motion.button
                onClick={() => onGoTo(i)}
                animate={{
                  width: current === i ? 28 : 7,
                  height: 7,
                  background: current === i
                    ? "linear-gradient(90deg, #818cf8, #c084fc)"
                    : isLight
                    ? "rgba(99,102,241,0.25)"
                    : "rgba(255,255,255,0.3)",
                  boxShadow: current === i ? "0 0 10px rgba(129,140,248,0.7)" : "none",
                }}
                transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                className="rounded-full hidden sm:block"
                whileHover={{ scale: 1.3 }}
              />
            </div>
          ))}
        </div>

        {/* Next button */}
        <motion.button
          onClick={onNext}
          disabled={current === total - 1}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed relative overflow-hidden group flex-shrink-0"
          style={{
            background: isLight ? "rgba(99,102,241,0.1)" : "rgba(255,255,255,0.1)",
            color: isLight ? "#4f46e5" : "white",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="relative z-10">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </motion.button>

        {/* Divider — hidden on mobile */}
        <div
          className="hidden sm:block w-[1px] h-4 flex-shrink-0"
          style={{ background: isLight ? "rgba(99,102,241,0.2)" : "rgba(255,255,255,0.15)" }}
        />

        {/* Fullscreen Button — hidden on mobile */}
        <div className="relative hidden sm:flex items-center justify-center group">
          <motion.button
            onClick={toggleFullscreen}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
            style={{
              background: isLight ? "rgba(99,102,241,0.1)" : "rgba(255,255,255,0.1)",
              color: isLight ? "#4f46e5" : "white",
            }}
          >
            {isFullscreen ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 3h6v6m-6 12h6v-6M9 21H3v-6M9 3H3v6" />
              </svg>
            )}
          </motion.button>
          <div
            className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50"
            style={{
              background: isLight ? "#1e293b" : "rgba(255,255,255,0.95)",
              color: isLight ? "white" : "#1e293b",
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            }}
          >
            {isFullscreen ? t.nav.exitFullscreen : t.nav.fullscreen}
          </div>
        </div>

        {/* PDF Export Button — hidden on mobile */}
        <div className="relative hidden sm:flex items-center justify-center group">
          <motion.button
            onClick={() => window.open("/print", "_blank")}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            className="px-2.5 py-1 rounded-full flex items-center gap-1.5 text-[11px] font-bold tracking-wider transition-all"
            style={{
              background: isLight ? "rgba(99,102,241,0.12)" : "rgba(129,140,248,0.15)",
              color: isLight ? "#4f46e5" : "#c4b5fd",
              border: isLight ? "1px solid rgba(99,102,241,0.2)" : "1px solid rgba(167,139,250,0.3)",
              boxShadow: isLight ? "0 2px 8px rgba(99,102,241,0.15)" : "0 0 12px rgba(129,140,248,0.25)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>PDF</span>
          </motion.button>

          {/* PDF Tooltip on hover */}
          <div
            className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50"
            style={{
              background: isLight ? "#1e293b" : "rgba(255,255,255,0.95)",
              color: isLight ? "white" : "#1e293b",
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            }}
          >
            {t.nav.pdfExport}
          </div>
        </div>
      </motion.div>
    </>
  );
}
