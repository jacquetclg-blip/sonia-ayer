"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  target: string; // e.g. "80+" or "15" or "1"
  duration?: number;
}

export default function CountUp({ target, duration = 2 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  // Parse numeric part and suffix
  const match = target.match(/^(\d+)(.*)$/);
  const num = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || !ref.current) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = (now - start) / (duration * 1000);
      const eased = 1 - Math.pow(1 - Math.min(elapsed, 1), 3); // easeOutCubic
      const current = Math.round(eased * num);
      if (ref.current) ref.current.textContent = current + suffix;
      if (elapsed < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, num, suffix, duration]);

  return <span ref={ref}>{target}</span>;
}
