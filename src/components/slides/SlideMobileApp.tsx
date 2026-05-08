"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { IconCheck } from "../shared/Icons";

export default function SlideMobileApp() {
  const { t } = useLocale();

  return (
    <div className="relative w-full h-full flex items-center p-16 overflow-hidden" style={{ background: "#06071a" }}>
      <div className="absolute inset-0 mesh-gradient opacity-30"/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#22d3ee", top: "-15%", left: "-10%", opacity: 0.2 }}/>
      <div className="aurora-blob" style={{ width: 400, height: 400, background: "#a78bfa", bottom: "-10%", right: "-10%", opacity: 0.2, animationDelay: "-8s" }}/>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-[1.1fr_1fr] gap-16 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="3" y="1" width="8" height="12" rx="1.5" stroke="#a78bfa" strokeWidth="1.5"/><circle cx="7" cy="11" r="0.5" fill="#a78bfa"/></svg>
            <span className="text-white/80 text-xs tracking-wider uppercase font-semibold">{t.slideMobileApp.badge}</span>
          </motion.div>

          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="text-[3.8rem] font-black text-white leading-[1.05] mb-4 tracking-[-0.03em]">
            {t.slideMobileApp.title}
          </motion.h2>
          <motion.h3 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15, duration: 0.9 }} className="text-3xl font-bold gradient-text-premium mb-8">
            {t.slideMobileApp.titleHighlight}
          </motion.h3>

          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-lg text-white/75 leading-relaxed mb-8">
            {t.slideMobileApp.desc}
          </motion.p>

          <div className="space-y-3">
            {t.slideMobileApp.features.map((f, i) => (
              <motion.div key={i} initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }} whileHover={{ x: 6 }} className="flex items-start gap-3 text-white/85 group">
                <IconCheck size={22}/>
                <span className="leading-relaxed">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ scale: 0.85, opacity: 0, rotateY: -20 }} animate={{ scale: 1, opacity: 1, rotateY: 0 }} transition={{ delay: 0.5, duration: 1.2, ease: [0.25, 1, 0.5, 1] }} className="relative flex items-center justify-center" style={{ perspective: 1500 }}>
          
          <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(167,139,250,0.4), transparent 60%)", transform: "scale(1.3)" }}/>

          <motion.div
            animate={{ rotateY: [0, 8, -8, 0], rotateX: [0, -3, 3, 0], y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, rotateY: 12 }}
            className="relative"
            style={{ transformStyle: "preserve-3d", filter: "drop-shadow(0 40px 80px rgba(99,102,241,0.5))" }}
          >
            <div className="relative w-[280px] h-[560px] rounded-[3rem] p-2" style={{ background: "linear-gradient(135deg, #1e1b4b, #0a0b1e)", border: "2px solid rgba(255,255,255,0.1)" }}>
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden" style={{ background: "linear-gradient(180deg, #1e1b4b 0%, #312e81 100%)" }}>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black z-20"/>
                
                <div className="relative pt-10 px-4 z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div className="text-white/60 text-xs">Salam</div>
                      <div className="text-white text-base font-bold">Arbione</div>
                    </div>
                    <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="w-9 h-9 rounded-full bg-gradient-to-br from-primary via-accent to-cyan-400"/>
                  </div>

                  <div className="rounded-2xl p-3 mb-4" style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa)" }}>
                    <div className="text-white/80 text-[10px] mb-1">Bu gün</div>
                    <div className="flex items-baseline gap-1.5">
                      <div className="text-white text-2xlfont-black">8</div>
                      <div className="text-white/80 text-xs">/ 12 task</div>
                    </div>
                    <div className="mt-2 h-1 rounded-full bg-white/20 overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: "67%" }} transition={{ delay: 1.5, duration: 1.5 }} className="h-full bg-white"/>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[
                      { icon: "📍", label: "GPS", c: "from-cyan-400 to-blue-500" },
                      { icon: "👤", label: "HR", c: "from-violet-400 to-purple-500" },
                      { icon: "✓", label: "Tasks", c: "from-amber-400 to-orange-500" },
                      { icon: "📊", label: "Stats", c: "from-emerald-400 to-teal-500" },
                    ].map((it, i) => (
                      <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 + i * 0.1 }} className="rounded-xl p-2.5 glass">
                        <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${it.c} flex items-center justify-center text-xs mb-1.5`}>{it.icon}</div>
                        <div className="text-white text-[10px] font-semibold">{it.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="rounded-xl p-2.5 glass mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white/70 text-[9px] font-semibold">Activity</div>
                      <div className="text-green-400 text-[9px]">+12%</div>
                    </div>
                    <svg viewBox="0 0 200 40" className="w-full h-8">
                      <motion.path d="M 0 30 Q 25 20 50 22 T 100 12 T 150 8 T 200 5" stroke="#a78bfa" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.5, duration: 2 }}/>
                    </svg>
                  </div>
                </div>

                <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa)", boxShadow: "0 10px 30px rgba(99,102,241,0.5)" }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M5 11l4 4 8-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {[
            { x: -100, y: -50, label: "GPS", c: "#22d3ee", delay: 1.5 },
            { x: 110, y: -80, label: "HR", c: "#a78bfa", delay: 1.7 },
            { x: -120, y: 80, label: "Tasks", c: "#fbbf24", delay: 1.9 },
            { x: 100, y: 100, label: "Stats", c: "#34d399", delay: 2.1 },
          ].map((b, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{ scale: 1, x: b.x, y: b.y }}
              transition={{ delay: b.delay, duration: 0.8, ease: "backOut" }}
              className="absolute glass-strong rounded-xl px-3 py-1.5 flex items-center gap-2 pointer-events-none"
              style={{ boxShadow: `0 8px 20px rgba(99,102,241,0.3)` }}
            >
              <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }} className="w-2 h-2 rounded-full" style={{ background: b.c }}/>
              <span className="text-white text-xs font-semibold">{b.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
