"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { IconSparkle } from "../shared/Icons";
import { useLocale } from "@/contexts/LocaleContext";

// Confetti particle type
interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  rotation: number;
  vx: number;
  vy: number;
  vr: number;
  size: number;
  shape: "rect" | "circle" | "star";
}

function Confetti({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!active) { setParticles([]); return; }
    const colors = ["#818cf8", "#c084fc", "#22d3ee", "#f472b6", "#fbbf24", "#34d399", "#ffffff"];
    const shapes: Particle["shape"][] = ["rect", "circle", "star"];
    const newP: Particle[] = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: 40 + Math.random() * 20,
      y: 60,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vx: (Math.random() - 0.5) * 18,
      vy: -(8 + Math.random() * 16),
      vr: (Math.random() - 0.5) * 20,
      size: 6 + Math.random() * 10,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }));
    setParticles(newP);
    const timer = setTimeout(() => setParticles([]), 4000);
    return () => clearTimeout(timer);
  }, [active]);

  if (!particles.length) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          initial={{ left: `${p.x}%`, top: `${p.y}%`, rotate: p.rotation, scale: 1, opacity: 1 }}
          animate={{
            left: `${p.x + p.vx * 8}%`,
            top: `${p.y + p.vy * 6}%`,
            rotate: p.rotation + p.vr * 40,
            scale: [1, 1.2, 0],
            opacity: [1, 1, 0],
          }}
          transition={{ duration: 3 + Math.random(), ease: "easeOut" }}
          style={{
            width: p.size,
            height: p.shape === "rect" ? p.size * 0.5 : p.size,
            background: p.color,
            borderRadius: p.shape === "circle" ? "50%" : p.shape === "rect" ? "2px" : "0",
            clipPath: p.shape === "star"
              ? "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
              : undefined,
            boxShadow: `0 0 8px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}

// Ripple button
function RippleButton({ children, onClick, className, style }: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const ref = useRef<HTMLButtonElement>(null);
  let rippleId = useRef(0);

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      const id = ++rippleId.current;
      setRipples((prev) => [...prev, { id, x, y }]);
      setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 800);
    }
    onClick?.();
  }, [onClick]);

  return (
    <button ref={ref} onClick={handleClick} className={`relative overflow-hidden ${className}`} style={style}>
      {ripples.map((r) => (
        <motion.div
          key={r.id}
          className="absolute rounded-full pointer-events-none"
          initial={{ width: 0, height: 0, left: `${r.x}%`, top: `${r.y}%`, x: "-50%", y: "-50%", opacity: 0.5 }}
          animate={{ width: 400, height: 400, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ background: "rgba(255,255,255,0.35)" }}
        />
      ))}
      {children}
    </button>
  );
}

export default function SlideFuture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useLocale();
  const [confettiActive, setConfettiActive] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 3.5;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    const size = 550;
    renderer.setSize(size, size);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const mainGeom = new THREE.SphereGeometry(1, 64, 64);
    const mainWireframe = new THREE.LineSegments(
      new THREE.WireframeGeometry(mainGeom),
      new THREE.LineBasicMaterial({ color: 0xa78bfa, transparent: true, opacity: 0.6 })
    );
    scene.add(mainWireframe);

    const outerGeom = new THREE.SphereGeometry(1.15, 32, 32);
    const outerWireframe = new THREE.LineSegments(
      new THREE.WireframeGeometry(outerGeom),
      new THREE.LineBasicMaterial({ color: 0x818cf8, transparent: true, opacity: 0.3 })
    );
    scene.add(outerWireframe);

    // Inner glowing core
    const coreGeom = new THREE.SphereGeometry(0.5, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0xc084fc, transparent: true, opacity: 0.15 });
    scene.add(new THREE.Mesh(coreGeom, coreMat));

    const orbCount = 8;
    const orbs: THREE.Mesh[] = [];
    const orbColors = [0xa78bfa, 0x22d3ee, 0xf472b6, 0x818cf8, 0xa78bfa, 0x22d3ee, 0xf472b6, 0x818cf8];
    for (let i = 0; i < orbCount; i++) {
      const orbMat = new THREE.MeshBasicMaterial({ color: orbColors[i] });
      const orb = new THREE.Mesh(new THREE.SphereGeometry(0.045, 16, 16), orbMat);
      orbs.push(orb);
      scene.add(orb);
    }

    let animId: number;
    let tt = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      tt += 0.008;
      mainWireframe.rotation.y += 0.003;
      mainWireframe.rotation.x += 0.001;
      outerWireframe.rotation.y -= 0.0015;
      outerWireframe.rotation.z += 0.0008;
      orbs.forEach((orb, i) => {
        const angle = tt + (i / orbCount) * Math.PI * 2;
        const tilt = (i % 3) * 0.5;
        orb.position.x = Math.cos(angle) * 1.5;
        orb.position.y = Math.sin(angle * 0.7 + tilt) * 0.9;
        orb.position.z = Math.sin(angle) * 1.5;
      });
      renderer.render(scene, camera);
    };
    animate();

    return () => { cancelAnimationFrame(animId); renderer.dispose(); };
  }, []);

  return (
    <div
      className="relative w-full h-full flex items-center p-4 sm:p-12 lg:p-20 overflow-y-auto lg:overflow-hidden overflow-x-hidden"
      style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #4f46e5 40%, #6366f1 70%, #818cf8 100%)" }}
    >
      <Confetti active={confettiActive} />

      <div className="aurora-blob" style={{ width: 700, height: 700, background: "#ffffff", top: "-10%", left: "-5%", opacity: 0.1 }}/>
      <div className="aurora-blob" style={{ width: 600, height: 600, background: "#22d3ee", bottom: "-10%", right: "-5%", opacity: 0.18, animationDelay: "-10s" }}/>
      <div className="aurora-blob" style={{ width: 400, height: 400, background: "#f472b6", top: "20%", right: "20%", opacity: 0.12, animationDelay: "-6s" }}/>

      {/* Stars */}
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: 1 + Math.random() * 2.5,
            height: 1 + Math.random() * 2.5,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: "0 0 6px rgba(255,255,255,0.9)",
          }}
          animate={{ opacity: [0.15, 1, 0.15], scale: [1, 2.5, 1] }}
          transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-4 sm:gap-8 lg:gap-16 items-center py-1 sm:py-6 lg:py-0 pb-14 sm:pb-20 lg:pb-0">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-2 sm:mb-8"
          >
            <IconSparkle size={14} className="text-white" />
            <span className="text-white/90 text-xs tracking-[0.3em] uppercase font-semibold">{t.badges.future}</span>
          </motion.div>

          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-4xl lg:text-[4.5rem] font-black text-white leading-[1.05] mb-3 sm:mb-10 tracking-[-0.03em]"
            style={{ textShadow: "0 0 60px rgba(255,255,255,0.4)" }}
          >
            {t.slide19.titlePart1}<br/>
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #ffffff, #c4b5fd, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t.slide19.titlePart2}
            </span>
          </motion.h2>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl text-white/90 leading-relaxed mb-4 sm:mb-8"
          >
            {t.slide19.p1Prefix} <span className="font-bold">{t.slide19.p1Bold}</span>{t.slide19.p1Suffix}
          </motion.p>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-2xl text-white font-semibold leading-relaxed mb-5 sm:mb-10"
          >
            {t.slide19.p2Prefix}<br/>
            <span className="underline decoration-white/40 decoration-2">{t.slide19.p2Underline}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-2 sm:gap-4"
          >
            {/* Primary CTA with confetti */}
            <RippleButton
              onClick={() => { setConfettiActive(false); setTimeout(() => setConfettiActive(true), 50); }}
              className="relative px-6 sm:px-8 py-2.5 sm:py-4 text-primary-dark font-bold rounded-2xl text-center"
              style={{
                background: "white",
                boxShadow: "0 20px 40px rgba(255,255,255,0.3), 0 0 0 0 rgba(255,255,255,0.5)",
              }}
            >
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-2xl"
                style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)" }}
              />
              {/* Glow pulse */}
              <motion.div
                animate={{ boxShadow: ["0 0 0 0 rgba(255,255,255,0.4)", "0 0 0 20px rgba(255,255,255,0)", "0 0 0 0 rgba(255,255,255,0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl pointer-events-none"
              />
              <span className="relative flex items-center justify-center gap-2 z-10">
                {t.slide19.cta1}
                <motion.svg
                  width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path d="M5 12h14m-7-7l7 7-7 7"/>
                </motion.svg>
              </span>
            </RippleButton>

            <RippleButton
              className="px-6 sm:px-8 py-2.5 sm:py-4 glass-strong text-white font-bold rounded-2xl border border-white/20 text-center"
            >
              {t.slide19.cta2}
            </RippleButton>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex items-center gap-3 mt-4 sm:mt-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>
            <span className="text-white/60 text-xs sm:text-sm">arbione.az · hello@arbione.az</span>
          </motion.div>
        </div>

        {/* 3D Sphere */}
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
          className="hidden lg:flex items-center justify-center relative"
        >
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(167,139,250,0.5), rgba(34,211,238,0.2), transparent 70%)", transform: "scale(1.4)" }}
          />
          <canvas ref={canvasRef} style={{ width: 550, height: 550 }} className="relative"/>
        </motion.div>
      </div>
    </div>
  );
}
