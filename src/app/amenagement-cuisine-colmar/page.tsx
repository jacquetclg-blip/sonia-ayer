import type { Metadata } from "next";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";
import { MagneticButton } from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Aménagement cuisine sur mesure à Colmar",
  description:
    "Aménagement de cuisine sur mesure à Colmar avec Sonia Ayer, architecte d'intérieur. Conception, plans, choix des matériaux et suivi de chantier pour votre cuisine.",
  openGraph: {
    title: "Aménagement cuisine sur mesure à Colmar | Sonia Ayer",
    description:
      "Cuisine sur mesure à Colmar. Sonia Ayer conçoit et coordonne votre projet d'aménagement cuisine de A à Z.",
  },
};

export default function AmenagementCuisineColmar() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="border-b border-[#d5cabe]/30 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#7f6145]">
              Colmar 68000
            </p>
            <h1 className="mt-4 font-heading text-4xl font-light text-[#212529] md:text-6xl">
              Aménagement cuisine sur mesure à Colmar
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <SectionReveal>
            <p className="font-sans text-base leading-relaxed text-[#212529]/80">
              La cuisine, c'est la pièce où les erreurs d'aménagement se
              paient au quotidien. Un plan de travail mal placé, des rangements
              inaccessibles, un éclairage insuffisant : on vit avec pendant des
              années. Sonia Ayer conçoit des cuisines sur mesure à Colmar en
              partant de vos habitudes de vie, pas d'un modèle standard.
            </p>
            <p className="mt-6 font-sans text-base leading-relaxed text-[#212529]/80">
              Chaque cuisine est différente parce que chaque famille cuisine
              différemment. Certains veulent un îlot central pour recevoir.
              D'autres ont besoin de rangements optimisés dans 8 m². D'autres
              encore rêvent d'ouvrir leur cuisine sur le salon. Sonia écoute,
              mesure, dessine, et propose un aménagement qui tient compte de la
              réalité du lieu et de votre budget.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-[#d5cabe]/30 bg-[#f0efec] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-light text-[#212529] md:text-4xl">
              Un projet cuisine, étape par étape
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Relevé et diagnostic",
                  text: "Prise de mesures précises, analyse des contraintes (arrivées d'eau, électricité, ventilation), identification des possibilités de réagencement.",
                },
                {
                  title: "Conception du plan",
                  text: "Implantation optimisée en fonction de vos usages. Triangle d'activité, circulations, rangements. Vues 3D pour visualiser le résultat avant travaux.",
                },
                {
                  title: "Choix des matériaux",
                  text: "Façades, plan de travail, crédence, robinetterie, électroménager. Sonia vous oriente vers les bons rapports qualité prix selon votre budget.",
                },
                {
                  title: "Coordination artisans",
                  text: "Plombier, électricien, cuisiniste, carreleur : Sonia coordonne les interventions pour que le chantier avance sans accroc.",
                },
                {
                  title: "Éclairage et finitions",
                  text: "L'éclairage d'une cuisine se réfléchit en trois zones : plan de travail, ambiance générale, mise en valeur. Les finitions font le reste.",
                },
                {
                  title: "Réception",
                  text: "Vérification du fonctionnement de chaque élément, ajustements si nécessaire, votre cuisine est prête à l'emploi.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="font-heading text-xl font-light text-[#212529]">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#212529]/60">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why architect */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-light text-[#212529] md:text-4xl">
              Architecte d'intérieur vs cuisiniste
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-[#212529]/80">
              Un cuisiniste vend des meubles de cuisine. Une architecte
              d'intérieur pense l'espace dans sa globalité. La différence se
              voit surtout quand la cuisine s'ouvre sur le séjour, quand il
              faut casser une cloison, ou quand les contraintes techniques
              compliquent l'implantation standard. Sonia ne représente aucune
              marque, elle est libre de choisir les fournisseurs les mieux
              adaptés à chaque projet.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-[#212529]/80">
              Son expérience sur M6 dans Mission Travaux l'a confrontée à des
              cuisines en plein chantier, des aménagements abandonnés en cours
              de route. Elle sait ce qui peut mal tourner quand un projet
              cuisine n'est pas bien cadré dès le départ. C'est pour ça que
              chaque projet commence par un diagnostic complet avant le premier
              coup de marteau.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#d5cabe]/30 bg-[#f0efec] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-light text-[#212529] md:text-4xl">
              Votre cuisine mérite d'être pensée pour vous
            </h2>
            <p className="mx-auto mt-4 max-w-lg font-sans text-base text-[#212529]/60">
              Premier rendez vous gratuit pour discuter de votre projet de
              cuisine à Colmar.
            </p>
            <div className="mt-10">
              <MagneticButton href="/contact">
                Discuter de votre cuisine
              </MagneticButton>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Internal Links */}
      <section className="border-t border-[#d5cabe]/30 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/prestations"
                className="font-sans text-sm text-[#212529]/60 underline underline-offset-4 transition-colors hover:text-[#7f6145]"
              >
                Toutes les prestations
              </Link>
              <Link
                href="/realisations"
                className="font-sans text-sm text-[#212529]/60 underline underline-offset-4 transition-colors hover:text-[#7f6145]"
              >
                Réalisations
              </Link>
              <Link
                href="/renovation-appartement-colmar"
                className="font-sans text-sm text-[#212529]/60 underline underline-offset-4 transition-colors hover:text-[#7f6145]"
              >
                Rénovation d'appartement à Colmar
              </Link>
              <Link
                href="/decoration-interieure-colmar"
                className="font-sans text-sm text-[#212529]/60 underline underline-offset-4 transition-colors hover:text-[#7f6145]"
              >
                Décoration intérieure à Colmar
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
