# 04 — AI Agents

> 8 specialized AI agents that power this project's development workflow.
> Each agent has a clearly defined role, skill set, and domain boundary.

---

## How Agents Work

Agents are role definitions stored in the `agents/` folder. Each file describes:
- What the agent specializes in
- What tools it can use
- What it MUST NOT do (domain boundary enforcement)
- How it makes decisions

The **Orchestrator** coordinates the other agents. It selects the right specialists, sequences their work, and synthesizes results.

---

## Agent Quick Reference

| Agent | Role | Best Used For |
|---|---|---|
| [Orchestrator](#1-orchestrator) | Coordinator | Complex multi-domain tasks |
| [Frontend Specialist](#2-frontend-specialist) | UI/UX Builder | All HTML, CSS, JS work |
| [Project Planner](#3-project-planner) | Planner | Creating task plans before building |
| [SEO Specialist](#4-seo-specialist) | SEO + GEO | Meta tags, Core Web Vitals, AI search |
| [Performance Optimizer](#5-performance-optimizer) | Speed | Load time, animations, Lighthouse |
| [Security Auditor](#6-security-auditor) | Security | CSP headers, vulnerabilities |
| [Test Engineer](#7-test-engineer) | Testing | Test generation and execution |
| [Documentation Writer](#8-documentation-writer) | Docs | README, comments, API docs |

---

## Agent Selection Guide

```
Task type                             -> Use these agents
--------------------------------------------------------------
Build / redesign UI                   -> frontend-specialist
Plan a new feature                    -> project-planner
Add SEO meta tags                     -> seo-specialist
Improve page load speed               -> performance-optimizer
Add CSP security headers              -> security-auditor
Write/run tests                       -> test-engineer
Write documentation                   -> documentation-writer
Complex task with multiple domains    -> orchestrator (coordinates all)
```

---

## 1. Orchestrator

**File:** `agents/orchestrator.md`
**Role:** Multi-agent coordinator. Decomposes complex tasks, selects the right specialists, sequences work, and synthesizes results.

### When to use
- Tasks that touch multiple domains (e.g., build + test + deploy)
- When you're unsure which agent to call
- When 3+ agents need to cooperate

### Two-Phase Protocol
```
PHASE 1 — Planning (sequential)
  1. project-planner creates PLAN.md
  CHECKPOINT: user approves the plan
  (No other agents during Phase 1)

PHASE 2 — Implementation (parallel after approval)
  Agents run in parallel groups:
  - Foundation: database-architect, security-auditor
  - Core: backend-specialist, frontend-specialist
  - Polish: test-engineer, devops-engineer
```

### Hard Rules
- MINIMUM 3 agents — fewer = not orchestrating, just delegating
- NO specialist agents without a PLAN.md verified first
- Each agent stays in its own domain — no cross-domain work

### Agent Selection Matrix

| Task Type | Required Agents |
|---|---|
| Web App | frontend-specialist, backend-specialist, test-engineer |
| UI/Design | frontend-specialist, seo-specialist, performance-optimizer |
| Full Stack | project-planner, frontend-specialist, backend-specialist, devops-engineer |
| Debug | debugger, explorer-agent, test-engineer |
| Security | security-auditor, penetration-tester, devops-engineer |

---

## 2. Frontend Specialist

**File:** `agents/frontend-specialist.md`
**Role:** Senior Frontend Architect. Builds maintainable HTML/CSS/JS systems with performance-first mindset.

### Domain (CAN do)
- HTML structure and semantic markup
- CSS — layout, animations, design tokens, responsive
- JavaScript — vanilla JS, DOM manipulation, observers
- React/Vue components (for other projects)
- Accessibility implementation
- Design system enforcement

### Domain (CANNOT do)
- Test files (`*.test.js`) — those belong to test-engineer
- API routes or server logic — backend-specialist
- Database schemas — database-architect

### Key Design Rules

**Anti-Generic Design Mandate**
Before writing any CSS, the frontend specialist must internally:
1. Run the "Modern Cliché Scan" — reject Bento Grids, Mesh Gradients, Split Screens
2. Choose a radical topological approach (not centered hero by default)
3. Declare a "Design Commitment" with style name and risk factor

**Automatic Rejection Triggers (Maestro Auditor)**
These will cause the agent to delete and restart:
- Standard 50/50 or 70/30 split layout
- Glassmorphism used without solid borders
- Soft gradient used to make things "pop"
- Content organized in safe rounded grid boxes
- Any shade of default blue/teal as primary color

**The Purple Ban**
Never use purple, violet, indigo, or magenta as primary/brand color — it's the #1 AI design cliché.

### For This Project
This agent works in **vanilla CSS + HTML + JS mode** — no Tailwind, no React. Quality control is:
- HTML validation (no linter needed)
- Manual visual check against preview screenshots
- prefers-reduced-motion compliance
- Mobile breakpoint testing

---

## 3. Project Planner

**File:** `agents/project-planner.md`
**Role:** Smart project planning agent. Breaks requests into tasks, determines file structure, creates dependency graphs, assigns agents.

### When to use
- Before starting any new feature or page
- When a task has multiple interconnected parts
- When you need to know what order to do things

### Output
Creates a plan file in the project root:
- Named `{task-slug}.md` (e.g., `product-page.md`)
- Never uses generic names like `plan.md`
- Contains: overview, tech stack, file structure, task breakdown with INPUT → OUTPUT → VERIFY, verification checklist

### 4-Phase Workflow (BMAD)

| Phase | Name | Code? |
|---|---|---|
| 1 | Analysis — research, explore | NO |
| 2 | Planning — create plan file | NO |
| 3 | Solutioning — architecture design | NO |
| 4 | Implementation — write code | YES |
| X | Verification — test & validate | YES (scripts) |

### Hard Rules
- NO code writing during planning phases
- User must approve the plan before Phase 4 starts
- Must detect OS (Windows/macOS/Linux) and use correct commands

---

## 4. SEO Specialist

**File:** `agents/seo-specialist.md`
**Role:** SEO and GEO (Generative Engine Optimization) expert. Handles traditional search AND AI search visibility.

### Dual Mandate

| Aspect | SEO | GEO |
|---|---|---|
| Goal | Rank in Google | Be cited by ChatGPT/Claude/Perplexity |
| Platform | Google, Bing | AI chat assistants |
| Focus | Keywords, backlinks | Entities, statistics, credentials |

### For This Project
Key tasks:
- `<title>` tag: "Intelligence Designed To Evolve"
- Meta description: accurate 150-160 char summary
- Open Graph tags for social sharing
- `robots.txt` and `sitemap.xml`
- Heading hierarchy (`<h1>` → `<h2>`)
- Image alt text on logo
- Schema.org structured data (Organization, SoftwareApplication)

### Core Web Vitals Targets

| Metric | Target |
|---|---|
| LCP | < 2.5 seconds |
| INP | < 200ms |
| CLS | < 0.1 |

---

## 5. Performance Optimizer

**File:** `agents/performance-optimizer.md`
**Role:** Profile, measure, and optimize speed, animations, and resource loading.

### Philosophy
> "Measure first, optimize second. Profile, don't guess."

### For This Project
Key performance considerations:
- Background video: `autoplay muted loop playsinline` attributes prevent blocking
- Font preconnect links reduce DNS lookup time
- Animations use only `transform` and `opacity` (GPU-accelerated)
- `will-change: transform, opacity` on animated elements
- IntersectionObserver threshold `0.25` for count-up start
- No JavaScript blocking the critical rendering path

### Optimization Decision Tree
```
What's slow?
|
+-- Page load    -> Check video loading, font loading, CSS
+-- Animations   -> Ensure transform/opacity only, no layout properties
+-- CLS high     -> Reserve space for video/images with aspect ratios
+-- INP high     -> Check JS blocking, defer non-critical scripts
```

---

## 6. Security Auditor

**File:** `agents/security-auditor.md`
**Role:** Security review, vulnerability assessment, auth review.

### Domain (CAN do)
- Review code for vulnerabilities
- Check for hardcoded secrets
- Audit external resource loading
- Recommend Content Security Policy (CSP) headers

### Domain (CANNOT do)
- Write feature code or UI components
- Modify application logic

### For This Project (Static Page)
Relevant security tasks:
- Subresource Integrity (SRI) hashes on CDN links (Font Awesome already has it)
- Content Security Policy headers via `.htaccess` or server config
- `crossorigin="anonymous" referrerpolicy="no-referrer"` on external resources
- No secrets or API keys in HTML/JS
- Video URL is CloudFront (HTTPS) — acceptable

---

## 7. Test Engineer

**File:** `agents/test-engineer.md`
**Role:** Test generation, test execution, and coverage analysis.

### Domain (CAN do)
- Write test files (`*.test.js`, `__tests__/`)
- Run existing tests
- Identify missing test coverage

### Domain (CANNOT do)
- Modify production code
- Write business logic

### For This Project (Static Page)
Manual testing scope (no framework needed):
- Cross-browser check: Chrome, Firefox, Safari, Edge
- Responsive: 320px, 420px, 720px, 1024px, 1440px
- Video loads and loops on all browsers
- Count-up animation triggers on scroll/intersection
- Mobile menu open/close all triggers work
- Font renders correctly (BubbledotICG-FinePos)
- Reduced motion mode shows static final state

---

## 8. Documentation Writer

**File:** `agents/documentation-writer.md`
**Role:** README, API docs, code comments, architecture documentation.

### IMPORTANT: Only invoke when explicitly requested
This agent should NEVER be auto-invoked. Only use when the user specifically asks for documentation.

### Domain (CAN do)
- Write markdown documentation
- Add JSDoc comments to code
- Create README files
- Document API endpoints

### Domain (CANNOT do)
- Write business logic or code
- Make architectural decisions

---

## Agent Boundary Map

```
frontend-specialist   -> components/, *.html, *.css, *.js (non-test)
test-engineer         -> *.test.js, __tests__/
security-auditor      -> audit review only, no production files
seo-specialist        -> meta tags, robots.txt, sitemap.xml
performance-optimizer -> profiling and optimization, no new features
project-planner       -> *.md plan files only, no code
documentation-writer  -> *.md docs only, no code (explicit request only)
```

---

## Minimum Agent Count Rule

When using the Orchestrator, you MUST invoke at least 3 different agents.

```
< 3 agents = delegation, not orchestration -> FAIL
>= 3 agents = true orchestration -> PASS
```
