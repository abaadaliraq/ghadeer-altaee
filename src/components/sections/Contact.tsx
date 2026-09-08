"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpLeft, ArrowUp } from "lucide-react";

type ContactProps = {
  lang: "ar" | "en";
};

export default function Contact({ lang }: ContactProps) {
  const isArabic = lang === "ar";
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full bg-[#f1eee7] text-[#111]"
    >
      <motion.div
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                y: 28,
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mx-auto
          w-full
          max-w-[1600px]
          px-5
          pb-7
          pt-16
          md:px-10
          md:pb-9
          md:pt-20
          lg:px-16
          lg:pt-24
        "
      >
        {/* TOP LABEL */}
        <div className="flex items-center justify-between border-b border-black/15 pb-5">
          <div className="flex items-center gap-4">
            <span className="text-[9px] tracking-[0.28em] text-black/35">
              04
            </span>

            <span className="h-px w-8 bg-black/25" />

            <span className="text-[9px] uppercase tracking-[0.24em] text-black/45">
              {isArabic ? "تواصل" : "CONTACT"}
            </span>
          </div>

          <a
            href="#home"
            aria-label={isArabic ? "العودة للأعلى" : "Back to top"}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              border
              border-black/20
              transition-colors
              duration-300
              hover:bg-black
              hover:text-white
            "
          >
            <ArrowUp size={14} strokeWidth={1.4} />
          </a>
        </div>

        {/* MAIN */}
        <div
          className="
            grid
            grid-cols-1
            gap-10
            py-12
            md:grid-cols-[1.3fr_0.7fr]
            md:items-end
            md:gap-14
            md:py-16
          "
        >
          {/* LEFT / MAIN TYPOGRAPHY */}
          <div>
            <p
              className={`
                mb-4
                text-black/45
                ${
                  isArabic
                    ? "font-[var(--font-arabic-serif)] text-[14px]"
                    : "font-[var(--font-cormorant)] text-[17px] italic"
                }
              `}
            >
              {isArabic
                ? "للتعاون، المعارض والاستفسارات"
                : "For collaborations, exhibitions and enquiries"}
            </p>

            <h2
              className={`
                max-w-[1000px]
                font-normal
                ${
                  isArabic
                    ? "font-[var(--font-arabic-serif)] text-[46px] leading-[1.08] sm:text-[60px] md:text-[78px] lg:text-[94px]"
                    : "font-[var(--font-cormorant)] text-[58px] leading-[0.82] tracking-[-0.045em] sm:text-[74px] md:text-[96px] lg:text-[118px]"
                }
              `}
            >
              {isArabic ? (
                <>
                  غدير
                  <span className="block text-black/45">
                    الطائي
                  </span>
                </>
              ) : (
                <>
                  Ghadeer
                  <span className="block italic text-black/45">
                    Al-Taee
                  </span>
                </>
              )}
            </h2>
          </div>

          {/* CONTACT COPY */}
          <div className="max-w-[390px]">
            <p
              className={`
                text-black/55
                ${
                  isArabic
                    ? "font-[var(--font-arabic-serif)] text-[14px] leading-[2]"
                    : "text-[12px] leading-[1.9]"
                }
              `}
            >
              {isArabic
                ? "للاستفسار حول الأعمال الفنية، المشاركات، المعارض أو فرص التعاون، يمكن التواصل مباشرة مع الفنان عبر قنواته الرسمية."
                : "For artwork enquiries, exhibitions, commissions or collaborations, connect with the artist through his official channels."}
            </p>

            {/* LINKS */}
            <div className="mt-7 flex flex-col">
              <a
                href="https://www.tiktok.com/@ghadeer_altaee4?lang=en"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-t
                  border-black/15
                  py-4
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-black/65
                  transition-colors
                  hover:text-black
                "
              >
                <span>TikTok</span>

                <ArrowUpLeft
                  size={14}
                  strokeWidth={1.4}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>

              {/* 
                من يرسل الفنان الإيميل، استبدلي # بالإيميل الحقيقي:
                href="mailto:example@email.com"
              */}
              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-y
                  border-black/15
                  py-4
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-black/30
                "
              >
                <span>
                  {isArabic ? "البريد الإلكتروني" : "EMAIL"}
                </span>

                <span className="text-[8px]">
                  {isArabic ? "يضاف لاحقاً" : "TO BE ADDED"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ARTISTIC LINE */}
        <div className="relative overflow-hidden border-t border-black/15 py-6">
          <div
            className="
              whitespace-nowrap
              font-[var(--font-cormorant)]
              text-[24px]
              uppercase
              tracking-[0.14em]
              text-black/[0.12]
              sm:text-[32px]
              md:text-[42px]
            "
          >
            ART — ARCHITECTURE — MEMORY — PLACE — HERITAGE —
            ART — ARCHITECTURE — MEMORY
          </div>
        </div>

        {/* FINAL FOOTER */}
        <footer
          className="
            flex
            flex-col
            gap-3
            border-t
            border-black/15
            pt-5
            text-[8px]
            uppercase
            tracking-[0.18em]
            text-black/35
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>
            © {new Date().getFullYear()}{" "}
            {isArabic ? "غدير الطائي" : "Ghadeer Al-Taee"}
          </span>

          <span>
            {isArabic
              ? "فنان تشكيلي — العراق"
              : "Visual Artist — Iraq"}
          </span>
        </footer>
      </motion.div>
    </section>
  );
}