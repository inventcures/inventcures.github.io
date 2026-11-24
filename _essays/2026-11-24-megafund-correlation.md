---
title: "What ten years of hub-and-spoke biotech say about Andrew Lo's megafund"
date: 2026-11-24 13:00:00 +0530
permalink: /essays/2026/11/andrew-lo-megafund-to-cure-cancer/
redirect_from:
  - /megafund-correlation/
  - /essays/2026/11/megafund-correlation/
excerpt: "Andrew Lo showed that 150 independent long-shot drugs could back a bond. New trial data from his own group finally measures how independent drug bets are, and BridgeBio, Centessa and Roivant show where the idea broke. The trouble came less from the drugs than from how those companies were financed."
tags:
  - drug development
  - biotech finance
  - megafund
  - hub-and-spoke
  - correlation
---

*Draft for comment, 24 November 2026. Claude helped me research and draft this from the sources at the bottom, and I set the argument and checked the numbers. Comments and corrections are very welcome.*

If you'd rather watch, here's a six-and-a-half minute animated version. It adds two case studies the essay only touches on, the bapineuzumab insider trade and the PrEP trial that money nearly passed over.

{% include substack-player.html id="megafund-video" src="/files/megafund/megafund-explainer.mp4" poster="/files/megafund/megafund-explainer-poster.jpg" vtt="/files/megafund/megafund-explainer.vtt" title="Can 150 long-shot drugs back a bond? 6:38" youtube="https://youtu.be/vto6MOwswXA" %}

I found Andrew Lo's [TEDx talk](https://www.youtube.com/watch?v=xu86bYKVmRE) through Abhishaike Mahajan, who linked it in his [Owl Posting essay](https://www.owlposting.com/p/curious-cases-of-financial-engineering) on financial engineering in biotech and told readers to watch the whole thing. I did, it became my favourite TED talk, and a few weeks later I wrote a long essay called ["Cure 'Em All"](/cure-em-all/) that relied on it a lot. Since then I've been reading about what happened to the companies that tried his idea, and I think I relied on the wrong half of it.

Lo's pitch, in his own numbers, goes like this. One cancer drug candidate costs about $200 million, takes about ten years and has roughly a 1 in 20 chance of working. If it works it is worth about $12.3 billion. Nobody sane puts their retirement into one of those. But own 150 of them in a $30 billion fund and, if they are independent, the chance of at least three winners is 98%. Something that reliable can issue bonds, and pension funds and insurers buy bonds in amounts biotech VCs will never match. The paper behind the talk is Fernandez, Stein and Lo in Nature Biotechnology, 2012. My grandmother died of leukemia before I was born, which is part of why I go by tp53, so I have a soft spot for anyone who says out loud that he won't accept losing more people to cancer and then sits down and does the arithmetic.

The megafund was never built. Lo's 2024 paper with BridgeBio's Neil Kumar notes that no company has issued publicly rated debt backed by drug programs. Mahajan blames missing institutions, a "biomedical Moody's" to rate the pools and a "biomedical Fannie Mae" to buy them, and he's probably right that those matter. But a handful of companies did try smaller versions of the idea, and what went wrong for them had more to do with money than with institutions.

## The correlation finally has numbers

Until recently the megafund papers had to assume a correlation. Lo and Siah wrote in 2021 that a literature search turned up no historical estimates, so they used 0.2. There are numbers now, though nearly all of them come from Lo's own group, which is worth keeping in mind. Jørring, Lo, Philipson, Singh and Thakor found approval correlations of roughly 0.11 to 0.14 between programs inside the same firm, across most years from 2000 to 2016. And in June this year Dai, Lo, Singh, Xu and Zhang, in the [Oxford Bulletin of Economics and Statistics](https://doi.org/10.1111/obes.70025), estimated correlations across more than 25,000 trials: about 10% within a therapeutic area, up to 40% among trials that share a phase or mechanism, and slightly negative among trials for the same disease. Their reading of that last one is a first-mover effect, which matches what you'd guess if a rival's approval shrinks your market.

Jørring and co-authors call within-firm correlations of that size "very low", and I don't think they are. If N programs have a pairwise correlation ρ between their outcomes, the variance of the number of winners behaves as if you held N / (1 + (N − 1)ρ) independent programs, and that number can't go above 1/ρ however big N gets. At ρ = 0.1 the ceiling is ten programs' worth of diversification. At 0.4 it's two and a half.

The ceiling is about variance, though, and a bondholder cares about the bad tail, which gets worse much sooner. I simulated Lo's 150 programs at 5% each with a one-factor Gaussian model, the type his group uses, and a factor correlation of 0.2. In the 2012 paper the bonds default if fewer than two drugs succeed. With independent programs that happens about 0.4% of the time. In my run it happens about 21% of the time, and about one run in ten produces no drug at all. The correlation between two programs' actual outcomes in that run is only about 0.06, below the 0.1 or so that Dai and Jørring measured. The expected number of winners stays at 7.5 the whole time. Lo's 2013 paper with Fagnan, Fernandez and Stein ran the same kind of model and needed about 600 programs, a $120 billion fund, to get the bonds back to the same safety at a factor correlation of 0.1. Adding programs can still rescue the bonds when correlation is that low, but only by making the fund four times bigger.

Herding makes all of this worse. Thirty-odd TIGIT antibodies went into roughly 220 trials, and as far as I know nobody has measured the correlation inside that group. Dai and colleagues report correlations of up to 40% within shared mechanism groups. If TIGIT sat anywhere near that, thirty programs carried roughly the risk of two or three independent ones, which fits how they failed, one after another.

## The part Lo couldn't diversify

Correlations around 0.1 hurt a bond structure, but they're a long way from the 0.4 of a crowded mechanism. A fund that spreads across mechanisms and diseases on purpose gets most of what Lo promised. The bigger problem showed up somewhere else.

BridgeBio is the nearest thing to a megafund that anyone has built, and Lo co-founded it. On 27 December 2021 it reported that acoramidis had missed its 12-month endpoint in ATTRibute-CM. Patients on drug lost 9 metres of walking distance and patients on placebo lost 7. The stock fell 67% that day. BridgeBio had more than 30 programs, mostly in unrelated rare genetic diseases. Over the next months it cut about 30% of staff, paused programs whose value "no longer covered the cost of capital", and sold a priority review voucher for cash. Then acoramidis hit its 30-month endpoint in July 2023, and the FDA approved it as Attruby in November 2024. Three of the other programs went on to win Phase 3.

None of the paused programs had anything biological to do with acoramidis. What tied them to it was the company's stock and its more than $2 billion of debt, during a selloff that took the XBI biotech index down about 62%. A database of trial outcomes, like the one Dai and colleagues used, has no way to see that kind of link.

Mahajan's essay has a second case. Medicxi built Centessa in 2021 out of ten single-asset companies in unrelated areas, which is about as diversified as a listed biotech gets. Mahajan's verdict is that "the model did not work", and the company only won once it narrowed down to its orexin program, which Lilly agreed to buy in early 2026. Roivant is more mixed. It has had real successes, but most of its realized value came from two events, the $7.1 billion Telavant sale to Roche and the LNP patent settlement Genevant won from Moderna. That's a venture-style power law, the opposite of what a bond buyer wants. I suspect public investors who want diversification just buy ten biotech stocks and see no reason to pay a hub's overhead for it.

## The other way people make money from this

Mahajan's newer piece for Works in Progress, ["The edge of biotech hedge funds"](https://worksinprogress.co/issue/how-do-biotech-hedge-funds-make-money/), is about the people who do make money from drug risk, and they work the opposite way. They try to know more about one readout than the price does. Mostly that means reading trial registrations and abstracts nobody else bothered to compile, or paying for expert calls and watching for the moment a clinician hesitates. In SAC Capital's bapineuzumab trade it meant a safety-committee chair telling a portfolio manager the drug was failing, which ended in a conviction. Singh, Lo and colleagues looked at 13,807 trial readouts and found that prices react on the day and then stop moving. If there's money to be made, it's made by estimating the odds better before the news comes out.

So a megafund lives or dies on low correlation, while a specialist fund lives or dies on prediction and barely thinks about correlation at all. If I had to pick where to spend effort I'd pick prediction. Jack Scannell and Jim Bosley showed in 2016 that raising the correlation between a screening model's output and human outcomes by 0.1 can be worth a 10 to 100 fold gain in throughput, and better odds per program help whether or not your programs are correlated, while extra programs help less and less as you approach the ceiling.

## So what does AI change?

In "Cure 'Em All" I argued that AI agents could make the megafund practical again, because running many programs in parallel starts to look like a software problem. I'd now attach conditions to that.

The one that worries me most is about where targets come from. If one model picks targets for dozens of programs, they inherit its blind spots, and they may end up more alike than programs picked by separate teams who read different papers. An AI hub that calls itself diversified should measure the correlation of what it picks and cap how many programs share a mechanism.

I'd also spend agents on making each program better aimed before using them to make more programs, for example by reading across literatures for independent evidence that points the same way, or by designing early human measurements less noisy than a symptom score.

On money, I'd finance programs separately where possible and keep debt away from the parent company. BridgeBio's later spinouts go this way. Royalty buyers, who put about $29 billion into deals between 2020 and 2024, already price drugs one at a time.

Two cheap things would help. Any company or fund that sells itself as diversified could publish its effective number of independent programs, using correlations estimated by mechanism and therapeutic area. And somebody could maintain an open version of the correlation table Dai and colleagues estimated, with every trial tagged by target and indication. That table is the rating input Mahajan says is missing. Current models could do a first pass on the tagging, with people checking it.

I haven't resolved Mahajan's biggest worry. Every one of these tools rewards bets whose odds are easy to write down, which is why finance loves rare monogenic diseases. He asks whether GLP-1 drugs, or PrEP, would ever have come out of a financialized process, and I doubt it. Philanthropic and public funders could take more of those bets, and they'd be the least correlated with everything else in the system. I don't know how many of them anyone can afford, or who would choose.

## References

1. Fernandez, Stein and Lo, "Commercializing biomedical research through securitization techniques", Nature Biotechnology 30, 964 to 975, 2012. doi:10.1038/nbt.2374
2. Fagnan, Fernandez, Lo and Stein, "Can Financial Engineering Cure Cancer?", American Economic Review Papers and Proceedings 103, 406 to 411, 2013. doi:10.1257/aer.103.3.406
3. Lo and Siah, "Financing Correlated Drug Development Projects", Journal of Structured Finance 27, 17 to 34, 2021. doi:10.3905/jsf.2020.1.114
4. Jørring, Lo, Philipson, Singh and Thakor, "Sharing R&D Risk in Healthcare via FDA Hedges", Review of Corporate Finance Studies 11, 880 to 922, 2022. doi:10.1093/rcfs/cfab024
5. Dai, Lo, Singh, Xu and Zhang, "Estimating Correlations Between Clinical Trial Outcomes Using Generalised Estimating Equations", Oxford Bulletin of Economics and Statistics 88, 553 to 567, 2026. doi:10.1111/obes.70025
6. Kumar, Lo, Shukla and Stephenson, "Applications of Portfolio Theory to Accelerating Biomedical Innovation", Journal of Portfolio Management 51, 213 to 236, 2024. doi:10.3905/jpm.2024.51.1.213
7. Singh, Rocafort, Cai, Siah and Lo, stock price reactions to clinical trial outcomes, PLoS ONE 17, e0272851, 2022.
8. Scannell and Bosley, "When Quality Beats Quantity", PLoS ONE 11, e0147215, 2016.
9. A. Mahajan, "Curious cases of financial engineering in biotech", Owl Posting, 27 April 2026. https://www.owlposting.com/p/curious-cases-of-financial-engineering
10. A. Mahajan, "The edge of biotech hedge funds", Works in Progress, 19 November 2026. https://worksinprogress.co/issue/how-do-biotech-hedge-funds-make-money/
11. A. Lo, "Can Financial Engineering Cure Cancer?", TEDxCambridge, 2015. https://www.youtube.com/watch?v=xu86bYKVmRE
12. BridgeBio Pharma, Month-12 topline results from ATTRibute-CM, 27 December 2021.
13. A. Makani, "Cure 'Em All", November 2026. https://inventcures.github.io/cure-em-all/
