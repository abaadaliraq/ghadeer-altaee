"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpLeft } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";

type HeroProps = {
  lang: "ar" | "en";
};

export default function Hero({ lang }: HeroProps) {
  const isArabic = lang === "ar";
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.35], [0, reduceMotion ? 0 : 22]);

  return (
    <section
      id="home"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative h-[92vh] min-h-[680px] w-full overflow-hidden bg-[#080808]"
    >
      {/* IMAGE */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY }}
        initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
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
          className="object-cover object-center"
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
          px-6
          md:px-12
          lg:px-16
        `}
      >
        <motion.div
          className={`max-w-[590px] ${isArabic ? "mr-[7vw] text-right md:mr-[9vw] lg:mr-[11vw]" : "ml-[7vw] text-left md:ml-[9vw] lg:ml-[11vw]"}`}
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
                  ? "font-[var(--font-arabic-serif)] text-[clamp(44px,7vw,86px)] font-normal leading-[1.12] md:whitespace-nowrap"
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
              mt-5 max-w-[560px]
              text-white/78
              ${
                isArabic
                  ? "font-[var(--font-arabic-serif)] text-[17px] leading-[1.9] md:text-[18px]"
                  : "font-[var(--font-inter)] text-[14px] leading-[1.9] md:text-[15px]"
              }
            `}
            variants={heroItem(0.1)}
          >
            {isArabic
              ? "تجربة فنية تستكشف ذاكرة بغداد وعمارتها وتفاصيلها المتوارثة، وتعيد صياغة أثر المكان في أعمال تُبنى يدوياً بدقة وصبر."
              : "An artistic practice exploring Iraqi memory, architecture and inherited details — transforming place and history into contemporary visual works."}
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className={`mt-6 flex flex-wrap items-center gap-3 ${
              isArabic ? "justify-end" : "justify-start"
            }`}
            variants={heroItem(0.18)}
          >

            <Link
              href={`/${lang}#works`}
              className="
                group
                inline-flex
                h-12
                items-center
                gap-3
                bg-white
                px-6
                text-[11px]
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
                h-12
                items-center
                border
                border-white/30
                bg-white/[0.04]
                px-6
                text-[11px]
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
              {isArabic ? "عن الفنان" : "ABOUT THE ARTIST"}
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
