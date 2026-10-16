---
permalink: /ai-powered-virtual-mtb/
title: "Virtual Tumor Board"
excerpt: "An AI tumour board that brings multidisciplinary cancer expertise to patients who can't reach one today."
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

<style>
.vtb { --vtb-card: #f2efe9; --vtb-chip: #e8e2d9; --vtb-muted: #666; }
.vtb-lede { font-size: 1.25rem; line-height: 1.6; color: #444; margin: -10px 0 28px; }
.vtb-actions { display: flex; flex-wrap: wrap; gap: 14px 22px; align-items: center; margin: 0 0 8px; font-size: 15px; }
.vtb-btn { display: inline-block; padding: 10px 18px; background: var(--st-accent); color: #fff !important; text-decoration: none; border: 1px solid var(--st-accent); }
.vtb-btn:hover { background: #8e3820; }
.vtb-btn--ghost { background: transparent; color: var(--st-accent) !important; }
.vtb-btn--ghost:hover { background: var(--vtb-card); }
.vtb-label { font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: var(--vtb-muted); margin: 0 0 6px; }

.vtb-press { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr); gap: 28px; align-items: start; margin: 40px 0 10px; padding: 24px; background: var(--vtb-card); border: 1px solid var(--st-line); }
.vtb-press p { margin: 0 0 14px; }
.vtb-press .news-clipping { margin: 0; max-width: none; background: #fff; }
.vtb-press-source { font-size: 1.15rem; font-weight: 500; color: var(--st-ink); margin: 0 0 12px !important; }

.vtb-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0; margin: 26px 0 24px; border-top: 1px solid var(--st-line); border-bottom: 1px solid var(--st-line); }
.vtb-stat { padding: 18px 18px 16px 0; }
.vtb-stat + .vtb-stat { padding-left: 18px; border-left: 1px solid var(--st-line); }
.vtb-stat strong { display: block; font-size: 2.1rem; font-weight: 300; line-height: 1.1; color: var(--st-accent); }
.vtb-stat span { display: block; font-size: 14px; line-height: 1.5; color: #555; margin-top: 6px; }

.vtb-story { margin: 26px 0; padding: 4px 0 4px 22px; border-left: 3px solid var(--st-accent); }
.vtb-story p:last-child { margin-bottom: 0; }
.vtb-quote { font-style: italic; color: #555; }

.vtb-panel { display: flex; flex-wrap: wrap; gap: 8px; margin: 18px 0 26px; padding: 0; list-style: none; }
.vtb-panel li { margin: 0; padding: 6px 12px; background: var(--vtb-chip); font-size: 14px; }

.vtb-steps { counter-reset: vtb; list-style: none; padding: 0; margin: 0 0 26px; }
.vtb-steps li { counter-increment: vtb; position: relative; padding: 0 0 20px 52px; margin: 0; }
.vtb-steps li::before { content: counter(vtb); position: absolute; left: 0; top: 0; width: 34px; height: 34px; border: 1px solid var(--st-accent); color: var(--st-accent); display: flex; align-items: center; justify-content: center; font-size: 15px; }
.vtb-steps li:not(:last-child)::after { content: ""; position: absolute; left: 17px; top: 40px; bottom: 6px; border-left: 1px dashed var(--st-line); }
.vtb-steps strong { display: block; font-weight: 500; }
.vtb-steps span { color: #555; font-size: 16px; }

.vtb-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin: 20px 0 10px; }
.vtb-card { padding: 18px 20px; background: var(--vtb-card); border: 1px solid var(--st-line); }
.vtb-card h3 { margin: 0 0 6px; font-size: 1.05rem; }
.vtb-card p { margin: 0; font-size: 15px; line-height: 1.6; color: #555; }

.vtb-note { margin: 22px 0; padding: 14px 18px; border: 1px solid #e0c9a8; background: #fbf3e6; font-size: 15px; line-height: 1.6; }
.vtb-cta { margin: 50px 0 10px; padding: 30px 28px; background: #333; color: #eee; }
.vtb-cta h2 { color: #fff !important; margin: 0 0 8px !important; }
.vtb-cta p { color: #d0d0d0; margin: 0 0 20px; }
.vtb-cta .vtb-actions a:not(.vtb-btn) { color: #f0b49c; }
.vtb-disclaimer { font-size: 13px; color: var(--vtb-muted); margin-top: 26px; }

@media (max-width: 760px) {
  .vtb-press { grid-template-columns: 1fr; padding: 18px; }
  .vtb-grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .vtb-lede { font-size: 1.1rem; }
  .vtb-stats { grid-template-columns: 1fr; }
  .vtb-stat, .vtb-stat + .vtb-stat { padding: 14px 0; border-left: 0; }
  .vtb-stat + .vtb-stat { border-top: 1px solid var(--st-line); }
  .vtb-cta { padding: 24px 20px; }
}
</style>

<div class="vtb" markdown="0">

<p class="vtb-lede">An AI tumour board: a panel of specialist agents that reviews a cancer case the way a multidisciplinary team would, so patients far from major cancer centres can still get an expert, guideline-based treatment plan.</p>

<div class="vtb-actions">
  <a class="vtb-btn" href="mailto:spiff007@gmail.com?subject=Virtual%20Tumor%20Board">Get in touch</a>
  <a href="#how-it-works">How it works</a>
  <a href="https://timesofindia.indiatimes.com/technology/times-techies/ai-for-social-impact/articleshow/128493830.cms" target="_blank" rel="noopener">Read the Times of India feature</a>
</div>

<section class="vtb-press" aria-labelledby="vtb-press-title">
  <div>
    <p class="vtb-label">In the news</p>
    <p class="vtb-press-source" id="vtb-press-title">Times of India &middot; Times Techies: AI for Social Impact</p>
    <p>The Virtual Tumor Board was covered by the <strong>Times of India</strong> in their <a href="https://timesofindia.indiatimes.com/technology/times-techies/ai-for-social-impact/articleshow/128493830.cms" target="_blank" rel="noopener">Times Techies: AI for Social Impact</a> feature. Grateful for the coverage&mdash;it was encouraging to see interest in using AI for improving cancer care access.</p>
    <a class="vtb-btn vtb-btn--ghost" href="https://timesofindia.indiatimes.com/technology/times-techies/ai-for-social-impact/articleshow/128493830.cms" target="_blank" rel="noopener">Read the article &rarr;</a>
  </div>
  <figure class="news-clipping">
    <a href="{{ '/images/news/agentic-tumour-board-newspaper.png' | relative_url }}" aria-label="View the full-size newspaper clipping">
      <img src="{{ '/images/news/agentic-tumour-board-newspaper.png' | relative_url }}" alt="Times of India clipping titled Agentic Tumour Board, featuring Ashish Makani with Nandan Nilekani and EkStep co-founder Shankar Maruwada." width="960" height="1280" loading="lazy">
      <svg class="news-clipping-highlight" viewBox="0 0 960 1280" aria-hidden="true" focusable="false"><polygon points="137,490 773,490 791,1235 109,1235" fill="none" stroke="#e47722" stroke-width="4" vector-effect="non-scaling-stroke"></polygon></svg>
    </a>
    <figcaption>&ldquo;Agentic Tumour Board&rdquo; in print. Tap to view full size.</figcaption>
  </figure>
</section>

<h2>The problem</h2>

<p>The best cancer outcomes come from <strong>tumour boards</strong>: medical, surgical and radiation oncologists, radiologists and pathologists reviewing a case together and agreeing on a plan. Getting all of those specialists in one room is hard even in a large hospital, and for most patients in India it never happens.</p>

<div class="vtb-stats">
  <div class="vtb-stat"><strong>&lt;5%</strong><span>of cancer patients in India receive expert multidisciplinary review</span></div>
  <div class="vtb-stat"><strong>1.4M</strong><span>new cancer cases in India every year</span></div>
  <div class="vtb-stat"><strong>4&times;</strong><span>fewer oncologists per capita than the US</span></div>
</div>

<p>The result is delayed diagnoses, plans that drift from the evidence, and avoidable deaths, especially outside the major metros.</p>

<h2>Why this matters to me</h2>

<div class="vtb-story">
  <p>When my aunt was diagnosed with breast cancer, her staging MRI showed a lesion in a vertebra. The radiology report read: <span class="vtb-quote">&ldquo;sclerotic change, possibly age-related, cannot rule out metastatic disease.&rdquo;</span></p>
  <p>That one sentence was the difference between Stage II, which is curable, and Stage IV, which is not.</p>
  <p>Through family connections we got her case in front of senior specialists. They concluded the lesion was benign, and she received curative treatment. <strong>Most patients don't have those connections</strong>, can't travel to a metro, and can't pay for several specialist opinions. I'm building this so the second opinion doesn't depend on who you know.</p>
</div>

<h2 id="how-it-works">How it works</h2>

<p>The system runs a panel of specialised AI agents, each reasoning from its own subspecialty, to simulate the collaborative reasoning of a real tumour board.</p>

<ul class="vtb-panel" aria-label="Specialist agents on the panel">
  <li>Medical oncology</li>
  <li>Surgical oncology</li>
  <li>Radiation oncology</li>
  <li>Radiology</li>
  <li>Pathology</li>
</ul>

<ol class="vtb-steps">
  <li><strong>Structure the case</strong><span>Reports, scans and notes, often fragmented across documents, are organised into one clinical summary.</span></li>
  <li><strong>Review by each specialist</strong><span>Every agent assesses the case against subspecialty guidelines such as those from the National Comprehensive Cancer Network (NCCN).</span></li>
  <li><strong>Deliberate and challenge</strong><span>The agents debate, question each other's conclusions and flag uncertainty, as clinicians do in a real discussion.</span></li>
  <li><strong>Synthesise a recommendation</strong><span>The panel produces a treatment plan with its reasoning and evidence, aware of local drug availability and cost, for the treating oncologist to review.</span></li>
</ol>

<h2>What it's for</h2>

<div class="vtb-grid">
  <div class="vtb-card"><h3>Faster decisions</h3><p>Cut the time from diagnosis to a reviewed treatment plan from weeks to minutes.</p></div>
  <div class="vtb-card"><h3>Consistent quality</h3><p>Evidence-based recommendations aligned with international guidelines.</p></div>
  <div class="vtb-card"><h3>Local context</h3><p>Aware of drug availability, costs and insurance coverage in India.</p></div>
  <div class="vtb-card"><h3>Reach</h3><p>Decision support for oncologists in tier-2 and tier-3 cities and rural hospitals.</p></div>
</div>

<h2>Where it stands</h2>

<p>There is a <strong>working prototype</strong>, evaluated so far on synthetic cases. It has drawn interest from academic and clinical stakeholders, including researchers at Harvard Medical School.</p>

<div class="vtb-note"><strong>Early stage.</strong> This is a research prototype. It is not approved for clinical use and is meant to support, never replace, the treating physician.</div>

<p>I'm looking for:</p>
<ul>
  <li><strong>Clinical validation partners:</strong> oncology departments interested in piloting on real cases</li>
  <li><strong>Health systems</strong> that want to extend or standardise multidisciplinary review</li>
  <li><strong>Oncologists in underserved areas</strong> who would use decision support day to day</li>
  <li><strong>Investors</strong> in India-focused healthtech and precision oncology</li>
</ul>

<section class="vtb-cta">
  <h2>Interested? Let's talk.</h2>
  <p>Happy to share more detail under NDA.</p>
  <div class="vtb-actions">
    <a class="vtb-btn" href="mailto:spiff007@gmail.com?subject=Virtual%20Tumor%20Board">Email me</a>
    <a href="https://linkedin.com/in/tp53" target="_blank" rel="noopener">LinkedIn</a>
    <a href="https://twitter.com/inventcures" target="_blank" rel="noopener">Twitter/X</a>
  </div>
</section>

<p class="vtb-disclaimer">Disclaimer: research prototype, not for clinical use without physician oversight.</p>

</div>
