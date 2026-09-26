"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Contact from "@/components/sections/Contact";
import type { Locale } from "@/lib/gateways";

type Artwork = {
  number: string;
  title: string;
  dimensions: {
    width: string;
    height: string;
    depth: string;
  };
  image?: string;
};

type MemoryBaghdadPageProps = {
  lang: Locale;
};

const memoryEase = [0.22, 1, 0.36, 1] as const;

const artworks: Artwork[] = [
  {
    number: "01",
    title: "شناشيل بغداد",
    dimensions: {
      width: "170 سم",
      height: "60 سم",
      depth: "50 سم",
    },
    image: "/images/Gateways/gate-03.jpg",
  },
  {
    number: "02",
    title: "حارة اليهود",
    dimensions: {
      width: "120 سم",
      height: "60 سم",
      depth: "40 سم",
    },
    image: "/images/Gateways/gate-04.jpg",
  },
  {
    number: "03",
    title: "",
    dimensions: {
      width: "",
      height: "",
      depth: "",
    },
  },
];

export default function MemoryBaghdadPage({ lang }: MemoryBaghdadPageProps) {
  const reduceMotion = useReducedMotion();
  const isArabic = lang === "ar";
  const visibleArtworks = artworks.filter((artwork) => artwork.title);

  return (
    <>
      <main
        dir={isArabic ? "rtl" : "ltr"}
        className="min-h-screen bg-[#0D0F0C] text-[#F2EFE7]"
      >
        <motion.section
          className="relative min-h-[88vh] overflow-hidden bg-[#0D0F0C]"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: memoryEase }}
        >
          <motion.div
            className="absolute inset-0"
            initial={reduceMotion ? false : { scale: 1.035, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: memoryEase }}
          >
            <Image
              src="/images/Gateways/gate-05.jpg"
              alt="ذاكرة بغداد"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/48" />
          <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0D0F0C] via-[#0D0F0C]/70 to-transparent" />

          <motion.div
            className="relative z-10 mx-auto flex min-h-[88vh] w-full max-w-[1400px] flex-col justify-end px-5 pb-10 pt-28 sm:px-7 md:px-10 md:pb-14 lg:px-16"
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={stagger}
          >
            <motion.p
              className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.24em] text-[#B69B70]"
              variants={fadeUp(0)}
            >
              قريباً — بيت التحفيات
            </motion.p>
            <motion.h1
              className="mt-5 font-[var(--font-arabic-serif)] text-[52px] font-normal leading-[1.08] text-[#F2EFE7] md:text-[78px]"
              variants={fadeUp(0.08)}
            >
              ذاكرة بغداد
            </motion.h1>
            <motion.p
              className="mt-4 max-w-[640px] font-[var(--font-arabic-serif)] text-[20px] leading-[1.8] text-[#F2EFE7]/82 md:text-[25px]"
              variants={fadeUp(0.16)}
            >
              معرض غدير الطائي — قريباً في بيت التحفيات
            </motion.p>
            <motion.p
              className="mt-7 max-w-[760px] font-[var(--font-arabic-serif)] text-[16px] leading-[2.05] text-[#F2EFE7]/62 md:text-[19px]"
              variants={fadeUp(0.24)}
            >
              في معرض «ذاكرة بغداد»، يعود غدير الطائي إلى تفاصيل العمارة البغدادية ويعيد بناء مشاهد منها عبر مجسمات تنفذ يدوياً بدقة عالية. يستعرض المعرض ثلاثة أعمال تتناول المكان والذاكرة والتفاصيل التي شكّلت صورة بغداد في مراحل مختلفة.
            </motion.p>
            <motion.div variants={fadeUp(0.32)}>
              <Link
                href={`/${lang}#works`}
                className="mt-8 inline-flex border-b border-[#F2EFE7]/24 pb-2 font-[var(--font-inter)] text-[9px] uppercase tracking-[0.2em] text-[#F2EFE7]/58 transition-colors duration-500 hover:text-[#F2EFE7]"
              >
                العودة إلى بوابات إلى عالم غدير
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        <section className="px-5 py-10 sm:px-7 md:px-10 md:py-16 lg:px-16">
          <div className="mx-auto w-full max-w-[1400px]">
            <div className="mb-8 flex items-center justify-between gap-6 border-b border-[#F2EFE7]/12 pb-5">
              <p className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.24em] text-[#F2EFE7]/50">
                الأعمال المؤكدة
              </p>
              <p className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.24em] text-[#F2EFE7]/50">
                02 / 03
              </p>
            </div>

            <motion.div
              className="space-y-12 md:space-y-16"
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              {visibleArtworks.map((artwork, index) => (
                <motion.article
                  key={artwork.number}
                  className="grid gap-6 border-b border-[#F2EFE7]/12 pb-12 md:grid-cols-[0.58fr_0.42fr] md:gap-10 md:pb-16"
                  variants={fadeUp(index * 0.08)}
                >
                  {artwork.image ? (
                    <motion.div
                      className="relative aspect-[4/5] overflow-hidden bg-[#171A14] md:aspect-[16/10]"
                      whileHover={reduceMotion ? undefined : { scale: 1.015 }}
                      transition={{ duration: 0.6, ease: memoryEase }}
                    >
                      <Image
                        src={artwork.image}
                        alt={artwork.title}
                        fill
                        sizes="(max-width: 767px) 100vw, 58vw"
                        className="object-cover object-center"
                      />
                    </motion.div>
                  ) : null}

                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="font-[var(--font-inter)] text-[10px] uppercase tracking-[0.28em] text-[#B69B70]">
                        {artwork.number}
                      </p>
                      <h2 className="mt-5 font-[var(--font-arabic-serif)] text-[36px] font-normal leading-tight text-[#F2EFE7] md:text-[48px]">
                        {artwork.title}
                      </h2>
                    </div>

                    <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-[#F2EFE7]/12 pt-5 font-[var(--font-arabic-serif)] text-[#F2EFE7]/64">
                      <div>
                        <dt className="font-[var(--font-inter)] text-[8px] uppercase tracking-[0.2em] text-[#F2EFE7]/42">
                          العرض
                        </dt>
                        <dd className="mt-2 text-[15px]">{artwork.dimensions.width}</dd>
                      </div>
                      <div>
                        <dt className="font-[var(--font-inter)] text-[8px] uppercase tracking-[0.2em] text-[#F2EFE7]/42">
                          الارتفاع
                        </dt>
                        <dd className="mt-2 text-[15px]">{artwork.dimensions.height}</dd>
                      </div>
                      <div>
                        <dt className="font-[var(--font-inter)] text-[8px] uppercase tracking-[0.2em] text-[#F2EFE7]/42">
                          العمق
                        </dt>
                        <dd className="mt-2 text-[15px]">{artwork.dimensions.depth}</dd>
                      </div>
                    </dl>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
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
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.78,
        delay,
        ease: memoryEase,
      },
    },
  };
}
