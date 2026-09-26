"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TopBarProps = {
  lang: "ar" | "en";
  linkBase?: string;
  tone?: "light" | "dark";
};

export default function TopBar({ lang, tone = "light" }: TopBarProps) {
  const pathname = usePathname();

  const isArabic = lang === "ar";
  const isDark = tone === "dark";
  const textColor = isDark ? "text-[#1C1A16]" : "text-white";
  const navColor = isDark ? "text-[#1C1A16]/75" : "text-white/85";
  const langColor = isDark ? "text-[#1C1A16]/80" : "text-white/90";
  const homePath = `/${lang}`;
  const activePath = pathname.replace(/\/$/, "") || homePath;

  const navigation = isArabic
    ? [
        { label: "عن غدير", href: `${homePath}/gateways/about-ghadeer`, match: `${homePath}/gateways/about-ghadeer` },
        { label: "رؤيته الفنية", href: `${homePath}/gateways/visual-language`, match: `${homePath}/gateways/visual-language` },
        { label: "الأعمال", href: `${homePath}#works`, hash: "works" },
        { label: "مسيرته", href: `${homePath}/gateways/craft-journey`, match: `${homePath}/gateways/craft-journey` },
        { label: "ذاكرة بغداد", href: `${homePath}/gateways/memory-of-baghdad`, match: `${homePath}/gateways/memory-of-baghdad` },
        { label: "تواصل", href: `${homePath}#contact`, hash: "contact" },
      ]
    : [
        { label: "About Ghadeer", href: `${homePath}/gateways/about-ghadeer`, match: `${homePath}/gateways/about-ghadeer` },
        { label: "Artistic Vision", href: `${homePath}/gateways/visual-language`, match: `${homePath}/gateways/visual-language` },
        { label: "Works", href: `${homePath}#works`, hash: "works" },
        { label: "Journey", href: `${homePath}/gateways/craft-journey`, match: `${homePath}/gateways/craft-journey` },
        { label: "Memory of Baghdad", href: `${homePath}/gateways/memory-of-baghdad`, match: `${homePath}/gateways/memory-of-baghdad` },
        { label: "Contact", href: `${homePath}#contact`, hash: "contact" },
      ];

  const nextLanguage = isArabic ? "en" : "ar";

  const languagePath = pathname.replace(
    /^\/(ar|en)/,
    `/${nextLanguage}`
  );

  function handleAnchorClick(
    event: MouseEvent<HTMLAnchorElement>,
    hash?: string
  ) {
    if (!hash || activePath !== homePath) {
      return;
    }

    const target = document.getElementById(hash);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `${homePath}#${hash}`);
    }
  }

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="relative mx-auto grid h-[82px] w-[94%] grid-cols-[minmax(64px,1fr)_auto_minmax(64px,1fr)] items-center px-1 md:h-[92px] lg:w-[92%]">

        {/* Language - Left */}
        <div className="z-20 flex justify-start">
          <Link
            href={languagePath || `/${nextLanguage}`}
            className={`
              text-[11px]
              font-medium
              uppercase
              tracking-[0.18em]
              ${langColor}
              transition-opacity
              duration-300
              hover:opacity-55
            `}
          >
            {isArabic ? "EN" : "AR"}
          </Link>
        </div>

        {/* Navigation - Center */}
        <nav className="z-30 hidden items-center justify-center gap-8 xl:gap-9 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(event) => handleAnchorClick(event, item.hash)}
              className={`group relative whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.13em] transition duration-300 hover:opacity-70 ${
                item.match === activePath ? textColor : navColor
              }`}
            >
              <span>
                {item.label}
              </span>
              <span
                className={`absolute -bottom-2 left-0 h-px bg-current transition-all duration-500 ${
                  item.match === activePath ? "w-full opacity-45" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-45"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Artist Logo - Right */}
        <div className="z-20 flex justify-end">
          <Link
            href={homePath}
            aria-label={isArabic ? "العودة إلى الصفحة الرئيسية" : "Back to home"}
            className="block transition-opacity duration-300 hover:opacity-75"
          >
            <Image
              src="/images/ghadeer-logo.png"
              alt={isArabic ? "شعار غدير الطائي" : "Ghadeer Al-Taee logo"}
              width={1536}
              height={1024}
              priority
              className={`
                h-12
                w-auto
                object-contain
                md:h-14
                ${isDark ? "drop-shadow-[0_1px_10px_rgba(0,0,0,0.32)]" : ""}
              `}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
