---
permalink: /iml-project-ideas/formal-math/
title: "Formal Mathematics & Lean4 — Open Problems"
layout: default
---

<main class="main-content">
  <div class="container-narrow">

<style>
  .fm-breadcrumb { font-size: 0.78rem; color: #9ca3af; margin-bottom: 2rem; }
  .fm-breadcrumb a { color: #6b7280; text-decoration: none; }
  .fm-breadcrumb a:hover { color: #1e1b4b; }

  .fm-hero { text-align: center; margin: 0 0 2.5rem 0; }
  .fm-hero h1 { font-size: 1.85rem; font-weight: 800; line-height: 1.25; margin: 0.5rem 0; color: #1e1b4b; }
  .fm-hero .subtitle { font-size: 1rem; color: #666; max-width: 520px; margin: 0.75rem auto 0; line-height: 1.6; }
  .fm-badge { display: inline-block; background: linear-gradient(135deg, #f59e0b, #d97706); color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.3rem 0.7rem; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.75rem; }

  .fm-overview { margin: 0 0 2rem; }
  .fm-overview p { font-size: 0.88rem; color: #374151; line-height: 1.75; margin: 0 0 1rem; }

  .fm-section-head { font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af; margin: 2rem 0 0.75rem; }

  .fm-courses { margin: 0 0 2rem; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; }
  .fm-course-row { display: flex; align-items: baseline; gap: 0.75rem; padding: 0.6rem 1rem; border-bottom: 1px solid #f3f4f6; font-size: 0.82rem; }
  .fm-course-row:last-child { border-bottom: none; }
  .fm-course-code { font-weight: 700; color: #374151; white-space: nowrap; min-width: 150px; }
  .fm-course-projects { color: #6b7280; }
  .fm-course-note { font-size: 0.72rem; color: #9ca3af; margin-left: auto; white-space: nowrap; }

  .fm-table { width: 100%; border-collapse: collapse; margin: 0.75rem 0 2rem; font-size: 0.82rem; }
  .fm-table th { text-align: left; padding: 0.5rem 0.6rem; border-bottom: 2px solid #e5e7eb; color: #6b7280; font-weight: 600; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; }
  .fm-table td { padding: 0.6rem 0.6rem; border-bottom: 1px solid #f3f4f6; color: #374151; vertical-align: top; }
  .fm-table tr:hover { background: #fafafa; }
  .fm-table .id { font-weight: 700; font-size: 0.75rem; white-space: nowrap; color: #dc2626; }
  .fm-table .title-cell { font-weight: 500; }
  .fm-table .desc-cell { font-size: 0.78rem; color: #6b7280; line-height: 1.5; }
  .fm-table .prereq-cell { font-size: 0.75rem; color: #6b7280; }
  .fm-tag { display: inline-block; padding: 0.1rem 0.4rem; border-radius: 3px; font-size: 0.65rem; font-weight: 600; margin-right: 0.2rem; }
  .fm-tag-a { background: #fef2f2; color: #dc2626; }
  .fm-tag-i { background: #eff6ff; color: #2563eb; }

  .fm-refs { margin: 0 0 2rem; }
  .fm-refs ul { margin: 0; padding-left: 1.2rem; font-size: 0.82rem; color: #374151; line-height: 1.9; }
  .fm-refs ul li a { color: #2563eb; text-decoration: none; }
  .fm-refs ul li a:hover { text-decoration: underline; }

  .fm-cta { text-align: center; margin: 2rem 0 1rem; padding: 1.5rem; background: linear-gradient(135deg, #1e1b4b, #312e81); border-radius: 10px; color: white; }
  .fm-cta p { margin: 0 0 0.5rem; font-size: 1rem; font-weight: 600; }
  .fm-cta .sub { margin: 0; font-size: 0.83rem; color: #c7d2fe; line-height: 1.5; }
</style>

<!-- ===== BREADCRUMB ===== -->
<div class="fm-breadcrumb">
  <a href="/iml-project-ideas/">40 Open Problems</a> &rsaquo; Formal Mathematics &amp; Lean4
</div>

<!-- ===== HERO ===== -->
<div class="fm-hero">
  <div class="fm-badge">Domain &middot; 4 Projects &middot; Advanced</div>
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style="display:block;margin:0 auto 0.75rem;">
    <path d="M12 36l12-24 12 24" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M17 27h14" stroke="#fcd34d" stroke-width="2" stroke-linecap="round"/>
  </svg>
  <h1>Formal Mathematics &amp; Lean4</h1>
  <p class="subtitle">Four open problems at the intersection of interactive theorem proving, algorithmic information theory, and computational biology.</p>
</div>

<!-- ===== DOMAIN OVERVIEW ===== -->
<div class="fm-overview">

<p>The formal theorem proving landscape in 2026 has shifted from curiosity to capability. Mathlib now contains over 210,000 machine-verified theorems spanning algebra, analysis, topology, and measure theory. AlphaProof (DeepMind, <em>Nature</em> 2025) achieved an IMO silver medal with Lean4 proofs; Aletheia (Google DeepMind, 2026) has produced two genuinely novel publishable mathematical results. Leanstral (Mistral, March 2026) democratised proof engineering further: a 6B-parameter open-weight model that is 92x cheaper than frontier models while matching their success rates on Mathlib-style benchmarks. The tooling &mdash; LeanDojo-v2, LEANHAMMER, TorchLean &mdash; makes AI-assisted formalization a realistic undergraduate project for the first time.</p>

<p>Protein design <em>needs</em> formalization urgently. The Adaptyv EGFR competition (2025) exposed a brutal fact: no correlation exists between any current computational score (ipTM, iPAE, ESM2 pLDDT) and actual wet-lab binding. Ramachandran angle constraints, steric clash thresholds, and binding interface complementarity are precisely specified in structural biology yet have never been expressed as Lean4 propositions. With clinical antibodies showing ~28% off-target reactivity rates (Dai et al., <em>Structure</em> 2026), the absence of a formal specificity framework is not merely an academic gap &mdash; it is a patient safety problem.</p>

<p>The "proteins-as-programs" idea (Ishaan Direction D2) offers a different angle. Proteins and Brainfuck share a structural parallel: minimal alphabets (20 amino acids / 8 instructions) producing emergent complexity. Treating protein sequences as programs in a formal language (ProtLang) makes Kolmogorov complexity directly applicable: the length of the shortest ProtLang program that generates a sequence provides information-theoretic lower bounds on protein designability, and may explain why some binding targets are systematically harder to design against than others in rfab-harness campaigns.</p>

<p>These two threads &mdash; formal verification of protein constraints and algorithmic information theory for sequences &mdash; connect directly to the three Ishaan Varior research directions: D1 (formal verification), D2 (proteins-as-programs), and D5 (AI-augmented mathematical discovery for biomedical conjectures). Project I12, which analyzes convergence of the simplex optimizer underlying all mosaic-based designs, is formally an optimization project but bridges here: rigorous convergence proofs for non-convex objectives on the probability simplex are precisely the kind of result that could eventually be formalized in Lean4 and contributed to Mathlib.</p>

</div>

<!-- ===== ASHOKA COURSEWORK CONNECTION ===== -->
<p class="fm-section-head">Ashoka Coursework Connection</p>

<div class="fm-courses">
  <div class="fm-course-row">
    <span class="fm-course-code">CS 5310 / MAT 3216 &mdash; Symbolic Logic</span>
    <span class="fm-course-projects">Directly prepares for A3, A4: formal languages, proof theory, Curry-Howard correspondence</span>
  </div>
  <div class="fm-course-row">
    <span class="fm-course-code">CS 4101 &mdash; Theory of Computation</span>
    <span class="fm-course-projects">Core prerequisite for A3, A4: Turing machines, decidability, Kolmogorov complexity, formal language theory</span>
  </div>
  <div class="fm-course-row">
    <span class="fm-course-code">MAT 3201 / MAT 3102 &mdash; Algebra I &amp; II</span>
    <span class="fm-course-projects">Type theory connections for A3; algebraic structures for ProtLang semantics in A4; Lean4 Mathlib foundations for A6</span>
  </div>
  <div class="fm-course-row">
    <span class="fm-course-code">MAT 2301 &mdash; Real Analysis</span>
    <span class="fm-course-projects">Convergence proofs and Lipschitz analysis for I12; ODE foundations for A6 (Gompertz growth, replicator dynamics)</span>
  </div>
  <div class="fm-course-row">
    <span class="fm-course-code">MAT 3302 &mdash; Differential Equations</span>
    <span class="fm-course-projects">Dynamical systems theory for A6: tumor growth models, evolutionary game theory, optimal control</span>
  </div>
  <div class="fm-course-row">
    <span class="fm-course-code">Lean4 (self-study)</span>
    <span class="fm-course-projects">Learnable during project via "Mathematics in Lean" tutorial and Mathlib docs &mdash; all four projects</span>
    <span class="fm-course-note">~4-6 weeks to working proficiency</span>
  </div>
</div>

<!-- ===== PROJECTS TABLE ===== -->
<p class="fm-section-head">Projects in This Domain</p>

<table class="fm-table">
<thead>
  <tr>
    <th>ID</th>
    <th>Project</th>
    <th>Description</th>
    <th>Key Prereqs</th>
    <th>Tier</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="id">A3</td>
    <td class="title-cell">Formal Verification of Protein Designs via Lean4</td>
    <td class="desc-cell">Build <em>ProteinSpec</em>, a Lean4 library that formalizes Ramachandran constraints, steric clash thresholds, and binding interface geometry as machine-checkable propositions. Validate retrospectively on Adaptyv EGFR and NiPaH competition designs using Leanstral for automated tactic generation.</td>
    <td class="prereq-cell">Theory of Computation, Algebra I/II, Programming Languages</td>
    <td><span class="fm-tag fm-tag-a">Advanced</span></td>
  </tr>
  <tr>
    <td class="id">A4</td>
    <td class="title-cell">Proteins-as-Programs: Kolmogorov Complexity and Minimal Languages</td>
    <td class="desc-cell">Define ProtLang, a 20-instruction formal language with one instruction per amino acid, prove Turing completeness, derive Kolmogorov complexity bounds for target folds, and test whether complexity correlates with evolutionary conservation and experimental designability across 100 natural proteins.</td>
    <td class="prereq-cell">Theory of Computation, Discrete Mathematics, Algebra I</td>
    <td><span class="fm-tag fm-tag-a">Advanced</span></td>
  </tr>
  <tr>
    <td class="id">A6</td>
    <td class="title-cell">AI-Augmented Mathematical Discovery for Biomedical Conjectures</td>
    <td class="desc-cell">Formalize 5-10 mathematical oncology conjectures in Lean4 &mdash; Gompertzian growth dominance, evolutionary game theory equilibria for drug resistance, optimal combination therapy scheduling &mdash; using Leanstral and LEANHAMMER for AI-assisted proof engineering, with results submitted to Mathlib.</td>
    <td class="prereq-cell">Real Analysis, Differential Equations, Algebra II</td>
    <td><span class="fm-tag fm-tag-a">Advanced</span></td>
  </tr>
  <tr>
    <td class="id" style="color: #2563eb;">I12</td>
    <td class="title-cell">Convergence Analysis of Simplex Optimization for Protein Design</td>
    <td class="desc-cell">Prove convergence of simplex_APGM (the algorithm behind Escalante Bio's mosaic library) for non-convex protein design losses: O(1/k&sup2;) rate in the convex case, critical-point convergence under Lipschitz gradients, and a rounding gap bound from continuous PSSM to discrete sequence. Compare mirror descent vs projected gradient empirically on mosaic's 22 benchmark targets.</td>
    <td class="prereq-cell">Real Analysis, Linear Algebra</td>
    <td><span class="fm-tag fm-tag-i">Intermediate</span></td>
  </tr>
</tbody>
</table>

<!-- ===== KEY REFERENCES ===== -->
<p class="fm-section-head">Key References</p>

<div class="fm-refs">
<ul>
  <li><a href="https://leandojo.org/" target="_blank">LeanDojo</a> &mdash; AI-assisted Lean4 theorem proving: data extraction, proof search, benchmarks (leandojo.org)</li>
  <li><a href="https://github.com/leanprover-community/mathlib4" target="_blank">Mathlib4</a> &mdash; 210K+ formalized theorems, 1.9M lines, 500+ contributors (github.com/leanprover-community/mathlib4)</li>
  <li><a href="https://lean-lang.org/" target="_blank">Lean4</a> &mdash; Theorem prover and functional programming language based on dependent type theory (lean-lang.org)</li>
  <li>AlphaProof &mdash; DeepMind, <em>Nature</em> 2025. IMO silver medal: 4/6 problems solved with machine-verified Lean4 proofs.</li>
  <li>Aletheia &mdash; Google DeepMind, 2026. Towards Autonomous Mathematics Research. 87&ndash;90% on Olympiad problems; two novel publishable results.</li>
  <li>Leanstral &mdash; Mistral AI, March 2026. 6B-parameter open-weight Lean4 agent (Apache 2.0); 92x cheaper than Claude Opus.</li>
  <li>Li, M. &amp; Vit&aacute;nyi, P. (2008). <em>An Introduction to Kolmogorov Complexity and Its Applications</em>, 3rd ed. Springer.</li>
  <li>Altrock, P. M., Liu, L. L., &amp; Michor, F. (2015). The mathematics of cancer: integrating quantitative models. <em>Nature Reviews Cancer</em>, 15(12), 730&ndash;745.</li>
</ul>
</div>

<!-- ===== BOTTOM CTA ===== -->
<div class="fm-cta">
  <p>Ready to formalize something that has never been proved?</p>
  <p class="sub">Email with subject <em>"IML: A3"</em>, <em>"IML: A4"</em>, <em>"IML: A6"</em>, or <em>"IML: I12"</em>.<br>These are 2-semester thesis-track projects &mdash; Y4 students and motivated Y3s welcome.</p>
</div>

<p style="text-align: center; font-size: 0.7rem; color: #ccc; margin-top: 1rem;"><a href="/iml-project-ideas/" style="color: #9ca3af;">&larr; Back to all 40 projects</a> &nbsp;&middot;&nbsp; Last updated March 2026.</p>

  </div>
</main>
