---
layout: archive
title: "Lean-Bio"
permalink: /lean-bio/
author_profile: true
---

# Lean-Bio: a "Lean for biology", checkable by anyone 🧬∀

**The smallest honest version of the claim "we built a Lean for biology."**

A tiny biochemical modelling language (BSL) that compiles models into theorems the Lean 4 kernel checks: open, local, assumption-bounded, and runnable by anyone with no proprietary infrastructure.

<p align="center">
  <a href="https://github.com/inventcures/lean-bio" class="btn btn--primary">View on GitHub</a>
</p>

> **Credit:** thanks to **Nilesh Trivedi**, through whom I found out about Kim Branson's "Lean for biology" effort at GSK ([LinkedIn post](https://www.linkedin.com/feed/update/urn:li:activity:7474193699577425920/), via [lnkd.in/p/dXBPfYCJ](https://lnkd.in/p/dXBPfYCJ)).

## 🧭 Why this exists

Kim Branson (Chief AI Officer, GSK) [posted on LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7474193699577425920/) on 21 June 2026:

> I've often thought we need a "lean for biology". It didn't exist so we built it. [...] Details to come.
>
> And no, it's not just marking everything Sorry. Although some days it feels like that.

He later added that the data is the competitive moat, not the methods for verifying correctness.

If the method isn't the moat, it can be published, and borrowing the word *Lean* means it should be. Lean's authority comes from proof terms that anyone can inspect, replay and check outside the institution that produced them. A "Lean for biology" therefore owes: a formal specification language, a proof checker, runnable examples, explicit assumptions, parameter bounds, evidence grades, machine-checkable proof artifacts, and **zero dependency on proprietary infrastructure**.

Lean-Bio discharges that burden at minimum scale, in the open, to see whether the idea survives Lean's own standard. It is independent work, not affiliated with or derived from GSK.

## ✅ What it proves

The flagship theorem, kernel-checked in CI against Mathlib:

> For all rate constants `k1 ∈ [1,2]`, `k2 ∈ [3,4]`, any mass-conserving steady state of the reversible network `A ⇌ B` (total 10) has `A ∈ [6,8]` and `B ∈ [2,4]`.

The bounds are proved *from* the mass-action ODE vector field, not from a hand-written equation, so a mistake in the rate law could not slip past the kernel. A single general theorem (`schema`) covers every box of positive rate constants; each model's certificate is a one-line application of it.

The model that produces it:

```
model ReversibleAB {
  species A @init 6.0
  species B @init 4.0

  reaction forward : A -> B @mass_action(kf)
  reaction reverse : B -> A @mass_action(kr)

  param kf in [1.0, 2.0] @literature(citations=7)
  param kr in [3.0, 4.0] @experiment(replicates=5, p=0.01)

  invariant total_mass : A + B = 10.0
}
```

## 🧱 The ceiling it exposes

The real finding: **formal certainty attaches to the model statement, not to biological truth.** Biology's "axioms" are provisional, its parameters uncertain, its evidence graded. Lean doesn't erase that; it makes the boundary explicit. The honest "Lean for biology" is model-relative proof under stated assumptions, and nothing more.

| Lean standard | Biology reality |
|---|---|
| Open proof terms: anyone can inspect | Provisional axioms: mechanisms are incomplete and evolving |
| Local checker: anyone can run | Parameter uncertainty: estimates, noise, variability |
| Reproducible build: anyone can reproduce | Evidence grades: data quality varies |
| No private infrastructure | Model-relative: proofs certify the *model*, not ground truth |

## ⚙️ How it works

*   **BSL (Biological Specification Language):** mass-action, Michaelis–Menten and Hill kinetics; interval-bounded parameters; conservation invariants. Parser and physical-invariant typechecker in pure Python.
*   **Evidence-bound claims:** every fact traces to exact bytes of the `.bsl` source and is graded by how it was justified (`DERIVED_FROM_EXPERIMENT` / `LITERATURE_CONSENSUS` / `ASSUMED_FOR_MODELING`).
*   **`bsl verify`:** turns conservation laws and steady-state flux bounds into Lean obligations and discharges them with `omega` in Lean core, or *refutes* them with a counterexample.
*   **`bsl certify`:** recognises the verified network class, emits the certificate as an application of the general theorem, kernel-checks it and audits its axioms. It fails closed on anything outside the subset.

## 🚫 Why "no `sorry`" matters

Kim's joke has a sharp point. In Lean, [`sorry`](https://lean-lang.org/doc/api/Lean/Meta/Sorry.html) is a placeholder that lets an unfinished proof typecheck: it stands in for any missing term via the `sorryAx` axiom. A file full of `sorry` compiles, so "it builds" proves nothing on its own.

That's why every CI run ends with a `#print axioms` audit: the flagship may use only Lean's standard axioms, with no `sorry`, no custom `axiom`, and no `native_decide`. `bsl certify` prints `certified` only when Lean accepts the file *and* that audit passes.

## 🔧 What my fork adds

Lean-Bio builds on [BigBirdReturns/GSK-LeanBio](https://github.com/BigBirdReturns/GSK-LeanBio). Working on it in a Claude desktop project, I tightened the soundness story:

*   Exact rationals taken from the source text, instead of rounded floats.
*   Steady-state flux bounds made sound over the reals (homogenised before `omega` sees them).
*   Invariants checked before they are trusted; fractional conservation laws proved.
*   `bsl certify` applies one general Lean theorem, proved from the ODE, and kernel-checks it.
*   CI runs the Lean-backed tests, audits axioms, and diffs generated certificates against `bsl certify` output.
*   Byte-exact, platform-independent source evidence; escaped identifiers in emitted Lean.

## 🚀 Try it

```bash
git clone https://github.com/inventcures/lean-bio.git
cd lean-bio

# zero-dependency: parse, typecheck, emit evidence-bound claims, emit Lean
python -m bsl check   examples/A-enzyme-kinetics/model.bsl
python -m bsl compile examples/A-enzyme-kinetics/model.bsl --out out/enzyme

# real Lean kernel checks (needs a Lean 4 toolchain, or use the Dockerfile)
python -m bsl verify  examples/D-linear-pathway/model.bsl
# certify needs the Mathlib project built once: (cd lean && lake exe cache get && lake build)
python -m bsl certify examples/E-reversible/model.bsl --lean-out lean/BslLean/Generated
```

## 🔗 Links

*   Repository: [inventcures/lean-bio](https://github.com/inventcures/lean-bio)
*   Upstream: [BigBirdReturns/GSK-LeanBio](https://github.com/BigBirdReturns/GSK-LeanBio)
*   Kim Branson's post, found via Nilesh Trivedi: [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7474193699577425920/) (via [lnkd.in/p/dXBPfYCJ](https://lnkd.in/p/dXBPfYCJ))
*   Lean docs on `sorry`: [Lean.Meta.Sorry](https://lean-lang.org/doc/api/Lean/Meta/Sorry.html)
