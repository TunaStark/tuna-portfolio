"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Kaydırma süresi (saniye)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing fonksiyonu
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null; // Bu bileşen UI render etmez, sadece logic çalıştırır.
}