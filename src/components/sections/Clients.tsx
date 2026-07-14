"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import LogoCarousel from "@/components/carousel/LogoCarousel";
import IndustryCard from "@/components/cards/IndustryCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { clientLogos } from "@/data/clients";

export default function Clients() {
  const t = useTranslations("Clients");

  return (
    <section id="clients" className="relative overflow-hidden py-20 lg:py-24" style={{ background: "var(--surface)" }}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-12 max-w-3xl">
          <p className="font-semibold" style={{ color: "var(--primary)" }}>
            {t("badge")}
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight lg:text-4xl" style={{ color: "var(--text-primary)" }}>
            {t("title1")}
            <br />
            <span style={{ color: "var(--primary)" }}>
              {t("title2")}
            </span>
          </h2>
          <div className="mt-6 h-1 w-20 rounded-full" style={{background: "var(--primary)",}}/>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{duration: 0.7, delay: 0.15,}}>
          <LogoCarousel logos={clientLogos} />
          <div className="mt-14 rounded-3xl border py-4" style={{background: "var(--surface)", borderColor: "var(--border)",}}>
            <IndustryCard />
          </div>
          <div className="mt-20">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="font-semibold" style={{color: "var(--primary)",}}>
                {t("testimonialBadge")}
              </p>
              <h2
                className="mt-2 text-3xl font-bold lg:text-4xl" style={{color: "var(--text-primary)",}}>
                {t("testimonialTitle")}
              </h2>
              <div className="mx-auto mt-5 h-1 w-20 rounded-full" style={{background: "var(--primary)",}}/>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <TestimonialCard name={t("testimonials.1.name")} position={t("testimonials.1.position")} comment={t("testimonials.1.comment")}/>
              <TestimonialCard name={t("testimonials.2.name")} position={t("testimonials.2.position")} comment={t("testimonials.2.comment")}/>
              <TestimonialCard name={t("testimonials.3.name")} position={t("testimonials.3.position")} comment={t("testimonials.3.comment")}/>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}