"use client";
import { motion } from "framer-motion";
import { IconSparkle } from "../shared/Icons";
import { useLocale } from "@/contexts/LocaleContext";

export default function SlideHumanDesign() {
  const { t } = useLocale();

  return (
    <div className="relative w-full h-full flex items-center p-6 sm:p-12 lg:p-20 overflow-y-auto lg:overflow-hidden overflow-x-hidden noise-overlay" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #ede9fe 100%)" }}>
      <div className="absolute inset-0 grid-bg-light opacity-40"/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#a78bfa", top: "-10%", right: "-5%", opacity: 0.15 }}/>
      <div className="aurora-blob" style={{ width: 400, height: 400, background: "#818cf8", bottom: "-20%", left: "-5%", opacity: 0.15, animationDelay: "-10s" }}/>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-16 items-center relative z-10 py-6 lg:py-0 pb-28 sm:pb-20 lg:pb-0">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <IconSparkle size={14} className="text-primary"/>
            <span className="text-primary text-xs tracking-wider uppercase font-semibold">{t.badges.humanCentered}</span>
          </motion.div>

          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="text-3xl sm:text-4xl lg:text-[3.5rem] font-black text-slate-900 leading-[1.05] mb-6 sm:mb-10 tracking-[-0.03em]">
            {t.slide8.titlePart1}<br/>
            <span className="gradient-text-premium">{t.slide8.titlePart2}</span>
          </motion.h2>

          <div className="space-y-4">
            {t.slide8.items.map((item, i) => (
              <motion.div key={i} initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }} whileHover={{ x: 8 }} className="flex items-start gap-4 group cursor-default">
                <motion.div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform" style={{ boxShadow: "0 4px 12px rgba(99,102,241,0.3)" }}>
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </motion.div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed flex-1 pt-1.5">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.5, duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }} className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, #a78bfa 0%, #6366f1 40%, transparent 70%)" }}/>
            
            {[...Array(3)].map((_, ringIdx) => (
              <motion.div key={`ring-${ringIdx}`} animate={{ rotate: ringIdx % 2 === 0 ? 360 : -360 }} transition={{ duration: 25 + ringIdx * 10, repeat: Infinity, ease: "linear" }} className="absolute rounded-full border border-primary/20" style={{ width: 420 - ringIdx * 80, height: 420 - ringIdx * 80, borderStyle: ringIdx === 1 ? "dashed" : "solid" }}>
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30) * Math.PI / 180;
                  const radius = (420 - ringIdx * 80) / 2;
                  return (
                    <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary to-accent" style={{ top: "50%", left: "50%", transform: `translate(-50%, -50%) translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`, boxShadow: "0 0 8px rgba(167,139,250,0.8)" }}/>
                  );
                })}
              </motion.div>
            ))}

            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`ray-${i}`}
                className="absolute w-0.5 origin-bottom"
                style={{
                  height: 80 + Math.random() * 40,
                  background: "linear-gradient(to top, rgba(167,139,250,0.9), transparent)",
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${i * 18}deg) translateY(-170px)`,
                  transformOrigin: "center bottom",
                }}
                animate={{ opacity: [0.2, 1, 0.2], scaleY: [0.6, 1.3, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}

            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="relative">
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute inset-0 rounded-full blur-2xl" style={{ background: "radial-gradient(circle, #c084fc 0%, transparent 60%)", transform: "scale(2)" }}/>
              
              <svg width="200" height="200" viewBox="0 0 200 200" className="relative" style={{ filter: "drop-shadow(0 20px 60px rgba(167,139,250,0.6))" }}>
                <defs>
                  <linearGradient id="coreTop" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#e0e7ff"/><stop offset="50%" stopColor="#a78bfa"/><stop offset="100%" stopColor="#6366f1"/></linearGradient>
                  <linearGradient id="coreBottom" x1="100%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#818cf8"/><stop offset="100%" stopColor="#4338ca"/></linearGradient>
                  <linearGradient id="coreLeft" x1="0%" y1="0%" x2="100%" y2="50%"><stop offset="0%" stopColor="#c4b5fd"/><stop offset="100%" stopColor="#7c3aed"/></linearGradient>
                  <linearGradient id="coreRight" x1="100%" y1="0%" x2="0%" y2="50%"><stop offset="0%" stopColor="#a78bfa"/><stop offset="100%" stopColor="#5b21b6"/></linearGradient>
                  <radialGradient id="coreShine" cx="30%" cy="30%"><stop offset="0%" stopColor="white" stopOpacity="0.95"/><stop offset="70%" stopColor="white" stopOpacity="0"/></radialGradient>
                  <radialGradient id="innerGlow"><stop offset="0%" stopColor="#f0abfc" stopOpacity="0.9"/><stop offset="100%" stopColor="#a78bfa" stopOpacity="0"/></radialGradient>
                </defs>
                <motion.g animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "100px 100px" }}>
                  <path d="M 100 20 L 60 60 L 80 140 L 120 140 L 140 60 Z" fill="url(#coreTop)" opacity="0.95"/>
                  <path d="M 60 60 L 30 100 L 80 140 Z" fill="url(#coreLeft)"/>
                  <path d="M 140 60 L 170 100 L 120 140 Z" fill="url(#coreRight)"/>
                  <path d="M 100 20 L 60 60 L 140 60 Z" fill="url(#coreTop)" opacity="0.8"/>
                  <path d="M 80 140 L 100 180 L 120 140 Z" fill="url(#coreBottom)"/>
                  <path d="M 30 100 L 80 140 L 100 180 Z" fill="url(#coreLeft)" opacity="0.6"/>
                  <path d="M 170 100 L 120 140 L 100 180 Z" fill="url(#coreRight)" opacity="0.6"/>
                  <path d="M 100 20 L 100 180 M 60 60 L 140 60 M 30 100 L 170 100 M 80 140 L 120 140" stroke="white" strokeWidth="1" opacity="0.4"/>
                  <path d="M 60 60 L 120 140 M 140 60 L 80 140 M 100 20 L 30 100 L 100 180 L 170 100 Z" stroke="white" strokeWidth="0.5" fill="none" opacity="0.3"/>
                  <circle cx="100" cy="100" r="15" fill="url(#innerGlow)"/>
                  <ellipse cx="75" cy="50" rx="12" ry="18" fill="url(#coreShine)" opacity="0.7"/>
                </motion.g>
              </svg>

              {[...Array(3)].map((_, i) => (
                <motion.div key={`pulse-${i}`} className="absolute inset-0 rounded-full border-2 border-accent" animate={{ scale: [1, 2.5], opacity: [0.8, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}/>
              ))}
            </motion.div>

            {[...Array(12)].map((_, i) => (
              <motion.div key={`spark-${i}`} className="absolute w-1 h-1 bg-white rounded-full" style={{ top: `${15 + Math.random() * 70}%`, left: `${15 + Math.random() * 70}%`, boxShadow: "0 0 10px white, 0 0 20px #a78bfa" }} animate={{ scale: [0, 2, 0], opacity: [0, 1, 0] }} transition={{ duration: 2 + Math.random(), repeat: Infinity, delay: Math.random() * 3 }}/>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
