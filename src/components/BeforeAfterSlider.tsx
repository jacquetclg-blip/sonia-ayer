"use client";
import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - left) / width) * 100));
    setPosition(pct);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    handleMove(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    handleMove(e.clientX);
  };

  const onMouseUp = () => {
    dragging.current = false;
  };

  const onTouchStart = (e: React.TouchEvent) => {
    dragging.current = true;
    handleMove(e.touches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    dragging.current = false;
  };

  // Release drag if mouse leaves the window
  useEffect(() => {
    const onGlobalUp = () => { dragging.current = false; };
    window.addEventListener("mouseup", onGlobalUp);
    return () => window.removeEventListener("mouseup", onGlobalUp);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden cursor-ew-resize select-none"
      style={{ aspectRatio: "16 / 9" }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Before image (full) */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/slide-avant.webp"
          alt="Avant rénovation"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          draggable={false}
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>

      {/* After image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src="/images/hero/slide-apres.webp"
          alt="Après rénovation"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          draggable={false}
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>

      {/* Drag handle line */}
      <div
        className="absolute top-0 bottom-0 z-10 flex flex-col items-center pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-px h-full bg-white/80" />
        {/* Handle circle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-white/30 flex items-center justify-center shadow-lg"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-[#7f6145]"
          >
            <path
              d="M5 8L2 5M2 5L5 2M2 5H14M11 8L14 5M14 5L11 2M14 5H2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
        <span
          className="font-sans text-xs uppercase tracking-[0.2em] text-white/90 bg-[#212529]/50 px-3 py-1"
          style={{ opacity: position > 10 ? 1 : 0, transition: "opacity 0.3s" }}
        >
          Avant
        </span>
      </div>
      <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
        <span
          className="font-sans text-xs uppercase tracking-[0.2em] text-white/90 bg-[#212529]/50 px-3 py-1"
          style={{ opacity: position < 90 ? 1 : 0, transition: "opacity 0.3s" }}
        >
          Apr&egrave;s
        </span>
      </div>
    </div>
  );
}
