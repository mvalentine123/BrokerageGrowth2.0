"use client";

import { logos } from "@/constants/logos";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const supportingLogos = logos.slice(0, 4);

export function SupportingLogos() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark =
    mounted &&
    (resolvedTheme === "dark" || theme === "dark");

  return (
    <div className="grid w-full grid-cols-2 items-center gap-4 md:grid-cols-4">
      {supportingLogos.map((logo) => (
        <img
          key={logo.title}
          src={isDark && logo.srcDark ? logo.srcDark : logo.src}
          width={140}
          height={56}
          alt={logo.title}
          className="h-6 w-auto object-contain"
        />
      ))}
    </div>
  );
}
