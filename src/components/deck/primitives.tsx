"use client";
import { motion } from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

export const STAGE_W = 1920;
export const STAGE_H = 1080;
export const EASE = [0.22, 1, 0.36, 1] as const;

/* Arbione product palette */
export const C = {
  brand: "#7367F0",
  info: "#00BAD1",
  ok: "#28C76F",
  warn: "#FF9F43",
  slate: "#8A8D9E",
  danger: "#EA5455",
};

export const DOMAIN = {
  control: C.warn,
  people: C.brand,
  money: C.ok,
  goods: C.info,
};

/* ---------- Language ---------- */

export type Lang = "az" | "en" | "ru";
export type Tx = readonly [string, string, string];
export const LANGS: Lang[] = ["az", "en", "ru"];
const LANG_INDEX: Record<Lang, number> = { az: 0, en: 1, ru: 2 };

type Prefs = { lang: Lang; setLang: (l: Lang) => void; theme: "light" | "dark"; toggleTheme: () => void };
const PrefsCtx = createContext<Prefs>({ lang: "az", setLang: () => {}, theme: "light", toggleTheme: () => {} });

export function DeckProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("az");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const l = localStorage.getItem("arb-lang") as Lang | null;
    if (l && LANGS.includes(l)) setLangState(l);
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("arb-lang", l);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((p) => {
      const next = p === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("arb-theme", next);
      return next;
    });
  }, []);

  return <PrefsCtx.Provider value={{ lang, setLang, theme, toggleTheme }}>{children}</PrefsCtx.Provider>;
}

export const usePrefs = () => useContext(PrefsCtx);

export function useT() {
  const { lang } = useContext(PrefsCtx);
  const i = LANG_INDEX[lang];
  return useCallback((x: Tx | string) => (typeof x === "string" ? x : x[i]), [i]);
}

export function T({ x }: { x: Tx }) {
  return <>{useT()(x)}</>;
}

/* ---------- Viewport mode ---------- */

export type Mode = { narrow: boolean; scale: number };
const NarrowCtx = createContext(false);
export const useNarrow = () => useContext(NarrowCtx);

export function useMode(): Mode | null {
  const [m, setM] = useState<Mode | null>(null);
  useEffect(() => {
    const fit = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setM({ narrow: w < 1000 || w / h < 1.2, scale: Math.min(w / STAGE_W, h / STAGE_H) });
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);
  return m;
}

export function Stage({ children, mode }: { children: ReactNode; mode: Mode | "print" }) {
  if (mode !== "print" && mode.narrow) {
    return (
      <NarrowCtx.Provider value>
        <div className="narrow absolute inset-0 overflow-y-auto overflow-x-hidden overscroll-contain">
          <div className="mx-auto w-full max-w-[760px] min-h-full flex flex-col">{children}</div>
        </div>
      </NarrowCtx.Provider>
    );
  }
  const scale = mode === "print" ? 1 : mode.scale;
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative shrink-0" style={{ width: STAGE_W, height: STAGE_H, transform: `scale(${scale})`, transformOrigin: "center center" }}>
        {children}
      </div>
    </div>
  );
}

/** Fixed-size visual: natural size on the stage, scaled to width on narrow screens. */
export function Fit({ w, h, children, className = "" }: { w: number; h: number; children: ReactNode; className?: string }) {
  const narrow = useNarrow();
  const ref = useRef<HTMLDivElement>(null);
  const [s, setS] = useState(0.4);
  useLayoutEffect(() => {
    if (!narrow || !ref.current) return;
    const el = ref.current;
    const ro = new ResizeObserver(() => setS(Math.min(1, el.clientWidth / w)));
    ro.observe(el);
    return () => ro.disconnect();
  }, [narrow, w]);
  if (!narrow) {
    return (
      <div className={`relative shrink-0 ${className}`} style={{ width: w, height: h }}>
        {children}
      </div>
    );
  }
  return (
    <div ref={ref} className="relative w-full" style={{ height: h * s }}>
      <div className="absolute left-0 top-0" style={{ width: w, height: h, transform: `scale(${s})`, transformOrigin: "top left" }}>
        {children}
      </div>
    </div>
  );
}

/** Product mock-up: flexible slot on the stage, a scaled "screenshot" on narrow screens. */
export function Mock({ w, h, className = "", children }: { w: number; h: number; className?: string; children: ReactNode }) {
  const narrow = useNarrow();
  if (narrow) return <Fit w={w} h={h}>{children}</Fit>;
  return <div className={className}>{children}</div>;
}

/* ---------- Layout ---------- */

export function Slide({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative w-full h-full px-[120px] pt-[100px] pb-[128px] flex flex-col text-ink n:h-auto n:min-h-full n:px-5 n:pt-[78px] n:pb-[120px] ${className}`}
    >
      <div className="relative z-10 flex-1 flex flex-col min-h-0">{children}</div>
    </div>
  );
}

export function R({
  children,
  d = 0,
  y = 22,
  x = 0,
  className = "",
  style,
}: {
  children?: ReactNode;
  d?: number;
  y?: number;
  x?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.85, delay: d, ease: EASE }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ n, children, color = C.brand }: { n?: string; children: ReactNode; color?: string }) {
  return (
    <R className="flex items-center gap-4 mb-6 n:mb-4 n:gap-3">
      {n && (
        <span
          className="font-mono text-[15px] font-semibold px-2.5 py-1 rounded-lg n:text-[11px] n:px-2"
          style={{ color, background: `${color}14`, border: `1px solid ${color}2e` }}
        >
          {n}
        </span>
      )}
      <span className="text-[16px] font-semibold uppercase tracking-[0.28em] text-ink/55 n:text-[11px] n:tracking-[0.2em]">{children}</span>
    </R>
  );
}

export function Title({ children, size = 72, className = "", d = 0.08 }: { children: ReactNode; size?: number; className?: string; d?: number }) {
  return (
    <R d={d}>
      <h2
        className={`font-display font-semibold tracking-[-0.035em] leading-[1.04] text-ink text-[length:var(--fs)] n:text-[31px] n:leading-[1.12] n:tracking-[-0.025em] ${className}`}
        style={{ "--fs": `${size}px` } as CSSProperties}
      >
        {children}
      </h2>
    </R>
  );
}

/** Highlighted words inside a title: solid brand tone, no gradients. */
export function Hl({ children, color }: { children: ReactNode; color?: string }) {
  return (
    <span className={color ? "" : "text-hl"} style={color ? { color } : undefined}>
      {children}
    </span>
  );
}

export function Lead({ children, className = "", d = 0.18 }: { children: ReactNode; className?: string; d?: number }) {
  return (
    <R d={d}>
      <p className={`text-[24px] leading-[1.5] text-ink/65 n:text-[16px] ${className}`}>{children}</p>
    </R>
  );
}

export function Head({
  n,
  eyebrow,
  title,
  lead,
  color = C.brand,
  size = 68,
  leadW = 560,
}: {
  n?: string;
  eyebrow: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  color?: string;
  size?: number;
  leadW?: number;
}) {
  return (
    <div className="flex items-end justify-between gap-16 shrink-0 n:flex-col n:items-start n:gap-3">
      <div className="min-w-0">
        <Eyebrow n={n} color={color}>
          {eyebrow}
        </Eyebrow>
        <Title size={size}>{title}</Title>
      </div>
      {lead && (
        <div className="pb-2 shrink-0 n:pb-0 n:!max-w-none" style={{ maxWidth: leadW }}>
          <Lead className="!text-[22px] n:!text-[15px]">{lead}</Lead>
        </div>
      )}
    </div>
  );
}

export function Card({
  children,
  className = "",
  style,
  raised = false,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  raised?: boolean;
}) {
  return (
    <div className={`relative rounded-[24px] overflow-hidden n:rounded-[18px] ${raised ? "surface-raised" : "surface"} ${className}`} style={style}>
      {children}
    </div>
  );
}

/** Coloured top hairline used on accent cards. */
export function Accent({ color }: { color: string }) {
  return <span className="absolute left-0 top-0 h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${color}, ${color}00 85%)` }} />;
}

export function IconBox({ name, color = C.brand, size = 56, className = "" }: { name: IconName; color?: string; size?: number; className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center shrink-0 n:!w-11 n:!h-11 n:!rounded-xl ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.3,
        color,
        background: `linear-gradient(150deg, ${color}24, ${color}0d)`,
        boxShadow: `inset 0 0 0 1px ${color}33, inset 0 1px 0 rgba(255,255,255,0.35)`,
      }}
    >
      <Icon name={name} size={Math.round(size * 0.48)} className="n:!w-[22px] n:!h-[22px]" />
    </div>
  );
}

export function Pill({ children, color = C.brand, className = "" }: { children: ReactNode; color?: string; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[15px] font-medium whitespace-nowrap n:text-[12px] n:px-2.5 n:py-1 ${className}`}
      style={{ color, background: `${color}14`, border: `1px solid ${color}33` }}
    >
      {children}
    </span>
  );
}

export type Status = "draft" | "pending" | "approved" | "rejected";
const STATUS: Record<Status, { label: Tx; color: string }> = {
  draft: { label: ["Qaralama", "Draft", "Черновик"], color: C.slate },
  pending: { label: ["Gözləyir", "Pending", "Ожидает"], color: C.warn },
  approved: { label: ["Təsdiq", "Approved", "Одобрено"], color: C.ok },
  rejected: { label: ["Rədd", "Rejected", "Отклонено"], color: C.danger },
};

export function StatusPill({ s, className = "" }: { s: Status; className?: string }) {
  const t = useT();
  const { label, color } = STATUS[s];
  return (
    <Pill color={color} className={className}>
      <span className="w-2 h-2 rounded-full" style={{ background: color }} />
      {t(label)}
    </Pill>
  );
}

export function Window({
  title,
  children,
  className = "",
  right,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  right?: ReactNode;
}) {
  return (
    <div className={`relative rounded-[22px] overflow-hidden flex flex-col surface-raised ${className}`}>
      <div className="flex items-center gap-3 px-6 h-[52px] border-b border-ink/[0.07] shrink-0 bg-ink/[0.02]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink/15" />
        </div>
        <div className="ml-3 text-[15px] font-medium text-ink/60 flex items-center gap-2.5 whitespace-nowrap">
          <span className="w-[18px] h-[18px] rounded-[6px] flex items-center justify-center" style={{ background: C.brand }}>
            <span className="w-[7px] h-[7px] rounded-full bg-white" />
          </span>
          {title}
        </div>
        <div className="ml-auto">{right}</div>
      </div>
      <div className="relative flex-1 min-h-0">{children}</div>
    </div>
  );
}

export function Avatar({ name, color = C.brand, size = 36 }: { name: string; color?: string; size?: number }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toLocaleUpperCase("az");
  return (
    <span
      className="inline-flex items-center justify-center rounded-full font-semibold shrink-0"
      style={{ width: size, height: size, fontSize: size * 0.37, color, background: `${color}1f`, boxShadow: `inset 0 0 0 1px ${color}33` }}
    >
      {initials}
    </span>
  );
}

export function fmt(n: number, dec = 0) {
  const [int, frac] = n.toFixed(dec).split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return frac ? `${grouped},${frac}` : grouped;
}

export function Counter({ to, d = 0, dur = 1.6, format = (n: number) => fmt(n) }: { to: number; d?: number; dur?: number; format?: (n: number) => string }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0;
    let start = 0;
    const timer = setTimeout(() => {
      const tick = (t: number) => {
        if (!start) start = t;
        const p = Math.min(1, (t - start) / (dur * 1000));
        setV(to * (1 - Math.pow(1 - p, 4)));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, d * 1000);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [to, d, dur]);
  return <>{format(v)}</>;
}

export function useCycle(n: number, ms = 1800, delay = 0) {
  const [i, setI] = useState(0);
  useEffect(() => {
    let id: ReturnType<typeof setInterval>;
    const t = setTimeout(() => {
      id = setInterval(() => setI((p) => (p + 1) % n), ms);
    }, delay);
    return () => {
      clearTimeout(t);
      clearInterval(id);
    };
  }, [n, ms, delay]);
  return i;
}

/* ---------- Duotone icon set: [outline, tinted body] ---------- */

const ICONS = {
  layout: ["M3 4h18v6H3zM3 14h8v6H3zM15 14h6v6h-6z", "M3 4h18v6H3z"],
  building: ["M4 21V5l8-3v19M12 21h8V9l-8-3M2 21h20M8 8v.01M8 12v.01M8 16v.01M16 12v.01M16 16v.01", "M4 21V5l8-3v19z"],
  users: ["M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1M9 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM22 19v-1a4 4 0 0 0-3-3.9M16 3.1a3.5 3.5 0 0 1 0 6.8", "M9 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2 19v-1a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v1z"],
  user: ["M20 21v-1a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v1M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"],
  id: ["M3 5h18v14H3zM7 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0M5.5 16a3.5 3.5 0 0 1 7 0M14 9h4M14 13h4", "M3 5h18v14H3z"],
  clock: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2", "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"],
  map: ["M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z", "M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11z"],
  wallet: ["M3 7a2 2 0 0 1 2-2h13v4M3 7v11a2 2 0 0 0 2 2h15V9H5a2 2 0 0 1-2-2zM16 14.5h.01", "M3 7v11a2 2 0 0 0 2 2h15V9H5a2 2 0 0 1-2-2z"],
  briefcase: ["M3 8h18v12H3zM8 8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3M3 13h18", "M3 8h18v5H3z"],
  chart: ["M3 3v18h18M7 15l4-4 3 3 6-7", "M7 15l4-4 3 3 6-7v14H7z"],
  landmark: ["M3 21h18M5 21V10M10 21V10M14 21V10M19 21V10M2 10l10-7 10 7z", "M2 10l10-7 10 7z"],
  cart: ["M3 3h2l2.4 12.2a2 2 0 0 0 2 1.8h8.2a2 2 0 0 0 2-1.6L21 8H6M10 21h.01M18 21h.01", "M6 8h15l-1.4 6.4a2 2 0 0 1-2 1.6H9.4a2 2 0 0 1-2-1.8z"],
  box: ["M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8", "M21 8l-9-5-9 5 9 5z"],
  tag: ["M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8zM7.5 7.5h.01", "M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"],
  handshake: ["M11 17l2 2a1.4 1.4 0 0 0 2-2M14 14l2.5 2.5a1.4 1.4 0 0 0 2-2L15 11M2 11l5-5 4 2 3-2 4 1 4 4-3 3M7 6l-5 5 6 6 1-1", "M7 6l4 2 3-2 4 1 4 4-3 3-4-3-5 5-4-4z"],
  sign: ["M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6M8 17c1.5-2 2.5-2 3 0s1.5 2 3 0 2 0 2 0", "M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"],
  report: ["M9 3h6v4H9zM6 5H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1M8 17v-3M12 17v-6M16 17v-4", "M5 5h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"],
  plug: ["M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0zM12 17v5", "M6 8h12v3a6 6 0 0 1-12 0z"],
  shield: ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4", "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"],
  search: ["M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3", "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"],
  bell: ["M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0", "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9z"],
  monitor: ["M3 4h18v12H3zM8 20h8M12 16v4", "M3 4h18v12H3z"],
  globe: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18", "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"],
  check: ["M20 6L9 17l-5-5", ""],
  x: ["M18 6L6 18M6 6l12 12", ""],
  arrow: ["M5 12h14M13 6l6 6-6 6", ""],
  spark: ["M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z", "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"],
  lock: ["M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4M12 15v2", "M5 11h14v10H5z"],
  calendar: ["M3 5h18v16H3zM3 10h18M8 3v4M16 3v4", "M3 5h18v5H3z"],
  coins: ["M9 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM18.1 10.4A6 6 0 1 1 10.4 18M7 6h3v4", "M9 14a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"],
  truck: ["M2 6h12v10H2zM14 10h4l3 3v3h-7M6.5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17.5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", "M2 6h12v10H2z"],
  layers: ["M12 2l10 5-10 5L2 7zM2 12l10 5 10-5M2 17l10 5 10-5", "M12 2l10 5-10 5L2 7z"],
  file: ["M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6M8 13h8M8 17h5", "M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"],
  target: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 12h.01", "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"],
  bolt: ["M13 2L4 14h7l-1 8 9-12h-7z", "M13 2L4 14h7l-1 8 9-12h-7z"],
  eye: ["M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z", "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"],
  route: ["M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM6 15V9a4 4 0 0 1 4-4h2M18 9v6a4 4 0 0 1-4 4h-2", "M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM18 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"],
  graduation: ["M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5M22 9v6", "M2 9l10-5 10 5-10 5z"],
  megaphone: ["M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1zM17 8a5 5 0 0 1 0 8", "M3 11v2a1 1 0 0 0 1 1h3l6 4V6L7 10H4a1 1 0 0 0-1 1z"],
  flow: ["M5 6h.01M5 12h.01M5 18h.01M9 6h10M9 12h10M9 18h10", ""],
  sun: ["M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4", "M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"],
  moon: ["M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z", "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"],
  card: ["M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM6 15h4M15 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4z", "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"],
  qr: ["M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 14h2M14 20h2M18 18h2v2M17 17h.01", "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z"],
  phone: ["M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM11 18h2", "M7 2h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"],
  share: ["M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.6 13.5l6.8 4M15.4 6.5l-6.8 4", "M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"],
  gift: ["M3 8h18v4H3zM5 12v9h14v-9M12 8v13M12 8S10.5 3 8 3a2.5 2.5 0 0 0 0 5M12 8s1.5-5 4-5a2.5 2.5 0 0 1 0 5", "M3 8h18v4H3z"],
  alert: ["M12 3l10 18H2zM12 10v5M12 18h.01", "M12 3l10 18H2z"],
  unlink: ["M9 15l-2 2a3 3 0 0 1-4.2-4.2l3-3M15 9l2-2a3 3 0 0 1 4.2 4.2l-3 3M8 4v2M4 8h2M16 20v-2M20 16h-2", ""],
  copy: ["M9 9h11v11H9zM5 15H4V4h11v1", "M9 9h11v11H9z"],
  inbox: ["M3 13l3-8h12l3 8v6H3zM3 13h5l1 2h6l1-2h5", "M3 13h5l1 2h6l1-2h5v6H3z"],
  infinity: ["M6 16c-2.2 0-4-1.8-4-4s1.8-4 4-4c4 0 8 8 12 8 2.2 0 4-1.8 4-4s-1.8-4-4-4c-4 0-8 8-12 8z", ""],
  star: ["M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z", "M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z"],
  nfc: ["M6 8.5a5 5 0 0 1 0 7M9.5 6a9 9 0 0 1 0 12M13 3.5a13 13 0 0 1 0 17", ""],
  fingerprint: ["M12 11v3a8 8 0 0 1-1.5 4.7M8.5 21a12 12 0 0 0 1.4-2.3M7 13a5 5 0 0 1 10 0v1a14 14 0 0 1-.6 4M4.6 16a10 10 0 0 1-.6-3 8 8 0 0 1 13.3-6M20 13v.5a19 19 0 0 1-.3 3.5M14.5 21.5c.5-1 .9-2 1.2-3", ""],
  download: ["M12 3v12M7 10l5 5 5-5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2", "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2z"],
  chat: ["M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12zM8.5 12h.01M12 12h.01M15.5 12h.01", "M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"],
  scale: ["M12 3v18M7 21h10M5 7h14M5 7l-3 7a3.5 3.5 0 0 0 6 0zM19 7l-3 7a3.5 3.5 0 0 0 6 0zM12 3l-2 2M12 3l2 2", "M2 14a3.5 3.5 0 0 0 6 0zM16 14a3.5 3.5 0 0 0 6 0z"],
  sunrise: ["M12 3v4M5.6 8.6l1.4 1.4M18.4 8.6L17 10M3 17h2M19 17h2M8 17a4 4 0 0 1 8 0M3 21h18", "M8 17a4 4 0 0 1 8 0z"],
  trend: ["M3 17l6-6 4 4 8-8M15 7h6v6", ""],
} as const;

export type IconName = keyof typeof ICONS;

export function Icon({ name, size = 24, className = "", stroke = 1.7 }: { name: IconName; size?: number; className?: string; stroke?: number }) {
  const [line, body] = ICONS[name];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      {body && <path d={body} fill="currentColor" opacity={0.18} />}
      <path d={line} stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
