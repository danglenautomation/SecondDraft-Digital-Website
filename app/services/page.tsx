"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  SERVICES,
  CREATION_FEATURES,
  HOSTING_FEATURES_SERVICES,
  PROCESS_STEPS,
} from "@/lib/constants";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--slate)]/5 py-16 lg:py-24">
        <Container>
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Website creation and premium hosting, designed for small
              businesses that want to look and perform like the best.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Website Creation */}
      <section id="creation" className="py-16 lg:py-24">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid gap-12 lg:grid-cols-2 lg:items-start"
          >
            <motion.div variants={staggerItem}>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {SERVICES.creation.title}
              </h2>
              <p className="mt-4 text-lg text-[var(--muted)]">
                {SERVICES.creation.description}
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="lg">
                  Get a Quote
                </Button>
              </div>
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="rounded-2xl bg-[var(--primary)]/5 border border-[var(--border)] p-8 lg:p-12"
            >
              <div className="text-6xl font-bold text-[var(--primary)]/20 lg:text-8xl">
                01
              </div>
              <p className="mt-4 text-sm font-medium uppercase tracking-wider text-[var(--primary)]">
                From concept to launch
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mt-16"
          >
            <h3 className="text-xl font-bold text-[var(--foreground)]">
              What you get
            </h3>
            <p className="mt-2 text-[var(--muted)]">
              Every website we build includes the following so you get a solid,
              maintainable result.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CREATION_FEATURES.map((feature) => (
                <motion.div key={feature.title} variants={staggerItem}>
                  <Card className="h-full">
                    <h4 className="font-bold">{feature.title}</h4>
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Premium Hosting */}
      <section id="hosting" className="bg-[var(--slate)]/5 py-16 lg:py-24">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2
              variants={staggerItem}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {SERVICES.hosting.title}
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]"
            >
              {SERVICES.hosting.description}
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3"
          >
            {HOSTING_FEATURES_SERVICES.map((feature) => (
              <motion.div key={feature.title} variants={staggerItem}>
                <Card className="h-full">
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button href="/contact" variant="primary" size="lg">
              Discuss Hosting
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Process Timeline */}
      <section className="py-16 lg:py-24">
        <Container>
          <motion.h2
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Our Process
          </motion.h2>
          <motion.p
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-xl text-center text-[var(--muted)]"
          >
            From first conversation to ongoing support, we keep things clear and
            collaborative.
          </motion.p>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mt-12 flex flex-wrap justify-center gap-4 lg:mt-16"
          >
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step}
                variants={staggerItem}
                className="flex items-center gap-2"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <span className="font-semibold">{step}</span>
                {index < PROCESS_STEPS.length - 1 && (
                  <span className="hidden text-[var(--muted)] lg:inline">
                    →
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[var(--primary)] py-16 text-white">
        <Container>
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to get started?
            </h2>
            <p className="mt-4 text-white/90">
              Tell us about your project and we&apos;ll get back to you within 24
              hours.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="inverse" size="lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
