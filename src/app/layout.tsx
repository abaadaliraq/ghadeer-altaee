import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ghadeer Al-Taee | Visual Artist",
  description: "Official portfolio of Iraqi visual artist Ghadeer Al-Taee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}