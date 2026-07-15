"use client";

import Image from "next/image";
import Link from "next/link";
import {HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin,} from "react-icons/hi2";
import {FaInstagram, FaLinkedin,} from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer")
  const navigation = [
    { name: t("navigation.home"), href: "#home" },
    { name: t("navigation.about"), href: "#about" },
    { name: t("navigation.services"), href: "#services" },
    { name: t("navigation.clients"), href: "#clients" },
    { name: t("navigation.contact"), href: "#contact" },
  ];

  const services = [
    t("services.appDevelopment"),
    t("services.itConsulting"),
    t("services.systemAnalysis"),
    t("services.technicalSupport"),
    t("services.technologyTraining"),
  ];
  
  const socials = [
    {href: "mailto:info@aksani.web.id", icon: HiOutlineEnvelope,},
    {href: "https://instagram.com", icon: FaInstagram,},
    {href: "tel:+6287867171882", icon: HiOutlinePhone,},
    // {href: "https://linkedin.com", icon: FaLinkedin,},
  ];
  
return (
    <footer style={{ background: "var(--surface)" }}>
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-6"> 
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
            <Image src="/logos/logo-ani.png" alt="ANI Logo" width={60} height={60} priority />
            <h2 className="mt-3 text-xl font-bold" style={{ color: "var(--text-primary)" }}>
              {t("company.name")}
            </h2>
            <p className="mt-3 text-sm leading-6" style={{ color: "var(--text-secondary)" }}>
              {t("description")}
            </p>
            <div className="mt-5 flex justify-center gap-3 lg:justify-start">
              {socials.map(({ href, icon: Icon }, index) => (
                <Link
                  key={index} 
                  href={href} 
                  className="rounded-xl p-3 transition-all duration-300 hover:scale-105" 
                  style={{ background: "var(--primary)", color: "#fff" }}
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col items-center text-center lg:items-start lg:text-left">
            <h3 className="text-base font-bold uppercase" style={{ color: "var(--text-primary)" }}>
              {t("navigation.title")}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-300"
                    style={{ color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 flex flex-col items-center text-center lg:items-start lg:text-left">
            <h3 className="text-base font-bold uppercase" style={{ color: "var(--text-primary)" }}>
              {t("services.title")}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((service) => (
                <li key={service} style={{ color: "var(--text-secondary)" }}>
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 flex flex-col items-center text-center lg:items-start lg:text-left">
            <h3 className="text-base font-bold uppercase" style={{ color: "var(--text-primary)" }}>
              {t("contact.title")}
            </h3>
            <div className="mt-4 space-y-3 text-sm flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-3 text-left w-full justify-center lg:justify-start">
                <HiOutlineEnvelope size={18} style={{ color: "var(--primary)", flexShrink: 0 }} />
                <p style={{ color: "var(--text-secondary)" }}>{t("contact.email")}</p>
              </div>
              <div className="flex items-center gap-3 text-left w-full justify-center lg:justify-start">
                <HiOutlinePhone size={18} style={{ color: "var(--primary)", flexShrink: 0 }} />
                <p style={{ color: "var(--text-secondary)" }}>{t("contact.phone")}</p>
              </div>
              <div className="flex items-start gap-3 text-left w-full justify-center lg:justify-start">
                <HiOutlineMapPin size={18} className="mt-0.5 shrink-0" style={{ color: "var(--primary)" }} />
                <p style={{ color: "var(--text-secondary)" }}>{t("contact.address")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-4 text-center lg:text-left text-xs" style={{ borderTop: "1px solid var(--primary)", color: "var(--text-secondary)" }}>
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}