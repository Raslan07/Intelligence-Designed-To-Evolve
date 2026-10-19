# Intelligence Designed To Evolve — Implementation Phases & Commit Roadmap

> Comprehensive phase-by-phase breakdown for **Intelligence Designed To Evolve**, detailing file structures, feature architectures, UI components, motion & animation specifications, implementation details, and step-by-step git commit commands.

---

## Executive Summary

| Phase | Title | Primary Scope | Files Impacted | Git Conventional Commit |
|---|---|---|---|---|
| **Phase 1** | **Design System & AI Agent Infrastructure** | Design specs, tokens, Figma assets, 8 specialized AI agents, and 11 slash-command workflows | `docs/`, `agents/`, `workflows/`, `preview/`, `assets/`, `DESIGN.md`, `MANIFEST.md`, `.gitignore` | `feat(specs): establish design system, documentation, and agent orchestration architecture` |
| **Phase 2** | **Project Scaffolding & Animation Engine** | Next.js 15 App Router setup, Tailwind CSS v4, `@theme` token binding, GSAP 3 + ScrollTrigger, static media | `project/` config files, `project/styles/`, `project/lib/`, `project/public/` | `chore(scaffold): initialize Next.js 15 enterprise project, design tokens, and animation engine` |
| **Phase 3** | **Core UI Primitives & Navigation System** | SVG smiley brand logo, glowing pill CTA button, section badges, subpage footer, and responsive dual navbar | `project/components/` (Logo, CTA, Badges, Footer, Navbars, SmoothScroll) | `feat(components): implement core UI primitives, glowing buttons, and responsive dual navbar` |
| **Phase 4** | **Landing Page & Telemetry Instrumentation** | Single-viewport locked hero, full-bleed looping video background, animated headline, enterprise trust badges, and count-up stats footer | `project/app/page.tsx`, `project/app/layout.tsx`, `project/components/` (Video, Headline, Badges, Telemetry) | `feat(landing): build single-viewport full-bleed video hero and GSAP telemetry footer` |
| **Phase 5** | **Subpage Suite: Product, Cases, Contact & Auth** | Modular neural architecture grid, interactive telemetry terminal, enterprise case studies, contact comms console, and mesh authentication | `project/app/product/`, `project/app/case-studies/`, `project/app/contact/`, `project/app/sign-in/`, `project/app/sign-up/` | `feat(pages): implement modular product architecture, case studies, contact, and mesh auth` |
| **Phase 6** | **Phase Specification & Project Roadmap** | Complete project lifecycle roadmap and phase documentation | `PHASE.md` | `docs: add PHASE.md project breakdown and implementation roadmap` |

---

## Phase 1: Design System & AI Agent Infrastructure

### 1. Objective
Establish the foundational design language, resource manifest, documentation suite, and autonomous agent orchestration architecture powering the development of *Intelligence Designed To Evolve*.

### 2. File Structure
```text
├── .gitignore                                  # Git exclusion rules for node, caches, logs & OS
├── DESIGN.md                                   # Master design system spec (Cybernetic Minimalism)
├── MANIFEST.md                                 # Manifest of fonts, CDNs, vectors, and media URLs
├── Intelligence Designed To Evolve.fig         # Original Figma UI/UX source file
├── assets/
│   ├── hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4 # Local copy of hero video
│   └── stitch_cinematic_video_landing_page.zip # Exported design asset archive
├── docs/
│   ├── README.md                               # Central documentation index
│   ├── 01-DESIGN-SYSTEM.md                     # Color palettes, typography, spacing, and shapes
│   ├── 02-ASSETS-AND-RESOURCES.md              # External CDNs, logo vectors, and typography fallbacks
│   ├── 03-IMPLEMENTATION-GUIDE.md              # Pure HTML/CSS/vanilla JS reference implementation
│   ├── 04-AGENTS.md                            # Detailed profiles of all 8 specialized AI agents
│   ├── 05-WORKFLOWS.md                         # Slash-command workflows guide
│   └── 06-PAGES.md                             # Comprehensive layout specifications for all 5 pages
├── preview/
│   ├── Intelligence Designed To Evolve.png     # Full preview: Landing Page
│   ├── Product — Modular Neural Architecture.png # Full preview: Product Page
│   ├── Case Studies — Proven In Production.png # Full preview: Case Studies Page
│   ├── Contact — Initiate Contact.png          # Full preview: Contact Page
│   └── Sign Up — Access The Mesh.png           # Full preview: Auth Mesh Page
├── agents/
│   ├── orchestrator.md                         # Multi-agent coordination and synthesis engine
│   ├── frontend-specialist.md                  # UI/UX engineering, animations, and typography
│   ├── project-planner.md                      # Pre-implementation task planning and validation
│   ├── seo-specialist.md                       # Meta graph, Core Web Vitals, and search positioning
│   ├── performance-optimizer.md                # Bundle budgets, render metrics, and frame rate
│   ├── security-auditor.md                     # CSP policies, input sanitization, and compliance
│   ├── documentation-writer.md                 # Technical documentation, API specs, and change logs
│   └── test-engineer.md                        # Unit, integration, and E2E regression testing
└── workflows/
    ├── orchestrate.md                          # /orchestrate - Run 3+ agents on complex milestones
    ├── ui-ux-pro-max.md                        # /ui-ux-pro-max - Advanced design research & styling
    ├── create.md                               # /create - Full-lifecycle feature creation
    ├── plan.md                                 # /plan - Plan-only Socratic gate task decomposition
    ├── enhance.md                              # /enhance - Feature optimization and expansion
    ├── debug.md                                # /debug - Root-cause analysis and bug remediation
    ├── test.md                                 # /test - Test plan generation and execution
    ├── deploy.md                               # /deploy - Production bundling and verification
    ├── preview.md                              # /preview - Local dev server lifecycle
    ├── brainstorm.md                           # /brainstorm - Exploratory architectural ideation
    └── status.md                               # /status - Agent and project health audit
```

### 3. Key Features & Specifications
- **Design Language**: Cybernetic Minimalism designed for high-stakes enterprise systems operators, researchers, and tech leads. Deep absolute blacks (`#000000`), subtle dark containers (`#111113`, `#1c1c1f`), and glowing white accents.
- **Typography Matrix**: Dual-tier typography utilizing `BubbledotICG-FinePos` (retro dot-matrix display), `Geist Pixel Circle` fallback, `Inter` for functional reading/UI, and `Space Mono` for telemetry instruments.
- **Autonomous Multi-Agent Architecture**: 8 distinct agent personas with hard boundary rules and structured cooperation protocols (Phase 1 Planning vs Phase 2 Parallel Implementation).
- **11 Slash-Command Workflows**: Standardized workflow playbooks for frictionless IDE execution (`/create`, `/plan`, `/debug`, `/orchestrate`, etc.).

### 4. Git Execution
```bash
git add .gitignore DESIGN.md MANIFEST.md "Intelligence Designed To Evolve.fig" assets/ preview/ docs/ agents/ workflows/
git commit -m "feat(specs): establish design system, documentation, and agent orchestration architecture"
```

---

## Phase 2: Project Scaffolding & Animation Engine

### 1. Objective
Bootstrap the production Next.js 15 enterprise web application with React 19, TypeScript 5, Tailwind CSS v4, custom token integration, GSAP 3 animation configuration, and high-fidelity static media assets.

### 2. File Structure
```text
project/
├── .gitignore                                  # Project-level gitignore
├── package.json                                # Dependencies: Next 16/15, React 19, GSAP, Framer Motion, Lenis
├── package-lock.json                           # Deterministic dependency tree lockfile
├── tsconfig.json                               # Strict TypeScript compiler options & `@/*` path aliases
├── next.config.ts                              # Next.js compilation configuration
├── postcss.config.mjs                          # PostCSS Tailwind v4 plugin configuration
├── eslint.config.mjs                           # ESLint configuration with Next.js rules
├── README.md                                   # Project implementation documentation
├── AGENTS.md                                   # Next.js agent operational guidelines
├── CLAUDE.md                                   # Assistant rules and workspace instructions
├── styles/
│   └── tokens.css                              # Design system CSS variables, `@font-face`, glows, and radii
├── app/
│   ├── globals.css                             # Tailwind `@theme` mapping, resets, button hover dynamics
│   └── favicon.ico                             # Application browser favicon
├── lib/
│   └── gsap.ts                                 # Centralized GSAP & ScrollTrigger SSR-safe setup
└── public/
    ├── dna_synthesis_glow_1790380421310.jpg    # BioInformatics research high-res graphic
    ├── network_mesh_nodes_1790380410379.jpg    # Neural network edge mesh nodes graphic
    ├── server_rack_mesh_1790380399631.jpg      # Enterprise datacenter server rack graphic
    ├── sf_map_dark_1790380799115.jpg           # San Francisco Bay Area dark cybernetic map
    ├── file.svg, globe.svg, next.svg, vercel.svg, window.svg # System iconography
    └── videos/
        └── hero-loop.mp4                       # Optimized 1080p full-bleed loopable video (13.8MB)
```

### 3. Key Features & Specifications
- **Next.js 15 App Router & React 19**: Server Component architecture with selective `"use client"` micro-islands for interactive elements.
- **Tailwind CSS v4 & Native Tokens**: Utilizes Tailwind's new `@theme` directive in `globals.css` wired directly to CSS custom properties defined in `styles/tokens.css` (`--bg`, `--surface`, `--glow-white`, `--nav-shadow`).
- **Centralized Animation Runtime**: SSR-guarded GSAP configuration with registered `ScrollTrigger` plugin in `lib/gsap.ts`.
- **Global Micro-Interactions**: Global styling for interactive buttons and anchors featuring smooth spring scaling (`cubic-bezier(0.22, 1, 0.36, 1)`), hover transforms (`scale: 1.03`), and active press states (`scale: 0.98`).

### 4. Git Execution
```bash
git add project/.gitignore project/package.json project/package-lock.json project/tsconfig.json project/next.config.ts project/postcss.config.mjs project/eslint.config.mjs project/README.md project/AGENTS.md project/CLAUDE.md project/styles/ project/lib/ project/public/ project/app/globals.css project/app/favicon.ico
git commit -m "chore(scaffold): initialize Next.js 15 enterprise project, design tokens, and animation engine"
```

---

## Phase 3: Core UI Primitives & Navigation System

### 1. Objective
Engineer reusable, high-fidelity UI component primitives, dynamic navigation systems, fluid spacing mechanisms, and butter-smooth scrolling controllers.

### 2. File Structure
```text
project/components/
├── Logo.tsx                                    # Pure scalable SVG smiley brand mark
├── CTAButton.tsx                               # Elastic glowing pill call-to-action button
├── PageBadge.tsx                               # Telemetry section badge with dot indicator
├── PageFooter.tsx                              # Unified subpage footer with live operational pulse
├── SmoothScroll.tsx                            # Lenis smooth scrolling wrapper
├── Navbar.tsx                                  # Full-bleed landing page header with mobile drawer
└── InnerNavbar.tsx                             # Subpage navigation header with route tracking & CTA
```

### 3. Key Features & Specifications
- **`Logo.tsx`**: High-precision SVG implementation of the signature smiley face emblem inside a white circular disc with subtle scale hover response.
- **`CTAButton.tsx`**: Reusable interactive pill CTA. Dynamically calculates responsive horizontal padding (`px-6 sm:px-8`) instead of rigid widths, preventing layout breaks. Features interactive hover glow (`--glow-white-hover`), elevation translation (`-translate-y-0.5`), and scale pop (`scale-[1.02]`).
- **`PageBadge.tsx`**: Monospace cybernetic pill indicator (`• [ SECTION_CODE ]`) for technical page hierarchies.
- **`PageFooter.tsx`**: Persistent system status footer for subpages featuring an animated green/white pulse dot (`Systems Operational — High Precision Runtime`) and legal metadata.
- **`SmoothScroll.tsx`**: Client-side Lenis integration providing inertia-based scrolling for content-heavy subpages.
- **Dual Navbar Architecture**:
  - `Navbar.tsx`: Custom entrance animation via Framer Motion (`y: -18` to `0`), transparent integration over video backdrop, three-dot active indicator, and full mobile overlay drawer triggered by a burger button with Escape-key and resize listeners.
  - `InnerNavbar.tsx`: Stripped of heavy entrance delay for instant subpage switching; maintains mathematical alignment via `clamp(14px, 3vw, 32px)` horizontal padding so the logo and links align pixel-perfectly with content cards.

### 4. Git Execution
```bash
git add project/components/Logo.tsx project/components/CTAButton.tsx project/components/PageBadge.tsx project/components/PageFooter.tsx project/components/SmoothScroll.tsx project/components/Navbar.tsx project/components/InnerNavbar.tsx
git commit -m "feat(components): implement core UI primitives, glowing buttons, and responsive dual navbar"
```

---

## Phase 4: Landing Page & Telemetry Instrumentation

### 1. Objective
Deliver the premier single-viewport hero landing experience with full-bleed looping video background, staggered entrance motion, enterprise trust badge cluster, and GSAP-orchestrated telemetry count-up readouts.

### 2. File Structure
```text
project/
├── app/
│   ├── layout.tsx                              # Root layout with Inter, Space Mono, and Bubbledot CDN font links
│   └── page.tsx                                # Single-viewport lock landing page layout
└── components/
    ├── BackgroundVideo.tsx                     # Full-bleed HTML5 autoplay video with absolute positioning
    ├── AnimatedHeadline.tsx                    # Two-line Framer Motion staggered dot-matrix headline
    ├── TrustBadges.tsx                         # Overlapping Microsoft/Amazon/Google dark avatar rings + pill
    └── TelemetryFooter.tsx                     # 4-metric GSAP ScrollTrigger real-time count-up stats bar
```

### 3. Key Features & Specifications
- **Single-Viewport Architecture (`.viewport-lock`)**: Explicit `100vh` and `100dvh` lock preventing page scrolling on desktop. Three vertical flex regions: Header (`flex-shrink: 0`), Hero (`flex: 1` centered), and Stats Footer (`flex-shrink: 0`).
- **`BackgroundVideo.tsx`**: Pointer-events disabled, zero z-index, object-cover looping video showcasing dark neural organic movement with native dot-matrix character rain overlay.
- **`AnimatedHeadline.tsx`**: Split into two distinct lines ("Intelligence", "Designed To Evolve") rendered in `BubbledotICG-FinePos` display font at `clamp(28px, 6.2vw, 80px)`. Sequenced via custom cubic-bezier ease (`[0.22, 1, 0.36, 1]`) with delays of 0.12s and 0.30s.
- **`TrustBadges.tsx`**: Three interlocking dark circles displaying Microsoft, Amazon, and Google icons (via `react-icons/fa6`) with negative margin overlaps (`-ml-2.5`), dark borders (`rgba(255, 255, 255, 0.4)`), and a pill label `"Trusted by 2000+ Enterprises"`.
- **`TelemetryFooter.tsx`**: 4 telemetry readouts with retro dot-matrix glyphs (`<`, `%`, `*`, `#`) and GSAP animated count-up logic:
  - `<` `120ms` Inference Time (`decimals: 0`)
  - `%` `99.99%` Platform Uptime (`decimals: 2`)
  - `*` `24/7` Autonomous Runtime (`decimals: 0`)
  - `#` `2.4M` Context Windows (`decimals: 1`)
  Collapses from a 4-column desktop strip into a 2x2 responsive grid on mobile viewports.

### 4. Git Execution
```bash
git add project/app/layout.tsx project/app/page.tsx project/components/BackgroundVideo.tsx project/components/AnimatedHeadline.tsx project/components/TrustBadges.tsx project/components/TelemetryFooter.tsx
git commit -m "feat(landing): build single-viewport full-bleed video hero and GSAP telemetry footer"
```

---

## Phase 5: Subpage Suite: Product, Cases, Contact & Auth

### 1. Objective
Implement the complete inner route suite for the enterprise platform, including deep-dive modular neural architecture, verified production case studies, direct communication console, and mesh authentication.

### 2. File Structure
```text
project/app/
├── product/
│   └── page.tsx                                # 2x3 neural module card grid + live telemetry terminal
├── case-studies/
│   └── page.tsx                                # 50/50 split enterprise story cards + quote testimonial
├── contact/
│   └── page.tsx                                # 2-column console: cluster status, SF map + encrypted payload form
├── sign-in/
│   └── page.tsx                                # Enterprise credential login + hardware token telemetry
└── sign-up/
    └── page.tsx                                # Mesh cluster provisioning + subdomain allocator + entropy meter
```

### 3. Key Features & Specifications
- **Product Page (`/product`)**:
  - Section badge: `• [ CORE CAPABILITIES ]`
  - 2x3 Feature Card Grid: Each card styled with `#1c1c1f` surface, `min-h-[320px]`, monospace telemetry code, glyph headers, and performance readouts (MOD_01 Dispatch, MOD_02 Memory Fabric, MOD_03 Integrity Guardrails, MOD_04 Fine-Tuning, MOD_05 Telemetry, MOD_06 Multi-Cloud Edge Mesh).
  - Interactive Terminal Panel: Simulated dual-column YAML configuration file viewer and live cluster stats (Latency, Uptime, Throughput).
  - Dual CTAs: `[ Deploy Cluster ]` and `[ Explore Documentation ]`.
- **Case Studies Page (`/case-studies`)**:
  - Section badge: `• [ ENTERPRISE VERIFICATION ]`
  - 4-Stat Strip: Active Cluster Pods (128,400+), P99 Latency (11.8ms), Verified Tokens (4.82 PB), Uptime (99.999%).
  - 3 Enterprise Deep-Dives: Global FinTech Consortium (Throughput +340%), HyperScale Cloud Diagnostics (99.999% SLA), BioInformatics Research (18x speed). Each card utilizes a 50/50 split with wide-screen visuals (`md:min-h-[420px]`).
  - Testimonial Quote: Large callout from Lead Infrastructure Architect David Rostova.
- **Contact Page (`/contact`)**:
  - Section badge: `• [ DIRECT COMM LINK ]`
  - Left Console: Live telemetry ping (12.4ms), enterprise regional hubs (SFO, ZRH, TYO), SOC2/ISO/HIPAA compliance certifications, and dark San Francisco Bay Area hub map.
  - Right Console: Technical transmission form with full name, email, organization, GPU hours select, deployment topology dropdown, requirement textarea, and encrypted AES-GCM-256 cipher token verification.
- **Authentication Pages (`/sign-in` & `/sign-up`)**:
  - Sign-In: Centered card with single-sign-on (GitHub, Google), enterprise email/password inputs, hardware security key telemetry, and recovery links.
  - Sign-Up: Provisioning console with instant $500 credits badge, cluster subdomain allocator (`*.mesh.io`), real-time password entropy calculation, and enterprise service terms toggle.

### 4. Git Execution
```bash
git add project/app/product/page.tsx project/app/case-studies/page.tsx project/app/contact/page.tsx project/app/sign-in/page.tsx project/app/sign-up/page.tsx
git commit -m "feat(pages): implement modular product architecture, case studies, contact, and mesh auth"
```

---

## Phase 6: Phase Specification & Project Roadmap

### 1. Objective
Document the complete development trajectory, file mappings, architectural rationale, and git execution trace within `PHASE.md` for team onboarding, auditability, and automated verification.

### 2. File Structure
```text
├── PHASE.md                                    # This project phase specification document
```

### 3. Git Execution
```bash
git add PHASE.md
git commit -m "docs: add PHASE.md project breakdown and implementation roadmap"
git push origin main
```

---

## Verification & Deployment Summary

```text
Phase 1: Architecture & Specs  ──► docs/, agents/, workflows/, assets/
Phase 2: Project & Engine      ──► project/ config, styles, lib/gsap, public/
Phase 3: UI Primitives & Nav   ──► project/components/ (Logo, CTA, Navbars, Footer)
Phase 4: Landing Page & Motion ──► project/app/page.tsx, layout.tsx, Video, Stats
Phase 5: Subpages & Auth       ──► project/app/product, case-studies, contact, auth
Phase 6: Roadmap Documentation ──► PHASE.md (Pushed to GitHub)
```
