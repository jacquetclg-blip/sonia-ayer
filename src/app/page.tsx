import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionReveal } from "@/components/SectionReveal";
import { MagneticButton } from "@/components/MagneticButton";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CountUp from "@/components/CountUp";

export const metadata: Metadata = {
  title: "Sonia Ayer | Architecte d\u2019int\u00e9rieur \u00e0 Colmar",
  description:
    "Sonia Ayer, architecte d\u2019int\u00e9rieur \u00e0 Colmar en Alsace. Conception d\u2019espaces, r\u00e9novation, d\u00e9coration et accompagnement sur mesure pour particuliers et professionnels.",
};

const realisations = [
  {
    src: "/images/realisations/projet1.png",
    name: "Appartement Colmar Centre",
    location: "Colmar",
  },
  {
    src: "/images/realisations/projet2.png",
    name: "Maison Kaysersberg",
    location: "Kaysersberg",
  },
  {
    src: "/images/realisations/projet3.png",
    name: "Loft Strasbourg",
    location: "Strasbourg",
  },
];

const services = [
  {
    num: "01",
    title: "Architecture d\u2019int\u00e9rieur",
    description:
      "Je repense l\u2019agencement de vos espaces pour qu\u2019ils correspondent vraiment \u00e0 votre fa\u00e7on de vivre.",
  },
  {
    num: "02",
    title: "D\u00e9coration",
    description:
      "Couleurs, mati\u00e8res, mobilier\u00a0: je compose une atmosph\u00e8re coh\u00e9rente qui vous ressemble.",
  },
  {
    num: "03",
    title: "R\u00e9novation",
    description:
      "Je coordonne l\u2019ensemble du chantier, des premiers plans \u00e0 la remise des cl\u00e9s.",
  },
  {
    num: "04",
    title: "Conseil & Accompagnement",
    description:
      "Un regard ext\u00e9rieur et des recommandations concr\u00e8tes pour avancer sereinement dans votre projet.",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── 1. HERO ─────────────────────────────────────────────────── */}
      <Hero />

      {/* ─── 2. MARQUEE TICKER ───────────────────────────────────────── */}
      <div
        className="overflow-hidden py-5"
        style={{ backgroundColor: "#0b0c0e" }}
        aria-hidden="true"
      >
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "marquee 28s linear infinite",
          }}
        >
          {[0, 1].map((i) => (
            <span
              key={i}
              className="font-sans text-[11px] uppercase tracking-[0.35em] pr-0"
              style={{ whiteSpace: "nowrap", color: "rgba(190,190,190,0.2)" }}
            >
              ARCHITECTE D&rsquo;INT&Eacute;RIEUR&nbsp;&nbsp;&middot;&nbsp;&nbsp;COLMAR&nbsp;&nbsp;&middot;&nbsp;&nbsp;ALSACE&nbsp;&nbsp;&middot;&nbsp;&nbsp;R&Eacute;NOVATION&nbsp;&nbsp;&middot;&nbsp;&nbsp;D&Eacute;CORATION&nbsp;&nbsp;&middot;&nbsp;&nbsp;HOME STAGING&nbsp;&nbsp;&middot;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ─── 3. UN REGARD SINGULIER ──────────────────────────────────── */}
      <SectionReveal className="px-6 py-24 md:py-32" style={{ backgroundColor: "#1e2226" }}>
        <div className="mx-auto max-w-6xl">
          {/* Overline */}
          <p
            className="font-heading italic text-sm mb-12"
            style={{ color: "#ad8661" }}
          >
            Regard singulier
          </p>
          <div className="grid gap-16 md:grid-cols-[40%_60%] md:gap-20 lg:gap-28">
            {/* Text column */}
            <div className="flex flex-col justify-center">
              <h2
                className="font-heading font-light text-white leading-tight"
                style={{ fontSize: "clamp(48px, 5vw, 80px)" }}
              >
                Un regard<br />singulier
              </h2>
              <p
                className="mt-8 max-w-sm font-sans text-base leading-relaxed"
                style={{ color: "#bebebe" }}
              >
                Form&eacute;e en architecture d&apos;int&eacute;rieur, j&apos;ai d&apos;abord
                travaill&eacute; aux c&ocirc;t&eacute;s d&apos;une designer reconnue avant de passer
                par le visual merchandising aux Galeries Lafayette. Ces exp&eacute;riences
                crois&eacute;es nourrissent aujourd&apos;hui une approche qui m&ecirc;le rigueur
                technique et sensibilit&eacute; esth&eacute;tique.
              </p>
              <Link
                href="/agence"
                className="mt-10 inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.2em] transition-opacity hover:opacity-70"
                style={{ color: "#ad8661" }}
              >
                En savoir plus
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            {/* Portrait column */}
            <div className="relative">
              <div
                className="relative w-full overflow-hidden"
                style={{
                  aspectRatio: "4/5",
                  outline: "1px solid rgba(173,134,97,0.3)",
                  outlineOffset: "-8px",
                }}
              >
                <Image
                  src="/images/agence/sonia-portrait.jpg"
                  alt="Sonia Ayer, architecte d\u2019int\u00e9rieur \u00e0 Colmar"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />
              </div>
              {/* Number indicator */}
              <span
                className="absolute bottom-4 left-4 font-sans text-[10px] uppercase tracking-[0.3em]"
                style={{ color: "rgba(190,190,190,0.3)" }}
              >
                01
              </span>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* ─── 4. STATS ────────────────────────────────────────────────── */}
      <SectionReveal className="px-6 py-20 md:py-28" style={{ backgroundColor: "#0b0c0e" }}>
        <div className="mx-auto max-w-5xl">
          {/* Large italic quote */}
          <div className="mb-20 text-center">
            <p
              className="font-heading italic leading-snug mx-auto max-w-2xl"
              style={{ fontSize: "clamp(20px, 2.5vw, 28px)", color: "#bebebe" }}
            >
              <span
                className="font-heading not-italic"
                style={{ fontSize: "clamp(48px, 5vw, 72px)", color: "#ad8661", lineHeight: 0.8, verticalAlign: "bottom", marginRight: "4px" }}
              >
                &ldquo;
              </span>
              Transformer un espace, c&apos;est transformer une vie.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3">
            {[
              { num: "80+", label: "Projets r\u00e9alis\u00e9s" },
              { num: "15", label: "Ann\u00e9es d\u2019exp\u00e9rience" },
              { num: "1", label: "Passage sur M6" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-8 px-4 text-center"
                style={i > 0 ? { borderLeft: "1px solid rgba(255,255,255,0.08)" } : {}}
              >
                <span
                  className="font-heading font-light text-white"
                  style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
                >
                  <CountUp target={stat.num} />
                </span>
                <span
                  className="mt-3 font-sans text-[10px] uppercase tracking-[0.3em]"
                  style={{ color: "rgba(190,190,190,0.4)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* ─── 5. M6 MISSION TRAVAUX ───────────────────────────────────── */}
      <SectionReveal className="relative overflow-hidden" style={{ backgroundColor: "#1e2226" }}>
        <div className="grid md:grid-cols-2">
          {/* Left: text */}
          <div className="flex flex-col justify-center px-10 py-16 md:px-16 md:py-20 lg:px-24">
            <p
              className="font-sans text-[10px] uppercase tracking-[0.35em]"
              style={{ color: "#ad8661" }}
            >
              02 &mdash; Vu sur M6
            </p>
            <h2
              className="mt-6 font-heading font-light text-white leading-none"
              style={{ fontSize: "clamp(56px, 7vw, 100px)" }}
            >
              Mission<br />Travaux
            </h2>
            <p
              className="mt-8 max-w-md font-sans text-sm leading-relaxed"
              style={{ color: "#bebebe" }}
            >
              J&apos;ai accompagn&eacute; des familles bloqu&eacute;es dans des chantiers abandonn&eacute;s,
              les aidant &agrave; reprendre confiance et &agrave; voir leur projet aboutir.
              Diffus&eacute;e en prime time, cette &eacute;mission a montr&eacute; ce que je fais au
              quotidien&nbsp;: &eacute;couter, comprendre, puis transformer.
            </p>
            <Link
              href="/presse"
              className="mt-10 inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.2em] transition-opacity hover:opacity-70"
              style={{ color: "#ad8661" }}
            >
              Voir la page presse
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          {/* Right: photo */}
          <div
            className="relative min-h-[400px] md:min-h-[560px]"
            style={{ border: "1px solid rgba(173,134,97,0.2)" }}
          >
            <Image
              src="/images/presse/m6-mission-travaux.jpg"
              alt="Sonia Ayer dans Mission Travaux sur M6"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionReveal>

      {/* ─── 6. BROWN CTA SECTION ────────────────────────────────────── */}
      <SectionReveal className="px-6 py-24 md:py-32" style={{ backgroundColor: "#ad8661" }}>
        <div className="mx-auto max-w-5xl">
          {/* Overline */}
          <p
            className="font-sans text-[10px] uppercase tracking-[0.35em] mb-8"
            style={{ color: "rgba(0,0,0,0.45)" }}
          >
            Architecte d&apos;int&eacute;rieur certifi&eacute;e
          </p>
          {/* Heading */}
          <h2
            className="font-heading font-light text-white leading-tight mb-8"
            style={{ fontSize: "clamp(56px, 7vw, 110px)" }}
          >
            Votre projet<br />m&eacute;rite le<br />meilleur
          </h2>
          {/* Body */}
          <p
            className="max-w-md font-sans text-base leading-relaxed mb-12"
            style={{ color: "rgba(0,0,0,0.55)" }}
          >
            Chaque projet est unique. Je prends le temps de comprendre votre mode de vie,
            vos go&ucirc;ts et vos contraintes pour concevoir un espace qui vous ressemble vraiment.
          </p>
          {/* Dark button */}
          <MagneticButton href="/contact" variant="dark">
            Prendre contact
          </MagneticButton>
        </div>
      </SectionReveal>

      {/* ─── 7. RÉALISATIONS ─────────────────────────────────────────── */}
      <SectionReveal className="px-6 py-24 md:py-32" style={{ backgroundColor: "#1e2226" }}>
        <div className="mx-auto max-w-6xl">
          {/* Label */}
          <p
            className="font-sans text-[10px] uppercase tracking-[0.35em] mb-6"
            style={{ color: "#ad8661" }}
          >
            Portfolio
          </p>
          <h2
            className="font-heading font-light text-white mb-16"
            style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
          >
            Mes r&eacute;alisations
          </h2>

          {/* Asymmetric grid */}
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "auto auto",
            }}
          >
            {/* First image — double height */}
            <SectionReveal delay={0} className="row-span-2">
              <div
                className="group relative h-full min-h-[480px] cursor-pointer overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.05)" }}
                data-cursor-label={realisations[0].name}
                data-tilt
              >
                <Image
                  src={realisations[0].src}
                  alt={realisations[0].name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 flex flex-col items-center justify-end pb-8 transition-all duration-500 bg-[#0b0c0e]/0 group-hover:bg-[#0b0c0e]/50"
                >
                  <span className="translate-y-4 font-heading text-2xl font-light text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {realisations[0].name}
                  </span>
                  <span
                    className="translate-y-4 font-sans text-[10px] font-light uppercase tracking-[0.2em] opacity-0 transition-all duration-500 delay-75 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ color: "rgba(190,190,190,0.7)" }}
                  >
                    {realisations[0].location}
                  </span>
                </div>
              </div>
            </SectionReveal>

            {/* Second image */}
            <SectionReveal delay={0.1}>
              <div
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.05)" }}
                data-cursor-label={realisations[1].name}
                data-tilt
              >
                <Image
                  src={realisations[1].src}
                  alt={realisations[1].name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-[#0b0c0e]/0 pb-6 transition-all duration-500 group-hover:bg-[#0b0c0e]/50">
                  <span className="translate-y-4 font-heading text-xl font-light text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {realisations[1].name}
                  </span>
                  <span
                    className="translate-y-4 font-sans text-[10px] font-light uppercase tracking-[0.2em] opacity-0 transition-all duration-500 delay-75 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ color: "rgba(190,190,190,0.7)" }}
                  >
                    {realisations[1].location}
                  </span>
                </div>
              </div>
            </SectionReveal>

            {/* Third image */}
            <SectionReveal delay={0.2}>
              <div
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.05)" }}
                data-cursor-label={realisations[2].name}
                data-tilt
              >
                <Image
                  src={realisations[2].src}
                  alt={realisations[2].name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-[#0b0c0e]/0 pb-6 transition-all duration-500 group-hover:bg-[#0b0c0e]/50">
                  <span className="translate-y-4 font-heading text-xl font-light text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {realisations[2].name}
                  </span>
                  <span
                    className="translate-y-4 font-sans text-[10px] font-light uppercase tracking-[0.2em] opacity-0 transition-all duration-500 delay-75 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ color: "rgba(190,190,190,0.7)" }}
                  >
                    {realisations[2].location}
                  </span>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.2em] transition-opacity hover:opacity-70"
              style={{ color: "#ad8661" }}
            >
              Voir tous les projets
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </SectionReveal>

      {/* ─── 8. PRESTATIONS ──────────────────────────────────────────── */}
      <SectionReveal className="px-6 py-24 md:py-32" style={{ backgroundColor: "#0b0c0e" }}>
        <div className="mx-auto max-w-6xl">
          {/* Label */}
          <p
            className="font-sans text-[10px] uppercase tracking-[0.35em] mb-16"
            style={{ color: "#ad8661" }}
          >
            03 &mdash; Prestations
          </p>

          {/* Services as horizontal rows */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex items-center gap-6 py-7 transition-all duration-300"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span
                  className="font-sans text-[10px] uppercase tracking-[0.25em] w-10 flex-shrink-0 transition-colors duration-300 text-white/20 group-hover:text-[#ad8661]"
                >
                  {service.num}
                </span>
                <div className="flex-1 transition-transform duration-300 group-hover:translate-x-2">
                  <h3
                    className="font-heading text-xl font-normal text-white md:text-2xl"
                  >
                    {service.title}
                  </h3>
                  <p
                    className="mt-1 font-sans text-sm leading-relaxed"
                    style={{ color: "rgba(190,190,190,0.5)" }}
                  >
                    {service.description}
                  </p>
                </div>
                <span
                  className="font-sans text-lg transition-transform duration-300 group-hover:translate-x-1 text-white/20"
                >
                  &rarr;
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* ─── 9. AVANT / APRÈS ────────────────────────────────────────── */}
      <SectionReveal className="px-6 py-24 md:py-32" style={{ backgroundColor: "#1e2226" }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2
              className="font-heading font-light text-white"
              style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
            >
              Avant / Apr&egrave;s
            </h2>
            <p
              className="mx-auto mt-4 max-w-lg font-sans text-sm"
              style={{ color: "rgba(190,190,190,0.5)" }}
            >
              Glissez le curseur pour voir la diff&eacute;rence avant et apr&egrave;s intervention.
            </p>
          </div>
          <BeforeAfterSlider />
        </div>
      </SectionReveal>
    </>
  );
}
