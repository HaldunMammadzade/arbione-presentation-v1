"use client";
import { useEffect, useRef } from "react";

interface Props {
  trigger: number;
  theme: "light" | "dark";
  direction?: string;
}

interface Star3D {
  x: number;
  y: number;
  z: number;
  baseSize: number;
  color: [number, number, number]; // r, g, b
  speedMult: number;
}

const DARK_COLORS: [number, number, number][] = [
  [255, 255, 255], // Pure white star
  [255, 255, 255],
  [199, 210, 254], // Soft indigo
  [221, 214, 254], // Lavender star
  [165, 243, 252], // Diamond cyan
];

const LIGHT_COLORS: [number, number, number][] = [
  [99, 102, 241],  // Indigo
  [139, 92, 246],  // Violet
  [14, 165, 233],  // Sky
  [79, 70, 229],   // Deep Indigo
];

export default function TransitionBurst({ trigger, theme }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isFirstRender = useRef(true);
  const animState = useRef<{
    active: boolean;
    startTime: number;
    duration: number;
    stars: Star3D[];
  }>({
    active: false,
    startTime: 0,
    duration: 850,
    stars: [],
  });
  const rafId = useRef(0);
  const themeRef = useRef(theme);
  themeRef.current = theme;

  const initStars = (count = 280, width = 1920, height = 1080) => {
    const palette = themeRef.current === "dark" ? DARK_COLORS : LIGHT_COLORS;
    const stars: Star3D[] = [];
    const spread = Math.max(width, height) * 1.5;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 40 + Math.pow(Math.random(), 0.7) * (spread / 2);
      const z = 300 + Math.random() * 1500;

      stars.push({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
        z,
        baseSize: 1.2 + Math.random() * 2.4,
        color: palette[Math.floor(Math.random() * palette.length)],
        speedMult: 0.8 + Math.random() * 0.5,
      });
    }
    return stars;
  };

  const triggerStarZoom = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    animState.current = {
      active: true,
      startTime: performance.now(),
      duration: 800,
      stars: initStars(300, canvas.width, canvas.height),
    };
  };

  const prevTrigger = useRef<number | null>(null);

  // Trigger when slide changes (including 0 -> 1)
  useEffect(() => {
    if (prevTrigger.current === null) {
      prevTrigger.current = trigger;
      return;
    }
    if (prevTrigger.current !== trigger) {
      prevTrigger.current = trigger;
      triggerStarZoom();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);

  // Render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    };
    resize();
    window.addEventListener("resize", resize);

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const render = (now: number) => {
      rafId.current = requestAnimationFrame(render);

      if (!animState.current.active) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      const elapsed = now - animState.current.startTime;
      const progress = Math.min(elapsed / animState.current.duration, 1);

      if (progress >= 1) {
        animState.current.active = false;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const fov = Math.min(canvas.width, canvas.height) * 0.7;
      const isDark = themeRef.current === "dark";

      // Speed curve: smooth surge and deceleration
      const speedFactor = Math.sin(progress * Math.PI);
      const starSpeed = Math.pow(speedFactor, 1.5) * 85 + 12;
      const globalAlpha = Math.sin(progress * Math.PI);

      // Draw each star flying towards screen
      for (const star of animState.current.stars) {
        // Move towards camera (Z decreases)
        star.z -= starSpeed * star.speedMult;
        if (star.z <= 15) {
          star.z += 1500;
        }

        // 3D Perspective formula
        const k = fov / star.z;
        const sx = star.x * k + cx;
        const sy = star.y * k + cy;

        // Skip offscreen
        if (sx < -50 || sx > canvas.width + 50 || sy < -50 || sy > canvas.height + 50) {
          continue;
        }

        // Size and brightness scale with proximity (closer = bigger & brighter)
        const proximity = Math.max(0, 1 - star.z / 1500);
        const radius = Math.max(0.8, star.baseSize * (1 + proximity * 2.5));
        const alpha = Math.min(1, globalAlpha * (0.3 + proximity * 0.7));

        const [r, g, b] = star.color;

        ctx.save();
        ctx.beginPath();
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);

        if (isDark) {
          // Luminous star with glowing aura
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          ctx.shadowColor = `rgba(${r}, ${g}, ${b}, ${alpha * 0.8})`;
          ctx.shadowBlur = radius * 3;
        } else {
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.85})`;
        }

        ctx.fill();
        ctx.restore();
      }
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 95,
        mixBlendMode: theme === "dark" ? "screen" : "normal",
      }}
    />
  );
}
