"use client";
import { motion } from "framer-motion";

export default function Logo({ size = 100, white = true }: { size?: number; white?: boolean }) {
  const color = white ? "white" : "#4f46e5";
  return (
    <motion.svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      initial={{ rotate: -180, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
      style={{ filter: white ? "drop-shadow(0 0 40px rgba(255,255,255,0.5))" : "none" }}
    >
      <path d="M 50 10 L 20 85 L 80 85 Z" fill={color} opacity="0.95"/>
      <circle cx="30" cy="60" r="6" fill="none" stroke={color} strokeWidth="2"/>
      <circle cx="45" cy="45" r="4" fill={color}/>
      <line x1="36" y1="60" x2="41" y2="45" stroke={color} strokeWidth="2"/>
      <line x1="30" y1="66" x2="30" y2="75" stroke={color} strokeWidth="2"/>
      <circle cx="30" cy="78" r="3" fill={color}/>
    </motion.svg>
  );
}
