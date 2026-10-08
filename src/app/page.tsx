"use client";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import { useSwipeNavigation } from "@/hooks/useSwipeNavigation";
import Navigation from "@/components/shared/Navigation";
import TransitionBurst from "@/components/shared/TransitionBurst";
import Spotlight from "@/components/shared/Spotlight";
import CursorTrail from "@/components/shared/CursorTrail";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";
import SlideHero from "@/components/slides/SlideHero";
import SlideTagline from "@/components/slides/SlideTagline";
import SlideTechPower from "@/components/slides/SlideTechPower";
import SlideBenefits from "@/components/slides/SlideBenefits";
import SlideQuestion from "@/components/slides/SlideQuestion";
import SlideDigitalChaos from "@/components/slides/SlideDigitalChaos";
import SlideProblem from "@/components/slides/SlideProblem";
import SlideStory from "@/components/slides/SlideStory";
import SlideHumanDesign from "@/components/slides/SlideHumanDesign";
import SlideOnePlatform from "@/components/slides/SlideOnePlatform";
import SlideRecognize from "@/components/slides/SlideRecognize";
import SlideOrderSystem from "@/components/slides/SlideOrderSystem";
import SlideModulesOverview from "@/components/slides/SlideModulesOverview";
import SlideHR from "@/components/slides/SlideHR";
import SlideGPS from "@/components/slides/SlideGPS";
import SlideTask from "@/components/slides/SlideTask";
import SlideAnalytics from "@/components/slides/SlideAnalytics";
import SlideMobileApp from "@/components/slides/SlideMobileApp";
import SlideCapabilities from "@/components/slides/SlideCapabilities";
import SlideFourModules from "@/components/slides/SlideFourModules";
import SlideMoreThan from "@/components/slides/SlideMoreThan";
import SlideXCard from "@/components/slides/SlideXCard";
import SlideSlogan from "@/components/slides/SlideSlogan";
import SlideFuture from "@/components/slides/SlideFuture";
import SlideQRCode from "@/components/slides/SlideQRCode";

const components = [
  SlideHero,              // 0
  SlideTagline,           // 1
  SlideTechPower,         // 2
  SlideBenefits,          // 3
  SlideQuestion,          // 4
  SlideDigitalChaos,      // 5
  SlideProblem,           // 6
  SlideStory,             // 7
  SlideHumanDesign,       // 8
  SlideOnePlatform,       // 9
  SlideRecognize,         // 10
  SlideOrderSystem,       // 11
  SlideModulesOverview,   // 12
  SlideHR,                // 13
  SlideGPS,               // 14
  SlideTask,              // 15
  SlideAnalytics,         // 16
  SlideMobileApp,         // 17
  SlideCapabilities,      // 18
  SlideFourModules,       // 19
  SlideMoreThan,          // 20
  SlideXCard,             // 21
  SlideSlogan,            // 22
  SlideFuture,            // 23
  SlideQRCode,            // 24
];

const totalSlides = components.length;
const lightThemeSlides = [2, 4, 6, 8, 10, 12, 19];

// Transition profiles per slide index
// 0 = horizontal (default), 1 = scale+blur, 2 = vertical, 3 = flip, 4 = zoom fade
const TRANSITION_PROFILES: Record<number, number> = {
  0:  1, // Hero — scale entry
  1:  4, // Tagline — zoom fade
  5:  1, // DigitalChaos — dramatic scale
  7:  2, // Story — vertical
  12: 3, // ModulesOverview — flip
  16: 1, // Analytics — dramatic scale
  19: 3, // FourModules — flip
  22: 1, // Slogan — dramatic scale
  23: 1, // Future — dramatic scale
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TDef = { initial: (d: string) => any; animate: any; exit: (d: string) => any; transition: any };

const TRANSITIONS: Record<number, TDef> = {
  0: {
    initial: (dir) => ({ opacity: 0, x: dir === "next" ? "8%" : "-8%" }),
    animate: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir === "next" ? "-8%" : "8%" }),
    transition: { duration: 0.55, ease: [0.65, 0, 0.35, 1] },
  },
  1: {
    initial: (dir) => ({ opacity: 0, scale: dir === "next" ? 0.92 : 1.08, filter: "blur(6px)" }),
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: (dir) => ({ opacity: 0, scale: dir === "next" ? 1.08 : 0.92, filter: "blur(6px)" }),
    transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] },
  },
  2: {
    initial: (dir) => ({ opacity: 0, y: dir === "next" ? "6%" : "-6%" }),
    animate: { opacity: 1, y: 0 },
    exit: (dir) => ({ opacity: 0, y: dir === "next" ? "-6%" : "6%" }),
    transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
  },
  3: {
    initial: (dir) => ({ opacity: 0, rotateY: dir === "next" ? 15 : -15, scale: 0.95, filter: "blur(4px)" }),
    animate: { opacity: 1, rotateY: 0, scale: 1, filter: "blur(0px)" },
    exit: (dir) => ({ opacity: 0, rotateY: dir === "next" ? -15 : 15, scale: 0.95, filter: "blur(4px)" }),
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
  },
  4: {
    initial: () => ({ opacity: 0, scale: 1.06, filter: "blur(8px)" }),
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: () => ({ opacity: 0, scale: 0.94, filter: "blur(8px)" }),
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  },
};

export default function Home() {
  const { currentSlide, direction, goToSlide, nextSlide, prevSlide } = useSlideNavigation(totalSlides);
  useSwipeNavigation({ onSwipeLeft: nextSlide, onSwipeRight: prevSlide });

  const CurrentComponent = components[currentSlide];
  const theme = lightThemeSlides.includes(currentSlide) ? "light" : "dark";

  const profileId = TRANSITION_PROFILES[currentSlide] ?? 0;
  const tr = TRANSITIONS[profileId];

  return (
    <MotionConfig reducedMotion="never">
      <main
        className="relative w-screen h-screen overflow-hidden cursor-default"
        style={{ perspective: "1200px" }}
      >
        <Spotlight theme={theme} />
        <CursorTrail theme={theme} />
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={tr.initial(direction)}
            animate={tr.animate}
            exit={tr.exit(direction)}
            transition={tr.transition}
            className="absolute inset-0"
            style={{ transformStyle: "preserve-3d" }}
          >
            <CurrentComponent/>
          </motion.div>
        </AnimatePresence>

        <TransitionBurst trigger={currentSlide} theme={theme} direction={direction}/>
        <LanguageSwitcher theme={theme}/>

        <Navigation
          current={currentSlide}
          total={totalSlides}
          onPrev={prevSlide}
          onNext={nextSlide}
          onGoTo={goToSlide}
          theme={theme}
        />
      </main>
    </MotionConfig>
  );
}
