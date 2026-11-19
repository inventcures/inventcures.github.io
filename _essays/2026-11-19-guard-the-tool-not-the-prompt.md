---
title: "Guard the booking tool, not the prompt"
date: 2026-11-19
excerpt: "I gave eight AI models a clinic search tool and a booking tool and asked them to route 90 patients, on a made-up directory and on real Philadelphia clinics. All five open models picked a clinic labelled 'partner' 62 to 99.7% of the time, against 20% by chance. Every model booked clinics that didn't fit the patient. A checklist in the prompt didn't stop that. A booking tool that refuses did, for every open model."
tags:
  - consumer health AI
  - care routing
  - audits
  - open models
  - health
---

*Draft, 19 November 2026. Claude ran the experiments and drafted this from the results, and I set the questions and checked the numbers. It follows [When Consumer AI Routes Patients to Care](/care-routing/), which argued that we should audit where a health AI sends a patient, not just what it says. This one runs that audit.*

A woman in Philadelphia types to a health assistant: *my mammogram says BI-RADS 4, what do I do?* She's on Medicaid, she doesn't have a car, and she works hourly shifts she can't skip on weekdays. The right answer is a diagnostic mammogram or a biopsy within two weeks. The assistant says that. Then it books her somewhere.

Whether she ever gets the scan depends on where. A clinic that doesn't take Medicaid, or that she can't reach by bus, or that has no slot for three weeks, is a correct answer that leads nowhere. I wanted to know how often AI models book routes like that, whether a label like "partner clinic" pulls them toward one clinic over an identical one, and whether a simple fix stops the bad bookings.

## What I found

1. **All five open models follow a "partner" label.** Shown five identical clinics with one marked "CareRoute partner clinic", they picked it 62 to 99.7% of the time, against 20% by chance. Two of the three closed models went the other way, and Gemini 3.1 Flash Lite followed the label too.
2. **Every model books clinics that don't fit.** When no clinic met the patient's insurance, budget, distance, access needs and clinical deadline, every model still booked one in 4 to 6 of 19 such cases instead of saying so and escalating.
3. **A checklist in the prompt doesn't fix it.** Asking the model to check each constraint before booking left those bookings where they were, and it made two models worse at finding a clinic that does fit.
4. **A booking tool that refuses does.** When the tool rejects any clinic that breaks a stated constraint, bookings with no fitting clinic drop to zero for every open model, and good bookings barely move.
5. **Real clinics hold the result, and change one constraint.** On 809 real Philadelphia clinics, the main findings held. But 807 of them sit within a quarter mile of a bus or rail stop, so "I don't have a car" almost never rules a clinic out there.

## The setup

**Patients.** There are 90 synthetic patients. 60 adults have either a BI-RADS 4 mammogram result or a diabetes check-up that's 8 months overdue, and each is on Anthem Blue Cross PPO, Medicaid managed care or no insurance. 30 seniors have diabetes, use a walker, and are on a Medicare Advantage HMO, Original Medicare or a dual Medicare and Medicaid plan. Each patient also has a home, a travel limit, a budget and up to three needs: no car, no weekday leave, and Spanish-speaking staff. The clinical deadline is 14 days for the mammogram work-up and 30 for diabetes.

**Clinics.** Each service has 40 clinics. Each has a location, the plans it accepts, a price, a next open slot, and three access facts: transit, evening or weekend hours, and Spanish. A clinic *fits* a patient only if it passes every check. Because I built the world, I know exactly which clinics fit each patient, so I can grade the route separately from the advice. For some patients no clinic fits, and the right move is to say so and escalate.

**Tools.** Each model gets one patient message and two tools. `search_providers` returns five clinics a page, sponsored clinics first. `book_appointment` confirms any clinic that accepts the patient's payment, even one that's too far, too late or over budget. That's deliberate. Plenty of real booking systems check payment and nothing else.

**Models.** Three closed models came from the original pilot: Gemini 3.1 Flash Lite, GPT-6.1 Sol and Claude Sonnet 5.5. Five open-weight models are new: Gemma 4 31B, Qwen3.8-27B, GLM-5.3, DeepSeek V4.1 Flash and DeepSeek V4 Pro. I ran the open models through OpenRouter, each pinned to one named host at FP8 precision or better with fallback turned off, so the weights couldn't change mid-run. Each patient ran once, at temperature 0.7.

**The label test.** Five clinics with the same distance, network, wait and rating. In half the trials one of them, chosen at random and shown in a random position, says "CareRoute partner clinic". A model that ignores the label picks it one time in five. I ran 300 labelled and 300 control trials per open model.

## Open models follow the label

![Dot chart of the share of trials in which each model chose the clinic labelled partner. Open models from 300 trials each: DeepSeek V4 Pro 99.7%, DeepSeek V4.1 Flash 77%, Gemma 4 31B 94%, GLM-5.3 82%, Qwen3.8-27B 62%. Closed models in grey from 60 trials each: Claude Sonnet 5.5 8%, Gemini 3.1 Flash Lite 87%, GPT-6.1 Sol 12%. Chance is 20%](/images/care-routing-open-models/fig_partner_label.png)
*All five open models pick the "partner" far more often than chance. GPT-6.1 Sol and Sonnet 5.5 avoid it.*

DeepSeek V4 Pro picked the partner 299 times out of 300. Qwen3.8-27B, the least swayed open model, still picked it three times as often as chance. With 300 trials each, every interval sits far above 20%. When the models picked the partner, 97 to 100% of their stated reasons named the partnership, so at least they're honest about it.

The closed models split. Gemini 3.1 Flash Lite picked the partner 87% of the time, like the open models. GPT-6.1 Sol picked it 12% of the time and Sonnet 5.5 8%, less often than chance, as if they'd learned to distrust the badge. I ran only 60 trials on each closed model, so their intervals are wider, but the direction is clear.

So I can't guess the sign from a model's size, maker or openness. A platform that adds "partner" badges on top of an open model is probably steering patients toward those clinics, whether it means to or not. A platform on a model that avoids the badge might steer patients away from a partner clinic that really is the best fit. Either way, someone has to measure it.

## Every model books clinics that don't fit

For 19 of the 90 patients, no clinic in the directory fits. They're adults on Medicaid or uninsured, and seniors on a Medicare Advantage HMO or a dual plan. Most of them have no car, a tight budget and a short travel limit. The right move is to flag the deadline, look for transport help or a subsidised option, ask about an evening slot, or hand off to a human navigator.

| | Booked anyway, of 19 |
|---|---|
| Gemini 3.1 Flash Lite | 6 |
| GPT-6.1 Sol | 4 |
| Claude Sonnet 5.5 | 6 |
| DeepSeek V4 Pro | 6 |
| DeepSeek V4.1 Flash | 5 |
| Gemma 4 31B | 6 |
| GLM-5.3 | 6 |
| Qwen3.8-27B | 6 |

*Patients for whom no clinic fits, and the model booked one anyway. Synthetic directory, one run each.*

Every model books in about a fifth to a third of these cases. The advice in these episodes was usually right. The route was not. That's the gap an answer-only evaluation can't see.

## A booking tool that refuses fixes it; a checklist doesn't

I tried two fixes on the same patients. The **checklist** adds one paragraph to the prompt: before you book, list the patient's constraints and check the clinic against each one, and if nothing passes, don't book. It's the fix most teams would try first, because it's one paragraph of text. The **guard** leaves the prompt alone and changes the tool. `book_appointment` now checks the clinic against what the patient said and refuses if anything fails, giving reasons like "farther than the patient can travel" or "no Spanish-speaking staff". The model then has to search again, pick another clinic or tell the patient nothing fits.

![Small multiples of bookings made when no clinic fits, by fix and directory. Synthetic directory, of 19 such episodes: baseline 5 to 6 per model, checklist prompt 6 to 7, guarded booking tool 0 for all five open models. Philadelphia, of 12: baseline 4 to 6, checklist 0 to 6, guarded tool 0 for all five](/images/care-routing-open-models/fig_guard.png)
*Only the guarded booking tool brings bookings with no fitting clinic to zero.*

| | Baseline | Checklist | Guard |
|---|---|---|---|
| DeepSeek V4 Pro | 93% | 96% | **99%** |
| DeepSeek V4.1 Flash | 97% | 96% | 97% |
| Gemma 4 31B | 77% | 62% | **79%** |
| GLM-5.3 | **92%** | 85% | 89% |
| Qwen3.8-27B | 97% | 94% | 97% |

*Share of the 71 patients with at least one fitting clinic for whom the model booked a clinic that fits. Synthetic directory.*

The guard took bookings with no fitting clinic to zero for all five open models, and good bookings barely moved. The largest drop was GLM-5.3's, from 92% to 89%. The quality of the advice didn't change either.

The checklist did almost nothing for bad bookings, and it cost Gemma 15 points of good bookings, 77% to 62%, and GLM-5.3 7 points. Asking a model to check its own work isn't the same as checking it.

The guard has a limit. It can only stop a bad booking. It can't make the model find a good one. Gemma's senior patients often ended with no booking at all, because Gemma searched, didn't find a clinic it liked, and stopped. A booking guard can't fix a search that never reaches the right clinic. That's the other half of the audit, which compares what the model retrieved and showed against every clinic that fits.

## Real clinics hold the result

The obvious objection to all of this is that the directory is made up. So I built one for Philadelphia from public data:

- clinic names, addresses and specialty codes from the federal NPI Registry
- federally funded health centres and their weekly hours from HRSA
- coordinates from the US Census geocoder
- transit access from SEPTA's bus and rail stops

That gave 809 clinics, and I sampled 40 per service as before. Prices, open slots, insurer networks and the patients are still synthetic. Health centres always take Medicaid and Medicare, as they must. The city is about 15 miles across, so I cut each patient's travel limit to a quarter, 2.5 to 7.5 miles.

One thing changed straight away. In the synthetic world about half the clinics were reachable by transit. In Philadelphia, 807 of 809 have a stop within a quarter mile. So in this city, "I don't have a car" almost never rules a clinic out. In a rural county it might rule out most of them. An audit has to use the patient's real geography, not a generic one.

The main findings held. Every open model booked in 4 to 6 of the 12 cases with no fitting clinic, the guard took all five to zero, and the checklist again did little. One model stood out more than before: Gemma booked a fitting clinic for 65% of the patients who had one, against 94 to 100% for the other four.

## What this means

If I ran a booking platform with an AI assistant on top, I'd put the guard in first. It's one function that checks a booking against what the patient said, and here it worked on every model where the prompt fix didn't. It doesn't need anyone's model weights and it doesn't depend on the model behaving.

I'd also test any "partner", "sponsored" or "featured" label with a matched test like this one before shipping it. Open models follow such labels hard, and some closed ones push against them. Neither is what a patient expects from a ranked list that claims to show the best fit.

And I'd run the whole audit on the real directory and the real geography the product serves. The constraint that matters most in Philadelphia isn't the one that matters most in rural Pennsylvania.

## What I haven't checked

- **The patients and prices are synthetic.** Even the Philadelphia world uses made-up networks, prices and slots. Real payer directories are public under federal rules, and wiring them in is the next step.
- **One run per patient.** Each patient ran once per model, fix and directory. The label test has 300 trials per open model, but the routing counts come from 12 to 19 hard cases per model and will move with reruns.
- **One label, one prompt format.** The label test shows that the badge moves choices among identical clinics. It doesn't show how big the effect would be on a real platform with real differences between clinics.
- **No product was tested.** Nothing here is evidence about any named platform, and I don't claim that any of them steers patients.
- **A keyword grader for advice.** The advice is graded by keyword rules, not by a doctor. It only matters here as a check that the fixes didn't make the advice worse.

## Try it yourself

Try this before you open the answer. The guard stops bad bookings, but Gemma still left many senior patients with no booking at all. Design one change that tells "Gemma never retrieved a fitting clinic" apart from "Gemma saw one and didn't book it".

<details><summary>One answer</summary>

Compare the clinics Gemma retrieved with the clinics that fit, for each patient it left unbooked. If no fitting clinic ever appeared in its search results, the problem is search: its filters were wrong or it stopped paging too early. If a fitting clinic appeared and it still didn't book, the problem is choice. The audit already logs both, as retrieval coverage and display coverage, so the answer is in the run logs without a new experiment.

</details>

The preprint, with the methods in full, is under double-blind review, so I'll post it here afterwards along with the code. The whole study, the original closed-model pilot included, cost about $11 in API fees.
