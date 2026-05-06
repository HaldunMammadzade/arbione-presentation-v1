"use client";
import { motion } from "framer-motion";
import { IconSparkle } from "../shared/Icons";

export default function SlideXCard() {
  return (
    <div className="relative w-full h-full flex items-center p-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #0a0b1e 0%, #1e1b4b 50%, #0a0b1e 100%)" }}>
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{ 
              width: 1 + Math.random() * 2, 
              height: 1 + Math.random() * 2, 
              background: i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#ffffff" : "#a78bfa", 
              left: `${Math.random()*100}%`, 
              top: `${Math.random()*100}%`,
              boxShadow: i % 3 === 0 ? "0 0 4px #22d3ee" : "none",
            }}
            animate={{ opacity: [0.1, 1, 0.1], scale: [1, 2, 1] }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}
      </div>

      <div className="aurora-blob" style={{ width: 600, height: 600, background: "#22d3ee", top: "-20%", right: "-20%", opacity: 0.15 }}/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#4338ca", bottom: "-20%", left: "-20%", opacity: 0.2, animationDelay: "-10s" }}/>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-[1fr_1.1fr] gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{ background: "rgba(34,211,238,0.15)", border: "1px solid rgba(34,211,238,0.3)" }}
          >
            <IconSparkle size={14} className="text-cyan-400"/>
            <span className="text-cyan-300 text-xs tracking-[0.3em] uppercase font-semibold">Exclusive Bonus</span>
          </motion.div>

          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="text-[3.5rem] font-black text-white leading-[1.05] mb-8 tracking-[-0.03em]">
            Arbione ilə başlayın,<br/>
            <span style={{ background: "linear-gradient(135deg, #22d3ee, #60a5fa, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>rəqəmsal kimliyinizi əldə edin!</span>
          </motion.h2>

          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-xl text-white/90 leading-relaxed mb-5">
            Sadəcə Arbione istifadəçilərinə özəl <span className="font-bold" style={{ color: "#22d3ee" }}>XCard</span> hədiyyə.
          </motion.p>

          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="text-white/75 text-lg leading-relaxed mb-5">
            <span className="font-bold" style={{ color: "#22d3ee" }}>XCard</span> sadəcə vizitkart deyil, sizin <span className="font-semibold" style={{ color: "#22d3ee" }}>rəqəmsal kimliyinizdir.</span>
          </motion.p>

          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }} className="text-white/70 text-base leading-relaxed mb-5">
            XCard ilə bütün əlaqələrinizi <span className="font-semibold text-white">bir toxunuşla</span> paylaşın, brend imicinizi gücləndirir və partnyorlarınıza müasir təəssürat yaradır.
          </motion.p>

          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }} className="relative p-4 rounded-xl" style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.1), rgba(167,139,250,0.05))", borderLeft: "3px solid #22d3ee" }}>
            <p className="text-white/80 italic">
              Bu, sadəcə bonus deyil — sizin peşəkar imicinizin <span className="font-bold" style={{ color: "#22d3ee" }}>yeni başlanğıcıdır.</span>
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ scale: 0.8, opacity: 0, rotateY: -30 }} 
          animate={{ scale: 1, opacity: 1, rotateY: 0 }} 
          transition={{ delay: 0.5, duration: 1.2, ease: [0.25, 1, 0.5, 1] }} 
          className="relative flex items-center justify-center" 
          style={{ perspective: 1500 }}
        >
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
            className="absolute w-[600px] h-[600px] rounded-full opacity-20" 
            style={{ background: "conic-gradient(from 0deg, transparent, #22d3ee, transparent, #a78bfa, transparent)" }}
          />

          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(34,211,238,0.3), transparent 70%)" }}
          />
          
          <motion.div
            animate={{ rotateY: [0, 8, -8, 0], rotateX: [0, -4, 4, 0], y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, rotateY: 15 }}
            className="relative"
            style={{ transformStyle: "preserve-3d", filter: "drop-shadow(0 40px 80px rgba(34,211,238,0.4))" }}
          >
            <img 
              src="/card.svg" 
              alt="XCard" 
              className="w-[500px] h-auto"
              style={{ filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.5))" }}
            />
            
            <motion.div
              animate={{ opacity: [0, 1, 0], x: [-100, 400] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 w-32 pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)", transform: "skewX(-20deg)" }}
            />
          </motion.div>

          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{
                top: "30%",
                right: "15%",
                transformOrigin: "center",
              }}
              animate={{ 
                scale: [0.5, 1.5, 0.5],
                opacity: [0, 0.8, 0],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.7 }}
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <path d="M 20 40 Q 40 20 60 40" stroke="#22d3ee" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M 15 40 Q 40 10 65 40" stroke="#22d3ee" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7"/>
                <path d="M 10 40 Q 40 0 70 40" stroke="#22d3ee" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4"/>
              </svg>
            </motion.div>
          ))}

          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: "#22d3ee",
                left: `${30 + Math.random() * 40}%`,
                top: `${30 + Math.random() * 40}%`,
                boxShadow: "0 0 10px #22d3ee",
              }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
                y: [0, -50],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
