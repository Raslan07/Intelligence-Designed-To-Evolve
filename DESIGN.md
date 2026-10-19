# Design System: Autonomous Cybernetic Intelligence

High-performance computational intelligence aesthetic — cybernetic minimalism meets enterprise-grade durability. Built for technical leaders, research scientists, and systems operators. Deep absolute blacks, tactile pill capsules, high-frequency instrumentation typography. Glassmorphic discipline over dark monochrome surfaces.

---

## Colors

### Semantic Tokens (Material-style)

| Token | Value |
|---|---|
| `surface` | `#131313` |
| `surface-dim` | `#131313` |
| `surface-bright` | `#393939` |
| `surface-container-lowest` | `#0e0e0e` |
| `surface-container-low` | `#1b1b1b` |
| `surface-container` | `#1f1f1f` |
| `surface-container-high` | `#2a2a2a` |
| `surface-container-highest` | `#353535` |
| `on-surface` | `#e2e2e2` |
| `on-surface-variant` | `#c4c7c8` |
| `inverse-surface` | `#e2e2e2` |
| `inverse-on-surface` | `#303030` |
| `outline` | `#8e9192` |
| `outline-variant` | `#444748` |
| `surface-tint` | `#c6c6c7` |
| `primary` | `#ffffff` |
| `on-primary` | `#2f3131` |
| `primary-container` | `#e2e2e2` |
| `on-primary-container` | `#636565` |
| `inverse-primary` | `#5d5f5f` |
| `secondary` | `#c6c6c6` |
| `on-secondary` | `#2f3131` |
| `secondary-container` | `#484949` |
| `on-secondary-container` | `#b8b8b8` |
| `tertiary` | `#ffffff` |
| `on-tertiary` | `#2f3031` |
| `tertiary-container` | `#e3e2e2` |
| `on-tertiary-container` | `#646464` |
| `error` | `#ffb4ab` |
| `on-error` | `#690005` |
| `error-container` | `#93000a` |
| `on-error-container` | `#ffdad6` |
| `primary-fixed` | `#e2e2e2` |
| `primary-fixed-dim` | `#c6c6c7` |
| `on-primary-fixed` | `#1a1c1c` |
| `on-primary-fixed-variant` | `#454747` |
| `secondary-fixed` | `#e3e2e2` |
| `secondary-fixed-dim` | `#c6c6c6` |
| `on-secondary-fixed` | `#1a1c1c` |
| `on-secondary-fixed-variant` | `#464747` |
| `tertiary-fixed` | `#e3e2e2` |
| `tertiary-fixed-dim` | `#c7c6c6` |
| `on-tertiary-fixed` | `#1b1c1c` |
| `on-tertiary-fixed-variant` | `#464747` |
| `background` | `#131313` |
| `on-background` | `#e2e2e2` |
| `surface-variant` | `#353535` |

### Conceptual Palette (narrative reference)

Calibrated monochrome spectrum, engineered for low eye strain in low-light runtime operations, targeting strict WCAG AAA contrast ratios.

- **Canvas Base** `#000000` — absolute void backdrop, maximum depth/contrast
- **Surface Layer** `#28282a` — elevated surfaces, tactile cards, floating modules, pill containers
- **Primary Text** `#ffffff` — interactive triggers, core metrics, critical readouts, primary titles
- **Secondary Text** `#c8c8c8` — descriptive narratives, active subheadings, key state transitions
- **Muted Text** `#8e8e8e` — metadata labels, axis indicators, timestamps, resting iconography
- **Accent Structural Outlines** `rgba(255,255,255,0.15)` — boundaries, card peripheries, dividers
- **Active Glows** `rgba(255,255,255,0.25)` → `rgba(255,255,255,0.45)` — state persistence, focus targets, live system signals

> Note: the semantic token table (from theme config) and the conceptual palette (from the brand narrative) diverge slightly on exact hex values for surfaces (`#131313` vs `#28282a`/`#000000`). Treat the semantic tokens as the implementation source of truth; use the conceptual palette for intent/reasoning when introducing new components.

---

## Typography

**Families**
- **Space Mono** — system anchors, critical titles, telemetry outputs, counter modules, cybernetic indicators. Emulates terminal instruments / dot-matrix displays.
- **Inter** — functional interface layers, inputs, continuous prose, data grids, navigation. Medium (500) and semi-bold (600) weights for glanceable scanning on `#000000`.

**Scale**

| Style | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| `display-hero` | Space Mono | 56px | 700 | 64px | -0.04em |
| `display-hero-mobile` | Space Mono | 36px | 700 | 44px | -0.03em |
| `headline-lg` | Space Mono | 32px | 700 | 40px | -0.02em |
| `headline-lg-mobile` | Space Mono | 24px | 700 | 32px | -0.01em |
| `headline-md` | Space Mono | 20px | 700 | 28px | 0em |
| `tech-stat` | Space Mono | 28px | 400 | 32px | -0.02em |
| `body-lg` | Inter | 16px | 400 | 26px | -0.01em |
| `body-md` | Inter | 14px | 400 | 22px | 0em |
| `body-sm` | Inter | 12px | 400 | 18px | 0.01em |
| `label-md` | Inter | 13px | 500 | 16px | 0.02em |
| `label-sm` | Inter | 11px | 600 | 14px | 0.04em |
| `code-inline` | Space Mono | 12px | 400 | 16px | 0em |

---

## Layout & Spacing

8px mathematical baseline within a fluid 12-column grid.

| Breakpoint | Grid | Margin | Gutter | Notes |
|---|---|---|---|---|
| Desktop ≥ 1200px | 12-col | 2rem | 1.5rem | Canvas capped at 1440px, centered |
| Tablet 768–1199px | 8-col | 1.5rem | 1.25rem | Complex views reflow to 2-col / stacked pills |
| Mobile < 768px | 4-col | 1.25rem | 1rem | Full-width modules or vertical swipe channels, bottom-docked nav |

**Spacing scale**

| Token | Value |
|---|---|
| `space-xs` | 0.25rem |
| `space-sm` | 0.5rem |
| `space-md` | 1rem |
| `space-lg` | 1.5rem |
| `space-xl` | 2.5rem |
| `gutter` | 1.5rem |
| `gutter-mobile` | 1rem |
| `margin` | 2rem |
| `margin-mobile` | 1.25rem |

**Radii**

| Token | Value |
|---|---|
| `rounded-sm` | 0.5rem |
| `rounded` (default) | 1rem |
| `rounded-md` | 1.5rem |
| `rounded-lg` | 2rem |
| `rounded-xl` | 3rem |
| `rounded-full` | 9999px |

---

## Elevation & Depth

Physical glass layering over true optical black, not diffuse drop shadows.

- **Elevation 0 — Base Field**: `#000000`, pure ground layer.
- **Elevation 1 — Surface Pill & Card**: solid `#28282a` or translucent `rgba(40,40,42,0.75)` with `backdrop-filter: blur(16px)`; `1px` hairline border `rgba(255,255,255,0.15)`; shadow `0 4px 14px rgba(0,0,0,0.16)`.
- **Elevation 2 — Floating Overlays & Modals**: backplate `rgba(40,40,42,0.95)`; `1px` border `rgba(255,255,255,0.25)`; dual-layer shadow `0 8px 32px rgba(0,0,0,0.45), 0 0 1px rgba(255,255,255,0.2)`.
- **Active State Glow**: `box-shadow: 0 0 20px rgba(255,255,255,0.22)` on focused/triggered surfaces.

---

## Shapes

- **Pills** (`border-radius: 9999px`): interactive actions, dynamic system tags, telemetry indicators, status badges, floating utility bars.
- **Surface cards / data grids** (`1.5rem`–`2rem`): structural nodes, telemetry dashboard panes.
- **Inputs / field elements** (`9999px` or `1rem`): rounded controls, tactile physical-console feel.

---

## Components

### Buttons
- **Primary CTA**: `rounded-full`, `#ffffff` bg / `#000000` text (Inter 600). Resting shadow `0 4px 14px rgba(0,0,0,0.16)`. Hover: `scale(1.02)` + glow `0 0 24px rgba(255,255,255,0.35)`.
- **Secondary Capsule**: pill, `#28282a` bg, `1px solid rgba(255,255,255,0.15)`, white text. Hover: border → `rgba(255,255,255,0.4)`, surface → `#323234`.
- **Ghost Capsule**: pill, transparent, `#c8c8c8` text. Hover: `rgba(255,255,255,0.08)` fill, text → `#ffffff`.

### Badges & Chips
- Fully radiused pills, `space-xs` vertical / `space-sm` horizontal padding.
- Background `rgba(40,40,42,0.8)`, `1px solid rgba(255,255,255,0.15)`.
- Space Mono, uppercase, `0.04em` tracking. Active status dot: `4px` solid `#ffffff` core, `0 0 8px #ffffff` glow.

### Cards & Glassmorphic Containers
- Base `#28282a` bg, optional `backdrop-filter: blur(12px)`.
- `1px solid rgba(255,255,255,0.15)` stroke. Padding: `space-lg` desktop / `space-md` mobile.
- Top-edge highlight: `linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 100%)`.

### Form Fields & Inputs
- Pill (`9999px`) or soft capsule (`1rem`) container.
- Background `#161617`, `1px solid rgba(255,255,255,0.15)`.
- Placeholder `#8e8e8e`. Active: border → `#ffffff` + glow `0 0 12px rgba(255,255,255,0.2)`. Type: Inter 14px.

### Checkboxes & Toggle Switches
- **Switches**: pill track `#28282a`, `1px solid rgba(255,255,255,0.2)`. Thumb: solid white circle. Active: track fills white, thumb → `#000000`.
- **Checkboxes**: squared pill (`6px` radius), `#161617` bg, `rgba(255,255,255,0.2)` border. Checked: white fill, black check glyph.

### Lists & Telemetry Feeds
- Borderless rows, `1px solid rgba(255,255,255,0.06)` separators.
- Monospaced values right-aligned (Space Mono, `#ffffff`); descriptor titles left-aligned (Inter, `#8e8e8e`).
- Hover: row bg → `rgba(255,255,255,0.03)`, instant transition.
