# Crecy AI — Master Product & MVP Plan: Review & Scorecard

**Document reviewed:** `Crecy_AI_Master_Product_and_MVP_Plan.pdf` (Version 1.0, 19 sections, ~3,800 words)
**Reviewed:** June 2, 2026
**Verdict: 8.5 / 10** — an excellent, build-ready blueprint with top-tier scope discipline, held back from a true 10/10 by three gaps: quantified unit economics, the retrieval/AI-quality architecture, and a customer-acquisition motion.

---

## TL;DR

This is a genuinely strong planning artifact — well above the average "AI startup deck." It does the hard, unglamorous things most plans skip: it draws a sharp MVP boundary, ships a concrete database schema and API contracts, and treats usage metering and abuse as first-class concerns from day one. By its own stated quality bar ("the smallest version that feels complete, trustworthy, useful, and safe to pay for"), it largely succeeds.

It is **not** a 10/10 *as a plan*, because the three things that will actually make or break this product are the least specified:

1. **Unit economics are asserted, not calculated** — and on the math below, the **Pro plan is likely margin-thin or negative.**
2. **The retrieval / RAG layer is hand-waved** — yet "knowledge-only, no hallucination" is the entire product promise.
3. **There is no customer-acquisition plan** — the pilot is well-designed, but "how do the first 10 businesses find you?" is unanswered.

Fix those three and it earns the 10.

---

## What it gets right (the 8.5)

| Strength | Why it matters |
|---|---|
| **Ruthless scope discipline** | Section 5 lists what's *excluded* (omnichannel inbox, WhatsApp API, voice, workflow builder, unlimited AI). Research on MVP failure says ~70% of failed MVPs build too much — explicit exclusion lists are the discipline mechanism that prevents it. This is the single best thing in the document. |
| **Problem-based positioning** | "Choose the problem you want solved" beats "generic chatbot builder." The market is crowded (Chatbase, Tidio Lyro, Intercom Fin, Drift, Ethora, HubSpot Breeze) and outcome-framed packaging is the right wedge. |
| **Concrete, build-ready schema** | 12 tables with key fields, plus an RLS actor model (owner / public visitor / admin / service role). Most plans stop at boxes-and-arrows; this is translatable to SQL. |
| **Real API contracts** | `/api/ai/widget/message` with example request/response, `usage_remaining`, `handoff_needed`, `missing_fields`. This is implementation-grade. |
| **Security thought through** | Public agent key (not DB ids), server-side domain validation on *every* request, no prompt leakage to the browser, rate limits by IP/key/domain/session, "don't rely on UI gating." This is mature thinking that junior plans miss. |
| **Margin awareness baked in** | "Never unlimited AI by default," meter from day one, fallback contact form on limit. Correct instinct (see economics section — the instinct is right even if the numbers aren't shown). |
| **Industry templates as a moat** | The intake-question templates (cleaning, detailing, beauty, rentals, IT, car rental) are what make it feel specialized vs. generic. Right idea. |
| **Per-agent acceptance criteria** | Section 17 makes "done" testable. Pilot plan (Section 18) has concrete success signals (50 conversations, 10 qualified leads, 2 willing-to-pay). |

---

## What keeps it from 10/10

### 1. Unit economics are claimed but never calculated — and the Pro plan looks thin

The plan says "AI cost per customer stays comfortably below plan revenue" but never shows the math. Here it is, using 2026 benchmarks (fully-loaded cost per conversation — system prompt + retrieval + history + response — is **$0.05–$0.15**; the "token tax" locks AI-app gross margins ~30 points below the 60–80% SaaS norm):

| Plan | Price | Conv./mo | Revenue / conv. | Worst-case COGS/conv. | Margin signal |
|---|---|---|---|---|---|
| Starter | $29 | 100 | $0.29 | $0.15 | Healthy |
| Growth | $79 | 500 | $0.158 | $0.15 | **Thin** |
| Pro | $149 | 1,500 | **$0.099** | $0.15 | **Negative in worst case** |

Pro revenue-per-conversation ($0.099) sits *below* the worst-case fully-loaded cost ($0.15), before Stripe fees (~2.9%+30¢), support, and infra. The heaviest users are the *least* profitable — the classic AI-SaaS trap where inference is mis-modeled as fixed overhead instead of variable COGS. **The plan correctly says "meter everything" but doesn't act on its own data with a token cap, a cheaper model tier, or a per-conversation ceiling on Pro.** A 10/10 plan shows this table and prices against it.

### 2. The retrieval / RAG architecture is the missing keystone

The entire promise is "answers from the business knowledge base **only** … no hallucinated prices or policies." Yet `loadBusinessKnowledge()` is described as "retrieves active knowledge entries" with **no mention of how**: no embeddings, vector store, chunking strategy, retrieval ranking, or context-window budgeting. This is simultaneously the hardest engineering problem and the one the product lives or dies on. Right now it's a single function name standing in for the riskiest 30% of the build.

### 3. No AI-quality measurement plan

The #1 stated requirement is "must not hallucinate." But there is **no eval harness, no hallucination-rate metric, no regression test set, no golden-answer fixtures.** "Admin reviews conversations daily" is manual QA, not measurement — it won't scale past the pilot and gives no objective pass/fail. For a trust-first product, "how do we *prove* it isn't hallucinating?" needs an answer.

### 4. No customer-acquisition motion

The pilot plan is good *once you have 5–10 businesses* — but the document never says how they're found. GTM best practice is to start distribution *before* the build (personal outreach, niche communities, waitlists). No channel, no founder-led sales motion, no partnership angle (e.g., agencies, which the "Agency" plan implies but doesn't operationalize).

### 5. Smaller gaps worth closing

- **Notifications** ("owner receives notification") have no channel or provider (email/SMS? SendGrid/Twilio?) despite being core to the lead loop.
- **Human handoff** is listed as a state and a trigger, but the *mechanics* are undefined — who receives it, through what channel, with what SLA.
- **Lead scoring** rubric is vague ("urgency, completeness, fit, intent") with no weighting or thresholds.
- **Compliance** beyond "show a privacy notice": no data-retention policy, no GDPR/CCPA stance, no PII redaction in transcripts — relevant the moment an EU visitor uses an embedded widget.
- **Moat durability**: templates are replicable in a weekend by any competitor. The defensible moat (proprietary intake data → better templates over time) is hinted at in the pilot ("improve templates weekly") but not stated as the strategy.
- **Roadmap has no time/resourcing**: PR-0 → PR-10 is a clean dependency order, but no durations, no team size, no critical path. Good as a sequence, incomplete as a plan.
- **Domain unverified**: `crecyai.app` is flagged "verify before purchase" — correct, but still open.

---

## Scorecard by dimension

| Dimension | Score | Notes |
|---|---:|---|
| Vision & positioning | 9/10 | Sharp, outcome-based, well-differentiated framing. |
| Scope discipline (MVP boundary) | 10/10 | Best-in-class explicit exclusion list. |
| Technical architecture | 8/10 | Schema/API/security excellent; **retrieval layer missing.** |
| Security & abuse | 9/10 | Mature; add compliance/retention. |
| Business model & pricing | 6/10 | Right instincts, **unshown math, Pro likely thin.** |
| AI quality & safety | 6/10 | Great guardrail *rules*, **no measurement/eval plan.** |
| Go-to-market | 5/10 | Strong pilot, **no acquisition motion.** |
| Roadmap & execution | 8/10 | Clean PR sequence; no timeline/resourcing. |
| Completeness as a build doc | 9/10 | Genuinely build-ready for most surfaces. |
| **Overall** | **8.5/10** | Excellent blueprint; three fixable gaps from a 10. |

---

## The shortest path to 10/10

1. **Add a unit-economics page** with the per-conversation table above, and re-price or cap the Pro plan so the heaviest users stay profitable (token ceiling, cheaper default model, or per-conversation overage).
2. **Specify the retrieval layer**: vector store, chunking, embedding model, retrieval-ranking, context budget, and the "no-answer → handoff" threshold.
3. **Add an AI-eval section**: a golden Q&A set per industry template, a measured hallucination/refusal rate, and a regression gate in CI before any prompt change ships.
4. **Add a GTM/acquisition section**: founder-led outreach to the named verticals, an agency-partner channel for the "Agency" tier, and a waitlist that runs *during* the build.
5. **Close the small gaps**: notification provider, handoff mechanics + SLA, lead-score rubric, and a data-retention/GDPR line.

Do those five and this becomes a legitimately 10/10 plan — the foundation is already strong enough to carry them.

---

## Sources used for benchmarking

- [AI Chatbot Pricing Comparison 2026 (FastBots)](https://blog.fastbots.ai/ai-chatbot-pricing-comparison-what-businesses-actually-pay-in-2026/)
- [Top 5 AI Chatbot Platforms 2026: Intercom Fin vs Zendesk (Deepak Gupta)](https://guptadeepak.com/tools/top-5-ai-chatbot-platforms-2026/)
- [AI Chatbot Software Cost Comparison 2026 (Tidio)](https://www.tidio.com/blog/chatbot-pricing/)
- [Best AI Chatbot Builders for Small Business 2026 (Builts AI)](https://builts.ai/blog/best-ai-chatbot-builders-small-business/)
- [AI Chat Widget — Embed an AI Agent on Any Website (Ethora)](https://ethora.com/ai-sdk/embeddable-ai-agent-script/)
- [Mastering AI Agents for Lead Capture in 2026 (My AI Front Desk)](https://www.myaifrontdesk.com/blogs/boost-your-business-mastering-ai-agents-for-lead-capture-in-2026)
- [AI Agent Economics: Token Tax Locks Gross Margins 30 Points Below SaaS (TechTimes)](https://www.techtimes.com/articles/317542/20260601/ai-agent-economics-token-tax-locks-gross-margins-30-points-below-saas-baseline.htm)
- [OpenAI API Pricing for SMBs: What You Pay Per Conversation (Hyperleap)](https://hyperleap.ai/blog/openai-api-pricing-smb-per-conversation)
- [Unit Economics for AI SaaS Companies — CFO Guide (Drivetrain)](https://www.drivetrain.ai/post/unit-economics-of-ai-saas-companies-cfo-guide-for-managing-token-based-costs-and-margins)
- [How to Write a PRD for Your MVP (Propelius)](https://propelius.ai/blogs/how-to-write-product-requirements-document-prd-mvp/)
- [The Complete MVP Roadmap Guide for 2026 (Presta)](https://wearepresta.com/the-complete-mvp-roadmap-guide-for-2026/)
