// Every story below happened, or was first reported, on Thursday 19 November 2026.
// Each one was checked against a report dated that day (source tags at the end of each entry).
// cat: war | pol | eco | sci | cul    region: Asia | Middle East | Europe | Africa | Americas | Oceania | Global

export const DAY = {
  weekday: 'Thursday',
  date: '19 November 2026',
  iso: '2026-11-19',
};

export const CATS = {
  war: { name: 'War & security', color: '#c42127' },
  pol: { name: 'Politics & law', color: '#2257c7' },
  eco: { name: 'Economy & tech', color: '#13804a' },
  sci: { name: 'Climate & health', color: '#0b7f93' },
  cul: { name: 'Sport & culture', color: '#c87000' },
};

export const REGIONS = ['Asia', 'Middle East', 'Europe', 'Africa', 'Americas', 'Oceania', 'Global'];
export const REGION_COLORS = {
  Asia: '#7a3fb0', 'Middle East': '#b8432f', Europe: '#2a5db8', Africa: '#2d8a43',
  Americas: '#d0372f', Oceania: '#0d8798', Global: '#4a5260',
};

// Figures of the day: big number + what it is.
export const FIGURES = [
  { big: '9–6', small: 'ICJ judges’ genocide vote' },
  { big: '$81.3bn', small: 'Anthropic IPO, largest ever' },
  { big: '+17%', small: 'Anthropic’s first-day gain' },
  { big: '48–51', small: 'Senate vote on Iran war curb' },
  { big: '4.9%', small: 'Australia jobless, 5-yr high' },
  { big: '99/100', small: 'GTA VI on Metacritic' },
];

// The three lead stories, each with a drawn scene.
export const LEADS = [
  {
    scene: 'summit', place: 'Shenzhen', region: 'Asia', cat: 'pol', lon: 114.06, lat: 22.54,
    label: 'APEC · SHENZHEN',
    head: 'Trump, Xi and Putin hold their first three-way summit',
    sum: 'After an hour of talks their “peace declaration” covers UN reform and oil, but leaves out the wars in Ukraine and Iran.',
    src: 'Guardian · Al Jazeera · BBC',
  },
  {
    scene: 'court', place: 'The Hague', region: 'Europe', cat: 'pol', lon: 4.3, lat: 52.08,
    label: 'WORLD COURT · THE HAGUE',
    head: 'World Court rules Myanmar committed genocide',
    sum: 'Judges vote 9–6 that Myanmar meant to destroy the Rohingya, killing at least 10,000 in 2017. A first for the court.',
    src: 'Al Jazeera · Guardian · BBC',
  },
  {
    scene: 'market', place: 'New York', region: 'Americas', cat: 'eco', lon: -74.0, lat: 40.7,
    label: 'NASDAQ · NEW YORK',
    head: 'Anthropic shares jump 17% on debut after record IPO',
    sum: 'The Claude maker raised $81.3bn at $83 a share; the stock peaks at $111.50 and closes just over $97, near $1.3tn.',
    src: 'Guardian · BBC · Al Jazeera',
  },
];

// Ten illustrated cards.
export const CARDS = [
  {
    art: 'bridge', place: 'Crimea', region: 'Europe', cat: 'war', lon: 36.47, lat: 45.3,
    cap: 'KERCH STRAIT',
    head: 'Putin vows revenge for Crimea bridge strike',
    sum: 'Third strike in a week halts trains. “We will not negotiate,” he says.',
    src: 'Guardian · BBC',
  },
  {
    art: 'tower', place: 'Riyadh', region: 'Middle East', cat: 'war', lon: 46.7, lat: 24.7,
    cap: 'RIYADH',
    head: 'Houthi attack damages Riyadh’s tallest tower',
    sum: 'Saudis say debris hit the PIF skyscraper; other missiles intercepted.',
    src: 'Al Jazeera',
  },
  {
    art: 'cop', place: 'Antalya', region: 'Global', cat: 'sci', lon: 30.7, lat: 36.9,
    cap: 'COP31 · ANTALYA',
    head: 'COP31 draft drops every mention of fossil fuels',
    sum: 'Second text cuts the phase-out pledge as talks enter final hours.',
    src: 'Guardian',
  },
  {
    art: 'arctic', place: 'Copenhagen', region: 'Europe', cat: 'pol', lon: 12.57, lat: 55.68,
    cap: 'GREENLAND PACT',
    head: 'Denmark approves US–Greenland pact',
    sum: 'MPs back it unanimously; the US may build missile defences there.',
    src: 'Guardian · AJ',
  },
  {
    art: 'capitol', place: 'Washington', region: 'Americas', cat: 'pol', lon: -77.0, lat: 38.9,
    cap: 'US SENATE',
    head: 'Senate rejects bid to halt the Iran war, 48–51',
    sum: 'War powers resolution fails; three Republicans vote for it.',
    src: 'Guardian · AJ',
  },
  {
    art: 'protest', place: 'Bangladesh', region: 'Asia', cat: 'pol', lon: 90.4, lat: 23.8,
    cap: 'DHAKA · LOCKDOWN',
    head: 'Clashes and blasts in Hasina lockdown',
    sum: 'Her party demands she be let back from exile; border guards deployed.',
    src: 'Guardian · AJ',
  },
  {
    art: 'handshake', place: 'Caracas', region: 'Americas', cat: 'war', lon: -66.9, lat: 10.5,
    cap: 'CARACAS',
    head: 'Venezuela signs military deal with the US',
    sum: 'Hegseth: “compliant security partner” a year after Maduro’s removal.',
    src: 'BBC',
  },
  {
    art: 'expel', place: 'Mogadishu', region: 'Africa', cat: 'pol', lon: 45.3, lat: 2.05,
    cap: 'MOGADISHU',
    head: 'Somalia expels the UAE ambassador',
    sum: 'Accuses Abu Dhabi of an “open invasion” of its sovereignty.',
    src: 'Al Jazeera',
  },
  {
    art: 'jobs', place: 'Canberra', region: 'Oceania', cat: 'eco', lon: 149.1, lat: -35.3,
    cap: 'AUSTRALIA · JOBS',
    head: 'Australian jobless rate jumps to 4.9%',
    sum: 'Up from 4.7%, the highest in five years, official figures show.',
    src: 'Guardian · ABS',
  },
  {
    art: 'game', place: 'Worldwide', region: 'Global', cat: 'cul', lon: null, lat: null,
    cap: 'GTA VI · OUT NOW',
    head: 'GTA VI launches to rave reviews after 13 years',
    sum: 'Metacritic score of 99 as consoles unlock it from midnight.',
    src: 'AJ · Guardian',
  },
];

// Short items. place is the bold prefix and the map pin.
export const BRIEFS = [
  { place: 'Kyiv', region: 'Europe', cat: 'war', lon: 30.5, lat: 50.45, text: 'Blasts; drone reported near Dutch embassy.', src: 'Guardian', sure: 'claim' },
  { place: 'Berlin', region: 'Europe', cat: 'pol', lon: 13.4, lat: 52.52, text: 'EU leaders back Kyiv; Merz: summit a “photo op”.', src: 'AJ' },
  { place: 'Shenzhen', region: 'Asia', cat: 'pol', lon: 114.06, lat: 22.54, text: 'Albanese to Putin: “End your war, end it now.”', src: 'Guardian' },
  { place: 'Gaza', region: 'Middle East', cat: 'war', lon: 34.45, lat: 31.5, text: 'Raid past Yellow Line; Hamas: truce breach.', src: 'BBC', sure: 'claim' },
  { place: 'Seoul', region: 'Asia', cat: 'pol', lon: 126.98, lat: 37.57, text: 'Ex-PM Han to be retried over martial law.', src: 'AJ' },
  { place: 'Jakarta', region: 'Asia', cat: 'pol', lon: 106.85, lat: -6.2, text: 'Parliament passes asset-forfeiture law.', src: 'BBC' },
  { place: 'Odisha', region: 'Asia', cat: 'sci', lon: 85.8, lat: 19.8, text: 'Coast braces for Cyclone Akvan, due Friday.', src: 'PTI', sure: 'forecast' },
  { place: 'Baghdad', region: 'Middle East', cat: 'war', lon: 44.4, lat: 33.3, text: 'Deal with Kataib Hezbollah on its stronghold.', src: 'AJ' },
  { place: 'Pretoria', region: 'Africa', cat: 'eco', lon: 28.19, lat: -25.75, text: 'Central bank holds rates at 7.25%.', src: 'SAnews' },
  { place: 'Tbilisi', region: 'Europe', cat: 'war', lon: 44.8, lat: 41.7, text: 'Gas blast kills six; girl, 3, found alive.', src: 'AJ' },
  { place: 'London', region: 'Europe', cat: 'sci', lon: -0.13, lat: 51.5, text: 'Covid inquiry: UK was “woefully ill-prepared”.', src: 'BBC' },
  { place: 'Brussels', region: 'Europe', cat: 'pol', lon: 4.35, lat: 50.85, text: 'UK–EU deal near: 100,000 youth visas a year.', src: 'Guardian' },
  { place: 'Paris', region: 'Global', cat: 'sci', lon: 2.35, lat: 48.86, text: 'IEA: datacentre CO₂ to rise 70% by 2030.', src: 'Guardian' },
  { place: 'Kenya', region: 'Africa', cat: 'eco', lon: 39.3, lat: -4.4, text: 'US group picked for Mrima Hill rare earths.', src: 'Reuters' },
  { place: 'Nairobi', region: 'Africa', cat: 'cul', lon: 36.82, lat: -1.29, text: 'Marathon champ Jepchirchir banned 3 yrs.', src: 'AIU' },
  { place: 'Africa', region: 'Africa', cat: 'sci', lon: 2.0, lat: 10.0, text: 'UN: 45% of wives in W. Africa can’t refuse sex.', src: 'UNFPA' },
  { place: 'Haiti', region: 'Americas', cat: 'war', lon: -72.34, lat: 18.54, text: 'Police say raid killed 34 gang suspects.', src: 'AJ', sure: 'claim' },
  { place: 'Los Angeles', region: 'Americas', cat: 'sci', lon: -118.24, lat: 34.05, text: 'Storm floods streets; drivers rescued.', src: 'Guardian' },
  { place: 'US', region: 'Americas', cat: 'eco', lon: -77.0, lat: 38.9, text: 'Cleared ~900,000 AI chips for China in 6 months.', src: 'AJ' },
  { place: 'US', region: 'Americas', cat: 'cul', lon: -77.0, lat: 38.9, text: 'Trump pardons late baseball great Pete Rose.', src: 'Guardian' },
  { place: 'Nvidia', region: 'Americas', cat: 'eco', lon: -121.96, lat: 37.35, text: 'Eyes Arm’s Rene Haas as next CEO.', src: 'Guardian', sure: 'claim' },
  { place: 'Pennsylvania', region: 'Americas', cat: 'sci', lon: -77.2, lat: 40.9, text: 'Unvaccinated resident dies of measles.', src: 'AJ' },
  { place: 'Brazil', region: 'Americas', cat: 'pol', lon: -53.0, lat: -10.5, text: 'Lula visits Chief Raoni, recognises his land.', src: 'AFP' },
  { place: 'Colombia', region: 'Americas', cat: 'pol', lon: -74.07, lat: 4.71, text: 'Thousands march in national strike on tax bill.', src: 'BioBio' },
  { place: 'Australia', region: 'Oceania', cat: 'cul', lon: 145.8, lat: -16.9, text: 'Wreck of first home-built warship revealed.', src: 'Guardian' },
  { place: 'Sydney', region: 'Oceania', cat: 'eco', lon: 151.2, lat: -33.87, text: 'General Pants Co collapses; ~500 jobs at risk.', src: 'Guardian' },
];

// What we left out on purpose: in Thursday's papers but not Thursday's news.
export const LEFT_OUT = [
  'Kerch road span destroyed (Tue 17)',
  'Anthropic IPO priced (Wed 18)',
  'EU–Indonesia trade deal (Wed 18)',
  'Moïse murder verdict (Wed 18)',
  'IAEA Yongbyon report (Wed 18)',
  'Van Gogh $190.4m sale (Wed 18)',
];
export const STILL_TO_COME = ['Cyclone Akvan landfall', 'COP31 final deal (Fri 20)'];

export const SURE = {
  reported: { label: 'REPORTED', color: '#13804a', means: 'confirmed by named sources' },
  claim: { label: 'CLAIM', color: '#c87000', means: 'one side says so, not verified' },
  forecast: { label: 'FORECAST', color: '#2257c7', means: 'expected, not yet happened' },
};

export const SOURCES = 'Guardian, Al Jazeera (AJ), BBC, Reuters, AFP, SAnews, BioBioChile, AIU, ABS, UNFPA, IEA, PTI';
