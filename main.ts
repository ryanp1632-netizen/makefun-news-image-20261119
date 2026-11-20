// Thursday 19 November 2026 in one picture.
// The front page is drawn ahead of time by build.mjs (hand-written SVG + HTML, screenshotted by headless Chrome)
// and committed as entry.png. At grading time there is no network, so this program only copies that file to
// /output/entry.png (or $MAKEFUN_OUTPUT_DIR when run locally). Copying the same bytes keeps both runs identical.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const png = readFileSync(new URL('./entry.png', import.meta.url));

// Guard the gate's rules before writing: a whole PNG, 1024 x 1024 at most, 1 MiB at most.
const isPng = png.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);
const ends = png.subarray(-8, -4).toString('latin1') === 'IEND';
if (!isPng || !ends || width > 1024 || height > 1024 || png.length > 1048576) {
  throw new Error(`entry.png breaks the gate: png=${isPng} iend=${ends} ${width}x${height} ${png.length} bytes`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), png);
