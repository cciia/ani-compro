"use client";

import Link from "next/link";
import { IconType } from "react-icons";

type SocialLinkProps = {href: string; icon: IconType; label: string;};
export default function SocialLink({ href, icon: Icon, label,}: 

SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className="rounded-xl p-3 transition-all duration-300 hover:scale-105"
      style={{
        background: "var(--primary)",
        color: "#fff",
      }}>
      <Icon size={18} />
    </Link>
  );
}