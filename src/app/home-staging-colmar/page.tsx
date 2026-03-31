import type { Metadata } from "next";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";
import { MagneticButton } from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Home staging à Colmar",
  description:
    "Home staging à Colmar avec Sonia Ayer, architecte d'intérieur. Mise en valeur de votre bien immobilier pour vendre plus vite et au meilleur prix.",
  openGraph: {
    title: "Home staging à Colmar | Sonia Ayer",
    description:
      "Home staging à Colmar. Sonia Ayer prépare votre bien pour la vente : valorisation des volumes, neutralisation du décor, photos pro.",
  },
};

export default function HomeStagingColmar() {
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
              Home staging à Colmar
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <SectionReveal>
            <p className="font-sans text-base leading-relaxed text-[#212529]/80">
              Vendre un bien immobilier à Colmar, c'est d'abord une question de
              première impression. Les acheteurs se décident dans les 90
              premières secondes de la visite, et souvent avant même de pousser
              la porte, sur les photos de l'annonce. Le home staging permet de
              présenter votre bien sous son meilleur jour sans engager de gros
              travaux.
            </p>
            <p className="mt-6 font-sans text-base leading-relaxed text-[#212529]/80">
              Sonia Ayer pratique le home staging à Colmar avec un oeil
              d'architecte d'intérieur. Elle ne se contente pas de ranger et de
              mettre un bouquet de fleurs sur la table. Elle restructure
              visuellement l'espace, neutralise la décoration personnelle,
              optimise la lumière et crée une ambiance dans laquelle les
              acquéreurs potentiels se projettent facilement.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* What's included */}
      <section className="border-t border-[#d5cabe]/30 bg-[#f0efec] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-light text-[#212529] md:text-4xl">
              Ce que comprend la prestation
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Diagnostic du bien",
                  text: "Visite complète avec identification des points forts à valoriser et des défauts à atténuer. Liste des actions à mener, hiérarchisées par impact.",
                },
                {
                  title: "Dépersonnalisation",
                  text: "Retrait des éléments trop personnels (photos de famille, collections, décor marqué) pour permettre aux visiteurs de se projeter dans l'espace.",
                },
                {
                  title: "Réagencement du mobilier",
                  text: "Repositionnement des meubles pour dégager les circulations, agrandir visuellement les pièces et créer des espaces de vie lisibles.",
                },
                {
                  title: "Accessoirisation",
                  text: "Ajout de textiles, objets et plantes sélectionnés pour créer une ambiance neutre mais chaleureuse. Sonia utilise son propre stock de décoration.",
                },
                {
                  title: "Petits travaux",
                  text: "Retouches de peinture, réparation des petits défauts visibles, changement de poignées ou de luminaires. Des investissements minimes qui changent la perception du bien.",
                },
                {
                  title: "Mise en scène photo",
                  text: "Préparation du bien pour la séance photo de l'annonce. Les photos immobilières de qualité attirent en moyenne trois fois plus de clics.",
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

      {/* Why it works */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <SectionReveal>
              <h2 className="font-heading text-3xl font-light text-[#212529] md:text-4xl">
                Pourquoi le home staging fonctionne
              </h2>
              <p className="mt-6 font-sans text-base leading-relaxed text-[#212529]/80">
                Les chiffres sont clairs : un bien « stagé » se vend en moyenne
                deux fois plus vite qu'un bien présenté tel quel. La raison est
                simple. Les acheteurs visitent souvent plusieurs biens le même
                jour. Celui qui leur reste en tête, c'est celui où ils se sont
                sentis « chez eux » immédiatement. Le home staging fabrique
                cette sensation.
              </p>
              <p className="mt-4 font-sans text-base leading-relaxed text-[#212529]/80">
                L'investissement est faible par rapport au prix de vente. On
                parle en général de 1 à 3 % de la valeur du bien. Et les
                résultats sont mesurables : moins de négociation, moins de
                temps sur le marché, plus de visites converties.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="space-y-8">
                <div className="border-l-2 border-[#7f6145] pl-8">
                  <p className="font-heading text-4xl font-light text-[#7f6145]">
                    2x
                  </p>
                  <p className="mt-2 font-sans text-sm text-[#212529]/60">
                    plus vite en moyenne pour la vente d'un bien après home
                    staging
                  </p>
                </div>
                <div className="border-l-2 border-[#7f6145] pl-8">
                  <p className="font-heading text-4xl font-light text-[#7f6145]">
                    90 sec
                  </p>
                  <p className="mt-2 font-sans text-sm text-[#212529]/60">
                    le temps moyen pour qu'un acheteur se fasse une opinion lors
                    d'une visite
                  </p>
                </div>
                <div className="border-l-2 border-[#7f6145] pl-8">
                  <p className="font-heading text-4xl font-light text-[#7f6145]">
                    3x
                  </p>
                  <p className="mt-2 font-sans text-sm text-[#212529]/60">
                    plus de clics sur les annonces avec des photos
                    professionnelles
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* M6 tie-in */}
      <section className="border-t border-[#d5cabe]/30 bg-[#f0efec] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <SectionReveal>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#7f6145]">
              Vue sur M6
            </p>
            <h2 className="mt-4 font-heading text-3xl font-light text-[#212529] md:text-4xl">
              L'oeil d'une professionnelle passée par la télé
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-[#212529]/80">
              Dans Mission Travaux sur M6, Sonia a vu des biens dans un état
              que peu d'acheteurs auraient accepté de visiter. Cette expérience
              lui a appris à identifier très vite ce qui fonctionne et ce qui
              bloque dans la perception d'un espace. Le home staging utilise
              les mêmes réflexes, à une échelle plus légère : transformer la
              façon dont un bien est perçu sans forcément tout casser et tout
              refaire.
            </p>
            <Link
              href="/presse"
              className="mt-4 inline-block font-sans text-sm text-[#7f6145] underline underline-offset-4"
            >
              Voir la page presse
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-light text-[#212529] md:text-4xl">
              Vous vendez un bien à Colmar ?
            </h2>
            <p className="mx-auto mt-4 max-w-lg font-sans text-base text-[#212529]/60">
              Contactez Sonia pour un diagnostic gratuit de votre bien avant la
              mise en vente.
            </p>
            <div className="mt-10">
              <MagneticButton href="/contact">
                Demander un diagnostic
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
