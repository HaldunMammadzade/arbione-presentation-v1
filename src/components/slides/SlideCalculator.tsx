"use client";
import { useState, useEffect, useRef } from "react";
import { motion, animate } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { IconChart, IconSparkle } from "../shared/Icons";
import InteractiveTiltCard from "../shared/InteractiveTiltCard";

function ReactiveCounter({ value, prefix = "", suffix = "", decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const prevValue = useRef(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const controls = animate(prevValue.current, value, {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
      onUpdate(v) {
        node.textContent = prefix + (decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString()) + suffix;
      }
    });

    prevValue.current = value;
    return () => controls.stop();
  }, [value, prefix, suffix, decimals]);

  return <span ref={ref} />;
}

export default function SlideCalculator() {
  const { t, locale } = useLocale();
  const s = t.slideCalculator;

  const [employees, setEmployees] = useState(50);
  const [salary, setSalary] = useState(1000);

  // Formulas based on research optimization averages
  // An average employee wastes ~12 hours per month on manual reports, attendance tracking, and disjointed systems.
  const hoursSaved = Math.round(employees * 12 * 12);
  // Arbione saves ~22% in overhead, operational payroll leakages, and software licenses consolidations.
  const moneySaved = Math.round(employees * salary * 12 * 0.22);

  // Generate SVG chart path based on money saved (growing over 12 months)
  const chartPoints = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    const monthlySaving = moneySaved / 12;
    const accumulated = monthlySaving * month;
    
    // Scale accumulated savings to fits inside a 300x120 SVG box
    const x = (i / 11) * 320 + 20;
    const y = 110 - (accumulated / moneySaved) * 80;
    return { x, y, val: accumulated };
  });

  const pathD = `M ${chartPoints[0].x} ${chartPoints[0].y} ` + chartPoints.slice(1).map(p => `L ${p.x} ${p.y}`).join(" ");
  const areaD = `${pathD} L ${chartPoints[chartPoints.length - 1].x} 115 L ${chartPoints[0].x} 115 Z`;

  const currencySymbol = locale === "en" ? "$" : "₼";

  return (
    <div className="relative w-full h-full flex items-center p-16 overflow-hidden" style={{ background: "#06071a" }}>
      <div className="absolute inset-0 mesh-gradient opacity-30"/>
      <div className="aurora-blob" style={{ width: 600, height: 600, background: "#22d3ee", top: "-20%", left: "-10%", opacity: 0.2 }}/>
      <div className="aurora-blob" style={{ width: 500, height: 500, background: "#818cf8", bottom: "-20%", right: "-10%", opacity: 0.15, animationDelay: "-6s" }}/>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-[1fr_1.1fr] gap-16 items-center">
        {/* Left Side: Controls */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <IconSparkle size={16} className="text-cyan-400"/>
            <span className="text-white/80 text-xs tracking-wider uppercase font-semibold">{s.badge}</span>
          </motion.div>

          <motion.h2 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="text-[3.2rem] font-black text-white leading-[1.05] mb-6 tracking-[-0.03em]">
            {s.titlePart1}<br/>
            <span className="gradient-text-premium">{s.titlePart2}</span>
          </motion.h2>

          <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-white/70 text-base leading-relaxed mb-8">
            {s.desc}
          </motion.p>

          {/* Controls Container */}
          <div className="space-y-6 glass-strong rounded-3xl p-6 border border-white/10">
            {/* Employee Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-white/80 font-semibold text-sm">{s.labelEmployees}</span>
                <span className="text-cyan-400 font-mono font-bold text-lg bg-cyan-950/40 px-3 py-1 rounded-xl border border-cyan-500/20">{employees}</span>
              </div>
              <input
                type="range"
                min="5"
                max="500"
                step="5"
                value={employees}
                onChange={(e) => setEmployees(parseInt(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-white/10 accent-cyan-400 focus:outline-none"
                style={{
                  background: `linear-gradient(to right, #22d3ee 0%, #22d3ee ${(employees - 5) / 495 * 100}%, rgba(255,255,255,0.1) ${(employees - 5) / 495 * 100}%, rgba(255,255,255,0.1) 100%)`
                }}
              />
            </div>

            {/* Salary Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-white/80 font-semibold text-sm">{s.labelSalary}</span>
                <span className="text-primary font-mono font-bold text-lg bg-indigo-950/40 px-3 py-1 rounded-xl border border-indigo-500/20">
                  {salary} {currencySymbol}
                </span>
              </div>
              <input
                type="range"
                min="300"
                max="5000"
                step="100"
                value={salary}
                onChange={(e) => setSalary(parseInt(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-white/10 accent-indigo-500 focus:outline-none"
                style={{
                  background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${(salary - 300) / 4700 * 100}%, rgba(255,255,255,0.1) ${(salary - 300) / 4700 * 100}%, rgba(255,255,255,0.1) 100%)`
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Side: Animated ROI Card */}
        <InteractiveTiltCard delay={0.4} glowColor="rgba(99, 102, 241, 0.4)" className="h-[550px]">
          <div className="relative h-full flex flex-col justify-between p-8 rounded-3xl overflow-hidden glass-strong">
            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -inset-6 rounded-3xl blur-3xl opacity-40 pointer-events-none" style={{ background: "linear-gradient(135deg, #6366f1, #22d3ee)" }}/>

            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <IconChart size={24} className="text-cyan-400"/>
                <h3 className="text-white font-bold text-lg">{s.resultTitle}</h3>
              </div>
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"/>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-2 gap-6 my-4">
              <div className="glass p-5 rounded-2xl border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
                <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">{s.resultTimeSaved}</div>
                <div className="text-white font-black text-3xl tracking-tight">
                  <ReactiveCounter value={hoursSaved} suffix={` ${s.hours}`}/>
                </div>
              </div>

              <div className="glass p-5 rounded-2xl border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/10 rounded-full blur-xl pointer-events-none" />
                <div className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">{s.resultMoneySaved}</div>
                <div className="text-white font-black text-3xl tracking-tight text-cyan-400">
                  <ReactiveCounter value={moneySaved} prefix={`${currencySymbol} `}/>
                </div>
              </div>
            </div>

            {/* Dynamic Growth SVG Chart */}
            <div className="w-full glass rounded-2xl p-4 border border-white/5 relative">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white/50 text-[10px] uppercase font-bold tracking-wider">12 Aylıq Qənaət Dinamikası</span>
                <span className="text-cyan-400 font-mono text-xs font-semibold">
                  M12: {currencySymbol} {moneySaved.toLocaleString()}
                </span>
              </div>
              
              <div className="h-28 w-full relative">
                <svg className="w-full h-full" viewBox="0 0 360 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6366f1"/>
                      <stop offset="50%" stopColor="#818cf8"/>
                      <stop offset="100%" stopColor="#22d3ee"/>
                    </linearGradient>
                    <linearGradient id="chartAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.45"/>
                      <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Grid Lines */}
                  <line x1="20" y1="15" x2="340" y2="15" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                  <line x1="20" y1="65" x2="340" y2="65" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                  <line x1="20" y1="115" x2="340" y2="115" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>

                  {/* Filled Area */}
                  <path d={areaD} fill="url(#chartAreaGrad)" />
                  
                  {/* Colored Line */}
                  <path d={pathD} fill="none" stroke="url(#chartLineGrad)" strokeWidth="3" strokeLinecap="round" />

                  {/* Interactive Pulse Dot on Month 12 */}
                  <g transform={`translate(${chartPoints[11].x}, ${chartPoints[11].y})`}>
                    <circle r="6" fill="#22d3ee" />
                    <circle r="12" fill="none" stroke="#22d3ee" strokeWidth="2" className="animate-ping opacity-60" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Explanatory callout */}
            <div className="text-[11px] text-white/40 leading-relaxed italic border-t border-white/5 pt-4">
              {s.callout}
            </div>
          </div>
        </InteractiveTiltCard>
      </div>
    </div>
  );
}
