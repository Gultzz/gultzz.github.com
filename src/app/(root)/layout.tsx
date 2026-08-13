import type { Metadata, Viewport } from "next";
import { Providers } from "../providers";
import { siteName, siteUrl } from "../../lib/site";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteName} — Redirecionando`,
  description: "Portfólio bilíngue e currículo digital de Gustavo Schultz, Desenvolvedor Fullstack.",
  alternates: { canonical: "/pt", languages: { "pt-BR": "/pt", en: "/en", "x-default": "/pt" } },
  robots: { index: false, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#111111",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><Providers>{children}</Providers></body></html>;
}
