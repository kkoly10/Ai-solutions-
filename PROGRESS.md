# Crecy AI — Build Progress Tracker

Living checklist for executing the plan. **Strategy: INTERNATIONAL-FIRST** (see
[`INTERNATIONAL_FIRST_BUILD.md`](./INTERNATIONAL_FIRST_BUILD.md)) — WhatsApp-first, Merchant-of-Record
payments, multilingual, with the US deprioritized to a later option. Core spec:
[`CRECY_AI_MASTER_PLAN_v1.1.md`](./CRECY_AI_MASTER_PLAN_v1.1.md); market research:
[`INTERNATIONAL_EXPANSION.md`](./INTERNATIONAL_EXPANSION.md).

**Legend:** `[x]` done · `[~]` partial · `[ ]` not started
**Last updated:** 2026-06-02

## Status at a glance

| # | Phase | Status |
|---|---|:--:|
| PR-0 | Master plan & spec | ✅ |
| — | Design system | ✅ |
| — | International research + build strategy | ✅ |
| — | Marketing landing page (static, US-style) | 🟡 to be localized |
| PR-1 | Database + retrieval foundation (+ locale/channel) | ⬜ |
| PR-2 | Onboarding (+ market/language/currency) | ⬜ |
| PR-3 | Knowledge + multilingual embeddings | ⬜ |
| PR-4 | AI engine + grounded retrieval (multilingual) | ⬜ |
| PR-5 | **WhatsApp channel (PRIMARY)** | ⬜ |
| PR-5b | Web widget (secondary) | 🟡 designed only |
| PR-6 | Lead inbox / mini-CRM | ⬜ |
| PR-7 | Localized quote templates | ⬜ |
| PR-8 | Billing via Merchant-of-Record | ⬜ |
| PR-9 | Admin + per-language eval harness | ⬜ |
| PR-10 | Localized marketing + click-to-WhatsApp | 🟡 |

**Overall: spec + design + international strategy done; product not built. First locale/GTM target pending one input (your base + languages).**

---

## Foundations (done)

### PR-0 — Master plan & spec ✅
- [x] Problem framing, six agents, MVP boundary, retrieval/economics/evals/lead-scoring/GTM

### Design system ✅
- [x] Warm-neutral + emerald theme; `design/` tokens + Tailwind config
- [ ] RTL variant (for Arabic markets) — fast-follow when a GCC market is chosen

### International research + build strategy ✅
- [x] 12-market payments + SaaS-law ranking (UAE #1; Indonesia/PH/Mexico tier)
- [x] Channel-agnostic core + adapter architecture defined
- [x] WhatsApp-first, MoR-first, i18n/RTL approach

### Decision pending
- [ ] **First locale + GTM beachhead** — needs: where you're based + languages you can support. Default if unset: English+Spanish, Mexico-first, Arabic/UAE fast-follow.

---

## Build phases (international-first)

> Stack assumption (confirm before PR-1): **Next.js + Supabase (Postgres + pgvector + RLS)**.

### PR-1 — Database + retrieval foundation ⬜  *(critical path)*
- [ ] 13 tables + RLS (owner / public / admin / service)
- [ ] `pgvector` + `tsv` on `ai_agent_knowledge`; HNSW + GIN indexes
- [ ] **`markets` config table** (language, currency, VAT rate, `b2b_reverse_charge`, data rules, default channel, model tier)
- [ ] **Channel + WhatsApp identifiers** on `ai_conversations` (channel, wa_phone_number_id, wa_contact)
- [ ] Usage + entitlements (incl. WhatsApp-fee + MoR-fee cost fields)

### PR-2 — Onboarding ⬜
- [ ] Create business; choose **market + language + currency**
- [ ] Choose problem / industry template (localized); create first agent

### PR-3 — Knowledge + multilingual embeddings ⬜
- [ ] Add knowledge; **multilingual embedding** + `tsv` on write

### PR-4 — AI engine + grounded retrieval ⬜  *(critical path)*
- [ ] Engine functions + model tiering; **multilingual replies**; Arabic-first tier option
- [ ] Hybrid search → rerank → grounded "Answer + Source"; `RETRIEVAL_MIN_SCORE` → handoff
- [ ] Prompt-injection defense; **per-language eval set**

### PR-5 — WhatsApp channel (PRIMARY) ⬜  *(the international MVP surface)*
- [ ] WhatsApp Business Cloud API webhook (inbound) + send (outbound)
- [ ] Phone-number provisioning + business verification
- [ ] Opt-in handling, **template-message approval**, 24-hour service-window logic
- [ ] Map WhatsApp conversation ↔ core conversation/lead
- [ ] Fallback behavior on usage limit / error

### PR-5b — Web widget (secondary) 🟡
- [x] Visual design + tokens (`design/`) and static mock
- [ ] Real `widget.js`, shadow DOM, config + message APIs (reuse core)

### PR-6 — Lead inbox / mini-CRM ⬜
- [ ] Lead saved w/ transcript, summary, contact, need, urgency; score + breakdown (§15)
- [ ] Lead detail (transcript, intake, notes, status, follow-up draft, cited knowledge)
- [ ] Owner notification (channel-appropriate)

### PR-7 — Localized quote templates ⬜
- [ ] ≥6 industry templates with structured intake, **localized per market**
- [ ] Structured quote-ready summary; no exact pricing unless rules configured

### PR-8 — Billing via Merchant-of-Record ⬜
- [ ] MoR adapter (Paddle/Lemon Squeezy or dLocal/EBANX); abstracted payment interface
- [ ] Per-market VAT/pricing (purchasing-power tiers); B2B reverse-charge handling
- [ ] Included bundle + overage; conversation caps; past-due → pause AI

### PR-9 — Admin + eval harness ⬜
- [ ] Admin views (businesses, agents, conversations, leads, usage, errors, abuse)
- [ ] Eval pyramid + **per-language** SLOs (hallucination <1%, citation 100%, refusal >95%, handoff >90%, p95 <3s)
- [ ] Judge validated; `/ai/quality` dashboard

### PR-10 — Localized marketing ⬜
- [x] Static landing page (US-style) deployed
- [ ] Localized copy (per beachhead language) + local pricing
- [ ] **Click-to-WhatsApp** CTA; logo/favicon/OG meta
- [ ] Custom domain

---

## Economics re-model (do alongside PR-8)
- [ ] Per-market unit cost = LLM + **WhatsApp per-conversation fee** + MoR fee (~5%) vs local-currency price
- [ ] Purchasing-power-adjusted tiers per beachhead market

## Pilot-ready gate
**Pilot-ready = PR-1…PR-9 complete with eval SLOs green (in the beachhead language).** Then:
- [ ] 5–10 businesses onboarded in the beachhead market (WhatsApp-first)
- [ ] North-Star: businesses with ≥1 captured lead in first 7 days
- [ ] Success: ≥50 conversations, ≥10 qualified leads, ≥2 paying (local currency)
- [ ] Margin: measured cost/customer (incl. WhatsApp + MoR fees) below plan revenue
