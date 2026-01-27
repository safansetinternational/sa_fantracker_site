"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  label,
  title,
  description,
  center = true,
  light = false,
}: {
  label?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-16`}
    >
      {label && (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/10 text-accent mb-4">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
