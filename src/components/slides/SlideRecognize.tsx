"use client";
import { motion } from "framer-motion";
import { IconUsers, IconChart, IconClock, IconWarning, IconSparkle } from "../shared/Icons";

export default function SlideRecognize() {
  const scenarios = [
    { icon: <IconUsers size={32}/>, text: "Satınalma meneceri 3 sistem arasında itir" },
    { icon: <IconClock size={32}/>, text: "CEO qərar vermək üçün 5 fərqli hesabat gözləyir" },
    { icon: <IconChart size={32}/>, text: "HR komandası Excel-də davamiyyət hesabatı düzəldir" },
  ];

  return (
    <div className="relative w-full h-full flex items-center p-20 overflow-hidden noise-overlay" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #ede9fe 100%)" }}>
      <div className="absolute inset-0 grid-bg-light opacity-40"/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#fb923c", top: "-15%", right: "-10%", opacity: 0.1 }}/>
      <div className="aurora-blob" style={{ width: 400, height: 400, background: "#a78bfa", bottom: "-15%", left: "-10%", opacity: 0.15, animationDelay: "-8s" }}/>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-[1fr_1fr] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6"
          >
            <IconWarning size={16}/>
            <span className="text-orange-600 text-xs tracking-wider uppercase font-semibold">Sound Familiar?</span>
          </motion.div>

          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="text-[4rem] font-black text-slate-900 leading-[1.05] mb-10 tracking-[-0.03em]">
            Bu mənzərə sizə <br/><span className="gradient-text-premium">tanışdır?</span>
          </motion.h2>

          <div className="space-y-4 mb-10">
            {scenarios.map((s, i) => (
              <motion.div
                key={i}
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-primary/10 cursor-default group hover:border-primary/30 transition-colors"
                style={{ boxShadow: "0 8px 24px rgba(99,102,241,0.06)" }}
              >
                <motion.div whileHover={{ rotate: 10 }}>{s.icon}</motion.div>
                <p className="text-slate-700 text-lg font-medium flex-1">{s.text}</p>
                <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} className="text-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1, duration: 0.8 }} className="relative p-6 rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa)" }}>
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)" }}
            />
            <div className="relative flex items-start gap-3">
              <IconSparkle size={24} className="text-white flex-shrink-0 mt-1"/>
              <p className="text-xl font-medium leading-relaxed text-white">
                <span className="font-extrabold">Arbione</span> sadəcə bir platforma deyil — şirkətinizin sinxron işləməsi üçün yaradılmış <span className="font-bold underline decoration-white/50">vahid idarəetmə ekosistemidir.</span>
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="relative h-[550px]">
          {[
            { top: "3%", left: "12%", rotate: -8, type: "chart", delay: 0.6, color: "from-blue-400 to-indigo-500" },
            { top: "5%", right: "8%", rotate: 10, type: "docs", delay: 0.8, color: "from-purple-400 to-pink-500" },
            { top: "40%", left: "2%", rotate: -5, type: "calendar", delay: 1, color: "from-emerald-400 to-cyan-500" },
            { top: "38%", right: "2%", rotate: 8, type: "stats", delay: 1.2, color: "from-amber-400 to-orange-500" },
            { bottom: "5%", left: "15%", rotate: -6, type: "email", delay: 1.4, color: "from-rose-400 to-red-500" },
            { bottom: "2%", right: "18%", rotate: 5, type: "data", delay: 1.6, color: "from-violet-400 to-fuchsia-500" },
          ].map((item, i) => {
            const { delay, color, type, ...stylePos } = item;
            return (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: item.rotate + 30, opacity: 0 }}
                animate={{ scale: 1, rotate: item.rotate, opacity: 1 }}
                transition={{ delay, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ scale: 1.15, rotate: 0, zIndex: 20 }}
                className="absolute w-36 h-44 bg-white rounded-2xl p-3 cursor-pointer overflow-hidden"
                style={{ ...stylePos, boxShadow: "0 20px 50px rgba(99,102,241,0.2)" }}
              >
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${color} mb-3`}/>
                {type === "chart" && (
                  <svg viewBox="0 0 100 80" className="w-full">
                    <rect x="10" y="40" width="12" height="30" fill="#818cf8" rx="2"/>
                    <rect x="28" y="20" width="12" height="50" fill="#a78bfa" rx="2"/>
                    <rect x="46" y="30" width="12" height="40" fill="#c084fc" rx="2"/>
                    <rect x="64" y="10" width="12" height="60" fill="#e879f9" rx="2"/>
                  </svg>
                )}
                {type === "docs" && (
                  <div className="space-y-1.5">
                    {[...Array(5)].map((_, j) => (
                      <div key={j} className="h-1.5 bg-slate-200 rounded" style={{ width: `${70 + Math.random()*30}%` }}/>
                    ))}
                    <div className="h-1.5 bg-gradient-to-r from-purple-400 to-pink-500 rounded w-1/2 mt-2"/>
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="h-1.5 bg-slate-200 rounded" style={{ width: `${60 + Math.random()*30}%` }}/>
                    ))}
                  </div>
                )}
                {type === "calendar" && (
                  <div className="grid grid-cols-5 gap-1">
                    {[...Array(20)].map((_, j) => (
                      <div key={j} className="aspect-square rounded" style={{ background: [3, 7, 11, 15].includes(j) ? "linear-gradient(to bottom right, #34d399, #22d3ee)" : "#e2e8f0" }}/>
                    ))}
                  </div>
                )}
                {type === "stats" && (
                  <div className="space-y-2">
                    <div className="text-xl font-black text-orange-500">+24%</div>
                    <svg viewBox="0 0 100 30" className="w-full">
                      <path d="M 0 25 Q 20 20 40 15 T 80 5 L 100 0" stroke="#fb923c" strokeWidth="2" fill="none"/>
                    </svg>
                    <div className="flex gap-1">
                      <div className="h-1 flex-1 bg-orange-200 rounded"/>
                      <div className="h-1 flex-1 bg-orange-300 rounded"/>
                      <div className="h-1 flex-1 bg-orange-400 rounded"/>
                    </div>
                  </div>
                )}
                {type === "email" && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-rose-400 to-red-500"/>
                      <div className="h-1.5 bg-slate-200 rounded flex-1"/>
                    </div>
                    <div className="h-1.5 bg-slate-200 rounded w-5/6"/>
                    <div className="h-1.5 bg-slate-200 rounded w-4/6"/>
                    <div className="h-1.5 bg-slate-200 rounded w-3/6"/>
                    <div className="h-6 bg-gradient-to-r from-rose-400 to-red-500 rounded mt-2"/>
                  </div>
                )}
                {type === "data" && (
                  <div className="grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, j) => (
                      <div key={j} className="aspect-square rounded bg-gradient-to-br from-violet-400 to-fuchsia-500" style={{ opacity: 0.3 + Math.random() * 0.7 }}/>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.8, duration: 0.8, ease: "backOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex items-center justify-center z-10"
            style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa)", boxShadow: "0 20px 60px rgba(99,102,241,0.5)" }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
              <IconWarning size={48}/>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
