"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MagneticButton } from "@/components/MagneticButton";
import TVBadge from "@/components/TVBadge";
import DustParticles from "@/components/DustParticles";
import gsap from "gsap";

const slides = [
  { src: "/images/hero/diapo1.jpg", alt: "Réalisation intérieure Sonia Ayer", label: "COLMAR" },
  { src: "/images/hero/diapo2.jpg", alt: "Architecture intérieure Colmar", label: "ALSACE" },
  { src: "/images/hero/diapo3.jpg", alt: "Design d'intérieur Alsace", label: "RÉNOVATION" },
];

const TITLE = "Sonia Ayer";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  // Entrance animation
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }

    lettersRef.current.forEach((el, i) => {
      if (!el) return;
      tl.fromTo(
        el,
        { opacity: 0, y: 60, rotateX: -30 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.6, ease: "power3.out" },
        `-=${i === 0 ? 0 : 0.5}`
      );
    });

    if (taglineRef.current) {
      tl.fromTo(
        taglineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.2"
      );
    }

    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.3"
      );
    }

    if (badgeRef.current) {
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.2"
      );
    }

    if (labelRef.current) {
      tl.fromTo(
        labelRef.current,
        { opacity: 0, x: 10 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
        "-=0.5"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const scrollY = window.scrollY;
      bgRef.current.style.transform = `translateY(${scrollY * 0.35}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Slideshow auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      if (transitioning) return;
      setTransitioning(true);
      setPrevSlide(currentSlide);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => {
        setPrevSlide(null);
        setTransitioning(false);
      }, 1200);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, transitioning]);

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0b0c0e" }}
    >
      {/* Background slideshow — very low opacity for texture */}
      <div ref={bgRef} className="absolute inset-0 scale-[1.15] origin-center">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
            style={{
              opacity: i === currentSlide ? 0.3 : i === prevSlide ? 0 : 0,
              zIndex: i === currentSlide ? 2 : i === prevSlide ? 1 : 0,
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Dark overlay — not white gradient */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: "rgba(11,12,14,0.7)" }}
      />

      {/* Dust particles */}
      <div className="absolute inset-0 z-20">
        <DustParticles />
      </div>

      {/* Slide panel label — top right */}
      <div className="absolute top-8 right-8 z-30 flex flex-col items-end gap-1">
        <span
          ref={labelRef}
          className="font-sans text-[10px] uppercase tracking-[0.35em] opacity-0"
          style={{ color: "#ad8661" }}
        >
          {slides[currentSlide].label}
        </span>
        <span
          className="font-sans text-[9px] uppercase tracking-[0.2em]"
          style={{ color: "rgba(190,190,190,0.3)" }}
        >
          {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center px-6 text-center">
        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="font-sans text-xs uppercase tracking-[0.35em] opacity-0"
          style={{ color: "rgba(190,190,190,0.5)" }}
        >
          Architecte d&apos;int&eacute;rieur &agrave; Colmar
        </p>

        {/* Split letter title */}
        <h1
          className="mt-6 font-heading font-light text-white"
          aria-label={TITLE}
          style={{
            fontSize: "clamp(64px, 8vw, 120px)",
            lineHeight: 1,
            perspective: "600px",
          }}
        >
          {TITLE.split("").map((char, i) => (
            <span
              key={i}
              ref={(el) => {
                lettersRef.current[i] = el;
              }}
              className="inline-block opacity-0"
              style={{ whiteSpace: char === " " ? "pre" : undefined }}
            >
              {char === " " ? "\u00a0" : char}
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="mt-8 max-w-md font-sans text-sm uppercase tracking-[0.2em] opacity-0"
          style={{ color: "#bebebe" }}
        >
          Je transforme vos espaces, je r&eacute;v&egrave;le votre int&eacute;rieur
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="mt-12 opacity-0">
          <MagneticButton href="/realisations" variant="light">
            D&eacute;couvrir mes r&eacute;alisations
          </MagneticButton>
        </div>

        {/* TV Badge */}
        <div ref={badgeRef} className="mt-8 opacity-0">
          <TVBadge />
        </div>
      </div>

      {/* Slide indicators — bottom center */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (transitioning || i === currentSlide) return;
              setTransitioning(true);
              setPrevSlide(currentSlide);
              setCurrentSlide(i);
              setTimeout(() => {
                setPrevSlide(null);
                setTransitioning(false);
              }, 1200);
            }}
            className="h-px transition-all duration-500"
            style={{
              width: i === currentSlide ? "32px" : "12px",
              backgroundColor:
                i === currentSlide
                  ? "rgba(255,255,255,0.9)"
                  : "rgba(255,255,255,0.25)",
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
