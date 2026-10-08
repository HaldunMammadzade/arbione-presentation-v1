"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { IconSparkle } from "../shared/Icons";

function QRPattern({ color = "#6366f1", id }: { color?: string; id: string }) {
  const cells: [number,number][] = [
    [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],
    [1,0],[1,6],[2,0],[2,2],[2,3],[2,4],[2,6],
    [3,0],[3,2],[3,3],[3,4],[3,6],[4,0],[4,2],[4,3],[4,4],[4,6],
    [5,0],[5,6],[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],
    [0,14],[0,15],[0,16],[0,17],[0,18],[0,19],[0,20],
    [1,14],[1,20],[2,14],[2,16],[2,17],[2,18],[2,20],
    [3,14],[3,16],[3,17],[3,18],[3,20],[4,14],[4,16],[4,17],[4,18],[4,20],
    [5,14],[5,20],[6,14],[6,15],[6,16],[6,17],[6,18],[6,19],[6,20],
    [14,0],[14,1],[14,2],[14,3],[14,4],[14,5],[14,6],
    [15,0],[15,6],[16,0],[16,2],[16,3],[16,4],[16,6],
    [17,0],[17,2],[17,3],[17,4],[17,6],[18,0],[18,2],[18,3],[18,4],[18,6],
    [19,0],[19,6],[20,0],[20,1],[20,2],[20,3],[20,4],[20,5],[20,6],
    [8,2],[8,4],[8,6],[8,8],[8,10],[8,13],[8,15],[8,17],[8,19],
    [9,1],[9,3],[9,5],[9,7],[9,9],[9,11],[9,14],[9,16],[9,18],[9,20],
    [10,0],[10,2],[10,6],[10,8],[10,12],[10,14],[10,18],[10,20],
    [11,1],[11,3],[11,5],[11,9],[11,11],[11,13],[11,15],[11,19],
    [12,2],[12,4],[12,8],[12,10],[12,12],[12,16],[12,18],[12,20],
    [13,1],[13,3],[13,7],[13,9],[13,11],[13,13],[13,17],[13,19],
  ];
  return (
    <svg viewBox="0 0 21 21" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`qr-grad-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color}/>
          <stop offset="100%" stopColor={color === "#6366f1" ? "#a78bfa" : "#22d3ee"}/>
        </linearGradient>
      </defs>
      <rect width="21" height="21" fill="transparent"/>
      {cells.map(([r, c], i) => (
        <rect key={i} x={c} y={r} width="0.9" height="0.9" rx="0.15" fill={`url(#qr-grad-${id})`}/>
      ))}
    </svg>
  );
}

function StoreBadge({ type, label, sublabel }: { type: "apple" | "google"; label: string; sublabel: string }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-white/20 backdrop-blur-sm" style={{ background: "rgba(255,255,255,0.08)" }}>
      {type === "apple" ? (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="white">
          <path d="M20.5 14.8c0-3.2 2.6-4.7 2.7-4.8-1.5-2.1-3.8-2.4-4.6-2.4-2-.2-3.8 1.2-4.8 1.2-1 0-2.5-1.1-4.2-1.1-2.1 0-4.1 1.2-5.2 3.1-2.2 3.9-.6 9.6 1.6 12.7 1.1 1.6 2.3 3.3 4 3.2 1.6-.1 2.2-1 4.1-1s2.5 1 4.2.9c1.7 0 2.8-1.5 3.9-3.1.5-.7.9-1.5 1.2-2.3-3.2-1.2-3.9-5.4-3.9-6.4zm-3.7-11.8c.9-1.1 1.5-2.6 1.3-4.1-1.3.1-2.8.9-3.7 2-0.8.9-1.5 2.4-1.3 3.9 1.4.1 2.8-.7 3.7-1.8z"/>
        </svg>
      ) : (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M3.5 3.2L15.8 14 3.5 24.8c-.3-.3-.5-.7-.5-1.2V4.4c0-.5.2-.9.5-1.2z" fill="#EA4335"/>
          <path d="M20.1 9.5L15.8 14l-12.3-10.8L16.5 7c1.4.7 2.8 1.5 3.6 2.5z" fill="#FBBC04"/>
          <path d="M20.1 18.5c-.8 1-2.2 1.8-3.6 2.5L3.5 24.8 15.8 14l4.3 4.5z" fill="#34A853"/>
          <path d="M22 11.2c.6.8.9 1.8.9 2.8s-.3 2-.9 2.8l-1.9 1.7L15.8 14l4.3-4.5 1.9 1.7z" fill="#4285F4"/>
        </svg>
      )}
      <div>
        <div className="text-white/60 text-xs leading-none mb-0.5">{label}</div>
        <div className="text-white font-bold text-sm leading-none">{sublabel}</div>
      </div>
    </div>
  );
}

export default function SlideQRCode() {
  const { t } = useLocale();
  const s = t.slideQR;

  return (
    <div className="relative w-full h-full flex items-center p-16 overflow-hidden" style={{ background: "#06071a" }}>
      <div className="absolute inset-0 mesh-gradient opacity-30"/>
      <div className="aurora-blob" style={{ width: 600, height: 600, background: "#6366f1", top: "-20%", right: "-10%", opacity: 0.25 }}/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#22d3ee", bottom: "-20%", left: "-10%", opacity: 0.2, animationDelay: "-8s" }}/>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-[1fr_1fr] gap-20 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <IconSparkle size={16} className="text-cyan-400"/>
            <span className="text-white/80 text-xs tracking-wider uppercase font-semibold">{s.badge}</span>
          </motion.div>

          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="text-[3.5rem] font-black text-white leading-[1.05] mb-6 tracking-[-0.03em]">
            {s.titlePart1}<br/>
            <span className="gradient-text-premium">{s.titlePart2}</span>
          </motion.h2>

          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-lg text-white/70 leading-relaxed mb-10">
            {s.desc}
          </motion.p>

          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="grid grid-cols-3 gap-4 mb-10">
            {s.stats.map((stat, i) => (
              <motion.div key={i} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.7 + i * 0.12, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }} className="glass-strong rounded-2xl p-4 text-center">
                <div className="text-2xl font-black gradient-text-premium">{stat.value}</div>
                <div className="text-white/60 text-xs mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }} className="flex flex-col gap-3">
            <StoreBadge type="apple" label={s.appStoreLabel} sublabel={s.appStore}/>
            <StoreBadge type="google" label={s.playStoreLabel} sublabel={s.playStore}/>
          </motion.div>
        </div>

        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 1 }} className="flex flex-col items-center gap-8">
          <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.25), rgba(34,211,238,0.1), transparent 70%)" }}/>

          <div className="flex gap-8 relative">
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="flex flex-col items-center gap-4">
              <div className="relative w-52 h-52 rounded-3xl p-4 glass-strong" style={{ boxShadow: "0 20px 60px rgba(99,102,241,0.35)" }}>
                <motion.div animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 3, repeat: Infinity }} className="absolute inset-0 rounded-3xl" style={{ boxShadow: "inset 0 0 40px rgba(99,102,241,0.3)" }}/>
                <QRPattern color="#6366f1" id="appstore"/>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #6366f1, #a78bfa)", boxShadow: "0 4px 15px rgba(99,102,241,0.7)" }}>
                    <svg width="20" height="20" viewBox="0 0 28 28" fill="white">
                      <path d="M20.5 14.8c0-3.2 2.6-4.7 2.7-4.8-1.5-2.1-3.8-2.4-4.6-2.4-2-.2-3.8 1.2-4.8 1.2-1 0-2.5-1.1-4.2-1.1-2.1 0-4.1 1.2-5.2 3.1-2.2 3.9-.6 9.6 1.6 12.7 1.1 1.6 2.3 3.3 4 3.2 1.6-.1 2.2-1 4.1-1s2.5 1 4.2.9c1.7 0 2.8-1.5 3.9-3.1.5-.7.9-1.5 1.2-2.3-3.2-1.2-3.9-5.4-3.9-6.4zm-3.7-11.8c.9-1.1 1.5-2.6 1.3-4.1-1.3.1-2.8.9-3.7 2-0.8.9-1.5 2.4-1.3 3.9 1.4.1 2.8-.7 3.7-1.8z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-white font-bold text-sm">{s.appStore}</div>
                <div className="text-white/50 text-xs">{s.scanLabel}</div>
              </div>
            </motion.div>

            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }} className="flex flex-col items-center gap-4">
              <div className="relative w-52 h-52 rounded-3xl p-4 glass-strong" style={{ boxShadow: "0 20px 60px rgba(34,211,238,0.3)" }}>
                <motion.div animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} className="absolute inset-0 rounded-3xl" style={{ boxShadow: "inset 0 0 40px rgba(34,211,238,0.25)" }}/>
                <QRPattern color="#22d3ee" id="googleplay"/>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #22d3ee, #6366f1)", boxShadow: "0 4px 15px rgba(34,211,238,0.6)" }}>
                    <svg width="18" height="18" viewBox="0 0 28 28" fill="none">
                      <path d="M3.5 3.2L15.8 14 3.5 24.8c-.3-.3-.5-.7-.5-1.2V4.4c0-.5.2-.9.5-1.2z" fill="#EA4335"/>
                      <path d="M20.1 9.5L15.8 14l-12.3-10.8L16.5 7c1.4.7 2.8 1.5 3.6 2.5z" fill="#FBBC04"/>
                      <path d="M20.1 18.5c-.8 1-2.2 1.8-3.6 2.5L3.5 24.8 15.8 14l4.3 4.5z" fill="#34A853"/>
                      <path d="M22 11.2c.6.8.9 1.8.9 2.8s-.3 2-.9 2.8l-1.9 1.7L15.8 14l4.3-4.5 1.9 1.7z" fill="#4285F4"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-white font-bold text-sm">{s.playStore}</div>
                <div className="text-white/50 text-xs">{s.scanLabel}</div>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 0.8, ease: "backOut" }} className="flex items-center gap-2 px-5 py-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
            <motion.div animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }} transition={{ duration: 1.8, repeat: Infinity }} className="w-2 h-2 rounded-full bg-green-400"/>
            <span className="text-white/70 text-sm">arbione.az/app</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
