"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  AtSign,
  Camera,
  Mail,
  MessageCircle,
  Music2,
  Play,
} from "lucide-react";

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
  href?: string;
  icon: typeof Camera;
  external?: boolean;
};

const footerImage = "/images/footer-.jpg";
const phoneNumber = "9647715724399";

const navigationLinks: FooterLink[] = [
  { label: { ar: "الرئيسية", en: "Home" }, href: "#home" },
  { label: { ar: "عن الفنان", en: "About" }, href: "#about" },
  { label: { ar: "الأعمال", en: "Works" }, href: "#works" },
  { label: { ar: "مسارات فنية", en: "Practice" }, href: "#works" },
  { label: { ar: "المعرض", en: "Gallery" }, href: "#works" },
  { label: { ar: "التواصل", en: "Contact" }, href: "#contact" },
];

const legalLinks: FooterLink[] = [
  { label: { ar: "سياسة الخصوصية", en: "Privacy Policy" }, href: "/privacy" },
  { label: { ar: "سياسة الاستخدام", en: "Terms of Use" }, href: "/terms" },
];

const socialLinks: SocialLink[] = [
  { name: "Instagram", icon: Camera },
  { name: "Facebook", icon: AtSign },
  {
    name: "WhatsApp",
    href: `https://wa.me/${phoneNumber}`,
    icon: MessageCircle,
    external: true,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@ghadeer_altaee4?lang=en",
    icon: Music2,
    external: true,
  },
  { name: "YouTube", icon: Play },
  { name: "Email", href: "mailto:", icon: Mail },
];

const revealViewport = { once: true, margin: "-120px" };
const footerEase = [0.22, 1, 0.36, 1] as const;

export default function Contact({ lang, linkBase = "" }: ContactProps) {
  const isArabic = lang === "ar";
  const reduceMotion = useReducedMotion();

  return (
    <footer
      id="contact"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative h-[360px] w-full overflow-hidden bg-[#100f0d] text-[#F1ECE3] sm:h-[400px] md:h-[460px] lg:h-[500px]"
    >
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.02, opacity: 0.96 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={revealViewport}
        transition={{ duration: 1, ease: footerEase }}
      >
        <Image
          src={footerImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_bottom]"
          priority={false}
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,9,7,0.18),rgba(10,9,7,0.08)_42%,rgba(10,9,7,0.28)_100%)]" />

      <motion.div
        className="relative z-10 mx-auto flex h-full w-full max-w-[1500px] flex-col justify-between px-5 py-6 sm:px-6 md:px-10 md:py-8 lg:px-16"
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={revealViewport}
      >
        <div
          className={`flex items-start gap-8 ${
            isArabic ? "self-end text-right" : "self-start text-left"
          }`}
        >
          <motion.nav
            className="space-y-2 md:space-y-2.5"
            variants={fadeUp(0)}
            aria-label={isArabic ? "روابط الفوتر" : "Footer navigation"}
          >
            {navigationLinks.map((item) => (
              <FooterNavLink
                key={item.href + item.label.en}
                href={`${linkBase}${item.href}`}
                label={isArabic ? item.label.ar : item.label.en}
                isArabic={isArabic}
              />
            ))}
          </motion.nav>

          <motion.div
            className="flex flex-col items-center gap-2 pt-1"
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
        </div>

        <motion.div
          className="flex items-end justify-between gap-5 pb-1"
          variants={fadeUp(0.32)}
        >
          <nav
            className="space-y-1.5"
            aria-label={isArabic ? "روابط قانونية" : "Legal links"}
          >
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={`/${lang}${item.href}`}
                className="block font-[var(--font-inter)] text-[7px] uppercase tracking-[0.14em] text-[#F1ECE3]/42 transition duration-500 hover:translate-x-1 hover:text-[#F1ECE3]/80"
              >
                {isArabic ? item.label.ar : item.label.en}
              </Link>
            ))}
          </nav>

          <div className="text-end font-[var(--font-inter)] text-[7px] uppercase tracking-[0.16em] text-[#F1ECE3]/42">
            <p>© 2026 Ghadeer Al-Taee</p>
            <p className="mt-1">{isArabic ? "فنان تشكيلي — بغداد" : "Visual Artist — Baghdad"}</p>
            <p className="mt-1">Developed by Abaad Aliraq</p>
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
}: {
  href: string;
  label: string;
  isArabic: boolean;
}) {
  return (
    <a
      href={href}
      className={`group block w-fit text-[15px] font-light leading-tight text-[#F1ECE3]/78 transition duration-500 hover:translate-x-1 hover:text-[#F1ECE3] md:text-[18px] ${
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
    </a>
  );
}

function SocialIcon({ item, delay }: { item: SocialLink; delay: number }) {
  const Icon = item.icon;
  const content = (
    <motion.span
      className="flex h-8 w-8 items-center justify-center border border-[#F1ECE3]/22 text-[#F1ECE3]/76 transition duration-500 hover:border-[#F1ECE3]/55 hover:text-[#F1ECE3] md:h-9 md:w-9"
      variants={fadeUp(delay)}
      whileHover={{ y: -3, scale: 1.06 }}
      transition={{ duration: 0.45, ease: footerEase }}
    >
      <Icon size={17} strokeWidth={1.35} aria-hidden="true" />
    </motion.span>
  );

  if (!item.href) {
    return (
      <span aria-label={`${item.name} link not set`} className="cursor-default opacity-50">
        {content}
      </span>
    );
  }

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
