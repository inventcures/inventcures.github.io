# Spec: city-level visitor stats with k-anonymity

Status: implemented in the PR that adds this file
Owner: tp53 · Date: 2026-11-04

## 1. Goal

Show roughly where visitors come from, down to the city, without exposing
any individual visitor.

- **Public** (homepage `#visitors` and `/sitemap/`): the existing country heatmap,
  plus city markers and a "Top cities" list. A city only appears once **at
  least k = 5** visitors have come from it.
- **Private** (`/admin/analytics/`, behind a key): every city, with no threshold,
  filterable by page and date range.

### Non-goals

- Storing or showing IP addresses, exact coordinates, or anything that tracks
  one person across visits.
- Replacing GoatCounter, which stays the source for totals, pages, referrers
  and campaigns. The new service only adds the city dimension.
- Real-time accuracy. Public numbers may be up to 5 minutes stale because of caching.

## 2. Why a new component

GoatCounter never stores the IP address or city, by design. City lookup has to
happen when the visit arrives, from the visitor's IP. GitHub Pages can't run
code, so the lookup runs on a small **Cloudflare Worker**, which is free for
this volume.

Cloudflare's edge already geolocates every request and hands the Worker
`request.cf.{country, region, city, latitude, longitude}`. The Worker reads
those fields and **never reads, logs or stores the IP**.

## 3. Architecture

```
visitor's browser ──(1) page view──▶ GoatCounter          (unchanged)
        │
        └──(2) POST /hit {path}──▶ Cloudflare Worker ──▶ D1 (SQLite)
                                        │   aggregate counts only
homepage / sitemap ──(3) GET /public ──▶┤   k ≥ 5 filter, cached 5 min
admin page ──(4) GET /admin + key ─────▶┘   full detail
```

| Piece | Where | Purpose |
|---|---|---|
| `worker/src/index.js` | Cloudflare Worker `visitor-cities` | `/hit`, `/public`, `/admin`, `/health` |
| `worker/schema.sql` | D1 database `visitor-cities` | one aggregate table |
| `worker/wrangler.toml` | repo | Worker config; the D1 id is filled in at deploy time |
| `.github/workflows/deploy-city-stats.yml` | GitHub Actions | creates D1 if missing, applies schema, deploys, sets secret |
| `assets/js/site-visits.js` | site | also sends `/hit` (once per page per browser session) |
| `_includes/visitor-stats.html` | site | markers + top cities from `/public` |
| `_pages/admin-analytics.html` | site | "Cities" card from `/admin` |
| `_config.yml → visitor_stats.cities_endpoint` | site | Worker URL; empty = feature off |

## 4. Data model

D1 table, aggregated per day. There are no per-visit rows, so there's nothing
to re-identify.

```sql
CREATE TABLE IF NOT EXISTS city_visits (
  day     TEXT NOT NULL,   -- UTC date, YYYY-MM-DD
  path    TEXT NOT NULL,   -- page path, no query string
  country TEXT NOT NULL,   -- ISO-3166 alpha-2, 'XX' if unknown
  region  TEXT NOT NULL,   -- e.g. 'Karnataka', '' if unknown
  city    TEXT NOT NULL,   -- e.g. 'Bengaluru', '' if unknown
  lat     REAL,            -- city point, rounded to 1 decimal (~11 km)
  lon     REAL,
  n       INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (day, path, country, region, city)
);
```

Retention: keep everything. The rows are aggregates with no personal data, and
there are at most a few thousand rows a year at this traffic.

## 5. API

Base URL: `https://visitor-cities.<account-subdomain>.workers.dev`

### `POST /hit`
- Body: `{"path": "/robotics/"}` (JSON, ≤ 1 KB).
- Accepted only when the `Origin` header is in `ALLOWED_ORIGINS`
  (default `https://inventcures.github.io`). Anything else gets `403`.
- `path` must start with `/` and be ≤ 200 characters. The query string and
  hash are stripped, and anything else gets `400`.
- Upserts `n = n + 1` for (today, path, country, region, city).
- Response: `204`, with no body.

### `GET /public`
- No auth. CORS `*`. `Cache-Control: public, max-age=300`.
- Response:
  ```json
  {
    "k": 5,
    "total": 123,
    "cities": [{"city":"Bengaluru","region":"Karnataka","country":"IN","lat":13.0,"lon":77.6,"count":41}],
    "hidden": {"visits": 37, "places": 22},
    "updated": "2026-11-04T15:40:00Z"
  }
  ```
- `cities` holds only the (country, region, city) groups whose **all-time count ≥ k**,
  sorted by count and capped at 50.
- `hidden` reports how many visits and distinct places fell below k. Their
  names are never returned.

### `GET /admin?days=30&path=/robotics/`
- Requires `Authorization: Bearer <ADMIN_TOKEN>`. Anything else gets `401`. The
  comparison is constant-time.
- `days` is 1 to 3650 (default 30); `path` is optional.
- Response: `{"cities":[...same shape, no threshold, up to 500...], "total": N}`.

### `GET /health`
Returns `{"ok":true}`, for checking that a deploy worked.

## 6. k-anonymity rule

- **k = 5**, set as the `K_ANON` variable in `wrangler.toml`.
- The unit is a *visit*, meaning one page in one browser session; see §7. A
  city with 4 visits stays hidden even if they came from 4 different people.
  That errs on the side of privacy.
- The threshold is applied to **all-time totals**, never to daily or per-page
  slices, on every public surface. So the public data can't be filtered down to
  a small group.
- Public coordinates are the city point rounded to 1 decimal place (~11 km),
  which is coarser than the street level a precise marker would suggest.
- Known limitation: someone watching the public list could notice a city
  crossing the threshold (say, appearing at 5 after a known visit). With k = 5
  and the list only refreshing every 5 minutes, this is accepted as low risk
  for a personal site.

## 7. Client behaviour (`site-visits.js`)

- When `cities_endpoint` is set, send `POST /hit` using `fetch(..., {keepalive:true})`.
- At most **once per path per browser session**, deduplicated with
  `sessionStorage` (`vc:<path>`). This is not a cookie, nothing persists after
  the tab closes, and there's no ID.
- Skipped when `navigator.webdriver` is true (automation and headless
  browsers), on `localhost`, and on `/admin/`.
- If anything fails, it fails silently. The page is never blocked.

## 8. Public UI

On the homepage `#visitors` section and `/sitemap/`, both via the same include:

1. The map keeps its country shading (GoatCounter, daily) and gains **circle
   markers** for public cities. Marker size scales with √count.
2. A **"Top cities"** list (up to 8) appears under the country list.
3. The note reads: *"Cities appear once at least 5 visits come from them; N
   visits from smaller places are counted by country only."*
4. If the endpoint is unset or unreachable, the section looks exactly like it
   does today, with no error shown.

## 9. Admin UI

- The sign-in gains an optional **"City stats key"** field (the Worker's
  `ADMIN_TOKEN`). It's stored with the GoatCounter key, under the same
  "keep me signed in" choice.
- A new **"Cities"** card follows the date range and the page filter. Each row
  shows city, region, country and count. Without a key, the card shows how to
  add one.

## 10. Security and abuse

| Risk | Mitigation |
|---|---|
| Fake hits from scripts | Origin allow-list, path validation, small bodies. Remaining risk accepted: counts are vanity numbers, not billing. |
| Admin token leak | It lives only in the Worker secret, the GitHub secret, and the owner's browser. Rotate it by changing the GitHub secret and re-running the deploy. |
| Personal data | No IP, user agent or ID is ever stored. Only aggregates are kept, and the public view shows only cities with k ≥ 5. |
| Cost | Workers free tier is 100k requests/day and D1 free tier is 5 GB, both far above this site's traffic. |

## 11. Deployment (one-time, by the owner)

1. Create a free Cloudflare account and open **Workers & Pages** once, so the
   `*.workers.dev` subdomain gets created.
2. Create an API token with **Workers Scripts: Edit** and **D1: Edit**
   (use the "Edit Cloudflare Workers" template and add D1: Edit), and note the **Account ID**.
3. Add these GitHub repo secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, and
   `CITY_STATS_ADMIN_TOKEN` (any long random string).
4. Run the **Deploy city stats worker** Action. It creates D1, applies the
   schema, deploys, sets the secret, and prints the Worker URL in the run summary.
5. Put that URL in `_config.yml → visitor_stats.cities_endpoint`.

Without the Cloudflare secrets, the deploy Action exits early with a note
instead of failing.

## 12. Testing plan

- Worker: run it locally with `wrangler dev` and local D1:
  - hits from allowed and disallowed origins
  - bad paths
  - the k threshold, where 4 hits stay hidden and 5 are shown
  - `/admin` with and without the key
  - CORS preflight
- Site: a production build (`JEKYLL_ENV=production`, because the compress
  layout matters), loaded in Chromium with `/public` mocked:
  - markers and the top-cities list render
  - no JS errors
  - a fallback when the endpoint is down
  - the layout works at 390px
- Admin: the Cities card against a mocked `/admin`.

## 13. Rollout

1. Merge the PR. With `cities_endpoint` empty, nothing changes on the site.
2. The owner does §11.
3. Set `cities_endpoint`. Cities start accruing from that moment; there's no
   backfill, because GoatCounter never had city data.
