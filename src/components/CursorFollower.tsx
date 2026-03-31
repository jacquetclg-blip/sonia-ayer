"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorFollower() {
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    let currentTarget: Element | null = null;

    const onMove = (e: MouseEvent) => {
      if (!currentTarget || !follower) return;
      const rect = currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gsap.to(follower, { x, y, duration: 0.4, ease: "power2.out" });
    };

    const onEnter = (e: MouseEvent) => {
      const target = (e.currentTarget as Element);
      currentTarget = target;
      const label = target.getAttribute("data-cursor-label");
      if (follower && label) {
        follower.textContent = label;
        follower.style.opacity = "1";
        // Position at mouse
        const rect = target.getBoundingClientRect();
        gsap.set(follower, { x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };

    const onLeave = () => {
      if (follower) follower.style.opacity = "0";
      currentTarget = null;
    };

    // Attach to all [data-cursor-label] elements
    const attachEvents = () => {
      document.querySelectorAll("[data-cursor-label]").forEach(el => {
        el.removeEventListener("mouseenter", onEnter as EventListener);
        el.removeEventListener("mousemove", onMove as EventListener);
        el.removeEventListener("mouseleave", onLeave);
        el.addEventListener("mouseenter", onEnter as EventListener);
        el.addEventListener("mousemove", onMove as EventListener);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    attachEvents();
    // Re-attach after dynamic loads
    const mo = new MutationObserver(attachEvents);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      document.querySelectorAll("[data-cursor-label]").forEach(el => {
        el.removeEventListener("mouseenter", onEnter as EventListener);
        el.removeEventListener("mousemove", onMove as EventListener);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className="pointer-events-none fixed z-[9990] opacity-0 rounded-full px-4 py-2 font-sans text-[10px] uppercase tracking-[0.2em] text-white"
      style={{ backgroundColor: "#ad8661", transition: "opacity 0.3s", left: 0, top: 0, transform: "translate(-50%, -50%)" }}
    />
  );
}
