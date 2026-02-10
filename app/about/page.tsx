"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";

const values = [
  {
    title: "Quality over quantity",
    description:
      "We take on a limited number of projects so each one gets the attention it deserves.",
  },
  {
    title: "Transparency",
    description:
      "Clear pricing, clear process, no surprises. You'll always know where things stand.",
  },
  {
    title: "Your success is our success",
    description:
      "We're invested in making sure your website helps your business grow.",
  },
];

const approach = [
  "Modern technology stack built for speed and reliability",
  "Performance-focused development from day one",
  "Close collaboration so the result truly reflects your brand",
  "Ongoing support so your site keeps working for you",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--slate)]/10 to-[var(--secondary)]/10 py-16 lg:py-24">
        <Container>
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About SecondDraft Digital
            </h1>
            <p className="mt-6 text-lg text-[var(--muted)]">
              We believe every business deserves a website that actually works.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <Container>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            <motion.div variants={staggerItem}>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                The &quot;Second Draft&quot; idea
              </h2>
              <p className="mt-4 text-lg text-[var(--muted)]">
                SecondDraft Digital was founded on a simple belief: every
                business deserves a website that actually works. Too many sites
                are slow, outdated, or never quite finished—the &quot;first
                draft&quot; that never got a proper second pass.
              </p>
              <p className="mt-4 text-lg text-[var(--muted)]">
                We specialise in taking existing or outdated websites and
                transforming them into fast, modern, professional experiences. Or
                we build you something new from scratch—either way, you get a
                site that looks great and works even better.
              </p>
            </motion.div>
            <motion.div
              variants={staggerItem}
              className="rounded-2xl bg-[var(--slate)]/5 p-8 lg:p-12"
            >
              <blockquote className="text-xl font-medium italic text-[var(--slate)]">
                &quot;Your website should work as hard as you do. We make sure it
                does.&quot;
              </blockquote>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="bg-[var(--slate)]/5 py-16 lg:py-24">
        <Container>
          <motion.h2
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Our Approach
          </motion.h2>
          <motion.ul
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mx-auto mt-12 max-w-2xl space-y-4"
          >
            {approach.map((item) => (
              <motion.li
                key={item}
                variants={staggerItem}
                className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--primary)]" />
                <span className="text-[var(--foreground)]">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <Container>
          <motion.h2
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
          >
            What we care about
          </motion.h2>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="mt-12 grid gap-8 md:grid-cols-3"
          >
            {values.map((value) => (
              <motion.div key={value.title} variants={staggerItem}>
                <Card className="h-full">
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="mt-3 text-[var(--muted)]">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] py-16 text-white">
        <Container>
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.animate}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight">
              Let&apos;s work together
            </h2>
            <p className="mt-4 text-white/90">
              Tell us about your project. We typically respond within 24 hours.
            </p>
            <div className="mt-8">
              <Button
                href="/contact"
                variant="accent"
                size="lg"
                className="bg-white text-[var(--primary)] hover:bg-white/90"
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
