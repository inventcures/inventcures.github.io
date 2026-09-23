# Maintaining AI × Science

Edit `assets/data/ai-science.json`, then run `python3 scripts/build_ai_science.py` from the repository. This regenerates `_pages/ai-science.html` and `files/ai-science.md` from one dataset. The existing navigation data supplies both desktop and mobile links.

Use one entry per public resource; group duplicate formats. Keep dates at verified precision, label video upload dates, and leave unknown original-post URLs null. Summaries should distinguish reported results from commentary. Link original sources rather than redistribute PDFs. Keep private notes and local file paths out of this public dataset.

Preview and check search, combined filters, empty states, ordering and narrow-screen layout before publishing. New entries are curated manually; no automatic discovery or background sync is configured.

The Google Doc and Drive Markdown are companion copies. After changing the catalogue, update the existing companion files rather than creating duplicates. The private project catalogue stores their IDs. Google edits do not automatically sync back into JSON.
