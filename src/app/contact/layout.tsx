import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Sonia Ayer, architecte d'interieur a Colmar. Discutons de votre projet de renovation, decoration ou amenagement.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
