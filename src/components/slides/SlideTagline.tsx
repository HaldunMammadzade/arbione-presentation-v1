"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLocale } from "@/contexts/LocaleContext";

export default function SlideTagline() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t, locale } = useLocale();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    type Node = { x: number; y: number; vx: number; vy: number; size: number; pulse: number };
    const nodes: Node[] = [];
    const count = 50;
    const h = window.innerHeight;
    const w = window.innerWidth;

    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * w,
        y: h * 0.5 + Math.random() * h * 0.5,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: 1 + Math.random() * 4,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy; n.pulse += 0.02;
        n.vx *= 0.99; n.vy *= 0.99;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < h * 0.5 || n.y > h) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < 180) {
            const alpha = (1 - d / 180) * 0.3;
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, `rgba(129, 140, 248, ${alpha})`);
            grad.addColorStop(1, `rgba(167, 139, 250, ${alpha})`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach(n => {
        const ps = n.size * (1 + Math.sin(n.pulse) * 0.3);
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, ps * 4);
        glow.addColorStop(0, "rgba(167, 139, 250, 0.9)");
        glow.addColorStop(0.5, "rgba(129, 140, 248, 0.3)");
        glow.addColorStop(1, "rgba(99, 102, 241, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(n.x, n.y, ps * 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#c4b5fd";
        ctx.beginPath();
        ctx.arc(n.x, n.y, ps, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-12 overflow-y-auto lg:overflow-hidden overflow-x-hidden" style={{ background: "#06071a" }}>
      <div className="absolute inset-0 mesh-gradient opacity-40"/>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none"/>
      
      <div className="relative z-10 text-center px-4 sm:px-12 max-w-6xl py-4 sm:py-0">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4 sm:mb-10"
        >
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse"/>
          <span className="text-white/80 text-xs tracking-[0.3em] uppercase">{t.badges.vision}</span>
        </motion.div>

        <motion.h1
          key={locale}
          initial={{ y: 60, opacity: 0, filter: "blur(20px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.25] tracking-tight"
        >
          {t.slide2.title.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ y: 60, opacity: 0, filter: "blur(20px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.3 + i * 0.05, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="inline-block mr-2 sm:mr-3"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          key={`${locale}-desc`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-4 sm:mt-10 text-sm sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-4xl mx-auto"
        >
          {t.slide2.desc}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-2 sm:mt-6 text-sm sm:text-base md:text-lg gradient-text-premium font-semibold italic"
        >
          {t.slide2.desc2}
        </motion.p>
      </div>
    </div>
  );
}
