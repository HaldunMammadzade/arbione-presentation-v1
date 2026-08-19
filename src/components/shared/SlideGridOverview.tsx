"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
  onSelectSlide: (index: number) => void;
  totalSlides: number;
}

const ICONS = ["🚀","✨","⚡","💎","❓","🌪️","⚠️","📖","🎨","🌐","🔍","📦","🧩","👥","📍","✓","📊","📱","⚡","🎯","🌟","📊","💳","🔥","🤝","📱"];

export default function SlideGridOverview({
  isOpen,
  onClose,
  currentSlide,
  onSelectSlide,
  totalSlides,
}: Props) {
  const { t } = useLocale();
  const [filter, setFilter] = useState<string>("");

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const categories = t.nav.gridCategories;

  const slideMetadata = t.nav.gridSlides.map((s: { title: string; tag: string }, i: number) => ({
    id: i,
    title: s.title,
    tag: s.tag,
    icon: ICONS[i] || "📄",
  }));

  const filteredSlides = slideMetadata.filter((s: { id: number; tag: string }) => {
    if (s.id >= totalSlides) return false;
    if (!filter || filter === categories[0]) return true;
    return s.tag.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-10 backdrop-blur-2xl bg-black/85"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="relative w-full max-w-6xl max-h-[88vh] rounded-3xl glass-strong border border-white/20 p-6 md:p-8 flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "linear-gradient(135deg, rgba(15,16,35,0.95), rgba(6,7,26,0.98))",
              boxShadow: "0 25px 80px rgba(0,0,0,0.8), 0 0 50px rgba(99,102,241,0.2)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg shadow-lg shadow-primary/30">
                  🗂️
                </div>
                <div>
                  <h2 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
                    {t.nav.galleryTitle}
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary/20 text-primary-light border border-primary/30 font-bold">
                      {totalSlides} {t.nav.slideCount}
                    </span>
                  </h2>
                  <p className="text-xs text-white/50">
                    {t.nav.gallerySubtitle}
                  </p>
                </div>
              </div>

              {/* Filter pills & Close button */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/10">
                  {categories.map((cat: string) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        (!filter && cat === categories[0]) || filter === cat
                          ? "bg-primary text-white shadow-md shadow-primary/40"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 overflow-y-auto pr-2 custom-scrollbar">
              {filteredSlides.map((slide: { id: number; title: string; tag: string; icon: string }) => {
                const isActive = slide.id === currentSlide;
                return (
                  <motion.button
                    key={slide.id}
                    onClick={() => {
                      onSelectSlide(slide.id);
                      onClose();
                    }}
                    whileHover={{ scale: 1.04, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className={`relative text-left rounded-2xl p-3.5 flex flex-col justify-between transition-all group overflow-hidden ${
                      isActive
                        ? "bg-primary/25 border-2 border-primary shadow-xl shadow-primary/30"
                        : "glass hover:border-primary/40 border border-white/10"
                    }`}
                    style={{ minHeight: "115px" }}
                  >
                    {/* Background glow on active/hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />

                    {/* Top Row: Index & Tag */}
                    <div className="relative z-10 flex items-center justify-between mb-2">
                      <span
                        className={`text-xs font-black px-2 py-0.5 rounded-lg ${
                          isActive
                            ? "bg-primary text-white shadow-sm"
                            : "bg-white/10 text-white/70 group-hover:text-white"
                        }`}
                      >
                        {String(slide.id + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base">{slide.icon}</span>
                    </div>

                    {/* Bottom Row: Title & Active Indicator */}
                    <div className="relative z-10">
                      <div className="text-white font-bold text-xs leading-snug line-clamp-2 mb-1 group-hover:text-primary-light transition-colors">
                        {slide.title}
                      </div>
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-white/40 font-medium">{slide.tag}</span>
                        {isActive && (
                          <span className="text-emerald-400 font-bold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {t.nav.active}
                          </span>
                        )}
                      </div>
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
