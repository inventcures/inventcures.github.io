---
permalink: /iml-project-ideas/
title: "40 Open Research Problems — ML + Science"
layout: default
---

<main class="main-content">
  <div class="container-narrow">

<style>
  .iml-hero { text-align: center; margin: 0 0 2.5rem 0; }
  .iml-hero h1 { font-size: 2rem; font-weight: 800; line-height: 1.25; margin: 0.5rem 0; color: #1e1b4b; }
  .iml-hero .subtitle { font-size: 1.05rem; color: #666; max-width: 560px; margin: 0.75rem auto 0; line-height: 1.6; }
  .iml-badge { display: inline-block; background: linear-gradient(135deg, #f59e0b, #ef4444); color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.3rem 0.7rem; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.75rem; }

  .iml-cta { margin: 1.5rem 0; padding: 1.1rem 1.4rem; background: #f0fdf4; border-left: 4px solid #22c55e; border-radius: 4px; }
  .iml-cta p { margin: 0; font-size: 0.88rem; color: #15803d; line-height: 1.6; }
  .iml-cta strong { color: #166534; }

  .iml-domains { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.6rem; margin: 1.5rem 0; }
  .iml-domain { text-align: center; padding: 0.8rem 0.5rem; border-radius: 8px; border: 1px solid #e5e7eb; }
  .iml-domain svg { display: block; margin: 0 auto 0.4rem; }
  .iml-domain .label { font-size: 0.72rem; font-weight: 600; color: #374151; line-height: 1.3; }
  .iml-domain .count { font-size: 0.65rem; color: #9ca3af; margin-top: 0.15rem; }
  a.iml-domain-link { text-decoration: none; color: inherit; }
  a.iml-domain-link .iml-domain { transition: box-shadow 0.15s, border-color 0.15s; }
  a.iml-domain-link:hover .iml-domain { box-shadow: 0 2px 8px rgba(0,0,0,0.08); border-color: #c7d2fe; }

  .iml-tiers { display: flex; gap: 0; margin: 2rem 0 0.5rem; }
  .iml-tiers button { flex: 1; padding: 0.7rem; border: 2px solid #e5e7eb; background: #f9fafb; color: #6b7280; font-weight: 600; font-size: 0.85rem; cursor: pointer; transition: all 0.15s; }
  .iml-tiers button:first-child { border-radius: 8px 0 0 8px; }
  .iml-tiers button:last-child { border-radius: 0 8px 8px 0; }
  .iml-tiers button:not(:first-child) { border-left: none; }
  .iml-tiers button.active-b { background: #7c3aed; color: white; border-color: #7c3aed; }
  .iml-tiers button.active-i { background: #2563eb; color: white; border-color: #2563eb; }
  .iml-tiers button.active-a { background: #dc2626; color: white; border-color: #dc2626; }

  .iml-flow { display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin: 1.5rem 0; }
  .iml-flow-step { text-align: center; padding: 0.5rem 1rem; border-radius: 6px; font-size: 0.75rem; font-weight: 600; }
  .iml-flow-arrow { color: #d1d5db; font-size: 1.2rem; }

  .iml-table { width: 100%; border-collapse: collapse; margin: 0.75rem 0 2rem; font-size: 0.82rem; }
  .iml-table th { text-align: left; padding: 0.5rem 0.6rem; border-bottom: 2px solid #e5e7eb; color: #6b7280; font-weight: 600; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; }
  .iml-table td { padding: 0.55rem 0.6rem; border-bottom: 1px solid #f3f4f6; color: #374151; vertical-align: top; }
  .iml-table tr:hover { background: #fafafa; }
  .iml-table .id { font-weight: 700; font-size: 0.75rem; white-space: nowrap; }
  .iml-table .id-b { color: #7c3aed; }
  .iml-table .id-i { color: #2563eb; }
  .iml-table .id-a { color: #dc2626; }
  .iml-table .title-cell { font-weight: 500; }
  .iml-table .tag { display: inline-block; padding: 0.1rem 0.35rem; border-radius: 3px; font-size: 0.65rem; font-weight: 600; margin-right: 0.25rem; }
  .iml-table .tag-j { background: #dbeafe; color: #1d4ed8; }
  .iml-table .tag-d { background: #f3f4f6; color: #6b7280; }

  .iml-section { display: none; }
  .iml-section.active { display: block; }

  .iml-tier-header { display: flex; align-items: center; gap: 0.75rem; margin: 0.5rem 0 0.25rem; padding-bottom: 0.4rem; border-bottom: 3px solid; }
  .iml-tier-header h2 { font-size: 1.15rem; margin: 0; }
  .iml-tier-header .desc { font-size: 0.8rem; color: #888; }

  .iml-paths { margin: 2rem 0; }
  .iml-paths h2 { font-size: 1rem; color: #888; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1rem; }
  .iml-path-row { display: flex; align-items: center; gap: 0.4rem; margin: 0.5rem 0; font-size: 0.78rem; }
  .iml-path-label { font-weight: 600; color: #374151; min-width: 90px; }
  .iml-path-step { padding: 0.2rem 0.5rem; border-radius: 4px; font-weight: 500; }

  .iml-resources { margin: 2rem 0 1rem; padding: 1.25rem; background: #f9fafb; border-radius: 8px; }
  .iml-resources h2 { font-size: 1rem; margin: 0 0 0.75rem; color: #374151; }
  .iml-resources ul { margin: 0; padding-left: 1.2rem; font-size: 0.82rem; color: #555; line-height: 1.8; }

  @media (max-width: 640px) {
    .iml-domains { grid-template-columns: repeat(2, 1fr); }
    .iml-table { font-size: 0.75rem; }
    .iml-table th, .iml-table td { padding: 0.4rem; }
    .iml-flow { flex-wrap: wrap; }
  }
</style>

<!-- ===== HERO ===== -->
<div class="iml-hero">
  <div class="iml-badge">Open Problems &middot; Spring 2026</div>
  <h1>40 Open Research Problems<br>at the Frontier of ML + Science</h1>
  <p class="subtitle">Protein design. Drug discovery. Clinical AI. Formal mathematics.<br>All unsolved. All within reach.</p>
</div>

<!-- ===== CTA ===== -->
<div class="iml-cta">
  <p><strong>Interested?</strong> I can supervise ML/computational aspects. For domain expertise, I'll connect you with the right co-mentor &mdash; <strong>Prof. Sandeep Juneja</strong> (CDLDS) for probability &amp; optimization, biology faculty for wet-lab work, or other math/CS faculty. Email me at my Ashoka address with subject <em>"IML: [Project ID]"</em>. All levels welcome &mdash; undergrad, master's, PhD.</p>
</div>

<!-- ===== DOMAIN MAP (inline SVGs) ===== -->
<h2 style="font-size: 0.85rem; color: #999; text-transform: uppercase; letter-spacing: 0.08em; margin: 2rem 0 0.5rem;">Seven Research Domains</h2>

<div class="iml-domains">
  <a href="/iml-project-ideas/protein-design/" class="iml-domain-link"><div class="iml-domain">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="10" r="5" stroke="#7c3aed" stroke-width="1.5"/><path d="M9 18c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="#7c3aed" stroke-width="1.5" stroke-linecap="round"/><circle cx="10" cy="22" r="2" stroke="#c4b5fd" stroke-width="1.2"/><circle cx="18" cy="22" r="2" stroke="#c4b5fd" stroke-width="1.2"/></svg>
    <div class="label">Protein &amp;<br>Antibody Design</div>
    <div class="count">14 projects</div>
  </div></a>
  <a href="/iml-project-ideas/drug-discovery/" class="iml-domain-link"><div class="iml-domain">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="6" y="8" width="6" height="14" rx="3" stroke="#2563eb" stroke-width="1.5"/><rect x="16" y="6" width="6" height="16" rx="3" stroke="#2563eb" stroke-width="1.5"/><path d="M12 15h4" stroke="#93c5fd" stroke-width="1.5" stroke-linecap="round"/></svg>
    <div class="label">Drug<br>Discovery</div>
    <div class="count">7 projects</div>
  </div></a>
  <a href="/iml-project-ideas/clinical-ai/" class="iml-domain-link"><div class="iml-domain">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 6v16M8 14h12" stroke="#dc2626" stroke-width="1.5" stroke-linecap="round"/><rect x="8" y="8" width="12" height="12" rx="2" stroke="#fca5a5" stroke-width="1.2"/></svg>
    <div class="label">Clinical AI &amp;<br>Med Education</div>
    <div class="count">6 projects</div>
  </div></a>
  <a href="/iml-project-ideas/formal-math/" class="iml-domain-link"><div class="iml-domain">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M7 21l7-14 7 14" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 16h8" stroke="#fcd34d" stroke-width="1.2" stroke-linecap="round"/></svg>
    <div class="label">Formal Math<br>&amp; Lean4</div>
    <div class="count">4 projects</div>
  </div></a>
  <a href="/iml-project-ideas/neuro-symbolic/" class="iml-domain-link"><div class="iml-domain">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="10" cy="14" r="4" stroke="#059669" stroke-width="1.5"/><circle cx="18" cy="14" r="4" stroke="#059669" stroke-width="1.5"/><path d="M13 12v4M15 12v4" stroke="#6ee7b7" stroke-width="1.2" stroke-linecap="round"/></svg>
    <div class="label">Neuro-<br>Symbolic AI</div>
    <div class="count">4 projects</div>
  </div></a>
  <a href="/iml-project-ideas/medical-imaging/" class="iml-domain-link"><div class="iml-domain">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="7" y="7" width="14" height="14" rx="2" stroke="#8b5cf6" stroke-width="1.5"/><circle cx="14" cy="14" r="4" stroke="#c4b5fd" stroke-width="1.2"/><path d="M11 11l6 6M17 11l-6 6" stroke="#ddd6fe" stroke-width="1"/></svg>
    <div class="label">Medical<br>Imaging</div>
    <div class="count">2 projects</div>
  </div></a>
  <a href="/iml-project-ideas/math-foundations/" class="iml-domain-link"><div class="iml-domain">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M7 21Q14 7 21 21" stroke="#0891b2" stroke-width="1.5" fill="none"/><circle cx="10" cy="18" r="1.5" fill="#67e8f9"/><circle cx="14" cy="11" r="1.5" fill="#67e8f9"/><circle cx="18" cy="16" r="1.5" fill="#67e8f9"/></svg>
    <div class="label">Math<br>Foundations</div>
    <div class="count">3 projects</div>
  </div></a>
  <div class="iml-domain" style="border-style: dashed;">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M8 14h12M14 8v12" stroke="#9ca3af" stroke-width="1.5" stroke-linecap="round"/></svg>
    <div class="label" style="color: #9ca3af;">Your<br>Idea Here</div>
    <div class="count">propose one</div>
  </div>
</div>

<!-- ===== PROGRESSION DIAGRAM ===== -->
<div class="iml-flow">
  <div class="iml-flow-step" style="background: #faf5ff; color: #7c3aed;">B &middot; Beginner<br><span style="font-size: 0.65rem; font-weight: 400; color: #a78bfa;">Y2 &middot; 1 sem &middot; 12 projects</span></div>
  <div class="iml-flow-arrow">&rarr;</div>
  <div class="iml-flow-step" style="background: #eff6ff; color: #2563eb;">I &middot; Intermediate<br><span style="font-size: 0.65rem; font-weight: 400; color: #93c5fd;">Y3 &middot; 1-2 sem &middot; 15 projects</span></div>
  <div class="iml-flow-arrow">&rarr;</div>
  <div class="iml-flow-step" style="background: #fef2f2; color: #dc2626;">A &middot; Advanced<br><span style="font-size: 0.65rem; font-weight: 400; color: #fca5a5;">Y4/Grad &middot; 2 sem &middot; 13 projects</span></div>
</div>

<p style="font-size: 0.78rem; color: #999; text-align: center; margin: 0.25rem 0 1.5rem;">Every project assumes basic Python + AI coding assistant. Projects tagged <span class="tag tag-j">Juneja</span> align with the Intro to ML course.</p>

<!-- ===== TIER TOGGLE ===== -->
<div class="iml-tiers">
  <button onclick="showTier('b')" id="btn-b" class="active-b">Beginner (12)</button>
  <button onclick="showTier('i')" id="btn-i">Intermediate (15)</button>
  <button onclick="showTier('a')" id="btn-a">Advanced (13)</button>
</div>

<!-- ==================== BEGINNER ==================== -->
<div id="section-b" class="iml-section active">
<div class="iml-tier-header" style="border-color: #7c3aed;">
  <h2 style="color: #1e1b4b;">Beginner Projects</h2>
  <span class="desc">Y2 students &middot; 1 semester &middot; many Juneja-compatible</span>
</div>

<table class="iml-table">
<thead><tr><th>ID</th><th>Project</th><th>Domain</th><th>Key Prereqs</th><th>Tags</th></tr></thead>
<tbody>
<tr><td class="id id-b">B1</td><td class="title-cell">Drug Repurposing for NAFLD/NASH</td><td>Drug Discovery</td><td>P&amp;S</td><td><span class="tag tag-j">Juneja</span></td></tr>
<tr><td class="id id-b">B2</td><td class="title-cell">Cancer Drug Interaction Checker with Knowledge Graphs</td><td>Drug Discovery</td><td>Discrete Math</td><td></td></tr>
<tr><td class="id id-b">B3</td><td class="title-cell">Antibody Sequence Similarity Search with Edit Distance</td><td>Protein Design</td><td>DSA, P&amp;S</td><td><span class="tag tag-j">Juneja</span></td></tr>
<tr><td class="id id-b">B4</td><td class="title-cell">Visualizing Protein Structure Prediction Confidence</td><td>Protein Design</td><td>Linear Algebra</td><td></td></tr>
<tr><td class="id id-b">B5</td><td class="title-cell">Monte Carlo Estimation of Protein Design Hit Rates</td><td>Protein Design</td><td>P&amp;S</td><td><span class="tag tag-j">Juneja</span></td></tr>
<tr><td class="id id-b">B6</td><td class="title-cell">Classifying FDA Drug Labels with NLP</td><td>Clinical AI</td><td>Intro CS</td><td></td></tr>
<tr><td class="id id-b">B7</td><td class="title-cell">Medical Image Segmentation with Pre-trained Models</td><td>Medical Imaging</td><td>Linear Algebra</td><td></td></tr>
<tr><td class="id id-b">B8</td><td class="title-cell">Sequential Experimental Design for Antibody Campaigns</td><td>Protein Design</td><td>P&amp;S</td><td><span class="tag tag-j">Juneja</span></td></tr>
<tr><td class="id id-b">B9</td><td class="title-cell">Molecular Property Prediction with TorchDrug</td><td>Drug Discovery</td><td>P&amp;S</td><td><span class="tag tag-j">Juneja</span></td></tr>
<tr><td class="id id-b">B10</td><td class="title-cell">Simple Clinical Decision Support Rule Engine</td><td>Clinical AI</td><td>Intro CS</td><td></td></tr>
<tr><td class="id id-b">B11</td><td class="title-cell">Biomarker Identification for CVD Using Random Forests</td><td>Clinical AI</td><td>P&amp;S</td><td><span class="tag tag-j">Juneja</span></td></tr>
<tr><td class="id id-b">B12</td><td class="title-cell">EDA of Antibody Design Campaign Results</td><td>Protein Design</td><td>P&amp;S</td><td><span class="tag tag-j">Juneja</span></td></tr>
</tbody>
</table>
</div>

<!-- ==================== INTERMEDIATE ==================== -->
<div id="section-i" class="iml-section">
<div class="iml-tier-header" style="border-color: #2563eb;">
  <h2 style="color: #1e1b4b;">Intermediate Projects</h2>
  <span class="desc">Y3 students &middot; 1-2 semesters &middot; workshop paper potential</span>
</div>

<table class="iml-table">
<thead><tr><th>ID</th><th>Project</th><th>Domain</th><th>Key Prereqs</th><th>Origin</th></tr></thead>
<tbody>
<tr><td class="id id-i">I1</td><td class="title-cell">Multi-Objective Optimization for Antibody Specificity</td><td>Protein Design</td><td>Real Analysis, P&amp;S</td><td><span class="tag tag-d">Abhimanyu D1</span></td></tr>
<tr><td class="id id-i">I2</td><td class="title-cell">Metric Geometry of CDR Sequence Spaces</td><td>Protein Design</td><td>Metric Spaces</td><td><span class="tag tag-d">Abhimanyu D2</span></td></tr>
<tr><td class="id id-i">I3</td><td class="title-cell">Bayesian Optimization for Campaign Resource Allocation</td><td>Protein Design</td><td>P&amp;S, Intro ML</td><td><span class="tag tag-d">Abhimanyu D5</span></td></tr>
<tr><td class="id id-i">I4</td><td class="title-cell">Persistent Homology of Protein Binding Interfaces</td><td>Protein Design / TDA</td><td>Algebra I</td><td><span class="tag tag-d">Abhimanyu D6</span></td></tr>
<tr><td class="id id-i">I5</td><td class="title-cell">Neuro-Symbolic Clinical Reasoning Prototype</td><td>Clinical AI</td><td>Intro ML, Logic</td><td><span class="tag tag-d">Ishaan D3</span></td></tr>
<tr><td class="id id-i">I6</td><td class="title-cell">Drug Discovery KG with Differentiable Reasoning</td><td>Drug Discovery</td><td>Intro ML, DSA</td><td><span class="tag tag-d">Ishaan D4</span></td></tr>
<tr><td class="id id-i">I7</td><td class="title-cell">Wasserstein Distances Between Antibody Repertoires</td><td>Protein Design / OT</td><td>Real Analysis, P&amp;S</td><td><span class="tag tag-d">New</span></td></tr>
<tr><td class="id id-i">I8</td><td class="title-cell">GNN-Based Inverse Folding Analysis</td><td>Protein Design</td><td>Intro ML, Linear Algebra</td><td><span class="tag tag-d">New</span></td></tr>
<tr><td class="id id-i">I9</td><td class="title-cell">Information-Theoretic Scoring for Protein Design</td><td>Protein Design</td><td>P&amp;S, Intro ML</td><td><span class="tag tag-d">New</span></td></tr>
<tr><td class="id id-i">I10</td><td class="title-cell">Monte Carlo Tree Search for Binder Design</td><td>Protein Design</td><td>P&amp;S, DSA</td><td><span class="tag tag-j">Juneja</span></td></tr>
<tr><td class="id id-i">I11</td><td class="title-cell">ML-Driven Biomarker Discovery for NASH/NAFLD</td><td>Drug Discovery</td><td>P&amp;S, Intro ML</td><td><span class="tag tag-d">New</span></td></tr>
<tr><td class="id id-i">I12</td><td class="title-cell">Convergence Analysis of Simplex Optimization</td><td>Optimization</td><td>Real Analysis, Linear Algebra</td><td><span class="tag tag-d">New</span></td></tr>
<tr><td class="id id-i">I13</td><td class="title-cell">AI-Augmented Tumor Board Extension</td><td>Medical Education</td><td>Intro ML</td><td><span class="tag tag-d">Onco-Shikshak</span></td></tr>
<tr><td class="id id-i">I14</td><td class="title-cell">Graph Diffusion for Oncology Hypothesis Generation</td><td>Drug Discovery</td><td>Intro ML, DSA</td><td><span class="tag tag-d">Onco-TTT</span></td></tr>
<tr><td class="id id-i">I15</td><td class="title-cell">Protein Design Competition Entry Pipeline</td><td>Protein Design</td><td>Intro ML</td><td><span class="tag tag-d">rfab-harness</span></td></tr>
</tbody>
</table>
</div>

<!-- ==================== ADVANCED ==================== -->
<div id="section-a" class="iml-section">
<div class="iml-tier-header" style="border-color: #dc2626;">
  <h2 style="color: #1e1b4b;">Advanced Projects</h2>
  <span class="desc">Y4 / thesis / grad students &middot; 2 semesters &middot; publication-track</span>
</div>

<table class="iml-table">
<thead><tr><th>ID</th><th>Project</th><th>Domain</th><th>Key Prereqs</th><th>Origin</th></tr></thead>
<tbody>
<tr><td class="id id-a">A1</td><td class="title-cell">GRPO Theory for Protein Diffusion Models</td><td>Protein Design</td><td>Measure Theory, Stat. Inference</td><td><span class="tag tag-d">Abhimanyu D3</span></td></tr>
<tr><td class="id id-a">A2</td><td class="title-cell">Exchangeable Arrays for PPI Prediction</td><td>Protein Design</td><td>Measure Theory, Random Graphs</td><td><span class="tag tag-d">Abhimanyu D4</span></td></tr>
<tr><td class="id id-a">A3</td><td class="title-cell">Formal Verification of Protein Designs via Lean4</td><td>Formal Math</td><td>Theory of Computation, Algebra II</td><td><span class="tag tag-d">Ishaan D1</span></td></tr>
<tr><td class="id id-a">A4</td><td class="title-cell">Proteins-as-Programs: Kolmogorov Complexity</td><td>Formal Math</td><td>Theory of Computation</td><td><span class="tag tag-d">Ishaan D2</span></td></tr>
<tr><td class="id id-a">A5</td><td class="title-cell">Categorical Deep Learning for Drug Discovery KGs</td><td>Neuro-Symbolic</td><td>Algebra II, Category Theory</td><td><span class="tag tag-d">Ishaan D4</span></td></tr>
<tr><td class="id id-a">A6</td><td class="title-cell">AI-Augmented Math Discovery for Biomedical Conjectures</td><td>Formal Math</td><td>Algebra II, Lean4</td><td><span class="tag tag-d">Ishaan D5</span></td></tr>
<tr><td class="id id-a">A7</td><td class="title-cell">Diffusion Models on SE(3) for Backbone Generation</td><td>Protein Design</td><td>Differential Geometry, DiffEq</td><td><span class="tag tag-d">New</span></td></tr>
<tr><td class="id id-a">A8</td><td class="title-cell">Geometric DL Expressivity for Protein Graphs</td><td>Protein Design</td><td>Algebra I, Linear Algebra</td><td><span class="tag tag-d">New</span></td></tr>
<tr><td class="id id-a">A9</td><td class="title-cell">Optimal Transport for Generative Model Evaluation</td><td>Math Foundations</td><td>Measure Theory, Functional Analysis</td><td><span class="tag tag-d">New</span></td></tr>
<tr><td class="id id-a">A10</td><td class="title-cell">Formally Verified Dual-Process Clinical Reasoning</td><td>Clinical AI</td><td>Logic, Theory of Computation</td><td><span class="tag tag-d">Ishaan D3</span></td></tr>
<tr><td class="id id-a">A11</td><td class="title-cell">Multi-Parameter Persistence for Protein Design Spaces</td><td>Math Foundations</td><td>Algebra II, Algebraic Topology</td><td><span class="tag tag-d">New</span></td></tr>
<tr><td class="id id-a">A12</td><td class="title-cell">Evolutionary Game Theory of Drug Resistance</td><td>Math Foundations</td><td>DiffEq, Game Theory</td><td><span class="tag tag-d">New</span></td></tr>
<tr><td class="id id-a">A13</td><td class="title-cell">RL with Experimental Feedback for Protein Design</td><td>Protein Design</td><td>Stat. Inference, Intro ML</td><td><span class="tag tag-d">New</span></td></tr>
</tbody>
</table>
</div>

<!-- ===== EXAMPLE PATHS ===== -->
<div class="iml-paths">
<h2>Suggested Paths by Major</h2>

<div class="iml-path-row">
  <span class="iml-path-label">CS Major</span>
  <span class="iml-path-step" style="background: #faf5ff; color: #7c3aed;">B6 or B10</span>
  <span class="iml-flow-arrow">&rarr;</span>
  <span class="iml-path-step" style="background: #eff6ff; color: #2563eb;">I5 or I8</span>
  <span class="iml-flow-arrow">&rarr;</span>
  <span class="iml-path-step" style="background: #fef2f2; color: #dc2626;">A3 or A10</span>
</div>
<div class="iml-path-row">
  <span class="iml-path-label">Math Major</span>
  <span class="iml-path-step" style="background: #faf5ff; color: #7c3aed;">B5 or B3</span>
  <span class="iml-flow-arrow">&rarr;</span>
  <span class="iml-path-step" style="background: #eff6ff; color: #2563eb;">I2 or I7</span>
  <span class="iml-flow-arrow">&rarr;</span>
  <span class="iml-path-step" style="background: #fef2f2; color: #dc2626;">A1 or A9</span>
</div>
<div class="iml-path-row">
  <span class="iml-path-label">Bio + CS</span>
  <span class="iml-path-step" style="background: #faf5ff; color: #7c3aed;">B1 or B9</span>
  <span class="iml-flow-arrow">&rarr;</span>
  <span class="iml-path-step" style="background: #eff6ff; color: #2563eb;">I11 or I14</span>
  <span class="iml-flow-arrow">&rarr;</span>
  <span class="iml-path-step" style="background: #fef2f2; color: #dc2626;">A12 or A13</span>
</div>
<div class="iml-path-row">
  <span class="iml-path-label">Juneja Course</span>
  <span class="iml-path-step" style="background: #faf5ff; color: #7c3aed;">B5 or B8</span>
  <span class="iml-flow-arrow">&rarr;</span>
  <span class="iml-path-step" style="background: #eff6ff; color: #2563eb;">I3 or I10</span>
  <span class="iml-flow-arrow">&rarr;</span>
  <span class="iml-path-step" style="background: #fef2f2; color: #dc2626;">A1 or A13</span>
</div>
</div>

<!-- ===== RESOURCES ===== -->
<div class="iml-resources">
  <h2>Getting Started</h2>
  <ul>
    <li><strong>Tools</strong>: Protenix, Boltz-2, RFAntibody, DeepPurpose, TorchDrug, GUDHI, LeanDojo &mdash; all open-source</li>
    <li><strong>Textbooks</strong>: Boyd &amp; Vandenberghe (Convex Optimization), Garnett (Bayesian Optimization), Bronstein (Geometric DL) &mdash; all free online</li>
    <li><strong>Competitions</strong>: Adaptyv Bio monthly challenges, BioML benchmark, ICLR GEM workshop</li>
    <li><strong>Communities</strong>: Lean4 Zulip, Adaptyv Discord, Ashoka KCDHA reading groups</li>
  </ul>
</div>

<!-- ===== BOTTOM CTA ===== -->
<div style="text-align: center; margin: 2rem 0 1rem; padding: 1.5rem; background: linear-gradient(135deg, #1e1b4b, #312e81); border-radius: 10px; color: white;">
  <p style="margin: 0 0 0.5rem; font-size: 1.05rem; font-weight: 600;">Don't see your problem? Propose one.</p>
  <p style="margin: 0; font-size: 0.85rem; color: #c7d2fe; line-height: 1.5;">If you have your own research question at the intersection of ML and science,<br>reach out &mdash; we'll find the right mentor combination.</p>
</div>

<p style="text-align: center; font-size: 0.7rem; color: #ccc; margin-top: 1rem;">Last updated March 2026. Full project details available on request.</p>

<script>
function showTier(tier) {
  ['b','i','a'].forEach(function(t) {
    document.getElementById('section-' + t).classList.remove('active');
    var btn = document.getElementById('btn-' + t);
    btn.className = '';
  });
  document.getElementById('section-' + tier).classList.add('active');
  document.getElementById('btn-' + tier).className = 'active-' + tier;
  history.replaceState(null, '', '#' + tier);
}
if (window.location.hash) {
  var h = window.location.hash.substring(1);
  if (['b','i','a'].indexOf(h) !== -1) showTier(h);
}
</script>

  </div>
</main>
