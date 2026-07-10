"use client";

import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClass =
    "rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer";

  const variants = {
    primary: {
      background: "var(--primary)",
      color: "#fff",
      border: "1px solid transparent",
    },

    outline: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1px solid var(--border)",
    },
  };

  return (
    <button
      {...props}
      className={`${baseClass} ${className}`}
      style={variants[variant]}
      onMouseEnter={(e) => {
        if (variant === "primary") {
          e.currentTarget.style.background = "var(--primary-hover)";
        } else {
          e.currentTarget.style.borderColor = "var(--primary)";
          e.currentTarget.style.color = "var(--primary)";
        }
      }}
      onMouseLeave={(e) => {
        if (variant === "primary") {
          e.currentTarget.style.background = "var(--primary)";
        } else {
          e.currentTarget.style.borderColor = "var(--border)";
          e.currentTarget.style.color = "var(--text-primary)";
        }
      }}
    >
      {children}
    </button>
  );
}