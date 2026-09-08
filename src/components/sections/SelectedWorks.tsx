"use client";

import Image from "next/image";
import { ArrowUpLeft } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type SelectedWorksProps = {
  lang: "ar" | "en";
};

type Artwork = {
  image: string;
  arTitle: string;
  enTitle: string;
};

type CollectionData = {
  number: string;
  arTitle: string;
  enTitle: string;
  arDescription: string;
  enDescription: string;
  arLinkLabel: string;
  enLinkLabel: string;
  works: Artwork[];
};

const collectionOne: Artwork[] = [
  {
    image: "/images/works/collection-01/work-01.jpg",
    arTitle: "العمل 01",
    enTitle: "Work 01",
  },
  {
    image: "/images/works/collection-01/work-02.jpg",
    arTitle: "العمل 02",
    enTitle: "Work 02",
  },
  {
    image: "/images/works/collection-01/work-03.jpg",
    arTitle: "العمل 03",
    enTitle: "Work 03",
  },
];

const collectionTwo: Artwork[] = [
  {
    image: "/images/works/collection-02/work-04.jpg",
    arTitle: "العمل 04",
    enTitle: "Work 04",
  },
  {
    image: "/images/works/collection-02/work-05.jpg",
    arTitle: "العمل 05",
    enTitle: "Work 05",
  },
  {
    image: "/images/works/collection-02/work-06.jpg",
    arTitle: "العمل 06",
    enTitle: "Work 06",
  },
];

const collections: CollectionData[] = [
  {
    number: "01",
    arTitle: "مختارات من أعمال غدير الطائي",
    enTitle: "Selected Works",
    arDescription:
      "مختارات من أعمال غدير الطائي، تستكشف تفاصيل المكان والعمارة والذاكرة البصرية من خلال معالجة تشكيلية دقيقة تحمل أثر البيئة العراقية.",
    enDescription:
      "A selection of works exploring place, architecture and visual memory, through a detailed artistic language shaped by the Iraqi environment.",
    arLinkLabel: "المزيد من الأعمال",
    enLinkLabel: "MORE FROM THE COLLECTION",
    works: collectionOne,
  },
  {
    number: "02",
    arTitle: "مختارات من أعمال غدير الطائي",
    enTitle: "Selected Works",
    arDescription:
      "مختارات من أعمال غدير الطائي، تستكشف تفاصيل المكان والعمارة والذاكرة البصرية من خلال معالجة تشكيلية دقيقة تحمل أثر البيئة العراقية.",
    enDescription:
      "A selection of works exploring place, architecture and visual memory, through a detailed artistic language shaped by the Iraqi environment.",
    arLinkLabel: "المزيد من الأعمال",
    enLinkLabel: "MORE FROM THE COLLECTION",
    works: collectionTwo,
  },
];

const revealViewport = { once: true, margin: "-80px" };
const galleryEase = [0.22, 1, 0.36, 1] as const;

export default function SelectedWorks({ lang }: SelectedWorksProps) {
  const isArabic = lang === "ar";
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="works"
      dir={isArabic ? "rtl" : "ltr"}
      className="w-full bg-[#F4F1EA] text-[#24211d]"
    >
      <div className="mx-auto w-full max-w-[1500px] px-3 py-0 sm:px-4 md:px-8 lg:px-12 xl:px-16">
        {collections.map((collection, index) => (
          <Collection
            key={`${collection.number}-${index}`}
            collection={collection}
            isArabic={isArabic}
            reduceMotion={reduceMotion}
            isFirst={index === 0}
          />
        ))}
      </div>
    </section>
  );
}

function Collection({
  collection,
  isArabic,
  reduceMotion,
  isFirst,
}: {
  collection: CollectionData;
  isArabic: boolean;
  reduceMotion: boolean | null;
  isFirst: boolean;
}) {
  return (
    <motion.div
      className={`${isFirst ? "pt-14 md:pt-20 lg:pt-22" : "pt-20 md:pt-24 lg:pt-28"} pb-0`}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={revealViewport}
    >
      <SectionHeading collection={collection} isArabic={isArabic} />
      <ArtworkGrid
        works={collection.works}
        isArabic={isArabic}
        reduceMotion={reduceMotion}
      />
      <CollectionFooter
        isArabic={isArabic}
        label={isArabic ? collection.arLinkLabel : collection.enLinkLabel}
      />
    </motion.div>
  );
}

function SectionHeading({
  collection,
  isArabic,
}: {
  collection: CollectionData;
  isArabic: boolean;
}) {
  return (
    <div className="mx-auto mb-8 flex max-w-[880px] flex-col items-center text-center md:mb-9">
      <motion.div
        className="mb-4 flex items-center justify-center gap-3 font-[var(--font-inter)] text-[8px] font-medium uppercase tracking-[0.2em] text-black/45 md:text-[9px]"
        variants={fadeUp(0)}
      >
        <span>{collection.number}</span>
        <span className="h-px w-7 bg-black/25 md:w-9" />
        <span>{isArabic ? "أعمال مختارة" : "SELECTED WORKS"}</span>
      </motion.div>

      <motion.h2
        className={`max-w-[820px] font-normal leading-[1.08] text-[#211f1b] ${
          isArabic
            ? "font-[var(--font-arabic-serif)] text-[27px] md:text-[42px] lg:text-[46px]"
            : "font-[var(--font-cormorant)] text-[31px] md:text-[50px] lg:text-[56px]"
        }`}
        variants={fadeUp(0.08)}
      >
        {isArabic ? collection.arTitle : collection.enTitle}
      </motion.h2>

      <motion.p
        className={`mt-4 max-w-[660px] text-balance text-black/58 ${
          isArabic
            ? "font-[var(--font-arabic-serif)] text-[12px] leading-[1.9] md:text-[15px]"
            : "font-[var(--font-inter)] text-[11px] leading-[1.75] md:text-[15px]"
        }`}
        variants={fadeUp(0.18)}
      >
        {isArabic ? collection.arDescription : collection.enDescription}
      </motion.p>
    </div>
  );
}

function ArtworkGrid({
  works,
  isArabic,
  reduceMotion,
}: {
  works: Artwork[];
  isArabic: boolean;
  reduceMotion: boolean | null;
}) {
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-4 md:gap-x-7 lg:gap-x-8">
      {works.map((work, index) => (
        <ArtworkItem
          key={work.image}
          work={work}
          index={index}
          isArabic={isArabic}
          reduceMotion={reduceMotion}
        />
      ))}
    </div>
  );
}

function ArtworkItem({
  work,
  index,
  isArabic,
  reduceMotion,
}: {
  work: Artwork;
  index: number;
  isArabic: boolean;
  reduceMotion: boolean | null;
}) {
  const label = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      className={`group min-w-0 ${index === 1 ? "md:translate-y-5" : ""}`}
      variants={fadeUp(0.28 + index * 0.09)}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#e7e0d6]">
        <motion.div
          className="absolute inset-0"
          whileHover={reduceMotion ? undefined : { scale: 1.025 }}
          transition={{ duration: 0.7, ease: galleryEase }}
        >
          <Image
            src={work.image}
            alt={isArabic ? work.arTitle : work.enTitle}
            fill
            sizes="(max-width: 767px) 33vw, (max-width: 1023px) 31vw, 480px"
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/[0.07]" />
      </div>

      <div className="mt-2 flex min-w-0 items-start justify-between gap-2 md:mt-3 md:gap-4">
        <div className="min-w-0">
          <h3
            className={`truncate text-[#343029] transition-colors duration-500 group-hover:text-[#171513] ${
              isArabic
                ? "font-[var(--font-arabic-serif)] text-[10px] font-normal md:text-[13px]"
                : "font-[var(--font-cormorant)] text-[11px] font-normal md:text-[15px]"
            }`}
          >
            {isArabic ? work.arTitle : work.enTitle}
          </h3>

          <p className="mt-0.5 font-[var(--font-inter)] text-[7px] uppercase tracking-[0.14em] text-black/35 md:mt-1 md:text-[9px] md:tracking-[0.16em]">
            {label}
          </p>
        </div>

        <ArrowUpLeft
          size={14}
          strokeWidth={1.3}
          className="mt-0.5 hidden shrink-0 text-black/35 transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:text-black md:block"
          aria-hidden="true"
        />
      </div>
    </motion.article>
  );
}

function CollectionFooter({
  label,
  isArabic,
}: {
  label: string;
  isArabic: boolean;
}) {
  return (
    <motion.div
      className={`mt-8 flex items-center gap-4 md:mt-11 ${
        isArabic ? "justify-start" : "justify-end"
      }`}
      variants={fadeUp(0.5)}
    >
      <a
        href="#archive"
        className="whitespace-nowrap font-[var(--font-inter)] text-[8px] font-medium uppercase tracking-[0.18em] text-black/50 transition-colors duration-300 hover:text-black md:text-[9px] md:tracking-[0.22em]"
      >
        {label}
      </a>

      <span className="h-px w-16 bg-black/28 md:w-32" />
    </motion.div>
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
        duration: 0.75,
        delay,
        ease: galleryEase,
      },
    },
  };
}
