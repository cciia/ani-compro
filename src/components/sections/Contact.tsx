"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import ContactCard from "@/components/cards/ContactCard";
import ButtonLink from "@/components/ui/ButtonLink";
import { CONTACT } from "@/data/contact";
import { getWhatsappLink } from "@/lib/whatsapp";
import {HiOutlinePhone, HiOutlineEnvelope, HiOutlineMapPin, HiOutlineClock, HiOutlineChatBubbleLeftRight} from "react-icons/hi2";

export default function Contact() {
  const t = useTranslations("Contact");
  const locale = useLocale();

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
                {CONTACT.phone.display}
              </ContactCard>
              <ContactCard
                icon={HiOutlineEnvelope}
                title={t("email.title")}
                delay={0.2}>
                {CONTACT.email.address}
              </ContactCard>
              <ContactCard
                icon={HiOutlineMapPin}
                title={t("address.title")}>
                {t("address.value")}
              </ContactCard>
              <ContactCard
                icon={HiOutlineClock}
                title={t("hours.title")}>
                <span className="whitespace-pre-line">
                  {t("hours.value")}
                </span>
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
                <ButtonLink href={getWhatsappLink(locale as "id" | "en", "contact")} target="_blank" variant="outline" className="h-12 min-w-51.25">
                  {t("cta.button")}
                </ButtonLink>
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
                src={CONTACT.address.embed}
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