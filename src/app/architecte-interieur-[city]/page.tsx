import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities } from "@/lib/cities";
import { SectionReveal } from "@/components/SectionReveal";
import { MagneticButton } from "@/components/MagneticButton";

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);

  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    openGraph: {
      title: city.metaTitle + " | Sonia Ayer",
      description: city.metaDescription,
    },
  };
}

function getNearbyCities(currentSlug: string) {
  const localSlugs = [
    "selestat",
    "ribeauville",
    "guebwiller",
    "munster",
    "kaysersberg",
    "rouffach",
  ];
  const regionalSlugs = ["strasbourg", "mulhouse", "alsace"];

  const isLocal = localSlugs.includes(currentSlug);
  const pool = isLocal
    ? localSlugs.filter((s) => s !== currentSlug)
    : [...localSlugs.slice(0, 2), ...regionalSlugs.filter((s) => s !== currentSlug)];

  return pool
    .slice(0, 3)
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter(Boolean);
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);

  if (!city) notFound();

  const nearby = getNearbyCities(slug);
  const preposition = city.slug === "alsace" || city.slug === "grand-est" ? "en" : "à";
  const titleLocation =
    city.slug === "grand-est" ? "dans le Grand Est" : `${preposition} ${city.name}`;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="border-b border-[#d5cabe]/30 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#7f6145]">
              {city.department}
              {city.distance ? ` · ${city.distance} de Colmar` : ""}
            </p>
            <h1 className="mt-4 font-heading text-4xl font-light text-[#212529] md:text-6xl">
              Architecte d&apos;intérieur {titleLocation}
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <div className="mx-auto max-w-3xl">
              <p className="font-sans text-base leading-relaxed text-[#212529]/80">
                {city.description}
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-[#d5cabe]/30 bg-[#f0efec] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-light text-[#212529] md:text-4xl">
              Prestations {titleLocation}
            </h2>
            {city.distance && (
              <p className="mt-4 font-sans text-sm text-[#212529]/60">
                Basée à Colmar ({city.distance}), Sonia se déplace {titleLocation} pour chaque étape de votre projet.
              </p>
            )}
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Rénovation complète",
                  text: "Du diagnostic initial aux finitions, prise en charge intégrale de votre rénovation avec suivi de chantier.",
                },
                {
                  title: "Décoration intérieure",
                  text: "Choix des matériaux, couleurs, mobilier et éclairage pour un intérieur cohérent et personnel.",
                },
                {
                  title: "Aménagement sur mesure",
                  text: "Conception de plans d'aménagement optimisés, cuisines, salles de bain, dressings.",
                },
                {
                  title: "Home staging",
                  text: "Mise en valeur de votre bien pour la vente : valoriser les volumes et neutraliser l'espace.",
                },
              ].map((service) => (
                <div key={service.title}>
                  <h3 className="font-heading text-xl font-light text-[#212529]">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#212529]/60">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Pourquoi Sonia */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-light text-[#212529] md:text-4xl">
              Pourquoi choisir Sonia Ayer {titleLocation} ?
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mt-12 grid gap-12 md:grid-cols-3">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#7f6145]">
                  01
                </p>
                <h3 className="mt-3 font-heading text-xl font-light text-[#212529]">
                  Expertise terrain
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#212529]/60">
                  Formée à l'architecture d'intérieur et active en Alsace depuis
                  plusieurs années, Sonia connaît les spécificités du bâti local,
                  les artisans de confiance et les contraintes réglementaires de
                  la région.
                </p>
              </div>
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#7f6145]">
                  02
                </p>
                <h3 className="mt-3 font-heading text-xl font-light text-[#212529]">
                  Proximité
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#212529]/60">
                  {city.distance
                    ? `Basée à Colmar, à seulement ${city.distance} de ${city.name}, Sonia assure un suivi de chantier régulier avec des visites fréquentes sur site.`
                    : `Basée à Colmar, Sonia se déplace sur l'ensemble du territoire pour les projets qui le justifient, avec un planning de visites adapté.`}
                </p>
              </div>
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#7f6145]">
                  03
                </p>
                <h3 className="mt-3 font-heading text-xl font-light text-[#212529]">
                  Vue sur M6
                </h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#212529]/60">
                  Sélectionnée pour l'émission Mission Travaux sur M6 en prime
                  time, Sonia a prouvé sa capacité à reprendre des chantiers
                  complexes et à les mener à bien dans les délais.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Testimonial Placeholder */}
      <section className="border-t border-[#d5cabe]/30 bg-[#f0efec] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionReveal>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#7f6145]/40">
              Témoignages clients à venir
            </p>
            <div className="mx-auto mt-6 h-px w-12 bg-[#d5cabe]/40" />
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-light text-[#212529] md:text-4xl">
              Discuter de votre projet {titleLocation}
            </h2>
            <p className="mx-auto mt-4 max-w-lg font-sans text-base text-[#212529]/60">
              Premier échange gratuit et sans engagement pour comprendre votre
              besoin et vous proposer un accompagnement adapté.
            </p>
            <div className="mt-10">
              <MagneticButton href="/contact">
                Discuter de votre projet {preposition} {city.name}
              </MagneticButton>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Internal Links */}
      <section className="border-t border-[#d5cabe]/30 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <div className="flex flex-col gap-8 md:flex-row md:justify-between">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#7f6145]">
                  En savoir plus
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <Link
                    href="/prestations"
                    className="font-sans text-sm text-[#212529]/60 underline underline-offset-4 transition-colors hover:text-[#7f6145]"
                  >
                    Prestations
                  </Link>
                  <Link
                    href="/realisations"
                    className="font-sans text-sm text-[#212529]/60 underline underline-offset-4 transition-colors hover:text-[#7f6145]"
                  >
                    Réalisations
                  </Link>
                </div>
              </div>

              {nearby.length > 0 && (
                <div>
                  <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#7f6145]">
                    Nous intervenons aussi à
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    {nearby.map((c) =>
                      c ? (
                        <Link
                          key={c.slug}
                          href={`/architecte-interieur-${c.slug}`}
                          className="font-sans text-sm text-[#212529]/60 underline underline-offset-4 transition-colors hover:text-[#7f6145]"
                        >
                          {c.name}
                        </Link>
                      ) : null
                    )}
                  </div>
                </div>
              )}
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
