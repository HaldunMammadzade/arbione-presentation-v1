"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { IconSparkle } from "../shared/Icons";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, v => Math.round(v));
  useEffect(() => { animate(count, target, { duration: 2.5, delay: 0.8, ease: [0.25, 1, 0.5, 1] }); }, [target, count]);
  return (<><motion.span>{rounded}</motion.span>{suffix}</>);
}

const IconCostDown = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="costGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ef4444"/>
        <stop offset="100%" stopColor="#f97316"/>
      </linearGradient>
      <linearGradient id="costGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24"/>
        <stop offset="100%" stopColor="#f59e0b"/>
      </linearGradient>
    </defs>
    <rect x="6" y="38" width="10" height="18" rx="2" fill="url(#costGrad1)" opacity="0.9"/>
    <rect x="20" y="28" width="10" height="28" rx="2" fill="url(#costGrad1)" opacity="0.7"/>
    <rect x="34" y="20" width="10" height="36" rx="2" fill="url(#costGrad1)" opacity="0.5"/>
    <rect x="48" y="14" width="10" height="42" rx="2" fill="url(#costGrad1)" opacity="0.3"/>
    
    <path d="M 10 20 L 54 42" stroke="url(#costGrad2)" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4"/>
    
    <g transform="translate(6, 14)">
      <circle cx="6" cy="6" r="6" fill="url(#costGrad2)"/>
      <path d="M 3 6 L 9 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </g>
    
    <g transform="translate(48, 38)">
      <circle cx="6" cy="6" r="7" fill="#10b981"/>
      <path d="M 3 6 L 5 8 L 9 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </svg>
);

const IconSpeedBoost = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="speedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1"/>
        <stop offset="100%" stopColor="#a78bfa"/>
      </linearGradient>
      <linearGradient id="speedTrail" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0"/>
        <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.8"/>
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="28" fill="none" stroke="url(#speedGrad)" strokeWidth="2" opacity="0.3"/>
    <path d="M 32 4 A 28 28 0 0 1 60 32" stroke="url(#speedGrad)" strokeWidth="4" strokeLinecap="round" fill="none"/>
    
    <path d="M 4 40 L 20 40" stroke="url(#speedTrail)" strokeWidth="3" strokeLinecap="round"/>
    <path d="M 2 34 L 16 34" stroke="url(#speedTrail)" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
    <path d="M 6 28 L 18 28" stroke="url(#speedTrail)" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    
    <g transform="translate(24, 18)">
      <path d="M 10 0 L 2 12 L 8 12 L 6 24 L 14 10 L 8 10 Z" fill="url(#speedGrad)" stroke="white" strokeWidth="0.5"/>
    </g>
    
    <circle cx="32" cy="32" r="3" fill="white"/>
  </svg>
);

const IconZenCircle = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
    <defs>
      <linearGradient id="zenGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22d3ee"/>
        <stop offset="100%" stopColor="#10b981"/>
      </linearGradient>
      <linearGradient id="zenGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34d399"/>
        <stop offset="100%" stopColor="#22d3ee"/>
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="28" fill="none" stroke="url(#zenGrad1)" strokeWidth="1.5" opacity="0.4"/>
    <circle cx="32" cy="32" r="22" fill="none" stroke="url(#zenGrad1)" strokeWidth="1.5" opacity="0.6"/>
    <circle cx="32" cy="32" r="16" fill="url(#zenGrad2)" opacity="0.15"/>
    <circle cx="32" cy="32" r="16" fill="none" stroke="url(#zenGrad2)" strokeWidth="2"/>
    
    <path d="M 22 32 L 29 39 L 42 26" stroke="url(#zenGrad2)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    
    <circle cx="32" cy="4" r="2" fill="#22d3ee"/>
    <circle cx="60" cy="32" r="2" fill="#10b981"/>
    <circle cx="32" cy="60" r="2" fill="#22d3ee"/>
    <circle cx="4" cy="32" r="2" fill="#10b981"/>
  </svg>
);

export default function SlideOnePlatform() {
  const items = [
    { icon: <IconCostDown/>, value: 30, suffix: "%", label: "Xərclərdə", subtitle: "azalma", gradient: "from-red-500 to-orange-500", glowColor: "rgba(251,146,60,0.4)" },
    { icon: <IconSpeedBoost/>, value: 2, suffix: "×", label: "", subtitle: "idarəetmə sürəti", gradient: "from-primary to-accent", glowColor: "rgba(167,139,250,0.4)" },
    { icon: <IconZenCircle/>, value: 0, suffix: "", label: "", subtitle: "öyrənmə çətinliyi", gradient: "from-cyan-400 to-emerald-400", glowColor: "rgba(34,211,238,0.4)" },
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-16 overflow-hidden" style={{ background: "#0a0b1e" }}>
      <div className="absolute inset-0 grid-bg opacity-60"/>
      <div className="absolute inset-0 mesh-gradient opacity-40"/>
      <div className="aurora-blob" style={{ width: 600, height: 600, background: "#6366f1", top: "-20%", left: "-20%", opacity: 0.3 }}/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#a78bfa", bottom: "-20%", right: "-20%", opacity: 0.25, animationDelay: "-10s" }}/>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
      >
        <IconSparkle size={14} className="text-accent"/>
        <span className="text-white/80 text-xs tracking-[0.3em] uppercase font-semibold">The Result</span>
      </motion.div>

      <motion.div initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative z-10 text-center mb-6">
        <h2 className="text-[4rem] font-black tracking-[-0.03em] leading-[1.05]">
          <span className="text-white">Tək Platforma. </span>
          <span className="text-white">Vahid İdarəetmə. </span><br/>
          <span className="gradient-text-premium">Effektiv nəticə.</span>
        </h2>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="relative z-10 max-w-4xl text-center mb-16 text-white/75 text-lg leading-relaxed space-y-1">
        <p>Arbione — HR, GPS, Tapşırıq və Hesabat sistemlərini bir mərkəzdə birləşdirən vahid platformadır.</p>
        <p>İnterfeys sadədir, adaptasiya sıfır vaxt tələb edir.</p>
        <p className="text-white/90 font-medium mt-3">Bütün modullar inteqrasiya olunub — <span className="gradient-text-premium font-bold">bir sistem, bir komanda, bir idarəetmə.</span></p>
      </motion.div>

      <div className="relative z-10 grid grid-cols-3 gap-8 max-w-5xl w-full">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ y: 80, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            whileHover={{ y: -15, scale: 1.05 }}
            className="relative group cursor-default"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
              className="absolute -inset-4 rounded-3xl blur-2xl opacity-50"
              style={{ background: item.glowColor }}
            />
            
            <div className="relative glass-strong rounded-3xl p-8 text-center overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}/>
              
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                className="inline-flex items-center justify-center mb-6"
              >
                {item.icon}
              </motion.div>
              
              {item.label && <div className="text-white/70 text-xl mb-2 font-medium">{item.label}</div>}
              
              <div className="text-7xl font-black gradient-text-premium leading-none mb-4 tracking-tighter">
                <AnimatedNumber target={item.value} suffix={item.suffix}/>
              </div>
              
              <div className="text-white/90 text-lg font-medium">{item.subtitle}</div>

              <motion.div 
                animate={{ scaleX: [0, 1, 0] }} 
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }} 
                className={`mt-6 h-0.5 w-full bg-gradient-to-r ${item.gradient} origin-left`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
