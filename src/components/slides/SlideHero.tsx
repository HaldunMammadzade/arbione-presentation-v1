"use client";
import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { useLocale } from "@/contexts/LocaleContext";

export default function SlideHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useLocale();

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const count = 240;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const velocities: { x: number; y: number; z: number }[] = [];

    const palette = [
      new THREE.Color("#ffffff"),
      new THREE.Color("#c4b5fd"),
      new THREE.Color("#a855f7"),
      new THREE.Color("#22d3ee"),
      new THREE.Color("#f472b6"),
    ];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 140;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
      const c = palette[i % palette.length];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
      sizes[i] = 0.4 + Math.random() * 1.0;
      velocities.push({
        x: (Math.random() - 0.5) * 0.035,
        y: (Math.random() - 0.5) * 0.035,
        z: (Math.random() - 0.5) * 0.02,
      });
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geom.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.PointsMaterial({
      size: 0.6,
      transparent: true,
      opacity: 0.65,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(geom, mat);
    scene.add(points);

    const lineMat = new THREE.LineBasicMaterial({
      color: 0xc4b5fd,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
    });
    const lineGeom = new THREE.BufferGeometry();
    const lines = new THREE.LineSegments(lineGeom, lineMat);
    scene.add(lines);

    let mx = 0, my = 0;
    const onMove = (e: MouseEvent) => {
      mx = e.clientX - window.innerWidth / 2;
      my = e.clientY - window.innerHeight / 2;
    };
    document.addEventListener("mousemove", onMove);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      for (let i = 0; i < count; i++) {
        positions[i * 3] += velocities[i].x;
        positions[i * 3 + 1] += velocities[i].y;
        positions[i * 3 + 2] += velocities[i].z;
        if (Math.abs(positions[i * 3]) > 70) velocities[i].x *= -1;
        if (Math.abs(positions[i * 3 + 1]) > 40) velocities[i].y *= -1;
        if (Math.abs(positions[i * 3 + 2]) > 30) velocities[i].z *= -1;
      }
      geom.attributes.position.needsUpdate = true;

      const lp: number[] = [];
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (d < 8) {
            lp.push(
              positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
              positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
            );
          }
        }
      }
      lines.geometry.setAttribute("position", new THREE.Float32BufferAttribute(lp, 3));

      camera.position.x += (mx * 0.01 - camera.position.x) * 0.035;
      camera.position.y += (-my * 0.01 - camera.position.y) * 0.035;
      camera.lookAt(scene.position);

      points.rotation.y += 0.0004;
      lines.rotation.y += 0.0004;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0b0f19 0%, #1e1b4b 35%, #312e81 70%, #4338ca 100%)" }}
    >
      {/* Aurora blobs - rich dynamic background glow */}
      <div className="aurora-blob" style={{ width: 650, height: 650, background: "#a78bfa", top: "-15%", left: "-12%", opacity: 0.35 }}/>
      <div className="aurora-blob" style={{ width: 550, height: 550, background: "#22d3ee", bottom: "-15%", right: "-12%", opacity: 0.25, animationDelay: "-10s" }}/>
      <div className="aurora-blob" style={{ width: 450, height: 450, background: "#f472b6", top: "25%", right: "8%", opacity: 0.18, animationDelay: "-5s" }}/>

      <canvas ref={canvasRef} className="absolute inset-0 z-0"/>

      {/* Central scrim overlay: Keeps center dark for 100% text contrast while letting edge effects glow */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(ellipse_at_50%_50%,_rgba(11,15,25,0.78)_0%,_rgba(15,23,42,0.45)_55%,_transparent_90%)]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8 pointer-events-none">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative mb-3"
        >
          {/* Soft pulsing glow behind logo */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(167,139,250,0.5), rgba(99,102,241,0.25), transparent)",
              transform: "scale(1.9)",
            }}
          />

          <img
            src="/logo.svg"
            alt="Arbione Logo"
            className="relative w-[440px] h-auto drop-shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
          />
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="h-px w-80 bg-gradient-to-r from-transparent via-white/70 to-transparent my-2"
        />

        {/* Tagline */}
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-xl text-white font-light tracking-[0.6em] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
        >
          {t.slide1.tagline}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8 text-lg text-slate-100/95 font-light max-w-xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
        >
          {t.slide1.desc}
        </motion.p>

        {/* Floating badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex gap-4 mt-8"
        >
          {["12 Modul"].map((badge, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.3 }}
              className="px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shadow-xl"
              style={{
                background: "rgba(255,255,255,0.16)",
                border: "1px solid rgba(255,255,255,0.35)",
                backdropFilter: "blur(14px)",
                color: "#ffffff",
                boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.35)",
              }}
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{ delay: 2.2, opacity: { duration: 0.6 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 text-xs tracking-[0.5em] uppercase z-10 pointer-events-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
      >
        <span>{t.nav.discover}</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </motion.div>
    </div>
  );
}
