import type { Metadata } from "next";
import Link from "next/link";
import { SectionReveal } from "@/components/SectionReveal";
import { MagneticButton } from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Presse & Médias",
  description:
    "Sonia Ayer, architecte d'intérieur à Colmar, vue sur M6 dans l'émission Mission Travaux en prime time. Découvrez ses apparitions TV et ses mentions presse.",
  openGraph: {
    title: "Presse & Médias | Sonia Ayer",
    description:
      "Sonia Ayer, architecte d'intérieur à Colmar, sélectionnée pour l'émission Mission Travaux sur M6. Couverture médiatique et apparitions TV.",
  },
};

export default function PressePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="border-b border-[#d5cabe]/30 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#7f6145]">
              Médias
            </p>
            <h1 className="mt-4 font-heading text-5xl font-light text-[#212529] md:text-7xl">
              Presse & Médias
            </h1>
          </SectionReveal>
        </div>
      </section>

      {/* Mission Travaux Featured Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <div className="mb-12">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#7f6145]">
                Vu sur M6 en prime time
              </p>
              <h2 className="mt-4 font-heading text-4xl font-light text-[#212529] md:text-6xl lg:text-7xl">
                Mission Travaux sur M6
              </h2>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            {/* Video/Image Placeholder */}
            <div className="aspect-video w-full bg-[#d5cabe]/20 flex items-center justify-center">
              <div className="text-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7f6145"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-auto mb-4"
                >
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                  <polyline points="17 2 12 7 7 2" />
                </svg>
                <p className="font-sans text-sm uppercase tracking-[0.2em] text-[#7f6145]/60">
                  Vidéo de l'émission
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="mt-16 grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <p className="font-sans text-base leading-relaxed text-[#212529]/80">
                  Quand M6 m'a contactée pour participer à Mission Travaux, j'ai
                  tout de suite dit oui. Le principe de l'émission me parlait
                  profondément : des familles coincées dans des chantiers qui
                  n'en finissent plus, des artisans qui ont disparu, des budgets
                  explosés. Ce sont exactement les situations que je rencontre au
                  quotidien dans mon métier. La seule différence, c'est que cette
                  fois, les caméras tournaient.
                </p>
                <p className="font-sans text-base leading-relaxed text-[#212529]/80">
                  Ce que je retiens surtout de cette expérience, c'est le travail
                  d'équipe. Reprendre un chantier à l'arrêt, c'est un exercice
                  technique, mais c'est aussi un exercice humain. Il faut
                  comprendre ce qui s'est passé, poser un diagnostic honnête, et
                  reconstruire la confiance avec les familles qui ont parfois
                  attendu des mois dans un logement inachevé. Voir leur
                  soulagement quand tout est enfin terminé, c'est la partie qui
                  me motive le plus.
                </p>
                <p className="font-sans text-base leading-relaxed text-[#212529]/80">
                  L'émission a aussi confirmé quelque chose que je savais déjà :
                  la plupart des problèmes de chantier viennent d'un manque
                  d'accompagnement au départ. Pas d'un manque de budget, pas de
                  mauvaise volonté. Juste un projet lancé sans la bonne
                  méthode. C'est exactement pour ça que j'accompagne mes
                  clients du premier croquis jusqu'à la remise des clés.
                </p>
              </div>

              <div className="flex items-start">
                <blockquote className="border-l-2 border-[#7f6145] pl-8">
                  <p className="font-heading text-2xl font-light italic leading-relaxed text-[#212529] md:text-3xl">
                    &laquo;&nbsp;Reprendre un chantier abandonné, ce n'est pas
                    juste de la technique. C'est redonner à une famille le droit
                    de se sentir chez elle.&nbsp;&raquo;
                  </p>
                  <footer className="mt-6 font-sans text-sm uppercase tracking-[0.2em] text-[#7f6145]">
                    Sonia Ayer
                  </footer>
                </blockquote>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Other Press Mentions */}
      <section className="border-t border-[#d5cabe]/30 bg-[#f0efec] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-light text-[#212529] md:text-4xl">
              Autres mentions presse
            </h2>
            <p className="mt-4 font-sans text-sm text-[#212529]/60">
              Articles et couverture médiatique à venir.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="border border-[#d5cabe]/40 bg-white p-8"
                >
                  <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#7f6145]/40">
                    À venir
                  </p>
                  <div className="mt-4 h-px w-12 bg-[#d5cabe]/40" />
                  <p className="mt-4 font-sans text-sm text-[#212529]/40">
                    Mention presse
                  </p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <SectionReveal>
            <h2 className="font-heading text-3xl font-light text-[#212529] md:text-4xl">
              Un projet de rénovation ?
            </h2>
            <p className="mx-auto mt-4 max-w-lg font-sans text-base text-[#212529]/60">
              Que votre chantier soit en cours ou à lancer, Sonia vous
              accompagne de A à Z.
            </p>
            <div className="mt-10">
              <MagneticButton href="/contact">
                Contactez Sonia
              </MagneticButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
