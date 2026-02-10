import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <ServicesOverview />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
