# Project Manifest — "Intelligence Designed To Evolve"
### React / Next.js build target, animation-ready

Restructured from the raw asset list into an actual buildable architecture: file layout, font-loading strategy, token wiring, component boundaries, and where GSAP vs. Framer Motion earns its place.

---

## 0. Stack decision

- **Framework**: Next.js 15 (App Router). If this is a pure SPA with no SSR/SEO need, Vite + React works too — everything below still applies, just swap `next/font` for a manual `@font-face` block and drop the `app/` routing conventions.
- **Animation**: **Framer Motion** for component-level entrance/hover/layout animation (declarative, plays well with React unmount/remount, no manual cleanup). **GSAP + ScrollTrigger** for the footer telemetry counters and any scroll-scrubbed sequences — Framer Motion's `useInView`/`animate()` can technically do count-ups, but GSAP's `ScrollTrigger` + number tweening is still the more precise tool for scrubbed, multi-stage telemetry reveals. Don't run both libraries animating the *same* element — pick one per element to avoid fighting transforms.
- **Styling**: Tailwind CSS with the token file below extended into `tailwind.config.ts`, rather than raw `styles.css` custom properties. CSS variables are kept for the handful of tokens (glows, video overlay) that don't map cleanly to Tailwind utilities.

```bash
npm install framer-motion gsap
npm install -D @types/node
```

---

## 1. File structure

```
project/
├── app/
│   ├── layout.tsx              # Root layout — font loading, <html>, global providers
│   ├── page.tsx                 # Landing page composition
│   └── globals.css              # Tailwind directives + CSS var tokens
├── components/
│   ├── BackgroundVideo.tsx      # Full-bleed CloudFront video loop
│   ├── Logo.tsx                 # Inline SVG brand mark
│   ├── Navbar.tsx                # Nav + sign-in pill
│   ├── AnimatedHeadline.tsx     # "Intelligence Designed To Evolve" — Framer Motion reveal
│   ├── TrustBadges.tsx           # Microsoft / AWS / Google partner row
│   └── TelemetryFooter.tsx      # <  % * # count-up strip — GSAP ScrollTrigger
├── lib/
│   └── gsap.ts                   # GSAP + ScrollTrigger registration (client-only)
├── public/
│   ├── logo.svg
│   └── fonts/
│       └── GeistPixel-Circle.woff2   # self-hosted fallback for BubbledotICG
├── styles/
│   └── tokens.css                # design tokens as CSS custom properties
├── tailwind.config.ts
├── next.config.js
└── package.json
```

**Note on the video asset**: don't hotlink the raw CloudFront URL from a third party's user bucket (`user_38xzZboKViGWJOttwIXH07lWA1P/...`) into production — it's an unversioned asset URL on someone else's CDN account, which can 404 or get rotated without warning. Download it once, re-host it under your own `public/` or your own CDN/object storage, and reference that URL instead.

---

## 2. Fonts

### Inter — use `next/font/google` (self-hosts + eliminates the CDN round trip and layout shift)

```tsx
// app/layout.tsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
```

### BubbledotICG-FinePos — self-host instead of the OnlineWebFonts CDN

The `onlinewebfonts.com` embed is a runtime dependency on a third-party CDN with no SRI hash and uneven uptime — not something to ship a hero headline on. Download the actual `.woff2`, drop it in `public/fonts/`, and declare it locally:

```css
/* styles/tokens.css */
@font-face {
  font-family: "BubbledotICG-FinePos";
  src: url("/fonts/BubbledotICG-FinePos.woff2") format("woff2"),
       url("/fonts/GeistPixel-Circle.woff2") format("woff2"); /* fallback */
  font-display: swap;
}

:root {
  --font-display: "BubbledotICG-FinePos", "Geist Pixel Circle", monospace;
}
```

Reference `var(--font-display)` in Tailwind via `fontFamily.display` in the config, or apply directly with `style={{ fontFamily: "var(--font-display)" }}` on the headline/badge/telemetry components.

---

## 3. Design tokens

Kept as CSS custom properties (glows and gradients don't translate cleanly to Tailwind's utility scale) and also mapped into Tailwind for the flat color/spacing values.

```css
/* styles/tokens.css */
:root {
  --bg: #000000;
  --surface: #111113;
  --surface-container: #1c1c1f;
  --text: #ffffff;
  --muted: #8e8e8e;
  --text-secondary: #c8c8c8;
  --nav-text: #2e2e2e;
  --pill-dark: #28282a;
  --pill-dark-hover: #323234;
  --sign-in-text: #c8c8c8;
  --border-subtle: rgba(255, 255, 255, 0.1);
  --trust-bg: #28282a;
  --trust-border: rgba(255, 255, 255, 0.4);
  --trust-text: #c4c2c3;

  --nav-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);
  --glow-white: 0 0 0 1px rgba(255, 255, 255, 0.15),
                0 0 22px rgba(255, 255, 255, 0.32),
                0 0 44px rgba(255, 255, 255, 0.12);

  --font-sans: var(--font-sans), "Segoe UI", system-ui, sans-serif;
  --font-display: "BubbledotICG-FinePos", "Geist Pixel Circle", monospace;
}
```

```ts
// tailwind.config.ts (excerpt)
export default {
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-container": "var(--surface-container)",
        text: "var(--text)",
        muted: "var(--muted)",
        "text-secondary": "var(--text-secondary)",
        "pill-dark": "var(--pill-dark)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        display: "var(--font-display)",
      },
      boxShadow: {
        nav: "var(--nav-shadow)",
        glow: "var(--glow-white)",
      },
    },
  },
};
```

---

## 4. Icons

Swap the Font Awesome CDN `<link>` for `react-icons` (tree-shaken, no unused-glyph payload, no external request):

```bash
npm install react-icons
```

```tsx
import { FaMicrosoft, FaAmazon, FaGoogle, FaGithub } from "react-icons/fa6";
```

If you'd rather keep Font Awesome's exact glyph set/license, import only the specific icon SVGs via `@fortawesome/react-fontawesome` + `@fortawesome/free-brands-svg-icons` instead of the full CDN bundle — same effect, no runtime dependency on `cdnjs`.

---

## 5. Components

### `BackgroundVideo.tsx`

```tsx
export function BackgroundVideo() {
  return (
    <video
      className="absolute inset-0 z-0 h-full w-full object-cover pointer-events-none"
      autoPlay
      muted
      loop
      playsInline
      src="/videos/hero-loop.mp4" // re-hosted, see note in §1
    />
  );
}
```

### `Logo.tsx`

```tsx
export function Logo({ size = 46 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={size} height={size} fill="none">
      <circle cx="50" cy="50" r="48" fill="#ffffff" />
      <circle cx="50" cy="50" r="38" fill="#111113" />
      <ellipse cx="40" cy="42" rx="4" ry="5.5" fill="#ffffff" />
      <ellipse cx="60" cy="42" rx="4" ry="5.5" fill="#ffffff" />
      <path d="M37 60 C 42 70, 58 70, 63 60" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}
```

### `AnimatedHeadline.tsx` — Framer Motion entrance

```tsx
"use client";
import { motion } from "framer-motion";

export function AnimatedHeadline() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ fontFamily: "var(--font-display)" }}
      className="text-white"
    >
      Intelligence Designed To Evolve
    </motion.h1>
  );
}
```

### `lib/gsap.ts` — client-only GSAP registration

```ts
"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
```

### `TelemetryFooter.tsx` — GSAP ScrollTrigger count-up

Replaces the old `main.js` "count-up observer." GSAP's `ScrollTrigger` fires once the strip enters the viewport and tweens each number from 0 to its target, which is what the original observer-based approach was approximating manually.

```tsx
"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const METRICS = [
  { glyph: "<", label: "Inference Time", value: 120, suffix: "ms" },
  { glyph: "%", label: "Platform Uptime", value: 99.99, suffix: "%" },
  { glyph: "*", label: "Autonomous Runtime", value: 24, suffix: "/7" },
  { glyph: "#", label: "Context Windows", value: 2.4, suffix: "M" },
];

export function TelemetryFooter() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray<HTMLElement>(".telemetry-value");
      counters.forEach((el) => {
        const target = parseFloat(el.dataset.value || "0");
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent = obj.val.toFixed(target % 1 !== 0 ? 2 : 0);
          },
        });
      });
    }, containerRef);

    return () => ctx.revert(); // cleanup on unmount — required, GSAP doesn't auto-clean like Framer Motion
  }, []);

  return (
    <div ref={containerRef} className="flex gap-8 font-display text-white" style={{ fontFamily: "var(--font-display)" }}>
      {METRICS.map((m) => (
        <div key={m.label} className="flex flex-col">
          <span className="text-muted text-xs uppercase">{m.glyph} {m.label}</span>
          <span className="text-2xl">
            <span className="telemetry-value" data-value={m.value}>0</span>
            {m.suffix}
          </span>
        </div>
      ))}
    </div>
  );
}
```

### `TrustBadges.tsx` — Framer Motion staggered reveal

```tsx
"use client";
import { motion } from "framer-motion";
import { FaMicrosoft, FaAmazon, FaGoogle, FaGithub } from "react-icons/fa6";

const badges = [FaMicrosoft, FaAmazon, FaGoogle, FaGithub];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export function TrustBadges() {
  return (
    <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex gap-4">
      {badges.map((Icon, i) => (
        <motion.div
          key={i}
          variants={item}
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{ background: "var(--trust-bg)", border: "1px solid var(--trust-border)" }}
        >
          <Icon color="var(--trust-text)" />
        </motion.div>
      ))}
    </motion.div>
  );
}
```

---

## 6. Composition

```tsx
// app/page.tsx
import { BackgroundVideo } from "@/components/BackgroundVideo";
import { Navbar } from "@/components/Navbar";
import { AnimatedHeadline } from "@/components/AnimatedHeadline";
import { TrustBadges } from "@/components/TrustBadges";
import { TelemetryFooter } from "@/components/TelemetryFooter";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-bg text-text overflow-hidden">
      <BackgroundVideo />
      <div className="relative z-10">
        <Navbar />
        <AnimatedHeadline />
        <TrustBadges />
        <TelemetryFooter />
      </div>
    </main>
  );
}
```

---

## 7. package.json — dependency delta

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^11.0.0",
    "gsap": "^3.12.0",
    "react-icons": "^5.0.0"
  }
}
```

---

## 8. What changed from the raw manifest, and why

| Original | Restructured | Reason |
|---|---|---|
| Raw CloudFront URL hotlinked in `<video>` | Re-hosted under your own storage, referenced via `/videos/hero-loop.mp4` | Third-party user-bucket URL isn't a stable production dependency |
| OnlineWebFonts CDN `<link>` | Self-hosted `.woff2` via `@font-face` | No SRI, third-party uptime risk, extra request on critical render path |
| Font Awesome CDN | `react-icons` (or scoped `@fortawesome` imports) | Full icon-font payload for 4 glyphs is wasteful; tree-shaken imports fix that |
| `main.js` count-up observer | GSAP `ScrollTrigger` tween | Same behavior, but scrub-accurate and trivially extensible to multi-stage sequences |
| Manual `<link>` Google Fonts tags | `next/font/google` | Self-hosted at build time, zero layout shift, no external request |