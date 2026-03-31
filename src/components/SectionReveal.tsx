"use client";

import { useRef, useEffect, useState, useCallback } from "react";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function SectionReveal({
  children,
  className = "",
  delay = 0,
}: SectionRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  const reveal = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    if (delay > 0) {
      setTimeout(() => setIsVisible(true), delay * 1000);
    } else {
      setIsVisible(true);
    }
  }, [delay]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // If element is already in viewport on mount, reveal immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.1) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px 100px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reveal]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition:
          "opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
      }}
    >
      {children}
    </div>
  );
}
