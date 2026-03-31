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
        className={`absolute h-[1px] w-full bg-current transition-transform duration-300 ${
          open ? "rotate-45" : "-translate-y-[6px]"
        }`}
      />
      <span
        className={`absolute h-[1px] w-full bg-current transition-opacity duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute h-[1px] w-full bg-current transition-transform duration-300 ${
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll detection for header background
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Entrance animation via CSS transition
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
      // Small delay to let the sheet mount
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]"
          : "bg-transparent"
      }`}
      style={{
        opacity: navVisible ? 1 : 0,
        transform: navVisible ? "translateY(0)" : "translateY(-20px)",
        transition: "opacity 0.8s ease, transform 0.8s ease, background-color 0.5s ease, box-shadow 0.5s ease, backdrop-filter 0.5s ease",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-12 lg:py-5">
        {/* Logo */}
        <Link href="/" className="group flex flex-col">
          <span className="font-heading text-lg font-light uppercase tracking-[0.25em] text-[#212529] lg:text-xl">
            SONIA AYER
          </span>
          <span className="font-sans text-[9px] font-light uppercase tracking-[0.3em] text-[#212529]/60">
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
                className="group relative font-sans text-[10px] font-light uppercase tracking-[0.2em] text-[#212529]"
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[0.5px] bg-[#212529] transition-transform duration-300 origin-left ${
                    isActive
                      ? "w-full scale-x-100"
                      : "w-full scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}

          {/* Social */}
          <div className="ml-4 flex items-center gap-4 border-l border-[#212529]/10 pl-6">
            <a
              href="https://www.instagram.com/soniaayer_architecte/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[9px] font-light uppercase tracking-[0.15em] text-[#212529]/50 transition-colors hover:text-[#212529]"
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
              className="font-sans text-[9px] font-light uppercase tracking-[0.15em] text-[#212529]/50 transition-colors hover:text-[#212529]"
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
              className="relative z-50 p-2 text-[#212529]"
              aria-label="Ouvrir le menu"
            >
              <HamburgerIcon open={mobileOpen} />
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="flex w-full max-w-none flex-col items-center justify-center bg-white sm:max-w-none"
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
                    className={`font-heading text-3xl font-light uppercase tracking-[0.2em] text-[#212529] opacity-0 ${
                      pathname === link.href ? "underline underline-offset-8 decoration-[0.5px]" : ""
                    }`}
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
                  className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#212529]/50"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/sonia-ayer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#212529]/50"
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
