"use client";
import { useEffect } from "react";
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

const slides = [
  SlideHero,
  SlideTagline,
  SlideTechPower,
  SlideBenefits,
  SlideQuestion,
  SlideDigitalChaos,
  SlideProblem,
  SlideStory,
  SlideHumanDesign,
  SlideOnePlatform,
  SlideRecognize,
  SlideOrderSystem,
  SlideModulesOverview,
  SlideHR,
  SlideGPS,
  SlideTask,
  SlideAnalytics,
  SlideMobileApp,
  SlideCapabilities,
  SlideFourModules,
  SlideMoreThan,
  SlideXCard,
  SlideSlogan,
  SlideFuture,
  SlideQRCode,
];

export default function PrintAllSlides() {
  useEffect(() => {
    // Auto-trigger print after elements settle
    const timer = setTimeout(() => {
      window.print();
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-[#06071a] text-white">
      {/* Top action bar (hidden during print) */}
      <div className="no-print fixed top-4 right-4 z-50 flex items-center gap-3 bg-slate-900/90 border border-white/20 px-5 py-2.5 rounded-2xl shadow-2xl backdrop-blur-xl">
        <span className="text-sm font-semibold text-white/80">📄 24 Slayd PDF İxrac</span>
        <button
          onClick={() => window.print()}
          className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-sm shadow-lg hover:scale-105 transition-all"
        >
          PDF Saxla / Çap Et
        </button>
        <button
          onClick={() => window.location.href = "/"}
          className="px-3 py-1.5 rounded-xl bg-white/10 text-white/70 hover:text-white text-sm"
        >
          ← Geri
        </button>
      </div>

      {/* Render all slides sequentially */}
      <div className="flex flex-col">
        {slides.map((SlideComp, index) => (
          <div
            key={index}
            className="print-slide relative w-screen h-screen overflow-hidden"
            style={{
              pageBreakAfter: "always",
              breakAfter: "page",
              height: "100vh",
              width: "100vw",
            }}
          >
            <SlideComp />
          </div>
        ))}
      </div>
    </div>
  );
}
