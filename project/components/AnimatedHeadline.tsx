"use client";
// components/AnimatedHeadline.tsx
// Hero headline in BubbledotICG-FinePos retro dot-matrix font.
// Two lines animate in sequentially via Framer Motion.
// Fluid type scale: clamp(28px, 6.2vw, 80px)

import { motion, Variants } from "framer-motion";

const LINE_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function AnimatedHeadline() {
  const lines = ["Intelligence", "Designed To Evolve"];

  return (
    <h1
      aria-label="Intelligence Designed To Evolve"
      className="text-white text-center overflow-hidden"
      style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(28px, 6.2vw, 80px)",
        fontWeight: 400,
        lineHeight: 1.12,
        letterSpacing: "-0.04em",
        whiteSpace: "nowrap",
      }}
    >
      {lines.map((line, i) => (
        <motion.span
          key={line}
          className="block"
          variants={LINE_VARIANTS}
          initial="hidden"
          animate="show"
          custom={0.12 + i * 0.18}
          aria-hidden="true"
        >
          {line}
        </motion.span>
      ))}
    </h1>
  );
}
