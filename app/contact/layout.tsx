import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SecondDraft Digital for a free consultation. We typically respond within 24 hours.",
  alternates: { canonical: `${SITE_CONFIG.url}/contact` },
  openGraph: {
    title: `Contact | ${SITE_CONFIG.name}`,
    description:
      "Get in touch for a free consultation. We typically respond within 24 hours.",
    url: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Contact", url: `${SITE_CONFIG.url}/contact` },
        ]}
      />
      {children}
    </>
  );
}
