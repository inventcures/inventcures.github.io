#!/usr/bin/env python3
"""Build the AI × Science knowledge graph from the reading list plus the curated layer.

Inputs:  assets/data/ai-science.json      (reading-list entries -> resource nodes, tags -> topic nodes)
         assets/data/ai-science-kg.json   (curated people, orgs, venues, concepts, methods, artifacts, edges)
Output:  assets/data/ai-science-graph.json (what the page loads)

Run directly, or via scripts/build_ai_science.py, which calls build() too.
"""
from pathlib import Path
import json, re

ROOT = Path(__file__).resolve().parents[1]
NODE_TYPES = ['resource', 'topic', 'concept', 'method', 'person', 'org', 'venue', 'system', 'artifact']


def slug(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower().replace('–', '-')).strip('-')


def build(write=True):
    reading = json.loads((ROOT / 'assets/data/ai-science.json').read_text())
    kg = json.loads((ROOT / 'assets/data/ai-science-kg.json').read_text())
    relations = kg['relations']
    assert all(set(v) == {'label', 'inverse'} for v in relations.values()), 'each relation needs a label and an inverse'
    nodes, edges = {}, []

    def add(node):
        assert node['id'] not in nodes, 'duplicate node id ' + node['id']
        assert node['type'] in NODE_TYPES, 'unknown node type %s on %s' % (node['type'], node['id'])
        assert not node.get('url') or node['url'].startswith('https://'), 'non-https url on ' + node['id']
        nodes[node['id']] = {k: v for k, v in node.items() if v not in (None, '', [])}

    for e in reading['entries']:
        add({'id': e['id'], 'type': 'resource', 'label': e['title'], 'kind': e['type'], 'url': e['url'],
             'date': e.get('date'), 'description': e['summary'], 'anchor': '#' + e['id']})
        for tag in e['tags']:
            tid = 't-' + slug(tag)
            if tid not in nodes:
                add({'id': tid, 'type': 'topic', 'label': tag})
            edges.append({'s': e['id'], 't': tid, 'r': 'tagged'})
    for node in kg['nodes']:
        add(node)

    seen = set()
    for edge in kg['edges']:
        s, r, t = edge[:3]
        note = edge[3] if len(edge) > 3 else None
        assert s in nodes, 'edge source not found: %s' % s
        assert t in nodes, 'edge target not found: %s' % t
        assert r in relations, 'unknown relation: %s' % r
        assert (s, r, t) not in seen, 'duplicate edge %s %s %s' % (s, r, t)
        seen.add((s, r, t))
        edges.append({'s': s, 't': t, 'r': r, **({'note': note} if note else {})})

    degree = {}
    for edge in edges:
        for end in (edge['s'], edge['t']):
            degree[end] = degree.get(end, 0) + 1
    orphans = [n for n in nodes if n not in degree]
    assert not orphans, 'nodes without edges: ' + ', '.join(orphans)

    graph = {'updated': reading['updated'], 'relations': {'tagged': {'label': 'about', 'inverse': 'readings'}, **relations},
             'types': NODE_TYPES, 'nodes': list(nodes.values()), 'edges': edges}
    if write:
        (ROOT / 'assets/data/ai-science-graph.json').write_text(json.dumps(graph, ensure_ascii=False, separators=(',', ':')) + '\n')
    return graph


if __name__ == '__main__':
    g = build()
    print('Knowledge graph:', len(g['nodes']), 'nodes,', len(g['edges']), 'edges.')
