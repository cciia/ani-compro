"use client";

import CountUp from "react-countup";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

type StatCardProps = {icon: IconType; value: number; suffix?: string; title: string; description: string; delay?: number;};

export default function StatCard({
  icon: Icon,
  value,
  suffix = "",
  title,
  description,
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.4,
      }}
      transition={{
        duration: 0.6,
        delay,
      }}
      className="flex flex-col"
    >
      {/* Icon */}
      <Icon
        size={24}
        style={{
          color: "var(--primary)",
        }}/>

      {/* Number */}
      <h3
        className="mt-3 text-4xl font-bold"
        style={{
          color: "var(--primary)",
        }}
      >
        <CountUp
          end={value}
          duration={2}
        />
        {suffix}
      </h3>

      {/* Title */}
      <h4
        className="mt-2 text-sm font-semibold"
        style={{
          color: "var(--text-primary)",
        }}
      >
        {title}
      </h4>
      <p
        className="mt-1 text-xs leading-5"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}