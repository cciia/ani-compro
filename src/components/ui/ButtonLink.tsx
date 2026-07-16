"use client";

import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline";

interface ButtonLinkProps
extends AnchorHTMLAttributes<HTMLAnchorElement> { href: string; variant?: ButtonVariant; children: React.ReactNode;}

export default function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
  ...props
}: 

ButtonLinkProps) {
  const baseClass =
    "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5";

  const variants = {
    primary: {background: "var(--primary)", color: "#fff", border: "1px solid transparent",},
    outline: {background: "#fff", color: "var(--primary)", border: "1px solid var(--primary)",},
  };
  return (
    <Link
      href={href}
      className={`${baseClass} ${className}`}
      style={variants[variant]}
      onMouseEnter={(e) => {
        if (variant === "primary") {
          e.currentTarget.style.background = "var(--primary-hover)";
        } else {
          e.currentTarget.style.background = "var(--primary)";
          e.currentTarget.style.color = "#fff";
        }
      }}
      onMouseLeave={(e) => {
        if (variant === "primary") {
          e.currentTarget.style.background = "var(--primary)";
        } else {
          e.currentTarget.style.background = "#fff";
          e.currentTarget.style.color = "var(--primary)";
        }
      }}
      {...props}>
      {children}
    </Link>
  );
}