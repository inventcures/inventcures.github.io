# Google Docs sync for reading pages

`/robotics` and `/healthcare-ai` each have a Google Doc copy in the owner's Drive (folder "inventcures.github.io reading lists"). The pages and doc IDs are listed in `scripts/gdocs_sync.json`. A daily scheduled Claude session keeps the two in step, following the procedure below. Nothing runs on page update itself; changes travel at the next daily run.

- **Page → doc.** When a page changes on `master` and its doc has no edits of its own, the run rewrites the doc body to match the page.
- **Doc → page.** When a doc has been edited, the run carries the edits into the page file and opens a pull request. It never merges; the owner merges. The doc is left alone until that PR is merged or closed.

The doc's Drive description records the last commit it was synced from: `gdocs-sync: inventcures/inventcures.github.io <path> @ <sha>`.

## Procedure for each page in `scripts/gdocs_sync.json`

1. Read the doc with Google Docs `read_doc` and save the result to a file (`DOC.json`). Read the Drive description with `get_file_metadata` and take `<sha>` from it.
2. Run `python3 scripts/gdocs_sync.py status <path> DOC.json --base-rev <sha>` on an up-to-date `master`. It prints the doc hash and one of:
   - `in-sync`: nothing to do. If `<sha>` is not the current `master`, update the description to it.
   - `page-changed`: the doc is untouched since the last sync. Run `python3 scripts/gdocs_sync.py requests <path> DOC.json` and send its output as one `update_doc` call (it carries the revision guard; on a revision error, read again and redo). Read the doc again and check `status` now says `in-sync`, then set the description to the current `master` sha.
   - `doc-edited`: the doc has edits. Look for a pull request on a `gdocs-sync/` branch whose body contains `gdocs-sync-hash: <doc hash>`.
     - Open PR with that hash: the edits are already proposed. Do nothing.
     - Merged or closed PR with that hash: the owner has dealt with these edits. Push the page to the doc as for `page-changed` (this is how a rejected edit is undone, and how master changes made meanwhile reach the doc).
     - No PR with that hash: carry the edits into the page (below). If an older `gdocs-sync/` PR for the same page is still open, push to its branch and update its body instead of opening a second one.
3. Report briefly: what was pushed to each doc, and any PR opened or updated.

## Carrying doc edits into a page

`status` prints a diff between the page and the doc, one line per paragraph, with links written as `[text](url)`. Apply each change to the matching element of the page file on a branch `gdocs-sync/<page>-<YYYY-MM-DD>` cut from `master`:

- A changed title, meta line, summary, note or links line edits that element of the `<li class="pd-item">`. Keep the page's HTML structure, classes, `target="_blank" rel="noopener"` on every link, and `<time datetime>` matching the visible date.
- A new entry in the doc (a Heading 3 followed by a meta line and a summary) becomes a new `<li class="pd-item">` in the same position. Follow the site rule: a 1–2 line summary, the date posted, and X or LinkedIn threads linked from the summary or links line.
- Links to `https://inventcures.github.io/...` go back to site-relative paths (`/files/...`).
- Removing an entry in the doc removes it from the page.
- The title and "Synced with" line at the top of the doc are generated; ignore edits there.

Then check `python3 scripts/gdocs_sync.py text <path>` against `doctext DOC.json`: the only differences left should be ones the page format can't hold (say which in the PR). Open the PR against `master` with `gdocs-sync-hash: <doc hash>` on its own line in the body, and summarize the edits. Never merge it.

Comments in the doc are not synced, and a page → doc push rewrites the doc body, which drops comments anchored in it.
