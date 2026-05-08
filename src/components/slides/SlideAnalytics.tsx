"use client";
import { motion } from "framer-motion";
import { IconChart, IconCheck } from "../shared/Icons";
import { useLocale } from "@/contexts/LocaleContext";

export default function SlideAnalytics() {
  const { t, locale } = useLocale();
  const currency = locale === "ru" ? "₽" : locale === "en" ? "$" : "₼";
  const days = t.slide15.ui.days;

  return (
    <div className="relative w-full h-full flex items-center p-16 overflow-hidden" style={{ background: "#06071a" }}>
      <div className="absolute inset-0 mesh-gradient opacity-30"/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#22d3ee", top: "-20%", left: "-15%", opacity: 0.2 }}/>
      <div className="aurora-blob" style={{ width: 400, height: 400, background: "#a78bfa", bottom: "-15%", right: "-10%", opacity: 0.2, animationDelay: "-8s" }}/>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-[1fr_1.1fr] gap-16 itemnter">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <IconChart size={16}/>
            <span className="text-white/80 text-xs tracking-wider uppercase font-semibold">{t.slide15.moduleLabel}</span>
          </motion.div>

          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="text-[3.5rem] font-black text-white leading-[1.05] mb-6 tracking-[-0.03em]">
            {t.slide15.titlePart1}<br/>
            <span className="gradient-text-premium">{t.slide15.titlePart2}</span>
          </motion.h2>

          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-lg text-white/75 leading-relaxed mb-8">
            {t.slide15.descPrefix} <span className="gradient-text-premium font-semibold">{t.slide15.descHighlight}</span>
          </motion.p>

          <div className="space-y-3">
            {t.slide15.features.map((f, i) => (
              <motion.div key={i} initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 + i * 0.12, duration: 0.6 }} whileHover={{ x: 8 }} className="flex items-center gap-3 text-white/90 group cursor-default">
                <IconCheck size={22}/>
                <span className="group-hover:text-white transition-colors">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 1 }} className="relative">
          <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -inset-6 rounded-3xl blur-3xl opacity-40" style={{ background: "linear-gradient(135deg, #22d3ee, #a78bfa)" }}/>

          <div className="relative glass-strong rounded-3xl p-6 overflow-hidden">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 5, repeat: Infinity }} className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-primary flex items-center justify-center" style={{ boxShadow: "0 8px 20px rgba(34,211,238,0.4)" }}>
                  <IconChart size={24}/>
                </motion.div>
                <div>
                  <div className="text-white font-bold">{t.slide15.ui.overview}</div>
                  <div className="text-white/50 text-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"/>
                    {t.slide15.ui.realtime}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { label: "Revenue", value: `${currency}124K`, change: "+23%", color: "from-green-400 to-emerald-500" },
                { label: "Tasks", value: "847", change: "+12%", color: "from-cyan-400 to-blue-500" },
                { label: "ROI", value: "3.4×", change: "+8%", color: "from-purple-400 to-pink-500" },
              ].map((m, i) => (
                <motion.div key={i} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 + i * 0.1 }} whileHover={{ y: -3 }} className="glass rounded-xl p-3 cursor-pointer group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${m.color} opacity-0 group-hover:opacity-10 transition-opacity`}/>
                  <div className="text-white/50 text-xs mb-1">{m.label}</div>
                  <div className="text-white text-2xl font-black">{m.value}</div>
                  <div className={`text-xs font-semibold bg-gradient-to-r ${m.color} bg-clip-text text-transparent`}>{m.change}</div>
               </motion.div>
              ))}
            </div>

            <div className="glass rounded-xl p-4 mb-4 relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="text-white/80 text-sm font-medium">{t.slide15.ui.trend}</div>
                <div className="flex gap-3 text-xs">
                  <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-accent"/><span className="text-white/60">{t.slide15.ui.actual}</span></div>
                  <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-cyan-400 opacity-40"/><span className="text-white/60">{t.slide15.ui.target}</span></div>
                </div>
              </div>
              <svg viewBox="0 0 400 120" className="w-full">
                <defs>
                  <linearGradient id="anaAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stopColor="#a78bfa" stopOpacity="0.5"/><stop offset="100%" stopColor="#a78bfa" stopOpacity="0"/></linearGradient>
                </defs>
                <motion.path d="M 0 60 L 50 58 L 100 55 L 150 50 L 200 45 L 250 40 L 300 35 L 350 30 L 400 25" stroke="#22d3ee" strokeWidth="1.5" fill="none" strokeDasharray="4 4" opacity="0.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.4, duration: 2 }}/>
                <motion.path d="M 0 80 L 50 70 L 100 85 L 150 55 L 200 60 L 250 35 L 300 40 L 350 20 L 400 25 L 400 120 L 0 120 Z" fill="url(#anaAreaGrad)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }}/>
                <motion.path d="M 0 80 L 50 70 L 100 85 L 150 55 L 200 60 L 250 35 L 300 40 L 350 20 L 400 25" stroke="#a78bfa" strokeWidth="2.5" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2, duration: 2.5 }}/>
              </svg>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="glass rounded-xl p-4">
                <div className="text-white/70 text-xs mb-3 font-medium">{t.slide15.ui.split}</div>
                <div className="flex items-center gap-4">
                  <svg viewBox="0 0 100 100" className="w-20 h-20">
                    <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="14"/>
                    <motion.circle cx="50" cy="50" r="38" fill="none" stroke="#818cf8" strokeWidth="14" strokeDasharray="107 238" initial={{ strokeDashoffset: 238 }} animate={{ strokeDashoffset: 131 }} transition={{ delay: 1.8, duration: 1.5 }} transform="rotate(-90 50 50)" strokeLinecap="round"/>
                    <motion.circle cx="50" cy="50" r="38" fill="none" stroke="#a78bfa" strokeWidth="14" strokeDasharray="60 238" initial={{ strokeDashoffset: 238 }} animate={{ strokeDashoffset: 178 }} transition={{ delay: 2.1, duration: 1.2 }} transform="rotate(17 50 50)" strokeLinecap="round"/>
                    <motion.circle cx="50" cy="50" r="38" fill="none" stroke="#22d3ee" strokeWidth="14" strokeDasharray="71 238" initial={{ strokeDashoffset: 238 }} animate={{ strokeDashoffset: 167 }} transition={{ delay: 2.4, duration: 1 }} transform="rotate(107 50 50)" strokeLinecap="round"/>
                  </svg>
                  <div className="flex-1 space-y-1.5">
                    {[
                      { label: "HR", val: "45%", color: "bg-primary" },
                      { label: "GPS", val: "25%", color: "bg-accent" },
                      { label: "Task", val: "30%", color: "bg-cyan-400" },
                    ].map((tt, i) => (
                      <motion.div key={i} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 2.3 + i * 0.1 }} className="flex items-center gap-2 text-white/80 text-xs">
                        <div className={`w-2 h-2 rounded-sm ${tt.color}`}/>
                        <span className="flex-1">{tt.label}</span>
                        <span className="font-semibold">{tt.val}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-4">
                <div className="text-white/70 text-xs mb-3 font-medium">{t.slide15.ui.weekly}</div>
                <div className="flex items-end gap-1.5 h-16">
                  {[45, 65, 40, 80, 55, 90, 70].map((h, i) => (
                    <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 2.2 + i * 0.08, duration: 0.6 }} className="flex-1 rounded-t-md" style={{ background: `linear-gradient(to top, ${i === 5 ? "#22d3ee, #a78bfa" : "#4f46e5, #a78bfa"})` }}/>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-[9px] text-white/40">
                  {days.map((d, i) => <span key={i}>{d}</span>)}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
