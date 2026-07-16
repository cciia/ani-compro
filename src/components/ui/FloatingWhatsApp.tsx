"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { getWhatsappLink } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const locale = useLocale();
  return (
    <motion.a
      href={getWhatsappLink(locale as "id" | "en", "support")}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -18, 0],
      }}
      transition={{
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        y: {
          duration: 0.8,
          repeat: Infinity,
          repeatDelay:2,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.12,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="fixed bottom-8 right-8 z-999">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl">
        <FaWhatsapp size={34} className="text-white"/>
      </div>
    </motion.a>
  );
}