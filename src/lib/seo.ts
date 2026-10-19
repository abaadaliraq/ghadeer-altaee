import type { Metadata } from "next";
import { gateways } from "@/lib/gateways";
import { practices } from "@/lib/practices";

export const siteUrl = "https://www.ghadeeraltaee.art";
export const siteName = "Ghadeer Al-Taee | غدير الطائي";
export const defaultImage = "/images/artist/ghadeer.jpg";
export const defaultImageUrl = `${siteUrl}${defaultImage}`;

export type Locale = "ar" | "en";

type SeoRoute = {
  path: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  image?: string;
  priority?: number;
};

export const homepageDescription = {
  ar: "الموقع الرسمي للفنان التشكيلي العراقي غدير الطائي، يوثق تجربته في إعادة تشكيل ذاكرة بغداد وعمارتها التراثية من خلال المجسمات والأعمال اليدوية الدقيقة، ويضم أعماله وسيرته ومعرض ذاكرة بغداد.",
  en: "Official website of Iraqi visual artist Ghadeer Al-Taee, exploring Baghdad's architectural memory, heritage houses, handcrafted architectural models, artworks, biography, and the Memory of Baghdad exhibition.",
};

const gatewaySeo: Record<string, Omit<SeoRoute, "path">> = {
  "about-ghadeer": {
    title: {
      ar: "عن غدير الطائي | فنان تشكيلي عراقي",
      en: "About Ghadeer Al-Taee | Iraqi Visual Artist",
    },
    description: {
      ar: "تعرف على الفنان التشكيلي والنحات العراقي غدير الطائي، وتجربته في النحت والعمارة التراثية والمجسمات وذاكرة المكان.",
      en: "Learn about Iraqi visual artist and sculptor Ghadeer Al-Taee, his sculpture, heritage architecture, architectural models, and memory-of-place practice.",
    },
    image: "/images/artist/ghadeer.jpg",
    priority: 0.9,
  },
  "intuitive-artist": {
    title: {
      ar: "الفنان الفطري غدير الطائي | التجربة الفنية",
      en: "The Intuitive Artist | Ghadeer Al-Taee",
    },
    description: {
      ar: "قراءة في حساسية الفنان الفطري غدير الطائي وطريقته في تحويل الملاحظة والحرفة اليدوية إلى أعمال فنية تحمل ذاكرة المكان.",
      en: "A look at Ghadeer Al-Taee's intuitive practice, where observation and handcraft become artworks carrying the memory of place.",
    },
    image: "/images/Gateways/gate-02.jpg",
  },
  "visual-language": {
    title: {
      ar: "لغة غدير الطائي | بغداد والعمارة والذاكرة",
      en: "Ghadeer Al-Taee's Language | Baghdad Architecture and Memory",
    },
    description: {
      ar: "لغة غدير الطائي البصرية من الشناشيل والطابوق والأبواب والعمارة البغدادية التي يعيد تشكيلها في أعماله الفنية.",
      en: "Ghadeer Al-Taee's visual language of shanasheel, brick, doors, and Baghdad heritage architecture reshaped in his artworks.",
    },
    image: "/images/Gateways/gate-03.jpg",
  },
  "from-place-to-miniature": {
    title: {
      ar: "من المكان إلى المجسم | غدير الطائي",
      en: "From Place to Miniature | Ghadeer Al-Taee",
    },
    description: {
      ar: "منهج غدير الطائي في دراسة المكان والتفاصيل والمواد وبناء المجسمات المعمارية المستلهمة من بيوت بغداد التراثية.",
      en: "Ghadeer Al-Taee's process of studying place, detail, and materials to build architectural models inspired by Baghdad heritage houses.",
    },
    image: "/images/Gateways/gate-04.jpg",
  },
  "memory-of-baghdad": {
    title: {
      ar: "معرض ذاكرة بغداد | غدير الطائي",
      en: "Memory of Baghdad Exhibition | Ghadeer Al-Taee",
    },
    description: {
      ar: "معرض ذاكرة بغداد للفنان التشكيلي العراقي غدير الطائي، تجربة فنية تستعيد واجهات وبيوت بغداد التراثية من خلال مجسمات معمارية مصنوعة يدوياً.",
      en: "Memory of Baghdad exhibition by Iraqi visual artist Ghadeer Al-Taee, revisiting Baghdad heritage facades and houses through handcrafted architectural models.",
    },
    image: "/images/Gateways/gate-05.jpg",
    priority: 0.9,
  },
  "craft-journey": {
    title: {
      ar: "سيرة غدير الطائي | الفنان العراقي",
      en: "Ghadeer Al-Taee Biography | Iraqi Artist",
    },
    description: {
      ar: "سيرة غدير الطائي الفنية بين النحت والحفر والزجاج والفسيفساء والعمارة التراثية والمجسمات المعمارية.",
      en: "Ghadeer Al-Taee's artistic journey through sculpture, engraving, glass, mosaic, heritage architecture, and architectural models.",
    },
    image: "/images/Gateways/gate-06.jpg",
  },
};

const practiceSeo: Record<string, Omit<SeoRoute, "path">> = Object.fromEntries(
  practices.map((practice) => [
    practice.slug,
    {
      title: {
        ar: `${practice.title.ar} | أعمال غدير الطائي`,
        en: `${practice.title.en} | Ghadeer Al-Taee Artworks`,
      },
      description: {
        ar: `${practice.description.ar} ضمن أعمال الفنان التشكيلي العراقي غدير الطائي وتجربته في الفن العراقي المعاصر.`,
        en: `${practice.description.en} within the practice of Iraqi visual artist Ghadeer Al-Taee and contemporary Iraqi heritage art.`,
      },
      image: practice.image,
      priority: 0.72,
    },
  ])
);

export const legalSeo: Record<string, Omit<SeoRoute, "path" | "image">> = {
  privacy: {
    title: {
      ar: "سياسة الخصوصية | غدير الطائي",
      en: "Privacy Policy | Ghadeer Al-Taee",
    },
    description: {
      ar: "سياسة الخصوصية للموقع الرسمي للفنان التشكيلي العراقي غدير الطائي.",
      en: "Privacy policy for the official website of Iraqi visual artist Ghadeer Al-Taee.",
    },
    priority: 0.35,
  },
  terms: {
    title: {
      ar: "سياسة الاستخدام | غدير الطائي",
      en: "Terms of Use | Ghadeer Al-Taee",
    },
    description: {
      ar: "شروط استخدام الموقع الرسمي للفنان التشكيلي العراقي غدير الطائي وحقوق المحتوى والأعمال الفنية.",
      en: "Terms of use for the official website of Iraqi visual artist Ghadeer Al-Taee and its artwork content rights.",
    },
    priority: 0.35,
  },
};

export function localizedPath(locale: Locale, path = "") {
  return `/${locale}${path}`;
}

export function absoluteUrl(path = "") {
  return `${siteUrl}${path}`;
}

export function alternateLanguages(path = "") {
  return {
    ar: absoluteUrl(localizedPath("ar", path)),
    en: absoluteUrl(localizedPath("en", path)),
    "x-default": absoluteUrl(localizedPath("ar", path)),
  };
}

export function createPageMetadata({
  locale,
  path = "",
  title,
  description,
  image = defaultImage,
}: {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const canonical = absoluteUrl(localizedPath(locale, path));
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: alternateLanguages(path),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      images: [
        {
          url: imageUrl,
          alt: locale === "ar" ? "غدير الطائي - فنان تشكيلي عراقي" : "Ghadeer Al-Taee Iraqi visual artist",
        },
      ],
      locale: locale === "ar" ? "ar_IQ" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function getHomeMetadata(locale: Locale) {
  return createPageMetadata({
    locale,
    title: locale === "ar" ? "غدير الطائي | فنان تشكيلي عراقي وذاكرة بغداد" : "Ghadeer Al-Taee | Iraqi Visual Artist",
    description: homepageDescription[locale],
  });
}

export function getGatewayMetadata(locale: Locale, slug: string) {
  const seo = gatewaySeo[slug];

  if (!seo) {
    return null;
  }

  return createPageMetadata({
    locale,
    path: `/gateways/${slug}`,
    title: seo.title[locale],
    description: seo.description[locale],
    image: seo.image,
  });
}

export function getPracticeMetadata(locale: Locale, slug: string) {
  const seo = practiceSeo[slug];

  if (!seo) {
    return null;
  }

  return createPageMetadata({
    locale,
    path: `/practice/${slug}`,
    title: seo.title[locale],
    description: seo.description[locale],
    image: seo.image,
  });
}

export function getLegalMetadata(locale: Locale, slug: "privacy" | "terms") {
  const seo = legalSeo[slug];

  return createPageMetadata({
    locale,
    path: `/${slug}`,
    title: seo.title[locale],
    description: seo.description[locale],
  });
}

export function getIndexableRoutes(): SeoRoute[] {
  return [
    {
      path: "",
      title: {
        ar: "غدير الطائي | فنان تشكيلي عراقي وذاكرة بغداد",
        en: "Ghadeer Al-Taee | Iraqi Visual Artist",
      },
      description: homepageDescription,
      image: defaultImage,
      priority: 1,
    },
    ...gateways.map((gateway) => ({
      path: `/gateways/${gateway.slug}`,
      ...(gatewaySeo[gateway.slug] ?? {
        title: gateway.title,
        description: gateway.intro,
        image: gateway.image,
      }),
      priority: gatewaySeo[gateway.slug]?.priority ?? 0.8,
    })),
    ...practices.map((practice) => ({
      path: `/practice/${practice.slug}`,
      ...practiceSeo[practice.slug],
      priority: practiceSeo[practice.slug]?.priority ?? 0.72,
    })),
    {
      path: "/privacy",
      ...legalSeo.privacy,
    },
    {
      path: "/terms",
      ...legalSeo.terms,
    },
  ];
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#ghadeer-al-taee`,
    name: "Ghadeer Al-Taee",
    alternateName: ["غدير الطائي", "Ghadeer Al Taee", "Ghadeer Altaee"],
    jobTitle: ["Visual Artist", "فنان تشكيلي"],
    description:
      "Iraqi visual artist Ghadeer Al-Taee explores Baghdad's architectural memory, heritage houses, handcrafted architectural models, and contemporary Iraqi heritage art.",
    url: siteUrl,
    image: defaultImageUrl,
    sameAs: [
      "https://www.instagram.com/altaeeghadeer68/?__pwa=1",
      "https://web.facebook.com/hjy.ghdyr",
      "https://www.tiktok.com/@ghadeer_altaee68?lang=en",
      "https://youtube.com/@ghadeeraltaee-t2m?si=WmqDqxIt6sXGrLcf",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    alternateName: ["غدير الطائي", "Ghadeer Al Taee", "Ghadeer Altaee"],
    url: siteUrl,
    inLanguage: ["ar", "en"],
    publisher: {
      "@id": `${siteUrl}/#ghadeer-al-taee`,
    },
  };
}

export function profilePageJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${absoluteUrl(localizedPath(locale, "/gateways/about-ghadeer"))}#profile`,
    url: absoluteUrl(localizedPath(locale, "/gateways/about-ghadeer")),
    name: gatewaySeo["about-ghadeer"].title[locale],
    description: gatewaySeo["about-ghadeer"].description[locale],
    inLanguage: locale,
    mainEntity: {
      "@id": `${siteUrl}/#ghadeer-al-taee`,
    },
  };
}

export function safeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
