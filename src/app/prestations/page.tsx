import type { Metadata } from "next";
import { SectionReveal } from "@/components/SectionReveal";
import { MagneticButton } from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Prestations",
  description:
    "Prestations d'architecture d'interieur a Colmar : renovation, decoration, amenagement, home staging et conseil. De la conception a la realisation.",
};

const services = [
  {
    name: "Architecture d'interieur",
    description:
      "On reprend l'espace de zero. Plans, visualisations 3D, choix des materiaux, coordination des artisans. Que ce soit un appartement, une maison ou un local professionnel, on dessine l'ensemble et on suit le chantier jusqu'a la livraison.",
  },
  {
    name: "Decoration d'interieur",
    description:
      "Le mobilier, les couleurs, les textiles, l'eclairage, les objets. On compose un interieur qui vous ressemble, en travaillant avec des fournisseurs et des artisans qu'on connait bien. Tout est choisi pour fonctionner ensemble, pas empile au hasard.",
  },
  {
    name: "Renovation",
    description:
      "On gere le projet de renovation de A a Z. Planification, budget, coordination des corps de metier, suivi du calendrier. On travaille avec des artisans de confiance en Alsace, et on veille a ce que le resultat soit a la hauteur du projet initial.",
  },
  {
    name: "Conseil & Accompagnement",
    description:
      "Vous preferez gerer votre projet vous meme, mais vous aimeriez un regard professionnel pour demarrer ? On propose des seances de conseil ponctuelles : on echange sur vos plans, vos envies, et on vous donne des pistes concretes pour avancer.",
  },
  {
    name: "Home staging",
    description:
      "Preparer un bien a la vente pour qu'il parle aux acheteurs. On desencombre, on reorganise, on met en valeur les volumes et la lumiere. L'objectif est simple : que les visiteurs se projettent des la porte d'entree.",
  },
];

export default function PrestationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 pt-40 pb-20 lg:pt-48 lg:pb-28">
        <h1 className="font-heading text-6xl font-light text-[#212529] lg:text-7xl">
          Nos prestations
        </h1>
        <p className="mt-4 font-sans text-sm font-light uppercase tracking-[0.2em] text-[#212529]/50">
          De la conception a la realisation
        </p>
      </section>

      {/* Services */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {services.map((service, index) => (
          <SectionReveal key={service.name}>
            <section
              className={`grid gap-8 py-16 md:grid-cols-2 md:gap-16 lg:py-20 ${
                index < services.length - 1 ? "border-b border-[#d5cabe]" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <h2 className="font-heading text-3xl font-light text-[#212529] lg:text-4xl">
                  {service.name}
                </h2>
                <p className="mt-6 max-w-lg font-sans text-[15px] font-light leading-relaxed text-[#212529]/70">
                  {service.description}
                </p>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div className="aspect-[4/3] w-full bg-secondary" />
              </div>
            </section>
          </SectionReveal>
        ))}
      </div>

      {/* CTA */}
      <SectionReveal className="flex flex-col items-center px-6 py-20 lg:py-28">
        <h2 className="font-heading text-3xl font-light text-[#212529] lg:text-4xl">
          Un projet en tete ?
        </h2>
        <p className="mt-4 max-w-md text-center font-sans text-[14px] font-light leading-relaxed text-[#212529]/60">
          Parlons en autour d&apos;un cafe, ou par telephone.
          Chaque projet commence par une discussion.
        </p>
        <div className="mt-8">
          <MagneticButton href="/contact">
            Prendre contact
          </MagneticButton>
        </div>
      </SectionReveal>
    </div>
  );
}
