---
title: "Gotta Cure 'Em All: The AI-Native Roivant and the Permission to Dream Bigger"
date: 2026-11-04
permalink: /cure-em-all/
redirect_from:
  - /ai-to-amplify-our-ambitions/
excerpt: "From Andrew Lo's megafund to Mithril, Orchestra and Coefficient: what the AI hub-and-spoke means for pharma, CROs and the frontier labs, why Demis's ten years is both too optimistic and too pessimistic, and why humans must stay at the center of discovery."
tags:
  - drug discovery
  - AI for science
  - biotech
  - hub-and-spoke
  - herding
---

> **A note before we start.** This post is my attempt to synthesize and integrate the flood of commentary around the last few weeks in bio × AI: three frontier-lab acquisitions, a fresh round of essays and threads from people I've learned a great deal from (Alex Araki, Bruce Booth, Simon Barnett, Jeb Keiper, Egan Peltan, Alex Telford, Robert Plenge, Abhishaike Mahajan and others), and the old questions underneath all of it. It is commentary on recent events, and commentary on the commentary. Links are inline so you can read the originals, which are better than my summaries.

---

## 1. An Owl, a TED talk, and a lottery ticket

I owe this whole line of thinking to the brilliant **Abhishaike Mahajan**, who writes [Owl Posting](https://www.owlposting.com/). In April he published ["Curious cases of financial engineering in biotech"](https://www.owlposting.com/p/curious-cases-of-financial-engineering), a 7,000-word tour of royalties, synthetic royalties, priority review vouchers, CVRs, hub-and-spoke holding companies and the zombie-biotech liquidation trade. It contains one of the best one-line descriptions of biotech I have read:

> "For $250 million and ten years of your life, you may purchase a lottery ticket."

Somewhere in that essay Mahajan links a TED talk and tells you to watch the whole thing. I did, and it is now, without much competition, my favorite TED talk of all time: MIT economist **Andrew Lo**'s ["Can Financial Engineering Cure Cancer?"](https://singjupost.com/andrew-lo-can-financial-engineering-cure-cancer-at-tedxcambridge-transcript/) at TEDxCambridge.

Lo opens with grief. He has lost friends, colleagues and his mother to cancer, and he says, simply: *"I'm sick and tired of losing friends and family to cancer, and I don't accept it and neither should you."* Then he does what a finance professor does. He prices the lottery ticket.

His toy numbers (from the talk) go roughly like this:

- One cancer drug candidate costs about **$200M**, takes about **10 years**, and has roughly a **1-in-20** chance of paying off. If it does, it is worth about **$12.3B**.
- Nobody sane puts their retirement into one of those tickets. The variance is brutal.
- But buy **150** of them, a **~$30B** "megafund", and the probability of at least three hits is about **98%**, worth roughly **$37B** by year 10.

Pool enough independent long shots and a lottery ticket becomes something closer to a bond. Once it looks like a bond, you can sell bonds against it to pension funds and insurers, a pool of capital orders of magnitude larger than biotech venture. Lo even reaches for World War II war bonds as the precedent for asking ordinary people to finance a moonshot. A biotech CSO once told him, *"Our financing drives our scientific agenda,"* and the whole talk is an argument that we can flip that around. He closes: *"We can do well, by doing good."*

Mahajan's essay is the sober sequel. The megafund was never built for clinical-stage assets. His diagnosis: biotech isn't used to debt, and there is no "biomedical Moody's" to rate a pool of drug programs and no "biomedical Fannie Mae" to standardize and buy the loans, the institutions that made the 30-year mortgage possible in the 1930s. He also notices something uncomfortable: every clever financial tool that makes biotech risk tradable favors **legible** projects (small trials, clear genetics, fast regulatory paths), and so *"the money increasingly, naturally flows to them and nowhere else."*

Hold onto both ideas, **portfolio** and **legibility**. They are the two threads running through everything that follows.

### Why this matters in one calculation

The power of the portfolio idea, and its fragility, fits in a few lines:

```
One program:       P(success) = 10%        → 90% chance you lose everything
100 programs:      P(zero successes) = 0.9^100 ≈ 0.003%
                   P(≤ 2 successes) ≈ 0.2%  → bond-like

But make them correlated (half the time a shared assumption is wrong
and every program drops to 3%; otherwise 17%; same 10% average):
                   P(≤ 2 successes) ≈ 21%   → 100x riskier
```

Same average, completely different risk. Pooling only works if the bets are genuinely different bets. Remember that when we get to herding.

---

## 2. Fast forward: drugs that died at least once

Lo's talk is about money. But money is only half of why good drugs don't get made. The other half is attention: who looks at what, and when they stop looking.

Egan Peltan, in his essay ["Pipeline-in-a-Person will help AI…"](https://blog.egan.bio/p/pipeline-in-a-person-will-help-ai), has a line I can't shake: *"The average drug you take likely died at least once."* Two examples make the point better than any statistic.

**Keytruda.** The world's best-selling drug started life as an Organon antibody program around 2003, originally aimed at autoimmune disease. Organon was bought by Schering-Plough in 2007, Schering-Plough by Merck in 2009, and through all of it the PD-1 program ranked near the bottom. Merck shut it down and put it on the out-license list; a term sheet to hand the rights away for very little was reportedly drafted. What saved it in 2010 was a competitor: BMS's positive Phase 3 ipilimumab data and early nivolumab signals made Merck look again. The term sheet was pulled, the IND was filed in December 2010, and pembrolizumab went on to become Keytruda ([Forbes, David Shaywitz](https://www.forbes.com/sites/davidshaywitz/2017/07/26/the-startling-history-behind-mercks-new-cancer-blockbuster/); see also [Derek Lowe's "The Keytruda Story"](https://www.science.org/content/blog-post/keytruda-story)). The molecule never changed. The attention did.

**Ojemda.** Tovorafenib was discovered at Sunesis, licensed to Millennium/Takeda as TAK-580, and then stalled when adult development stopped. Pediatric-cancer champions inside Takeda pushed to out-license rather than shelve it ([Day One](https://www.dayonebio.com/giving-new-life-to-medicines-article/)). Day One, a company built specifically to find drugs with pediatric potential that lacked an adult path, acquired it in December 2019. There was already lab evidence in pediatric brain tumors and a tiny nine-patient academic trial funded by families through the Pediatric Low Grade Astrocytoma Foundation ([Sam Blackman, PCRF](https://www.pcrf-kids.org/2024/02/16/special-guest-author-blackman/)). FDA accelerated approval came in April 2024, for children with relapsed or refractory pediatric low-grade glioma, and Servier agreed to acquire Day One in 2026.

**Ibrutinib, and then acalabrutinib.** The third and fourth case studies come as a pair, and they are the subject of Nathan Vardi's wonderful book [*For Blood and Money: Billionaires, Biotech, and the Quest for a Blockbuster Drug*](https://www.shortform.com/summary/for-blood-and-money-summary-nathan-vardi) (2023).

*Case 3: Imbruvica.* In the mid-2000s Celera Genomics was winding down its drug research. Among the leftovers was a covalent inhibitor of BTK, a kinase in B cells, that its chemists had made largely as a research tool. In April 2006 Pharmacyclics, a struggling company whose lead brain-cancer drug had just disappointed, bought Celera's BTK, HDAC and Factor VIIa programs for **$2 million in cash plus 500,000 to 1 million shares**, with milestones and royalties on top ([BioSpace](https://www.biospace.com/pharmacyclics-inc-buys-drug-candidates-from-celera-genomics)). Under investor-turned-CEO Bob Duggan, that molecule, PCI-32765, became **ibrutinib**. J&J's Janssen partnered on it in late 2011, the FDA approved it as Imbruvica in November 2013, and in March 2015 **AbbVie agreed to buy Pharmacyclics for $21 billion** after a bidding war with J&J ([BioSpace](https://www.biospace.com/inside-the-21-billion-bidding-war-for-pharmacyclics)). Duggan alone received more than $3.5 billion ([Wikipedia](https://en.wikipedia.org/wiki/Pharmacyclics)). A few million dollars of discarded chemistry turned into one of the largest biotech acquisitions ever.

*Case 4: Calquence.* Ibrutinib worked, but it hit other kinases too, which drove side effects such as atrial fibrillation and bleeding. Several people who had helped develop it, including Ahmed Hamdy and Raquel Izumi, left Pharmacyclics convinced a more selective BTK inhibitor would be better. They found one in the Netherlands: chemist Tjeerd Barf and biologist Allard Kaptein in Oss, the old Organon research town that also produced Keytruda, had designed a more selective BTK inhibitor and kept it alive after their own research program was shut down ([Acerta history](https://acertapharma.netlify.app/)). Acerta Pharma formed in early 2013, backed in part by hedge-fund manager Wayne Rothbaum, an early Pharmacyclics investor. Its first trial started in 2014, and in December 2015 **AstraZeneca paid $4 billion for 55% of Acerta**, with an option on the rest for about $3 billion more ([Business Wire](https://businesswire.com/news/home/20151216006501/en/Acerta-Pharma-Announces-Strategic-Transaction-with-AstraZeneca)). Acalabrutinib was approved as Calquence in 2017, and AstraZeneca bought out the remainder in 2021. By 2025 Calquence was selling roughly **$3.5 billion a year** (sum of regional sales in [AstraZeneca's 2025 annual report](https://www.sec.gov/Archives/edgar/data/901832/000110465926019130/azn-20251231x20f.htm)).

The BTK pair teaches two lessons at once. Imbruvica is the shelved-asset lesson: a large organization's leftovers, picked up cheaply by people who looked harder. Calquence is a fast follower done *right*: a second molecule against a target the first had just validated, winning on selectivity and safety rather than novelty. Keep that in mind for the next section. Fast-following is not the problem. Thirty fast followers on the same target, all hoping to be the Calquence, is.

All four stories share a structure. A good molecule sat inside an organization whose priorities pointed elsewhere, or was left behind when a program closed. It took an outside event (a competitor's data) or an outside team (people who looked where others weren't looking) to bring it back. That is, in miniature, the original **Roivant** thesis: big pharma has many molecules it has shelved for reasons that have nothing to do with whether they work, so in-license them, put each in its own subsidiary with its own team and equity, and give it the attention it never got. (Alex Araki tells this story well in ["Roivant was ahead of its time"](https://alexaraki.substack.com/p/roivant-was-ahead-of-its-time).)

---

## 3. The herd

If good ideas die for lack of attention, where is the attention going instead? Increasingly, to the same few places.

**Alex Telford** ([Convoke](https://convoke.bio)) posted a chart from an upcoming post that stopped me cold ([X, Oct 30](https://x.com/Atelfo/status/2116288011533164643)):

> "<5% of new drugs entering the clinic are going after targets that haven't been tested clinically before, ~60% are going after targets with an approved drug. New ideas are hard to find!"

In Convoke's data, of roughly 551 new drugs entering the clinic in 2026 (through late October), about 326 went after a target that already has an approved drug and only about **20** went after a target never tested in humans. In 2005, roughly one in five new clinical drugs was a genuinely new-target bet. This year it is roughly one in 28.

This is not a new observation, and it is not AI's fault. A 2023 analysis in *Nature Reviews Drug Discovery*, ["Herding in the drug development pipeline"](https://www.nature.com/articles/d41573-023-00063-3) (Fougner, Cannon, The, Smith and Leclerc), found that the average number of clinical assets per actively pursued target **more than doubled, from about 3 in 2000 to about 7 in 2022**. Among the top ten pharma companies, the share of targets with more than five assets in development rose from **16% to 68%**. Herding even shows up in rare monogenic disease: fully enrolling every active study in Duchenne, thalassaemia or Huntington's would require more than 10% of the US patient population.

What herding costs is now being counted in patients, not just dollars. A February 2026 paper in *BMJ Oncology* ([Zhang, Osipenko and Hickman](https://pmc.ncbi.nlm.nih.gov/articles/PMC12911736/)) tallied **220 trials of 30 TIGIT inhibitors from 21 companies**, enrolling about **49,000 patients** at an estimated **$3.1 to 3.6 billion**, with no TIGIT inhibitor approved as of November 2025. Their conclusion is blunt: *"herding amplifies the loss of human and financial resources incurred during drug development."*

**Robert Plenge** (BMS) gave the phenomenon its best name in ["Breaking from the Herd: How Biopharma Can Escape Moloch's Trap"](https://plengegen.com/blog/moloch/): *"Target crowding (or herding) is a canonical Moloch's trap,"* a coordination failure where *"no individual is the villain, yet everyone is complicit."* Each company's choice is rational. Validated biology with a causal, disease-driving mechanism really is less risky, and fast-following really does work (Ozempic was not the first GLP-1 drug; Byetta was). Add them all up and you get dozens of programs on the same handful of targets, competing for the same patients, with lower exit prices for everyone after the first few.

**Egan Peltan** put the market version of this in a single post ([X](https://x.com/EganPeltan/status/2115806359413305650)): *"the sector has been on a risk-off posture for the past half decade. There are high quality FiC programs passed up for Nth-in-class Chinese programs at generous valuations… Opportunity for brave generalists."*

And then **Bruce Booth** made the argument that matters most for this post. In ["The fruits of AI drug abundance: indigestion in the near term"](https://lifescivc.com/2026/10/the-fruits-of-ai-drug-abundance-indigestion-in-the-near-term/) he notes the industry has already brought *"over 100 global programs into R&D against each of the top eight targets,"* and warns: *"AI will undoubtedly exacerbate the crowding challenge in our sector… we should be prepared for a tsunami of programs against validated biology."* AI is democratizing molecular design, mostly *around what we already know*. Booth calls himself a long-time AI believer; his argument is about timing. Genomics flooded the industry with poorly validated targets before it paid off, and he expects AI to make R&D productivity worse for the next three to five years before it makes it better. Novel AI-driven programs exist, *"but they are the exception rather than the norm."*

Simon Barnett of Dimension made the same point on Endpoints' live show, citing Booth: the activation energy to create compounds is falling so fast that the first effect is likely to be *more* target crowding ([Endpoints, 35:32](https://www.youtube.com/watch?v=xZQ8Bn27V1s&t=2132s)).

Now connect this back to Lo. Herding is correlation. Twenty programs on the same target are not twenty independent lottery tickets; they are closer to one ticket bought twenty times. The megafund math only works on genuinely different bets, and the industry has spent twenty years making its bets more alike.

---

## 4. Three acquisitions in seven months

Against that backdrop, the frontier labs started buying biotechs.

**Anthropic acquires Coefficient Bio (April 2026).** A New York startup founded in 2025, reportedly about six people, bought for roughly **$400M in stock** ([Fierce Healthcare](https://www.fiercehealthcare.com/biotech/anthropic-acquires-stealth-ai-startup-coefficient-bio-400m-deal)). One co-founder, Joyce Hong, spent nearly five years as a principal at Roivant. It is hard to invent a neater link between the old hub-and-spoke and the new one.

**OpenAI acquires Orchestra Bio (October 20, 2026).** Orchestra is a platform that helps biopharma teams coordinate the sprawling operational work of drug development: studies, vendors, timelines. OpenAI is folding it into **Rosalind**, its life-sciences models and tools ([OpenAI on X](https://x.com/OpenAI/status/2112607347688583586); [RuntimeWire](https://runtimewire.com/article/openai-acquires-orchestra-bio-drug-development-operations)). Founder **Ashoka Rajendra** joins OpenAI. Terms weren't disclosed. Peltan, who used Orchestra for his own lean program, describes its real contribution as a data model that makes a drug program legible to AI agents, not just to human experts.

**Anthropic acquires Mithril Medicine (announced October 27, 2026).** This is the one that broke BioTwitter. Mithril was a one-person preclinical biotech, seeded by Atlas Venture, founded by **Cody Tranbarger**, who revealed in the same breath that he is **@Prof_Oak_**, the pseudonymous biotech commentator many of us have read for six years ([his reveal thread](https://x.com/Prof_Oak_/status/2115185849424048564)).

What Mithril actually built, per [Anthropic's announcement](https://www.anthropic.com/research/early-progress-drug-development) and [technical report](https://www-cdn.anthropic.com/52e1f5d50c47ca3818f56704c27cf19e59b62e77.pdf):

- **The diseases.** Two rare, genetic, childhood muscle diseases: **LAMA2-related congenital muscular dystrophy (LAMA2-CMD**, also called merosin-deficient CMD, caused by loss of laminin-α2) and the **α-dystroglycanopathies**, where the sugar chain on α-dystroglycan that grips the surrounding matrix is missing. (These are congenital muscular dystrophies, not spinal muscular atrophy, which is a different disease with a different cause.)
- **The idea.** Bispecific "bridging" antibodies that act like a mechanical clamp: one arm grabs β-dystroglycan on the muscle fiber, the other grabs laminin in the basement membrane, physically reconnecting what the mutation disconnected.
- **The operating model.** Tranbarger used Claude to coordinate contracts, logistics and experiments across **11 external labs**, with five CROs characterizing a 113-construct panel and a bench of eight part-time scientific consultants. Idea to promising mouse data took **under 18 months**.
- **The data, honestly labeled.** In a six-week pilot in a LAMA2-deficient mouse model, the best tool molecule roughly doubled peak muscle force versus vehicle. It was not GLP, not blinded, not randomized, and not yet peer-reviewed, and the authors say so. No formal drug candidate is named yet; Anthropic hopes to name candidates in 2027 and reach human trials for LAMA2-CMD as soon as late 2028.

Tranbarger's own framing is the part I keep rereading: *"Will AI x Bio cure diseases? Unequivocally yes, imo… but not by the route that gets the most airtime. Rather than timeline acceleration & compression, I see orchestration & parallelization as today's low-hanging fruit."* Most drug hunters, he notes, see a handful of go/no-go calls in a career and spend the rest trading emails. *"Give them the bandwidth to run several programs at once, and the time to focus on scientific judgment, and I'm willing to bet they'll make better calls."* He calls this **Pipeline-in-a-Person**, an idea developed with the Coefficient team earlier this year, and he signs off: *"Gotta Cure 'Em All."*

The day after, Alex Araki connected the dots ([X](https://x.com/alexsaraki/status/2115482839651328137)): these three deals *"all point towards one thing: The new macro-consensus in biotech is the AI 'hub-and-spoke.'"* The frontier lab is the new mothership. Each acquired biotech is a spoke. And unlike the old Roivant, whose hub mostly shared capital and back-office overhead, the AI hub's value is supposed to be **learning**: every program feeds data and know-how back into models that make the next program cheaper and better aimed.

Anthropic also announced six research partners alongside Mithril: BMS, Generate Biomedicines, BigHat, Divergence Labs, Enveda and The Column Group, whose new company Pleiades plans to use Claude to run many more programs than a small team usually could.

### Not only the labs: two other shapes of the same bet

**Formation Bio's $600M fund.** On October 28, the day before Araki's thread, Formation Bio CEO **Benjamine Liu** announced the [Formation Bio Drug Development Accelerator Fund](https://www.benjamineliu.com/p/introducing-the-600m-formation-bio): **$600M**, alongside Formation's own balance sheet, to in-license and develop roughly **10 to 15 assets over three to five years**, two of them already licensed ([RuntimeWire](https://runtimewire.com/article/formation-bio-600-million-drug-development-fund-ben-liu)). Each asset gets its own NewCo, sitting on top of Formation's shared AI, development, regulatory, manufacturing and quality teams. AI is used to pick candidates, match them to indications, design trials and run development. Licensors get an upfront payment plus a share of milestones and royalties, and the money comes from research foundations, academic institutions, philanthropies and hospitals rather than only from VCs. Liu's rationale is Araki's in numbers: the count of discovered drug candidates has roughly doubled in a decade while yearly approvals have stayed flat, so **development**, not discovery, is the bottleneck, and more than $300B of pharma sales lose patent protection over the next decade. This is the closest thing yet to Roivant's structure rebuilt with an AI layer, and to a small, mission-funded version of Lo's megafund. It also implies something about cost: at an implied $40 to 60M per asset (my estimate from the fund size; Formation hasn't disclosed a per-asset budget), the people who run trials for a living are budgeting far more per shot than the "$5M lean trial" sketches circulating on X.

**Capable.** At the other end of the spectrum is [Capable](https://capable.com/), co-founded and led by **Isaak Freeman** (previously neuroscience at MIT and mathematics at Berkeley, per [Foresight](https://foresight.org/people/isaak-freeman/)). Capable's tagline is *"turning frontier intelligence into frontier medicines,"* and its thesis is almost the mirror image of Pipeline-in-a-Person: *"Frontier models won't be bottlenecked by intelligence. They'll be bottlenecked by the speed of data and active learning."* So instead of orchestrating a network of outside labs, Capable is **vertically integrated**, with its own automated synthesis and testing loop for peptide and nucleotide therapeutics. Its first programs are in **sleep**, inspired by people with natural short-sleeper genetic variants, starting with rare disorders like narcolepsy and hypersomnia. In its [October update](https://progress.capable.com/p/202610) Capable announced a **$38M seed** (Cathay, Abstract, Fidji Simo, Joe Betts-LaCroix, Andrej Karpathy and others; $50M raised to date), a lab expansion from 2,000 to 22,500 square feet in Mission Bay, and an automation setup that raised daily cell-assay throughput by more than 10x while cutting the coefficient of variation from 6% to about 1.75%. (A nice echo of Mahajan's essay: Capable's new BD advisor came from Centessa, the hub-and-spoke company that narrowed to a single sleep asset and sold to Lilly.)

Put Mithril, Formation and Capable side by side and you get three answers to the same question, *where should the learning loop live?* Mithril says: in one expert's head plus a model, with the physical work rented from CROs. Formation says: in a shared development hub, with each asset financed and owned on its own. Capable says: in your own wet lab, because whoever generates the data fastest teaches the model fastest. I don't think we know yet which is right, and it may be different for each modality and stage. That uncertainty is a good reason to want all three experiments running.

---

## 5. The skeptics are mostly right, about the right things

I want to give the skeptics real airtime, because the best ones are operators.

**Jeb Keiper** (former Nimbus CEO) responded with three realities ([X](https://x.com/JebKeiper/status/2115841057762000903), expanded in ["The Myth Behind the N of 1 Biotech"](https://jebkeiper.substack.com/p/the-myth-behind-the-n-of-1-biotech)): the "N of 1" biotech is an illusion, because a solo founder still surrounds themselves with capital partners, consultants and CROs; clinical trials aren't going anywhere, because even a fully AI-designed drug's first patient is still a first-in-human trial; and a "new use" is not a "new molecule." All three are correct.

On Endpoints, a leader of an upper-midsize pharma company was quoted calling the one-employee biotech *"a stupid description that rests entirely on where you draw the corporate box"* ([Endpoints, 25:00](https://www.youtube.com/watch?v=xZQ8Bn27V1s&t=1500s)). Also fair. Mithril had one employee and eleven labs.

Simon Barnett's reply is the one I find most useful. He doesn't get bent out of shape about zero-person versus ten-person. What's new is that *"spinning up voice agents to literally call CROs… didn't exist 12 months ago,"* and that a lean team can now credibly prosecute something like ten ideas instead of one or two ([Endpoints, 26:32](https://www.youtube.com/watch?v=xZQ8Bn27V1s&t=1592s), [13:52](https://www.youtube.com/watch?v=xZQ8Bn27V1s&t=832s)). Saving on salaries is not what makes or breaks this. *"Biotech and pharma it's always been a bit of a numbers game… being able to have more legitimate shots on goal matters."* And then the line that anchors the whole debate: skeptics will say *"the ultimate equalizer is the clinic"* ([32:12](https://www.youtube.com/watch?v=xZQ8Bn27V1s&t=1932s)).

So here is my synthesis of the skeptics and the optimists. AI is not (yet) compressing the parts of drug development that are bound by biology: how fast disease progresses, how long safety takes to show, how many patients exist. It is compressing **coordination**, the dead time between steps. Peltan makes this concrete with a rate-limiting-step argument. A toy version:

```
A first-in-class program:
  design 6 mo · animal validation 18 · waiting for a decision/funding 24
  Phase 1 18 · Phase 2 30                        → total 96 months

AI cuts design 6 → 1 month                       → 5% faster
Committed capital + fast decisions remove the 24-month wait → 25% faster
```

The impressive demo (faster design) barely moves the total. Removing the waiting moves it a lot. The Keytruda story is the same lesson at the scale of a decade.

---

## 6. So who does what in this world?

### Big pharma

Bruce Booth posted a Halloween thought experiment ([X](https://x.com/LifeSciVC/status/2116604695800074576)) that I think is the most important thing written about this moment. He notes the frontier labs' current bio bets are tiny, about 0.1% of their expected market caps, "small (and beautiful) case studies." If a ~$2T post-IPO lab really wanted to test AI at scale in drug R&D, he argues, it should buy a big pharma company, for example BMS, in an all-stock deal for under 10% of its market cap, and rebuild it with *"compute and integration in the center, intercolated with deep biology and drug hunting capabilities, with operational execution on the periphery."* Keep the ~3,000 R&D scientists, mine the historical datasets, cut me-too spend on crowded targets, aim at first-in-class "holy grail" programs. *"A great medicine makes a commercial franchise, a commercial franchise doesn't make great medicines."* He closes, half-joking, by making @Prof_Oak_ head of the BMS unit.

I take two lessons from it. First, a handful of one-person programs can show that AI helps a program; they cannot show that AI raises the success rate of a *portfolio*, because a few programs give too few data points to separate skill from luck. Testing the thesis at scale requires scale, and pharma is where scale lives. Second, pharma owns things a startup cannot buy quickly: decades of data on what *failed*, thousands of people who have taken drugs through Phase 3, global clinical and commercial machinery, and the balance sheet to run trials with thousands of patients.

So I don't think pharma becomes irrelevant. I think pharma's center of gravity shifts toward what only it can do: late-stage development, manufacturing at scale, launch, and being the buyer of last resort for de-risked assets. Barnett called the labs' technology *"a rising tide through and through,"* and noted that small teams can pursue the "mesoscale" commercial opportunities that sit just below the threshold that would motivate a large apparatus ([Endpoints, 29:26](https://www.youtube.com/watch?v=xZQ8Bn27V1s&t=1766s)). That is a real division of labor, not a zero-sum fight. The open question is cultural: whether 30,000-person organizations can change how they make decisions. Booth himself says his plan "probably can't be done."

### CROs and CDMOs

If a program is one drug hunter plus agents plus a network of outside labs, then the outside labs are the factory floor. Peltan's framing is useful: unlike rockets, where SpaceX had to vertically integrate because the supply chain was thin, the drug supply chain is *"deep, competitive, and modular,"* closer to electronics hardware, where companies design the product and buy most inputs as services.

That makes CROs and CDMOs *more* central, not less. But it changes what they compete on. One telling number from the Mithril report: the median time to Claude's first answer was about 96 seconds; the median time to a CRO's first reply was about **8.5 hours**. When the coordinating layer runs at machine speed, the vendor's response time, data formats, and willingness to plug into agent workflows become the bottleneck. I'd expect the CROs that make themselves *legible to agents* (clean APIs, structured data, fast quoting, transparent capacity) to win share, and the ones built around account managers and PDF reports to feel it. Keiper's point still holds: outsourced work still costs what it costs, and patients and drug supply don't get cheaper because the emails do.

### The frontier labs

Is this philanthropy? I don't think so, and I don't think it needs to be. Peltan's read is that the labs mostly want a **proving ground**: drug development has long verification loops, scattered context and many judgment calls, like much of the physical economy. *"If Claude and Codex can 'solve' drug discovery and development, they can likely solve most business problems."* Drugs are also durable gifts: once made, they keep helping people. Anthropic's own explanation for going deep is that *"the bottlenecks are distributed all throughout the drug development process,"* so you have to be inside real programs to find them.

The tension is obvious, and worth naming. Both labs sell models to pharma. Owning drug programs makes them, at least at the margin, competitors to their own customers. My guess is that the labs settle into something like what Tranbarger described as his third reason for joining: *"institutionalize & scale this new way of working, then put it in the hands of all of biopharma."* Run a few programs to learn where the friction is, then sell the tools that remove it. The programs are the R&D for the product.

---

## 7. Demis's ten years: too ambitious, or not ambitious enough?

In April 2025, Demis Hassabis told *60 Minutes* that the end of disease could be *"within reach, maybe within the next decade or so"* ([coverage](https://www.etvbharat.com/en/!technology/ai-could-cure-all-diseases-in-10-years-says-google-deepmind-chief-hassabis-enn25042202229)). Isomorphic Labs, spun out of Google DeepMind in 2021, raised a **$2.1B Series B** in May 2026 led by Thrive Capital, and Hassabis described the goal as *"building the platform to solve the overall problem, solving all disease."* At the time of that interview, Isomorphic had not yet put a drug into clinical trials ([Fortune via Yahoo Finance](https://finance.yahoo.com/sectors/healthcare/articles/demis-hassabis-rush-solve-disease-103631225.html)).

Is that pessimistic or optimistic? I think it depends entirely on what "solve" means, and it is worth separating three versions:

1. **Understand.** Have a credible molecular explanation and a designable intervention for most diseases. With AlphaFold-class tools, foundation models across 'omics, and agents that can read and run experiments at scale, ten years for a large share of this is ambitious but not crazy.
2. **Design.** Have a candidate molecule that should work. For many well-understood monogenic diseases this could happen much faster than ten years. Mithril went from idea to promising mouse data in under 18 months.
3. **Cure patients.** Have approved therapies that people actually receive. Here the clinic is the ultimate equalizer. A drug designed today and entering trials in 2028 would, on normal timelines, still be reading out pivotal data in the early-to-mid 2030s. Multiply that by thousands of diseases, the patients each trial needs, and manufacturing and access, and "cured within ten years" is clearly too ambitious for this version.

So I land in an odd place. Demis is probably *too optimistic* on version 3, and the rest of the industry is probably *too pessimistic* on versions 1 and 2. And the gap between 2 and 3 is exactly where the hub-and-spoke debate lives: who pays for, runs, and learns from the trials. If the industry keeps herding, AI makes version 2 cheaper while version 3 stays as slow and as expensive as ever, and we get Booth's indigestion. If AI is pointed at the *different bets* (novel targets, neglected diseases, the 20 programs a year on never-tested targets rather than the 326 on approved ones), the portfolio math starts to look like Lo's megafund again.

Tranbarger's version of the goal is the one I find most honest: *"better calls translate to more drugs, higher hit rates, broader patient impact, & likely, a disease or 10 or 100 cured."* Not all disease. A disease, or ten, or a hundred, and then more.

---

## 8. Permission to dream bigger

Here is what changed for me over these few weeks.

When I first watched Lo's talk, the megafund felt like a beautiful idea that institutions would never build. The missing pieces were institutional: no rater, no buyer, no capacity to run 150 programs at once. Some of those missing pieces now look like *software problems*. Running many programs in parallel is what Pipeline-in-a-Person is. Pricing the odds and correlations of a portfolio is what a good model trained on many programs' outcomes would do, which is to say, Araki's "oracle" would be, in effect, the missing biomedical Moody's. Araki ends his essay on unmet need: *"The shots are getting cheaper… So who's going to take them?"*

These developments feel like permission. Permission to raise our level of ambition. To stop treating "AI drug discovery" as a slightly faster way to make the 31st PD-1 or TIGIT program, and to use AI agents to maximize genuine discovery, research, innovation and invention: new targets, new mechanisms, diseases nobody has had the bandwidth to work on. A one-person company just took a rare pediatric muscle disease further in 18 months than many teams of fifty would have. If the cost of a serious shot keeps falling, the number of diseases we can afford to care about should keep rising.

I think we should all be trying this. Every scientist, engineer and drug hunter reading this should be finding out what they can do with a fleet of agents.

---

## 9. But don't become a babysitter

And yet. I want to end on the thing I care about most, because it is the easiest to lose in the excitement.

The danger is not that agents will fail. The danger is that they will succeed in ways we don't understand, and that we will slowly become orchestrators, overseers and babysitters of work we can no longer evaluate. A drug hunter who approves agent output they can't critique is not running a pipeline. They are rubber-stamping one.

Look closely at the Mithril report, which is admirably candid about this. Claude wrote 17 email drafts in one week; 12 were sent *after human editing*. Of six errors examined, Claude caught five itself, but at least three reached a CRO and two went unnoticed for more than four days. At BigHat, Claude and an Anthropic researcher reanalyzed the raw data and proposed a new protocol, and BigHat's scientists refined and ran it. At Enveda, Claude matched all 11 issues human reviewers found and flagged seven more, and human review was still needed to confirm them. Tranbarger's whole argument is that agents should free up time *for* scientific judgment, not replace it.

The evidence on human–AI teams says this doesn't happen by default. A 2024 meta-analysis in *Nature Human Behaviour* of 106 experiments ([Vaccaro, Almaatouq and Malone](https://pmc.ncbi.nlm.nih.gov/articles/PMC11659167/)) found that, on average, human–AI combinations performed *worse* than the best of humans or AI alone. But in tasks where the humans were better than the AI to begin with, and in creative work, combinations did gain. Synergy has to be designed. It comes from humans who understand the problem deeply enough to know when the machine is wrong.

Mathematics is showing what good collaboration can look like. In ["Mathematical exploration and discovery at scale"](https://arxiv.org/abs/2511.02864) (2025), Terence Tao, Javier Gómez-Serrano, Bogdan Georgiev and Adam Zsolt Wagner used DeepMind's AlphaEvolve across dozens of problems. The system proposed constructions at a scale no human could, and the mathematicians chose the problems, interpreted the results, and turned them into understanding. Neither alone would have produced the paper.

So my picture of the future is not AI agents replacing drug hunters, and it is not drug hunters supervising agents. It is **hybrid teams of human experts and AI agents acting in concert**, where each makes the other better: agents doing the orchestration, the parallel search, the grunt work and the first drafts; humans holding the causal understanding, the taste, the go/no-go calls and the responsibility. I think this will be the shape not just of biopharma, but of science broadly, and of mathematics.

For that to work, three things have to stay human, and stay central, especially as we accelerate:

- **Critical thinking.** Every agent claim should be sourced and checkable, and someone has to actually check.
- **Meaning-making.** A result is not an insight until a person understands *why* it is true and what it implies. We should insist on understanding the breakthroughs our agents help make, not just collecting them.
- **Human primacy in discovery.** The questions worth asking, which patients to serve, what risks are acceptable: these are human choices, and the people making them must understand the science well enough to own them.

Andrew Lo stood on a stage and said he didn't accept losing the people he loved to cancer. That refusal, that very human impatience, is the engine. AI is giving us a much bigger engine. Our job is to stay in the driver's seat, and to understand the road.

Gotta cure 'em all.

---

### Questions I'm still chewing on (try them yourself)

1. **Correlation.** If one frontier lab's models choose which targets dozens of spokes pursue, are those spokes independent bets? What would you measure to find out?
2. **Rate limits.** Pick a disease you know. Which step in its development is bound by biology, and which is bound by coordination? Which would AI shorten?
3. **Legibility.** Mahajan worries money flows only to legible projects. Does cheap AI-driven coordination make *illegible* projects (big, slow, common diseases) more fundable, or even less?
4. **Ten years.** Which of the three versions of "solve all disease" (understand, design, cure patients) do you think is achievable by 2035, and what is your single biggest reason?

### Sources and further reading

- Abhishaike Mahajan, ["Curious cases of financial engineering in biotech"](https://www.owlposting.com/p/curious-cases-of-financial-engineering), Owl Posting, Apr 27, 2026
- Andrew Lo, ["Can Financial Engineering Cure Cancer?"](https://singjupost.com/andrew-lo-can-financial-engineering-cure-cancer-at-tedxcambridge-transcript/), TEDxCambridge (transcript)
- Alex Araki, ["Roivant was ahead of its time"](https://alexaraki.substack.com/p/roivant-was-ahead-of-its-time) and [thread](https://x.com/alexsaraki/status/2115482839651328137), Oct 2026
- Egan Peltan, ["Pipeline-in-a-Person will help AI…"](https://blog.egan.bio/p/pipeline-in-a-person-will-help-ai) and [X post](https://x.com/EganPeltan/status/2115806359413305650)
- Alex Telford, [target-novelty chart](https://x.com/Atelfo/status/2116288011533164643), Oct 30, 2026
- Fougner et al., ["Herding in the drug development pipeline"](https://www.nature.com/articles/d41573-023-00063-3), *Nat Rev Drug Discov* 22, 617–618 (2023)
- Zhang, Osipenko & Hickman, ["Human and financial consequences of herding in oncology drug development: TIGIT inhibitors"](https://pmc.ncbi.nlm.nih.gov/articles/PMC12911736/), *BMJ Oncology* (2026)
- Robert Plenge, ["Breaking from the Herd: How Biopharma Can Escape Moloch's Trap"](https://plengegen.com/blog/moloch/), Apr 2026
- Bruce Booth, ["The fruits of AI drug abundance: indigestion in the near term"](https://lifescivc.com/2026/10/the-fruits-of-ai-drug-abundance-indigestion-in-the-near-term/), Oct 30, 2026, and ["Anthropic buys BMS" thought experiment](https://x.com/LifeSciVC/status/2116604695800074576)
- Jeb Keiper, [X post](https://x.com/JebKeiper/status/2115841057762000903) and ["The Myth Behind the N of 1 Biotech"](https://jebkeiper.substack.com/p/the-myth-behind-the-n-of-1-biotech)
- Endpoints News live with Simon Barnett (Dimension), ["Is biotech's future full of zero-employee startups?"](https://www.youtube.com/watch?v=xZQ8Bn27V1s), Oct 30, 2026
- Anthropic, ["Early progress in drug development"](https://www.anthropic.com/research/early-progress-drug-development) and [Mithril technical report](https://www-cdn.anthropic.com/52e1f5d50c47ca3818f56704c27cf19e59b62e77.pdf), Oct 27, 2026
- Cody Tranbarger (@Prof_Oak_), [reveal thread](https://x.com/Prof_Oak_/status/2115185849424048564), Oct 27, 2026
- OpenAI, [Orchestra Bio announcement](https://x.com/OpenAI/status/2112607347688583586); [RuntimeWire](https://runtimewire.com/article/openai-acquires-orchestra-bio-drug-development-operations)
- [Fierce Healthcare on Coefficient Bio](https://www.fiercehealthcare.com/biotech/anthropic-acquires-stealth-ai-startup-coefficient-bio-400m-deal)
- Nathan Vardi, [*For Blood and Money*](https://www.shortform.com/summary/for-blood-and-money-summary-nathan-vardi) (2023); [Pharmacyclics buys Celera programs](https://www.biospace.com/pharmacyclics-inc-buys-drug-candidates-from-celera-genomics) (2006); [AstraZeneca–Acerta](https://businesswire.com/news/home/20151216006501/en/Acerta-Pharma-Announces-Strategic-Transaction-with-AstraZeneca) (2015)
- [Forbes on Keytruda's history](https://www.forbes.com/sites/davidshaywitz/2017/07/26/the-startling-history-behind-mercks-new-cancer-blockbuster/); [Day One on Ojemda](https://www.dayonebio.com/giving-new-life-to-medicines-article/)
- Benjamine Liu, ["Introducing the $600M Formation Bio fund"](https://www.benjamineliu.com/p/introducing-the-600m-formation-bio), Oct 28, 2026
- Capable, [Fall update](https://progress.capable.com/p/202610), Oct 16, 2026, and [capable.com](https://capable.com/)
- [Fortune/Yahoo on Isomorphic's $2.1B raise](https://finance.yahoo.com/sectors/healthcare/articles/demis-hassabis-rush-solve-disease-103631225.html)
- Vaccaro, Almaatouq & Malone, ["When combinations of humans and AI are useful"](https://pmc.ncbi.nlm.nih.gov/articles/PMC11659167/), *Nature Human Behaviour* (2024)
- Georgiev, Gómez-Serrano, Tao & Wagner, ["Mathematical exploration and discovery at scale"](https://arxiv.org/abs/2511.02864) (2025)
