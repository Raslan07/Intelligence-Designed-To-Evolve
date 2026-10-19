"use client";
// components/TrustBadges.tsx
// Three overlapping dark-ringed brand logo circles + trust pill.
// Framer Motion staggered reveal on viewport entry.
// Icons: react-icons/fa6 (tree-shaken, no CDN payload)

import { motion, Variants } from "framer-motion";
import { FaMicrosoft, FaAmazon, FaGoogle } from "react-icons/fa6";
import type { IconType } from "react-icons";

interface Badge {
  Icon: IconType;
  label: string;
  zIndex: number;
}

const BADGES: Badge[] = [
  { Icon: FaMicrosoft, label: "Microsoft", zIndex: 1 },
  { Icon: FaAmazon,   label: "Amazon",    zIndex: 2 },
  { Icon: FaGoogle,   label: "Google",    zIndex: 4 },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const avatarItem: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const pillItem: Variants = {
  hidden: { opacity: 0, x: 8 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export function TrustBadges() {
  const trustSize = "clamp(34px, 4.2vw, 42px)";
  const iconSize  = "clamp(13px, 1.6vw, 17px)";

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      className="flex items-center"
    >
      {/* Overlapping avatar rings */}
      <div className="flex items-center">
        {BADGES.map((badge, i) => (
          <motion.div
            key={badge.label}
            variants={avatarItem}
            aria-label={badge.label}
            className="rounded-full flex items-center justify-center"
            style={{
              width: trustSize,
              height: trustSize,
              background: "var(--trust-bg)",
              border: "1.5px solid var(--trust-border)",
              padding: "4px",
              zIndex: badge.zIndex,
              marginLeft: i === 0 ? 0 : `calc(${trustSize} * -0.4)`,
              position: "relative",
            }}
          >
            {/* Inner white ring */}
            <div
              className="w-full h-full rounded-full bg-white flex items-center justify-center"
            >
              <badge.Icon
                aria-hidden="true"
                style={{ fontSize: iconSize, color: "#111" }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust pill */}
      <motion.div
        variants={pillItem}
        className="ml-3 flex items-center px-3 py-1.5 rounded-full"
        style={{
          background: "var(--trust-bg)",
          border: "1px solid var(--trust-border)",
        }}
      >
        <span
          className="whitespace-nowrap"
          style={{
            color: "var(--trust-text)",
            fontSize: "clamp(12px, 1.4vw, 13.5px)",
            fontWeight: 500,
            fontFamily: "var(--font-sans)",
          }}
        >
          Trusted by 2000+ Enterprises
        </span>
      </motion.div>
    </motion.div>
  );
}
