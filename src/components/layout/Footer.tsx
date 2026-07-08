"use client";

import Image from "next/image";
import Link from "next/link";
import {HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin,} from "react-icons/hi2";
import {FaInstagram, FaLinkedin,} from "react-icons/fa6";

export default function Footer() {
  const navigation = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Layanan", href: "#services" },
    { name: "Klien", href: "#clients" },
    { name: "Hubungi Kami", href: "#contact" },
  ];

  const services = [
    "Pengembangan Aplikasi",
    "Konsultasi TI",
    "Analisis Sistem",
    "Dukungan Teknis",
    "Pelatihan Teknologi",
  ];

  const socials = [
    {
      href: "mailto:aksatanusantara@gmail.com",
      icon: HiOutlineEnvelope,
    },
    {
      href: "https://instagram.com",
      icon: FaInstagram,
    },
    {
      href: "tel:+6287867171882",
      icon: HiOutlinePhone,
    },
    {
      href: "https://linkedin.com",
      icon: FaLinkedin,
    },
  ];
  return (
    <footer style={{"var(--surface)",}}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <Image
              src="/logos/logo.png"
              alt="ANI Logo"
              width={65}
              height={65}
              priority/>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-gray-900">
              PT Aksata Nusantara
              <br />
              Infosysjaya
            </h2>
            <p className="mt-6 leading-7 text-gray-500">
              PT Aksata Nusantara Infosysjaya adalah perusahaan teknologi
              yang berkomitmen menghadirkan solusi digital inovatif untuk
              mendukung pertumbuhan bisnis di era transformasi digital.
            </p>
            <div className="mt-8 flex gap-3">
              {socials.map(({ href, icon: Icon }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="rounded-md bg-orange-500 p-3 text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600">
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold uppercase text-gray-900">
              Navigasi
            </h3>
            <ul className="mt-8 space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-500 transition hover:text-orange-500">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold uppercase text-gray-900">
              Layanan Kami
            </h3>
            <ul className="mt-8 space-y-5">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-gray-500">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold uppercase text-gray-900">
              Hubungi Kami
            </h3>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <HiOutlineEnvelope
                  size={22}
                  className="mt-1 text-orange-500"/>
                <p className="text-gray-500">
                  aksatanusantara@gmail.com
                </p>
              </div>
              <div className="flex items-start gap-4">
                <HiOutlinePhone
                  size={22}
                  className="mt-1 text-orange-500"/>
                <p className="text-gray-500">
                  0878-6717-1882
                </p>
              </div>
              <div className="flex items-start gap-4">
                <HiOutlineMapPin
                  size={22}
                  className="mt-1 text-orange-500"/>
                <p className="text-gray-500 leading-7">
                  Perum Taman Pondok Jati
                  <br />
                  Blok L No.11
                  <br />
                  Sidoarjo - Jawa Timur
                </p>
              </div>
            </div>
            <div className="mt-8 overflow-hidden rounded-lg border">
              <Image
                src="/images/maps.png"
                alt="Google Maps"
                width={350}
                height={200}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-orange-300 pt-8 text-sm text-gray-500">
          © 2026 PT Aksata Nusantara Infosysjaya. Hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}