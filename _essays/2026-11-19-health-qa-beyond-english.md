---
title: "Worse health advice outside English, and where it goes wrong"
date: 2026-11-19 23:50:00 +0530
excerpt: "Across two studies, the same four open models answered the same health questions in English, Hindi and Spanish. Three of four gave worse advice in both languages, about twice as much worse in Hindi as in Spanish. The models recognised the questions. The grader wasn't to blame. Here's what I can say about why, and what I can't yet."
tags:
  - multilingual LLMs
  - health
  - Hindi
  - Spanish
  - HealthBench
  - MedQA
---

*Draft, 19 November 2026. Claude drafted this from the two studies' results, and I set the questions and checked the numbers. It pulls together [Understood in Hindi, answered worse](/essays/2026/11/health-qa-in-hindi/) and [Understood in Spanish, answered a little worse](/essays/2026/11/health-qa-in-spanish/).*

I asked four open models the same health questions in English, Hindi and Spanish: Qwen3-1.7B, Qwen3.8-27B, Gemma 4 31B and gpt-oss-120b. Physicians wrote the rubrics, and Gemini 3.8 Flash graded every answer against them. Three of the four models gave clearly worse advice in Hindi, and the same three gave worse advice in Spanish, by about half as much. Gemma 4 was the exception both times.

Then I tried to find where the points go. A health answer passes through a few steps: the model reads the question, works out what to say, writes it, and a grader reads it. I checked each step with an experiment.

## The drop, side by side

| Drop from English | Hindi | Roman Hindi | Hinglish | Spanish | Spanish, no accents | Spanglish |
|---|---|---|---|---|---|---|
| Qwen3-1.7B | −0.36 | −0.40 | −0.30 | −0.15 | −0.20 | −0.20 |
| Qwen3.8-27B | −0.10 | −0.21 | −0.12 | −0.07 | −0.05 | −0.06 |
| gpt-oss-120b | −0.18 | −0.20 | −0.12 | −0.07 | −0.08 | −0.08 |
| Gemma 4 31B | −0.02 | −0.08 | −0.03 | 0.00 | −0.01 | −0.04 |

*Average change in HealthBench score from the English answer to the same question, on the 87 general questions both studies kept. Scores run from 0 to 1. Each study's drops are measured against its own grading of the same English answers, which agree within 0.02. English scores were 0.21 for Qwen3-1.7B, 0.52 for Qwen3.8, 0.47 for gpt-oss and 0.46 for Gemma.*

For gpt-oss, a drop of 0.18 means its Hindi answers meet about 38% fewer rubric points than its English ones. These aren't small effects for a model someone might put in front of patients.

## What it isn't

**It isn't the grader.** If Gemini marked non-English text down, translating an answer into English should raise its score. I translated the answers of three models into English with a different model and graded them again. In both languages the translations scored within a few hundredths of the originals, and never clearly higher, in all eighteen model and form pairs. Grading the same English answers twice also gave the same scores within 0.02.

**It isn't that the model fails to recognise the question.** While each model read a question, I saved its internal state at every layer and checked whether the nearest English question was the question's own translation. At the best layer, 93 to 100% of Hindi questions and 100% of Spanish questions found their own English twin, where chance is about 1%. Even Qwen3-1.7B, whose Hindi answers scored zero, does this. Matching a twin isn't the same as catching every clinical detail, though, and that matters below.

**It isn't how closely the question lines up with English.** If a loose match caused the loss, the questions that matched English most closely would lose least. Across both studies the rank correlation between closeness and loss sits near zero, and most intervals include zero. On the general questions the strongest explains about 5% of the variation.

## Where it does go wrong

**For a small model, writing the language is a big part of it.** When I asked Qwen3-1.7B a Hindi or Spanish question but told it to answer in English, it won back 40 to 70% of its Hindi drop and 57 to 79% of its Spanish drop. Its trouble is largely producing good text in the other language.

**For a larger model, the question itself costs points.** Qwen3.8-27B answering a Devanagari Hindi question in English won back only 9% of its drop, with an interval that includes zero. So most of its loss happens before it writes a word, while it works from a Hindi question it has matched to the right English one. Either my machine translations changed some clinical detail, or the model keeps the gist of the question and loses the specifics. I can't yet tell those apart. A native speaker checking the questions would. For Spanish its drops were too small, 0.05 to 0.07, for this test to say much.

**More exposure to the language helps, but doesn't close the gap.** Spanish is far better covered than Hindi in most training data, and the Spanish drop was about half the Hindi one on the same questions. It was clearly smaller in 19 of 36 model, form and set pairs, and clearly bigger in none. If the loss were only about data, I'd expect Spanish to lose close to nothing. It doesn't, for three of four models.

**Advice loses more than recognition.** On four-option USMLE questions from MedQA, the same models lose less. In Hindi, gpt-oss keeps 80% of its English accuracy in romanized Hindi but only 59% of its English HealthBench score. In Spanish it keeps 92% of its accuracy and 84% of its score. Picking the right option from a list holds up better outside English than explaining what to do and when to see a doctor.

**How people type matters.** On open questions, Hindi typed in Roman letters was the worst form for every model, and it's how many people type Hindi on a phone. In Spanish, dropping accents and ¿ ¡ cost every model 4 to 8 points on multiple choice, the only form that hurt all four. Most multilingual test sets use the textbook form of each language.

## Why, as best I can tell

Putting the pieces together, the models recognise a non-English question well. The points go missing between that representation and a good answer: in how the model reasons from the question, and, for smaller models, in how it writes. The drop shrinks with more exposure to a language and is bigger for open advice than for picking an option.

My working explanation is that the skill of giving careful health advice is learned mostly in English and carries over to other languages only in part. Most instruction tuning and preference data is in English, and a rubric rewards exactly the things that tuning teaches: asking about red flags, saying when to seek care, hedging where the evidence is thin. That would explain why recognition survives and advice doesn't, and why a better-covered language loses less. I haven't tested it, though. Testing it would mean comparing models whose tuning data differ only in language, or patching an English answer's middle-layer state into a Hindi run and seeing whether the advice improves.

Gemma 4 is the counterexample that keeps me honest. It loses almost nothing in Devanagari Hindi or in Spanish, on the same questions. Something in how it was built carries the advice over, and I don't know what.

## What I'd do with this

- **Test in the language and the form people use.** Romanized Hindi and accent-free Spanish, not only Devanagari and textbook Spanish.
- **Don't pick a model from its English score.** Qwen3.8 writes the best English answers here, and Gemma 4 the best Hindi ones.
- **Don't count on "answer in English, then translate back".** For the larger model it barely helped in Hindi.
- **Test open answers, not only multiple choice.** Multiple choice hides much of the gap.

## What I haven't checked

- **No native speaker** has read the translated questions or the answers, in either language.
- **One grader**, Gemini 3.8 Flash. The controls show it treats Hindi and Spanish fairly, but a doctor reading a sample is still the real check.
- **Four models and two languages.** I'd want a third language, one with a different script and less data than Spanish, before calling this a general law.
- **About 100 questions per set**, which is enough to see the drops but too few to pin down weak correlations.

## Try it yourself

Before you open the answer: Qwen3.8 matches a Hindi question to its English twin almost every time, and answering in English barely helps it. Which single experiment would tell "my translation dropped a clinical detail" apart from "the model keeps the gist and loses the specifics"?

<details><summary>One answer</summary>

Have a native speaker fix the Hindi questions so that each says exactly what the English one says, and rerun only those. If the drop shrinks, the translation was the problem. If it stays, the model is losing specifics from a faithful question, and the next step is to find which details go missing, such as doses, ages or red-flag symptoms.

</details>

Code, questions, answers and grades from both studies are available on request.
