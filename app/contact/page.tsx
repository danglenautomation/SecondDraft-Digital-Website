"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--slate)]/10 to-[var(--secondary)]/10 py-16 lg:py-24">
        <Container>
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Ready to transform your online presence? We typically respond
              within 24 hours.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid gap-12 lg:grid-cols-5 lg:gap-16"
          >
            <motion.div variants={staggerItem} className="lg:col-span-2">
              <h2 className="text-2xl font-bold">Contact details</h2>
              <p className="mt-4 text-[var(--muted)]">
                Have a project in mind? Fill out the form and we&apos;ll get
                back to you. Free consultation, no commitment.
              </p>
              <div className="mt-8 space-y-4">
                <div>
                  <span className="text-sm font-medium text-[var(--muted)]">
                    Email
                  </span>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="mt-1 block text-[var(--primary)] hover:underline"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
                <div className="rounded-lg border border-[var(--border)] bg-[var(--slate)]/5 p-4">
                  <p className="text-sm font-medium text-[var(--foreground)]">
                    Fast response
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    We aim to reply within 24 hours, usually sooner.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={staggerItem} className="lg:col-span-3">
              <ContactForm />
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
