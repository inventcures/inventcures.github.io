#!/usr/bin/env python3
"""Merge a knowledge-graph fragment into the AI × Science data, then rebuild the page.

Usage: python3 scripts/kg_merge.py fragment.json [--dry-run]

A fragment is JSON with any of:
  "entries": reading-list entries in the ai-science.json schema (new ids are appended; existing ids are left alone)
  "nodes":   curated nodes {id, type, label, description?, url?}
  "edges":   [source, relation, target, note?]
  "relations": {name: description} for any new relation names

Nodes match existing ones by id, or by label ignoring case and punctuation, so "Terence Tao" in a
fragment reuses p-terence-tao. Edges are rewritten to the matched ids and duplicates are dropped.
Nothing is written if the merged graph fails validation.
"""
from pathlib import Path
import json, re, sys, subprocess

ROOT = Path(__file__).resolve().parents[1]
READING = ROOT / 'assets/data/ai-science.json'
KG = ROOT / 'assets/data/ai-science-kg.json'
key = lambda label: re.sub(r'[^a-z0-9]', '', label.lower())


def dump_kg(kg):
    """One node or edge per line, so merges read as small diffs."""
    one = lambda x: json.dumps(x, ensure_ascii=False)
    return ('{\n  "about": ' + one(kg['about']) + ',\n  "relations": {\n' + ',\n'.join('    ' + one(k) + ': ' + one(v) for k, v in kg['relations'].items()) + '\n  }'
            + ',\n  "nodes": [\n' + ',\n'.join('    ' + one(n) for n in kg['nodes'])
            + '\n  ],\n  "edges": [\n' + ',\n'.join('    ' + one(e) for e in kg['edges']) + '\n  ]\n}\n')


def main(path, dry_run=False):
    frag = json.loads(Path(path).read_text())
    reading = json.loads(READING.read_text())
    kg = json.loads(KG.read_text())
    report = {'entries': 0, 'nodes': 0, 'matched': 0, 'edges': 0}

    entry_ids = {e['id'] for e in reading['entries']}
    for e in frag.get('entries', []):
        if e['id'] not in entry_ids:
            reading['entries'].append(e); entry_ids.add(e['id']); report['entries'] += 1

    by_id = {n['id']: n for n in kg['nodes']}
    by_label = {key(n['label']): n['id'] for n in kg['nodes']}
    by_label.update({key(e['title']): e['id'] for e in reading['entries']})
    alias = {}
    for n in frag.get('nodes', []):
        existing = n['id'] if n['id'] in by_id or n['id'] in entry_ids else by_label.get(key(n['label']))
        if existing:
            alias[n['id']] = existing; report['matched'] += 1
            # fill in missing fields on an existing curated node, never overwrite
            if existing in by_id:
                for k, v in n.items():
                    by_id[existing].setdefault(k, v)
            continue
        kg['nodes'].append(n); by_id[n['id']] = n; by_label[key(n['label'])] = n['id']; report['nodes'] += 1

    kg['relations'].update(frag.get('relations', {}))
    have = {tuple(e[:3]) for e in kg['edges']}
    for e in frag.get('edges', []):
        e = [alias.get(e[0], e[0]), e[1], alias.get(e[2], e[2]), *e[3:]]
        if tuple(e[:3]) not in have:
            kg['edges'].append(e); have.add(tuple(e[:3])); report['edges'] += 1

    print('Merge adds', report)
    if dry_run:
        return
    old_reading, old_kg = READING.read_text(), KG.read_text()
    READING.write_text(json.dumps(reading, ensure_ascii=False, indent=2) + '\n')
    KG.write_text(dump_kg(kg))
    result = subprocess.run([sys.executable, str(ROOT / 'scripts/build_ai_science.py')])
    if result.returncode:
        READING.write_text(old_reading); KG.write_text(old_kg)
        sys.exit('Build failed; data files restored. Fix the fragment and retry.')


if __name__ == '__main__':
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    main(sys.argv[1], '--dry-run' in sys.argv)
