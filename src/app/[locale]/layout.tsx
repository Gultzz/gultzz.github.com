import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Providers } from "../providers";
import { getPortfolio, isLocale, locales, type Locale } from "../../data/portfolio";
import { searchVerification, siteName, siteUrl } from "../../lib/site";
import "../globals.css";

export const dynamicParams = false;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#111111",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const data = getPortfolio(locale);
  const title = `${data.name} — ${data.position}`;
  const description = data.about[0];
  const socialImage = `/${locale}/opengraph-image`;
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    applicationName: siteName,
    authors: [{ name: data.name, url: data.contacts.linkedin.href }],
    creator: data.name,
    publisher: data.name,
    category: "technology",
    referrer: "strict-origin-when-cross-origin",
    formatDetection: { email: false, address: false, telephone: false },
    alternates: {
      canonical: `/${locale}`,
      languages: { "pt-BR": "/pt", en: "/en", "x-default": "/pt" },
    },
    openGraph: {
      title,
      description,
      type: "profile",
      firstName: "Gustavo",
      lastName: "Schultz",
      username: "Gultzz",
      locale: data.lang,
      alternateLocale: locale === "pt" ? "en" : "pt_BR",
      url: `/${locale}`,
      siteName,
      images: [{ url: socialImage, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [socialImage] },
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" },
    manifest: "/manifest.json",
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    verification: {
      ...(searchVerification.google ? { google: searchVerification.google } : {}),
      ...(searchVerification.bing ? { other: { "msvalidate.01": searchVerification.bing } } : {}),
    },
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();
  const locale = localeParam as Locale;
  return (
    <html lang={locale === "pt" ? "pt-BR" : "en"}>
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
