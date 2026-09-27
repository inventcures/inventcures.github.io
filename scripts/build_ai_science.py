#!/usr/bin/env python3
"""Regenerate the public reading page and Markdown from assets/data/ai-science.json."""
from pathlib import Path
import json,html,datetime
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
 assert all(u.startswith('https://') for u in e.get('related_urls',[]))
def prettydate(e):
 d=e.get('date')
 if not d:return 'Date unverified'
 if e.get('date_precision')=='day':return datetime.date.fromisoformat(d).strftime('%d %b %Y')
 return d+' · exact date unverified'
cards=[];md=['# AI × Science','',*sum(([p,''] for p in data['vision']),[]),'Updated: '+data['updated'],'',data['date_policy'],'','## Reading list','']
active_group=None
for e in entries:
 group=e.get('group_id')
 if active_group and group!=active_group:cards.append('</section>')
 if group and group!=active_group:
  cards.append('<section id="'+esc(group)+'" class="as-conversation" data-date="'+esc(max(x.get('date') or '' for x in groups[group]))+'" data-precision="day" data-title="'+esc(e['group_title'])+'" aria-label="'+esc(e['group_title'])+'"><p class="as-group-title">'+esc(e['group_title'])+'</p><p class="as-group-note">Start with Litt and doomslide’s response, then read Gowers and Hairer on mathematical values and institutional engagement. Each entry retains its publication date.</p>')
  md += ['### '+e['group_title'],'','Litt’s essay and doomslide’s response, followed by Gowers and Hairer on mathematical values and institutional engagement.','']
 active_group=group
 date=prettydate(e);tags=''.join('<span class="as-tag">'+esc(t)+'</span>' for t in e['tags'])
 op=('<a class="as-chip as-op" href="'+esc(e['op_url'])+'" target="_blank" rel="noopener noreferrer">OP · '+esc(e['op_label'])+' ↗</a>') if e.get('op_url') else '<span class="as-chip as-unverified">OP not yet verified</span>'
 related=''.join('<a href="'+esc(u)+'" target="_blank" rel="noopener noreferrer">'+esc(e.get('related_labels',{}).get(u, 'Project page' if 'scientist-two' in u else 'Related resource'))+' ↗</a>' for u in e.get('related_urls',[]))
 dateprefix='Uploaded' if e['type']=='Talk' else 'Published'
 datehtml=('<time datetime="'+esc(e['date'])+'">'+esc(date)+'</time>') if e.get('date_precision')=='day' else '<span>'+esc(date)+'</span>'
 cards.append(f'''<article class="as-entry" id="{esc(e['id'])}" data-title="{esc(e['title'])}" data-type="{esc(e['type'])}" data-tags="{esc('|'.join(e['tags']))}" data-date="{esc(e.get('date') or '')}" data-precision="{esc(e.get('date_precision') or '')}">
<div class="as-entry-type">{esc(e['type'])}{('<br><span class="as-role">'+esc(e['group_role'])+'</span>') if e.get('group_role') else ''}</div><div class="as-entry-body"><h3><a href="{esc(e['url'])}" target="_blank" rel="noopener noreferrer">{esc(e['title'])}<span aria-hidden="true"> ↗</span></a></h3><p>{esc(e['summary'])}</p><div class="as-chips"><span class="as-chip">{dateprefix} · {datehtml}</span>{op}</div><div class="as-tags">{tags}{related}</div></div></article>''')
 md += [('#### ' if group else '### ')+e['title'],'',e['summary'],'',f'- Type: {e["type"]}',f'- {dateprefix}: {date}',f'- Resource: [{e["title"]}]({e["url"]})',f'- OP: [{e["op_label"]}]({e["op_url"]})' if e.get('op_url') else '- OP: not yet verified','- Topics: '+', '.join(e['tags'])]+['- '+e.get('related_labels',{}).get(u,'Related')+': '+u for u in e.get('related_urls',[])]+['']
if active_group:cards.append('</section>')
opts=lambda vals:''.join('<option value="'+esc(x)+'">'+esc(x)+'</option>' for x in sorted(set(vals)))
nav='''{% for item in site.data.navigation.main %}<a href="{{ item.url | relative_url }}"{% if item.url == '/ai+science/' %} aria-current="page"{% endif %}>{{ item.title }}</a>{% endfor %}'''
page='''---
permalink: /ai+science/
title: "AI × Science"
layout: null
---
<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AI × Science · tp53</title><meta name="description" content="Ashish Makani’s living reading list on AI agents, scientific discovery, mathematics, biology and medicine."><link rel="canonical" href="https://inventcures.github.io/ai+science/"><meta name="theme-color" content="#f4f1e9"><link rel="stylesheet" href="/assets/css/home-theme.css"><link rel="stylesheet" href="/assets/css/ai-science.css"><script src="/assets/js/ai-science.js" defer></script></head><body class="as-page">
<a class="skip" href="#main">Skip to content</a><header class="nav-wrap"><nav class="nav" aria-label="Main navigation"><a class="brand" href="/"><span class="brand-icon" aria-hidden="true">✳</span> tp53<span class="brand-dot">.</span></a><div class="as-navigation">'''+nav+'''</div></nav></header>
<main class="shell" id="main"><header class="as-intro"><p class="as-eyebrow">A living reading list / Ashish Makani</p><h1>AI <span class="serif">×</span> Science<span class="as-dot">.</span></h1><p class="as-deck">Better questions. Reliable discoveries.<br>Human agency at the center.</p></header>
<section class="as-vision" aria-labelledby="vision-title"><h2 id="vision-title">The future I want<br> <span class="serif">to help build.</span></h2><div>'''+''.join('<p>'+esc(x)+'</p>' for x in data['vision'])+'''</div></section>
<section class="as-library" aria-labelledby="library-title"><div class="as-library-heading"><div><p class="as-eyebrow">Papers, perspectives & conversations</p><h2 id="library-title">The reading desk</h2></div><a class="as-download" href="/files/ai-science.md" download>Download Markdown ↓</a></div><p class="as-note">'''+esc(data['date_policy'])+''' Inclusion means worth thinking about, not endorsement. External links open in a new tab. Responses stay grouped with their original essays; conversations are ordered by their latest entry.</p>
<div class="as-controls" hidden><div class="as-search"><label for="as-search">Search the collection</label><input id="as-search" type="search" placeholder="Try agents, biology, verification…" autocomplete="off"></div><div><label for="as-topic">Topic</label><select id="as-topic"><option value="">All topics</option>'''+opts(t for e in entries for t in e['tags'])+'''</select></div><div><label for="as-type">Resource type</label><select id="as-type"><option value="">All types</option>'''+opts(e['type'] for e in entries)+'''</select></div><div><label for="as-sort">Order</label><select id="as-sort"><option value="new">Newest first</option><option value="old">Oldest first</option><option value="title">Title A–Z</option></select></div></div>
<div class="as-results-bar"><p id="as-count" role="status" aria-live="polite">'''+str(len(entries))+''' resources</p><span class="as-updated">Updated '''+esc(data['updated'])+'''</span><button id="as-reset" type="button" hidden>Clear filters</button></div><div id="as-entries">'''+''.join(cards)+'''</div><p id="as-empty" hidden>No resources match these filters. Try a broader search or clear the filters.</p></section></main>
<footer class="shell as-footer"><a href="/">← Back to tp53’s homepage</a><p>A growing collection at the intersection of machine learning, medicine and biology.</p></footer></body></html>
'''
(ROOT/'_pages/ai-science.html').write_text(page)
(ROOT/'files/ai-science.md').write_text('\n'.join(md))
print('Built',len(entries),'public entries.')
