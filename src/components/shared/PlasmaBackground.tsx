"use client";
import { useEffect, useRef } from "react";

interface Props {
  theme?: "light" | "dark";
  opacity?: number;
  interactive?: boolean;
}

interface WaveLayer {
  baseY: number; // 0 to 1
  amplitude: number;
  frequency: number;
  speed: number;
  phase: number;
  colorStart: string;
  colorEnd: string;
  strokeColor: string;
  strokeWidth: number;
  glowBlur: number;
}

export default function PlasmaBackground({
  theme = "dark",
  opacity = 0.85,
  interactive = true,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animId = 0;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      mouseRef.current.targetX = e.clientX / window.innerWidth;
      mouseRef.current.targetY = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    let t = 0;

    const render = () => {
      animId = requestAnimationFrame(render);
      t += 0.008;

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;

      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const isDark = themeRef.current === "dark";
      const mx = (mouseRef.current.x - 0.5) * 2;
      const my = (mouseRef.current.y - 0.5) * 2;

      // Define 4 organic undulating waves with rich gradients
      const darkWaves: WaveLayer[] = [
        {
          baseY: 0.72,
          amplitude: 70 + my * 25,
          frequency: 0.0018,
          speed: 0.8,
          phase: 0,
          colorStart: "rgba(30, 27, 75, 0.45)",
          colorEnd: "rgba(79, 70, 229, 0.25)",
          strokeColor: "rgba(129, 140, 248, 0.4)",
          strokeWidth: 2,
          glowBlur: 20,
        },
        {
          baseY: 0.58,
          amplitude: 85 - my * 20,
          frequency: 0.0022,
          speed: -0.65,
          phase: 2.2,
          colorStart: "rgba(124, 58, 237, 0.35)",
          colorEnd: "rgba(192, 132, 252, 0.15)",
          strokeColor: "rgba(192, 132, 252, 0.55)",
          strokeWidth: 2.5,
          glowBlur: 25,
        },
        {
          baseY: 0.45,
          amplitude: 60 + mx * 30,
          frequency: 0.0028,
          speed: 0.95,
          phase: 4.1,
          colorStart: "rgba(6, 182, 212, 0.3)",
          colorEnd: "rgba(59, 130, 246, 0.1)",
          strokeColor: "rgba(34, 211, 238, 0.6)",
          strokeWidth: 2,
          glowBlur: 30,
        },
        {
          baseY: 0.32,
          amplitude: 50 + my * 15,
          frequency: 0.0032,
          speed: -0.5,
          phase: 1.5,
          colorStart: "rgba(236, 72, 153, 0.22)",
          colorEnd: "rgba(168, 85, 247, 0.08)",
          strokeColor: "rgba(244, 114, 182, 0.5)",
          strokeWidth: 1.5,
          glowBlur: 20,
        },
      ];

      const lightWaves: WaveLayer[] = [
        {
          baseY: 0.75,
          amplitude: 60,
          frequency: 0.002,
          speed: 0.7,
          phase: 0,
          colorStart: "rgba(224, 231, 255, 0.45)",
          colorEnd: "rgba(237, 233, 254, 0.25)",
          strokeColor: "rgba(99, 102, 241, 0.2)",
          strokeWidth: 1.5,
          glowBlur: 10,
        },
        {
          baseY: 0.55,
          amplitude: 70,
          frequency: 0.0024,
          speed: -0.6,
          phase: 2,
          colorStart: "rgba(243, 232, 255, 0.4)",
          colorEnd: "rgba(224, 242, 254, 0.2)",
          strokeColor: "rgba(168, 85, 247, 0.25)",
          strokeWidth: 2,
          glowBlur: 15,
        },
        {
          baseY: 0.38,
          amplitude: 50,
          frequency: 0.003,
          speed: 0.8,
          phase: 3.8,
          colorStart: "rgba(207, 250, 254, 0.35)",
          colorEnd: "rgba(245, 208, 254, 0.15)",
          strokeColor: "rgba(6, 182, 212, 0.25)",
          strokeWidth: 1.5,
          glowBlur: 12,
        },
      ];

      const waves = isDark ? darkWaves : lightWaves;

      // Ambient background glow nodes (subtle plasma nebula)
      const grad = ctx.createRadialGradient(
        width * (0.3 + mx * 0.1),
        height * (0.2 + my * 0.1),
        0,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.75
      );
      if (isDark) {
        grad.addColorStop(0, "rgba(99, 102, 241, 0.12)");
        grad.addColorStop(0.35, "rgba(167, 139, 250, 0.06)");
        grad.addColorStop(0.7, "rgba(34, 211, 238, 0.04)");
        grad.addColorStop(1, "rgba(6, 7, 26, 0)");
      } else {
        grad.addColorStop(0, "rgba(199, 210, 254, 0.2)");
        grad.addColorStop(0.5, "rgba(233, 213, 255, 0.1)");
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Draw each wave
      for (const w of waves) {
        ctx.save();
        ctx.beginPath();

        const step = 8;
        const baseH = height * w.baseY;

        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += step) {
          // Complex harmonic wave: primary sine + secondary octaves + mouse repulsion
          const wave1 = Math.sin(x * w.frequency + t * w.speed + w.phase);
          const wave2 = Math.cos(x * (w.frequency * 1.6) - t * (w.speed * 0.7) + w.phase * 1.5) * 0.45;
          const wave3 = Math.sin(x * (w.frequency * 0.5) + t * 0.3) * 0.3;

          // Mouse fluid bump
          const distToMouse = Math.abs(x / width - mouseRef.current.x);
          const mouseInfluence = Math.max(0, 1 - distToMouse * 3) * (w.amplitude * 0.45);

          const y = baseH + (wave1 + wave2 + wave3) * w.amplitude - mouseInfluence;

          if (x === 0) {
            ctx.lineTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        // Wave Fill Gradient
        const fillGrad = ctx.createLinearGradient(0, baseH - w.amplitude * 1.5, 0, height);
        fillGrad.addColorStop(0, w.colorStart);
        fillGrad.addColorStop(1, w.colorEnd);
        ctx.fillStyle = fillGrad;
        ctx.fill();

        // Wave Glowing Crest Line
        ctx.beginPath();
        for (let x = 0; x <= width; x += step) {
          const wave1 = Math.sin(x * w.frequency + t * w.speed + w.phase);
          const wave2 = Math.cos(x * (w.frequency * 1.6) - t * (w.speed * 0.7) + w.phase * 1.5) * 0.45;
          const wave3 = Math.sin(x * (w.frequency * 0.5) + t * 0.3) * 0.3;
          const distToMouse = Math.abs(x / width - mouseRef.current.x);
          const mouseInfluence = Math.max(0, 1 - distToMouse * 3) * (w.amplitude * 0.45);
          const y = baseH + (wave1 + wave2 + wave3) * w.amplitude - mouseInfluence;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.shadowColor = w.strokeColor;
        ctx.shadowBlur = w.glowBlur;
        ctx.strokeStyle = w.strokeColor;
        ctx.lineWidth = w.strokeWidth;
        ctx.stroke();

        ctx.restore();
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [interactive]);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ opacity, zIndex: 1 }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
