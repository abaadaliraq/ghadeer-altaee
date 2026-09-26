"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Contact from "@/components/sections/Contact";
import type { Locale } from "@/lib/gateways";

type EditorialGateway = {
  number: string;
  label: { ar: string; en: string };
  title: { ar: string; en: string };
  subtitle: { ar: string; en: string };
  body: { ar: string; en: string };
  image: string;
  alt: { ar: string; en: string };
  metadata: { ar: string[]; en: string[] };
  process?: { ar: string[]; en: string[] };
  timeline?: { ar: string[]; en: string[] };
  highlights?: { value: string; label: { ar: string; en: string } }[];
};

type GatewayEditorialPageProps = {
  lang: Locale;
  slug: string;
};

const editorialEase = [0.22, 1, 0.36, 1] as const;

export const editorialGateways: Record<string, EditorialGateway> = {
  "intuitive-artist": {
    number: "02",
    label: {
      ar: "بوابة فنية",
      en: "Art Gateway",
    },
    title: {
      ar: "الفنان الفطري",
      en: "The Intuitive Artist",
    },
    subtitle: {
      ar: "عين ترى ما نتجاوزه.",
      en: "An eye for what we pass by.",
    },
    body: {
      ar: "يتعامل غدير مع العمل من خلال الملاحظة المباشرة والإحساس بالمادة والتفاصيل. تعود هذه الحساسية إلى موهبة ظهرت منذ الطفولة داخل بيئة فنية عائلية، ثم نضجت مع سنوات العمل الطويلة. تبدأ الفكرة عنده من شيء قد يبدو صغيراً؛ أثر على جدار، شكل نافذة، ملمس طابوقة أو قطعة أثرية، ثم تتحول تدريجياً إلى عمل يحمل بصمته الخاصة.",
      en: "Ghadeer approaches the work through direct observation and a sensitivity to material and detail. This sensitivity goes back to a talent that appeared in childhood within an artistic family environment, then matured through years of practice. An idea may begin from something small: a trace on a wall, the shape of a window, the texture of a brick or an artifact, then slowly becomes a work with his own mark.",
    },
    image: "/images/Gateways/gate-02.jpg",
    alt: {
      ar: "غدير الطائي يعمل على الختم السومري",
      en: "Ghadeer Al-Taee working on a Sumerian seal",
    },
    metadata: {
      ar: ["الملاحظة", "الحرفة اليدوية", "التفاصيل", "الذاكرة"],
      en: ["Observation", "Handcraft", "Details", "Memory"],
    },
  },
  "visual-language": {
    number: "03",
    label: {
      ar: "لغة بصرية",
      en: "Visual Language",
    },
    title: {
      ar: "لغة غدير",
      en: "Ghadeer's Language",
    },
    subtitle: {
      ar: "الطابوق، الضوء، الشناشيل وأثر الزمن.",
      en: "Brick, light, shanasheel and the trace of time.",
    },
    body: {
      ar: "تظهر لغة غدير البصرية في التفاصيل المعمارية التي يختارها ويعيد تشكيلها؛ الشناشيل، الأبواب، الشبابيك، الأقواس وملمس الجدران القديمة. يهتم بما تركه الزمن على المكان بقدر اهتمامه بالشكل نفسه.",
      en: "Ghadeer's visual language appears in the architectural details he selects and reshapes: shanasheel, doors, windows, arches and the texture of old walls. He cares for what time has left on place as much as he cares for form itself.",
    },
    image: "/images/Gateways/gate-03.jpg",
    alt: {
      ar: "تفاصيل الشناشيل والعمارة في أعمال غدير",
      en: "Close-up details of shanasheel and architecture in Ghadeer's work",
    },
    metadata: {
      ar: ["الشناشيل", "الطابوق", "الأبواب", "آثار الزمن"],
      en: ["Shanasheel", "Brick", "Doors", "Traces of Time"],
    },
  },
  "from-place-to-miniature": {
    number: "04",
    label: {
      ar: "منهج العمل",
      en: "Making Process",
    },
    title: {
      ar: "من المكان إلى المجسم",
      en: "From Place to Miniature",
    },
    subtitle: {
      ar: "رحلة التفاصيل من الذاكرة إلى المادة.",
      en: "Details traveling from memory into material.",
    },
    body: {
      ar: "يبدأ العمل بالملاحظة ودراسة التفاصيل، ثم اختيار المواد وبناء العناصر واحداً بعد آخر. النسب، الشبابيك، الطابوق، الزخارف والسطوح تُعالج يدوياً حتى يتحول المشهد المعماري إلى مجسم يحتفظ بإحساس المكان.",
      en: "The work begins with observation and studying details, then selecting materials and building elements one by one. Proportions, windows, brick, ornament and surfaces are treated by hand until the architectural scene becomes a miniature that keeps the feeling of place.",
    },
    image: "/images/Gateways/gate-04.jpg",
    alt: {
      ar: "غدير الطائي أثناء العمل على المجسم",
      en: "Ghadeer Al-Taee working on a miniature",
    },
    metadata: {
      ar: ["المكان", "المادة", "النسب", "المعالجة"],
      en: ["Place", "Material", "Proportion", "Treatment"],
    },
    process: {
      ar: ["الملاحظة", "الدراسة", "المادة", "البناء", "المعالجة", "العمل"],
      en: ["Observation", "Study", "Material", "Build", "Treatment", "Work"],
    },
  },
  "craft-journey": {
    number: "06",
    label: {
      ar: "سيرة فنية",
      en: "Craft Journey",
    },
    title: {
      ar: "سيرة من الحرفة",
      en: "A Craft Journey",
    },
    subtitle: {
      ar: "تجربة امتدت بين الفن والعمارة والحرفة.",
      en: "A practice across art, architecture and craft.",
    },
    body: {
      ar: "تنقلت تجربة غدير الطائي بين النحت والحفر، الزجاج المعشّق، الفسيفساء، الاستنساخ الأثري، العمارة التراثية والماكيتات. منذ عام 1993، اتسعت ممارسته خارج العراق وشملت أعمالاً في ليبيا واليمن، كما نفذ أعمالاً بنائية كبيرة مباشرة على الجدران أصبحت جزءاً ثابتاً من العمارة. هذا التنوع كوّن لديه معرفة عملية بالمادة والبناء والتفاصيل، وأصبح جزءاً أساسياً من طريقته في تنفيذ أعماله الحالية.",
      en: "Ghadeer Al-Taee's practice moved between sculpture and engraving, stained glass, mosaic, archaeological reproduction, heritage architecture and maquettes. Since 1993, his practice expanded outside Iraq and included works in Libya and Yemen, as well as large wall-based architectural works that became fixed parts of buildings. This range gave him practical knowledge of material, structure and detail, becoming a core part of how he makes his current work.",
    },
    image: "/images/Gateways/gate-06.jpg",
    alt: {
      ar: "غدير الطائي في الورشة مع الأدوات والمجسمات",
      en: "Ghadeer Al-Taee in the workshop with tools and miniatures",
    },
    metadata: {
      ar: ["نحت", "استنساخ أثري", "عمارة تراثية", "ماكيتات"],
      en: ["Sculpture", "Heritage Reproduction", "Heritage Architecture", "Maquettes"],
    },
    timeline: {
      ar: [
        "الطفولة",
        "الموهبة العائلية",
        "1993 — بداية المرحلة الاحترافية خارج العراق",
        "الأعمال المعمارية الثابتة",
        "الأعمال النحتية المتحركة",
        "التجربة الحالية في بغداد",
      ],
      en: [
        "Childhood",
        "Family artistic talent",
        "1993 — Professional phase outside Iraq",
        "Fixed architectural works",
        "Movable sculptural works",
        "Current practice in Baghdad",
      ],
    },
    highlights: [
      {
        value: "≈ 50",
        label: {
          ar: "عمل فني بنائي ومعماري",
          en: "architectural and wall-based works",
        },
      },
      {
        value: "13",
        label: {
          ar: "عملاً فنياً متحركاً",
          en: "movable sculptural works",
        },
      },
    ],
  },
};

export default function GatewayEditorialPage({ lang, slug }: GatewayEditorialPageProps) {
  const page = editorialGateways[slug];
  const reduceMotion = useReducedMotion();
  const isArabic = lang === "ar";
  const revealY = reduceMotion ? 0 : 22;

  if (!page) {
    return null;
  }

  const backLabel = isArabic ? "العودة إلى بوابات إلى عالم غدير" : "Back to Gateways";
  const text = {
    label: page.label[lang],
    title: page.title[lang],
    subtitle: page.subtitle[lang],
    body: page.body[lang],
    alt: page.alt[lang],
    metadata: page.metadata[lang],
    process: page.process?.[lang],
    timeline: page.timeline?.[lang],
    highlights: page.highlights,
  };
  const processSteps = text.process;
  const timeline = text.timeline;

  return (
    <>
      <main
        dir={isArabic ? "rtl" : "ltr"}
        className="min-h-screen bg-[#0D0F0C] text-[#F2EFE7]"
      >
        <motion.div
          className="relative w-full overflow-hidden bg-[#0D0F0C]"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: editorialEase }}
        >
          <Image
            src={page.image}
            alt={text.alt}
            width={1025}
            height={1535}
            priority
            sizes="100vw"
            className="block h-auto w-full md:h-[78vh] md:min-h-[620px] md:w-full md:object-cover md:object-center"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/45 to-transparent" />
        </motion.div>

        <motion.section
          className="relative -mt-px w-full bg-[#0D0F0C] px-5 py-8 sm:px-7 md:px-10 md:py-12 lg:px-16"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={stagger}
          custom={revealY}
        >
          <div className="mx-auto grid w-full max-w-[1380px] gap-8 md:grid-cols-[0.32fr_0.68fr] md:gap-12 lg:gap-16">
            <motion.aside
              className="grid grid-cols-2 gap-4 border-b border-[#F2EFE7]/12 pb-6 md:block md:border-b-0 md:border-e md:pb-0 md:pe-8"
              variants={fadeUp(0)}
            >
              <div>
                <p className="font-[var(--font-inter)] text-[10px] uppercase tracking-[0.28em] text-[#F2EFE7]/58">
                  {page.number}
                </p>
                <p className="mt-2 font-[var(--font-inter)] text-[9px] uppercase tracking-[0.22em] text-[#B69B70]">
                  {text.label}
                </p>
              </div>

              <Link
                href={`/${lang}#works`}
                className="justify-self-end border-b border-[#F2EFE7]/22 pb-2 text-end font-[var(--font-inter)] text-[8px] uppercase tracking-[0.18em] text-[#F2EFE7]/58 transition-colors duration-500 hover:text-[#F2EFE7] md:mt-12 md:inline-block md:justify-self-auto md:text-start"
              >
                {backLabel}
              </Link>

              <div className="col-span-2 mt-2 grid grid-cols-2 gap-x-5 gap-y-3 md:mt-14 md:block md:space-y-5">
                {text.metadata.map((item, index) => (
                  <motion.p
                    key={item}
                    className="border-t border-[#F2EFE7]/12 pt-2 font-[var(--font-inter)] text-[9px] uppercase tracking-[0.18em] text-[#F2EFE7]/58"
                    variants={fadeUp(0.08 + index * 0.04)}
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </motion.aside>

            <div>
              <motion.div
                className="flex items-center gap-4"
                variants={fadeUp(0.08)}
              >
                <span className="h-px w-12 bg-[#B69B70]/65" />
                <span className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.24em] text-[#F2EFE7]/45">
                  {isArabic ? "غدير الطائي" : "Ghadeer Al-Taee"}
                </span>
              </motion.div>

              <motion.h1
                className={`mt-7 max-w-[820px] font-normal leading-[1.05] text-[#F2EFE7] ${
                  isArabic
                    ? "font-[var(--font-arabic-serif)] text-[42px] md:text-[58px] lg:text-[68px]"
                    : "font-[var(--font-cormorant)] text-[48px] md:text-[68px] lg:text-[78px]"
                }`}
                variants={fadeUp(0.14)}
              >
                {text.title}
              </motion.h1>

              <motion.p
                className={`mt-3 max-w-[650px] text-[#F2EFE7]/78 ${
                  isArabic
                    ? "font-[var(--font-arabic-serif)] text-[18px] leading-[1.75] md:text-[22px]"
                    : "font-[var(--font-cormorant)] text-[22px] leading-[1.35] md:text-[27px]"
                }`}
                variants={fadeUp(0.2)}
              >
                {text.subtitle}
              </motion.p>

              <motion.p
                className={`mt-8 max-w-[720px] text-[#F2EFE7]/58 ${
                  isArabic
                    ? "font-[var(--font-arabic-serif)] text-[16px] leading-[2.05] md:text-[19px]"
                    : "font-[var(--font-inter)] text-[13px] leading-[2] md:text-[15px]"
                }`}
                variants={fadeUp(0.28)}
              >
                {text.body}
              </motion.p>

              {processSteps ? (
                <motion.div
                  className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-[#F2EFE7]/12 pt-5 font-[var(--font-inter)] text-[8px] uppercase tracking-[0.18em] text-[#F2EFE7]/50 md:gap-x-4"
                  variants={fadeUp(0.34)}
                >
                  {processSteps.map((step, index) => (
                    <span key={step} className="inline-flex items-center gap-3">
                      <span>{step}</span>
                      {index < processSteps.length - 1 ? (
                        <span className="text-[#B69B70]/70">→</span>
                      ) : null}
                    </span>
                  ))}
                </motion.div>
              ) : null}

              {text.highlights ? (
                <motion.div
                  className="mt-9 grid gap-4 border-t border-[#F2EFE7]/12 pt-6 sm:grid-cols-2"
                  variants={fadeUp(0.34)}
                >
                  {text.highlights.map((item) => (
                    <div key={item.value}>
                      <p className="font-[var(--font-cormorant)] text-[42px] leading-none text-[#F2EFE7] md:text-[54px]">
                        {item.value}
                      </p>
                      <p className="mt-2 font-[var(--font-arabic-serif)] text-[13px] leading-[1.7] text-[#F2EFE7]/58 md:text-[15px]">
                        {item.label[lang]}
                      </p>
                    </div>
                  ))}
                </motion.div>
              ) : null}

              {timeline ? (
                <motion.div
                  className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-[var(--font-inter)] text-[8px] uppercase tracking-[0.16em] text-[#F2EFE7]/50"
                  variants={fadeUp(0.4)}
                >
                  {timeline.map((step, index) => (
                    <span key={step} className="inline-flex items-center gap-3">
                      <span>{step}</span>
                      {index < timeline.length - 1 ? (
                        <span className="text-[#B69B70]/70">↓</span>
                      ) : null}
                    </span>
                  ))}
                </motion.div>
              ) : null}
            </div>
          </div>
        </motion.section>
      </main>

      <Contact lang={lang} linkBase={`/${lang}`} />
    </>
  );
}

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

function fadeUp(delay: number): Variants {
  return {
    hidden: (distance = 18) => ({
      opacity: 0,
      y: distance,
    }),
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.72,
        delay,
        ease: editorialEase,
      },
    },
  };
}
