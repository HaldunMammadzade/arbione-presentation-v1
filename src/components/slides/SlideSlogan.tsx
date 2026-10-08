"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { IconBrain, IconShield } from "../shared/Icons";

export default function SlideSlogan() {
  const { t } = useLocale();

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 overflow-y-auto lg:overflow-hidden overflow-x-hidden" style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #4f46e5 50%, #6366f1 100%)" }}>
      <div className="absolute inset-0 mesh-gradient opacity-30"/>
      <div className="aurora-blob" style={{ width: 600, height: 600, background: "#a78bfa", top: "-20%", left: "-15%", opacity: 0.25 }}/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#22d3ee", bottom: "-20%", right: "-15%", opacity: 0.2, animationDelay: "-10s" }}/>

      {[...Array(60)].map((_, i) => (
        <motion.div key={i} className="absolute rounded-full" style={{ width: 1 + Math.random() * 2, height: 1 + Math.random() * 2, background: "white", left: `${Math.random()*100}%`, top: `${Math.random()*100}%`, boxShadow: "0 0 4px white" }} animate={{ opacity: [0.2, 1, 0.2], scale: [1, 2, 1] }} transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}/>
      ))}

      <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative z-10 mb-8 sm:mb-20">
        <img src="/logo.svg" alt="Arbione" className="w-[200px] sm:w-[280px] lg:w-[320px] h-auto" style={{ filter: "drop-shadow(0 0 40px rgba(255,255,255,0.4))" }}/>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center gap-8 max-w-4xl w-full">
        <motion.div initial={{ y: 50, opacity: 0, filter: "blur(20px)" }} animate={{ y: 0, opacity: 1, filter: "blur(0px)" }} transition={{ delay: 1, duration: 1, ease: [0.25, 1, 0.5, 1] }} className="relative group max-w-full">
          <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} className="absolute -inset-4 rounded-3xl blur-2xl" style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.4), rgba(99,102,241,0.4))" }}/>
          <div className="relative flex items-center gap-4 sm:gap-6 px-6 sm:px-12 py-5 sm:py-8 rounded-3xl glass-strong">
            <motion.div animate={{ rotate: [0, -5, 5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}>
              <div className="hidden sm:block"><IconShield size={64}/></div>
              <div className="sm:hidden"><IconShield size={40}/></div>
            </motion.div>
            <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight italic">
              &ldquo;{t.slide19.slogan2}&rdquo;
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
