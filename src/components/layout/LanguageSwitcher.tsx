"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { HiLanguage } from "react-icons/hi2";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = () => {
    router.replace(pathname, {
      locale: locale === "id" ? "en" : "id",
    });
  };

  return (
    <button
      onClick={changeLanguage}
      className="
        flex
        h-10
        items-center
        gap-2
        rounded-full
        px-4
        text-sm
        font-semibold
        text-white
        shadow-md
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-lg
      "
      style={{
        background: "var(--primary)",
      }}
    >
      <HiLanguage size={18} />
      {locale === "id" ? "ID" : "EN"}
    </button>
  );
}