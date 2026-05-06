"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { IconSparkle } from "../shared/Icons";

export default function SlideFuture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    const glowGeom = new THREE.SphereGeometry(1.05, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({ color: 0x818cf8, transparent: true, opacity: 0.1, side: THREE.BackSide });
    const glow = new THREE.Mesh(glowGeom, glowMat);
    scene.add(glow);

    const coreGeom = new THREE.SphereGeometry(0.7, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.15 });
    const core = new THREE.Mesh(coreGeom, coreMat);
    scene.add(core);

    const orbCount = 6;
    const orbs: THREE.Mesh[] = [];
    for (let i = 0; i < orbCount; i++) {
      const orbGeom = new THREE.SphereGeometry(0.04, 16, 16);
      const orbMat = new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? 0xa78bfa : 0x22d3ee });
      const orb = new THREE.Mesh(orbGeom, orbMat);
      orbs.push(orb);
      scene.add(orb);
    }

    let animId: number;
    let t = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.01;
      
      mainWireframe.rotation.y += 0.003;
      mainWireframe.rotation.x += 0.0008;
      outerWireframe.rotation.y -= 0.002;
      outerWireframe.rotation.x += 0.0005;
      glow.rotation.y += 0.003;
      core.rotation.y -= 0.005;
      
      orbs.forEach((orb, i) => {
        const angle = t + (i / orbCount) * Math.PI * 2;
        const radius = 1.4;
        orb.position.x = Math.cos(angle) * radius;
        orb.position.y = Math.sin(angle * 0.7) * 0.8;
        orb.position.z = Math.sin(angle) * radius;
      });
      
      renderer.render(scene, camera);
    };
    animate();

    return () => { cancelAnimationFrame(animId); renderer.dispose(); };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center p-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #4f46e5 40%, #6366f1 70%, #818cf8 100%)" }}>
      <div className="aurora-blob" style={{ width: 600, height: 600, background: "#ffffff", top: "-10%", left: "-5%", opacity: 0.1 }}/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#22d3ee", bottom: "-10%", right: "-5%", opacity: 0.15, animationDelay: "-10s" }}/>
      
      {[...Array(80)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{ 
            width: 1 + Math.random() * 2, 
            height: 1 + Math.random() * 2, 
            left: `${Math.random()*100}%`, 
            top: `${Math.random()*100}%`,
            boxShadow: "0 0 4px rgba(255,255,255,0.8)",
          }}
          animate={{ opacity: [0.2, 1, 0.2], scale: [1, 2, 1] }}
          transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-[1.1fr_1fr] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
          >
            <IconSparkle size={14} className="text-white"/>
            <span className="text-white/90 text-xs tracking-[0.3em] uppercase font-semibold">The Future Starts Today</span>
          </motion.div>

          <motion.h2 initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="text-[4.5rem] font-black text-white leading-[1.05] mb-10 tracking-[-0.03em]" style={{ textShadow: "0 0 40px rgba(255,255,255,0.3)" }}>
            Gələcəyin idarəetməsi<br/>
            <span className="italic" style={{ background: "linear-gradient(135deg, #ffffff, #c4b5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>bu gündən başlayır</span>
          </motion.h2>

          <motion.p initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 1 }} className="text-xl text-white/90 leading-relaxed mb-8">
            Təsəvvür edin: bir il sonra komandanız daha az vaxt sərf edir, amma <span className="font-bold">ikiqat nəticə qazanır</span>. Proseslər avtomatik axır, qərarlar saniyələr içində verilir, hər kəs nə edəcəyini dəqiq bilir.
          </motion.p>

          <motion.p initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 1 }} className="text-2xl text-white font-semibold leading-relaxed mb-10">
            Arbione ilə bu, uzaq gələcək deyil — <br/>
            <span className="underline decoration-white/40 decoration-2">bu gün başlaya biləcəyiniz reallıqdır.</span>
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }} className="flex gap-4">
            <motion.button 
              whileHover={{ scale: 1.05, y: -3 }} 
              whileTap={{ scale: 0.98 }} 
              className="relative px-8 py-4 bg-white text-primary-dark font-bold rounded-2xl overflow-hidden group"
              style={{ boxShadow: "0 20px 40px rgba(255,255,255,0.3)" }}
            >
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
                style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), transparent)" }}
              />
              <span className="relative flex items-center gap-2">
                İndi başla
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
              </span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -3 }} 
              whileTap={{ scale: 0.98 }} 
              className="px-8 py-4 glass-strong text-white font-bold rounded-2xl border border-white/20"
            >
              Demo istə
            </motion.button>
          </motion.div>
        </div>

        <motion.div initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.5, duration: 1.5, ease: [0.25, 1, 0.5, 1] }} className="flex items-center justify-center relative">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(167,139,250,0.4), transparent 70%)", transform: "scale(1.3)" }}
          />
          
          <canvas ref={canvasRef} style={{ width: 550, height: 550 }} className="relative"/>
          
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border-2 border-white/20"
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 1 }}
              style={{ width: 400, height: 400 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
