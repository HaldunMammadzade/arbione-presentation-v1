"use client";
import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { IconUsers, IconLocation, IconTask, IconChart, IconSparkle } from "../shared/Icons";
import { useLocale } from "@/contexts/LocaleContext";

// 3D tilt card with mouse tracking
function TiltCard({
  children,
  className,
  style,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay: number;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -10, y: dx * 10 });
  }, []);

  const resetTilt = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  return (
    <motion.div
      initial={{ x: 0, opacity: 0, scale: 0.9 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetTilt}
      className={`cursor-default ${className}`}
      style={{
        ...style,
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.04 : 1})`,
        transition: isHovered ? "transform 0.1s ease" : "transform 0.4s ease",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
}

export default function SlideFourModules() {
  const { t } = useLocale();
  const moduleIcons = [
    <IconUsers size={48} key="u"/>,
    <IconLocation size={48} key="l"/>,
    <IconTask size={48} key="t"/>,
    <IconChart size={48} key="c"/>,
  ];
  const gradients = [
    "from-violet-500 to-indigo-600",
    "from-orange-400 to-rose-500",
    "from-amber-400 to-orange-500",
    "from-cyan-400 to-blue-500",
  ];
  const glowColors = [
    "rgba(139,92,246,0.5)",
    "rgba(251,146,60,0.5)",
    "rgba(251,191,36,0.5)",
    "rgba(34,211,238,0.5)",
  ];

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center p-16 overflow-hidden noise-overlay"
      style={{ background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #ede9fe 100%)" }}
    >
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
        <span className="text-primary text-xs tracking-wider uppercase font-semibold">{t.badges.theResult}</span>
      </motion.div>

      <motion.h2
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-10 text-[5rem] font-black text-slate-900 text-center mb-6 tracking-[-0.04em] leading-none flex items-baseline gap-8 justify-center flex-wrap"
      >
        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, duration: 0.7, ease: "backOut" }}>
          <span className="gradient-text-premium">4</span><span className="text-slate-900"> {t.slide16.title1}</span>
        </motion.span>
        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, duration: 0.7, ease: "backOut" }}>
          <span className="gradient-text-premium">1</span><span className="text-slate-900"> {t.slide16.title2}</span>
        </motion.span>
        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, duration: 0.7, ease: "backOut" }}>
          <span className="gradient-text-premium">0</span><span className="text-slate-900"> {t.slide16.title3}</span>
        </motion.span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 text-lg text-slate-600 text-center max-w-3xl mb-12 leading-relaxed"
      >
        {t.slide16.desc} <span className="text-slate-900 font-semibold">{t.slide16.descBold}</span>
      </motion.p>

      <div className="relative z-10 max-w-5xl w-full grid grid-cols-2 gap-4">
        {t.slide16.modules.map((m, i) => (
          <TiltCard key={i} delay={1.3 + i * 0.15}>
            <div
              className="group relative bg-white rounded-2xl p-6 overflow-hidden h-full"
              style={{ boxShadow: `0 10px 30px rgba(99,102,241,0.08)` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[i]} opacity-0 group-hover:opacity-8 transition-opacity duration-500`}/>

              {/* Corner glow blob */}
              <div
                className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${gradients[i]} transition-opacity duration-500 blur-2xl`}
                style={{ opacity: 0.12 }}
              />

              {/* Glow border on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 1.5px ${glowColors[i]}, 0 20px 40px ${glowColors[i]}`,
                }}
              />

              {/* Shimmer sweep */}
              <motion.div
                animate={{ x: ["-120%", "220%"] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.6, ease: "linear" }}
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)" }}
              />

              <div className="relative flex items-center gap-6">
                <motion.div
                  animate={{ y: [0, -6, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                  className="flex-shrink-0"
                  style={{ filter: `drop-shadow(0 4px 12px ${glowColors[i]})` }}
                >
                  {moduleIcons[i]}
                </motion.div>
                <div className="flex-1">
                  <div className={`text-4xl font-black bg-gradient-to-r ${gradients[i]} bg-clip-text text-transparent mb-1 tracking-tight`}>
                    {m.name}
                  </div>
                  <div className="text-slate-700 font-medium">{m.desc}</div>
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
}
