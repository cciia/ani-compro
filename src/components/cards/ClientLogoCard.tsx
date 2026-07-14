"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ClientLogo } from "@/data/clients";

type ClientLogoCardProps = {logo: ClientLogo;};

export default function ClientLogoCard({logo,}: 
  
ClientLogoCardProps) {
  return (
    <motion.div whileHover={{y: -4, scale: 1.06,}} transition={{duration: 0.3, ease: "easeOut",}} 
      className="group flex h-36 w-full items-center justify-center">
      <Image src={logo.image} alt={logo.name} width={320} height={320} quality={100} draggable={false} 
        className="h-auto max-h-36 w-auto object-contain transition-all duration-500 group-hover:scale-110"/>
    </motion.div>
  );
}