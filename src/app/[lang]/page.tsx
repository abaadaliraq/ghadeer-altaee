import TopBar from "@/components/layout/TopBar";
import Hero from "@/components/sections/Hero";
import ArtistIntro from "@/components/sections/ArtistIntro";
import Contact from "@/components/sections/Contact";

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
      <TopBar lang={currentLang} />

      <main>

        <Hero lang={currentLang} />
         <ArtistIntro lang={currentLang} />
           <Contact lang={currentLang} />


      </main>
    </>
  );
}
