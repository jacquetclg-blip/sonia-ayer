"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setDone(true),
    });

    // Count from 0 to 100
    const count = { val: 0 };
    tl.to(count, {
      val: 100,
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: () => {
        if (countRef.current) countRef.current.textContent = Math.round(count.val) + "%";
      },
    });

    // Expand the line
    tl.to(lineRef.current, { width: "100%", duration: 1.8, ease: "power2.inOut" }, 0);

    // Slide up the loader
    tl.to(loaderRef.current, { yPercent: -100, duration: 0.8, ease: "power4.inOut" }, "-=0.2");
    tl.to(textRef.current, { opacity: 0, duration: 0.3 }, "-=0.8");

    return () => { tl.kill(); };
  }, []);

  if (done) return null;

  return (
    <div ref={loaderRef} className="fixed inset-0 z-[9999] flex flex-col items-center justify-center" style={{ backgroundColor: "#0b0c0e" }}>
      <div ref={textRef} className="flex flex-col items-center gap-6">
        {/* Logo text */}
        <div className="font-sans text-[11px] uppercase tracking-[0.5em] text-white/40">Sonia Ayer</div>
        {/* Loading bar */}
        <div className="relative w-48 h-px bg-white/10">
          <div ref={lineRef} className="absolute left-0 top-0 h-full" style={{ width: "0%", backgroundColor: "#ad8661" }} />
        </div>
        {/* Counter */}
        <span ref={countRef} className="font-heading text-5xl font-light text-white">0%</span>
        <div className="font-sans text-[10px] uppercase tracking-[0.35em]" style={{ color: "rgba(173,134,97,0.6)" }}>
          Architecte d&rsquo;int&eacute;rieur &middot; Colmar
        </div>
      </div>
    </div>
  );
}
