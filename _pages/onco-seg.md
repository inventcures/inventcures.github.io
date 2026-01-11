---
permalink: /onco-seg/
title: "Onco-Seg"
layout: default
---

<style>
.onco-seg-hero {
  background: linear-gradient(135deg, #0a0a12 0%, #1a1a2e 50%, #0f0f1a 100%);
  padding: 3rem 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  text-align: center;
}

.onco-seg-hero h1 {
  font-size: 2.8rem;
  color: #fff;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.onco-seg-hero .subtitle {
  font-size: 1.2rem;
  color: #28c840;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.onco-seg-hero .tagline {
  font-size: 1rem;
  color: #888;
  margin-bottom: 2rem;
}

.demo-container {
  background: #0c0c14;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem auto;
  max-width: 550px;
}

.demo-gif {
  width: 100%;
  border-radius: 8px;
  display: block;
}

.demo-caption {
  text-align: center;
  color: #aaa;
  font-size: 0.9rem;
  margin-top: 1rem;
  line-height: 1.5;
}

.section-title {
  font-size: 1.6rem;
  color: #333;
  margin: 2.5rem 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #28c840;
  display: inline-block;
}

.explainer-box {
  background: #f8faf8;
  border-left: 4px solid #28c840;
  padding: 1.25rem 1.5rem;
  margin: 1.5rem 0;
  border-radius: 0 8px 8px 0;
}

.explainer-box h3 {
  color: #1a1a2e;
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}

.explainer-box p {
  color: #444;
  margin: 0;
  line-height: 1.6;
}

.metrics-container {
  margin: 2rem 0;
  text-align: center;
}

.metrics-image {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

.highlight-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.stat-card {
  background: linear-gradient(135deg, #f8faf8 0%, #fff 100%);
  border: 1px solid #e0e8e0;
  border-radius: 10px;
  padding: 1.25rem;
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #28c840;
}

.stat-label {
  font-size: 0.85rem;
  color: #666;
  margin-top: 0.25rem;
}

.modality-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
}

.modality-tag {
  background: #1a1a2e;
  color: #28c840;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
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
  background: #28c840;
  color: #fff;
}

.cta-secondary {
  background: #1a1a2e;
  color: #fff;
}

.cta-outline {
  background: transparent;
  border: 2px solid #1a1a2e;
  color: #1a1a2e;
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
  color: #1a1a2e;
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

.clinical-note {
  background: #fffbeb;
  border: 1px solid #fcd34d;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  margin: 1.5rem 0;
}

.clinical-note strong {
  color: #92400e;
}

@media (max-width: 600px) {
  .onco-seg-hero h1 {
    font-size: 2rem;
  }
  .highlight-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

<main class="main-content">
<div class="container-narrow">

<div class="onco-seg-hero">
  <h1>Onco-Seg</h1>
  <p class="subtitle">Adapting SAM3 for Medical Image Segmentation</p>
  <p class="tagline">Multi-modal AI for tumor & organ delineation across CT, MRI, Ultrasound, and more</p>

  <div class="cta-buttons">
    <a href="https://huggingface.co/tp53/medsam3_latest" class="cta-button cta-primary" target="_blank">
      🤗 Model on HuggingFace
    </a>
    <a href="https://github.com/inventcures/onco-segment" class="cta-button cta-secondary" target="_blank">
      GitHub Repo
    </a>
    <a href="/files/medsam3_paper.pdf" class="cta-button cta-outline">
      📄 Read Paper
    </a>
  </div>
</div>

<div class="demo-container">
  <img src="/images/medsam3/segmentation_demo.gif" alt="Onco-Seg liver segmentation demo" class="demo-gif">
</div>

<div class="explainer-box">
  <h3>🔬 What you're seeing</h3>
  <p>This animation shows a CT scan of a patient's abdomen. The AI automatically identifies and highlights the <strong>liver</strong> (shown in green). This task—which typically takes radiologists several minutes per scan—is completed by Onco-Seg in under a second. Accurate organ segmentation is critical for radiation therapy planning, surgical navigation, and treatment monitoring.</p>
</div>

<h2 class="section-title">Why Onco-Seg?</h2>

<p>Manual tumor and organ contouring remains a major bottleneck in cancer care. Radiation oncologists spend <strong>2-4 hours per patient</strong> drawing boundaries around 30+ organs-at-risk. Radiologists manually measure tumors for treatment response. This process is time-consuming, variable between experts, and difficult to scale.</p>

<p>Onco-Seg adapts <strong>Meta's SAM3</strong> (Segment Anything Model 3)—trained on billions of natural images—for medical imaging. Using parameter-efficient fine-tuning (LoRA), we transfer SAM3's visual understanding to medical scans while training on just a fraction of the parameters.</p>

<div class="highlight-stats">
  <div class="stat-card">
    <div class="stat-number">35</div>
    <div class="stat-label">Training Datasets</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">98K+</div>
    <div class="stat-label">Training Cases</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">12</div>
    <div class="stat-label">Eval Benchmarks</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">8</div>
    <div class="stat-label">Imaging Modalities</div>
  </div>
</div>

<h2 class="section-title">Supported Modalities</h2>

<div class="modality-tags">
  <span class="modality-tag">🫁 CT Scan</span>
  <span class="modality-tag">🧠 MRI</span>
  <span class="modality-tag">📷 Ultrasound</span>
  <span class="modality-tag">🔬 Dermoscopy</span>
  <span class="modality-tag">🎥 Endoscopy</span>
  <span class="modality-tag">☢️ PET-CT</span>
  <span class="modality-tag">🩻 X-Ray</span>
  <span class="modality-tag">🔬 Histology (SRH)</span>
</div>

<h2 class="section-title">Evaluation Results</h2>

<p>Onco-Seg was evaluated on 12 public benchmark datasets spanning 6 anatomical regions. Results show strong performance on breast ultrasound, polyp detection, and liver CT, with room for improvement on challenging targets like lung nodules and pancreatic tumors.</p>

<div class="metrics-container">
  <img src="/images/medsam3/metrics_table.png" alt="Onco-Seg evaluation results across 12 datasets" class="metrics-image">
</div>

<div class="clinical-note">
  <strong>📊 Clinical Interpretation:</strong> Dice scores above 0.65 (green) indicate strong overlap with expert annotations—suitable for clinical decision support. Scores 0.40-0.65 (yellow) may benefit from human review. Lower scores reflect inherently difficult targets (small nodules, low-contrast tumors) where even expert agreement is limited.
</div>

<h2 class="section-title">Key Features</h2>

<div class="feature-grid">
  <div class="feature-card">
    <h4><span class="emoji-icon">🎯</span> One Model, Many Tasks</h4>
    <p>A single unified model handles CT, MRI, ultrasound, dermoscopy, and endoscopy—no need for separate specialized networks for each modality.</p>
  </div>

  <div class="feature-card">
    <h4><span class="emoji-icon">⚡</span> Fast Inference</h4>
    <p>Sub-second segmentation on a single GPU enables real-time clinical use, from interactive radiology assistants to automated contouring pipelines.</p>
  </div>

  <div class="feature-card">
    <h4><span class="emoji-icon">🔧</span> Parameter Efficient</h4>
    <p>LoRA fine-tuning updates &lt;5% of SAM3's 848M parameters, preserving pretrained knowledge while adapting to medical imaging.</p>
  </div>

  <div class="feature-card">
    <h4><span class="emoji-icon">🏥</span> Clinical Deployment Ready</h4>
    <p>Two deployment patterns: interactive "sidecar" for diagnostic radiology (OHIF/PACS integration) and "silent assistant" for automated radiation oncology contouring.</p>
  </div>
</div>

<h2 class="section-title">Clinical Use Cases</h2>

<div class="feature-grid">
  <div class="feature-card">
    <h4><span class="emoji-icon">📍</span> Diagnostic Radiology</h4>
    <p><strong>Interactive Sidecar:</strong> Radiologist clicks on a lesion → instant segmentation with auto-computed volume and diameter for structured reporting.</p>
  </div>

  <div class="feature-card">
    <h4><span class="emoji-icon">☢️</span> Radiation Oncology</h4>
    <p><strong>Silent Assistant:</strong> CT scan triggers automatic segmentation of 30+ organs-at-risk → DICOM-RT Structure Set → ready for treatment planning. 80-90% time savings.</p>
  </div>
</div>

<h2 class="section-title">Technical Details</h2>

<p><strong>Architecture:</strong> SAM3 (848M parameters) with LoRA adapters (rank=16, alpha=32) on attention layers</p>

<p><strong>Training:</strong> Sequential checkpoint chaining across 8 phases, starting from Medical Segmentation Decathlon (MSD) and expanding to BraTS brain tumors, breast imaging, chest X-rays, and specialized oncology datasets</p>

<p><strong>Loss:</strong> Combined Dice + Focal loss with modality-specific weighting for class imbalance</p>

<p><strong>Infrastructure:</strong> 4× NVIDIA RTX 4090 GPUs, PyTorch Lightning, Weights & Biases tracking</p>

<h2 class="section-title">Get Started</h2>

<div class="cta-buttons" style="justify-content: flex-start;">
  <a href="https://huggingface.co/tp53/medsam3_latest" class="cta-button cta-primary" target="_blank">
    🤗 Download Model
  </a>
  <a href="https://github.com/inventcures/onco-segment" class="cta-button cta-secondary" target="_blank">
    📦 View Code
  </a>
  <a href="https://huggingface.co/spaces/tp53/medsam3-eval" class="cta-button cta-outline" target="_blank">
    🚀 Try Demo
  </a>
</div>

<h2 class="section-title">Citation</h2>

```bibtex
@article{makani2026oncoseg,
  title={Onco-Seg: Adapting Promptable Concept Segmentation for Multi-Modal Medical Imaging},
  author={Makani, Ashish and Agrawal, Anjali and Agrawal, Anurag},
  journal={arXiv preprint},
  year={2026}
}
```

<h2 class="section-title">Acknowledgments</h2>

<p>This work was supported by the <strong>Koita Centre for Digital Health at Ashoka University (KCDH-A)</strong>. We thank RunPod for GPU infrastructure, Weights & Biases for experiment tracking, Meta AI for releasing SAM3, and the creators of benchmark datasets (Medical Segmentation Decathlon, BraTS, LiTS, ISIC, Kvasir-SEG, PROMISE12, BUSI, and others).</p>

<hr style="margin: 2rem 0; border: none; border-top: 1px solid #ddd;">

<p style="color: #888; font-size: 0.9rem;">
<strong>Contact:</strong> Ashish Makani — ashish.makani@ashoka.edu.in<br>
<strong>Last updated:</strong> January 2026
</p>

</div>
</main>
