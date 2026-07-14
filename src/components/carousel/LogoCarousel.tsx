"use client";

import { motion } from "framer-motion";
import type { ClientLogo } from "@/data/clients";
import ClientLogoCard from "@/components/cards/ClientLogoCard";

type LogoCarouselProps = {logos: ClientLogo[];};

export default function LogoCarousel({ logos }: LogoCarouselProps) {
  const marqueeLogos = [...logos, ...logos];
  return (
    <div className="relative overflow-hidden py-6">
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24" style={{background:"linear-gradient(to right, var(--surface), transparent)",}}/>
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24" style={{background:"linear-gradient(to left, var(--surface), transparent)",}}/>
      <motion.div className="flex w-max gap-12" animate={{x: ["0%", "-50%"],}}transition={{ease: "linear", duration: 25, repeat: Infinity,}}>
        {marqueeLogos.map((logo, index) => (
          <div key={`${logo.id}-${index}`} className="shrink-0">
            <ClientLogoCard logo={logo} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}