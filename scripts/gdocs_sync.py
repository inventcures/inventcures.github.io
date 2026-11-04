#!/usr/bin/env python3
"""Mirror reading-list pages (/robotics, /healthcare-ai) into Google Docs and back.

The page file is the source of truth for structure. This script turns a page into
a list of styled paragraphs, which it can print as plain text (for comparing with
the doc) or as a Google Docs `update_doc` batch that rewrites the doc body.
See scripts/README-gdocs-sync.md for the sync procedure.

  python3 scripts/gdocs_sync.py text PAGE                 text the doc should hold, links as [text](url)
  python3 scripts/gdocs_sync.py doctext DOC.json          text the doc holds now, in the same form
  python3 scripts/gdocs_sync.py status PAGE DOC.json [--base-rev SHA]
  python3 scripts/gdocs_sync.py requests PAGE DOC.json    update_doc arguments (stdout, JSON)
  python3 scripts/gdocs_sync.py hash DOC.json             short hash of the doc's text

PAGE may be a path or GIT_REV:path (for example a1b2c3d:_pages/robotics.md).
DOC.json is a saved Google Docs read_doc result.
"""
import hashlib
import json
import re
import subprocess
import sys
from html import unescape
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITE = "https://inventcures.github.io"
CONFIG = json.loads((ROOT / "scripts" / "gdocs_sync.json").read_text())

META_COLOR = {"color": {"rgbColor": {"red": 0.4, "green": 0.4, "blue": 0.4}}}


def read_page(spec):
    if ":" in spec and not Path(spec).exists():
        rev, path = spec.split(":", 1)
        return subprocess.run(["git", "-C", str(ROOT), "show", f"{rev}:{path}"],
                              check=True, capture_output=True, text=True).stdout
    return Path(spec).read_text()


def page_info(spec):
    path = spec.split(":", 1)[1] if ":" in spec and not Path(spec).exists() else spec
    rel = Path(path).resolve().relative_to(ROOT).as_posix() if Path(path).exists() else path
    for page in CONFIG["pages"]:
        if page["path"] == rel:
            return page
    sys.exit(f"{rel} is not listed in scripts/gdocs_sync.json")


def absolute(href):
    return SITE + href if href.startswith("/") else href


class Block:
    """One doc paragraph: a named style plus runs of (text, link, bold, italic)."""

    def __init__(self, style, kind=""):
        self.style, self.kind, self.runs = style, kind, []

    def add(self, text, link=None, bold=False, italic=False):
        if text:
            self.runs.append((text, link, bold, italic))

    @property
    def text(self):
        return re.sub(r"\s+", " ", "".join(r[0] for r in self.runs)).strip()


class PageParser(HTMLParser):
    """Collects blocks from the HTML parts of a page (list items, cards)."""

    BLOCK_TAGS = {"h3": ("HEADING_3", "title"), "p": ("NORMAL_TEXT", None)}

    def __init__(self, blocks):
        super().__init__(convert_charrefs=True)
        self.blocks, self.block, self.link, self.italic, self.bold = blocks, None, None, 0, 0
        self.card = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        cls = attrs.get("class", "")
        if tag == "a" and "hc-card" in cls:
            self.card = absolute(attrs["href"])
        elif tag in self.BLOCK_TAGS:
            style, kind = self.BLOCK_TAGS[tag]
            kind = kind or cls.replace("pd-", "") or "para"
            self.block = Block(style, kind)
        elif tag == "strong" and self.card:
            self.block = Block("NORMAL_TEXT", "card-title")
        elif tag == "span" and self.card:
            self.block = Block("NORMAL_TEXT", "card-text")
        elif tag == "a":
            self.link = absolute(attrs.get("href", ""))
        elif tag in ("em", "i"):
            self.italic += 1
        elif tag in ("b", "strong"):
            self.bold += 1

    def handle_endtag(self, tag):
        if tag == "a" and self.card and not self.link:
            self.card = None
        elif tag == "a":
            self.link = None
        elif tag in ("em", "i"):
            self.italic -= 1
        elif tag == "b" or (tag == "strong" and not self.card):
            self.bold -= 1
        if self.block and (tag in self.BLOCK_TAGS or (self.card and tag in ("strong", "span"))):
            self.blocks.append(self.block)
            self.block = None

    def handle_data(self, data):
        if not self.block:
            return
        link = self.link or (self.card if self.block.kind == "card-title" else None)
        bold = bool(self.bold) or self.block.kind == "card-title"
        self.block.add(data, link, bold, bool(self.italic))


def markdown_runs(block, text):
    """Inline Markdown in plain paragraphs: links, **bold**, *italic*."""
    pattern = re.compile(r"\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*")
    pos = 0
    for m in pattern.finditer(text):
        block.add(unescape(text[pos:m.start()]))
        if m.group(1):
            block.add(unescape(m.group(1)), link=absolute(m.group(2)))
        elif m.group(3):
            block.add(unescape(m.group(3)), bold=True)
        else:
            block.add(unescape(m.group(4)), italic=True)
        pos = m.end()
    block.add(unescape(text[pos:]))


def blocks_for(spec):
    page = page_info(spec)
    source = read_page(spec)
    front, body = re.match(r"---\n(.*?)\n---\n(.*)", source, re.S).groups()
    body = re.sub(r"<style>.*?</style>", "", body, flags=re.S)

    title = Block("TITLE")
    title.add(page["doc_title"])
    note = Block("NORMAL_TEXT", "sync-note")
    note.add("Synced with ")
    note.add(SITE + page["url"], link=SITE + page["url"])
    note.add(". Edits here come back to the site as a pull request.", italic=True)
    blocks = [title, note]

    html_chunk = []

    def flush_html():
        if html_chunk:
            parser = PageParser(blocks)
            parser.feed("\n".join(html_chunk))
            parser.close()
            html_chunk.clear()

    for para in re.split(r"\n\s*\n", body.strip()):
        stripped = para.strip()
        if stripped.startswith("<"):
            html_chunk.append(stripped)
            continue
        flush_html()
        heading = re.match(r"(#{2,3})\s+(.*)", stripped)
        if heading:
            block = Block("HEADING_2" if len(heading.group(1)) == 2 else "HEADING_3", "section")
            block.add(heading.group(2).strip())
        else:
            block = Block("NORMAL_TEXT", "intro")
            markdown_runs(block, " ".join(stripped.split()))
        blocks.append(block)
    flush_html()
    return [b for b in blocks if b.text]


def marked(pairs):
    """One comparison line from (text, link) pieces: links shown as [text](url)."""
    merged = []
    for text, link in pairs:
        if merged and merged[-1][1] == link:
            merged[-1][0] += text
        else:
            merged.append([text, link])
    out = ""
    for text, link in merged:
        if link and text.strip():
            lead, core, trail = re.match(r"(\s*)(.*?)(\s*)$", text, re.S).groups()
            out += f"{lead}[{core}]({link}){trail}"
        else:
            out += text
    return out


def normalize(lines):
    out = []
    for line in lines:
        line = line.replace(" ", " ").replace("\u000b", " ")
        line = re.sub(r"\s+", " ", line).strip()
        if line:
            out.append(line)
    return out


def page_text(spec):
    return normalize(marked((r[0], r[1]) for r in b.runs) for b in blocks_for(spec))


def doc_body(doc):
    if "tabs" in doc:
        return doc["tabs"][0]["documentTab"]["body"]["content"]
    return doc["body"]["content"]


def load_doc(path):
    doc = json.loads(Path(path).read_text())
    # Saved tool results sometimes wrap the document JSON.
    for key in ("content", "document", "result"):
        if key in doc and isinstance(doc[key], dict):
            doc = doc[key]
    if isinstance(doc, list) and doc and "text" in doc[0]:
        doc = json.loads(doc[0]["text"])
    return doc


def doc_text(doc):
    lines = []
    for el in doc_body(doc):
        para = el.get("paragraph")
        if para:
            runs = [e["textRun"] for e in para["elements"] if "textRun" in e]
            lines.append(marked((r["content"], r.get("textStyle", {}).get("link", {}).get("url")) for r in runs))
    return normalize(lines)


def text_hash(lines):
    return hashlib.sha256("\n".join(lines).encode()).hexdigest()[:12]


def utf16(s):
    return len(s.encode("utf-16-le")) // 2


def update_requests(spec, doc):
    content = doc_body(doc)
    end = content[-1]["endIndex"]
    blocks = blocks_for(spec)
    text = "\n".join(b.text for b in blocks)
    requests = []
    if end > 2:
        requests.append({"deleteContentRange": {"range": {"startIndex": 1, "endIndex": end - 1}}})
    requests.append({"insertText": {"location": {"index": 1}, "text": text}})
    total = utf16(text) + 1
    # Start from plain body text, then style each paragraph and run.
    requests.append({"updateParagraphStyle": {"range": {"startIndex": 1, "endIndex": total},
                                              "paragraphStyle": {"namedStyleType": "NORMAL_TEXT",
                                                                 "spaceBelow": {"magnitude": 6, "unit": "PT"}},
                                              "fields": "namedStyleType,indentStart,indentFirstLine,spaceBelow"}})
    requests.append({"updateTextStyle": {"range": {"startIndex": 1, "endIndex": total},
                                         "textStyle": {}, "fields": "bold,italic,link,foregroundColor,fontSize"}})
    pos = 1
    for block in blocks:
        start, stop = pos, pos + utf16(block.text)
        if block.style != "NORMAL_TEXT":
            requests.append({"updateParagraphStyle": {"range": {"startIndex": start, "endIndex": stop + 1},
                                                      "paragraphStyle": {"namedStyleType": block.style},
                                                      "fields": "namedStyleType"}})
        if block.kind in ("note", "card-text"):
            requests.append({"updateParagraphStyle": {"range": {"startIndex": start, "endIndex": stop + 1},
                                                      "paragraphStyle": {"indentStart": {"magnitude": 18, "unit": "PT"},
                                                                         "indentFirstLine": {"magnitude": 18, "unit": "PT"}},
                                                      "fields": "indentStart,indentFirstLine"}})
        if block.kind in ("meta", "sync-note", "note"):
            style = {"italic": True} if block.kind != "meta" else {}
            style["foregroundColor"] = META_COLOR
            fields = "foregroundColor" + (",italic" if block.kind != "meta" else "")
            requests.append({"updateTextStyle": {"range": {"startIndex": start, "endIndex": stop},
                                                 "textStyle": style, "fields": fields}})
        # Runs: recompute offsets against the whitespace-collapsed paragraph text.
        cursor = 0
        for run_text, link, bold, italic in block.runs:
            piece = re.sub(r"\s+", " ", run_text)
            if cursor == 0:
                piece = piece.lstrip()
            found = block.text.find(piece.strip(), cursor) if piece.strip() else -1
            if found < 0:
                continue
            a = start + utf16(block.text[:found])
            b = a + utf16(piece.strip())
            cursor = found + len(piece.strip())
            style, fields = {}, []
            if link:
                style["link"] = {"url": link}
                fields.append("link")
            if bold:
                style["bold"] = True
                fields.append("bold")
            if italic:
                style["italic"] = True
                fields.append("italic")
            if fields:
                requests.append({"updateTextStyle": {"range": {"startIndex": a, "endIndex": b},
                                                     "textStyle": style, "fields": ",".join(fields)}})
        pos = stop + 1
    return {"documentId": doc.get("documentId"), "requests": requests,
            "writeControl": {"requiredRevisionId": doc.get("revisionId")}}


def diff(a, b, a_name, b_name):
    import difflib
    return "\n".join(difflib.unified_diff(a, b, a_name, b_name, lineterm="", n=1))


def main(argv):
    if len(argv) < 2:
        sys.exit(__doc__)
    cmd, args = argv[1], argv[2:]
    if cmd == "text":
        print("\n".join(page_text(args[0])))
    elif cmd == "doctext":
        print("\n".join(doc_text(load_doc(args[0]))))
    elif cmd == "hash":
        print(text_hash(doc_text(load_doc(args[0]))))
    elif cmd == "requests":
        print(json.dumps(update_requests(args[0], load_doc(args[1])), ensure_ascii=False, indent=1))
    elif cmd == "status":
        spec, current = args[0], doc_text(load_doc(args[1]))
        base = args[args.index("--base-rev") + 1] if "--base-rev" in args else None
        path = spec.split(":", 1)[-1] if ":" in spec and not Path(spec).exists() else spec
        wanted = page_text(spec)
        print(f"doc hash: {text_hash(current)}")
        if current == wanted:
            print("in-sync: the doc matches the page")
        elif base and current == page_text(f"{base}:{Path(path).resolve().relative_to(ROOT).as_posix()}"):
            print("page-changed: the doc is unedited since the last sync; push the page to the doc")
        else:
            print("doc-edited: the doc has edits the page does not have")
            print(diff(wanted, current, "page", "doc"))
    else:
        sys.exit(__doc__)


if __name__ == "__main__":
    main(sys.argv)
