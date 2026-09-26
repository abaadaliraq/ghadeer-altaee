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
    ar: "بوابات إلى عالم غدير",
    en: "Gateways to Ghadeer's World",
  },
  description: {
    ar: "ستة أبواب تقود إلى الفنان، أسلوبه، طريقته في العمل، وذاكرته البغدادية.",
    en: "Six gateways into the artist, his language, his way of working and his Baghdadi memory.",
  },
};

const revealViewport = { once: true, margin: "-90px" };
const posterEase = [0.22, 1, 0.36, 1] as const;

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
          className="grid grid-cols-2 gap-x-4 gap-y-7 md:grid-cols-3 md:gap-x-7 md:gap-y-9 lg:gap-x-9 lg:gap-y-11"
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
  const title = localized(gateway.title, locale);
  const subtitle = localized(gateway.subtitle, locale);
  const imageScale = gateway.treatment === "close" ? "scale-[1.11]" : "scale-100";
  const darkTreatment =
    gateway.treatment === "exhibition" ? "contrast-[1.04] brightness-[0.9]" : "";
  const titleSize =
    gateway.treatment === "large-title" || gateway.treatment === "exhibition"
      ? isArabic
        ? "text-[23px] md:text-[36px]"
        : "text-[25px] md:text-[39px]"
      : isArabic
        ? "text-[19px] md:text-[28px]"
        : "text-[21px] md:text-[31px]";
  const typographyShift =
    gateway.treatment === "type-led" ? "md:grid md:grid-cols-[1fr_auto] md:items-end" : "";

  return (
    <motion.article
      className="group min-w-0"
      variants={fadeUp(0.08 + index * 0.075)}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -10,
            }
      }
      transition={{ duration: 0.55, ease: posterEase }}
    >
      <Link
        href={`/${locale}/gateways/${gateway.slug}`}
        className="relative block aspect-[0.72] min-h-[235px] overflow-hidden border border-[#E8E1D5]/20 bg-[#E8E1D5] text-[#141310] shadow-[0_0_0_rgba(0,0,0,0)] transition-[border-color,box-shadow,transform] duration-700 hover:border-[#B69B70]/80 hover:shadow-[0_26px_60px_rgba(0,0,0,0.32)] focus:outline-none focus-visible:border-[#B69B70] sm:min-h-[280px] md:aspect-[0.74] md:min-h-[430px]"
      >
        <div className="relative h-[72%] overflow-hidden bg-[#d8cdbb]">
          {gateway.image ? (
            <>
              <motion.div
                className="absolute inset-0"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        scale: 1.065,
                        x: gateway.treatment === "process" ? 7 : 0,
                        y: gateway.treatment === "close" ? -5 : 0,
                      }
                }
                transition={{ duration: 0.7, ease: posterEase }}
              >
                <Image
                  src={gateway.image}
                  alt={title}
                  fill
                  sizes="(max-width: 767px) 50vw, 33vw"
                  className={`object-cover ${imageScale} ${darkTreatment}`}
                  style={{ objectPosition: gateway.imagePosition }}
                />
              </motion.div>
              <div className="absolute inset-0 bg-[#11110F]/18 transition-colors duration-700 group-hover:bg-[#11110F]/4" />
            </>
          ) : (
            <div className="absolute inset-0 bg-[#ddd3c2]" />
          )}
          {gateway.eyebrow ? (
            <span className="absolute left-3 top-3 font-[var(--font-inter)] text-[7px] uppercase tracking-[0.18em] text-[#F1ECE3]/72 md:left-4 md:top-4 md:text-[8px]">
              {localized(gateway.eyebrow, locale)}
            </span>
          ) : null}
          <div className="absolute inset-x-0 bottom-0 h-px bg-[#B69B70]/0 transition-colors duration-700 group-hover:bg-[#B69B70]/70" />
        </div>

        <div className="relative flex h-[28%] flex-col justify-between px-3 py-3 sm:px-4 sm:py-4 md:px-5 md:py-5">
          <div className={typographyShift}>
            <p className="font-[var(--font-inter)] text-[8px] tracking-[0.28em] text-[#141310]/45 md:text-[9px]">
              {gateway.number}
            </p>

            <h3
              className={`mt-1.5 max-w-[94%] font-normal leading-[1.05] text-[#141310] transition-transform duration-700 group-hover:-translate-y-1 ${
                isArabic ? "font-[var(--font-arabic-serif)]" : "font-[var(--font-cormorant)]"
              } ${titleSize}`}
            >
              {title}
            </h3>
            <p
              className={`mt-1.5 max-w-[92%] text-[#141310]/58 transition-opacity duration-700 group-hover:text-[#141310]/72 ${
                isArabic
                  ? "font-[var(--font-arabic-serif)] text-[9px] leading-[1.45] md:text-[11px]"
                  : "font-[var(--font-inter)] text-[9px] leading-[1.45] md:text-[10px]"
              }`}
            >
              {subtitle}
            </p>
          </div>

          <div className="flex items-end justify-end">
            <span className="shrink-0 font-[var(--font-inter)] text-[17px] leading-none text-[#8E6F40] transition-transform duration-700 group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function fadeUp(delay: number): Variants {
  return {
    hidden: {
      opacity: 0,
      y: 30,
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
