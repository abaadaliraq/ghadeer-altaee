import TopBar from "@/components/layout/TopBar";
import Hero from "@/components/sections/Hero";
import ArtistIntro from "@/components/sections/ArtistIntro";
import ArtistNumbers from "@/components/sections/ArtistNumbers";
import Contact from "@/components/sections/Contact";
import { getHomeMetadata, personJsonLd, safeJsonLd, websiteJsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function HomePage({
  params,
}: PageProps) {
  const { lang } = await params;

  const currentLang: "ar" | "en" =
    lang === "en" ? "en" : "ar";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd([personJsonLd(), websiteJsonLd()]),
        }}
      />
      <TopBar lang={currentLang} />

      <main>

        <Hero lang={currentLang} />
         <ArtistIntro lang={currentLang} />
         <ArtistNumbers lang={currentLang} />
           <Contact lang={currentLang} />


      </main>
    </>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  const locale = lang === "en" ? "en" : "ar";

  return getHomeMetadata(locale);
}
