"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import AboutFeatureCard from "@/components/cards/AboutFeatureCard";
import StatCard from "@/components/cards/StatCard";
import { motion } from "framer-motion";
import {HiOutlineRocketLaunch, HiOutlineHandRaised, HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineUsers, HiOutlinePresentationChartLine, HiOutlineStar, HiOutlineCpuChip,} from "react-icons/hi2";

export default function About() {
  const t = useTranslations("About");
  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    show: {opacity: 1,x: 0, transition: {duration: 0.7,},},
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    show: {opacity: 1,x: 0, transition: {duration: 0.7,},},
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {opacity: 1, y: 0, transition: {duration: 0.6,},},
  };

  return (
    <section
      id="about" className="relative overflow-hidden py-16 lg:py-20" style={{background: "var(--background)",}}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}>
            <p className="font-semibold" style={{color: "var(--primary)",}}>
              {t("badge")}
            </p>
            <h2 className="mt-2 text-2xl font-bold leading-tight lg:text-4xl" style={{color: "var(--text-primary)",}}>
              {t("title1")} <br/> {t("title2")}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7" style={{color: "var(--text-secondary)",}}>
              {t("description")}
            </p>
            <div className="my-5 h-1 w-20 rounded-full" style={{background: "var(--primary)",}}/>
            <div className="space-y-4">
              <AboutFeatureCard icon={HiOutlineRocketLaunch} title={t("features.solution.title")} description={t("features.solution.description")}/>
              <AboutFeatureCard icon={HiOutlineHandRaised} title={t("features.collaboration.title")} description={t("features.collaboration.description")}/>
              <AboutFeatureCard icon={HiOutlineShieldCheck} title={t("features.integrity.title")} description={t("features.integrity.description")}/>
              <AboutFeatureCard icon={HiOutlineSparkles} title={t("features.growth.title")} description={t("features.growth.description")}/>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}>
            <Image src="/images/about-main.jpg" alt="About" width={320} height={220}  className= "h-56 w-full rounded-2xl object-cover shadow-xl lg:h-64"/>
            <div className="mt-6 grid grid-cols-2 gap-6">
              <Image src="/images/about-1.jpg" alt="About" width={280} height={220} className="h-36 w-full rounded-2xl object-cover shadow-md"/>
              <Image src="/images/about-2.jpg" alt="About" width={280} height={220} className="h-36 w-full rounded-2xl object-cover shadow-md"/>
            </div>
            <div className="mt-5 rounded-2xl p-5" style={{background: "var(--surface)", border: "1px solid var(--border)", boxShadow: "0 20px 40px var(--shadow)",}}>
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                <StatCard icon={HiOutlinePresentationChartLine} value={30} suffix="+" title={t("stats.projects.title")} description={t("stats.projects.description")}/>
                <StatCard icon={HiOutlineUsers} value={20} suffix="+" title={t("stats.clients.title")} description={t("stats.clients.description")}/>
                <StatCard icon={HiOutlineCpuChip} value={10} suffix="+" title={t("stats.experience.title")} description={t("stats.experience.description")}/>
                <StatCard icon={HiOutlineStar} value={100} suffix="%" title={t("stats.quality.title")} description={t("stats.quality.description")}/>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}