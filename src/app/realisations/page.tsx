import type { Metadata } from "next";
import { SectionReveal } from "@/components/SectionReveal";
import { MagneticButton } from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Realisations",
  description:
    "Projets d'architecture d'interieur realises par Sonia Ayer a Colmar et en Alsace. Appartements, maisons, lofts et villas.",
};

const projects = [
  { name: "Appartement Colmar Centre", location: "Colmar" },
  { name: "Maison Kaysersberg", location: "Kaysersberg" },
  { name: "Loft Strasbourg", location: "Strasbourg" },
  { name: "Villa Rouffach", location: "Rouffach" },
  { name: "Duplex Selestat", location: "Selestat" },
  { name: "Appartement Mulhouse", location: "Mulhouse" },
];

export default function RealisationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 pt-40 pb-20 lg:pt-48 lg:pb-28">
        <h1 className="font-heading text-6xl font-light text-[#212529] lg:text-7xl">
          Nos realisations
        </h1>
        <p className="mt-4 font-sans text-sm font-light uppercase tracking-[0.2em] text-[#212529]/50">
          Chaque espace raconte une histoire
        </p>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <SectionReveal key={project.name} delay={index * 0.1}>
              <div className="group relative cursor-pointer overflow-hidden">
                <div className="aspect-[3/4] w-full bg-secondary transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-[#212529]/0 pb-8 transition-all duration-500 group-hover:bg-[#212529]/40">
                  <span className="translate-y-4 font-heading text-xl font-light text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 lg:text-2xl">
                    {project.name}
                  </span>
                  <span className="translate-y-4 font-sans text-[10px] font-light uppercase tracking-[0.2em] text-white/70 opacity-0 transition-all duration-500 delay-75 group-hover:translate-y-0 group-hover:opacity-100">
                    {project.location}
                  </span>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <SectionReveal className="flex flex-col items-center px-6 py-20 lg:py-28">
        <h2 className="font-heading text-3xl font-light text-[#212529] lg:text-4xl">
          Votre projet pourrait etre le prochain
        </h2>
        <div className="mt-8">
          <MagneticButton href="/contact">
            Discutons en
          </MagneticButton>
        </div>
      </SectionReveal>
    </div>
  );
}
