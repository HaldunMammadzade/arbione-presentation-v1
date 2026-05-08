"use client";
import { motion } from "framer-motion";
import { IconCheck, IconLightning } from "../shared/Icons";
import { useLocale } from "@/contexts/LocaleContext";

export default function SlideQuestion() {
  const { t } = useLocale();

  return (
    <div className="relative w-full h-full flex items-center p-16 overflow-hidden noise-overlay" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #ede9fe 100%)" }}>
      <div className="absolute inset-0 grid-bg-light opacity-40"/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#a78bfa", top: "-20%", right: "10%", opacity: 0.12 }}/>
      <div className="aurora-blob" style={{ width: 400, height: 400, background: "#6366f1", bottom: "-10%", left: "-5%", opacity: 0.12, animationDelay: "-10s" }}/>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-[1.3fr_1fr] gap-16 items-center">
        <div>
          <motion.p initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="text-2xl text-slate-400 font-light mb-1 line-through decoration-2 decoration-slate-300">
            {t.slide4.oldQuestionLabel}
          </motion.p>
          <motion.p initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-3xl text-slate-400 italic pl-16 mb-10 line-through decoration-2 decoration-slate-300/60">
            &ldquo;{t.slide4.oldQuestion}&rdquo;
          </motion.p>

          <motion.p initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.7 }} className="text-3xl font-bold text-slate-900 mb-3 flex items-center gap-3">
            <span className="w-10 h-0.5 bg-gradient-to-r from-primary to-accent"/>
            {t.slide4.newQuestionLabel}
          </motion.p>
          <motion.p initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8, duration: 1, ease: [0.34, 1.56, 0.64, 1] }} className="text-6xl font-black gradient-text-premium pl-16 mb-14 tracking-tight leading-tight">
            &ldquo;{t.slide4.newQuestion}&rdquo;
          </motion.p>

          <div className="space-y-4 max-w-2xl">
            {t.slide4.stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1 + i * 0.2, duration: 0.7 }}
                whileHover={{ x: 8, scale: 1.01 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-primary/10 group hover:border-primary/30 transition-colors"
                style={{ boxShadow: "0 10px 30px rgba(99,102,241,0.06)" }}
              >
                <div className="flex-shrink-0 mt-0.5"><IconCheck size={28}/></div>
                <p className="text-slate-700 text-base leading-relaxed">
                  {item.prefix}{" "}<span className="font-black text-xl gradient-text">{item.highlight}</span>{" "}{item.suffix}
                  {("source" in item) && item.source && <span className="text-slate-400 text-sm italic ml-2">({item.source})</span>}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ x: -40, opacity: 0, scale: 0.95 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.7 }}
              className="relative flex items-start gap-4 p-6 rounded-2xl overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(167,139,250,0.12))", border: "1px solid rgba(99,102,241,0.25)" }}
            >
              <div className="flex-shrink-0"><IconLightning size={32}/></div>
              <p className="text-slate-800 text-base leading-relaxed font-semibold">
                {t.slide4.callout.prefix} <span className="gradient-text">{t.slide4.callout.highlight}</span>
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }} className="relative flex items-center justify-center">
          <div className="relative w-[450px] h-[450px]">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"/>
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-10 rounded-full border-2 border-dashed border-accent/30"/>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute inset-20 rounded-full border border-primary/20"/>
            
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const radius = 200;
              return (
                <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: [0, 1.3, 1] }} transition={{ delay: 1 + i * 0.1, duration: 0.6 }} className="absolute" style={{ top: "50%", left: "50%", transform: `translate(-50%, -50%) translate(${Math.cos(rad) * radius}px, ${Math.sin(rad) * radius}px)` }}>
                  <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }} className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-accent" style={{ boxShadow: "0 0 20px rgba(99,102,241,0.8)" }}/>
                </motion.div>
              );
            })}

            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative" style={{ perspective: 1000 }}>
                <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute inset-0 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, #a78bfa 0%, #6366f1 50%, transparent 70%)", transform: "scale(1.5)" }}/>
                
                <svg width="240" height="240" viewBox="0 0 240 240" className="relative" style={{ filter: "drop-shadow(0 20px 60px rgba(99,102,241,0.6))" }}>
                  <defs>
                    <linearGradient id="diamondMain" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#c4b5fd"/><stop offset="50%" stopColor="#818cf8"/><stop offset="100%" stopColor="#4f46e5"/></linearGradient>
                    <linearGradient id="diamondFace1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#ddd6fe"/><stop offset="100%" stopColor="#a78bfa"/></linearGradient>
                    <linearGradient id="diamondFace2" x1="100%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#a78bfa"/><stop offset="100%" stopColor="#6366f1"/></linearGradient>
                    <linearGradient id="diamondFace3" x1="50%" y1="0%" x2="50%" y2="100%"><stop offset="0%" stopColor="#818cf8"/><stop offset="100%" stopColor="#4338ca"/></linearGradient>
                    <radialGradient id="diamondHighlight" cx="30%" cy="30%"><stop offset="0%" stopColor="white" stopOpacity="0.9"/><stop offset="100%" stopColor="white" stopOpacity="0"/></radialGradient>
                  </defs>
                  <motion.g animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "120px 120px" }}>
                    <path d="M 120 40 L 70 90 L 90 170 L 150 170 L 170 90 Z" fill="url(#diamondFace1)" opacity="0.95"/>
                    <path d="M 70 90 L 40 120 L 90 170 Z" fill="url(#diamondFace2)"/>
                    <path d="M 170 90 L 200 120 L 150 170 Z" fill="url(#diamondFace3)"/>
                    <path d="M 120 40 L 70 90 L 170 90 Z" fill="url(#diamondMain)" opacity="0.9"/>
                    <path d="M 90 170 L 120 200 L 150 170 Z" fill="url(#diamondFace3)" opacity="0.7"/>
                    <path d="M 40 120 L 90 170 L 120 200 L 90 170 Z" fill="url(#diamondFace2)" opacity="0.5"/>
                    <path d="M 200 120 L 150 170 L 120 200 L 150 170 Z" fill="url(#diamondFace3)" opacity="0.5"/>
                    <path d="M 120 40 L 120 200 M 70 90 L 150 170 M 170 90 L 90 170 M 40 120 L 200 120" stroke="white" strokeWidth="1" opacity="0.3"/>
                    <ellipse cx="95" cy="75" rx="15" ry="20" fill="url(#diamondHighlight)" opacity="0.8"/>
                  </motion.g>
                </svg>
                <motion.div animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute inset-0 rounded-full border-2 border-accent"/>
              </motion.div>
            </div>

            {[...Array(8)].map((_, i) => (
              <motion.div key={`spark-${i}`} className="absolute w-1 h-1 bg-white rounded-full" style={{ top: `${20 + Math.random() * 60}%`, left: `${20 + Math.random() * 60}%`, boxShadow: "0 0 8px white" }} animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}/>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
