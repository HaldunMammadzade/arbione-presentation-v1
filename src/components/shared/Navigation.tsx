"use client";
import { motion } from "framer-motion";

interface Props {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (i: number) => void;
  theme?: "light" | "dark";
}

export default function Navigation({ current, total, onPrev, onNext, onGoTo, theme = "dark" }: Props) {
  const isLight = theme === "light";
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-6 py-3 rounded-full backdrop-blur-xl"
      style={{
        background: isLight ? "rgba(255,255,255,0.9)" : "rgba(10,11,30,0.8)",
        border: isLight ? "1px solid rgba(99,102,241,0.15)" : "1px solid rgba(255,255,255,0.1)",
        boxShadow: isLight ? "0 10px 40px rgba(99,102,241,0.15)" : "0 10px 40px rgba(0,0,0,0.3)",
      }}
    >
      <button
        onClick={onPrev}
        disabled={current === 0}
        className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
        style={{ background: isLight ? "rgba(99,102,241,0.1)" : "rgba(255,255,255,0.1)", color: isLight ? "#4f46e5" : "white" }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      </button>

      <div className="flex gap-1.5 items-center max-w-[300px] overflow-x-auto">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGoTo(i)}
            className="transition-all rounded-full"
            style={{
              width: current === i ? 32 : 8,
              height: 8,
              background: current === i ? "#818cf8" : isLight ? "rgba(99,102,241,0.25)" : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>

      <div className="text-xs font-medium tracking-wider min-w-[55px] text-center" style={{ color: isLight ? "#64748b" : "rgba(255,255,255,0.7)" }}>
        {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>

      <button
        onClick={onNext}
        disabled={current === total - 1}
        className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
        style={{ background: isLight ? "rgba(99,102,241,0.1)" : "rgba(255,255,255,0.1)", color: isLight ? "#4f46e5" : "white" }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </motion.div>
  );
}
