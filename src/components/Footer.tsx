import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/agence", label: "L'agence" },
  { href: "/prestations", label: "Prestations" },
  { href: "/realisations", label: "Realisations" },
  { href: "/presse", label: "Presse" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-[#212529] text-white">
      {/* Top section */}
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-16 md:grid-cols-3 lg:px-12 lg:py-20">
        {/* Column 1: Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex flex-col gap-1">
            <span className="font-heading text-lg font-light uppercase tracking-[0.25em]">
              SONIA AYER
            </span>
            <span className="font-sans text-[9px] font-light uppercase tracking-[0.3em] text-white/50">
              Architecte d&apos;interieur
            </span>
          </Link>
          <p className="mt-2 max-w-xs font-sans text-[11px] font-light leading-relaxed tracking-wide text-white/40">
            Architecture d&apos;interieur a Colmar, Alsace.
            <br />
            Je con&ccedil;ois des espaces qui vous ressemblent.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col gap-4">
          <span className="font-sans text-[10px] font-normal uppercase tracking-[0.25em] text-white/30">
            Navigation
          </span>
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-[11px] font-light uppercase tracking-[0.15em] text-white/60 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3: Contact */}
        <div className="flex flex-col gap-4">
          <span className="font-sans text-[10px] font-normal uppercase tracking-[0.25em] text-white/30">
            Contact
          </span>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:contact@sonia-ayer.com"
              className="font-sans text-[11px] font-light tracking-wide text-white/60 transition-colors hover:text-white"
            >
              contact@sonia-ayer.com
            </a>
            <a
              href="tel:+33600000000"
              className="font-sans text-[11px] font-light tracking-wide text-white/60 transition-colors hover:text-white"
            >
              +33 6 00 00 00 00
            </a>
            <div className="mt-2 flex items-center gap-4">
              <a
                href="https://www.instagram.com/soniaayer_architecte/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[10px] font-light uppercase tracking-[0.15em] text-white/40 transition-colors hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/sonia-ayer/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[10px] font-light uppercase tracking-[0.15em] text-white/40 transition-colors hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="border-t border-white/10" />
        <div className="flex flex-col items-center justify-between gap-2 py-6 sm:flex-row">
          <span className="font-sans text-[9px] font-light uppercase tracking-[0.2em] text-white/25">
            &copy; 2025 Sonia Ayer. Tous droits reserves.
          </span>
          <Link
            href="/mentions-legales"
            className="font-sans text-[9px] font-light uppercase tracking-[0.2em] text-white/25 transition-colors hover:text-white/50"
          >
            Mentions legales
          </Link>
        </div>
      </div>
    </footer>
  );
}
