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

### Tree, progress bar and share links

Every essay gets a left rail, built from its `##` and `###` headings: the essay title, a **Tree** outline with the current section highlighted as you scroll, the read time, and **Share** links (X.com, LinkedIn, Email, Copy URL, Copy markdown). A dithered progress bar with a percentage stays fixed at the top of the right margin as you scroll. Nothing to do when writing; give sections clear `##`/`###` headings and the tree follows. On screens too narrow for a left rail (below about 1400px wide), a small "Tree" button with a mini bar and the percentage at the bottom left opens the same panel. "Copy markdown" copies the essay's source from GitHub (front matter removed). To turn the rail off for one essay, set `tree: false` in its front matter. Any other long page can have it too by adding `{% include essay-tree.html content=".ps" %}` at the end, where `content` is the CSS selector of the page's text column (see `/palli-sahayak/` and `/vaani-sakhi/`; other options are listed at the top of `_includes/essay-tree.html`).

### Margin references

Every essay shows its footnotes as references in the right margin, next to the sentence that cites them (like [hallerite's swarm post](https://hallerite.com/posts/on-the-nature-of-the-swarm/)). On a phone, tapping a footnote number opens the note under the paragraph. Links in the notes open in new tabs. Keep the inline hyperlink in the sentence too, and add a footnote for the source:

```markdown
Booth warns of a "tsunami of programs".[^booth]

[^booth]: Bruce Booth, ["The fruits of AI drug abundance"](https://lifescivc.com/...), *Life Sci VC* (30 Oct 2026).
```

Footnote definitions can sit anywhere in the file; the end is tidiest. To turn margin notes off for one essay, set `sidenotes: false` in its front matter. Other pages can opt in by adding the two lines at the end of `_pages/thoughts-on-agent-swarms-deep-dive.md`.

### Custom URLs

An essay can keep a short URL of its own by setting `permalink:`. The two essays that were published before this system existed do this, so their original links keep working:

- `/thoughts-on-agent-swarms/` (and `/thoughts-on-agent-swarms/deep-dive/`, and the PDF at `/files/thoughts-on-agent-swarms.pdf`)
- `/cure-em-all/`

Each also answers at a structured alias, `/essays/2026/11/<slug>/`, which redirects to the original. To add an alias to any page, list it under `redirect_from:`.

## Preview locally

```bash
bundle exec jekyll serve   # then open http://localhost:4000/scribbles/
```
