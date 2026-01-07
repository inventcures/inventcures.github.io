---
permalink: /palli-sahayak/
title: "Palli Sahayak"
layout: default
---

<style>
  /* Palli Sahayak Landing Page Styles */
  .ps-landing {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .ps-hero {
    text-align: center;
    padding: 4rem 1rem;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 16px;
    margin-bottom: 3rem;
  }

  .ps-hero h1 {
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    color: #1a1a1a;
  }

  .ps-hero .hindi {
    font-size: 1.5rem;
    color: #6b7280;
    margin-bottom: 1.5rem;
  }

  .ps-hero .tagline {
    font-size: 1.25rem;
    color: #4b5563;
    max-width: 600px;
    margin: 0 auto 2rem;
    line-height: 1.7;
  }

  .ps-hero .badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #22c55e;
    color: white;
    border-radius: 50px;
    font-size: 0.875rem;
    font-weight: 600;
    margin: 0.25rem;
  }

  .ps-hero .links {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .ps-hero .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s;
  }

  .ps-hero .btn-primary {
    background: #1a1a1a;
    color: white;
  }

  .ps-hero .btn-primary:hover {
    background: #333;
    transform: translateY(-2px);
  }

  .ps-hero .btn-secondary {
    background: white;
    color: #1a1a1a;
    border: 2px solid #e5e7eb;
  }

  .ps-hero .btn-secondary:hover {
    border-color: #1a1a1a;
  }

  .ps-section {
    margin-bottom: 4rem;
  }

  .ps-section h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #1a1a1a;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .ps-section h2::before {
    content: '';
    width: 4px;
    height: 2rem;
    background: #22c55e;
    border-radius: 2px;
  }

  .ps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .ps-card {
    background: white;
    padding: 1.5rem;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    transition: all 0.2s;
  }

  .ps-card:hover {
    border-color: #22c55e;
    box-shadow: 0 4px 20px rgba(34, 197, 94, 0.1);
  }

  .ps-card-icon {
    width: 48px;
    height: 48px;
    background: #f0fdf4;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    color: #22c55e;
  }

  .ps-card h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .ps-card p {
    color: #6b7280;
    font-size: 0.9375rem;
    line-height: 1.6;
  }

  .ps-metric {
    text-align: center;
    padding: 2rem;
    background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
    border-radius: 12px;
  }

  .ps-metric-value {
    font-size: 3rem;
    font-weight: 700;
    color: #16a34a;
  }

  .ps-metric-label {
    color: #6b7280;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .ps-language-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 0.75rem;
  }

  .ps-language {
    text-align: center;
    padding: 1rem;
    background: #f9fafb;
    border-radius: 8px;
    font-size: 0.875rem;
  }

  .ps-language .native {
    display: block;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .ps-arch-diagram {
    background: #1a1a1a;
    color: white;
    padding: 2rem;
    border-radius: 12px;
    font-family: 'SF Mono', 'Monaco', 'Inconsolata', monospace;
    font-size: 0.8125rem;
    overflow-x: auto;
    line-height: 1.6;
  }

  .ps-partners {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
  }

  .ps-partner {
    text-align: center;
    padding: 1rem 1.5rem;
    background: white;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
  }

  .ps-partner-name {
    font-weight: 600;
    color: #1a1a1a;
  }

  .ps-partner-role {
    font-size: 0.8125rem;
    color: #6b7280;
  }

  .ps-validation-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: #eff6ff;
    color: #1e40af;
    border-radius: 6px;
    font-size: 0.8125rem;
    margin: 0.25rem;
  }

  @media (max-width: 640px) {
    .ps-hero h1 {
      font-size: 2rem;
    }
    .ps-hero .hindi {
      font-size: 1.125rem;
    }
    .ps-hero .tagline {
      font-size: 1rem;
    }
    .ps-section h2 {
      font-size: 1.5rem;
    }
  }
</style>

<div class="ps-landing">

  <!-- Hero Section -->
  <section class="ps-hero">
    <span class="badge">Digital Public Good</span>
    <span class="badge">Open Source</span>
    <h1>Palli Sahayak</h1>
    <p class="hindi">पल्ली सहायक • பல்லி சகாயக்</p>
    <p class="tagline">
      A voice AI assistant democratizing access to palliative care information across India.<br>
      Supporting patients, caregivers, and community health workers in 15+ languages.
    </p>
    <div class="links">
      <a href="https://github.com/inventcures/rag_gci" target="_blank" rel="noopener" class="btn btn-primary">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        GitHub
      </a>
      <a href="https://deepwiki.com/inventcures/rag_gci" target="_blank" rel="noopener" class="btn btn-secondary">
        Documentation
      </a>
      <a href="#demo" class="btn btn-secondary">
        Try Demo
      </a>
    </div>
  </section>

  <!-- Problem Section -->
  <section class="ps-section">
    <h2>The Challenge</h2>
    <p style="color: #6b7280; max-width: 700px; line-height: 1.7; font-size: 1.0625rem;">
      Only <strong>1-2% of the 10+ million patients</strong> needing palliative care in India have access to it. WHO projects a <strong>shortfall of 10 million health workers</strong> by 2030, predominantly in low- and middle-income countries. Language barriers, literacy gaps, and geographic isolation prevent millions from accessing essential symptom management and caregiving information.
    </p>
  </section>

  <!-- Solution Section -->
  <section class="ps-section">
    <h2>The Solution</h2>
    <div class="ps-grid">
      <div class="ps-card">
        <div class="ps-card-icon">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
        </div>
        <h3>Voice-First Design</h3>
        <p>Users can call a toll-free number or use web voice to ask questions in their own language—no reading required.</p>
      </div>
      <div class="ps-card">
        <div class="ps-card-icon">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h3>Clinically Validated</h3>
        <p>Built on Indian palliative care case vignettes curated by <strong>Pallium India</strong> and <strong>Max Healthcare</strong>.</p>
      </div>
      <div class="ps-card">
        <div class="ps-card-icon">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/>
          </svg>
        </div>
        <h3>15+ Indian Languages</h3>
        <p>Hindi, Bengali, Tamil, Marathi, Punjabi, Malayalam, and more—responding in the user's preferred language.</p>
      </div>
      <div class="ps-card">
        <div class="ps-card-icon">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
        </div>
        <h3>Privacy-First</h3>
        <p>No personal health information stored. Session data expires after 24 hours. HIPAA-aligned practices.</p>
      </div>
    </div>
  </section>

  <!-- Impact Metrics -->
  <section class="ps-section">
    <h2>Impact Potential</h2>
    <div class="ps-grid" style="grid-template-columns: repeat(3, 1fr);">
      <div class="ps-metric">
        <div class="ps-metric-value">10M+</div>
        <div class="ps-metric-label">Patients Needing Care</div>
      </div>
      <div class="ps-metric">
        <div class="ps-metric-value">1M+</div>
        <div class="ps-metric-label">ASHA Workers to Empower</div>
      </div>
      <div class="ps-metric">
        <div class="ps-metric-value">15+</div>
        <div class="ps-metric-label">Languages Supported</div>
      </div>
    </div>
  </section>

  <!-- Architecture -->
  <section class="ps-section">
    <h2>System Architecture</h2>
    <div class="ps-arch-diagram">
<pre style="margin: 0; padding: 0;">
┌─────────────────────────────────────────────────────────────┐
│                    PALLI SAHAYAK                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│  │  Phone   │  │ WhatsApp │  │   Web    │                  │
│  │  Calls   │  │   Bot    │  │   Voice  │                  │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘                  │
│       │             │              │                        │
│       ▼             ▼              ▼                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│  │  Bolna   │  │  Twilio  │  │ Gemini   │                  │
│  │   AI     │  │   STT    │  │  Live    │                  │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘                  │
│       └─────────────┴─────────────┘                        │
│                     │                                       │
│                     ▼                                       │
│         ┌───────────────────────┐                          │
│         │   HYBRID RAG PIPELINE  │                          │
│         │  ┌─────────┐ ┌──────┐  │                          │
│         │  │ Vector  │ │  KG  │  │                          │
│         │  │  Store  │ │Neo4j│  │                          │
│         │  └─────────┘ └──────┘  │                          │
│         └───────────────────────┘                          │
│                     │                                       │
│                     ▼                                       │
│         ┌───────────────────────┐                          │
│         │   RESPONSE GUARDS     │                          │
│         │  • Dosage Check       │                          │
│         │  • Safety Validation  │                          │
│         │  • Source Citation    │                          │
│         └───────────────────────┘                          │
└─────────────────────────────────────────────────────────────┘
</pre>
    </div>
  </section>

  <!-- Clinical Validation -->
  <section class="ps-section">
    <h2>Clinical Validation</h2>
    <p style="color: #6b7280; margin-bottom: 1.5rem; line-height: 1.7;">
      The knowledge base is built on <strong>Indian palliative care case vignettes</strong> developed and curated by:
    </p>
    <div class="ps-partners">
      <div class="ps-partner">
        <div class="ps-partner-name">Pallium India</div>
        <div class="ps-partner-role">Clinical Content Partner</div>
      </div>
      <div class="ps-partner">
        <div class="ps-partner-name">Max Healthcare</div>
        <div class="ps-partner-role">Clinical Validation Partner</div>
      </div>
    </div>
    <div style="margin-top: 2rem;">
      <span class="ps-validation-badge">✓ Dosage Validation</span>
      <span class="ps-validation-badge">✓ Safety Checks</span>
      <span class="ps-validation-badge">✓ Hallucination Detection</span>
      <span class="ps-validation-badge">✓ Source Citation</span>
      <span class="ps-validation-badge">✓ Emergency Referral</span>
    </div>
  </section>

  <!-- Languages -->
  <section class="ps-section">
    <h2>Language Support</h2>
    <p style="color: #6b7280; margin-bottom: 1.5rem;">Speak naturally—our AI understands and responds in your language.</p>
    <div class="ps-language-grid">
      <div class="ps-language"><span class="native">हिंदी</span>Hindi</div>
      <div class="ps-language"><span class="native">বাংলা</span>Bengali</div>
      <div class="ps-language"><span class="native">தமிழ்</span>Tamil</div>
      <div class="ps-language"><span class="native">मराठी</span>Marathi</div>
      <div class="ps-language"><span class="native">ગુજરાતી</span>Gujarati</div>
      <div class="ps-language"><span class="native">ਪੰਜਾਬੀ</span>Punjabi</div>
      <div class="ps-language"><span class="native">മലയാളം</span>Malayalam</div>
      <div class="ps-language"><span class="native">తెలుగు</span>Telugu</div>
      <div class="ps-language"><span class="native">ಕನ್ನಡ</span>Kannada</div>
      <div class="ps-language"><span class="native">English</span>(India)</div>
    </div>
  </section>

  <!-- Supported By -->
  <section class="ps-section">
    <h2>Supported By</h2>
    <div style="display: flex; gap: 2rem; align-items: center; justify-content: center; flex-wrap: wrap;">
      <div style="text-align: center;">
        <a href="https://www.gatesfoundation.org/" target="_blank" rel="noopener" style="color: inherit; text-decoration: none;">
          <img src="/images/gates-foundation-logo.png" alt="Gates Foundation" style="height: 50px; width: auto; opacity: 0.8;">
          <div style="font-size: 0.75rem; color: #6b7280; margin-top: 0.5rem;">Bill & Melinda Gates Foundation</div>
        </a>
      </div>
      <div style="text-align: center;">
        <a href="https://birac.nic.in/" target="_blank" rel="noopener" style="color: inherit; text-decoration: none;">
          <img src="/images/birac-dbt-logo.png" alt="BIRAC / DBT" style="height: 60px; width: auto; opacity: 0.8;">
          <div style="font-size: 0.75rem; color: #6b7280; margin-top: 0.5rem;">BIRAC / DBT India</div>
        </a>
      </div>
    </div>
    <p style="text-align: center; margin-top: 2rem; color: #6b7280; font-size: 0.875rem;">
      Grant awarded under <strong>Grand Challenges India</strong> (November 2024)<br>
      <span style="font-size: 0.8125rem;">PI: Dr. Anurag Agrawal • Co-investigator: Ashish Makani</span>
    </p>
  </section>

  <!-- Demo Section -->
  <section class="ps-section" id="demo">
    <h2>Try It Now</h2>
    <div style="background: #1a1a1a; color: white; padding: 2rem; border-radius: 12px; text-align: center;">
      <p style="margin: 0 0 1.5rem; color: #9ca3af;">Voice demo available in Hindi, Marathi, Tamil, and English</p>
      <a href="https://github.com/inventcures/rag_gci#quick-start" target="_blank" rel="noopener" class="btn btn-primary" style="background: #22c55e;">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
        Launch Voice Demo
      </a>
      <p style="margin: 1.5rem 0 0; font-size: 0.75rem; color: #6b7280;">
        Requires a modern browser with microphone access
      </p>
    </div>
  </section>

  <!-- Open Source -->
  <section class="ps-section">
    <h2>Open Source & Digital Public Good</h2>
    <p style="color: #6b7280; line-height: 1.7; margin-bottom: 2rem;">
      Palli Sahayak is a <strong>Digital Public Good</strong>—open source, adaptable, and designed for global health equity. The architecture can be adapted for any country, language, or medical domain.
    </p>
    <div class="ps-grid" style="grid-template-columns: repeat(2, 1fr);">
      <div class="ps-card">
        <h3>🔓 MIT License</h3>
        <p>Freely usable, modifiable, and distributable for any purpose.</p>
      </div>
      <div class="ps-card">
        <h3>🌍 SDG Aligned</h3>
        <p>Contributing to UN Sustainable Development Goals 3 (Good Health) and 10 (Reduced Inequalities).</p>
      </div>
    </div>
  </section>

</div>
