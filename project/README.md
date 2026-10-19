# Intelligence Designed To Evolve

> A high-performance, single-viewport, full-bleed video-background landing page and enterprise marketing site built with Next.js 15.

This documentation outlines the architecture, components, workflows, and development guidelines for the "Intelligence Designed To Evolve" platform.

---

## 🏗 Technology Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4 + Native CSS Custom Properties (Variables)
- **Animation Engine**: GSAP (ScrollTrigger) & Framer Motion
- **Typography**: `geist/font/sans`, `geist/font/mono`, and custom retro dot-matrix fonts.

---

## 📂 Architecture & Directory Structure

The project is structured within the `/project` directory using the Next.js App Router paradigm.

```text
/project
├── app/
│   ├── layout.tsx         # Global layout (imports global CSS, loads fonts, wraps children)
│   ├── page.tsx           # Home page (Single-viewport, full-bleed video landing)
│   ├── product/page.tsx   # Modular Neural Architecture page
│   ├── case-studies/page.tsx # Proven in Production enterprise case studies
│   ├── contact/page.tsx   # Initiate Contact & Deployment forms
│   ├── sign-in/page.tsx   # Authentication login
│   └── sign-up/page.tsx   # Mesh registration
├── components/
│   ├── Navbar.tsx         # Primary animated navigation for the Home Page
│   ├── InnerNavbar.tsx    # Streamlined navigation header for sub-pages
│   ├── CTAButton.tsx      # Reusable pill-shaped call-to-action button
│   ├── Logo.tsx           # Scalable SVG Smiley Face logo
│   └── PageBadge.tsx      # Mini pill badges (e.g. "[ CORE CAPABILITIES ]")
├── styles/
│   ├── globals.css        # Tailwind directives and base CSS resets
│   ├── tokens.css         # Design system tokens (colors, radii, animations)
│   └── fonts.css          # Custom `@font-face` declarations
├── lib/
│   ├── gsap.ts            # Centralized GSAP registration and configuration
│   └── utils.ts           # Shared utility functions (e.g. class merging)
└── public/                # Static assets (videos, images, fonts)
```

---

## 🎨 Design System

The platform uses a **Cybernetic Minimalism** aesthetic characterized by:
- **Dark Surfaces**: `#000` base with `#111113` surface containers.
- **High-Frequency Typography**: A mix of clean Sans-Serif (Geist) for reading and raw Monospace (Geist Mono) for data, telemetry, and UI micro-copy.
- **Pill Capsules**: Buttons and badges use fully rounded `9999px` radii.
- **Fluid Layout**: The `1440px` centered canvas uses mathematical padding (`clamp(14px, 3vw, 32px)`) to ensure perfect vertical alignment across all screen sizes.

---

## 🧩 Component Documentation

### 1. `Navbar` & `InnerNavbar`
- **`Navbar.tsx`**: Used exclusively on the single-viewport Home page. It features Framer Motion entrance animations and integrates seamlessly with the full-bleed video background.
- **`InnerNavbar.tsx`**: Used on all sub-pages (`/product`, `/contact`, etc.). It strips away the heavy entrance animations for instantaneous routing and utilizes fluid clamp padding to perfectly align with the page content body.

### 2. `CTAButton`
A reusable call-to-action button (`components/CTAButton.tsx`).
- **Aspect Ratio**: Uses responsive padding (`px-6 sm:px-8`) rather than fixed widths, ensuring the button scales proportionally around its text content.
- **Hover States**: Includes subtle upward translation (`-translate-y-0.5`), scaling (`scale-[1.02]`), and CSS variable driven white glowing drop-shadows.

### 3. `PageBadge`
A simple, reusable pill component for section headers (e.g., `• [ CORE CAPABILITIES ]`). Uses mono typography and a dark semi-transparent background to establish technical hierarchy.

---

## 🔄 Workflows & Navigation

### 1. The Home Page Workflow
- **Path**: `/`
- **Behavior**: The user lands on a single-viewport (`100vh` / `100dvh`), lock-scrolled page with a looping, muted cinematic background video.
- **Interactions**: GSAP and Framer Motion orchestrate staggered entrance animations for the Logo, Navbar, Hero Text, and Call-to-Action buttons. The user cannot scroll—they must choose an action.

### 2. Sub-Page Routing
From the Home page, the user can navigate to the inner application:
- **Product (`/product`)**: Explores the Modular Neural Architecture. Features a 3x2 responsive grid of feature cards. Each card has a `min-h-[320px]` limit to ensure elegant, tall aspect ratios. Includes a simulated terminal configuration window.
- **Case Studies (`/case-studies`)**: Documents enterprise scaling. Features 50/50 split cards (text on left, AI/Mesh graphics on right). Graphics are locked to `md:min-h-[420px]` to maintain a widescreen aesthetic.
- **Contact (`/contact`)**: A 2-column layout. The left column details compliance and region hubs (complete with a dark-mode SF map). The right column houses a comprehensive technical inquiry form.
- **Authentication (`/sign-in` & `/sign-up`)**: Streamlined, vertically-centered forms for accessing the mesh, featuring mocked OAuth integration and enterprise telemetry.

### 3. Responsive Alignment
All inner pages share a unified structural pattern:
```tsx
<div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)]">
  <InnerNavbar activePage="..." />
  <main 
    className="flex-1 w-full max-w-[1440px] mx-auto pb-16 pt-6"
    style={{ paddingLeft: "clamp(14px, 3vw, 32px)", paddingRight: "clamp(14px, 3vw, 32px)" }}
  >
    {/* Page Content */}
  </main>
</div>
```
This guarantees that regardless of which page the user is on, the left margin of the Logo perfectly aligns with the left margin of the content cards, and the right margin of the CTA buttons perfectly aligns with the right edge of the content.

---

## 🛠 Development Workflow

1. **Start the Dev Server**:
   ```bash
   npm run dev
   ```
2. **Build for Production**:
   ```bash
   npm run build
   ```
3. **Modifying the Design**:
   - Update colors, glows, and core structural tokens in `styles/tokens.css`.
   - Ensure all new pages adopt the `clamp(14px, 3vw, 32px)` horizontal padding strategy to maintain grid alignment.
   - For images, always use `object-cover` and `absolute inset-0` within a relative wrapper to prevent stretching and aspect ratio breaks.
