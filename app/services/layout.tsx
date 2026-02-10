import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website creation and premium hosting for small businesses. Modern design, global performance, and enterprise security.",
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
  return children;
}
