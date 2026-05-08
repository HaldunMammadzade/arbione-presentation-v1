"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { IconSparkle } from "../shared/Icons";

const benefitIcons = [
  <svg key="1" width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2.5"/><path d="M20 12v8l5 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>,
  <svg key="2" width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="6" fill="currentColor"/><circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2"/><path d="M20 4v6M20 30v6M4 20h6M30 20h6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>,
  <svg key="3" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M8 30l8-8 6 6 10-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="32" cy="16" r="3" fill="currentColor"/></svg>,
  <svg key="4" width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="2.5"/><circle cx="20" cy="20" r="3" fill="currentColor"/><path d="M20 8v4M20 28v4M8 20h4M28 20h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>,
  <svg key="5" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20 4l12 5v10c0 8-5 14-12 16-7-2-12-8-12-16V9l12-5z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/><path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="6" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M8 24c0-6 5-10 12-10s12 4 12 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="2.5"/><path d="M14 30l6-6 6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

const benefitColors = [
  "from-cyan-400 to-blue-500",
  "from-violet-400 to-purple-500",
  "from-emerald-400 to-teal-500",
  "from-amber-400 to-orange-500",
  "from-rose-400 to-pink-500",
  "from-indigo-400 to-violet-500",
];

export default function SlideBenefits() {
  const { t } = useLocale();

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-16 overflow-hidden" style={{ background: "#06071a" }}>
      <div className="absolute inset-0 mesh-gradient opacity-30"/>
      <div className="absolute inset-0 grid-bg opacity-50"/>
      <div className="aurora-blob" style={{ width: 600, height: 600, background: "#6366f1", top: "-20%", left: "-15%", opacity: 0.25 }}/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#22d3ee", bottom: "-15%", right: "-15%", opacity: 0.2, animationDelay: "-10s" }}/>

      <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
        <IconSparkle size={14} className="text-accent"/>
        <span className="text-white/80 text-xs tracking-[0.3em] uppercase font-semibold">{t.badges.benefits}</span>
      </motion.div>

      <motion.h2 initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="relative z-10 text-[4rem] font-black text-white text-center mb-3 tracking-[-0.03em] leading-tight">
        {t.slideBenefits.title}
      </motion.h2>
      <motion.h3 initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15, duration: 0.9 }} className="relative z-10 text-2xl gradient-text-premium font-bold mb-5">
        {t.slideBenefits.subtitle}
      </motion.h3>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="relative z-10 text-base text-white/70 max-w-3xl text-center mb-12 leading-relaxed">
        {t.slideBenefits.desc}
      </motion.p>

      <div className="relative z-10 grid grid-cols-3 gap-5 max-w-5xl w-full">
        {t.slideBenefits.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ y: 60, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            whileHover={{ y: -8, scale: 1.04 }}
            className="relative group cursor-default"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
              className="absolute -inset-2 rounded-2xl blur-xl opacity-30"
              style={{ background: `linear-gradient(135deg, rgba(167,139,250,0.4), rgba(34,211,238,0.4))` }}
            />
            <div className="relative glass-strong rounded-2xl p-5 overflow-hidden h-full">
              <div className={`absolute inset-0 bg-gradient-to-br ${benefitColors[i]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}/>
              
              <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }} className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefitColors[i]} flex items-center justify-center text-white mb-3`} style={{ boxShadow: "0 6px 16px rgba(99,102,241,0.3)" }}>
                {benefitIcons[i]}
              </motion.div>
              
              <div className={`text-lg font-bold bg-gradient-to-r ${benefitColors[i]} bg-clip-text text-transparent mb-1`}>
                {item.title}
              </div>
              <div className="text-white/70 text-sm">{item.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
