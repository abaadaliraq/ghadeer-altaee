export type Locale = "ar" | "en";

export type LocalizedText = {
  ar: string;
  en: string;
};

export type Practice = {
  number: string;
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
  imagePosition: string;
  treatment?: "standard" | "close" | "large-title" | "dark" | "edge" | "type-led";
};

export const practices: Practice[] = [
  {
    number: "01",
    slug: "sculpture",
    title: {
      ar: "النحت والخامات",
      en: "Sculpture and Materials",
    },
    description: {
      ar: "الخشب، الحجر، النحت البارز والغائر ومعالجة المواد.",
      en: "Wood, stone, relief carving, intaglio work and material treatment.",
    },
    image: "/images/works/collection-01/work-01.jpg",
    imagePosition: "58% 38%",
    treatment: "standard",
  },
  {
    number: "02",
    slug: "glass-mosaic",
    title: {
      ar: "الزجاج والفسيفساء",
      en: "Glass and Mosaic",
    },
    description: {
      ar: "الزجاج المعشّق والفسيفساء الحجرية والزجاجية.",
      en: "Stained glass, stone mosaic and glass mosaic.",
    },
    image: "/images/works/collection-02/work-06.jpg",
    imagePosition: "54% 36%",
    treatment: "close",
  },
  {
    number: "03",
    slug: "heritage-architecture",
    title: {
      ar: "العمارة التراثية",
      en: "Heritage Architecture",
    },
    description: {
      ar: "تفاصيل العمارة العراقية، الشناشيل، الأبواب والزخارف.",
      en: "Iraqi architectural details, shanasheel, doors and ornament.",
    },
    image: "/images/works/collection-01/work-02.jpg",
    imagePosition: "50% 42%",
    treatment: "large-title",
  },
  {
    number: "04",
    slug: "restoration",
    title: {
      ar: "الاستنساخ والترميم",
      en: "Replication and Restoration",
    },
    description: {
      ar: "الاستنساخ الأثري طبق الأصل وإعادة بناء التفاصيل التاريخية.",
      en: "Exact heritage replication and rebuilding historical detail.",
    },
    image: "/images/works/collection-01/work-03.jpg",
    imagePosition: "52% 50%",
    treatment: "dark",
  },
  {
    number: "05",
    slug: "miniatures",
    title: {
      ar: "المجسم والماكيت",
      en: "Miniatures and Models",
    },
    description: {
      ar: "الماكيتات، النماذج المصغرة والمشاهد المعمارية.",
      en: "Maquettes, miniature models and architectural scenes.",
    },
    image: "/images/works/collection-02/work-04.jpg",
    imagePosition: "44% 40%",
    treatment: "edge",
  },
  {
    number: "06",
    slug: "design",
    title: {
      ar: "التصميم والديكور",
      en: "Design and Decor",
    },
    description: {
      ar: "التصميم الداخلي والخارجي وأعمال الديكور الفني.",
      en: "Interior and exterior design with artistic decor work.",
    },
    image: "/images/works/collection-02/work-05.jpg",
    imagePosition: "54% 42%",
    treatment: "type-led",
  },
];

export function getPractice(slug: string) {
  return practices.find((practice) => practice.slug === slug);
}

export function localized(value: LocalizedText, locale: Locale) {
  return value[locale];
}
