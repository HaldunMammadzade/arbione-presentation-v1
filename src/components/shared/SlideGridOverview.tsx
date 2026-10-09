"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { DECK, DECK_TAGS, type DeckTag } from "@/components/deck";
import { Icon, useT } from "@/components/deck/primitives";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
  onSelectSlide: (index: number) => void;
}

export default function SlideGridOverview({ isOpen, onClose, currentSlide, onSelectSlide }: Props) {
  const t = useT();
  const [filter, setFilter] = useState<DeckTag | "all">("all");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const slides = DECK.map((s, i) => ({ ...s, i })).filter((s) => filter === "all" || s.tag === filter);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-10 bg-canvas/70 backdrop-blur-2xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-6xl max-h-[90vh] rounded-3xl surface-raised p-4 sm:p-8 flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-ink/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center">
                  <Icon name="layout" size={18} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-ink tracking-tight">{t(["Bütün slaydlar", "All slides", "Все слайды"])}</h2>
                  <p className="text-xs text-ink/50">
                    {DECK.length} {t(["slayd · G ilə aç/bağla", "slides · toggle with G", "слайдов · G — открыть/закрыть"])}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 p-1 rounded-xl well overflow-x-auto max-w-[70vw]">
                  {DECK_TAGS.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setFilter(c.id)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${filter === c.id ? "bg-brand text-white" : "text-ink/60 hover:text-ink"}`}
                    >
                      {t(c.name)}
                    </button>
                  ))}
                </div>
                <button onClick={onClose} className="w-9 h-9 rounded-xl well text-ink/70 hover:text-ink flex items-center justify-center" aria-label="Close">
                  <Icon name="x" size={18} stroke={2.2} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 overflow-y-auto pr-1">
              {slides.map((s) => {
                const active = s.i === currentSlide;
                return (
                  <motion.button
                    key={s.i}
                    onClick={() => {
                      onSelectSlide(s.i);
                      onClose();
                    }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className={`group relative text-left rounded-2xl p-3.5 min-h-[124px] flex flex-col justify-between gap-3 transition-colors ${active ? "bg-brand text-white" : "well hover:bg-ink/[0.06]"}`}
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                        style={
                          active
                            ? { background: "rgba(255,255,255,0.16)", color: "#fff", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.25)" }
                            : { background: `linear-gradient(150deg, ${s.color}26, ${s.color}0d)`, color: s.color, boxShadow: `inset 0 0 0 1px ${s.color}33` }
                        }
                      >
                        <Icon name={s.icon} size={20} />
                      </span>
                      <span className={`font-mono text-[11px] font-semibold ${active ? "text-white/75" : "text-ink/35"}`}>{String(s.i + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <div className={`font-semibold text-[13px] leading-snug ${active ? "" : "text-ink"}`}>{t(s.name)}</div>
                      <div className={`text-[10px] uppercase tracking-wider mt-1 ${active ? "text-white/70" : "text-ink/40"}`}>{t(DECK_TAGS.find((c) => c.id === s.tag)!.name)}</div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
