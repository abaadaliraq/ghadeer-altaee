"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { gateways, localized, type Gateway, type Locale } from "@/lib/gateways";

type ArtistIntroProps = {
  lang: "ar" | "en";
};

const sectionCopy = {
  label: {
    ar: "تجربة الفنان",
    en: "Artist Practice",
  },
  title: {
    ar: "بوابات إلى أعمال غدير الطائي",
    en: "Gateways to Ghadeer Al-Taee's Work",
  },
  description: {
    ar: "ستة أبواب تقود إلى الفنان غدير الطائي، أسلوبه، طريقته في العمل، وذاكرته البغدادية.",
    en: "Six gateways into Iraqi visual artist Ghadeer Al-Taee, his language, his way of working and his Baghdadi memory.",
  },
};

const cardCopy = {
  explore: { ar: "استكشف القسم", en: "Explore section" },
};

const revealViewport = { once: true, margin: "-90px" };
const posterEase = [0.22, 1, 0.36, 1] as const;
const cardPalettes = [
  {
    background: "linear-gradient(145deg, #E7DDC9 0%, #CDBB9D 100%)",
    border: "rgba(230, 220, 202, 0.28)",
  },
  {
    background: "linear-gradient(145deg, #D8CFB8 0%, #8A8D70 100%)",
    border: "rgba(213, 204, 181, 0.28)",
  },
  {
    background: "linear-gradient(145deg, #D2C3A5 0%, #718478 100%)",
    border: "rgba(190, 178, 148, 0.3)",
  },
  {
    background: "linear-gradient(145deg, #EFE8DA 0%, #A89470 100%)",
    border: "rgba(238, 230, 216, 0.26)",
  },
  {
    background: "linear-gradient(145deg, #C7C3A6 0%, #6D8175 100%)",
    border: "rgba(190, 196, 168, 0.3)",
  },
  {
    background: "linear-gradient(145deg, #DFD2BC 0%, #6F7A63 100%)",
    border: "rgba(222, 210, 188, 0.28)",
  },
];

export default function ArtistIntro({ lang }: ArtistIntroProps) {
  const locale: Locale = lang;
  const isArabic = locale === "ar";
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="works"
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full overflow-hidden bg-[#11110F] text-[#E8E1D5]"
    >
      <div className="mx-auto w-full max-w-[1500px] px-4 py-16 sm:px-5 md:px-9 md:py-22 lg:px-14 lg:py-28 xl:px-16">
        <motion.div
          className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={revealViewport}
        >
          <div>
            <motion.div
              className="flex items-center gap-3 font-[var(--font-inter)] text-[9px] uppercase tracking-[0.24em] text-[#E8E1D5]/45"
              variants={fadeUp(0)}
            >
              <span>03</span>
              <span className="h-px w-8 bg-[#B69B70]/45" />
              <span>{localized(sectionCopy.label, locale)}</span>
            </motion.div>

            <motion.h2
              className={`mt-5 font-normal leading-[1.02] text-[#F3EBDD] ${
                isArabic
                  ? "font-[var(--font-arabic-serif)] text-[40px] md:text-[58px] lg:text-[72px]"
                  : "font-[var(--font-cormorant)] text-[48px] md:text-[68px] lg:text-[84px]"
              }`}
              variants={fadeUp(0.1)}
            >
              {localized(sectionCopy.title, locale)}
            </motion.h2>
          </div>

          <motion.p
            className={`max-w-[430px] text-[#E8E1D5]/58 ${
              isArabic
                ? "font-[var(--font-arabic-serif)] text-[14px] leading-[1.9]"
                : "font-[var(--font-inter)] text-[12px] leading-[1.8]"
            }`}
            variants={fadeUp(0.2)}
          >
            {localized(sectionCopy.description, locale)}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-9"
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={revealViewport}
        >
          {gateways.map((gateway, index) => (
            <GatewayCard
              key={gateway.slug}
              gateway={gateway}
              locale={locale}
              reduceMotion={reduceMotion}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function GatewayCard({
  gateway,
  locale,
  reduceMotion,
  index,
}: {
  gateway: Gateway;
  locale: Locale;
  reduceMotion: boolean | null;
  index: number;
}) {
  const isArabic = locale === "ar";
  const title = localized(gateway.card.title, locale);
  const description = localized(gateway.card.description, locale);
  const imageScale = gateway.treatment === "close" ? "scale-[1.11]" : "scale-100";
  const darkTreatment =
    gateway.treatment === "exhibition" ? "contrast-[1.04] brightness-[0.9]" : "";
  const palette = cardPalettes[index % cardPalettes.length];

  return (
    <motion.article
      className="group min-w-0"
      variants={fadeUp(0.08 + index * 0.075)}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.3, ease: posterEase }}
    >
      <Link
        href={`/${locale}/gateways/${gateway.slug}`}
        className="relative flex h-full flex-col overflow-hidden rounded-[24px] border p-2.5 text-[#141310] transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.24)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B69B70] sm:rounded-[28px] sm:p-3 md:p-4"
        style={{ background: palette.background, borderColor: palette.border }}
      >
        <div className="relative aspect-[1/0.92] shrink-0 overflow-hidden rounded-[18px] bg-[#d8cdbb] md:rounded-[22px]">
          {gateway.image ? (
            <>
              <Image
                src={gateway.image}
                alt={title}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className={`object-cover ${imageScale} ${darkTreatment}`}
                style={{ objectPosition: gateway.imagePosition }}
              />
              <div className="absolute inset-0 bg-[#11110F]/18" />
            </>
          ) : (
            <div className="absolute inset-0 bg-[#ddd3c2]" />
          )}
          {gateway.eyebrow ? (
            <span className="absolute left-3 top-3 font-[var(--font-inter)] text-[7px] uppercase tracking-[0.18em] text-[#F1ECE3]/72 md:left-4 md:top-4 md:text-[8px]">
              {localized(gateway.eyebrow, locale)}
            </span>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col items-center px-2 pb-2 pt-4 text-center md:pt-5">
          <h3
            className={`w-full text-pretty font-normal text-[#141310] ${
              isArabic
                ? "font-[var(--font-arabic-serif)] text-[25px] leading-[1.5] xl:text-[28px]"
                : "font-[var(--font-cormorant)] text-[27px] leading-[1.2] xl:text-[30px]"
            }`}
          >
            {title}
          </h3>
          <p
            className={`mt-2 w-full text-pretty text-[#141310]/80 ${
              isArabic
                ? "font-[var(--font-arabic-serif)] text-[16px] leading-[1.8]"
                : "font-[var(--font-inter)] text-[13px] leading-[1.7]"
            }`}
          >
            {description}
          </p>
          <span
            className={`mt-auto inline-flex items-center gap-2 pt-4 text-[#141310]/80 ${
              isArabic
                ? "font-[var(--font-arabic-serif)] text-[14px] leading-[1.6]"
                : "font-[var(--font-inter)] text-[12px] leading-[1.6]"
            }`}
          >
            <span>{localized(cardCopy.explore, locale)}</span>
            <span aria-hidden="true">{isArabic ? "←" : "→"}</span>
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

function fadeUp(delay: number): Variants {
  return {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.78,
        delay,
        ease: posterEase,
      },
    },
  };
}
