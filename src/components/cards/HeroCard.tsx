"use client";

import { IconType } from "react-icons";
import { motion } from "framer-motion";
type HeroCardProps = {title: string; description: string; icon: IconType; rotate?: string; className?: string; delay?: number,};
export default function HeroCard({title, description, icon: Icon, rotate = "0deg", className = "", delay=0,}: 

HeroCardProps) {
  return (
    <div
      className={`w-40 rounded-2xl p-3.5 transition-all duration-300 hover:-translate-y-2 ${className}`}
      style={{
        background:"var(--surface)",
        border:"1px solid var(--border)",
        boxShadow:"0 12px 28px var(--shadow)",
        transform:`rotate(${rotate})`
      }}>
      <div
        className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl" style={{background: "var(--primary-light)",}}>
        <Icon size={20} style={{color: "var(--primary)",}}/>
      </div>
      <h3 className="text-[10px] font-bold leading-5" style={{color: "var(--text-primary)",}}>
        {title}
      </h3>
      <p className="mt-2 text-[9px] leading-5" style={{color: "var(--text-secondary)",}}>
        {description}
      </p>
    </div>
  );
}