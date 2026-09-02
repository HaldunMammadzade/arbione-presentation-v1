"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { IconSparkle } from "../shared/Icons";
import { useLocale } from "@/contexts/LocaleContext";
import InteractiveTiltCard from "../shared/InteractiveTiltCard";
import PlatformResultDashboard from "../shared/PlatformResultDashboard";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, v => Math.round(v));
  useEffect(() => { animate(count, target, { duration: 2.5, delay: 0.8, ease: [0.25, 1, 0.5, 1] }); }, [target, count]);
  return (<><motion.span>{rounded}</motion.span>{suffix}</>);
}

export default function SlideOnePlatform() {
  const { t } = useLocale();

  return (
    <div className="relative w-full h-full flex items-center justify-center p-12 overflow-hidden" style={{ background: "#0a0b1e" }}>
      <div className="absolute inset-0 grid-bg opacity-60"/>
      <div className="absolute inset-0 mesh-gradient opacity-40"/>
      <div className="aurora-blob" style={{ width: 600, height: 600, background: "#6366f1", top: "-20%", left: "-20%", opacity: 0.3 }}/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#a78bfa", bottom: "-20%", right: "-20%", opacity: 0.25, animationDelay: "-10s" }}/>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-[1fr_1.3fr] gap-12 items-center">
        <div>
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <IconSparkle size={14} className="text-accent"/>
            <span className="text-white/80 text-xs tracking-[0.3em] uppercase font-semibold">{t.badges.theResult}</span>
          </motion.div>

          <motion.div initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="mb-6">
            <h2 className="text-[3rem] font-black tracking-[-0.03em] leading-[1.05]">
              <span className="text-white">{t.slide9.titlePart1}</span><br/>
              <span className="gradient-text-premium">{t.slide9.titlePart2}</span>
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-white/75 text-base leading-relaxed space-y-1 mb-10">
            <p>{t.slide9.desc1}</p>
            <p>{t.slide9.desc2}</p>
            <p className="text-white/90 font-medium mt-3">{t.slide9.desc3Prefix} <span className="gradient-text-premium font-bold">{t.slide9.desc3Highlight}</span></p>
          </motion.div>

          <div className="grid grid-cols-3 gap-4">
            {t.slide9.stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.7 }}
                className="glass-strong rounded-xl p-4 text-center"
              >
                <div className="text-3xl font-black gradient-text-premium leading-none mb-1">
                  <AnimatedNumber target={item.value} suffix={item.suffix}/>
                </div>
                <div className="text-white/70 text-xs">{item.subtitle}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <InteractiveTiltCard delay={0.5} glowColor="rgba(99, 102, 241, 0.35)" maxTilt={5}>
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -inset-4 rounded-3xl blur-3xl opacity-30 pointer-events-none"
            style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa, #22d3ee)" }}
          />
          <div className="relative rounded-2xl overflow-hidden" style={{ height: "420px" }}>
            <PlatformResultDashboard />
          </div>
        </InteractiveTiltCard>
      </div>
    </div>
  );
}
