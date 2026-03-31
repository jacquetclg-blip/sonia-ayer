import type { Metadata } from "next";
import { Cormorant_Garamond, Josefin_Sans } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const josefinSans = Josefin_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Sonia Ayer, Architecte d'interieur a Colmar",
    default: "Sonia Ayer | Architecte d'interieur a Colmar",
  },
  description:
    "Sonia Ayer, architecte d'interieur a Colmar en Alsace. Renovation, decoration, amenagement et home staging pour particuliers et professionnels.",
  metadataBase: new URL("https://www.sonia-ayer.com"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.sonia-ayer.com",
    siteName: "Sonia Ayer, Architecte d'interieur",
    title: "Sonia Ayer | Architecte d'interieur a Colmar",
    description:
      "Sonia Ayer, architecte d'interieur a Colmar en Alsace. Renovation, decoration, amenagement et home staging pour particuliers et professionnels.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonia Ayer | Architecte d'interieur a Colmar",
    description:
      "Sonia Ayer, architecte d'interieur a Colmar en Alsace. Renovation, decoration, amenagement et home staging.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sonia Ayer Architecture d'interieur",
  description:
    "Architecte d'interieur a Colmar, Alsace. Renovation, decoration, amenagement et home staging.",
  url: "https://www.sonia-ayer.com",
  telephone: "+33 0 00 00 00 00",
  email: "contact@sonia-ayer.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colmar",
    postalCode: "68000",
    addressRegion: "Alsace",
    addressCountry: "FR",
  },
  areaServed: {
    "@type": "Place",
    name: "Alsace",
  },
  serviceType: "Architecture d'interieur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorantGaramond.variable} ${josefinSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
