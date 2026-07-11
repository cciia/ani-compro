"use client";

import Image from "next/image";
// import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import AboutFeatureCard from "@/components/cards/AboutFeatureCard";
import StatCard from "@/components/cards/StatCard";
import {HiOutlineRocketLaunch, HiOutlineHandRaised, HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineUsers, HiOutlinePresentationChartLine, HiOutlineStar, HiOutlineCpuChip,} from "react-icons/hi2";

export default function About() {
  const t = useTranslations("About");
  return (
    <section
      id="about" className="relative overflow-hidden py-20 lg:py-24" style={{background: "var(--background)",}}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid h-full items-center gap-10 lg:grid-cols-2">
          <div> 
            <p className="font-semibold" style={{color: "var(--primary)",}}>
              {t("badge")}
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight" style={{color: "var(--text-primary)",}}>
              {t("title1")} <br/> {t("title2")}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8" style={{color: "var(--text-secondary)",}}>
              {t("description")}
            </p>
            <div className="my-6 h-1 w-24 rounded-full" style={{background: "var(--primary)",}}/>
            <div className="space-y-5">
              <AboutFeatureCard icon={HiOutlineRocketLaunch} title={t("features.solution.title")} description={t("features.solution.description")}/>
              <AboutFeatureCard icon={HiOutlineHandRaised} title={t("features.collaboration.title")} description={t("features.collaboration.description")}/>
              <AboutFeatureCard icon={HiOutlineShieldCheck} title={t("features.integrity.title")} description={t("features.integrity.description")}/>
              <AboutFeatureCard icon={HiOutlineSparkles} title={t("features.growth.title")} description={t("features.growth.description")}/>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-52 h-28 w-12 opacity-20" style={{backgroundImage: "radial-gradient(var(--primary) 2px, transparent 2px)", backgroundSize: "12px 12px",}}/>
            <Image src="/images/about-main.png" alt="About" width={320} height={220}  className= "h-64 w-full rounded-3xl object-cover shadow-xl lg:h-72"/>
            <div className="mt-6 grid grid-cols-2 gap-6">
              <Image src="/images/about-1.png" alt="About" width={280} height={220} className="h-40 w-full rounded-3xl object-cover shadow-lg"/>
              <Image src="/images/about-2.png" alt="About" width={280} height={220} className="h-40 w-full rounded-3xl object-cover shadow-lg"/>
            </div>
            <div className="mt-6 rounded-3xl p-6" style={{background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "0 20px 40px var(--shadow)",}}>
              <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                <StatCard icon={HiOutlinePresentationChartLine} value={30} suffix="+" title={t("stats.projects.title")} description={t("stats.projects.description")}/>
                <StatCard icon={HiOutlineUsers} value={20} suffix="+" title={t("stats.clients.title")} description={t("stats.clients.description")}/>
                <StatCard icon={HiOutlineCpuChip} value={10} suffix="+" title={t("stats.experience.title")} description={t("stats.experience.description")}/>
                <StatCard icon={HiOutlineStar} value={100} suffix="%" title={t("stats.quality.title")} description={t("stats.quality.description")}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}