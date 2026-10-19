import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import TopBar from "@/components/layout/TopBar";
import AboutGhadeerGateway from "@/components/sections/AboutGhadeerGateway";
import GatewayEditorialPage from "@/components/sections/GatewayEditorialPage";
import MemoryBaghdadPage from "@/components/sections/MemoryBaghdadPage";
import {
  gateways,
  getGateway,
  localized,
  type Locale,
} from "@/lib/gateways";
import {
  getGatewayMetadata,
  profilePageJsonLd,
  safeJsonLd,
} from "@/lib/seo";

type GatewayPageProps = {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
};

const editorialGatewaySlugs = [
  "intuitive-artist",
  "visual-language",
  "from-place-to-miniature",
  "craft-journey",
];

export function generateStaticParams() {
  return gateways.flatMap((gateway) =>
    (["ar", "en"] as Locale[]).map((lang) => ({
      lang,
      slug: gateway.slug,
    }))
  );
}

export async function generateMetadata({ params }: GatewayPageProps) {
  const { lang, slug } = await params;
  const locale: Locale = lang === "en" ? "en" : "ar";

  return getGatewayMetadata(locale, slug) ?? {};
}

export default async function GatewayPage({ params }: GatewayPageProps) {
  const { lang, slug } = await params;
  const locale: Locale = lang === "en" ? "en" : "ar";
  const isArabic = locale === "ar";
  const gateway = getGateway(slug);

  if (!gateway) {
    notFound();
  }

  if (gateway.slug === "about-ghadeer") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd(profilePageJsonLd(locale)),
          }}
        />
        <TopBar lang={locale} linkBase={`/${locale}`} tone="dark" />
        <AboutGhadeerGateway lang={locale} />
      </>
    );
  }

  if (gateway.slug === "memory-of-baghdad") {
    return (
      <>
        <TopBar lang={locale} linkBase={`/${locale}`} />
        <MemoryBaghdadPage lang={locale} />
      </>
    );
  }

  if (editorialGatewaySlugs.includes(gateway.slug)) {
    return (
      <>
        <TopBar lang={locale} linkBase={`/${locale}`} />
        <GatewayEditorialPage lang={locale} slug={gateway.slug} />
      </>
    );
  }

  const title = localized(gateway.title, locale);
  const subtitle = localized(gateway.subtitle, locale);
  const intro = localized(gateway.intro, locale);

  return (
    <>
      <TopBar lang={locale} />

      <main
        dir={isArabic ? "rtl" : "ltr"}
        className="min-h-screen bg-[#11110F] text-[#E8E1D5]"
      >
        <section className="mx-auto w-full max-w-[1500px] px-5 pb-18 pt-28 sm:px-6 md:px-10 md:pb-24 md:pt-34 lg:px-16">
          <div>
            <div className="flex items-center gap-3 font-[var(--font-inter)] text-[10px] uppercase tracking-[0.28em] text-[#E8E1D5]/45">
              <span>{gateway.number}</span>
              <span className="h-px w-10 bg-[#B69B70]/45" />
              <span>{isArabic ? "بوابة" : "Gateway"}</span>
            </div>

            <div className="mt-8 grid gap-10 md:grid-cols-[0.35fr_0.65fr] md:items-end md:gap-12 lg:gap-16">
              <div>
                {gateway.eyebrow ? (
                  <p className="mb-4 font-[var(--font-inter)] text-[9px] uppercase tracking-[0.24em] text-[#B69B70]/80">
                    {localized(gateway.eyebrow, locale)}
                  </p>
                ) : null}

                <h1
                  className={`font-normal leading-[1.02] text-[#F3EBDD] ${
                    isArabic
                      ? "font-[var(--font-arabic-serif)] text-[48px] md:text-[72px]"
                      : "font-[var(--font-cormorant)] text-[56px] md:text-[86px]"
                  }`}
                >
                  {title}
                </h1>

                <p
                  className={`mt-5 max-w-[430px] text-[#E8E1D5]/75 ${
                    isArabic
                      ? "font-[var(--font-arabic-serif)] text-[18px] leading-[1.8]"
                      : "font-[var(--font-cormorant)] text-[24px] leading-[1.35]"
                  }`}
                >
                  {subtitle}
                </p>

                <p
                  className={`mt-7 max-w-[460px] text-[#E8E1D5]/58 ${
                    isArabic
                      ? "font-[var(--font-arabic-serif)] text-[14px] leading-[2]"
                      : "font-[var(--font-inter)] text-[13px] leading-[1.9]"
                  }`}
                >
                  {intro}
                </p>

                <Link
                  href={`/${locale}#works`}
                  className="mt-8 inline-flex items-center gap-4 border-b border-[#E8E1D5]/24 pb-2 font-[var(--font-inter)] text-[9px] uppercase tracking-[0.22em] text-[#E8E1D5]/55 transition-colors duration-300 hover:text-[#F3EBDD]"
                >
                  {isArabic ? "العودة إلى البوابات" : "Back to Gateways"}
                  <span aria-hidden="true">↙</span>
                </Link>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden bg-[#201d18] md:aspect-[16/11]">
                {gateway.image ? (
                  <>
                    <Image
                      src={gateway.image}
                      alt={
                        isArabic
                          ? `${title} - بوابة من أعمال غدير الطائي`
                          : `${title} - gateway in Ghadeer Al-Taee's work`
                      }
                      fill
                      priority
                      sizes="(max-width: 767px) 100vw, 65vw"
                      className="scale-[1.015] object-cover"
                      style={{ objectPosition: gateway.imagePosition }}
                    />
                    <div className="absolute inset-0 bg-[#11110F]/10" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-[#ddd3c2]" />
                )}
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 border-t border-[#E8E1D5]/12 pt-10 md:mt-22 md:grid-cols-[0.35fr_0.65fr] md:pt-14">
            <div className="h-px w-24 bg-[#B69B70]/35" />

            <div className="space-y-12">
              {/* Future editorial sections mount here. */}
              <section aria-label={isArabic ? "أقسام مستقبلية" : "Future sections"} />

              {/* Future gallery content mounts here. */}
              <section aria-label={isArabic ? "معرض مستقبلي" : "Future gallery"} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
