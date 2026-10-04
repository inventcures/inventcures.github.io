---
permalink: /multi-agent-learning-path/hi/
title: "अध्ययन पथ: विज्ञान, जैवचिकित्सा और स्वास्थ्य सेवा के लिए मल्टी-एजेंट सिस्टम"
layout: learning-path
lang: hi
translation_url: /multi-agent-learning-path/
excerpt: "शुरुआती लोगों के लिए 24 सप्ताह का अध्ययन पथ, जिसमें तीन मुख्य पाठ्यक्रम, जैवचिकित्सा की छोटी परियोजनाएँ और कंप्यूटर पर काम करने वाली शोध टीम की अंतिम परियोजना शामिल हैं।"
---

शुरुआती लोगों के लिए यह अध्ययन पथ केवल 3 मुख्य पाठ्यक्रमों तक सीमित है। आगे के वैकल्पिक अध्ययन के लिए अलग संसाधन सूची दी गई है।

## अध्ययन का उद्देश्य

ऐसे AI एजेंटों की टीमों को समझना, बनाना और परखना सीखें जो वैज्ञानिक और जैवचिकित्सा की समस्याओं पर मिलकर काम करती हैं। इसमें शोध साहित्य का विश्लेषण, परिकल्पनाएँ बनाना, कंप्यूटर पर प्रयोग करना, उपकरणों का उपयोग और साक्ष्य की जाँच शामिल है। आगे चलकर आप ऐसे वैज्ञानिक कार्यप्रवाह भी बना सकते हैं जिनमें एक प्रयोग के परिणाम अगले प्रयोग की योजना तय करते हैं।

आपको क्रमिक निर्णय और समन्वय समझने के लिए पर्याप्त reinforcement learning, कई एजेंटों की परस्पर क्रिया समझने के लिए multi-agent सिद्धांत और उपयोगी सिस्टम बनाने के लिए आधुनिक agent engineering सीखनी है। जैवचिकित्सा और विज्ञान की परियोजनाएँ इन तीनों को जोड़ती हैं।

## नियम: मुख्य अध्ययन पथ में केवल तीन पाठ्यक्रम

नीचे दिए गए तीन पाठ्यक्रम इसी क्रम में करें। इनके बाद के सभी संसाधन वैकल्पिक हैं। किसी दूसरे पाठ्यक्रम को सिर्फ इसलिए शुरू न करें कि वह रोचक दिखता है। वैकल्पिक संसाधन तब पढ़ें जब आपकी परियोजना में उनकी स्पष्ट ज़रूरत हो।

## पाठ्यक्रम 1. David Silver: Reinforcement Learning

[David Silver: Reinforcement Learning का शिक्षण पृष्ठ](https://davidstarsilver.wordpress.com/teaching/)

[David Silver / DeepMind RL की वीडियो सूची](https://www.youtube.com/playlist?list=PLzuuYNsE1EZAXYR4FJ75jcJseBmo4KQ9-)

यह पहले क्यों है? Silver के व्याख्यान states, actions, rewards, value functions, Bellman equations, temporal-difference learning, control, function approximation, policy gradients और planning की अवधारणाएँ समझाते हैं।

पहली बार देखते समय सहज समझ पर ध्यान दें। हर प्रमाण के लिए रुकना ज़रूरी नहीं है। इस चरण में इन सवालों के उत्तर खोजें। एजेंट क्या देखता है? वह क्या कर सकता है? वह किस परिणाम को बेहतर बनाना चाहता है? अनुभव से उसकी निर्णय नीति कैसे बदलती है?

व्याख्यान 1 से 7 और planning की सामग्री को प्राथमिकता दें। कठिन गणितीय व्युत्पत्तियों पर बाद में लौटें, जब उनकी ज़रूरत हो।

### छोटी परियोजना 1. जैवचिकित्सा में निर्णय प्रक्रिया

एक सरल चिकित्सकीय या शोध कार्यप्रवाह को Markov decision process, यानी MDP, के रूप में बनाएँ। उदाहरण के लिए, एजेंट सीमित खर्च के भीतर तय करे कि अगला diagnostic test या computational assay कौन सा होना चाहिए। पहले कृत्रिम डेटा वाला छोटा वातावरण बनाएँ। उद्देश्य reward design और क्रमिक निर्णय समझना है, चिकित्सकीय उपयोग की वैधता सिद्ध करना नहीं।

एक notebook और एक पृष्ठ का विवरण तैयार करें। उसमें state, actions, transitions, reward और अनिश्चितता समझाएँ। यह भी लिखें कि स्वास्थ्य सेवा में इसके वास्तविक उपयोग के लिए कहाँ सुरक्षा संबंधी समस्याएँ हैं या जानकारी अधूरी है।

## पाठ्यक्रम 2. Multi-Agent Reinforcement Learning: Foundations and Modern Approaches

[MARL पुस्तक, मुफ़्त PDF, कोड और स्लाइड](https://www.marl-book.com/)

[MARL व्याख्यान स्लाइड का repository](https://github.com/marl-book/slides)

दूसरा पाठ्यक्रम कई निर्णय लेने वाले एजेंटों की परस्पर क्रिया समझाता है। Stefano V. Albrecht, Filippos Christianos और Lukas Schäfer की यह पुस्तक MIT Press ने 2024 में प्रकाशित की थी। यह विषय का विस्तृत परिचय देती है और इसके साथ मुफ़्त सामग्री, कोड, स्लाइड और रिकॉर्ड किए गए व्याख्यान मिलते हैं।

सभी 396 पृष्ठ पढ़ने के बजाय चुने हुए विषय पढ़ें। पहले परिचय और RL की पुनरावृत्ति करें। फिर games और interaction models, solution concepts, MARL की शुरुआती चुनौतियाँ, बुनियादी algorithms और deep MARL पढ़ें। Deep learning पहले से आती है तो उसकी पुनरावृत्ति को जल्दी पढ़ सकते हैं।

इन अवधारणाओं को अच्छी तरह समझें: सहयोगी और प्रतिस्पर्धी स्थितियाँ, आंशिक जानकारी, समय के साथ बदलते अन्य एजेंट, centralized training/decentralized execution, स्वतंत्र सीखने वाले एजेंट, विरोधी या साथी एजेंटों की modelling, credit assignment, value decomposition, संचार, समन्वय और पूरी एजेंट टीम का मूल्यांकन।

### छोटी परियोजना 2. सरल वातावरण में वैज्ञानिक एजेंट टीम

2 से 4 एजेंटों वाला छोटा सहयोगी वातावरण बनाएँ। हर एजेंट के पास अलग जानकारी या उपकरण हों। जैवचिकित्सा के उदाहरण में एक एजेंट molecular evidence देखे, दूसरा clinical evidence देखे और तीसरा सीमित experimental budget संभाले। टीम को कृत्रिम उम्मीदवारों में से सबसे अच्छी परिकल्पना चुननी हो।

कम से कम दो समन्वय तरीकों की तुलना करें। एक में एजेंट स्वतंत्र निर्णय लें। दूसरे में वे जानकारी साझा करें या एक केंद्रीय coordinator के निर्देश पर काम करें। कार्य की सफलता, खर्च, संचार का अतिरिक्त बोझ, एक कमज़ोर एजेंट के होने पर प्रदर्शन और अलग-अलग runs के बीच अंतर मापें।

## पाठ्यक्रम 3. Hugging Face Agents Course

[Hugging Face Agents Course](https://huggingface.co/learn/agents-course/unit1/introduction)

यह तीसरे स्थान पर क्यों है? अब निर्णय लेने की अवधारणाओं को आधुनिक LLM एजेंटों में लागू करें। ये एजेंट तर्क करते हैं, योजना बनाते हैं, tools चलाते हैं, परिणाम देखते हैं, state बनाए रखते हैं और सहयोग करते हैं। यह पाठ्यक्रम व्यावहारिक है और शुरुआती लोगों के लिए उपयुक्त है। अध्ययन पथ के अंत में आप और सिद्धांत इकट्ठा करने के बजाय एक सिस्टम बनाएँगे।

Agent loop में reason/act/observe, tool use, structured outputs, planning, memory/state, orchestration, observability, evaluation और multi-agent patterns पर ध्यान दें। जैवचिकित्सा की जटिलता जोड़ने से पहले छोटे उपकरणों के साथ हर अवधारणा लागू करें।

### छोटी परियोजना 3. साक्ष्य पर आधारित जैवचिकित्सा एजेंट जोड़ी

दो एजेंटों का सिस्टम बनाएँ। Researcher किसी सीमित जैवचिकित्सा प्रश्न के लिए साक्ष्य खोजे और उसका विश्लेषण करे। Critic स्वतंत्र रूप से citations, विरोधाभास, बिना समर्थन वाले दावे और छूटे हुए साक्ष्य जाँचे। हर दावे का स्रोत पता लग सकना चाहिए। पर्याप्त साक्ष्य न मिलने पर उत्तर देने से मना करना भी स्वीकार्य परिणाम हो।

पहली परियोजना के लिए oncology या drug discovery का छोटा प्रश्न चुनें, जिसके लिए सार्वजनिक शोध साहित्य और किसी विशिष्ट रोगी से असंबंधित डेटा उपलब्ध हों। प्रक्रिया में मानव समीक्षा रखें। सिस्टम को चिकित्सकीय निर्णय लेने वाले के रूप में प्रस्तुत न करें।

## अंतिम परियोजना. कंप्यूटर पर काम करने वाली जैवचिकित्सा शोध टीम

ऐसा multi-agent वैज्ञानिक कार्यप्रवाह बनाएँ जिसमें अलग भूमिकाएँ वास्तव में उपयोगी हों। पहली अंतिम परियोजना के लिए oncology, drug resistance, protein design या किसी दूसरे जैवचिकित्सा प्रश्न पर परिकल्पना से साक्ष्य तक का कार्यप्रवाह अच्छा विकल्प है।

### सुझाई गई भूमिकाएँ

- Planner / Principal Investigator शोध प्रश्न को छोटे कामों में बाँटे, काम सौंपे और टीम का साझा वैज्ञानिक उद्देश्य बनाए रखे।

- Literature Agent शोध पत्र खोजे और हर दावे के मूल स्रोत का विवरण निकाले।

- Bioinformatics / Computation Agent अनुमत analyses, code, databases और structure/prediction tools चलाए।

- Mechanism Agent साक्ष्य के आधार पर जैविक प्रक्रियाओं की परिकल्पनाएँ और कारण-परिणाम की कड़ियाँ बनाए।

- Skeptic / Reviewer Agent विरोधी साक्ष्य, confounders, data leakage, hallucinations और वैकल्पिक परिकल्पनाएँ खोजे।

- Synthesis Agent अंतिम शोध विवरण लिखे। उसका आत्मविश्वास उपलब्ध साक्ष्य के अनुरूप हो। वह साक्ष्य, अनुमान, अनिश्चितता और अगले प्रस्तावित प्रयोगों को स्पष्ट रूप से अलग रखे।

### एजेंटों की संख्या से ज़्यादा ज़रूरी है मूल्यांकन

Multi-agent सिस्टम की तुलना एक मज़बूत single-agent baseline से करें। तथ्य और citations की शुद्धता, कार्य की सफलता, परिकल्पनाओं की गुणवत्ता, tool calls की पुनरुत्पादकता, बिना अनावश्यक दोहराव के विचारों की विविधता, त्रुटियों का फैलना, खर्च, समय और आत्मविश्वास की विश्वसनीयता मापें। जाँचें कि अतिरिक्त एजेंट वास्तव में परिणाम बेहतर करते हैं या नहीं।

जैवचिकित्सा में कुछ विशेष जाँच भी करें। साक्ष्य की गुणवत्ता और उसका स्तर, guidelines और डेटा की समयानुसार वैधता, रोगियों के डेटा की गोपनीयता, चिकित्सकीय रूप से ख़तरनाक निष्कर्ष और अनिश्चितता का स्पष्ट उल्लेख जाँचें। निर्णय को प्रभावित करने वाले हर परिणाम की मानव समीक्षा अनिवार्य रखें।

## एक यथार्थवादी समय-सारणी

### सप्ताह 1 से 6: पाठ्यक्रम 1 और छोटी परियोजना 1

हर सप्ताह 4 से 6 घंटे रखें। एक बार में एक व्याख्यान देखें, शब्दावली लिखें और छोटे अभ्यास ही लागू करें। अंतिम 1 से 2 सप्ताह जैवचिकित्सा MDP notebook पर लगाएँ।

### सप्ताह 7 से 14: पाठ्यक्रम 2 और छोटी परियोजना 2

MARL के चुने हुए अध्याय और व्याख्यान करें। हर अध्याय पूरा करना ज़रूरी नहीं है। साथ दिए गए कोड का उपयोग करें, ताकि सब कुछ शुरू से न लिखना पड़े। इस चरण के अंत तक वैज्ञानिक एजेंटों का छोटा सहयोगी वातावरण बनाएँ।

### सप्ताह 15 से 20: पाठ्यक्रम 3 और छोटी परियोजना 3

Agent course के साथ-साथ सिस्टम बनाते चलें। बुनियादी agent loop चलने के बाद ही सामान्य demo tools की जगह शोध साहित्य, databases और code वाले tools जोड़ें।

### सप्ताह 21 से 24 और आगे: अंतिम परियोजना

दो या तीन भूमिकाओं से शुरू करें। Single-agent baseline बनाएँ और मूल्यांकन जोड़ें। फिर किसी भूमिका को हटाकर या जोड़कर तुलना करें, जिसे ablation कहते हैं। लाभ दिखने पर ही नई भूमिका जोड़ें। अच्छे मूल्यांकन वाला छोटा सिस्टम उस बड़ी टीम से अधिक वैज्ञानिक उपयोग का है जिसका लाभ मापा ही नहीं गया हो।

<span id="optional-depth"></span>

## आगे का अध्ययन: तीन मुख्य पाठ्यक्रमों से अलग वैकल्पिक संसाधन

ये संसाधन जानबूझकर तीन मुख्य पाठ्यक्रमों से बाहर रखे गए हैं। इन पर तब लौटें जब आपको पता हो कि कौन सी कमी पूरी करनी है।

### सामान्य RL की बुनियाद और मज़बूत करनी हो

[Stanford CS234: Reinforcement Learning with Emma Brunskill](https://web.stanford.edu/class/cs234/)

आगे के गहन अध्ययन या अलग दृष्टिकोण के लिए उपयोगी है। Winter 2026 की सामग्री में tabular RL, Q-learning, policy search, offline RL, RLHF, exploration, MCTS, alignment, assignments और एक project शामिल हैं।

[Sutton & Barto: Reinforcement Learning: An Introduction](http://incompleteideas.net/book/the-book-2nd.html)

इसे मुख्य संदर्भ पुस्तक रखें। शुरू से अंत तक पूरा करने के लिए एक और पाठ्यक्रम न बनाएँ।

[University of Alberta Reinforcement Learning Specialization](https://www.coursera.org/specializations/reinforcement-learning)

बाद में classical RL को धीमी गति और assignments के साथ पढ़ना चाहें तो उपयोगी है।

[DeepMind × UCL Reinforcement Learning Lecture Series](https://www.youtube.com/watch?v=TCCjZe0y4Qc)

किसी कठिन RL अवधारणा को दूसरी व्याख्या से समझना हो तो Silver के साथ पढ़ने के लिए उपयोगी आधुनिक सामग्री है।

### आधुनिक deep RL में और गहराई चाहिए

[Berkeley CS285: Deep Reinforcement Learning](https://rail.eecs.berkeley.edu/deeprlcourse/)

Deep RL के आगे के अध्ययन का मुख्य पाठ्यक्रम है। इसकी वर्तमान सामग्री में imitation learning, policy gradients, actor-critic/value methods, model-based RL, exploration, offline RL और उन्नत विषय आते हैं। मुख्य पथ पूरा करने के बाद इसे तब करें जब आपके शोध में LLM एजेंटों का कार्यप्रवाह चलाने के साथ निर्णय नीतियाँ सीखना भी ज़रूरी हो।

[OpenAI Spinning Up in Deep RL](https://spinningup.openai.com/en/latest/)

Policy gradients, PPO/TRPO, DDPG/TD3/SAC और संबंधित deep RL तरीकों की अवधारणाओं और implementation का संक्षिप्त संदर्भ है।

[CleanRL](https://docs.cleanrl.dev/)

RL algorithms के छोटे और सरल implementations मिलते हैं। किसी algorithm का विचार समझने के बाद उसके कोड को पढ़ने के लिए उपयोग करें।

[Hugging Face Deep Reinforcement Learning Course](https://huggingface.co/learn/deep-rl-course/en/unit0/introduction)

चलते हुए कोड के साथ deep RL का अभ्यास करने के लिए आगे का व्यावहारिक विकल्प है।

[Berkeley Deep RL Bootcamp](https://sites.google.com/view/deep-rl-bootcamp/lectures)

इस क्षेत्र के प्रमुख शोधकर्ताओं के पुराने लेकिन उपयोगी विशेषज्ञ व्याख्यान हैं। ज़रूरत के अनुसार चुनकर देखें।

### LLM एजेंटों और आत्म-सुधार में गहराई चाहिए

[Stanford CS329A: Self-Improving AI Agents](https://cs329a.stanford.edu/)

शुरुआती अध्ययन पथ के बाद का उन्नत पाठ्यक्रम है। इसमें verifiers, test-time compute, RL, tool use, memory, planning, agentic workflows, evaluation और STEM research assistants आते हैं।

[Berkeley Advanced Large Language Model Agents](https://rdi.berkeley.edu/adv-llm-agents/sp25)

Reasoning, inference-time methods, post-training, search/planning, tool use, code, verification और mathematical agents की उन्नत सामग्री है।

### विशेष रूप से MARL में आगे बढ़ना हो

[MARL पुस्तक का कोड और स्लाइड](https://www.marl-book.com/)

शुरू में छोड़े गए अध्यायों पर लौटें। इनमें व्यवहार में deep MARL, multi-agent environments, algorithm implementation, experimental methodology और surveys शामिल हैं।

[Freiburg Multiagent Reinforcement Learning seminar, 2026](https://nr.uni-freiburg.de/teaching/ss2026/marl-seminar)

बुनियाद पूरी करने के बाद आधुनिक MARL का शोध साहित्य पढ़ने के लिए उपयोगी मार्गदर्शक है। इसमें पहले से deep learning और RL के पाठ्यक्रम पढ़े होने की अपेक्षा है।

### वैज्ञानिक और जैवचिकित्सा agentic AI पढ़ना हो

[ISMB 2026 tutorial: Biomedical Agentic AI](https://www.iscb.org/ismb2026/whats-happening/tutorials)

जैवचिकित्सा के लिए उपयोगी संदर्भ है। यह tutorial LLM chatbots से आगे बढ़कर जैवचिकित्सा डेटा और tools के साथ काम करने वाले AI agents पर केंद्रित है।

अपने वैज्ञानिक विषय से जुड़े AAMAS, NeurIPS/ICML/ICLR agent workshops, ML for Health, CHIL, AMIA, ISMB, RECOMB और दूसरे सम्मेलनों के शोध पत्र और tutorials भी देखें। तेज़ी से बदलते इस क्षेत्र में शोध पत्र और benchmarks, बुनियादी पाठ्यक्रमों से जल्दी पुराने पड़ते हैं।

## RL और LLM multi-agent सिस्टम कहाँ जुड़ते हैं और कहाँ अलग हैं

हर LLM agent सिस्टम को reinforcement learning की ज़रूरत नहीं होती। कई उपयोगी वैज्ञानिक multi-agent सिस्टम prompting, tools, retrieval, search, memory, verification और workflow control से बनते हैं। RL खास तौर पर तब उपयोगी है जब एजेंटों को बार-बार की परस्पर क्रिया से निर्णय नीतियाँ सीखनी हों, लंबे समय के परिणाम बेहतर करने हों, संचार और समन्वय बदलना हो, संसाधन बाँटने हों या वातावरण से मिले feedback से सुधार करना हो।

MARL की कई अवधारणाएँ बिना किसी नीति को train किए भी उपयोगी रहती हैं। इनमें अलग-अलग एजेंटों के पास अलग जानकारी, समन्वय, incentives, संचार, समय के साथ बदलता व्यवहार, भूमिकाओं का विशेषीकरण, credit assignment और दूसरे एजेंटों की कमज़ोरियों के बावजूद काम करना शामिल है। अलग-अलग घटकों के साथ पूरी टीम का मूल्यांकन भी ज़रूरी है।

## नया संसाधन जोड़ने का निर्णय कैसे लें

नया संसाधन तभी जोड़ें जब आप यह वाक्य पूरा कर सकें: "मेरी वर्तमान परियोजना रुकी हुई है क्योंकि मुझे ____ समझ नहीं आता।" कमी policy optimization में है तो CS285 या Spinning Up देखें। RL की बुनियाद के लिए CS234 या Sutton & Barto देखें। आधुनिक एजेंटों के आत्म-सुधार और मूल्यांकन के लिए CS329A पढ़ें। Deep MARL के लिए MARL पुस्तक और कोड पर लौटें। Agent implementation के लिए Hugging Face Agents और संबंधित framework का documentation देखें।

## इस अध्ययन पथ के बाद आप क्या कर सकेंगे

आप MARL या agentic-science का शोध पत्र समझकर पढ़ सकेंगे। LLM workflow और सीखने वाले एजेंट का अंतर पहचान सकेंगे और केंद्रीकृत या विकेंद्रीकृत समन्वय चुन सकेंगे। Tools का उपयोग करने वाली एजेंट टीमों के prototypes, single-agent और बिना एजेंट वाले baselines तथा ablation experiments बना सकेंगे। Reward और evaluation की समस्याएँ पहचानना, संचार और credit assignment पर विचार करना और जैवचिकित्सा शोध एजेंट का पुनरुत्पादित किया जा सकने वाला prototype बनाना भी सीखेंगे। उसमें साक्ष्य के स्रोत और अनिश्चितता स्पष्ट होंगे।

## स्रोत संबंधी टिप्पणी

यह पृष्ठ अक्टूबर 2026 में बनाए गए [मूल अध्ययन पथ के Google Doc](https://docs.google.com/document/d/14Z57yfLS_0o077lQ6Y_onKI8BKqQTfWaBX4BB8C_YBc/edit) से रूपांतरित है। पाठ्यक्रम और agentic-science के संसाधन बदल सकते हैं। शुरू करने से पहले दिए गए पाठ्यक्रम पृष्ठ जाँचें।
