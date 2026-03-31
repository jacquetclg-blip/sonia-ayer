import type { Metadata } from "next";
import Image from "next/image";
import { SectionReveal } from "@/components/SectionReveal";
import { MagneticButton } from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "L'agence",
  description:
    "Sonia Ayer, architecte d'interieur a Colmar en Alsace. Parcours, valeurs et approche d'une agence dediee a la creation d'espaces sur mesure.",
};

export default function AgencePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 pt-40 pb-20 lg:pt-48 lg:pb-28">
        <h1 className="font-heading text-6xl font-light text-[#212529] lg:text-7xl">
          L&apos;agence
        </h1>
        <p className="mt-4 font-sans text-sm font-light uppercase tracking-[0.2em] text-[#212529]/50">
          Architecture d&apos;interieur a Colmar
        </p>
      </section>

      {/* Portrait hero image */}
      <SectionReveal className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="relative aspect-[16/7] w-full overflow-hidden">
          <Image
            src="/images/agence/sonia-portrait.jpg"
            alt="Sonia Ayer, architecte d'intérieur à Colmar"
            fill
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
            priority
            sizes="(max-width: 1400px) 100vw, 1400px"
          />
        </div>
      </SectionReveal>

      {/* Bio */}
      <SectionReveal className="mx-auto max-w-[800px] px-6 py-20 lg:py-28">
        <h2 className="font-heading text-3xl font-light text-[#212529] lg:text-4xl">
          Sonia Ayer
        </h2>
        <div className="mt-8 space-y-6 font-sans text-[15px] font-light leading-relaxed text-[#212529]/80">
          <p>
            Sonia a commence par se former en architecture d&apos;interieur, puis elle a eu la chance de travailler
            aux cotes d&apos;un designer reconnu, intervenant regulier sur France 5. C&apos;est la qu&apos;elle a
            vraiment appris le metier, au contact de quelqu&apos;un qui ne faisait aucun compromis sur les proportions,
            les matieres, la lumiere. Ce genre de formation ne s&apos;oublie pas.
          </p>
          <p>
            Elle a ensuite rejoint les Galeries Lafayette pour le merchandising visuel, ou elle a developpe un oeil
            pour la mise en scene et la composition dans des espaces commerciaux. Puis est venue la gestion de projets
            dans un cabinet d&apos;architecture a Strasbourg, avec tout ce que cela implique : les plans, les artisans,
            les delais, les budgets. Le genre de quotidien qui vous apprend a garder la tete froide.
          </p>
          <p>
            Tout ce parcours l&apos;a conduite a ouvrir sa propre agence a Colmar. Aujourd&apos;hui, elle y
            accompagne des particuliers et des professionnels qui veulent transformer leurs espaces de vie ou de travail.
            Pas de recette toute faite, pas de copier coller : chaque projet part de zero, de la personne qui va
            habiter l&apos;espace.
          </p>
        </div>
      </SectionReveal>

      {/* Portrait gallery */}
      <SectionReveal className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/agence/sonia-portrait.jpg"
              alt="Sonia Ayer dans son agence à Colmar"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/agence/img4437.jpg"
              alt="Sonia Ayer architecte d'intérieur"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </SectionReveal>

      {/* Values */}
      <section className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12 lg:py-28">
        <SectionReveal>
          <h2 className="font-heading text-3xl font-light text-[#212529] lg:text-4xl">
            Ce qui compte pour nous
          </h2>
        </SectionReveal>

        <div className="mt-16 grid gap-16 md:grid-cols-3 md:gap-12">
          <SectionReveal delay={0}>
            <h3 className="font-heading text-2xl font-light text-[#212529]">
              L&apos;ecoute
            </h3>
            <p className="mt-4 font-sans text-[14px] font-light leading-relaxed text-[#212529]/70">
              Un projet reussi, ca commence toujours par une conversation. Comprendre comment vous vivez,
              ce qui vous plait, ce qui vous gene dans votre espace actuel. On prend le temps qu&apos;il faut
              pour ca, parce que le reste en decoule.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <h3 className="font-heading text-2xl font-light text-[#212529]">
              La creativite
            </h3>
            <p className="mt-4 font-sans text-[14px] font-light leading-relaxed text-[#212529]/70">
              Chaque interieur est different et chaque client aussi. On ne plaque pas un style sur un espace,
              on cherche ce qui va fonctionner ici, pour vous. Parfois c&apos;est une couleur, un materiau,
              un detail qu&apos;on n&apos;aurait pas imagine au depart.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <h3 className="font-heading text-2xl font-light text-[#212529]">
              L&apos;exigence
            </h3>
            <p className="mt-4 font-sans text-[14px] font-light leading-relaxed text-[#212529]/70">
              Le souci du detail, c&apos;est ce qui fait la difference entre un espace correct et un espace
              dans lequel on se sent vraiment bien. Les finitions, les alignements, les textures, la facon
              dont la lumiere tombe a telle heure. Rien n&apos;est laisse au hasard.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <SectionReveal className="flex flex-col items-center px-6 py-20 lg:py-28">
        <h2 className="font-heading text-3xl font-light text-[#212529] lg:text-4xl">
          Envie d&apos;en discuter ?
        </h2>
        <div className="mt-8">
          <MagneticButton href="/contact">
            Nous contacter
          </MagneticButton>
        </div>
      </SectionReveal>
    </div>
  );
}
