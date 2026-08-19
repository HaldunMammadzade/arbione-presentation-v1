"use client";
import { useEffect, useRef } from "react";

interface Props {
  theme?: "light" | "dark";
}

export default function Spotlight({ theme = "dark" }: Props) {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const isVisible = useRef(false);

  useEffect(() => {
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible.current) {
        isVisible.current = true;
        currentPos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseLeave = () => {
      isVisible.current = false;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    const updatePosition = () => {
      animId = requestAnimationFrame(updatePosition);

      if (!spotlightRef.current || !isVisible.current) return;

      // Smooth interpolation (lerp)
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.12;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.12;

      const isDark = theme === "dark";
      const x = Math.round(currentPos.current.x);
      const y = Math.round(currentPos.current.y);

      if (isDark) {
        spotlightRef.current.style.background = `radial-gradient(550px circle at ${x}px ${y}px, rgba(129, 140, 248, 0.14), rgba(99, 102, 241, 0.06) 45%, transparent 75%)`;
      } else {
        spotlightRef.current.style.background = `radial-gradient(480px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.08), rgba(168, 85, 247, 0.03) 40%, transparent 70%)`;
      }
    };

    updatePosition();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [theme]);

  return (
    <div
      ref={spotlightRef}
      className="fixed inset-0 pointer-events-none transition-opacity duration-300"
      style={{
        zIndex: 40,
        mixBlendMode: theme === "dark" ? "screen" : "multiply",
      }}
    />
  );
}
