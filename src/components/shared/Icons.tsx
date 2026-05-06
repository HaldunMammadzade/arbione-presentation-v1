"use client";
import { motion } from "framer-motion";

interface IconProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export const IconUsers = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="usersGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#818cf8"/>
        <stop offset="100%" stopColor="#a78bfa"/>
      </linearGradient>
    </defs>
    <circle cx="24" cy="16" r="7" stroke="url(#usersGrad)" strokeWidth="2.5"/>
    <path d="M10 38c0-7 6-12 14-12s14 5 14 12" stroke="url(#usersGrad)" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="38" cy="14" r="4" stroke="url(#usersGrad)" strokeWidth="2" opacity="0.6"/>
    <circle cx="10" cy="14" r="4" stroke="url(#usersGrad)" strokeWidth="2" opacity="0.6"/>
  </svg>
);

export const IconChart = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22d3ee"/>
        <stop offset="100%" stopColor="#818cf8"/>
      </linearGradient>
    </defs>
    <rect x="6" y="28" width="8" height="14" rx="2" fill="url(#chartGrad)" opacity="0.7"/>
    <rect x="20" y="18" width="8" height="24" rx="2" fill="url(#chartGrad)" opacity="0.85"/>
    <rect x="34" y="8" width="8" height="34" rx="2" fill="url(#chartGrad)"/>
    <path d="M4 12 L14 16 L26 10 L38 4" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="38" cy="4" r="3" fill="#a78bfa"/>
  </svg>
);

export const IconLocation = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="locGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fb923c"/>
        <stop offset="100%" stopColor="#f43f5e"/>
      </linearGradient>
    </defs>
    <path d="M24 4C15 4 8 11 8 20c0 11 16 24 16 24s16-13 16-24c0-9-7-16-16-16z" fill="url(#locGrad)"/>
    <circle cx="24" cy="19" r="6" fill="white"/>
    <circle cx="24" cy="19" r="3" fill="url(#locGrad)"/>
  </svg>
);

export const IconTask = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="taskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbf24"/>
        <stop offset="100%" stopColor="#f97316"/>
      </linearGradient>
    </defs>
    <rect x="6" y="6" width="36" height="36" rx="8" fill="url(#taskGrad)" opacity="0.15"/>
    <rect x="6" y="6" width="36" height="36" rx="8" stroke="url(#taskGrad)" strokeWidth="2"/>
    <path d="M14 22 L20 28 L34 14" stroke="url(#taskGrad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconLightbulb = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="bulbIconGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fde047"/>
        <stop offset="100%" stopColor="#f59e0b"/>
      </linearGradient>
    </defs>
    <path d="M24 4c-7 0-13 6-13 13 0 5 3 9 6 12v5h14v-5c3-3 6-7 6-12 0-7-6-13-13-13z" fill="url(#bulbIconGrad)"/>
    <rect x="18" y="36" width="12" height="3" rx="1" fill="#475569"/>
    <rect x="20" y="40" width="8" height="2" rx="1" fill="#475569"/>
    {[0, 45, 90, 135, 180, 225, 270, 315].map(a => {
      const rad = (a * Math.PI) / 180;
      const x1 = 24 + Math.cos(rad) * 20;
      const y1 = 20 + Math.sin(rad) * 20;
      const x2 = 24 + Math.cos(rad) * 24;
      const y2 = 20 + Math.sin(rad) * 24;
      return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fde047" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>;
    })}
  </svg>
);

export const IconRocket = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#a78bfa"/>
        <stop offset="100%" stopColor="#6366f1"/>
      </linearGradient>
    </defs>
    <path d="M24 4 C18 8 14 16 14 26 L14 34 L20 34 L20 42 L28 42 L28 34 L34 34 L34 26 C34 16 30 8 24 4z" fill="url(#rocketGrad)"/>
    <circle cx="24" cy="20" r="4" fill="white"/>
    <circle cx="24" cy="20" r="2" fill="#6366f1"/>
    <path d="M14 30 L8 38 L14 36 z" fill="#f97316"/>
    <path d="M34 30 L40 38 L34 36 z" fill="#f97316"/>
    <path d="M22 42 L22 46 L26 46 L26 42z" fill="#fbbf24" opacity="0.8"/>
  </svg>
);

export const IconDollar = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="dollarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#34d399"/>
        <stop offset="100%" stopColor="#10b981"/>
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="20" fill="url(#dollarGrad)"/>
    <path d="M24 12 L24 36 M18 18 C18 15 21 14 24 14 C27 14 30 15 30 18 C30 21 27 22 24 22 C21 22 18 23 18 26 C18 29 21 30 24 30 C27 30 30 29 30 26" stroke="white" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const IconWarning = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="warnGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fb923c"/>
        <stop offset="100%" stopColor="#ef4444"/>
      </linearGradient>
    </defs>
    <path d="M24 4 L44 40 L4 40 z" fill="url(#warnGrad)"/>
    <rect x="22" y="16" width="4" height="12" rx="2" fill="white"/>
    <circle cx="24" cy="33" r="2.5" fill="white"/>
  </svg>
);

export const IconCheck = ({ size = 24, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <defs>
      <linearGradient id={`checkGrad${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1"/>
        <stop offset="100%" stopColor="#a78bfa"/>
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="11" fill={`url(#checkGrad${size})`}/>
    <path d="M7 12 L10.5 15.5 L17 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconArrow = ({ size = 24, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M5 12 L19 12 M13 6 L19 12 L13 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconSparkle = ({ size = 24, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 z" fill="currentColor"/>
  </svg>
);

export const IconBrain = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#818cf8"/>
        <stop offset="100%" stopColor="#c084fc"/>
      </linearGradient>
    </defs>
    <path d="M16 8 C10 8 6 14 8 20 C4 22 4 28 8 30 C6 36 12 42 18 40 C20 44 28 44 30 40 C36 42 42 36 40 30 C44 28 44 22 40 20 C42 14 38 8 32 8 C28 4 20 4 16 8z" fill="url(#brainGrad)" opacity="0.9"/>
    <path d="M24 10 L24 42 M14 20 C18 22 22 22 24 20 M34 20 C30 22 26 22 24 20 M14 32 C18 30 22 30 24 32 M34 32 C30 30 26 30 24 32" stroke="white" strokeWidth="1.5" opacity="0.6"/>
  </svg>
);

export const IconShield = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#22d3ee"/>
        <stop offset="100%" stopColor="#6366f1"/>
      </linearGradient>
    </defs>
    <path d="M24 4 L42 10 L42 24 C42 34 34 42 24 44 C14 42 6 34 6 24 L6 10 z" fill="url(#shieldGrad)"/>
    <path d="M16 24 L22 30 L32 18" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconGlobe = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa"/>
        <stop offset="100%" stopColor="#a78bfa"/>
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="20" fill="url(#globeGrad)"/>
    <ellipse cx="24" cy="24" rx="20" ry="8" stroke="white" strokeWidth="1.5" opacity="0.5" fill="none"/>
    <ellipse cx="24" cy="24" rx="8" ry="20" stroke="white" strokeWidth="1.5" opacity="0.5" fill="none"/>
    <path d="M4 24 L44 24 M24 4 L24 44" stroke="white" strokeWidth="1.5" opacity="0.4"/>
  </svg>
);

export const IconClock = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="clockGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#f472b6"/>
        <stop offset="100%" stopColor="#a78bfa"/>
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="20" fill="url(#clockGrad)"/>
    <circle cx="24" cy="24" r="16" stroke="white" strokeWidth="1.5" opacity="0.3" fill="none"/>
    <path d="M24 12 L24 24 L32 28" stroke="white" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="2" fill="white"/>
  </svg>
);

export const IconFire = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="fireGrad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#fbbf24"/>
        <stop offset="50%" stopColor="#f97316"/>
        <stop offset="100%" stopColor="#ef4444"/>
      </linearGradient>
    </defs>
    <path d="M24 4 C20 12 14 14 14 24 C14 34 20 42 24 42 C28 42 34 34 34 24 C34 18 30 16 28 10 C26 16 22 14 24 4z" fill="url(#fireGrad)"/>
    <path d="M24 20 C22 24 20 26 20 30 C20 34 22 38 24 38 C26 38 28 34 28 30 C28 27 26 25 24 20z" fill="#fde047"/>
  </svg>
);

export const IconTarget = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} fill="none">
    <circle cx="24" cy="24" r="20" fill="none" stroke="#6366f1" strokeWidth="2"/>
    <circle cx="24" cy="24" r="14" fill="none" stroke="#818cf8" strokeWidth="2"/>
    <circle cx="24" cy="24" r="8" fill="none" stroke="#a78bfa" strokeWidth="2"/>
    <circle cx="24" cy="24" r="3" fill="#a78bfa"/>
  </svg>
);

export const IconLightning = ({ size = 48, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" className={className} fill="none">
    <defs>
      <linearGradient id="boltGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fde047"/>
        <stop offset="100%" stopColor="#f59e0b"/>
      </linearGradient>
    </defs>
    <path d="M28 4 L12 26 L22 26 L20 44 L36 22 L26 22 z" fill="url(#boltGrad)" stroke="#f97316" strokeWidth="1"/>
  </svg>
);
