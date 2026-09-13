'use strict';
const scenarios={
  respiratory:{symbol:'क',title:'A worker in western UP',meta:'50-year-old woman · respiratory presentation',language:'Hindi / regional register',lang:'hi',patient:'“खाँसी तो है… और कपड़े भी कुछ ढीले लग रहे हैं।”',translation:'“There’s the cough… and my clothes seem a little looser.”',student:'“Have you noticed a change in your weight? Over how long?”',learning:'Notice the indirect clue, characterize it, and use the clarified history when considering the next step. The clue alone does not establish a diagnosis.'},
  glycemic:{symbol:'ख',title:'A farmer from Haryana',meta:'65-year-old man · change in glycemic control',language:'Hindi / Haryanvi register target',lang:'hi',patient:'“दवाई तो लेता हूँ… पर पिछले कुछ दिनों से ढंग से नहीं ली।”',translation:'“I do take my medicine… but I haven’t taken it regularly over the last few days.”',student:'“Could you walk me through which medicines you take, and what made it difficult recently?”',learning:'Explore medication use and the patient’s circumstances without blame. Establish the actual pattern and assess severity; occupation or residence does not explain adherence. This Hindi sentence is a placeholder for native-speaker-reviewed regional wording.'},
  concern:{symbol:'ক',title:'A patient with a caregiver',meta:'Constructed difficult-conversation scenario',language:'Bengali / code-mixing target',lang:'bn',patient:'“আমি ঠিক আছি… কিন্তু বাড়ি গিয়ে কী করতে হবে?”',translation:'“I’m okay… but what should I do when I get home?”',student:'“Let’s go through the next steps together. What is worrying you most about going home?”',learning:'Invite the patient’s concerns, explain the plan, and check understanding. The caregiver may have a different concern. Do not assume that “I’m okay” means either distress or reassurance without further context.'}
};
const stages={
 source:['01 / Author & approve','Authorized sources','Start with documents the institution is permitted to use. Record publisher, edition, effective date, access rights and a checksum. Source ownership and processing permission stay attached to the knowledge.','A publicly readable guideline is not automatically licensed for redistribution or model processing.'],
 ingest:['02 / Author & approve','Ingest & normalize','Preserve the original document and a versioned normalized representation. Retain page and block mappings, extractor versions and explicit gaps for unreadable material.','Normalization must not erase tables, footnotes or branch context.'],
 extract:['03 / Author & approve','Extract & ground','Extract clinical recommendations with their populations, conditions, alternatives and exceptions. Link each interpretation to exact evidence and the surrounding table or algorithm when needed.','A matching source span proves the text exists. It does not prove the clinical interpretation is correct.'],
 review:['04 / Human gate','Clinical approval','A clinician compares each candidate with the source and its conditions. Approve, revise, defer or reject with an attributed decision. Material edits return to review.','An extracted or model-proposed claim is not an approved clinical rule.'],
 publish:['05 / Release gate','Publication gateway','Require approval of the current revision, permitted use, intact evidence, active status and no blocking conflict. Package eligible knowledge into an immutable release.','Drafts, unresolved edits, retired sources and revoked recommendations cannot enter the runtime bundle.'],
 release:['06 / Versioned state','Approved release','Keep a content-addressed knowledge bundle with source and review provenance. A new guideline edition creates a new reviewed release, rather than silently replacing the previous one.','The release is a reference for case design and scoped assessment, not patient-specific advice.'],
 request:['07 / Retrieve & apply','Scoped request','Describe the requesting role, educational purpose, case population, clinical setting and pinned release. Restrict what each component is allowed to retrieve.','The patient Talker does not get unrestricted access to guidelines, hidden diagnoses or the scoring rubric.'],
 retrieve:['08 / Retrieve & apply','Candidate retrieval','Find relevant recommendations inside the approved release. Resolve source evidence and preserve the conditions attached to each candidate before considering it for use.','No match is a coverage gap. Do not substitute every item in the bundle or an invented answer.'],
 apply:['09 / Clinical gate','Applicability gateway','Check whether the case matches the recommendation’s population, stage, setting, treatment context and exceptions. Check conflicts and revocations at the same boundary.','Applicability has three outcomes: applies, does not apply, or unknown. Missing context must not mean unrestricted use.'],
 evidence:['10 / Retrieve & apply','Evidence or explicit gap','Return scoped, attributable evidence when it applies. Otherwise return a missing-context request, conflict or coverage gap for faculty review.','Do not turn uncertain retrieval into a confident treatment recommendation or a marking rule.'],
 compile:['11 / Faculty gate','Case & rubric review','Faculty review the synthetic case, patient knowledge, disclosure paths, findings and acceptable management alternatives. Native speakers review language separately from clinical truth.','A guideline recommendation is not an observed patient fact and is not automatically a scoring criterion.'],
 case:['12 / Versioned state','Pinned case','Freeze the approved case, rubric and knowledge versions at encounter start. The Talker receives permitted facts; a separate examiner receives the relevant rubric and delivered events.','Updates and corrections are explicit. Student speech and agent outputs cannot rewrite the clinical truth.']
};
document.querySelectorAll('[data-scenario]').forEach(button=>button.addEventListener('click',()=>{
  const s=scenarios[button.dataset.scenario];
  document.querySelectorAll('[data-scenario]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  for(const [id,key] of [['persona-symbol','symbol'],['persona-title','title'],['persona-meta','meta'],['persona-language','language'],['patient-line','patient'],['patient-translation','translation'],['student-line','student'],['learning-copy','learning']])document.getElementById(id).textContent=s[key];
  document.getElementById('patient-line').lang=s.lang;
  document.getElementById('learning-note').hidden=true;
  document.getElementById('reveal').setAttribute('aria-expanded','false');
  document.querySelector('#reveal span').textContent='+';
}));
document.getElementById('reveal').addEventListener('click',()=>{
  const panel=document.getElementById('learning-note');panel.hidden=!panel.hidden;
  document.getElementById('reveal').setAttribute('aria-expanded',String(!panel.hidden));
  document.querySelector('#reveal span').textContent=panel.hidden?'+':'−';
});
document.querySelectorAll('[data-stage]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-stage]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button));});
  stages[button.dataset.stage].forEach((text,i)=>document.getElementById(['stage-count','stage-title','stage-description','stage-boundary'][i]).textContent=text);
  if(window.matchMedia('(max-width:720px)').matches)document.querySelector('.stage-detail').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth',block:'start'});
}));
