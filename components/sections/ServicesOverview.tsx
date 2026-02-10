"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const icons = {
  creation: (
    <svg className="h-12 w-12 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
  ),
  hosting: (
    <svg className="h-12 w-12 text-[var(--secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
    </svg>
  ),
};

export function ServicesOverview() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2
            variants={staggerItem}
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            What We Do
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]"
          >
            From brand-new sites to complete overhauls, we deliver websites and
            hosting that help small businesses stand out.
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-16"
        >
          <motion.div variants={staggerItem}>
            <Link href="/services#creation">
              <Card className="h-full">
                <div className="flex flex-col items-start">
                  <span className="rounded-xl bg-[var(--primary)]/10 p-3">
                    {icons.creation}
                  </span>
                  <h3 className="mt-4 text-xl font-bold">
                    {SERVICES.creation.title}
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    {SERVICES.creation.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-[var(--primary)]">
                    Learn more
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Card>
            </Link>
          </motion.div>
          <motion.div variants={staggerItem}>
            <Link href="/services#hosting">
              <Card className="h-full">
                <div className="flex flex-col items-start">
                  <span className="rounded-xl bg-[var(--secondary)]/10 p-3">
                    {icons.hosting}
                  </span>
                  <h3 className="mt-4 text-xl font-bold">
                    {SERVICES.hosting.title}
                  </h3>
                  <p className="mt-2 text-[var(--muted)]">
                    {SERVICES.hosting.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-[var(--secondary)]">
                    Learn more
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Card>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button href="/services" variant="outline" size="lg">
            View All Services
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
