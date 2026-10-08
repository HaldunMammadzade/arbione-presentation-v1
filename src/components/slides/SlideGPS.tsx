"use client";
import { motion } from "framer-motion";
import { IconLocation, IconCheck } from "../shared/Icons";
import { useLocale } from "@/contexts/LocaleContext";
import InteractiveTiltCard from "../shared/InteractiveTiltCard";

export default function SlideGPS() {
  const { t } = useLocale();

  return (
    <div className="relative w-full h-full flex items-center p-6 sm:p-10 lg:p-16 overflow-y-auto lg:overflow-hidden overflow-x-hidden" style={{ background: "#06071a" }}>
      <div className="absolute inset-0 mesh-gradient opacity-30"/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#22d3ee", top: "-20%", left: "-15%", opacity: 0.2 }}/>
      <div className="aurora-blob" style={{ width: 400, height: 400, background: "#818cf8", bottom: "-15%", right: "-10%", opacity: 0.2, animationDelay: "-8s" }}/>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_1.1fr] lg:grid-cols-[1fr_1.1fr] gap-8 md:gap-6 lg:gap-16 items-center py-6 md:py-3 lg:py-0 pb-28 md:pb-16 sm:pb-20 lg:pb-0">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-4 sm:mb-6">
            <IconLocation size={16}/>
            <span className="text-white/80 text-xs tracking-wider uppercase font-semibold">{t.slide13.moduleLabel}</span>
          </motion.div>

          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="text-3xl sm:text-4xl lg:text-[3.5rem] font-black text-white leading-[1.05] mb-4 sm:mb-6 tracking-[-0.03em]">
            {t.slide13.titlePart1}<br/>
            <span className="gradient-text-premium">{t.slide13.titlePart2}</span>
          </motion.h2>

          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-base sm:text-lg text-white/75 leading-relaxed mb-6 sm:mb-8">
            {t.slide13.descPrefix} <span className="gradient-text-premium font-semibold">{t.slide13.descHighlight}</span>{t.slide13.descSuffix}
          </motion.p>

          <div className="space-y-3">
            {t.slide13.features.map((f, i) => (
              <motion.div key={i} initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 + i * 0.12, duration: 0.6 }} whileHover={{ x: 8 }} className="flex items-center gap-3 text-white/90 group cursor-default">
                <IconCheck size={22}/>
                <span className="group-hover:text-white transition-colors text-sm sm:text-base">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <InteractiveTiltCard delay={0.4} glowColor="rgba(34, 211, 238, 0.45)" className="h-[550px] hidden lg:block">
          <div className="relative h-full">
            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -inset-6 rounded-3xl blur-3xl opacity-40 pointer-events-none" style={{ background: "linear-gradient(135deg, #22d3ee, #6366f1)" }}/>

            <div className="relative h-full rounded-3xl overflow-hidden glass-strong">
              <svg viewBox="0 0 500 500" className="w-full h-full absolute inset-0">
                <defs>
                  <pattern id="mapGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6366f1" strokeWidth="0.5" opacity="0.3"/>
                  </pattern>
                  <linearGradient id="route1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#22d3ee"/><stop offset="100%" stopColor="#818cf8"/></linearGradient>
                  <linearGradient id="route2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#a78bfa"/><stop offset="100%" stopColor="#f472b6"/></linearGradient>
                  <linearGradient id="route3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#34d399"/><stop offset="100%" stopColor="#22d3ee"/></linearGradient>
                  <filter id="mapGlow"><feGaussianBlur stdDeviation="4"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                
                <rect width="500" height="500" fill="url(#mapGrid)"/>
                
                <motion.path d="M 50 400 Q 150 380 200 300 T 350 200 T 450 100" stroke="url(#route1)" strokeWidth="3" fill="none" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 2 }} filter="url(#mapGlow)"/>
                <motion.path d="M 100 450 Q 200 400 280 350 T 400 250" stroke="url(#route2)" strokeWidth="3" fill="none" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.1, duration: 2 }} filter="url(#mapGlow)"/>
                <motion.path d="M 30 200 Q 120 220 200 180 T 380 150" stroke="url(#route3)" strokeWidth="2.5" fill="none" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.4, duration: 2 }} filter="url(#mapGlow)"/>

                {[
                  { x: 50, y: 400, c: "#22d3ee", delay: 1 },
                  { x: 200, y: 300, c: "#818cf8", delay: 1.3 },
                  { x: 350, y: 200, c: "#a78bfa", delay: 1.6 },
                  { x: 450, y: 100, c: "#f472b6", delay: 1.9 },
                  { x: 280, y: 350, c: "#a78bfa", delay: 2.2 },
                  { x: 380, y: 150, c: "#34d399", delay: 2.5 },
                ].map((p, i) => (
                  <motion.g key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: p.delay, duration: 0.6, ease: "backOut" }}>
                    <motion.circle cx={p.x} cy={p.y} r="18" fill={p.c} opacity="0.2" animate={{ scale: [1, 2.5, 1], opacity: [0.3, 0, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}/>
                    <circle cx={p.x} cy={p.y} r="7" fill={p.c}/>
                    <circle cx={p.x} cy={p.y} r="3" fill="white"/>
                  </motion.g>
                ))}
              </svg>

              <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2, duration: 0.6 }} className="absolute top-6 left-6 glass-strong rounded-2xl p-4 min-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <motion.div animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-3 h-3 rounded-full bg-green-400"/>
                  <div className="text-white text-sm font-bold">6 {t.slide13.ui.active}</div>
                </div>
                <div className="text-white/60 text-xs mb-3">{t.slide13.ui.live}</div>
                <div className="flex items-center gap-1">
                  {[...Array(6)].map((_, i) => (
                    <motion.div key={i} initial={{ scaleY: 0 }} animate={{ scaleY: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }} className="w-1 h-4 bg-gradient-to-t from-cyan-400 to-primary rounded-full"/>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 2.3, duration: 0.6 }} className="absolute bottom-6 right-6 glass-strong rounded-2xl p-4">
                <div className="text-white/60 text-xs mb-1">{t.slide13.ui.total}</div>
                <div className="text-white text-3xl font-black">2,847 <span className="text-sm font-normal text-white/60">km</span></div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-green-400 text-xs font-semibold">+18% {t.slide13.ui.vsYesterday}</span>
                </div>
              </motion.div>

              <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 2.6, duration: 0.6 }} className="absolute top-6 right-6 glass rounded-xl p-3 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 10v6M1 12h6m10 0h6"/></svg>
                <span className="text-white text-xs font-medium">{t.slide13.ui.gps}</span>
              </motion.div>
            </div>
          </div>
        </InteractiveTiltCard>
      </div>
    </div>
  );
}
