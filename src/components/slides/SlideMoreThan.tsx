"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { IconSparkle, IconLightning, IconTarget, IconClock } from "../shared/Icons";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, v => Math.round(v));
  useEffect(() => { animate(count, target, { duration: 2, delay: 1.5 }); }, [target, count]);
  return (<><motion.span>{rounded}</motion.span>{suffix}</>);
}

export default function SlideMoreThan() {
  return (
    <div className="relative w-full h-full flex items-center p-16 overflow-hidden" style={{ background: "#06071a" }}>
      <div className="absolute inset-0 mesh-gradient opacity-30"/>
      <div className="absolute inset-0 grid-bg opacity-40"/>
      <div className="aurora-blob" style={{ width: 600, height: 600, background: "#6366f1", top: "-20%", right: "-15%", opacity: 0.3 }}/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#a78bfa", bottom: "-20%", left: "-15%", opacity: 0.25, animationDelay: "-10s" }}/>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-[1fr_1fr] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6"
          >
            <IconSparkle size={14} className="text-accent"/>
            <span className="text-white/80 text-xs tracking-wider uppercase font-semibold">Beyond a Platform</span>
          </motion.div>

          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="text-[4.5rem] font-black leading-[1.05] mb-8 tracking-[-0.03em] gradient-text-premium">
            Bir platformadan<br/>daha çoxu
          </motion.h2>

          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-xl text-white/80 leading-relaxed mb-6">
            Arbione sadəcə bir platforma deyil — <span className="gradient-text-premium font-semibold">xərclərinizi azaldan, gələcəyə investisiya edən həllər mərkəzidir.</span>
          </motion.p>

          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="text-white/70 text-base leading-relaxed mb-8">
            Arbione şirkətlər üçün idarəetməni sadələşdirir, resursları optimallaşdırır və məhsuldarlığı artırır.
          </motion.p>

          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: <IconLightning size={32}/>, value: 30, suffix: "%", label: "xərc azalması", gradient: "from-amber-400 to-orange-500" },
              { icon: <IconTarget size={32}/>, value: 2, suffix: "×", label: "daha sürətli", gradient: "from-primary to-accent" },
              { icon: <IconClock size={32}/>, value: 3000, suffix: "h", label: "illik qənaət", gradient: "from-pink-400 to-purple-500" },
            ].map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ y: 40, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.8 + i * 0.15 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="relative glass-strong rounded-2xl p-4 text-center overflow-hidden group cursor-default"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}/>
                <div className="relative">
                  <div className="flex justify-center mb-2">{s.icon}</div>
                  <div className="text-3xl font-black gradient-text-premium leading-none"><Counter target={s.value} suffix={s.suffix}/></div>
                  <div className="text-white/60 text-xs mt-2 leading-tight">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 1 }} className="relative h-[550px]" style={{ perspective: 1500 }}>
          {[
            { rotate: -10, top: "3%", left: "5%", gradient: "from-primary to-accent", delay: 0.6, type: "chart" },
            { rotate: 8, top: "8%", right: "5%", gradient: "from-cyan-400 to-blue-500", delay: 0.8, type: "metric" },
            { rotate: -5, bottom: "20%", left: "10%", gradient: "from-amber-400 to-orange-500", delay: 1, type: "progress" },
            { rotate: 5, bottom: "3%", right: "10%", gradient: "from-pink-400 to-purple-500", delay: 1.2, type: "pie" },
          ].map((card, i) => {
            const { delay, gradient, type, rotate, ...pos } = card;
            return (
              <motion.div
                key={i}
                initial={{ scale: 0, rotateY: -30, opacity: 0 }}
                animate={{ scale: 1, rotateY: 0, opacity: 1, rotate: rotate }}
                transition={{ delay, duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ scale: 1.1, rotate: 0, rotateY: 10, zIndex: 10 }}
                className="absolute w-56 h-72 cursor-pointer"
                style={{ ...pos, transformStyle: "preserve-3d" }}
              >
                <div className={`relative w-full h-full rounded-3xl bg-gradient-to-br ${gradient} p-5 overflow-hidden`} style={{ boxShadow: "0 30px 60px rgba(99,102,241,0.4), inset 0 1px 0 rgba(255,255,255,0.2)" }}>
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, delay: delay + 1, ease: "linear" }}
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }}
                  />
                  
                  <div className="flex items-center justify-between mb-4 relative">
                    <div className="text-white/90 text-xs font-semibold tracking-wider uppercase">Module</div>
                    <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse"/>
                  </div>

                  {type === "chart" && (
                    <div className="relative">
                      <div className="text-white text-3xl font-black mb-3">Analytics</div>
                      <svg viewBox="0 0 180 80" className="w-full">
                        <motion.path 
                          d="M 0 60 L 30 50 L 60 55 L 90 35 L 120 40 L 150 20 L 180 15" 
                          stroke="white" strokeWidth="2" fill="none"
                          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: delay + 0.5, duration: 2 }}
                        />
                        <motion.path 
                          d="M 0 60 L 30 50 L 60 55 L 90 35 L 120 40 L 150 20 L 180 15 L 180 80 L 0 80 Z" 
                          fill="rgba(255,255,255,0.2)"
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: delay + 1.5 }}
                        />
                      </svg>
                    </div>
                  )}

                  {type === "metric" && (
                    <div className="relative">
                      <div className="text-white text-3xl font-black mb-3">Revenue</div>
                      <div className="text-white/80 text-xs mb-2">This month</div>
                      <div className="text-white text-4xl font-black">₼124K</div>
                      <div className="flex items-center gap-1.5 mt-2">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 2L10 8H2z" fill="white"/></svg>
                        <span className="text-white text-sm font-bold">+23%</span>
                      </div>
                    </div>
                  )}

                  {type === "progress" && (
                    <div className="relative">
                      <div className="text-white text-3xl font-black mb-4">Tasks</div>
                      <div className="space-y-3">
                        {[{l: "Done", v: 80}, {l: "Active", v: 55}, {l: "Queue", v: 30}].map((p, j) => (
                          <div key={j}>
                            <div className="flex justify-between text-xs text-white/80 mb-1"><span>{p.l}</span><span>{p.v}%</span></div>
                            <div className="h-1.5 rounded-full bg-white/20 overflow-hidden">
                              <motion.div initial={{ width: 0 }} animate={{ width: `${p.v}%` }} transition={{ delay: delay + 0.5 + j * 0.2, duration: 1 }} className="h-full bg-white"/>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {type === "pie" && (
                    <div className="relative flex flex-col items-center">
                      <div className="text-white text-3xl font-black mb-2">Split</div>
                      <svg viewBox="0 0 100 100" className="w-32 h-32">
                        <motion.circle cx="50" cy="50" r="38" fill="none" stroke="white" strokeWidth="14" strokeDasharray="120 240" initial={{ strokeDashoffset: 240 }} animate={{ strokeDashoffset: 120 }} transition={{ delay: delay + 0.5, duration: 1.5 }} transform="rotate(-90 50 50)" strokeLinecap="round"/>
                        <motion.circle cx="50" cy="50" r="38" fill="none" stroke="white" strokeWidth="14" strokeDasharray="60 240" opacity="0.7" initial={{ strokeDashoffset: 240 }} animate={{ strokeDashoffset: 180 }} transition={{ delay: delay + 0.8, duration: 1.2 }} transform="rotate(30 50 50)" strokeLinecap="round"/>
                        <motion.circle cx="50" cy="50" r="38" fill="none" stroke="white" strokeWidth="14" strokeDasharray="40 240" opacity="0.4" initial={{ strokeDashoffset: 240 }} animate={{ strokeDashoffset: 200 }} transition={{ delay: delay + 1.1, duration: 1 }} transform="rotate(120 50 50)" strokeLinecap="round"/>
                      </svg>
                    </div>
                  )}

                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }} 
                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full border-2 border-white/40 border-t-white"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
