"use client";

import { IconType } from "react-icons";
import { motion } from "framer-motion";

type AboutFeatureCardProps = { icon: IconType; title: string; description: string; delay?: number;};

export default function AboutFeatureCard({icon: Icon, title, description, delay = 0,}: 
AboutFeatureCardProps) {
  return (
    <motion.div
      initial={{opacity: 0, x: -30,}}
      whileInView={{opacity: 1,x: 0,}}
      viewport={{once: true,}}
      transition={{duration: 0.6, delay,}}
      className="flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "0 10px 20px var(--shadow)",}}>
        <Icon size={22} style={{color: "var(--primary)",}}/>
      </div>
      <div>
        <h3 className="text-[15px] font-semibold" style={{color: "var(--text-primary)",}}>
          {title}
        </h3>
        <p className="mt-1 text-sm leading-5" style={{color: "var(--text-secondary)",}}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}