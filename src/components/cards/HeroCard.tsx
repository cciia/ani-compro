"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

type HeroCardProps = {title: string; description: string; icon: IconType; rotate?: string; className?: string; delay?: number;  iconPosition?: "left" | "right";};
export default function HeroCard({title, description, icon: Icon, rotate = "0deg", className = "", delay = 0, iconPosition = "left",}: 

HeroCardProps) {
  return (
   <motion.div
      initial={{
        opacity: 0,
        y: 40,
        rotate: Number(rotate.replace("deg", "")),
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: Number(rotate.replace("deg", "")),
      }}
      whileHover={{
        rotate: 0,
        y: -10,
        scale: 1.05,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
        type: "spring",
        stiffness: 120,
      }}
      className={`w-50 rounded-3xl p-5 ${className}`} style={{background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "0 12px 28px var(--shadow)",}}>
      <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl ${iconPosition === "right" ? "ml-auto" : "" }`} style={{background: "var(--primary-light)",}}>
        <Icon size={20} style={{color: "var(--primary)",}}/>
      </div>
      <h3 className="text-xs font-bold leading-5" style={{color: "var(--text-primary)",}}>
        {title}
      </h3>
      <p className="mt-2 text-[11px] leading-5" style={{color: "var(--text-secondary)",}}>
        {description}
      </p>
    </motion.div>
  );
}