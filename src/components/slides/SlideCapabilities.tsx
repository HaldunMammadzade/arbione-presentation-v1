"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { IconCheck, IconSparkle } from "../shared/Icons";

export default function SlideCapabilities() {
  const { t } = useLocale();

  return (
    <div className="relative w-full h-full flex items-center p-16 overflow-hidden noise-overlay" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #ede9fe 100%)" }}>
      <div className="absolute inset-0 grid-bg-light opacity-40"/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#a78bfa", top: "-15%", left: "-10%", opacity: 0.12 }}/>
      <div className="aurora-blob" style={{ width: 400, height: 400, background: "#6366f1", bottom: "-10%", right: "-10%", opacity: 0.12, animationDelay: "-8s" }}/>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-2 gap-16 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <IconSparkle size={14} className="text-primary"/>
            <span className="text-primary text-xs tracking-wider uppercase font-semibold">{t.badges.capabilities}</span>
          </motion.div>

          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="text-[3.5rem] font-black text-slate-900 leading-[1.05] mb-4 tracking-[-0.03em]">
            {t.slideCapabilities.title}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-xl gradient-text-premium font-semibold mb-8">
            {t.slideCapabilities.subtitle}
          </motion.p>

          <div className="space-y-3">
            {t.slideCapabilities.items.map((item, i) => (
              <motion.div key={i} initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }} whileHover={{ x: 6 }} className="flex items-start gap-3 text-slate-700 group">
                <IconCheck size={22}/>
                <span className="leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 1 }} className="relative">
          <div className="relative bg-white rounded-3xl p-6 overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(99,102,241,0.15)" }}>
            <div className="text-center mb-5">
              <h3 className="text-xl font-black text-slate-900 mb-1">{t.slideFlexibility.title} <span className="gradient-text-premium">{t.slideFlexibility.titleHighlight}</span></h3>
              <p className="text-xs text-slate-500 leading-relaxed">{t.slideFlexibility.desc}</p>
            </div>

            <div className="space-y-2.5">
              {t.slideFlexibility.items.map((it, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="relative p-3 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 group cursor-default overflow-hidden"
                >
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.1), transparent)" }}
                  />
                  <div className="relative flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-slate-900 font-bold text-sm">{it.title}</div>
                      <div className="text-slate-600 text-xs">{it.desc}</div>
                    </div>
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
