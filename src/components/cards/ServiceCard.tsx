"use client";

import { IconType } from "react-icons";
import { motion } from "framer-motion";

type ServiceCardProps = {icon: IconType; number: string; title: string; description: string; delay?: number;};

export default function ServiceCard({icon: Icon, number, title, description, delay = 0,}: 

ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8 }}
      className="group relative flex h-full min-h-70 flex-col overflow-hidden rounded-3xl p-7 lg:p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
      style={{background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "0 15px 35px var(--shadow)",}}>
      <div
        className="absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl opacity-0 transition-all duration-700 group-hover:scale-125 group-hover:opacity-20"
        style={{background: "var(--primary)",}}/>
      <div
        className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold transition-all duration-500 group-hover:scale-110"
        style={{background: "var(--background-secondary)", color: "var(--primary)", border: "1px solid var(--border)",}}>
        {number}
      </div>
      <div
        className="mb-6 flex h-16 w-16 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-105"
        style={{background: "var(--background-secondary)",}}>
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110"
          style={{background: "var(--surface)", boxShadow: "0 8px 20px var(--shadow)",}}>
          <Icon size={24} style={{color: "var(--primary)",}}/>
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="text-lg lg:text-xl font-semibold leading-snug" style={{color: "var(--text-primary)",}}>
          {title}
        </h3>
        <p className="mt-3 text-sm lg:text-base leading-7" style={{color: "var(--text-secondary)",}}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}