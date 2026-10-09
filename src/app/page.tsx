"use client";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import { useSwipeNavigation } from "@/hooks/useSwipeNavigation";
import Navigation from "@/components/shared/Navigation";
import { DECK } from "@/components/deck";
import { Stage, useMode } from "@/components/deck/primitives";

const totalSlides = DECK.length;

export default function Home() {
  const { currentSlide, direction, goToSlide, nextSlide, prevSlide } = useSlideNavigation(totalSlides);
  useSwipeNavigation({ onSwipeLeft: nextSlide, onSwipeRight: prevSlide });
  const mode = useMode();

  const Current = DECK[currentSlide].C;
  const sign = direction === "next" ? 1 : -1;

  return (
    <MotionConfig reducedMotion="never">
      <main className="deck-bg relative w-full max-w-full viewport-height overflow-hidden cursor-default">
        <div className="deck-grid pointer-events-none absolute inset-0" />
        <div className="noise-overlay pointer-events-none absolute inset-0 z-[1]" />
        {mode && (
          <AnimatePresence mode="wait" custom={sign}>
            <motion.div
              key={`${currentSlide}-${mode.narrow ? "n" : "w"}`}
              initial={{ opacity: 0, scale: 0.99, x: 36 * sign, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.005, x: -36 * sign, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 z-[2]"
            >
              <Stage mode={mode}>
                <Current />
              </Stage>
            </motion.div>
          </AnimatePresence>
        )}
        <Navigation current={currentSlide} total={totalSlides} onPrev={prevSlide} onNext={nextSlide} onGoTo={goToSlide} />
      </main>
    </MotionConfig>
  );
}
