"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function TVBadge() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Link
      href="/presse"
      className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-5 py-2.5 transition-transform duration-300 hover:scale-105"
      style={{
        background:
          "linear-gradient(135deg, #7f6145 0%, #a68563 50%, #7f6145 100%)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition:
          "opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
      }}
    >
      {/* Glow layer */}
      <span
        className="pointer-events-none absolute inset-0 animate-pulse rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(166,133,99,0.5) 0%, transparent 70%)",
        }}
      />

      {/* TV icon */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative z-10 flex-shrink-0"
      >
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
        <polyline points="17 2 12 7 7 2" />
      </svg>

      {/* Text */}
      <span className="relative z-10 flex flex-col leading-none">
        <span className="font-sans text-[9px] font-light uppercase tracking-[0.2em] text-white/70">
          Vu sur M6
        </span>
        <span className="font-heading text-[11px] font-light tracking-wide text-white">
          Mission Travaux
        </span>
      </span>
    </Link>
  );
}
