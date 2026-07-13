"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import ServiceCard from "@/components/cards/ServiceCard";
import {HiOutlineCodeBracketSquare, HiOutlineChatBubbleLeftRight, HiOutlineSquares2X2, HiOutlineWrenchScrewdriver, HiOutlineAcademicCap,} from "react-icons/hi2";

export default function Services() {
  const t = useTranslations("Services");
  const services = [
    {icon: HiOutlineCodeBracketSquare, number: "01", title: t("items.development.title"), description: t("items.development.description"),},
    {icon: HiOutlineChatBubbleLeftRight, number: "02", title: t("items.consulting.title"), description: t("items.consulting.description"),},
    {icon: HiOutlineSquares2X2, number: "03", title: t("items.analysis.title"), description: t("items.analysis.description"),},
    {icon: HiOutlineWrenchScrewdriver, number: "04", title: t("items.support.title"), description: t("items.support.description"),},
    {icon: HiOutlineAcademicCap, number: "05", title: t("items.training.title"), description: t("items.training.description"),},
  ];

  return (
    <section id="services" className="relative overflow-hidden py-24 lg:py-32" style={{ background: "var(--background)" }}>
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto mb-18 max-w-3xl text-center">
          <p className="text-base font-semibold" style={{ color: "var(--primary)" }}>
            {t("badge")}
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl" style={{ color: "var(--text-primary)" }}>
            {t("title1")} <br />
            <span style={{ color: "var(--primary)" }}>
              {t("title2")}
            </span>
          </h2>
          <div className="mx-auto mt-6 h-1 w-28 rounded-full" style={{ background: "var(--primary)" }}/>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={service.number}
              icon={service.icon}
              number={service.number}
              title={service.title}
              description={service.description}
              delay={index * 0.15}/>))}
        </div>
        <div className="mx-auto mt-8 grid max-w-4xl gap-8 md:grid-cols-2">
          {services.slice(3).map((service, index) => (
            <ServiceCard
              key={service.number}
              icon={service.icon}
              number={service.number}
              title={service.title}
              description={service.description}
              delay={(index + 3) * 0.15}/>
          ))}
        </div>
      </div>
    </section>
  );
}