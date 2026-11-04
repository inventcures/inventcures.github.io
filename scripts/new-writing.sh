#!/usr/bin/env bash
# Create a new scribble or essay with today's date and the right front matter.
#
#   scripts/new-writing.sh scribble "agents need memory"   -> _scribbles/2026-11-04-agents-need-memory.md
#   scripts/new-writing.sh scribble                         -> _scribbles/2026-11-04-1830.md (untitled)
#   scripts/new-writing.sh essay "why swarms need a commons" -> _essays/2026-11-04-why-swarms-need-a-commons.md -> /essays/2026/11/why-swarms-need-a-commons/
#
# Times use India Standard Time; set TZ to change it, e.g. TZ=America/New_York.
set -euo pipefail
kind="${1:-}"; title="${2:-}"
export TZ="${TZ:-Asia/Kolkata}"
case "$kind" in scribble|essay) ;; *) echo "usage: $0 scribble|essay [\"title\"]" >&2; exit 1;; esac

root="$(cd "$(dirname "$0")/.." && pwd)"
day="$(date +%Y-%m-%d)"
slug="$(printf '%s' "$title" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/^-+|-+$//g')"
[ -z "$slug" ] && slug="$(date +%H%M)"
q_title="${title//\"/\\\"}"
mkdir -p "$root/_scribbles" "$root/_essays"

if [ "$kind" = scribble ]; then
  file="$root/_scribbles/$day-$slug.md"
  [ -e "$file" ] && { echo "exists: $file" >&2; exit 1; }
  {
    echo "---"
    [ -n "$title" ] && echo "title: \"$q_title\""
    echo "date: $(date '+%Y-%m-%d %H:%M:%S %z')"
    echo "# re:                      # optional: what you're reacting to"
    echo "#   title: \"\""
    echo "#   url: https://"
    echo "#   by: \"\""
    echo "# x: https://x.com/...      # optional: X thread"
    echo "# linkedin: https://...     # optional: LinkedIn post"
    echo "tags: []"
    echo "---"
    echo
    echo "Write here."
  } > "$file"
else
  [ -z "$title" ] && { echo "an essay needs a title" >&2; exit 1; }
  file="$root/_essays/$day-$slug.md"
  [ -e "$file" ] && { echo "exists: $file" >&2; exit 1; }
  cat > "$file" <<EOT
---
title: "$q_title"
date: $day
excerpt: "One or two lines shown under the title on the Essays page."
starred: false   # true marks an essay that took a lot more work (shown as ★)
published: false # flip to true (or delete this line) when it's ready
tags: []
---

Write here.
EOT
fi
echo "${file#$root/}"
