import { CONTACT } from "@/data/contact";

export function getWhatsappLink(
  locale: "id" | "en",
  type: "consultation" | "contact" | "support"
) {
  const messages = {
    id: {
      consultation:
        "Halo PT Aksata Nusantara Infosysjaya,%0A%0ASaya ingin berkonsultasi mengenai layanan yang Anda tawarkan.%0A%0ANama:%0APerusahaan:%0AKebutuhan:%0A",
      contact:
        "Halo PT Aksata Nusantara Infosysjaya,%0A%0ASaya ingin menghubungi tim Anda.%0A",
      support:
        "Halo PT Aksata Nusantara Infosysjaya,%0A%0ASaya membutuhkan bantuan.%0A",
    },

    en: {
      consultation:
        "Hello PT Aksata Nusantara Infosysjaya,%0A%0AI would like to discuss your services.%0A%0AName:%0ACompany:%0ARequirement:%0A",
      contact:
        "Hello PT Aksata Nusantara Infosysjaya,%0A%0AI would like to contact your team.%0A",
      support:
        "Hello PT Aksata Nusantara Infosysjaya,%0A%0AI need your assistance.%0A",
    },
  };

  return `https://wa.me/${CONTACT.whatsapp.number}?text=${messages[locale][type]}`;
}