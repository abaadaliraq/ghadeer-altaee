"use client";

import type { SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type ContactProps = {
  lang: "ar" | "en";
  linkBase?: string;
};

type FooterLink = {
  label: {
    ar: string;
    en: string;
  };
  href: string;
};

type SocialLink = {
  name: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => React.ReactElement;
  external?: boolean;
};

const footerImage = "/images/footer.jpg";

const navigationLinks: FooterLink[] = [
  { label: { ar: "الرئيسية", en: "Home" }, href: "#home" },
  { label: { ar: "عن غدير الطائي", en: "About Ghadeer" }, href: "#about" },
  { label: { ar: "أعمال غدير الطائي", en: "Ghadeer's Works" }, href: "#works" },
  { label: { ar: "مسارات غدير الفنية", en: "Artistic Practice" }, href: "#works" },
  { label: { ar: "معرض ذاكرة بغداد", en: "Memory of Baghdad" }, href: "#works" },
  { label: { ar: "التواصل", en: "Contact" }, href: "#contact" },
];

const legalLinks: FooterLink[] = [
  { label: { ar: "سياسة الخصوصية", en: "Privacy Policy" }, href: "/privacy" },
  { label: { ar: "سياسة الاستخدام", en: "Terms of Use" }, href: "/terms" },
];

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/altaeeghadeer68/?__pwa=1",
    icon: InstagramIcon,
    external: true,
  },
  {
    name: "Facebook",
    href: "https://web.facebook.com/hjy.ghdyr",
    icon: FacebookIcon,
    external: true,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/9647902266605",
    icon: WhatsAppIcon,
    external: true,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@ghadeer_altaee68?lang=en",
    icon: TikTokIcon,
    external: true,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@ghadeeraltaee-t2m?si=WmqDqxIt6sXGrLcf",
    icon: YouTubeIcon,
    external: true,
  },
  {
    name: "Email",
    href: "mailto:altaeeghadeer68@gmail.com",
    icon: EmailIcon,
  },
];

const revealViewport = { once: true, margin: "-120px" };
const footerEase = [0.22, 1, 0.36, 1] as const;

export default function Contact({ lang, linkBase = "" }: ContactProps) {
  const isArabic = lang === "ar";
  const reduceMotion = useReducedMotion();
  const footerColumns = [
    navigationLinks.slice(0, 3).map((item) => ({
      ...item,
      resolvedHref: `${linkBase}${item.href}`,
    })),
    navigationLinks.slice(3, 6).map((item) => ({
      ...item,
      resolvedHref: `${linkBase}${item.href}`,
    })),
    legalLinks.map((item) => ({
      ...item,
      resolvedHref: `/${lang}${item.href}`,
    })),
  ];

  return (
    <footer
      id="contact"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative h-[360px] w-full overflow-hidden bg-[#100f0d] text-[#F5F0E8] sm:h-[390px] md:h-[410px] lg:h-[440px] xl:h-[460px]"
    >
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { opacity: 0.92, scale: 1.015 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={revealViewport}
        transition={{ duration: 0.9, ease: footerEase }}
      >
        <Image
          src={footerImage}
          alt={
            isArabic
              ? "واجهة مستوحاة من العمارة البغدادية في أعمال غدير الطائي"
              : "Baghdad heritage architecture detail in Ghadeer Al-Taee's work"
          }
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/35" />

      <motion.div
        className="absolute inset-0 z-10 mx-auto flex w-full max-w-[1500px] flex-col justify-between px-4 py-5 sm:px-6 sm:py-6 md:px-10 md:py-8 lg:px-16"
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={revealViewport}
      >
        <motion.div
          className="mx-auto flex w-full max-w-[760px] flex-col items-center gap-2.5 sm:gap-4 md:mt-2 md:gap-6"
          variants={fadeUp(0)}
        >
          <nav
            className="grid w-full grid-cols-3 gap-3 text-center sm:gap-7 md:gap-12"
            aria-label={isArabic ? "روابط الفوتر" : "Footer navigation"}
          >
            {footerColumns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className="flex flex-col items-center gap-1 sm:gap-1.5 md:gap-2.5"
              >
                {column.map((item, itemIndex) => (
                  <FooterNavLink
                    key={item.resolvedHref + item.label.en}
                    href={item.resolvedHref}
                    label={isArabic ? item.label.ar : item.label.en}
                    isArabic={isArabic}
                    delay={0.06 + columnIndex * 0.06 + itemIndex * 0.045}
                  />
                ))}
              </div>
            ))}
          </nav>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 md:gap-5"
            variants={fadeUp(0.14)}
          >
            {socialLinks.map((item, index) => (
              <SocialIcon
                key={item.name}
                item={item}
                delay={0.2 + index * 0.06}
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-end justify-between gap-4 pb-0.5"
          variants={fadeUp(0.32)}
        >
          <motion.div
            variants={fadeUp(0.28)}
            whileHover={reduceMotion ? undefined : { opacity: 0.78 }}
            transition={{ duration: 0.45, ease: footerEase }}
          >
            <Link
              href={`/${lang}`}
              aria-label={isArabic ? "العودة إلى الصفحة الرئيسية" : "Back to home"}
              className="block transition-opacity duration-500 hover:opacity-75"
            >
              <Image
                src="/images/ghadeer-logo.png"
                alt={isArabic ? "شعار غدير الطائي" : "Ghadeer Al-Taee logo"}
                width={1536}
                height={1024}
                className="h-8 w-auto object-contain sm:h-9 md:h-11"
              />
            </Link>
          </motion.div>

          <div className="text-end font-[var(--font-inter)] text-[6px] uppercase tracking-[0.13em] text-[#F5F0E8]/78 sm:text-[7px] md:text-[8px] md:tracking-[0.16em]">
            <p>© 2026 Ghadeer Al-Taee</p>
            <p className="mt-0.5 md:mt-1">Developed by Abaad Al-Iraq</p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

function FooterNavLink({
  href,
  label,
  isArabic,
  delay,
}: {
  href: string;
  label: string;
  isArabic: boolean;
  delay: number;
}) {
  return (
    <motion.a
      href={href}
      variants={fadeUp(delay)}
      className={`group block w-fit text-[10px] font-normal leading-tight text-[#F5F0E8]/95 transition duration-500 hover:text-[#F5F0E8] sm:text-[12px] md:text-[17px] md:font-medium ${
        isArabic ? "font-[var(--font-arabic-serif)]" : "font-[var(--font-cormorant)]"
      }`}
    >
      <motion.span
        className="block"
        whileHover={{ x: isArabic ? -5 : 5 }}
        transition={{ duration: 0.45, ease: footerEase }}
      >
        {label}
      </motion.span>
      <span className={`mt-1 block h-px w-0 bg-[#F1ECE3]/55 transition-all duration-500 group-hover:w-full ${
        isArabic ? "mr-auto" : "ml-0"
      }`} />
    </motion.a>
  );
}

function SocialIcon({ item, delay }: { item: SocialLink; delay: number }) {
  const Icon = item.icon;
  const content = (
    <motion.span
      className="flex h-8 w-8 items-center justify-center text-[#F5F0E8] transition duration-300 hover:text-white md:h-10 md:w-10"
      variants={fadeUp(delay)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: footerEase }}
    >
      <Icon className="h-[21px] w-[21px] md:h-[23px] md:w-[23px]" aria-hidden="true" />
    </motion.span>
  );

  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      aria-label={item.name}
    >
      {content}
    </a>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.16 8.18V6.94c0-.6.41-.74.7-.74h1.78V3.12L14.19 3.1c-2.72 0-3.34 2.03-3.34 3.33v1.75H8.68v3.16h2.17v9.56h3.31v-9.56h2.45l.32-3.16h-2.77Z" />
    </svg>
  );
}

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 3.2a8.68 8.68 0 0 0-7.43 13.17L3.6 20.8l4.54-1a8.67 8.67 0 1 0 3.9-16.6Zm0 15.83a7.13 7.13 0 0 1-3.63-.99l-.26-.15-2.69.59.6-2.62-.17-.27a7.13 7.13 0 1 1 6.15 3.44Zm3.93-5.34c-.22-.11-1.28-.63-1.48-.7-.2-.08-.35-.11-.49.11-.14.21-.56.7-.68.84-.13.15-.25.16-.47.06-.22-.11-.92-.34-1.75-1.08a6.56 6.56 0 0 1-1.21-1.5c-.13-.22-.01-.34.1-.45.1-.1.22-.25.33-.38.11-.13.15-.22.22-.36.07-.15.04-.27-.02-.38-.05-.11-.49-1.18-.67-1.62-.18-.42-.36-.36-.49-.37h-.42c-.14 0-.38.05-.58.27-.2.22-.76.74-.76 1.81 0 1.07.78 2.1.89 2.25.11.14 1.53 2.34 3.71 3.28.52.22.92.35 1.24.45.52.17.99.14 1.36.09.42-.06 1.28-.52 1.46-1.03.18-.5.18-.94.13-1.03-.05-.09-.2-.14-.42-.25Z" />
    </svg>
  );
}

function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M15.5 3.2c.28 2.2 1.5 3.5 3.58 3.64v3.05a6.4 6.4 0 0 1-3.5-1.04v5.9c0 3-1.9 5.15-4.86 5.15-2.7 0-4.78-1.8-4.78-4.44 0-2.86 2.2-4.57 5.24-4.37v3.16c-1.36-.22-2.2.34-2.2 1.35 0 .88.71 1.45 1.66 1.45 1.08 0 1.74-.64 1.74-2.12V3.2h3.12Z" />
    </svg>
  );
}

function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.34 7.47a3.02 3.02 0 0 0-.55-1.36 1.94 1.94 0 0 0-1.36-.58C17.53 5.38 12 5.38 12 5.38s-5.53 0-7.43.15a1.94 1.94 0 0 0-1.36.58 3.02 3.02 0 0 0-.55 1.36 31.6 31.6 0 0 0-.15 2.22v1.04c0 .8.05 1.55.15 2.22.1.5.28.96.55 1.36.35.36.8.55 1.36.58 1.9.15 7.43.15 7.43.15s5.53 0 7.43-.15a1.94 1.94 0 0 0 1.36-.58c.27-.4.45-.86.55-1.36.1-.67.15-1.42.15-2.22V9.69c0-.8-.05-1.55-.15-2.22ZM10.1 12.7V8.65l5.28 2.04-5.28 2.01Z" />
    </svg>
  );
}

function EmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.4 7.1 7.6 5.55 7.6-5.55" />
    </svg>
  );
}

function fadeUp(delay: number): Variants {
  return {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: footerEase,
      },
    },
  };
}
