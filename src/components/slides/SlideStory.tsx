"use client";
import { motion } from "framer-motion";
import Logo from "../shared/Logo";
import { IconSparkle } from "../shared/Icons";

export default function SlideStory() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-16 overflow-hidden" style={{ background: "#0a0b1e" }}>
      <div className="absolute inset-0 mesh-gradient opacity-30"/>
      <div className="absolute inset-0 grid-bg opacity-40"/>
      <div className="aurora-blob" style={{ width: 600, height: 600, background: "#6366f1", top: "-20%", left: "-20%", opacity: 0.3 }}/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#a78bfa", bottom: "-20%", right: "-20%", opacity: 0.25, animationDelay: "-10s" }}/>
      
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%` }}
          animate={{ opacity: [0.1, 0.8, 0.1], scale: [1, 1.5, 1] }}
          transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
        />
      ))}

      <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="relative z-10 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6"
        >
          <IconSparkle size={14} className="text-accent"/>
          <span className="text-white/80 text-xs tracking-[0.3em] uppercase font-semibold">Our Story</span>
        </motion.div>
        
        <h2 className="text-5xl font-black text-white mb-3 tracking-[-0.02em] leading-tight">
          İnnovasiya ilə asanlığın <br/>qovuşduğu nöqtə
        </h2>
        <p className="text-3xl gradient-text-premium font-bold">
          Arbione&apos;ın yaranma hekayəsi
        </p>
      </motion.div>

      <div className="relative z-10 max-w-6xl grid grid-cols-[1fr_1.1fr] gap-16 items-center">
        <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="space-y-5 text-white/85 text-lg leading-relaxed">
          <p>Bütün bu reallıqları nəzərə alaraq biz vahid, tam inteqrasiya olunmuş idarəetmə platforması yaratmağa qərar verdik — <span className="gradient-text-premium font-semibold">Arbione</span>.</p>
          <p>Bunu gerçəkləşdirmək asan olmasa da, tək bir məqsədimiz var idi — şirkətlər üçün ən effektiv iş axışını təmin edən, istifadəsi ən rahat platformanı qurmaq.</p>
          <div className="relative p-5 rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(167,139,250,0.1))", border: "1px solid rgba(167,139,250,0.2)" }}>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-primary"/>
            <p className="italic text-white/90">Biz Arbione-a yalnız proqram kimi yox, idarəetmənin gələcəyini yenidən dizayn etmək kimi baxdıq.</p>
          </div>
        </motion.div>

        <motion.div initial={{ scale: 0.9, opacity: 0, rotateY: -15 }} animate={{ scale: 1, opacity: 1, rotateY: 0 }} transition={{ delay: 0.6, duration: 1.2 }} className="relative" style={{ perspective: 1500 }}>
          <motion.div
            animate={{ rotateY: [0, 3, -3, 0], rotateX: [0, -2, 2, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.03, rotateY: 0 }}
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(30,27,75,0.8), rgba(15,23,42,0.9))",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 40px 80px rgba(99,102,241,0.3), 0 0 60px rgba(167,139,250,0.1), inset 0 1px 0 rgba(255,255,255,0.1)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="flex items-center justify-between p-4 pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Logo size={24}/>
                <span className="text-white font-bold text-sm">arbione</span>
              </div>
              <div className="flex gap-5 text-xs text-white/60">
                {["Ana Səhifə", "Xüsusiyyətlər", "Rəylər", "Qiymətlər"].map(t => <span key={t}>{t}</span>)}
              </div>
              <div className="flex items-center gap-1 text-xs text-white/60 glass px-2 py-1 rounded-md">
                <span>AZE</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><path d="M2 3l3 3 3-3z"/></svg>
              </div>
            </div>

            <div className="p-8">
              <div className="text-white text-4xl font-black leading-[1.1] mb-4 tracking-tight">
                Biznesinizi daha rahat<br/>
                idarə edin, <span className="gradient-text-premium">Arbione</span> ilə<br/>
                sadələşdirin!
              </div>
              <p className="text-white/70 text-sm mb-5">GPS və HRM sistemimiz ilə işlərinizi izləyin, idarə edin və məhsuldarlığı artırın.</p>
              <motion.button whileHover={{ scale: 1.05, x: 5 }} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold">
                İndi qoşul
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14m-7-7l7 7-7 7"/></svg>
              </motion.button>
            </div>
            
            <div className="px-6 pb-6">
              <div className="text-center text-white/80 font-bold text-sm mb-3">Xidmətlər</div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { t: "Qabaqcıl GPS", s: "İzləmə Sistemi" },
                  { t: "Davamiyyətə", s: "Nəzarət Sistemi" },
                  { t: "Tapşırıqların", s: "İdarə Edilməsi" },
                  { t: "İnsan Resursları", s: "Menecmenti" },
                ].map((it, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ y: 20, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{ delay: 1.2 + i * 0.1 }} 
                    whileHover={{ y: -3, backgroundColor: "rgba(167,139,250,0.15)" }}
                    className="p-3 rounded-xl glass text-white/80 text-[10px] text-center cursor-pointer"
                  >
                    <div className="font-semibold leading-tight">{it.t}</div>
                    <div className="text-white/50 mt-0.5 leading-tight">{it.s}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div animate={{ y: [0, -20, 0], x: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-8 -right-8 w-24 h-24 rounded-3xl opacity-60 blur-2xl" style={{ background: "radial-gradient(circle, #a78bfa, transparent)" }}/>
          <motion.div animate={{ y: [0, 15, 0], x: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -bottom-8 -left-8 w-28 h-28 rounded-3xl opacity-50 blur-2xl" style={{ background: "radial-gradient(circle, #22d3ee, transparent)" }}/>
        </motion.div>
      </div>
    </div>
  );
}
