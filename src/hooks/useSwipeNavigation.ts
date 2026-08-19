"use client";
import { useEffect, useRef } from "react";

interface SwipeOptions {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  minDistance?: number;
}

export function useSwipeNavigation({
  onSwipeLeft,
  onSwipeRight,
  minDistance = 50,
}: SwipeOptions) {
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current || e.changedTouches.length !== 1) return;

      const touchEnd = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };

      const diffX = touchStartRef.current.x - touchEnd.x;
      const diffY = touchStartRef.current.y - touchEnd.y;

      // Only trigger horizontal swipe if horizontal movement is greater than vertical movement
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > minDistance) {
        if (diffX > 0) {
          // Swiped Left -> go to next slide
          onSwipeLeft();
        } else {
          // Swiped Right -> go to prev slide
          onSwipeRight();
        }
      }

      touchStartRef.current = null;
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, minDistance]);
}
