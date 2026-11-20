// Hand-drawn SVG pictures: three lead scenes (330 x 150) and ten card banners (200 x 76).
import { flag, poleFlag, star } from './flags.mjs';

const T = (x, y, s, size, fill = '#fff', weight = 700, anchor = 'middle', family = 'Arial, Helvetica, sans-serif', extra = '') =>
  `<text x="${x}" y="${y}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" ${extra}>${s}</text>`;

const sky = (w, h, top, bottom, id) =>
  `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bottom}"/></linearGradient></defs><rect width="${w}" height="${h}" fill="url(#${id})"/>`;

// A plain standing figure in a suit, seen from the front (no likeness intended).
function person(x, y, s, hair, tie, skin = '#e9bf9b') {
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <path d="M-17 40 Q-17 14 0 12 Q17 14 17 40 Z" fill="#1d2433"/>
    <path d="M-5 13 L0 24 L5 13 Z" fill="#fff"/><path d="M-1.6 15 L1.6 15 L2.4 27 L0 30 L-2.4 27 Z" fill="${tie}"/>
    <rect x="-3.5" y="5" width="7" height="8" fill="${skin}"/>
    <ellipse cx="0" cy="-2" rx="9" ry="10.5" fill="${skin}"/>
    <path d="M-9.4 -3 Q-10 -14 0 -14 Q10 -14 9.4 -3 Q7 -9 0 -9.5 Q-7 -9 -9.4 -3 Z" fill="${hair}"/>
    <circle cx="-3.2" cy="-2" r="1" fill="#2a2a2a"/><circle cx="3.2" cy="-2" r="1" fill="#2a2a2a"/>
    <path d="M-3 4 Q0 5.6 3 4" stroke="#8a5a44" stroke-width="1" fill="none"/>
  </g>`;
}

const SCENES = {
  summit() {
    let s = sky(330, 150, '#f6e7c8', '#e8cf9c', 'sumsky');
    s += `<rect x="0" y="0" width="330" height="26" fill="#8f1d1d"/>`;
    s += T(165, 18, 'SHENZHEN · FIRST US, CHINA &amp; RUSSIA SUMMIT', 11.5, '#ffe9a8', 800);
    s += poleFlag('us', 52, 36, 42) + poleFlag('cn', 145, 36, 42) + poleFlag('ru', 238, 36, 42);
    s += person(75, 78, 1.05, '#d9b25a', '#c8102e') + person(166, 78, 1.05, '#222', '#a01a1a') + person(257, 78, 1.05, '#9c8f80', '#4a5d8f', '#e6bf9e');
    s += `<path d="M20 118 Q165 100 310 118 L320 150 L10 150 Z" fill="#6b3f26"/><path d="M20 118 Q165 100 310 118" stroke="#3d2314" stroke-width="2" fill="none"/>`;
    for (const [x, n] of [[75, 'TRUMP'], [166, 'XI'], [257, 'PUTIN']]) {
      s += `<rect x="${x - 30}" y="117" width="60" height="17" fill="#fdfaf0" stroke="#3d2314"/>` + T(x, 130, n, 11, '#1a1a1a', 800);
    }
    s += `<rect x="113" y="100" width="104" height="15" rx="3" fill="#fff8e1" stroke="#8f1d1d"/>` + T(165, 111, '“PEACE DECLARATION”', 9, '#8f1d1d', 800);
    return s;
  },
  court() {
    let s = sky(330, 150, '#cfe3f3', '#eef5fb', 'ctsky');
    // Peace Palace style building
    s += `<rect x="18" y="62" width="170" height="70" fill="#a8574a"/><rect x="18" y="58" width="170" height="8" fill="#7a3a31"/>`;
    s += `<rect x="150" y="30" width="22" height="40" fill="#a8574a"/><path d="M146 30 L161 10 L176 30 Z" fill="#41535f"/><circle cx="161" cy="44" r="6" fill="#f6f1e2" stroke="#41535f"/>`;
    for (let i = 0; i < 7; i++) s += `<rect x="${28 + i * 22}" y="74" width="11" height="20" rx="5" fill="#f2e6c9"/><rect x="${28 + i * 22}" y="102" width="11" height="22" rx="2" fill="#f2e6c9"/>`;
    s += `<rect x="0" y="132" width="330" height="18" fill="#7f8f6a"/>`;
    // scales of justice
    s += `<g transform="translate(250 30)"><rect x="-2" y="0" width="4" height="70" fill="#8d6b22"/><rect x="-22" y="70" width="44" height="7" fill="#8d6b22"/>
      <path d="M-42 12 L42 4" stroke="#8d6b22" stroke-width="3"/>
      <path d="M-42 12 L-54 40 M-42 12 L-30 40 M42 4 L30 32 M42 4 L54 32" stroke="#8d6b22" stroke-width="1.2"/>
      <path d="M-58 40 Q-42 54 -26 40 Z" fill="#c9a43a"/><path d="M26 32 Q42 46 58 32 Z" fill="#c9a43a"/></g>`;
    s += `<rect x="208" y="112" width="84" height="30" rx="4" fill="#1b2a3a"/>` + T(250, 134, '9 – 6', 22, '#ffd34d', 900, 'middle', 'Georgia, serif');
    s += flag('gm', 196, 8, 30) + T(242, 22, 'v', 12, '#1b2a3a', 700) + flag('mm', 258, 8, 30);
    s += `<rect x="8" y="8" width="128" height="20" rx="3" fill="#fff" stroke="#1b2a3a"/>` + T(72, 22, 'GUILTY OF GENOCIDE', 11, '#b0151b', 900);
    return s;
  },
  market() {
    let s = `<rect width="330" height="150" fill="#0d1726"/>`;
    for (let i = 0; i < 6; i++) s += `<path d="M36 ${30 + i * 20} H322" stroke="#1d2b40" stroke-width="1"/>`;
    // first-day price path: open near IPO, spike to 111.50, settle ~97
    const y = (p) => 130 - (p - 80) * 3.05;
    const pts = [[38, 83], [52, 86], [66, 104], [80, 111.5], [96, 106], [112, 101], [130, 103], [150, 99], [170, 100.5], [192, 97.5], [214, 98.5], [236, 96.5], [258, 97.5], [276, 97.2]];
    const line = pts.map(([x, p], i) => `${i ? 'L' : 'M'}${x} ${y(p).toFixed(1)}`).join(' ');
    s += `<path d="${line} L276 140 L38 140 Z" fill="rgba(54,211,123,.18)"/><path d="${line}" stroke="#36d37b" stroke-width="3" fill="none" stroke-linejoin="round"/>`;
    s += `<path d="M36 ${y(83)} H322" stroke="#ffcf4a" stroke-width="1.2" stroke-dasharray="4 3"/>` + T(318, y(83) + 12, 'IPO $83', 10, '#ffcf4a', 800, 'end');
    s += `<circle cx="80" cy="${y(111.5)}" r="4" fill="#fff"/>` + T(86, y(111.5) - 4, 'HIGH $111.50', 9.5, '#fff', 700, 'start');
    s += `<circle cx="276" cy="${y(97.2)}" r="4.5" fill="#36d37b"/>`;
    s += `<rect x="214" y="${y(97.2) - 36}" width="110" height="22" rx="3" fill="#36d37b"/>` + T(269, y(97.2) - 20.5, 'CLOSE ~$97 ▲17%', 10.5, '#05220f', 900);
    s += T(10, 22, 'ANTHROPIC · FIRST DAY ON NASDAQ', 12, '#e8eef7', 800, 'start');
    s += `<rect x="10" y="30" width="96" height="18" rx="3" fill="#1f3a5c"/>` + T(58, 43, '$81.3bn RAISED', 10, '#9fd0ff', 800);
    return s;
  },
};

const ARTS = {
  bridge() {
    let s = sky(200, 76, '#2b3a55', '#556b8f', 'brsky');
    s += `<rect y="52" width="200" height="24" fill="#1f4a66"/>`;
    s += `<path d="M0 46 H200" stroke="#cfd6df" stroke-width="4"/><path d="M0 50 H200" stroke="#8c96a3" stroke-width="2"/>`;
    for (let x = 10; x < 200; x += 26) s += `<rect x="${x}" y="46" width="4" height="12" fill="#cfd6df"/>`;
    s += `<path d="M90 46 Q105 26 120 46" stroke="#cfd6df" stroke-width="3" fill="none"/>`;
    s += `<circle cx="132" cy="40" r="13" fill="#ff8c1a"/><circle cx="132" cy="40" r="7" fill="#ffe14d"/>`;
    s += `<path d="M120 22 Q132 8 146 20 Q156 14 160 26" fill="#3d3d3d" opacity=".75"/>`;
    s += flag('ru', 8, 8, 22) + flag('ua', 170, 8, 22);
    return s;
  },
  tower() {
    let s = sky(200, 76, '#14213d', '#41507a', 'twsky');
    for (const [x, w, h] of [[18, 18, 26], [40, 14, 34], [140, 20, 30], [164, 16, 22], [182, 14, 32]]) s += `<rect x="${x}" y="${76 - h}" width="${w}" height="${h}" fill="#25304a"/>`;
    s += `<path d="M86 76 L90 14 L98 6 L106 14 L110 76 Z" fill="#7c8db0"/><path d="M98 6 L98 76" stroke="#9fb0d1" stroke-width="1"/>`;
    for (let y = 20; y < 72; y += 8) s += `<path d="M90 ${y} H106" stroke="#51607f" stroke-width="1"/>`;
    s += `<circle cx="108" cy="22" r="8" fill="#ff8c1a"/><circle cx="108" cy="22" r="4" fill="#ffe14d"/>`;
    s += `<path d="M190 4 Q150 6 116 20" stroke="#ffd7a1" stroke-width="2" stroke-dasharray="4 3" fill="none"/>`;
    s += flag('sa', 8, 8, 24);
    return s;
  },
  cop() {
    let s = `<rect width="200" height="76" fill="#d8eef0"/>`;
    s += `<circle cx="40" cy="40" r="26" fill="#3d8fd1"/><path d="M24 30 Q34 22 44 30 Q50 40 40 46 Q30 50 26 42 Z M46 50 Q56 46 60 54 Q52 62 46 58 Z" fill="#4caf50"/>`;
    s += `<rect x="82" y="6" width="104" height="64" fill="#fff" stroke="#9aa5a8"/>`;
    s += T(134, 20, 'COP31 DRAFT 2', 10, '#0b5c68', 900);
    s += T(134, 38, 'fossil fuels', 13, '#555', 700, 'middle', 'Georgia, serif');
    s += `<path d="M92 34 L176 34" stroke="#c42127" stroke-width="3"/>`;
    for (let i = 0; i < 3; i++) s += `<path d="M94 ${48 + i * 7} H${174 - i * 18}" stroke="#c4cbcd" stroke-width="2.4"/>`;
    s += flag('tr', 4, 4, 20);
    return s;
  },
  arctic() {
    let s = `<rect width="200" height="76" fill="#cfe6f5"/>`;
    s += `<path d="M70 10 Q96 0 124 8 Q140 18 132 36 Q126 52 108 66 Q98 72 92 60 Q80 46 72 30 Q66 18 70 10 Z" fill="#f7fbff" stroke="#8fb4cc" stroke-width="1.5"/>`;
    s += `<path d="M84 22 L96 18 L104 26" stroke="#b9d3e4" fill="none"/>`;
    s += flag('dk', 8, 10, 30) + flag('gl', 8, 36, 30) + flag('us', 158, 26, 32);
    s += `<rect x="140" y="4" width="54" height="17" rx="3" fill="#1b2a3a"/>` + T(167, 16, 'APPROVED', 9, '#9ff0b8', 900);
    return s;
  },
  capitol() {
    let s = sky(200, 76, '#dbe7f6', '#f4f8fd', 'cpsky');
    s += `<path d="M30 70 V48 H120 V70 Z" fill="#f4f1ea" stroke="#9aa1aa"/><path d="M50 48 Q75 14 100 48 Z" fill="#f4f1ea" stroke="#9aa1aa"/><rect x="73" y="10" width="4" height="10" fill="#9aa1aa"/>`;
    for (let i = 0; i < 8; i++) s += `<rect x="${36 + i * 11}" y="52" width="4" height="18" fill="#c9ced4"/>`;
    s += `<rect x="128" y="5" width="64" height="41" rx="4" fill="#1b2a3a"/>`;
    s += T(160, 16, 'WAR POWERS', 8, '#c9d6e6', 800) + T(160, 32.5, '48–51', 16, '#ff6b6b', 900, 'middle', 'Georgia, serif') + T(160, 42, 'REJECTED', 8, '#ff6b6b', 900);
    return s;
  },
  protest() {
    let s = sky(200, 76, '#e9d2b3', '#f3e5cf', 'prsky');
    s += `<path d="M120 30 Q130 6 150 16 Q170 2 182 22 Q196 26 190 40 L120 40 Z" fill="#5a5a5a" opacity=".55"/>`;
    s += `<circle cx="160" cy="44" r="9" fill="#ff8c1a"/><circle cx="160" cy="44" r="4.5" fill="#ffe14d"/>`;
    for (let i = 0; i < 12; i++) {
      const x = 12 + i * 11, y = 58 + (i % 3) * 3;
      s += `<circle cx="${x}" cy="${y - 10}" r="4" fill="#5b3a29"/><rect x="${x - 4}" y="${y - 6}" width="8" height="18" rx="3" fill="${['#2d6a4f', '#9b2226', '#33415c'][i % 3]}"/>`;
    }
    s += `<rect x="20" y="20" width="58" height="16" fill="#fff" stroke="#333"/>` + T(49, 32, 'LOCKDOWN', 9, '#9b2226', 900);
    s += flag('bd', 168, 6, 26);
    return s;
  },
  handshake() {
    let s = `<rect width="200" height="76" fill="#e6edf5"/>`;
    s += flag('us', 8, 12, 50) + flag('ve', 142, 12, 50);
    s += `<path d="M58 60 L86 46 L100 50 L114 46 L142 60" stroke="#2b3a55" stroke-width="12" fill="none" stroke-linecap="round"/>`;
    s += `<path d="M84 46 Q100 36 116 46 Q100 58 84 46 Z" fill="#e9bf9b" stroke="#8a5a44"/>`;
    s += `<rect x="66" y="6" width="68" height="14" rx="2" fill="#1b2a3a"/>` + T(100, 16, 'MILITARY DEAL', 8, '#ffd34d', 900);
    return s;
  },
  expel() {
    let s = `<rect width="200" height="76" fill="#eef3f7"/>`;
    s += flag('so', 12, 20, 54) + flag('ae', 134, 20, 54);
    s += `<path d="M78 40 H122" stroke="#c42127" stroke-width="4"/><path d="M114 32 L124 40 L114 48" stroke="#c42127" stroke-width="4" fill="none"/>`;
    s += `<rect x="58" y="6" width="84" height="14" rx="2" fill="#c42127"/>` + T(100, 16.5, 'ENVOY EXPELLED', 8.5, '#fff', 900);
    return s;
  },
  jobs() {
    let s = `<rect width="200" height="76" fill="#f4f7f2"/>`;
    s += flag('au', 8, 8, 34);
    const bars = [[52, 4.3], [74, 4.5], [96, 4.5], [118, 4.7], [140, 4.9]];
    for (const [x, v] of bars) {
      const h = (v - 3.8) * 48;
      s += `<rect x="${x}" y="${70 - h}" width="18" height="${h}" fill="${v === 4.9 ? '#c42127' : '#9fb7a8'}"/>`;
    }
    s += T(181, 34, '4.9%', 13, '#c42127', 900, 'middle', 'Georgia, serif');
    s += T(127, 24, '4.7%', 8, '#4b5c52', 700);
    return s;
  },
  game() {
    let s = `<rect width="200" height="76" fill="#2a0f3d"/>`;
    s += `<rect width="200" height="76" fill="url(#gmglow)"/><defs><linearGradient id="gmglow" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff4fa3" stop-opacity=".55"/><stop offset="1" stop-color="#ffb347" stop-opacity=".35"/></linearGradient></defs>`;
    for (const [x, w, h] of [[0, 16, 30], [18, 12, 22], [150, 14, 26], [168, 18, 34], [188, 12, 20]]) s += `<rect x="${x}" y="${76 - h}" width="${w}" height="${h}" fill="#1a0726"/>`;
    s += `<path d="M28 70 L30 40 M30 40 Q22 34 18 38 M30 40 Q38 34 42 38" stroke="#0d0313" stroke-width="2.5" fill="none"/>`;
    s += `<rect x="62" y="16" width="76" height="44" rx="6" fill="#120417" stroke="#ff7ac6" stroke-width="2"/>`;
    s += T(100, 52, 'VI', 34, '#ff9ad5', 900, 'middle', 'Georgia, serif');
    s += `<circle cx="168" cy="20" r="14" fill="#36d37b"/>` + T(168, 25, '99', 13, '#05220f', 900);
    return s;
  },
};

export function scene(name) {
  return `<svg viewBox="0 0 330 150" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${SCENES[name]()}</svg>`;
}

export function banner(name, caption) {
  return `<svg viewBox="0 0 200 76" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${ARTS[name]()}</svg>`;
}

export { star };
