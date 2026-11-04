-- Aggregate visit counts per day, page and place. No IPs, user agents or IDs.
CREATE TABLE IF NOT EXISTS city_visits (
  day     TEXT NOT NULL,
  path    TEXT NOT NULL,
  country TEXT NOT NULL,
  region  TEXT NOT NULL,
  city    TEXT NOT NULL,
  lat     REAL,
  lon     REAL,
  n       INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (day, path, country, region, city)
);
