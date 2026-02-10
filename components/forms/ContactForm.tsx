"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  SERVICE_INTEREST_OPTIONS,
  BUDGET_OPTIONS,
} from "@/lib/constants";

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  serviceInterest: (typeof SERVICE_INTEREST_OPTIONS)[number];
  projectDetails: string;
  budget: (typeof BUDGET_OPTIONS)[number];
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: {
      serviceInterest: "Website Creation",
      budget: "Not sure yet",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setSubmitError(null);
    const endpoint =
      typeof process !== "undefined" &&
      process.env.NEXT_PUBLIC_CONTACT_API_URL
        ? process.env.NEXT_PUBLIC_CONTACT_API_URL
        : "/api/contact";
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Something went wrong");
      }
      setSubmitted(true);
      reset();
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Failed to send message. Please try again."
      );
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-[var(--primary)]/30 bg-[var(--primary)]/5 p-8 text-center"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary)] text-white">
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-bold">Message sent</h3>
        <p className="mt-2 text-[var(--muted)]">
          Thanks for getting in touch. We&apos;ll respond within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm lg:p-8"
    >
      {submitError && (
        <div
          className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
          role="alert"
        >
          {submitError}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[var(--foreground)]"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "Name is required" })}
            className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
            placeholder="Your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[var(--foreground)]"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-[var(--foreground)]"
        >
          Phone <span className="text-[var(--muted)]">(optional)</span>
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
          placeholder="+44 ..."
        />
      </div>

      <div>
        <label
          htmlFor="serviceInterest"
          className="block text-sm font-medium text-[var(--foreground)]"
        >
          I&apos;m interested in
        </label>
        <select
          id="serviceInterest"
          {...register("serviceInterest")}
          className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
        >
          {SERVICE_INTEREST_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="projectDetails"
          className="block text-sm font-medium text-[var(--foreground)]"
        >
          Project details <span className="text-red-500">*</span>
        </label>
        <textarea
          id="projectDetails"
          rows={5}
          {...register("projectDetails", {
            required: "Please tell us about your project",
            minLength: {
              value: 20,
              message: "Please provide a bit more detail (at least 20 characters)",
            },
          })}
          className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
          placeholder="Tell us about your website needs, timeline, or any questions..."
        />
        {errors.projectDetails && (
          <p className="mt-1 text-sm text-red-600">
            {errors.projectDetails.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="budget"
          className="block text-sm font-medium text-[var(--foreground)]"
        >
          Budget range <span className="text-[var(--muted)]">(optional)</span>
        </label>
        <select
          id="budget"
          {...register("budget")}
          className="mt-1 w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-[var(--foreground)] focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
        >
          {BUDGET_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="pt-2">
        <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send message"}
        </Button>
      </div>
    </form>
  );
}
