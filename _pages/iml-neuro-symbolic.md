---
permalink: /iml-project-ideas/neuro-symbolic/
title: "Neuro-Symbolic AI — Open Problems"
layout: default
---

<main class="main-content">
  <div class="container-narrow">

<style>
  .ns-breadcrumb { font-size: 0.78rem; color: #9ca3af; margin-bottom: 1.5rem; }
  .ns-breadcrumb a { color: #6b7280; text-decoration: none; }
  .ns-breadcrumb a:hover { color: #374151; }

  .ns-hero { text-align: center; margin: 0 0 2.5rem 0; }
  .ns-hero h1 { font-size: 1.9rem; font-weight: 800; line-height: 1.25; margin: 0.5rem 0; color: #1e1b4b; }
  .ns-hero .subtitle { font-size: 1rem; color: #666; max-width: 520px; margin: 0.75rem auto 0; line-height: 1.6; }
  .ns-badge { display: inline-block; background: linear-gradient(135deg, #059669, #0891b2); color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.3rem 0.7rem; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.75rem; }

  .ns-overview { margin: 2rem 0; }
  .ns-overview p { font-size: 0.9rem; color: #374151; line-height: 1.75; margin: 0 0 1rem; }

  .ns-callout { margin: 1.5rem 0; padding: 1rem 1.25rem; background: #f0fdf4; border-left: 4px solid #059669; border-radius: 4px; font-size: 0.85rem; color: #15803d; line-height: 1.6; }
  .ns-callout strong { color: #166534; }

  .ns-courses { margin: 2rem 0; }
  .ns-courses h2 { font-size: 0.85rem; color: #999; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; }
  .ns-course-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
  .ns-course-table th { text-align: left; padding: 0.45rem 0.6rem; border-bottom: 2px solid #e5e7eb; color: #6b7280; font-weight: 600; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; }
  .ns-course-table td { padding: 0.5rem 0.6rem; border-bottom: 1px solid #f3f4f6; color: #374151; vertical-align: top; }
  .ns-course-table tr:hover { background: #fafafa; }

  .ns-projects { margin: 2rem 0; }
  .ns-projects h2 { font-size: 0.85rem; color: #999; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; }
  .ns-table { width: 100%; border-collapse: collapse; font-size: 0.82rem; }
  .ns-table th { text-align: left; padding: 0.5rem 0.6rem; border-bottom: 2px solid #e5e7eb; color: #6b7280; font-weight: 600; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; }
  .ns-table td { padding: 0.55rem 0.6rem; border-bottom: 1px solid #f3f4f6; color: #374151; vertical-align: top; }
  .ns-table tr:hover { background: #fafafa; }
  .ns-table .id { font-weight: 700; font-size: 0.75rem; white-space: nowrap; }
  .ns-table .id-i { color: #2563eb; }
  .ns-table .id-a { color: #dc2626; }
  .ns-table .tier-i { display: inline-block; padding: 0.1rem 0.4rem; border-radius: 3px; font-size: 0.65rem; font-weight: 700; background: #eff6ff; color: #2563eb; }
  .ns-table .tier-a { display: inline-block; padding: 0.1rem 0.4rem; border-radius: 3px; font-size: 0.65rem; font-weight: 700; background: #fef2f2; color: #dc2626; }

  .ns-refs { margin: 2rem 0; padding: 1.25rem; background: #f9fafb; border-radius: 8px; }
  .ns-refs h2 { font-size: 0.85rem; color: #999; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; }
  .ns-refs ol { margin: 0; padding-left: 1.4rem; font-size: 0.82rem; color: #555; line-height: 2; }
  .ns-refs a { color: #059669; text-decoration: none; }
  .ns-refs a:hover { text-decoration: underline; }

  .ns-ishaan { margin: 2rem 0; }
  .ns-ishaan h2 { font-size: 0.85rem; color: #999; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 0.75rem; }
  .ns-dir-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.6rem; }
  .ns-dir { padding: 0.75rem 0.9rem; border-radius: 6px; border: 1px solid #d1fae5; background: #f0fdf4; }
  .ns-dir .dir-id { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #059669; margin-bottom: 0.2rem; }
  .ns-dir .dir-title { font-size: 0.78rem; font-weight: 600; color: #1e1b4b; line-height: 1.3; margin-bottom: 0.2rem; }
  .ns-dir .dir-projects { font-size: 0.68rem; color: #6b7280; }

  @media (max-width: 640px) {
    .ns-dir-grid { grid-template-columns: 1fr; }
    .ns-table { font-size: 0.75rem; }
    .ns-table th, .ns-table td { padding: 0.4rem; }
  }
</style>

<!-- ===== BREADCRUMB ===== -->
<div class="ns-breadcrumb">
  <a href="/iml-project-ideas/">&larr; All 40 Open Problems</a> &nbsp;/&nbsp; Neuro-Symbolic AI
</div>

<!-- ===== HERO ===== -->
<div class="ns-hero">
  <div class="ns-badge">Domain &middot; 4 Projects &middot; Spring 2026</div>
  <svg width="48" height="48" viewBox="0 0 28 28" fill="none" style="display:block;margin:0 auto 0.5rem;"><circle cx="10" cy="14" r="5" stroke="#059669" stroke-width="1.5"/><circle cx="18" cy="14" r="5" stroke="#059669" stroke-width="1.5"/><path d="M13 11v6M15 11v6" stroke="#6ee7b7" stroke-width="1.2" stroke-linecap="round"/></svg>
  <h1>Neuro-Symbolic AI<br>Open Problems</h1>
  <p class="subtitle">Differentiable symbolic reasoning. Categorical deep learning. Verified clinical AI.<br>4 projects spanning Intermediate to Advanced.</p>
</div>

<!-- ===== DOMAIN OVERVIEW ===== -->
<div class="ns-overview">

<p>2026 is shaping up as the year neuro-symbolic AI moves from academic curiosity to serious infrastructure. The central challenge — how to backpropagate through a discrete symbolic system — has resisted clean solutions for decades. Three approaches are now converging: <strong>Scallop</strong> (differentiable Datalog that compiles logic programs into provenance semirings, enabling gradients to flow through symbolic rules), <strong>Logical Neural Networks</strong> (IBM's framework where first-order logic rules carry learnable weights, shown at AMIA 2025 to outperform traditional ML for clinical diagnosis), and <strong>Categorical Deep Learning</strong> (Gavranovic et al., which attracted $30M for Symbolica by treating category theory as a unifying mathematical language for both neural and symbolic computation).</p>

<p>Why does this matter for science? Two application domains make the case sharply. In clinical reasoning, Adam Rodman's research at Harvard/BIDMC shows that LLMs already score 10/10 on structured clinical reasoning benchmarks, yet clinicians <em>augmented</em> with AI sometimes underperform AI alone — because automation bias causes them to defer without engaging their own judgment. A neuro-symbolic architecture with formal safety guarantees (certain rules literally cannot be overridden by the neural component) addresses this directly. In drug discovery, knowledge graphs like the one underlying Onco-TTT generate hypotheses via heuristic graph diffusion; replacing that heuristic with differentiable symbolic reasoning (Scallop over pharmacological rules, categorical composition over drug-interaction functors) makes the inference chain verifiable and the learning end-to-end.</p>

<p>The four projects here derive directly from Ishaan Varior's five research directions developed jointly with Ashish Makani. Direction D3 (dual-process clinical reasoning) maps to I5 and A10 — a prototype and a formally verified full system respectively. Direction D4 (differentiable symbolic KGs) maps to I6 and A5 — a Scallop-based implementation and a full categorical framework respectively. D5 (AI math discovery) connects to A10 through formal verification methods and to the Formal Math domain page. Together they form a coherent research program: neural networks for flexible pattern recognition, symbolic systems for provable guarantees, and a mathematically principled interface between them.</p>

<p>The deepest open problem remains unsolved: there is no universally satisfying way to backpropagate through a symbolic system. REINFORCE-style gradient estimators are high variance. Fuzzy/soft logic relaxations lose exactness. Straight-through estimators are theoretically unprincipled. Scallop's provenance semiring approach is the most promising current answer, and all four projects give students hands-on experience with exactly this frontier.</p>

</div>

<!-- ===== ISHAAN DIRECTIONS ===== -->
<div class="ns-ishaan">
<h2>Connection to Ishaan Varior's Research Directions</h2>
<div class="ns-dir-grid">
  <div class="ns-dir">
    <div class="dir-id">D3</div>
    <div class="dir-title">Dual-Process Clinical Reasoning</div>
    <div class="dir-projects">Projects: I5, A10</div>
  </div>
  <div class="ns-dir">
    <div class="dir-id">D4</div>
    <div class="dir-title">Differentiable Symbolic KGs</div>
    <div class="dir-projects">Projects: I6, A5</div>
  </div>
  <div class="ns-dir">
    <div class="dir-id">D5</div>
    <div class="dir-title">AI Math Discovery</div>
    <div class="dir-projects">Methods feed into A10 (Lean4 verification)</div>
  </div>
</div>
</div>

<!-- ===== ASHOKA COURSEWORK ===== -->
<div class="ns-courses">
<h2>Ashoka Coursework Connections</h2>
<table class="ns-course-table">
<thead><tr><th>Course</th><th>Concept Used</th><th>Projects</th></tr></thead>
<tbody>
<tr><td>CS 5310 / MAT 3216 Symbolic Logic</td><td>First-order logic, proof theory, model theory</td><td>I5, A10</td></tr>
<tr><td>CS 3410 / MAT 3211 Intro to ML</td><td>Neural networks, gradient-based optimization, confidence calibration</td><td>I5, I6</td></tr>
<tr><td>CS 2201 Data Structures &amp; Algorithms</td><td>Graph construction, traversal, knowledge graph manipulation</td><td>I6</td></tr>
<tr><td>MAT 3102 Algebra II / Category Theory</td><td>Functors, natural transformations, compositionality proofs</td><td>A5</td></tr>
<tr><td>CS 4101 Theory of Computation</td><td>Formal verification, decidability, proof systems</td><td>A10</td></tr>
</tbody>
</table>
</div>

<!-- ===== PROJECTS TABLE ===== -->
<div class="ns-projects">
<h2>The 4 Projects</h2>
<table class="ns-table">
<thead><tr><th>ID</th><th>Project</th><th>Tier</th><th>Prereqs</th><th>Description</th></tr></thead>
<tbody>
<tr>
  <td class="id id-i">I5</td>
  <td><strong>Neuro-Symbolic Clinical Reasoning Prototype</strong></td>
  <td><span class="tier-i">Intermediate</span></td>
  <td>Intro ML, Discrete Math / Logic</td>
  <td>Build a dual-process clinical reasoning module: LLM as System&nbsp;1 (fast pattern-based diagnosis), rule-based NCCN guideline checker as System&nbsp;2, with formally specified triggering conditions. Evaluated on 50 oncology vignettes across 3 cancer types, comparing neural-only, symbolic-only, and hybrid performance.</td>
</tr>
<tr>
  <td class="id id-i">I6</td>
  <td><strong>Drug Discovery KG with Differentiable Reasoning</strong></td>
  <td><span class="tier-i">Intermediate</span></td>
  <td>Intro ML, DSA, Algebra&nbsp;I</td>
  <td>Construct a CYP450 drug-interaction knowledge graph from DrugBank (50 oncology drugs), encode pharmacological rules in Scallop, and train a GNN link predictor end-to-end through the differentiable symbolic layer. Demonstrates the core neuro-symbolic insight: symbolic constraints improve neural predictions while keeping hard rules non-negotiable.</td>
</tr>
<tr>
  <td class="id id-a">A5</td>
  <td><strong>Categorical Deep Learning for Drug Discovery KGs</strong></td>
  <td><span class="tier-a">Advanced</span></td>
  <td>Algebra&nbsp;II / Category Theory, Intro ML</td>
  <td>Model the drug discovery knowledge graph as a category (biomedical entities as objects, relationships as morphisms), drug-drug interactions as functors, and pharmacological constraints as natural transformations. Prove compositionality: under what categorical conditions is transitivity of drug safety guaranteed? Integrate the Scallop differentiable layer and replace Onco-TTT's heuristic graph diffusion. Lean4 formalization is a stretch goal. Thesis-level; targets NeurIPS, ICML, or ACT&nbsp;2026.</td>
</tr>
<tr>
  <td class="id id-a">A10</td>
  <td><strong>Formally Verified Dual-Process Clinical Reasoning</strong></td>
  <td><span class="tier-a">Advanced</span></td>
  <td>Theory of Computation, Symbolic Logic, Intro ML</td>
  <td>Extend I5 to a production-grade system: Logical Neural Networks (learnable rule weights) layered over Lean4-verified hard safety rules (e.g., "never give immunotherapy to a patient with active autoimmune disease"). Formally prove that hard rules cannot be overridden by any neural input. Integrate into Onco-Shikshak and evaluate with oncology residents on 100 vignettes. Targets JAMIA, AAAI, or Nature Medicine.</td>
</tr>
</tbody>
</table>
</div>

<!-- ===== KEY REFERENCES ===== -->
<div class="ns-refs">
<h2>Key References</h2>
<ol>
  <li>Li, Z., et al. (2023). <em>Scallop: A Language for Neurosymbolic Programming.</em> PLDI. <a href="https://github.com/scallop-lang/scallop" target="_blank">github.com/scallop-lang/scallop</a></li>
  <li>Gavranovic, B., et al. (2024). <em>Categorical Deep Learning: An Algebraic Theory of Architectures.</em> arXiv:2402.15332. (Foundation for Symbolica, $30M funding.)</li>
  <li>Logical Neural Networks (2025). <em>First-order logic rules with learnable weights for clinical diagnosis.</em> AMIA Annual Symposium. PMC12150699.</li>
  <li>Rodman, A. (2025). <em>Towards a Medical Superintelligence.</em> Massachusetts Medical Society. (LLMs score 10/10 vs 9 for attendings on r-IDEA; automation bias paradox.)</li>
  <li>Fong, B. &amp; Spivak, D.&nbsp;I. (2019). <em>An Invitation to Applied Category Theory: Seven Sketches in Compositionality.</em> Cambridge University Press. <a href="https://arxiv.org/abs/1803.05316" target="_blank">arXiv:1803.05316</a> (free PDF)</li>
  <li>Wishart, D.&nbsp;S., et al. (2018). <em>DrugBank 5.0.</em> Nucleic Acids Research, 46(D1), D1074&ndash;D1082. Primary data source for I6 and A5.</li>
  <li>Croskerry, P. (2009). <em>A Universal Model of Diagnostic Reasoning.</em> Academic Medicine, 84(8), 1022&ndash;1028. Foundational dual-process theory paper.</li>
  <li>Kahneman, D. (2011). <em>Thinking, Fast and Slow.</em> Farrar, Straus and Giroux. Canonical System&nbsp;1 / System&nbsp;2 framework underlying I5 and A10.</li>
</ol>
</div>

<!-- ===== BOTTOM CTA ===== -->
<div style="text-align: center; margin: 2rem 0 1rem; padding: 1.5rem; background: linear-gradient(135deg, #064e3b, #065f46); border-radius: 10px; color: white;">
  <p style="margin: 0 0 0.5rem; font-size: 1.05rem; font-weight: 600;">Interested in a neuro-symbolic project?</p>
  <p style="margin: 0 0 1rem; font-size: 0.85rem; color: #a7f3d0; line-height: 1.5;">Email me at my Ashoka address with subject <em>"IML: [I5 / I6 / A5 / A10]"</em>.<br>I5 and I6 are good entry points; A5 and A10 suit thesis students.</p>
  <a href="/iml-project-ideas/" style="display:inline-block; padding: 0.5rem 1.25rem; background: white; color: #065f46; font-size: 0.82rem; font-weight: 700; border-radius: 5px; text-decoration: none;">&larr; Back to all 40 projects</a>
</div>

<p style="text-align: center; font-size: 0.7rem; color: #ccc; margin-top: 1rem;">Last updated March 2026. Full project specs available on request.</p>

  </div>
</main>
