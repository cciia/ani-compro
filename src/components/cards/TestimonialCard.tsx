"use client";

import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi2";

type TestimonialCardProps = {name: string; position: string; comment: string;};
export default function TestimonialCard({name, position, comment,}: 

TestimonialCardProps) {
  return (
    <motion.div whileHover={{y: -6,}} transition={{duration: 0.25,}}
      className="flex h-full flex-col rounded-3xl border p-8" style={{background: "var(--surface)", borderColor: "var(--border)",}}>
      <div className="mb-6 flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <HiStar
            key={index}
            size={18}
            style={{color: "var(--primary)",}}/>
        ))}
      </div>
      <p className="flex-1 text-[15px] leading-7 italic" style={{color: "var(--text-secondary)",}}>
        "{comment}"
      </p>
      <div className="my-7 h-px w-full" style={{background: "var(--border)",}}/>
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold" style={{background: "var(--primary)", color: "#fff",}}>
          {name.charAt(0)}
        </div>
        <div>
          <h3 className="text-base font-semibold" style={{color: "var(--text-primary)",}}>
            {name}
          </h3>
          <p className="mt-1 text-sm" style={{color: "var(--text-secondary)",}}>
            {position}
          </p>
        </div>
      </div>
    </motion.div>
  );
}