---
permalink: /projects/
title: "Projects"
layout: default
---

<main class="main-content">
  <div class="container-narrow">

# Projects

A collection of my work in computational biology, drug discovery, and biomedical ML.

---

## Computational Protein Design

Working alongside [Dr. Anurag Agrawal](https://en.wikipedia.org/wiki/Anurag_Agrawal_(medical_scientist)) at KCDH-A on computational approaches to protein and antibody design.

### CD20 Binder Design
Participated in the [Bits to Binders 2024](https://github.com/ccalia/Bits_to_Binders_2024) challenge, designing computational binders targeting CD20 for B-cell lymphoma therapeutics.

### Nipah Virus Binder
Competing in the [Adaptyv Nipah Competition](https://proteinbase.com/competitions/adaptyv-nipah-competition) using diffusion-based generative models including [BoltzGen](https://github.com/HannesStark/boltzgen) for *de novo* binder design. See [my designs](https://proteinbase.com/tp53).

### Immune Repertoire Profiling
Participating in the [AIRR-ML-25 Challenge](https://uio-bmi.github.io/adaptive_immune_profiling_challenge_2025/) to predict disease states from T-cell receptor (TCR) repertoires. Built a [multi-stream ensemble pipeline](https://deepwiki.com/inventcures/airr-ml-25-challenge) combining DeepRC attention networks, ESM-2 protein language models, FAISS clustering, and immunological feature engineering.

For a comprehensive overview of AI-driven antibody design, see this excellent [state-of-the-art review](https://www.booleanbiotech.com/p/ai-is-revolutionizing-antibody-engineering-part2).

---

## Drug Discovery & Regulatory Analysis

### FDA Complete Response Letter Analysis
Built a [comprehensive analysis platform](https://deepwiki.com/inventcures/fda_crl_analysis) examining 297 FDA Complete Response Letters (drug application rejections) to uncover patterns in approval outcomes.

**Key features:**
- Random Forest classifier achieving 72% accuracy in predicting ultimate approval outcome
- Language analysis measuring FDA tone through severity and certainty scoring
- Pattern recognition identifying which deficiency categories lead to approval vs. permanent rejection
- Interactive dashboards with full-text search across the entire document corpus

**Major finding:** Nearly half of CRLs eventually lead to approval, yet certain deficiency types like clinical efficacy failures have <25% rescue rates.

### Clinical Trials Dashboards
- [AACR 2025 Clinical Trials Dashboard](/aacr2025/) - Interactive visualization of clinical trial data from AACR 2025
- [ASCO 2025 Data Visualization](/asco2025.html) - Analysis of oncology research from ASCO 2025 annual meeting

---

## Grants

In November 2024, I received a [Grand Challenges India](https://gcgh.grandchallenges.org/grant/clinical-decision-support-tool-comprising-extractive-and-conversational-generative-large) grant (funded by the Gates Foundation, administered by DBT-BIRAC) with [Dr. Anurag Agrawal](https://en.wikipedia.org/wiki/Anurag_Agrawal_(medical_scientist)) as PI and myself as co-investigator.

We're building a clinical decision support tool using extractive and conversational generative LLMs. Read more about [our work](https://docs.google.com/document/d/1FQ4K4MkBgBlf4TTYtwiafDUmSQ0KggTW_jerPcG7DdY/edit?usp=sharing) and check out [my code](https://deepwiki.com/inventcures/rag_gci).

  </div>
</main>
