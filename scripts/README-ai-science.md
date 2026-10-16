# Maintaining AI × Science

Edit `assets/data/ai-science.json`, then run `python3 scripts/build_ai_science.py` from the repository. This regenerates `_pages/ai-science.html` and `files/ai-science.md` from one dataset. The existing navigation data supplies both desktop and mobile links.

Use one entry per public resource; group duplicate formats. Keep dates at verified precision, label video upload dates, and leave unknown original-post URLs null. Summaries should distinguish reported results from commentary. Link original sources rather than redistribute PDFs. Keep private notes and local file paths out of this public dataset.

Preview and check search, combined filters, empty states, ordering and narrow-screen layout before publishing. New entries are curated manually; no automatic discovery or background sync is configured.

The Google Doc and Drive Markdown are companion copies. After changing the catalogue, update the existing companion files rather than creating duplicates. The private project catalogue stores their IDs. Google edits do not automatically sync back into JSON.

## Knowledge graph

The page also shows an interactive knowledge graph (`#knowledge-graph`). It is built from two files:

- `assets/data/ai-science.json`: every reading-list entry becomes a resource node and every tag becomes a topic node, automatically.
- `assets/data/ai-science-kg.json`: the curated layer of people, organisations, venues, AI systems, concepts, methods and code or data, plus typed edges written as `[source, relation, target, optional note]`. Sources are referenced by their entry `id`.

`python3 scripts/build_ai_science.py` validates both files (unknown ids, unknown relations, duplicate edges and unconnected nodes all fail the build) and writes `assets/data/ai-science-graph.json`, which `assets/js/ai-science-graph.js` loads.

To add new material in one step, write a fragment with any of `entries`, `nodes`, `edges` and `relations`, then run `python3 scripts/kg_merge.py fragment.json` (add `--dry-run` to preview). Nodes are matched to existing ones by id or by label, existing values are never overwritten, and the data files are restored if the build fails. Edges should describe what a source discusses or argues, and new concepts should get a one-sentence description.
