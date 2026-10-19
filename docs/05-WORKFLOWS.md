# 05 — Workflows

> 11 slash-command workflows that drive the development lifecycle.
> Workflows are stored in the `workflows/` folder and triggered by commands like `/create`, `/plan`, `/debug`.

---

## Table of Contents

1. [How Workflows Work](#how-workflows-work)
2. [Workflow Quick Reference](#workflow-quick-reference)
3. [Creation & Planning](#creation--planning-workflows)
4. [Development](#development-workflows)
5. [Quality & Operations](#quality--operations-workflows)
6. [Advanced](#advanced-workflows)
7. [Workflow Decision Tree](#workflow-decision-tree)

---

## How Workflows Work

Workflows are markdown files in `workflows/` with a YAML frontmatter `description`. Each defines:
- A purpose
- Step-by-step behavior
- Which agents to invoke
- Expected output format

They are triggered by typing `/commandname` in the chat. The agent reads the workflow file and follows its instructions.

---

## Workflow Quick Reference

| Command | File | Purpose | Uses Agents? |
|---|---|---|---|
| `/create` | `create.md` | Build a new feature or app | YES — project-planner, frontend-specialist |
| `/plan` | `plan.md` | Create a plan file (no code) | YES — project-planner only |
| `/enhance` | `enhance.md` | Add or update features | YES — relevant specialists |
| `/debug` | `debug.md` | Investigate and fix issues | YES — debugger |
| `/test` | `test.md` | Generate or run tests | YES — test-engineer |
| `/deploy` | `deploy.md` | Production deployment | YES — devops-engineer |
| `/preview` | `preview.md` | Manage local dev server | NO — runs scripts |
| `/brainstorm` | `brainstorm.md` | Explore options before building | NO — ideas only |
| `/status` | `status.md` | Show project + agent status | NO — reads state |
| `/orchestrate` | `orchestrate.md` | Coordinate 3+ agents | YES — minimum 3 |
| `/ui-ux-pro-max` | `ui-ux-pro-max.md` | Advanced design research | YES — frontend-specialist |

---

## Creation & Planning Workflows

### /create — Build Application

**File:** `workflows/create.md`
**Use when:** You want to build something new from scratch.

**Steps:**
1. Analyze what the user wants to build
2. Use `project-planner` to create a task plan
3. Wait for user approval of the plan
4. Coordinate `frontend-specialist` (UI), `backend-specialist` (API), `database-architect` (schema)
5. Start local preview when complete

**Examples:**
```
/create landing page for AI product
/create sign-up page with GitHub auth
/create product features page
/create case studies page with cards
```

**Output:** Working code files + running local preview URL

---

### /plan — Create Plan Only (No Code)

**File:** `workflows/plan.md`
**Use when:** You want to think through a task before building it.

**Critical rules:**
- NO code writing — plan file only
- Plan file named `{task-slug}.md` based on task keywords
- Must ask clarifying questions (Socratic Gate) before planning

**Plan file naming examples:**
```
"product features page"  -> product-features.md
"add dark mode"          -> dark-mode.md
"fix mobile menu bug"    -> mobile-menu-fix.md
```

**Output:** `{task-slug}.md` in project root with:
- Overview + success criteria
- Tech stack decisions
- File structure layout
- Task breakdown with INPUT → OUTPUT → VERIFY per task
- Phase X verification checklist

---

### /brainstorm — Explore Options

**File:** `workflows/brainstorm.md`
**Use when:** You're unsure which approach to take and want to see multiple options before committing.

**Key principle:** No code — ideas only. Presents options A/B/C with pros/cons/effort, then recommends one.

**Output format:**
```
## Brainstorm: [Topic]

Option A: [Name]
  Pros: ...
  Cons: ...
  Effort: Low/Medium/High

Option B: [Name]
  ...

Recommendation: Option X because [reasoning]
```

**Examples:**
```
/brainstorm animation approach for hero headline
/brainstorm how to handle video fallback
/brainstorm mobile nav pattern
```

---

## Development Workflows

### /enhance — Update Existing Code

**File:** `workflows/enhance.md`
**Use when:** Adding features or modifying existing pages/components.

**Steps:**
1. Load current project state
2. Plan what will change (files added/modified)
3. For major changes: show plan and ask "Should I start?"
4. Apply changes using relevant agents
5. Hot reload or restart preview

**Caution rules:**
- Get explicit approval before major changes
- Warn on conflicting requests (e.g., "add React" to a vanilla JS project)

**Examples:**
```
/enhance add mobile menu close animation
/enhance improve stats count-up easing
/enhance add Open Graph meta tags
/enhance make header sticky on scroll
```

---

### /debug — Investigate Problems

**File:** `workflows/debug.md`
**Use when:** Something is broken and you need to find and fix the root cause.

**Process:**
1. Gather: error message, reproduction steps, recent changes
2. Hypothesize: list possible causes ordered by likelihood
3. Test each hypothesis systematically
4. Apply fix + explain root cause
5. Add prevention (test, validation, comment)

**Output format:**
```
## Debug: [Issue]
1. Symptom: [what's happening]
2. Information: [error, file, line]
3. Hypotheses: [ordered list]
4. Investigation: [what was tested]
5. Root Cause: [why it happened]
6. Fix: [before/after code]
7. Prevention: [how to avoid next time]
```

**Examples:**
```
/debug video not loading on mobile
/debug count-up not triggering
/debug font not rendering in Safari
/debug mobile menu not closing on Escape
```

---

## Quality & Operations Workflows

### /test — Generate & Run Tests

**File:** `workflows/test.md`
**Use when:** You want to write or run tests for specific code.

**Sub-commands:**
```
/test                    -> run all tests
/test [feature/file]     -> generate tests for that target
/test coverage           -> show coverage report
/test watch              -> watch mode
```

**For this static project** (no test framework):
```
/test mobile menu        -> manual test checklist for mobile menu
/test cross-browser      -> browser compatibility checklist
/test animations         -> animation behavior verification
/test accessibility      -> keyboard + screen reader check
```

**Test pattern used:** Arrange → Act → Assert

---

### /deploy — Production Deployment

**File:** `workflows/deploy.md`
**Use when:** Ready to push to production.

**Sub-commands:**
```
/deploy          -> interactive deployment wizard
/deploy check    -> pre-deployment checks only
/deploy preview  -> deploy to staging
/deploy production -> deploy to production
/deploy rollback -> rollback to previous version
```

**Pre-deployment checklist:**
- No hardcoded secrets or API keys
- All external resources use HTTPS
- Font Awesome SRI hash present
- Images optimized (logo.webp)
- Video URL pointing to CloudFront (not local)
- Meta tags complete

**Supported platforms:**
| Platform | Command |
|---|---|
| Vercel | `vercel --prod` |
| Netlify | drag & drop or `netlify deploy --prod` |
| GitHub Pages | push to `gh-pages` branch |
| Cloudflare Pages | push to main branch |

---

### /preview — Local Server Management

**File:** `workflows/preview.md`
**Use when:** Starting, stopping, or checking the local dev server.

**Commands:**
```
/preview          -> show current status
/preview start    -> start local server
/preview stop     -> stop server
/preview restart  -> restart
/preview check    -> health check
```

**For a static HTML project:**
```bash
# Using Python (built-in):
python -m http.server 3000

# Using Node.js (npx serve):
npx serve .

# Using VS Code Live Server extension
```

---

### /status — Project Status

**File:** `workflows/status.md`
**Use when:** You want a snapshot of what's been built, what's pending, and what agents are doing.

**Output includes:**
- Project name, type, tech stack
- Completed features vs pending tasks
- Files created/modified count
- Agent status (which agents completed which tasks)
- Preview server URL + health

---

## Advanced Workflows

### /orchestrate — Multi-Agent Coordination

**File:** `workflows/orchestrate.md`
**Use when:** A complex task needs 3+ agents with different expertise to cooperate.

**The Strict Protocol:**

```
PHASE 1 — Planning (sequential)
  -> project-planner creates PLAN.md
  -> STOP and show plan to user
  -> Wait for user to say YES

PHASE 2 — Implementation (parallel)
  -> Invoke agents in parallel groups:
     Foundation: security-auditor
     Core: frontend-specialist
     Polish: test-engineer, seo-specialist, performance-optimizer

EXIT GATE before completing:
  -> Count agents invoked: must be >= 3
  -> Verification scripts ran
  -> Orchestration Report generated
```

**Output: Orchestration Report**
```
## Orchestration Report

### Agents Invoked (minimum 3)
| # | Agent | Focus | Status |
|---|---|---|---|
| 1 | project-planner | Task breakdown | DONE |
| 2 | frontend-specialist | UI implementation | DONE |
| 3 | seo-specialist | Meta tags + schema | DONE |

### Key Findings
...

### Deliverables
- [x] PLAN.md created
- [x] Code implemented
- [x] Tests passing
```

---

### /ui-ux-pro-max — Advanced Design Research

**File:** `workflows/ui-ux-pro-max.md`
**Use when:** You want maximum design quality — researching styles, typography, color, UX patterns before implementing.

**Search domains:**
| Domain | Use For |
|---|---|
| `product` | Product type recommendations (SaaS, landing page, etc.) |
| `style` | UI styles — glassmorphism, minimalism, dark mode |
| `typography` | Font pairings with Google Fonts imports |
| `color` | Color palettes by industry/emotion |
| `landing` | Page structure, hero strategies, CTA patterns |
| `ux` | Best practices, animation rules, accessibility |

**Pre-delivery checklist from this workflow:**
- [ ] No emojis used as icons
- [ ] All icons from consistent icon set
- [ ] Hover states don't cause layout shift
- [ ] All clickable elements have cursor-pointer
- [ ] Transitions are 150-300ms
- [ ] Focus states visible for keyboard nav
- [ ] Responsive at 320px, 768px, 1024px, 1440px
- [ ] prefers-reduced-motion respected

---

## Workflow Decision Tree

```
I want to...
|
+-- Start a new page/feature
|   +-- I don't know the approach yet   -> /brainstorm
|   +-- I know the approach             -> /plan -> then /create
|
+-- Update existing code                -> /enhance
|
+-- Fix a bug                           -> /debug
|
+-- Write or run tests                  -> /test
|
+-- Deploy to production                -> /deploy check -> /deploy production
|
+-- See what's happening                -> /status
|
+-- Start local preview                 -> /preview start
|
+-- Complex task, multiple domains      -> /orchestrate
|
+-- Maximum design quality              -> /ui-ux-pro-max
```
