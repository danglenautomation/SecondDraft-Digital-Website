"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTA({
  title = "Ready to transform your online presence?",
  subtitle = "Get in touch for a free consultation. We typically respond within 24 hours.",
  primaryLabel = "Get Started",
  secondaryLabel = "View Services",
  secondaryHref = "/services",
}: CTASectionProps) {
  return (
    <section className="bg-[var(--primary)] py-16 text-white lg:py-20">
      <Container>
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true }}
          transition={fadeInUp.transition}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-white/90">{subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="inverse" size="lg">
              {primaryLabel}
            </Button>
            <Button
              href={secondaryHref}
              variant="outline"
              size="lg"
              className="border-white/50 text-white hover:bg-white/10 hover:text-white"
            >
              {secondaryLabel}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
