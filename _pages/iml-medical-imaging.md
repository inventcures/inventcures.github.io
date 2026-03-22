---
permalink: /iml-project-ideas/medical-imaging/
title: "Medical Imaging — Open Problems"
layout: default
---

<main class="main-content">
  <div class="container-narrow">

<style>
  .iml-hero { text-align: center; margin: 0 0 2.5rem 0; }
  .iml-hero h1 { font-size: 2rem; font-weight: 800; line-height: 1.25; margin: 0.5rem 0; color: #1e1b4b; }
  .iml-hero .subtitle { font-size: 1.05rem; color: #666; max-width: 560px; margin: 0.75rem auto 0; line-height: 1.6; }
  .iml-badge { display: inline-block; background: linear-gradient(135deg, #8b5cf6, #6d28d9); color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.3rem 0.7rem; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.75rem; }

  .iml-breadcrumb { font-size: 0.78rem; color: #9ca3af; margin-bottom: 2rem; }
  .iml-breadcrumb a { color: #6b7280; text-decoration: none; }
  .iml-breadcrumb a:hover { color: #1e1b4b; }

  .iml-cta { margin: 1.5rem 0; padding: 1.1rem 1.4rem; background: #f0fdf4; border-left: 4px solid #22c55e; border-radius: 4px; }
  .iml-cta p { margin: 0; font-size: 0.88rem; color: #15803d; line-height: 1.6; }
  .iml-cta strong { color: #166534; }

  .iml-overview { margin: 2rem 0; font-size: 0.88rem; color: #374151; line-height: 1.75; }
  .iml-overview p { margin: 0 0 1rem; }

  .iml-courses { margin: 2rem 0; padding: 1.1rem 1.4rem; background: #faf5ff; border-left: 4px solid #8b5cf6; border-radius: 4px; }
  .iml-courses h2 { font-size: 0.85rem; color: #6d28d9; text-transform: uppercase; letter-spacing: 0.07em; margin: 0 0 0.6rem; font-weight: 700; }
  .iml-courses ul { margin: 0; padding-left: 1.2rem; font-size: 0.83rem; color: #4b5563; line-height: 1.8; }

  .iml-table { width: 100%; border-collapse: collapse; margin: 0.75rem 0 2rem; font-size: 0.82rem; }
  .iml-table th { text-align: left; padding: 0.5rem 0.6rem; border-bottom: 2px solid #e5e7eb; color: #6b7280; font-weight: 600; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; }
  .iml-table td { padding: 0.55rem 0.6rem; border-bottom: 1px solid #f3f4f6; color: #374151; vertical-align: top; }
  .iml-table tr:hover { background: #fafafa; }
  .iml-table .id { font-weight: 700; font-size: 0.75rem; white-space: nowrap; }
  .iml-table .id-b { color: #7c3aed; }
  .iml-table .id-i { color: #2563eb; }
  .iml-table .title-cell { font-weight: 500; }
  .iml-table .desc-cell { color: #6b7280; font-size: 0.78rem; }

  .iml-refs { margin: 2rem 0 1rem; padding: 1.25rem; background: #f9fafb; border-radius: 8px; }
  .iml-refs h2 { font-size: 1rem; margin: 0 0 0.75rem; color: #374151; }
  .iml-refs ul { margin: 0; padding-left: 1.2rem; font-size: 0.82rem; color: #555; line-height: 1.9; }
  .iml-refs a { color: #6d28d9; text-decoration: none; }
  .iml-refs a:hover { text-decoration: underline; }

  .iml-section-heading { font-size: 0.85rem; color: #999; text-transform: uppercase; letter-spacing: 0.08em; margin: 2rem 0 0.5rem; }
</style>

<!-- ===== BREADCRUMB ===== -->
<div class="iml-breadcrumb">
  <a href="/iml-project-ideas/">40 Open Problems</a> &rsaquo; Medical Imaging
</div>

<!-- ===== HERO ===== -->
<div class="iml-hero">
  <div class="iml-badge">Domain &middot; Medical Imaging</div>
  <svg width="48" height="48" viewBox="0 0 28 28" fill="none" style="display:block;margin:0 auto 0.5rem;"><rect x="7" y="7" width="14" height="14" rx="2" stroke="#8b5cf6" stroke-width="1.5"/><circle cx="14" cy="14" r="4" stroke="#c4b5fd" stroke-width="1.2"/><path d="M11 11l6 6M17 11l-6 6" stroke="#ddd6fe" stroke-width="1"/></svg>
  <h1>Medical Imaging<br>Open Problems</h1>
  <p class="subtitle">Foundation models for segmentation. Domain adaptation for South Asian populations. 2 projects, beginner to intermediate.</p>
</div>

<!-- ===== CTA ===== -->
<div class="iml-cta">
  <p><strong>Interested?</strong> Email Ashish at his Ashoka address with subject <em>"IML: B7"</em> or <em>"IML: I13"</em>. Both projects have working codebases to build on &mdash; Onco-Seg for B7, Onco-Shikshak for I13.</p>
</div>

<!-- ===== DOMAIN OVERVIEW ===== -->
<h2 class="iml-section-heading">Domain Overview</h2>
<div class="iml-overview">
  <p>Medical imaging AI has undergone a step-change since 2023. The Segment Anything Model (SAM) and its medical adaptations &mdash; MedSAM, SAM-Med, SAM3 &mdash; deliver zero-shot and few-shot segmentation across CT, MRI, ultrasound, and pathology without task-specific retraining. BiomedCLIP brings contrastive language-image pretraining to the biomedical domain, enabling zero-shot classification and visual question answering over radiology reports and pathology notes. MONAI, the PyTorch-based medical imaging framework, gives students a standardized toolkit to load DICOM/NIfTI files, run augmentation pipelines, and benchmark models against community standards. As of 2026, a motivated Year 2 student with basic Python can reproduce competitive segmentation results in a single semester using these pre-trained foundations.</p>
  <p>The central unsolved challenges are not architectural &mdash; they are distributional. AI models trained on predominantly Western imaging cohorts systematically misinterpret South Asian phenotypes: concentric left ventricular remodeling in cardiac MRI, different body habitus affecting organ boundaries in abdominal CT, distinct patterns of diffuse glioma in brain MRI. Domain adaptation for Indian and South Asian populations is one of the most tractable open problems in this space. Similarly, rare pediatric tumors &mdash; GBM in children, neuroblastoma, medulloblastoma &mdash; appear so infrequently in public datasets that even strong foundation models fail on them without targeted fine-tuning.</p>
  <p>Ashish's Onco-Seg pipeline directly addresses these gaps. Onco-Seg adapts SAM3 for multi-modal tumor and organ delineation using LoRA fine-tuning across 35 public datasets (98,000+ cases spanning brain tumors, liver metastases, pancreatic tumors, head and neck cancers, and organs at risk). Student projects in this domain can either replicate a focused slice of Onco-Seg on a single modality (B7) or extend the downstream clinical reasoning layer by integrating imaging outputs into the Virtual Tumor Board simulation (I13).</p>
  <p>The practical entry point is deliberately low. B7 requires only Linear Algebra and concurrent enrollment in Intro to ML &mdash; no prior imaging experience. Standard evaluation metrics (Dice coefficient, Hausdorff distance) have clean mathematical definitions that connect directly to linear algebra and probability coursework. The gap between a working zero-shot baseline and a publication-worthy fine-tuned model on a rare tumor type is real but bridgeable within one semester.</p>
</div>

<!-- ===== COURSEWORK CONNECTION ===== -->
<div class="iml-courses">
  <h2>Ashoka Coursework Connection</h2>
  <ul>
    <li><strong>MAT 1201 Linear Algebra</strong> &rarr; B7 (image tensors, Dice/Hausdorff geometry, LoRA rank decomposition)</li>
    <li><strong>CS 3410 / MAT 3211 Intro to ML</strong> &rarr; B7 and I13 (transfer learning, neural network fine-tuning, evaluation pipelines)</li>
    <li><strong>CS 2101 Data Structures &amp; Algorithms</strong> &rarr; I13 (multi-agent system design, state management in Onco-Shikshak)</li>
    <li><strong>BIO courses in cell/molecular biology</strong> &rarr; understanding tissue types, tumor histology, and why segmentation boundaries matter clinically</li>
  </ul>
</div>

<!-- ===== PROJECTS TABLE ===== -->
<h2 class="iml-section-heading">Projects</h2>

<table class="iml-table">
<thead><tr><th>ID</th><th>Project</th><th>Tier</th><th>Key Prereqs</th><th>Description</th></tr></thead>
<tbody>
<tr>
  <td class="id id-b">B7</td>
  <td class="title-cell">Medical Image Segmentation with Pre-trained Models</td>
  <td>Beginner</td>
  <td>Linear Algebra, Intro ML (concurrent)</td>
  <td class="desc-cell">Apply MedSAM or SAM-Med to a public oncology dataset (LiTS liver CT or BraTS brain MRI). Evaluate zero-shot performance, train a U-Net baseline, then fine-tune with LoRA. Report Dice and Hausdorff distance comparisons. Directly mirrors the Onco-Seg approach on a focused modality.</td>
</tr>
<tr>
  <td class="id id-i">I13</td>
  <td class="title-cell">AI-Augmented Tumor Board Simulation Extension</td>
  <td>Intermediate</td>
  <td>Intro ML, Data Structures</td>
  <td class="desc-cell">Extend Onco-Shikshak's 6-agent tumor board simulator by adding a new cancer type (paediatric GBM or neuroblastoma) and a new specialist role (neuro-radiologist interpreting imaging findings). Create 10 new clinical cases, calibrate IRT difficulty parameters, and run a pilot evaluation with Ashoka students. Imaging components connect directly to Onco-Seg outputs.</td>
</tr>
</tbody>
</table>

<!-- ===== KEY REFERENCES ===== -->
<div class="iml-refs">
  <h2>Key References</h2>
  <ul>
    <li>Kirillov, A., et al. (2023). "Segment Anything." <em>ICCV</em>, 4015&ndash;4026. <a href="https://arxiv.org/abs/2304.02643">arxiv:2304.02643</a></li>
    <li>Ma, J., et al. (2024). "Segment Anything in Medical Images." <em>Nature Communications</em>, 15(1), 654. <a href="https://doi.org/10.1038/s41467-024-44824-z">doi:10.1038/s41467-024-44824-z</a></li>
    <li>Zhang, S., et al. (2023). "SAM-Med2D." <a href="https://arxiv.org/abs/2308.16184">arxiv:2308.16184</a> &mdash; medical 2D adaptation of SAM across 11 modalities</li>
    <li>Zhang, S., et al. (2023). "BiomedCLIP: a multimodal biomedical foundation model." <a href="https://arxiv.org/abs/2303.00915">arxiv:2303.00915</a></li>
    <li>Makani, A. (2026). "Onco-Seg: multi-modal oncology segmentation with SAM3 and LoRA." <em>Preprint</em> &mdash; Ashish's pipeline; codebase available on request</li>
    <li>MONAI Consortium. <em>MONAI: Medical Open Network for AI.</em> <a href="https://monai.io/">monai.io</a> &mdash; PyTorch framework for reproducible medical image analysis</li>
    <li>Antonelli, M., et al. (2022). "The Medical Segmentation Decathlon." <em>Nature Communications</em>, 13(1), 4128 &mdash; standard benchmark datasets including LiTS and BraTS</li>
  </ul>
</div>

<!-- ===== BOTTOM CTA ===== -->
<div style="text-align: center; margin: 2rem 0 1rem; padding: 1.5rem; background: linear-gradient(135deg, #1e1b4b, #312e81); border-radius: 10px; color: white;">
  <p style="margin: 0 0 0.5rem; font-size: 1.05rem; font-weight: 600;">Ready to work on medical imaging?</p>
  <p style="margin: 0 0 1rem; font-size: 0.85rem; color: #c7d2fe; line-height: 1.5;">Start with B7 if you are in Year 2. Move to I13 after Intro to ML.<br>Both projects have existing codebases &mdash; no blank-slate setup required.</p>
  <a href="/iml-project-ideas/" style="display:inline-block; padding: 0.5rem 1.2rem; background: white; color: #1e1b4b; font-weight: 700; font-size: 0.82rem; border-radius: 6px; text-decoration: none;">&larr; All 40 Projects</a>
</div>

<p style="text-align: center; font-size: 0.7rem; color: #ccc; margin-top: 1rem;">Last updated March 2026. Full project specs available on request.</p>

  </div>
</main>
