"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { DECK } from "@/components/deck";
import { LogoMark } from "@/components/deck/logo";
import { Icon, LANGS, Stage, STAGE_H, STAGE_W, usePrefs, useT } from "@/components/deck/primitives";

const pad = (n: number) => String(n).padStart(2, "0");

function SheetChrome({ i, total }: { i: number; total: number }) {
  const t = useT();
  const bare = i === 0 || i === total - 1;
  return (
    <>
      <div className="absolute left-0 right-0 top-0 h-[4px] bg-ink/[0.05] z-20">
        <div className="h-full bg-brand" style={{ width: `${((i + 1) / total) * 100}%` }} />
      </div>
      {!bare && (
        <div className="absolute left-[120px] right-[120px] bottom-[46px] z-20 flex items-center justify-between text-[15px] text-ink/45">
          <div className="flex items-center gap-4">
            <span className="text-brand">
              <LogoMark h={22} />
            </span>
            <span className="h-4 w-px bg-ink/15" />
            <span className="font-medium tracking-[0.04em]">{t(["Biznes idarəetmə sistemi", "Business management system", "Система управления бизнесом"])}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium tracking-[0.04em]">arbione.az</span>
            <span className="h-4 w-px bg-ink/15" />
            <span className="font-mono font-semibold text-ink/70">
              {pad(i + 1)}
              <span className="text-ink/35"> / {pad(total)}</span>
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default function PrintDeck() {
  const t = useT();
  const { lang, setLang } = usePrefs();
  const [ready, setReady] = useState(false);
  const [zoom, setZoom] = useState(0.5);
  const total = DECK.length;

  useLayoutEffect(() => {
    const q = new URLSearchParams(window.location.search).get("lang");
    if (q && (LANGS as string[]).includes(q)) setLang(q as (typeof LANGS)[number]);
    const root = document.documentElement;
    const wasDark = root.classList.contains("dark");
    root.classList.remove("dark");
    root.classList.add("print-mode");
    setReady(true);
    return () => {
      root.classList.remove("print-mode");
      if (wasDark) root.classList.add("dark");
    };
  }, []);

  useEffect(() => {
    const fit = () => setZoom(Math.min(1, (window.innerWidth - (window.innerWidth < 700 ? 24 : 96)) / STAGE_W));
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  useEffect(() => {
    if (!ready || new URLSearchParams(window.location.search).has("export")) return;
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;
    document.fonts.ready.then(() => {
      timer = setTimeout(() => !cancelled && window.print(), 1400);
    });
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [ready]);

  if (!ready) return null;

  return (
    <div className="print-root min-h-screen">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="no-print fixed top-4 left-1/2 z-50 flex flex-wrap md:flex-nowrap whitespace-nowrap items-center justify-center gap-2 sm:gap-3 rounded-[22px] bg-white/90 backdrop-blur-xl px-3 py-2.5 sm:px-4 border border-ink/[0.08] w-[calc(100%-24px)] md:w-auto"
        style={{ x: "-50%", boxShadow: "0 24px 60px -24px rgba(28,26,60,0.35)" }}
      >
        <div className="flex items-center gap-3 pr-1 sm:pr-3 sm:border-r border-ink/[0.08]">
          <span className="w-9 h-9 rounded-xl bg-brand text-white flex items-center justify-center">
            <LogoMark h={18} />
          </span>
          <div className="leading-tight">
            <div className="text-[14px] font-semibold text-ink">{t(["Təqdimat · PDF", "Presentation · PDF", "Презентация · PDF"])}</div>
            <div className="text-[11px] text-ink/50">
              {total} {t(["səhifə", "pages", "стр."])} · 1920×1080 · Light
            </div>
          </div>
        </div>
        <div className="flex items-center rounded-full p-[3px] well">
          {LANGS.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 h-7 rounded-full text-[11px] font-bold uppercase tracking-wider transition-colors ${lang === l ? "bg-brand text-white" : "text-ink/55 hover:text-ink"}`}
            >
              {l}
            </button>
          ))}
        </div>
        <button onClick={() => window.print()} className="flex items-center gap-2 h-9 px-4 rounded-full bg-brand text-white text-[13px] font-semibold hover:bg-primary-dark transition-colors">
          <Icon name="download" size={16} stroke={2.2} />
          {t(["PDF kimi saxla", "Save as PDF", "Сохранить PDF"])}
        </button>
        <button onClick={() => (window.location.href = "/")} className="h-9 px-3 rounded-full text-[13px] font-medium text-ink/55 hover:text-ink transition-colors">
          ← {t(["Təqdimata qayıt", "Back to deck", "К презентации"])}
        </button>
      </motion.div>

      <div className="no-print pt-[108px] sm:pt-[92px] pb-4 text-center text-[12px] text-ink/45">
        {t([
          "Çap pəncərəsində “Hədəf: PDF kimi saxla” seçin. Ölçü və kənar boşluqlar avtomatik tənzimlənir.",
          "In the print dialog choose “Destination: Save as PDF”. Size and margins are set automatically.",
          "В окне печати выберите «Принтер: Сохранить как PDF». Размер и поля настроятся автоматически.",
        ])}
      </div>

      <div className="print-stack flex flex-col items-center gap-10 pb-24">
        {DECK.map(({ C: SlideComp, name }, i) => (
          <div key={i} className="print-item flex flex-col items-center gap-3">
            <div className="print-sheet" style={{ zoom }}>
              <div className="print-slide deck-bg relative overflow-hidden text-ink" style={{ width: STAGE_W, height: STAGE_H }}>
                <Stage mode="print">
                  <SlideComp />
                </Stage>
                <SheetChrome i={i} total={total} />
              </div>
            </div>
            <div className="no-print flex items-center gap-2 text-[12px] text-ink/45">
              <span className="font-mono font-semibold text-ink/60">{pad(i + 1)}</span>
              <span>·</span>
              <span>{t(name)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
