// app/page.tsx
// Landing page — single-viewport, full-bleed video background.
// Layout: Header → Hero (Trust + Headline + Subhead + CTA) → Stats footer
// No scroll on desktop (viewport-lock class).

import { BackgroundVideo } from "@/components/BackgroundVideo";
import { Navbar } from "@/components/Navbar";
import { TrustBadges } from "@/components/TrustBadges";
import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { TelemetryFooter } from "@/components/TelemetryFooter";
import { CTAButton } from "@/components/CTAButton";

export default function HomePage() {
  return (
    <main
      className="relative flex flex-col viewport-lock bg-black"
      style={{ padding: "clamp(16px,2.4vh,28px) clamp(14px,3vw,32px)" }}
    >
      {/* Layer 0: full-bleed looping video */}
      <BackgroundVideo />

      {/* Layer 1: page content */}
      <div className="relative z-10 flex flex-col h-full">

        {/* ─── REGION 1: Header ─── */}
        <div className="flex-shrink-0">
          <Navbar activePage="Home" />
        </div>

        {/* ─── REGION 2: Hero ─── */}
        <div className="flex flex-1 flex-col items-center justify-center gap-[clamp(18px,2.5vh,26px)] text-center px-4">

          {/* Trust badge row */}
          <div className="flex justify-center">
            <TrustBadges />
          </div>

          {/* Headline */}
          <AnimatedHeadline />

          {/* Subhead */}
          <p
            className="max-w-[520px] text-center"
            style={{
              color: "var(--text-secondary)",
              fontSize: "clamp(15.5px, 1.55vw + 2pt, 18.5px)",
              lineHeight: 1.55,
              fontFamily: "var(--font-sans)",
            }}
          >
            Build applications that reason, adapt and collaborate using a modular
            <br className="hidden sm:block" />
            AI platform designed for production.
          </p>

          {/* CTA button — Client Component (has mouse event handlers) */}
          <CTAButton href="/sign-up" label="Get Started" />
        </div>

        {/* ─── REGION 3: Stats footer ─── */}
        <div
          className="flex-shrink-0 w-full"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <TelemetryFooter />
        </div>

      </div>
    </main>
  );
}
