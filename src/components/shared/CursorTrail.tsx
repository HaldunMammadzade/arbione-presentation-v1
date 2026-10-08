"use client";
import { useEffect, useRef } from "react";

interface Props {
  theme?: "light" | "dark";
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  color: [number, number, number];
}

const DARK_COLORS: [number, number, number][] = [
  [255, 255, 255], // White
  [129, 140, 248], // Indigo #818cf8
  [192, 132, 252], // Purple #c084fc
  [34, 211, 238],  // Cyan #22d3ee
  [244, 114, 182], // Pink #f472b6
];

const LIGHT_COLORS: [number, number, number][] = [
  [99, 102, 241],  // Primary indigo
  [139, 92, 246],  // Violet
  [14, 165, 233],  // Sky
  [236, 72, 153],  // Rose
];

export default function CursorTrail({ theme = "dark" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -100, y: -100, px: -100, py: -100, moving: false });
  const sparksRef = useRef<Spark[]>([]);
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animId: number;
    let idleTimer: NodeJS.Timeout;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    };
    resize();
    window.addEventListener("resize", resize);

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const onMouseMove = (e: MouseEvent) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const mx = e.clientX * dpr;
      const my = e.clientY * dpr;

      const vx = mx - mouseRef.current.x;
      const vy = my - mouseRef.current.y;
      const speed = Math.sqrt(vx * vx + vy * vy);

      mouseRef.current.px = mouseRef.current.x;
      mouseRef.current.py = mouseRef.current.y;
      mouseRef.current.x = mx;
      mouseRef.current.y = my;
      mouseRef.current.moving = true;

      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        mouseRef.current.moving = false;
      }, 80);

      // Spawn spark particles if moving
      if (speed > 2) {
        const palette = themeRef.current === "dark" ? DARK_COLORS : LIGHT_COLORS;
        const count = Math.min(Math.floor(speed * 0.12) + 1, 4);

        for (let i = 0; i < count; i++) {
          const color = palette[Math.floor(Math.random() * palette.length)];
          sparksRef.current.push({
            x: mx + (Math.random() - 0.5) * 8,
            y: my + (Math.random() - 0.5) * 8,
            vx: -vx * 0.15 + (Math.random() - 0.5) * 1.5,
            vy: -vy * 0.15 + (Math.random() - 0.5) * 1.5,
            size: 1.5 + Math.random() * 2.8,
            alpha: 0.85 + Math.random() * 0.15,
            decay: 0.025 + Math.random() * 0.025,
            color,
          });
        }
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const mx = e.clientX * dpr;
      const my = e.clientY * dpr;
      const palette = themeRef.current === "dark" ? DARK_COLORS : LIGHT_COLORS;

      // Click burst of 12 tiny sparks
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
        const spd = 2 + Math.random() * 3.5;
        const color = palette[Math.floor(Math.random() * palette.length)];
        sparksRef.current.push({
          x: mx,
          y: my,
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd,
          size: 2 + Math.random() * 2.5,
          alpha: 1,
          decay: 0.04 + Math.random() * 0.02,
          color,
        });
      }
    };

    const onMouseLeave = () => {
      mouseRef.current.x = -100;
      mouseRef.current.y = -100;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    const render = () => {
      animId = requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = themeRef.current === "dark";

      // Draw Main Cursor Glow Dot
      if (mouseRef.current.x > 0 && mouseRef.current.y > 0) {
        const { x, y } = mouseRef.current;
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, isDark ? 3.5 : 3, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "#ffffff" : "#6366f1";
        ctx.shadowColor = isDark ? "rgba(129, 140, 248, 0.9)" : "rgba(99, 102, 241, 0.7)";
        ctx.shadowBlur = isDark ? 12 : 8;
        ctx.fill();
        ctx.restore();
      }

      // Update & Draw Sparks
      sparksRef.current = sparksRef.current.filter((s) => s.alpha > 0.02);

      for (const spark of sparksRef.current) {
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.vx *= 0.94;
        spark.vy *= 0.94;
        spark.alpha -= spark.decay;
        spark.size *= 0.97;

        const a = Math.max(0, spark.alpha);
        const [r, g, b] = spark.color;

        ctx.save();
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, Math.max(0.5, spark.size), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
        if (isDark) {
          ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${a * 0.8})`;
          ctx.shadowBlur = spark.size * 3;
        }
        ctx.fill();
        ctx.restore();
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(idleTimer);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 92,
        mixBlendMode: theme === "dark" ? "screen" : "normal",
      }}
    />
  );
}
