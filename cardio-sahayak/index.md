---
permalink: /cardio-sahayak/
title: "Cardio-Sahayak India"
layout: default
---

<style>
  .ps-landing {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  .ps-hero {
    text-align: center;
    padding: 4rem 1rem;
    background: linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%);
    border-radius: 16px;
    margin-bottom: 3rem;
  }

  .ps-hero h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    color: #be123c;
  }

  .ps-hero .tagline {
    font-size: 1.25rem;
    color: #4c0519;
    max-width: 600px;
    margin: 0 auto 2rem;
    line-height: 1.7;
  }

  .ps-hero .badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #e11d48;
    color: white;
    border-radius: 50px;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .ps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .ps-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid #f1f5f9;
  }

  .ps-card h3 {
    color: #be123c;
    margin-top: 0;
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .ps-card p {
    color: #4b5563;
    line-height: 1.6;
    margin: 0;
  }

  .ps-section {
    margin-bottom: 4rem;
  }

  .ps-section h2 {
    color: #1a1a1a;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
</style>

<div class="ps-landing">

  <!-- Hero Section -->
  <section class="ps-hero">
    <div class="badge">Open Source Project</div>
    <h1>Cardio-Sahayak India 🇮🇳 🫀</h1>
    <div style="font-size: 1.5rem; color: #9f1239; margin-bottom: 1.5rem;">A Specialized Multimodal LLM for Complex Cardiology Care</div>
    <p class="tagline">
      Optimized for the South Asian demographic, addressing unique genetic predispositions, clinical profiles, and socio-economic contexts to democratize advanced cardiac care.
    </p>
    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
      <a href="https://github.com/inventcures/cardio-sahayak" target="_blank" rel="noopener" style="padding: 0.75rem 1.5rem; background: #be123c; color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">View Repository</a>
      <a href="/cardio-sahayak/v0_cardio-sahayak_preprint.pdf" target="_blank" rel="noopener" style="padding: 0.75rem 1.5rem; background: white; color: #be123c; border: 1px solid #be123c; text-decoration: none; border-radius: 8px; font-weight: 600;">Read Preprint</a>
    </div>
  </section>

  <!-- Problem & Solution -->
  <section class="ps-section">
    <h2>The South Asian Cardiac Challenge</h2>
    <p style="text-align: center; color: #4b5563; max-width: 800px; margin: 0 auto 2rem; line-height: 1.7;">
      Myocardial Infarction (MI) in India occurs 5-10 years earlier than in Western populations. Despite standard BMIs, central obesity, genetic predispositions (like the MYBPC3 Δ25bp variant), and unique metabolic profiles present a distinct "South Asian Phenotype" often overlooked by generalized medical AI models.
    </p>
    <div class="ps-grid">
      <div class="ps-card">
        <h3>🧬 Population-Specific Needs</h3>
        <p>Current models fail to account for lower BMI thresholds for MI, elevated Lp(a) levels, and specific variants prevalent in up to 4% of the Indian population.</p>
      </div>
      <div class="ps-card">
        <h3>Dual-Architecture AI</h3>
        <p>Combining <strong>MedGemma-27B</strong> for deep clinical reasoning and a <strong>Vision-Language Model (MedSigLIP)</strong> for native 12-lead ECG interpretation.</p>
      </div>
      <div class="ps-card">
        <h3>📊 Rigorous Clinical Guidelines</h3>
        <p>Fine-tuned directly on the Indian National Consensus on Cardiology and ICMR guidelines for precise, actionable diagnostic support.</p>
      </div>
    </div>
  </section>

  <!-- Architecture -->
  <section class="ps-section" style="background: #f8fafc; padding: 3rem 2rem; border-radius: 16px;">
    <h2>Technical Architecture</h2>
    <div style="color: #4b5563; line-height: 1.7; max-width: 800px; margin: 0 auto;">
      <p>Cardio-Sahayak implements a state-of-the-art dual-architecture design:</p>
      <ul style="margin-top: 1rem; padding-left: 1.5rem;">
        <li><strong>Text & Reasoning Backbone:</strong> <code>google/medgemma-27b-it</code>, quantized using 4-bit NormalFloat (NF4) via bitsandbytes and fine-tuned using QLoRA.</li>
        <li><strong>Multimodal ECG Processing:</strong> <code>google/medsiglip-448</code> integrated via the MEIT framework, allowing raw 12-lead ECG ingestion and cross-modal diagnostic reasoning.</li>
        <li><strong>Data Pipeline:</strong> Trained on a synthetically generated but rigorously validated dataset integrating PTB-XL records, ECGInstruct sets, and South-Asian clinical case histories.</li>
      </ul>
    </div>
  </section>

  <!-- Impact Section -->
  <section class="ps-section" id="impact">
    <h2>Democratizing Expert Care</h2>
    <p style="text-align: center; color: #4b5563; max-width: 800px; margin: 0 auto 2rem; line-height: 1.7;">
      By converting the fine-tuned model to GGUF format, Cardio-Sahayak India is designed to be deployed locally on resource-constrained hardware in rural Indian clinics. It acts as an expert clinical assistant (Sahayak), assisting physicians in early screening, accurate ECG interpretation, and personalized risk assessment.
    </p>
    <div style="text-align: center;">
      <a href="https://github.com/inventcures/cardio-sahayak" target="_blank" rel="noopener" style="color: inherit; text-decoration: none;">
        <div style="display: inline-block; padding: 1rem 2rem; background: #f1f5f9; border-radius: 8px; color: #334155; font-weight: 600;">
          Explore the Codebase on GitHub →
        </div>
      </a>
    </div>
  </section>

  <!-- Open Source -->
  <section class="ps-section">
    <div class="ps-grid" style="grid-template-columns: repeat(2, 1fr); margin-bottom: 0;">
      <div class="ps-card" style="background: #be123c; color: white;">
        <h3 style="color: white;">🔓 Open Source</h3>
        <p style="color: #ffe4e6;">Released to the community to foster collaboration, rigorous evaluation, and advancements in global health equity.</p>
      </div>
      <div class="ps-card">
        <h3>🌍 Targeted Impact</h3>
        <p>A specialized solution for the 1.4 billion people of India, directly addressing the region's rapidly growing burden of cardiovascular disease.</p>
      </div>
    </div>
  </section>

</div>