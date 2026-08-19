"use client";
import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: string;
  delay?: number;
  onClick?: () => void;
}

export default function InteractiveTiltCard({
  children,
  className = "",
  maxTilt = 8,
  glowColor = "rgba(99, 102, 241, 0.4)",
  delay = 0,
  onClick,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;

      setTilt({ x: rotateX, y: rotateY, glareX, glareY });
    },
    [maxTilt]
  );

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative cursor-pointer select-none ${className}`}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${
          isHovered ? 1.03 : 1
        }, ${isHovered ? 1.03 : 1}, 1)`,
        transition: isHovered
          ? "transform 0.08s ease-out"
          : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
        boxShadow: isHovered
          ? `0 20px 45px -10px ${glowColor}, 0 0 25px ${glowColor}`
          : "0 10px 30px -10px rgba(0,0,0,0.3)",
      }}
    >
      {/* Glare spotlight reflection inside card */}
      <div
        className="absolute inset-0 rounded-inherit pointer-events-none transition-opacity duration-300 z-30"
        style={{
          opacity: isHovered ? 0.35 : 0,
          background: `radial-gradient(circle 220px at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.4), transparent 80%)`,
          borderRadius: "inherit",
        }}
      />
      {children}
    </motion.div>
  );
}
