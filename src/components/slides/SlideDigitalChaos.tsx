"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";

export default function SlideDigitalChaos() {
  const { t } = useLocale();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const pointerTarget = useRef({ x: 0, y: 0 });

  const nodes = useMemo(
    () => [
      { id: "n1", x: 90, y: 120, size: 18, depth: 1.1, color: "rgba(167,139,250,0.95)" },
      { id: "n2", x: 220, y: 70, size: 14, depth: 0.8, color: "rgba(96,165,250,0.95)" },
      { id: "n3", x: 360, y: 110, size: 20, depth: 1.2, color: "rgba(34,211,238,0.95)" },
      { id: "n4", x: 510, y: 70, size: 16, depth: 0.9, color: "rgba(192,132,252,0.95)" },
      { id: "n5", x: 620, y: 150, size: 22, depth: 1.25, color: "rgba(129,140,248,0.95)" },
      { id: "n6", x: 170, y: 250, size: 24, depth: 1.3, color: "rgba(14,165,233,0.95)" },
      { id: "n7", x: 330, y: 240, size: 15, depth: 0.75, color: "rgba(196,181,253,0.95)" },
      { id: "n8", x: 470, y: 260, size: 21, depth: 1.15, color: "rgba(99,102,241,0.95)" },
      { id: "n9", x: 610, y: 250, size: 17, depth: 0.85, color: "rgba(244,114,182,0.95)" },
      { id: "n10", x: 120, y: 370, size: 20, depth: 1.05, color: "rgba(56,189,248,0.95)" },
      { id: "n11", x: 280, y: 360, size: 18, depth: 0.95, color: "rgba(167,139,250,0.95)" },
      { id: "n12", x: 430, y: 390, size: 24, depth: 1.35, color: "rgba(34,211,238,0.95)" },
      { id: "n13", x: 570, y: 360, size: 19, depth: 1.0, color: "rgba(129,140,248,0.95)" },
    ],
    []
  );

  const links = useMemo(
    () => [
      ["n1", "n2"], ["n2", "n3"], ["n3", "n4"], ["n4", "n5"],
      ["n1", "n6"], ["n2", "n6"], ["n2", "n7"], ["n3", "n7"],
      ["n3", "n8"], ["n4", "n8"], ["n4", "n9"], ["n5", "n9"],
      ["n6", "n7"], ["n7", "n8"], ["n8", "n9"],
      ["n6", "n10"], ["n6", "n11"], ["n7", "n11"], ["n8", "n12"], ["n8", "n13"], ["n9", "n13"],
      ["n10", "n11"], ["n11", "n12"], ["n12", "n13"],
    ] as const,
    []
  );

  const byId = useMemo(() => Object.fromEntries(nodes.map((n) => [n.id, n])), [nodes]);

  const sparks = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: `sp-${i}`,
        x: 60 + (i % 6) * 115 + ((i * 13) % 28),
        y: 40 + Math.floor(i / 6) * 145 + ((i * 17) % 34),
        size: 2 + (i % 3),
        delay: i * 0.11,
      })),
    []
  );

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      setPointer((prev) => {
        const nx = prev.x + (pointerTarget.current.x - prev.x) * 0.12;
        const ny = prev.y + (pointerTarget.current.y - prev.y) * 0.12;
        return {
          x: Math.abs(nx) < 0.0002 ? 0 : nx,
          y: Math.abs(ny) < 0.0002 ? 0 : ny,
        };
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    pointerTarget.current = { x: nx, y: ny };
  };

  return (
    <div className="relative w-full h-full flex items-center p-10 lg:p-12 overflow-hidden noise-overlay" style={{ background: "#06071a" }}>
      <div className="absolute inset-0 mesh-gradient opacity-30"/>
      <div className="absolute inset-0 grid-bg opacity-40"/>
      <div className="aurora-blob" style={{ width: 600, height: 600, background: "#6366f1", top: "-10%", left: "-5%", opacity: 0.3 }}/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#a78bfa", bottom: "-10%", right: "-5%", opacity: 0.25, animationDelay: "-8s" }}/>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-[1.35fr_1fr] gap-10 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
          >
            <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-red-400"/>
            <span className="text-white/70 text-xs tracking-wider uppercase font-semibold">{t.badges.globalImpact}</span>
          </motion.div>

          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-[3.8rem] lg:text-[4.1rem] font-black text-white leading-[1.02] tracking-[-0.03em] mb-7"
          >
            {t.slide5.titlePart1} <br/>
            <span className="gradient-text-premium">{t.slide5.titlePart2}</span>
          </motion.h2>

          <div className="space-y-2.5">
            {t.slide5.stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                whileHover={{ x: 10, backgroundColor: "rgba(99,102,241,0.1)" }}
                className="flex items-start gap-5 p-4 rounded-2xl border border-white/5 glass cursor-default group"
              >
                <div className="text-3xl lg:text-4xl font-black gradient-text-premium min-w-[120px] leading-none">{s.value}</div>
                <div className="flex-1">
                  <div className="text-white/85 text-sm lg:text-base leading-relaxed">{s.label}</div>
                  {s.source && <div className="text-slate-500 text-xs italic mt-1">{s.source}</div>}
                </div>
                <motion.div initial={{ opacity: 0, x: -10 }} whileHover={{ opacity: 1, x: 0 }} className="text-white/40">
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
            className="mt-5 text-white/70 text-base lg:text-lg italic border-l-2 border-accent pl-4"
          >
            {t.slide5.footer}
          </motion.p>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          className="relative flex items-center justify-center"
          onMouseMove={onMove}
          onMouseLeave={() => {
            pointerTarget.current = { x: 0, y: 0 };
          }}
        >
          <div className="relative w-[700px] h-[500px]">
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.25, 0.5, 0.25] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-0 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 25% 25%, rgba(99,102,241,0.5), transparent 55%), radial-gradient(circle at 75% 70%, rgba(34,211,238,0.35), transparent 58%)",
              }}
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -inset-10 opacity-20"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(34,211,238,0.18), rgba(167,139,250,0.12), rgba(99,102,241,0.18), rgba(34,211,238,0.18))",
                filter: "blur(38px)",
              }}
            />

            <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
              <defs>
                <linearGradient id="glass-link" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(167,139,250,0.55)" />
                  <stop offset="100%" stopColor="rgba(34,211,238,0.5)" />
                </linearGradient>
              </defs>
              {links.map(([a, b], i) => {
                const na = byId[a];
                const nb = byId[b];
                const ax = na.x + pointer.x * 34 * na.depth;
                const ay = na.y + pointer.y * 26 * na.depth;
                const bx = nb.x + pointer.x * 34 * nb.depth;
                const by = nb.y + pointer.y * 26 * nb.depth;
                return (
                  <motion.path
                    key={`${a}-${b}`}
                    d={`M ${ax} ${ay} Q ${(ax + bx) / 2 + pointer.x * 18} ${(ay + by) / 2 + pointer.y * 14} ${bx} ${by}`}
                    stroke="url(#glass-link)"
                    strokeWidth={1}
                    strokeLinecap="round"
                    fill="none"
                    animate={{ opacity: [0.1, 0.62, 0.1], pathLength: [0.75, 1, 0.75] }}
                    transition={{ duration: 3.4 + (i % 5) * 0.45, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 }}
                  />
                );
              })}
            </svg>

            {nodes.map((n, i) => (
              <motion.div
                key={n.id}
                className="absolute rounded-full"
                style={{
                  left: n.x - n.size,
                  top: n.y - n.size,
                  width: n.size * 2,
                  height: n.size * 2,
                  background: `radial-gradient(circle, rgba(255,255,255,0.95) 0%, ${n.color} 40%, rgba(99,102,241,0.08) 100%)`,
                  boxShadow: `0 0 ${n.size * 2.2}px ${n.color}`,
                }}
                animate={{
                  x: [pointer.x * (14 * n.depth), pointer.x * (22 * n.depth), pointer.x * (14 * n.depth)],
                  y: [pointer.y * (10 * n.depth), pointer.y * (18 * n.depth), pointer.y * (10 * n.depth)],
                  scale: [1, 1.12, 1],
                  opacity: [0.78, 1, 0.78],
                }}
                transition={{
                  duration: 2.8 + (i % 4) * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.08,
                }}
              />
            ))}

            {sparks.map((s, i) => (
              <motion.div
                key={s.id}
                className="pointer-events-none absolute rounded-full"
                style={{
                  left: s.x,
                  top: s.y,
                  width: s.size,
                  height: s.size,
                  background: "rgba(255,255,255,0.95)",
                  boxShadow: "0 0 10px rgba(255,255,255,0.7)",
                }}
                animate={{
                  x: [pointer.x * (8 + i), pointer.x * (15 + i), pointer.x * (8 + i)],
                  y: [pointer.y * (6 + i * 0.6), pointer.y * (11 + i * 0.6), pointer.y * (6 + i * 0.6)],
                  opacity: [0.2, 0.95, 0.2],
                  scale: [0.8, 1.4, 0.8],
                }}
                transition={{
                  duration: 2.4 + (i % 6) * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: s.delay,
                }}
              />
            ))}

            <motion.div
              className="pointer-events-none absolute w-52 h-52 rounded-full"
              style={{
                left: `calc(50% - 6.5rem + ${pointer.x * 120}px)`,
                top: `calc(50% - 6.5rem + ${pointer.y * 90}px)`,
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(56,189,248,0.2) 35%, rgba(99,102,241,0) 75%)",
              }}
              animate={{ scale: [1, 1.25, 1], opacity: [0.32, 0.58, 0.32] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.08) 46%, transparent 72%)",
                mixBlendMode: "screen",
              }}
              animate={{ x: ["-30%", "120%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
