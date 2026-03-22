---
permalink: /iml-project-ideas/protein-design/
title: "Protein & Antibody Design — Open Problems"
layout: default
---

<main class="main-content">
  <div class="container-narrow">

<style>
  .iml-hero { text-align: center; margin: 0 0 2.5rem 0; }
  .iml-hero h1 { font-size: 2rem; font-weight: 800; line-height: 1.25; margin: 0.5rem 0; color: #1e1b4b; }
  .iml-hero .subtitle { font-size: 1.05rem; color: #666; max-width: 560px; margin: 0.75rem auto 0; line-height: 1.6; }
  .iml-badge { display: inline-block; background: linear-gradient(135deg, #7c3aed, #4f46e5); color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.3rem 0.7rem; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.75rem; }

  .iml-breadcrumb { font-size: 0.8rem; color: #9ca3af; margin-bottom: 2rem; }
  .iml-breadcrumb a { color: #7c3aed; text-decoration: none; }
  .iml-breadcrumb a:hover { text-decoration: underline; }

  .iml-cta { margin: 1.5rem 0; padding: 1.1rem 1.4rem; background: #f0fdf4; border-left: 4px solid #22c55e; border-radius: 4px; }
  .iml-cta p { margin: 0; font-size: 0.88rem; color: #15803d; line-height: 1.6; }
  .iml-cta strong { color: #166534; }

  .iml-overview { margin: 2rem 0; font-size: 0.88rem; color: #374151; line-height: 1.75; }
  .iml-overview p { margin: 0 0 1rem; }
  .iml-overview strong { color: #1e1b4b; }

  .iml-table { width: 100%; border-collapse: collapse; margin: 0.75rem 0 2rem; font-size: 0.82rem; }
  .iml-table th { text-align: left; padding: 0.5rem 0.6rem; border-bottom: 2px solid #e5e7eb; color: #6b7280; font-weight: 600; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; }
  .iml-table td { padding: 0.55rem 0.6rem; border-bottom: 1px solid #f3f4f6; color: #374151; vertical-align: top; }
  .iml-table tr:hover { background: #fafafa; }
  .iml-table .id { font-weight: 700; font-size: 0.75rem; white-space: nowrap; }
  .iml-table .id-b { color: #7c3aed; }
  .iml-table .id-i { color: #2563eb; }
  .iml-table .id-a { color: #dc2626; }
  .iml-table .title-cell { font-weight: 500; }
  .iml-table .desc-cell { color: #6b7280; font-size: 0.78rem; }
  .iml-table .tag { display: inline-block; padding: 0.1rem 0.35rem; border-radius: 3px; font-size: 0.65rem; font-weight: 600; margin-right: 0.25rem; white-space: nowrap; }
  .iml-table .tag-b { background: #faf5ff; color: #7c3aed; }
  .iml-table .tag-i { background: #eff6ff; color: #2563eb; }
  .iml-table .tag-a { background: #fef2f2; color: #dc2626; }
  .iml-table .tag-j { background: #dbeafe; color: #1d4ed8; }
  .iml-table .tag-d { background: #f3f4f6; color: #6b7280; }

  .iml-section-h2 { font-size: 0.85rem; color: #999; text-transform: uppercase; letter-spacing: 0.08em; margin: 2.5rem 0 0.75rem; border-bottom: 1px solid #f3f4f6; padding-bottom: 0.4rem; }

  .iml-course-table { width: 100%; border-collapse: collapse; margin: 0.75rem 0 1.5rem; font-size: 0.82rem; }
  .iml-course-table th { text-align: left; padding: 0.45rem 0.6rem; border-bottom: 2px solid #e5e7eb; color: #6b7280; font-weight: 600; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; }
  .iml-course-table td { padding: 0.45rem 0.6rem; border-bottom: 1px solid #f3f4f6; color: #374151; vertical-align: top; }
  .iml-course-table tr:hover { background: #fafafa; }
  .iml-course-table .code { font-family: monospace; font-size: 0.75rem; color: #1e1b4b; white-space: nowrap; }
  .iml-course-table .ids { font-size: 0.75rem; color: #6b7280; }

  .iml-refs { margin: 0; padding: 0; list-style: none; font-size: 0.82rem; line-height: 1.8; color: #374151; }
  .iml-refs li { padding: 0.2rem 0; }
  .iml-refs li::before { content: counter(ref-counter) ". "; counter-increment: ref-counter; color: #9ca3af; font-weight: 600; }
  .iml-refs { counter-reset: ref-counter; }
  .iml-refs a { color: #7c3aed; text-decoration: none; }
  .iml-refs a:hover { text-decoration: underline; }

  .iml-tier-legend { display: flex; gap: 1rem; margin: 0.5rem 0 1rem; flex-wrap: wrap; }
  .iml-tier-pill { padding: 0.25rem 0.7rem; border-radius: 12px; font-size: 0.72rem; font-weight: 600; }

  @media (max-width: 640px) {
    .iml-table { font-size: 0.75rem; }
    .iml-table th, .iml-table td { padding: 0.4rem; }
    .iml-course-table { font-size: 0.75rem; }
  }
</style>

<!-- ===== BREADCRUMB ===== -->
<div class="iml-breadcrumb">
  <a href="/iml-project-ideas/">&larr; Back to All Open Problems</a>
</div>

<!-- ===== HERO ===== -->
<div class="iml-hero">
  <div class="iml-badge">Domain Deep-Dive &middot; Spring 2026</div>
  <svg width="48" height="48" viewBox="0 0 28 28" fill="none" style="display:block;margin:0 auto 0.5rem;"><circle cx="14" cy="10" r="5" stroke="#7c3aed" stroke-width="1.5"/><path d="M9 18c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="#7c3aed" stroke-width="1.5" stroke-linecap="round"/><circle cx="10" cy="22" r="2" stroke="#c4b5fd" stroke-width="1.2"/><circle cx="18" cy="22" r="2" stroke="#c4b5fd" stroke-width="1.2"/></svg>
  <h1>Protein &amp; Antibody Design</h1>
  <p class="subtitle">14 open problems &mdash; from Y2 statistics to graduate-level diffusion theory.<br>All grounded in real campaigns against cancer targets.</p>
</div>

<!-- ===== CTA ===== -->
<div class="iml-cta">
  <p><strong>Interested?</strong> Email me at my Ashoka address with subject <em>"IML: [Project ID]"</em>. I supervise ML/computational aspects; Abhimanyu Pant (BSc Math &rsquo;28) co-mentors on the mathematical directions. All levels welcome.</p>
</div>

<!-- ===== DOMAIN OVERVIEW ===== -->
<h2 class="iml-section-h2">Domain Overview</h2>

<div class="iml-overview">
  <p>Computational protein and antibody design is the problem of generating amino acid sequences that fold into structures with desired biochemical functions &mdash; binding a specific cancer antigen, avoiding off-target proteins, surviving in the bloodstream. Until 2021, this was the province of expensive wet-lab directed evolution. AlphaFold2 changed structure prediction; by 2026, a new stack has emerged for <em>generative</em> design. <strong>Protenix</strong> (ByteDance, 2025) surpasses AlphaFold3 on protein-ligand benchmarks as a fully open-source reimplementation. <strong>Boltz-2</strong> jointly predicts structure and binding affinity in one forward pass, claiming 1000x speedup over free-energy perturbation. <strong>RFAntibody</strong> applies diffusion-based backbone generation specialized for CDR loops. <strong>BindCraft</strong> won the Adaptyv EGFR competition through hallucination-based design. And Escalante Bio's <strong>mosaic</strong> won the Adaptyv NiPaH de novo category in 180 lines of JAX &mdash; a 90% in vitro hit rate &mdash; using gradient-based PSSM optimization. The field moves fast; the mathematics lags behind.</p>

  <p>Undergraduates can contribute <em>now</em> for three reasons. First, all the competitive tools are open-source (Protenix, Boltz-2, RFAntibody, BindCraft, mosaic, ProteinMPNN, RFdiffusion) and run on Colab-grade GPUs. Second, the <strong>Adaptyv Bio</strong> competition ecosystem provides monthly challenges with actual experimental validation &mdash; your design either binds or it doesn't. Third, the mathematical foundations are genuinely immature: RL posttraining for generative models has no convergence theory, in silico confidence metrics showed <em>zero</em> correlation with wet-lab binding in the EGFR competition, and no framework exists for jointly optimizing binding and off-target avoidance. These are not toy problems.</p>

  <p>This portfolio connects directly to Ashish's ongoing work: the <strong>rfab-harness</strong> tool has run 4,085 antibody designs across 10 cancer targets (B7-H3, GD2, EGFRvIII, HER2, mesothelin, CEACAM5, CD276, GPC3, CLDN18.2, L1CAM) with pass rates ranging from 0.3% to 19.8% &mdash; a 60-fold range that begs statistical explanation. The <strong>DADB benchmark</strong> systematically compares AI antibody platforms. Active Adaptyv competition entries provide real experimental feedback loops for pipeline projects.</p>

  <p><strong>Abhimanyu Pant</strong> (BSc Mathematics &rsquo;28) co-develops six mathematical directions that map onto specific projects here: D1 (multi-objective specificity optimization) feeds I1 and A1; D2 (metric geometry of CDR spaces) feeds B3, I2, A8; D3 (GRPO/RL theory for diffusion models) feeds B5, B8, I9, I10, A1; D4 (exchangeable arrays for PPI) feeds A2; D5 (Bayesian optimization for campaign allocation) feeds B8, I3; D6 (TDA of binding interfaces) feeds I4.</p>
</div>

<!-- ===== COURSEWORK CONNECTION ===== -->
<h2 class="iml-section-h2">Ashoka Coursework Connection</h2>

<table class="iml-course-table">
<thead><tr><th>Course</th><th>Name</th><th>Projects Enabled</th></tr></thead>
<tbody>
<tr><td class="code">MAT 1200</td><td>Linear Algebra</td><td class="ids"><span class="tag tag-b">B4</span> (pLDDT matrices, PCA), <span class="tag tag-i">I1</span> (gradient computation), <span class="tag tag-a">A8</span> (spectral theory)</td></tr>
<tr><td class="code">MAT 2201</td><td>Probability &amp; Statistics</td><td class="ids"><span class="tag tag-b">B3</span> B5 B8 B12 <span class="tag tag-i">I3</span> I7 I9 I10 <span class="tag tag-a">A1</span> A2 A7 A9 A13</td></tr>
<tr><td class="code">MAT 2301</td><td>Real Analysis</td><td class="ids"><span class="tag tag-i">I1</span> I7 I9 <span class="tag tag-a">A1</span> A2 A7 A8 A9</td></tr>
<tr><td class="code">MAT 2401</td><td>Metric &amp; Topological Spaces</td><td class="ids"><span class="tag tag-i">I2</span> I4</td></tr>
<tr><td class="code">MAT 2101</td><td>Algebra I</td><td class="ids"><span class="tag tag-i">I4</span> (quiver representations), <span class="tag tag-a">A2</span> A8 (group representations)</td></tr>
<tr><td class="code">MAT 3102</td><td>Algebra II</td><td class="ids"><span class="tag tag-a">A8</span> (Clebsch-Gordan, Schur&rsquo;s lemma)</td></tr>
<tr><td class="code">MAT 3211</td><td>Statistical Inference I</td><td class="ids"><span class="tag tag-i">I3</span> (GP regression), <span class="tag tag-a">A13</span> (reward model learning)</td></tr>
<tr><td class="code">CS 3410 / MAT 3211</td><td>Introduction to ML</td><td class="ids"><span class="tag tag-i">I8</span> I10 I15 <span class="tag tag-a">A13</span></td></tr>
<tr><td class="code">CS 2101</td><td>Data Structures &amp; Algorithms</td><td class="ids"><span class="tag tag-b">B3</span> (Levenshtein), <span class="tag tag-i">I8</span> I10 I15</td></tr>
<tr><td class="code">MAT 4xxx</td><td>Measure Theory</td><td class="ids"><span class="tag tag-a">A1</span> (variational RL objectives), <span class="tag tag-a">A2</span> (Aldous-Hoover theorem)</td></tr>
</tbody>
</table>

<p style="font-size: 0.78rem; color: #999; margin: -0.5rem 0 1.5rem;">Projects tagged <span class="tag tag-j">Juneja</span> below are compatible with Prof. Juneja&rsquo;s Intro to ML course (B5, B8, B12, I3, I9, I10). Every project assumes basic Python + AI coding assistant.</p>

<!-- ===== TIER LEGEND ===== -->
<div class="iml-tier-legend">
  <span class="iml-tier-pill" style="background:#faf5ff;color:#7c3aed;">B &middot; Beginner &mdash; Y2, 1 semester</span>
  <span class="iml-tier-pill" style="background:#eff6ff;color:#2563eb;">I &middot; Intermediate &mdash; Y3, 1-2 semesters</span>
  <span class="iml-tier-pill" style="background:#fef2f2;color:#dc2626;">A &middot; Advanced &mdash; Y4/Grad, 2 semesters</span>
</div>

<!-- ===== PROJECTS TABLE ===== -->
<h2 class="iml-section-h2">All 14 Projects</h2>

<table class="iml-table">
<thead><tr><th>ID</th><th>Title &amp; Description</th><th>Key Prereqs</th><th>Tags</th></tr></thead>
<tbody>

<tr>
  <td class="id id-b">B3</td>
  <td class="title-cell">
    Antibody Sequence Similarity Search with Edit Distance
    <div class="desc-cell">Implement Hamming, Levenshtein, and BLOSUM-weighted distance metrics on CDR sequences; build a kNN classifier for binding prediction; partially reproduce the AbDist paper (ROC AUC 0.71&ndash;0.88). Lays groundwork for Abhimanyu D2.</div>
  </td>
  <td>DSA, P&amp;S</td>
  <td><span class="tag tag-b">B</span> <span class="tag tag-j">Juneja</span></td>
</tr>

<tr>
  <td class="id id-b">B4</td>
  <td class="title-cell">
    Visualizing Protein Structure Prediction Confidence
    <div class="desc-cell">Run Protenix on Ashish&rsquo;s 10 cancer targets; systematically visualize pLDDT, iPTM, and PAE heatmaps; correlate confidence scores with rfab-harness pass rates to build a "confidence atlas."</div>
  </td>
  <td>Linear Algebra</td>
  <td><span class="tag tag-b">B</span></td>
</tr>

<tr>
  <td class="id id-b">B5</td>
  <td class="title-cell">
    Monte Carlo Estimation of Protein Design Hit Rates
    <div class="desc-cell">Apply Monte Carlo methods, bootstrap resampling, and importance sampling to estimate confidence intervals for rfab-harness pass rates (0.3%&ndash;19.8% across targets). Feeds Abhimanyu D3.</div>
  </td>
  <td>P&amp;S (MAT 2201)</td>
  <td><span class="tag tag-b">B</span> <span class="tag tag-j">Juneja</span></td>
</tr>

<tr>
  <td class="id id-b">B8</td>
  <td class="title-cell">
    Sequential Experimental Design for Antibody Campaigns
    <div class="desc-cell">Model cancer target selection as a 10-armed bandit; implement Thompson sampling, UCB1, and epsilon-greedy; simulate regret over rfab-harness pass-rate data. Gateway to I3 and Abhimanyu D5.</div>
  </td>
  <td>P&amp;S (MAT 2201)</td>
  <td><span class="tag tag-b">B</span> <span class="tag tag-j">Juneja</span></td>
</tr>

<tr>
  <td class="id id-b">B12</td>
  <td class="title-cell">
    EDA of Antibody Design Campaign Results
    <div class="desc-cell">Comprehensive exploratory analysis of 4,085 rfab-harness designs: sequence diversity (Shannon entropy), amino acid enrichment, CDR confidence ROC curves, and multi-target comparison. Generates hypotheses for upstream projects.</div>
  </td>
  <td>P&amp;S, CS 1101</td>
  <td><span class="tag tag-b">B</span> <span class="tag tag-j">Juneja</span></td>
</tr>

<tr>
  <td class="id id-i">I1</td>
  <td class="title-cell">
    Multi-Objective Optimization for Antibody Specificity
    <div class="desc-cell">Extend mosaic&rsquo;s loss functional to jointly optimize on-target binding and off-target avoidance (28% of clinical antibodies bind off-targets). Characterize Pareto frontiers, prove scalarization properties. Direct implementation of Abhimanyu D1.</div>
  </td>
  <td>Real Analysis, P&amp;S, Intro ML</td>
  <td><span class="tag tag-i">I</span> <span class="tag tag-d">Abhimanyu D1</span></td>
</tr>

<tr>
  <td class="id id-i">I2</td>
  <td class="title-cell">
    Metric Geometry of CDR Sequence Spaces
    <div class="desc-cell">Prove theoretical properties of 6+ metrics on CDR sequences (metric axioms, ultrametricity, Bourgain embedding bounds, kernel construction); validate empirically on AB-Bind. Mathematical paper with proofs. Direct implementation of Abhimanyu D2.</div>
  </td>
  <td>Metric Spaces (MAT 2401)</td>
  <td><span class="tag tag-i">I</span> <span class="tag tag-d">Abhimanyu D2</span></td>
</tr>

<tr>
  <td class="id id-i">I3</td>
  <td class="title-cell">
    Bayesian Optimization for Campaign Resource Allocation
    <div class="desc-cell">Build a GP surrogate over target features; implement Thompson sampling and GP-UCB for adaptive allocation across cancer targets; simulate vs uniform allocation. Direct implementation of Abhimanyu D5.</div>
  </td>
  <td>P&amp;S, Statistical Inference I</td>
  <td><span class="tag tag-i">I</span> <span class="tag tag-j">Juneja</span> <span class="tag tag-d">Abhimanyu D5</span></td>
</tr>

<tr>
  <td class="id id-i">I4</td>
  <td class="title-cell">
    Persistent Homology of Protein Binding Interfaces
    <div class="desc-cell">Compute Vietoris-Rips persistence diagrams (H0, H1, H2) on Ashish&rsquo;s 10 cancer target surfaces; correlate topological features (Betti numbers, persistence entropy) with rfab-harness pass rates to predict target "designability." Abhimanyu D6.</div>
  </td>
  <td>Metric Spaces, Algebra I</td>
  <td><span class="tag tag-i">I</span> <span class="tag tag-d">Abhimanyu D6</span></td>
</tr>

<tr>
  <td class="id id-i">I7</td>
  <td class="title-cell">
    Wasserstein Distances Between Antibody Repertoires
    <div class="desc-cell">Compute optimal transport distances between natural (OAS) and designed antibody distributions; implement Sinkhorn divergence; compare W1 vs MMD for detecting mode collapse in generative models.</div>
  </td>
  <td>Real Analysis, P&amp;S</td>
  <td><span class="tag tag-i">I</span></td>
</tr>

<tr>
  <td class="id id-i">I8</td>
  <td class="title-cell">
    GNN-Based Inverse Folding Analysis
    <div class="desc-cell">Analyze ProteinMPNN&rsquo;s expressivity through the Weisfeiler-Leman hierarchy; implement 1-WL and 2-WL tests on protein contact graphs; compare with higher-order GNN alternatives on sequence recovery benchmarks.</div>
  </td>
  <td>DSA, Discrete Math, Intro ML</td>
  <td><span class="tag tag-i">I</span></td>
</tr>

<tr>
  <td class="id id-i">I9</td>
  <td class="title-cell">
    Information-Theoretic Scoring for Protein Design
    <div class="desc-cell">Track Shannon entropy dynamics during mosaic&rsquo;s simplex optimization; identify phase transitions in the annealing schedule; evaluate mutual information as an alternative binding predictor; fit Potts models to design ensembles.</div>
  </td>
  <td>P&amp;S, Real Analysis</td>
  <td><span class="tag tag-i">I</span> <span class="tag tag-j">Juneja</span></td>
</tr>

<tr>
  <td class="id id-i">I10</td>
  <td class="title-cell">
    Monte Carlo Tree Search for Binder Design
    <div class="desc-cell">Cast sequence design as a tree search (node = partial sequence, action = amino acid assignment, reward = ipTM); implement vanilla MCTS with UCT; benchmark against mosaic&rsquo;s gradient-based approach on 3 cancer targets.</div>
  </td>
  <td>DSA, P&amp;S, Intro ML</td>
  <td><span class="tag tag-i">I</span> <span class="tag tag-j">Juneja</span></td>
</tr>

<tr>
  <td class="id id-i">I15</td>
  <td class="title-cell">
    Protein Design Competition Entry Pipeline
    <div class="desc-cell">Build an end-to-end pipeline (RFdiffusion backbone generation &rarr; ProteinMPNN sequence design &rarr; Protenix validation &rarr; multi-stage filtering) and enter an active Adaptyv Bio or BioML Society competition.</div>
  </td>
  <td>Intro ML, DSA</td>
  <td><span class="tag tag-i">I</span> <span class="tag tag-d">rfab-harness</span></td>
</tr>

<tr>
  <td class="id id-a">A1</td>
  <td class="title-cell">
    GRPO Theory for Protein Diffusion Models
    <div class="desc-cell">Derive GRPO from a KL-regularized RL objective; prove convergence for policy gradient on diffusion models; analyze mode collapse (all-helix artifacts); design entropy-regularized GRPO with diversity guarantees. Full version of Abhimanyu D3.</div>
  </td>
  <td>Measure Theory, Stochastic Processes</td>
  <td><span class="tag tag-a">A</span> <span class="tag tag-d">Abhimanyu D3</span></td>
</tr>

<tr>
  <td class="id id-a">A2</td>
  <td class="title-cell">
    Exchangeable Arrays for PPI Prediction
    <div class="desc-cell">Apply the Aldous-Hoover theorem (as used by JURA Bio&rsquo;s Vista transformer on 209M antibodies) to prove approximation theorems for cross-attention vs matrix factorization architectures; derive sample complexity bounds. Abhimanyu D4.</div>
  </td>
  <td>Measure Theory, P&amp;S, Algebra I</td>
  <td><span class="tag tag-a">A</span> <span class="tag tag-d">Abhimanyu D4</span></td>
</tr>

<tr>
  <td class="id id-a">A7</td>
  <td class="title-cell">
    Diffusion Models on SE(3) for Backbone Generation
    <div class="desc-cell">Derive convergence rates for the discretized reverse SDE on SO(3) (Wigner D-matrices, Laplace-Beltrami operator); prove optimal noise schedules on Riemannian manifolds; validate on protein backbone generation benchmarks.</div>
  </td>
  <td>Real Analysis, P&amp;S, Differential Geometry</td>
  <td><span class="tag tag-a">A</span></td>
</tr>

<tr>
  <td class="id id-a">A8</td>
  <td class="title-cell">
    Geometric DL Expressivity for Protein Graphs
    <div class="desc-cell">Characterize the expressive power of SE(3)-equivariant GNNs (EGNN, MACE, Equiformer) via a geometric WL hierarchy; prove universality/non-universality results using Clebsch-Gordan decomposition; identify which protein properties are provably out of reach.</div>
  </td>
  <td>Algebra I &amp; II, Linear Algebra</td>
  <td><span class="tag tag-a">A</span></td>
</tr>

<tr>
  <td class="id id-a">A13</td>
  <td class="title-cell">
    RL with Experimental Feedback for Protein Design
    <div class="desc-cell">Develop theory for RL with expensive ($10&ndash;100/datapoint), noisy, budget-constrained rewards; derive budget-optimal acquisition (when to run experiments vs optimize policy); connect to JURA Bio&rsquo;s BODA active learning framework.</div>
  </td>
  <td>P&amp;S, Intro ML, Statistical Inference I</td>
  <td><span class="tag tag-a">A</span></td>
</tr>

</tbody>
</table>

<!-- ===== KEY REFERENCES ===== -->
<h2 class="iml-section-h2">Key References &amp; Tools</h2>

<ol class="iml-refs">
  <li><strong>Protenix</strong> (ByteDance, 2025) &mdash; open-source AlphaFold3 reimplementation, surpasses AF3 on multi-chain benchmarks. <a href="https://github.com/bytedance/Protenix" target="_blank">github.com/bytedance/Protenix</a></li>
  <li><strong>Boltz-2</strong> (Wohlwend et al., 2026) &mdash; joint structure + binding affinity prediction, MIT license. <a href="https://github.com/jwohlwend/boltz" target="_blank">github.com/jwohlwend/boltz</a></li>
  <li><strong>RFdiffusion / RFAntibody</strong> (Watson et al., <em>Nature</em> 2023; Baker Lab 2025) &mdash; diffusion-based backbone generation. <a href="https://github.com/RosettaCommons/RFdiffusion" target="_blank">github.com/RosettaCommons/RFdiffusion</a></li>
  <li><strong>BindCraft</strong> (Pacesa et al., bioRxiv 2024) &mdash; hallucination-based binder design, won Adaptyv EGFR competition. DOI: 10.1101/2024.09.30.615802</li>
  <li><strong>mosaic</strong> (Escalante Bio, 2026) &mdash; 180-line JAX library for gradient-based PSSM optimization; 90% hit rate at Adaptyv NiPaH. <a href="https://github.com/escalante-bio/mosaic" target="_blank">github.com/escalante-bio/mosaic</a></li>
  <li><strong>ProteinMPNN</strong> (Dauparas et al., <em>Science</em> 2022) &mdash; standard inverse folding model. <a href="https://github.com/dauparas/ProteinMPNN" target="_blank">github.com/dauparas/ProteinMPNN</a></li>
  <li><strong>GUDHI</strong> &mdash; C++/Python library for persistent homology and TDA on point clouds. <a href="https://gudhi.inria.fr/" target="_blank">gudhi.inria.fr</a></li>
  <li><strong>Adaptyv Bio competitions</strong> &mdash; monthly protein design challenges with experimental validation. <a href="https://adaptyv.bio" target="_blank">adaptyv.bio</a></li>
  <li><strong>AbDist</strong> (Hoffstedt et al., <em>mAbs</em> 2026) &mdash; simple kNN + Levenshtein distance matches transformer SOTA (ROC AUC 0.71&ndash;0.88). DOI: 10.1080/19420862.2026.2644655</li>
  <li><strong>Weinstein et al., <em>Nature Biotechnology</em> 2026</strong> (JURA Bio) &mdash; MESA dataset (209M antibodies &times; 100 pHLA targets), Vista transformer, Aldous-Hoover architecture motivation, BODA active learning.</li>
  <li><strong>Adaptyv EGFR community paper</strong> (bioRxiv 2025.04.17.648362v2) &mdash; key negative result: zero correlation between ipTM/iPAE/ESM2 and wet-lab binding.</li>
  <li><strong>Escalante Bio blog</strong> (Boyd &amp; Guns, March 2026) &mdash; "Teaching generative models to hallucinate" &mdash; GRPO for BoltzGen, mode collapse, open theoretical questions.</li>
</ol>

<!-- ===== BOTTOM CTA ===== -->
<div style="text-align: center; margin: 2.5rem 0 1rem; padding: 1.5rem; background: linear-gradient(135deg, #1e1b4b, #312e81); border-radius: 10px; color: white;">
  <p style="margin: 0 0 0.4rem; font-size: 1.05rem; font-weight: 600;">Ready to start?</p>
  <p style="margin: 0 0 0.75rem; font-size: 0.85rem; color: #c7d2fe; line-height: 1.5;">Email with subject <em>"IML: [Project ID]"</em> &mdash; include your year, relevant courses, and one sentence on why the project interests you.</p>
  <a href="/iml-project-ideas/" style="display:inline-block; padding: 0.5rem 1.2rem; background: white; color: #312e81; font-weight: 600; font-size: 0.82rem; border-radius: 6px; text-decoration: none;">View All 40 Open Problems &rarr;</a>
</div>

<p style="text-align: center; font-size: 0.7rem; color: #ccc; margin-top: 1rem;">Last updated March 2026. Full project specs available on request.</p>

  </div>
</main>
