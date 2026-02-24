"use client";
import { useEffect, useRef, useState } from "react";

// 3 farklı imleç durumu tanımlıyoruz
type HoverState = "default" | "link" | "gallery";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hoverState, setHoverState] = useState<HoverState>("default");

  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // 1. Fare hareketini dinle
    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    // 2. Akıllı Hedefleme (Hedefin ne olduğunu anla)
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Eğer özel galeri class'ına sahipse "gallery" moduna geç
      if (target.closest(".cursor-hover-target")) {
        setHoverState("gallery");
      } 
      // Sadece normal bir buton veya link ise "link" moduna geç
      else if (target.closest("button") || target.closest("a")) {
        setHoverState("link");
      } 
      // Hiçbiri değilse normale dön
      else {
        setHoverState("default");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    // 3. LERP Animasyonu
    let rafId: number;
    const render = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  // Duruma göre çemberin stilini belirliyoruz
  let ringClasses = "w-8 h-8 bg-transparent border border-purple-500/50"; // DEFAULT
  
  if (hoverState === "gallery") {
    ringClasses = "w-20 h-20 bg-purple-500/20 backdrop-blur-sm border border-purple-400/50"; // GALERİ (Göz At)
  } else if (hoverState === "link") {
    ringClasses = "w-12 h-12 bg-transparent border-2 border-purple-400"; // NORMAL LİNK (Sadece hafif büyür, yazı yok)
  }

  return (
    <>
      {/* İÇ NOKTA: Katmanı düşürüldü, yazı artık üstte */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-purple-500 rounded-full pointer-events-none z-[9990]"
      />

      {/* DIŞ HALKA */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center
          transition-[width,height,background-color,border-color] duration-300 ease-out ${ringClasses}`}
      >
        {/* SADECE galeri modundayken yazıyı göster */}
        {hoverState === "gallery" && (
          <span className="text-purple-300 text-[10px] font-bold tracking-widest animate-in fade-in zoom-in duration-300">
            GÖZ AT
          </span>
        )}
      </div>
    </>
  );
}