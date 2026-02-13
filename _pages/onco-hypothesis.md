---
permalink: /onco-hypothesis/
title: "Onco-Hypothesis"
layout: default
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-DL14WPLF01"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DL14WPLF01');
</script>

<style>
.onco-hypothesis-hero {
  background: linear-gradient(135deg, #0a0a12 0%, #1e293b 50%, #0f0f1a 100%);
  padding: 3rem 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  text-align: center;
}

.onco-hypothesis-hero h1 {
  font-size: 2.8rem;
  color: #fff;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.onco-hypothesis-hero .subtitle {
  font-size: 1.2rem;
  color: #3b82f6;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.onco-hypothesis-hero .tagline {
  font-size: 1rem;
  color: #888;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.6rem;
  color: #333;
  margin: 2.5rem 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #3b82f6;
  display: inline-block;
}

.explainer-box {
  background: #f0f4ff;
  border-left: 4px solid #3b82f6;
  padding: 1.25rem 1.5rem;
  margin: 1.5rem 0;
  border-radius: 0 8px 8px 0;
}

.explainer-box h3 {
  color: #1e293b;
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}

.explainer-box p, .explainer-box li {
  color: #444;
  margin: 0;
  line-height: 1.6;
}

.explainer-box ul {
  margin: 0.5rem 0 0 0;
  padding-left: 1.25rem;
}

.explainer-box li {
  margin-bottom: 0.4rem;
}

.prior-art-box {
  background: linear-gradient(135deg, #fefce8 0%, #fef9c3 100%);
  border: 2px solid #eab308;
  border-radius: 12px;
  padding: 1.5rem 2rem;
  margin: 1.5rem 0;
}

.prior-art-box h3 {
  color: #854d0e;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1.15rem;
}

.prior-art-box p {
  color: #713f12;
  line-height: 1.6;
  margin: 0.5rem 0;
  font-size: 0.95rem;
}

.prior-art-item {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  margin: 0.75rem 0;
}

.prior-art-item h4 {
  color: #1e293b;
  margin: 0 0 0.25rem 0;
  font-size: 1rem;
}

.prior-art-item p {
  color: #555;
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
}

.prior-art-item a {
  color: #3b82f6;
  text-decoration: underline;
}

.prior-art-disclaimer {
  background: #fef2f2;
  border: 1px solid #fca5a5;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  margin-top: 1rem;
  font-size: 0.95rem;
  color: #991b1b;
  text-align: center;
  font-weight: 500;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: center;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  text-decoration: none;
}

.cta-primary {
  background: #3b82f6;
  color: #fff;
}

.cta-secondary {
  background: #1e293b;
  color: #fff;
}

.cta-outline {
  background: transparent;
  border: 2px solid #1e293b;
  color: #1e293b;
}

.highlight-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.stat-card {
  background: linear-gradient(135deg, #f0f4ff 0%, #fff 100%);
  border: 1px solid #dbeafe;
  border-radius: 10px;
  padding: 1.25rem;
  text-align: center;
}

.stat-number {
  font-size: 1.3rem;
  font-weight: 700;
  color: #3b82f6;
}

.stat-label {
  font-size: 0.8rem;
  color: #666;
  margin-top: 0.25rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.feature-card {
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  padding: 1.5rem;
}

.feature-card h4 {
  color: #1e293b;
  margin-top: 0;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.feature-card p {
  color: #555;
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
}

.emoji-icon {
  font-size: 1.3rem;
}

.screenshot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.screenshot-item {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
  background: #fff;
}

.screenshot-placeholder {
  background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  color: #64748b;
  font-size: 0.95rem;
  text-align: center;
  padding: 1.5rem;
  border: 2px dashed #cbd5e1;
  margin: 0;
}

.screenshot-caption {
  padding: 0.75rem 1rem;
  font-size: 0.85rem;
  color: #555;
  background: #f8fafc;
  border-top: 1px solid #e5e7eb;
  text-align: center;
}

.limitations-list {
  background: #fff7ed;
  border: 1px solid #fed7aa;
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  margin: 1.5rem 0;
}

.limitations-list h3 {
  color: #9a3412;
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.05rem;
}

.limitations-list ul {
  margin: 0;
  padding-left: 1.25rem;
}

.limitations-list li {
  color: #7c2d12;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.pipeline-diagram {
  margin: 2rem 0;
  text-align: center;
}

.pipeline-diagram svg {
  max-width: 100%;
  height: auto;
}

.entity-chart {
  margin: 2rem 0;
  text-align: center;
}

.entity-chart svg {
  max-width: 100%;
  height: auto;
}

@media (max-width: 600px) {
  .onco-hypothesis-hero h1 {
    font-size: 2rem;
  }
  .highlight-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  .screenshot-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<main class="main-content">
<div class="container-narrow">

<div class="onco-hypothesis-hero">
  <h1>Onco-TTT</h1>
  <p class="subtitle">AI-Powered Cancer Hypothesis Generation</p>
  <p class="tagline">An open-source platform integrating biomedical NER, knowledge graphs, and literature search for oncology research</p>

  <div class="cta-buttons">
    <a href="https://onco-hypothesis.up.railway.app/" class="cta-button cta-primary" target="_blank">
      Try Live Demo
    </a>
    <a href="https://github.com/inventcures/oncology_hypothesis_generation" class="cta-button cta-secondary" target="_blank">
      View Source
    </a>
    <a href="https://github.com/inventcures/oncology_hypothesis_generation/blob/main/out/v0_onco-hypothesis_scientific-preprint/onco-hypothesis.pdf" class="cta-button cta-outline" style="border-color:#fff; color:#fff;" target="_blank">
      Read Preprint (PDF)
    </a>
  </div>
</div>

<!-- ============================================================ -->
<!-- Section: Standing on the Shoulders of Giants                  -->
<!-- ============================================================ -->

<h2 class="section-title">Standing on the Shoulders of Giants</h2>

<blockquote style="border-left: 4px solid #3b82f6; margin: 1.5rem 0; padding: 1rem 1.5rem; background: #f8fafc; border-radius: 0 8px 8px 0; font-style: italic; color: #475569; font-size: 1.05rem;">
  "If I have seen further, it is by standing on the shoulders of Giants."
  <br><span style="font-style: normal; font-size: 0.9rem; color: #94a3b8;">&mdash; Isaac Newton, 1675</span>
</blockquote>

<div class="prior-art-box">
  <h3>Acknowledgments &amp; Prior Art</h3>
  <p>Onco-TTT is an integration platform. It combines established methods and public data sources into a single workflow for cancer researchers. We are transparent about what we built vs. what we built <em>upon</em>.</p>
</div>

<div class="prior-art-item">
  <h4>ARK (Adaptive Reasoning over Knowledge) &mdash; Internal Module</h4>
  <p>"ARK" is our internal codename for the knowledge graph construction pipeline. It combines <a href="https://github.com/urchade/GLiNER" target="_blank">GLiNER2</a> entity extraction with <a href="https://platform.opentargets.org/" target="_blank">OpenTargets</a> GraphQL enrichment and <a href="https://networkx.org/" target="_blank">NetworkX</a> graph assembly. There is no external paper called "ARK" that this is based on &mdash; the name was coined for this project.</p>
</div>

<div class="prior-art-item">
  <h4>Validation Module &mdash; Inspired by Medea (Zitnik Lab)</h4>
  <p>The multi-source validation module was inspired by <strong>Medea</strong>, an omics AI agent for therapeutic discovery from Marinka Zitnik's lab at Harvard (<a href="https://www.biorxiv.org/content/10.64898/2026.01.16.696667v1" target="_blank">bioRxiv 2026</a>). Medea's core insight &mdash; that verification-aware agents improve performance by producing transparent, multi-evidence analyses &mdash; directly shaped our design. Our module runs parallel checks against <a href="https://depmap.org/" target="_blank">DepMap</a> (gene dependency), <a href="https://www.cbioportal.org/" target="_blank">cBioPortal</a> (genomic alterations), <a href="https://gtexportal.org/" target="_blank">GTEx</a> (tissue expression), <a href="https://clinicaltrials.gov/" target="_blank">ClinicalTrials.gov</a> (active trials), and <a href="https://platform.opentargets.org/" target="_blank">OpenTargets</a> (drug-target tractability).</p>
</div>

<div class="prior-art-item">
  <h4>Test-Time Training (TTT)</h4>
  <p>The project name references the concept of Test-Time Training by Yu Sun et al. (<a href="https://arxiv.org/abs/2407.04620" target="_blank">arXiv:2407.04620</a>), which adapts neural network parameters at inference time. <strong>Transparency note:</strong> our current implementation is a simplified graph-based activation propagation heuristic (keyword matching + neighbor spread over a NetworkX graph), not actual neural parameter adaptation. The name reflects our aspirational direction, not the current mechanism.</p>
</div>

<div class="prior-art-item">
  <h4>GLiNER</h4>
  <p>Entity extraction uses GLiNER, a generalist model for Named Entity Recognition using a bidirectional transformer encoder. <a href="https://github.com/urchade/GLiNER" target="_blank">GitHub</a> &middot; <a href="https://arxiv.org/abs/2311.08526" target="_blank">arXiv:2311.08526</a></p>
</div>

<div class="prior-art-item">
  <h4>Open Targets</h4>
  <p>Gene-disease associations come from the Open Targets Platform, a public-private partnership for systematic drug target identification. <a href="https://platform.opentargets.org/" target="_blank">platform.opentargets.org</a></p>
</div>

<div class="prior-art-item">
  <h4>Semantic Scholar</h4>
  <p>Literature search powered by the Semantic Scholar Academic Graph API from the Allen Institute for AI. <a href="https://www.semanticscholar.org/" target="_blank">semanticscholar.org</a></p>
</div>

<div class="prior-art-item">
  <h4>CELLxGENE Census</h4>
  <p>Single-cell atlas data from the Chan Zuckerberg Initiative's CELLxGENE Census. <a href="https://cellxgene.cziscience.com/" target="_blank">cellxgene.cziscience.com</a></p>
</div>

<div class="prior-art-item">
  <h4>Medea &mdash; Omics AI Agent (Zitnik Lab, Harvard)</h4>
  <p>The verification-aware, multi-evidence analysis approach in Medea directly inspired our validation dashboard design. Medea uses 20 tools spanning single-cell and bulk transcriptomic datasets, cancer vulnerability maps, and pathway knowledge bases. By Sui, Li, Gao, Shen, Giunchiglia, Shen, Huang, Kong &amp; Zitnik. <a href="https://www.biorxiv.org/content/10.64898/2026.01.16.696667v1" target="_blank">bioRxiv 2026</a></p>
</div>

<div class="prior-art-item">
  <h4>Why LLMs Aren't Scientists Yet (LossFunk)</h4>
  <p>Honest failure mode analysis of autonomous AI research attempts. The six documented failure modes &mdash; bias toward training data defaults, implementation drift, memory degradation, overexcitement, insufficient domain intelligence, and weak scientific taste &mdash; informed our design decisions about what to automate vs. leave to the researcher. By Dhruv Trehan &amp; Paras Chopra. <a href="https://arxiv.org/abs/2601.03315" target="_blank">arXiv:2601.03315</a></p>
</div>

<div class="prior-art-item">
  <h4>METIS &mdash; AI Research Mentor (LossFunk)</h4>
  <p>A tool-augmented, stage-aware AI assistant for guiding students from idea to paper. METIS's approach of combining literature search with methodology checks and curated guidelines influenced our pipeline design. By Kumar, Trehan &amp; Chopra. <a href="https://arxiv.org/abs/2601.13075" target="_blank">arXiv:2601.13075</a></p>
</div>

<div class="prior-art-item">
  <h4>Gemini Deep Think &mdash; Jeff Dean &amp; Team (Google DeepMind)</h4>
  <p>We thank Jeff Dean and his team at Google DeepMind for the fantastic innovation behind Gemini Deep Think and for releasing a detailed technical report. Their work on accelerating mathematical and scientific discovery with extended thinking models resonates strongly with Onco-TTT's goals. Several ideas described in their tech report &mdash; including structured reasoning chains and iterative hypothesis refinement &mdash; overlap with approaches we had already implemented in our pipeline. <a href="https://deepmind.google/blog/accelerating-mathematical-and-scientific-discovery-with-gemini-deep-think/" target="_blank">Blog post</a> &middot; <a href="https://arxiv.org/abs/2602.03837" target="_blank">arXiv:2602.03837</a> &middot; <a href="https://arxiv.org/abs/2511.01846" target="_blank">arXiv:2511.01846</a> &middot; <a href="https://github.com/inventcures/oncology_hypothesis_generation/commit/11fe6aae95bc7c5375fc519abb8c9bc9f2201acc" target="_blank">Our prior implementation</a></p>
</div>

<div class="prior-art-disclaimer">
  This project does not claim novelty in any of the underlying methods. Our contribution is the integration of these tools into a single, accessible platform for cancer researchers.
</div>

<!-- ============================================================ -->
<!-- Section: Pipeline Architecture Diagram                        -->
<!-- ============================================================ -->

<h2 class="section-title">Pipeline Architecture</h2>

<p>A natural-language query flows through entity extraction, knowledge graph construction, enrichment, and adaptive hypothesis generation. External APIs provide evidence grounding at each stage.</p>

<div class="pipeline-diagram">
<svg viewBox="0 0 960 380" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <!-- Definitions -->
  <defs>
    <marker id="arrow" viewBox="0 0 10 6" refX="10" refY="3" markerWidth="8" markerHeight="6" orient="auto-start-auto">
      <path d="M 0 0 L 10 3 L 0 6 z" fill="#94a3b8"/>
    </marker>
    <filter id="shadow" x="-4%" y="-4%" width="108%" height="112%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.1"/>
    </filter>
  </defs>

  <!-- Row 1: Main pipeline (compute steps in blue) -->
  <!-- User Query -->
  <rect x="20" y="40" width="130" height="56" rx="10" fill="#1e293b" filter="url(#shadow)"/>
  <text x="85" y="64" text-anchor="middle" fill="#fff" font-size="13" font-weight="600">User Query</text>
  <text x="85" y="82" text-anchor="middle" fill="#94a3b8" font-size="10">"role of TP53 in cancer"</text>

  <!-- Arrow -->
  <line x1="155" y1="68" x2="182" y2="68" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- GLiNER NER -->
  <rect x="188" y="40" width="130" height="56" rx="10" fill="#3b82f6" filter="url(#shadow)"/>
  <text x="253" y="64" text-anchor="middle" fill="#fff" font-size="13" font-weight="600">GLiNER2 NER</text>
  <text x="253" y="82" text-anchor="middle" fill="#bfdbfe" font-size="10">Entity Extraction</text>

  <!-- Arrow -->
  <line x1="323" y1="68" x2="350" y2="68" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Knowledge Graph Builder -->
  <rect x="356" y="40" width="145" height="56" rx="10" fill="#3b82f6" filter="url(#shadow)"/>
  <text x="428" y="64" text-anchor="middle" fill="#fff" font-size="13" font-weight="600">KG Builder</text>
  <text x="428" y="82" text-anchor="middle" fill="#bfdbfe" font-size="10">Knowledge Graph</text>

  <!-- Arrow -->
  <line x1="506" y1="68" x2="533" y2="68" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- OpenTargets Enrichment (green = external API) -->
  <rect x="539" y="40" width="145" height="56" rx="10" fill="#10b981" filter="url(#shadow)"/>
  <text x="611" y="64" text-anchor="middle" fill="#fff" font-size="13" font-weight="600">OpenTargets</text>
  <text x="611" y="82" text-anchor="middle" fill="#a7f3d0" font-size="10">Gene-Disease Links</text>

  <!-- Arrow -->
  <line x1="689" y1="68" x2="716" y2="68" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- TTT Adaptation -->
  <rect x="722" y="40" width="130" height="56" rx="10" fill="#3b82f6" filter="url(#shadow)"/>
  <text x="787" y="64" text-anchor="middle" fill="#fff" font-size="13" font-weight="600">Activation Prop.</text>
  <text x="787" y="82" text-anchor="middle" fill="#bfdbfe" font-size="10">Graph Traversal</text>

  <!-- Arrow down from TTT to Hypothesis -->
  <line x1="787" y1="101" x2="787" y2="138" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Hypothesis Generation (purple = output) -->
  <rect x="707" y="144" width="160" height="56" rx="10" fill="#7c3aed" filter="url(#shadow)"/>
  <text x="787" y="168" text-anchor="middle" fill="#fff" font-size="13" font-weight="600">Hypothesis</text>
  <text x="787" y="186" text-anchor="middle" fill="#ddd6fe" font-size="10">Generation</text>

  <!-- Arrow down from Hypothesis to Results Dashboard -->
  <line x1="787" y1="205" x2="787" y2="248" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Results Dashboard (purple = output) -->
  <rect x="687" y="254" width="200" height="56" rx="10" fill="#7c3aed" filter="url(#shadow)"/>
  <text x="787" y="278" text-anchor="middle" fill="#fff" font-size="13" font-weight="600">Results Dashboard</text>
  <text x="787" y="296" text-anchor="middle" fill="#ddd6fe" font-size="10">Hypotheses + Evidence</text>

  <!-- Row 2: External APIs feeding into Results -->
  <!-- Semantic Scholar -->
  <rect x="220" y="200" width="170" height="56" rx="10" fill="#10b981" filter="url(#shadow)"/>
  <text x="305" y="224" text-anchor="middle" fill="#fff" font-size="13" font-weight="600">Semantic Scholar</text>
  <text x="305" y="242" text-anchor="middle" fill="#a7f3d0" font-size="10">Literature Search</text>

  <!-- Arrow from Semantic Scholar to Results -->
  <line x1="395" y1="252" x2="395" y2="282" stroke="#94a3b8" stroke-width="2"/>
  <line x1="395" y1="282" x2="682" y2="282" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- CELLxGENE -->
  <rect x="220" y="270" width="170" height="56" rx="10" fill="#10b981" filter="url(#shadow)"/>
  <text x="305" y="294" text-anchor="middle" fill="#fff" font-size="13" font-weight="600">CELLxGENE Census</text>
  <text x="305" y="312" text-anchor="middle" fill="#a7f3d0" font-size="10">Atlas Projection</text>

  <!-- Arrow from CELLxGENE to Results -->
  <line x1="395" y1="298" x2="500" y2="298" stroke="#94a3b8" stroke-width="2"/>
  <line x1="500" y1="298" x2="682" y2="298" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Legend -->
  <rect x="30" y="335" width="14" height="14" rx="3" fill="#3b82f6"/>
  <text x="50" y="347" fill="#555" font-size="11">Compute Steps</text>

  <rect x="165" y="335" width="14" height="14" rx="3" fill="#10b981"/>
  <text x="185" y="347" fill="#555" font-size="11">External APIs</text>

  <rect x="290" y="335" width="14" height="14" rx="3" fill="#7c3aed"/>
  <text x="310" y="347" fill="#555" font-size="11">Output</text>

  <rect x="385" y="335" width="14" height="14" rx="3" fill="#1e293b"/>
  <text x="405" y="347" fill="#555" font-size="11">User Input</text>
</svg>
</div>

<!-- ============================================================ -->
<!-- Section: Entity Types Chart                                   -->
<!-- ============================================================ -->

<h2 class="section-title">Biological Entity Types Extracted by GLiNER2</h2>

<p style="color: #666; font-size: 0.95rem; margin-bottom: 1rem;">The system uses GLiNER, a generalist NER model built on a bidirectional transformer encoder, fine-tuned for biomedical text. It extracts 10 entity types from free-text oncology queries and abstracts.</p>

<div class="entity-chart">
<svg viewBox="0 0 620 380" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <!-- Title -->
  <text x="310" y="28" text-anchor="middle" fill="#1e293b" font-size="15" font-weight="700">Entity Types Recognized</text>
  <text x="310" y="378" text-anchor="middle" fill="#999" font-size="10" font-style="italic">Bar lengths are illustrative only and do not represent empirical extraction frequencies.</text>

  <!-- Bars: label on left, colored bar extending right, category name on bar -->
  <!-- Gene -->
  <text x="135" y="68" text-anchor="end" fill="#333" font-size="13">Gene</text>
  <rect x="145" y="54" width="420" height="22" rx="4" fill="#3b82f6"/>

  <!-- Disease -->
  <text x="135" y="100" text-anchor="end" fill="#333" font-size="13">Disease</text>
  <rect x="145" y="86" width="390" height="22" rx="4" fill="#ef4444"/>

  <!-- Drug -->
  <text x="135" y="132" text-anchor="end" fill="#333" font-size="13">Drug</text>
  <rect x="145" y="118" width="360" height="22" rx="4" fill="#10b981"/>

  <!-- Pathway -->
  <text x="135" y="164" text-anchor="end" fill="#333" font-size="13">Pathway</text>
  <rect x="145" y="150" width="340" height="22" rx="4" fill="#8b5cf6"/>

  <!-- Mutation -->
  <text x="135" y="196" text-anchor="end" fill="#333" font-size="13">Mutation</text>
  <rect x="145" y="182" width="310" height="22" rx="4" fill="#f59e0b"/>

  <!-- Cell Type -->
  <text x="135" y="228" text-anchor="end" fill="#333" font-size="13">Cell Type</text>
  <rect x="145" y="214" width="280" height="22" rx="4" fill="#06b6d4"/>

  <!-- Biomarker -->
  <text x="135" y="260" text-anchor="end" fill="#333" font-size="13">Biomarker</text>
  <rect x="145" y="246" width="260" height="22" rx="4" fill="#ec4899"/>

  <!-- Mechanism -->
  <text x="135" y="292" text-anchor="end" fill="#333" font-size="13">Mechanism</text>
  <rect x="145" y="278" width="230" height="22" rx="4" fill="#6366f1"/>

  <!-- Anatomical Site -->
  <text x="135" y="324" text-anchor="end" fill="#333" font-size="13">Anatomical Site</text>
  <rect x="145" y="310" width="200" height="22" rx="4" fill="#64748b"/>

  <!-- Clinical Outcome -->
  <text x="135" y="356" text-anchor="end" fill="#333" font-size="13">Clinical Outcome</text>
  <rect x="145" y="342" width="180" height="22" rx="4" fill="#84cc16"/>
</svg>
</div>

<!-- ============================================================ -->
<!-- Section: Screenshots                                          -->
<!-- ============================================================ -->

<h2 class="section-title">Screenshots</h2>

<div class="screenshot-grid">
  <div class="screenshot-item">
    <img src="/images/onco-hypothesis/hero-landing.png" alt="Landing page with suggested queries"
         style="width:100%; display:block;"
         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
    <div class="screenshot-placeholder" style="display:none;">Screenshot: Landing page with suggested queries</div>
    <div class="screenshot-caption">Landing page with suggested queries</div>
  </div>

  <div class="screenshot-item">
    <img src="/images/onco-hypothesis/results-graph.png" alt="Knowledge graph visualization"
         style="width:100%; display:block;"
         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
    <div class="screenshot-placeholder" style="display:none;">Screenshot: Knowledge graph for "role of TP53 in cancer"</div>
    <div class="screenshot-caption">Knowledge graph for "role of TP53 in cancer"</div>
  </div>

  <div class="screenshot-item">
    <img src="/images/onco-hypothesis/results-papers.png" alt="Literature search results"
         style="width:100%; display:block;"
         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
    <div class="screenshot-placeholder" style="display:none;">Screenshot: Literature search results from Semantic Scholar</div>
    <div class="screenshot-caption">Literature search results from Semantic Scholar</div>
  </div>

  <div class="screenshot-item">
    <img src="/images/onco-hypothesis/results-table.png" alt="Entity evidence table"
         style="width:100%; display:block;"
         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
    <div class="screenshot-placeholder" style="display:none;">Screenshot: Entity evidence table with confidence scores</div>
    <div class="screenshot-caption">Entity evidence table with confidence scores</div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Section: Validation & Deep Research Modules                   -->
<!-- ============================================================ -->

<h2 class="section-title">Validation &amp; Deep Research Modules</h2>

<p>Beyond hypothesis generation, the platform provides several modules for deeper investigation of generated hypotheses.</p>

<div class="feature-grid">
  <div class="feature-card">
    <h4><span class="emoji-icon">&#x2705;</span> Validation Dashboard</h4>
    <p>Inspired by <a href="https://www.biorxiv.org/content/10.64898/2026.01.16.696667v1" target="_blank">Medea</a>'s verification-aware approach. Cross-references hypotheses against DepMap (gene dependency), cBioPortal (genomic alterations), GTEx (tissue expression), ClinicalTrials.gov (active trials), and OpenTargets (drug-target tractability). Uses curated fallback data when live APIs are unavailable.</p>
  </div>

  <div class="feature-card">
    <h4><span class="emoji-icon">&#x1F9EC;</span> Protein Structure Analysis</h4>
    <p>Retrieves predicted structures from AlphaFold and runs pocket detection to identify druggable binding sites on proteins implicated in generated hypotheses.</p>
  </div>

  <div class="feature-card">
    <h4><span class="emoji-icon">&#x1F4DC;</span> Patent Landscape</h4>
    <p>Queries the USPTO PatentsView API to surface existing intellectual property around gene targets and drug compounds mentioned in hypotheses.</p>
  </div>

  <div class="feature-card">
    <h4><span class="emoji-icon">&#x1F9EA;</span> Cell Line Recommendations</h4>
    <p>Recommends cell lines for experimental validation using Cellosaurus metadata and DepMap dependency scores matched to hypothesis gene targets.</p>
  </div>

  <div class="feature-card">
    <h4><span class="emoji-icon">&#x1F52C;</span> Experiment Protocol Generator</h4>
    <p>Generates starter experimental protocols including CRISPR guide RNA (gRNA) design suggestions for functional validation of candidate gene targets.</p>
  </div>
</div>

<!-- ============================================================ -->
<!-- Section: Technical Stack                                       -->
<!-- ============================================================ -->

<h2 class="section-title">Technical Stack</h2>

<div class="highlight-stats">
  <div class="stat-card">
    <div class="stat-number">FastAPI</div>
    <div class="stat-label">Backend (Python)</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">Next.js 14</div>
    <div class="stat-label">Frontend (TypeScript)</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">GLiNER2</div>
    <div class="stat-label">Named Entity Recognition</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">NetworkX</div>
    <div class="stat-label">KG + OpenTargets GraphQL</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">S2 API</div>
    <div class="stat-label">Semantic Scholar</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">Census</div>
    <div class="stat-label">CELLxGENE Atlas</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">Railway</div>
    <div class="stat-label">Deployment</div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Section: Limitations & Future Work                             -->
<!-- ============================================================ -->

<h2 class="section-title">Limitations &amp; Future Work</h2>

<div class="limitations-list">
  <h3>Known Limitations (we believe in transparency)</h3>
  <ul>
    <li><strong>Heuristic hypothesis generation</strong> &mdash; hypotheses are assembled from graph traversal heuristics, not from a fine-tuned LLM. Quality varies with query specificity.</li>
    <li><strong>No automated benchmarking</strong> &mdash; there is currently no systematic evaluation against known biological ground truths or curated hypothesis corpora.</li>
    <li><strong>Synthetic UMAP coordinates</strong> &mdash; single-cell atlas projections use synthetically computed UMAP embeddings, not projections from a reference atlas model.</li>
    <li><strong>No user accounts or saved sessions</strong> &mdash; all queries are stateless; users cannot save, compare, or revisit prior analyses.</li>
    <li><strong>Oncology-only scope</strong> &mdash; the entity types, knowledge graph schema, and data sources are tailored to cancer biology. Generalization to other disease areas is not supported.</li>
  </ul>
</div>

<div class="explainer-box">
  <h3>Future Directions</h3>
  <p>Planned improvements include LLM-powered hypothesis refinement with citation grounding, automated evaluation against curated benchmarks (e.g., COSMIC, CIViC), persistent user sessions, and expansion to additional disease domains.</p>
</div>

<!-- ============================================================ -->
<!-- Section: Citation                                              -->
<!-- ============================================================ -->

<h2 class="section-title">Preprint &amp; Citation</h2>

<p>A scientific preprint describing Onco-TTT's architecture, methods, and limitations is available:</p>

<div class="explainer-box">
  <h3>Preprint</h3>
  <p><strong>Onco-TTT: An Open-Source Platform for Automated Cancer Hypothesis Generation via Entity Extraction, Knowledge Graphs, and Multi-Source Validation</strong><br>
  Ashish Makani. February 2026. Not peer-reviewed.<br>
  <a href="https://github.com/inventcures/oncology_hypothesis_generation/blob/main/out/v0_onco-hypothesis_scientific-preprint/onco-hypothesis.pdf" target="_blank">Download PDF</a> &middot; <a href="https://github.com/inventcures/oncology_hypothesis_generation/blob/main/out/v0_onco-hypothesis_scientific-preprint/onco-hypothesis.tex" target="_blank">LaTeX source</a></p>
</div>

<p>If you use Onco-TTT in your research, please cite:</p>

```bibtex
@software{makani2026oncottt,
  title={Onco-TTT: An Open-Source Platform for Automated Cancer
         Hypothesis Generation via Entity Extraction, Knowledge
         Graphs, and Multi-Source Validation},
  author={Makani, Ashish},
  url={https://github.com/inventcures/oncology_hypothesis_generation},
  year={2026}
}
```

<!-- ============================================================ -->
<!-- Section: Footer                                                -->
<!-- ============================================================ -->

<hr style="margin: 2rem 0; border: none; border-top: 1px solid #ddd;">

<div class="cta-buttons" style="justify-content: flex-start;">
  <a href="https://onco-hypothesis.up.railway.app/" class="cta-button cta-primary" target="_blank">
    Try Live Demo
  </a>
  <a href="https://github.com/inventcures/oncology_hypothesis_generation" class="cta-button cta-secondary" target="_blank">
    GitHub Repo
  </a>
  <a href="https://github.com/inventcures/oncology_hypothesis_generation/blob/main/out/v0_onco-hypothesis_scientific-preprint/onco-hypothesis.pdf" class="cta-button cta-outline" target="_blank">
    Preprint (PDF)
  </a>
  <a href="mailto:ashish.makani@ashoka.edu.in?subject=Onco-TTT%20Feedback" class="cta-button cta-outline">
    Contact
  </a>
</div>

<p style="color: #888; font-size: 0.9rem;">
<strong>Contact:</strong> Ashish Makani &mdash; ashish.makani@ashoka.edu.in<br>
<strong>Last updated:</strong> February 2026
</p>

</div>
</main>
