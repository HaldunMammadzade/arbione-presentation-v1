"use client";
import { motion } from "framer-motion";
import { IconUsers, IconLocation, IconTask, IconChart, IconSparkle } from "../shared/Icons";

export default function SlideFourModules() {
  const modules = [
    { name: "HR", desc: "İnsan mərkəzli idarəetmə", icon: <IconUsers size={48}/>, gradient: "from-violet-500 to-indigo-600" },
    { name: "GPS", desc: "Hərəkətin optimallaşdırılması", icon: <IconLocation size={48}/>, gradient: "from-orange-400 to-rose-500" },
    { name: "TASK", desc: "Komanda axışı", icon: <IconTask size={48}/>, gradient: "from-amber-400 to-orange-500" },
    { name: "ANALYTICS", desc: "Dəqiq qərarvermə", icon: <IconChart size={48}/>, gradient: "from-cyan-400 to-blue-500" },
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-16 overflow-hidden noise-overlay" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #ede9fe 100%)" }}>
      <div className="absolute inset-0 grid-bg-light opacity-40"/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#a78bfa", top: "-10%", right: "-5%", opacity: 0.15 }}/>
      <div className="aurora-blob" style={{ width: 400, height: 400, background: "#6366f1", bottom: "-10%", left: "-5%", opacity: 0.15, animationDelay: "-10s" }}/>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8"
      >
        <IconSparkle size={14} className="text-primary"/>
        <span className="text-primary text-xs tracking-wider uppercase font-semibold">The Formula</span>
      </motion.div>

      <motion.h2 initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative z-10 text-[5.5rem] font-black text-slate-900 text-center mb-6 tracking-[-0.04em] leading-none flex items-baseline gap-8 justify-center flex-wrap">
        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, duration: 0.7, ease: "backOut" }} className="relative">
          <span className="gradient-text-premium">4</span>
          <span className="text-slate-900"> modul</span>
        </motion.span>
        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, duration: 0.7, ease: "backOut" }}>
          <span className="gradient-text-premium">1</span>
          <span className="text-slate-900"> platforma</span>
        </motion.span>
        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, duration: 0.7, ease: "backOut" }}>
          <span className="gradient-text-premium">0</span>
          <span className="text-slate-900"> problem</span>
        </motion.span>
      </motion.h2>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }} className="relative z-10 text-lg text-slate-600 text-center max-w-3xl mb-12 leading-relaxed">
        Arbione — HR, GPS, Task və Analitika sistemlərini birləşdirərək idarəetməni sadələşdirir, xərcləri azaldır və məhsuldarlığı artırır. <span className="text-slate-900 font-semibold">Nəticə: daha az proses, daha çox nəticə.</span>
      </motion.p>

      <div className="relative z-10 max-w-5xl w-full grid grid-cols-2 gap-4">
        {modules.map((m, i) => (
          <motion.div
            key={i}
            initial={{ x: i % 2 === 0 ? -80 : 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.3 + i * 0.15, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="group relative bg-white rounded-2xl p-6 cursor-default overflow-hidden"
            style={{ boxShadow: "0 10px 30px rgba(99,102,241,0.08)" }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${m.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}/>
            <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${m.gradient} opacity-10 group-hover:opacity-25 transition-opacity blur-2xl`}/>
            
            <div className="relative flex items-center gap-6">
              <motion.div 
                animate={{ y: [0, -5, 0], rotate: [0, 5, -5, 0] }} 
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                className="flex-shrink-0"
              >
                {m.icon}
              </motion.div>
              
              <div className="flex-1">
                <div className={`text-4xl font-black bg-gradient-to-r ${m.gradient} bg-clip-text text-transparent mb-1 tracking-tight`}>
                  {m.name}
                </div>
                <div className="text-slate-700 font-medium">{m.desc}</div>
              </div>

              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                className="text-primary flex-shrink-0"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14m-7-7l7 7-7 7"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
