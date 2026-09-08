"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpLeft } from "lucide-react";

type ArtistIntroProps = {
  lang: "ar" | "en";
};

export default function ArtistIntro({ lang }: ArtistIntroProps) {
  const isArabic = lang === "ar";
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      dir={isArabic ? "rtl" : "ltr"}
      className="
        relative
        flex
        min-h-[720px]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-black
        px-5
        py-16
        md:min-h-[760px]
        md:px-10
        md:py-20
        lg:min-h-[820px]
        lg:px-16
      "
    >
      {/* =====================================================
          FULL BACKGROUND IMAGE
      ====================================================== */}

      <Image
        src="/images/artist/ghadeer-workshop.jpg"
        alt=""
        fill
        sizes="100vw"
        className="
          object-cover
          object-center
          scale-[1.04]
        "
      />

      {/* Dark cinematic treatment */}
      <div className="absolute inset-0 bg-black/42" />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/65
          via-black/15
          to-black/30
        "
      />

      {/* Soft blur only behind the card area */}
      <div
        className="
          absolute
          inset-0
          backdrop-blur-[1px]
        "
      />

      {/* ==============================================
          EDITORIAL CARD
      =============================================== */}

      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 26,
                scale: 0.985,
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          grid
          w-full
          max-w-[1180px]
          grid-cols-1
          overflow-hidden
          bg-[#f0eee7]
          text-[#111]
          shadow-[0_35px_100px_rgba(0,0,0,0.35)]
          md:grid-cols-[0.92fr_1.08fr]
        "
      >
        {/* =====================================================
            TEXT SIDE
        ====================================================== */}

        <div
          className="
            order-2
            flex
            min-h-[360px]
            flex-col
            justify-between
            p-6
            sm:p-8
            md:order-1
            md:min-h-[500px]
            md:p-10
            lg:p-12
          "
        >
          {/* TOP */}
          <div>
            <div className="mb-8 flex items-center justify-between">
              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.24em]
                  text-black/55
                "
              >
                {isArabic ? "عن الفنان" : "ABOUT"}
              </span>

              <span
                className="
                  text-[9px]
                  tracking-[0.18em]
                  text-black/40
                "
              >
                03
              </span>
            </div>

            {/* INTRO */}
            <p
              className={`
                max-w-[430px]
                text-[#191919]
                ${
                  isArabic
                    ? "font-[var(--font-arabic-serif)] text-[17px] leading-[1.9] md:text-[19px]"
                    : "font-[var(--font-cormorant)] text-[20px] leading-[1.45] md:text-[22px]"
                }
              `}
            >
              {isArabic
                ? "غدير الطائي فنان تشكيلي عراقي، يستلهم في أعماله تفاصيل المكان والعمارة والذاكرة البصرية، ويعيد صياغتها من خلال مجسمات وأعمال يدوية دقيقة."
                : "Ghadeer Al-Taee is an Iraqi visual artist whose work draws from architecture, place and visual memory, translating them into meticulously crafted artistic forms."}
            </p>

            {/* SMALL INFO */}
            <div
              className="
                mt-8
                grid
                grid-cols-2
                gap-x-6
                gap-y-5
                border-t
                border-black/15
                pt-6
              "
            >
              <InfoItem
                label={isArabic ? "المجال" : "PRACTICE"}
                value={
                  isArabic
                    ? "فن تشكيلي ومجسمات"
                    : "Visual Art & Models"
                }
                isArabic={isArabic}
              />

              <InfoItem
                label={isArabic ? "الهوية" : "IDENTITY"}
                value={
                  isArabic
                    ? "العمارة العراقية"
                    : "Iraqi Architecture"
                }
                isArabic={isArabic}
              />

              <InfoItem
                label={isArabic ? "الاهتمام" : "FOCUS"}
                value={
                  isArabic
                    ? "المكان والذاكرة"
                    : "Place & Memory"
                }
                isArabic={isArabic}
              />

              <InfoItem
                label={isArabic ? "الموقع" : "BASED"}
                value={
                  isArabic
                    ? "العراق"
                    : "Iraq"
                }
                isArabic={isArabic}
              />
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-10">
            <h2
              className={`
                max-w-[520px]
                font-normal
                text-[#111]
                ${
                  isArabic
                    ? "font-[var(--font-arabic-serif)] text-[38px] leading-[1.15] sm:text-[44px] md:text-[52px]"
                    : "font-[var(--font-cormorant)] text-[42px] leading-[0.92] tracking-[-0.04em] sm:text-[50px] md:text-[60px]"
                }
              `}
            >
              {isArabic ? (
                <>
                  غدير
                  <span className="block text-black/60">
                    الطائي
                  </span>
                </>
              ) : (
                <>
                  Ghadeer
                  <span className="block italic text-black/55">
                    Al-Taee
                  </span>
                </>
              )}
            </h2>

            <a
              href="#biography"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-4
                border-b
                border-black/30
                pb-2
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-black/60
                transition-colors
                hover:text-black
              "
            >
              {isArabic ? "اقرأ عن الفنان" : "READ MORE"}

              <ArrowUpLeft
                size={13}
                strokeWidth={1.4}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>
        </div>

        {/* =====================================================
            IMAGE SIDE
        ====================================================== */}

        <div
          className="
            group
            relative
            order-1
            aspect-[16/10]
            overflow-hidden
            bg-[#111]
            md:order-2
            md:aspect-auto
            md:min-h-[500px]
          "
        >
          <Image
            src="/images/artist/ghadeer-workshop.jpg"
            alt={
              isArabic
                ? "غدير الطائي أثناء العمل في الورشة"
                : "Ghadeer Al-Taee working in his studio"
            }
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            className="
              object-cover
              object-center
              transition-transform
              duration-[1400ms]
              ease-out
              group-hover:scale-[1.035]
            "
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/[0.06]" />

          {/* image label */}
          <div
            className="
              absolute
              bottom-4
              left-4
              flex
              items-center
              gap-3
              bg-black/45
              px-3
              py-2
              backdrop-blur-md
              md:bottom-6
              md:left-6
            "
          >
            <span className="h-px w-5 bg-white/50" />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.23em]
                text-white/75
              "
            >
              {isArabic ? "داخل الورشة" : "IN THE STUDIO"}
            </span>
          </div>
        </div>
      </motion.div>

      {/* tiny background index */}
      <div
        className="
          absolute
          bottom-6
          left-6
          z-10
          hidden
          text-[9px]
          uppercase
          tracking-[0.3em]
          text-white/40
          md:block
        "
      >
        ART — ARCHITECTURE — MEMORY
      </div>
    </section>
  );
}

function InfoItem({
  label,
  value,
  isArabic,
}: {
  label: string;
  value: string;
  isArabic: boolean;
}) {
  return (
    <div>
      <p
        className="
          mb-1
          text-[7px]
          font-medium
          uppercase
          tracking-[0.2em]
          text-black/35
        "
      >
        {label}
      </p>

      <p
        className={`
          text-black/70
          ${
            isArabic
              ? "font-[var(--font-arabic-serif)] text-[11px]"
              : "text-[10px] tracking-[0.03em]"
          }
        `}
      >
        {value}
      </p>
    </div>
  );
}