"use client";
import { motion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { IconCheck } from "../shared/Icons";
import KineticGrid from "@/components/ui/kinetic-grid";

export default function SlideMobileApp() {
  const { t } = useLocale();

  return (
    <KineticGrid className="w-full h-full flex items-center justify-center p-4 sm:p-10 lg:p-12 overflow-y-auto lg:overflow-hidden overflow-x-hidden">
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1.1fr_1fr] lg:grid-cols-[1.1fr_1fr] gap-4 sm:gap-8 lg:gap-16 items-center py-0 sm:py-6 lg:py-0 pb-16 sm:pb-20 lg:pb-0">
        {/* Left Column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-2 sm:mb-6 border border-primary/30"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect
                x="3"
                y="1"
                width="8"
                height="12"
                rx="1.5"
                stroke="#a78bfa"
                strokeWidth="1.5"
              />
              <circle cx="7" cy="11" r="0.5" fill="#a78bfa" />
            </svg>
            <span className="text-white/80 text-xs tracking-wider uppercase font-semibold">
              {t.slideMobileApp.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="text-2xl sm:text-4xl lg:text-[3.8rem] font-black text-white leading-[1.05] mb-2 sm:mb-4 tracking-[-0.03em]"
          >
            {t.slideMobileApp.title}
          </motion.h2>
          <motion.h3
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.9 }}
            className="text-xl sm:text-3xl font-bold gradient-text-premium mb-3 sm:mb-8"
          >
            {t.slideMobileApp.titleHighlight}
          </motion.h3>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm sm:text-lg text-white/75 leading-relaxed mb-4 sm:mb-8"
          >
            {t.slideMobileApp.desc}
          </motion.p>

          <div className="space-y-2 sm:space-y-3.5">
            {t.slideMobileApp.features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                whileHover={{ x: 8 }}
                className="flex items-start gap-2 sm:gap-3 text-white/85 group cursor-default"
              >
                <div className="mt-0.5 text-primary-light group-hover:scale-110 transition-transform">
                  <IconCheck size={22} />
                </div>
                <span className="text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors">
                  {f}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column — 3D Smartphone Device Mockup */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0, rotateY: -20 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="hidden sm:flex relative items-center justify-center"
          style={{ perspective: 1500 }}
        >
          {/* Pulsing Aura Glow Behind Device */}
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.65, 0.35] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(167,139,250,0.45), rgba(34,211,238,0.2), transparent 70%)",
              transform: "scale(1.3)",
            }}
          />

          <motion.div
            animate={{
              rotateY: [0, 7, -7, 0],
              rotateX: [0, -3, 3, 0],
              y: [0, -8, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.06, rotateY: 12 }}
            className="relative cursor-pointer"
            style={{
              transformStyle: "preserve-3d",
              filter: "drop-shadow(0 40px 80px rgba(99,102,241,0.5))",
            }}
          >
            <div
              className="relative w-[280px] h-[560px] rounded-[3rem] p-2.5 backdrop-blur-xl"
              style={{
                background: "linear-gradient(135deg, rgba(30,27,75,0.9), rgba(10,11,30,0.95))",
                border: "2px solid rgba(255,255,255,0.15)",
                boxShadow: "inset 0 0 20px rgba(255,255,255,0.1), 0 25px 50px rgba(0,0,0,0.5)",
              }}
            >
              <div
                className="relative w-full h-full rounded-[2.4rem] overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, #1e1b4b 0%, #312e81 100%)",
                }}
              >
                {/* Dynamic Island Notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-black/90 z-20 border border-white/10" />

                <div className="relative pt-10 px-4 z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <div className="text-white/60 text-xs">Salam</div>
                      <div className="text-white text-base font-bold">Arbione</div>
                    </div>
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-primary via-accent to-cyan-400 p-[1.5px]"
                    >
                      <div className="w-full h-full rounded-full bg-[#1e1b4b] flex items-center justify-center text-[10px] text-white font-bold">
                        A
                      </div>
                    </motion.div>
                  </div>

                  <div
                    className="rounded-2xl p-3.5 mb-4 border border-white/15"
                    style={{
                      background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                      boxShadow: "0 8px 20px rgba(99,102,241,0.3)",
                    }}
                  >
                    <div className="text-white/80 text-[10px] mb-1 font-medium">Bu gün</div>
                    <div className="flex items-baseline gap-1.5">
                      <div className="text-white text-2xl font-black">8</div>
                      <div className="text-white/80 text-xs">/ 12 task</div>
                    </div>
                    <div className="mt-2.5 h-1.5 rounded-full bg-white/20 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "67%" }}
                        transition={{ delay: 1.5, duration: 1.5 }}
                        className="h-full bg-white rounded-full shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 mb-4">
                    {[
                      { icon: "📍", label: "GPS", c: "from-cyan-400 to-blue-500" },
                      { icon: "👤", label: "HR", c: "from-violet-400 to-purple-500" },
                      { icon: "✓", label: "Tasks", c: "from-amber-400 to-orange-500" },
                      { icon: "📊", label: "Stats", c: "from-emerald-400 to-teal-500" },
                    ].map((it, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="rounded-xl p-2.5 glass border border-white/10"
                      >
                        <div
                          className={`w-7 h-7 rounded-lg bg-gradient-to-br ${it.c} flex items-center justify-center text-xs mb-1.5 shadow-md`}
                        >
                          {it.icon}
                        </div>
                        <div className="text-white text-[10px] font-semibold">{it.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="rounded-xl p-3 glass border border-white/10 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white/70 text-[9px] font-semibold">Activity</div>
                      <div className="text-emerald-400 text-[9px] font-bold">+12%</div>
                    </div>
                    <svg viewBox="0 0 200 40" className="w-full h-8">
                      <motion.path
                        d="M 0 30 Q 25 20 50 22 T 100 12 T 150 8 T 200 5"
                        stroke="#a78bfa"
                        strokeWidth="2.5"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1.5, duration: 2 }}
                        style={{ filter: "drop-shadow(0 0 4px rgba(167,139,250,0.8))" }}
                      />
                    </svg>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                    boxShadow: "0 10px 25px rgba(99,102,241,0.5)",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M5 11l4 4 8-8"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Floating Pill Badges */}
          {[
            { x: -105, y: -50, label: "GPS", c: "#22d3ee", delay: 1.5 },
            { x: 115, y: -80, label: "HR", c: "#a78bfa", delay: 1.7 },
            { x: -125, y: 80, label: "Tasks", c: "#fbbf24", delay: 1.9 },
            { x: 105, y: 100, label: "Stats", c: "#34d399", delay: 2.1 },
          ].map((b, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{ scale: 1, x: b.x, y: b.y }}
              transition={{ delay: b.delay, duration: 0.8, ease: "backOut" }}
              className="absolute glass-strong rounded-xl px-3.5 py-1.5 flex items-center gap-2 pointer-events-none border border-white/15"
              style={{ boxShadow: `0 8px 25px rgba(99,102,241,0.35)` }}
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                className="w-2 h-2 rounded-full"
                style={{ background: b.c, boxShadow: `0 0 8px ${b.c}` }}
              />
              <span className="text-white text-xs font-semibold">{b.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </KineticGrid>
  );
}
