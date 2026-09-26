"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Contact from "@/components/sections/Contact";
import type { Locale } from "@/lib/gateways";

type AboutGhadeerGatewayProps = {
  lang: Locale;
};

const artistImage = "/images/artist/ghadeer.jpg";
const posterEase = [0.22, 1, 0.36, 1] as const;

const copy = {
  ar: {
    label: "عن الفنان — 01",
    title: "غدير غازي الطائي",
    body: "غدير غازي الطائي فنان تشكيلي ونحات عراقي من بغداد، عضو نقابة الفنانين العراقيين. تمتد تجربته بين النحت والحفر والزجاج المعشّق والفسيفساء والاستنساخ الأثري والعمارة التراثية والماكيتات، مع اهتمام خاص بالتفاصيل الدقيقة وذاكرة المكان.",
    back: "العودة إلى البوابات",
    imageAlt: "الفنان التشكيلي غدير غازي الطائي",
    details: [
      "بغداد، العراق",
      "مواليد 1968",
      "عضو نقابة الفنانين العراقيين",
      "فنان تشكيلي ونحات",
    ],
    caption: "ذاكرة المكان والتفاصيل الدقيقة",
    note: "نحت، حفر، زجاج معشّق، فسيفساء",
  },
  en: {
    label: "About the Artist — 01",
    title: "Ghadeer Ghazi Al-Taee",
    body: "Ghadeer Ghazi Al-Taee is an Iraqi visual artist and sculptor from Baghdad, and a member of the Iraqi Artists Syndicate. His practice spans sculpture, engraving, stained glass, mosaic, archaeological reproduction, heritage architecture and maquettes, with special attention to fine detail and the memory of place.",
    back: "Back to Gateways",
    imageAlt: "Iraqi visual artist Ghadeer Ghazi Al-Taee",
    details: [
      "Baghdad, Iraq",
      "Born 1968",
      "Member of the Iraqi Artists Syndicate",
      "Visual artist and sculptor",
    ],
    caption: "Memory of place and fine details",
    note: "Sculpture, engraving, stained glass, mosaic",
  },
};

export default function AboutGhadeerGateway({ lang }: AboutGhadeerGatewayProps) {
  const reduceMotion = useReducedMotion();
  const isArabic = lang === "ar";
  const text = copy[lang];

  return (
    <>
      <main
        id="about"
        dir={isArabic ? "rtl" : "ltr"}
        className="min-h-screen bg-[#F7F5F0] text-[#1C1A16]"
      >
        <motion.section
          className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-5 pb-12 pt-28 sm:px-7 md:px-10 md:pb-16 md:pt-32 lg:px-16"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={stagger}
        >
          <div className="grid gap-8 md:grid-cols-[0.82fr_1.28fr_0.82fr] md:items-start md:gap-9 lg:gap-12">
            <motion.div
              className="order-1 space-y-5 md:order-none md:pt-6"
              variants={fadeUp(0)}
            >
              <p className="font-[var(--font-inter)] text-[10px] uppercase tracking-[0.24em] text-[#1C1A16]/52">
                {text.label}
              </p>
              <Link
                href={`/${lang}#works`}
                className="inline-flex w-fit items-center gap-3 border-b border-[#1C1A16]/18 pb-2 font-[var(--font-inter)] text-[9px] uppercase tracking-[0.2em] text-[#1C1A16]/55 transition-colors duration-500 hover:text-[#1C1A16]"
              >
                {text.back}
                <span aria-hidden="true">↙</span>
              </Link>
            </motion.div>

            <motion.div className="order-3 md:order-none" variants={imageReveal}>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden bg-[#E4DED2] md:max-w-[560px] lg:max-w-[600px]">
                <Image
                  src={artistImage}
                  alt={text.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 767px) 92vw, 46vw"
                  className="object-cover object-center"
                />
              </div>
            </motion.div>

            <motion.div
              className="order-2 space-y-5 text-right md:order-none md:pt-6"
              variants={fadeUp(0.08)}
            >
              <h1
                className={`font-normal leading-[1.08] text-[#1C1A16] ${
                  isArabic
                    ? "font-[var(--font-arabic-serif)] text-[40px] md:text-[48px] lg:text-[58px]"
                    : "font-[var(--font-cormorant)] text-[42px] md:text-[52px] lg:text-[62px]"
                }`}
              >
                {text.title}
              </h1>
              <p className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.24em] text-[#9A7B4F]">
                Visual Artist / Sculptor
              </p>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-8 border-t border-[#1C1A16]/12 pt-8 md:mt-12 md:grid-cols-[0.82fr_1.28fr_0.82fr] md:gap-9 lg:gap-12">
            <motion.ul
              className="space-y-3 font-[var(--font-arabic-serif)] text-[13px] leading-[1.9] text-[#1C1A16]/62 md:text-[14px]"
              variants={fadeUp(0.14)}
            >
              {text.details.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-px w-5 bg-[#9A7B4F]/55" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.p
              className={`max-w-[640px] text-[#1C1A16]/76 ${
                isArabic
                  ? "font-[var(--font-arabic-serif)] text-[20px] leading-[2.05] md:text-[23px]"
                  : "font-[var(--font-cormorant)] text-[23px] leading-[1.5] md:text-[27px]"
              }`}
              variants={fadeUp(0.22)}
            >
              {text.body}
            </motion.p>

            <motion.div
              className="space-y-5 font-[var(--font-inter)] text-[9px] uppercase tracking-[0.2em] text-[#1C1A16]/45 md:text-end"
              variants={fadeUp(0.3)}
            >
              <p>{text.caption}</p>
              <p>{text.note}</p>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Contact lang={lang} linkBase={`/${lang}`} />
    </>
  );
}

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

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
        duration: 0.72,
        delay,
        ease: posterEase,
      },
    },
  };
}

const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.95,
      ease: posterEase,
    },
  },
};
