import { LOGO_PATHS } from "./logo-paths";

const MARK_PATHS = 3;
const SYMBOL_PATHS = 1;
const MARK_BOX = "4.6 3.8 48.6 44.5";

/** Full Arbione logo (mark + wordmark + tagline), tinted with currentColor. */
export function Logo({ h = 60, className = "" }: { h?: number; className?: string }) {
  return (
    <svg viewBox="0 0 177 52" height={h} width={(h * 177) / 52} className={className} fill="currentColor" role="img" aria-label="Arbione">
      {LOGO_PATHS.map((d, i) => (
        <path key={i} d={d} fill={i < MARK_PATHS ? "#7367F0" : "currentColor"} />
      ))}
    </svg>
  );
}

/** Logo symbol only, cropped to its own bounds. */
export function LogoMark({ h = 80, color = "currentColor", className = "" }: { h?: number; color?: string; className?: string }) {
  const [, , w, hh] = MARK_BOX.split(" ").map(Number);
  return (
    <svg viewBox={MARK_BOX} height={h} width={(h * w) / hh} className={className} fill={color} aria-hidden>
      {LOGO_PATHS.slice(0, SYMBOL_PATHS).map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
