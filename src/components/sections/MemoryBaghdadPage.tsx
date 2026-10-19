"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import Contact from "@/components/sections/Contact";
import type { Locale } from "@/lib/gateways";

type Artwork = {
  number: string;
  title: {
    ar: string;
    en: string;
  };
  description?: {
    ar: string;
    en: string;
  };
  dimensions: {
    width: {
      ar: string;
      en: string;
    };
    height: {
      ar: string;
      en: string;
    };
    depth: {
      ar: string;
      en: string;
    };
  };
  image?: string;
  imagePosition?: string;
};

type MemoryBaghdadPageProps = {
  lang: Locale;
};

const memoryEase = [0.22, 1, 0.36, 1] as const;

const artworks: Artwork[] = [
  {
    number: "01",
    title: {
      ar: "خان الذهب",
      en: "Khan Al-Dhahab",
    },
    description: {
      ar: "يستحضر عمل «خان الذهب» جمال الأزقة البغدادية القديمة، حيث تبدو الشوارع كأنها عقيق مصقول، وتطل الشرفات مثل واجهات صاغة الذهب بما تحمله من ضوء وزخرفة وذاكرة. يقرأ العمل بغداد بوصفها مدينة يبدأ منها الجمال ويعود إليها؛ مدينة تتجاور فيها الحرفة مع العمارة، ويتحوّل فيها الخشب والطابوق والظل إلى مشهد مشبع بالألفة والوقار. في هذا المجسم يعيد غدير الطائي صياغة حسّ الخانات القديمة وأسواقها، ليمنح المكان حضوراً فنياً يربط بين بريق الذهب ودفء الأزقة وملامح المدينة التي لا تنطفئ.",
      en: "Khan Al-Dhahab evokes the beauty of old Baghdadi alleys, where streets feel like polished agate and balconies resemble the displays of goldsmiths, carrying light, ornament, and memory. The work reads Baghdad as a city where beauty begins and to which it returns: a place where craft and architecture meet, and where wood, brick, and shadow become a warm, dignified scene. Through this model, Ghadeer Al-Taee reimagines the feeling of old khans and markets, connecting the shimmer of gold with the intimacy of alleys and the enduring face of the city.",
    },
    dimensions: {
      width: {
        ar: "170 سم",
        en: "170 cm",
      },
      height: {
        ar: "60 سم",
        en: "60 cm",
      },
      depth: {
        ar: "50 سم",
        en: "50 cm",
      },
    },
    image: "/images/works/shanasheel.jpg",
    imagePosition: "50% 48%",
  },
  {
    number: "02",
    title: {
      ar: "شارع التوراه",
      en: "Torah Street",
    },
    description: {
      ar: "يستعيد العمل ملامح شوارع وأزقة منطقة التوراة، إحدى أقدم مناطق بغداد القديمة، الواقعة بين مراكز حيوية وتجارية مثل الشورجة والكفاح والصدرية، وبمحاذاة سوق حنون وشارع الكفاح العريق. يوثق العمل طرازها البغدادي الأصيل، درابينها وعكودها الضيقة، وبيوت الشناشيل التي تتجلى في أبوابها وشبابيكها ومطارقها وأقفالها المعدنية ذات النقوش الفنية. في هذا المشهد يمتزج الخشب بالطابوق الحجري العراقي، لتظهر العمارة كذاكرة حية تجمع بين الفن وجمال المكان.",
      en: "The work is inspired by the streets and narrow alleys of Al-Tawrat district, one of old Baghdad's oldest areas, positioned among lively commercial neighborhoods such as Al-Shorja, Al-Kifah and Al-Sadriya, alongside Souq Hanoun and historic Al-Kifah Street. It reflects the district's authentic Baghdadi character, its tight lanes and arches, and its shanasheel houses with carved doors, windows, knockers and metal locks. Wood and Iraqi brick meet in a scene where art and architectural beauty become a living memory of place.",
    },
    dimensions: {
      width: {
        ar: "120 سم",
        en: "120 cm",
      },
      height: {
        ar: "60 سم",
        en: "60 cm",
      },
      depth: {
        ar: "40 سم",
        en: "40 cm",
      },
    },
    image: "/images/works/hara-aluhod.jpg",
    imagePosition: "50% 54%",
  },
  {
    number: "03",
    title: {
      ar: "",
      en: "",
    },
    dimensions: {
      width: {
        ar: "",
        en: "",
      },
      height: {
        ar: "",
        en: "",
      },
      depth: {
        ar: "",
        en: "",
      },
    },
  },
];

const copy = {
  ar: {
    eyebrow: "قريباً — بيت التحفيات",
    title: "ذاكرة بغداد",
    subtitle: "معرض غدير الطائي — قريباً في بيت التحفيات",
    description:
      "في معرض «ذاكرة بغداد»، يعود غدير الطائي إلى تفاصيل العمارة البغدادية ويعيد بناء مشاهد منها عبر مجسمات تنفذ يدوياً بدقة عالية. يستعرض المعرض ثلاثة أعمال تتناول المكان والذاكرة والتفاصيل التي شكّلت صورة بغداد في مراحل مختلفة.",
    back: "العودة إلى بوابات إلى أعمال غدير الطائي",
    confirmed: "الأعمال المؤكدة",
    width: "العرض",
    height: "الارتفاع",
    depth: "العمق",
    heroAlt: "معرض ذاكرة بغداد للفنان غدير الطائي",
    artworkAltSuffix: "مجسم معماري من معرض ذاكرة بغداد",
  },
  en: {
    eyebrow: "Soon - Beit Al-Tuhaf",
    title: "Memory of Baghdad",
    subtitle: "Ghadeer Al-Taee's exhibition - soon at Beit Al-Tuhaf",
    description:
      "In Memory of Baghdad, Ghadeer Al-Taee returns to details of Baghdad heritage architecture and rebuilds scenes through handcrafted architectural models. The exhibition presents works about place, memory, and the details that shaped Baghdad across different moments.",
    back: "Back to Ghadeer Al-Taee's gateways",
    confirmed: "Confirmed Works",
    width: "Width",
    height: "Height",
    depth: "Depth",
    heroAlt: "Memory of Baghdad exhibition by Ghadeer Al-Taee",
    artworkAltSuffix: "architectural model from Memory of Baghdad",
  },
};

export default function MemoryBaghdadPage({ lang }: MemoryBaghdadPageProps) {
  const reduceMotion = useReducedMotion();
  const isArabic = lang === "ar";
  const text = copy[lang];
  const visibleArtworks = artworks.filter((artwork) => artwork.title[lang]);

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
              alt={text.heroAlt}
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
              {text.eyebrow}
            </motion.p>
            <motion.h1
              className={`mt-5 font-normal leading-[1.08] text-[#F2EFE7] md:text-[78px] ${
                isArabic
                  ? "font-[var(--font-arabic-serif)] text-[52px]"
                  : "font-[var(--font-cormorant)] text-[58px]"
              }`}
              variants={fadeUp(0.08)}
            >
              {text.title}
            </motion.h1>
            <motion.p
              className={`mt-4 max-w-[640px] text-[20px] leading-[1.8] text-[#F2EFE7]/82 md:text-[25px] ${
                isArabic ? "font-[var(--font-arabic-serif)]" : "font-[var(--font-cormorant)]"
              }`}
              variants={fadeUp(0.16)}
            >
              {text.subtitle}
            </motion.p>
            <motion.p
              className={`mt-7 max-w-[760px] text-[16px] leading-[2.05] text-[#F2EFE7]/62 md:text-[19px] ${
                isArabic ? "font-[var(--font-arabic-serif)]" : "font-[var(--font-inter)]"
              }`}
              variants={fadeUp(0.24)}
            >
              {text.description}
            </motion.p>
            <motion.div variants={fadeUp(0.32)}>
              <Link
                href={`/${lang}#works`}
                className="mt-8 inline-flex border-b border-[#F2EFE7]/24 pb-2 font-[var(--font-inter)] text-[9px] uppercase tracking-[0.2em] text-[#F2EFE7]/58 transition-colors duration-500 hover:text-[#F2EFE7]"
              >
                {text.back}
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        <section className="px-5 py-10 sm:px-7 md:px-10 md:py-16 lg:px-16">
          <div className="mx-auto w-full max-w-[1400px]">
            <div className="mb-8 flex items-center justify-between gap-6 border-b border-[#F2EFE7]/12 pb-5">
              <p className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.24em] text-[#F2EFE7]/50">
                {text.confirmed}
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
                  className="grid gap-6 border-b border-[#F2EFE7]/12 pb-12 md:grid-cols-[0.52fr_0.48fr] md:gap-10 md:pb-16"
                  variants={fadeUp(index * 0.08)}
                >
                  {artwork.image ? (
                    <motion.div
                      className={`relative aspect-[4/5] overflow-hidden bg-[#171A14] ${
                        artwork.number === "02"
                          ? "md:aspect-[16/10] md:max-h-[560px]"
                          : "md:aspect-[16/10]"
                      }`}
                      whileHover={reduceMotion ? undefined : { scale: 1.015 }}
                      transition={{ duration: 0.6, ease: memoryEase }}
                    >
                      <Image
                        src={artwork.image}
                        alt={`${artwork.title[lang]} - ${text.artworkAltSuffix}`}
                        fill
                        sizes="(max-width: 767px) 100vw, 58vw"
                        unoptimized={artwork.image.includes("hara-aluhod")}
                        className="object-cover object-center"
                        style={{ objectPosition: artwork.imagePosition ?? "50% 50%" }}
                      />
                    </motion.div>
                  ) : null}

                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="font-[var(--font-inter)] text-[10px] uppercase tracking-[0.28em] text-[#B69B70]">
                        {artwork.number}
                      </p>
                      <h2
                        className={`mt-5 text-[36px] font-normal leading-tight text-[#F2EFE7] md:text-[48px] ${
                          isArabic ? "font-[var(--font-arabic-serif)]" : "font-[var(--font-cormorant)]"
                        }`}
                      >
                        {artwork.title[lang]}
                      </h2>
                      {artwork.description ? (
                        <p
                          className={`mt-5 max-w-[640px] text-[16px] leading-[2] text-[#F2EFE7]/68 ${
                            isArabic ? "font-[var(--font-arabic-serif)]" : "font-[var(--font-inter)]"
                          }`}
                        >
                          {artwork.description[lang]}
                        </p>
                      ) : null}
                    </div>

                    <dl
                      className={`mt-8 grid grid-cols-3 gap-3 border-t border-[#F2EFE7]/12 pt-5 text-[#F2EFE7]/64 ${
                        isArabic ? "font-[var(--font-arabic-serif)]" : "font-[var(--font-inter)]"
                      }`}
                    >
                      <div>
                        <dt className="font-[var(--font-inter)] text-[8px] uppercase tracking-[0.2em] text-[#F2EFE7]/42">
                          {text.width}
                        </dt>
                        <dd className="mt-2 text-[15px]">{artwork.dimensions.width[lang]}</dd>
                      </div>
                      <div>
                        <dt className="font-[var(--font-inter)] text-[8px] uppercase tracking-[0.2em] text-[#F2EFE7]/42">
                          {text.height}
                        </dt>
                        <dd className="mt-2 text-[15px]">{artwork.dimensions.height[lang]}</dd>
                      </div>
                      <div>
                        <dt className="font-[var(--font-inter)] text-[8px] uppercase tracking-[0.2em] text-[#F2EFE7]/42">
                          {text.depth}
                        </dt>
                        <dd className="mt-2 text-[15px]">{artwork.dimensions.depth[lang]}</dd>
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
