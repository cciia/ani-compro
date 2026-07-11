"use client";

import HeroCard from "@/components/cards/HeroCard";
import Button from "@/components/ui/Button";
import { useTranslations } from "next-intl";
import {HiOutlineCodeBracket, HiOutlineCpuChip, HiOutlineChartBar, HiOutlineWrenchScrewdriver, HiOutlineAcademicCap, HiOutlineSquares2X2,} from "react-icons/hi2";

export default function Hero() {
  const t = useTranslations("Hero");

return (
    <section
      id="home" className="relative flex min-h-[123vh] items-center justify-center overflow-hidden pt-10" style={{background: "var(--surface)",}}>
      <div
        className="absolute left-1/2 top-1/2 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl" style={{background: "var(--primary-soft)", }}/>
      <div className="absolute left-8 top-[56%] hidden -translate-y-1/2 xl:block">
        <HeroCard
          className="mb-10"
          icon={HiOutlineCodeBracket}
          title={t("cards.app.title")}
          description={t("cards.app.description")}
          rotate="-8deg"/>
        <HeroCard
          className="ml-8 mb-10"
          icon={HiOutlineCpuChip}
          title={t("cards.consult.title")}
          description={t("cards.consult.description")}
          rotate="6deg"/>
        <HeroCard
          icon={HiOutlineChartBar}
          title={t("cards.analysis.title")}
          description={t("cards.analysis.description")}
          rotate="-7deg"/>
      </div>
      <div className="absolute right-8 top-[56%] hidden -translate-y-1/2 xl:block">
        <HeroCard
          className="mr-8 mb-10"
          icon={HiOutlineWrenchScrewdriver}
          title={t("cards.support.title")}
          description={t("cards.support.description")}
          rotate="7deg"/>
        <HeroCard
          className="mb-10"
          icon={HiOutlineAcademicCap}
          title={t("cards.training.title")}
          description={t("cards.training.description")}
          rotate="-8deg"/>
        <HeroCard
          className="mr-10"
          icon={HiOutlineSquares2X2}
          title={t("cards.integration.title")}
          description={t("cards.integration.description")}
          rotate="8deg"/>
      </div>
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h1
          className="text-3xl font-extrabold leading-tight lg:text-5xl" style={{color: "var(--text-primary)",}}>
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
          <Button variant="primary">
            {t("button.primary")}
          </Button>
          <Button variant="outline">
            {t("button.secondary")}
          </Button>
        </div>
      </div>
    </section>
  );
}