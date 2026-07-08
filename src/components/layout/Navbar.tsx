"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import ThemeToggle from "../ui/ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [open, setOpen] = useState(false);

  const menus = [
    {name: t("home"), href: "#home",},
    {name: t("about"), href: "#about",},
    {name: t("services"), href: "#services",},
    {name: t("clients"), href: "#clients",},
    {name: t("contact"), href: "#contact",},
  ];

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          className="w-full max-w-6xl rounded-full border backdrop-blur-2xl"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
            boxShadow: "0 12px 35px var(--shadow)",
          }}>
          <div className="flex h-14 items-center justify-between px-7">
            <Link href="/" className="flex items-center">
              <Image src="/logos/logo-ani.png" alt="ANI Logo" width={120} height={40} loading="eager" className="h-11 w-auto object-contain transition-transform duration-300 hover:scale-105"/>
            </Link>
            <ul className="hidden md:flex items-center gap-10">
              {menus.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group relative py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                    style={{color: "var(--text-primary)",}}>
                    {item.name}
                    <span
                      className="absolute left-0 bottom-0 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full"
                      style={{background: "var(--primary)",}}
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="hidden md:flex items-center gap-3">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-full transition md:hidden"
              style={{
                background: "var(--surface-secondary)",
                color: "var(--text-primary)",
              }}>
              {open ? (
                <HiOutlineXMark size={22} />
              ) : (
                <HiOutlineBars3 size={22} />
              )}
            </button>
          </div>
        </nav>
      </header>
      <div
        className={`fixed top-24 left-4 right-4 z-40 overflow-hidden rounded-3xl border backdrop-blur-xl transition-all duration-300 ${
          open
            ? "translate-y-0 opacity-100" : "-translate-y-5 pointer-events-none opacity-0"
        }`}
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
          boxShadow: "0 12px 35px var(--shadow)",
        }}>
        <div className="flex flex-col p-6">
          {menus.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 transition"
              style={{
                color: "var(--text-primary)",
              }}>
              {item.name}
            </Link>
          ))}
          <div
            className="mt-5 flex items-center justify-between border-t pt-5"
            style={{
              borderColor: "var(--border)",
            }}>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}