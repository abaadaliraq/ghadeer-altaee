export type Locale = "ar" | "en";

export type LocalizedText = {
  ar: string;
  en: string;
};

export type Gateway = {
  number: string;
  slug: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  intro: LocalizedText;
  card: {
    title: LocalizedText;
    description: LocalizedText;
  };
  image?: string;
  imagePosition: string;
  treatment?: "standard" | "portrait" | "close" | "large-title" | "process" | "exhibition" | "type-led";
  eyebrow?: LocalizedText;
};

export const gateways: Gateway[] = [
  {
    number: "01",
    slug: "about-ghadeer",
    card: {
      title: {
        ar: "الفنان غدير الطائي",
        en: "The Artist Ghadeer Al-Taee",
      },
      description: {
        ar: "تعرّف على الفنان وتجربته ومسيرته الفنية.",
        en: "Discover the artist, his practice, and his artistic journey.",
      },
    },
    title: {
      ar: "عن غدير الطائي",
      en: "About Ghadeer Al-Taee",
    },
    subtitle: {
      ar: "الفنان خلف التفاصيل.",
      en: "The artist behind the details.",
    },
    intro: {
      ar: "مدخل للتعرّف على غدير الطائي، الفنان التشكيلي والنحّات العراقي من بغداد، وخلفيته في الفن والحرفة واشتغاله على ذاكرة المكان.",
      en: "An entry into Ghadeer Al-Taee, the Iraqi visual artist and sculptor from Baghdad, his craft background and his work around the memory of place.",
    },
    image: "/images/Gateways/gate-01.jpg",
    imagePosition: "52% 34%",
    treatment: "portrait",
  },
  {
    number: "02",
    slug: "intuitive-artist",
    card: {
      title: {
        ar: "غدير الطائي والفن الفطري",
        en: "Ghadeer Al-Taee and Intuitive Art",
      },
      description: {
        ar: "مفهوم الفن الفطري وعلاقته بتجربته الفنية.",
        en: "Explore intuitive art and its connection to his artistic practice.",
      },
    },
    title: {
      ar: "الفنان الفطري",
      en: "The Intuitive Artist",
    },
    subtitle: {
      ar: "عين ترى ما نتجاوزه.",
      en: "An eye for what we pass by.",
    },
    intro: {
      ar: "صفحة عن طريقة غدير في رؤية المكان؛ الملاحظة الطويلة، الصبر، والحرفة اليدوية التي تمنح التفاصيل القديمة حياة جديدة.",
      en: "A page about Ghadeer's way of seeing place: long observation, patience and handcraft that gives old details a renewed life.",
    },
    image: "/images/Gateways/gate-02.jpg",
    imagePosition: "48% 28%",
    treatment: "standard",
  },
  {
    number: "03",
    slug: "visual-language",
    card: {
      title: {
        ar: "الأسلوب الفني لغدير الطائي",
        en: "Ghadeer Al-Taee’s Artistic Style",
      },
      description: {
        ar: "رؤيته الفنية وطريقته في التعبير عن العمارة والتفاصيل البغدادية.",
        en: "His artistic vision and approach to depicting Baghdad’s architecture and details.",
      },
    },
    title: {
      ar: "لغة غدير",
      en: "Ghadeer's Language",
    },
    subtitle: {
      ar: "الطابوق، الضوء، الشناشيل وأثر الزمن.",
      en: "Brick, light, shanasheel and the trace of time.",
    },
    intro: {
      ar: "مساحة لقراءة مفردات غدير البصرية: الشناشيل، الأبواب، الشبابيك، الأقواس، الطابوق، الضوء والظل وملمس المواد.",
      en: "A space to read Ghadeer's visual vocabulary: shanasheel, doors, windows, arches, brick, light, shadow and material texture.",
    },
    image: "/images/Gateways/gate-03.jpg",
    imagePosition: "54% 48%",
    treatment: "close",
  },
  {
    number: "04",
    slug: "from-place-to-miniature",
    card: {
      title: {
        ar: "صناعة المجسمات المعمارية",
        en: "Crafting Architectural Miniatures",
      },
      description: {
        ar: "كيف تتحول تفاصيل المباني التراثية إلى أعمال فنية مصغّرة.",
        en: "How the details of heritage buildings become miniature works of art.",
      },
    },
    title: {
      ar: "من المكان إلى المجسم",
      en: "From Place to Miniature",
    },
    subtitle: {
      ar: "رحلة التفاصيل من الذاكرة إلى المادة.",
      en: "Details traveling from memory into material.",
    },
    intro: {
      ar: "بوابة مخصصة لطريقة بناء العمل؛ من المكان والملاحظة ودراسة التفاصيل إلى اختيار المواد والمعالجة والتكوين النهائي.",
      en: "A gateway for the making process: from place, observation and studying details to materials, treatment and final construction.",
    },
    image: "/images/Gateways/gate-04.jpg",
    imagePosition: "46% 58%",
    treatment: "process",
  },
  {
    number: "05",
    slug: "memory-of-baghdad",
    card: {
      title: {
        ar: "معرض «ذاكرة بغداد»",
        en: "“Memory of Baghdad” Exhibition",
      },
      description: {
        ar: "أعمال غدير الطائي الفنية في بيت التحفيات ببغداد.",
        en: "Artworks by Ghadeer Al-Taee at Beit Al-Tuhaf in Baghdad.",
      },
    },
    title: {
      ar: "معرض ذاكرة بغداد",
      en: "Memory of Baghdad Exhibition",
    },
    subtitle: {
      ar: "معرض غدير الطائي في بيت التحفيات.",
      en: "Ghadeer Al-Taee's exhibition at Beit Al-Tuhaf.",
    },
    intro: {
      ar: "صفحة خاصة بمعرض ذاكرة بغداد، قابلة لإضافة فكرة المعرض، بيت التحفيات، الأعمال المشاركة، وصور الافتتاح لاحقاً.",
      en: "A page for Memory of Baghdad, ready for the exhibition concept, Beit Al-Tuhaf, participating works and opening documentation later.",
    },
    image: "/images/Gateways/gate-05.jpg",
    imagePosition: "50% 42%",
    treatment: "exhibition",
    eyebrow: {
      ar: "المعرض الحالي",
      en: "Current Exhibition",
    },
  },
  {
    number: "06",
    slug: "craft-journey",
    card: {
      title: {
        ar: "المسيرة الفنية والحرفية",
        en: "A Journey Through Art and Craft",
      },
      description: {
        ar: "محطات من تجربته في الفن والعمارة والعمل الحرفي.",
        en: "Milestones in his experience across art, architecture, and craftsmanship.",
      },
    },
    title: {
      ar: "سيرة من الحرفة",
      en: "A Craft Journey",
    },
    subtitle: {
      ar: "تجربة امتدت بين الفن والعمارة والحرفة.",
      en: "A practice across art, architecture and craft.",
    },
    intro: {
      ar: "مساحة مستقبلية لتنظيم سيرة غدير كفصول تحريرية عن النحت، الاستنساخ الأثري، الزجاج، الفسيفساء، العمارة، الترميم والماكيت.",
      en: "A future editorial structure for Ghadeer's journey through sculpture, heritage replication, glass, mosaic, architecture, restoration and maquettes.",
    },
    image: "/images/Gateways/gate-06.jpg",
    imagePosition: "56% 62%",
    treatment: "type-led",
  },
];

export function getGateway(slug: string) {
  return gateways.find((gateway) => gateway.slug === slug);
}

export function localized(value: LocalizedText, locale: Locale) {
  return value[locale];
}
