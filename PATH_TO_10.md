# Crecy AI — The Path from 8.5 to 10/10

Concrete, build-ready upgrades that close the three gaps in [`ANALYSIS.md`](./ANALYSIS.md)
(unit economics, retrieval/AI-quality, go-to-market) plus the smaller items. Each
section says *what to add to the plan* and *why*, grounded in 2026 benchmarks. Sources
are listed at the bottom.

> The plan is already strong. None of this is a rewrite — it's the missing 15% that
> de-risks the parts the product actually lives or dies on.

---

## 1. Make the money math real (Pricing: 6 → 10)

**Problem:** the plan asserts "AI cost stays comfortably below plan revenue" but never
shows it, and the Pro tier ($149 / 1,500 conv. = **$0.099/conv.**) sits *below* the
worst-case fully-loaded cost ($0.15/conv.). Flat plans with only a conversation cap let
heavy users quietly erode margin — the documented 2026 "token tax" puts AI-app gross
margins ~30 points under the SaaS norm.

**Add to the plan:**

1. **A one-page unit-economics model** with explicit COGS assumptions and a target
   **blended cost ceiling of ~$0.03–0.05 per conversation** (achievable — see §2 + model
   tiering below), versus revenue-per-conversation per tier. Show the table; price against it.
2. **Model tiering to cut COGS at the source.** Use a cheap small model (Haiku-class) for
   `detectIntent()`, `shouldCaptureLead()`, and `extractLeadFields()`; reserve a mid model
   only for the customer-facing `generateAssistantReply()`. Most engine functions never
   need a frontier model.
3. **Move from pure-flat to a hybrid cap+overage model** (the 2026 consensus for margin
   protection): keep the monthly base price, keep the included conversation bundle, but add
   **metered overage at a posted rate** (e.g. $0.05–0.10/extra conversation) instead of a
   hard wall. Re-price or lower the Pro cap so its included conversations stay above cost.
4. **Define a billable "conversation" precisely** — e.g. one visitor session within a
   24-hour window, hard-capped at *N* messages and *T* tokens. Without this, one abusive
   visitor racks unlimited messages inside a single "conversation."
5. **Hard ceilings independent of conversation count:** max messages/conversation, max
   tokens/message, and a monthly account token cap. The plan mentions message-length caps —
   make all three explicit and enforced server-side before the model call.

**Result:** margin is provable, the heaviest users can't go upside-down, and "never
unlimited AI" becomes a real mechanism instead of a slogan.

---

## 2. Specify the retrieval layer — the missing keystone (Architecture: 8 → 10)

**Problem:** the entire promise is "answers from the business knowledge base *only*, no
hallucinated prices/policies," yet `loadBusinessKnowledge()` is one function name standing
in for the riskiest 30% of the build. Chunking and retrieval quality are what actually
prevent hallucination — "bad chunking guarantees failure even with strong embeddings."

**Add to the plan — a concrete RAG pipeline (no new infra; it lives in Postgres):**

1. **Storage: `pgvector` in the existing Supabase/Postgres.** Keeps embeddings under the
   same RLS model as the rest of the schema — no separate vector DB to secure.
2. **Chunking = the knowledge entry itself.** `ai_agent_knowledge` rows (services, FAQs,
   policies, pricing notes) are already discrete and structured — treat each as one chunk
   with `type`/`title` metadata. This is exactly the recommended *structure-aware* chunking,
   for free.
3. **Hybrid search**: combine pgvector semantic similarity with Postgres full-text
   (`tsvector`) keyword search. Vector-only retrieval misses exact tokens — prices, service
   names, ZIP codes — which is precisely the data an SMB bot must get right.
4. **Rerank top-K → top-N**: retrieve ~20 candidates, rerank to the best 3–5 before building
   context (a cross-encoder, or a cheap LLM rerank for MVP). Reranking is consistently the
   single biggest quality lift after chunking.
5. **Grounding + citations**: enforce an "Answer + Source" format. Each reply records the
   `cited_knowledge_ids` it used. This makes the anti-hallucination claim *auditable* and
   powers the admin review loop.
6. **No-answer threshold → handoff**: if the top retrieval score is below a set threshold,
   **do not generate** — trigger the fallback/handoff. This operationalizes "refuse to guess"
   instead of leaving it to prompt wording.

**Schema deltas:**
- `ai_agent_knowledge`: add `embedding vector`, `tsv tsvector` (+ ivfflat/HNSW + GIN indexes).
- `ai_messages`: add `cited_knowledge_ids[]`, `retrieval_score`, `grounded boolean`.

---

## 3. Add an AI-quality eval harness (AI safety: 6 → 10)

**Problem:** the #1 requirement is "must not hallucinate," but there's no way to *measure*
it. "Admin reviews conversations daily" is manual QA — it won't scale past the pilot and
gives no pass/fail gate. Adopt the 2026 LLM testing pyramid:

- **Base — deterministic, runs on every commit (cheap):** citation-validity (every cited id
  exists *and* is active — catches "fake citations," the dangerous failure where an answer
  *looks* sourced but isn't), refusal-when-no-knowledge, PII-redaction, format/latency
  budgets. Do **not** put an LLM-judge here — a $0.04 judge call per commit bankrupts the gate.
- **Middle — regression, runs before any prompt change:** a **frozen golden set** of ~20–30
  Q&A per industry template (×6 = ~150 cases), scored by rubric-based LLM-as-judge for
  *faithfulness / hallucination rate / refusal-correctness*. Gate deploys on it.
- **Top — red-team + canary:** adversarial cases (visitors trying to extract exact prices,
  **prompt-injection from visitor messages**, jailbreaks) plus daily sampling of live pilot
  traffic.

**Two things to also state explicitly:**
- **Publish AI SLOs** the product is held to, e.g. *hallucination rate < 1% of grounded
  answers*, *handoff precision target*, *refusal-correctness target*. The plan currently has
  zero measurable AI targets.
- **Validate the judge** against a small human-labeled set first — 2026 research documents
  judge bias (verbosity, self-preference, position). Never trust an unmeasured judge.

**Prompt-injection note (real gap):** the widget runs on untrusted external sites and takes
untrusted visitor input. The system prompt must treat retrieved knowledge and visitor text
as **data, not instructions**, and ignore override attempts. Add this to the global safety rules.

---

## 4. Add a customer-acquisition motion (GTM: 5 → 10)

**Problem:** the pilot plan is well-designed *once you have 5–10 businesses* — but never
says how they're found. Benchmarks: first 10 customers typically take 3–6 months; founders
sell to their network first, then targeted cold outreach; vertical GTM rewards focus.

**Add to the plan:**

1. **Pick ONE beachhead vertical for launch** (e.g. cleaning *or* auto detailing) instead of
   spreading across 7. Sharper message, better template, faster word-of-mouth inside the niche.
   Expand verticals only after the first is repeatable.
2. **Founder-led sequence:** warm network first → then targeted cold outreach to that
   vertical (local businesses via Maps/Yelp), personalized with a **Loom demo of the AI
   answering a "how much?" message on the prospect's *own* website**. AI-assisted, *personalized*
   outbound lifts reply rates ~25% over mass-blasting.
3. **Concierge onboarding for the pilot:** the founder hand-builds each business's knowledge
   base from their website. Removes activation friction *and* generates the
   template-improvement data that is the real moat.
4. **Operationalize the Agency tier:** partner with web-design/marketing agencies that
   already serve these SMBs and let them resell white-label. Today "Agency" is a price with
   no motion behind it.
5. **Run a waitlist/landing page *during* the build** (GTM should start before the product
   is done) and treat **"Powered by Crecy AI"** branding on Free/Starter widgets as a built-in
   referral surface.
6. **Define the North-Star / activation metric:** e.g. *businesses with ≥1 captured lead in
   the first 7 days* — the leading indicator that the pilot is working.

---

## 5. Close the small gaps (several dimensions: +0.5 overall)

- **Lead-scoring rubric (make it concrete).** Replace the vague "urgency/completeness/fit/
  intent" with an explicit 0–100 weighted score and thresholds — **hot > 70 / warm 40–70 /
  cool < 40** — and store the component breakdown on the lead. Reframe BANT for local SMB:
  **Need** (service match), **Urgency** (timeline), **Contactability** (phone given),
  **Intent** (asked to quote/book/pay). Chatbot-qualified funnels convert ~2.4× static forms,
  so the score must be trustworthy.
- **Notifications:** name the providers (email via Resend/SendGrid; optional SMS via Twilio),
  with instant new-lead alerts + a daily digest. Core to the lead loop but currently unspecified.
- **Handoff mechanics:** define the channel (email/SMS to owner + dashboard alert), an SLA,
  and exactly what the visitor sees while waiting.
- **Compliance:** add a data-retention policy (owner-configurable transcript retention), a
  GDPR/CCPA stance, PII redaction in logs, an explicit consent checkbox before contact
  capture, and a DPA for EU customers. Today it's just "show a privacy notice."
- **Observability:** per-conversation trace (intent → retrieval scores → cited ids → cost),
  plus latency and cost dashboards feeding the existing admin errors/usage views.
- **Roadmap:** add durations and a critical path to PR-0…PR-10, and a written definition of
  "pilot-ready."
- **State the moat in one line:** *proprietary, per-vertical intake data that compounds into
  better templates over time* — templates alone are copyable in a weekend; the data flywheel is not.

---

## Revised scorecard (with these changes applied)

| Dimension | Now | After |
|---|---:|---:|
| Vision & positioning | 9 | 9 |
| Scope discipline | 10 | 10 |
| Technical architecture | 8 | 10 |
| Security & abuse | 9 | 10 |
| Business model & pricing | 6 | 10 |
| AI quality & safety | 6 | 10 |
| Go-to-market | 5 | 9 |
| Roadmap & execution | 8 | 9 |
| Completeness as a build doc | 9 | 10 |
| **Overall** | **8.5** | **≈9.7 → 10** |

**The five highest-leverage moves, in order:**
1. Unit-economics page + model tiering + cap/overage re-pricing of Pro.
2. The `pgvector` hybrid-retrieval pipeline with citations and a no-answer threshold.
3. The eval pyramid + published hallucination SLO + prompt-injection defense.
4. One beachhead vertical + founder-led/concierge GTM + Agency channel.
5. Concrete lead-score rubric, notifications, handoff SLA, and compliance.

Do these and the plan is no longer "a great blueprint with three soft spots" — it's a
complete, defensible, build-ready 10/10.

---

## Sources

- [Hybrid Search and Re-Ranking in Production RAG (Towards Data Science)](https://towardsdatascience.com/hybrid-search-and-re-ranking-in-production-rag/)
- [RAG Best Practices: Chunking, Embeddings, Reranking, Hybrid Search (StackAI)](https://www.stackai.com/insights/retrieval-augmented-generation-(rag)-best-practices-for-enterprise-ai-chunking-embeddings-reranking-and-hybrid-search-optimization)
- [Reducing AI Hallucination in Production: RAG, Guardrails, HITL (Blockchain Council)](https://www.blockchain-council.org/ai/reducing-ai-hallucination-in-production-rag-guardrails-evaluation-hitl/)
- [RAG Grounding: 11 Tests That Expose Fake Citations (Medium/Nexumo)](https://medium.com/@Nexumo_/rag-grounding-11-tests-that-expose-fake-citations-30d84140831a)
- [LLM Testing in 2026: Methods and Strategies (Future AGI)](https://futureagi.com/blog/llm-testing-2026-methods-strategies/)
- [LLM as a Judge: A 2026 Guide (Label Your Data)](https://labelyourdata.com/articles/llm-as-a-judge)
- [The 2026 Guide to SaaS, AI, and Agentic Pricing Models (Monetizely)](https://www.getmonetizely.com/blogs/the-2026-guide-to-saas-ai-and-agentic-pricing-models)
- [The AI Pricing and Monetization Playbook (Bessemer)](https://www.bvp.com/atlas/the-ai-pricing-and-monetization-playbook)
- [Agent Pricing Models 2026: Token vs Outcome Billing (Digital Applied)](https://www.digitalapplied.com/blog/agent-pricing-models-token-vs-outcome-based-2026)
- [Direct Sales 101 for Early-Stage B2B SaaS Founders (Forum VC)](https://www.forumvc.com/thought-pieces/direct-sales-101-for-early-stage-b2b-saas-founders)
- [A B2B Founder's Guide to Generating Demand from Scratch (Bessemer)](https://www.bvp.com/atlas/a-b2b-founders-guide-to-generating-demand-from-scratch)
- [Conversational AI for Lead Qualification: Complete Guide (Digital Applied)](https://www.digitalapplied.com/blog/conversational-ai-lead-qualification-guide)
