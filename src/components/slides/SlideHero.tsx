"use client";
import { useEffect, useRef } from "react";
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

    const count = 300;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    const c1 = new THREE.Color("#ffffff");
    const c2 = new THREE.Color("#c4b5fd");
    const c3 = new THREE.Color("#ddd6fe");

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      const c = i % 3 === 0 ? c1 : i % 3 === 1 ? c2 : c3;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
      velocities.push({ x: (Math.random() - 0.5) * 0.04, y: (Math.random() - 0.5) * 0.04, z: (Math.random() - 0.5) * 0.04 });
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({ size: 0.6, transparent: true, opacity: 0.9, vertexColors: true, blending: THREE.AdditiveBlending, sizeAttenuation: true });
    const points = new THREE.Points(geom, mat);
    scene.add(points);

    const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.15, blending: THREE.AdditiveBlending });
    const lineGeom = new THREE.BufferGeometry();
    const lines = new THREE.LineSegments(lineGeom, lineMat);
    scene.add(lines);

    let mx = 0, my = 0;
    const onMove = (e: MouseEvent) => { mx = e.clientX - window.innerWidth / 2; my = e.clientY - window.innerHeight / 2; };
    document.addEventListener("mousemove", onMove);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      for (let i = 0; i < count; i++) {
        positions[i * 3] += velocities[i].x;
        positions[i * 3 + 1] += velocities[i].y;
        positions[i * 3 + 2] += velocities[i].z;
        if (Math.abs(positions[i * 3]) > 50) velocities[i].x *= -1;
        if (Math.abs(positions[i * 3 + 1]) > 30) velocities[i].y *= -1;
        if (Math.abs(positions[i * 3 + 2]) > 20) velocities[i].z *= -1;
      }
      geom.attributes.position.needsUpdate = true;

      const lp: number[] = [];
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = positions[i*3] - positions[j*3];
          const dy = positions[i*3+1] - positions[j*3+1];
          const dz = positions[i*3+2] - positions[j*3+2];
          const d = Math.sqrt(dx*dx + dy*dy + dz*dz);
          if (d < 8) {
            lp.push(positions[i*3], positions[i*3+1], positions[i*3+2]);
            lp.push(positions[j*3], positions[j*3+1], positions[j*3+2]);
          }
        }
      }
      lines.geometry.setAttribute("position", new THREE.Float32BufferAttribute(lp, 3));

      camera.position.x += (mx * 0.015 - camera.position.x) * 0.04;
      camera.position.y += (-my * 0.015 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      points.rotation.y += 0.0006;
      lines.rotation.y += 0.0006;
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
    <div className="relative w-full h-full overflow-hidden" style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #4f46e5 40%, #6366f1 70%, #818cf8 100%)" }}>
      <div className="aurora-blob" style={{ width: 600, height: 600, background: "#a78bfa", top: "-10%", left: "-10%" }}/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#22d3ee", bottom: "-10%", right: "-10%", animationDelay: "-10s" }}/>
      
      <canvas ref={canvasRef} className="absolute inset-0 z-0"/>
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8 pointer-events-none">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative mb-2"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.4), transparent)", transform: "scale(2)" }}
          />
          <img 
            src="/logo.svg" 
            alt="Arbione Logo" 
            className="relative w-[420px] h-auto"
            style={{ filter: "drop-shadow(0 0 60px rgba(255,255,255,0.5))" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="h-px w-64 bg-gradient-to-r from-transparent via-white/60 to-transparent my-2"
        />

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-xl text-white/90 font-extralight tracking-[0.6em] uppercase"
        >
          {t.slide1.tagline}
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="mt-12 text-lg text-white/75 font-light max-w-xl leading-relaxed"
        >
          {t.slide1.desc}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{ delay: 2, opacity: { duration: 0.6 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-xs tracking-[0.5em] uppercase z-10"
      >
        <span>{t.nav.discover}</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </motion.div>
    </div>
  );
}
