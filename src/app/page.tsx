"use client";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import Navigation from "@/components/shared/Navigation";
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

const components = [
  SlideHero,              // 0
  SlideTagline,           // 1
  SlideTechPower,         // 2
  SlideBenefits,          // 3 (NEW)
  SlideQuestion,          // 4
  SlideDigitalChaos,      // 5
  SlideProblem,           // 6
  SlideStory,             // 7
  SlideHumanDesign,       // 8
  SlideOnePlatform,       // 9
  SlideRecognize,         // 10
  SlideOrderSystem,       // 11
  SlideModulesOverview,   // 12 (NEW - 12 module overview)
  SlideHR,                // 13
  SlideGPS,               // 14
  SlideTask,              // 15
  SlideAnalytics,         // 16
  SlideMobileApp,         // 17 (NEW)
  SlideCapabilities,      // 18 (NEW)
  SlideFourModules,       // 19
  SlideMoreThan,          // 20
  SlideXCard,             // 21
  SlideSlogan,            // 22
  SlideFuture,            // 23
];

const totalSlides = components.length;
const lightThemeSlides = [2, 4, 6, 8, 10, 12, 18, 19];

export default function Home() {
  const { currentSlide, direction, goToSlide, nextSlide, prevSlide } = useSlideNavigation(totalSlides);
  const CurrentComponent = components[currentSlide];
  const theme = lightThemeSlides.includes(currentSlide) ? "light" : "dark";

  return (
    <MotionConfig reducedMotion="never">
      <main className="relative w-screen h-screen overflow-hidden">
        <LanguageSwitcher theme={theme}/>
        
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0, x: direction === "next" ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === "next" ? -100 : 100 }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className="absolute inset-0"
          >
            <CurrentComponent/>
          </motion.div>
        </AnimatePresence>

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
