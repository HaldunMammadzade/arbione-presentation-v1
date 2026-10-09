"use client";
import { useEffect } from "react";
import { DECK } from "@/components/deck";
import { Stage, useT } from "@/components/deck/primitives";

export default function PrintAllSlides() {
  const t = useT();
  useEffect(() => {
    const timer = setTimeout(() => window.print(), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="no-print fixed top-4 right-4 z-50 flex items-center gap-3 surface px-5 py-2.5 rounded-2xl">
        <span className="text-sm font-semibold text-ink/70">
          {DECK.length} {t(["slayd · PDF", "slides · PDF", "слайдов · PDF"])}
        </span>
        <button onClick={() => window.print()} className="px-4 py-1.5 rounded-xl bg-brand text-white font-semibold text-sm">
          {t(["PDF saxla / Çap et", "Save PDF / Print", "Сохранить PDF / Печать"])}
        </button>
        <button onClick={() => (window.location.href = "/")} className="px-3 py-1.5 rounded-xl text-ink/60 hover:text-ink text-sm">
          ← {t(["Geri", "Back", "Назад"])}
        </button>
      </div>
      <div className="flex flex-col">
        {DECK.map(({ C: SlideComp }, index) => (
          <div key={index} className="print-slide deck-bg relative overflow-hidden shrink-0" style={{ width: 1920, height: 1080, breakAfter: "page" }}>
            <div className="deck-grid pointer-events-none absolute inset-0" />
            <Stage mode="print">
              <SlideComp />
            </Stage>
          </div>
        ))}
      </div>
    </div>
  );
}
