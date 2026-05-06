"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";

export default function SlideHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    const sizes = new Float32Array(count);
    const velocities: { x: number; y: number; z: number }[] = [];

    const color1 = new THREE.Color("#ffffff");
    const color2 = new THREE.Color("#c4b5fd");
    const color3 = new THREE.Color("#ddd6fe");

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
      
      const c = i % 3 === 0 ? color1 : i % 3 === 1 ? color2 : color3;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
      
      sizes[i] = Math.random() * 2 + 0.5;
      velocities.push({ x: (Math.random() - 0.5) * 0.04, y: (Math.random() - 0.5) * 0.04, z: (Math.random() - 0.5) * 0.04 });
    }

    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.6,
      transparent: true,
      opacity: 0.9,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(geom, mat);
    scene.add(points);

    const lineGeom = new THREE.BufferGeometry();
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });
    const lines = new THREE.LineSegments(lineGeom, lineMat);
    scene.add(lines);

    let mouseX = 0, mouseY = 0;
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX - window.innerWidth / 2;
      mouseY = e.clientY - window.innerHeight / 2;
    };
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

      camera.position.x += (mouseX * 0.015 - camera.position.x) * 0.04;
      camera.position.y += (-mouseY * 0.015 - camera.position.y) * 0.04;
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
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.4), transparent)", transform: "scale(2)" }}
          />
          <svg width="130" height="130" viewBox="0 0 100 100" className="relative" style={{ filter: "drop-shadow(0 0 40px rgba(255,255,255,0.6))" }}>
            <path d="M 50 10 L 20 85 L 80 85 Z" fill="white" opacity="0.98"/>
            <circle cx="30" cy="60" r="6" fill="none" stroke="white" strokeWidth="2.5"/>
            <circle cx="45" cy="45" r="4" fill="white"/>
            <line x1="36" y1="60" x2="41" y2="45" stroke="white" strokeWidth="2.5"/>
            <line x1="30" y1="66" x2="30" y2="75" stroke="white" strokeWidth="2.5"/>
            <circle cx="30" cy="78" r="3" fill="white"/>
          </svg>
        </motion.div>

        <motion.h1
          initial={{ y: 80, opacity: 0, filter: "blur(20px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="text-[10rem] font-black text-white leading-none tracking-[-0.06em]"
          style={{ textShadow: "0 0 80px rgba(255,255,255,0.4), 0 0 40px rgba(167,139,250,0.3)" }}
        >
          arbione
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="h-px w-64 bg-gradient-to-r from-transparent via-white/60 to-transparent my-6"
        />

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-2xl text-white/90 font-extralight tracking-[0.6em] uppercase"
        >
          Digital Brilliance
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="mt-16 text-lg text-white/75 font-light max-w-xl leading-relaxed"
        >
          Bütün idarəetmə proseslərini vahid, ağıllı platformada birləşdirən texnoloji ekosistem.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{ delay: 2, opacity: { duration: 0.6 }, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-xs tracking-[0.5em] uppercase z-10"
      >
        <span>Kəşf et</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </motion.div>
    </div>
  );
}
