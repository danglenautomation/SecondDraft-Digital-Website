import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--slate)] text-white">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight lg:text-2xl"
            >
              Second<span className="text-[var(--primary)]">Draft</span> Digital
            </Link>
            <p className="mt-3 max-w-sm text-sm text-[var(--muted-foreground)]">
              {SITE_CONFIG.tagline} We rebuild and create websites that work as
              hard as you do.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2">
              {SITE_CONFIG.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/90 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/90 transition-colors hover:text-white"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/90">
              <li>
<a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="transition-colors duration-200 hover:text-white"
                  >
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-sm text-[var(--muted-foreground)]">
          &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
