# Crecy AI — Build Progress Tracker

Living checklist for executing [`CRECY_AI_MASTER_PLAN_v1.1.md`](./CRECY_AI_MASTER_PLAN_v1.1.md).
Tick boxes as work lands on `main`. Each phase mirrors the plan's Build Roadmap (§22),
Acceptance Criteria (§23), and Final Build Checklist (§24).

**Legend:** `[x]` done · `[~]` in progress / partial · `[ ]` not started
**Last updated:** 2026-06-02

## Status at a glance

| # | Phase | Status |
|---|---|:--:|
| PR-0 | Master plan & spec | ✅ |
| — | Design system | ✅ |
| — | Marketing landing page (static) | 🟡 visual only |
| PR-1 | Database + retrieval foundation | ⬜ |
| PR-2 | Business onboarding | ⬜ |
| PR-3 | Knowledge setup + embeddings | ⬜ |
| PR-4 | AI preview chat (grounded retrieval) | ⬜ |
| PR-5 | Embeddable widget | ⬜ |
| PR-6 | Lead inbox / mini-CRM | ⬜ |
| PR-7 | Quote templates | ⬜ |
| PR-8 | Billing & limits | ⬜ |
| PR-9 | Admin + eval harness | ⬜ |
| PR-10 | Marketing site (wired) | 🟡 |

**Overall: ~2 of 11 build phases complete. Spec + design + a static brochure exist; the product (DB, AI, widget, dashboard, billing) is not built yet.**

---

## Foundations (done)

### PR-0 — Master plan & spec ✅
- [x] Problem framing, six agents, MVP boundary
- [x] Retrieval/RAG pipeline defined (§10)
- [x] Unit economics & margin model (§13)
- [x] Lead scoring rubric (§15)
- [x] AI eval harness + SLOs (§16)
- [x] Schema, API contracts, security, compliance
- [x] GTM / pilot plan (§21)

### Design system ✅
- [x] Theme: warm-neutral canvas + emerald accent, light/spacious/rounded
- [x] `design/DESIGN_SYSTEM.md`, `design/tailwind.config.js`, `design/tokens.css`
- [x] Lead-score colors mapped to plan §15

---

## Build phases (to do)

> Stack assumption (to confirm before PR-1): **Next.js + Supabase (Postgres + pgvector + RLS)**.

### PR-1 — Database + retrieval foundation ⬜  *(critical path)*
- [ ] 13 tables created (`ai_businesses` … `ai_eval_runs`) per §11
- [ ] RLS policies: owner / public-widget / admin / service role
- [ ] `pgvector` enabled; `embedding` + `tsv` columns on `ai_agent_knowledge`
- [ ] HNSW (vector) + GIN (full-text) indexes
- [ ] Usage + entitlements tables (`included_conversations`, `overage_rate_cents`)
- [ ] Seed migration runs cleanly on a fresh Supabase project

### PR-2 — Business onboarding ⬜
- [ ] Create business profile
- [ ] Choose problem / industry template
- [ ] Create first agent (mode, tone, greeting)

### PR-3 — Knowledge setup + embeddings ⬜
- [ ] Add services, FAQs, policies, pricing notes, hours, service area
- [ ] Embedding **and** `tsv` generated on every knowledge write

### PR-4 — AI preview chat (grounded retrieval) ⬜  *(critical path)*
- [ ] Engine functions (`detectIntent`, `extractLeadFields`, …) with model tiering (§9)
- [ ] Hybrid search (pgvector + tsvector) → rerank top-20→5
- [ ] "Answer + Source" grounding; `cited_knowledge_ids` stored
- [ ] No-answer threshold → handoff (`RETRIEVAL_MIN_SCORE`)
- [ ] Prompt-injection defense (visitor input = data, not instructions)
- [ ] Owner can test agent in dashboard; usage logged

### PR-5 — Embeddable widget ⬜
- [ ] Real `widget.js` loads async via one script tag
- [ ] Shadow DOM + `tokens.css`; owner `theme_color` override
- [ ] `GET /api/ai/widget/config` validates domain + public key
- [ ] `POST /api/ai/widget/message` runs grounded AI
- [ ] Restores conversation after page reload
- [ ] Falls back to contact form on error / usage limit

### PR-6 — Lead inbox / mini-CRM ⬜
- [ ] Lead saved with transcript, summary, contact, need, location, urgency
- [ ] Lead score + `score_breakdown` (rubric §15); Hot/Warm/Cool chips
- [ ] Lead detail: transcript, structured intake, notes, status, follow-up draft
- [ ] Owner notification on new lead (Resend email; Twilio SMS on Growth+)

### PR-7 — Quote templates ⬜
- [ ] ≥6 industry templates with structured intake (cleaning, home services, detailing, beauty, rentals, IT, car rental)
- [ ] Quote Assistant builds structured quote-ready summary
- [ ] No exact pricing unless pricing rules configured

### PR-8 — Billing & limits ⬜
- [ ] Stripe subscriptions (Free/Starter/Growth/Pro/Agency)
- [ ] Included bundle + metered overage at posted rates (§13/§14)
- [ ] Billable "conversation" enforced (24h / 20-msg / token caps)
- [ ] Usage-limit → fallback form; past-due → pause AI after grace

### PR-9 — Admin + eval harness ⬜
- [ ] Admin views: businesses, agents, conversations, leads, usage, errors, abuse
- [ ] Eval pyramid: citation-validity (every commit) + golden-set regression gate
- [ ] Published SLOs visible (hallucination <1%, citation 100%, refusal >95%, handoff >90%, p95 <3s)
- [ ] LLM judge validated against human-labeled set
- [ ] `/ai/quality` dashboard

### PR-10 — Marketing site 🟡
- [x] Problem-based page, six agent cards, pricing, hero, proof band, widget mock
- [x] Deployed live (Vercel) on the design theme
- [ ] Real copy + real metrics (replace placeholder stats / testimonials)
- [ ] Working signup CTA wired to the app
- [ ] Logo/wordmark, favicon, OG/social-share meta + preview image
- [ ] Custom domain `crecyai.app` (verify availability first)

---

## International expansion (OPTIONAL — post-pilot, do not start before PR-1…PR-9)

Research & ranking complete — see [`INTERNATIONAL_EXPANSION.md`](./INTERNATIONAL_EXPANSION.md).
**Lead market: UAE.** Keep these as cheap architectural options now; execute only after the domestic pilot works.
- [x] Market research: payments + SaaS-operation law across 12 markets, ranked
- [ ] Payments abstraction (MoR adapter: Paddle/dLocal + per-market processor; don't hard-wire Stripe)
- [ ] WhatsApp Business Cloud API channel (primary channel internationally)
- [ ] i18n + RTL (Arabic-first) language support
- [ ] Arabic-first model tier via `model_provider`/`model_name` (Jais/Falcon-H1)
- [ ] Per-market tax/data config (VAT rate, B2B-reverse-charge flag, retention/representative) as data
- [ ] Phase 0 validation via Merchant-of-Record (no entity) in 2–3 target markets
- [ ] UAE free-zone entity + bank account + Stripe/local rails (see UAE checklist in the appendix)

## Pilot-ready gate

Per plan §22, **pilot-ready = PR-1…PR-9 complete with eval SLOs green.** Then:
- [ ] 5–10 cleaning businesses onboarded (beachhead vertical)
- [ ] North-Star tracked: businesses with ≥1 captured lead in first 7 days
- [ ] Success signal: ≥50 conversations, ≥10 qualified leads, ≥2 paying
- [ ] Margin signal: measured AI cost/customer below plan revenue
