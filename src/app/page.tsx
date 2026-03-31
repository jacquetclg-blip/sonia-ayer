import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionReveal } from "@/components/SectionReveal";
import { MagneticButton } from "@/components/MagneticButton";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

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
        className="overflow-hidden bg-[#212529] py-4"
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
              className="font-sans text-[11px] uppercase tracking-[0.35em] text-white/40 pr-0"
              style={{ whiteSpace: "nowrap" }}
            >
              ARCHITECTE D&rsquo;INT&Eacute;RIEUR&nbsp;&nbsp;&middot;&nbsp;&nbsp;COLMAR&nbsp;&nbsp;&middot;&nbsp;&nbsp;ALSACE&nbsp;&nbsp;&middot;&nbsp;&nbsp;R&Eacute;NOVATION&nbsp;&nbsp;&middot;&nbsp;&nbsp;D&Eacute;CORATION&nbsp;&nbsp;&middot;&nbsp;&nbsp;HOME STAGING&nbsp;&nbsp;&middot;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ─── 3. STATS ────────────────────────────────────────────────── */}
      <SectionReveal className="bg-[#f0efec] px-6 py-16 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { num: "80+", label: "Projets r\u00e9alis\u00e9s" },
              { num: "15", label: "Ann\u00e9es d\u2019exp\u00e9rience" },
              { num: "3", label: "R\u00e9gions couvertes" },
              { num: "1", label: "Passage sur M6" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center py-8 px-4 text-center${
                  i > 0 ? " border-l border-[#212529]/10" : ""
                }`}
              >
                <span className="font-heading text-6xl font-light text-[#212529] md:text-7xl">
                  {stat.num}
                </span>
                <span className="mt-3 font-sans text-[10px] uppercase tracking-[0.3em] text-[#212529]/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* ─── 4. UN REGARD SINGULIER ──────────────────────────────────── */}
      <SectionReveal className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          {/* Section number */}
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#212529]/20 mb-12">
            01
          </p>
          <div className="grid gap-16 md:grid-cols-2 md:gap-20 lg:gap-28">
            {/* Text column */}
            <div className="flex flex-col justify-center">
              <h2 className="font-heading text-4xl font-light text-[#212529] md:text-5xl lg:text-6xl leading-tight">
                Un regard<br />singulier
              </h2>
              <p className="mt-8 max-w-lg font-sans text-base leading-relaxed text-[#212529]/70">
                Form&eacute;e en architecture d&apos;int&eacute;rieur, j&apos;ai d&apos;abord
                travaill&eacute; aux c&ocirc;t&eacute;s d&apos;une designer reconnue pour ses
                interventions sur France&nbsp;5, avant de passer par le visual merchandising
                aux Galeries Lafayette. J&apos;ai ensuite g&eacute;r&eacute; des projets au sein
                d&apos;un cabinet d&apos;architecture strasbourgeois. Ces exp&eacute;riences
                crois&eacute;es nourrissent aujourd&apos;hui une approche qui m&ecirc;le rigueur
                technique et sensibilit&eacute; esth&eacute;tique.
              </p>
              <Link
                href="/agence"
                className="mt-10 inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.2em] text-[#7f6145] transition-opacity hover:opacity-70"
              >
                En savoir plus
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            {/* Portrait column */}
            <div className="relative">
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "4/5" }}
              >
                <Image
                  src="/images/agence/sonia-portrait.jpg"
                  alt="Sonia Ayer, architecte d\u2019int\u00e9rieur \u00e0 Colmar"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                    outlineColor: "rgba(127,97,69,0.2)",
                    outlineWidth: "1px",
                    outlineStyle: "solid",
                    outlineOffset: "-8px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* ─── 5. M6 — FULL BLEED ──────────────────────────────────────── */}
      <SectionReveal className="relative overflow-hidden bg-[#0e0e0e]">
        {/* Section number */}
        <p className="absolute top-8 left-8 z-10 font-sans text-[10px] uppercase tracking-[0.3em] text-white/20">
          02
        </p>
        <div className="grid md:grid-cols-2">
          {/* Left: photo */}
          <div className="relative min-h-[400px] md:min-h-[560px]">
            <Image
              src="/images/presse/m6-mission-travaux.jpg"
              alt="Sonia Ayer dans Mission Travaux sur M6"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Right-edge gradient for text readability on desktop */}
            <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-transparent to-[#0e0e0e] md:block" />
            {/* Bottom gradient on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] to-transparent md:hidden" />
            {/* Badge top-left */}
            <div className="absolute top-6 left-6 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm border border-white/10">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                <polyline points="17 2 12 7 7 2" />
              </svg>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white">
                Diffus&eacute; sur M6
              </span>
            </div>
          </div>

          {/* Right: text */}
          <div className="flex flex-col justify-center px-10 py-16 md:px-16 md:py-20 lg:px-24">
            <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#7f6145]">
              Vu &agrave; la t&eacute;l&eacute;vision
            </p>
            <h2 className="mt-6 font-heading text-6xl font-light leading-none text-white md:text-7xl lg:text-8xl">
              Mission<br />Travaux
            </h2>
            <p className="mt-4 font-heading text-2xl italic text-[#7f6145]">
              sur M6
            </p>
            <p className="mt-8 max-w-md font-sans text-sm leading-relaxed text-white/60">
              J&apos;ai accompagn&eacute; des familles bloqu&eacute;es dans des chantiers abandonn&eacute;s,
              les aidant &agrave; reprendre confiance et &agrave; voir leur projet aboutir.
              Diffus&eacute;e en prime time, cette &eacute;mission a montr&eacute; ce que je fais au
              quotidien&nbsp;: &eacute;couter, comprendre, puis transformer.
            </p>
            <Link
              href="/presse"
              className="mt-10 inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.2em] text-[#7f6145] transition-opacity hover:opacity-70"
            >
              Voir la page presse
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </SectionReveal>

      {/* ─── 6. PRESTATIONS ──────────────────────────────────────────── */}
      <SectionReveal className="bg-white px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          {/* Section number */}
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#212529]/20 mb-12">
            03
          </p>
          <h2 className="font-heading text-4xl font-light text-[#212529] md:text-5xl mb-0">
            Prestations
          </h2>
          <div className="mt-16 divide-y divide-[#212529]/10 border-t border-[#212529]/10">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex items-start gap-6 py-7 transition-all duration-300"
              >
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#7f6145]/0 group-hover:text-[#7f6145]/70 transition-all duration-300 translate-x-0 group-hover:translate-x-0 w-8 flex-shrink-0 pt-1">
                  {service.num}
                </span>
                <div className="flex-1 transition-transform duration-300 group-hover:translate-x-2">
                  <h3 className="font-heading text-xl font-normal text-[#212529] md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-[#212529]/55">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-left">
            <Link
              href="/prestations"
              className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.2em] text-[#7f6145] transition-opacity hover:opacity-70"
            >
              Voir toutes mes prestations
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </SectionReveal>

      {/* ─── 7. RÉALISATIONS ─────────────────────────────────────────── */}
      <SectionReveal className="bg-[#f0efec] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          {/* Section number */}
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#212529]/20 mb-12">
            04
          </p>
          <h2 className="font-heading text-4xl font-light text-[#212529] md:text-5xl mb-16">
            R&eacute;alisations
          </h2>
          {/* Asymmetric grid: first image spans 2 rows */}
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "auto auto",
            }}
          >
            {/* First image — double height */}
            <SectionReveal delay={0} className="row-span-2">
              <div className="group relative h-full min-h-[480px] cursor-pointer overflow-hidden">
                <Image
                  src={realisations[0].src}
                  alt={realisations[0].name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-[#212529]/0 pb-8 transition-all duration-500 group-hover:bg-[#212529]/40">
                  <span className="translate-y-4 font-heading text-2xl font-light text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {realisations[0].name}
                  </span>
                  <span className="translate-y-4 font-sans text-[10px] font-light uppercase tracking-[0.2em] text-white/70 opacity-0 transition-all duration-500 delay-75 group-hover:translate-y-0 group-hover:opacity-100">
                    {realisations[0].location}
                  </span>
                </div>
              </div>
            </SectionReveal>

            {/* Second image */}
            <SectionReveal delay={0.1}>
              <div className="group relative aspect-[4/3] cursor-pointer overflow-hidden">
                <Image
                  src={realisations[1].src}
                  alt={realisations[1].name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-[#212529]/0 pb-6 transition-all duration-500 group-hover:bg-[#212529]/40">
                  <span className="translate-y-4 font-heading text-xl font-light text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {realisations[1].name}
                  </span>
                  <span className="translate-y-4 font-sans text-[10px] font-light uppercase tracking-[0.2em] text-white/70 opacity-0 transition-all duration-500 delay-75 group-hover:translate-y-0 group-hover:opacity-100">
                    {realisations[1].location}
                  </span>
                </div>
              </div>
            </SectionReveal>

            {/* Third image */}
            <SectionReveal delay={0.2}>
              <div className="group relative aspect-[4/3] cursor-pointer overflow-hidden">
                <Image
                  src={realisations[2].src}
                  alt={realisations[2].name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-[#212529]/0 pb-6 transition-all duration-500 group-hover:bg-[#212529]/40">
                  <span className="translate-y-4 font-heading text-xl font-light text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {realisations[2].name}
                  </span>
                  <span className="translate-y-4 font-sans text-[10px] font-light uppercase tracking-[0.2em] text-white/70 opacity-0 transition-all duration-500 delay-75 group-hover:translate-y-0 group-hover:opacity-100">
                    {realisations[2].location}
                  </span>
                </div>
              </div>
            </SectionReveal>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/realisations"
              className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.2em] text-[#7f6145] transition-opacity hover:opacity-70"
            >
              Voir tous les projets
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </SectionReveal>

      {/* ─── 8. AVANT / APRÈS ────────────────────────────────────────── */}
      <SectionReveal className="bg-[#212529] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          {/* Section number */}
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/20 mb-12">
            05
          </p>
          <div className="mb-12 text-center">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#7f6145]/70">
              Avant &amp; Apr&egrave;s
            </p>
            <h2 className="mt-4 font-heading text-4xl font-light text-white md:text-5xl">
              La transformation en images
            </h2>
            <p className="mx-auto mt-4 max-w-lg font-sans text-sm text-white/50">
              Glissez le curseur pour voir la diff&eacute;rence avant et apr&egrave;s intervention.
            </p>
          </div>
          <BeforeAfterSlider />
        </div>
      </SectionReveal>

      {/* ─── 9. DARK CTA ─────────────────────────────────────────────── */}
      <SectionReveal className="bg-[#212529] px-6 py-24 md:py-32 border-t border-white/5">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-5xl font-light text-white md:text-6xl lg:text-7xl leading-tight">
            Votre projet<br />
            <em className="not-italic italic font-light">commence ici</em>
          </h2>
          <div className="mt-14">
            <MagneticButton href="/contact" variant="light">
              Prendre contact
            </MagneticButton>
          </div>
        </div>
      </SectionReveal>
    </>
  );
}
