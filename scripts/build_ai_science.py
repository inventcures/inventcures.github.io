#!/usr/bin/env python3
"""Regenerate the public reading page and Markdown from assets/data/ai-science.json."""
from pathlib import Path
import json,html,datetime
from build_ai_science_kg import build as build_graph
ROOT=Path(__file__).resolve().parents[1]
data=json.loads((ROOT/'assets/data/ai-science.json').read_text())
esc=lambda s:html.escape(str(s),quote=True)
groups={}
for entry in data['entries']:
 groups.setdefault(entry.get('group_id',entry['id']),[]).append(entry)
units=sorted(groups.values(),key=lambda unit:(any(e.get('date_precision')=='day' for e in unit),max(e.get('date') or '' for e in unit)),reverse=True)
entries=[e for unit in units for e in sorted(unit,key=lambda e:e.get('group_order',0))]
assert len({e['id'] for e in entries})==len(entries)
for e in entries:
 assert e['url'].startswith('https://')
 assert not e.get('op_url') or e['op_url'].startswith('https://')
 assert all(u.startswith(('https://','/files/')) for u in e.get('related_urls',[]))
 assert all(r['url'].startswith('https://') for r in e.get('discussion',{}).get('items',[]))
def prettydate(e):
 d=e.get('date')
 if not d:return 'Date unverified'
 if e.get('date_precision')=='day':return datetime.date.fromisoformat(d).strftime('%d %b %Y')
 return d+' · exact date unverified'
note_no=0
def sidenote(e):
 global note_no
 if not e.get('margin_note'):return ''
 note_no+=1;sid='sn-'+esc(e['id'])
 return f'<label class="as-sn-ref" for="{sid}" aria-label="Margin note {note_no}">{note_no}</label><input type="checkbox" id="{sid}" class="as-sn-toggle"><span class="as-sidenote" role="note"><span class="as-sn-num">{note_no}</span> {esc(e["margin_note"])}</span>'
cards=[];md=['# AI × Science','',*sum(([p,''] for p in data['vision']),[]),'Updated: '+data['updated'],'',data['date_policy'],'','## Reading list','']
active_group=None
for e in entries:
 group=e.get('group_id')
 if active_group and group!=active_group:cards.append('</section>')
 if group and group!=active_group:
  cards.append('<section id="'+esc(group)+'" class="as-conversation" data-date="'+esc(max(x.get('date') or '' for x in groups[group]))+'" data-precision="day" data-title="'+esc(e['group_title'])+'" aria-label="'+esc(e['group_title'])+'"><p class="as-group-title">'+esc(e['group_title'])+'</p><p class="as-group-note">'+esc(e.get('group_note','Start with Litt and doomslide’s response, then read Gowers and Hairer on mathematical values and institutional engagement. Each entry retains its publication date.'))+'</p>')
  md += ['### '+e['group_title'],'',e.get('group_note_md',e.get('group_note','Litt’s essay and doomslide’s response, followed by Gowers and Hairer on mathematical values and institutional engagement.')),'']
 active_group=group
 date=prettydate(e);tags=''.join('<span class="as-tag">'+esc(t)+'</span>' for t in e['tags'])
 op=('<a class="as-chip as-op" href="'+esc(e['op_url'])+'" target="_blank" rel="noopener noreferrer">OP · '+esc(e['op_label'])+' ↗</a>') if e.get('op_url') else '<span class="as-chip as-unverified">OP not yet verified</span>'
 related=''.join('<a href="'+esc(u)+'" target="_blank" rel="noopener noreferrer">'+esc(e.get('related_labels',{}).get(u, 'Project page' if 'scientist-two' in u else 'Related resource'))+' ↗</a>' for u in e.get('related_urls',[]))
 dateprefix='Uploaded' if e['type']=='Talk' else 'Published'
 discussion=''
 if e.get('discussion'):
  dsc=e['discussion']
  discussion='<details class="as-discussion"><summary>'+esc(dsc['title'])+'</summary><p>'+esc(dsc['note'])+'</p><ul>'+''.join('<li><a href="'+esc(r['url'])+'" target="_blank" rel="noopener noreferrer">'+esc(r['who'])+'</a> '+esc(r['text'])+'</li>' for r in dsc['items'])+'</ul></details>'
 datehtml=('<time datetime="'+esc(e['date'])+'">'+esc(date)+'</time>') if e.get('date_precision')=='day' else '<span>'+esc(date)+'</span>'
 cards.append(f'''<article class="as-entry" id="{esc(e['id'])}" data-title="{esc(e['title'])}" data-type="{esc(e['type'])}" data-tags="{esc('|'.join(e['tags']))}" data-date="{esc(e.get('date') or '')}" data-precision="{esc(e.get('date_precision') or '')}">
<div class="as-entry-type">{esc(e['type'])}{('<br><span class="as-role">'+esc(e['group_role'])+'</span>') if e.get('group_role') else ''}</div><div class="as-entry-body"><h3><a href="{esc(e['url'])}" target="_blank" rel="noopener noreferrer">{esc(e['title'])}<span aria-hidden="true"> ↗</span></a></h3><p>{esc(e['summary'])}{sidenote(e)}</p><div class="as-chips"><span class="as-chip">{dateprefix} · {datehtml}</span>{op}</div>{discussion}<div class="as-tags">{tags}{related}<a class="as-graph-link" href="#knowledge-graph" data-kg-node="{esc(e['id'])}">See connections in the graph</a></div></div></article>''')
 md += [('#### ' if group else '### ')+e['title'],'',e['summary'],'',f'- Type: {e["type"]}',f'- {dateprefix}: {date}',f'- Resource: [{e["title"]}]({e["url"]})',f'- OP: [{e["op_label"]}]({e["op_url"]})' if e.get('op_url') else '- OP: not yet verified','- Topics: '+', '.join(e['tags'])]+(['- Margin note: '+e['margin_note']] if e.get('margin_note') else [])+['- '+e.get('related_labels',{}).get(u,'Related')+': '+('https://inventcures.github.io'+u if u.startswith('/') else u) for u in e.get('related_urls',[])]+((['- '+e['discussion']['title']+': '+e['discussion']['note']]+['  - ['+r['who']+']('+r['url']+') '+r['text'] for r in e['discussion']['items']]) if e.get('discussion') else [])+['']
if active_group:cards.append('</section>')
graph=build_graph()
gcount={}
for n in graph['nodes']:gcount[n['type']]=gcount.get(n['type'],0)+1
plural=lambda k,one,many:str(gcount.get(k,0))+' '+(one if gcount.get(k,0)==1 else many)
graph_section='''<section class="as-graph" id="knowledge-graph" aria-labelledby="graph-title" data-src="/assets/data/ai-science-graph.json"><div class="as-library-heading"><div><p class="as-eyebrow">How the ideas connect</p><h2 id="graph-title">The knowledge graph</h2></div><a class="as-download" href="/assets/data/ai-science-graph.json" download>Graph data (JSON) ↓</a></div><p class="as-note">Every reading below is linked to the '''+', '.join([plural('person','person','people'),plural('org','organisation','organisations'),plural('concept','concept','concepts'),plural('method','method','methods')])+''' and topics it involves: '''+str(len(graph['nodes']))+''' nodes and '''+str(len(graph['edges']))+''' links, growing as the collection does. Select a node to follow its connections. The 3D space orbits and zooms around the selected idea; the 2D map lets you drag nodes to rearrange them. Links describe what a source discusses or argues, not endorsement.</p>
<div class="kg-controls" hidden><div><label for="kg-search">Find a node</label><input id="kg-search" type="search" list="kg-options" placeholder="Try verification, Tao, research taste…" autocomplete="off"><datalist id="kg-options"></datalist></div><div id="kg-legend" role="group" aria-label="Show or hide node types"></div><div class="kg-mode" role="group" aria-label="Graph view" hidden><button type="button" data-mode="3d" aria-pressed="false">3D space</button><button type="button" data-mode="2d" aria-pressed="true">2D map</button></div></div>
<div id="kg3d" class="kg3d" hidden><canvas tabindex="0" role="img" aria-label="3D knowledge graph"></canvas><div class="kg3d-labels" aria-hidden="true"></div><div class="kg3d-tools"><button type="button" class="kg3d-tour" aria-pressed="false">Tour</button><button type="button" class="kg3d-roll" data-dir="-1" aria-label="Rotate anticlockwise" title="Rotate anticlockwise">↺</button><button type="button" class="kg3d-roll" data-dir="1" aria-label="Rotate clockwise" title="Rotate clockwise">↻</button><button type="button" class="kg3d-reset" title="Clear selection and reset view">Reset</button></div><div class="kg3d-card" aria-live="polite"></div></div>
<div class="kg-stage"><svg id="kg-svg" role="img" aria-label="Network of readings, people, organisations, concepts and methods. Use the search box or the connections list below to explore it without a pointer."></svg><div class="kg-zoom"><button id="kg-zoom-in" type="button" aria-label="Zoom in">+</button><button id="kg-zoom-out" type="button" aria-label="Zoom out">−</button><button id="kg-zoom-reset" type="button" aria-label="Reset view">⟲</button></div></div>
<div id="kg-panel" aria-live="polite"><noscript><p>The interactive graph needs JavaScript. The full graph is available as <a href="/assets/data/ai-science-graph.json">JSON</a>.</p></noscript></div></section>'''
opts=lambda vals:''.join('<option value="'+esc(x)+'">'+esc(x)+'</option>' for x in sorted(set(vals)))
nav='''{% for item in site.data.navigation.main %}<a href="{{ item.url | relative_url }}"{% if item.url == '/ai+science/' %} aria-current="page"{% endif %}>{{ item.title }}</a>{% endfor %}'''
page='''---
permalink: /ai+science/
title: "AI × Science"
layout: null
---
<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AI × Science · tp53</title><meta name="description" content="Ashish Makani’s living reading list on AI agents, scientific discovery, mathematics, biology and medicine."><link rel="canonical" href="https://inventcures.github.io/ai+science/"><meta name="theme-color" content="#f4f1e9"><link rel="stylesheet" href="/assets/css/home-theme.css"><link rel="stylesheet" href="/assets/css/ai-science.css"><script src="/assets/js/ai-science.js" defer></script><script src="/assets/js/ai-science-graph.js" defer></script><script type="importmap">{"imports":{"three":"/assets/js/lib-three/three.module.min.js","three/addons/":"/assets/js/lib-three/"}}</script><script type="module" src="/assets/js/ai-science-graph3d.js?v=3"></script><link rel="stylesheet" href="/assets/css/site-theme.css">
<link rel="stylesheet" href="/assets/css/site-theme-standalone.css">
</head><body class="as-page site-theme">
{% include site-theme-sidebar.html %}
<div class="st-main st-standalone">
<div class="st-reading">

<a class="skip" href="#main">Skip to content</a><header class="nav-wrap st-legacy-site-nav"><nav class="nav" aria-label="Main navigation"><a class="brand" href="/"><span class="brand-icon" aria-hidden="true">✳</span> tp53<span class="brand-dot">.</span></a><div class="as-navigation">'''+nav+'''</div></nav></header>
<main class="shell" id="main"><header class="as-intro"><p class="as-eyebrow">A living reading list / Ashish Makani</p><h1>AI <span class="serif">×</span> Science<span class="as-dot">.</span></h1><p class="as-deck">Better questions. Reliable discoveries.<br>Human agency at the center.</p></header>
<section class="as-vision" aria-labelledby="vision-title"><h2 id="vision-title">The future I want<br> <span class="serif">to help build.</span></h2><div>'''+''.join('<p>'+esc(x)+'</p>' for x in data['vision'])+'''</div></section>
'''+graph_section+'''
<section class="as-library" aria-labelledby="library-title"><div class="as-library-heading"><div><p class="as-eyebrow">Papers, perspectives & conversations</p><h2 id="library-title">The reading desk</h2></div><a class="as-download" href="/files/ai-science.md" download>Download Markdown ↓</a></div><p class="as-note">'''+esc(data['date_policy'])+''' Inclusion means worth thinking about, not endorsement. External links open in a new tab. Responses stay grouped with their original essays; conversations are ordered by their latest entry.</p>
<div class="as-controls" hidden><div class="as-search"><label for="as-search">Search the collection</label><input id="as-search" type="search" placeholder="Try agents, biology, verification…" autocomplete="off"></div><div><label for="as-topic">Topic</label><select id="as-topic"><option value="">All topics</option>'''+opts(t for e in entries for t in e['tags'])+'''</select></div><div><label for="as-type">Resource type</label><select id="as-type"><option value="">All types</option>'''+opts(e['type'] for e in entries)+'''</select></div><div><label for="as-sort">Order</label><select id="as-sort"><option value="new">Newest first</option><option value="old">Oldest first</option><option value="title">Title A–Z</option></select></div></div>
<div class="as-results-bar"><p id="as-count" role="status" aria-live="polite">'''+str(len(entries))+''' resources</p><span class="as-updated">Updated '''+esc(data['updated'])+'''</span><button id="as-reset" type="button" hidden>Clear filters</button></div><div id="as-entries">'''+''.join(cards)+'''</div><p id="as-empty" hidden>No resources match these filters. Try a broader search or clear the filters.</p></section></main>
<footer class="shell as-footer"><a href="/">← Back to tp53’s homepage</a><p>A growing collection at the intersection of machine learning, medicine and biology.</p></footer>
</div>
</div>
</body></html>
'''
(ROOT/'_pages/ai-science.html').write_text(page)
(ROOT/'files/ai-science.md').write_text('\n'.join(md))
print('Built',len(entries),'public entries and a graph of',len(graph['nodes']),'nodes and',len(graph['edges']),'edges.')
