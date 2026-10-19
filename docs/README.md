# Intelligence Designed To Evolve — Project Documentation

> A single-viewport, full-bleed video-background landing page for an enterprise AI platform.
> Built with plain **HTML + CSS + vanilla JS**. No framework. No build step.

---

## Documentation Index

| Document | What's Inside |
|---|---|
| [README.md](./README.md) | This file — project overview and navigation |
| [01-DESIGN-SYSTEM.md](./01-DESIGN-SYSTEM.md) | Colors, typography, spacing, elevation, shapes, components |
| [02-ASSETS-AND-RESOURCES.md](./02-ASSETS-AND-RESOURCES.md) | Fonts, icons, video, CSS tokens, file structure |
| [03-IMPLEMENTATION-GUIDE.md](./03-IMPLEMENTATION-GUIDE.md) | HTML structure, animations, JS logic — how to build |
| [04-AGENTS.md](./04-AGENTS.md) | All 8 AI agents — roles, rules, when to use |
| [05-WORKFLOWS.md](./05-WORKFLOWS.md) | All 11 slash-command workflows — how to trigger and use |
| [06-PAGES.md](./06-PAGES.md) | All 5 page designs documented with layout specs |

---

## Project File Structure

```
Intelligence Designed To Evolve AnitIDE/
|
+-- docs/                          <- You are here
|   +-- README.md
|   +-- 01-DESIGN-SYSTEM.md
|   +-- 02-ASSETS-AND-RESOURCES.md
|   +-- 03-IMPLEMENTATION-GUIDE.md
|   +-- 04-AGENTS.md
|   +-- 05-WORKFLOWS.md
|   +-- 06-PAGES.md
|
+-- agents/                        <- AI agent role definitions
|   +-- orchestrator.md
|   +-- frontend-specialist.md
|   +-- project-planner.md
|   +-- seo-specialist.md
|   +-- performance-optimizer.md
|   +-- security-auditor.md
|   +-- documentation-writer.md
|   +-- test-engineer.md
|
+-- workflows/                     <- Slash-command workflows
|   +-- orchestrate.md
|   +-- ui-ux-pro-max.md
|   +-- create.md
|   +-- plan.md
|   +-- enhance.md
|   +-- debug.md
|   +-- test.md
|   +-- deploy.md
|   +-- preview.md
|   +-- brainstorm.md
|   +-- status.md
|
+-- preview/                       <- Page design screenshots
|   +-- Intelligence Designed To Evolve.png  (Home)
|   +-- Product Modular Neural Architecture.png
|   +-- Case Studies Proven In Production.png
|   +-- Contact Initiate Contact.png
|   +-- Sign Up Access The Mesh.png
|
+-- assets/
|   +-- logo.webp                  <- Brand mark (export from SVG in MANIFEST.md)
|
+-- fonts/
|   +-- GeistPixel-Circle.woff2    <- Local fallback display font
|
+-- DESIGN.md                      <- Design system source of truth
+-- MANIFEST.md                    <- Asset and resource manifest
+-- Intelligence Designed To Evolve.fig  <- Figma source file
```

---

## Quick Start — Build the Landing Page

### Step 1: Files to create
```
index.html
styles.css
main.js
assets/logo.webp   <- export from the SVG in MANIFEST.md
```

### Step 2: External CDN resources
```html
<!-- Inter UI font -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<!-- BubbledotICG-FinePos display font -->
<link href="https://db.onlinewebfonts.com/c/8cb707a9b8a73f8a7403336b861c3074?family=BubbledotICG-FinePos" rel="stylesheet">

<!-- Font Awesome 6.5.2 icons -->
<link rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
  integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
  crossorigin="anonymous" referrerpolicy="no-referrer" />
```

### Step 3: Background video URL
```
https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260809_012548_ef22562c-c0ae-4816-ad9d-f8922af4e6a7.mp4
```

---

## Design Vision

**Aesthetic:** Cybernetic minimalism. Absolute black ground, white primary system, retro dot-matrix typography, telemetry-style stats.

**Audience:** Technical leaders, research scientists, systems operators.

**Emotional target:** Trust + precision + enterprise-grade durability.

**Key visual differentiators:**
- Full-viewport looping AI video background with dot-matrix character overlay in the video itself
- BubbledotICG-FinePos retro dot-matrix font for all hero headlines and telemetry glyphs
- Trust badge row: overlapping dark-ringed brand logo circles (Microsoft / Amazon / Google)
- 4-stat footer with animated count-up metrics and display-font telemetry symbols
- Single viewport only — header + hero + stats, all visible without scrolling

---

## Agent + Workflow System

The project ships with 8 specialized AI agents and 11 workflow commands.

```
/create      -> Build a new feature or page
/plan        -> Create a structured plan before building
/enhance     -> Update or add to existing code
/debug       -> Investigate and fix issues
/test        -> Generate and run tests
/deploy      -> Production deployment
/preview     -> Local server management
/brainstorm  -> Explore multiple options before committing
/status      -> Show project and agent status
/orchestrate -> Coordinate multiple agents for complex tasks
/ui-ux-pro-max -> Advanced design research and implementation
```

Full details in 04-AGENTS.md and 05-WORKFLOWS.md.

---

*Last updated: 2026-09-26*
