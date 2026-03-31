"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function TiltEffect() {
  useEffect(() => {
    const cards = document.querySelectorAll("[data-tilt]");

    cards.forEach(card => {
      const el = card as HTMLElement;

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(el, {
          rotateY: x * 12,
          rotateX: -y * 12,
          transformPerspective: 800,
          duration: 0.4,
          ease: "power2.out",
        });
      };

      const onLeave = () => {
        gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
      };

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      el.style.transformStyle = "preserve-3d";
    });

    return () => {
      cards.forEach(card => {
        const el = card as HTMLElement;
        // Clone and replace to remove all listeners cleanly
        const clone = el.cloneNode(true) as HTMLElement;
        el.parentNode?.replaceChild(clone, el);
      });
    };
  }, []);

  return null;
}
