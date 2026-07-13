"use client";

import { IconType } from "react-icons";
// import { motion } from "framer-motion";

type ServiceCardProps = {icon: IconType; number: string; title: string; description: string; delay?: number;};

export default function ServiceCard({icon: Icon, number, title, description, delay = 0,}: 

ServiceCardProps) {
  return (
    <div
      // initial={{ opacity: 0, y: 40 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      // transition={{ duration: 0.6, delay }}
      // whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl p-8 transition-all duration-300"
      style={{background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "0 15px 35px var(--shadow)",}}>
      <div
        className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold transition-all duration-300"
        style={{background: "var(--background-secondary)", color: "var(--primary)", border: "1px solid var(--border)",}}>
        {number}
      </div>
      <div
        className="mb-6 flex h-18 w-18 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-105"
        style={{background: "var(--background-secondary)",}}>
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
          style={{background: "var(--surface)", boxShadow: "0 8px 20px var(--shadow)",}}>
          <Icon size={28} style={{color: "var(--primary)",}}/>
        </div>
      </div>
      <h3 className="mb-3 text-xl font-semibold leading-snug" style={{color: "var(--text-primary)",}}>
        {title}
      </h3>
      <p className="text-base leading-7" style={{color: "var(--text-secondary)",}}>
        {description}
      </p>
    </div>
  );
}