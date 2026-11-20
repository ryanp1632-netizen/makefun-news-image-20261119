// Build step (run on a desktop with Chrome, not in the grader): node build.mjs
// 1. writes out/page.html from src/, 2. asks headless Chrome whether any text overflows its box,
// 3. screenshots the page at exactly 1024 x 1024, 4. checks the PNG and copies it to entry.png.
import { writeFileSync, readFileSync, copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { buildPage } from './src/page.mjs';

const CHROME = [
  process.env.CHROME,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/usr/bin/google-chrome',
].find((p) => p && existsSync(p));
if (!CHROME) throw new Error('Chrome not found: set CHROME=/path/to/chrome');

mkdirSync('out', { recursive: true });
const html = resolve('out/page.html');
writeFileSync(html, buildPage());
const url = pathToFileURL(html).href;
const common = ['--headless=new', '--hide-scrollbars', '--disable-gpu', '--force-device-scale-factor=1', '--window-size=1024,1024', '--default-background-color=00000000'];

// overflow probe
const dom = execFileSync(CHROME, [...common, '--virtual-time-budget=2000', '--dump-dom', url], { encoding: 'utf8', maxBuffer: 64 << 20 });
const m = dom.match(/data-probe="([^"]*)"/);
const probe = m ? JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&')) : { bottom: -1, bad: ['probe missing'] };
console.log('page bottom:', probe.bottom, '(must be <= 1024)');
for (const b of probe.bad) console.log('OVERFLOW', b);

// screenshot
const shot = resolve('out/shot.png');
execFileSync(CHROME, [...common, `--screenshot=${shot}`, url], { stdio: 'ignore' });
const png = readFileSync(shot);
const sig = png.subarray(0, 8).toString('hex') === '89504e470d0a1a0a';
const w = png.readUInt32BE(16), h = png.readUInt32BE(20);
console.log(`png ok=${sig} ${w}x${h} ${png.length} bytes (limit 1048576)`);
if (!sig || w !== 1024 || h !== 1024 || png.length > 1048576) throw new Error('screenshot fails the gate');
if (probe.bottom > 1024 || probe.bad.length) console.log('WARNING: layout problems above; entry.png not updated');
else { copyFileSync(shot, 'entry.png'); console.log('entry.png updated'); }
