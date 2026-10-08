"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { IconWarning } from "../shared/Icons";
import { useLocale } from "@/contexts/LocaleContext";

export default function SlideProblem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useLocale();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const size = canvas.width = canvas.height = 500;

    let animId: number;
    let phase = 0;

    const animate = () => {
      ctx.clearRect(0, 0, size, size);
      phase += 0.005;

      const cx = size / 2;
      const cy = size / 2;

      ctx.lineCap = "round";
      
      for (let layer = 0; layer < 4; layer++) {
        ctx.beginPath();
        const layerOffset = layer * 0.5;
        const layerHue = layer / 4;
        
        for (let t = 0; t <= Math.PI * 6; t += 0.02) {
          const radius = 80 + Math.sin(t * 1.5 + phase + layerOffset) * 60 + layer * 15;
          const angle = t + phase * (1 + layer * 0.2);
          const x = cx + Math.cos(angle) * radius;
          const y = cy + Math.sin(angle * 1.3) * radius * 0.8;
          
          if (t === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        
        const grad = ctx.createLinearGradient(0, 0, size, size);
        grad.addColorStop(0, `rgba(99, 102, 241, ${0.7 - layer * 0.15})`);
        grad.addColorStop(0.5, `rgba(167, 139, 250, ${0.6 - layer * 0.1})`);
        grad.addColorStop(1, `rgba(244, 114, 182, ${0.5 - layer * 0.1})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 5 - layer;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#a78bfa";
        ctx.stroke();
      }
      
      ctx.shadowBlur = 0;

      const knotPositions = [
        { x: 120, y: 150 }, { x: 380, y: 180 }, { x: 150, y: 350 },
        { x: 350, y: 350 }, { x: 250, y: 100 }, { x: 250, y: 400 },
      ];
      
      knotPositions.forEach((p, i) => {
        const pulse = (Math.sin(phase * 3 + i) + 1) / 2;
        
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 30);
        glow.addColorStop(0, `rgba(167, 139, 250, ${0.5 + pulse * 0.5})`);
        glow.addColorStop(1, "rgba(167, 139, 250, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 30, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = "#c4b5fd";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 6 + pulse * 3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center p-5 sm:p-10 lg:p-20 overflow-y-auto lg:overflow-hidden overflow-x-hidden noise-overlay" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #ede9fe 100%)" }}>
      <div className="absolute inset-0 grid-bg-light opacity-40"/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#ef4444", top: "-10%", right: "-5%", opacity: 0.08 }}/>
      <div className="aurora-blob" style={{ width: 400, height: 400, background: "#a78bfa", bottom: "-10%", left: "-5%", opacity: 0.15, animationDelay: "-10s" }}/>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-16 items-center py-6 lg:py-0 pb-28 sm:pb-20 lg:pb-0">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6"
          >
            <IconWarning size={16}/>
            <span className="text-red-500 text-xs tracking-wider uppercase font-semibold">{t.badges.rootCause}</span>
          </motion.div>

          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="text-3xl sm:text-4xl lg:text-[4.5rem] font-black text-slate-900 leading-[1.05] mb-6 sm:mb-10 tracking-[-0.03em]">
            {t.slide6.titlePart1} <br/><span className="gradient-text-premium">{t.slide6.titlePart2}</span>
          </motion.h2>

          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-base sm:text-xl text-slate-600 leading-relaxed mb-6 sm:mb-8">
            {t.slide6.desc}
          </motion.p>

          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="relative p-4 sm:p-6 rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(167,139,250,0.08))", border: "1px solid rgba(99,102,241,0.2)" }}>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent"/>
            <p className="text-base sm:text-xl text-slate-800 leading-relaxed font-medium">
              {t.slide6.callout}
            </p>
          </motion.div>
        </div>

        <motion.div initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.4, duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }} className="relative hidden lg:flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.4), transparent 60%)", transform: "scale(1.3)" }}
          />
          
          <canvas ref={canvasRef} className="relative" style={{ width: 500, height: 500 }}/>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8, ease: "backOut" }}
            className="absolute pointer-events-none"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center"
              style={{ boxShadow: "0 20px 60px rgba(99,102,241,0.5)" }}
            >
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="28" fill="#1e293b"/>
                <circle cx="22" cy="25" r="3" fill="white"/>
                <circle cx="38" cy="25" r="3" fill="white"/>
                <circle cx="22" cy="25" r="1" fill="#1e293b"/>
                <circle cx="38" cy="25" r="1" fill="#1e293b"/>
                <path d="M 18 40 Q 30 35 42 40" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                <path d="M 12 18 L 22 16 M 48 18 L 38 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <motion.div
                animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full border-2 border-accent"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
