"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type ArtistNumbersProps = {
  lang: "ar" | "en";
};

const stats = [
  {
    prefix: "+",
    value: 33,
    label: {
      ar: "سنة من الممارسة الاحترافية",
      en: "years of professional practice",
    },
  },
  {
    prefix: "≈",
    value: 50,
    label: {
      ar: "عملاً فنياً بنائياً ومعمارياً",
      en: "architectural and wall-based artworks",
    },
  },
  {
    prefix: "",
    value: 13,
    label: {
      ar: "عملاً فنياً ونحتياً متحركاً",
      en: "movable artistic and sculptural works",
    },
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ArtistNumbers({ lang }: ArtistNumbersProps) {
  const isArabic = lang === "ar";
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full bg-[#0D0F0C] px-5 py-10 text-[#F2EFE7] sm:px-7 md:px-10 md:py-12 lg:px-16"
    >
      <motion.div
        className="mx-auto grid min-h-[240px] w-full max-w-[1400px] grid-cols-1 divide-y divide-[#F2EFE7]/14 border-y border-[#F2EFE7]/12 md:min-h-[340px] md:grid-cols-3 md:divide-x md:divide-y-0 md:divide-x-reverse"
        initial={reduceMotion ? false : "hidden"}
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.value}
            className="flex min-h-[120px] flex-col items-center justify-center px-4 py-6 text-center md:min-h-0 md:py-8"
            variants={{
              hidden: {
                opacity: 0,
                y: reduceMotion ? 0 : 24,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.78,
                  delay: index * 0.04,
                  ease,
                },
              },
            }}
          >
            <p className="font-[var(--font-cormorant)] text-[54px] font-normal leading-none text-[#F2EFE7] md:text-[76px] lg:text-[88px]">
              {stat.prefix}
              <CountUp
                value={stat.value}
                active={inView}
                delay={index * 140}
                reduceMotion={Boolean(reduceMotion)}
              />
            </p>
            <p
              className={`mt-4 max-w-[230px] text-[#F2EFE7]/64 ${
                isArabic
                  ? "font-[var(--font-arabic-serif)] text-[15px] leading-[1.75] md:text-[17px]"
                  : "font-[var(--font-inter)] text-[12px] uppercase leading-[1.7] tracking-[0.12em]"
              }`}
            >
              {stat.label[lang]}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

function CountUp({
  value,
  active,
  delay,
  reduceMotion,
}: {
  value: number;
  active: boolean;
  delay: number;
  reduceMotion: boolean;
}) {
  const [count, setCount] = useState(reduceMotion ? value : 0);
  const displayValue = reduceMotion ? value : count;

  useEffect(() => {
    if (!active || reduceMotion) {
      return;
    }

    let frame = 0;
    let start: number | null = null;
    const duration = 1550;

    function tick(timestamp: number) {
      if (start === null) {
        start = timestamp;
      }

      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(value * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    }

    const timeout = window.setTimeout(() => {
      frame = window.requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      window.cancelAnimationFrame(frame);
    };
  }, [active, delay, reduceMotion, value]);

  return <span>{displayValue}</span>;
}
