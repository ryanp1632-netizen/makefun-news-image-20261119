# makefun-news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/ryanp1632-netizen/makefun-news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/ryanp1632-netizen/makefun-news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

One drawn front page of the world's news on **Thursday 19 November 2026**: three illustrated leads, ten illustrated cards,
a numbered short list, a map with a pin for every story, a region tally, the day in figures and a date check that names
what was left out because it happened on another day. Every story was checked against a report dated 19 November.
Pictures, flags and the map are hand-written SVG; no image model or paid service was used.

![entry](entry.png)

## How it works

- `src/stories.mjs`: the stories, each with place, category, region and source.
- `src/flags.mjs`, `src/art.mjs`: flags, lead scenes and card banners drawn in SVG.
- `src/map.mjs`: hand-traced world outline and numbered pins that push apart so none overlap.
- `src/page.mjs`: the 1024 x 1024 layout. `build.mjs` checks for overflowing text and screenshots it with headless Chrome into `entry.png`.
- `main.ts`: what the grader runs. With no network it checks `entry.png` and copies it to `/output/entry.png`, the same bytes every run.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Rebuild the picture (needs Chrome): `node build.mjs`

---

<sub>Entered on [make.fun](https://make.fun/?ref=z79n7aa6&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
