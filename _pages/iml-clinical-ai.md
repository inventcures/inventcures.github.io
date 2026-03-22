---
permalink: /iml-project-ideas/clinical-ai/
title: "Clinical AI & Medical Education — Open Problems"
layout: default
---

<main class="main-content">
  <div class="container-narrow">

<style>
  .iml-hero { text-align: center; margin: 0 0 2.5rem 0; }
  .iml-hero h1 { font-size: 2rem; font-weight: 800; line-height: 1.25; margin: 0.5rem 0; color: #1e1b4b; }
  .iml-hero .subtitle { font-size: 1.05rem; color: #666; max-width: 560px; margin: 0.75rem auto 0; line-height: 1.6; }
  .iml-badge { display: inline-block; background: linear-gradient(135deg, #dc2626, #f59e0b); color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.3rem 0.7rem; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.75rem; }

  .iml-breadcrumb { font-size: 0.82rem; color: #9ca3af; margin: 0 0 2rem; }
  .iml-breadcrumb a { color: #6b7280; text-decoration: none; }
  .iml-breadcrumb a:hover { color: #dc2626; }

  .iml-overview { margin: 2rem 0; }
  .iml-overview p { font-size: 0.92rem; color: #374151; line-height: 1.75; margin: 0 0 1rem; }

  .iml-cta { margin: 1.5rem 0; padding: 1.1rem 1.4rem; background: #fef2f2; border-left: 4px solid #dc2626; border-radius: 4px; }
  .iml-cta p { margin: 0; font-size: 0.88rem; color: #991b1b; line-height: 1.6; }
  .iml-cta strong { color: #7f1d1d; }

  .iml-courses { margin: 2rem 0; padding: 1.25rem; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; }
  .iml-courses h2 { font-size: 0.95rem; font-weight: 700; color: #374151; margin: 0 0 0.9rem; }
  .iml-course-row { display: flex; align-items: baseline; gap: 0.75rem; margin: 0.45rem 0; font-size: 0.82rem; }
  .iml-course-code { font-weight: 700; color: #6b7280; min-width: 170px; white-space: nowrap; }
  .iml-course-arrow { color: #d1d5db; }
  .iml-course-projects { color: #374151; }
  .iml-course-projects .pid { font-weight: 700; }
  .iml-course-projects .pid-b { color: #7c3aed; }
  .iml-course-projects .pid-i { color: #2563eb; }
  .iml-course-projects .pid-a { color: #dc2626; }

  .iml-table { width: 100%; border-collapse: collapse; margin: 0.75rem 0 2rem; font-size: 0.82rem; }
  .iml-table th { text-align: left; padding: 0.5rem 0.6rem; border-bottom: 2px solid #e5e7eb; color: #6b7280; font-weight: 600; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; }
  .iml-table td { padding: 0.55rem 0.6rem; border-bottom: 1px solid #f3f4f6; color: #374151; vertical-align: top; }
  .iml-table tr:hover { background: #fafafa; }
  .iml-table .id { font-weight: 700; font-size: 0.75rem; white-space: nowrap; }
  .iml-table .id-b { color: #7c3aed; }
  .iml-table .id-i { color: #2563eb; }
  .iml-table .id-a { color: #dc2626; }
  .iml-table .title-cell { font-weight: 500; }
  .iml-table .desc-cell { font-size: 0.78rem; color: #6b7280; line-height: 1.5; }
  .iml-table .tag { display: inline-block; padding: 0.1rem 0.35rem; border-radius: 3px; font-size: 0.65rem; font-weight: 600; margin-right: 0.2rem; white-space: nowrap; }
  .iml-table .tag-b { background: #faf5ff; color: #7c3aed; }
  .iml-table .tag-i { background: #eff6ff; color: #2563eb; }
  .iml-table .tag-a { background: #fef2f2; color: #dc2626; }
  .iml-table .tag-j { background: #dbeafe; color: #1d4ed8; }

  .iml-refs { margin: 2rem 0 1rem; padding: 1.25rem; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; }
  .iml-refs h2 { font-size: 0.95rem; font-weight: 700; color: #374151; margin: 0 0 0.75rem; }
  .iml-refs ul { margin: 0; padding-left: 1.2rem; font-size: 0.8rem; color: #555; line-height: 1.9; }
  .iml-refs li { margin: 0; }

  .iml-section-header { font-size: 0.85rem; color: #999; text-transform: uppercase; letter-spacing: 0.08em; margin: 2rem 0 0.5rem; }

  @media (max-width: 640px) {
    .iml-table { font-size: 0.75rem; }
    .iml-table th, .iml-table td { padding: 0.4rem; }
    .iml-course-code { min-width: 130px; }
  }
</style>

<!-- ===== BREADCRUMB ===== -->
<p class="iml-breadcrumb"><a href="/iml-project-ideas/">&larr; Back to All Open Problems</a></p>

<!-- ===== HERO ===== -->
<div class="iml-hero">
  <div class="iml-badge">Domain Focus &middot; 6 Projects</div>
  <svg width="48" height="48" viewBox="0 0 28 28" fill="none" style="margin: 0 auto 0.6rem; display: block;"><path d="M14 6v16M8 14h12" stroke="#dc2626" stroke-width="1.5" stroke-linecap="round"/><rect x="8" y="8" width="12" height="12" rx="2" stroke="#fca5a5" stroke-width="1.2"/></svg>
  <h1>Clinical AI &amp;<br>Medical Education</h1>
  <p class="subtitle">Dual-process reasoning. Automation bias. Neuro-symbolic safety guarantees.<br>Six open problems at the frontier of clinical AI.</p>
</div>

<!-- ===== CTA ===== -->
<div class="iml-cta">
  <p><strong>Interested?</strong> Email me at my Ashoka address with subject <em>"IML: [Project ID]"</em> &mdash; e.g., <em>"IML: I5"</em>. I supervise ML/systems aspects; for clinical domain questions I will connect you with appropriate co-mentors. All levels welcome.</p>
</div>

<!-- ===== DOMAIN OVERVIEW ===== -->
<h2 class="iml-section-header">Domain Overview</h2>
<div class="iml-overview">
  <p>The clinical AI landscape has shifted dramatically in 2025&ndash;2026. Adam Rodman's landmark study (Harvard/BIDMC) shows LLMs scoring 10/10 on the r-IDEA clinical reasoning framework &mdash; surpassing the 9/10 average for attending physicians. Yet this headline result coexists with a troubling paradox: clinicians augmented with AI decision support sometimes underperform AI alone. Automation bias causes clinicians to delegate reasoning to the system, so when the AI errs on a difficult case, augmented clinicians fail to catch it. Simply providing AI predictions is insufficient &mdash; systems must actively engage clinician reasoning. This gap between capability and safe deployment is the central open problem in the domain.</p>

  <p>On the education side, AI is reshaping how medicine is taught. Stanford's Fall 2025 medical curriculum now integrates AI literacy throughout, not as an elective. Faculty surveys reveal the scale of the challenge: 91% agree AI will help clinical practice, but only 12% feel "very familiar" with AI capabilities. Adaptive tutoring and virtual patient simulation &mdash; grounded in cognitive architectures (ACT-R for illness scripts, IRT for ability estimation, FSRS for spaced repetition, ZPD for scaffolding) &mdash; offer a principled approach to closing this gap at scale. Logical Neural Networks (LNNs), demonstrated at AMIA 2025, combine the interpretability of first-order logic rules with learnable weights, outperforming random forests and gradient boosting on clinical diagnosis tasks while remaining auditable by domain experts.</p>

  <p>These problems connect directly to Ashish's research portfolio. <strong>Cardio-Sahayak</strong> is a CVD clinical decision support system calibrated for South Asian populations, where standard Western biomarker thresholds (BMI, HbA1c, lipid profiles) systematically misperform. <strong>Virtual Tumor Board</strong> is a multi-agent simulation of the multi-disciplinary tumor board process. <strong>Onco-Shikshak</strong> is Ashish's flagship medical education system: a 6-agent AI tumor board simulation integrating ACT-R, IRT, FSRS, Bloom's Taxonomy, ZPD, and Deliberate Practice to model learner cognition at multiple levels simultaneously. Project B11 feeds directly into Cardio-Sahayak; project I13 extends Onco-Shikshak; project A10 targets the hardest open problem in both systems.</p>

  <p>The neuro-symbolic direction &mdash; led by collaborator Ishaan Varior (Direction D3) &mdash; targets what no existing system achieves: a dual-process clinical reasoning architecture where System 1 (LLM pattern matching) generates rapid hypotheses and System 2 (formally verified symbolic rules) analytically validates them, with metacognitive monitoring of when to escalate. No current clinical AI system has formal safety proofs that safety-critical rules &mdash; "never give immunotherapy to a patient with active autoimmune disease" &mdash; cannot be overridden by the neural component. That is what A10 attempts to build.</p>
</div>

<!-- ===== ASHOKA COURSEWORK CONNECTION ===== -->
<h2 class="iml-section-header">Ashoka Coursework Connection</h2>
<div class="iml-courses">
  <h2>Entry points by course completed</h2>
  <div class="iml-course-row">
    <span class="iml-course-code">CS 1101 Intro CS</span>
    <span class="iml-course-arrow">&rarr;</span>
    <span class="iml-course-projects"><span class="pid pid-b">B6</span> (FDA label NLP), <span class="pid pid-b">B10</span> (CDSS rule engine)</span>
  </div>
  <div class="iml-course-row">
    <span class="iml-course-code">MAT 2202 P&amp;S</span>
    <span class="iml-course-arrow">&rarr;</span>
    <span class="iml-course-projects"><span class="pid pid-b">B11</span> (CVD biomarkers with random forests) &mdash; Juneja-compatible</span>
  </div>
  <div class="iml-course-row">
    <span class="iml-course-code">CS 3410 Intro to ML</span>
    <span class="iml-course-arrow">&rarr;</span>
    <span class="iml-course-projects"><span class="pid pid-i">I5</span> (neuro-symbolic reasoning prototype), <span class="pid pid-i">I13</span> (tumor board extension)</span>
  </div>
  <div class="iml-course-row">
    <span class="iml-course-code">CS 5310/MAT 3216 Symbolic Logic</span>
    <span class="iml-course-arrow">&rarr;</span>
    <span class="iml-course-projects"><span class="pid pid-i">I5</span> (first-order logic rules), <span class="pid pid-a">A10</span> (formal verification)</span>
  </div>
  <div class="iml-course-row">
    <span class="iml-course-code">CS 4101 Theory of Computation</span>
    <span class="iml-course-arrow">&rarr;</span>
    <span class="iml-course-projects"><span class="pid pid-a">A10</span> (Lean4 safety proofs, decidability of clinical rule verification)</span>
  </div>
</div>

<!-- ===== PROJECTS TABLE ===== -->
<h2 class="iml-section-header">All 6 Projects</h2>

<table class="iml-table">
<thead>
  <tr><th>ID</th><th>Project</th><th>Description</th><th>Prereqs</th><th>Tier</th></tr>
</thead>
<tbody>
<tr>
  <td class="id id-b">B6</td>
  <td class="title-cell">Classifying FDA Drug Labels with NLP</td>
  <td class="desc-cell">Build TF-IDF and BioBERT classifiers to categorize sentences from FDA prescribing information into structured sections (indications, adverse reactions, contraindications). Demonstrates the gap between rule-based and neural approaches to regulatory text.</td>
  <td>CS 1101</td>
  <td><span class="tag tag-b">Beginner</span></td>
</tr>
<tr>
  <td class="id id-b">B10</td>
  <td class="title-cell">Simple Clinical Decision Support Rule Engine</td>
  <td class="desc-cell">Encode NCCN lung cancer guidelines as a Python inference engine and compare its recommendations against GPT-4 and Claude on 20 clinical vignettes. The rule engine represents System 2 reasoning; the comparison reveals the complementary failure modes of symbolic and neural approaches.</td>
  <td>CS 1101, Discrete Math</td>
  <td><span class="tag tag-b">Beginner</span></td>
</tr>
<tr>
  <td class="id id-b">B11</td>
  <td class="title-cell">Biomarker Identification for CVD Using Random Forests</td>
  <td class="desc-cell">Train random forest classifiers on the UCI Heart Disease and Framingham datasets, then use SHAP values to identify the most predictive biomarker panel for cardiovascular risk &mdash; with attention to which features matter most for South Asian populations.</td>
  <td>MAT 2202 P&amp;S</td>
  <td><span class="tag tag-b">Beginner</span> <span class="tag tag-j">Juneja</span></td>
</tr>
<tr>
  <td class="id id-i">I5</td>
  <td class="title-cell">Neuro-Symbolic Clinical Reasoning Prototype</td>
  <td class="desc-cell">Build a dual-process clinical reasoning module: System 1 is an LLM performing pattern-based diagnosis; System 2 is a rule-based guideline checker activated when confidence is low or safety-critical patterns are detected. Evaluated on 50 oncology vignettes against four system variants.</td>
  <td>Intro ML, Logic</td>
  <td><span class="tag tag-i">Intermediate</span></td>
</tr>
<tr>
  <td class="id id-i">I13</td>
  <td class="title-cell">AI-Augmented Tumor Board Simulation Extension</td>
  <td class="desc-cell">Extend Onco-Shikshak (Ashish's 6-agent tumor board simulation) with a new cancer type (paediatric GBM or neuroblastoma) and a new specialist agent role. Design and run a pilot evaluation measuring knowledge gain, reasoning quality, and learning outcomes against the original system.</td>
  <td>Intro ML, DSA</td>
  <td><span class="tag tag-i">Intermediate</span></td>
</tr>
<tr>
  <td class="id id-a">A10</td>
  <td class="title-cell">Formally Verified Dual-Process Clinical Reasoning</td>
  <td class="desc-cell">Building on I5, develop a full neuro-symbolic architecture integrating Logical Neural Networks with Lean4-verified safety proofs. Hard clinical rules (e.g., contraindications) are formally shown to be non-overridable by any neural component output. Integrated into Onco-Shikshak and evaluated with oncology residents on 100 vignettes.</td>
  <td>Theory of Computation, Symbolic Logic, Intro ML</td>
  <td><span class="tag tag-a">Advanced</span></td>
</tr>
</tbody>
</table>

<!-- ===== KEY REFERENCES ===== -->
<h2 class="iml-section-header">Key References</h2>
<div class="iml-refs">
  <h2>Papers &amp; tools</h2>
  <ul>
    <li><strong>Makani, A. (2026).</strong> Onco-Shikshak: AI-native medical education with cognitive architecture integration. <em>medRxiv</em>. &mdash; Ashish's flagship system; directly relevant to I13 and A10.</li>
    <li><strong>Rodman, A. (2025).</strong> Towards a Medical Superintelligence. <em>Massachusetts Medical Society</em>. &mdash; LLMs scoring 10/10 on r-IDEA; source of the automation bias analysis.</li>
    <li><strong>Logical Neural Networks for clinical diagnosis (2025).</strong> <em>AMIA Annual Symposium Proceedings</em>. PMC12150699. &mdash; LNNs outperforming random forests and gradient boosting on clinical tasks; key architecture for I5 and A10.</li>
    <li><strong>Croskerry, P. (2009).</strong> A Universal Model of Diagnostic Reasoning. <em>Academic Medicine</em>, 84, 1022&ndash;1028. &mdash; Foundational dual-process theory paper; theoretical grounding for I5 and A10.</li>
    <li><strong>Kahneman, D. (2011).</strong> Thinking, Fast and Slow. Farrar, Straus and Giroux. &mdash; System 1 / System 2 framework.</li>
    <li><strong>Li, Z. et al. (2023).</strong> Scallop: A Language for Neurosymbolic Programming. <em>PLDI 2023</em>. &mdash; Differentiable provenance semirings for end-to-end training through logical rules; relevant to A10. github.com/scallop-lang/scallop</li>
    <li><strong>IBM Research: Logical Neural Networks.</strong> Neural networks where each neuron implements a weighted first-order logic operation with learnable weights. github.com/IBM/LNN</li>
    <li><strong>Gupta, R. et al. (2019).</strong> Cardiovascular risk prediction in South Asians: a review. <em>Indian Heart Journal</em>, 71(2), 143&ndash;148. &mdash; Population-specific biomarker context for B11 and Cardio-Sahayak.</li>
  </ul>
</div>

<!-- ===== BOTTOM CTA ===== -->
<div style="text-align: center; margin: 2rem 0 1rem; padding: 1.5rem; background: linear-gradient(135deg, #1e1b4b, #312e81); border-radius: 10px; color: white;">
  <p style="margin: 0 0 0.5rem; font-size: 1.05rem; font-weight: 600;">Ready to work on one of these?</p>
  <p style="margin: 0 0 0.75rem; font-size: 0.85rem; color: #c7d2fe; line-height: 1.5;">Email with subject <em>"IML: [Project ID]"</em> &mdash; all levels welcome, undergrad through PhD.</p>
  <a href="/iml-project-ideas/" style="display: inline-block; padding: 0.5rem 1.25rem; background: white; color: #1e1b4b; border-radius: 6px; font-size: 0.82rem; font-weight: 700; text-decoration: none;">&larr; All 40 Open Problems</a>
</div>

<p style="text-align: center; font-size: 0.7rem; color: #ccc; margin-top: 1rem;">Last updated March 2026. Full project details available on request.</p>

  </div>
</main>
