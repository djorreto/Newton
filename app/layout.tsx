import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageBackdrop } from "@/components/ui/PageBackdrop";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/siteConfig";
import { siteContent } from "@/content/siteContent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const baseUrl = siteConfig.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteContent.meta.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteContent.meta.description,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: baseUrl,
    siteName: siteConfig.name,
    title: siteContent.meta.title,
    description: siteContent.meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col text-ice">
        <JsonLd />
        <PageBackdrop />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
