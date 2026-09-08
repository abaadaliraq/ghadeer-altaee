import Image from "next/image";
import { ArrowDown, ArrowUpLeft } from "lucide-react";

type HeroProps = {
  lang: "ar" | "en";
};

export default function Hero({ lang }: HeroProps) {
  const isArabic = lang === "ar";

  return (
    <section
      id="home"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative h-[92vh] min-h-[680px] w-full overflow-hidden bg-[#080808]"
    >
      {/* IMAGE */}
      <Image
        src="/images/artist/ghadeer.jpg"
        alt={
          isArabic
            ? "الفنان التشكيلي غدير الطائي"
            : "Iraqi visual artist Ghadeer Al-Taee"
        }
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* CINEMATIC OVERLAYS */}

      {/* overall darkness */}
      <div className="absolute inset-0 bg-black/10" />

      {/* top fade for navbar */}
      <div className="absolute inset-x-0 top-0 h-[220px] bg-gradient-to-b from-black/55 via-black/20 to-transparent" />

      {/* bottom cinematic fade */}
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

      {/* side fade - keeps copy readable */}
      <div
        className={`absolute inset-y-0 w-[60%] ${
          isArabic
            ? "right-0 bg-gradient-to-l from-black/65 via-black/15 to-transparent"
            : "left-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent"
        }`}
      />

      {/* subtle vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.3)]" />

      {/* HERO CONTENT */}
      <div
        className={`
          absolute bottom-0 z-20
          w-full
          px-6 pb-12
          md:px-12 md:pb-16
          lg:px-16 lg:pb-20
        `}
      >
        <div className="max-w-[760px]">

          {/* eyebrow */}
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-white/55" />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.32em]
                text-white/65
              "
            >
              {isArabic
                ? "فنان تشكيلي عراقي"
                : "IRAQI VISUAL ARTIST"}
            </span>
          </div>

          {/* TITLE */}
          <h1
            className={`
              text-white
              ${
                isArabic
                  ? "font-[var(--font-arabic-serif)] text-[54px] leading-[1.2] md:text-[76px] lg:text-[92px]"
                  : "font-[var(--font-cormorant)] text-[64px] leading-[0.86] tracking-[-0.035em] md:text-[92px] lg:text-[116px]"
              }
            `}
          >
            {isArabic ? (
              <>
                غدير
                <span className="block font-normal text-white/85">
                  الطائي
                </span>
              </>
            ) : (
              <>
                Ghadeer
                <span className="block italic text-white/85">
                  Al-Taee
                </span>
              </>
            )}
          </h1>

          {/* DESCRIPTION */}
          <p
            className={`
              mt-6 max-w-[570px]
              text-white/70
              ${
                isArabic
                  ? "font-[var(--font-arabic-serif)] text-[15px] leading-[2]"
                  : "font-[var(--font-inter)] text-[13px] leading-[1.9]"
              }
            `}
          >
            {isArabic
              ? "تجربة فنية تستكشف الذاكرة العراقية والعمارة والتفاصيل المتوارثة، وتحولها إلى أعمال تحمل أثر المكان والإنسان."
              : "An artistic practice exploring Iraqi memory, architecture and inherited details — transforming place and history into contemporary visual works."}
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap items-center gap-3">

            <a
              href="#works"
              className="
                group
                inline-flex
                h-12
                items-center
                gap-3
                bg-white
                px-6
                text-[11px]
                font-medium
                tracking-[0.12em]
                text-black
                transition-all
                duration-300
                hover:bg-white/85
              "
            >
              {isArabic ? "استكشف الأعمال" : "EXPLORE WORKS"}

              <ArrowUpLeft
                size={15}
                className={`
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                  group-hover:-translate-y-1
                  ${!isArabic ? "rotate-90" : ""}
                `}
              />
            </a>

            <a
              href="#about"
              className="
                inline-flex
                h-12
                items-center
                border
                border-white/30
                bg-white/[0.04]
                px-6
                text-[11px]
                font-medium
                tracking-[0.12em]
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-white/60
                hover:bg-white/10
              "
            >
              {isArabic ? "عن الفنان" : "ABOUT THE ARTIST"}
            </a>
          </div>
        </div>
      </div>

      {/* WORK INFO */}
      <div
        className={`
          absolute
          bottom-16
          z-20
          hidden
          text-white/60
          xl:block
          ${isArabic ? "left-16 text-left" : "right-16 text-right"}
        `}
      >
        <p className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.25em]">
          Featured Artwork
        </p>

        <p className="mt-2 font-[var(--font-cormorant)] text-[19px] italic text-white/85">
          Selected Work
        </p>

        <p className="mt-1 text-[10px] tracking-[0.12em] text-white/45">
          Ghadeer Al-Taee
        </p>
      </div>

      {/* SCROLL */}
      <a
        href="#works"
        aria-label="Scroll to works"
        className="
          absolute
          bottom-5
          left-1/2
          z-30
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-white/50
          transition-colors
          hover:text-white
        "
      >
        <span className="text-[8px] uppercase tracking-[0.28em]">
          Scroll
        </span>

        <ArrowDown size={14} />
      </a>
    </section>
  );
}