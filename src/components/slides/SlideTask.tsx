"use client";
import { motion } from "framer-motion";
import { IconTask, IconCheck, IconClock } from "../shared/Icons";
import { useLocale } from "@/contexts/LocaleContext";
import InteractiveTiltCard from "../shared/InteractiveTiltCard";

export default function SlideTask() {
  const { t } = useLocale();
  const taskColors = ["from-green-400 to-emerald-500", "from-amber-400 to-orange-500", "from-slate-400 to-slate-500", "from-primary to-accent"];
  const progresses = [100, 65, 20, 45];
  const avatars = [3, 2, 4, 2];

  return (
    <div className="relative w-full h-full flex items-center p-4 sm:p-10 lg:p-16 overflow-y-auto lg:overflow-hidden overflow-x-hidden" style={{ background: "#06071a" }}>
      <div className="absolute inset-0 mesh-gradient opacity-30"/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#f59e0b", top: "-20%", right: "-15%", opacity: 0.15 }}/>
      <div className="aurora-blob" style={{ width: 400, height: 400, background: "#a78bfa", bottom: "-15%", left: "-10%", opacity: 0.2, animationDelay: "-8s" }}/>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_1.1fr] lg:grid-cols-[1fr_1.1fr] gap-4 sm:gap-8 lg:gap-16 items-center py-0 sm:py-6 lg:py-0 pb-14 sm:pb-20 lg:pb-0">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-2 sm:mb-6">
            <IconTask size={16}/>
            <span className="text-white/80 text-xs tracking-wider uppercase font-semibold">{t.slide14.moduleLabel}</span>
          </motion.div>

          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="text-2xl sm:text-4xl lg:text-[3.5rem] font-black text-white leading-[1.05] mb-2 sm:mb-6 tracking-[-0.03em]">
            {t.slide14.titlePart1}<br/>
            <span className="gradient-text-premium">{t.slide14.titlePart2}</span>
          </motion.h2>

          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-sm sm:text-lg text-white/75 leading-relaxed mb-4 sm:mb-8">
            {t.slide14.descPrefix} <span className="gradient-text-premium font-semibold">{t.slide14.descHighlight}</span>{t.slide14.descSuffix}
          </motion.p>

          <div className="space-y-1.5 sm:space-y-3">
            {t.slide14.features.map((f, i) => (
              <motion.div key={i} initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 + i * 0.12, duration: 0.6 }} whileHover={{ x: 8 }} className="flex items-center gap-2 sm:gap-3 text-white/90 group cursor-default">
                <IconCheck size={22}/>
                <span className="group-hover:text-white transition-colors text-sm sm:text-base">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <InteractiveTiltCard delay={0.4} glowColor="rgba(245, 158, 11, 0.45)">
          <div className="relative">
            <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -inset-6 rounded-3xl blur-3xl opacity-40 pointer-events-none" style={{ background: "linear-gradient(135deg, #f59e0b, #a78bfa)" }}/>

            <div className="relative glass-strong rounded-3xl p-2 sm:p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-3 sm:mb-6">
              <div className="flex items-center gap-3">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="w-9 h-9 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center" style={{ boxShadow: "0 8px 20px rgba(245,158,11,0.4)" }}>
                  <IconTask size={28}/>
                </motion.div>
                <div>
                  <div className="text-white font-bold">{t.slide14.ui.sprint}</div>
                  <div className="text-white/50 text-xs">{t.slide14.ui.inProgress}</div>
                </div>
              </div>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6, ease: "backOut" }} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-orange-500/30">
                <IconClock size={14}/>
                <span className="text-orange-300 text-xs font-semibold">23 Jan</span>
              </motion.div>
            </div>

            <div className="mb-3 sm:mb-6">
              <div className="text-white/70 text-xs font-medium mb-1 sm:mb-2">{t.slide14.ui.heatmap}</div>
              <div className="grid gap-1" style={{ gridTemplateColumns: "repeat(14, 1fr)" }}>
                {Array.from({ length: 42 }).map((_, i) => {
                  const intensity = Math.random();
                  return (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 + i * 0.015, duration: 0.3 }}
                      whileHover={{ scale: 1.3 }}
                      className="aspect-square rounded cursor-pointer"
                      style={{
                        background: intensity > 0.8 ? "#818cf8" : intensity > 0.5 ? "rgba(129,140,248,0.6)" : intensity > 0.3 ? "rgba(129,140,248,0.3)" : "rgba(255,255,255,0.05)",
                        boxShadow: intensity > 0.8 ? "0 0 8px rgba(129,140,248,0.6)" : "none",
                      }}
                    />
                  );
                })}
              </div>
            </div>

            <div className="space-y-1 sm:space-y-3">
              {t.slide14.ui.tasks.map((task, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.5 + i * 0.12, duration: 0.5 }}
                  whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="flex items-center gap-2 p-1 sm:gap-4 sm:p-3 glass rounded-xl cursor-pointer group"
                >
                  <div className="relative">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${taskColors[i]}`}/>
                    {progresses[i] !== 100 && progresses[i] > 20 && (
                      <motion.div animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }} transition={{ duration: 2, repeat: Infinity }} className={`absolute inset-0 rounded-full bg-gradient-to-br ${taskColors[i]}`}/>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-white text-sm font-medium">{task.title}</div>
                    <div className="text-white/40 text-xs">{task.status}</div>
                  </div>
                  <div className="flex -space-x-2">
                    {[...Array(avatars[i])].map((_, j) => (
                      <div key={j} className="w-5 h-5 sm:w-7 sm:h-7 rounded-full border-2 border-[#06071a]" style={{ background: `linear-gradient(135deg, ${j === 0 ? "#6366f1, #818cf8" : j === 1 ? "#a78bfa, #c084fc" : j === 2 ? "#22d3ee, #818cf8" : "#f472b6, #a78bfa"})` }}/>
                    ))}
                  </div>
                  <div className="w-16 sm:w-24">
                    <div className="text-right text-white/60 text-xs mb-1 font-mono">{progresses[i]}%</div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${progresses[i]}%` }} transition={{ delay: 2 + i * 0.1, duration: 1 }} className={`h-full bg-gradient-to-r ${taskColors[i]}`}/>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </InteractiveTiltCard>
    </div>
  </div>
  );
}
