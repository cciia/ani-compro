"use client";

import { HiMiniMoon, HiMiniSun } from "react-icons/hi2";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return (
      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8590C] dark:bg-[#1B5FA8]" />
    );
  }

  const isDark = resolvedTheme === "dark";
    console.log({
    resolvedTheme,
    isDark,
    });

  return (
    <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label="Toggle Theme"
        className={`
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        text-white
        shadow-md
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-lg
        ${isDark ? "bg-[#1B5FA8]" : "bg-[#E8590C]"}
        `}>
        {isDark ? (
        <HiMiniSun size={20} />
        ) : (
        <HiMiniMoon size={20} />
        )}
    </button>
    );
}