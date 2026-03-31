import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionReveal } from "@/components/SectionReveal";
import { MagneticButton } from "@/components/MagneticButton";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export const metadata: Metadata = {
  title: "Sonia Ayer | Architecte d'int\u00e9rieur \u00e0 Colmar",
  description:
    "Sonia Ayer, architecte d'int\u00e9rieur \u00e0 Colmar en Alsace. Conception d'espaces, r\u00e9novation, d\u00e9coration et accompagnement sur mesure pour particuliers et professionnels.",
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Avant / Après */}
      <SectionReveal className="bg-[#212529] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
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

      {/* L'agence */}
      <SectionReveal className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <h2 className="font-heading text-4xl font-light text-[#212529] md:text-5xl">
              Un regard singulier
            </h2>
            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-[#212529]/70">
              Form&eacute;e en architecture d&apos;int&eacute;rieur, j&apos;ai d&apos;abord
              travaill&eacute; aux c&ocirc;t&eacute;s d&apos;une designer reconnue pour ses
              interventions sur France 5, avant de passer par le visual merchandising
              aux Galeries Lafayette. J&apos;ai ensuite g&eacute;r&eacute; des projets au sein
              d&apos;un cabinet d&apos;architecture strasbourgeois. Ces exp&eacute;riences
              crois&eacute;es nourrissent aujourd&apos;hui une approche qui m&ecirc;le rigueur
              technique et sensibilit&eacute; esth&eacute;tique.
            </p>
            <Link
              href="/agence"
              className="mt-8 inline-flex items-center gap-2 font-sans text-sm uppercase tracking-[0.2em] text-[#7f6145] transition-opacity hover:opacity-70"
            >
              En savoir plus
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/agence/sonia-portrait.jpg"
              alt="Sonia Ayer, architecte d'intérieur à Colmar"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionReveal>

      {/* Vu sur M6 */}
      <SectionReveal className="bg-[#f0efec] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#7f6145]/70">
            Vu &agrave; la t&eacute;l&eacute;vision
          </p>
          <h2 className="mt-4 font-heading text-5xl font-light text-[#212529] md:text-6xl">
            Vu sur M6
          </h2>
          <p className="mx-auto mt-2 font-heading text-2xl italic text-[#7f6145]">
            Mission Travaux
          </p>
          <div className="mx-auto mt-10 max-w-2xl">
            <p className="font-sans text-base leading-relaxed text-[#212529]/70">
              J&apos;ai particip&eacute; &agrave; l&apos;&eacute;mission &laquo;&nbsp;Mission
              Travaux&nbsp;&raquo; sur M6, diffus&eacute;e en prime time. Mon r&ocirc;le :
              accompagner des familles bloqu&eacute;es dans des chantiers abandonn&eacute;s,
              les aider &agrave; reprendre confiance et &agrave; voir enfin leur
              projet aboutir. L&apos;exp&eacute;rience m&apos;a confirm&eacute; ce que je
              savais d&eacute;j&agrave;&nbsp;: c&apos;est le travail d&apos;&eacute;quipe, la
              compr&eacute;hension humaine autant que technique, qui fait la
              diff&eacute;rence dans une r&eacute;novation.
            </p>
          </div>
          <div className="mx-auto mt-12 h-px w-16 bg-[#7f6145]/30" />
        </div>
      </SectionReveal>

      {/* Prestations */}
      <SectionReveal className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-4xl font-light text-[#212529] md:text-5xl">
            Prestations
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Architecture d\u2019int\u00e9rieur",
                description:
                  "Je repense l\u2019agencement de vos espaces pour qu\u2019ils correspondent vraiment \u00e0 votre fa\u00e7on de vivre.",
              },
              {
                title: "D\u00e9coration",
                description:
                  "Couleurs, mati\u00e8res, mobilier\u00a0: je compose une atmosph\u00e8re coh\u00e9rente qui vous ressemble.",
              },
              {
                title: "R\u00e9novation",
                description:
                  "Je coordonne l\u2019ensemble du chantier, des premiers plans \u00e0 la remise des cl\u00e9s.",
              },
              {
                title: "Conseil & Accompagnement",
                description:
                  "Un regard ext\u00e9rieur et des recommandations concr\u00e8tes pour avancer sereinement dans votre projet.",
              },
            ].map((service) => (
              <div key={service.title} className="group">
                <div className="aspect-square w-12 bg-[#d5cabe]/50" />
                <h3 className="mt-6 font-heading text-xl font-normal text-[#212529]">
                  {service.title}
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#212529]/60">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
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

      {/* R\u00e9alisations */}
      <SectionReveal className="bg-[#f0efec] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-4xl font-light text-[#212529] md:text-5xl">
            R&eacute;alisations
          </h2>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {realisations.map((item, i) => (
              <SectionReveal key={item.name} delay={i * 0.1}>
                <div className="group relative overflow-hidden cursor-pointer">
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.name}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      className="transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-end bg-[#212529]/0 pb-8 transition-all duration-500 group-hover:bg-[#212529]/40">
                    <span className="translate-y-4 font-heading text-xl font-light text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 lg:text-2xl">
                      {item.name}
                    </span>
                    <span className="translate-y-4 font-sans text-[10px] font-light uppercase tracking-[0.2em] text-white/70 opacity-0 transition-all duration-500 delay-75 group-hover:translate-y-0 group-hover:opacity-100">
                      {item.location}
                    </span>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
          <div className="mt-16 text-center">
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

      {/* CTA */}
      <SectionReveal className="bg-[#212529] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl font-light text-white md:text-5xl lg:text-6xl">
            Votre projet commence ici
          </h2>
          <p className="mt-6 font-sans text-lg text-white/60">
            Parlons de votre int&eacute;rieur
          </p>
          <div className="mt-12">
            <MagneticButton href="/contact" variant="light">
              Prendre contact
            </MagneticButton>
          </div>
        </div>
      </SectionReveal>
    </>
  );
}
