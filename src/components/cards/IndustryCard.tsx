"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {HiOutlineBuildingOffice2, HiOutlineBuildingLibrary, HiOutlineAcademicCap, HiOutlineHeart, HiOutlineShoppingBag,} from "react-icons/hi2";

  const INDUSTRIES = [
    {key: "private", icon: HiOutlineBuildingOffice2,},
    {key: "government", icon: HiOutlineBuildingLibrary,},
    {key: "education", icon: HiOutlineAcademicCap,},
    {key: "health", icon: HiOutlineHeart,},
    {key: "retail", icon: HiOutlineShoppingBag,},
  ];

export default function IndustryCard() {
  const t = useTranslations("Clients");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5">
      {INDUSTRIES.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.key}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
            className="relative flex items-start gap-3 px-4 py-4">
            {index !== INDUSTRIES.length - 1 && (
              <div className="absolute right-0 top-1/2 h-12 -translate-y-1/2" style={{borderRight: "1px solid var(--border)",}}/>
            )}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border" style={{background: "var(--surface)", borderColor: "rgba(232,89,12,.15)", color: "var(--primary)",}}>
              <Icon size={20} />
            </div>
            <div className="flex min-w-0 flex-col justify-center">
              <h3 className="text-sm font-semibold leading-5" style={{color: "var(--text-primary)",}}>
                {t(`industries.${item.key}.title`)}
              </h3>
              <p className="mt-1 text-xs leading-5" style={{color: "var(--text-secondary)",}}>
                {t(`industries.${item.key}.description`)}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}