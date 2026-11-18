---
title: "Understood in Hindi, answered worse"
date: 2026-11-18
excerpt: "I asked four open models 429 health questions in English, Hindi, romanized Hindi and Hinglish, and read their middle layers while they did. At their best layer, the models matched 93 to 100% of Hindi questions to their English twins. Every model still answered worse in Hindi, from a 0.03 drop for Gemma 4 to a score of zero for Qwen3-1.7B."
tags:
  - interpretability
  - multilingual LLMs
  - Hindi
  - health
  - HealthBench
  - MedQA
---

*Update, 18 November 2026, 10:45 pm IST. A reviewer asked whether the Hindi drop comes from the models or from my translations and my grader. So I ran two controls. In one, the models get the Hindi question with a line asking for an English answer. In the other, a separate model translates the Hindi answers into English so I can grade them again. Both have run, but they aren't graded yet. I describe them in [Two controls](#two-controls) below and will add their scores once grading is done.*

*Draft, 18 November 2026. Claude drafted this from the study's results, and I set the questions and checked the numbers. It follows [Where Hindi meets English inside five open LLMs](/essays/2026/11/shape-of-hindi-edison-version/), which asked how models represent Hindi. This one asks whether that representation predicts the answer. A fifth model, Sarvam-105B, finished only MedQA, and its results are in that section.*

A man in Patna types to a chatbot: *mere papa ko 3 din se bukhar hai aur ab saans lene mein dikkat ho rahi hai, kya karein?* My father has had a fever for three days and now he is struggling to breathe, what should we do? The right answer is to take him to a hospital now. I wanted to know whether a chatbot says that as readily in Hindi as in English.

In [the last essay](/essays/2026/11/shape-of-hindi-edison-version/) I found that open models line up a Hindi conversation with its English translation in their middle layers, some of them almost perfectly. So I guessed that a model that holds a Hindi question the way it holds the English one would answer it just as well. I tested that guess on health questions, because there a worse answer can hurt someone.

## What I found

1. **Every model answers worse in Hindi than in English.** I graded answers to 100 HealthBench questions against rubrics that physicians wrote. Gemma 4 31B loses 0.03 points in Hindi. Qwen3.8-27B and gpt-oss-120b lose 0.10 to 0.20. Qwen3-1.7B falls to zero.
2. **Romanized Hindi is the hardest form for every model.** Many Indians type Hindi this way on their phones, though I haven't found a reliable count. Hinglish, which keeps Hindi grammar and borrows English words, does about as well as Devanagari.
3. **Every model can tell which question it was asked.** At its best layer, each model matches a Hindi question to its own English twin 93 to 100% of the time. Chance is 1%. Qwen3-1.7B does this too, and then scores zero.
4. **Representation barely predicts the answer.** Within a model, a question that lines up closely with its English twin doesn't lose much less than one that lines up loosely. The rank correlation mostly sits between 0 and 0.25. I started with four hypotheses, and the one that fits best is that the models represent Hindi well and still answer it poorly.
5. **Multiple choice shrinks the gap for most models.** On 284 USMLE questions from MedQA, gpt-oss-120b keeps 80% of its English accuracy in romanized Hindi, while on HealthBench it keeps only 59% of its English score. Gemma 4 loses about the same on both.

## The setup

**Questions.** I used three sets.

- *HealthBench general.* I took 100 single-turn questions from OpenAI's HealthBench, drawing on its consensus subset first and balancing them over six themes such as emergency referrals, hedging and global health. Each comes with a rubric that physicians wrote, 1,238 items in all. A typical good item says the answer "advises the user to seek emergency care" and is worth 9 points. A bad one, worth minus 6, says it "recommends a specific antibiotic without a prescription".
- *HealthBench oncology.* I also took the 45 single-turn HealthBench questions that mention cancer.
- *MedQA.* I took 284 four-option USMLE questions. Of these, 186 match a list of cancer terms, and Gemini judged 30 of those to be mainly about oncology. I spread the other 98 evenly over 21 specialties.

**Forms.** Each question exists in four forms: the English original, everyday Hindi in Devanagari, the same Hindi typed in Roman letters, and Hinglish. Qwen3-32B wrote the three Hindi forms, keeping drug names, doses and lab values exactly. No native speaker has checked them yet, and that is the study's weakest point.

**Models.** I ran Qwen3-1.7B, Qwen3.8-27B, Gemma 4 31B and gpt-oss-120b with thinking turned off or set low. Each picked its most likely next token every time and wrote up to 1,536 tokens for a HealthBench answer and 512 for MedQA.

**Grading.** I followed HealthBench's recipe and had Gemini 3.8 Flash judge each answer against every item of its rubric, in whatever language the answer used. A score is the points met divided by the points possible, so a bad answer can go below zero. HealthBench uses GPT-4.1 as its grader and I didn't, so compare these numbers with each other and not with published ones. A MedQA answer is right or wrong.

**Representation.** While each model read a question, before it wrote a word, I saved its residual stream at every layer and averaged it over the question's tokens. I subtracted each form's average state, so that what's left is about the question and not about the script. Then at each layer I measured two things. *Retrieval* checks whether a Hindi question's nearest English question is its own twin. *Alignment* is the cosine between a question's state and its twin's.

## Every model answers worse in Hindi

| | English | Hindi | Roman Hindi | Hinglish |
|---|---|---|---|---|
| Qwen3-1.7B | 0.25 | 0.00 (−0.37) | 0.00 (−0.40) | 0.00 (−0.31) |
| Qwen3.8-27B | **0.55** | 0.46 (−0.10) | 0.36 (−0.20) | 0.45 (−0.11) |
| gpt-oss-120b | 0.49 | 0.32 (−0.17) | 0.30 (−0.20) | 0.36 (−0.13) |
| Gemma 4 31B | 0.49 | **0.46 (−0.03)** | **0.41 (−0.08)** | **0.46 (−0.03)** |

*HealthBench score on 100 questions. The bracket gives the average drop from English on the same question. As in HealthBench, averages below 0 show as 0, and Qwen3-1.7B's Hindi averages are slightly negative.*

Qwen3.8-27B writes the best English answers, but Gemma 4 writes the best Hindi ones. If I picked a model for Hindi users from the English column, I'd pick the wrong one. Qwen3-1.7B worries me more. Its Hindi answers trip more "must not do" items than they meet good ones, so on average they lose points. Before clipping, its Hindi averages run from −0.06 to −0.15.

Romanized Hindi is the worst form for every model. That column bothers me most, because it's how Hindi usually gets typed on a phone.

## Every model knows which question it was asked

Maybe the Hindi answers are worse because the model misread the Hindi question. The middle layers say it didn't, at least not the meaning. At each model's peak layer, 93 to 100% of Hindi questions find their own English twin among the 100, in all three Hindi forms.

Qwen3-1.7B is the starkest case. Its middle layers find the English twin almost every time, and then it writes an answer that scores zero. Whatever goes wrong happens after the model has matched the question to its English twin.

## Alignment barely predicts the drop

Within a model, I ranked the 100 questions by how closely each lined up with its English twin at the peak layer, and by how much its score dropped. If representation drove quality, the best-aligned questions would lose the least.

Mostly they don't. The Spearman correlation sits between 0 and 0.25 for most models and forms, and most of the 95% intervals include zero. Only two pairs clear zero. Gemma 4 on romanized Hindi has ρ = 0.25, with an interval of 0.04 to 0.43. Qwen3-1.7B on Hinglish has 0.24, with 0.05 to 0.43. Even there, alignment explains about 6% of the variation in the drop.

I started with four hypotheses. A question could be *represented well and answered well*, *represented well but answered poorly*, or *represented poorly and answered poorly*, or quality could be *proportional to representation*. The first fits Gemma 4. The second fits Qwen3-1.7B, and to a lesser degree gpt-oss and Qwen3.8 on romanized Hindi. The third barely happens, because almost nothing is represented poorly. The fourth gets weak support at best.

## Multiple choice shrinks the gap

MedQA asks for one letter, so it only tests whether a model recognises the answer. Giving advice is a different skill.

| | English | Hindi | Roman Hindi | Hinglish |
|---|---|---|---|---|
| Qwen3-1.7B | 48.2% | 14.8% | 33.1% | 45.8% |
| Qwen3.8-27B | 84.2% | 69.0% | 68.3% | 79.6% |
| gpt-oss-120b | **90.1%** | 78.9% | 71.8% | **85.6%** |
| Gemma 4 31B | 83.8% | **79.6%** | **72.9%** | 81.7% |

*MedQA accuracy on 284 four-option questions. Chance is 25%.*

Romanized Hindi is again the hardest form for the three bigger models. But for gpt-oss and Qwen3.8, multiple choice loses about half as much as open advice does. In romanized Hindi gpt-oss drops 20% of its English accuracy here, against 41% of its English HealthBench score. Qwen3.8 drops 19% against 36%. Gemma 4 loses about the same either way, 13% against 16%.

So a model can know enough Hindi to pick the right drug and still struggle to explain in Hindi when to go to hospital. A benchmark made only of multiple-choice questions would make gpt-oss look nearly as good in Hindi as Gemma, when on advice it isn't.

Qwen3-1.7B fails in its own way. In Devanagari it ignores the instruction to answer with a letter in 129 of 284 questions, and writes a long Hindi explanation until it runs out of tokens. I count those as wrong.

**Sarvam-105B.** India's own open model finished 258 of the MedQA questions in all four forms before it ran out of memory on the longest ones. On those 258, here it is next to the others.

| | English | Hindi | Roman Hindi | Hinglish |
|---|---|---|---|---|
| Qwen3-1.7B | 48.8% | 15.1% | 34.1% | 46.5% |
| Qwen3.8-27B | 83.7% | 69.4% | 68.2% | 80.2% |
| gpt-oss-120b | **90.3%** | 79.8% | 73.3% | **86.4%** |
| Gemma 4 31B | 83.7% | **80.6%** | **74.4%** | 82.2% |
| Sarvam-105B | 58.1% | 50.8% | 48.1% | 60.9% |

*MedQA accuracy on the 258 questions all five models answered in every form.*

Sarvam scores 20 to 32 points below the other large models in every form, English included. Its pattern matches theirs, with Hinglish its best form and romanized Hindi its worst. Part of the gap is format, not medicine. In 126 answers it reasons step by step and runs out of its 512-token budget before naming a letter, and I count those as wrong. With a bigger budget it would score higher, though I doubt it would close a gap that size.

The representation result holds here too. Every model matches 97 to 100% of the Hindi MedQA questions to their English twins at its peak layer. Alignment barely predicts which ones it gets right, with ρ between 0.03 and 0.10 and every interval crossing zero.

**Cancer questions.** On the 26 questions Gemini labels as mainly oncology, the pattern is the same. gpt-oss scores 96% in English and 81% in romanized Hindi, and Gemma scores 88% and 81%. With 26 questions each one is worth almost 4 points, so I wouldn't read much into the differences between models. On the 45 HealthBench cancer questions Gemma scores 0.54 in English and 0.41 in both romanized forms, a bigger drop than on general health questions.

## What this means

If I were building a health chatbot for India, I'd test it in romanized Hindi, because that's what people type and it's the hardest form for every model I tried. The Hindi test sets I've seen use Devanagari instead. I wouldn't pick a model by its English score either.

I'd also spend less effort on comprehension. The models already match the question to its English twin, so the loss comes somewhere between the middle layers and the written answer. I can't yet say where. So I'd try fixes that change how the model writes the answer. One is to take the question in Hindi, let the model answer in English, and translate the answer back.

## Two controls

A Hindi answer could score worse for three reasons. My translation of the question might be off, the grader might mark Hindi harder, or the model might really write worse advice in Hindi. Only the last one is what I claim, so I ran two controls to pull them apart.

**Control A asks in Hindi and wants the answer in English.** I gave Qwen3-1.7B and Qwen3.8-27B the same 100 questions in all four forms, each with one line in the question's own form asking for an English answer. In romanized Hindi that line reads *Kripya jawab English mein dein.* The English questions got the same line, so I can see what the instruction does on its own. Both models did as asked every time, and all 800 answers are more than 90% Latin script. Now the grader reads English in every case. If the Hindi-question scores climb back to the English level, the model read the Hindi question fine and the loss sits in writing Hindi, or in the grader. If they stay low, something goes wrong earlier, while the model works on the question.

**Control B translates the Hindi answers and grades them again.** I took the 900 Hindi answers I already had from Qwen3-1.7B, Qwen3.8-27B and gpt-oss-120b and had Qwen3-32B translate them into English. It's the model that translated the questions, and it isn't the grader, so Gemini never grades its own writing. If the translations score about the same as the Hindi originals, the grader treats Hindi fairly. If they score near English, the grader penalises Hindi text and part of the gap in my tables is the grader's.

Two things show up before any grading. The translator smooths Qwen3-1.7B's garbled Hindi into fluent English, so Control B will flatter that model. And 92 of its 300 translations hit the length limit, because its Hindi answers loop and repeat, against 2 for the other two models together. I also noticed that gpt-oss sometimes answers a romanized Hindi question in Devanagari.

The two controls cost about $7. Their scores go into the next update, along with the cancer grades.

## What I haven't checked

- **No native speaker has read the questions or answers.** A clumsy translation could make a question harder. The near-perfect retrieval suggests the meaning survived, but it tells me nothing about the tone.
- **One grader.** Gemini judged answers in all four forms. If it grades Hindi more harshly, the grader causes part of the drop. Control B tests exactly this, and a doctor reading a sample would settle it.
- **Sarvam-105B is mostly missing.** India's own open model was the one I most wanted to see. On my setup it ran about seven times slower per token than gpt-oss, and Modal took its GPUs away twice. Both of its HealthBench runs failed before writing an answer, so I dropped them to stay in budget. It answered 258 MedQA questions in all four forms, which I report above.
- **Only 100 questions.** The intervals on the correlations are wide, and confirming a correlation of 0.25 would take a few hundred.
- **Cancer questions.** gpt-oss and both Qwen models have now answered the 45 HealthBench cancer questions in all four forms, but their grades wait on my grading quota. Those go into the next update.

## Try it yourself

Try this before you open the answer. Qwen3-1.7B matches nearly every Hindi question to its English twin and then scores zero. Design one experiment that tells "it can't *write* good Hindi" apart from "the meaning gets lost in the late layers".

<details><summary>One answer</summary>

Ask the question in Hindi but tell the model to answer in English, and grade that English answer. If the score climbs back toward the English baseline, the model read the question fine and the loss is in writing Hindi. If it stays low, the meaning is getting lost between the middle layers and the output. A finer version patches the middle-layer state from the Hindi question into the English run and checks whether the English answer survives.

</details>

That first experiment is Control A above, and its scores come in the next update.

The preprint, with the methods in full, is [here as a PDF](/files/health-qa-in-hindi.pdf). Code, questions, answers and grades are in [inventcures/shape-of-hindi](https://github.com/inventcures/shape-of-hindi) under `src/health/`. The whole study, controls included, cost me about $63 of GPU time and grading.
