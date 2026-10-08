"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { IconCheck, IconSparkle } from "../shared/Icons";
import KineticGrid from "@/components/ui/kinetic-grid";

export default function SlideCapabilities() {
  const { t } = useLocale();

  return (
    <KineticGrid className="w-full h-full flex items-center justify-center p-16">
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-2 gap-16 items-center">
        {/* Left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 border border-primary/30"
          >
            <IconSparkle size={14} className="text-primary-light" />
            <span className="text-primary-light text-xs tracking-wider uppercase font-semibold">
              {t.badges.capabilities}
            </span>
          </motion.div>

          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-[3.5rem] font-black text-white leading-[1.05] mb-4 tracking-[-0.03em]"
          >
            {t.slideCapabilities.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl gradient-text-premium font-semibold mb-8"
          >
            {t.slideCapabilities.subtitle}
          </motion.p>

          <div className="space-y-3.5">
            {t.slideCapabilities.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                whileHover={{ x: 8 }}
                className="flex items-start gap-3 text-white/80 group cursor-default"
              >
                <div className="mt-0.5 text-primary-light group-hover:scale-110 transition-transform">
                  <IconCheck size={22} />
                </div>
                <span className="leading-relaxed group-hover:text-white transition-colors">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right column — Glass interactive cards */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative"
        >
          {/* Ambient Glow */}
          <div
            className="absolute -inset-4 rounded-3xl blur-3xl opacity-30 pointer-events-none"
            style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa)" }}
          />

          <div className="relative glass-strong rounded-3xl p-7 overflow-hidden border border-white/15 backdrop-blur-2xl">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-black text-white mb-1.5">
                {t.slideFlexibility.title}{" "}
                <span className="gradient-text-premium">
                  {t.slideFlexibility.titleHighlight}
                </span>
              </h3>
              <p className="text-xs text-white/60 leading-relaxed max-w-md mx-auto">
                {t.slideFlexibility.desc}
              </p>
            </div>

            <div className="space-y-3">
              {t.slideFlexibility.items.map((it, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 6 }}
                  className="relative p-3.5 rounded-2xl glass border border-white/10 group cursor-default overflow-hidden"
                >
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: "linear",
                    }}
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
                    }}
                  />
                  <div className="relative flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30">
                      <span className="text-white text-xs font-black">{i + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-bold text-sm mb-0.5 group-hover:text-primary-light transition-colors">
                        {it.title}
                      </div>
                      <div className="text-white/60 text-xs leading-relaxed">
                        {it.desc}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </KineticGrid>
  );
}
