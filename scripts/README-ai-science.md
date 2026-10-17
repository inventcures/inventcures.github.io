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

### 3D view

The graph opens as a 3D "bokeh constellation" (`assets/js/ai-science-graph3d.js`), with the 2D map one click away. The plan and spec it was built from live with the project notes (`kg/3d-graph-spec.md`).

- three.js r170 and its OrbitControls are vendored in `assets/js/lib-three/` (not under `assets/js/vendor`, which `_config.yml` excludes from the published site) (MIT, licence alongside) and loaded through the import map in the page head, so nothing is fetched from a CDN. To upgrade, `npm pack three@<version>` and copy `build/three.module.min.js` and `examples/jsm/controls/OrbitControls.js` over the old files.
- The 3D view reads the same `ai-science-graph.json`; nothing in the data pipeline is specific to it. Its layout is computed in the browser from a fixed starting arrangement, so the same graph always looks the same.
- The 2D script stays in charge of selection, search, type filters, the connections panel and `?node=` links. It exposes `window.aiScienceGraph` (`select`, `selected`, `hidden`) and fires `kg:select` and `kg:types` events, which the 3D view follows.
- Readers without WebGL2, or who prefer reduced motion, get the 2D map first. Reduced motion also turns off the tour, auto-rotation and camera flights in 3D.
- Before publishing a change to either view, preview at desktop and phone widths and check selection, search, filters, the 2D/3D toggle and a `?node=` link.
