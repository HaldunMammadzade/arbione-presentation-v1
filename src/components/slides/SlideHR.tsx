"use client";
import { motion } from "framer-motion";
import { IconUsers, IconCheck } from "../shared/Icons";

export default function SlideHR() {
  const features = [
    "İşçi idarəetməsi və rol əsaslı səlahiyyətlər",
    "Davamiyyət və icazələrin avtomatik uçotu",
    "Maaş, bonus və performans analitikası",
    "Real-time HR hesabatları və trend analizi",
  ];

  return (
    <div className="relative w-full h-full flex items-center p-16 overflow-hidden" style={{ background: "#06071a" }}>
      <div className="absolute inset-0 mesh-gradient opacity-30"/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#818cf8", top: "-20%", left: "-15%", opacity: 0.25 }}/>
      <div className="aurora-blob" style={{ width: 400, height: 400, background: "#a78bfa", bottom: "-15%", right: "-10%", opacity: 0.2, animationDelay: "-8s" }}/>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-[1fr_1.1fr] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6"
          >
            <IconUsers size={16}/>
            <span className="text-white/80 text-xs tracking-wider uppercase font-semibold">Module 01 — HR</span>
          </motion.div>

          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="text-[3.5rem] font-black text-white leading-[1.05] mb-6 tracking-[-0.03em]">
            İnsan resurslarını deyil,<br/>
            <span className="gradient-text-premium">insan potensialını idarə edin.</span>
          </motion.h2>

          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-lg text-white/75 leading-relaxed mb-8">
            HR modulumuz işçilərin davamiyyətini, performansını və motivasiyasını vahid sistemdə birləşdirir. Artıq hər bir qərar təxminlə deyil, <span className="gradient-text-premium font-semibold">real göstəricilərlə</span> verilir.
          </motion.p>

          <div className="space-y-3">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 + i * 0.12, duration: 0.6 }} whileHover={{ x: 8 }} className="flex items-center gap-3 text-white/90 group cursor-default">
                <IconCheck size={22}/>
                <span className="group-hover:text-white transition-colors">{f}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 1 }} className="relative">
          <motion.div
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -inset-6 rounded-3xl blur-3xl opacity-40"
            style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa)" }}
          />

          <div className="relative glass-strong rounded-3xl p-6 overflow-hidden">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                style={{ boxShadow: "0 8px 20px rgba(99,102,241,0.4)" }}
              >
                <IconUsers size={28}/>
              </motion.div>
              <div>
                <div className="text-white font-bold">HR Dashboard</div>
                <div className="text-white/50 text-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>
                  Live updates
                </div>
              </div>
              <div className="ml-auto flex gap-1">
                {[...Array(3)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-white/20"/>)}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: "Total", value: "247", gradient: "from-violet-500 to-indigo-500" },
                { label: "Active", value: "89%", gradient: "from-emerald-500 to-cyan-500" },
                { label: "Retention", value: "94%", gradient: "from-amber-500 to-orange-500" },
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ y: 20, opacity: 0 }} 
                  animate={{ y: 0, opacity: 1 }} 
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="glass rounded-xl p-3"
                >
                  <div className="text-white/50 text-xs mb-1">{stat.label}</div>
                  <div className={`text-2xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>{stat.value}</div>
                </motion.div>
              ))}
            </div>

            <div className="glass rounded-2xl p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-white/80 text-sm font-medium">Performans Trendi</div>
                <div className="text-green-400 text-xs font-semibold">+12%</div>
              </div>
              <svg viewBox="0 0 300 80" className="w-full">
                <defs>
                  <linearGradient id="hrAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#818cf8" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <motion.path
                  d="M 0 60 Q 30 40 50 45 T 100 30 T 150 35 T 200 20 T 250 15 T 300 10 L 300 80 L 0 80 Z"
                  fill="url(#hrAreaGrad)"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
                />
                <motion.path
                  d="M 0 60 Q 30 40 50 45 T 100 30 T 150 35 T 200 20 T 250 15 T 300 10"
                  stroke="#a78bfa" strokeWidth="2.5" fill="none"
                  initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2, duration: 2 }}
                />
                {[{x:50,y:45},{x:100,y:30},{x:150,y:35},{x:200,y:20},{x:250,y:15}].map((p, i) => (
                  <motion.g key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2 + i * 0.1 }}>
                    <circle cx={p.x} cy={p.y} r="5" fill="#a78bfa" opacity="0.3"/>
                    <circle cx={p.x} cy={p.y} r="3" fill="#c084fc"/>
                  </motion.g>
                ))}
              </svg>
            </div>

            <div className="space-y-2">
              {[
                { name: "Əli Məmmədov", role: "Senior Developer", performance: 92 },
                { name: "Nigar Əhmədova", role: "Product Manager", performance: 88 },
                { name: "Rəşad Hüseynov", role: "UX Designer", performance: 95 },
              ].map((emp, i) => (
                <motion.div 
                  key={i} 
                  initial={{ x: -20, opacity: 0 }} 
                  animate={{ x: 0, opacity: 1 }} 
                  transition={{ delay: 1.5 + i * 0.1 }} 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-2.5 glass rounded-xl cursor-pointer"
                >
                  <motion.div 
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-primary via-accent to-purple-400 flex items-center justify-center text-white text-xs font-bold"
                  >
                    {emp.name.charAt(0)}
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-white text-sm font-medium">{emp.name}</div>
                    <div className="text-white/50 text-xs">{emp.role}</div>
                  </div>
                  <div className="text-white/70 text-xs font-mono">{emp.performance}%</div>
                  <div className="w-16 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${emp.performance}%` }} transition={{ delay: 1.8 + i * 0.1, duration: 1 }} className="h-full bg-gradient-to-r from-primary to-accent"/>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
