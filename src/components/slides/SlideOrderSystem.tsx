"use client";
import { motion } from "framer-motion";
import { IconUsers, IconChart, IconLocation, IconTask, IconSparkle } from "../shared/Icons";

export default function SlideOrderSystem() {
  const modules = [
    { icon: <IconUsers size={72}/>, title: "HR", desc: "İnsan mərkəzli idarəetmə", color: "from-violet-500 to-indigo-600", glowColor: "rgba(129,140,248,0.5)" },
    { icon: <IconChart size={72}/>, title: "ANALYTICS", desc: "Dəqiq qərarvermə", color: "from-blue-500 to-cyan-500", glowColor: "rgba(34,211,238,0.5)" },
    { icon: <IconLocation size={72}/>, title: "GPS", desc: "Hərəkətin izlənməsi", color: "from-orange-400 to-rose-500", glowColor: "rgba(251,146,60,0.5)" },
    { icon: <IconTask size={72}/>, title: "TASK", desc: "Komanda axışı", color: "from-amber-400 to-orange-500", glowColor: "rgba(251,191,36,0.5)" },
  ];

  return (
    <div className="relative w-full h-full flex items-center p-16 overflow-hidden" style={{ background: "#0a0b1e" }}>
      <div className="absolute inset-0 grid-bg opacity-60"/>
      <div className="absolute inset-0 mesh-gradient opacity-40"/>
      <div className="aurora-blob" style={{ width: 600, height: 600, background: "#6366f1", top: "-20%", left: "-20%", opacity: 0.3 }}/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#22d3ee", bottom: "-20%", right: "-20%", opacity: 0.2, animationDelay: "-10s" }}/>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-[1fr_1.1fr] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6"
          >
            <IconSparkle size={14} className="text-accent"/>
            <span className="text-white/80 text-xs tracking-wider uppercase font-semibold">The Solution</span>
          </motion.div>

          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="text-[4rem] font-black text-white leading-[1.05] mb-8 tracking-[-0.03em]">
            İdarəetmədə xaos deyil,<br/>
            <span className="gradient-text-premium">nizam yaradan sistem</span>
          </motion.h2>

          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-xl text-white/80 leading-relaxed mb-6">
            İdarəetmə yüzlərlə proses, minlərlə məlumat və saysız platforma deməkdir. Biz isə bütün bunları sadəcə <span className="text-white font-bold">dörd modula</span> sığışdırdıq:
          </motion.p>

          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="flex flex-wrap gap-3">
            {["HR", "GPS", "Task Management", "Analytics"].map((t, i) => (
              <motion.span
                key={t}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.5, ease: "backOut" }}
                className="px-4 py-2 rounded-full glass-strong text-white text-sm font-semibold"
              >
                {t}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-5 relative">
          {modules.map((m, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ scale: 1.08, y: -8 }}
              className="relative aspect-square group cursor-pointer"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                className="absolute -inset-2 rounded-3xl blur-2xl"
                style={{ background: m.glowColor }}
              />
              
              <div className="relative h-full rounded-3xl glass-strong p-6 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${m.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}/>
                
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                  className="mb-4"
                >
                  {m.icon}
                </motion.div>
                
                <div className={`text-2xl font-black bg-gradient-to-r ${m.color} bg-clip-text text-transparent tracking-wider mb-1`}>
                  {m.title}
                </div>
                <div className="text-white/70 text-xs">{m.desc}</div>
                
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r"
                  style={{ background: `linear-gradient(90deg, transparent, ${m.glowColor}, transparent)` }}
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                />
              </div>
            </motion.div>
          ))}

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 1.5, duration: 1 }} 
            className="absolute inset-0 pointer-events-none"
          >
            <svg className="w-full h-full">
              {[[0,3],[1,2]].map(([a, b], i) => (
                <motion.line
                  key={i}
                  x1={a % 2 === 0 ? "25%" : "75%"} y1={a < 2 ? "25%" : "75%"}
                  x2={b % 2 === 0 ? "25%" : "75%"} y2={b < 2 ? "25%" : "75%"}
                  stroke="rgba(167,139,250,0.4)" strokeWidth="2" strokeDasharray="6 6"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.8 + i * 0.2, duration: 1.5 }}
                />
              ))}
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
