# 03 — Implementation Guide

> How to build the *Intelligence Designed To Evolve* landing page from scratch.
> Stack: plain HTML + CSS + vanilla JS. No framework. No build step.

---

## Table of Contents

1. [HTML Structure](#1-html-structure)
2. [CSS Architecture](#2-css-architecture)
3. [JavaScript Logic](#3-javascript-logic)
4. [Mobile Menu](#4-mobile-menu)
5. [Count-Up Animation](#5-count-up-animation)
6. [Build Checklist](#6-build-checklist)

---

## 1. HTML Structure

### Full document skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Intelligence Designed To Evolve</title>

  <!-- SEO -->
  <meta name="description" content="Build applications that reason, adapt and collaborate using a modular AI platform designed for production." />

  <!-- Fonts: Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

  <!-- Fonts: BubbledotICG-FinePos -->
  <link href="https://db.onlinewebfonts.com/c/8cb707a9b8a73f8a7403336b861c3074?family=BubbledotICG-FinePos" rel="stylesheet" type="text/css"/>

  <!-- Icons: Font Awesome 6.5.2 -->
  <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <!-- Background video layer (z-index 0) -->
  <div class="bg">
    <video class="bg-video" autoplay muted loop playsinline>
      <source
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4"
        type="video/mp4"
      />
    </video>
  </div>

  <!-- Page content (z-index 1) -->
  <div class="page">

    <!-- REGION 1: Header -->
    <header class="header anim" style="--d:0s">
      <!-- Logo -->
      <button class="logo-btn" aria-label="Home">
        <img src="assets/logo.webp" alt="" width="52" height="52" />
      </button>

      <!-- Desktop nav pill -->
      <nav class="nav-pill" aria-label="Main navigation">
        <a href="#" class="nav-link active">Home</a>
        <a href="#" class="nav-link">Product</a>
        <a href="#" class="nav-link">Case Studies</a>
        <a href="#" class="nav-link">Contact</a>
      </nav>

      <!-- Desktop sign in -->
      <a href="#" class="sign-in-pill">Sign in</a>

      <!-- Mobile burger button -->
      <button class="burger" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-menu">
        <span></span><span></span><span></span>
      </button>
    </header>

    <!-- REGION 2: Hero -->
    <main class="hero">

      <!-- Trust badge row -->
      <div class="trust-row anim" style="--d:0.05s">
        <div class="avatar a1"><i class="fa-brands fa-microsoft"></i></div>
        <div class="avatar a2"><i class="fa-brands fa-amazon"></i></div>
        <div class="avatar a3"><i class="fa-brands fa-google"></i></div>
        <div class="trust-pill">Trusted by 2000+ Enterprises</div>
      </div>

      <!-- Headline -->
      <h1 class="headline">
        <span class="anim" style="--d:0.12s">Intelligence</span>
        <span class="anim" style="--d:0.30s">Designed To Evolve</span>
      </h1>

      <!-- Subhead -->
      <p class="subhead anim" style="--d:0.28s">
        Build applications that reason, adapt and collaborate using a modular<br>
        AI platform designed for production.
      </p>

      <!-- CTA -->
      <a href="#" class="cta-btn anim" style="--d:0.40s">Get Started</a>

    </main>

    <!-- REGION 3: Stats footer -->
    <footer class="stats-grid">
      <div class="stat anim" style="--d:0.50s" data-target="120" data-suffix="ms" data-decimals="0">
        <span class="stat-icon">&lt;</span>
        <span class="stat-value">0ms</span>
        <span class="stat-label">Inference Time</span>
      </div>
      <div class="stat anim" style="--d:0.58s" data-target="99.99" data-suffix="%" data-decimals="2">
        <span class="stat-icon">%</span>
        <span class="stat-value">0%</span>
        <span class="stat-label">Platform Uptime</span>
      </div>
      <div class="stat anim" style="--d:0.66s" data-target="24" data-suffix="/7" data-decimals="0">
        <span class="stat-icon">*</span>
        <span class="stat-value">0/7</span>
        <span class="stat-label">Autonomous Runtime</span>
      </div>
      <div class="stat anim" style="--d:0.74s" data-target="2.4" data-suffix="M" data-decimals="1">
        <span class="stat-icon">#</span>
        <span class="stat-value">0M</span>
        <span class="stat-label">Context Windows</span>
      </div>
    </footer>

  </div><!-- /.page -->

  <!-- Mobile menu overlay -->
  <div class="overlay" id="overlay" hidden></div>

  <!-- Mobile menu sheet -->
  <nav class="mobile-menu" id="mobile-menu" hidden aria-label="Mobile navigation">
    <a href="#" class="mob-link active">Home</a>
    <a href="#" class="mob-link">Product</a>
    <a href="#" class="mob-link">Case Studies</a>
    <a href="#" class="mob-link">Contact</a>
    <a href="#" class="mob-sign-in">Sign in</a>
  </nav>

  <script src="main.js"></script>
</body>
</html>
```

---

## 2. CSS Architecture

### File structure

```css
/* styles.css — recommended section order */

/* 1. @font-face (Geist Pixel Circle local fallback) */
/* 2. :root (all CSS custom properties) */
/* 3. Reset & base */
/* 4. Layout: .bg, .page */
/* 5. Header & nav */
/* 6. Hero section */
/* 7. Trust row */
/* 8. Headline */
/* 9. Stats footer */
/* 10. Animations & keyframes */
/* 11. Mobile menu */
/* 12. Responsive breakpoints */
/* 13. prefers-reduced-motion */
```

### Key CSS patterns

#### Single-viewport lock
```css
body {
  background: #000;
  overflow: hidden;
  height: 100vh;
  height: 100dvh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  padding: clamp(16px, 2.4vh, 28px) clamp(14px, 3vw, 32px);
}
```

#### Headline with display font
```css
.headline {
  font-family: var(--font-display);
  font-size: clamp(28px, 6.2vw, 80px);
  font-weight: 400;
  line-height: 1.12;
  letter-spacing: -0.04em;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
}

.headline span {
  display: block;
  opacity: 0;
  transform: translateY(14px);
  animation: headlineFade 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: var(--d);
}
```

#### Stats icon uses display font
```css
.stat-icon {
  font-family: var(--font-display);
  font-size: clamp(22px, 3vw, 33px);
  color: #fff;
  line-height: 1;
}

.stat-value {
  font-family: var(--font-sans);
  font-size: clamp(18px, 2.2vw, 26px);
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.025em;
  font-variant-numeric: tabular-nums;
}
```

---

## 3. JavaScript Logic

### main.js — full responsibilities
1. **Count-up animation** for stat values using IntersectionObserver
2. **Mobile menu** toggle (burger button open/close)
3. **Mobile menu close** on: overlay click, Escape key, link click, resize > 720px

### Count-up: easing function
```js
// easeOutCubic — feels physical, decelerates naturally
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}
```

### Count-up: per-stat configuration

| Stat | Target | Suffix | Decimals | Duration | Start Delay |
|---|---|---|---|---|---|
| Inference | 120 | `ms` | 0 | 1500ms | 480ms |
| Uptime | 99.99 | `%` | 2 | 1580ms | 570ms |
| Runtime | 24 | `/7` | 0 | 1660ms | 660ms |
| Context | 2.4 | `M` | 1 | 1740ms | 750ms |

### Count-up: IntersectionObserver
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      runCountUp(entry.target);
      observer.unobserve(entry.target); // fire once only
    }
  });
}, { threshold: 0.25 });

document.querySelectorAll('.stat').forEach(el => observer.observe(el));
```

---

## 4. Mobile Menu

### Behavior rules
- Desktop (> 720px): hide burger, show nav pill + sign in
- Mobile (≤ 720px): hide nav pill + sign in, show burger

### Burger open state
- Button background changes: `#28282a` → `#ffffff`
- 3 bars animate:
  - Top bar: `translateY(+6.5px) rotate(45deg)`
  - Middle bar: `opacity 0`
  - Bottom bar: `translateY(-6.5px) rotate(-45deg)`
- Overlay fades in (`overlayIn 0.28s`)
- Menu sheet slides in (`menuIn 0.38s`)
- `aria-expanded` toggles to `"true"`
- `body.menu-open` class added

### Close triggers
- Click overlay
- Press Escape
- Click any mobile menu link
- Window resize > 720px

### JS toggle pattern
```js
function openMenu() {
  burger.setAttribute('aria-expanded', 'true');
  mobileMenu.hidden = false;
  overlay.hidden = false;
  document.body.classList.add('menu-open');
}

function closeMenu() {
  burger.setAttribute('aria-expanded', 'false');
  mobileMenu.hidden = true;
  overlay.hidden = true;
  document.body.classList.remove('menu-open');
}
```

---

## 5. Count-Up Animation

```js
function runCountUp(statEl) {
  const target = parseFloat(statEl.dataset.target);
  const suffix = statEl.dataset.suffix;
  const decimals = parseInt(statEl.dataset.decimals);
  const valueEl = statEl.querySelector('.stat-value');
  const index = [...document.querySelectorAll('.stat')].indexOf(statEl);

  const duration = 1500 + index * 80;
  const delay = 480 + index * 90;

  setTimeout(() => {
    const start = performance.now();

    function frame(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const current = (target * eased).toFixed(decimals);
      valueEl.textContent = current + suffix;

      if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }, delay);
}
```

---

## 6. Build Checklist

Before the page is considered done, verify:

### Visual
- [ ] BubbledotICG-FinePos loads and renders in headline + stat icons
- [ ] Video loops seamlessly behind all content
- [ ] Logo circular button centered with 72% image
- [ ] Trust badge rings overlap correctly with dark outer / white inner
- [ ] Headline is solid white — no gradient, no shimmer
- [ ] CTA button has correct glow (--glow-white)
- [ ] Stats show 4 columns on desktop, 2x2 on mobile

### Animation
- [ ] Header slides down on load
- [ ] Headline lines fade up with correct delays
- [ ] Stats count up from 0 to target with easeOutCubic
- [ ] prefers-reduced-motion skips all animations

### Mobile
- [ ] Burger appears below 720px, nav pill hidden
- [ ] Burger animates open/close with X cross
- [ ] Overlay covers full screen
- [ ] Menu sheet appears under header
- [ ] All close triggers work (overlay, Escape, link, resize)
- [ ] Stats collapse to 2x2 grid

### Accessibility
- [ ] Burger has aria-label and aria-expanded
- [ ] Mobile menu has aria-label
- [ ] Logo img has empty alt=""
- [ ] All nav links keyboard navigable
- [ ] Focus rings visible
