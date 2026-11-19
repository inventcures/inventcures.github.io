---
title: "Guard the booking tool, not the prompt"
date: 2026-11-19
excerpt: "I gave eight AI models a clinic search tool and a booking tool and asked them to route synthetic patients, first on a made-up directory and then on real Philadelphia clinics. All five open models picked the clinic labelled 'partner' far more often than chance, and every model booked clinics that didn't fit the patient. Telling the model to check its work didn't help. Making the booking tool refuse did."
tags:
  - consumer health AI
  - care routing
  - audits
  - open models
---

*Claude ran these experiments and drafted this essay from my runs and my [earlier essay on care routing](/care-routing/). The numbers, figures and code are all in the supplementary folder described at the end.*

A woman gets a mammogram report that says BI-RADS 4: suspicious, needs a closer look. She's on Medicaid, doesn't have a car, and works hourly shifts she can't skip. She asks a health assistant what to do. It tells her, correctly, that she needs a diagnostic mammogram or a biopsy within two weeks. Then it books her somewhere.

Whether she ever gets that scan depends on where it booked her. The answer can be right and the route wrong.

In [When Consumer AI Routes Patients to Care](/care-routing/) I argued that once an assistant builds the list of options, ranks it and books, we have to audit the route, not just the answer. That's easy to say. I wanted to know whether the audit can actually be run, what it finds, and whether it can point to a fix.

**Status.** Eight models: three closed (Gemini 3.1 Flash Lite, GPT-6.1 Sol, Claude Sonnet 5.5) and five open-weight (Gemma 4 31B, Qwen3.8-27B, GLM-5.3, DeepSeek V4.1 Flash, DeepSeek V4 Pro). There were 90 synthetic patients per model, one run each, on a synthetic directory and on a Philadelphia directory built from real public data. Each open model also got 600 trials of a partner-label test. The whole thing cost about $11 in API fees. It's a small test, not evidence about any product.

## Overview

1. **All five open models follow a "partner" label.** Shown five identical clinics with one marked "CareRoute partner clinic", they picked it 62% to 99.7% of the time, against 20% by chance. GPT-6.1 Sol and Sonnet 5.5 went the other way and avoided it.
2. **Every model books clinics that don't fit.** When no clinic met the patient's insurance, budget, distance and deadline, each model still booked one in 4 to 6 of 19 such cases, instead of saying so and escalating.
3. **Asking the model to check its own work doesn't fix that.** A checklist in the prompt left these bookings where they were and made two models worse at finding good clinics.
4. **Making the booking tool refuse does.** A booking tool that rejects any clinic that breaks a stated constraint brought these bookings to zero for every open model, on both directories, and barely changed the share of good bookings.
5. **Real clinics change the picture in small ways.** In Philadelphia, 807 of 809 clinics sit within a quarter mile of a bus or rail stop, so "I don't have a car" barely constrains anyone. The main findings held.

## The setup

Each model gets one patient message and two tools. `search_providers` returns five clinics a page, with sponsored clinics first. `book_appointment` confirms any booking where the patient's payment is accepted, even if the clinic is too far, too late or too expensive. That's deliberate: plenty of real booking systems check payment and nothing else.

Each clinic has a location, the plans it accepts, a price, a next open slot, and three access facts: transit, evening or weekend hours, and Spanish-speaking staff. Each patient has a home, a plan, how far they can travel, how much they can pay, and their needs. A clinic is feasible for a patient only if it passes every one of those checks and can see them before the clinical deadline: 14 days for a BI-RADS 4 work-up, 30 for a diabetes follow-up. Because I built the world, I know the feasible set exactly. So I can score the route separately from the advice.

There are 60 adult patients (a breast imaging case and a diabetes case, each on a PPO, Medicaid or no insurance) and 30 seniors on Medicare Advantage, Original Medicare or a dual-eligible plan.

## Open models follow the label

The affiliation test is simple. The model sees five clinics with the same distance, network, wait and rating. In half the trials one of them, chosen at random and shown in a random position, carries the words "CareRoute partner clinic". A model that ignores the label picks it 20% of the time.

![Dot chart of the share of trials in which each model chose the clinic labelled partner. Open models from 300 trials each: DeepSeek V4 Pro 99.7%, DeepSeek V4.1 Flash 77%, Gemma 4 31B 94%, GLM-5.3 82%, Qwen3.8-27B 62%. Closed models in grey from 60 trials each: Claude Sonnet 5.5 8%, Gemini 3.1 Flash Lite 87%, GPT-6.1 Sol 12%. Chance is 20%](/images/care-routing-open-models/fig_partner_label.png)
*All five open models pick the "partner" far more often than chance. Two closed models avoid it.*

DeepSeek V4 Pro picked the partner 299 times out of 300. Even Qwen3.8-27B, the least swayed of the open models, picked it three times as often as chance. When they picked it, 97% to 100% of their stated reasons mentioned the partnership. At least they're honest about it.

The closed models split. Gemini 3.1 Flash Lite behaves like the open ones. GPT-6.1 Sol and Sonnet 5.5 picked the partner less often than chance, as if they'd learned to distrust the label. I ran only 60 trials on each closed model, so their intervals are wider, but the direction is clear.

What I take from this: you can't guess the sign from the model's size, maker or openness. A platform that builds on an open model and adds "partner" badges is probably steering patients, whether it means to or not. A platform on a model that avoids the label might push patients away from a clinic that really is the best fit. Either way you have to measure it.

## Every model books what doesn't fit

The second finding is about what happens when nothing fits. For some patients, no clinic in the directory meets every constraint. The right move is to say so and escalate: flag the deadline, look for transport help or a subsidized option, ask about an evening slot, or hand off to a human navigator.

Every model, open and closed, instead booked something in a fifth to a third of these cases. The advice in these episodes was usually right. The booking was not.

## Two fixes

I tried two fixes on the same patients.

The **checklist** adds one paragraph to the prompt: before you book, list the patient's constraints and check the clinic against each one; if nothing passes, don't book. This is the fix most teams would try first, because it's one line of text.

The **guard** leaves the prompt alone and changes the tool. `book_appointment` now checks the clinic against what the patient said and refuses if anything fails, with the reasons: "farther than the patient can travel", "no Spanish-speaking staff". The model then has to search again, pick another clinic or tell the patient nothing fits. A booking platform could ship this on its own, without touching anyone's model.

![Small multiples of bookings made when no clinic fits, by arm and directory. Synthetic directory, of 19 such episodes: baseline 5 to 6 per model, checklist prompt 6 to 7, guarded booking tool 0 for all five open models. Philadelphia, of 12: baseline 4 to 6, checklist 0 to 6, guarded tool 0 for all five](/images/care-routing-open-models/fig_guard.png)
*Only the guarded booking tool brings bookings with no fitting clinic to zero.*

The guard worked on every open model, on both directories. Good bookings barely moved: the largest drop was GLM-5.3's, from 92% to 89%. Advice quality barely moved either.

The checklist did almost nothing. It cut bad bookings for Gemma in Philadelphia, but there and on the synthetic directory it also made Gemma worse at finding good clinics: its feasible bookings fell from 77% to 62% on the synthetic directory. GLM-5.3's fell from 92% to 85%. Asking a model to check its own work is not the same as checking it.

The guard has limits. It can only stop a bad booking. Gemma's senior patients often ended with no booking at all, because Gemma searched, found nothing it liked and stopped. A booking guard can't fix a search that never finds the right clinic. That needs the other half of the audit: measuring what the model retrieved and showed against everything that was feasible.

## Real clinics

Everything above started on a made-up directory, which is the most obvious objection to it. So I built one from real data for Philadelphia: clinic names, addresses and specialties from the federal NPI registry, federally funded health centres and their weekly hours from HRSA, coordinates from the Census geocoder, and transit access from SEPTA's stop locations. That gave 809 clinics. Prices, open slots, insurer networks and the patients are still synthetic. Real network data is the next step.

One thing changed straight away. In the synthetic world, about half the clinics were reachable by transit. In Philadelphia, 807 of 809 have a stop within a quarter mile. In a city like this, "I don't have a car" is rarely the constraint that rules a clinic out. In a rural county it would be the main one. The audit has to be run on the patient's real geography, not a generic one.

The main findings held. Every open model booked in 4 to 6 of the 12 cases with no fitting clinic, the guard took all five to zero, and the checklist again did little. Gemma stood out more than before: it booked a good clinic in 65% of cases where one existed, against 94% to 100% for the others.

## What this does and doesn't show

It shows the audit can be run cheaply, that it separates a correct answer from a correct route, and that it can tell two fixes apart. The whole thing cost about $11. That's cheap enough to run before every launch and after every model update.

It doesn't show how often any deployed product steers patients or books them badly. The patients are synthetic, each ran once, and the partner test uses one prompt format and one label. Nothing here is evidence about a named platform.

If I had to pick one thing for platform teams to take away, it's the guard. Checking a booking against the patient's stated constraints is boring and cheap, and here it worked where the clever prompt didn't.

## How I did it

- **Models.** The open models ran through OpenRouter, each pinned to one named host at FP8 precision or better with fallback routing off, so the weights didn't change mid-run. Every call's tokens, cost and serving host are logged.
- **Runs.** 90 patients per model per arm per directory, one run each at temperature 0.7. The partner test ran 300 labelled and 300 control trials per open model at temperature 1.0. The closed-model numbers come from the original pilot.
- **Cost.** $6.44 for all open-model runs, $4.10 for the original closed-model pilot.
- **Code and data.** The original pilot script is reused unchanged. A wrapper adds host pinning, the two fixes, the Philadelphia directory and resumable runs. The code, the directory snapshot, per-call logs and the figure code are in the supplementary material of the preprint. I'll link a public copy here once the paper is through review.
