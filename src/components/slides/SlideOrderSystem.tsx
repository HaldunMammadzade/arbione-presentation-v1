"use client";
import { motion } from "framer-motion";
import { IconUsers, IconChart, IconLocation, IconTask, IconSparkle } from "../shared/Icons";
import { useLocale } from "@/contexts/LocaleContext";

export default function SlideOrderSystem() {
  const { t } = useLocale();
  const moduleIcons = [<IconUsers size={72} key="u"/>, <IconChart size={72} key="c"/>, <IconLocation size={72} key="l"/>, <IconTask size={72} key="t"/>];
  const moduleColors = ["from-violet-500 to-indigo-600", "from-blue-500 to-cyan-500", "from-orange-400 to-rose-500", "from-amber-400 to-orange-500"];
  const glowColors = ["rgba(129,140,248,0.5)", "rgba(34,211,238,0.5)", "rgba(251,146,60,0.5)", "rgba(251,191,36,0.5)"];
  const moduleOrder = [0, 3, 1, 2];

  return (
    <div className="relative w-full h-full flex items-center p-4 sm:p-10 lg:p-16 overflow-y-auto lg:overflow-hidden overflow-x-hidden" style={{ background: "#0a0b1e" }}>
      <div className="absolute inset-0 grid-bg opacity-60"/>
      <div className="absolute inset-0 mesh-gradient opacity-40"/>
      <div className="aurora-blob" style={{ width: 600, height: 600, background: "#6366f1", top: "-20%", left: "-20%", opacity: 0.3 }}/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#22d3ee", bottom: "-20%", right: "-20%", opacity: 0.2, animationDelay: "-10s" }}/>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_1.1fr] lg:grid-cols-[1fr_1.1fr] gap-4 sm:gap-8 lg:gap-16 items-center py-2 sm:py-6 lg:py-0 pb-16 sm:pb-20 lg:pb-0">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-2 sm:mb-6">
            <IconSparkle size={14} className="text-accent"/>
            <span className="text-white/80 text-xs tracking-wider uppercase font-semibold">{t.badges.theSolution}</span>
          </motion.div>

          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="text-2xl sm:text-4xl lg:text-[4rem] font-black text-white leading-[1.05] mb-3 sm:mb-8 tracking-[-0.03em]">
            {t.slide11.titlePart1}<br/>
            <span className="gradient-text-premium">{t.slide11.titlePart2}</span>
          </motion.h2>

          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-sm sm:text-xl text-white/80 leading-relaxed mb-3 sm:mb-6">
            {t.slide11.descPrefix} <span className="text-white font-bold">{t.slide11.descBold}</span> {t.slide11.descSuffix}
          </motion.p>

          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-0">
            {t.slide11.modules.map((m, i) => (
              <motion.span key={m.name} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 + i * 0.1, duration: 0.5, ease: "backOut" }} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-strong text-white text-xs sm:text-sm font-semibold">
                {m.name}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 relative">
          {moduleOrder.map((mIdx, gridIdx) => {
            const m = t.slide11.modules[mIdx];
            return (
              <motion.div
                key={gridIdx}
                initial={{ scale: 0, rotate: -10, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ delay: 0.4 + gridIdx * 0.15, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ scale: 1.08, y: -8 }}
                className="relative aspect-square group cursor-pointer"
              >
                <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 3, repeat: Infinity, delay: gridIdx * 0.3 }} className="absolute -inset-2 rounded-3xl blur-2xl" style={{ background: glowColors[mIdx] }}/>
                
                <div className="relative h-full rounded-3xl glass-strong p-3 sm:p-6 flex flex-col items-center justify-center text-center overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${moduleColors[mIdx]} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}/>
                  
                  <motion.div animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: gridIdx * 0.3 }} className="mb-4">
                    {moduleIcons[mIdx]}
                  </motion.div>
                  
                  <div className={`text-2xl font-black bg-gradient-to-r ${moduleColors[mIdx]} bg-clip-text text-transparent tracking-wider mb-1`}>
                    {m.name}
                  </div>
                  <div className="text-white/70 text-xs">{m.desc}</div>
                  
                  <motion.div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r" style={{ background: `linear-gradient(90deg, transparent, ${glowColors[mIdx]}, transparent)` }} animate={{ x: ["-100%", "100%"] }} transition={{ duration: 3, repeat: Infinity, delay: gridIdx * 0.5, ease: "linear" }}/>
                </div>
              </motion.div>
            );
          })}

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full">
              {[[0,3],[1,2]].map(([a, b], i) => (
                <motion.line key={i} x1={a % 2 === 0 ? "25%" : "75%"} y1={a < 2 ? "25%" : "75%"} x2={b % 2 === 0 ? "25%" : "75%"} y2={b < 2 ? "25%" : "75%"} stroke="rgba(167,139,250,0.4)" strokeWidth="2" strokeDasharray="6 6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.8 + i * 0.2, duration: 1.5 }}/>
              ))}
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
