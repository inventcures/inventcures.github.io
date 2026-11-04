# Writing: essays and scribbles

The site has two kinds of writing.

| | Scribbles | Essays |
|---|---|---|
| What | Short, spontaneous, topical reactions. Half-formed is fine. | Long form, well baked, thought through. |
| How often | Often, several a week is fine | Rarely |
| Folder | `_scribbles/` | `_essays/` |
| Index page | [/scribbles/](https://inventcures.github.io/scribbles/): every scribble in full, newest first, grouped by month | [/essays/](https://inventcures.github.io/essays/): one dated line per essay with a short summary, grouped by year |
| URL of a new one | `/scribbles/2026/11/04/<slug>/` | `/essays/2026/11/<slug>/` |
| Feed | `/scribbles/feed.xml` | `/essays/feed.xml` |

The URL comes from the file name: `2026-11-04-agents-need-memory.md` becomes `.../2026/11/04/agents-need-memory/`.
Pick the slug carefully, because changing it later changes the URL.

## Publish a scribble

Fastest from a laptop:

```bash
scripts/new-writing.sh scribble "agents need memory"   # titled
scripts/new-writing.sh scribble                        # untitled, slug is the time (e.g. 1830)
```

This writes `_scribbles/<date>-<slug>.md` with the current India time. Edit it, then commit and push to `master`.

From a phone or the GitHub website: open the `_scribbles` folder, choose **Add file → Create new file**, name it `2026-11-04-some-slug.md`, and paste:

```yaml
---
title: "Optional short title"        # leave the line out for an untitled scribble
date: 2026-11-04 18:30:00 +0530      # the time is shown; keep the +0530
re:                                  # optional: what you're reacting to
  title: "The post or paper"
  url: https://example.com/post
  by: "Author name"
x: https://x.com/someone/status/123  # optional: X thread
linkedin: https://www.linkedin.com/posts/...  # optional
tags: [agents, oncology]
---

A few sentences, a quote, a link. Markdown works.
```

The `re`, `x` and `linkedin` fields are shown as a small line above the scribble, with the X and LinkedIn links in parentheses.

## Publish an essay

```bash
scripts/new-writing.sh essay "Why swarms need a commons"
```

This writes `_essays/<date>-<slug>.md` with `published: false`, so you can push drafts safely. When it's ready, delete that line (or set it to `true`) and push.

Front matter fields:

```yaml
---
title: "Why swarms need a commons"
date: 2026-11-04
excerpt: "One or two lines. Shown under the title on /essays/ and in the feed."
starred: true    # optional ★: marks an essay that took a lot more work
tags: [agent swarms]
---
```

Essays use the same page layout as the rest of the site (read time, date, footnotes, MathJax), with an "All essays" link at the bottom.

### Old URLs

Every essay lives under `/essays/YYYY/MM/<slug>/`. The two essays published before this system existed used to live at the site root. Their old links still work as redirects, listed under `redirect_from:` in their front matter:

- `/thoughts-on-agent-swarms/` → `/essays/2026/11/thoughts-on-agent-swarms/`
- `/thoughts-on-agent-swarms/deep-dive/` → `/essays/2026/11/thoughts-on-agent-swarms/deep-dive/`
- `/cure-em-all/` (and `/ai-to-amplify-our-ambitions/`) → `/essays/2026/11/cure-em-all/`

The swarms preprint PDF stays at `/files/thoughts-on-agent-swarms.pdf`.

If you ever rename an essay's slug, add its old URL under `redirect_from:` so existing links don't break.

## Preview locally

```bash
bundle exec jekyll serve   # then open http://localhost:4000/scribbles/
```
