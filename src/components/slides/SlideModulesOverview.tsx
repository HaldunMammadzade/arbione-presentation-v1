"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { IconSparkle } from "../shared/Icons";

const moduleIcons = [
  <svg key="hr" width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="11" r="5" stroke="currentColor" strokeWidth="2"/><path d="M6 26c0-5 4-8 10-8s10 3 10 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  <svg key="att" width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/><path d="M16 9v7l5 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  <svg key="pay" width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2"/><circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="2"/><path d="M8 12h2M22 20h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  <svg key="perf" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M4 24l6-6 5 4 8-10 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="28" cy="17" r="2" fill="currentColor"/></svg>,
  <svg key="rep" width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="6" y="4" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M11 12h10M11 17h10M11 22h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  <svg key="reg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 4l10 4v8c0 6-4 11-10 12-6-1-10-6-10-12V8l10-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M11 16l4 4 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="proj" width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M9 12h14M9 17h10M9 22h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  <svg key="gps" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 4c-5 0-9 4-9 9 0 6 9 15 9 15s9-9 9-15c0-5-4-9-9-9z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><circle cx="16" cy="13" r="3" stroke="currentColor" strokeWidth="2"/></svg>,
  <svg key="dev" width="32" height="32" viewBox="0 0 32 32" fill="none"><rect x="6" y="4" width="20" height="24" rx="3" stroke="currentColor" strokeWidth="2"/><circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2"/><path d="M14 22h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
  <svg key="sur" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6 8h20v14H10l-4 4V8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><circle cx="12" cy="15" r="1" fill="currentColor"/><circle cx="16" cy="15" r="1" fill="currentColor"/><circle cx="20" cy="15" r="1" fill="currentColor"/></svg>,
  <svg key="inv" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M4 10l12-6 12 6v12l-12 6-12-6V10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M4 10l12 6 12-6M16 16v12" stroke="currentColor" strokeWidth="2"/></svg>,
  <svg key="ann" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M22 8L8 14v6l14 6V8z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M8 14v6h2v6h4v-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>,
];

const moduleColors = [
  "from-violet-500 to-indigo-600",
  "from-cyan-400 to-blue-500",
  "from-emerald-400 to-teal-500",
  "from-amber-400 to-orange-500",
  "from-rose-400 to-pink-500",
  "from-purple-400 to-fuchsia-500",
  "from-blue-400 to-indigo-500",
  "from-orange-400 to-red-500",
  "from-slate-400 to-zinc-500",
  "from-pink-400 to-rose-500",
  "from-yellow-400 to-amber-500",
  "from-lime-400 to-green-500",
];

export default function SlideModulesOverview() {
  const { t } = useLocale();

  return (
    <div className="relative w-full h-full flex items-center p-2 sm:p-6 lg:p-10 overflow-y-auto lg:overflow-hidden overflow-x-hidden noise-overlay" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #ede9fe 100%)" }}>
      <div className="absolute inset-0 grid-bg-light opacity-40"/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#a78bfa", top: "-15%", right: "-10%", opacity: 0.12 }}/>
      <div className="aurora-blob" style={{ width: 400, height: 400, background: "#22d3ee", bottom: "-10%", left: "-5%", opacity: 0.1, animationDelay: "-8s" }}/>

      <div className="relative z-10 max-w-[1500px] mx-auto w-full py-2 sm:py-4 lg:py-0 pb-12 sm:pb-20 lg:pb-0">
        <div className="text-center mb-1 sm:mb-6 lg:mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-primary/10 border border-primary/20 mb-1 sm:mb-3"
          >
            <IconSparkle size={14} className="text-primary"/>
            <span className="text-primary text-xs tracking-wider uppercase font-semibold">{t.badges.modules}</span>
          </motion.div>

          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="text-xl sm:text-3xl lg:text-[2.8rem] font-black text-slate-900 leading-[1.05] mb-1 sm:mb-2 tracking-[-0.03em]">
            {t.slideModulesOverview.title} <span className="gradient-text-premium">{t.slideModulesOverview.titleHighlight}</span>
          </motion.h2>

          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-xs sm:text-sm text-slate-600 leading-snug sm:leading-relaxed max-w-3xl mx-auto">
            {t.slideModulesOverview.desc}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2.5">
          {t.slideModulesOverview.modules.map((m, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="relative bg-white rounded-2xl p-1.5 sm:p-3.5 cursor-default overflow-hidden group"
              style={{ boxShadow: "0 4px 16px rgba(99,102,241,0.08)" }}
            >
              <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br ${moduleColors[i]} opacity-10 group-hover:opacity-30 transition-opacity blur-xl`}/>
              
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
                  className={`w-8 sm:w-10 h-8 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br ${moduleColors[i]} flex items-center justify-center text-white mb-1 sm:mb-2`}
                  style={{ boxShadow: `0 4px 12px rgba(99,102,241,0.2)` }}
                >
                  {moduleIcons[i]}
                </motion.div>
                
                <div className={`text-xs sm:text-base font-bold bg-gradient-to-r ${moduleColors[i]} bg-clip-text text-transparent mb-0.5 sm:mb-1`}>
                  {m.name}
                </div>
                <div className="text-slate-600 text-[10px] sm:text-xs leading-tight sm:leading-snug">{m.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
