// Lays the front page out as one 1024 x 1024 HTML document.
import { DAY, CATS, REGIONS, REGION_COLORS, FIGURES, LEADS, CARDS, BRIEFS, LEFT_OUT, STILL_TO_COME, SOURCES } from './stories.mjs';
import { scene, banner } from './art.mjs';
import { makeMap } from './map.mjs';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function buildPage() {
  // number everything in reading order
  const leads = LEADS.map((s, i) => ({ ...s, n: i + 1 }));
  const cards = CARDS.map((s, i) => ({ ...s, n: i + 1 + leads.length }));
  const briefs = BRIEFS.map((s, i) => ({ ...s, n: i + 1 + leads.length + cards.length }));
  const all = [...leads, ...cards, ...briefs];
  const total = all.length;

  const tally = Object.fromEntries(REGIONS.map((r) => [r, 0]));
  for (const s of all) tally[s.region]++;
  const regionsUsed = REGIONS.filter((r) => tally[r] > 0).length;

  const tag = (s) => `<span class="tag"><b class="num" style="background:${CATS[s.cat].color}">${s.n}</b><span style="color:${CATS[s.cat].color}">${esc(s.place.toUpperCase())}</span><i class="tsrc">${esc(s.src)}</i></span>`;

  const leadHtml = leads.map((s) => `
    <article class="lead chk">
      <div class="pic">${scene(s.scene)}<span class="plabel">${esc(s.label)}</span></div>
      <div class="ltext">${tag(s)}
        <h2>${esc(s.head)}</h2>
        <p>${esc(s.sum)}</p>
      </div>
    </article>`).join('');

  const cardHtml = cards.map((s) => `
    <article class="card chk">
      <div class="ban">${banner(s.art)}<span class="cap">${esc(s.cap)}</span></div>
      <div class="ctext">${tag(s)}
        <h3>${esc(s.head)}</h3>
        <p>${esc(s.sum)}</p>
      </div>
    </article>`).join('');

  const half = Math.ceil(briefs.length / 2);
  const col = (list) => list.map((s) => `<li><b class="bn" style="background:${CATS[s.cat].color}">${s.n}</b><b>${esc(s.place)}</b> ${esc(s.text)} <i class="src">${esc(s.src)}</i></li>`).join('');

  const pins = all.filter((s) => s.lon != null).map((s) => ({ n: s.n, cat: s.cat, lon: s.lon, lat: s.lat }));
  const map = makeMap({ width: 328, height: 170, lon0: -128, lon1: 160, lat0: -46, lat1: 66, pins, catColor: (c) => CATS[c].color });

  const tallyHtml = REGIONS.filter((r) => tally[r] > 0)
    .map((r) => `<div class="seg" style="flex:${tally[r] + 4};background:${REGION_COLORS[r]}">${esc(r.toUpperCase())} <b>${tally[r]}</b></div>`).join('');

  const figHtml = FIGURES.map((f) => `<div class="fig"><b>${esc(f.big)}</b><span>${esc(f.small)}</span></div>`).join('');
  const legend = Object.values(CATS).map((c) => `<span><i style="background:${c.color}"></i>${esc(c.name)}</span>`).join('');

  return `<!doctype html><html><head><meta charset="utf-8"><title>${DAY.weekday} ${DAY.date}</title><style>
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{width:1024px;height:1024px;overflow:hidden;background:#f7f3ea;color:#16181d}
  body{font-family:"Segoe UI",Arial,Helvetica,sans-serif;padding:0 10px}
  .mast{background:#0f1d3a;color:#fff;margin:0 -10px;padding:4px 14px 4px;display:flex;align-items:center;gap:14px}
  .mast .mid{flex:1}
  .kick{display:flex;justify-content:space-between;font-size:11.5px;letter-spacing:.12em;font-weight:700;color:#f2c14e}
  .kick span:last-child{color:#cfd8ea}
  h1{font-family:Georgia,"Times New Roman",serif;font-weight:700;font-size:55px;line-height:1.08;letter-spacing:-.5px;margin-top:1px}
  .deck{font-family:Georgia,serif;font-style:italic;font-size:14px;color:#f6d98f;margin-top:1px}
  .cal{width:74px;border-radius:5px;overflow:hidden;background:#fff;color:#0f1d3a;text-align:center;flex:none}
  .cal .m{background:#c42127;color:#fff;font-weight:800;font-size:13px;letter-spacing:.1em;padding:2px 0}
  .cal .d{font-family:Georgia,serif;font-weight:700;font-size:40px;line-height:1.05}
  .cal .w{font-size:10.5px;font-weight:800;letter-spacing:.12em;padding-bottom:3px}
  .tally{display:flex;gap:2px;margin-top:5px;height:19px}
  .seg{color:#fff;font-size:10.5px;font-weight:700;letter-spacing:.06em;display:flex;align-items:center;justify-content:center;white-space:nowrap}
  .seg b{margin-left:5px;font-size:12px}
  .figs{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));margin-top:4px;border-top:2px solid #16181d;border-bottom:1px solid #16181d}
  .fig{padding:2px 6px 3px;border-left:1px solid #d5cdbd;line-height:1.1}
  .fig:first-child{border-left:0}
  .fig b{display:block;font-family:Georgia,serif;font-size:17px;color:#b3141b}
  .fig span{font-size:9.8px;color:#333;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .leads{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:6px}
  .lead{background:#fff;border:1px solid #cfc7b7;height:258px;overflow:hidden;display:flex;flex-direction:column}
  .pic{position:relative;height:148px;flex:none;overflow:hidden}
  .plabel{position:absolute;left:0;bottom:0;background:#0f1d3a;color:#fff;font-size:10.5px;font-weight:800;letter-spacing:.08em;padding:2px 7px}
  .ltext{padding:5px 8px 0}
  .tag{display:flex;align-items:center;gap:5px;white-space:nowrap;font-size:10px;font-weight:800;letter-spacing:.06em;color:#555}
  .num{display:inline-flex;align-items:center;justify-content:center;min-width:16px;height:16px;border-radius:8px;color:#fff;font-size:10.5px;padding:0 3px}
  h2{font-family:Georgia,serif;font-size:19px;line-height:1.08;margin:2px 0 2px;font-weight:700}
  .lead p{font-size:11.4px;line-height:1.25;color:#222}
  .src{color:#7a7062;font-size:.92em}
  .tsrc{margin-left:auto;font-weight:400;font-style:italic;letter-spacing:0;color:#7a7062;font-size:9.6px;overflow:hidden;text-overflow:ellipsis}
  .cards{display:grid;grid-template-columns:repeat(5,1fr);gap:7px;margin-top:7px}
  .card{background:#fff;border:1px solid #cfc7b7;height:140px;overflow:hidden}
  .ban{position:relative;height:58px;overflow:hidden}
  .cap{position:absolute;left:0;bottom:0;background:rgba(10,18,36,.86);color:#fff;font-size:9px;font-weight:800;letter-spacing:.08em;padding:1px 5px}
  .ctext{padding:4px 6px 0}
  h3{font-family:Georgia,serif;font-size:14px;line-height:1.1;margin:1px 0 1px;font-weight:700}
  .card p{font-size:10.4px;line-height:1.22;color:#2a2a2a}
  .bottom{display:grid;grid-template-columns:330px minmax(0,1fr);gap:10px;margin-top:7px}
  .sect{font-size:11px;font-weight:800;letter-spacing:.12em;border-bottom:2px solid #16181d;margin-bottom:3px;display:flex;justify-content:space-between}
  .sect i{font-weight:400;letter-spacing:0;font-size:10px;color:#555}
  .mapbox{border:1px solid #b8b0a0;height:172px;overflow:hidden}
  .legend{display:flex;flex-wrap:wrap;gap:3px 9px;font-size:9.6px;margin-top:3px}
  .legend i{display:inline-block;width:9px;height:9px;border-radius:5px;margin-right:3px;vertical-align:-1px}
  .briefs{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:0 10px}
  .briefs ul{list-style:none}
  .briefs li{font-size:10.6px;line-height:1.23;padding:1px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .bn{display:inline-block;min-width:15px;text-align:center;color:#fff;border-radius:7px;font-size:9.5px;margin-right:4px;padding:0 2px}
  .datecheck{margin-top:5px;border:1.5px solid #b3141b;background:#fff8f4;padding:3px 7px;font-size:10.4px;line-height:1.3}
  .datecheck b.h{color:#b3141b;letter-spacing:.06em}
  .foot{font-size:9.6px;color:#555;text-align:center;margin-top:3px}
  </style></head><body>
  <header class="mast">
    <div class="mid">
      <div class="kick"><span>THE WORLD IN ONE DAY · ONE PAGE OF WORLD NEWS</span><span>${total} STORIES · ${regionsUsed} REGIONS · ALL FROM THIS ONE DAY</span></div>
      <h1>${DAY.weekday} ${DAY.date}</h1>
      <div class="deck">Trump, Xi and Putin at one table · Myanmar found guilty of genocide · Anthropic’s record market debut</div>
    </div>
    <div class="cal"><div class="m">NOV 2026</div><div class="d">19</div><div class="w">THURSDAY</div></div>
  </header>
  <div class="tally">${tallyHtml}</div>
  <div class="figs">${figHtml}</div>
  <section class="leads">${leadHtml}</section>
  <section class="cards">${cardHtml}</section>
  <section class="bottom">
    <div><div class="sect">WHERE IT HAPPENED <i>pin numbers match the stories</i></div><div class="mapbox">${map}</div><div class="legend">${legend}</div></div>
    <div class="chk"><div class="sect">ALSO ON ${DAY.weekday.toUpperCase()} ${DAY.date.toUpperCase().replace(' 2026', '')} <i>place · what happened · source</i></div>
      <div class="briefs"><ul>${col(briefs.slice(0, half))}</ul><ul>${col(briefs.slice(half))}</ul></div></div>
  </section>
  <div class="datecheck"><b class="h">DATE CHECK ✓</b> Every story above happened, or was first reported, on ${DAY.weekday} ${DAY.date}. <b class="h">LEFT OUT AS OTHER DAYS’ NEWS:</b> ${LEFT_OUT.map(esc).join(' · ')}. <b class="h">STILL TO COME:</b> ${STILL_TO_COME.map(esc).join(' · ')}.</div>
  <div class="foot">Claims are attributed, not stated as fact · Drawings and map original, made in code · Sources: ${esc(SOURCES)} · ${DAY.iso}</div>
  <script>
    const bad = [];
    document.querySelectorAll('.chk, .briefs li, h1, .deck, .kick').forEach((e, i) => {
      if (e.scrollHeight > e.clientHeight + 1 || e.scrollWidth > e.clientWidth + 1) bad.push((e.className || e.tagName) + ':' + (e.textContent || '').trim().slice(0, 40));
    });
    const foot = document.querySelector('.foot').getBoundingClientRect().bottom;
    document.body.setAttribute('data-probe', JSON.stringify({ bottom: Math.round(foot), bad }));
  </script>
  </body></html>`;
}
