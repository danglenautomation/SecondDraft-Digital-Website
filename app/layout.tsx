import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/constants";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | Website Creation & Hosting`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "website creation",
    "website hosting",
    "small business website",
    "website rebuild",
    "website redesign",
    SITE_CONFIG.name,
  ],
  openGraph: {
    type: "website",
    siteName: SITE_CONFIG.name,
    locale: "en_GB",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
