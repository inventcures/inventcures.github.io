---
permalink: /medical-llm-council/
redirect_from: /llm-medical-council/
title: "Medical LLM Council"
excerpt: "Several LLMs answer one medical case, review each other anonymously, and have their answers merged by rules built for clinical risk."
layout: single
author_profile: false
# Set this to the Railway URL once the app is deployed; the "Try it" buttons switch on by themselves.
demo_url: "https://medical-llm-council.up.railway.app"
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
.mlc { --mlc-card: #f2efe9; --mlc-chip: #e8e2d9; --mlc-muted: #666; }
.mlc-lede { font-size: 1.25rem; line-height: 1.6; color: #444; margin: -10px 0 28px; }
.mlc-actions { display: flex; flex-wrap: wrap; gap: 14px 22px; align-items: center; margin: 0 0 8px; font-size: 15px; }
.mlc-btn { display: inline-block; padding: 10px 18px; background: var(--st-accent); color: #fff !important; text-decoration: none; border: 1px solid var(--st-accent); }
.mlc-btn:hover { background: #8e3820; }
.mlc-btn--ghost { background: transparent; color: var(--st-accent) !important; }
.mlc-btn--ghost:hover { background: var(--mlc-card); }
.mlc-btn--soon { background: transparent; color: var(--mlc-muted) !important; border: 1px dashed var(--st-line); cursor: default; }
.mlc-label { font-size: 12px; letter-spacing: .08em; text-transform: uppercase; color: var(--mlc-muted); margin: 0 0 6px; }

.mlc-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0; margin: 26px 0 24px; border-top: 1px solid var(--st-line); border-bottom: 1px solid var(--st-line); }
.mlc-stat { padding: 18px 18px 16px 0; }
.mlc-stat + .mlc-stat { padding-left: 18px; border-left: 1px solid var(--st-line); }
.mlc-stat strong { display: block; font-size: 2.1rem; font-weight: 300; line-height: 1.1; color: var(--st-accent); }
.mlc-stat span { display: block; font-size: 14px; line-height: 1.5; color: #555; margin-top: 6px; }

.mlc-story { margin: 26px 0; padding: 4px 0 4px 22px; border-left: 3px solid var(--st-accent); }
.mlc-story p:last-child { margin-bottom: 0; }
.mlc-quote { font-style: italic; color: #555; }

.mlc-panel { display: flex; flex-wrap: wrap; gap: 8px; margin: 18px 0 26px; padding: 0; list-style: none; }
.mlc-panel li { margin: 0; padding: 6px 12px; background: var(--mlc-chip); font-size: 14px; }

.mlc-steps { counter-reset: mlc; list-style: none; padding: 0; margin: 0 0 26px; }
.mlc-steps li { counter-increment: mlc; position: relative; padding: 0 0 20px 52px; margin: 0; }
.mlc-steps li::before { content: counter(mlc); position: absolute; left: 0; top: 0; width: 34px; height: 34px; border: 1px solid var(--st-accent); color: var(--st-accent); display: flex; align-items: center; justify-content: center; font-size: 15px; }
.mlc-steps li:not(:last-child)::after { content: ""; position: absolute; left: 17px; top: 40px; bottom: 6px; border-left: 1px dashed var(--st-line); }
.mlc-steps strong { display: block; font-weight: 500; }
.mlc-steps span { color: #555; font-size: 16px; }

.mlc-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin: 20px 0 10px; }
.mlc-card { padding: 18px 20px; background: var(--mlc-card); border: 1px solid var(--st-line); }
.mlc-card h3 { margin: 0 0 6px; font-size: 1.05rem; }
.mlc-card p { margin: 0; font-size: 15px; line-height: 1.6; color: #555; }

.mlc-compare { width: 100%; border-collapse: collapse; margin: 18px 0 26px; font-size: 15px; line-height: 1.5; }
.mlc-compare th, .mlc-compare td { text-align: left; vertical-align: top; padding: 10px 12px; border-bottom: 1px solid var(--st-line); }
.mlc-compare th { font-size: 12px; letter-spacing: .06em; text-transform: uppercase; color: var(--mlc-muted); font-weight: 500; }
.mlc-compare td:first-child { font-weight: 500; white-space: nowrap; }

.mlc-rules { margin: 10px 0 26px; padding-left: 22px; }
.mlc-rules li { margin: 0 0 6px; }

.mlc-note { margin: 22px 0; padding: 14px 18px; border: 1px solid #e0c9a8; background: #fbf3e6; font-size: 15px; line-height: 1.6; }
.mlc-cta { margin: 50px 0 10px; padding: 30px 28px; background: #333; color: #eee; }
.mlc-cta h2 { color: #fff !important; margin: 0 0 8px !important; }
.mlc-cta p { color: #d0d0d0; margin: 0 0 20px; }
.mlc-cta .mlc-actions a:not(.mlc-btn) { color: #f0b49c; }
.mlc-cta .mlc-btn--ghost { color: #f0b49c !important; border-color: #f0b49c; }
.mlc-cta .mlc-btn--ghost:hover { background: #444; }
.mlc-disclaimer { font-size: 13px; color: var(--mlc-muted); margin-top: 26px; }

@media (max-width: 760px) {
  .mlc-grid { grid-template-columns: 1fr; }
  .mlc-compare td:first-child { white-space: normal; }
}
@media (max-width: 640px) {
  .mlc-lede { font-size: 1.1rem; }
  .mlc-stats { grid-template-columns: 1fr; }
  .mlc-stat, .mlc-stat + .mlc-stat { padding: 14px 0; border-left: 0; }
  .mlc-stat + .mlc-stat { border-top: 1px solid var(--st-line); }
  .mlc-compare, .mlc-compare tbody, .mlc-compare tr, .mlc-compare td { display: block; }
  .mlc-compare thead { display: none; }
  .mlc-compare tr { padding: 10px 0; border-bottom: 1px solid var(--st-line); }
  .mlc-compare td { border: 0; padding: 2px 0; }
  .mlc-compare td:nth-child(2)::before { content: "llm-council: "; color: var(--mlc-muted); }
  .mlc-compare td:nth-child(3)::before { content: "Medical council: "; color: var(--mlc-muted); }
  .mlc-cta { padding: 24px 20px; }
}
</style>

<div class="mlc" markdown="0">

<p class="mlc-lede">Put one medical case to a council of LLMs. Each model answers on its own, then reviews the others' answers without knowing who wrote them, and the answers are merged by rules built around clinical risk, so that one model's warning is never outvoted by three models' reassurance.</p>

<div class="mlc-actions">
  {% if page.demo_url != "" %}<a class="mlc-btn" href="{{ page.demo_url }}" target="_blank" rel="noopener">Try it with your own key &rarr;</a>{% else %}<a class="mlc-btn mlc-btn--soon" href="#try-it">Live demo coming soon</a>{% endif %}
  <a href="#how-it-works">How it works</a>
</div>

<h2>The idea</h2>

<p>Andrej Karpathy's <a href="https://github.com/karpathy/llm-council" target="_blank" rel="noopener">llm-council</a> asks several LLMs the same question, has each one rank the others' anonymised answers, and lets a "chairman" model write the final reply. It is a simple, clever way to get a second, third and fourth opinion from machines.</p>

<p>Medicine needs one change to that design. In most domains, averaging opinions is fine: if three models are right and one is wrong, going with the majority wins. In medicine the errors are not symmetric. Wrongly reassuring someone with a heart attack is far worse than sending someone with indigestion for an ECG. A merge that averages can bury the one answer that mattered.</p>

<div class="mlc-story">
  <p class="mlc-label">A worked example</p>
  <p>A 52-year-old has had chest tightness for an hour. Three council models say <span class="mlc-quote">&ldquo;likely musculoskeletal, reassure and follow up&rdquo;</span>. The fourth says <span class="mlc-quote">&ldquo;cannot exclude acute coronary syndrome, needs an ECG and troponin now&rdquo;</span>.</p>
  <p>An average-rank merge goes with the three. The Medical LLM Council keeps the warning: safety warnings from any model are always reported, reassurance has to be unanimous to be given, and the more cautious urgency stands. <strong>The minority view is not lost; it leads.</strong></p>
</div>

<div class="mlc-stats">
  <div class="mlc-stat"><strong>4</strong><span>models seated by default, each from a different model family</span></div>
  <div class="mlc-stat"><strong>3</strong><span>stages per case: independent Opinions, Peer Review, Consensus Statement</span></div>
  <div class="mlc-stat"><strong>2</strong><span>merge strategies to compare: Karpathy-style Baseline and Safety-First</span></div>
</div>

<h2 id="how-it-works">How it works</h2>

<ul class="mlc-panel" aria-label="Default council">
  <li>GPT-5.1</li>
  <li>Gemini 3 Pro</li>
  <li>Claude Sonnet 4.5</li>
  <li>Grok 4</li>
</ul>

<ol class="mlc-steps">
  <li><strong>Independent Opinions</strong><span>Every model answers the case without seeing the others, in a fixed structure: a Final Answer, a ranked differential with probabilities, atomic claims tagged by type (diagnosis, recommendation, dose, reassurance, safety warning), and confidence. Can't-miss diagnoses are marked as such.</span></li>
  <li><strong>Anonymous Peer Review</strong><span>Each model scores and ranks the others' Opinions, labelled only A, B, C, so no model knows whose answer it is reading or can favour its own. A reviewer can make a Danger Call: a statement that a specific Opinion could harm a patient, with the reason.</span></li>
  <li><strong>Merge by rule</strong><span>A swappable Aggregation Strategy decides what the final writer is allowed to use. Under Safety-First, an Opinion with a Danger Call cannot lead, every safety warning is kept, and reassurance and doses need agreement.</span></li>
  <li><strong>Consensus Statement</strong><span>The Chair model writes the final answer from the merged inputs only. It must name every can't-miss diagnosis, report minority views (Dissent), and say how each serious disagreement was resolved.</span></li>
</ol>

<h2>What changes for medicine</h2>

<table class="mlc-compare">
  <thead><tr><th></th><th>karpathy/llm-council</th><th>Medical LLM Council</th></tr></thead>
  <tbody>
    <tr><td>Answers</td><td>Free text</td><td>Structured Opinions with differential, typed claims and safety warnings</td></tr>
    <tr><td>Review</td><td>Anonymous ranking</td><td>Anonymous rubric scores, ranking and Danger Calls</td></tr>
    <tr><td>Merge</td><td>Average rank, then the chairman writes freely</td><td>Rules that treat missed danger as worse than false alarm</td></tr>
    <tr><td>Disagreement</td><td>Left to the chairman</td><td>Mapped, graded for severity, and arbitrated by fixed rules</td></tr>
    <tr><td>Evidence it helps</td><td>None built in</td><td>A benchmark against the best single model and a plain majority vote</td></tr>
  </tbody>
</table>

<div class="mlc-grid">
  <div class="mlc-card"><h3>Safety-First Strategy</h3><p>Unions every safety warning, lets a Danger Call stop an Opinion from leading, and requires consensus for reassurance and dose claims. The Karpathy-style Baseline is kept next to it for comparison.</p></div>
  <div class="mlc-card"><h3>Danger Calls in Peer Review</h3><p>Reviewers don't just rank. They can flag a specific answer as harmful and say why, and that flag carries through the merge.</p></div>
  <div class="mlc-card"><h3>Weighted vote for multiple choice</h3><p>For exam-style questions, each model's vote is weighted by its measured accuracy, as log-odds: a model at chance gets weight 0, a strong one gets more say.</p></div>
  <div class="mlc-card"><h3>Oncology treatment plans</h3><p>Cancer cases are merged step by step: facts first (each quoted from the case, with conflicting readings sent back to the source), then guideline path, intent, plan and regimen. Parts of different plans are never stitched together, and a split vote is shown as equipoise.</p></div>
  <div class="mlc-card"><h3>Side by side, with a disagreement map</h3><p>Compare two or three Opinions in columns. Every point where they differ is listed, graded mild, moderate or substantial, and resolved by rule, or left open with what would settle it.</p></div>
  <div class="mlc-card"><h3>Benchmark</h3><p>Run a strategy over a set of multiple-choice questions such as MedQA and compare it with the best single model and a plain majority vote, on accuracy, vote margin and cost, with oncology questions reported separately.</p></div>
  <div class="mlc-card"><h3>Bring your own key</h3><p>Paste your own OpenRouter key into the app. It stays in your browser, is sent only with the requests that call models, and is never stored or logged on the server.</p></div>
  <div class="mlc-card"><h3>Grounded in research</h3><p>The merge rules come from a review of how to combine answers from several LLMs for medical question answering, from voting and semantic entropy to asymmetric risk.</p></div>
</div>

<h2>How disagreements are settled</h2>

<p>Under Safety-First, one extra model call lists every point on which the Opinions take different positions. The model only finds the points; rules decide the rest. Severity can be raised by rule but never lowered: anything about dose, urgency or safety is always substantial. Each moderate or substantial point is then arbitrated:</p>

<ul class="mlc-rules">
  <li>Safety warnings are all kept.</li>
  <li>A stated fact goes back to its source.</li>
  <li>The more cautious urgency stands.</li>
  <li>A dose needs a majority.</li>
  <li>Anything else needs a majority, with peer review as the tie-break.</li>
</ul>

<p>An Opinion with a Danger Call never carries a point. If the Chair leaves a serious point out of its final answer, the omission is flagged.</p>

<h2 id="try-it">Try it yourself</h2>

<p>The council calls real models, paid for with your own <a href="https://openrouter.ai" target="_blank" rel="noopener">OpenRouter</a> key. Each case makes about ten model calls, so expect to pay cents per case, not dollars.</p>

<ol class="mlc-steps">
  <li><strong>Get an OpenRouter key</strong><span>Sign up at <a href="https://openrouter.ai/keys" target="_blank" rel="noopener">openrouter.ai/keys</a>, add a little credit, and create a key. It starts with <code>sk-or-</code>. Setting a spending limit on the key is a good idea.</span></li>
  <li><strong>Open the app and paste the key</strong><span>Paste it into the masked key field. It stays in this browser tab (or on this device, if you tick &ldquo;remember&rdquo;), is sent only with the requests that call models, and is never stored or logged on the server.</span></li>
  <li><strong>Put a case to the council</strong><span>Write an open question or a multiple-choice one, or pick Oncology and fill in the case profile. Watch the Opinions, Peer Review and Consensus Statement stream in, then compare answers side by side. Use made-up cases only.</span></li>
</ol>

<div class="mlc-actions">
  {% if page.demo_url != "" %}<a class="mlc-btn" href="{{ page.demo_url }}" target="_blank" rel="noopener">Open the Medical LLM Council &rarr;</a>{% else %}<span class="mlc-btn mlc-btn--soon" aria-disabled="true">Live demo coming soon</span>{% endif %}
</div>

<h2>Where it stands</h2>

<p>Version 1 is built: the three-stage council, both strategies, multiple-choice voting, oncology plan merging, the benchmark, and the side-by-side view with its disagreement map. It is a FastAPI backend and a React front end that call models through <a href="https://openrouter.ai" target="_blank" rel="noopener">OpenRouter</a>, with an automated test suite that runs on fake models. The next step is running the benchmark on real models to measure whether Safety-First actually beats a single model and a plain vote.</p>

<div class="mlc-note"><strong>Research tool. Not for patient care.</strong> This exists to study how answers from several LLMs should be combined for medical questions. It is not a medical device, its output is not medical advice, and real patient data should never be entered into it.</div>

<section class="mlc-cta">
  <h2>Want to try it or work on it?</h2>
  <p>Happy to talk about evaluation, merge rules, or clinical use cases.</p>
  <div class="mlc-actions">
    {% if page.demo_url != "" %}<a class="mlc-btn" href="{{ page.demo_url }}" target="_blank" rel="noopener">Try it with your own key</a>{% endif %}
    <a href="mailto:spiff007@gmail.com?subject=Medical%20LLM%20Council">Email me</a>
    <a href="https://linkedin.com/in/tp53" target="_blank" rel="noopener">LinkedIn</a>
    <a href="https://twitter.com/inventcures" target="_blank" rel="noopener">Twitter/X</a>
  </div>
</section>

<p class="mlc-disclaimer">Inspired by <a href="https://github.com/karpathy/llm-council" target="_blank" rel="noopener">karpathy/llm-council</a>; the code is an independent implementation. Research prototype, not for clinical use.</p>

</div>
