"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/agence", label: "L'agence" },
  { href: "/prestations", label: "Prestations" },
  { href: "/realisations", label: "Realisations" },
  { href: "/presse", label: "Presse" },
  { href: "/contact", label: "Contact" },
] as const;

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <div className="relative flex h-5 w-6 flex-col items-center justify-center">
      <span
        className={`absolute h-[1px] w-full bg-white transition-transform duration-300 ${
          open ? "rotate-45" : "-translate-y-[6px]"
        }`}
      />
      <span
        className={`absolute h-[1px] w-full bg-white transition-opacity duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute h-[1px] w-full bg-white transition-transform duration-300 ${
          open ? "-rotate-45" : "translate-y-[6px]"
        }`}
      />
    </div>
  );
}

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const menuItemsRef = useRef<HTMLAnchorElement[]>([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Entrance animation
  const [navVisible, setNavVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setNavVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Staggered animation for mobile menu items
  const animateMobileItems = useCallback(() => {
    if (menuItemsRef.current.length === 0) return;
    gsap.fromTo(
      menuItemsRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.07,
        ease: "power3.out",
        delay: 0.15,
      }
    );
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const timer = setTimeout(animateMobileItems, 50);
      return () => clearTimeout(timer);
    }
  }, [mobileOpen, animateMobileItems]);

  const setMenuItemRef = (index: number) => (el: HTMLAnchorElement | null) => {
    if (el) menuItemsRef.current[index] = el;
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
      style={{
        backgroundColor: "transparent",
        opacity: navVisible ? 1 : 0,
        transform: navVisible ? "translateY(0)" : "translateY(-20px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12 lg:py-6">
        {/* Logo */}
        <Link href="/" className="group flex flex-col">
          <span className="font-heading text-lg font-light uppercase tracking-[0.25em] text-white lg:text-xl">
            SONIA AYER
          </span>
          <span
            className="font-sans text-[9px] font-light uppercase tracking-[0.3em]"
            style={{ color: "rgba(190,190,190,0.5)" }}
          >
            Architecte d&apos;interieur
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 lg:flex xl:gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group relative font-sans text-[11px] font-light uppercase tracking-[0.15em] transition-colors duration-200"
                style={{ color: isActive ? "#ad8661" : "#bebebe" }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = "#ad8661";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.color = "#bebebe";
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 h-px w-full"
                    style={{ backgroundColor: "#ad8661" }}
                  />
                )}
              </Link>
            );
          })}

          {/* Social */}
          <div
            className="ml-4 flex items-center gap-4 pl-6"
            style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}
          >
            <a
              href="https://www.instagram.com/soniaayer_architecte/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "rgba(190,190,190,0.4)" }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#ad8661"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(190,190,190,0.4)"}
              aria-label="Instagram"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sonia-ayer/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200"
              style={{ color: "rgba(190,190,190,0.4)" }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#ad8661"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(190,190,190,0.4)"}
              aria-label="LinkedIn"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className="relative z-50 p-2"
              aria-label="Ouvrir le menu"
            >
              <HamburgerIcon open={mobileOpen} />
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="flex w-full max-w-none flex-col items-center justify-center sm:max-w-none"
              style={{ backgroundColor: "#0b0c0e" }}
            >
              <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
              <SheetDescription className="sr-only">
                Navigation principale du site Sonia Ayer
              </SheetDescription>

              <div className="flex flex-col items-center gap-8">
                {NAV_LINKS.map((link, i) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    ref={setMenuItemRef(i)}
                    onClick={() => setMobileOpen(false)}
                    className="font-heading text-3xl font-light uppercase tracking-[0.2em] text-white opacity-0"
                    style={{
                      textDecoration: pathname === link.href ? "underline" : "none",
                      textUnderlineOffset: "8px",
                      textDecorationThickness: "0.5px",
                      textDecorationColor: "#ad8661",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Mobile social */}
              <div className="mt-12 flex items-center gap-6">
                <a
                  href="https://www.instagram.com/soniaayer_architecte/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: "rgba(190,190,190,0.4)" }}
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/sonia-ayer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: "rgba(190,190,190,0.4)" }}
                >
                  LinkedIn
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
