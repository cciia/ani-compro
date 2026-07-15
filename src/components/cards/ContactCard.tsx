"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

type ContactCardProps = {icon: IconType; title: string; children: React.ReactNode; delay?: number;};
export default function ContactCard({icon: Icon, title, children, delay = 0,}: 

ContactCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{duration: 0.45, delay,}} whileHover={{y: -4,}}
      className="group flex items-center gap-3 rounded-xl border p-3 transition-all duration-300" style={{background: "var(--surface)", borderColor: "var(--border)",}}>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-105" style={{background: "var(--primary-light)", color: "var(--primary)",}}>
        <Icon size={20} />
      </div>
      <div className="min-w-0">
        <h3 className="text-sm font-semibold" style={{color: "var(--text-primary)",}}>
          {title}
        </h3>
        <div className="mt-0.5 text-[13px] leading-5" style={{color: "var(--text-secondary)",}}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}