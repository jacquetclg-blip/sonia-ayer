import type { Metadata } from "next";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";
import { MagneticButton } from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Rénovation d'appartement à Colmar",
  description:
    "Rénovation d'appartement à Colmar avec Sonia Ayer, architecte d'intérieur. De la conception à la réception des travaux, accompagnement complet pour votre projet de rénovation en Alsace.",
  openGraph: {
    title: "Rénovation d'appartement à Colmar | Sonia Ayer",
    description:
      "Rénovation d'appartement à Colmar. Sonia Ayer, architecte d'intérieur vue sur M6, vous accompagne de A à Z.",
  },
};

export default function RenovationAppartementColmar() {
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
              Rénovation d&apos;appartement à Colmar
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <SectionReveal>
            <p className="font-sans text-base leading-relaxed text-[#212529]/80">
              Le parc d'appartements colmariens est très varié. On y trouve des
              biens dans le centre historique avec des murs en pierre et des
              poutres apparentes, des immeubles du XIXe siècle aux volumes
              généreux, et des constructions plus récentes dans les quartiers
              résidentiels. Chacun de ces cas demande une approche de rénovation
              différente, et c'est là que l'accompagnement d'une architecte
              d'intérieur change tout.
            </p>
            <p className="mt-6 font-sans text-base leading-relaxed text-[#212529]/80">
              Sonia Ayer intervient sur des projets de rénovation d'appartement
              à Colmar depuis plusieurs années. Elle connaît les syndics locaux,
              les contraintes de copropriété, les artisans fiables du secteur.
              Son rôle ne se limite pas aux plans et aux choix de couleurs :
              elle coordonne l'ensemble du chantier pour que vous n'ayez pas
              à gérer dix interlocuteurs différents.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-[#d5cabe]/30 bg-[#f0efec] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-light text-[#212529] md:text-4xl">
              Comment se passe une rénovation
            </h2>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Visite et diagnostic",
                  text: "Analyse de l'existant, relevé des contraintes techniques, écoute de vos besoins et de votre budget. Tout part de là.",
                },
                {
                  step: "02",
                  title: "Conception",
                  text: "Plans d'aménagement, vues 3D, choix des matériaux et du mobilier. Vous validez chaque étape avant de passer à la suivante.",
                },
                {
                  step: "03",
                  title: "Coordination des travaux",
                  text: "Sonia sélectionne les artisans, planifie les interventions et suit le chantier. Vous avez un seul interlocuteur.",
                },
                {
                  step: "04",
                  title: "Réception",
                  text: "Vérification de chaque détail, levée des réserves si nécessaire, remise des clés. L'appartement est prêt.",
                },
              ].map((item) => (
                <div key={item.step}>
                  <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#7f6145]">
                    {item.step}
                  </p>
                  <h3 className="mt-3 font-heading text-xl font-light text-[#212529]">
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

      {/* Why an Architect */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <SectionReveal>
              <h2 className="font-heading text-3xl font-light text-[#212529] md:text-4xl">
                Pourquoi faire appel à une architecte d'intérieur pour rénover
              </h2>
              <p className="mt-6 font-sans text-base leading-relaxed text-[#212529]/80">
                Beaucoup de propriétaires commencent leur rénovation seuls, puis
                se retrouvent dépassés quand les imprévus s'accumulent. Un mur
                porteur mal identifié, des délais qui s'allongent, un budget qui
                dérape. L'architecte d'intérieur anticipe ces problèmes parce
                que c'est son métier au quotidien.
              </p>
              <p className="mt-4 font-sans text-base leading-relaxed text-[#212529]/80">
                Concrètement, vous gagnez du temps, vous évitez les erreurs
                coûteuses, et vous obtenez un résultat cohérent. Ce n'est pas
                une question de luxe, c'est une question de méthode.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="border-l-2 border-[#7f6145] pl-8">
                <h3 className="font-heading text-xl font-light text-[#212529]">
                  L'expérience Mission Travaux
                </h3>
                <p className="mt-4 font-sans text-base leading-relaxed text-[#212529]/80">
                  Sur M6, dans l'émission Mission Travaux, Sonia a repris des
                  chantiers de rénovation qui avaient complètement déraillé.
                  Des familles qui attendaient depuis des mois dans des
                  appartements inachevés. Cette expérience télévisée a confirmé
                  ce qu'elle applique au quotidien : un bon suivi de chantier
                  fait toute la différence entre une rénovation qui aboutit et
                  une rénovation qui s'enlise.
                </p>
                <Link
                  href="/presse"
                  className="mt-4 inline-block font-sans text-sm text-[#7f6145] underline underline-offset-4"
                >
                  Voir la page presse
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#d5cabe]/30 bg-[#f0efec] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-light text-[#212529] md:text-4xl">
              Votre appartement mérite mieux
            </h2>
            <p className="mx-auto mt-4 max-w-lg font-sans text-base text-[#212529]/60">
              Premier rendez vous gratuit pour discuter de votre projet de
              rénovation à Colmar.
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
                href="/decoration-interieure-colmar"
                className="font-sans text-sm text-[#212529]/60 underline underline-offset-4 transition-colors hover:text-[#7f6145]"
              >
                Décoration intérieure à Colmar
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
