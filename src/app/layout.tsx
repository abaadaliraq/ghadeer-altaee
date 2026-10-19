import type { Metadata } from "next";
import InitialLoader from "@/components/layout/InitialLoader";
import { defaultImage, homepageDescription, siteName, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ghadeer Al-Taee | Iraqi Visual Artist",
    template: "%s",
  },
  description: homepageDescription.en,
  applicationName: siteName,
  authors: [{ name: "Ghadeer Al-Taee", url: siteUrl }],
  creator: "Ghadeer Al-Taee",
  publisher: "Ghadeer Al-Taee",
  openGraph: {
    title: "Ghadeer Al-Taee | Iraqi Visual Artist",
    description: homepageDescription.en,
    url: siteUrl,
    siteName,
    images: [
      {
        url: defaultImage,
        alt: "Ghadeer Al-Taee Iraqi visual artist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghadeer Al-Taee | Iraqi Visual Artist",
    description: homepageDescription.en,
    images: [defaultImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <InitialLoader />
        {children}
      </body>
    </html>
  );
}
