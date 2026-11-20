// Small hand-drawn flags as SVG groups. Each flag is drawn in a 30 x 20 box and placed with flag(code, x, y, w).

function star(cx, cy, r, fill, points = 5, inner = 0.42) {
  const pts = [];
  for (let i = 0; i < points * 2; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / points;
    const rr = i % 2 ? r * inner : r;
    pts.push(`${(cx + rr * Math.cos(a)).toFixed(2)},${(cy + rr * Math.sin(a)).toFixed(2)}`);
  }
  return `<polygon points="${pts.join(' ')}" fill="${fill}"/>`;
}
export { star };

const bands = (colors, vertical = false) =>
  colors
    .map((c, i) => {
      const n = colors.length;
      return vertical
        ? `<rect x="${(30 / n) * i}" y="0" width="${30 / n + 0.05}" height="20" fill="${c}"/>`
        : `<rect x="0" y="${(20 / n) * i}" width="30" height="${20 / n + 0.05}" fill="${c}"/>`;
    })
    .join('');

const BODY = {
  us: () => {
    let s = '';
    for (let i = 0; i < 13; i++) s += `<rect x="0" y="${(i * 20) / 13}" width="30" height="${20 / 13 + 0.03}" fill="${i % 2 ? '#fff' : '#b22234'}"/>`;
    s += `<rect x="0" y="0" width="12.5" height="${(7 * 20) / 13}" fill="#3c3b6e"/>`;
    for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) s += `<circle cx="${1.4 + c * 2.4}" cy="${1.3 + r * 2.6}" r="0.55" fill="#fff"/>`;
    return s;
  },
  cn: () => `<rect width="30" height="20" fill="#de2910"/>${star(5.5, 5.5, 3.6, '#ffde00')}${star(10.5, 2.2, 1.1, '#ffde00')}${star(12.4, 4.4, 1.1, '#ffde00')}${star(12.4, 7.4, 1.1, '#ffde00')}${star(10.5, 9.4, 1.1, '#ffde00')}`,
  ru: () => bands(['#fff', '#0039a6', '#d52b1e']),
  ua: () => bands(['#0057b7', '#ffd700']),
  mm: () => bands(['#fecb00', '#34b233', '#ea2839']) + star(15, 10.8, 7.2, '#fff'),
  gm: () => `${bands(['#ce1126', '#fff', '#0c1c8c', '#fff', '#3a7728'])}<rect x="0" y="6.2" width="30" height="1" fill="#fff"/><rect x="0" y="7.2" width="30" height="5.6" fill="#0c1c8c"/><rect x="0" y="12.8" width="30" height="1" fill="#fff"/><rect x="0" y="0" width="30" height="6.2" fill="#ce1126"/><rect x="0" y="13.8" width="30" height="6.2" fill="#3a7728"/>`,
  sa: () => `<rect width="30" height="20" fill="#006c35"/><path d="M8 7.5 h14 M9 9.3 h12" stroke="#fff" stroke-width="1.1"/><path d="M8 13.3 h13 l1.6 -0.9" stroke="#fff" stroke-width="1" fill="none"/>`,
  dk: () => `<rect width="30" height="20" fill="#c8102e"/><rect x="9" y="0" width="3.6" height="20" fill="#fff"/><rect x="0" y="8.2" width="30" height="3.6" fill="#fff"/>`,
  gl: () => `<rect width="30" height="10" fill="#fff"/><rect y="10" width="30" height="10" fill="#d00c33"/><path d="M5.5 10 a5.5 5.5 0 0 1 11 0 z" fill="#d00c33"/><path d="M5.5 10 a5.5 5.5 0 0 0 11 0 z" fill="#fff"/>`,
  bd: () => `<rect width="30" height="20" fill="#006a4e"/><circle cx="13.5" cy="10" r="5.6" fill="#f42a41"/>`,
  ve: () => {
    let s = bands(['#ffcc00', '#00247d', '#cf142b']);
    for (let i = 0; i < 8; i++) {
      const a = Math.PI * (0.85 - (i * 0.7) / 7);
      s += star(15 + 5.2 * Math.cos(a), 11.8 - 5.2 * Math.sin(a), 0.85, '#fff');
    }
    return s;
  },
  so: () => `<rect width="30" height="20" fill="#4189dd"/>${star(15, 10.4, 5.6, '#fff')}`,
  ae: () => `${bands(['#00732f', '#fff', '#000'])}<rect width="8" height="20" fill="#ff0000"/>`,
  au: () => {
    let s = `<rect width="30" height="20" fill="#012169"/>`;
    s += `<path d="M0 0 L15 10 M15 0 L0 10" stroke="#fff" stroke-width="2.2"/><path d="M0 0 L15 10 M15 0 L0 10" stroke="#c8102e" stroke-width="0.9"/>`;
    s += `<rect x="6" y="0" width="3" height="10" fill="#fff"/><rect x="0" y="3.5" width="15" height="3" fill="#fff"/>`;
    s += `<rect x="6.8" y="0" width="1.4" height="10" fill="#c8102e"/><rect x="0" y="4.3" width="15" height="1.4" fill="#c8102e"/>`;
    s += star(7.5, 15, 2.4, '#fff', 7) + star(22.5, 4, 1.1, '#fff', 7) + star(26, 9, 1.1, '#fff', 7) + star(22.5, 16.5, 1.1, '#fff', 7) + star(19, 9.5, 1.1, '#fff', 7);
    return s;
  },
  tr: () => `<rect width="30" height="20" fill="#e30a17"/><circle cx="11" cy="10" r="5" fill="#fff"/><circle cx="12.3" cy="10" r="4" fill="#e30a17"/>${star(17.2, 10, 2.1, '#fff')}`,
  un: () => `<rect width="30" height="20" fill="#4b92db"/><circle cx="15" cy="10" r="5.4" fill="none" stroke="#fff" stroke-width="0.9"/><path d="M15 4.6 V15.4 M9.6 10 H20.4" stroke="#fff" stroke-width="0.7"/><circle cx="15" cy="10" r="2.6" fill="none" stroke="#fff" stroke-width="0.7"/>`,
};

// Flag at (x, y), w pixels wide, with a thin dark outline so pale flags stay visible.
export function flag(code, x, y, w = 30) {
  const k = w / 30;
  return `<g transform="translate(${x} ${y}) scale(${k})"><svg width="30" height="20" viewBox="0 0 30 20" overflow="hidden">${BODY[code]()}</svg><rect width="30" height="20" fill="none" stroke="rgba(0,0,0,.35)" stroke-width="${0.6 / Math.max(k, 0.5)}"/></g>`;
}

// A flag on a pole, for scenes.
export function poleFlag(code, x, y, w = 30) {
  return `<rect x="${x - 1.5}" y="${y - 2}" width="1.6" height="${w * 1.6}" fill="#6b6b6b"/>${flag(code, x, y, w)}`;
}
