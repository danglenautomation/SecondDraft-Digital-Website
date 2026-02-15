import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website creation and premium hosting for small businesses. Modern design, global performance, and enterprise security.",
  alternates: { canonical: `${SITE_CONFIG.url}/services` },
  openGraph: {
    title: `Services | ${SITE_CONFIG.name}`,
    description:
      "Website creation and premium hosting for small businesses. Modern design, global performance, and enterprise security.",
    url: `${SITE_CONFIG.url}/services`,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_CONFIG.url },
          { name: "Services", url: `${SITE_CONFIG.url}/services` },
        ]}
      />
      {children}
    </>
  );
}
