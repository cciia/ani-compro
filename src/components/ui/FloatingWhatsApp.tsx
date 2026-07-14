"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        y: {
          duration: 2,
          repeat: Infinity,
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