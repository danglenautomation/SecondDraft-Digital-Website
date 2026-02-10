"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--slate)] via-[var(--slate-light)] to-[var(--slate)] py-20 text-white lg:py-28">
      {/* Background decoration - single-tone */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-[var(--primary)]/30 blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

      <Container className="relative">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-3xl"
        >
          <motion.h1
            variants={staggerItem}
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            Your Website&apos;s{" "}
            <span className="text-[var(--primary)] opacity-90">Second Draft</span>
            <br />
            Deserves Better
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="mt-6 text-lg text-white/90 sm:text-xl"
          >
            We rebuild and create websites that work as hard as you do. Modern
            design, lightning-fast hosting, and a partner who gets it.
          </motion.p>
          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="/contact" variant="primary" size="lg">
              Get Started
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10 hover:text-white">
              View Our Services
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
