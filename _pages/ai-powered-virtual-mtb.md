---
permalink: /ai-powered-virtual-mtb/
title: "AI-Powered Virtual Tumor Board"
layout: single
author_profile: false
---

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-EZ92F8GGBM"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-EZ92F8GGBM');
</script>

<!-- Twitter conversion tracking base code -->
<script>
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
twq('config','r27u1');
</script>

<!-- Twitter conversion tracking event code -->
<script type="text/javascript">
  twq('event', 'tw-r27u1-r27x4', {
  });
</script>
<!-- End Twitter conversion tracking event code -->

<style>
.hero-video {
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 25px 80px rgba(0,0,0,0.3);
}
.hero-video video {
  width: 100%;
  display: block;
}
.stat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}
.stat-card {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
}
.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #818cf8, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.stat-label {
  font-size: 0.9rem;
  color: #94a3b8;
  margin-top: 0.5rem;
}
.personal-story {
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  border-left: 4px solid #818cf8;
  border-radius: 0 12px 12px 0;
  padding: 1.5rem 2rem;
  margin: 2rem 0;
}
.personal-story h3 {
  color: #e0e7ff;
  margin-top: 0;
  font-size: 1.4rem;
}
.personal-story p {
  color: #f1f5f9;
  line-height: 1.7;
  margin-bottom: 1rem;
}
.personal-story em {
  color: #fbbf24;
  font-style: italic;
}
.personal-story strong {
  color: #ffffff;
  font-weight: 700;
}
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 12px;
  text-decoration: none;
  box-shadow: 0 10px 40px rgba(99, 102, 241, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
}
.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 50px rgba(99, 102, 241, 0.4);
  color: white;
  text-decoration: none;
}
.feature-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 2rem 0;
}
.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background: #1e293b;
  border-radius: 8px;
}
.feature-icon {
  font-size: 1.5rem;
}
.feature-text h4 {
  margin: 0 0 0.25rem 0;
  color: #f1f5f9;
  font-size: 1rem;
}
.feature-text p {
  margin: 0;
  color: #94a3b8;
  font-size: 0.85rem;
}
@media (max-width: 768px) {
  .stat-grid, .feature-list {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="hero-video">
  <video autoplay loop muted playsinline>
    <source src="/files/virtual-mtb/vtb-demo.mp4" type="video/mp4">
  </video>
</div>

## The Problem: Tumor Boards Save Lives, But Most Patients Never Get One

A **Multidisciplinary Tumor Board (MTB)** is a meeting where oncologists from different specialties—surgery, medical oncology, radiation, pathology, radiology, genetics, and palliative care—gather to discuss complex cancer cases and reach a consensus treatment plan.

**The evidence is clear**: MTB discussions improve cancer outcomes, reduce treatment delays, and ensure patients get guideline-concordant care.

<div class="stat-grid">
  <div class="stat-card">
    <div class="stat-number">&lt;5%</div>
    <div class="stat-label">of Indian cancer patients get MTB review</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">1.4M</div>
    <div class="stat-label">new cancer cases in India yearly</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">~800</div>
    <div class="stat-label">oncologists per 100,000 patients (US has 3,000+)</div>
  </div>
</div>

**Why don't more patients get tumor boards?**
- Severe oncologist shortage, especially outside metros
- Time constraints—a single MTB meeting takes 1-2 hours
- Coordination challenges across specialties
- No reimbursement for MTB participation in most settings

---

<div class="personal-story">
  <h3>Why I Built This</h3>
  
  <p>Last year, my aunt was diagnosed with cancer. During staging, her MRI showed a lesion in her vertebra. The radiologist's report was ambiguous: <em>"sclerotic change, possibly age-related, cannot rule out metastatic disease."</em></p>
  
  <p>That single sentence was the difference between Stage II (curable) and Stage IV (incurable).</p>
  
  <p>We were fortunate. Through family connections, we got her case reviewed at a tumor board with some of India's best oncologists—a surgical oncologist, medical oncologist, radiation oncologist, and a senior radiologist who specialized in musculoskeletal imaging. After careful review, they concluded it was a benign age-related change. She received curative-intent treatment.</p>
  
  <p><strong>Most Indian cancer patients don't have that privilege.</strong> They don't have connections to top oncologists. They can't travel to metros. They can't afford private consultations with 7 specialists.</p>
  
  <p>I built this AI Virtual Tumor Board to democratize access to expert-level multidisciplinary deliberation.</p>
</div>

---

## What is the AI Virtual Tumor Board?

An AI system that simulates a real tumor board meeting with **7 specialist agents**:

<div class="feature-list">
  <div class="feature-item">
    <span class="feature-icon">🔪</span>
    <div class="feature-text">
      <h4>Dr. Shalya</h4>
      <p>Surgical Oncology — resectability, surgical approach</p>
    </div>
  </div>
  <div class="feature-item">
    <span class="feature-icon">💊</span>
    <div class="feature-text">
      <h4>Dr. Chikitsa</h4>
      <p>Medical Oncology — chemotherapy, immunotherapy, targeted therapy</p>
    </div>
  </div>
  <div class="feature-item">
    <span class="feature-icon">☢️</span>
    <div class="feature-text">
      <h4>Dr. Kirann</h4>
      <p>Radiation Oncology — RT planning, dose fractionation</p>
    </div>
  </div>
  <div class="feature-item">
    <span class="feature-icon">🕊️</span>
    <div class="feature-text">
      <h4>Dr. Shanti</h4>
      <p>Palliative Care — symptom management, goals of care</p>
    </div>
  </div>
  <div class="feature-item">
    <span class="feature-icon">📷</span>
    <div class="feature-text">
      <h4>Dr. Chitran</h4>
      <p>Radiology — imaging interpretation, staging validation</p>
    </div>
  </div>
  <div class="feature-item">
    <span class="feature-icon">🔬</span>
    <div class="feature-text">
      <h4>Dr. Marga</h4>
      <p>Pathology — histology, biomarkers, molecular testing</p>
    </div>
  </div>
  <div class="feature-item">
    <span class="feature-icon">🧬</span>
    <div class="feature-text">
      <h4>Dr. Anuvamsha</h4>
      <p>Genetics — germline/somatic mutations, actionability</p>
    </div>
  </div>
</div>

### How It Works

1. **Input**: Patient case data (demographics, staging, biomarkers, imaging, pathology)
2. **Round 1**: Each specialist provides their independent assessment
3. **Round 2**: Agents review each other's recommendations (chain of debate)
4. **Round 3**: Consensus building with unified treatment plan
5. **Output**: Structured recommendation with citations to NCCN, ESMO, ASTRO guidelines

### Evidence-Based, India-Aware

The system retrieves from **256 clinical guideline documents**:
- NCCN Guidelines (67 documents)
- ESMO Guidelines (19 documents)  
- ASTRO Guidelines (20 documents)
- ACR Appropriateness Criteria (42 documents)
- CAP Cancer Protocols (103 documents)
- ClinVar/CIViC Genomics (5 documents)

**Crucially, it considers Indian context**:
- Drug availability in India (DCGI approvals)
- Cost estimates in INR
- PMJAY/Ayushman Bharat coverage
- Resource constraints at different care levels

---

## Try the Demo

<div style="text-align: center; margin: 3rem 0;">
  <a href="https://virtual-tumor-board-production.up.railway.app" target="_blank" class="cta-button">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/></svg>
    Launch Virtual Tumor Board
  </a>
</div>

The demo shows a sample case: **58-year-old male with Stage IIIA NSCLC, KRAS G12C positive, PD-L1 60%**. Watch all 7 agents deliberate and reach consensus.

---

## Technical Details

**Architecture**: Multi-agent orchestrator adapted from [Microsoft's MAI-DxO](https://arxiv.org/abs/2412.03992)

**LLM**: Claude 3.5 Sonnet via Anthropic API (prompt caching for cost efficiency)

**RAG**: Google Gemini File Search API for guideline retrieval

**Stack**: Next.js, TypeScript, Railway deployment

**Cost optimization**: Cached responses for demo, batch API for production

---

## Roadmap

- [ ] Database integration (Supabase) for case persistence
- [ ] PDF report generation
- [ ] Multilingual support (Hindi, Tamil, Telugu, Bengali, Marathi)
- [ ] EHR integration via FHIR
- [ ] Voice input for case entry

---

## Contact

Interested in collaborating or piloting this at your institution? 

[Email me](mailto:spiff007@gmail.com) or connect on [Twitter/X](https://twitter.com/inventcures).

---

<p style="text-align: center; color: #64748b; font-size: 0.85rem; margin-top: 3rem;">
  <em>Disclaimer: This is a research prototype. AI-generated recommendations should always be verified by qualified oncologists. Not intended for clinical decision-making without physician oversight.</em>
</p>
