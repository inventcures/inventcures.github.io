---
permalink: /iml-project-ideas/math-foundations/
title: "Mathematical Foundations — Open Problems"
layout: default
---

<main class="main-content">
  <div class="container-narrow">

<style>
  .mf-hero { text-align: center; margin: 0 0 2.5rem 0; }
  .mf-hero h1 { font-size: 2rem; font-weight: 800; line-height: 1.25; margin: 0.5rem 0; color: #1e1b4b; }
  .mf-hero .subtitle { font-size: 1.05rem; color: #666; max-width: 560px; margin: 0.75rem auto 0; line-height: 1.6; }
  .mf-badge { display: inline-block; background: linear-gradient(135deg, #0891b2, #0e7490); color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.3rem 0.7rem; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.75rem; }

  .mf-breadcrumb { font-size: 0.78rem; color: #9ca3af; margin-bottom: 2rem; }
  .mf-breadcrumb a { color: #6b7280; text-decoration: none; }
  .mf-breadcrumb a:hover { color: #0891b2; }
  .mf-breadcrumb span { margin: 0 0.4rem; }

  .mf-overview { margin: 0 0 2.5rem; }
  .mf-overview p { font-size: 0.88rem; color: #374151; line-height: 1.75; margin: 0 0 0.9rem; }

  .mf-courses { margin: 2rem 0; padding: 1.25rem; background: #f0f9ff; border-left: 4px solid #0891b2; border-radius: 4px; }
  .mf-courses h2 { font-size: 0.85rem; color: #0c4a6e; text-transform: uppercase; letter-spacing: 0.07em; margin: 0 0 0.9rem; font-weight: 700; }
  .mf-courses table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
  .mf-courses th { text-align: left; padding: 0.35rem 0.5rem; color: #6b7280; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; border-bottom: 1px solid #bae6fd; }
  .mf-courses td { padding: 0.45rem 0.5rem; border-bottom: 1px solid #e0f2fe; color: #374151; vertical-align: top; }
  .mf-courses td:first-child { font-weight: 600; white-space: nowrap; color: #0c4a6e; font-size: 0.78rem; }
  .mf-courses td code { font-size: 0.72rem; background: #e0f2fe; padding: 0.1rem 0.3rem; border-radius: 3px; color: #0369a1; }

  .mf-table { width: 100%; border-collapse: collapse; margin: 0.75rem 0 2rem; font-size: 0.82rem; }
  .mf-table th { text-align: left; padding: 0.5rem 0.6rem; border-bottom: 2px solid #e5e7eb; color: #6b7280; font-weight: 600; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; }
  .mf-table td { padding: 0.55rem 0.6rem; border-bottom: 1px solid #f3f4f6; color: #374151; vertical-align: top; }
  .mf-table tr:hover { background: #fafafa; }
  .mf-table .id { font-weight: 700; font-size: 0.75rem; white-space: nowrap; }
  .mf-table .id-i { color: #2563eb; }
  .mf-table .id-a { color: #dc2626; }
  .mf-table .title-cell { font-weight: 500; }
  .mf-table .desc { font-size: 0.78rem; color: #6b7280; margin-top: 0.15rem; }
  .mf-table .prereq { font-size: 0.75rem; color: #9ca3af; }
  .mf-table .tier-i { display: inline-block; padding: 0.1rem 0.4rem; border-radius: 3px; font-size: 0.65rem; font-weight: 700; background: #dbeafe; color: #1d4ed8; }
  .mf-table .tier-a { display: inline-block; padding: 0.1rem 0.4rem; border-radius: 3px; font-size: 0.65rem; font-weight: 700; background: #fee2e2; color: #b91c1c; }

  .mf-refs { margin: 2rem 0 1rem; padding: 1.25rem; background: #f9fafb; border-radius: 8px; }
  .mf-refs h2 { font-size: 1rem; margin: 0 0 0.75rem; color: #374151; font-weight: 700; }
  .mf-refs ul { margin: 0; padding-left: 1.2rem; font-size: 0.82rem; color: #555; line-height: 1.9; }
  .mf-refs a { color: #0891b2; text-decoration: none; }
  .mf-refs a:hover { text-decoration: underline; }

  .mf-section-label { font-size: 0.85rem; color: #999; text-transform: uppercase; letter-spacing: 0.08em; margin: 2rem 0 0.5rem; }
</style>

<!-- ===== BREADCRUMB ===== -->
<div class="mf-breadcrumb">
  <a href="/iml-project-ideas/">40 Open Problems</a>
  <span>&rsaquo;</span>
  Mathematical Foundations
</div>

<!-- ===== HERO ===== -->
<div class="mf-hero">
  <div class="mf-badge">Domain Deep-Dive &middot; Spring 2026</div>
  <svg width="48" height="48" viewBox="0 0 28 28" fill="none" style="margin: 0.5rem auto 0.25rem; display: block;">
    <path d="M7 21Q14 7 21 21" stroke="#0891b2" stroke-width="1.5" fill="none"/>
    <circle cx="10" cy="18" r="1.5" fill="#67e8f9"/>
    <circle cx="14" cy="11" r="1.5" fill="#67e8f9"/>
    <circle cx="18" cy="16" r="1.5" fill="#67e8f9"/>
  </svg>
  <h1>Mathematical Foundations<br>— Open Problems</h1>
  <p class="subtitle">3 projects where pure mathematics meets protein design, drug resistance, and generative models. Genuine open questions — not textbook exercises.</p>
</div>

<!-- ===== DOMAIN OVERVIEW ===== -->
<p class="mf-section-label">Domain Overview</p>
<div class="mf-overview">
  <p>The theory-practice gap in ML for science is vast and largely unexplored. Geometric deep learning on SE(3), diffusion models on manifolds, topological data analysis, and optimal transport all have rich theoretical frameworks — yet convergence guarantees, expressivity bounds, and approximation results for the actual loss landscapes encountered in protein design or drug discovery are almost entirely missing. The algorithms that won the Adaptyv Nipah competition were hand-tuned; the tools that evaluate generative models lack metric properties; the topological descriptors for protein structures use only one filtration parameter when biology offers many.</p>

  <p>The key mathematical tools in this domain are: <strong>topological data analysis</strong> (persistent homology, the stability theorem, multi-parameter persistence modules and their connection to quiver representations), <strong>optimal transport</strong> (Wasserstein distances, Sinkhorn's algorithm, gradient flows), <strong>optimization on the probability simplex</strong> (projected gradient, mirror descent with KL divergence, Frank-Wolfe), and <strong>information geometry</strong> (the Fisher information metric as the natural geometry on the simplex). These are not just computational tools — they are mathematical objects with open structural questions.</p>

  <p>Why math majors should care: these are genuine open mathematical problems, not "apply existing ML to biology". Project I12 asks for convergence proofs that do not exist in the literature for the protein design setting. Project A9 asks whether Wasserstein distances on protein sequence spaces metrize weak convergence — a functional analysis question. Project A11 asks for new results about the structure of persistence modules arising from protein data — a quiver representation theory question with biological stakes. The papers do not have the theorems yet; that is the point.</p>

  <p>Project A12, while classified under Mathematical Biology, sits equally in this domain: evolutionary game theory of drug resistance requires differential equations, fixed-point theorems for Nash equilibrium existence, Pontryagin's maximum principle for optimal drug scheduling, and branching processes for stochastic tumor models. It is pure applied mathematics, motivated by paediatric cancer.</p>
</div>

<!-- ===== ASHOKA COURSEWORK CONNECTION ===== -->
<p class="mf-section-label">Ashoka Coursework Connection</p>
<div class="mf-courses">
  <h2>Prerequisite Map</h2>
  <table>
    <thead><tr><th>Project</th><th>Hard Prerequisites</th><th>Relevant Ashoka Courses</th></tr></thead>
    <tbody>
      <tr>
        <td>I12 &mdash; Simplex Optimization</td>
        <td>Real Analysis, Linear Algebra</td>
        <td><code>MAT 2003</code> Real Analysis &mdash; convergence proofs, Lipschitz continuity, convex analysis<br><code>MAT 1001</code> Linear Algebra &mdash; matrix norms, eigenvalue analysis, gradient computation</td>
      </tr>
      <tr>
        <td>A9 &mdash; Optimal Transport</td>
        <td>Measure Theory, Functional Analysis</td>
        <td><code>MAT 4xxx</code> Measure Theory &mdash; weak convergence, probability measures on metric spaces<br><code>MAT 4xxx</code> Functional Analysis &mdash; RKHS, operator theory, Banach space geometry</td>
      </tr>
      <tr>
        <td>A11 &mdash; Multi-Parameter Persistence</td>
        <td>Algebra II, Algebraic Topology</td>
        <td><code>MAT 2002</code> Algebra II &mdash; module theory, quiver representations, homological algebra<br><code>MAT 2026</code> Metric &amp; Topological Spaces &mdash; simplicial complexes, filtrations, topological invariants</td>
      </tr>
      <tr>
        <td>A12 &mdash; Evolutionary Game Theory</td>
        <td>Differential Equations, Real Analysis, P&amp;S</td>
        <td><code>MAT 3013</code> Differential Equations &mdash; dynamical systems, stability analysis, phase portraits<br><code>MAT 2003</code> Real Analysis &mdash; fixed-point theorems, variational methods<br><code>MAT 2020</code> Probability &amp; Statistics &mdash; branching processes, stochastic population models</td>
      </tr>
    </tbody>
  </table>
  <p style="margin: 0.75rem 0 0; font-size: 0.78rem; color: #0c4a6e;"><strong>Python libraries</strong> for these projects &mdash; GUDHI, Ripser, POT, GPyTorch, SciPy &mdash; are all learnable during the project. No prior familiarity required.</p>
</div>

<!-- ===== PROJECTS TABLE ===== -->
<p class="mf-section-label">Projects in this Domain</p>

<table class="mf-table">
<thead>
  <tr>
    <th>ID</th>
    <th>Project</th>
    <th>Tier</th>
    <th>Hard Prerequisites</th>
    <th>Scope</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="id id-i">I12</td>
    <td class="title-cell">
      Convergence Analysis of Simplex Optimization for Protein Design
      <div class="desc">Escalante Bio's mosaic library won the Adaptyv Nipah competition using a hand-tuned accelerated proximal gradient method on the probability simplex. This project proves convergence to critical points for non-convex protein design losses, compares mirror descent (KL divergence) against projected gradient, and bounds the rounding gap from continuous PSSM to discrete sequence. All theorems are missing from the current literature for this setting.</div>
    </td>
    <td><span class="tier-i">Intermediate</span></td>
    <td class="prereq">MAT 2003 Real Analysis<br>MAT 1001 Linear Algebra</td>
    <td>1&ndash;2 semesters</td>
  </tr>
  <tr>
    <td class="id id-a">A9</td>
    <td class="title-cell">
      Optimal Transport for Generative Model Evaluation
      <div class="desc">Evaluating protein generative models is an open problem: existing metrics (MMD, BEAR tests, ipTM rankings) lack metric properties or theoretical grounding. This project develops Wasserstein-distance-based evaluation metrics for generated antibody ensembles, proves metrization properties and concentration inequalities for the empirical Wasserstein distance, formalizes directed evolution as a Wasserstein gradient flow, and benchmarks 5+ generative models (RFAntibody, ProteinMPNN, BoltzGen, RL-finetuned variants).</div>
    </td>
    <td><span class="tier-a">Advanced</span></td>
    <td class="prereq">MAT 4xxx Measure Theory<br>MAT 4xxx Functional Analysis<br>MAT 2020 P&amp;S</td>
    <td>2 semesters</td>
  </tr>
  <tr>
    <td class="id id-a">A11</td>
    <td class="title-cell">
      Multi-Parameter Persistence for Protein Design Spaces
      <div class="desc">Single-parameter persistent homology uses one filtration (distance threshold); proteins have many — distance, hydrophobicity, charge, flexibility simultaneously. Multi-parameter persistence is an active area in pure mathematics: unlike the single-parameter case, no barcode analog exists in general, and the classification problem connects to quiver representation theory. This project extends TDA from I4, constructs bi-filtrations on protein binding interfaces, computes fibered barcodes, and seeks new mathematical results about the structure of persistence modules arising from protein data — potential submission to Journal of Applied and Computational Topology.</div>
    </td>
    <td><span class="tier-a">Advanced</span></td>
    <td class="prereq">MAT 2002 Algebra II<br>MAT 2026 Topological Spaces<br>Algebraic Topology background</td>
    <td>2 semesters</td>
  </tr>
  <tr>
    <td class="id id-a">A12</td>
    <td class="title-cell">
      Mathematical Oncology: Evolutionary Game Theory of Drug Resistance
      <div class="desc">Models tumor evolution as an evolutionary game between sensitive and resistant cell types. The project proves existence and stability of Nash equilibria via replicator dynamics, applies Pontryagin's maximum principle to derive optimal bang-bang drug scheduling, proves that adaptive therapy (treat-until-response) delays resistance compared to maximum tolerated dose, and extends to stochastic branching processes to analyze extinction probabilities for resistant clones. Clinical implications connect to paediatric GBM and neuroblastoma.</div>
    </td>
    <td><span class="tier-a">Advanced</span></td>
    <td class="prereq">MAT 3013 Differential Equations<br>MAT 2003 Real Analysis<br>MAT 2020 P&amp;S</td>
    <td>2 semesters</td>
  </tr>
</tbody>
</table>

<!-- ===== KEY REFERENCES ===== -->
<div class="mf-refs">
  <h2>Key References &amp; Tools</h2>
  <ul>
    <li><strong>GUDHI</strong> &mdash; <a href="https://gudhi.inria.fr/" target="_blank">gudhi.inria.fr</a> &mdash; TDA library with alpha complexes, Rips complexes, and multi-parameter persistence</li>
    <li><strong>Ripser</strong> &mdash; <a href="https://github.com/Ripser/ripser" target="_blank">github.com/Ripser/ripser</a> &mdash; fast Vietoris-Rips persistent homology, orders of magnitude faster than GUDHI for large point clouds</li>
    <li><strong>POT (Python Optimal Transport)</strong> &mdash; <a href="https://pythonot.github.io/" target="_blank">pythonot.github.io</a> &mdash; Wasserstein distances, Sinkhorn's algorithm, OT barycenters</li>
    <li><strong>GPyTorch</strong> &mdash; <a href="https://gpytorch.ai/" target="_blank">gpytorch.ai</a> &mdash; scalable Gaussian process inference for Bayesian optimization</li>
    <li><strong>Bronstein et al., Geometric Deep Learning</strong> &mdash; <a href="https://geometricdeeplearning.com/" target="_blank">geometricdeeplearning.com</a> &mdash; free textbook on SE(3)-equivariance, group representations, gauge theory for ML</li>
    <li><strong>Boyd &amp; Vandenberghe, Convex Optimization</strong> &mdash; <a href="https://web.stanford.edu/~boyd/cvxbook/" target="_blank">web.stanford.edu/~boyd/cvxbook</a> &mdash; free textbook; simplex projection, mirror descent, Frank-Wolfe all covered</li>
    <li><strong>Peyre &amp; Cuturi (2019)</strong> &mdash; "Computational Optimal Transport." <em>Foundations and Trends in ML</em>, 11(5-6). arXiv:1803.00567 &mdash; the standard reference for Wasserstein theory and Sinkhorn algorithms</li>
    <li><strong>Botnan &amp; Lesnick (2022)</strong> &mdash; "An Introduction to Multiparameter Persistence." arXiv:2203.14289 &mdash; best entry point for A11's mathematical framework</li>
    <li><strong>Altrock, Liu &amp; Michor (2015)</strong> &mdash; "The mathematics of cancer: integrating quantitative models." <em>Nature Reviews Cancer</em>, 15(12), 730-745 &mdash; foundational reference for A12</li>
  </ul>
</div>

<!-- ===== BOTTOM CTA ===== -->
<div style="text-align: center; margin: 2rem 0 1rem; padding: 1.5rem; background: linear-gradient(135deg, #0c4a6e, #164e63); border-radius: 10px; color: white;">
  <p style="margin: 0 0 0.5rem; font-size: 1.05rem; font-weight: 600;">Strong math background? These problems are yours.</p>
  <p style="margin: 0 0 1rem; font-size: 0.85rem; color: #a5f3fc; line-height: 1.5;">Real Analysis + Algebra II is enough to start I12 or A11. Email with subject <em>"IML: [Project ID]"</em>.</p>
  <a href="/iml-project-ideas/" style="display: inline-block; padding: 0.5rem 1.2rem; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.3); border-radius: 6px; color: white; text-decoration: none; font-size: 0.82rem; font-weight: 600;">&larr; All 40 Projects</a>
</div>

<p style="text-align: center; font-size: 0.7rem; color: #ccc; margin-top: 1rem;">Last updated March 2026. Full project details available on request.</p>

  </div>
</main>
