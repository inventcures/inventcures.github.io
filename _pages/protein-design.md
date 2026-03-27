---
permalink: /protein-design/
title: "Protein & Binder Design"
layout: default
---

<main class="main-content">
  <div class="container-narrow">

<h1>Protein & Binder Design</h1>
<p>Computational approaches to de novo protein and antibody design using diffusion models, structure prediction, and generative AI. I participate in open binder design competitions where designs are experimentally validated in the wet lab.</p>

<p style="color: #666; margin-bottom: 2.5rem;">For my antibody design research (benchmarks, tools, analysis), see the <a href="/antibody-research/">Antibody Research</a> hub.</p>

<!-- ==================== COMPETITIONS ==================== -->
<h2 style="margin-top: 1rem; padding-bottom: 0.5rem; border-bottom: 3px solid #00b4d8; color: #1D3557;">Competitions</h2>
<p style="color: #666; margin-bottom: 2rem;">Open binder design challenges with experimental validation. Designs are synthesized and tested in the lab by the competition organizers.</p>

<!-- RBX1 Binder Design -->
<section class="featured-section">
  <a href="https://proteinbase.com/competitions/gem-adaptyv-rbx1" target="_blank" rel="noopener" style="display: block; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border: 2px solid #a78bfa; border-radius: 12px; overflow: hidden; text-decoration: none; position: relative; margin-bottom: 2rem;">
    <div style="position: absolute; top: -8px; right: 20px; background: linear-gradient(135deg, #a78bfa, #7c3aed); color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.3rem 0.6rem; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 4px 12px rgba(167, 139, 250, 0.4);">Mar 2025</div>
    <div style="padding: 1.5rem 2rem;">
      <div style="display: inline-block; background: #a78bfa; color: #0f172a; font-size: 0.65rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 4px; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">GEM x Adaptyv Bio</div>
      <h3 style="color: #fff; font-size: 1.5rem; margin: 0 0 0.4rem 0; font-weight: 700;">RBX1 Binder Design Challenge</h3>
      <p style="color: #c4b5fd; font-size: 0.9rem; margin: 0 0 0.75rem 0; font-weight: 500;">De novo binder design for Ring-Box Protein 1 (E3 ubiquitin ligase component)</p>
      <p style="color: #ddd; font-size: 0.85rem; line-height: 1.5; margin: 0 0 1rem 0;">Designing binders targeting RBX1, a key component of Cullin-RING E3 ubiquitin ligase complexes involved in protein degradation. Submissions evaluated via experimental binding assays by Adaptyv Bio.</p>
      <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem;">
        <span style="background: rgba(167,139,250,0.15); color: #c4b5fd; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.75rem;">RFdiffusion</span>
        <span style="background: rgba(167,139,250,0.15); color: #c4b5fd; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.75rem;">ProteinMPNN</span>
        <span style="background: rgba(167,139,250,0.15); color: #c4b5fd; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.75rem;">AlphaFold2</span>
      </div>
      <span style="color: #c4b5fd; font-weight: 600; font-size: 0.9rem;">View Competition &rarr;</span>
    </div>
  </a>
</section>

<!-- Adaptyv Nipah -->
<section class="featured-section">
  <a href="https://proteinbase.com/competitions/adaptyv-nipah-competition" target="_blank" rel="noopener" style="display: block; background: linear-gradient(135deg, #0d1b2a 0%, #1b2838 100%); border: 2px solid #f59e0b; border-radius: 12px; overflow: hidden; text-decoration: none; position: relative; margin-bottom: 2rem;">
    <div style="position: absolute; top: -8px; right: 20px; background: linear-gradient(135deg, #f59e0b, #d97706); color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.3rem 0.6rem; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);">2024&ndash;2025</div>
    <div style="padding: 1.5rem 2rem;">
      <div style="display: inline-block; background: #f59e0b; color: #0d1b2a; font-size: 0.65rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 4px; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">Adaptyv Bio</div>
      <h3 style="color: #fff; font-size: 1.5rem; margin: 0 0 0.4rem 0; font-weight: 700;">Nipah Virus Binder Design</h3>
      <p style="color: #fcd34d; font-size: 0.9rem; margin: 0 0 0.75rem 0; font-weight: 500;">De novo binders targeting the Nipah virus attachment glycoprotein</p>
      <p style="color: #ddd; font-size: 0.85rem; line-height: 1.5; margin: 0 0 1rem 0;">Designing binders against the Nipah virus G protein using diffusion-based generative models including BoltzGen. Nipah has a 40&ndash;75% fatality rate with no approved treatments&mdash;computationally designed binders could seed therapeutic development.</p>
      <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem;">
        <span style="background: rgba(245,158,11,0.15); color: #fcd34d; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.75rem;">BoltzGen</span>
        <span style="background: rgba(245,158,11,0.15); color: #fcd34d; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.75rem;">RFdiffusion</span>
        <span style="background: rgba(245,158,11,0.15); color: #fcd34d; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.75rem;">BSL-4 Pathogen</span>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
        <span style="color: #fcd34d; font-weight: 600; font-size: 0.9rem;">View Competition &rarr;</span>
        <a href="https://proteinbase.com/tp53" target="_blank" rel="noopener" style="color: #fcd34d; font-weight: 600; font-size: 0.9rem; text-decoration: none;">My Designs &rarr;</a>
      </div>
    </div>
  </a>
</section>

<!-- Bits to Binders 2024 -->
<section class="featured-section">
  <a href="https://github.com/ccalia/Bits_to_Binders_2024" target="_blank" rel="noopener" style="display: block; background: linear-gradient(135deg, #1D3557 0%, #457B9D 100%); border: 2px solid #E63946; border-radius: 12px; overflow: hidden; text-decoration: none; position: relative; margin-bottom: 2rem;">
    <div style="position: absolute; top: -8px; right: 20px; background: linear-gradient(135deg, #E63946, #ff6b6b); color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.3rem 0.6rem; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em; box-shadow: 0 4px 12px rgba(230, 57, 70, 0.4);">2024</div>
    <div style="padding: 1.5rem 2rem;">
      <div style="display: inline-block; background: #E63946; color: #fff; font-size: 0.65rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 4px; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">BioML Society &bull; UT Austin</div>
      <h3 style="color: #fff; font-size: 1.5rem; margin: 0 0 0.4rem 0; font-weight: 700;">Bits to Binders: CD20 Binder Design</h3>
      <p style="color: #E9C46A; font-size: 0.9rem; margin: 0 0 0.75rem 0; font-weight: 500;">Formed and led a global team for computational binder design targeting CD20</p>
      <p style="color: #ddd; font-size: 0.85rem; line-height: 1.5; margin: 0 0 1rem 0;">CD20 is a validated B-cell lymphoma target (rituximab, obinutuzumab). We designed de novo binders using the RFdiffusion &rarr; ProteinMPNN &rarr; AlphaFold2 pipeline as part of the <a href="https://www.biomlsociety.org/challenge" target="_blank" rel="noopener" style="color: #E9C46A;">BioML Society challenge</a>, organized at UT Austin with experimental validation.</p>
      <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-bottom: 1rem;">
        <span style="background: rgba(230,57,70,0.15); color: #ff6b6b; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.75rem;">Team Lead</span>
        <span style="background: rgba(230,57,70,0.15); color: #ff6b6b; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.75rem;">RFdiffusion</span>
        <span style="background: rgba(230,57,70,0.15); color: #ff6b6b; padding: 0.3rem 0.6rem; border-radius: 4px; font-size: 0.75rem;">B-cell Lymphoma</span>
      </div>
      <span style="color: #E9C46A; font-weight: 600; font-size: 0.9rem;">View on GitHub &rarr;</span>
    </div>
  </a>
</section>

<!-- ==================== RESOURCES ==================== -->
<h2 id="readings" style="margin-top: 3rem; padding-bottom: 0.5rem; border-bottom: 3px solid #27AE60; color: #1D3557;">Resources & Reading</h2>
<p style="color: #666; margin-bottom: 2rem;">A curated collection of the best writing on antibody engineering, protein design, and computational biology. Useful starting points whether you're new to the field or deep in the weeds.</p>

<!-- Primers & Overviews -->
<h3 style="color: #1D3557; margin: 2rem 0 1rem 0; font-size: 1.15rem;">Primers & Overviews</h3>

<div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
  <div style="padding: 0.85rem 1.25rem; background: #f8f9fa; border-left: 3px solid #27AE60; border-radius: 4px;">
    <a href="https://www.asimov.press/p/antibody-design" target="_blank" rel="noopener" style="font-weight: 600; color: #1D3557; text-decoration: none;">Designing Antibodies with AI</a>
    <span style="color: #888; font-size: 0.85rem;"> &mdash; Asimov Press</span>
    <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: #555; line-height: 1.5;">Accessible overview of how AI is reshaping antibody discovery, from structure prediction to generative design.</p>
  </div>
  <div style="padding: 0.85rem 1.25rem; background: #f8f9fa; border-left: 3px solid #27AE60; border-radius: 4px;">
    <a href="https://worksinprogress.co/issue/how-to-make-an-antibody/" target="_blank" rel="noopener" style="font-weight: 600; color: #1D3557; text-decoration: none;">How to Make an Antibody</a>
    <span style="color: #888; font-size: 0.85rem;"> &mdash; Works in Progress</span>
    <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: #555; line-height: 1.5;">The full journey of antibody development from biology to manufacturing, written for a general technical audience.</p>
  </div>
  <div style="padding: 0.85rem 1.25rem; background: #f8f9fa; border-left: 3px solid #27AE60; border-radius: 4px;">
    <a href="https://blog.booleanbiotech.com/ai-antibody-design-2025" target="_blank" rel="noopener" style="font-weight: 600; color: #1D3557; text-decoration: none;">AI Antibody Design: State of the Art (2025)</a>
    <span style="color: #888; font-size: 0.85rem;"> &mdash; Brian Naughton, Boolean Biotech</span>
    <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: #555; line-height: 1.5;">Comprehensive technical review of every major AI antibody design platform and method as of 2025.</p>
  </div>
</div>

<!-- Owl Posting -->
<h3 style="color: #1D3557; margin: 2rem 0 1rem 0; font-size: 1.15rem;">Owl Posting &mdash; Antibody Engineering Series</h3>

<div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
  <div style="padding: 0.85rem 1.25rem; background: #f8f9fa; border-left: 3px solid #6366f1; border-radius: 4px;">
    <a href="https://www.owlposting.com/p/a-primer-on-ai-in-antibody-engineering" target="_blank" rel="noopener" style="font-weight: 600; color: #1D3557; text-decoration: none;">A Primer on Machine Learning in Antibody Engineering</a>
    <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: #555; line-height: 1.5;">Antibody structure basics (Fab, CDRs, variable regions), key datasets like OAS, and a walkthrough of major ML models in the field.</p>
  </div>
  <div style="padding: 0.85rem 1.25rem; background: #f8f9fa; border-left: 3px solid #6366f1; border-radius: 4px;">
    <a href="https://www.owlposting.com/p/a-primer-to-the-next-generation-of-antibodies" target="_blank" rel="noopener" style="font-weight: 600; color: #1D3557; text-decoration: none;">A Primer on the Next Generation of Antibodies</a>
    <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: #555; line-height: 1.5;">What's broken about traditional antibodies, and three alternatives: scFvs, nanobodies (VHH), and antibody mimetics.</p>
  </div>
  <div style="padding: 0.85rem 1.25rem; background: #f8f9fa; border-left: 3px solid #6366f1; border-radius: 4px;">
    <a href="https://www.owlposting.com/p/better-antibodies-by-engineering" target="_blank" rel="noopener" style="font-weight: 600; color: #1D3557; text-decoration: none;">Better Antibodies by Engineering Targets, Not Antibodies (Nabla Bio)</a>
    <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: #555; line-height: 1.5;">Deep-dive on Nabla Bio's approach: engineer the target presentation, not just the antibody, to get better binders.</p>
  </div>
</div>

<!-- Escalante Bio -->
<h3 style="color: #1D3557; margin: 2rem 0 1rem 0; font-size: 1.15rem;">Escalante Bio &mdash; Practical Protein Design</h3>

<div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
  <div style="padding: 0.85rem 1.25rem; background: #f8f9fa; border-left: 3px solid #00b4d8; border-radius: 4px;">
    <a href="https://blog.escalante.bio/minibinder-design-is-just-not-that-hard/" target="_blank" rel="noopener" style="font-weight: 600; color: #1D3557; text-decoration: none;">Minibinder Design Is Just Not That Hard</a>
    <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: #555; line-height: 1.5;">A frank take on the current state of computational binder design&mdash;the tools work, and the barrier to entry is lower than you think.</p>
  </div>
  <div style="padding: 0.85rem 1.25rem; background: #f8f9fa; border-left: 3px solid #00b4d8; border-radius: 4px;">
    <a href="https://blog.escalante.bio/180-lines-of-code-to-win-the-in-silico-portion-of-the-adaptyv-nipah-binding-competition/" target="_blank" rel="noopener" style="font-weight: 600; color: #1D3557; text-decoration: none;">180 Lines of Code to Win the In Silico Portion of the Adaptyv Nipah Competition</a>
    <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: #555; line-height: 1.5;">How a minimal pipeline won the computational round of the same Nipah competition I participated in.</p>
  </div>
  <div style="padding: 0.85rem 1.25rem; background: #f8f9fa; border-left: 3px solid #00b4d8; border-radius: 4px;">
    <a href="https://blog.escalante.bio/winning-the-de-novo-portion-of-the-adaptyv-nipah-binder-competition/" target="_blank" rel="noopener" style="font-weight: 600; color: #1D3557; text-decoration: none;">Winning the De Novo Portion of the Adaptyv Nipah Binder Competition</a>
    <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: #555; line-height: 1.5;">The experimental results: which designs actually bound, and what that tells us about the in silico&ndash;to&ndash;wet lab gap.</p>
  </div>
  <div style="padding: 0.85rem 1.25rem; background: #f8f9fa; border-left: 3px solid #00b4d8; border-radius: 4px;">
    <a href="https://blog.escalante.bio/teaching-generative-models-to-hallucinate/" target="_blank" rel="noopener" style="font-weight: 600; color: #1D3557; text-decoration: none;">Teaching Generative Models to Hallucinate</a>
    <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: #555; line-height: 1.5;">On mosaic, Escalante's JAX-based PSSM optimization tool for protein design, and coaxing diffusion models into novel folds.</p>
  </div>
  <div style="padding: 0.85rem 1.25rem; background: #f8f9fa; border-left: 3px solid #00b4d8; border-radius: 4px;">
    <a href="https://blog.escalante.bio/petri-abstractions-for-lab-automation/" target="_blank" rel="noopener" style="font-weight: 600; color: #1D3557; text-decoration: none;">Petri: Abstractions for Lab Automation</a>
    <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: #555; line-height: 1.5;">Software abstractions for bridging the gap between computational design and automated wet-lab execution.</p>
  </div>
  <div style="padding: 0.85rem 1.25rem; background: #f8f9fa; border-left: 3px solid #00b4d8; border-radius: 4px;">
    <a href="https://blog.escalante.bio/your-experiment-has-a-runtime/" target="_blank" rel="noopener" style="font-weight: 600; color: #1D3557; text-decoration: none;">Your Experiment Has a Runtime</a>
    <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: #555; line-height: 1.5;">Thinking about biological experiments through the lens of computational complexity&mdash;wall-clock time matters.</p>
  </div>
</div>

<!-- Related Work -->
<h3 style="color: #1D3557; margin: 2rem 0 1rem 0; font-size: 1.15rem;">My Antibody Research</h3>
<p style="color: #666; margin-bottom: 1rem;">Analysis, benchmarks, and tools for de novo antibody design.</p>
<div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem;">
  <a href="/antibody-research/" style="padding: 0.5rem 1rem; background: #1D3557; color: #fff; border-radius: 6px; text-decoration: none; font-size: 0.9rem; font-weight: 600;">Antibody Research Hub &rarr;</a>
  <a href="/harness_for_rfantibody/" style="padding: 0.5rem 1rem; background: #00b4d8; color: #fff; border-radius: 6px; text-decoration: none; font-size: 0.9rem; font-weight: 600;">rfab-harness &rarr;</a>
  <a href="/proposal_for_devovo_ab-design_benchmark/" style="padding: 0.5rem 1rem; background: #E63946; color: #fff; border-radius: 6px; text-decoration: none; font-size: 0.9rem; font-weight: 600;">DADB Benchmark &rarr;</a>
  <a href="/flab_dataset_analyses/" style="padding: 0.5rem 1rem; background: #27AE60; color: #fff; border-radius: 6px; text-decoration: none; font-size: 0.9rem; font-weight: 600;">FLAb Analysis &rarr;</a>
</div>

  </div>
</main>
