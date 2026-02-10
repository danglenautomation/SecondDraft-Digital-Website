import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "SecondDraft Digital rebuilds and creates websites that work. Learn about our approach, values, and the story behind the name.",
  openGraph: {
    title: `About | ${SITE_CONFIG.name}`,
    description:
      "SecondDraft Digital rebuilds and creates websites that work. Learn about our approach and values.",
    url: `${SITE_CONFIG.url}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
