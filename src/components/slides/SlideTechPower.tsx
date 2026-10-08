"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { IconUsers, IconTarget, IconShield } from "../shared/Icons";
import { useLocale } from "@/contexts/LocaleContext";

function Counter({ target, suffix = "+", delay = 0 }: { target: number; suffix?: string; delay?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  useEffect(() => {
    const tt = setTimeout(() => animate(count, target, { duration: 2.5, ease: [0.25, 1, 0.5, 1] }), delay);
    return () => clearTimeout(tt);
  }, [target, delay, count]);
  return (<div className="flex items-baseline"><motion.span>{rounded}</motion.span><span>{suffix}</span></div>);
}

export default function SlideTechPower() {
  const { t } = useLocale();
  const iconClass = "transition-all duration-500 group-hover:brightness-0 group-hover:invert";
  const shieldIconClass = "text-white transition-colors duration-500";
  const icons = [
    <IconUsers key="u" size={36} className={iconClass} />,
    <IconTarget key="t" size={36} className={iconClass} />,
    <IconShield key="s" size={36} className={shieldIconClass} />,
  ];
  const gradients = ["from-violet-500 to-indigo-600", "from-indigo-500 to-purple-600", "from-purple-500 to-fuchsia-600"];

  return (
    <div className="relative w-full h-full flex items-center p-4 sm:p-10 lg:p-16 overflow-y-auto lg:overflow-hidden overflow-x-hidden noise-overlay" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #ede9fe 100%)" }}>
      <div className="absolute inset-0 mesh-gradient-light"/>
      <div className="absolute inset-0 grid-bg-light opacity-50"/>
      <div className="aurora-blob" style={{ width: 400, height: 400, background: "#a78bfa", top: "-10%", right: "-10%", opacity: 0.15 }}/>
      <div className="aurora-blob hidden sm:block" style={{ width: 350, height: 350, background: "#818cf8", bottom: "-10%", left: "-10%", opacity: 0.15, animationDelay: "-8s" }}/>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center py-2 lg:py-0 pb-16 sm:pb-20 lg:pb-0">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-3 sm:mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"/>
            <span className="text-primary text-xs tracking-wider uppercase font-semibold">{t.badges.whoWeAre}</span>
          </motion.div>

          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, delay: 0.1 }} className="text-2xl sm:text-4xl lg:text-[3.5rem] font-black leading-[1.05] text-slate-900 mb-3 sm:mb-5 tracking-tight">
            {t.slide3.titlePart1} <br/>
            <span className="gradient-text">{t.slide3.titlePart2}</span>
          </motion.h2>

          <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }} className="inline-block">
            <div className="text-xl sm:text-3xl font-extrabold gradient-text-premium">{t.slide3.brand}</div>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.8 }} className="h-1 bg-gradient-to-r from-primary via-accent to-transparent rounded-full origin-left mt-1"/>
          </motion.div>
        </div>

        <div>
          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="text-sm sm:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-10">
            {t.slide3.desc}
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
            {t.slide3.stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ y: 80, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.15, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative bg-white rounded-3xl p-4 text-center cursor-pointer group overflow-hidden premium-shadow"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}/>
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${gradients[i]} opacity-10 group-hover:opacity-30 transition-opacity blur-2xl`}/>
                
                <div className="relative">
                  <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }} className="inline-flex items-center justify-center mb-2">
                    {icons[i]}
                  </motion.div>
                  
                  <div className="text-3xl font-black gradient-text leading-none tracking-tight transition-all group-hover:bg-none group-hover:!text-white group-hover:[-webkit-text-fill-color:white]">
                    <Counter target={s.num} delay={900 + i * 150}/>
                  </div>
                  <div className="text-xs text-slate-500 mt-2 uppercase tracking-widest font-semibold group-hover:text-white/90 transition-colors">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
