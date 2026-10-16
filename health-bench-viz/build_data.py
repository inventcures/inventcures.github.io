"""Build health-bench-viz/data.js from the HealthBench JSONL files.
usage: python3 build_data.py <dir with oss_eval.jsonl hard.jsonl consensus.jsonl> <out data.js>"""
import json, sys, random, collections, os

src, out = sys.argv[1], sys.argv[2]

def load(name):
    p = os.path.join(src, name)
    if not os.path.exists(p):
        return []
    with open(p) as f:
        return [json.loads(l) for l in f if l.strip()]

rows = load("oss_eval.jsonl")
hard_ids = {r["prompt_id"] for r in load("hard.jsonl")}
cons = load("consensus.jsonl")
cons_ids = {r["prompt_id"] for r in cons}

def tagval(tags, prefix):
    return [t.split(":", 1)[1] for t in tags if t.startswith(prefix + ":")]

C = collections.Counter
theme_n, ex_tag_n, axis_n, axis_pts = C(), C(), C(), collections.defaultdict(C)
points_n, level_n, cluster_n = C(), C(), C()
n_crit, n_turns, pos_share = C(), C(), []
cat_by_theme = collections.defaultdict(C)
by_theme = collections.defaultdict(list)
total_crit = 0
for r in rows:
    tags = r.get("example_tags", [])
    th = (tagval(tags, "theme") or ["unknown"])[0]
    theme_n[th] += 1
    for t in tags:
        ex_tag_n[t] += 1
        if t.startswith("physician_agreed_category:"):
            cat_by_theme[th][t.split(":", 1)[1]] += 1
    rub = r["rubrics"]
    n_crit[min(len(rub), 40)] += 1
    n_turns[min(len(r["prompt"]), 15)] += 1
    for it in rub:
        total_crit += 1
        p = it["points"]
        points_n[p] += 1
        for t in it.get("tags", []):
            if t.startswith("axis:"):
                a = t[5:]; axis_n[a] += 1
                axis_pts[a]["pos" if p > 0 else "neg"] += 1
            elif t.startswith("level:"):
                level_n[t[6:]] += 1
            elif t.startswith("cluster:"):
                cluster_n[t[8:]] += 1
    by_theme[th].append(r)

rnd = random.Random(53)
PER = 12
sample = []
for th, lst in sorted(by_theme.items()):
    lst = sorted(lst, key=lambda r: r["prompt_id"])
    rnd.shuffle(lst)
    # deliberately mix: some hard, some multi-turn, rest random
    pick, seen = [], set()
    def take(cond, k):
        for r in lst:
            if len([x for x in pick if cond(x)]) >= k: break
            if r["prompt_id"] not in seen and cond(r):
                pick.append(r); seen.add(r["prompt_id"])
    take(lambda r: r["prompt_id"] in hard_ids, 3)
    take(lambda r: len(r["prompt"]) >= 3, 3)
    for r in lst:
        if len(pick) >= PER: break
        if r["prompt_id"] not in seen:
            pick.append(r); seen.add(r["prompt_id"])
    sample += pick

def slim(r):
    icd = r.get("ideal_completions_data") or {}
    return {
        "id": r["prompt_id"],
        "prompt": [{"role": m["role"], "content": m["content"]} for m in r["prompt"]],
        "rubrics": [{"c": it["criterion"], "p": it["points"], "t": it.get("tags", [])} for it in r["rubrics"]],
        "tags": r.get("example_tags", []),
        "hard": r["prompt_id"] in hard_ids,
        "consensus": r["prompt_id"] in cons_ids,
        "ideal": icd.get("ideal_completion"),
        "idealGroup": icd.get("ideal_completions_group"),
    }

stats = {
    "n": len(rows), "nHard": len(hard_ids), "nConsensus": len(cons_ids),
    "totalCriteria": total_crit,
    "themes": theme_n.most_common(),
    "exampleTags": ex_tag_n.most_common(),
    "catByTheme": {k: v.most_common() for k, v in cat_by_theme.items()},
    "axes": axis_n.most_common(),
    "axisPolarity": {k: dict(v) for k, v in axis_pts.items()},
    "points": sorted(points_n.items()),
    "levels": level_n.most_common(),
    "clusters": cluster_n.most_common(),
    "nCriteria": sorted(n_crit.items()),
    "nTurns": sorted(n_turns.items()),
    "idealCount": sum(1 for r in rows if (r.get("ideal_completions_data") or {}).get("ideal_completion")),
}
payload = json.dumps({"stats": stats, "convos": [slim(r) for r in sample]}, ensure_ascii=False, separators=(",", ":"))
payload = payload.replace("</", "<\\/")
with open(out, "w") as f:
    f.write("window.HB=" + payload + ";\n")
print(len(rows), "rows;", len(sample), "sampled;", os.path.getsize(out) // 1024, "KB")
print("themes", theme_n.most_common())
print("example tag prefixes", C(t.split(":")[0] for t in ex_tag_n).most_common())
print("axes", axis_n.most_common(), "levels", level_n.most_common(), "clusters", len(cluster_n))
print("keys", sorted(rows[0].keys()) if rows else None)
