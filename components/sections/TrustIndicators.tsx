"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { staggerContainer, staggerItem } from "@/lib/animations";

const stats = [
  { value: "99.99", suffix: "%", label: "Uptime" },
  { value: "Global", suffix: "", label: "CDN" },
  { value: "24/7", suffix: "", label: "Security" },
];

export function TrustIndicators() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--card)] py-12">
      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center"
            >
              <div className="text-3xl font-bold text-[var(--primary)] sm:text-4xl">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="mt-1 text-sm font-medium text-[var(--muted)]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
