import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SecondDraft Digital for a free consultation. We typically respond within 24 hours.",
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
  return children;
}
