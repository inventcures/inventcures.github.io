#!/usr/bin/env python3
"""Refresh _data/visitor_stats.json from the GoatCounter API.

Run by .github/workflows/visitor-stats.yml. Needs the GOATCOUNTER_TOKEN
environment variable (an API key with "Read statistics" permission). The site
code and start date are read from the visitor_stats block in _config.yml.

The output holds only aggregate numbers: a total and a per-country count.
"""
import json
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONFIG = ROOT / "_config.yml"
OUT = ROOT / "_data" / "visitor_stats.json"


def config_value(key):
    text = CONFIG.read_text(encoding="utf-8")
    block = re.search(r"^visitor_stats:\n((?:[ \t]+.*\n?)+)", text, re.M)
    if not block:
        return ""
    m = re.search(r"^\s+" + key + r"\s*:\s*\"?([^\"#\n]*)\"?", block.group(1), re.M)
    return m.group(1).strip() if m else ""


def get(api, path, token, **params):
    url = f"{api}{path}?{urllib.parse.urlencode(params)}"
    req = urllib.request.Request(url, headers={
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
        "User-Agent": "visitor-stats-action",
    })
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.load(resp)
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", "replace")[:500]
        raise ApiError(e.code, f"GET {path} returned HTTP {e.code}: {body}") from None


class ApiError(Exception):
    def __init__(self, status, message):
        super().__init__(message)
        self.status = status


def main():
    token = os.environ.get("GOATCOUNTER_TOKEN", "").strip()
    code = config_value("goatcounter_code")
    since = config_value("since") or "2026-11-04"
    if not token or not code:
        print("GOATCOUNTER_TOKEN or goatcounter_code is not set; nothing to do.")
        return 0

    api = f"https://{code}.goatcounter.com/api/v0"
    start = f"{since}T00:00:00Z"
    # The API wants whole hours; round *up* so visits from the current hour count.
    end = datetime.now(timezone.utc).replace(minute=0, second=0, microsecond=0) + timedelta(hours=1)
    end = end.strftime("%Y-%m-%dT%H:%M:%SZ")

    try:
        total = get(api, "/stats/total", token, start=start, end=end).get("total", 0)
    except ApiError as e:
        if e.status == 401:
            print(f"::error::GoatCounter refused the API key. Check GOATCOUNTER_TOKEN has 'Read statistics' permission. {e}")
            return 1
        if e.status == 404:
            # GoatCounter answers 404 while a site has no recorded pageviews yet.
            print(f"::warning::No stats on {code}.goatcounter.com yet (it may have no pageviews so far); keeping the current file. {e}")
            return 0
        raise

    # Locations come back as ISO 3166-1 codes, sometimes with a region suffix
    # ("US-CA"); fold everything to the country.
    countries, offset = {}, 0
    while True:
        page = get(api, "/stats/locations", token, start=start, end=end,
                   limit=100, offset=offset)
        stats = page.get("stats") or []
        for row in stats:
            cc = (row.get("id") or "")[:2].upper()
            if not re.fullmatch(r"[A-Z]{2}", cc):
                continue
            entry = countries.setdefault(cc, {"code": cc, "name": cc, "count": 0})
            if len(row.get("id") or "") == 2 and row.get("name"):
                entry["name"] = row["name"]  # a region row's name is the region, not the country
            entry["count"] += int(row.get("count") or 0)
        if not page.get("more") or not stats:
            break
        offset += len(stats)

    rows = sorted(countries.values(), key=lambda r: (-r["count"], r["name"]))
    previous = json.loads(OUT.read_text(encoding="utf-8")) if OUT.exists() else {}
    data = {
        "updated": previous.get("updated"),
        "since": since,
        "total_visitors": int(total),
        "countries": rows,
    }
    # Only bump the timestamp when the numbers changed, so quiet days make no commit.
    if {k: v for k, v in data.items() if k != "updated"} != {k: v for k, v in previous.items() if k != "updated"} \
            or not previous.get("updated"):
        data["updated"] = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
    OUT.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"{total} visitors from {len(rows)} countries")
    return 0


if __name__ == "__main__":
    sys.exit(main())
