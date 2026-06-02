# Crecy AI — Design System

**Theme:** Trustworthy & professional · Warm-neutral canvas + one bold accent · Light, spacious, rounded.
**Status:** v1 — build-of-record for visual design. Tokens live in
[`tailwind.config.js`](./tailwind.config.js) (dashboard/marketing) and
[`tokens.css`](./tokens.css) (embeddable widget).

---

## 1. Design principles

1. **Trust before flash.** The buyer is a non-technical owner deciding whether this is *safe to
   pay for*. Calm, legible, business-grade beats a neon "AI toy."
2. **Leads are the hero.** The one bold accent (emerald) is reserved for the product's wins —
   primary actions and *lead captured / hot lead* moments — so the eye goes to value, not chrome.
3. **The canvas is warm, not cold.** Warm "sand" neutrals (cream/stone) make a business tool feel
   approachable without being childish. No pure-white, no cold gray.
4. **Space is a feature.** Generous whitespace and rounded surfaces make a few-leads-a-day workflow
   feel effortless and uncluttered.
5. **The widget blends; the dashboard leads.** On a customer's site the widget is neutral and
   owner-themable. In the dashboard our brand can lead.

---

## 2. Color

### Foundation — warm neutral ("sand")
The dominant palette. Backgrounds, text, borders.

| Token | Hex | Use |
|---|---|---|
| `sand-50` | `#FAF8F4` | App canvas / page background |
| `sand-100` | `#F4F1EA` | Muted surface, hover fill |
| `sand-200` | `#ECE7DD` | Subtle divider |
| `sand-300` | `#DED7C9` | Border |
| `sand-600` | `#6F665A` | Muted text |
| `sand-700` | `#4A4339` | Body text |
| `sand-900` | `#1B1813` | Headings / warm near-black |
| `surface` | `#FFFFFF` | Cards, panels (sit on the sand canvas) |

### Bold accent — emerald ("brand")
The **only** brand color. Primary actions + success/lead-captured. Used sparingly.

| Token | Hex | Use |
|---|---|---|
| `brand-50` | `#ECFDF5` | Accent-soft backgrounds, hot-lead chip bg |
| `brand-500` | `#10B981` | Focus ring |
| `brand-600` | `#059669` | **Primary button, links on light** |
| `brand-700` | `#047857` | Hover / active, text on light |
| `brand-900` | `#064E3B` | Text on brand-tinted surfaces |

### Semantic (minimal, so the accent stays dominant)
- **Warning / warm-lead:** `warning-600 #D97706` on `warning-50 #FFFBEB`.
- **Danger:** `danger-600 #DC2626` on `danger-50 #FEF2F2`.
- **Info / neutral:** use sand tones — we deliberately introduce **no blue**, to protect the single accent.

### Lead-score chips → ties to plan §15
The design encodes the lead rubric so the dashboard reads at a glance:

| Score | Label | Foreground | Background |
|---|---|---|---|
| > 70 | **Hot** | `brand-700` | `brand-50` |
| 40–70 | **Warm** | `warning-700` | `warning-50` |
| < 40 | **Cool** | `sand-600` | `sand-100` |

### Accessibility
All text/background pairs meet **WCAG AA (≥4.5:1 body, ≥3:1 large)**. Notably: body text uses
`sand-700`/`sand-900` on `sand-50`/white (passes); accent **links/labels use `brand-700`**, not
`brand-600`, for AA on white; primary buttons use white on `brand-600` (passes for ≥16px/medium).
Never convey state by color alone — pair lead-score color with the text label.

---

## 3. Typography

| Role | Family | Notes |
|---|---|---|
| Marketing display | **Fraunces** (serif) | Warm, optical serif for landing-page headlines — adds trust + personality. Marketing only. |
| App UI & body | **Inter** (sans) | Dashboard, widget, all UI. Humanist, highly legible. |
| Mono | **JetBrains Mono** | Install snippets, API keys, code. |

**Scale** (base 16px / 1rem):

| Step | Size / line-height | Use |
|---|---|---|
| Display | 48–60px / 1.05, Fraunces | Marketing hero |
| H1 | 30px / 1.2 | Page title |
| H2 | 24px / 1.25 | Section |
| H3 | 20px / 1.3 | Card title |
| Body-lg | 18px / 1.6 | Marketing body |
| Body | 16px / 1.6 | App default |
| Small | 14px / 1.5 | Secondary, table cells |
| Caption | 12px / 1.4 | Labels, chips, meta |

Weights: 400 body, 500 UI labels/buttons, 600 headings. The widget uses a **system-font stack
first** (Inter optional) so it never blocks the host page on a webfont.

---

## 4. Shape, space, elevation

- **Radius (rounded):** `sm 8 · default/md 12 · lg 16 · xl 20 · 2xl 24 · full`. Controls = 12px,
  cards & chat bubbles = 16–24px, launcher/pills/avatars = full.
- **Spacing:** 4px base scale (4/8/12/16/24/32/48/64). Cards `p-6`→`p-8`; section rhythm `py-12`→`py-20`
  on marketing. Page container `max-w-content` (72rem) with generous gutters.
- **Elevation (soft, warm-tinted):** shadows use warm near-black `rgba(28,24,19,…)`, never pure
  black. `sm` for cards, `md` for popovers/menus, `lg` for modals, `widget` for the floating panel.
- **Borders:** 1px `sand-300`; prefer a border *or* a soft shadow, rarely both.

---

## 5. Core components (token recipes)

- **Primary button:** `bg-brand-600 text-white rounded-md px-4 h-10 font-medium`,
  hover `bg-brand-700`, focus `ring-2 ring-brand-500 ring-offset-2 ring-offset-sand-50`.
- **Secondary button:** `bg-surface text-sand-800 border border-sand-300 rounded-md`,
  hover `bg-sand-100`.
- **Ghost button:** `text-sand-700` hover `bg-sand-100`.
- **Input:** `bg-surface border border-sand-300 rounded-md h-10 px-3 text-sand-800`,
  placeholder `sand-400`, focus `border-brand-500 ring-2 ring-brand-500/30`.
- **Card:** `bg-surface rounded-2xl shadow-sm p-6` (no hard border needed on the sand canvas).
- **Badge / chip:** `rounded-full px-2.5 h-6 text-caption font-medium` + lead-score colors above.
- **Toast — "Lead captured 🎉":** `bg-brand-600 text-white rounded-lg shadow-md` — the brand's
  signature win moment.
- **Nav (dashboard):** sand-50 canvas, `surface` sidebar, active item `bg-brand-50 text-brand-700`.

---

## 6. The widget (embeddable, on customer sites)

The widget is the product's public face on *someone else's* website, so it has stricter rules:

- **Isolation:** render in a **Shadow DOM**; load [`tokens.css`](./tokens.css) onto `:host`. Host
  styles can't leak in; ours can't leak out.
- **Neutral by default, owner-themable:** everything is sand/white except the accent. The owner's
  `theme_color` (schema: `ai_widget_installs.theme_color`) overrides `--crecy-accent` at runtime;
  default is `brand-600`. So the widget matches each business's brand, not ours.
- **Geometry:** launcher = `full`-radius circle, `60px`, default bottom-right (`widget_position`
  configurable). Panel = `384px` wide, `2xl` radius, `shadow-widget`; on mobile it becomes a
  full-width bottom sheet.
- **Chat bubbles:** visitor = `sand-100` text `sand-800`; assistant = `surface` with a thin
  `sand-200` border; rounded `2xl` with one squared corner toward the sender.
- **States** (per plan §7) each get a clear visual: greeting, open chat, lead-capture form, quote
  intake, **handoff** (calm warm-neutral, not alarming), conversation complete, plan-limit fallback,
  error fallback.
- **Grounded-answer affordance [plan §10]:** when `grounded: true`, optionally show a small
  "Answered from {business} info" line — reinforces trust. Never expose raw sources/IDs.
- **Performance & a11y:** async, system-font-first, `prefers-reduced-motion` respected (see
  tokens.css), full keyboard support, visible focus ring, `aria-live` on new messages, AA contrast.
- **Branding:** Free/Starter show a subtle "⚡ Powered by Crecy AI" footer (`show_branding`) — the
  built-in referral surface from the GTM plan (§21).

---

## 7. Motion

Subtle and quick: `--crecy-duration 180ms`, ease `cubic-bezier(0.2,0.8,0.2,1)`. Launcher hover
lift, panel slide-up + fade on open, message bubbles fade-in. All motion collapses to 0ms under
`prefers-reduced-motion`.

---

## 8. How this maps to the build

- **Dashboard / marketing (Next.js):** import `theme.extend` from `tailwind.config.js`; load Inter +
  Fraunces (Fraunces only on marketing routes).
- **Widget (standalone bundle):** ship `tokens.css` into the shadow root; no Tailwind, no webfont
  blocking.
- **Single source of truth:** the two files carry identical values. If a token changes, change both
  (a future step can generate `tokens.css` from the Tailwind theme to keep them in lockstep).
