"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type TopBarProps = {
  lang: "ar" | "en";
};

export default function TopBar({ lang }: TopBarProps) {
  const pathname = usePathname();

  const isArabic = lang === "ar";

  const navigation = isArabic
    ? [
        { label: "الأعمال", href: "#works" },
        { label: "المعارض", href: "#exhibitions" },
        { label: "الأرشيف", href: "#archive" },
        { label: "عن الفنان", href: "#about" },
        { label: "تواصل", href: "#contact" },
      ]
    : [
        { label: "Works", href: "#works" },
        { label: "Exhibitions", href: "#exhibitions" },
        { label: "Archive", href: "#archive" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" },
      ];

  const nextLanguage = isArabic ? "en" : "ar";

  const languagePath = pathname.replace(
    /^\/(ar|en)/,
    `/${nextLanguage}`
  );

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="relative flex h-[78px] w-full items-center px-5 md:h-[88px] md:px-10 lg:px-14">

        {/* Language - Left */}
        <div className="z-10 flex w-1/3 justify-start">
          <Link
            href={languagePath || `/${nextLanguage}`}
            className="
              text-[11px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-white/90
              transition-opacity
              duration-300
              hover:opacity-55
            "
          >
            {isArabic ? "EN" : "AR"}
          </Link>
        </div>

        {/* Navigation - Center */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                whitespace-nowrap
                text-[10px]
                font-medium
                uppercase
                tracking-[0.14em]
                text-white/85
                transition-opacity
                duration-300
                hover:opacity-50
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Artist Name - Right */}
        <div className="z-10 flex w-2/3 justify-end lg:w-1/3">
          <Link
            href={`/${lang}`}
            className="
              whitespace-nowrap
              text-[15px]
              font-light
              uppercase
              tracking-[0.12em]
              text-white
              md:text-[18px]
            "
          >
            {isArabic ? "غدير الطائي" : "GHADER AL-TAEE"}
          </Link>
        </div>
      </div>
    </header>
  );
}