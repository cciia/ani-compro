"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import ContactCard from "@/components/cards/ContactCard";
import {HiOutlinePhone, HiOutlineEnvelope, HiOutlineMapPin, HiOutlineClock, HiOutlineChatBubbleLeftRight} from "react-icons/hi2";

export default function Contact() {
  const t = useTranslations("Contact");

  return (
    <section id="contact" className="py-16 lg:py-20" style={{background: "var(--background)",}}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_430px] lg:items-start">
          <div>
            <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5 }}>
              <p className="font-semibold" style={{color: "var(--primary)",}}>
                {t("badge")}
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight lg:text-4xl" style={{color: "var(--text-primary)",}}>
                {t("title1")}
                <br /> <span style={{color: "var(--primary)",}}> {t("title2")} </span>{" "} {t("title3")}
              </h2>
              <div className="mt-5 h-1 w-20 rounded-full" style={{background: "var(--primary)",}}/>
            </motion.div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <ContactCard
                icon={HiOutlinePhone}
                title={t("phone.title")}
                delay={0.1}>
                {t("phone.value")}
              </ContactCard>
              <ContactCard
                icon={HiOutlineEnvelope}
                title={t("email.title")}
                delay={0.2}>
                {t("email.value")}
              </ContactCard>
              <ContactCard
                icon={HiOutlineMapPin}
                title={t("address.title")}
                delay={0.3}>
                {t("address.value")}
              </ContactCard>
              <ContactCard
                icon={HiOutlineClock}
                title={t("hours.title")}
                delay={0.4}>
                {t("hours.value")}
              </ContactCard>
            </div>
            <div className="mt-7 rounded-2xl border px-5 py-3.5" style={{background: "var(--primary-light)", borderColor: "rgba(232,89,12,.12)",}}>
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full" style={{background: "var(--primary)", color: "#fff",}}>
                    <HiOutlineChatBubbleLeftRight size={21} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold leading-none" style={{color: "var(--primary)",}}>
                      {t("cta.title")}
                    </h3>
                    <p className="mt-1 text-xs leading-5" style={{color: "var(--text-secondary)",}}>
                      {t("cta.description")}
                    </p>
                  </div>
                </div>
                <button className="h-12 min-w-51.25 rounded-xl border bg-white px-6 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5" style={{borderColor: "var(--primary)", color: "var(--primary)",}}>
                  {t("cta.button")}
                </button>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}>
            <div className="overflow-hidden rounded-2xl border" style={{background: "var(--surface)", borderColor: "var(--border)",}}>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.8736104526038!2d112.69379237318694!3d-7.36806087250546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e3419b03adb9%3A0xbefcf2d12f31d51b!2sJl.%20Taman%20Pd.%20Jati%20L%20No.11%2C%20Geluran%2C%20Kec.%20Taman%2C%20Kabupaten%20Sidoarjo%2C%20Jawa%20Timur%2061257!5e0!3m2!1sen!2sid!4v1784087880517!5m2!1sen!2sid"
                className="h-120 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}