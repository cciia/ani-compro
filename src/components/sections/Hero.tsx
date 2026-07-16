"use client";

import HeroCard from "@/components/cards/HeroCard";
import HeroMiniCard from "@/components/cards/HeroMiniCard";
import ButtonLink from "@/components/ui/ButtonLink";
import { getWhatsappLink } from "@/lib/whatsapp";
import { useTranslations, useLocale } from "next-intl";
import {motion, useScroll, useTransform,} from "framer-motion";
import { useRef } from "react";
import {HiOutlineCodeBracket, HiOutlineCpuChip, HiOutlineChartBar, HiOutlineWrenchScrewdriver, HiOutlineAcademicCap, HiOutlineSquares2X2,} from "react-icons/hi2";

export default function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({target: heroRef, offset: ["start start", "end start"],});
  const leftX = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const rightX = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

return (
    <section ref={heroRef}
      id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-10 lg:min-h-[110vh] xl:min-h-[120vh]" style={{background: "var(--surface)",}}>
      <div
        className="absolute left-1/2 top-1/2 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl" style={{background: "var(--primary-soft)", }}/>
      {/* Mobile & Tablet Floating Cards */}
      <div className="xl:hidden">
        <div className="absolute left-3 top-24 z-20">
          <HeroMiniCard
            icon={HiOutlineCodeBracket}
            title={t("cards.app.title")}
            direction="tl"
            delay={0}/>
        </div>
        <div className="absolute right-3 top-24 z-20">
          <HeroMiniCard
            icon={HiOutlineCpuChip}
            title={t("cards.consult.title")}
            direction="tr"
            delay={0.4}/>
        </div>
        <div className="absolute bottom-24 left-3 z-20">
          <HeroMiniCard
            icon={HiOutlineWrenchScrewdriver}
            title={t("cards.support.title")}
            direction="bl"
            delay={0.8}/>
        </div>
        <div className="absolute bottom-24 right-3 z-20">
          <HeroMiniCard
            icon={HiOutlineAcademicCap}
            title={t("cards.training.title")}
            direction="br"
            delay={1.2}/>
        </div>
      </div>
      <motion.div style={{x: leftX, opacity: fade,}} className="absolute left-6 top-[58%] hidden h-150 w-80 -translate-y-1/2 xl:block">
        <HeroCard
          delay={0.4}
          className="absolute left-0 top-8 z-30"
          icon={HiOutlineCodeBracket}
          title={t("cards.app.title")}
          description={t("cards.app.description")}
          rotate="-8deg"/>
        <HeroCard
          delay={0.6}
          className="absolute left-12 top-34 z-20"
          icon={HiOutlineCpuChip}
          iconPosition="right"
          title={t("cards.consult.title")}
          description={t("cards.consult.description")}
          rotate="6deg"/>
        <HeroCard
          delay={0.8}
          className="absolute left-2 top-64 z-10"
          icon={HiOutlineChartBar}
          title={t("cards.analysis.title")}
          description={t("cards.analysis.description")}
          rotate="-7deg"/>
      </motion.div>
      <motion.div style={{x: rightX, opacity: fade,}} className="absolute right-6 top-[58%] hidden h-150 w-80 -translate-y-1/2 xl:block">
        <HeroCard
          delay={0.5}
          className="absolute right-0 top-8 z-30"
          icon={HiOutlineWrenchScrewdriver}
          title={t("cards.support.title")}
          description={t("cards.support.description")}
          rotate="8deg"/>
        <HeroCard
          delay={0.7}
          className="absolute right-12 top-34 z-20"
          icon={HiOutlineAcademicCap}
          title={t("cards.training.title")}
          description={t("cards.training.description")}
          rotate="-8deg"/>
        <HeroCard
          delay={0.9}
          className="absolute right-2 top-64 z-10"
          icon={HiOutlineSquares2X2}
          iconPosition="right"
          title={t("cards.integration.title")}
          description={t("cards.integration.description")}
          rotate="7deg"/>
      </motion.div>
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1
          className="text-4xl font-extrabold leading-tight lg:text-5xl" style={{color: "var(--text-primary)",}}>
          {t("title1")}
          <span
            className="block"
            style={{
              color: "var(--primary)",
            }}>
            {t("title2")}
          </span>
        </h1>
        <p
          className="mx-auto mt-8 max-w-2xl text-lg leading-8"
          style={{
            color: "var(--text-secondary)",
          }}>
          {t("description")}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-5">
           <ButtonLink  href={getWhatsappLink(locale as "id" | "en", "consultation")} target="_blank" variant="primary">
              {t("button.primary")}
            </ButtonLink>
            <ButtonLink href="#services" variant="outline">
              {t("button.secondary")}
            </ButtonLink>
        </div>
      </div>
    </section>
  );
}