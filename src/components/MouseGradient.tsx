"use client";

import { useEffect, useRef } from "react";

export default function MouseGradient() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const { clientX, clientY } = e;
      
      // Blob elementini doğrudan DOM üzerinden güncelliyoruz (Re-render yok!)
      blobRef.current?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 2000, fill: "forwards" } // Gecikmeli takip (Smooth)
      );
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
            ref={blobRef}
            className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-[100px] opacity-50 -translate-x-1/2 -translate-y-1/2"
        />
    </div>
  );
}