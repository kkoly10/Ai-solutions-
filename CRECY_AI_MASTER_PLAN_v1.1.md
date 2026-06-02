# Crecy AI — Master Product, MVP, Architecture & Widget Integration Plan

**Version 1.1 — June 2, 2026**
**One Widget. Six AI Business Solutions.**
Proposed primary domain: `crecyai.app` *(verify availability before purchase)*

> **About this version.** v1.1 is the build-of-record. It keeps everything that made v1.0
> strong (scope discipline, schema, widget security) and *defines* the parts v1.0 left open:
> the retrieval pipeline, unit economics, the eval harness, lead scoring, notifications,
> compliance, and the go-to-market motion. Where v1.0 said "meter usage" or "retrieve
> knowledge," v1.1 says exactly how. Changes from v1.0 are flagged **[v1.1]**.

---

## Table of Contents

1. Executive Summary
2. Brand & Product Identity
3. Market Benchmark Takeaways
4. Customer Problems & Six AI Agents
5. MVP Boundary & 10/10 Quality Bar
6. User Personas & Core Journeys
7. Widget Integration Architecture
8. Dashboard Architecture
9. AI Engine Architecture
10. **Retrieval / RAG Pipeline [v1.1]**
11. Database Schema Blueprint
12. API Contracts
13. **Unit Economics & Cost Model [v1.1]**
14. Billing, Usage & Entitlements
15. **Lead Scoring Rubric [v1.1]**
16. **AI Quality & Evaluation Harness [v1.1]**
17. Security, Privacy & Abuse Protection
18. **Notifications & Human Handoff [v1.1]**
19. Admin Operations & Observability
20. Industry Templates
21. **Go-to-Market & Pilot Launch [v1.1]**
22. Build Roadmap
23. Acceptance Criteria
24. Final Build Checklist
25. **The Moat [v1.1]**

---

## 1. Executive Summary

Crecy AI is a **problem-based AI SaaS for small businesses**. The owner chooses the problem
to solve — more leads, faster support, quicker quotes, follow-up, paperwork, or sales — and
installs **one widget** that runs the right AI agent for that job.

**Core thesis:** Crecy AI is not a generic chatbot. It is an **AI business desk** that captures
leads, answers customers from the business's own knowledge, creates quote-ready summaries, and
reduces repetitive work.

**MVP in one line:** Lead capture + customer service + quote assistant, powered by a business
knowledge base via grounded retrieval, delivered through one embeddable widget, managed from a
mini-CRM dashboard, and protected by usage-based subscriptions with provable margins.

| MVP pillar | Definition |
|---|---|
| One embeddable widget | Fast, mobile-friendly script installed on external sites, configured from the dashboard. |
| Three production agents | Lead Capture, Customer Service, Quote Assistant (full v1). |
| Mini CRM | Leads, transcripts, summaries, statuses, notes, suggested next actions. |
| Knowledge base | Services, FAQs, pricing notes, service area, hours, policies, custom entries — **served through grounded retrieval [v1.1]**. |
| Usage-based subscription | Plan limits, AI metering, **model-tiered cost control, cap+overage billing [v1.1]**, fallback form when exhausted. |
| Admin visibility | Oversight of businesses, agents, usage, conversations, billing, abuse, AI failures, **and a measurable AI-quality dashboard [v1.1]**. |

---

## 2. Brand & Product Identity

| Item | Decision |
|---|---|
| Product name | Crecy AI |
| Proposed domain | `crecyai.app` (verify before purchase) |
| Category | AI agents for small-business lead capture, support, quotes, follow-up, paperwork, sales |
| Primary customer | Small **local service** businesses that depend on inbound leads and quote requests |
| Beachhead vertical **[v1.1]** | **Cleaning** at launch (highest message volume, sharpest "how much?" pain); expand only once repeatable |
| Delivery | One embeddable AI widget + web dashboard |
| Business model | Subscription SaaS with included usage + metered overage; no unlimited AI |

**Homepage positioning:** *Choose the AI agent your business needs today. Capture more leads,
answer customers faster, create quotes, and stop losing sales — from one simple widget.*

**Crecy AI is not:** a full CRM replacement, an enterprise help desk, or a generic AI playground.
It is marketed around **business outcomes**, not AI features.

---

## 3. Market Benchmark Takeaways

Mature competitors (Intercom Fin, Chatbase, Tidio Lyro, Drift, HubSpot Breeze, Ethora) combine
AI chat, lead capture, help content, human handoff, booking, CRM sync, analytics, and
usage-based pricing. **Crecy AI copies the packaging logic, not the complexity.**

| Competitor pattern | Crecy AI implication |
|---|---|
| Support platforms (inbox, ticketing, handoff) | Needs handoff + conversation review, **not** full ticketing in MVP. |
| CRM platforms (forms, records, workflows) | Needs a **mini CRM** for leads, not a full sales suite. |
| Social automation | Add social later; **website widget first**. |
| AI chatbot builders (embeddable, knowledge, credits) | Be **problem-based and grounded**, not a generic builder. |
| AI SDR (qualify, book, pipeline) | Borrow the outcome language: capture and qualify opportunities. |

Pricing reality (2026): Intercom Fin ~$0.99/resolution, Tidio Lyro ~€0.50–1.00/extra
conversation, Chatbase credit-based. Per-resolution/credit models spiral; **predictable base +
bounded overage** is safer for SMBs — which is the model in §13–14.

**Product lesson:** package as **one widget with multiple business outcomes**, not a vague
chatbot builder.

---

## 4. Customer Problems & Six AI Agents

| Business problem | Agent | MVP depth | Primary output |
|---|---|---|---|
| I am missing leads. | Lead Capture Agent | Full v1 | Lead record, summary, contact info, next action |
| I answer the same questions all day. | Customer Service Agent | Full v1 | Answered conversation or human handoff |
| Quoting takes too long. | Quote Assistant | Full v1 | Structured quote-ready intake summary |
| Customers ghost me. | Follow-Up Agent | Light v1 | Suggested follow-up drafts, lead reminders |
| Paperwork slows me down. | Paperwork Assistant | Light v1 | Structured notes from messy messages/forms |
| I want more sales. | Sales Assistant | Light v1 | Service/product recommendation, CTA guidance |

**Lead Capture Agent** — greets visitors, collects name, phone/email, location, urgency, service
interest, notes; creates a lead and suggests the next action; works even when the visitor opens
with "How much?".

**Customer Service Agent** — answers **only** from the business knowledge base (hours, services,
service area, pricing basics, booking steps, policies); **escalates instead of guessing**; turns
buying intent into a captured lead.

**Quote Assistant** — asks industry-specific intake questions; builds a structured quote-ready
summary; gives exact estimates **only** when pricing rules are configured.

**Follow-Up / Paperwork / Sales (Light v1)** — drafts follow-ups & flags stale leads; turns messy
messages into structured notes; recommends services & handles simple objections. Heavier
automation (scheduled SMS/WhatsApp, invoice/PDF generation) is post-MVP.

---

## 5. MVP Boundary & 10/10 Quality Bar

| Included in MVP | Excluded from MVP |
|---|---|
| Onboarding & agent selection | Full omnichannel inbox |
| Knowledge setup | Native WhatsApp Business API automation |
| Embeddable widget | Instagram/TikTok DM automation |
| AI preview chat in dashboard | Voice calls |
| Lead capture & mini CRM | Full visual workflow builder |
| Quote assistant templates | Full document-generation engine |
| Usage tracking & plan limits | Enterprise CRM replacement |
| Billing & admin oversight | Unlimited AI conversations |
| **Grounded retrieval + eval harness [v1.1]** | |

**Quality bar:** a 10/10 MVP is not the largest product — it is the **smallest version that feels
complete, trustworthy, useful, and safe to pay for.** Concretely, that means:

- The AI **must not hallucinate** prices, policies, or availability — and we **measure** it (§16).
- Every lead saves reliably with transcript and summary.
- The dashboard makes leads easy to review and act on.
- The widget is fast, mobile-friendly, and safe to embed on external sites.
- Usage is metered from day one, on a **cost model with proven margin** (§13).
- Admin can inspect — and quantify — problems during the pilot.

---

## 6. User Personas & Core Journeys

| Persona | Pain | Best agent mix |
|---|---|---|
| Cleaning business owner | Missed calls, repetitive quote questions, uncertain scope | Lead Capture + Quote Assistant |
| Auto detailer | Price asked without vehicle details | Quote Assistant + Follow-Up |
| Beauty provider | Booking questions, style details, deposits, no-shows | Customer Service + Quote Assistant |
| Event rental company | Date availability, delivery, setup questions | Lead Capture + Quote Assistant |
| IT support/repair | Repetitive troubleshooting, unclear issues | Customer Service + Paperwork Assistant |
| Car rental business | Availability, dates, delivery, insurance, driver | Lead Capture + Customer Service |

**Business owner journey:** sign up → choose the main problem → select industry template & tone →
add services/FAQs/pricing/policies/service area → test in preview → install the widget → review
captured leads.

**Website visitor journey:** open site → widget greets/responds → ask a question or request a quote
→ AI answers from knowledge and asks follow-ups → AI captures name/contact/need/location/urgency →
AI confirms next step and saves the lead → owner is notified and acts from the dashboard.

---

## 7. Widget Integration Architecture

The widget is the delivery mechanism: simple to install, hardened for public traffic.

```html
<script src="https://crecyai.app/widget.js" data-agent-key="agent_public_xxxxx" async></script>
```

| Layer | Responsibility |
|---|---|
| Public script | Loads the widget shell without blocking the host site. |
| Config API | Fetches safe public settings by agent public key. |
| Visitor session | Stores anonymous visitor/session id in localStorage/cookie. |
| Message API | Sends visitor messages server-side for AI processing. |
| Lead capture module | Collects contact fields in-chat when intent is detected. |
| Fallback form | Non-AI contact form on usage limit, error, or agent pause. |

**Boot sequence:** async script loads → reads `data-agent-key` → `GET /api/ai/widget/config`
(public key + domain) → server validates allowed domain, returns safe config → renders launcher +
greeting → visitor sends message → `POST /api/ai/widget/message` → server validates plan, rate
limit, domain, agent status → AI engine replies and extracts lead fields → widget renders reply +
lead-capture state.

**States:** closed launcher · greeting bubble · open chat · lead capture form · quote intake flow ·
human handoff · conversation complete · plan-limit fallback · error fallback.

**Security rules:** public agent key (never DB ids) · server-side domain allow-listing on **every**
config and message request · never expose system prompts or private settings to the browser ·
rate-limit by IP/key/domain/session · message-length caps before AI calls · graceful fallback on
limit or failure. **[v1.1]** Visitor input is **untrusted**: treated as data, never instructions
(prompt-injection defense, §17).

---

## 8. Dashboard Architecture

```
/ai                     Overview
/ai/onboarding          Business setup & agent selection
/ai/agents              Agent list & configuration
/ai/agents/[id]         Agent settings, knowledge, behavior, install code
/ai/knowledge           Business knowledge base
/ai/leads               Lead inbox
/ai/leads/[id]          Lead detail: transcript, summary, intake, notes, status
/ai/conversations       Conversation list
/ai/analytics           Usage, leads, conversion, top questions
/ai/billing             Plan, usage, invoices
/ai/quality  [v1.1]     AI-quality dashboard: hallucination rate, handoff precision, latency, cost
/ai/settings            Widget branding, notifications, account
```

| Page | Must show |
|---|---|
| Overview | New leads, conversations, capture rate, top questions, usage remaining, handoffs needed. |
| Agents | Name, mode, status, install state, usage, edit actions. |
| Knowledge | Services, FAQs, policies, pricing notes, hours, service area, custom entries. |
| Leads | Name, contact, service, location, urgency, **score + breakdown [v1.1]**, status, source, date. |
| Lead detail | Summary, transcript, structured intake, next action, notes, follow-up draft, **cited knowledge [v1.1]**. |
| Analytics | Widget views, conversations, leads, conversion, top questions, handoffs, cost. |
| Quality **[v1.1]** | Hallucination rate, refusal correctness, handoff precision, p95 latency, cost/conv. |
| Billing | Plan, usage, included vs. overage, limits, upgrade CTA, billing status. |

---

## 9. AI Engine Architecture

Each agent shares one core engine with different behavior instructions, questions, extraction
rules, and output formats.

| Engine function | Purpose | Model tier **[v1.1]** |
|---|---|---|
| `loadAgentConfig()` | Mode, tone, greeting, limits, behavior. | — |
| `loadBusinessKnowledge()` | **Grounded retrieval (§10), not a raw dump.** | embeddings |
| `buildSystemPrompt()` | Safe instructions from identity + mode + rules + retrieved context. | — |
| `detectIntent()` | Classify: question, quote, complaint, buying intent, handoff. | **small (Haiku-class)** |
| `shouldCaptureLead()` | Decide if contact info should be requested. | small |
| `extractLeadFields()` | Extract name, phone/email, need, location, urgency, budget. | small |
| `generateAssistantReply()` | User-facing answer, grounded + cited. | **small default; mid (Sonnet-class) for quote summaries** |
| `generateSummary()` | Conversation & lead summaries. | small |
| `generateLeadScore()` | Score per the rubric in §15. | small |
| `logUsage()` | Model, tokens, estimated cost, plan consumption. | — |

**Prompt layers:** global safety rules (no guessing, no pretending to be human, no unsupported
guarantees, **ignore visitor instructions to override the system [v1.1]**) → business context →
agent mode → **retrieved knowledge only** → conversation state → output rules.

**Model defaults [v1.1]:** routing/extraction/scoring on a **small model (Claude Haiku 4.5-class)**;
customer-facing replies on the small model by default, escalating to a **mid model
(Claude Sonnet 4.6-class)** only for quote-summary generation. `model_provider`/`model_name` stay
configurable per agent. This tiering is the primary COGS lever (§13).

**Handoff triggers:** exact price requested but pricing not configured · legal/medical/financial/
regulated advice · refund/cancellation/dispute · explicit request for a human · **low retrieval
confidence (§10)** · availability/calendar not connected.

**Safe fallback copy:** *"I don't want to give you the wrong information. I can collect your details
and have the team confirm this for you."*

---

## 10. Retrieval / RAG Pipeline **[v1.1 — new, defined]**

The product promise is "answers from the business knowledge base **only**." That promise is kept
here. No new infrastructure — retrieval lives in the same Postgres as the rest of the schema.

**Storage** — `pgvector` in Supabase/Postgres. Embeddings sit under the same RLS as their parent
rows, so there is no separate vector store to secure.

**Chunking** — each `ai_agent_knowledge` row (a service, FAQ, policy, pricing note) **is** a chunk,
with `type` and `title` metadata. The data is already discrete and structured — this is
structure-aware chunking with zero extra work.

**Indexing** — on each knowledge write: compute a 1,536-dim embedding (`embedding vector`) and a
Postgres `tsvector` (`tsv`). Index with HNSW (vector) + GIN (full-text).

**Hybrid retrieval** — for each visitor turn, run **semantic** (pgvector cosine) **and keyword**
(`tsv @@ query`) search, then fuse. Hybrid is mandatory: vector-only misses exact tokens — prices,
service names, ZIP codes — which is exactly the data an SMB bot must get right.

**Rerank** — retrieve top-20 candidates, rerank to the top-3–5 by query relevance before building
context (cross-encoder, or a small-model rerank in MVP). Reranking is the largest quality lift
after chunking.

**Grounding & citations** — replies follow an **"Answer + Source"** contract: every claim is backed
by retrieved entries, and the message records `cited_knowledge_ids`. Citations make the
anti-hallucination promise **auditable** and power admin review and the eval harness.

**No-answer threshold → handoff** — if the top reranked score is below `RETRIEVAL_MIN_SCORE`, the
engine **does not generate an answer**; it returns the safe fallback and triggers handoff/lead
capture. This is how "refuse to guess" becomes a mechanism, not a hope.

```
visitor turn
  → hybrid search (pgvector + tsvector)  → top 20
  → rerank                               → top 5
  → score ≥ RETRIEVAL_MIN_SCORE ?
        yes → generateAssistantReply(grounded, cited)
        no  → safe fallback + handoff/lead capture
```

---

## 11. Database Schema Blueprint

Build blueprint; exact SQL is generated from this set with RLS policies for owners, admins, and
public widget access. **[v1.1]** additions are flagged inline.

| Table | Purpose | Key fields |
|---|---|---|
| `ai_businesses` | Business profile for AI context | id, user_id, business_name, industry, website_url, phone, email, location, service_area, timezone, logo_url, brand_color |
| `ai_agents` | Configured agent / widget brain | id, business_id, agent_name, primary_mode, enabled_modes, tone, greeting, status, model_provider, model_name, lead_capture_enabled |
| `ai_agent_knowledge` | Business knowledge base | id, business_id, agent_id, type, title, body, metadata, is_active, **embedding vector [v1.1]**, **tsv tsvector [v1.1]** |
| `ai_widget_installs` | Public widget config & domain rules | id, agent_id, public_key, allowed_domains, widget_position, theme_color, show_branding |
| `ai_conversations` | Visitor session | id, agent_id, business_id, visitor_id, source_url, source_domain, status, summary, intent, lead_id |
| `ai_messages` | Transcript | id, conversation_id, role, content, metadata, created_at, **cited_knowledge_ids[] [v1.1]**, **retrieval_score [v1.1]**, **grounded boolean [v1.1]** |
| `ai_leads` | Mini-CRM lead record | id, business_id, agent_id, conversation_id, name, phone, email, service_interest, location, urgency, budget, lead_score, **score_breakdown jsonb [v1.1]**, status, summary |
| `ai_lead_events` | Lead timeline & notes | id, lead_id, actor_type, event_type, message, metadata |
| `ai_agent_usage` | Usage & cost metering | id, business_id, agent_id, conversation_id, period, input_tokens, output_tokens, message_count, **model_name [v1.1]**, estimated_cost_cents |
| `ai_agent_templates` | Industry template definitions | id, industry, mode, questions, suggested_knowledge, prompt_rules |
| `ai_billing_entitlements` | Plan limits & feature gates | id, business_id, plan, max_agents, **included_conversations [v1.1]**, **overage_rate_cents [v1.1]**, enabled_modes, billing_status |
| `ai_admin_events` | Admin audit log | id, actor_id, target_type, target_id, event_type, message, metadata |
| `ai_eval_runs` **[v1.1]** | Eval-harness results | id, suite, commit_sha, agent_id, hallucination_rate, refusal_correctness, handoff_precision, citation_valid_rate, p95_latency_ms, passed boolean, created_at |

**RLS / security model:** owner → full access to own data; **public widget visitor → no direct
table access, only public widget APIs with valid key+domain**; admin → full internal access for
support/abuse/billing/debug; system/service role → writes conversations, messages, leads,
summaries, usage, notifications.

---

## 12. API Contracts

| Route | Method | Purpose |
|---|---|---|
| `/api/ai/businesses` | GET/POST | List or create business profile |
| `/api/ai/businesses/[id]` | GET/PATCH | Read or update business |
| `/api/ai/agents` | GET/POST | List or create agents |
| `/api/ai/agents/[id]` | GET/PATCH/DELETE | Read, update, pause, delete agent |
| `/api/ai/agents/[id]/knowledge` | GET/POST | List or create knowledge (triggers embedding) |
| `/api/ai/widget/config` | GET | Public config by public key + domain |
| `/api/ai/widget/message` | POST | Public visitor message; validates usage, runs grounded AI |
| `/api/ai/conversations` | GET | Conversation list |
| `/api/ai/conversations/[id]` | GET | Conversation detail with transcript |
| `/api/ai/leads` | GET | Lead inbox |
| `/api/ai/leads/[id]` | GET/PATCH | Lead detail & status |
| `/api/ai/usage` | GET | Current plan usage (included vs. overage) |
| `/api/ai/admin/*` | VARIES | Admin-only oversight |

**`POST /api/ai/widget/message`**

```json
// Request
{
  "public_key": "agent_public_xxxxx",
  "conversation_id": "optional",
  "visitor_id": "anonymous_session_id",
  "message": "How much is a move-out cleaning?",
  "source_url": "https://clientsite.com/pricing",
  "metadata": { "timezone": "America/New_York" }
}
// Response
{
  "conversation_id": "conv_xxxxx",
  "assistant_message": "I can help. How many bedrooms and bathrooms?",
  "lead_capture": { "active": true, "missing_fields": ["name", "phone", "location"] },
  "grounded": true,                       // [v1.1]
  "cited_knowledge_ids": ["know_123"],    // [v1.1]
  "handoff_needed": false,
  "usage_remaining": 82,
  "overage_active": false                 // [v1.1]
}
```

---

## 13. Unit Economics & Cost Model **[v1.1 — new, defined]**

2026 reality: fully-loaded cost per conversation (system prompt + retrieval + history + response)
runs **$0.05–0.15** with frontier models, and the "token tax" pushes AI-app gross margins ~30
points below the SaaS norm. We engineer the cost **down** and price **against** it.

**Target: blended cost ≤ $0.05 per conversation**, achieved by (a) model tiering (§9 — small model
for routing/extraction/scoring; small reply by default; mid only for quote summaries), (b) tight
context budgets from good retrieval (top-5, not the whole knowledge base), and (c) hard token caps
per message/conversation.

**Margin model (target $0.05/conv. COGS):**

| Plan | Price | Included conv. | COGS @ incl. | Gross margin @ incl. | Overage |
|---|---|---|---|---|---|
| Free Trial | $0 | 50 (one-time) | $2.50 | — (CAC) | none — hard stop → fallback form |
| Starter | $29 | 150 | $7.50 | ~74% | $0.12/conv. |
| Growth | $79 | 500 | $25.00 | ~68% | $0.10/conv. |
| Pro | $149 | 1,000 | $50.00 | ~66% | $0.08/conv. |
| Agency | Custom | Custom | — | — | volume-tiered |

Every tier holds **≥66% gross margin at its included cap** (before Stripe ~2.9%+30¢ and support),
and overage captures heavy users at a posted, margin-positive rate. **This is the fix for v1.0's
Pro plan, which at 1,500 included conversations fell below cost.**

**Billable "conversation" — defined:** one visitor session within a **24-hour window**, hard-capped
at **20 messages** and a per-message token ceiling. Beyond the cap the session continues but counts
as a new conversation only after the window — preventing a single visitor from consuming unbounded
compute inside one billable unit.

**Hard ceilings (server-side, before any model call):** max 20 messages/conversation · max tokens/
message · monthly account token cap independent of conversation count.

---

## 14. Billing, Usage & Entitlements

- **Stripe** for subscriptions and invoices.
- Meter conversations, AI messages, tokens, lead captures, model name, and estimated cost
  (`ai_agent_usage`).
- **Never unlimited AI.** Plans include a conversation bundle; beyond it, **metered overage** at the
  posted rate (§13) — not a hard wall — except Free Trial, which hard-stops to the fallback form.
- When the included bundle is exhausted on paid plans, the owner is notified and can cap or allow
  overage; the widget keeps working.
- Past-due accounts keep **owner dashboard access** but **pause AI responses** after a grace period
  (widget shows the fallback form).
- Annual billing and a founding-customer offer (§21) are available.

**Entitlements by plan**

| Plan | Price | Entitlements |
|---|---|---|
| Free Trial | $0 | 14 days, 1 agent, 50 conversations, Crecy branding. |
| Starter | $29 | 1 agent, 1 widget, lead capture, FAQ answers, 150 conv./mo + overage. |
| Growth | $79 | 3 agents, quote assistant, lead inbox, custom branding, 500 conv./mo + overage. |
| Pro | $149 | All 6 modes, analytics, follow-up drafts, team access, 1,000 conv./mo + overage. |
| Agency | Custom | Multiple client sites, white-label, higher usage, priority support. |

---

## 15. Lead Scoring Rubric **[v1.1 — new, defined]**

`generateLeadScore()` returns a **0–100** score with a stored `score_breakdown`. BANT, reframed for
local SMB:

| Signal | Weight | What earns points |
|---|---:|---|
| **Intent** | 35 | Asked to quote / book / pay a deposit / "ready to start" |
| **Urgency** | 25 | Named timeline ("this week", a date) vs. "just browsing" |
| **Contactability** | 25 | Phone given (25) > email only (15) > none (0) |
| **Need / fit** | 15 | Service requested matches an offered service & service area |

**Thresholds:** **Hot > 70** (notify owner immediately) · **Warm 40–70** (lead inbox + follow-up
draft) · **Cool < 40** (saved, low-priority nurture). Chatbot-qualified funnels convert ~2.4× static
forms, so the score must be trustworthy and explainable — hence the stored breakdown.

---

## 16. AI Quality & Evaluation Harness **[v1.1 — new, defined]**

The #1 requirement — "must not hallucinate" — is now **measurable and gated**, using the 2026 LLM
testing pyramid.

**Base — deterministic, every commit (cheap, no LLM judge):**
- **Citation validity** — every `cited_knowledge_id` exists and is active (catches "fake citations",
  the dangerous case where an answer looks sourced but isn't). Target **100%**.
- Refusal-when-no-knowledge, PII-redaction in logs, response format, p95 latency budget.

**Middle — regression, before any prompt/model change:**
- A **frozen golden set**: ~25 Q&A per industry template (×6 ≈ 150 cases), scored by a
  **rubric-based LLM-as-judge** for faithfulness, hallucination rate, and refusal correctness.
- **Deploys are gated** on this suite; results land in `ai_eval_runs`.

**Top — red-team + canary:**
- Adversarial cases: visitors trying to extract exact prices, **prompt-injection from visitor
  messages**, jailbreaks.
- Daily sampling of live pilot traffic.

**Published AI SLOs (the product is held to these):**

| Metric | Target |
|---|---|
| Hallucination rate (unsupported claim in a grounded answer) | **< 1%** |
| Citation validity | 100% |
| Refusal correctness (refuses when it should) | > 95% |
| Handoff precision | > 90% |
| p95 response latency | < 3s |

**Judge discipline:** validate the LLM judge against a small human-labeled set before trusting it —
2026 research documents judge bias (verbosity, self-preference, position). Never gate on an
unmeasured judge.

---

## 17. Security, Privacy & Abuse Protection

| Risk | Required protection |
|---|---|
| Widget key theft | Allowed-domain validation + rate limits. |
| Prompt leakage | System prompts & private knowledge never returned to the browser. |
| AI hallucination | Knowledge-only grounded answers (§10) + fallback/handoff + eval gate (§16). |
| **Prompt injection [v1.1]** | Visitor input and retrieved text treated as **data, not instructions**; engine ignores override attempts. |
| Spam/abuse | IP/session/key rate limits, spam flags, admin pause. |
| Runaway AI cost | Plan limits, token caps, message caps, monthly ceilings, admin monitoring (§13). |
| PII exposure | Minimum-necessary collection, secure storage, owner/admin-only access, **PII redaction in logs [v1.1]**. |
| External site slowdown | Async script, CDN/static cache, non-blocking render. |

**Privacy & compliance [v1.1]:** explicit **consent checkbox** before contact capture · **data
retention** policy (transcripts retained 12 months default, owner-configurable 3–24 months) ·
**GDPR/CCPA** stance with data export & deletion on request · **DPA** available for EU customers ·
admin access logged in `ai_admin_events` · public APIs validate server-side every time (never rely
on UI gating).

---

## 18. Notifications & Human Handoff **[v1.1 — new, defined]**

**Notifications** — transactional email via **Resend** (or SendGrid): **instant new-lead alert**
(hot leads always) + a **daily digest**. **SMS via Twilio** on Growth+ for hot leads. Channels are
owner-configurable in `/ai/settings`.

**Human handoff** — when a handoff trigger fires (§9): the visitor sees the safe fallback message
and a contact form; the owner receives an **immediate notification** (email + SMS on Growth+) with
the transcript and captured fields; the conversation is flagged `handoff` in the dashboard with a
target **first-response SLA of 1 business hour** (displayed to the owner, not promised to the
visitor).

---

## 19. Admin Operations & Observability

Admin visibility is launch-critical. During the pilot, admin reviews conversations **daily** to
catch incorrect answers, missing knowledge, abuse, and friction.

| Admin view | Purpose |
|---|---|
| Businesses | Accounts, billing state, trial status, owner info. |
| Agents | Active/paused, modes, install status, domains. |
| Conversations | Transcripts, handoffs, failed answers, usage, **cited knowledge [v1.1]**. |
| Leads | Lead quality, score breakdown, summary usefulness. |
| Usage/cost | Tokens, messages, **cost per account & per conversation [v1.1]**. |
| **Quality [v1.1]** | Hallucination rate, refusal correctness, handoff precision, eval-run history. |
| Errors | Failed model calls, API errors, widget failures. |
| Abuse/spam | Pause abusive agents, block spammy sources. |

**Observability [v1.1]:** per-conversation trace (intent → retrieval scores → cited ids → model →
cost), feeding latency and cost dashboards.

---

## 20. Industry Templates

| Template | Core intake questions |
|---|---|
| Cleaning | Residential/commercial, service type, bedrooms, bathrooms, square footage, ZIP, date, pets, special requests. |
| Home services | Project type, interior/exterior, scope, location, timeline, photos, budget range. |
| Auto detailing | Year/make/model, interior/exterior/full, condition, mobile/drop-off, location, date. |
| Beauty/salon | Service, date/time, salon/mobile, style reference, hair type/length, deposit readiness. |
| Event rentals | Event date, item, delivery address, setup surface, start/end time, guest count. |
| IT support/repair | Device/system, issue, remote/onsite, business/personal, urgency, OS. |
| Car rental | Rental dates, vehicle type, pickup/delivery, driver age, insurance, distance. |

**Templates are tuned weekly from real pilot conversations** — this is where the data moat compounds
(§25).

---

## 21. Go-to-Market & Pilot Launch **[v1.1 — expanded, defined]**

**Beachhead:** **one vertical — Cleaning — at launch.** Sharper message, better template, faster
word-of-mouth within the niche. Expand verticals only after the first is repeatable.

**Acquisition motion (founders drive the first ~20 customers):**
1. **Warm network first**, then **targeted cold outreach** to local cleaning businesses (Google
   Maps/Yelp), personalized with a **Loom demo of the AI answering a "how much?" on the prospect's
   own website**. Personalized, AI-assisted outbound lifts reply rates ~25% over mass-blasting.
2. **Concierge onboarding** — the founder hand-builds each business's knowledge base from their
   site. Removes activation friction *and* generates the template-improvement data (the moat).
3. **Agency channel** — partner with web-design/marketing agencies serving SMBs to resell
   white-label (operationalizes the Agency tier).
4. **Waitlist + landing page live during the build**; "**Powered by Crecy AI**" branding on
   Free/Starter widgets as a built-in referral surface.

**Pilot plan**

| Element | Plan |
|---|---|
| Pilot size | 5–10 cleaning businesses. |
| Offer | 14-day free trial **or** founding-customer plan at **$19/mo for the first 3 months**. |
| Daily admin task | Review conversations, incorrect answers, missing knowledge, lead summaries. |
| **North-Star / activation [v1.1]** | **Businesses with ≥1 captured lead in the first 7 days.** |
| Success signal | ≥50 conversations, ≥10 qualified leads, **≥2 businesses paying monthly**. |
| Margin signal | Measured AI cost/customer stays comfortably below plan revenue (§13). |

Do not promise full automation in the pilot. Position as lead capture, support, and quote
assistance. Improve templates weekly. Ask owners directly whether the AI summaries are worth paying
for.

---

## 22. Build Roadmap

Estimates assume a small team; PR-0 is complete (this document).

| Phase | Goal | Est. **[v1.1]** | Acceptance |
|---|---|---|---|
| PR-0 | Master plan | done | This document approved; no code. |
| PR-1 | Database + retrieval foundation | 1.5 wk | Schema, RLS, **pgvector + tsvector indexes [v1.1]**, owner/admin access, usage tables. |
| PR-2 | Business onboarding | 1 wk | Create business, choose industry/problem, create first agent. |
| PR-3 | Knowledge setup + embeddings | 1 wk | Add knowledge; **embeddings + tsv generated on write [v1.1]**. |
| PR-4 | AI preview chat + **grounded retrieval [v1.1]** | 1.5 wk | Owner tests agent; answers grounded + cited; usage logged. |
| PR-5 | Embeddable widget | 1.5 wk | Script loads externally, config validated, message API works. |
| PR-6 | Lead inbox / mini CRM + **scoring [v1.1]** | 1.5 wk | Leads, summaries, transcripts, statuses, notes, score breakdown, follow-up draft. |
| PR-7 | Quote templates | 1 wk | ≥6 industry templates with structured intake. |
| PR-8 | Billing, limits + **cap/overage [v1.1]** | 1.5 wk | Stripe, entitlements, included+overage, fallback form. |
| PR-9 | Admin + **quality dashboard & eval harness [v1.1]** | 1.5 wk | Admin oversight; eval suite gates deploys; SLOs visible. |
| PR-10 | Marketing site + waitlist | 1 wk | Problem-based page, six agent cards, pricing, waitlist. |

**Critical path:** PR-1 → PR-3 → PR-4 (retrieval is the spine; it unblocks every agent). **Total ≈
13–14 weeks** to pilot-ready. **Pilot-ready = PR-1…PR-9 complete with eval SLOs green.**

---

## 23. Acceptance Criteria

**Lead Capture Agent** — visitor can open the widget and ask a question · AI answers from configured
knowledge **(grounded + cited) [v1.1]** · detects buying intent and requests contact details · lead
saved with transcript, summary, contact, need, location, urgency, **and score [v1.1]** · owner
notified and sees the lead.

**Customer Service Agent** — answers common questions from services/FAQs/hours/policies/service area
· **refuses to guess when info is missing (retrieval below threshold) [v1.1]** · routes uncertain/
sensitive questions to handoff · captures buying-intent visitors as leads.

**Quote Assistant** — asks template-specific questions · produces a structured quote-ready summary ·
owner can view intake answers in lead detail · avoids exact final pricing unless pricing rules exist.

**Widget** — installs with one script tag · loads async, works mobile/desktop · validates domain +
public key server-side · restores conversation after reload · falls back to a contact form on error
or usage limit.

**AI quality [v1.1]** — eval suite green: hallucination rate < 1%, citation validity 100%, refusal
correctness > 95%, handoff precision > 90%, p95 < 3s.

---

## 24. Final Build Checklist

| Area | Launch requirement |
|---|---|
| Product | Clear six-agent positioning; MVP on leads, support, quotes; one beachhead vertical. |
| Widget | Async embed, public config, message API, lead capture, fallback form. |
| Dashboard | Business setup, agent config, knowledge, lead inbox, analytics, billing, **quality [v1.1]**. |
| AI | Prompt layers, **grounded retrieval + citations [v1.1]**, extraction, summaries, scoring, handoff. |
| **Retrieval [v1.1]** | pgvector + tsvector hybrid, rerank, no-answer threshold. |
| Data | Businesses, agents, knowledge, conversations, messages, leads, usage, entitlements, eval runs. |
| Billing | Stripe, included + **overage [v1.1]**, upgrade prompts, fallback on limit. |
| **Economics [v1.1]** | Model tiering, ≤$0.05/conv. target, ≥66% margin at cap, hard token ceilings. |
| Security | Domain validation, rate limits, no prompt leakage, **prompt-injection defense [v1.1]**, RLS, audit logs. |
| **Compliance [v1.1]** | Consent, retention policy, GDPR/CCPA export/delete, DPA, PII redaction. |
| **Quality [v1.1]** | Eval pyramid, published SLOs, deploy gate, judge validated. |
| Admin | Visibility into businesses, agents, conversations, leads, usage, errors, abuse, quality. |
| GTM/Pilot | 5–10 cleaning businesses, founder-led + concierge, weekly template tuning, North-Star tracked. |

---

## 25. The Moat **[v1.1 — new]**

Industry templates alone are copyable in a weekend. The durable moat is the **data flywheel**:
every pilot conversation tunes the per-vertical intake questions, knowledge defaults, and prompt
rules — so Crecy AI's Cleaning template (then the next vertical) gets measurably better with use in
a way a generic competitor's cannot. Grounded retrieval + the eval harness make that improvement
**safe and measurable**; the proprietary intake data makes it **compounding**.

---

**Final verdict:** With v1.1, Crecy AI is not "a strong plan with soft spots" — it is a complete,
defensible, build-ready specification. The economics are proven, the AI promise is measurable, the
retrieval spine is defined, and the path to the first paying customers is explicit. Translate it
into SQL migrations, API routes, widget code, AI-engine modules, and dashboard pages.

*Confidential planning draft — `crecyai.app` proposed domain — Version 1.1*
