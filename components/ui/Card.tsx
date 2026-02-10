"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  const Component = motion.div;

  return (
    <Component
      className={`rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition-all duration-300 ${
        hover
          ? "hover:border-[var(--primary)]/30 hover:shadow-lg hover:shadow-[var(--primary)]/10 hover:-translate-y-1"
          : ""
      } ${className}`}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </Component>
  );
}
