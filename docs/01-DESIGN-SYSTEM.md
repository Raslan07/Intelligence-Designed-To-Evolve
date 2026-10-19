# 01 — Design System

> The complete design language for *Intelligence Designed To Evolve*.
> Aesthetic: Cybernetic Minimalism — enterprise-grade, dark, typographically bold.

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Elevation & Depth](#5-elevation--depth)
6. [Shape Language](#6-shape-language)
7. [Components](#7-components)
8. [Animation System](#8-animation-system)
9. [Accessibility](#9-accessibility)

---

## 1. Design Philosophy

> "High-performance computational intelligence aesthetic — cybernetic minimalism meets enterprise-grade durability."

This design system targets three types of users:
- **Technical leaders** — need to trust the platform at a glance
- **Research scientists** — expect precision and legibility under pressure
- **Systems operators** — operate in dark environments; eye strain matters

The result: **deep absolute blacks, tactile pill capsules, high-frequency instrumentation typography, glassmorphic discipline over dark monochrome surfaces.**

---

## 2. Color System

### 2a. CSS Custom Properties (Implementation)

These are the exact variables used in `styles.css`. Do not deviate.

```css
:root {
  /* Core surfaces */
  --bg:          #000000;   /* Page background / absolute void */
  --text:        #ffffff;   /* Primary text, interactive triggers, core metrics */
  --muted:       #8e8e8e;   /* Labels, metadata, resting iconography */

  /* Navigation & pills */
  --nav-text:    #2e2e2e;   /* Nav link text color */
  --pill-dark:   #28282a;   /* Dark pill background */
  --sign-in-text:#c8c8c8;   /* Sign in pill text */

  /* Trust badge */
  --trust-bg:    #28282a;   /* Avatar ring outer + trust pill background */
  --trust-border:rgba(255,255,255,0.4);  /* Ring and pill border */
  --trust-text:  #c4c2c3;   /* Trust pill label text */

  /* Shadows & glows */
  --nav-shadow: 0 4px 14px rgba(0,0,0,0.16);
  --glow-white: 0 0 0 1px rgba(255,255,255,0.15),
                0 0 22px rgba(255,255,255,0.32),
                0 0 44px rgba(255,255,255,0.12);

  /* Font stacks */
  --font-sans:    "Inter", "Segoe UI", system-ui, sans-serif;
  --font-display: "BubbledotICG-FinePos", "Geist Pixel Circle", monospace;
}
```

### 2b. Conceptual Palette (Intent Reference)

| Role | Value | Use For |
|---|---|---|
| Canvas Base | `#000000` | Page background — absolute void, maximum depth |
| Surface Layer | `#28282a` | Elevated surfaces, pill containers, cards, rings |
| Primary Text | `#ffffff` | Headlines, metrics, interactive labels, CTA text |
| Secondary Text | `#c8c8c8` | Subheadings, descriptive text, sign-in label |
| Muted Text | `#8e8e8e` | Stat labels, metadata, timestamps |
| Outline Subtle | `rgba(255,255,255,0.15)` | Card borders, dividers |
| Outline Active | `rgba(255,255,255,0.4)` | Trust badge rings, active pill borders |
| Active Glow | `rgba(255,255,255,0.25–0.45)` | Focus states, CTA glow, live signals |

### 2c. Semantic Token Table (from Figma theme config)

| Token | Value | Notes |
|---|---|---|
| `surface` | `#131313` | — |
| `surface-container` | `#1f1f1f` | — |
| `surface-container-high` | `#2a2a2a` | — |
| `on-surface` | `#e2e2e2` | — |
| `primary` | `#ffffff` | — |
| `on-primary` | `#2f3131` | — |
| `muted / outline` | `#8e9192` | — |

> NOTE: The semantic token table (from Figma config) and the conceptual palette diverge slightly on surface values (#131313 vs #28282a). **The CSS custom properties above are the implementation source of truth.** Use the conceptual palette only for reasoning about intent when creating new components.

---

## 3. Typography

### 3a. Font Families

| Role | Family | Where Used |
|---|---|---|
| **Display / Hero** | BubbledotICG-FinePos | All hero headlines, stat glyphs (`<` `%` `*` `#`) |
| **Display Fallback** | Geist Pixel Circle (local) | Fallback if OnlineWebFonts CDN is unavailable |
| **UI / Body** | Inter | Nav links, subheads, labels, body copy, CTA |
| **Monospace (pages)** | Space Mono | Inner pages: tech stats, terminal panels, badges |

> IMPORTANT: BubbledotICG-FinePos is loaded from OnlineWebFonts CDN only — never from local files.

### 3b. Type Scale

| Style Name | Family | Size | Weight | Line Height | Tracking |
|---|---|---|---|---|---|
| `display-hero` | BubbledotICG-FinePos | `clamp(28px, 6.2vw, 80px)` | 400 | 1.12 | -0.04em |
| `display-hero-sm` (≤720px) | BubbledotICG-FinePos | fluid | 400 | 1.05 | -0.08em |
| `display-hero-xs` (≤420px) | BubbledotICG-FinePos | fluid | 400 | 1.04 | -0.09em |
| `stat-icon` | BubbledotICG-FinePos | `clamp(22px, 3vw, 33px)` | 400 | — | — |
| `stat-value` | Inter | `clamp(18px, 2.2vw, 26px)` | 500 | — | -0.025em |
| `stat-label` | Inter | `clamp(11px, 1.2vw, 12.5px)` | 400 | — | — |
| `nav-link` | Inter | `clamp(13px, 1.4vw, 15px)` | 500 | — | -0.01em |
| `subhead` | Inter | `clamp(15.5px, 1.55vw+2pt, 18.5px)` | 400 | 1.55 | — |
| `cta` | Inter | `clamp(13.5px, 1.5vw, 14.5px)` | 600 | — | — |
| `trust-pill` | Inter | `clamp(12px, 1.4vw, 13.5px)` | 500 | — | — |

### 3c. Loading Strategy

```html
<!-- 1. Preconnect to speed up Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- 2. Inter from Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<!-- 3. BubbledotICG-FinePos from OnlineWebFonts -->
<link href="https://db.onlinewebfonts.com/c/8cb707a9b8a73f8a7403336b861c3074?family=BubbledotICG-FinePos" rel="stylesheet">

<!-- 4. Geist Pixel Circle — local fallback -->
<style>
@font-face {
  font-family: "Geist Pixel Circle";
  src: url("fonts/GeistPixel-Circle.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
}
</style>
```

---

## 4. Spacing & Layout

### 4a. Spacing Scale (8px baseline)

| Token | Value | Approx px |
|---|---|---|
| `space-xs` | 0.25rem | 4px |
| `space-sm` | 0.5rem | 8px |
| `space-md` | 1rem | 16px |
| `space-lg` | 1.5rem | 24px |
| `space-xl` | 2.5rem | 40px |
| `gutter` | 1.5rem | 24px |
| `gutter-mobile` | 1rem | 16px |
| `margin` | 2rem | 32px |
| `margin-mobile` | 1.25rem | 20px |

### 4b. Page Layout

The `.page` container is a flex column that spans the full viewport height — no scrolling on desktop.

```
.page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  padding: clamp(16px, 2.4vh, 28px) clamp(14px, 3vw, 32px);
}
```

The three regions stacked vertically:

```
+------------------------------------------+
|  HEADER (flex-shrink: 0)                 |  <- Logo + Nav pill + Sign in
+------------------------------------------+
|                                          |
|  HERO (flex: 1, centered)               |  <- Trust row + Headline + Subhead + CTA
|                                          |
+------------------------------------------+
|  STATS FOOTER (flex-shrink: 0)           |  <- 4 metrics in grid
+------------------------------------------+
```

### 4c. Breakpoints

| Breakpoint | Behavior |
|---|---|
| Desktop (> 720px) | Full nav pill visible, 4-col stats grid |
| Tablet/Mobile (≤ 720px) | Burger menu replaces nav, stats become 2×2 grid |
| Small mobile (≤ 420px) | Headline tracking tightens, trust badge shrinks |
| Compact height (≤ 700px) | Hero spacing tightens |

---

## 5. Elevation & Depth

Physical glass layering over true optical black — not diffuse drop shadows.

| Level | Surface | Border | Shadow | Use Case |
|---|---|---|---|---|
| **0 — Base** | `#000000` | none | none | Page background |
| **1 — Pills & Cards** | `#28282a` or `rgba(40,40,42,0.75)` | `1px solid rgba(255,255,255,0.15)` | `--nav-shadow` | Nav pill, sign in, trust badge, logo button |
| **2 — Overlays** | `rgba(40,40,42,0.95)` | `1px solid rgba(255,255,255,0.25)` | `0 8px 32px rgba(0,0,0,0.45)` | Mobile menu sheet |
| **Active Glow** | — | — | `0 0 20px rgba(255,255,255,0.22)` | Focused / triggered surfaces |
| **CTA Glow** | `#ffffff` | — | `--glow-white` | Get Started button |

---

## 6. Shape Language

| Shape | Radius | Used For |
|---|---|---|
| **Full pill** | `9999px` | Nav pill, sign in, trust pill, CTA button, logo circle |
| **Cards** | `1.5rem – 2rem` | Inner page content cards |
| **Inputs** | `9999px` or `1rem` | Form fields |

Pill is the primary shape of this design system. Everything interactive is a pill.

---

## 7. Components

### Nav Pill (White)
- Background: `#ffffff`
- Height: `clamp(44px, 5.2vw, 48px)`
- Border radius: `9999px`
- Shadow: `--nav-shadow`
- Links: Inter 500, `#2e2e2e`, opacity 0.5 → 0.75 (hover) → 1 (active)
- Active indicator: three 3×3px black dots via `::after` pseudo-element

### Logo Button (Circular)
- Size: `clamp(40px, 4.4vw, 46px)`, circular
- Background: `#ffffff`
- Shadow: `--nav-shadow`
- Inner image: `assets/logo.webp` scaled to 72% via CSS grid centering
- Hover: `scale(1.04)`

### Sign In Pill (Dark)
- Background: `#28282a`
- Text: `#c8c8c8`
- Same height as nav pill
- Hover: bg → `#323234`, text → `#ffffff`, `translateY(-1px)`

### Trust Badge Row
- Three overlapping avatar rings:
  - Outer: `--trust-size` (clamp 34px–42px), bg `#28282a`, border `rgba(255,255,255,0.4)`, padding 5px
  - Inner: white circle filling the padded area
  - Icon: Font Awesome brand icon, black `#111`, font-size `trust-size * 0.34`
  - Overlap: `margin-left: calc(var(--trust-size) * -0.42)`, z-index 1/2/4
- Trust pill: same height, bg `#28282a`, same border, text `#c4c2c3`, Inter 500

### Get Started CTA
- Background: `#ffffff`, text: `#000000`
- Padding: `clamp(11px,1.6vh,13px) clamp(22px,3vw,28px)`
- Border radius: `9999px`
- Box shadow: `--glow-white`
- Hover: `translateY(-2px) scale(1.02)` + stronger glow
- Font: Inter 600

### Stats Metric Block
- Icon glyph: `var(--font-display)`, white, `clamp(22px, 3vw, 33px)`
- Value: Inter, white, tabular-nums, `clamp(18px, 2.2vw, 26px)`, tracking `-0.025em`
- Label: `#8e8e8e`, `clamp(11px, 1.2vw, 12.5px)`

### Buttons (Inner Pages)
- **Primary CTA:** `#ffffff` bg, `#000000` text, Inter 600, rounded-full, glow on hover
- **Secondary Capsule:** `#28282a` bg, `1px solid rgba(255,255,255,0.15)`, white text, hover → `#323234`
- **Ghost Capsule:** transparent, `#c8c8c8` text, hover → `rgba(255,255,255,0.08)` fill

---

## 8. Animation System

### Shared Entrance (`.anim` elements)

All animated elements start invisible and enter on load:

```css
/* Start state */
opacity: 0;
transform: translateY(22px) scale(0.98);
filter: blur(6px);

/* Animation */
animation: reveal 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
animation-delay: var(--d);
```

### Keyframe Definitions

| Name | Purpose |
|---|---|
| `slideDown` | Header entrance: from `translateY(-18px)` opacity 0 → settled |
| `reveal` | Standard element entrance: from `translateY(22px) scale(0.98) blur(6px)` |
| `revealPulse` | CTA button: same as reveal but ends with subtle pulse |
| `headlineFade` | Per-line headline: from `translateY(14px)` opacity 0 |
| `overlayIn` | Mobile menu overlay: 0.28s fade in |
| `menuIn` | Mobile menu sheet: 0.38s slide + fade |
| `linkIn` | Mobile menu links: staggered entrance |

### Delay Schedule

| Element | Delay |
|---|---|
| Header | 0s (slideDown) |
| Trust row | 0.05s stagger per avatar |
| Headline line 1 | 0.12s |
| Headline line 2 | 0.30s |
| Subhead | 0.28s |
| CTA button | 0.40s |
| Stat 1 | 0.50s |
| Stat 2 | 0.58s |
| Stat 3 | 0.66s |
| Stat 4 | 0.74s |

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .anim, .headline span {
    animation: none;
    opacity: 1;
    transform: none;
    filter: none;
  }
  .headline span { color: #ffffff; }
}
```

---

## 9. Accessibility

| Rule | Implementation |
|---|---|
| Reduced motion | `prefers-reduced-motion: reduce` kills all animations |
| Color contrast | White on black far exceeds WCAG AAA (21:1) |
| Font size minimum | No text below 11px |
| Keyboard nav | Burger menu toggles `aria-expanded` + `hidden` |
| Focus visibility | Standard browser focus rings preserved |
| Semantic HTML | `<header>`, `<nav>`, `<main>`, `<footer>` structure |
| Alt text | Logo image has empty alt (decorative) |
| `aria-label` | Burger button labeled "Open navigation" |
