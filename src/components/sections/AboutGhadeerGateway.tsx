"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Contact from "@/components/sections/Contact";
import type { Locale } from "@/lib/gateways";

type AboutGhadeerGatewayProps = {
  lang: Locale;
};

const artistImage = "/images/artist/ghadeer.jpg";
const detailImage = "/images/artist/ghadeer-workshop.jpg";
const posterEase = [0.22, 1, 0.36, 1] as const;

const copy = {
  ar: {
    label: "عن الفنان — 01",
    title: "غدير غازي الطائي",
    body: "غدير غازي الطائي فنان تشكيلي ونحات عراقي من بغداد، عضو نقابة الفنانين العراقيين. تمتد تجربته بين النحت والحفر والزجاج المعشّق والفسيفساء والاستنساخ الأثري والعمارة التراثية والماكيتات، مع اهتمام خاص بالتفاصيل الدقيقة وذاكرة المكان.",
    back: "العودة إلى البوابات",
    imageAlt: "الفنان التشكيلي غدير غازي الطائي",
    details: [
      "بغداد، العراق",
      "مواليد 1968",
      "عضو نقابة الفنانين العراقيين",
      "فنان تشكيلي ونحات",
    ],
    caption: "ذاكرة المكان والتفاصيل الدقيقة",
    note: "نحت، حفر، زجاج معشّق، فسيفساء",
    detailAlt: "تفاصيل من تجربة غدير الطائي في الورشة",
    sections: [
      {
        number: "01",
        title: "نبذة عن الفنان",
        body: "غدير غازي الطائي فنان تشكيلي ونحات عراقي من بغداد، عضو نقابة الفنانين العراقيين. تمتد تجربته بين النحت والحفر والزجاج المعشّق والفسيفساء والاستنساخ الأثري والعمارة التراثية والماكيتات، مع اهتمام خاص بالتفاصيل الدقيقة وذاكرة المكان.",
      },
      {
        number: "02",
        title: "مسيرته",
        body: "بدأت موهبة غدير منذ الطفولة ضمن موهبة فنية عائلية متوارثة، ثم تحولت تجربته إلى ممارسة احترافية منذ خروجه من العراق عام 1993 واستمرت حتى اليوم. تنقّل بين النحت ومعالجة الخشب والحجر، الزجاج المعشّق، الفسيفساء، الاستنساخ الأثري، العمارة التراثية والماكيتات والتصميم، ونفذ أعمالاً داخل العراق وخارجه، منها أعمال في ليبيا واليمن. أنتج أيضاً أعمالاً بنائية كبيرة نفذت مباشرة على الجدران وأصبحت جزءاً ثابتاً من العمارة، إلى جانب أعمال نحتية متحركة قابلة للعرض والاقتناء.",
      },
      {
        number: "03",
        title: "رؤيته",
        body: "ينطلق غدير في أعماله من مراقبة المكان وتفاصيله الصغيرة. الأبواب، الشناشيل، الطابوق، الأقواس وآثار الزمن تتحول لديه إلى عناصر يعيد صياغتها يدوياً، بهدف الاحتفاظ بإحساس المكان وذاكرته داخل العمل.",
      },
    ],
  },
  en: {
    label: "About the Artist — 01",
    title: "Ghadeer Ghazi Al-Taee",
    body: "Ghadeer Ghazi Al-Taee is an Iraqi visual artist and sculptor from Baghdad, and a member of the Iraqi Artists Syndicate. His practice spans sculpture, engraving, stained glass, mosaic, archaeological reproduction, heritage architecture and maquettes, with special attention to fine detail and the memory of place.",
    back: "Back to Gateways",
    imageAlt: "Iraqi visual artist Ghadeer Ghazi Al-Taee",
    details: [
      "Baghdad, Iraq",
      "Born 1968",
      "Member of the Iraqi Artists Syndicate",
      "Visual artist and sculptor",
    ],
    caption: "Memory of place and fine details",
    note: "Sculpture, engraving, stained glass, mosaic",
    detailAlt: "Details from Ghadeer Al-Taee's workshop practice",
    sections: [
      {
        number: "01",
        title: "About the Artist",
        body: "Ghadeer Ghazi Al-Taee is an Iraqi visual artist and sculptor from Baghdad, and a member of the Iraqi Artists Syndicate. His practice spans sculpture, engraving, stained glass, mosaic, archaeological reproduction, heritage architecture and maquettes, with special attention to fine detail and the memory of place.",
      },
      {
        number: "02",
        title: "His Practice",
        body: "Ghadeer's talent began in childhood within an inherited family artistic gift, then became a professional practice after he left Iraq in 1993 and continues today. He moved between sculpture, treating wood and stone, stained glass, mosaic, archaeological reproduction, heritage architecture, maquettes and design, creating works inside and outside Iraq, including in Libya and Yemen. He also made large architectural works executed directly on walls, becoming fixed parts of buildings, alongside movable sculptural works made for display and acquisition.",
      },
      {
        number: "03",
        title: "His Vision",
        body: "Ghadeer begins from observing place and its smallest details. Doors, shanasheel, brick, arches and the traces of time become elements he reshapes by hand, preserving the feeling and memory of place within the work.",
      },
    ],
  },
};

export default function AboutGhadeerGateway({ lang }: AboutGhadeerGatewayProps) {
  const reduceMotion = useReducedMotion();
  const isArabic = lang === "ar";
  const text = copy[lang];

  return (
    <>
      <main
        id="about"
        dir={isArabic ? "rtl" : "ltr"}
        className="min-h-screen bg-[#F7F5F0] text-[#1C1A16]"
      >
        <motion.section
          className="mx-auto flex min-h-screen w-full max-w-[1400px] flex-col px-4 pb-12 pt-[104px] sm:px-5 md:px-7 md:pb-16 md:pt-[120px] lg:px-8"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={stagger}
        >
          <div className="grid gap-8 border-b border-[#1C1A16]/12 pb-9 md:grid-cols-[0.9fr_1.1fr] md:items-start md:gap-10 lg:gap-14">
            <motion.div
              className="relative order-2 md:order-none"
              variants={imageReveal}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#E4DED2] md:min-h-[640px]">
                <Image
                  src={artistImage}
                  alt={text.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 767px) 92vw, 45vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-5 font-[var(--font-inter)] text-[9px] uppercase tracking-[0.2em] text-[#1C1A16]/42">
                <p>{text.caption}</p>
                <p>{text.note}</p>
              </div>
            </motion.div>

            <motion.div
              className="order-1 flex flex-col md:order-none md:min-h-[640px]"
              variants={fadeUp(0.08)}
            >
              <div className="flex items-start justify-between gap-6">
                <p className="font-[var(--font-inter)] text-[10px] uppercase tracking-[0.24em] text-[#1C1A16]/52">
                  {text.label}
                </p>
                <Link
                  href={`/${lang}#works`}
                  className="inline-flex shrink-0 items-center gap-3 border-b border-[#1C1A16]/18 pb-2 font-[var(--font-inter)] text-[9px] uppercase tracking-[0.2em] text-[#1C1A16]/55 transition-colors duration-500 hover:text-[#1C1A16]"
                >
                  {text.back}
                  <span aria-hidden="true">↙</span>
                </Link>
              </div>

              <h1
                className={`mt-12 max-w-[690px] font-normal leading-[1.08] text-[#1C1A16] md:mt-16 ${
                  isArabic
                    ? "font-[var(--font-arabic-serif)] text-[42px] md:text-[54px] lg:text-[64px]"
                    : "font-[var(--font-cormorant)] text-[44px] md:text-[58px] lg:text-[68px]"
                }`}
              >
                {text.title}
              </h1>

              <p className="mt-5 font-[var(--font-inter)] text-[9px] uppercase tracking-[0.24em] text-[#9A7B4F]">
                Visual Artist / Sculptor
              </p>

              <p
                className={`mt-10 max-w-[740px] text-[#1C1A16]/76 ${
                  isArabic
                    ? "font-[var(--font-arabic-serif)] text-[20px] leading-[2] md:text-[24px]"
                    : "font-[var(--font-cormorant)] text-[23px] leading-[1.5] md:text-[28px]"
                }`}
              >
                {text.body}
              </p>

              <ul className="mt-auto grid gap-3 pt-10 font-[var(--font-arabic-serif)] text-[13px] leading-[1.8] text-[#1C1A16]/62 sm:grid-cols-2 md:text-[14px]">
                {text.details.map((item) => (
                  <li key={item} className="flex items-center gap-3 border-t border-[#1C1A16]/10 pt-3">
                    <span className="h-px w-5 bg-[#9A7B4F]/55" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="grid gap-8 py-10 md:grid-cols-[0.45fr_0.55fr] md:gap-10 md:py-14 lg:gap-14"
            variants={fadeUp(0.18)}
          >
            <div className="relative aspect-[16/11] overflow-hidden bg-[#E4DED2] md:aspect-auto md:min-h-[360px]">
              <Image
                src={detailImage}
                alt={text.detailAlt}
                fill
                sizes="(max-width: 767px) 92vw, 42vw"
                className="object-cover object-center"
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2 md:gap-10">
              {text.sections.slice(0, 2).map((section) => (
                <EditorialSection
                  key={section.number}
                  number={section.number}
                  title={section.title}
                  body={section.body}
                  isArabic={isArabic}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="border-t border-[#1C1A16]/12 py-10 md:grid md:grid-cols-[0.45fr_0.55fr] md:gap-10 md:py-14 lg:gap-14"
            variants={fadeUp(0.26)}
          >
            <div className="hidden md:block">
              <div className="h-px w-full bg-[#1C1A16]/12" />
            </div>
            <EditorialSection
              number={text.sections[2].number}
              title={text.sections[2].title}
              body={text.sections[2].body}
              isArabic={isArabic}
              wide
            />
          </motion.div>
        </motion.section>
      </main>

      <Contact lang={lang} linkBase={`/${lang}`} />
    </>
  );
}

function EditorialSection({
  number,
  title,
  body,
  isArabic,
  wide = false,
}: {
  number: string;
  title: string;
  body: string;
  isArabic: boolean;
  wide?: boolean;
}) {
  return (
    <section className={`${wide ? "max-w-[760px]" : "max-w-[520px]"}`}>
      <div className="mb-5 flex items-center gap-4">
        <span className="font-[var(--font-inter)] text-[10px] tracking-[0.22em] text-[#9A7B4F]">
          {number}
        </span>
        <span className="h-px flex-1 bg-[#1C1A16]/14" />
      </div>
      <h2
        className={`font-normal leading-tight text-[#1C1A16] ${
          isArabic
            ? "font-[var(--font-arabic-serif)] text-[28px] md:text-[34px]"
            : "font-[var(--font-cormorant)] text-[30px] md:text-[36px]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 text-[#1C1A16]/68 ${
          isArabic
            ? "font-[var(--font-arabic-serif)] text-[16px] leading-[2]"
            : "font-[var(--font-inter)] text-[13px] leading-[1.95]"
        }`}
      >
        {body}
      </p>
    </section>
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
      y: 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.72,
        delay,
        ease: posterEase,
      },
    },
  };
}

const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.95,
      ease: posterEase,
    },
  },
};
