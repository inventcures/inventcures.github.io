---
permalink: /projects/
title: "Projects"
layout: default
---

<main class="main-content">
  <div class="container-narrow">

<h1>Projects</h1>
<p>A collection of my work at the intersection of machine learning and medicine/biology. My projects span two broad themes: <strong>ML + Medicine</strong> (clinical AI, healthcare tools) and <strong>ML + Biology/Biotech</strong> (drug discovery, protein design).</p>

<p>I work at KCDH-A under the mentorship of <a href="https://en.wikipedia.org/wiki/Anurag_Agrawal_(medical_scientist)">Dr. Anurag Agrawal</a> on research projects spanning palliative care, cancer & medical voice agents, all with a north star objective of improving patient outcomes.</p>

<div style="margin: 1.5rem 0 2rem 0; padding: 1rem 1.25rem; background: #f8f9fa; border-left: 3px solid #22c55e; border-radius: 4px;">
  <p style="margin: 0 0 0.75rem 0;"><strong>Looking for research interns!</strong> I am looking for enthusiastic students (both undergrads & grad students) to work with me on any of my research interests.</p>
  <p style="margin: 0; color: #555;">If you are interested, write to me at my Ashoka email with the subject line <em>"Research Intern interest"</em>, including a short paragraph about your background and which of these areas you would like to do research on.</p>
</div>

<!-- Toggle Navigation -->
<div style="display: flex; gap: 0; margin: 2rem 0 2.5rem 0; border-radius: 8px; overflow: hidden; border: 2px solid #e5e7eb;">
  <button onclick="showSection('medicine')" id="btn-medicine" style="flex: 1; padding: 1rem 1.5rem; border: none; background: #818cf8; color: white; font-weight: 600; font-size: 1rem; cursor: pointer; transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
    </svg>
    ML + Medicine
  </button>
  <button onclick="showSection('biotech')" id="btn-biotech" style="flex: 1; padding: 1rem 1.5rem; border: none; background: #f3f4f6; color: #1D3557; font-weight: 600; font-size: 1rem; cursor: pointer; transition: all 0.2s ease; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 20px; height: 20px;">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
    </svg>
    ML + Biology/Biotech
  </button>
</div>



<!-- ==================== ML + MEDICINE ==================== -->
<div id="section-medicine">
<h2 style="margin-top: 1rem; padding-bottom: 0.5rem; border-bottom: 3px solid #818cf8; color: #1e1b4b;">ML + Medicine</h2>
<p style="color: #666; margin-bottom: 2rem;">Clinical AI, healthcare tools, and medical decision support systems.</p>

<!-- Virtual Tumor Board - Featured -->
<section class="featured-section">
  <a href="/ai-powered-virtual-mtb/" style="display: block; background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%); border: 2px solid #818cf8; border-radius: 12px; overflow: hidden; text-decoration: none; position: relative; margin-bottom: 2rem;">
    <div style="position: absolute; top: -8px; right: 20px; background: linear-gradient(135deg, #f59e0b, #ef4444); color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.3rem 0.6rem; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);">Featured</div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0;">
      <div style="padding: 1.5rem 2rem;">
        <div style="display: inline-block; background: #818cf8; color: #1e1b4b; font-size: 0.65rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 4px; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">AI + Healthcare</div>
        <h3 style="color: #fff; font-size: 1.5rem; margin: 0 0 0.4rem 0; font-weight: 700;">Virtual Tumor Board</h3>
        <p style="color: #c7d2fe; font-size: 0.9rem; margin: 0 0 0.75rem 0; font-weight: 500;">7 AI Specialists. 256 Guidelines. One Consensus.</p>
        <p style="color: #a5b4fc; font-size: 0.85rem; line-height: 1.5; margin: 0 0 1rem 0;">Multi-agent AI that simulates a real tumor board meeting. Surgical, medical, radiation oncology, palliative care, radiology, pathology, and genetics specialists deliberate on cancer cases—grounded in NCCN, ESMO, ASTRO guidelines with Indian healthcare context.</p>
        <span style="color: #c7d2fe; font-weight: 600; font-size: 0.9rem;">Try Live Demo →</span>
      </div>
      <div style="background: #0f0a1e; display: flex; align-items: center; justify-content: center; padding: 1rem;">
        <video autoplay loop muted playsinline style="max-width: 100%; max-height: 220px; border-radius: 8px; box-shadow: 0 10px 40px rgba(0,0,0,0.5);">
          <source src="/files/virtual-mtb/vtb-demo.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  </a>
</section>

<!-- Onco-Shikshak - NEW -->
<section class="featured-section">
  <a href="/onco-shikshak/" style="display: block; background: linear-gradient(135deg, #020617 0%, #1e1b4b 100%); border: 2px solid #818cf8; border-radius: 12px; overflow: hidden; text-decoration: none; position: relative; margin-bottom: 2rem;">
    <div style="position: absolute; top: -8px; right: 20px; background: linear-gradient(135deg, #6366f1, #ec4899); color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.3rem 0.6rem; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);">New</div>
    <div style="padding: 1.5rem 2rem;">
      <div style="display: inline-block; background: #6366f1; color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 4px; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">AI + Medical Education</div>
      <h3 style="color: #fff; font-size: 1.5rem; margin: 0 0 0.4rem 0; font-weight: 700;">Onco-Shikshak</h3>
      <p style="color: #a5b4fc; font-size: 0.9rem; margin: 0 0 0.75rem 0; font-weight: 500;">AI-Augmented Adaptive Oncology Education</p>
      <p style="color: #ddd; font-size: 0.85rem; line-height: 1.5; margin: 0 0 1rem 0;">Three integrated learning modules&mdash;dynamic textbook generation, Socratic virtual preceptor, and spaced repetition&mdash;all grounded in 7 clinical guideline sources (NCCN, ESMO, ASTRO, ACR, CAP, ClinVar/CIViC, SSO) via retrieval-augmented generation. Pedagogical design mapped to 6 learning science frameworks.</p>
      <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem;">
        <span style="background: rgba(99,102,241,0.15); color: #818cf8; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.75rem;">7-Source RAG</span>
        <span style="background: rgba(99,102,241,0.15); color: #818cf8; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.75rem;">Socratic AI</span>
        <span style="background: rgba(99,102,241,0.15); color: #818cf8; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.75rem;">SM-2 Spaced Rep</span>
        <span style="background: rgba(99,102,241,0.15); color: #818cf8; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.75rem;">Preprint</span>
      </div>
      <span style="color: #a5b4fc; font-weight: 600; font-size: 0.9rem;">Read Preprint & View Project &rarr;</span>
    </div>
  </a>
</section>

<!-- Onco-Seg -->
<section class="featured-section">
  <a href="/onco-seg/" class="project-card" style="background: linear-gradient(135deg, #0a0a12 0%, #1a1a2e 100%); border: 2px solid #28c840; padding: 0; overflow: hidden; display: block; margin-bottom: 2rem;">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0;">
      <div style="padding: 2rem;">
        <div style="display: inline-block; background: #28c840; color: #000; font-size: 0.7rem; font-weight: 700; padding: 0.25rem 0.6rem; border-radius: 4px; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em;">Medical Imaging</div>
        <h3 style="color: #fff; font-size: 1.8rem; margin: 0 0 0.5rem 0; font-weight: 700;">Onco-Seg</h3>
        <p style="color: #28c840; font-size: 1rem; margin: 0 0 1rem 0; font-weight: 500;">Adapting SAM3 for Medical Image Segmentation</p>
        <p style="color: #aaa; font-size: 0.9rem; line-height: 1.6; margin: 0 0 1.5rem 0;">Multi-modal AI for tumor & organ delineation. One unified model handles CT, MRI, ultrasound, dermoscopy, endoscopy, PET-CT, X-ray, and histopathology. Trained on 35 datasets, 98K+ cases.</p>
        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="background: rgba(40,200,64,0.15); color: #28c840; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.75rem;">LoRA Fine-tuning</span>
          <span style="background: rgba(40,200,64,0.15); color: #28c840; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.75rem;">8 Modalities</span>
          <span style="background: rgba(40,200,64,0.15); color: #28c840; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.75rem;">12 Benchmarks</span>
        </div>
        <span style="color: #28c840; font-weight: 600; display: inline-flex; align-items: center; gap: 0.5rem;">
          View Project
          <svg viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </span>
      </div>
      <div style="background: #0c0c14; display: flex; align-items: center; justify-content: center; padding: 1rem;">
        <img src="/images/medsam3/segmentation_demo.gif" alt="Onco-Seg liver segmentation demo" style="max-width: 100%; max-height: 280px; border-radius: 8px;">
      </div>
    </div>
  </a>
</section>

<!-- Patient Education & Clinical Tools Grid -->
<section class="featured-section">
  <h3 class="section-title">Patient Education & Clinical Tools</h3>
  <div class="project-grid">
    <div class="project-card" style="background: white;">
      <div class="project-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7v4m-2-2h4"/>
        </svg>
      </div>
      <h3 class="project-title">Understand Your Cancer Records</h3>
      <p class="project-description">AI-powered tool that transforms any cancer medical record—imaging reports, biopsy results, oncology prescriptions, genetic testing, histopathology reports—into accessible, multilingual patient education materials in five Indian languages at multiple literacy levels.</p>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 0.5rem;">
        <a href="https://understand-your-cancer-medical-records-in-layman-ese.vercel.app/" target="_blank" rel="noopener" class="project-link">
          Live app
          <svg viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
        <a href="https://github.com/inventcures/indic-layman-radonc" target="_blank" rel="noopener" class="project-link">
          GitHub
          <svg viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
        <a href="https://deepwiki.com/inventcures/indic-layman-radonc" target="_blank" rel="noopener" class="project-link">
          DeepWiki
          <svg viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="project-card" style="background: white;">
      <div class="project-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
        </svg>
      </div>
      <h3 class="project-title">Learn Something Wonderful About Rare Diseases</h3>
      <p class="project-description">Inspired by <a href="https://readsomethingwonderful.com" target="_blank" rel="noopener">readsomethingwonderful.com</a> and built with matter.js—a curated collection of rare disease readings in an interactive, physics-based interface.</p>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 0.5rem;">
        <a href="https://learn-something-wonderful-about-rare-diseases.vercel.app/" target="_blank" rel="noopener" class="project-link">
          Live app
          <svg viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
        <a href="https://github.com/inventcures/learn-something-wonderful-rare-disease" target="_blank" rel="noopener" class="project-link">
          GitHub
          <svg viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Clinical Trials & Regulatory Analysis -->
<section class="featured-section">
  <h3 class="section-title">Clinical Trials & Regulatory Analysis</h3>
  <div class="project-grid">
    <div class="project-card" style="background: white;">
      <div class="project-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      </div>
      <h3 class="project-title">FDA Complete Response Letter Analysis</h3>
      <p class="project-description">ML platform analyzing 297 FDA rejection letters. Predicts approval outcomes with 72% accuracy and uncovers patterns in drug deficiencies.</p>
      <div style="display: flex; gap: 1.5rem; margin-top: 0.5rem;">
        <a href="https://fda-crl-analysis.vercel.app/" target="_blank" rel="noopener" class="project-link">
          Live app
          <svg viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
        <a href="https://deepwiki.com/inventcures/fda_crl_analysis" target="_blank" rel="noopener" class="project-link">
          DeepWiki
          <svg viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>

    <a href="/aacr2025/" class="project-card">
      <div class="project-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      </div>
      <h3 class="project-title">AACR 2025 Clinical Trials Dashboard</h3>
      <p class="project-description">Interactive visualization of clinical trial data from AACR 2025. Explore trial phases, therapeutic targets, and outcomes.</p>
      <span class="project-link">
        Explore dashboard
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
        </svg>
      </span>
    </a>

    <a href="/asco2025.html" class="project-card">
      <div class="project-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
        </svg>
      </div>
      <h3 class="project-title">ASCO 2025 Data Visualization</h3>
      <p class="project-description">Comprehensive analysis and visualization of oncology research presented at ASCO 2025 annual meeting.</p>
      <span class="project-link">
        View analysis
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
        </svg>
      </span>
    </a>
  </div>
</section>

<!-- Grants -->
<section class="featured-section">
  <h3 class="section-title">Grants</h3>
  <div class="project-grid">
    <div class="project-card">
      <div class="project-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      </div>
      <h3 class="project-title">Grand Challenges India (Awarded November 2024)</h3>
      <p class="project-description">Building palliative care decision support for caregivers using LLMs, RAG & a dataset of Indian palliative care case scenarios with clinical partners (Max Healthcare & Pallium India).</p>
      <div style="margin-top: 0.75rem; font-size: 0.85rem; display: grid; grid-template-columns: auto 1fr; gap: 0.25rem 0.5rem;">
        <strong>PI</strong><span>: <a href="https://en.wikipedia.org/wiki/Anurag_Agrawal_(medical_scientist)">Dr. Anurag Agrawal</a></span>
        <strong>Co-investigator</strong><span>: Ashish Makani</span>
      </div>
      <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid #e5e7eb;">
        <p style="font-size: 0.75rem; color: #888; margin: 0 0 0.5rem 0; text-transform: uppercase; letter-spacing: 0.05em;">Supported by</p>
        <div style="display: flex; align-items: center; gap: 1.5rem;">
          <a href="https://www.gatesfoundation.org/" target="_blank" rel="noopener">
            <img src="/images/gates-foundation-logo.png" alt="Gates Foundation" style="height: 40px; width: auto;">
          </a>
          <a href="https://birac.nic.in/" target="_blank" rel="noopener">
            <img src="/images/birac-dbt-logo.png" alt="BIRAC / DBT" style="height: 50px; width: auto;">
          </a>
        </div>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 0.75rem;">
        <a href="https://gcgh.grandchallenges.org/grant/clinical-decision-support-tool-comprising-extractive-and-conversational-generative-large" target="_blank" rel="noopener" class="project-link">
          View grant
          <svg viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
        <a href="https://github.com/inventcures/rag_gci/" target="_blank" rel="noopener" class="project-link">
          GitHub
          <svg viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
        <a href="https://deepwiki.com/inventcures/rag_gci" target="_blank" rel="noopener" class="project-link">
          DeepWiki
          <svg viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>


</div><!-- end section-medicine -->

<!-- ==================== ML + BIOLOGY/BIOTECH ==================== -->
<div id="section-biotech" style="display: none;">
<h2 style="margin-top: 1rem; padding-bottom: 0.5rem; border-bottom: 3px solid #E63946; color: #1D3557;">ML + Biology/Biotech</h2>
<p style="color: #666; margin-bottom: 2rem;">Computational protein design, antibody engineering, and drug discovery tools.</p>

<!-- Onco-TTT - Featured -->
<section class="featured-section">
  <a href="/onco-hypothesis/" style="display: block; background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%); border: 2px solid #3b82f6; border-radius: 12px; overflow: hidden; text-decoration: none; position: relative; margin-bottom: 2rem;">
    <div style="position: absolute; top: -8px; right: 20px; background: linear-gradient(135deg, #3b82f6, #7c3aed); color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.3rem 0.6rem; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);">New</div>
    <div style="padding: 1.5rem 2rem;">
      <div style="display: inline-block; background: #3b82f6; color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 4px; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">AI + Oncology</div>
      <h3 style="color: #fff; font-size: 1.5rem; margin: 0 0 0.4rem 0; font-weight: 700;">Onco-TTT</h3>
      <p style="color: #93c5fd; font-size: 0.9rem; margin: 0 0 0.75rem 0; font-weight: 500;">AI-Powered Cancer Hypothesis Generation</p>
      <p style="color: #ddd; font-size: 0.85rem; line-height: 1.5; margin: 0 0 1rem 0;">Type a plain-English oncology question, get: zero-shot NER (GLiNER2) &rarr; knowledge graph &rarr; literature &rarr; 6-dimensional validation (DepMap, cBioPortal, GTEx, ClinicalTrials.gov). 13 interactive views.</p>
      <span style="color: #93c5fd; font-weight: 600; font-size: 0.9rem;">View Project →</span>
    </div>
  </a>
</section>

<!-- rfab-harness - Featured -->
<section class="featured-section">
  <a href="/harness_for_rfantibody/" style="display: block; background: linear-gradient(135deg, #0d1b2a 0%, #1b2838 100%); border: 2px solid #00b4d8; border-radius: 12px; overflow: hidden; text-decoration: none; position: relative; margin-bottom: 2rem;">
    <div style="position: absolute; top: -8px; right: 20px; background: linear-gradient(135deg, #00b4d8, #0077b6); color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.3rem 0.6rem; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 4px 12px rgba(0, 180, 216, 0.4);">New</div>
    <div style="padding: 1.5rem 2rem;">
      <div style="display: inline-block; background: #00b4d8; color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 4px; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">Open Source Tool</div>
      <h3 style="color: #fff; font-size: 1.5rem; margin: 0 0 0.4rem 0; font-weight: 700;">rfab-harness</h3>
      <p style="color: #90e0ef; font-size: 0.9rem; margin: 0 0 0.75rem 0; font-weight: 500;">Campaign Orchestration for RFAntibody</p>
      <p style="color: #ddd; font-size: 0.85rem; line-height: 1.5; margin: 0 0 1rem 0;">One YAML config, one CLI command, full antibody design campaign. Wraps the 3-stage RFAntibody pipeline (RFdiffusion &rarr; ProteinMPNN &rarr; RF2) with target prep, multi-GPU parallelization, automated filtering, and 21 pre-built configs for cancer &amp; rare disease targets.</p>
      <span style="color: #90e0ef; font-weight: 600; font-size: 0.9rem;">View Project →</span>
    </div>
  </a>
</section>

<!-- DADB Benchmark - Featured -->
<section class="featured-section">
  <a href="/proposal_for_devovo_ab-design_benchmark/" style="display: block; background: linear-gradient(135deg, #1D3557 0%, #457B9D 100%); border: 2px solid #E63946; border-radius: 12px; overflow: hidden; text-decoration: none; position: relative; margin-bottom: 2rem;">
    <div style="position: absolute; top: -8px; right: 20px; background: linear-gradient(135deg, #E63946, #ff6b6b); color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.3rem 0.6rem; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 4px 12px rgba(230, 57, 70, 0.4);">New</div>
    <div style="padding: 1.5rem 2rem;">
      <div style="display: inline-block; background: #E63946; color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 4px; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">Benchmark</div>
      <h3 style="color: #fff; font-size: 1.5rem; margin: 0 0 0.4rem 0; font-weight: 700;">DADB-v1.0 Benchmark</h3>
      <p style="color: #E9C46A; font-size: 0.9rem; margin: 0 0 0.75rem 0; font-weight: 500;">A Therapeutic Decathlon for De Novo Antibody Design</p>
      <p style="color: #ddd; font-size: 0.85rem; line-height: 1.5; margin: 0 0 1rem 0;">The first comprehensive benchmark measuring what actually matters: binding, structure, developability, and immunogenicity. Featuring 5 AI platforms with first-ever human immunogenicity data.</p>
      <span style="color: #E9C46A; font-weight: 600; font-size: 0.9rem;">Read Proposal →</span>
    </div>
  </a>
</section>

<!-- Antibody Research Cards -->
<section class="featured-section">
  <h3 class="section-title">Antibody Design Research</h3>
  
  <a href="/flab_dataset_analyses/" style="display: block; background: linear-gradient(135deg, #1a5276 0%, #2874a6 100%); border: 2px solid #27AE60; border-radius: 12px; overflow: hidden; text-decoration: none; position: relative; margin-bottom: 1.5rem;">
    <div style="position: absolute; top: -8px; right: 20px; background: linear-gradient(135deg, #27AE60, #2ecc71); color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.3rem 0.6rem; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 4px 12px rgba(39, 174, 96, 0.4);">New</div>
    <div style="padding: 1.5rem 2rem;">
      <div style="display: inline-block; background: #27AE60; color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 4px; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">Research</div>
      <h3 style="color: #fff; font-size: 1.5rem; margin: 0 0 0.4rem 0; font-weight: 700;">Does Developability Come For Free?</h3>
      <p style="color: #82e0aa; font-size: 0.9rem; margin: 0 0 0.75rem 0; font-weight: 500;">FLAb Dataset Analysis: Testing Emergent Developability in De Novo Antibody Design</p>
      <p style="color: #ddd; font-size: 0.85rem; line-height: 1.5; margin: 0 0 1rem 0;">Analysis of 160 FLAb datasets revealing how training data bias explains "free" developability. ESM-2 benchmarks, immunogenicity prediction (0.74 AUROC), and why humanness alone fails.</p>
      <span style="color: #82e0aa; font-weight: 600; font-size: 0.9rem;">View Analysis →</span>
    </div>
  </a>

  <a href="/abs_for_cancer_targets/" style="display: block; background: linear-gradient(135deg, #1D3557 0%, #457B9D 100%); border: 2px solid #E63946; border-radius: 12px; overflow: hidden; text-decoration: none; margin-bottom: 1.5rem;">
    <div style="padding: 1.5rem 2rem;">
      <div style="display: inline-block; background: #E63946; color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 4px; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">Analysis</div>
      <h3 style="color: #fff; font-size: 1.5rem; margin: 0 0 0.4rem 0; font-weight: 700;">Antibodies from Thin Air</h3>
      <p style="color: #E9C46A; font-size: 0.9rem; margin: 0 0 0.75rem 0; font-weight: 500;">Four AI Platforms Rewriting Cancer Drug Discovery</p>
      <p style="color: #ddd; font-size: 0.85rem; line-height: 1.5; margin: 0 0 1rem 0;">A comparison of JAM-2, Chai-2, Origin-1, and RFAntibody—de novo antibody design platforms achieving 15-40% hit rates and sub-nanomolar GPCR binders. Includes oncology target analysis and a primer on antibody biology.</p>
      <span style="color: #E9C46A; font-weight: 600; font-size: 0.9rem;">Read Analysis →</span>
    </div>
  </a>

  <p style="text-align: center; margin: 1rem 0 2rem;"><a href="/antibody-research/" style="color: #1a5276; font-weight: 600;">View all antibody research →</a></p>
</section>

<!-- Computational Protein Design Challenges -->
<section class="featured-section">
  <h3 class="section-title">Protein Design Challenges</h3>
  <p style="margin-bottom: 1.5rem; color: #666;">Computational approaches to protein and antibody design using diffusion models, structure prediction, and generative AI. For a comprehensive overview of AI-driven antibody design, see this excellent <a href="https://blog.booleanbiotech.com/ai-antibody-design-2025">state-of-the-art review</a> by Brian Naughton.</p>

  <div class="project-grid">
    <a href="https://github.com/ccalia/Bits_to_Binders_2024" class="project-card" target="_blank" rel="noopener">
      <div class="project-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
        </svg>
      </div>
      <h3 class="project-title">CD20 Binder Design</h3>
      <p class="project-description">Participated in Bits to Binders 2024 challenge, designing computational binders targeting CD20 for B-cell lymphoma therapeutics.</p>
      <span class="project-link">
        View on GitHub
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
        </svg>
      </span>
    </a>

    <div class="project-card" style="background: white;">
      <div class="project-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      </div>
      <h3 class="project-title">Nipah Virus Binder</h3>
      <p class="project-description">Competing in <a href="https://proteinbase.com/competitions/adaptyv-nipah-competition">Adaptyv Nipah Competition</a> using diffusion-based generative models including <a href="https://github.com/HannesStark/boltzgen">BoltzGen</a> for de novo binder design.</p>
      <a href="https://proteinbase.com/tp53" target="_blank" rel="noopener" class="project-link">
        See my designs
        <svg viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
        </svg>
      </a>
    </div>

    <div class="project-card" style="background: white;">
      <div class="project-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      </div>
      <h3 class="project-title">Immune Repertoire Profiling</h3>
      <p class="project-description">AIRR-ML-25 Challenge: Predicting disease states from TCR repertoires using DeepRC, ESM-2, FAISS clustering, and immunological features.</p>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 0.5rem;">
        <a href="https://deepwiki.com/inventcures/airr-ml-25-challenge" target="_blank" rel="noopener" class="project-link">
          My pipeline
          <svg viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
        <a href="https://uio-bmi.github.io/adaptive_immune_profiling_challenge_2025" target="_blank" rel="noopener" class="project-link">
          Contest
          <svg viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
        <a href="https://www.kaggle.com/competitions/adaptive-immune-profiling-challenge-2025/data" target="_blank" rel="noopener" class="project-link">
          Kaggle
          <svg viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

</div><!-- end section-biotech -->

  </div>
</main>

<script>
function showSection(section) {
  var medicineSection = document.getElementById('section-medicine');
  var biotechSection = document.getElementById('section-biotech');
  var btnMedicine = document.getElementById('btn-medicine');
  var btnBiotech = document.getElementById('btn-biotech');
  
  if (section === 'medicine') {
    medicineSection.style.display = 'block';
    biotechSection.style.display = 'none';
    btnMedicine.style.background = '#818cf8';
    btnMedicine.style.color = 'white';
    btnBiotech.style.background = '#f3f4f6';
    btnBiotech.style.color = '#1D3557';
  } else {
    medicineSection.style.display = 'none';
    biotechSection.style.display = 'block';
    btnMedicine.style.background = '#f3f4f6';
    btnMedicine.style.color = '#1e1b4b';
    btnBiotech.style.background = '#E63946';
    btnBiotech.style.color = 'white';
  }
  
  history.replaceState(null, null, '#' + section);
}

(function() {
  var hash = window.location.hash.substring(1);
  if (hash === 'biotech') {
    showSection('biotech');
  }
})();
</script>
