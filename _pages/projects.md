---
permalink: /projects/
title: "Projects"
layout: default
---

<main class="main-content">
  <div class="container-narrow">

<h1>Projects</h1>
<p>A collection of my work in digital health, computational biology, drug discovery, and biomedical ML.</p>

<p>I work at KCDH-A under the mentorship of <a href="https://en.wikipedia.org/wiki/Anurag_Agrawal_(medical_scientist)">Dr. Anurag Agrawal</a> on a slew of research projects at the intersection of ML (machine learning) & medicine, spanning palliative care, cancer & medical voice agents (aka scribes), all sharing a common thread of digital health with a north star objective of improving patient outcomes.</p>

<p>I also started a medical AI journal club at Ashoka, with Dr. Anurag's support in 2023. We meet somewhat infrequently but hope to meet at a more regular cadence in 2026!</p>

<div style="margin: 1.5rem 0 2rem 0; padding: 1rem 1.25rem; background: #f8f9fa; border-left: 3px solid #22c55e; border-radius: 4px;">
  <p style="margin: 0 0 0.75rem 0;"><strong>Looking for research interns!</strong> I am looking for enthusiastic students (both undergrads & grad students) to work with me on any of my research interests.</p>
  <p style="margin: 0; color: #555;">If you are interested, write to me at my Ashoka email with the subject line <em>"Research Intern interest"</em>, including a short paragraph about your background and which of these areas you would like to do research on. Feel free to suggest a research topic of your interest — if not aligned with my interests, I will try to connect you to the appropriate person in the Ashoka community who might be able to advise you.</p>
</div>

<section class="featured-section">
  <h2 class="section-title">Patient Education Tools</h2>

  <div class="project-grid">
    <div class="project-card" style="background: white;">
      <div class="project-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
        </svg>
      </div>
      <h3 class="project-title">Indic Layman RadOnc</h3>
      <p class="project-description">AI-powered tool that converts complex radiation therapy prescriptions into accessible, multilingual patient education materials in five Indian languages (English, Hindi, Tamil, Marathi, Bengali) at three literacy levels, with automatic patient privacy protection.</p>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 0.5rem;">
        <a href="https://indic-layman-radonc.vercel.app/" target="_blank" rel="noopener" class="project-link">
          Live app
          <svg viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
        <a href="https://github.com/inventcures/indic-layman-radonc" target="_blank" rel="noopener" class="project-link">
          GitHub repo
          <svg viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
        <a href="https://deepwiki.com/inventcures/indic-layman-radonc" target="_blank" rel="noopener" class="project-link">
          DeepWiki docs
          <svg viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

<section class="featured-section">
  <h2 class="section-title">Computational Protein Design</h2>
  <p style="margin-bottom: 1.5rem; color: #666;">In my spare time, I am also interested in computational approaches to protein and antibody design. Methods progress in this area is accelerating, starting from RFDiffusion by the Baker Lab at IPD, followed by Chai, Chai-2, BoltzGen, RFAntibody, & a spate of others. The field is very fertile & pace of progress is accelerating! For a comprehensive overview of AI-driven antibody design, see this excellent <a href="https://blog.booleanbiotech.com/ai-antibody-design-2025">state-of-the-art review</a> by Brian Naughton.</p>

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
          Contest page
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

<section class="featured-section">
  <h2 class="section-title">Drug Discovery & Regulatory Analysis</h2>

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
          Project page on Vercel
          <svg viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
        <a href="https://deepwiki.com/inventcures/fda_crl_analysis" target="_blank" rel="noopener" class="project-link">
          Code description
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

<section class="featured-section">
  <h2 class="section-title">Grants</h2>

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
          GitHub repo
          <svg viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
        <a href="https://deepwiki.com/inventcures/rag_gci" target="_blank" rel="noopener" class="project-link">
          DeepWiki docs
          <svg viewBox="0 0 20 20" fill="currentColor" style="width: 16px; height: 16px;">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

  </div>
</main>
