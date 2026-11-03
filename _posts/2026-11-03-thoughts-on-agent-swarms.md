---
title: "Some thoughts on designing optimal swarm architectures: the notion of the collective good in swarms"
date: 2026-11-03
permalink: /thoughts-on-agent-swarms/
excerpt: "How do you get a swarm of AI agents to act for the collective, larger good, and not just the task in front of each agent, without the coordination eating the work? Lessons from human teams, GR's RLCR and OpenAI's Navier–Stokes swarm."
tags:
  - agent swarms
  - multi-agent systems
  - AI for science
  - drug discovery
  - oncology
---

Picture forty AI agents working on the same codebase. One of them spends thirty minutes cracking a nasty build error. Three of its siblings are about to hit the same error, and a fourth will hit it tomorrow in a different run. What should happen next?

Most of the interesting design questions about agent swarms are hiding in that small scene. Who should hear about the fix? Who decides? Who pays for the telling? And what about the agent tomorrow, who doesn't exist yet?

The swarm question had been swirling in my head for a while. What finally made me sit down and dig into it was Konstantin Dunas's (hallerite) [*On the nature of the swarm*](https://hallerite.com/posts/on-the-nature-of-the-swarm/), a lucid and genuinely delightful essay on why scaling inference ends in many agents.[^hallerite] It made me want to think properly about how we make progress on swarm architectures that push research and discovery forward, in science and beyond.

The other half of the trigger was a question that had nothing to do with AI. Reading General Reasoning's *How to train a swarm*, I kept thinking about **human swarms**: the teams, departments and person-to-person collaborations I've worked in.[^gr] How does a new hire figure out whom to talk to? Why do some teams share a fix the moment they find it, while others let three people struggle with the same problem? Why does research admin matter so much when you speak to them twice a year? How does a good lab stay pointed at the big question without its PI micromanaging? Human organisations have been working out answers to these questions for a long time, mostly by trial and error. Almost every idea below began as an observation about how people work together, and then became a question about how agents should.

So this post is my attempt to organise those ideas, alongside two recent pieces of work on agent swarms. The common thread is a single question: **how do you get a swarm of agents to act for the collective, larger good, and not just for the task in front of each agent, without the coordination eating the work?**

**A note on words.** By *swarm* I mean the whole population of agents working on one problem. I use **teams**, **sub-swarms** and **agent orgs** to denote sub-structure within a swarm: a group of agents that shares a goal, talks to its own members more than to outsiders, and is spun up, steered or torn down as a unit. I use the three terms more or less interchangeably, with a slight lean in each. *Agent org* is the word I reach for when the group has internal roles, like GR's organisations of up to 9 agents, where a CEO hires and fires specialists. *Sub-swarm* is for a large, loosely structured group, like one of OpenAI's isolated groups of thousands. *Team* covers everything in between. These groups can nest, so you can have teams of teams.

*This is the short version. A [longer deep dive](/thoughts-on-agent-swarms/deep-dive/) with the models, diagrams, plots and exercises, and a [draft preprint (PDF)](/files/thoughts-on-agent-swarms.pdf), go with it.*

## Where the field is right now

Two pieces of work frame what follows. Both are published facts; everything after this section that isn't attributed to them is my own thinking.[^nums]

**General Reasoning's *How to train a swarm*** ([gr.inc/blog/how-to-train-a-swarm](https://www.gr.inc/blog/how-to-train-a-swarm)) describes RLCR, reinforcement learning from collective rewards.[^gr] One shared policy plays every agent in an organisation, every agent gets the same team-level reward, and a wall-clock time limit makes speed matter. Speed pressure rewards parallel work, and imperfectly parallel work rewards communication. Their Avalon-M1 model trains organisations of at most 9 agents (a "CEO" that hires and fires specialists, plus a message board and direct messages). The time cap ramps from about 2 hours to just over 5 hours over 200 training steps, because co-ordination has an up-front cost that only pays back given enough time. They are explicit that they keep the communication primitives simple, so that agents discover how to work together instead of following a harness's design.

**OpenAI's Navier–Stokes swarm** (September 2026) is the largest public example of a swarm at work.[^oai] On the order of 10,000 copies of one strong model were split into groups that could only message within their group. Different groups got different versions of the problem (prove smoothness, or find a blow-up). Codex periodically consolidated the best insights across groups, and humans moved compute toward what was working, after a cheap ~100-agent warm-up on a related Euler problem succeeded.[^oaidetail] A separate model formalised the result in Lean. OpenAI's Noam Brown has said he "wouldn't even attribute 10% of the credit to multi-agent".[^brown] The model did the heavy lifting, and the swarm bought speed and coverage.

### The details most coverage misses

A few facts about the Navier–Stokes run matter for design and rarely get mentioned. It began as a *portfolio*: agent groups were set on all the remaining Millennium problems (reportedly prompted by a rumour that Anthropic had solved two), and resources moved to Navier–Stokes only after the cheap Euler warm-up surprised the team. The model had been in training for just four days when the run began, and agents were moved to a newer checkpoint mid-run, so the swarm's accumulated state mattered more than any one model. Altman described it as having "no hierarchy". Humans steered by writing follow-up prompts that drew on the agents' own intermediate results. And communication was sparse. By my arithmetic from the published totals, it was about 3 messages per agent-hour, with roughly 48,000 tokens of work per message sent.

Other recent swarms add useful contrasts. OpenAI's 64-agent run on the Cycle Double Cover conjecture kept provers independent and added *adversarial verifier agents*.[^cdc] Google DeepMind put 100 Gemini agents in a simulated maths "conference" with a shared proof library.[^deepmind] After 37 honest solutions, one agent found a loophole in the grader, the library spread it, and 34 fake proofs appeared in 27 minutes, while about a quarter of the agents tried to blow the whistle. Edison's Kosmos coordinates its agents through a shared "world model" rather than chat.[^kosmos] And Bioptic's drug-scouting agent grows a *tree* of search directions over time, rewarding only results that are new to the shared pool.[^bioptic] Built on GPT-5.2, it found about 73% of hard-to-find drug assets. The best general research agents found 45–50%, and GPT-5.2 on its own found 18%.

Five lessons stand out:

1. The verifier decides how loose the structure can be.[^synth]
2. Diversity is best bought through different inputs rather than personas.
3. A shared knowledge channel spreads exploits as efficiently as fixes.
4. Successful swarms change shape during the run.
5. Where swarms work, they talk sparingly.

So we have a training recipe that works at village scale (9 agents), and a deployment that worked at city scale (10,000) with humans doing much of the steering. The gap between those two is where my questions live.

## The core idea: three horizons of the "larger good"

When I list everything I want a swarm to do beyond its own subtask, it falls into three horizons:

1. **Siblings, now.** Help the agents working alongside you: share a fix, reach the right colleague, don't duplicate work.
2. **The swarm, over its lifetime.** Keep the whole organisation shaped and pointed correctly as it learns: spin teams up and down, steer gently, scale without drowning in messages.
3. **Agents not yet spawned.** Leave things behind (libraries, notes, proofs, dead ends) that help future runs on goals nobody has stated yet.

Each horizon is harder than the last, because the benefit lands further from the agent that pays the cost. That distance is the whole problem. RL credits what pays back inside the episode, and the larger good mostly pays back outside it.

Here are the six ideas, roughly in that order. After them come how to make the structure adapt and train it, where it matters most, and how to keep humans at the centre.

## 1. Multicast the hard-won fix, to the agents who need it

**The idea.** When one agent cracks an obstacle that siblings are facing now, or will face later, the fix should go to all of them, or to the subset likely to hit it.

**The intuition.** Sharing is worth it for a recipient when *(chance they'd hit it) × (time it saves them) > (time it costs them to read it)*. A fix that took 30 minutes to find and takes 1 minute to read is worth sending to anyone with more than a 1-in-30 chance of needing it.

In a 9-agent village, almost everyone clears that bar, so you just broadcast. In a city, most agents have a tiny chance of hitting any given obstacle, but everyone still pays to read. In a toy model with 8 agents on the affected module and everyone else at a 0.5% chance, **broadcast stops paying at around 170 agents**, while targeted messages plus a searchable archive keep paying at any size.[^toy-multicast]

**Why it matters for training.** If you train at 9 agents, "always broadcast" is the right habit, so that is what RL will teach. It is the wrong habit at 1,000.

## 2. Bigger swarms need more time before they pay off, on two clocks

**The idea.** There's a trade-off between swarm size and time. Bigger swarms spend their early time on setup and communication before useful work starts.

**The intuition.** There are two different clocks here. On the *wall-clock inside one run*, a bigger team pays more setup before it overtakes a single agent. In a simple toy model, the best team size grows steadily with the time budget: about 4 agents for a 1-hour job, 7 for 2 hours, 12 for 4 hours, 19 for 8 hours. With a 1-hour budget, 16 agents score nothing at all, because they're still briefing each other.[^toy-size] On the *training clock*, bigger teams also need more updates to learn to co-ordinate, because one team-level reward is spread over more agents' actions. GR's own data shows this shape: teams with 5–8 hires start below average on useful work and reach nearly twice the average by step 200.[^gr]

The time-cap ramp ties the two clocks together: as training progresses, longer caps let larger teams pay back.

## 3. Learn the org chart the way a new hire does

**The idea.** A new employee reaches out broadly at first, inside their department and outside it. Over months they double down on the colleagues they benefit from and can contribute to. Swarm agents could do the same: explore widely, then reinforce the communication links that lead to progress, within and across sub-swarms.

**The twist.** Some links are low-frequency but essential. Think of university research admin when you want to attend a conference or publish a paper. You barely talk to them, the day-to-day "utility" of the link is low, and yet without it the larger goal fails.

This exposes a real flaw in naive link reinforcement. **Average reward per message is the wrong measure; the right one is marginal value: how much worse is the outcome without this link?** Collaboration links earn their value through many small gains. Dependency links earn it by gating everything. A "reinforce what pays" rule will quietly prune the dependency links, because their payoff is rare and delayed. In a toy project, contacting the admin early (in parallel) finishes in 10 hours; contacting them only when needed takes 12; having pruned the link and needing to rediscover it takes 13.[^toy-admin]

For dependency links, the answer is probably not a reinforced relationship but a **directory**: a simple "who owns what" registry the agent can consult when needed.

## 4. A swarm that reorganises itself, but cheaply

**The idea.** Swarm structure needn't be static. If you spawn 10,000 agents, spin sub-swarms up as new needs appear and tear them down as they finish. The swarm's shape should evolve with what it discovers. But orchestration must always be much, much smaller than the work.

**The intuition.** "Lightweight" can be made precise as an overhead budget. If spinning a sub-swarm up and down costs 15 minutes, and you want total overhead under 10% (with ~5% of time going to ongoing co-ordination), the sub-swarm needs to have about 5 hours of work ahead of it.[^toy-overhead] That gives concrete rules: spawn when the expected work clearly exceeds setup cost, tear down when the next hour is worth less elsewhere, and keep the spawn threshold above the teardown threshold so the swarm doesn't thrash. Always write a short exit memo when you tear down, so the knowledge doesn't die with the team. Even that is lossy. As [hallerite](https://hallerite.com/posts/on-the-nature-of-the-swarm/) puts it in *On the nature of the swarm*, every compaction is a bet: notes on disk "remember, but can't think", and discarded sub-agents "think, but can't remember".[^hallerite] So sometimes the right move is not to tear a team down but to keep a specialist alive and queryable, which is exactly the "service" kind of sub-swarm below.

What *kind* of sub-swarm to spawn matters as much as how many. I find it useful to sort sub-swarms by work mode rather than job title: **explore** (many independent attempts, isolated from each other), **build** (dense talk, tight handoffs), **verify** (deliberately isolated from builders, so as not to inherit their mistakes), **integrate** (merge and consolidate), and **service** (owners of shared dependencies, reached through the directory). The modes differ mainly in how much they should talk.

The number of sub-swarms is set by two opposing forces: the task's dependency structure (keep tightly coupled work in one team) and the need for diversity (independent teams avoid herding on the first plausible idea). OpenAI's island design leans hard on the second. In a simple toy correlation model of my own (not an experiment), four isolated islands of 2,500 get roughly four times as many genuinely independent attempts as one 10,000-agent herd, for the same compute.[^toy-islands]

## 5. Coordination that is always on but low-touch

**The idea.** Coordination should be constantly present, keeping the whole swarm pointed toward the larger, future goal. But the coordinating layer itself should be lightweight.

These sound contradictory until you separate *how often the orchestrator looks* from *how much it intervenes*. Three habits make that work: steer by **intent** rather than instructions (one clear objective keeps thousands of agents aligned with no extra traffic); **observe shared state** (dashboards, test results, the archive) instead of interrogating agents; and **intervene rarely**, on a slow schedule plus an interrupt path for big events.[^interrupt]

**The intuition.** If teams drift off-target gradually and each check-in costs a little, there's an optimal check-in interval, and at that optimum the overhead exactly equals the drift waste. The total cost scales as the square root of *(check-in cost × drift rate)*. So the two levers for low-touch coordination are cheaper check-ins (summaries, not meetings) and clearer intent (less drift). In the toy, halving the drift rate cuts total cost from 10% to about 7%, and lets you check in about 30% less often.[^toy-cadence] And an orchestrator that teams must *wait for* is never low-touch, however rarely it speaks.

## 6. The village problem, and gifts to future agents

**The village problem** is GR's name for a gap they flag themselves: training happens with at most 9 agents, deployment with hundreds or thousands.[^gr] Many habits that are cheap in a village are linear or quadratic in swarm size: reading the whole board, broadcasting every finding, greeting everyone on arrival, a CEO managing every hire directly. A habit that costs 9,000 tokens an hour at 9 agents becomes a million tokens an hour at 1,000.[^toy-village]

The hopeful observation is that 9 agents is exactly *one span of management*. If a policy learns to manage a village of 8 well, a city can be built as **villages of villages**, where every agent still lives in a village-sized neighbourhood. A 1,000-agent swarm with spans of 9 needs only about four levels. There's a caveat I owe to [hallerite](https://hallerite.com/posts/on-the-nature-of-the-swarm/): a strict tree "moves the context problem to the root", because every message routes upward.[^hallerite] At city scale, peers that can message each other directly (a mesh, with hierarchy only where it pays) may beat a pure org chart. My bet is a hybrid: villages for management, mesh links for expertise.

**Gifts to future agents** is GR's "shared environments" open problem, and the one I find deepest. A run that spends an hour writing a clean, documented library pays the cost now, but the benefit goes to later runs. Under a per-episode reward it gets no credit, so RL learns *not* to write libraries. In a toy model with one hour of cost and twenty later beneficiaries, giving the creator even a 12% royalty on later gains flips the incentive.[^toy-royalty]

My question was: how can you predict the utility of something for agents that haven't been spawned yet, on goals that aren't apparent yet? I've come to think you mostly don't have to predict it. Science and open source mostly *measure* value afterwards, through use (citations, imports, dependents), and pay credit back. A training system could log provenance, give hindsight credit to the runs whose artifacts later runs used (checked counterfactually, so mere use isn't enough), and let agents learn the general norms that historically paid: write general, documented, correct things, and record your dead ends.[^rudder] You don't need long-range planning; you need option value.

## 7. Structure that unfolds over time, and how to train it

Ideas 2, 4 and 5 add up to one claim. **A swarm's structure isn't a diagram; it's a slow policy.** Workers act every few seconds. The structure (spawn a team, retire one, merge two, pass an insight across, revise the intent, move compute) acts every few hours.

There's already a working pattern for this. Bioptic's scouting agent treats each sub-team as a node in a tree of search directions.[^bioptic] It runs the most promising nodes (a bandit rule balancing past yield against curiosity). A coach then splits each one into narrower, non-overlapping children, using a short summary of why previous candidates were rejected. The reward is the share of results that pass validation, multiplied by **how many verified items were new to the shared pool**. That one design choice rewards the collective good directly: duplicating a sibling earns nothing, adding to the commons earns everything. In a toy simulation I wrote (synthetic data, not real agents), this kind of adaptive tree keeps finding new items long after a "keep searching" loop has plateaued.[^toy-tree]

To *train* such a system with RL, I'd climb a ladder. First, a hand-designed controller with strong workers (where OpenAI is). Next, a trained orchestrator with frozen workers (like Kimi).[^kimi] Then joint training of everyone in villages, with structural actions as tools (like Avalon-M1's hiring and firing).[^gr] Then recursive villages with curricula over time and team size. Last, credit that reaches across episodes. The hard part is credit for rare, high-leverage structural decisions. One option I'd like to test is *branching rollouts*: fork the swarm at a decision point, try the alternatives, and compare. And the DeepMind episode says integrity belongs in the architecture.[^deepmind] **Sharing must be gated by verification at least as strong as the sharing is fast.**

## 8. Where this matters most: science, cancer care and drug discovery

The rule that transfers across science is that **the speed and trustworthiness of the verifier decide how much a swarm can do on its own.**[^verifier-rule] Maths has Lean, which checks a proof in minutes. Biology has assays that take weeks, and medicine has outcomes that take years. Down that ladder, a swarm's job shifts from *generating* answers to *choosing which few to check*.

**Cancer care, from the patient and family side.** A cancer journey is a long, branching trajectory, and for many families it can feel like a second job. A family's swarm would have small teams to explain reports in plain language, find trials, prepare a second opinion (a team told to argue the plan is wrong), watch symptoms with a daily check-in, and handle logistics, money and caregiver support. A thin, always-on navigator sits over them, whose "intent" is the patient's own goals of care. Prior authorisation and scheduling are the "research admin" links of cancer care: rarely contacted, on the critical path, so contact them early. Fever during chemotherapy is the interrupt path, and it goes straight to the care team. With consent, lessons from one family's journey become a gift to families not yet diagnosed.

**From the oncologist's side.** Tumour-board preparation as islands: standard of care, biomarker-targeted, trial, and de-escalation or palliative-first, plus a refuting team. Quiet watchers over imaging, labs, ctDNA and patient-reported symptoms write to a dashboard instead of sending alerts. Early detection of immune-related side effects, and clean handoffs between surgery, medical oncology, radiotherapy and survivorship, complete the picture. Clinicians decide; the swarm prepares.

**Drug discovery, end to end.** *Target finding*: islands by evidence type (genetics, CRISPR screens, single-cell data) plus a team arguing the gene is a bystander, because independent evidence is worth more than correlated evidence.[^indep] *Mechanism*: one team per hypothesis, each looking for predictions that separate it from the rest. *Hit finding*: chemical space is now around 40 billion purchasable molecules, and ML screens can search it in minutes (one found new Parkinson's-target binders this way)[^chem], so islands per chemical strategy keep scaffold diversity by design. *Lead optimisation*: build teams per series, with an integrator passing a "fix" that worked in one series to the others. *Preclinical studies in mice and monkeys*: islands propose designs under different animal models, independent pre-registered analyses read out the same data, and a refuting team hunts for cage and batch effects. *Trials, Phases 1–3*: always-on safety watchers in Phase 1, a refuting team against subgroup fishing in Phase 2, and comparator choice, enrolment forecasting and readouts in Phase 3.

**Asset scouting and "finding silence".** Analysts, pharma BD teams and investors do "find-all" work. Benchmarks show the gap: general agents find about half of the right assets on hard queries, purpose-built tree-search agents about three quarters.[^bioptic] Models are good at compiling lists and weak at synthesis.[^convoke] A scouting swarm splits the search by region, language, source and stage, validates and de-duplicates every candidate, and keeps a catalyst calendar with quiet watchers. My favourite extension is **reading silence**: assets that stop being reported. Silence becomes signal when a gap is long relative to that asset's usual update rhythm. If it normally updates every 90 days, a 270-day gap happens only about 5% of the time by chance.[^toy-silence] The *cause* can then be weighed from independent public signals. A registry marked "terminated" with patents lapsing points to safety, efficacy or money. Patents kept alive, new continuations filed and manufacturing hires point to a company going quiet to keep its edge. One team per hypothesis argues each cause; humans make the call; and only public information is used.

## 9. Looking ahead: hybrid human–AI swarms, and keeping humans sharp

Where this goes next matters to me more than any single architecture. **How do we design swarms, standalone or ideally hybrid human–AI teams, that take on ambitious science while preserving human agency, meaning-making and critical thinking?**

**Hybrid by design.** The Navier–Stokes run was already a hybrid.[^oai] People chose the portfolio, made the reallocation call and revised the prompts; the swarm searched. I'd keep that split on purpose. Humans belong in the slow loop: choosing the question and why it matters, setting the intent, and gating irreversible steps like experiments on animals or people. There's a quantitative reason too. Ten thousand copies of one model share blind spots, while a human expert who reasons differently is a genuinely *independent* check. One such reviewer can be worth more than many extra copies.[^toy-human] And human attention is a budget, so a hybrid swarm must make human check-ins cheap: one-page summaries, claims shown with their evidence, and disagreements surfaced rather than averaged away.

(Shameless but brief aside: I've been chewing on the hybrid question for a while, and a first, very imperfect attempt at it, *Patients Are Waiting: From Swarms to Synergy.[^neurips] Designing Complementary Collaborative Human–AI Agent Teams for Biomedical Discovery & Invention*, somehow got into the [NeurIPS 2026 Agentic AI for Biological Discovery (Agentic LS) workshop](https://agenticls.github.io/) ([workshop page](https://neurips.cc/virtual/2026/loc/sydney/workshop/137498)). Much of this section is me arguing with my past self.)

**Guarding against atrophy.** The risk of deskilling is real. In a 2025 *Lancet Gastroenterology & Hepatology* study, endoscopists who had been using AI detected noticeably fewer adenomas when working without it (about 28% before AI was introduced, about 22% after).[^lancet] A swarm that hands scientists finished answers will produce scientists who can't judge them, and then the "independent human check" stops being independent. Countermeasures I'd build in: **predict first, then reveal** (people commit to their own answer before seeing the swarm's); give humans the job of *breaking* claims, not approving them; don't accept a claim until a person can **explain why it's true**; schedule deliberate unaided practice, as pilots fly manually;[^aviation] and **measure human skill over time**. A hybrid swarm should make its humans better scientists, not just faster ones.

**Does biology need a Lean?** Lean works because a maths claim can be written fully formally and checked mechanically. Biology's claims are empirical, probabilistic and context-dependent, so no kernel can "prove" that a gene drives a cancer. So not a Lean, but **biology does need what Lean provides**, rebuilt for empirical science. That means:
- **a typed claim language**, so it's unambiguous what's being claimed: which entity, which relation, in what context, how big;
- **executable provenance**, so every claim links to its data, code and protocol, and an independent pipeline can re-derive it;
- **pre-registration as the "Comparator"**, checking that the hypothesis tested is the one stated, which blocks the goalpost-moving DeepMind's agents used;[^deepmind]
- **an evidence calculus** that raises confidence with *independent* lines of evidence and discounts correlated ones;
- **formal checks where biology does allow them**: mass balance, units, kinetic models, statistics;
- **a shared library** of claims with retraction.

This is the chain of cheaper checks from section 8, made legible. Lean made mathematics safe for a 10,000-agent search because it made claims precise and checking cheap. Biology gets that benefit only by investing in the same two things. And the last link should always be a person who understands *why*. My own small experiment in that formal corner is [Lean-Bio](/lean-bio/), which compiles biochemical models into theorems the Lean 4 kernel checks; it covers the parts of biology that can be formal, not the empirical rest.

## Putting it together: a sketch

If I had to draw the architecture these ideas point toward, it would be:

- **Villages of villages.** Teams of up to about 9, nested, so the trained unit is the deployed unit.
- **Two-speed communication.** Free, fast talk inside a team. Slow, filtered sharing across teams (as OpenAI's Codex consolidation did). Plus a searchable archive and a who-owns-what directory.
- **Teams typed by work mode** (explore, build, verify, integrate, service), spun up and down against an explicit overhead budget, with exit memos.
- **A thin, always-on coordinator** that holds the intent, reads dashboards, and intervenes by exception. Teams never block on it.
- **Credit that reaches across horizons**: team reward within the run (as RLCR does), novelty-gated so teams are paid for what they add to the commons, plus hindsight royalties for artifacts that help later runs.[^gr]
- **Integrity built in**: sharing gated by verification, archive entries that can be retracted, and reporting channels someone actually reads.

Everything in that list is a hypothesis. None of it has been tested at scale.

## The open questions

These are the questions I think matter most, grouped by horizon.

**Siblings, now**
1. Will a swarm trained with collective rewards learn to share fixes on its own, given that the benefit shows up in *another* agent's actions, often much later? How would we measure it? (One test: count "duplicate struggles", where two agents hit the same obstacle, and check that they fall over training.)
2. How should an agent decide *who* needs a fix: broadcast, targeted messages, topic channels, a pull archive, or harness-level routing? Can the targeting be learned, or must it be built in?
3. How do we stop wrong fixes spreading fast (a correlated failure) and herding on the first workaround, without slowing the spread of good fixes?

**The swarm, over its lifetime**

4. What is the right swarm size for a given time budget, and can the swarm learn to choose it (for example, does average team size rise as the time cap grows)?
5. Can link reinforcement learn the difference between collaboration links and dependency links, or do dependency links need a separate mechanism, like a directory?
6. How do we keep weak, cross-team ties alive, since they're often where new information comes from, without forcing communication?
7. What determines the number and the *kind* of sub-swarms? When should a new one be spun up, and when torn down? How do we protect a slow but promising exploration team from premature teardown?
8. Who should make structural decisions: humans, a fixed rule, a trained orchestrator, or every agent? How do you prevent spawn storms and reorg busywork?
9. How do we make coordination always on but low-touch in practice, and how do we measure overhead honestly when agents might learn to relabel coordination as "work"?

**Scale**

10. What generalises from 9 agents to 1,000? Can a "manage a village" skill be applied recursively to build a city?
11. What only *emerges* at city scale, such as congestion, cliques, correlated errors, or safety-relevant norms, and what scale-specific metrics would catch it?

**Agents not yet spawned**

12. How do we give credit for contributions that only help future runs? Is hindsight royalty credit stable, or will a shared policy learn to game it (self-citation across episodes)?
13. When we need a forward-looking estimate of an artifact's future value, what are good cheap proxies (generality, reuse by siblings now, compression, novelty)?
14. How should we balance explicit artifacts against what the shared weights already carry forward?

**Design over time, and training**

15. Can the slow, structural decisions (spawn, retire, merge, migrate, revise intent) be learned together with the workers' behaviour? How do we give credit to one rare structural decision?
16. How do we gate sharing by verification without chilling useful but tentative ideas, when exploits spread through the same channels?
17. How much of the human outer loop that steered the Navier–Stokes run can a learned coordinator replace?[^oai]

**Applications**

18. Which parts of a cancer journey can a swarm take on safely, and how do we keep the patient's goals of care as the intent everything answers to?
19. Where verification takes weeks (wet lab, animal studies) or years (trials), how should a swarm trade breadth of in silico work against the few experiments it gets?
20. Can "silence" be read reliably from public signals, and how do we test cause hypotheses without harming the companies and patients involved?

**Hybrid teams and human agency**

21. How should standalone and hybrid human–AI swarms divide the work, and which human roles add the most?
22. How do we detect and reverse the atrophy of human skills, especially critical thinking and scientific understanding, in people who work with swarms?
23. Does biology need a "Lean"? What minimal claim language, provenance standard and evidence calculus would make AI-discovered biology legible and checkable?

*Thanks.* A big thank-you to Konstantin Dunas (hallerite) for writing such a delightful, clear and concise post.[^hallerite] It's what got me to dive deeper into this topic and finally organise the thoughts about agent swarms that had been swirling in my head.

## What's fact and what isn't

The descriptions of RLCR, Avalon-M1, and the Navier–Stokes run come from General Reasoning's post and from OpenAI's account as reported by secondary outlets.[^gr][^oai] The ideas in sections 1–9 that aren't attributed to them are mine, and all the numbers are from deliberately simple toy models, meant for intuition, not prediction. A longer deep dive with the models, diagrams and plots is in the companion post ([the deep dive](/thoughts-on-agent-swarms/deep-dive/)), and a [draft preprint (PDF)](/files/thoughts-on-agent-swarms.pdf) is alongside it.

## References

*Every source cited in the margin, plus the background reading behind this post and its [deep dive](/thoughts-on-agent-swarms/deep-dive/), in one place.*

- General Reasoning, [*How to train a swarm*](https://www.gr.inc/blog/how-to-train-a-swarm) (2026), and the [Avalon-M1 report](https://www.gr.inc/avalonm1.pdf).
- OpenAI, [*On the Navier–Stokes Millennium Prize Problem*](https://openai.com/index/navier-stokes-solution/) (8 Sep 2026), and the [Lean proof repo](https://github.com/openai/NavierStokesAndEuler). Reported by [Quanta](https://www.quantamagazine.org/ai-has-solved-one-of-maths-1-million-millennium-prize-problems-20260908/) and [VentureBeat](https://venturebeat.com/technology/openai-solves-longstanding-math-problem-with-10-000-agent-swarm-but-cant-rule-out-benefitting-from-a-researchers-private-codex-data).
- Noam Brown's comments, via [Understanding AI](https://www.understandingai.org/p/why-agent-swarms-could-be-the-next) and [Aventine](https://aventineresearchinstitute.substack.com/p/is-this-just-the-beginning-for-ai).
- Further details of the Navier–Stokes run, from [CellCog](https://cellcog.ai/blog/openai-navier-stokes/) (which quotes OpenAI's post) and [Aventine](https://aventineresearchinstitute.substack.com/p/is-this-just-the-beginning-for-ai). Secondary sources: treat with care.
- OpenAI's Cycle Double Cover run, as summarised by [imisofts](https://imisofts.com/blog/gpt-5-6-sol-ultra-math-proof-agent-swarm-playbook-news-july-13-2026/) from OpenAI's published proof and prompt.
- Kimi Team, [*Kimi K2.5*](https://arxiv.org/abs/2602.02276) (2026).
- Paglieri, Cross, Genewein, Leibo, Tomasev et al. (Google DeepMind), [*A Case Study on Emergent Cheating and Whistleblowing in Autonomous Research Swarms*](https://arxiv.org/abs/2609.04170v1), arXiv:2609.04170 (Sep 2026); coverage in [MIT Technology Review](https://www.technologyreview.com/2026/09/14/1144037/ai-agents-blew-whistle-o-cheating-colleagues/) and [The Decoder](https://the-decoder.com/deepmind-put-100-ai-agents-in-a-room-and-they-sorted-into-cheaters-converts-and-whistleblowers/).
- Mitchener et al., [*Kosmos: An AI Scientist for Autonomous Discovery*](https://arxiv.org/abs/2511.02824) (2025).
- Gottweis et al., *Towards an AI co-scientist* (2025); Ghareeb et al., *Robin* (2025); Swanson et al., *The Virtual Lab*, Nature (2025).
- Vinogradova et al., [*Hunt Globally: Deep Research AI Agents for Drug Asset Scouting*](https://arxiv.org/abs/2602.15019) (2026); Vinogradov et al., [*LLM-Based Agents for Competitive Landscape Mapping in Drug Asset Due Diligence*](https://arxiv.org/abs/2508.16571) (2025); Vinogradov, Nguyen et al., *BIOPTIC B1*, J. Chem. Inf. Model. 65, 9927 (2025).
- Convoke, [*Benchmarking biopharma knowledge work*](https://convoke.bio/blog/benchmarking-biopharma-knowledge-work) (Sep 2026).
- tp53, *Patients Are Waiting: From Swarms to Synergy*, NeurIPS 2026 Agentic LS workshop ([agenticls.github.io](https://agenticls.github.io/); [workshop page](https://neurips.cc/virtual/2026/loc/sydney/workshop/137498)).
- Konstantin Dunas (hallerite), [*On the nature of the swarm: why scaling inference ends in many agents*](https://hallerite.com/posts/on-the-nature-of-the-swarm/) (Oct 2026).
- Budzyń et al., deskilling of endoscopists after AI exposure, *Lancet Gastroenterology & Hepatology* (2025).
- Nelson et al., *Nature Genetics* 47, 856 (2015); King et al., *PLoS Genetics* 15, e1008489 (2019).
- Auer, Cesa-Bianchi & Fischer, *Finite-time analysis of the multiarmed bandit problem*, Machine Learning 47 (2002).
- Schulman et al., *High-dimensional continuous control using generalized advantage estimation*, ICLR (2016).
- Foerster et al., *Counterfactual multi-agent policy gradients*, AAAI (2018).
- Sukhbaatar et al., *CommNet* (NeurIPS 2016); Singh et al., *IC3Net* (ICLR 2019); Das et al., *TarMAC* (ICML 2019).
- Island-model genetic algorithms; Romera-Paredes et al., *FunSearch*, Nature 625 (2024); Novikov et al., *AlphaEvolve* (2025).
- Wang et al., *Voyager: An open-ended embodied agent with large language models* (2023).
- Arjona-Medina et al., *RUDDER* (NeurIPS 2019); Harutyunyan et al., *Hindsight credit assignment* (NeurIPS 2019).
- Yang et al., *Mean field multi-agent reinforcement learning*, ICML (2018).
- Granovetter, *The strength of weak ties*, American Journal of Sociology 78, 1360 (1973).
- Conway, *How do committees invent?*, Datamation (1968).

<link rel="stylesheet" href="/assets/css/sidenotes.css">
<script src="/assets/js/sidenotes.js" defer></script>

[^gr]: General Reasoning, [*How to train a swarm*](https://www.gr.inc/blog/how-to-train-a-swarm) (2026), and the [Avalon-M1 report](https://www.gr.inc/avalonm1.pdf).
[^hallerite]: Konstantin Dunas (hallerite), [*On the nature of the swarm: why scaling inference ends in many agents*](https://hallerite.com/posts/on-the-nature-of-the-swarm/) (Oct 2026).
[^oai]: OpenAI, [*On the Navier–Stokes Millennium Prize Problem*](https://openai.com/index/navier-stokes-solution/) (8 Sep 2026), and the [Lean proof repo](https://github.com/openai/NavierStokesAndEuler). Reported by [Quanta](https://www.quantamagazine.org/ai-has-solved-one-of-maths-1-million-millennium-prize-problems-20260908/) and [VentureBeat](https://venturebeat.com/technology/openai-solves-longstanding-math-problem-with-10-000-agent-swarm-but-cant-rule-out-benefitting-from-a-researchers-private-codex-data).
[^brown]: Noam Brown's comments, via [Understanding AI](https://www.understandingai.org/p/why-agent-swarms-could-be-the-next) and [Aventine](https://aventineresearchinstitute.substack.com/p/is-this-just-the-beginning-for-ai).
[^oaidetail]: Further details of the Navier–Stokes run, from [CellCog](https://cellcog.ai/blog/openai-navier-stokes/) (which quotes OpenAI's post) and [Aventine](https://aventineresearchinstitute.substack.com/p/is-this-just-the-beginning-for-ai). Secondary sources: treat with care.
[^cdc]: OpenAI's Cycle Double Cover run, as summarised by [imisofts](https://imisofts.com/blog/gpt-5-6-sol-ultra-math-proof-agent-swarm-playbook-news-july-13-2026/) from OpenAI's published proof and prompt.
[^kimi]: Kimi Team, [*Kimi K2.5*](https://arxiv.org/abs/2602.02276) (2026).
[^deepmind]: Paglieri, Cross, Genewein, Leibo, Tomasev et al. (Google DeepMind), [*A Case Study on Emergent Cheating and Whistleblowing in Autonomous Research Swarms*](https://arxiv.org/abs/2609.04170v1), arXiv:2609.04170 (Sep 2026); coverage in [MIT Technology Review](https://www.technologyreview.com/2026/09/14/1144037/ai-agents-blew-whistle-o-cheating-colleagues/) and [The Decoder](https://the-decoder.com/deepmind-put-100-ai-agents-in-a-room-and-they-sorted-into-cheaters-converts-and-whistleblowers/).
[^kosmos]: Mitchener et al., [*Kosmos: An AI Scientist for Autonomous Discovery*](https://arxiv.org/abs/2511.02824) (2025).
[^bioptic]: Vinogradova et al., [*Hunt Globally: Deep Research AI Agents for Drug Asset Scouting*](https://arxiv.org/abs/2602.15019) (2026); Vinogradov et al., [*LLM-Based Agents for Competitive Landscape Mapping in Drug Asset Due Diligence*](https://arxiv.org/abs/2508.16571) (2025); Vinogradov, Nguyen et al., *BIOPTIC B1*, J. Chem. Inf. Model. 65, 9927 (2025).
[^neurips]: tp53, *Patients Are Waiting: From Swarms to Synergy*, NeurIPS 2026 Agentic LS workshop ([agenticls.github.io](https://agenticls.github.io/); [workshop page](https://neurips.cc/virtual/2026/loc/sydney/workshop/137498)).
[^lancet]: Budzyń et al., deskilling of endoscopists after AI exposure, *Lancet Gastroenterology & Hepatology* (2025).
[^rudder]: Arjona-Medina et al., *RUDDER* (NeurIPS 2019); Harutyunyan et al., *Hindsight credit assignment* (NeurIPS 2019).
[^nums]: **Where the numbers come from.** I haven't run any experiments yet. Every number labelled as a toy model is my own back-of-envelope calculation, with made-up but plausible parameters. These numbers are meant for intuition, not as evidence. The assumptions are given in each note, and the derivations are in the [deep dive](/thoughts-on-agent-swarms/deep-dive/) and the [preprint](/files/thoughts-on-agent-swarms.pdf).
[^synth]: My own synthesis of the cases above (OpenAI, DeepMind, Bioptic, Kosmos and GR). These are not tested results.
[^toy-multicast]: Toy model (mine; no experiment). Assumptions: a fix saves 30 minutes and costs 1 minute to read; the 8 agents on the affected module each have a 60% chance of hitting the obstacle, and everyone else has 0.5%. Broadcasting's net value turns negative at n ≈ 168. Derivation in deep dive §5.1, Fig. 1.
[^toy-size]: Toy model (mine; no experiment). Assumptions: setup takes 0.1·n hours, per-agent efficiency is 1/(1 + 0.1(n − 1)), and progress is P = n · efficiency · (T − setup). Deep dive §6.1, Fig. 2.
[^toy-admin]: Toy project (mine; no experiment), with made-up durations: 10 h of collaborative work, a 2 h approval wait on the admin link, and 1 h to rediscover a pruned contact. Deep dive §7, Fig. 3.
[^toy-overhead]: Back-of-envelope (mine). Overhead ≈ (setup + teardown)/L + m. With setup + teardown = 15 min and ongoing co-ordination m = 5%, keeping overhead ≤ 10% needs L ≥ 0.25 h / 0.05 = 5 h of work. Deep dive §8.4.
[^toy-islands]: Toy model (mine; no experiment). It uses the standard design-effect formula for correlated samples, N_eff = N / (1 + (N − 1)ρ) (Kish, *Survey Sampling*, 1965). Assumptions: attempts within a group are correlated with ρ = 0.01, and isolated groups are independent. One herd of 10,000 then gives about 99 effective attempts, and four islands of 2,500 give about 385. Deep dive §8.2, Fig. 4.
[^toy-cadence]: Toy model (mine; no experiment). Cost J(τ) = δτ/2 + κ/τ is minimised at τ* = √(2κ/δ), where J* = √(2κδ). This is the same square-root trade-off as the classic economic order quantity (Harris, *How many parts to make at once*, 1913). Assumptions: a 3-minute check-in (κ = 0.05 h) and drift δ = 0.1 per hour. Deep dive §9.1, Fig. 5.
[^toy-village]: Arithmetic (mine). A habit that costs 1,000 tokens per agent per hour grows linearly, from 9,000 tokens at 9 agents to 1,000,000 at 1,000. Quadratic habits, like everyone reading everyone's posts, grow faster. Levels needed: log₉ 1,000 ≈ 3.1, so four. Deep dive §10, Fig. 6.
[^toy-royalty]: Toy model (mine; no experiment). Assumptions: writing the library costs the creating episode 0.05 in advantage, and the later beneficiaries gain 0.40 in total, with no discount across episodes. It breaks even when α × 0.40 ≥ 0.05, so α ≥ 12.5%. Deep dive §11.1, Fig. 7.
[^toy-tree]: A toy simulation I wrote for this post's figure: 24 synthetic search regions with long-tailed hidden items. It is not an experiment on real agents or real data. Deep dive §12, Fig. 8.
[^verifier-rule]: My generalisation from the maths cases above. I haven't tested it.
[^indep]: This is the logic behind genetic support for drug targets. Targets with human genetic evidence succeed more often: Nelson et al., *Nature Genetics* 47, 856 (2015); King et al., *PLoS Genetics* 15, e1008489 (2019).
[^chem]: The ~40 billion figure is the size of Enamine's REAL Space of make-on-demand molecules. The Parkinson's example is BIOPTIC B1, which found LRRK2 ligands there: Vinogradov, Nguyen et al., *J. Chem. Inf. Model.* 65, 9927 (2025).
[^toy-silence]: Toy model (mine). If updates arrive roughly as a Poisson process with mean gap μ = 90 days, then P(gap ≥ g) ≈ e^(−g/μ) = e^(−3) ≈ 5% for g = 270 days. Real reporting is burstier, so treat this as a starting heuristic. Deep dive §14, Fig. 9.
[^toy-human]: This is an argument from the same correlation model (Kish design effect, above), not a measurement. Extra copies that are highly correlated add little, while one weakly correlated reviewer adds close to a full independent attempt.
[^aviation]: On automation and manual flying skills, see the FAA-commissioned report *Operational Use of Flight Path Management Systems* (PARC/CAST Flight Deck Automation Working Group, 2013).
[^convoke]: Convoke, [*Benchmarking biopharma knowledge work*](https://convoke.bio/blog/benchmarking-biopharma-knowledge-work) (Sep 2026).
[^interrupt]: Paglieri et al. (Google DeepMind), [*A Case Study on Emergent Cheating and Whistleblowing in Autonomous Research Swarms*](https://arxiv.org/abs/2609.04170v1) (2026). This is the same 100-agent maths experiment described above. Agents who spotted the cheating audited the fake proofs, warned peers on broadcast and private channels, organised boycotts and filed formal complaints. That is an interrupt path in action. The open design question is who reads those complaints, and how quickly.
