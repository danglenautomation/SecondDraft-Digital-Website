import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <p className="text-sm font-medium text-[var(--primary)]">404</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            Page not found
          </h1>
          <p className="mt-4 text-[var(--muted)]">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-8">
            <Button href="/" variant="primary" size="lg">
              Back to home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
