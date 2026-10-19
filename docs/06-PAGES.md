# 06 — Pages

> All 5 page designs documented with layout specs, copy, and components.
> Preview screenshots are in the `preview/` folder.

---

## Table of Contents

1. [Home — Intelligence Designed To Evolve](#1-home--intelligence-designed-to-evolve)
2. [Product — Modular Neural Architecture](#2-product--modular-neural-architecture)
3. [Case Studies — Proven In Production](#3-case-studies--proven-in-production)
4. [Contact — Initiate Contact](#4-contact--initiate-contact)
5. [Sign Up — Access The Mesh](#5-sign-up--access-the-mesh)

---

## Shared Elements (All Pages)

### Navigation Header
All pages share the same header structure:

```
[Logo] [Home] [Product] [Case Studies] [Contact]  [Sign in] [Sign up]
```

- Logo: circular white button, 44-46px, brand mark inside
- Nav pill: white background, rounded-full, active item has three-dot indicator
- Sign in: dark pill (#28282a), ghost style
- Sign up: white pill, solid CTA style (appears on inner pages)
- Active page: full opacity, three 3x3px dots below link text

### Footer (Inner Pages)
```
• Systems Operational — High Precision Runtime       Platform  Telemetry  Diagnostics  © 2026 Evolve Intelligence
```
- Status dot: white pulse
- Links: Inter, muted (#8e8e8e)

---

## 1. Home — Intelligence Designed To Evolve

**Preview:** `preview/Intelligence Designed To Evolve.png`
**File:** `index.html`
**Design:** Single viewport, full-bleed video background

### Layout (3 vertical regions)

```
+-----------------------------------------------+
| HEADER: Logo | Nav Pill | Sign in              |  flex-shrink: 0
+-----------------------------------------------+
|                                               |
|  HERO (centered, flex: 1)                    |
|                                               |
|  [Microsoft] [Amazon] [Google]  Trusted by   |
|              2000+ Enterprises                |
|                                               |
|        Intelligence                           |  BubbledotICG-FinePos
|        Designed To Evolve                     |  clamp(28px, 6.2vw, 80px)
|                                               |
|  Build applications that reason, adapt and   |
|  collaborate using a modular AI platform     |
|  designed for production.                    |
|                                               |
|            [ Get Started ]                   |  White pill CTA
|                                               |
+-----------------------------------------------+
|  <        %        *        #                |  flex-shrink: 0
|  120ms    99.99%   24/7     2.4M             |  Count-up animation
|  Inference  Uptime  Runtime  Context         |
+-----------------------------------------------+
```

### Hero Content Spec

| Element | Content |
|---|---|
| Trust text | "Trusted by 2000+ Enterprises" |
| Headline line 1 | "Intelligence" |
| Headline line 2 | "Designed To Evolve" |
| Subhead | "Build applications that reason, adapt and collaborate using a modular AI platform designed for production." |
| CTA | "Get Started" |

### Stats Spec

| Glyph | Target | Suffix | Decimals | Label |
|---|---|---|---|---|
| `<` | 120 | ms | 0 | Inference Time |
| `%` | 99.99 | % | 2 | Platform Uptime |
| `*` | 24 | /7 | 0 | Autonomous Runtime |
| `#` | 2.4 | M | 1 | Context Windows |

### Background Video
Full-viewport CloudFront video:
- Black organic AI forms with depth
- Dot-matrix character rain overlay (built into the video content)
- Loops seamlessly, autoplay, muted, playsinline

### Mobile (≤ 720px)
- Nav pill hidden → burger button appears (top right)
- Stats collapse to 2×2 grid
- Headline letter-spacing tightens to -0.08em

---

## 2. Product — Modular Neural Architecture

**Preview:** `preview/Product — Modular Neural Architecture.png`
**Design:** Full-page scrollable, black background (#000)

### Section Structure

```
HEADER (shared)

BADGE:  • [ CORE CAPABILITIES ]

H1: Modular Neural Architecture     <- BubbledotICG-FinePos

SUBHEAD: Composable model topologies, autonomous runtime workers,
and sub-100ms inference pipelines built for mission-critical
enterprise scale.

STATUS BAR:
KERNEL: v4.19-RT-SYNAPSE  •  STATUS: AUTONOMOUS DISPATCH ACTIVE  •  TOPOLOGY: HETEROGENEOUS MESH

FEATURE CARDS GRID (2x3):
+------------------+  +-------------------+  +-------------------+
| < MOD_01 DISPATCH|  | # MOD_02 MEMORY   |  | * MOD_03 INTEGRITY|
| Dynamic Neural   |  | Distributed Memory|  | Autonomous        |
| Routing          |  | Fabric            |  | Guardrails        |
| Automated...     |  | Persistent...     |  | Real-time...      |
| LATENCY: -84% RTT|  | SYNC DRIFT: <0.08 |  | SHA-3 512         |
+------------------+  +-------------------+  +-------------------+
| % MOD_04 OPTIMIZE|  | < MOD_05 TELEMETRY|  | # MOD_06 MESH     |
| Adaptive Fine-   |  | Telemetry &       |  | Multi-Cloud Edge  |
| Tuning           |  | Observability     |  | Mesh              |
| Continuous...    |  | High-fidelity...  |  | Bare-metal GPU... |
| CONTINUOUS       |  | 100,000 EPS       |  | N+3 REGIONS       |
+------------------+  +-------------------+  +-------------------+

TERMINAL PANEL (dark card):
 neural-topology.orchestrator.yaml    • SYNCED // 120ms INFERENCE   NODE_POOLS: 128/ACTIVE
 [YAML code panel]                    [Metrics panel: LATENCY, UPTIME, THROUGHPUT]

CTA ROW:
 [ Deploy Cluster ]    [ Explore Documentation ]

FOOTER (shared)
```

### Feature Card Component

```
card {
  background: #1c1c1f   (surface-container)
  border: 1px solid rgba(255,255,255,0.08)
  border-radius: 1.5rem
  padding: 1.5rem
}

card-header: glyph icon (display font) + module code (muted, Space Mono)
card-title: Space Mono bold, white
card-body: Inter, muted (#8e8e8e)
card-footer: two columns - label (muted, caps, Space Mono) + value (white, Space Mono)
```

---

## 3. Case Studies — Proven In Production

**Preview:** `preview/Case Studies — Proven In Production.png`
**Design:** Full-page scrollable, black background

### Section Structure

```
HEADER (shared)

BADGE: • [ ENTERPRISE VERIFICATION ]

H1: PROVEN IN PRODUCTION[91]     <- BubbledotICG-FinePos, large

SUBHEAD: How Fortune 500 enterprises, hyperscalers, and autonomous
engineering teams scale mission-critical AI systems.

STAT STRIP (4 metrics in dark pills):
ACTIVE CLUSTER PODS  |  INFERENCE P99  |  TOTAL VERIFIED TOKENS  |  TELEMETRY UPTIME
128,400+             |  11.8ms         |  4.82 PB                |  99.999%

CASE STUDY CARDS (3 items):
Each card: dark surface, left-aligned content + right image

CS_01 // SECURE_RUNTIME
Global FinTech Consortium
[Headline: bold dot-matrix]
+340% Throughput | 14ms Median Latency
[Description] [Tags] [Read Full Report ->]

CS_02 // SYSTEM_FAILOVER
HyperScale Cloud Diagnostics
[Headline]
99.999% SLA | 12M Events/sec
...

CS_03 // NEURAL_SYNTHESIS
Global BioInformatics Research
[Headline]
18x Iteration Speed | 2.4M Context
...

TESTIMONIAL CARD (dark, large):
" BENCHMARK EVALUATION // PRODUCTION AUDIT
[Large quote in BubbledotICG-FinePos]
"Deploying Evolve eliminated our cluster tail latency spikes
overnight. It is the only computational layer we trust
with high-load mission-critical pipelines."
[Author avatar] David Rostova, Lead Infrastructure Architect

VALIDATED ACROSS HYPERSCALERS:
Microsoft | Amazon | Google Cloud

[ Schedule Architecture Audit -> ]

FOOTER (shared)
```

---

## 4. Contact — Initiate Contact

**Preview:** `preview/Contact — Initiate Contact.png`
**Design:** Full-page, 2-column layout

### Section Structure

```
HEADER (shared)

BADGE: • [ DIRECT COMM LINK ]

H1: INITIATE CONTACT           <- BubbledotICG-FinePos, left-aligned

SUBHEAD: Engage our systems engineering team...

2-COLUMN LAYOUT:
+---------------------------+   +----------------------------------+
| LEFT COLUMN:              |   | RIGHT COLUMN:                    |
|                           |   |                                  |
| CLUSTER STATUS CARD       |   | FORM CARD:                       |
| • ALL NODES OPERATIONAL   |   | TRANSMISSION PAYLOAD  SEC-V4.2   |
|   Telemetry Ping  12.4ms  |   | [Full Name] [Work Email]         |
|   Global Compute  99.98%  |   | [Organization] [GPU Hours]       |
|                           |   | [Deployment Topology dropdown]   |
| ENTERPRISE INQUIRIES      |   | [Project Architecture textarea]  |
| engineering@evolve.ai     |   |                                  |
| infra-mesh@evolve.ai      |   | [lock] Zero-retention ephemeral  |
| San Francisco / Zurich /  |   |        routing                   |
| Tokyo                     |   | [Transmit Request ->]            |
|                           |   |                                  |
| COMPLIANCE CARD           |   | CIPHER: AES-GCM-256              |
| SOC2 | ISO 27001 | HIPAA  |   | TOKEN: 0x9AF4B8E1                |
| < 2-hour response time    |   | VERIFIED AGENT                   |
|                           |   |                                  |
| MAP CARD (SF Bay Area)    |   |                                  |
| CORE HUB: SFO-01          |   |                                  |
+---------------------------+   +----------------------------------+

FOOTER (shared)
```

### Form Fields

| Field | Type | Placeholder |
|---|---|---|
| Full Name | text | Elena Rostova |
| Work Email | email | elena@enterprise.io |
| Organization / Enterprise | text | Synthetix Labs |
| Estimated Monthly GPU Hours | select | 5,000 - 50,000 H100 hrs |
| Deployment Topology | select | Multi-Cloud Mesh Architecture |
| Project Architecture & Requirements | textarea | Detail custom latency requirements... |

### Form Field Style
```css
input, textarea, select {
  background: #161617;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 0.75rem;
  color: #ffffff;
  font-family: var(--font-sans);
}
input:focus {
  border-color: #ffffff;
  box-shadow: 0 0 12px rgba(255,255,255,0.2);
}
```

---

## 5. Sign Up — Access The Mesh

**Preview:** `preview/Sign Up — Access The Mesh.png`
**Design:** Centered card, single focus

### Section Structure

```
HEADER (shared)

BADGE: • [ DEVELOPER PREVIEW ] v4.18.0

H1: ACCESS THE MESH            <- BubbledotICG-FinePos, centered

SUBHEAD: Provision your dedicated API keys, spin up autonomous
worker threads, and deploy within minutes.

AUTH CARD (centered dark card):
+------------------------------------------+
| [terminal icon] INITIALIZE_CLUSTER_ID    |
| • SECURE CHANNEL 256                     |
|                                          |
| [GitHub icon]  GitHub  |  G  Google      |
|                                          |
| -------- OR VIA ENTERPRISE CREDENTIALS --|
|                                          |
| WORK EMAIL ADDRESS           PRIMARY KEY |
| [operator@system.mesh.io              ]  |
|                                          |
| ACCESS SECRET (PASSWORD)   ENTROPY: 0 BITS|
| [•••••••••••••••••••              [eye]] |
|                                          |
| CLUSTER SUBDOMAIN HANDLE      DNS POOL   |
| [nexus-node-09                .mesh.io]  |
|                                          |
| [toggle] Agree to Enterprise Terms...   |
|                                          |
| [ Create Cluster Account -> ]           |
|                                          |
| Already running active workers?  Sign In>|
+------------------------------------------+

TRUST STRIP:
• Instant $500 Inference Credits  •  No Hardware Lock-in  •  SOC2 Type II Certified

FOOTER (shared)
```

### Auth Button Style (GitHub / Google)
```css
.auth-btn {
  background: #1c1c1f;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 0.75rem;
  color: #ffffff;
  font-family: var(--font-sans);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.auth-btn:hover {
  background: #252528;
  border-color: rgba(255,255,255,0.25);
}
```

### Toggle Switch Style
```css
.toggle {
  appearance: none;
  width: 2.25rem;
  height: 1.25rem;
  background: #28282a;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 9999px;
  cursor: pointer;
  position: relative;
  transition: background 0.2s;
}
.toggle::after {
  content: '';
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.85rem;
  height: 0.85rem;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.2s;
}
.toggle:checked {
  background: #ffffff;
}
.toggle:checked::after {
  transform: translateX(1rem);
  background: #000;
}
```

---

## Page Comparison Table

| Page | Layout | Primary Font | Key Component | CTA |
|---|---|---|---|---|
| Home | Single viewport, video bg | BubbledotICG-FinePos (hero) | Trust badge + stats | Get Started |
| Product | Scrollable, black | BubbledotICG-FinePos (h1) | Feature cards grid | Deploy Cluster |
| Case Studies | Scrollable, black | BubbledotICG-FinePos (h1) | CS cards + testimonial | Schedule Audit |
| Contact | Scrollable, 2-col | BubbledotICG-FinePos (h1) | Contact form | Transmit Request |
| Sign Up | Centered card | BubbledotICG-FinePos (h1) | Auth form | Create Account |
