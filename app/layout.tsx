import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import { church } from "@/data/church";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://surefirechristianchurch.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: church.churchName,
    template: `%s — ${church.churchName}`,
  },
  description: "Transforming lives, transforming communities — a church where people find hope, healing, and empowerment in Christ.",
  openGraph: {
    type: "website",
    siteName: church.churchName,
    title: church.churchName,
  },
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-paper focus:px-4 focus:py-2 focus:text-ink">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
