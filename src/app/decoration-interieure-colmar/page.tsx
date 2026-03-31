import type { Metadata } from "next";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";
import { MagneticButton } from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Décoration intérieure à Colmar",
  description:
    "Décoration intérieure à Colmar avec Sonia Ayer, architecte d'intérieur. Choix des matériaux, couleurs, mobilier et éclairage pour un intérieur qui vous ressemble.",
  openGraph: {
    title: "Décoration intérieure à Colmar | Sonia Ayer",
    description:
      "Décoration intérieure à Colmar. Sonia Ayer conçoit des ambiances personnalisées, du conseil couleur à l'ameublement complet.",
  },
};

export default function DecorationInterieureColmar() {
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
              Décoration intérieure à Colmar
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <SectionReveal>
            <p className="font-sans text-base leading-relaxed text-[#212529]/80">
              La décoration, ce n'est pas coller des tendances Pinterest sur les
              murs. C'est comprendre comment vous vivez chez vous, ce qui vous
              plaît sans que vous sachiez l'expliquer, et traduire tout ça en
              choix concrets : couleurs, tissus, luminaires, meubles, objets. Le
              travail de Sonia Ayer en décoration intérieure à Colmar part
              toujours d'une conversation, jamais d'un catalogue.
            </p>
            <p className="mt-6 font-sans text-base leading-relaxed text-[#212529]/80">
              Que vous veniez d'emménager dans un appartement vide ou que vous
              ayez envie de tout changer après dix ans dans le même décor, Sonia
              intervient à la carte. Certains clients veulent juste un conseil
              couleur et un plan d'implantation du mobilier. D'autres demandent
              une prise en charge complète, jusqu'à la pose du dernier rideau.
              Les deux fonctionnent.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* What's Included */}
      <section className="border-t border-[#d5cabe]/30 bg-[#f0efec] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-light text-[#212529] md:text-4xl">
              Ce que comprend une prestation de décoration
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Analyse de l'existant",
                  text: "Visite sur place, échange sur vos goûts, votre mode de vie, votre budget. Sonia observe les volumes, la lumière, les contraintes avant de proposer quoi que ce soit.",
                },
                {
                  title: "Palette et ambiance",
                  text: "Définition des couleurs, des matières et de l'atmosphère générale. Planches tendances personnalisées pour valider la direction avant d'acheter le moindre objet.",
                },
                {
                  title: "Mobilier et éclairage",
                  text: "Sélection de meubles, luminaires et accessoires adaptés à votre espace et votre budget. Sonia travaille avec des fournisseurs professionnels et des artisans locaux.",
                },
                {
                  title: "Textiles et finitions",
                  text: "Rideaux, coussins, tapis, revêtements muraux. Ce sont les détails qui donnent une personnalité à un intérieur, et c'est souvent ce que les gens négligent en premier.",
                },
                {
                  title: "Mise en place",
                  text: "Coordination des livraisons, installation du mobilier, ajustements de dernière minute. Vous entrez dans un intérieur fini, pas dans un chantier en cours.",
                },
                {
                  title: "Conseil ponctuel",
                  text: "Pas besoin d'un projet complet pour faire appel à Sonia. Un rendez vous de conseil suffit parfois pour débloquer une pièce qui ne fonctionne pas.",
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

      {/* Approach */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-light text-[#212529] md:text-4xl">
              Une approche personnelle, pas un style imposé
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-[#212529]/80">
              Sonia ne décore pas tous les intérieurs de la même façon. Elle
              n'a pas de « signature » qu'elle applique partout. Ce qui
              l'intéresse, c'est de trouver le style qui correspond à chaque
              client, à chaque lieu. Un appartement dans le vieux Colmar n'a
              rien à voir avec une maison récente au Ladhof, et les personnes
              qui y vivent non plus.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-[#212529]/80">
              L'avantage de travailler avec une architecte d'intérieur pour la
              décoration, c'est la cohérence du résultat. Les couleurs dialoguent
              entre les pièces, l'éclairage est pensé pour chaque usage, le
              mobilier respecte les circulations. Ce sont des détails techniques
              qui font la différence entre un intérieur « joli » et un intérieur
              où on se sent vraiment bien.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#d5cabe]/30 bg-[#f0efec] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-light text-[#212529] md:text-4xl">
              Envie de changer d'intérieur ?
            </h2>
            <p className="mx-auto mt-4 max-w-lg font-sans text-base text-[#212529]/60">
              Un premier échange suffit pour définir les contours de votre
              projet de décoration.
            </p>
            <div className="mt-10">
              <MagneticButton href="/contact">
                Prendre rendez vous
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
                href="/amenagement-cuisine-colmar"
                className="font-sans text-sm text-[#212529]/60 underline underline-offset-4 transition-colors hover:text-[#7f6145]"
              >
                Aménagement cuisine à Colmar
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
