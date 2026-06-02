# Crecy AI — International-First Build Strategy

**Decision (June 2026):** Prioritize **emerging/foreign markets over the US**. US competition for a
six-agent SMB AI product is brutal; the underserved markets in
[`INTERNATIONAL_EXPANSION.md`](./INTERNATIONAL_EXPANSION.md) are a better first beachhead. The US
becomes a *later* option, not the launch target.

> **Key reassurance:** this is **not a rewrite**. The core of Crecy AI — AI engine, grounded
> retrieval, knowledge base, lead/CRM, admin — is channel- and language-agnostic. Going
> international-first changes the layers *around* the core: **channel, payments, and locale.**
> We build the core once and make those three pluggable.

---

## Architecture: channel-agnostic core + 3 adapters

```
                ┌─────────────────────────────────────────────┐
                │              CRECY AI CORE                    │
                │  AI engine · grounded RAG · knowledge base    │
                │  lead scoring · mini-CRM · admin · evals      │   (build once)
                └───────▲─────────────▲─────────────▲──────────┘
                        │             │             │
        ┌───────────────┴──┐  ┌───────┴───────┐  ┌──┴──────────────┐
        │ CHANNEL adapter  │  │ PAYMENTS adapt│  │ LOCALE adapter   │
        │ WhatsApp (1st)   │  │ MoR (1st)     │  │ language + RTL   │
        │ web widget (2nd) │  │ Stripe/local  │  │ currency         │
        │ Zalo/IG (later)  │  │ (later)       │  │ templates + tax  │
        └──────────────────┘  └───────────────┘  └──────────────────┘
```

"Which country" becomes **configuration** (a row in a `markets` table), not new code.

---

## The 5 build changes (vs. the US/website-first v1.1 plan)

### 1. Channel: **WhatsApp-first** (the biggest change)
SMBs in these markets live on WhatsApp; many have no website. So the MVP delivery surface flips
from the embeddable web widget → **WhatsApp Business Cloud API**.
- Build: inbound webhook → core → outbound send; opt-in handling; **template-message approval**;
  the **24-hour customer-service window** rules; phone-number provisioning + business verification.
- The already-built **web widget becomes the secondary channel** (for businesses that do have sites) — reused, not wasted.
- WhatsApp Cloud API is self-serve (no mandatory BSP) in every target market **except Vietnam (Zalo)**.

### 2. Payments: **Merchant-of-Record first**
Build a payments **adapter** with an MoR (**Paddle / Lemon Squeezy**, or **dLocal / EBANX**) as the
default. This sells into *all* target markets with **no local entity** and **VAT remitted for you** —
and a strictly-B2B model often avoids VAT registration entirely (UAE/KSA/PH reverse-charge). Direct
Stripe/local rails are a per-market upgrade later.

### 3. Locale: **i18n + RTL + localized AI from day one**
Not just translated buttons — **localized AI prompts, intake templates, and industry verticals** per
market, plus RTL layout (for Arabic), local currency, phone/number formats, and timezones.

### 4. Model: keep Claude/GPT, add a multilingual / Arabic tier
All 12 target markets are non-sanctioned, so the **APIs work** — no self-hosting required. Use the
existing `model_provider`/`model_name` abstraction to add an **Arabic-first tier (Jais/Falcon-H1)**
where it helps, and keep open-weight as a cost lever. **The eval SLOs (§16) must hold per language.**

### 5. Per-market config as data
A `markets` table holds: language(s), currency + purchasing-power pricing, VAT rate +
`b2b_reverse_charge` flag, data-residency/consent rules, default channel, available model tier.

---

## Economics change you must re-model
WhatsApp adds **Meta per-conversation fees on top of LLM cost** — a new COGS line the §13 model
doesn't have. Re-model unit economics per market: `LLM cost + WhatsApp conversation fee + MoR fee
(~5%) ` vs. local-currency price. Purchasing-power pricing means tiers differ by market (a flat $29
is too high for some, fine for the UAE).

---

## Revised build order (international-first)

| # | Phase | Change vs v1.1 |
|---|---|---|
| PR-1 | DB + retrieval foundation | + `markets`/locale fields; channel + WhatsApp identifiers on conversations |
| PR-2 | Onboarding | + choose **market + language + currency**; localized templates |
| PR-3 | Knowledge + embeddings | **multilingual** embeddings |
| PR-4 | AI engine + grounded retrieval | **multilingual**, Arabic tier, **per-language evals** |
| **PR-5** | **WhatsApp channel (PRIMARY)** | **replaces "widget"** as the MVP surface; widget → secondary (PR-5b) |
| PR-6 | Lead inbox / mini-CRM | unchanged (channel-agnostic) |
| PR-7 | Quote templates | **localized per market vertical** |
| **PR-8** | Billing via **Merchant-of-Record** | MoR adapter + per-market VAT/pricing (not Stripe-direct) |
| PR-9 | Admin + eval harness | **per-language** SLOs |
| PR-10 | Marketing | localized landing + **click-to-WhatsApp** CTAs |

---

## Beachhead: it's config, so it's easy to set/change

Recommended defaults (override anytime):
- **Lowest build effort → ship fastest:** start with **English + Spanish** locale packs (covers LatAm +
  Philippines + English-speaking Gulf/Africa), **no RTL**. **Mexico** is the natural first GTM target
  (Stripe live, huge WhatsApp, new data law with no localization).
- **Highest operability → best margins:** **UAE** (scored #1) as a fast-follow once **Arabic + RTL** is
  worth the extra build.
- Defer: Vietnam (Zalo + licensing), Egypt (WHT + data rep), Kenya (entity-gated rails).

**To lock the first locale + GTM target, I just need: where are you based, and which languages can you
support?** That single answer sets the first language pack, templates, currency, and payment-region —
everything else is already decided above.

---

## What stays exactly the same
The AI engine, retrieval/RAG pipeline, knowledge base, lead scoring, mini-CRM, admin, and eval harness
are unchanged — they neither know nor care which channel or country a conversation came from. That's
why international-first is a re-prioritization, not a restart.
