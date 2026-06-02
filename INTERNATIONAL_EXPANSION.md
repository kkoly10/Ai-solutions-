# Crecy AI — International Expansion: Payments & SaaS-Operation Research

**Appendix to [`CRECY_AI_MASTER_PLAN_v1.1.md`](./CRECY_AI_MASTER_PLAN_v1.1.md).** Decision-grade research on
whether a **foreign (non-resident)** company can sell a monthly-subscription, WhatsApp/web AI
assistant for small businesses into 12 emerging markets — and *get paid* — without tripping over
local payment, entity, tax, and data law. Researched June 2026 from regulator, tax-authority, and
processor sources. **This is research, not legal/tax advice — confirm with local counsel before launch.**

> **Framing correction (important).** The idea started as *"sell where Claude/ChatGPT aren't
> available."* Research showed that bucket splits in two:
> - **Bucket A — sanctioned / hard-banned** (China, Russia, Iran, North Korea, Cuba, Syria). **Off-limits:**
>   you legally can't use US LLM APIs there, can't easily get paid, and would breach model-provider terms.
> - **Bucket B — underserved but legal** (the 12 markets below). LLM APIs *are* generally available here,
>   so the wedge isn't "AI where it's banned" — it's **a localized, outcome-based, WhatsApp-first, locally-priced
>   AI business tool** in markets the US incumbents don't tailor to. That's the real opportunity, and it's
>   what we researched.

---

## Cross-cutting findings (the patterns that matter)

1. **Stripe is live in only 3 of the 12** — **UAE, Mexico, Brazil** — and even there it needs a local entity.
   Everywhere else you use local rails or a cross-border aggregator.
2. **The universal "no-local-entity" escape hatch is a Merchant-of-Record (MoR).** **dLocal / EBANX**
   (LatAm + Asia + Africa) and **Paddle / Lemon Squeezy** (global) collect locally, handle FX repatriation,
   **and remit the local digital-VAT for you** — turning 12 hard tax/payment regimes into one integration.
   This is the single most important strategic finding.
3. **Tax now follows users, not servers.** Every one of the 12 taxes non-resident digital services, and the
   registration **thresholds are being removed** (Kenya, Ghana, Nigeria, Brazil all moving to "tax from the
   first sale"). You can owe VAT without any local presence.
4. **A pure-B2B model is a real advantage.** In **UAE, KSA, and the Philippines**, B2B sales to a
   VAT-registered local business **reverse-charge to the buyer** — so a strictly-B2B Crecy AI may **not need
   to register for VAT at all** in those markets.
5. **WhatsApp Cloud API works almost everywhere** (self-serve, no mandatory local BSP) — **except Vietnam**,
   which is *Zalo* country (~85%+), making it a poor channel fit.
6. **Local payment rails almost always require local incorporation** (Nigeria CAC, Kenya M-Pesa shortcode,
   KSA CR/MISA, etc.). So: **MoR first to validate, incorporate later when volume justifies it.**

---

## PART 1 — Cross-market ranking

Scores: **5 = easiest/best** for a foreign SaaS, **1 = hardest**. Axes: payments-integration ease ·
foreign-operability (no local entity) · tax/compliance ease · data-residency permissiveness · WhatsApp readiness.

| Rank | Market | Pay | Foreign-op | Tax | Data | WA | **Total** |
|---:|---|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 🇦🇪 **UAE** | 5 | 4 | 5 | 4 | 5 | **23** |
| =2 | 🇮🇩 **Indonesia** | 4 | 4 | 3 | 4 | 5 | **20** |
| =2 | 🇵🇭 **Philippines** | 4 | 4 | 3 | 5 | 4 | **20** |
| =2 | 🇲🇽 **Mexico** | 4 | 4 | 3 | 5 | 4 | **20** |
| 5 | 🇧🇷 Brazil | 4 | 3 | 2 | 4 | 5 | **18** |
| 6 | 🇨🇴 Colombia | 3 | 4 | 3 | 3 | 4 | **17** |
| 7 | 🇬🇭 Ghana | 3 | 3 | 2 | 4 | 4 | **16** |
| =8 | 🇳🇬 Nigeria | 3 | 3 | 2 | 3 | 4 | **15** |
| =8 | 🇸🇦 Saudi Arabia | 3 | 2 | 3 | 3 | 4 | **15** |
| =10 | 🇰🇪 Kenya | 2 | 2 | 1 | 3 | 4 | **12** |
| =10 | 🇪🇬 Egypt | 2 | 2 | 2 | 2 | 4 | **12** |
| 12 | 🇻🇳 Vietnam | 2 | 2 | 2 | 2 | 1 | **9** |

**Tiers:** **Lead with UAE.** Strong second tier: **Indonesia, Philippines, Mexico** (all 20). Big-but-hard:
**Brazil** (largest WhatsApp market + Pix Automático recurring, but mid-transition ~28% dual-VAT reform).
**Hardest / defer:** **Kenya, Egypt, Vietnam** (entity-gated rails, punitive tax/WHT, or wrong channel).

### Region notes & key gotchas (with sources)
- **Sub-Saharan Africa** — Nigeria & Ghana viable via Paystack/Flutterwave (real recurring card-on-file);
  **Kenya hardest** (M-Pesa needs a local entity; 3% SEP tax from the first shilling + 16% VAT). Nigeria VAT 7.5%
  + 10% WHT from Jan 2026; Ghana ~20% effective VAT. [Stripe-Africa](https://thecondia.com/stripe-africa-payments-tax-2025/) · [Paystack subscriptions](https://paystack.com/docs/payments/subscriptions/) · [Kenya SEP](https://www.vatcalc.com/kenya/kenya-to-scrap-1-5-digital-services-tax/) · [Ghana e-VAT](https://gra.gov.gh/file-and-pay-taxes/e-commerce/)
- **GCC + North Africa** — **UAE is the standout** (see Part 2). KSA solid rails but **MISA license** effectively
  required; data-transfer rules ambiguous (SDAIA adequacy list unpublished). **Egypt hardest** — 20% WHT, FX
  repatriation pain, new PDPL requiring a **local representative + cross-border-transfer license**. [Stripe global](https://stripe.com/global) · [KSA MISA](https://ahysp.com/misa-license-explained-for-foreign-investors/) · [Egypt PDPL regs](https://www.tamimi.com/law_update_articles/from-policy-to-practice-egypt-issues-executive-regulations-of-the-personal-data-protection-law/)
- **Southeast Asia** — **Indonesia & Philippines tie (20)**; lead Indonesia on channel fit (WhatsApp dominant +
  Xendit recurring). **Philippines B2B VAT reverse-charges to the buyer.** **Vietnam worst (9)** — onshore-only
  payment licensing, Zalo not WhatsApp, foreign-contractor tax + new 2026 data law. [Xendit](https://www.xendit.co/en/) · [PH NRDSP VAT (EY)](https://www.ey.com/en_gl/technical/tax-alerts/philippines-issues-implementing-rules-for-vat-on-digital-services-law) · [Vietnam data localization](https://www.trade.gov/market-intelligence/vietnam-cybersecurity-data-localization-requirements)
- **Latin America** — **Mexico strongest (20)**: Stripe live, new 2025 data law with no localization/registration,
  WhatsApp ubiquitous (watch the 2026 rule making platforms withhold 100% IVA on foreign sellers).
  **Brazil** biggest but hardest tax (2026 CBS/IBS reform, ~28%, no threshold, fiscal rep + LGPD DPO).
  **Colombia** middling (no Stripe; SIC database registration). [Mexico digital VAT](https://www.fonoa.com/resources/country-tax-guides/mexico/tax-on-digital-services) · [Pix Automático](https://www.pagbrasil.com/payment-methods/automatic-pix/) · [Brazil non-resident CBS/IBS (KPMG)](https://kpmg.com/us/en/taxnewsflash/news/2026/05/brazil-indirect-tax-reform-nonresident-sellers-digital-platforms.html)

---

## PART 2 — Deep dossier: UAE (the #1 market)

**Verdict: GO — as both the first international market and the regional base.** The UAE is the rare market
where a foreign SaaS can be paid through **Stripe**, sell B2B **without VAT registration** (reverse charge),
pay **no withholding tax** on cross-border software, and face **no general data-localization** — all in a
high-willingness-to-pay, English+Arabic, WhatsApp-saturated economy.

### Payment stack (recommended)
- **Primary:** **Stripe UAE** (live; cards + subscriptions/card-on-file out of the box) once a UAE entity exists.
  [stripe.com/global](https://stripe.com/global)
- **Local/GCC methods:** add **Checkout.com** (strongest local subscription tooling) or **Tap** (fastest
  pan-GCC onboarding); PayTabs/Telr also support recurring. [UAE gateway comparison](https://www.skimbox.co/en/resources/blogs/uae-payment-gateway-comparison-telr-stripe-checkout)
- **Before you incorporate:** run on a **Merchant-of-Record** (Paddle/Lemon Squeezy) to bill UAE customers and
  remit VAT with zero local setup — validate demand first.
- **Settlement/FX:** with a UAE entity, payouts land in AED (USD-pegged, freely convertible) → low repatriation friction.

### Legal setup to operate
- **Entity:** Not strictly required to *sell* cross-border B2B, but required for Stripe/local rails. Best path is a
  **free-zone company (100% foreign-owned)** — e.g., IFZA/Meydan/SHAMS/RAKEZ for general tech, or **ADGM/DIFC**
  if you want common-law + a GDPR-grade data regime. **Dubai Resolution 11/2025** now lets free-zone firms operate
  on the mainland without a separate entity. [Free zone → mainland](https://arnifi.com/blog/uae-free-zone-firms-gain-direct-mainland-access/)
- **Bank account:** A UAE business bank account is the main practical friction (can take weeks; expect KYC/substance questions).

### Tax
- **VAT 5%.** **B2B to a VAT-registered UAE business → reverse charge; the foreign supplier does NOT register.**
  B2C digital services → register from the **first sale (no threshold)**. (Domestic UAE entity mandatory-registration
  threshold is AED 375k taxable supplies / AED 187.5k voluntary — *verify against your structure*.) [B2B VAT](https://www.alaan.com/blog/b2b-vat-rules-uae-guide) · [non-resident VAT](https://chooseuae.com/how-uae-vat-rules-affect-overseas-service-providers/)
- **Withholding tax: none** on cross-border software/royalties — a major margin advantage vs. Egypt (20%) or Nigeria (10%). [UAE VAT guide](https://accounts-os.com/blog/uae-vat-5-percent-guide)
- **Corporate tax:** 9% on taxable profit above AED 375k (since June 2023); a **Qualifying Free Zone Person** can be
  **0%** on qualifying income — *get this structured by an advisor; "qualifying income" rules are strict.* (verify)

### Data protection
- Federal **PDPL (Decree-Law 45/2021)** applies to processing UAE residents' data; **DIFC/ADGM** run their own
  GDPR-aligned regimes. **No blanket localization** for general SaaS; cross-border transfer allowed to adequate
  jurisdictions or with safeguards (sector carve-outs for banking/health). Executive regs were still maturing in 2025
  — *verify current transfer mechanics.* [UAE data protection](https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws)

### Channel & AI
- **WhatsApp Cloud API** self-serve via Meta Business Manager (since Oct 2025 Cloud API is the only route for new
  integrations); **no BSP mandate**; Arabic templates supported. [WhatsApp platform](https://whatsappbusiness.com/products/platform-pricing/)
- **AI:** soft-law only (UAE AI Charter 2024 + AI Office ethics) — no binding general-SaaS AI statute. [UAE AI landscape](https://www.lw.com/en/insights/ai-in-the-uae-understanding-the-regulatory-landscape-and-key-authorities)

### Gotchas
- Bank-account opening is the real timeline risk, not the license.
- The 0% free-zone rate depends on "qualifying income" — don't assume it.
- Arabic + **RTL UX** and an Arabic-first model option (Jais/Falcon-H1) materially improve quality for Gulf SMBs.
- Economic-substance / annual filings apply even to free-zone entities.

### UAE pre-launch checklist
- [ ] Validate demand via a **Merchant-of-Record** (no entity) with 3–5 UAE pilot businesses
- [ ] Decide structure: free zone (IFZA/Meydan) vs ADGM/DIFC (if data/fintech posture matters)
- [ ] Incorporate; open UAE business bank account (start early)
- [ ] Stripe UAE live + one local method (Checkout.com/Tap) for GCC cards/wallets
- [ ] Confirm **B2B reverse-charge** position; register for VAT only if selling B2C
- [ ] Structure for 0% Qualifying Free Zone Person income (advisor-led)
- [ ] PDPL: privacy notice, cross-border-transfer basis, consent before contact capture
- [ ] WhatsApp Cloud API onboarded; Arabic templates + RTL widget
- [ ] (Optional) Arabic-first model tier wired via the plan's `model_provider`/`model_name` abstraction

---

## Recommended phased rollout

- **Phase 0 — validate anywhere, zero setup:** launch via **MoR (Paddle/Lemon Squeezy or dLocal/EBANX)** in 2–3
  target markets. No incorporation, no VAT registration, no FX headaches. Pure demand test.
- **Phase 1 — UAE base:** incorporate in a UAE free zone, go direct (Stripe + local), serve the GCC; add Arabic/RTL.
- **Phase 2 — second tier:** Indonesia, Mexico, Philippines (all scored 20) via MoR or local entity as volume justifies.
- **Defer/avoid:** Vietnam (channel + licensing + data), Egypt (WHT + FX + data rep), Kenya (entity-gated rails + SEP tax).

---

## What this adds to the build (tracked in `PROGRESS.md`)

International is a **post-domestic-pilot, optional track** — none of it should distract from PR-1…PR-9. But the
architecture should *preserve the option* cheaply:
1. **Payments abstraction** — don't hard-wire Stripe; support an MoR adapter (Paddle/dLocal) + per-market processor.
2. **WhatsApp channel** — the plan's post-MVP WhatsApp becomes the *primary* channel internationally (and a Zalo
   adapter if Vietnam is ever pursued).
3. **i18n + RTL** — language packs and right-to-left layout (Arabic first).
4. **Model abstraction** — already in the schema (`model_provider`/`model_name`); add an Arabic-first tier (Jais/Falcon-H1)
   and keep open-weight as a cost lever. All 12 markets are non-sanctioned, so Claude/GPT APIs remain usable.
5. **Per-market tax/data config** — VAT rate, B2B-reverse-charge flag, retention/representative requirements as data,
   not code.

---

*Caveats: payment-processor onboarding policies for non-residents change frequently — confirm directly with each
provider. Tax regimes flagged as recently-changed (Nigeria NTA 2025, Kenya SEP, Ghana Act 1151, Philippines NRDSP VAT,
Brazil CBS/IBS, Mexico 2026 platform withholding, Egypt PDPL regs, KSA Article 47) should be re-verified at launch.
Not legal or tax advice.*
