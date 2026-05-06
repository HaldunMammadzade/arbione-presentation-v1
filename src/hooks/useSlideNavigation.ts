"use client";
import { useState, useEffect, useCallback } from "react";

export function useSlideNavigation(totalSlides: number) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index >= totalSlides) return;
    setDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
  }, [currentSlide, totalSlides]);

  const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); nextSlide(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prevSlide(); }
      if (e.key === "Home") goToSlide(0);
      if (e.key === "End") goToSlide(totalSlides - 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [nextSlide, prevSlide, goToSlide, totalSlides]);

  return { currentSlide, direction, goToSlide, nextSlide, prevSlide };
}
