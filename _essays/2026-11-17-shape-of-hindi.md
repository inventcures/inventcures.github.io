---
title: "The shape of Hindi: mapping one language, three scripts and a lot of English inside an LLM"
date: 2026-11-17
excerpt: "A recent field note mapped thousands of English and Chinese conversations inside Qwen3-1.7B and found Chinese sitting off to one side. What would the same map show for Hindi, which arrives as Devanagari, Urdu script, romanized text and Hinglish? A plan, the research behind it, and a link to Anthropic's finding that Claude is warmest in Hindi."
tags:
  - interpretability
  - multilingual LLMs
  - Hindi
  - Indic languages
  - AI values
---

A woman in Lucknow types into a chatbot: *mera business plan dekh ke batao kaisa hai*. Look at my business plan and tell me how it is. Her cousin in Karachi types the same words in Urdu script: میرا بزنس پلان دیکھ کے بتاؤ کیسا ہے. Her nephew in Pune writes it in Devanagari, but in Marathi, which is a different language that happens to share Hindi's alphabet. A fourth person writes the whole thing in English.

To a Hindi speaker the first two are the same sentence. The third is a cousin of it, and the fourth is a translation. I wanted to know whether a language model sees them the same way, and if not, where inside the model the differences live.

Two things sent me down this path in the same week. One was a field note by operator0x that mapped thousands of conversations inside Qwen3-1.7B and found Chinese sitting to one side of English.[^op] The other was Anthropic's July 2026 study showing that Claude leans further toward warmth in Hindi than in any of its top 20 languages, and furthest toward rigor in Russian.[^vml] One is a picture of geometry and the other is a measurement of behaviour. I think they are two views of the same question, and Hindi is the best language I know of for asking it.

This essay covers what the field note did and what its critics said, what four years of multilingual interpretability research predicts, and the experiment I want to run. *This is the short version. The full plan, the related-work notes and the code are in the [shape-of-hindi repo](https://github.com/inventcures/shape-of-hindi), and there is a longer [draft paper (PDF)](/files/shape-of-hindi.pdf) with the maths and the exercise answers.*

## What the field note found

The setup, as reported, was simple.[^brief] Take Qwen3-1.7B, a small open model with 28 layers and 2,048 numbers in each hidden state. Feed it 900 templated question and answer pairs across 100 topics in four languages, plus 90 snippets of Python. At the end of each conversation, read off the residual stream, which is the running vector the model updates layer by layer. Fit one PCA frame to all of them and plot every conversation as a point in 3D.

The picture was striking. English conversations fell onto a flat plane, with about 99.3% of their spread in the view lying on it. Chinese sat visibly offset. Python sat near English. The author was honest about the main caveat: the three plotted axes keep only 17.6% of the total variance, and it takes 684 directions to reach 90%.

I could not load the original page from my research setup, so these numbers come via the Hacker News thread and a briefing that quotes them. If you want the original, read it first.

## What Hacker News said

The thread had 29 comments and the critiques were better than the average for a front-page post.[^hn] The ones that matter for a follow-up:

- **The last layer is the wrong place to look.** One commenter put it bluntly: at the last layer, the result mostly says Chinese tokens are followed by Chinese tokens. Show the middle layers.
- **The plane may come from the frame.** Another argued that including raw token embeddings when fitting the PCA squashes the conversations onto a plane.
- **End points are not paths.** Someone asked what the conversations look like along the way, between the first and last turn.
- **Length takes over.** A commenter who had built a similar map of Steam reviews with Qwen embeddings said review length dominated the layout until they fixed it. Another pointed out that search engineers have known about length bias since BM25, and a third suggested regressing out nuisance components before plotting, the way single-cell biologists remove read depth.
- **Try Urdu.** Someone wished for a third script family. A reply pointed out that Urdu uses Arabic script and is essentially the same spoken language as Hindi, which makes it a natural experiment.

The last comment is what got me. Hindi and Urdu are one spoken language written in two scripts. You can hold the words fixed and change only the alphabet. You almost never get a control that clean in language research.

## Why the last layer shows you the next word

The first critique deserves more than a nod, because it changes what the original picture means.

Qwen3-1.7B ties its input and output embeddings. The same matrix that turns a token into a vector at the start also turns the final vector into scores over the vocabulary at the end. The model's prediction is roughly the dot product of the final-norm state with every token's embedding. So the final-norm state is pushed, by training, to sit near the embedding of whatever token comes next.

A tiny example. Suppose there are only two tokens, an English "the" with embedding (1, 0) and a Chinese "的" with embedding (0, 1). If the model is about to write Chinese, its final state has to point roughly at (0, 1). Every Chinese conversation ends near (0, 1) and every English one near (1, 0). You will see a beautiful separation in the plot, and it tells you only that the model knows which language it is writing in, which it obviously must.

So the Chinese offset is real, but it is close to the least interesting thing the model could be doing.

## What the research says happens in the middle

Multilingual interpretability has converged on a three-part picture in the last few years, and the evidence comes from different methods that agree.

**Early layers are about the surface.** Script, spelling, how the tokenizer chopped the word. Tang and colleagues found that neurons specific to one language cluster in the first few layers and the last few, in a U shape across depth.[^lape] In Llama-2 70B, layer 2 had about 7,000 such neurons and the middle layers about 100 each.

**Middle layers are shared.** Wendler and colleagues ran the "logit lens" on Llama-2, which means decoding each layer's state as if it were the last, and found that when you ask about a Chinese word, the middle layers decode the right concept *in English* before the last layers switch to Chinese.[^llamas] Anthropic found the same thing with feature circuits in Claude 3.5 Haiku: the middle features are language-agnostic, and the fraction that is shared grows with model size, most of all for language pairs that do not share an alphabet.[^bio] Dumas and colleagues showed you can patch the middle-layer concept from one language into a prompt in another and the model carries the concept over while keeping the new language.[^tongue]

**Late layers convert back.** The language-specific neurons pile up again near the output, and the state has to commit to a script and a vocabulary.

There is a useful way to see the first two phases as geometry. Chang, Tu and Bergen found that in a multilingual model each language occupies a shifted copy of a shared space.[^geom] Subtract each language's average and the copies line up. Libovický and colleagues measured what that buys you: in mBERT, finding the translation of a sentence by nearest neighbour went from 77.6% to 83.8% correct after centring, while telling the language apart got harder.[^neutral] Much of "being Hindi" is one constant offset, and underneath it the meaning sits in a shared place.

Hindi has specific evidence of its own. Gurgurov and colleagues counted language-specific neurons in Llama-3.1-8B across 21 languages and found 781 for Hindi, second only to Tibetan.[^arith] The RomanLens study found something stranger. When Gemma-2 and Llama-2 write Hindi in Devanagari, the last six or seven layers pass through *romanized* subword pieces first, as if the model sounds the word out in Latin letters before writing it in Devanagari.[^romanlens] Chinese doesn't do this. A 2026 follow-up found a single direction that flips the output script while keeping the meaning, and five attention heads near the end that do the switching.[^latin]

## Why Hindi is a better test than Chinese

Chinese and English differ in almost every way at once: script, grammar, vocabulary, token cost, and how much of each the model saw in training. When they separate, you cannot say which difference did it.

Hindi lets you pull those apart.

| Comparison | What stays the same | What changes |
|---|---|---|
| Hindi in Devanagari vs Urdu in Nastaliq | spoken language, grammar, most words | script |
| Hindi vs Marathi, both Devanagari | script | language |
| Devanagari Hindi vs romanized Hindi | language, words | script and token count |
| Hindi vs Hinglish | grammar | some content words switch to English |
| aap vs tum vs tu | everything except the pronoun | social relationship |

The last row is what makes this more than a script study. Hindi encodes respect in the second-person pronoun. *Aap* is respectful, *tum* familiar, *tu* intimate or rude, and the verb changes to agree. "आप मेरी मदद करेंगे?", "तुम मेरी मदद करोगे?", "तू मेरी मदद करेगा?" all ask "will you help me?", and a Hindi speaker hears three different relationships. That puts a social variable inside the grammar, where we can manipulate it precisely.

There's also a cost no one in India can ignore. In the Qwen tokenizer, a Hindi word costs about four to five tokens where an English word costs about one and a quarter.[^tok] Romanized Hindi costs less than half what Devanagari does. Every Hindi turn is about four times as long as its English twin, which is exactly the length artifact the HN commenters warned about.

## The experiment

The full plan is in the repo, so here is the shape of it.

**Nine versions of every conversation.** English, Devanagari Hindi, romanized Hindi, Hinglish in Roman script, the same Hinglish in Devanagari, Urdu, Marathi, Chinese and Python. Same 100 topics, 6 templates each, 600 items per version. Half the topics are universal, like compound interest or how vaccines work, and half are Indian, like UPI payments, board exams and tatkal train booking, so we can tell language effects from content effects. Here is one item:

| Version | User turn |
|---|---|
| English | How does a UPI payment actually move money from my account to a shopkeeper's? |
| Hindi | यूपीआई पेमेंट असल में मेरे खाते से दुकानदार के खाते तक पैसे कैसे पहुँचाता है? |
| Romanized | UPI payment asal mein mere khaate se dukaandaar ke khaate tak paise kaise pahunchaata hai? |
| Hinglish | UPI payment actually mere account se shopkeeper ke account tak paisa kaise transfer karta hai? |
| Urdu | یو پی آئی پیمنٹ اصل میں میرے کھاتے سے دکاندار کے کھاتے تک پیسے کیسے پہنچاتا ہے؟ |

**Every layer.** We read all 29 hidden states, at the end of each turn, averaged over the reply, and at the moment before the reply starts. We drop the first token, which in Qwen3 carries "massive activations" hundreds of times larger than anything else and will hijack any PCA it touches.[^massive]

**Numbers before pictures.** The 3D plots stay, but claims come from metrics computed in the full 2,048 dimensions. The main one is mean-centred retrieval. Take the 600 English states and the 600 Hindi states at one layer, subtract each set's average, and for each English item ask whether its nearest Hindi neighbour is its own translation. Chance is 1 in 600. If raw retrieval is 40% and centred retrieval is 85%, then most of what separated the two languages was a single offset. We plot that number layer by layer.

**Controls for the things HN warned about.** Every metric computed raw, with log token count regressed out, and on a length-matched subset. The same analysis on Gemma-3, where Hindi costs about the same number of tokens as English, so if the geometry holds there, length isn't the explanation. UMAP plots with several seeds, side by side, with a warning label. Chari and Pachter showed that 2D embeddings like these lose most nearest-neighbour structure, so they never carry a claim.[^specious]

**Directions for causal claims.** PCA finds where the variance is, not what the model uses. A 2026 benchmark across 32 languages found difference-of-means directions steer output language 84.5% of the time on average and top PCA directions 15.1%.[^clas] So the "Hindi direction" we test causally is the difference between average Hindi and average English states. Add it to an English prompt and see whether the reply comes out in Hindi.

I wrote down predictions before running anything. Three I care most about:

1. At the last layer, Hindi separates from English at least as much as Chinese did.
2. Centred retrieval between Hindi and English peaks somewhere between layers 10 and 20 and falls at the end.
3. In the middle layers, Hindi is closer to Urdu than to Marathi. In the early layers, it's the other way round, because Hindi and Marathi share a script.

If the third one fails, I'll have learned something. It would mean the model groups languages by alphabet more than by meaning, even in the middle.

## The values thread

Anthropic's two values studies are where this stops being only about geometry.

The first, "Values in the Wild", labelled the values Claude expressed in about 308,000 subjective conversations and found 3,307 distinct ones.[^wild] The second compressed those into four axes and profiled Claude across models and the top 20 languages.[^vml] Warmth against rigor varied most. In Hindi, Claude leaned toward polite language, humour and affirming the user's ideas. In English and Russian, it leaned toward challenging assumptions and asking for evidence. The authors' own example is the one that stuck with me: two people asking for feedback on the same business plan, one in Hindi and one in Russian, may come away with different impressions of how good it is.

I find this both fascinating and a little uncomfortable. Hindi conversational norms do lean toward warmth and indirectness, and a model that matches them could be serving its users well. But if a founder in Jaipur gets gentler feedback on a weak plan than a founder in Moscow, that is a real difference in the help they get. Anthropic are careful to say they don't yet know which it is, or where it comes from.

An open model lets us look for a mechanism. The plan builds a warmth direction from English replies written under warm and rigorous instructions, checks that it steers, then projects Hindi and English replies to the same feedback requests onto it. Then it does the same with the three pronouns. If *aap* sits furthest along the warmth direction and *tu* least, the model's sense of social register and its sense of warmth may share machinery.

There's an important trap here. A 2026 study of sycophancy in Hindi found that most of the increase over English came from culturally adapted content, about 14 points for Qwen2.5-7B, and only about 2 from the language itself.[^beacon] So a warmer Hindi reply might be about what people ask in Hindi, not the language. That is why the topics are split into universal and Indian.

## What else I'd run

The repo has a longer list. The ones I'm most excited about:

- **Hinglish switch points.** In "kal mera exam hai aur maine abhi tak syllabus complete nahi kiya", watch the state at "exam", "syllabus" and "complete". Linguists describe Hinglish as Hindi grammar with English content words slotted in. Does the model's state jump toward English at each English word and snap back?
- **The family tree.** IN22 has the same sentences in 22 Indian languages. Build a tree from the model's internal distances and see if it splits Indo-Aryan from Dravidian, or just clusters languages by how many tokens they cost.
- **Gender in the verb.** In Hindi, "मैं गया" and "मैं गई" both mean "I went", but the first is a man speaking and the second a woman. English has no such cue. Does the model remember the user's gender ten turns later, and does it change the advice?
- **Safety in romanized Hindi.** An English refusal direction transfers across 14 languages, none of them Indian.[^refusal] Attack success on Llama-3-8B rose from 0.06 in English to 0.63 in Hinglish with phonetic misspellings.[^haet] I'd like to know whether the model fails to see the harm, or sees it and fails to act.
- **Other script pairs.** Serbian in Cyrillic and Latin, Punjabi in Gurmukhi and Shahmukhi, Chinese simplified and traditional. If Hindi and Urdu behave like these, the finding is about scripts in general.

## Check yourself

I learn best by doing problems, so here are a few. Answers are in the last section of the [paper (PDF)](/files/shape-of-hindi.pdf), with the same numbering.

1. The 3D view keeps 17.6% of total variance, yet English looks 99.3% flat in it. Construct a toy example in three dimensions where a frame keeps a small share of total variance but one group of points looks perfectly planar inside it.
2. In a two-token model with tied embeddings, "the" at (1, 0) and "的" at (0, 1), where does the final state sit when the model is 90% sure the next token is "的"? Why does that make the last layer a poor place to compare languages?
3. You have 600 English and 600 Hindi states. Raw retrieval is 12%. After centring it's 71%. In one sentence, what did centring remove?
4. Hindi costs about 4.75 tokens per word in Qwen3 and English about 1.26. A 50-word English reply becomes how many tokens, and its Hindi translation about how many? If you average states over the reply, why might that matter?
5. Which of these comparisons isolates script: Hindi vs Marathi, Hindi vs Urdu, Hindi vs Hinglish? Which isolates language?
6. A cloud of states has covariance eigenvalues 4, 4, 1 and 1. What is its participation ratio, the effective number of dimensions it uses? The formula is the square of the sum of the eigenvalues divided by the sum of their squares.
7. Suppose the warmth projection is higher for Hindi replies than English ones, but only on Indian-topic items. What would you conclude about where the lean comes from?

## Where this leaves me

The original field note drew a pretty picture and stopped. I don't think that's a flaw in a field note, but it left the most interesting question open. When a model reads a sentence, how much of what it does depends on meaning, and how much on the alphabet, the token count and the social register the sentence was written in?

Hindi is the right place to ask, because one spoken language arrives in three scripts, mixes freely with English, puts social relationships into its pronouns, and costs four times as many tokens as English in a popular open model. Most of the work is cheap. A 1.7B model fits on a laptop and the forward passes take under an hour. The slow part is native speakers checking 600 items in Hindi, Urdu, Marathi and Hinglish, and that is the part I'd least want to cut.

[^op]: operator0x, ["What thousands of conversations look like inside a language model"](https://operator0x.com/field-notes/qwen-conversation-state-space/), field note (November 2026).
[^brief]: Numbers as quoted in a [Hacker News front-page briefing](https://thecontext.dev/en/briefing/) (15 November 2026). I could not load the original page from my research setup.
[^hn]: [Hacker News discussion](https://news.ycombinator.com/item?id=50481321) of the field note (November 2026), 29 comments.
[^vml]: Kearney, Zhang et al., ["Claude's values across models and languages"](https://www.anthropic.com/research/claude-values-models-languages), Anthropic (13 July 2026).
[^wild]: Huang et al., ["Values in the wild"](https://www.anthropic.com/research/values-wild), Anthropic (21 April 2025); [paper](https://arxiv.org/abs/2504.15236) and [dataset](https://huggingface.co/datasets/Anthropic/values-in-the-wild).
[^lape]: Tang et al., ["Language-specific neurons: the key to multilingual capabilities in large language models"](https://arxiv.org/abs/2402.16438), ACL 2024.
[^llamas]: Wendler, Veselovsky, Monea, West, ["Do Llamas work in English? On the latent language of multilingual transformers"](https://arxiv.org/abs/2402.10588), ACL 2024.
[^bio]: Lindsey, Ameisen et al., ["On the biology of a large language model"](https://transformer-circuits.pub/2025/attribution-graphs/biology.html), Transformer Circuits (2025), multilingual circuits section.
[^tongue]: Dumas et al., ["Separating tongue from thought: activation patching reveals language-agnostic concept representations in transformers"](https://arxiv.org/abs/2411.08745), ACL 2025.
[^geom]: Chang, Tu, Bergen, ["The geometry of multilingual language model representations"](https://arxiv.org/abs/2205.10964), EMNLP 2022.
[^neutral]: Libovický, Rosa, Fraser, ["On the language neutrality of pre-trained multilingual representations"](https://arxiv.org/abs/2004.05160), Findings of EMNLP 2020.
[^arith]: Gurgurov et al., ["Language arithmetics: towards systematic language neuron identification and manipulation"](https://arxiv.org/abs/2507.22608), IJCNLP-AACL 2025.
[^romanlens]: Saji et al., ["RomanLens: the role of latent romanization in multilinguality in LLMs"](https://arxiv.org/abs/2502.07424) (2025).
[^latin]: Gurgurov, Saji et al., ["The Latin substrate: how language models represent and mediate script choice"](https://arxiv.org/abs/2605.31363) (2026).
[^tok]: Qwen3-8B, which shares the Qwen3 tokenizer, at 4.75 tokens per Hindi word and 1.26 per English word on FLORES-200, from ["BrahmicTokenizer-131K"](https://arxiv.org/abs/2605.29379) (2026). Romanized Hindi at 0.43 times native-script cost on the Qwen2.5 tokenizer, from Johny, Ghosh, Sam, ["The Indic token tax in 2026"](https://arxiv.org/abs/2611.13058).
[^massive]: Sun et al., ["Massive activations in large language models"](https://arxiv.org/abs/2402.17762) (2024); for Qwen3, Shi et al., ["A single layer to explain them all"](https://arxiv.org/abs/2605.08504), ICML 2026.
[^specious]: Chari and Pachter, ["The specious art of single-cell genomics"](https://doi.org/10.1371/journal.pcbi.1011288), PLoS Computational Biology (2023).
[^clas]: Gurgurov et al., ["CLaS-Bench: a cross-lingual alignment and steering benchmark"](https://arxiv.org/abs/2601.08331) (2026).
[^beacon]: Sattigeri, ["Extending Beacon to Hindi"](https://arxiv.org/abs/2602.00046) (2026).
[^refusal]: Wang et al., ["Refusal direction is universal across safety-aligned languages"](https://arxiv.org/abs/2505.17306), NeurIPS 2025.
[^haet]: Aswal and Jaiswal, ["Haet Bhasha aur Diskrimineshun: phonetic perturbations in code-mixed Hinglish"](https://arxiv.org/abs/2505.14226) (2025).
