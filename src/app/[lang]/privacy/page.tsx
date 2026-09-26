import Link from "next/link";

type LegalPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function PrivacyPage({ params }: LegalPageProps) {
  const { lang } = await params;
  const isArabic = lang !== "en";
  const locale = isArabic ? "ar" : "en";

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="min-h-screen bg-[#11110F] px-5 py-16 text-[#F1ECE3] md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[900px]">
        <p className="font-[var(--font-inter)] text-[10px] uppercase tracking-[0.24em] text-[#F1ECE3]/45">
          {isArabic ? "وثيقة قانونية" : "Legal"}
        </p>
        <h1
          className={`mt-5 font-normal ${
            isArabic
              ? "font-[var(--font-arabic-serif)] text-[46px]"
              : "font-[var(--font-cormorant)] text-[62px]"
          }`}
        >
          {isArabic ? "سياسة الخصوصية" : "Privacy Policy"}
        </h1>
        <p
          className={`mt-8 max-w-[620px] text-[#F1ECE3]/62 ${
            isArabic
              ? "font-[var(--font-arabic-serif)] text-[15px] leading-[2]"
              : "font-[var(--font-inter)] text-[13px] leading-[1.9]"
          }`}
        >
          {isArabic
            ? "هذه صفحة أساسية مخصصة لسياسة الخصوصية. يمكن إضافة التفاصيل القانونية الكاملة هنا لاحقاً بما يتناسب مع طريقة جمع واستخدام بيانات الزوار."
            : "This is a basic privacy policy page. Full legal details can be added here later to match how visitor data is collected and used."}
        </p>
        <Link
          href={`/${locale}`}
          className="mt-10 inline-block border-b border-[#F1ECE3]/30 pb-2 font-[var(--font-inter)] text-[10px] uppercase tracking-[0.22em] text-[#F1ECE3]/65"
        >
          {isArabic ? "العودة للرئيسية" : "Back home"}
        </Link>
      </div>
    </main>
  );
}
