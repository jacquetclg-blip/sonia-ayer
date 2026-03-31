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
    <>
      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-100%) skewX(-15deg); opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { transform: translateX(300%) skewX(-15deg); opacity: 0; }
        }
        .tv-badge-shimmer::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,255,255,0.18) 50%,
            transparent 100%
          );
          animation: shimmer 3s ease-in-out infinite;
          pointer-events: none;
        }
      `}</style>

      <Link
        href="/presse"
        className="tv-badge-shimmer group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-6 py-3 transition-transform duration-300 hover:scale-105"
        style={{
          background:
            "linear-gradient(135deg, #7f6145 0%, #ad8661 50%, #7f6145 100%)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
          transition:
            "opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
        }}
      >
        {/* Glow layer */}
        <span
          className="pointer-events-none absolute inset-0 animate-pulse rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(173,134,97,0.6) 0%, transparent 70%)",
          }}
        />

        {/* TV icon */}
        <svg
          width="18"
          height="18"
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
          <span className="font-sans text-[10px] font-light uppercase tracking-[0.25em] text-white/75">
            Vu sur M6
          </span>
          <span className="font-heading text-sm font-light tracking-wide text-white">
            Mission Travaux
          </span>
        </span>
      </Link>
    </>
  );
}
