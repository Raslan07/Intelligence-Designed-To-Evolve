"use client";
// components/TelemetryFooter.tsx
// 4-metric stats bar with GSAP ScrollTrigger count-up animation.
// Glyph characters rendered in BubbledotICG-FinePos (dot-matrix).
// Count-up fires once when the strip enters the viewport.

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface Metric {
  glyph: string;
  label: string;
  value: number;
  suffix: string;
  decimals: number;
}

const METRICS: Metric[] = [
  { glyph: "<", label: "Inference Time",     value: 120,   suffix: "ms", decimals: 0 },
  { glyph: "%", label: "Platform Uptime",    value: 99.99, suffix: "%",  decimals: 2 },
  { glyph: "*", label: "Autonomous Runtime", value: 24,    suffix: "/7", decimals: 0 },
  { glyph: "#", label: "Context Windows",    value: 2.4,   suffix: "M",  decimals: 1 },
];

export function TelemetryFooter() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const valueEls = gsap.utils.toArray<HTMLElement>(".telemetry-value");
      valueEls.forEach((el, i) => {
        const metric = METRICS[i];
        const obj = { val: 0 };

        gsap.to(obj, {
          val: metric.value,
          duration: 1.4 + i * 0.08,
          ease: "power2.out",
          delay: i * 0.09,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = obj.val.toFixed(metric.decimals);
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 w-full"
      role="list"
      aria-label="Platform metrics"
    >
      {METRICS.map((m, i) => (
        <div
          key={m.label}
          role="listitem"
          className="flex flex-col items-center sm:items-start gap-1 sm:px-[clamp(20px,2.8vw,40px)] sm:first:pl-0 sm:last:pr-0"
          style={{
            borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.10)" : "none",
            paddingTop: "clamp(12px,1.4vh,18px)",
            paddingBottom: "clamp(12px,1.4vh,18px)",
          }}
        >
          {/* Dot-matrix telemetry glyph */}
          <span
            aria-hidden="true"
            className="text-white leading-none"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(22px, 3vw, 33px)",
            }}
          >
            {m.glyph}
          </span>

          {/* Count-up value */}
          <span
            className="flex items-baseline gap-0 text-white tabular-nums"
            style={{
              fontSize: "clamp(18px, 2.2vw, 26px)",
              fontWeight: 500,
              letterSpacing: "-0.025em",
              fontFamily: "var(--font-sans)",
            }}
          >
            <span
              className="telemetry-value"
              aria-label={`${m.value}${m.suffix}`}
            >
              0
            </span>
            <span>{m.suffix}</span>
          </span>

          {/* Label */}
          <span
            style={{
              color: "var(--muted)",
              fontSize: "clamp(11px, 1.2vw, 12.5px)",
              fontFamily: "var(--font-sans)",
            }}
          >
            {m.label}
          </span>
        </div>
      ))}
    </div>
  );
}
