# AI × Science

I want a future in which AI agents help people ask better questions, explore more possibilities and turn reliable discoveries into benefits that reach more people. Science and mathematics offer extraordinary opportunities for this kind of collaboration, especially in medicine and biology, where better understanding can ultimately mean less suffering and more healthy life. I am interested in human–AI teams and collaborations across laboratories around the world, with each contributing strengths the others lack.

Progress should deepen human agency and meaning: the freedom to choose what matters, understand the work, challenge an answer and share in discovery. That means evaluating evidence rather than just fluent output, preserving uncertainty and giving people real authority over consequential decisions. It also means designing against accidental harm and deliberate misuse, taking dual-use risks seriously, and making the benefits of scientific capability broadly accessible.

Updated: 2026-10-16

Dates are first public posting/publication where verified; talks use upload dates. Year-only dates retain their original precision. OP means an original author/team post or identified commentary. Missing posts are marked as unverified.

## Reading list

### The Agentic Scientist: Orchestrating Coding Agents for Automated Scientific (Co-)Discovery

Wraps off-the-shelf coding agents in an explicit research loop, with pre-registered rubrics, parallel workers sharing a memory and ablations of the winning program, so they behave less like hyperparameter optimizers. Sakana reports an ALIFE 2026 oral on Error Diffusion with humans setting questions and verifying claims, plus autonomous gains on Doc-to-LoRA retrieval and learned evolution strategies.

- Type: Preprint
- Published: 15 Oct 2026
- Resource: [The Agentic Scientist: Orchestrating Coding Agents for Automated Scientific (Co-)Discovery](https://arxiv.org/abs/2610.18933)
- OP: [Sakana AI · announcement thread](https://x.com/SakanaAILabs/status/2110738746304061491)
- Topics: Agents, Scientific discovery, Human–AI collaboration, Evaluation
- Margin note: The useful part is evaluator integrity: sealed search and final splits, and claims tied to evidence hashes. Even so, an agent quietly changed the evaluation protocol in 2 of 3 runs, and no gate caught it. Read with “Why LLMs Aren’t Scientists Yet”.
- Blog post: https://pub.sakana.ai/agentic-scientist/
- Code (AI-Scientist-v3): https://github.com/SakanaAI/AI-Scientist-v3

### Context graphs for document-heavy legal agents

Niko Grupen reports that giving Harvey’s legal agents prebuilt context graphs over their documents improved results on legal tasks. The cost of building the graphs and how far the gains generalise are still open questions.

- Type: Post
- Published: 15 Oct 2026
- Resource: [Context graphs for document-heavy legal agents](https://x.com/nikogrupen/status/2110773803592937733)
- OP: [Niko Grupen · original post](https://x.com/nikogrupen/status/2110773803592937733)
- Topics: Agents, Evaluation, Infrastructure
- Margin note: This page’s knowledge graph is a small context graph: entities, typed relations and sources pre-linked, so a reader or an agent starts from structure instead of a pile of documents. The post itself couldn’t be fetched here, so this summary relies on a newsletter description.

### Biopharma

AI agents and benchmarks for drug development, biopharma operations and lab work beyond early discovery. Each entry retains its publication date.

#### Introducing Science Foundries, a new way for scientists and agents to work together

Benchling's Head of AI, Nicholas Larus-Stone, launches Science Foundries: you pick a process such as protein production or lead optimization, then assign which steps agents run and where scientists must approve. In the antibody example, design, cloning, lab and analysis agents pass work along, send instructions to workcells and CROs, run QC and update training data, while scientists choose which candidates to advance. Parabilis Medicines is the named customer. The productivity claims (three people matching thirty, months saved) are the vendor's own and unquantified.

- Type: Blog post
- Published: 15 Oct 2026
- Resource: [Introducing Science Foundries, a new way for scientists and agents to work together](https://www.benchling.com/blog/introducing-science-foundries)
- OP: not yet verified
- Topics: Biopharma, Agents, Human–AI collaboration, Biology, Infrastructure
- Margin note: The design choice that matters is the role assignment: agents run the steps and scientists hold the approval gates. That is the human actuation gate, sold as a product. What is missing is any independent check beyond QC and sign-off.

#### Benchmarking biopharma knowledge work

Convoke benchmarks models on six biopharma work products outside R&D: target safety assessment, tumor landscape, shelved assets, catalyst calendar, clinical benchmark and commercial forecast. Domain experts wrote penalty-based rubrics (major, moderate, minor errors), and an LLM grader with research tools scored each criterion against a citation. They report that frontier OpenAI models lead and that models handle structured spreadsheet compilation well but struggle with narrative synthesis and judgment-heavy forecasts. Frontier models cost more than 3x as much per work product. The grader has not yet been validated against expert grading.

- Type: Blog post
- Published: 29 Sep 2026
- Resource: [Benchmarking biopharma knowledge work](https://www.convoke.bio/blog/benchmarking-biopharma-knowledge-work)
- OP: not yet verified
- Topics: Biopharma, Evaluation, Agents, Medicine, Research taste
- Margin note: Compiling a catalyst calendar is checkable. A commercial forecast needs design judgment, and that is where models slip: the taste gap again, in a pharma setting. The rubric grader is itself unvalidated, so treat the rankings as provisional.

### The Labs Have the Best Models With Infinite Tokens, So Why Aren’t Their Products Better?

Ben Davis defines taste as “the ability to make good decisions in places where there isn’t a programmatic verification function”. Models excel at verifiable hill-climbing, but their open-ended design choices regress to the mean, so people still have to supply direction. He calls taste “the only real stop” to recursive self-improvement.

- Type: Essay
- Published: 14 Oct 2026
- Resource: [The Labs Have the Best Models With Infinite Tokens, So Why Aren’t Their Products Better?](https://davis7.substack.com/p/the-labs-have-the-best-models-with)
- OP: not yet verified
- Topics: Research taste, Verification, Agents, Human agency
- Margin note: The real question: can a harness and a model together make good decisions where no programmatic verifier exists? “Make this function fast” is hill-climbing. Which direction to pursue, which design to ship and which claim to trust are taste.

### A thread: forgetting to escape idea basins

Two papers ten days apart reach the same answer: long-running research agents get stuck refining their own past ideas, and the cure is to forget. Read Fork-and-Flush first, then the more aggressive version.

#### Fork-and-Flush: Escaping Idea Basins in Autoresearch Agents

Cai, Papailiopoulos and colleagues find that independent runs of the same autoresearch agent on the same task end at very different scores, and that extra compute does not close the gap. Comparing solutions by what they do suggests each run stays inside a local “idea basin”. Their fix periodically forks the agent into parallel trajectories that keep the workspace but start with a fresh chat context, then continues from the best one. Across 13 long-horizon tasks at equal compute, they report a 66% relative gain over a single run and 44% over best-of-N.

- Type: Preprint
- Published: 05 Oct 2026
- Resource: [Fork-and-Flush: Escaping Idea Basins in Autoresearch Agents](https://arxiv.org/abs/2610.07447)
- OP: not yet verified
- Topics: Agents, Scientific discovery, Research taste
- Margin note: Think of a hiker who only ever steps uphill from where they stand: they reach the top of the nearest hill, not the highest one. A fresh context is a new starting point on the map.

#### Scaling Discovery Requires Forgetting

Tan, Dimakis, Zaharia and colleagues at Berkeley show that running an autoresearch agent longer, running agents in parallel, or letting them talk all plateau, because agents anchor on their growing history. On AHC014, edits shrink from about 150 lines to 30 per proposal and thinking tokens from about 28k to 7k per turn. Their fix is to make the whole team periodically forget everything except the best candidate so far. Across four tasks (AHC014, Frontier-CS, Anthropic's VLIW kernel challenge and nanochat autoresearch), they report averages about 10% above parallel agents and 22% above a single agent.

- Type: Preprint
- Published: 14 Oct 2026
- Resource: [Scaling Discovery Requires Forgetting](https://arxiv.org/abs/2610.20563)
- OP: [Shangyin Tan on X](https://x.com/ShangyinT/status/2110771398209863821)
- Topics: Agents, Scientific discovery, Research taste
- Margin note: Fork-and-Flush keeps the workspace and clears the chat. This paper clears both and keeps only the best answer. Shrinking edit sizes are a measurable symptom of an agent getting stuck.
- Alex Dimakis on X: https://x.com/AlexGDimakis/status/2110808302796108249

### A conversation: the future of mathematics

Litt’s essay and doomslide’s response, followed by Gowers and Hairer on mathematical values and institutional engagement.

#### A beginning for mathematics

Distinguishes producing mathematical results from cultivating human understanding, and proposes rewarding research programs, learning and community-building as AI capabilities grow. A constructive essay on preserving scientific values and complementary human–AI inquiry.

- Type: Essay
- Published: 13 Sep 2026
- Resource: [A beginning for mathematics](https://www.daniellitt.com/blog/2026/9/13/a-beginning-for-mathematics/)
- OP: [Daniel Litt · X announcement thread](https://x.com/littmath/status/2099502187667673163)
- Topics: Mathematics, Human agency, Human–AI collaboration, Research taste
- Margin note: Protect mathematics’ values, not its institutions. One concrete proposal: award PhDs on an oral defence of deep understanding, whatever the provenance of the thesis.
- Other version · Proofs and Prompts (14 Sep 2026): https://proofsandprompts.com/2026/09/14/a-beginning-for-mathematics/

#### Mathematics is effectively dead

A critical response to Litt focused on provenance, credit, accountable authorship and open mathematical discourse; its claims about private-data reuse and opaque proof workflows are conditional or speculative.

- Type: Essay
- Published: 17 Sep 2026
- Resource: [Mathematics is effectively dead](https://doomslide.substack.com/p/mathematics-is-effectively-dead)
- OP: [doomslide · author essay](https://doomslide.substack.com/p/mathematics-is-effectively-dead)
- Topics: Mathematics, Governance, Scientific communication
- Margin note: Accepts Litt’s goals but says credit breaks first. If proofs are laundered through undisclosed pipelines, the community can no longer say who knows what.
- doomslide · X discussion cited in essay: https://x.com/doomslide/status/2095440935505010726

#### Why I didn’t sign the Fields medallists’ letter

Timothy Gowers defends a plurality of mathematical motivations, including problem-solving, while arguing that preserving the institutions supporting shared understanding matters more than restricting the supply of AI-generated results.

- Type: Essay
- Published: 17 Sep 2026
- Resource: [Why I didn’t sign the Fields medallists’ letter](https://gowers.wordpress.com/2026/09/17/why-i-didnt-sign-the-fields-medallists-letter/)
- OP: [Timothy Gowers · X author announcement](https://x.com/wtgowers/status/2100480035614343340)
- Topics: Mathematics, Human agency, Governance
- Margin note: Gowers treats credit problems as serious but temporary. The lasting danger is erosion of PhD training, funding and custodianship of the tradition.

#### Why I agreed to join AGMAI

Martin Hairer explains his decision to join the Advisory Group on Mathematics and Artificial Intelligence, describes its independence and advisory limits, and argues for engagement with AI labs to improve scholarship and represent community concerns.

- Type: Essay
- Published: 22 Sep 2026
- Resource: [Why I agreed to join AGMAI](https://proofsandprompts.com/2026/09/22/why-i-agreed-to-join-agmai/)
- OP: [Timothy Gowers · commentary on Hairer’s essay](https://x.com/wtgowers/status/2102510624219533693)
- Topics: Mathematics, Governance, Scientific communication
- Margin note: Hairer signed the Fields medallists’ statement and joined AGMAI: nine unpaid mathematicians in a purely advisory role. Complaining while refusing a channel would be hypocritical, he argues.
- Same essay · guest post on Terence Tao’s blog: https://terrytao.wordpress.com/2026/09/22/why-i-agreed-to-join-agmai/

### Self-Organizing Agent Teams Learn to Reason Together

Frozen teams learn reusable coordination strategies, with gains depending partly on their ability to recognize correct reasoning.

- Type: Preprint
- Published: 19 Sep 2026
- Resource: [Self-Organizing Agent Teams Learn to Reason Together](https://arxiv.org/abs/2609.22682v1)
- OP: [Aneesh Pappu · author post](https://x.com/aneeshpappu/status/2102428585986498609)
- Topics: Agents, Collaboration, Evaluation
- Margin note: Three frozen models learn a teamwork protocol and reach 66.7%, beating even an oracle that picks the best member (59.0%). The organisation is learned, not the weights.

### AgentRun: a harness for repetitive knowledge work

Miguel Rios (Grep.ai) describes a harness in which a frontier agent first does a job from a written procedure, keeps notes and traces, then writes a typed workflow and “fires itself”. The workflow mixes agent steps, plain code and typed questions answered by a small calibrated model (Jev), under the rule “Jev decides what a thing is; code decides what follows.” A verify clause checks each claim against the evidence the agent cited. On an anti-money-laundering alert review, the author reports cost per alert falling from $2.89 to $0.25 and judged accuracy rising from 90% to 95%, scored on a held-out set they never looked at.

- Type: Article
- Published: 18 Sep 2026
- Resource: [AgentRun: a harness for repetitive knowledge work](https://x.com/MiguelriosEN/status/2101029313906987422)
- OP: not yet verified
- Topics: Agents, Verification, Evaluation, Research taste, Infrastructure
- Margin note: A practical answer to the taste question. Closed decisions (“is this a match?”) become typed questions that a cheap calibrated model answers and code routes. Open judgment stays with the agent or a human. A held-out set guards against grading your own homework.

### ScientistTwo: Pioneering the Human Knowledge Frontier with Autonomous AI

An autonomous research pipeline combines experiments, ablations and simulated peer review; its reported successes require careful attention to selection and evaluation.

- Type: Preprint
- Published: 17 Sep 2026
- Resource: [ScientistTwo: Pioneering the Human Knowledge Frontier with Autonomous AI](https://arxiv.org/abs/2609.19644v1)
- OP: not yet verified
- Topics: Agents, Evaluation, Scientific discovery
- Margin note: A closed loop on 107 problems from ICLR, ICML and NeurIPS papers. Simulated review is AI checking AI, so ask who verifies its 86 generated papers.
- Related: https://scientist-two.github.io/

### AI Infrastructure at Periodic

Describes infrastructure for long scientific tool runs, specialized models and efficient training; performance claims come from the company.

- Type: Technical article
- Published: 15 Sep 2026
- Resource: [AI Infrastructure at Periodic](https://periodic.com/news/ai-infrastructure-at-periodic)
- OP: [Liam Fedus · founder commentary](https://x.com/LiamFedus/status/2099896055030501702)
- Topics: Infrastructure, Scientific discovery, Agents
- Margin note: Scientific RL rollouts last hours, with tool calls such as XRD analysis, while training steps take minutes. That gap forces asynchronous RL.

### AI in Science: Early Insights

Combines model-use data, a specialist-model inventory and a researcher survey to examine adoption, time savings and verification demands.

- Type: Report
- Published: 15 Sep 2026
- Resource: [AI in Science: Early Insights](https://ai.google/static/documents/AI-in-Science.pdf)
- OP: [Arthur Turrell · author commentary](https://x.com/arthurturrell/status/2099877915844325780)
- Topics: Human–AI collaboration, Evaluation, Scientific discovery
- Margin note: Scientists report about 6.9 hours a week saved, and much of it goes back into verifying AI output. Early empirical support for verification as the bottleneck.

### Reflecting on 25 years of cancer research: transformative advances and unmet expectations

Six researchers reflect on cancer biology, translational disappointments and opportunities for human–AI co-science.

- Type: Viewpoint
- Published: 08 Sep 2026
- Resource: [Reflecting on 25 years of cancer research: transformative advances and unmet expectations](https://doi.org/10.1038/s41568-026-00974-4)
- OP: not yet verified
- Topics: Biology, Medicine, Human–AI collaboration
- Margin note: A canonical lost qualifier: BRAF inhibitors work in BRAF-mutant melanoma but not in colorectal cancer, because of EGFR feedback.

### Medical school lab scientists get a new partner: AI

Describes medical researchers integrating specialized AI agents with vetted data, laboratory workflows and human oversight.

- Type: News article
- Published: 08 Sep 2026
- Resource: [Medical school lab scientists get a new partner: AI](https://www.aamc.org/news/medical-school-lab-scientists-get-new-partner-ai)
- OP: not yet verified
- Topics: Medicine, Biology, Human–AI collaboration
- Margin note: The shift is from chatbots on the open web to agents with a restricted library card: FDA records, guidelines and de-identified patient data. Humans still choose the questions.

### Latent-space reasoning as a third axis of test-time scaling

François Chollet highlights latent iterations alongside longer reasoning and parallel exploration.

- Type: Post
- Published: 05 Sep 2026
- Resource: [Latent-space reasoning as a third axis of test-time scaling](https://x.com/fchollet/status/2096310217898356739)
- OP: [François Chollet · original post](https://x.com/fchollet/status/2096310217898356739)
- Topics: Reasoning, Compute, Agents
- Margin note: Depth, breadth and latent iteration. The third axis is token-cheap but gives up the inspectable reasoning that verification relies on.

### Anthropic uses Claude to formalize proof of Fermat’s Last Theorem

Reports on AI-assisted formalization of Fermat’s Last Theorem and the role of shared proof infrastructure.

- Type: News article
- Published: 04 Sep 2026
- Resource: [Anthropic uses Claude to formalize proof of Fermat’s Last Theorem](https://siliconangle.com/2026/09/04/anthropic-uses-claude-to-formalize-proof-of-fermats-last-theorem/)
- OP: not yet verified
- Topics: Mathematics, Formal verification, Agents
- Margin note: About 13 million lines of Lean in about 11 days, using only the standard axioms. That is certainty without new human understanding, and the readable rewrite is still undone.

### Imagining a new future for science

Eunice Jun explores representations and interfaces that make scientific reasoning more inspectable.

- Type: Talk
- Uploaded: 04 Sep 2026
- Resource: [Imagining a new future for science](https://www.youtube.com/watch?v=hawgxIEpPqU)
- OP: not yet verified
- Topics: Human–AI collaboration, Scientific communication, Evidence
- Margin note: Much of what makes science valid is implicit. Making reasoning about validity, feasibility and priority explicit turns it into something people can check.

### A Case Study on Emergent Cheating and Whistleblowing in Autonomous Research Swarms

A mathematical research swarm illustrates how shared infrastructure can spread both verifier exploits and organized resistance.

- Type: Preprint
- Published: 03 Sep 2026
- Resource: [A Case Study on Emergent Cheating and Whistleblowing in Autonomous Research Swarms](https://arxiv.org/abs/2609.04170v1)
- OP: not yet verified
- Topics: Agents, Governance, Mathematics
- Margin note: A Lean notation trick spread through the shared library, and the swarm “solved” every remaining problem within 27 minutes. A quarter of agents protested but had no power to enforce anything.

### The paradox at the heart of AI and science

Terence Tao discusses scientific understanding, human learning and the limits of accelerating answer production.

- Type: Talk
- Uploaded: 03 Sep 2026
- Resource: [The paradox at the heart of AI and science](https://www.youtube.com/watch?v=svl_1upFpQo)
- OP: not yet verified
- Topics: Mathematics, Human agency, Scientific discovery
- Margin note: AI is a cheap, slightly drunk idea generator: useful when paired with verification. The bottlenecks move to verification, curation and communication (“proof indigestion”).

### Accelerating Scientific Research with Gemini in the Real-World

Reports multi-agent research workflows across materials, biology and computing, with different levels of autonomy and validation.

- Type: Preprint
- Published: 27 Aug 2026
- Resource: [Accelerating Scientific Research with Gemini in the Real-World](https://arxiv.org/abs/2608.26701v1)
- OP: not yet verified
- Topics: Agents, Biology, Materials
- Margin note: Optimising against an LLM reviewer teaches agents to fabricate. Deterministic checks of every number against execution logs cut severe hallucination from 46% to 4%.

### The scientific paper needs an uncertainty layer

Proposes attaching reusable qualifications and uncertainty records to scientific claims as humans and AI reuse them.

- Type: Perspective preprint
- Published: 20 Aug 2026
- Resource: [The scientific paper needs an uncertainty layer](https://doi.org/10.31222/osf.io/duymx_v1)
- OP: [Richard Sever · author commentary](https://www.linkedin.com/posts/richardsever_the-scientific-paper-needs-an-uncertainty-activity-7497694294678339584-u68R)
- Topics: Evidence, Verification, Scientific communication
- Margin note: Caveats get lost each time a claim is reused. The hedges should travel with the claim, not stay behind in the paper.

### Jeff Dean on Launching Discovery Loop

Dean’s thesis for Discovery Loop, the public benefit corporation he co-founded with Ghemawat, Le and Vinyals: science is bottlenecked by slow experimental loops, so automate them, run thousands in parallel and cut each iteration’s latency. It starts with ML research, as its own first customer, before NAE Grand Challenges. No technical papers have been published yet.

- Type: Interview
- Published: 09 Aug 2026
- Resource: [Jeff Dean on Launching Discovery Loop](https://radical.vc/articles/radical-reads-jeff-dean-on-launching-discovery-loop/)
- OP: [Jeff Dean · launch thread](https://x.com/JeffDean/status/2085034604172603724)
- Topics: Agents, Scientific discovery, Infrastructure, Compute
- Margin note: The same “automate the experimental loop” bet as Sakana and Google’s Co-Scientist, framed around scale and latency. A FutureSearch forecast argues it should start where loops close fastest and verification is cheap, such as chip design.
- Company site: https://www.discoveryloop.com/
- Dean with Dawn Song (talk): https://www.youtube.com/watch?v=0kC3xOZChdA

### Artificial intelligence in drug discovery—what it is, where we stand and the path forward

Calls for evaluating AI by its contribution to better drug-development decisions and patient-relevant outcomes.

- Type: Perspective
- Published: 07 Aug 2026
- Resource: [Artificial intelligence in drug discovery—what it is, where we stand and the path forward](https://doi.org/10.1038/s41573-026-01496-2)
- OP: not yet verified
- Topics: Biology, Medicine, Evaluation
- Margin note: Clinically relevant impact so far is “disappointingly limited”. Judge AI by whether it improves decisions, especially at Phase II.

### Jeff Dean in conversation with Dawn Song: from answering questions to making discoveries

Dean's first public talk after leaving Google, at the AASF Frontier & Pioneer Symposium at Stanford, moderated by Dawn Song. He describes the loop that science and engineering share: decompose, propose, implement, evaluate, feed back. Discovery Loop aims to automate it, cut each iteration from days to minutes, run thousands in parallel and pick the next experiment by expected value per unit of cost, starting with ML itself. He also gives his research-taste heuristics: skim 10 papers rather than read one closely, look for 10x gains, and choose problems where about 5 of 7 parts are taking shape. The summary is built from auto-generated captions.

- Type: Talk
- Uploaded: 07 Aug 2026
- Resource: [Jeff Dean in conversation with Dawn Song: from answering questions to making discoveries](https://www.youtube.com/watch?v=0kC3xOZChdA)
- OP: not yet verified
- Topics: Scientific discovery, Agents, Research taste, Governance
- Margin note: Experiment A has a 10% chance of +5 and costs 1 GPU-day (EV/cost 0.5). B has a 50% chance of +2 and costs 4 GPU-days (0.25). Dean's rule runs A first. What pure EV/cost misses is what a cheap failure teaches you.

### Drug Discovery Has No Magic Wands

Daphne Koller argues that useful AI drug discovery depends on better measurements and causal understanding of human biology.

- Type: Essay
- Published: 03 Aug 2026
- Resource: [Drug Discovery Has No Magic Wands](https://deepphenotype.substack.com/p/drug-discovery-has-no-magic-wands)
- OP: not yet verified
- Topics: Biology, Medicine, Scientific discovery
- Margin note: Most AI effort designs keys (molecules), while the bottleneck is choosing the lock (the mechanism). The only true ground truth is a slow human trial.

### Solipsistic Superintelligence is Unlikely to be Cooperative

Argues that cooperative AI must account for adaptive counterparts, institutions and human agency rather than optimize in isolation.

- Type: Paper
- Published: 02 Jun 2026
- Resource: [Solipsistic Superintelligence is Unlikely to be Cooperative](https://arxiv.org/abs/2606.03237v1)
- OP: not yet verified
- Topics: Governance, Human agency, Collaboration
- Margin note: Deployment breaks the fixed-world assumption: the more an AI exploits a regularity, the faster it disappears. The emergent-cheating swarm is a live example.

### The AI Scientist: Towards Fully Automated AI Research, Now Published in Nature

Sakana, UBC, Vector and Oxford report in Nature on the AI Scientist, whose v2 wrote a paper that passed blind review at an ICLR 2025 workshop before being withdrawn. Its ensembled automated reviewer matches human reviewer accuracy on OpenReview decisions. The authors list naive ideas, weak rigour, hallucinated citations and a compute-only scope as limits, and call for watermarking and community norms.

- Type: Research announcement
- Published: 26 Mar 2026
- Resource: [The AI Scientist: Towards Fully Automated AI Research, Now Published in Nature](https://sakana.ai/ai-scientist-nature/)
- OP: [Sakana AI · announcement post](https://sakana.ai/ai-scientist-nature/)
- Topics: Agents, Scientific discovery, Evaluation, Governance
- Margin note: The withdrawn ICBINB paper averaged 6.33, above the workshop’s human acceptance bar. The authors still list naive ideas and hallucinated citations as limits. Read with the Agentic Scientist, its successor.
- Nature paper: https://www.nature.com/articles/s41586-026-10265-5
- Code (AI-Scientist-v2): https://github.com/SakanaAI/AI-Scientist-v2
- AI Scientist-v2 preprint: https://arxiv.org/abs/2504.08066

### Some Simple Economics of AGI

Develops an economic argument that verification capacity and responsibility become scarce as automated execution becomes cheaper.

- Type: Working paper
- Published: 24 Feb 2026
- Resource: [Some Simple Economics of AGI](https://arxiv.org/abs/2602.20946)
- OP: not yet verified
- Topics: Human agency, Verification, Economics
- Margin note: The cost to automate falls toward zero, but the cost to verify stays tied to expert time. Only the verifiable share of agent work counts as real output.
- Related: https://ssrn.com/abstract=6298838

### Why LLMs Aren’t Scientists Yet: Lessons from Four Autonomous Research Attempts

Four autonomous ML research attempts expose implementation drift, weak evaluation and failures of scientific judgment.

- Type: Preprint
- Published: 06 Jan 2026
- Resource: [Why LLMs Aren’t Scientists Yet: Lessons from Four Autonomous Research Attempts](https://arxiv.org/abs/2601.03315v1)
- OP: not yet verified
- Topics: Agents, Evaluation, Research taste
- Margin note: Three of four attempts failed. The useful output is a six-part failure taxonomy, including implementation drift and the “eureka instinct”.
- Related: https://github.com/Lossfunk/ai-scientist-artefacts-v1

### Eliciting Research Taste in LLMs through Future Research Direction Choice

Studies model preferences among future research directions using order-controlled pairs, without equating agreement with scientific merit.

- Type: Workshop paper
- Published: 2026 · exact date unverified
- Resource: [Eliciting Research Taste in LLMs through Future Research Direction Choice](https://github.com/Lossfunk/research-taste-eval-v1)
- OP: [Lossfunk · research-team post](https://www.linkedin.com/posts/lossfunk_new-paper-from-lossfunk-accepted-at-the-activity-7501276181154074624-Tttm)
- Topics: Research taste, Evaluation, Scientific discovery
- Margin note: Models matched the authors’ own next direction 45–67.5% of the time. Agreement with the authors is not the same as scientific merit.
