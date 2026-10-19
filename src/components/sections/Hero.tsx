"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpLeft } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type HeroProps = {
  lang: "ar" | "en";
};

export default function Hero({ lang }: HeroProps) {
  const isArabic = lang === "ar";
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative h-[92vh] min-h-[680px] w-full overflow-hidden bg-[#080808]"
    >
      {/* IMAGE */}
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/images/artist/ghadeer.jpg"
          alt={
            isArabic
              ? "الفنان التشكيلي غدير الطائي"
              : "Iraqi visual artist Ghadeer Al-Taee"
          }
          fill
          priority
          sizes="100vw"
          quality={100}
          unoptimized
          className="object-cover object-[24%_center] md:object-center"
        />
      </motion.div>

      {/* CINEMATIC OVERLAYS */}

      {/* overall darkness */}
      <div className="absolute inset-0 bg-black/10" />

      {/* top fade for navbar */}
      <div className="absolute inset-x-0 top-0 h-[220px] bg-gradient-to-b from-black/55 via-black/20 to-transparent" />

      {/* bottom cinematic fade */}
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

      {/* side fade - keeps copy readable */}
      <div
        className={`absolute inset-y-0 w-[60%] ${
          isArabic
            ? "right-0 bg-gradient-to-l from-black/65 via-black/15 to-transparent"
            : "left-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent"
        }`}
      />

      {/* subtle vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.3)]" />

      {/* HERO CONTENT */}
      <div
        className={`
          absolute bottom-[12%] z-20
          w-full
          px-5
          md:px-12
          lg:px-16
        `}
      >
        <motion.div
          className={`max-w-[340px] md:max-w-[590px] ${
            isArabic
              ? "ml-auto mr-0 text-right md:mr-[9vw] lg:mr-[11vw]"
              : "ml-0 mr-auto text-left md:ml-[9vw] lg:ml-[11vw]"
          }`}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={heroStagger}
        >
          {/* TITLE */}
          <motion.h1
            className={`
              text-white
              ${
                isArabic
                  ? "font-[var(--font-arabic-serif)] text-[clamp(38px,11vw,86px)] font-normal leading-[1.08] md:whitespace-nowrap"
                  : "font-[var(--font-cormorant)] text-[clamp(56px,8vw,108px)] leading-[0.9] tracking-[-0.035em] md:whitespace-nowrap"
              }
            `}
            variants={heroItem(0)}
          >
            {isArabic ? "غدير الطائي" : "Ghadeer Al-Taee"}
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            className={`
              mt-4 max-w-[560px]
              text-white/78
              ${
                isArabic
                  ? "font-[var(--font-arabic-serif)] text-[15px] leading-[1.85] md:text-[18px]"
                  : "font-[var(--font-inter)] text-[14px] leading-[1.9] md:text-[15px]"
              }
            `}
            variants={heroItem(0.1)}
          >
            {isArabic
              ? "فنان تشكيلي عراقي تستكشف تجربته ذاكرة بغداد وعمارتها التراثية وتفاصيلها المتوارثة، وتعيد صياغة أثر المكان في أعمال تُبنى يدوياً بدقة وصبر."
              : "An Iraqi visual artist exploring Baghdad's architectural memory, heritage houses and inherited details, transforming place and history into contemporary visual works."}
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className={`mt-6 flex flex-wrap items-center gap-3 ${
              isArabic ? "justify-start" : "justify-start"
            }`}
            variants={heroItem(0.18)}
          >

            <Link
              href={`/${lang}#works`}
              className="
                group
                inline-flex
                h-10
                md:h-12
                items-center
                gap-2
                md:gap-3
                bg-white
                px-4
                md:px-6
                text-[10px]
                md:text-[11px]
                font-medium
                tracking-[0.12em]
                text-black
                transition-all
                duration-300
                hover:bg-white/85
              "
            >
              {isArabic ? "استكشف الأعمال" : "EXPLORE WORKS"}

              <ArrowUpLeft
                size={15}
                className={`
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                  group-hover:-translate-y-1
                  ${!isArabic ? "rotate-90" : ""}
                `}
              />
            </Link>

            <Link
              href={`/${lang}/gateways/about-ghadeer`}
              className="
                inline-flex
                h-10
                md:h-12
                items-center
                border
                border-white/30
                bg-white/[0.04]
                px-4
                md:px-6
                text-[10px]
                md:text-[11px]
                font-medium
                tracking-[0.12em]
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-white/60
                hover:bg-white/10
              "
            >
              {isArabic ? "عن غدير الطائي" : "ABOUT GHADEER"}
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL */}
      <motion.a
        href="#works"
        aria-label="Scroll to works"
        className="
          absolute
          bottom-5
          left-1/2
          z-30
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-white/50
          transition-colors
          hover:text-white
        "
        initial={reduceMotion ? false : { opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-[8px] uppercase tracking-[0.28em]">
          Scroll
        </span>

        <ArrowDown size={14} />
      </motion.a>
    </section>
  );
}

const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function heroItem(delay: number): Variants {
  return {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.82,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
}
