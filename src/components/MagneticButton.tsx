"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

interface MagneticButtonLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  variant?: "primary" | "secondary" | "light" | "dark";
  type?: never;
  as?: "link";
}

interface MagneticButtonButtonProps {
  children: React.ReactNode;
  href?: never;
  className?: string;
  variant?: "primary" | "secondary" | "light" | "dark";
  type?: "button" | "submit" | "reset";
  as: "button";
}

type MagneticButtonProps = MagneticButtonLinkProps | MagneticButtonButtonProps;

export function MagneticButton({
  children,
  href,
  className = "",
  variant = "primary",
  type = "button",
  as = "link",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current || !contentRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(contentRef.current, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!contentRef.current) return;

    gsap.to(contentRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.4)",
    });
  };

  const baseStyles =
    "relative inline-block px-8 py-4 font-sans uppercase tracking-widest text-sm transition-opacity hover:opacity-90";

  const variantStyles =
    variant === "primary"
      ? "bg-[#ad8661] text-white"
      : variant === "light"
      ? "border border-white/20 text-white hover:bg-white/10"
      : variant === "dark"
      ? "bg-[#0b0c0e] text-white hover:bg-[#1e2226]"
      : "border border-[#ad8661] text-[#ad8661]";

  const sharedProps = {
    className: `${baseStyles} ${variantStyles} ${className}`,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };

  if (as === "button") {
    return (
      <button
        ref={buttonRef as React.RefObject<HTMLButtonElement>}
        type={type}
        {...sharedProps}
      >
        <span ref={contentRef} className="inline-block">
          {children}
        </span>
      </button>
    );
  }

  return (
    <Link
      ref={buttonRef as React.RefObject<HTMLAnchorElement>}
      href={href!}
      {...sharedProps}
    >
      <span ref={contentRef} className="inline-block">
        {children}
      </span>
    </Link>
  );
}
