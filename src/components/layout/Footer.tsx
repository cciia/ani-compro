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
    {href: "mailto:aksatanusantara@gmail.com", icon: HiOutlineEnvelope,},
    {href: "https://instagram.com", icon: FaInstagram,},
    {href: "tel:+6287867171882", icon: HiOutlinePhone,},
    // {href: "https://linkedin.com", icon: FaLinkedin,},
  ];
  
   return (
    <footer style={{background: "var(--surface)",}}>
      <div className="mx-auto max-w-6xl px-6 pt-4 pb-3">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
              <Image src="/logos/logo-ani.png" alt="ANI Logo" width={60} height={60} priority/>
            <h2
              className="mt-3 text-xl font-bold" style={{ color: "var(--text-primary)" }}>
              PT Aksata Nusantara Infosysjaya
            </h2>
            <p
              className="mt-3 text-sm leading-6" style={{ color: "var(--text-secondary)" }}>
              {t("description")}
            </p>
            <div className="mt-5 flex justify-center gap-3 lg:justify-start">
              {socials.map(({ href, icon: Icon }, index) => (
                <Link
                  key={index} href={href} className="rounded-xl p-3 transition-all duration-300 hover:scale-105" style={{background: "var(--primary)", color: "#fff",}}>
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 flex flex-col items-center text-center">
            <h3 className="text-base font-bold uppercase" style={{ color: "var(--text-primary)" }}>{t("navigation.title")}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-300"
                    style={{color: "var(--text-secondary)",}}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--primary)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "var(--text-secondary)")
                    }>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 flex flex-col items-center text-center">
            <h3 className="text-base font-bold uppercase" style={{ color: "var(--text-primary)" }}>
              {t("services.title")}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((service) => (
                <li
                  key={service} style={{color: "var(--text-secondary)",}}>
                  {service}
                </li>
              ))}
            </ul>
          </div>
         <div className="lg:col-span-3 flex flex-col items-center text-center">
            <h3 className="text-base font-bold uppercase" style={{ color: "var(--text-primary)" }}>
              {t("contact.title")}
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-start gap-4">
                <HiOutlineEnvelope
                  size={18}
                  style={{ color: "var(--primary)" }}/>
                <p style={{ color: "var(--text-secondary)" }}>
                  aksatanusantara@gmail.com
                </p>
              </div>
              <div className="flex items-start gap-4">
                <HiOutlinePhone
                  size={18}
                  style={{ color: "var(--primary)" }}/>
                <p style={{ color: "var(--text-secondary)" }}>
                  0878-6717-1882
                </p>
              </div>
              <div className="flex items-start gap-4">
                <HiOutlineMapPin
                  size={18}
                  style={{ color: "var(--primary)" }}/>
                <p className="leading-7" style={{ color: "var(--text-secondary)" }}>
                  Perum Taman Pondok Jati <br /> Blok L No.11 Sidoarjo
                </p>
              </div>
            </div>
            <div className="mt-4 overflow-hidden rounded-2xl" style={{border: "1px solid var(--border)",}}>
              <Image src="/images/maps.png" alt="Google Maps" width={300} height={160} className="h-auto w-full object-cover"/>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-3 text-xs" style={{borderTop: "1px solid var(--primary)", color: "var(--text-secondary)",}}>
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}