"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type SelectedWorksProps = {
  lang: "ar" | "en";
};

type LocalizedText = {
  ar: string;
  en: string;
};

type FeaturedWork = {
  number: string;
  title: LocalizedText;
  medium: LocalizedText;
  image: string;
  detailImage?: string;
  imagePosition: string;
  detailPosition?: string;
};

const featuredWorks: FeaturedWork[] = [
  {
    number: "01",
    title: {
      ar: "شارع التوراه",
      en: "Torah Street",
    },
    medium: {
      ar: "مجسم فني ثلاثي الأبعاد",
      en: "Three-dimensional art object",
    },
    image: "/images/works/hara-aluhod.jpg",
    detailImage: "/images/works/hara-aluhod.jpg",
    imagePosition: "50% 42%",
    detailPosition: "58% 42%",
  },
  {
    number: "02",
    title: {
      ar: "شناشيل بغداد",
      en: "Shanasheel Baghdad",
    },
    medium: {
      ar: "مجسم فني ثلاثي الأبعاد",
      en: "Three-dimensional art object",
    },
    image: "/images/works/collection-02/work-04.jpg",
    detailImage: "/images/works/collection-02/work-05.jpg",
    imagePosition: "48% 42%",
    detailPosition: "52% 40%",
  },
];

const sectionIntro = {
  label: {
    ar: "مشاهد مختارة",
    en: "Selected Scenes",
  },
  title: {
    ar: "مشاهد من ذاكرة بغداد",
    en: "Scenes from Baghdad Memory",
  },
  description: {
    ar: "عملان يعيدان قراءة تفاصيل المكان والذاكرة البغدادية.",
    en: "Two works reread the details of place and Baghdadi memory.",
  },
};

const revealViewport = { once: true, margin: "-100px" };
const galleryEase = [0.22, 1, 0.36, 1] as const;

export default function SelectedWorks({ lang }: SelectedWorksProps) {
  const isArabic = lang === "ar";
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="works"
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full overflow-hidden bg-[#141310] text-[#E8E1D5]"
    >
      <div className="mx-auto w-full max-w-[1540px] px-5 py-16 sm:px-6 md:px-9 md:py-20 lg:px-14 xl:px-16">
        <BaghdadMemory isArabic={isArabic} reduceMotion={reduceMotion} />
      </div>
    </section>
  );
}

function BaghdadMemory({
  isArabic,
  reduceMotion,
}: {
  isArabic: boolean;
  reduceMotion: boolean | null;
}) {
  return (
    <div>
      <motion.div
        className="mb-12 max-w-[620px] md:mb-16"
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={revealViewport}
      >
        <EditorialLabel
          number="01"
          label={text(sectionIntro.label, isArabic)}
          variants={fadeUp(0)}
        />
        <motion.h2
          className={`mt-5 font-normal leading-[1.08] text-[#F3EBDD] ${
            isArabic
              ? "font-[var(--font-arabic-serif)] text-[36px] md:text-[54px] lg:text-[64px]"
              : "font-[var(--font-cormorant)] text-[42px] md:text-[62px] lg:text-[72px]"
          }`}
          variants={fadeUp(0.12)}
        >
          {text(sectionIntro.title, isArabic)}
        </motion.h2>
        <motion.p
          className={`mt-5 text-[#E8E1D5]/56 ${
            isArabic
              ? "font-[var(--font-arabic-serif)] text-[14px] leading-[1.9]"
              : "font-[var(--font-inter)] text-[12px] leading-[1.8] tracking-[0.02em]"
          }`}
          variants={fadeUp(0.22)}
        >
          {text(sectionIntro.description, isArabic)}
        </motion.p>
      </motion.div>

      <div className="space-y-24 md:space-y-32 lg:space-y-40">
        {featuredWorks.map((work, index) => (
          <FeaturedWorkSpread
            key={work.number}
            work={work}
            isArabic={isArabic}
            isReversed={index === 1}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>
    </div>
  );
}

function FeaturedWorkSpread({
  work,
  isArabic,
  isReversed,
  reduceMotion,
}: {
  work: FeaturedWork;
  isArabic: boolean;
  isReversed: boolean;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.article
      className={`grid items-end gap-7 md:grid-cols-[minmax(220px,0.3fr)_minmax(0,0.7fr)] md:gap-10 lg:gap-14 ${
        isReversed ? "md:grid-flow-col-dense" : ""
      }`}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={revealViewport}
    >
      <motion.div
        className={`max-w-[360px] ${isReversed ? "md:col-start-2 md:justify-self-end" : ""}`}
        variants={fadeUp(0.08)}
      >
        <p className="font-[var(--font-inter)] text-[10px] uppercase tracking-[0.3em] text-[#E8E1D5]/42">
          {work.number}
        </p>
        <h3
          className={`mt-4 font-normal leading-[1.1] text-[#F3EBDD] ${
            isArabic
              ? "font-[var(--font-arabic-serif)] text-[31px] md:text-[42px]"
              : "font-[var(--font-cormorant)] text-[36px] md:text-[50px]"
          }`}
        >
          {text(work.title, isArabic)}
        </h3>
        <p
          className={`mt-4 text-[#E8E1D5]/55 ${
            isArabic
              ? "font-[var(--font-arabic-serif)] text-[13px]"
              : "font-[var(--font-inter)] text-[11px] uppercase tracking-[0.18em]"
          }`}
        >
          {text(work.medium, isArabic)}
        </p>
        <div className="mt-7 h-px w-28 bg-[#E8E1D5]/22" />
      </motion.div>

      <motion.div
        className={`relative min-w-0 ${isReversed ? "md:col-start-1" : ""}`}
        variants={fadeUp(0.18)}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#201d18] md:aspect-[16/10]">
          <motion.div
            className="absolute inset-0"
            whileHover={reduceMotion ? undefined : { scale: 1.014 }}
            transition={{ duration: 0.9, ease: galleryEase }}
          >
            <Image
              src={work.image}
              alt={text(work.title, isArabic)}
              fill
              sizes="(max-width: 767px) 100vw, 70vw"
              unoptimized={work.image.includes("hara-aluhod")}
              className="object-cover"
              style={{ objectPosition: work.imagePosition }}
            />
          </motion.div>
        </div>

        {work.detailImage ? (
          <motion.div
            className={`mt-4 w-[42%] min-w-[120px] max-w-[220px] md:absolute md:bottom-[-42px] md:mt-0 ${
              isReversed ? "md:right-8" : "md:left-8"
            }`}
            variants={fadeUp(0.3)}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-[#201d18]">
              <Image
                src={work.detailImage}
                alt={`${text(work.title, isArabic)} detail`}
                fill
                sizes="(max-width: 767px) 42vw, 220px"
                unoptimized={work.detailImage.includes("hara-aluhod")}
                className="object-cover"
                style={{ objectPosition: work.detailPosition }}
              />
            </div>
          </motion.div>
        ) : null}
      </motion.div>
    </motion.article>
  );
}

function EditorialLabel({
  number,
  label,
  variants,
}: {
  number: string;
  label: string;
  variants: Variants;
}) {
  return (
    <motion.div
      className="flex items-center gap-3 font-[var(--font-inter)] text-[9px] uppercase tracking-[0.24em] text-[#E8E1D5]/44"
      variants={variants}
    >
      <span>{number}</span>
      <span className="h-px w-8 bg-[#E8E1D5]/22" />
      <span>{label}</span>
    </motion.div>
  );
}

function text(value: LocalizedText, isArabic: boolean) {
  return isArabic ? value.ar : value.en;
}

function fadeUp(delay: number): Variants {
  return {
    hidden: {
      opacity: 0,
      y: 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        delay,
        ease: galleryEase,
      },
    },
  };
}
