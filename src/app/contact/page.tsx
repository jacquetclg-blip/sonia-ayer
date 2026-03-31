"use client";

import { SectionReveal } from "@/components/SectionReveal";
import { MagneticButton } from "@/components/MagneticButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Note: metadata must be exported from a server component.
// For a client component page, move metadata to a separate layout.tsx if needed.

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center px-6 pt-40 pb-20 lg:pt-48 lg:pb-28">
        <h1 className="font-heading text-6xl font-light text-[#212529] lg:text-7xl">
          Contact
        </h1>
        <p className="mt-4 font-sans text-sm font-light uppercase tracking-[0.2em] text-[#212529]/50">
          Parlons de votre projet
        </p>
      </section>

      {/* Two columns */}
      <SectionReveal className="mx-auto max-w-[1400px] px-6 pb-20 lg:px-12 lg:pb-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Form */}
          <form
            action="#"
            method="POST"
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="nom"
                className="font-sans text-[11px] font-light uppercase tracking-[0.15em] text-[#212529]/60"
              >
                Nom
              </Label>
              <Input
                id="nom"
                name="nom"
                type="text"
                required
                placeholder="Votre nom"
                className="border-[#d5cabe] bg-transparent font-sans text-sm font-light focus:border-[#7f6145]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label
                htmlFor="email"
                className="font-sans text-[11px] font-light uppercase tracking-[0.15em] text-[#212529]/60"
              >
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="votre@email.com"
                className="border-[#d5cabe] bg-transparent font-sans text-sm font-light focus:border-[#7f6145]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label
                htmlFor="telephone"
                className="font-sans text-[11px] font-light uppercase tracking-[0.15em] text-[#212529]/60"
              >
                Telephone
              </Label>
              <Input
                id="telephone"
                name="telephone"
                type="tel"
                placeholder="06 00 00 00 00"
                className="border-[#d5cabe] bg-transparent font-sans text-sm font-light focus:border-[#7f6145]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label
                htmlFor="type-projet"
                className="font-sans text-[11px] font-light uppercase tracking-[0.15em] text-[#212529]/60"
              >
                Type de projet
              </Label>
              <select
                id="type-projet"
                name="type-projet"
                className="flex h-10 w-full rounded-md border border-[#d5cabe] bg-transparent px-3 py-2 font-sans text-sm font-light text-[#212529] focus:border-[#7f6145] focus:outline-none focus:ring-1 focus:ring-[#7f6145]"
                defaultValue=""
              >
                <option value="" disabled>
                  Choisir...
                </option>
                <option value="renovation">Renovation</option>
                <option value="decoration">Decoration</option>
                <option value="architecture">Architecture d&apos;interieur</option>
                <option value="home-staging">Home staging</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <Label
                htmlFor="message"
                className="font-sans text-[11px] font-light uppercase tracking-[0.15em] text-[#212529]/60"
              >
                Votre message
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Decrivez votre projet en quelques mots..."
                className="border-[#d5cabe] bg-transparent font-sans text-sm font-light focus:border-[#7f6145]"
              />
            </div>

            <div className="mt-2">
              <MagneticButton as="button" type="submit">
                Envoyer
              </MagneticButton>
            </div>
          </form>

          {/* Contact info */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="font-heading text-2xl font-light text-[#212529]">
                Coordonnees
              </h2>
              <div className="flex flex-col gap-4">
                <div>
                  <span className="block font-sans text-[10px] font-light uppercase tracking-[0.2em] text-[#212529]/40">
                    Email
                  </span>
                  <a
                    href="mailto:contact@sonia-ayer.com"
                    className="font-sans text-sm font-light text-[#212529] transition-colors hover:text-[#7f6145]"
                  >
                    contact@sonia-ayer.com
                  </a>
                </div>
                <div>
                  <span className="block font-sans text-[10px] font-light uppercase tracking-[0.2em] text-[#212529]/40">
                    Telephone
                  </span>
                  <a
                    href="tel:+33600000000"
                    className="font-sans text-sm font-light text-[#212529] transition-colors hover:text-[#7f6145]"
                  >
                    +33 6 00 00 00 00
                  </a>
                </div>
                <div>
                  <span className="block font-sans text-[10px] font-light uppercase tracking-[0.2em] text-[#212529]/40">
                    Adresse
                  </span>
                  <span className="font-sans text-sm font-light text-[#212529]">
                    Colmar, 68000
                  </span>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="aspect-[4/3] w-full bg-secondary" />

            {/* Social */}
            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-2xl font-light text-[#212529]">
                Me retrouver
              </h2>
              <div className="flex items-center gap-6">
                <a
                  href="https://www.instagram.com/soniaayer_architecte/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[11px] font-light uppercase tracking-[0.15em] text-[#212529]/60 transition-colors hover:text-[#212529]"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/sonia-ayer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[11px] font-light uppercase tracking-[0.15em] text-[#212529]/60 transition-colors hover:text-[#212529]"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
