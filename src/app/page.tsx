"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useSlideNavigation } from "@/hooks/useSlideNavigation";
import { slidesData } from "@/lib/slides-data";
import Navigation from "@/components/shared/Navigation";
import SlideHero from "@/components/slides/SlideHero";
import SlideTagline from "@/components/slides/SlideTagline";
import SlideTechPower from "@/components/slides/SlideTechPower";
import SlideQuestion from "@/components/slides/SlideQuestion";
import SlideDigitalChaos from "@/components/slides/SlideDigitalChaos";
import SlideProblem from "@/components/slides/SlideProblem";
import SlideStory from "@/components/slides/SlideStory";
import SlideHumanDesign from "@/components/slides/SlideHumanDesign";
import SlideOnePlatform from "@/components/slides/SlideOnePlatform";
import SlideRecognize from "@/components/slides/SlideRecognize";
import SlideOrderSystem from "@/components/slides/SlideOrderSystem";
import SlideHR from "@/components/slides/SlideHR";
import SlideGPS from "@/components/slides/SlideGPS";
import SlideTask from "@/components/slides/SlideTask";
import SlideAnalytics from "@/components/slides/SlideAnalytics";
import SlideFourModules from "@/components/slides/SlideFourModules";
import SlideMoreThan from "@/components/slides/SlideMoreThan";
import SlideXCard from "@/components/slides/SlideXCard";
import SlideFuture from "@/components/slides/SlideFuture";

const components = [
  SlideHero, SlideTagline, SlideTechPower, SlideQuestion, SlideDigitalChaos,
  SlideProblem, SlideStory, SlideHumanDesign, SlideOnePlatform, SlideRecognize,
  SlideOrderSystem, SlideHR, SlideGPS, SlideTask, SlideAnalytics,
  SlideFourModules, SlideMoreThan, SlideXCard, SlideFuture,
];

const lightThemeSlides = [2, 3, 5, 7, 9, 10, 15];

export default function Home() {
  const { currentSlide, direction, goToSlide, nextSlide, prevSlide } = useSlideNavigation(slidesData.totalSlides);
  const CurrentComponent = components[currentSlide];
  const theme = lightThemeSlides.includes(currentSlide) ? "light" : "dark";

  return (
    <main className="relative w-screen h-screen overflow-hidden">
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
          <CurrentComponent />
        </motion.div>
      </AnimatePresence>

      <Navigation
        current={currentSlide}
        total={slidesData.totalSlides}
        onPrev={prevSlide}
        onNext={nextSlide}
        onGoTo={goToSlide}
        theme={theme}
      />
    </main>
  );
}
