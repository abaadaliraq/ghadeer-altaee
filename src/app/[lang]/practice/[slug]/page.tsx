import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import TopBar from "@/components/layout/TopBar";
import {
  getPractice,
  localized,
  practices,
  type Locale,
} from "@/lib/practices";

type PracticePageProps = {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return practices.flatMap((practice) =>
    (["ar", "en"] as Locale[]).map((lang) => ({
      lang,
      slug: practice.slug,
    }))
  );
}

export default async function PracticePage({ params }: PracticePageProps) {
  const { lang, slug } = await params;
  const locale: Locale = lang === "en" ? "en" : "ar";
  const isArabic = locale === "ar";
  const practice = getPractice(slug);

  if (!practice) {
    notFound();
  }

  const title = localized(practice.title, locale);
  const description = localized(practice.description, locale);

  return (
    <>
      <TopBar lang={locale} />

      <main
        dir={isArabic ? "rtl" : "ltr"}
        className="min-h-screen bg-[#11110F] text-[#E8E1D5]"
      >
        <section className="mx-auto w-full max-w-[1500px] px-5 pb-18 pt-28 sm:px-6 md:px-10 md:pb-24 md:pt-34 lg:px-16">
          <div className="transition duration-700 ease-out">
            <div className="flex items-center gap-3 font-[var(--font-inter)] text-[10px] uppercase tracking-[0.28em] text-[#E8E1D5]/45">
              <span>{practice.number}</span>
              <span className="h-px w-10 bg-[#B69B70]/45" />
              <span>{isArabic ? "مسار فني" : "Practice"}</span>
            </div>

            <div className="mt-8 grid gap-10 md:grid-cols-[0.35fr_0.65fr] md:items-end md:gap-12 lg:gap-16">
              <div>
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
                  className={`mt-6 max-w-[420px] text-[#E8E1D5]/62 ${
                    isArabic
                      ? "font-[var(--font-arabic-serif)] text-[15px] leading-[2]"
                      : "font-[var(--font-inter)] text-[13px] leading-[1.9]"
                  }`}
                >
                  {description}
                </p>

                <Link
                  href={`/${locale}#about`}
                  className="mt-8 inline-flex items-center gap-4 border-b border-[#E8E1D5]/24 pb-2 font-[var(--font-inter)] text-[9px] uppercase tracking-[0.22em] text-[#E8E1D5]/55 transition-colors duration-300 hover:text-[#F3EBDD]"
                >
                  {isArabic ? "العودة إلى مسارات فنية" : "Back to Artistic Pathways"}
                  <span aria-hidden="true">↙</span>
                </Link>
              </div>

              <div className="relative aspect-[4/5] overflow-hidden bg-[#201d18] md:aspect-[16/11]">
                <Image
                  src={practice.image}
                  alt={title}
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, 65vw"
                  className="scale-[1.015] object-cover"
                  style={{ objectPosition: practice.imagePosition }}
                />
                <div className="absolute inset-0 bg-[#11110F]/10" />
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 border-t border-[#E8E1D5]/12 pt-10 md:mt-22 md:grid-cols-[0.35fr_0.65fr] md:pt-14">
            <div className="h-px w-24 bg-[#B69B70]/35" />

            <div className="space-y-12">
              {/* Future gallery content mounts here. */}
              <section aria-label={isArabic ? "معرض مستقبلي" : "Future gallery"} />

              {/* Future long-form text content mounts here. */}
              <section aria-label={isArabic ? "نصوص مستقبلية" : "Future text"} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
