"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

type HeroMiniCardProps = {icon: IconType; title: string; direction?: "tl" | "tr" | "bl" | "br"; delay?: number; className?: string;};

export default function HeroMiniCard({icon: Icon, title, direction = "tl", delay = 0, className = "",}: 

HeroMiniCardProps) {
  const animations = {
    tl: {
      x: [0, -5, 0, 5, 0],
      y: [0, -6, 0, 6, 0],
      rotate: [-2, 2, -2],
    },
    tr: {
      x: [0, 5, 0, -5, 0],
      y: [0, -6, 0, 6, 0],
      rotate: [2, -2, 2],
    },
    bl: {
      x: [0, -5, 0, 5, 0],
      y: [0, 6, 0, -6, 0],
      rotate: [2, -2, 2],
    },
    br: {
      x: [0, 5, 0, -5, 0],
      y: [0, 6, 0, -6, 0],
      rotate: [-2, 2, -2],
    },
  };

  return (
    <motion.div
      animate={animations[direction]}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      whileHover={{
        scale: 1.03,
      }}
      className={`
        w-32 rounded-xl border px-3 py-3 shadow-md
        ${className}
      `}
      style={{background: "var(--surface)", borderColor: "var(--border)",}}>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{background: "var(--primary-light)", color: "var(--primary)",}}>
        <Icon size={18} />
      </div>
      <h3 className="mt-2 text-xs line-clamp-2 font-semibold leading-4" style={{color: "var(--text-primary)",}}>
        {title}
      </h3>
    </motion.div>
  );
}