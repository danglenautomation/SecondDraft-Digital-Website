"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-20">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight lg:text-2xl"
          >
            Second<span className="text-[var(--primary)]">Draft</span> Digital
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {SITE_CONFIG.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[var(--primary)] ${
                  pathname === link.href
                    ? "text-[var(--primary)]"
                    : "text-[var(--foreground)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex flex-col gap-1.5 p-2 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-[var(--foreground)] transition-all ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[var(--foreground)] transition-all ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[var(--foreground)] transition-all ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-[var(--border)] bg-[var(--background)] md:hidden"
          >
            <Container className="flex flex-col gap-4 py-4">
              {SITE_CONFIG.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`py-2 text-base font-medium ${
                    pathname === link.href
                      ? "text-[var(--primary)]"
                      : "text-[var(--foreground)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
              >
                Get Started
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
