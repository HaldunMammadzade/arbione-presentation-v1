"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function SlideDigitalChaos() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const w = canvas.width = 500;
    const h = canvas.height = 500;

    type Node = { x: number; y: number; vx: number; vy: number; r: number; pulse: number };
    const nodes: Node[] = [];
    for (let i = 0; i < 45; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: 2 + Math.random() * 5,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.03;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < 150) {
            const alpha = (1 - d / 150) * 0.4;
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, `rgba(99, 102, 241, ${alpha})`);
            grad.addColorStop(1, `rgba(167, 139, 250, ${alpha * 0.6})`);
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
        const pulseR = n.r * (1 + Math.sin(n.pulse) * 0.3);
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, pulseR * 4);
        glow.addColorStop(0, "rgba(167, 139, 250, 0.8)");
        glow.addColorStop(1, "rgba(99, 102, 241, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(n.x, n.y, pulseR * 4, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = "#c4b5fd";
        ctx.beginPath();
        ctx.arc(n.x, n.y, pulseR, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animId);
  }, []);

  const stats = [
    { value: "$8.8T", label: "Dünya iqtisadiyyatı hər il bu qədər məhsuldarlıq itirir. İşçilərin cəmi 21%-i işinə tam fokuslana bilir", source: "Gallup, 2023" },
    { value: "27%", label: "Şirkətlərin orta hesabla yaşadığı əməliyyat itkisi", source: "McKinsey, 2022" },
    { value: "50%", label: "Düzgün inteqrasiya olunmayan texnologiyalar şirkətlərin bu qədərində qərarverməni ləngidir", source: "Deloitte, 2023" },
    { value: "80%", label: "Azərbaycan şirkətləri hələ də ayrı HR, GPS və hesabat sistemlərindən istifadə edir", source: "" },
  ];

  return (
    <div className="relative w-full h-full flex items-center p-16 overflow-hidden noise-overlay" style={{ background: "#06071a" }}>
      <div className="absolute inset-0 mesh-gradient opacity-30"/>
      <div className="absolute inset-0 grid-bg opacity-40"/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#6366f1", top: "-10%", left: "-5%", opacity: 0.3 }}/>
      <div className="aurora-blob" style={{ width: 400, height: 400, background: "#a78bfa", bottom: "-10%", right: "-5%", opacity: 0.25, animationDelay: "-8s" }}/>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-[1.4fr_1fr] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"/>
            <span className="text-white/70 text-xs tracking-wider uppercase font-semibold">Global Impact</span>
          </motion.div>

          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-[4.5rem] font-black text-white leading-[1.05] tracking-[-0.03em] mb-12"
          >
            Rəqəmsal xaosun dəyəri <br/>
            <span className="gradient-text-premium">milyardlarla ölçülür.</span>
          </motion.h2>

          <div className="space-y-3">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                whileHover={{ x: 10, backgroundColor: "rgba(99,102,241,0.1)" }}
                className="flex items-start gap-6 p-5 rounded-2xl border border-white/5 glass cursor-default group"
              >
                <div className="text-4xl font-black gradient-text-premium min-w-[130px] leading-none">{s.value}</div>
                <div className="flex-1">
                  <div className="text-white/85 text-base leading-relaxed">{s.label}</div>
                  {s.source && <div className="text-slate-500 text-xs italic mt-1">{s.source}</div>}
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="text-white/40"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14m-7-7l7 7-7 7"/>
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="mt-8 text-white/70 text-lg italic border-l-2 border-accent pl-5"
          >
            Nəticədə işinizi asanlaşdırması gərəkən texnologiyalar onu daha da çətinləşdirir.
          </motion.p>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 blur-3xl"
              style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
            />
            <canvas ref={canvasRef} className="relative rounded-full" style={{ width: 500, height: 500 }}/>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
