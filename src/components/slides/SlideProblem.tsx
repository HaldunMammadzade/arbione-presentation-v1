"use client";
import { motion } from "framer-motion";
import { IconWarning } from "../shared/Icons";

export default function SlideProblem() {
  return (
    <div className="relative w-full h-full flex items-center p-20 overflow-hidden noise-overlay" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #ede9fe 100%)" }}>
      <div className="absolute inset-0 grid-bg-light opacity-40"/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#ef4444", top: "-10%", right: "-5%", opacity: 0.08 }}/>
      <div className="aurora-blob" style={{ width: 400, height: 400, background: "#a78bfa", bottom: "-10%", left: "-5%", opacity: 0.15, animationDelay: "-10s" }}/>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-[1.1fr_1fr] gap-20 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6"
          >
            <IconWarning size={16}/>
            <span className="text-red-500 text-xs tracking-wider uppercase font-semibold">The Root Cause</span>
          </motion.div>

          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="text-[4.5rem] font-black text-slate-900 leading-[1.05] mb-10 tracking-[-0.03em]">
            Bəs problem <br/><span className="gradient-text-premium">necə yaranır?</span>
          </motion.h2>

          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-xl text-slate-600 leading-relaxed mb-8">
            Çünki sistemlər bir-biri ilə sintez halında deyil. Şirkət strukturu bir <span className="font-semibold text-slate-900">orqanizm kimi</span> işləməlidir, amma çox vaxt HR, GPS, tapşırıq və hesabat sistemləri bir-birindən tamamilə ayrı olur.
          </motion.p>

          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="relative p-6 rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(167,139,250,0.08))", border: "1px solid rgba(99,102,241,0.2)" }}>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent"/>
            <p className="text-xl text-slate-800 leading-relaxed font-medium">
              Bütün sistemləri analiz etdikdən sonra gəldiyimiz nəticə budur: texnologiyalar çoxaldıqca idarəetmə sadələşmir — <span className="gradient-text">əksinə, daha da mürəkkəbləşir.</span>
            </p>
          </motion.div>
        </div>

        <motion.div initial={{ scale: 0, rotate: -20 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 0.4, duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }} className="relative h-[500px] flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.3), transparent 70%)" }}
          />
          
          <svg viewBox="0 0 500 500" className="w-full h-full relative">
            <defs>
              <linearGradient id="tangleGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1"/>
                <stop offset="100%" stopColor="#a78bfa"/>
              </linearGradient>
              <linearGradient id="tangleGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#a78bfa"/>
                <stop offset="100%" stopColor="#818cf8"/>
              </linearGradient>
              <filter id="tangleGlow">
                <feGaussianBlur stdDeviation="3" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            
            <motion.path
              d="M 150 100 Q 200 50 280 100 T 400 150 Q 450 200 400 280 T 350 380 Q 300 430 220 400 T 100 350 Q 50 300 80 220 T 100 120 Q 120 80 150 100 Z"
              stroke="url(#tangleGrad1)" strokeWidth="5" fill="none" strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 0.8 }}
              filter="url(#tangleGlow)"
            />
            <motion.path
              d="M 120 200 Q 180 150 250 180 T 380 200 Q 420 250 380 320 T 280 380 Q 200 400 150 350 T 80 280 Q 60 230 120 200 Z"
              stroke="url(#tangleGrad2)" strokeWidth="4" fill="none" strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 1.2 }}
              filter="url(#tangleGlow)"
            />
            <motion.path
              d="M 200 150 Q 280 180 320 250 T 280 350 Q 220 380 180 320 T 150 220 Q 170 170 200 150 Z"
              stroke="url(#tangleGrad1)" strokeWidth="3" fill="none" strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, delay: 1.6 }}
              filter="url(#tangleGlow)"
              opacity="0.7"
            />
            
            <motion.g initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.8, duration: 0.8, ease: "backOut" }}>
              <motion.circle cx="250" cy="250" r="50" fill="url(#tangleGrad1)" filter="url(#tangleGlow)" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }}/>
              <g transform="translate(225 225)">
                <circle cx="15" cy="15" r="25" fill="#1e293b"/>
                <circle cx="10" cy="12" r="2.5" fill="white"/>
                <circle cx="20" cy="12" r="2.5" fill="white"/>
                <circle cx="10" cy="12" r="1" fill="#1e293b"/>
                <circle cx="20" cy="12" r="1" fill="#1e293b"/>
                <path d="M 8 22 Q 15 18 22 22" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M 4 8 L 12 6 M 26 8 L 18 6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </g>
            </motion.g>
            
            {[
              { x: 100, y: 150, delay: 3 },
              { x: 400, y: 180, delay: 3.2 },
              { x: 120, y: 350, delay: 3.4 },
              { x: 380, y: 350, delay: 3.6 },
            ].map((p, i) => (
              <motion.g key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: p.delay, duration: 0.5 }}>
                <motion.circle cx={p.x} cy={p.y} r="12" fill="#a78bfa" animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}/>
                <circle cx={p.x} cy={p.y} r="6" fill="#6366f1"/>
              </motion.g>
            ))}
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
