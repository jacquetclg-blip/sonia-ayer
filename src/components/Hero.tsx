"use client";

import { useEffect, useState } from "react";
import { MagneticButton } from "@/components/MagneticButton";
import TVBadge from "@/components/TVBadge";

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const items = [
    <p
      key="sub"
      className="font-sans text-xs uppercase tracking-[0.3em] text-[#7f6145]/70"
    >
      Architecte d&apos;intérieur à Colmar
    </p>,
    <h1
      key="title"
      className="mt-6 font-heading text-7xl font-light text-[#212529] md:text-8xl lg:text-9xl"
    >
      Sonia Ayer
    </h1>,
    <p
      key="tagline"
      className="mt-8 max-w-md font-sans text-lg text-[#212529]/60"
    >
      Transformer vos espaces, révéler votre intérieur
    </p>,
    <div key="cta" className="mt-12">
      <MagneticButton href="/realisations">
        Découvrir mes réalisations
      </MagneticButton>
    </div>,
    <div key="tv" className="mt-8">
      <TVBadge />
    </div>,
  ];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background with gradient and geometric grid */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #f0efec 0%, #ffffff 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(33,37,41,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(33,37,41,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: `opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) ${i * 0.15}s, transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) ${i * 0.15}s`,
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
