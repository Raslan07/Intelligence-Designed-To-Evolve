# 02 — Assets & Resources

> Every external URL, local file, font, icon, and CSS token this project depends on.
> This is the single source of truth for all resources.

---

## Table of Contents

1. [Background Video](#1-background-video)
2. [Brand Logo](#2-brand-logo)
3. [Fonts](#3-fonts)
4. [Icons](#4-icons)
5. [CSS Design Tokens](#5-css-design-tokens)
6. [File Structure](#6-file-structure)

---

## 1. Background Video

### Source
- **URL:** `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4`
- **Host:** AWS CloudFront CDN
- **Format:** `video/mp4`
- **Local copy:** `assets/hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4`

### HTML Implementation
```html
<div class="bg">
  <video class="bg-video" autoplay muted loop playsinline>
    <source
      src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4"
      type="video/mp4"
    />
  </video>
</div>
```

### CSS Implementation
```css
.bg {
  position: absolute;
  inset: 0;
  background: #000;
  overflow: hidden;
}

.bg-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  z-index: 0;
}
```

---

## 2. Brand Logo

### Asset
- **Path:** `assets/logo.webp`
- **Format:** WebP (exported from the SVG below)
- **Dimensions:** Any — CSS scales it to 72% of the container

### Logo SVG (source)
If you need to regenerate the WebP, use this SVG code:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="46" height="46" fill="none">
  <circle cx="50" cy="50" r="48" fill="#ffffff"/>
  <circle cx="50" cy="50" r="38" fill="#111113"/>
  <ellipse cx="40" cy="42" rx="4" ry="5.5" fill="#ffffff"/>
  <ellipse cx="60" cy="42" rx="4" ry="5.5" fill="#ffffff"/>
  <path d="M37 60 C 42 70, 58 70, 63 60" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" fill="none"/>
</svg>
```

### Logo Container CSS
```css
.logo-btn {
  width: clamp(40px, 4.4vw, 46px);
  height: clamp(40px, 4.4vw, 46px);
  border-radius: 50%;
  background: #fff;
  box-shadow: var(--nav-shadow);
  display: grid;
  place-items: center;
}

.logo-btn img {
  width: 72%;
  height: 72%;
  object-fit: contain;
}

.logo-btn:hover {
  transform: scale(1.04);
}
```

---

## 3. Fonts

### Font 1: Inter (UI)
- **Provider:** Google Fonts CDN
- **Weights:** 400 (Regular), 500 (Medium), 600 (Semi-bold)
- **Use:** Navigation, body copy, subhead, labels, CTA, stats values

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

CSS stack: `"Inter", "Segoe UI", system-ui, sans-serif`

---

### Font 2: BubbledotICG-FinePos (Primary Display)
- **Provider:** OnlineWebFonts CDN
- **Use:** Hero headline, stat telemetry glyphs (`<` `%` `*` `#`), section badges on inner pages
- **CRITICAL:** Load from CDN only — never from local woff/ttf files

```html
<link href="https://db.onlinewebfonts.com/c/8cb707a9b8a73f8a7403336b861c3074?family=BubbledotICG-FinePos" rel="stylesheet" type="text/css"/>
```

CSS stack: `"BubbledotICG-FinePos", "Geist Pixel Circle", monospace`

---

### Font 3: Geist Pixel Circle (Fallback)
- **Provider:** Local file
- **Path:** `fonts/GeistPixel-Circle.woff2`
- **Use:** Fallback if BubbledotICG-FinePos CDN is unavailable
- **Weight:** 400, `font-display: swap`

```css
@font-face {
  font-family: "Geist Pixel Circle";
  src: url("fonts/GeistPixel-Circle.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
}
```

---

### Font 4: Space Mono (Inner Pages)
- **Provider:** Google Fonts CDN (loaded on inner pages)
- **Use:** Tech stat readouts, terminal panels, monospace badges on Product/Case Studies/Contact pages
- **Note:** This font is NOT used on the home page landing — BubbledotICG-FinePos handles the hero

---

## 4. Icons

### Font Awesome 6.5.2 (Brand Glyphs)

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
  integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
```

### Icons Used

| Class | Icon | Location |
|---|---|---|
| `fa-brands fa-microsoft` | Microsoft logo | Trust badge — avatar 1 |
| `fa-brands fa-amazon` | Amazon logo | Trust badge — avatar 2 |
| `fa-brands fa-google` | Google logo | Trust badge — avatar 3 |
| `fa-brands fa-github` | GitHub logo | Sign Up page auth button |

### Telemetry Glyphs (BubbledotICG-FinePos)

These are plain text characters rendered in the display font — not Font Awesome:

| Character | Meaning | Stat |
|---|---|---|
| `<` | Inference | 120ms Inference Time |
| `%` | Uptime | 99.99% Platform Uptime |
| `*` | Runtime | 24/7 Autonomous Runtime |
| `#` | Context | 2.4M Context Windows |

---

## 5. CSS Design Tokens

Complete token set for `styles.css` `:root` block:

```css
:root {
  /* === Colors === */
  --bg:              #000000;
  --text:            #ffffff;
  --muted:           #8e8e8e;
  --nav-text:        #2e2e2e;
  --pill-dark:       #28282a;
  --pill-dark-hover: #323234;
  --sign-in-text:    #c8c8c8;
  --trust-bg:        #28282a;
  --trust-border:    rgba(255, 255, 255, 0.4);
  --trust-text:      #c4c2c3;
  --border-subtle:   rgba(255, 255, 255, 0.1);

  /* === Shadows & Glows === */
  --nav-shadow: 0 4px 14px rgba(0, 0, 0, 0.16);
  --glow-white:
    0 0 0 1px rgba(255, 255, 255, 0.15),
    0 0 22px rgba(255, 255, 255, 0.32),
    0 0 44px rgba(255, 255, 255, 0.12);

  /* === Typography Stacks === */
  --font-sans:    "Inter", "Segoe UI", system-ui, sans-serif;
  --font-display: "BubbledotICG-FinePos", "Geist Pixel Circle", monospace;
}
```

---

## 6. File Structure

```
project root/
|
+-- index.html               <- Landing page markup
+-- styles.css               <- All styles + design tokens
+-- main.js                  <- Count-up observer + mobile menu
|
+-- assets/
|   +-- logo.webp            <- Brand mark logo
|   +-- hf_...mp4            <- Local copy of background video (optional)
|
+-- fonts/
|   +-- GeistPixel-Circle.woff2   <- Fallback retro font (local)
|
+-- docs/                    <- This documentation folder
+-- agents/                  <- AI agent definitions
+-- workflows/               <- Slash-command workflows
+-- preview/                 <- Design screenshots
|
+-- DESIGN.md                <- Design system source
+-- MANIFEST.md              <- Asset & resource manifest
+-- Intelligence Designed To Evolve.fig   <- Figma source
```
