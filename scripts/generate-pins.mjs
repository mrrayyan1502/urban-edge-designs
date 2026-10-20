import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('public/pinterest-pins');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Common SVG components
function svgWrapper(content) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1500" width="1000" height="1500">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#fdfbf7" />
      <stop offset="100%" stop-color="#f4eee1" />
    </linearGradient>
    <filter id="cardShadow" x="-10%" y="-5%" width="120%" height="115%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#171611" flood-opacity="0.08" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1000" height="1500" fill="url(#bgGrad)" />

  <!-- Outer Border Frame -->
  <rect x="36" y="36" width="928" height="1428" rx="24" fill="none" stroke="#ded4c2" stroke-width="2" />
  <rect x="48" y="48" width="904" height="1404" rx="16" fill="none" stroke="#ebe3d5" stroke-width="1" />

  <!-- Header Branding -->
  <g transform="translate(80, 85)">
    <circle cx="28" cy="28" r="28" fill="#171611" />
    <text x="28" y="35" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#c8ad7f" text-anchor="middle">UE</text>
    <text x="72" y="24" font-family="'Playfair Display', Georgia, serif" font-size="24" font-weight="bold" fill="#171611" letter-spacing="0.5">URBAN EDGE <tspan fill="#8b6f47" font-style="italic">DESIGN</tspan></text>
    <text x="72" y="44" font-family="'Inter', Helvetica, Arial, sans-serif" font-size="11" font-weight="600" fill="#8b6f47" letter-spacing="3">ARCHITECTURAL SPATIAL STANDARDS</text>
  </g>

  <!-- Content Layer -->
  ${content}

  <!-- Footer CTA -->
  <g transform="translate(80, 1375)">
    <rect x="0" y="0" width="840" height="60" rx="30" fill="#171611" />
    <text x="420" y="37" font-family="'Inter', Helvetica, Arial, sans-serif" font-size="15" font-weight="600" fill="#f8f5ee" text-anchor="middle" letter-spacing="1">
      TAP FOR THE FULL 50+ DIMENSIONS GUIDE &amp; CHEAT SHEET ➔
    </text>
    <text x="420" y="-14" font-family="'Inter', Helvetica, Arial, sans-serif" font-size="12" font-weight="500" fill="#8b6f47" text-anchor="middle" letter-spacing="1.5">
      urban-edge-designs.com/ideas/small-space-dimensions-guide
    </text>
  </g>
</svg>`;
}

// PIN 1: Living Room Clearances
const pin1Content = `
  <!-- Category Badge -->
  <g transform="translate(80, 175)">
    <rect x="0" y="0" width="220" height="34" rx="17" fill="#8b6f47" fill-opacity="0.12" />
    <text x="110" y="22" font-family="'Inter', Helvetica, sans-serif" font-size="12" font-weight="700" fill="#8b6f47" text-anchor="middle" letter-spacing="2">LIVING ROOM LAYOUT</text>
  </g>

  <!-- Title -->
  <text x="80" y="260" font-family="'Playfair Display', Georgia, serif" font-size="46" font-weight="bold" fill="#171611" line-height="1.2">
    The 45 cm Rule
  </text>
  <text x="80" y="310" font-family="'Playfair Display', Georgia, serif" font-size="34" font-style="italic" fill="#8b6f47">
    Small Living Room Spacing Cheat Sheet
  </text>

  <!-- Subtitle -->
  <text x="80" y="355" font-family="'Inter', Helvetica, sans-serif" font-size="16" fill="#171611" fill-opacity="0.75">
    Never guess walkway widths or coffee table distance in compact apartments.
  </text>

  <!-- Architectural Diagram Card -->
  <g transform="translate(80, 395)" filter="url(#cardShadow)">
    <rect width="840" height="420" rx="16" fill="#ffffff" stroke="#ded4c2" stroke-width="1" />
    
    <!-- Top Diagram Label -->
    <text x="35" y="45" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="#8b6f47" letter-spacing="2">FLOOR PLAN CLEARANCE SCHEMATIC</text>

    <!-- Sofa Vector -->
    <rect x="100" y="100" width="640" height="110" rx="10" fill="#ebe3d5" stroke="#171611" stroke-width="2" />
    <text x="420" y="160" font-family="'Playfair Display', Georgia, serif" font-size="20" font-weight="bold" fill="#171611" text-anchor="middle">SOFA SEATING ZONE (210 cm)</text>

    <!-- Clearance Dimension Line: Sofa to Coffee Table -->
    <line x1="280" y1="210" x2="280" y2="280" stroke="#8b6f47" stroke-width="2" stroke-dasharray="4,4" />
    <line x1="560" y1="210" x2="560" y2="280" stroke="#8b6f47" stroke-width="2" stroke-dasharray="4,4" />
    
    <line x1="420" y1="215" x2="420" y2="275" stroke="#8b6f47" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)" />
    <rect x="350" y="232" width="140" height="26" rx="6" fill="#8b6f47" />
    <text x="420" y="250" font-family="'Inter', sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">35 – 45 cm (14-18")</text>

    <!-- Coffee Table Vector -->
    <rect x="240" y="280" width="360" height="80" rx="8" fill="#171611" />
    <text x="420" y="328" font-family="'Inter', sans-serif" font-size="16" font-weight="600" fill="#f8f5ee" text-anchor="middle">COFFEE TABLE (1/2 to 2/3 Sofa Length)</text>

    <!-- Side Clearance Indicator -->
    <text x="740" y="325" font-family="'Inter', sans-serif" font-size="12" font-weight="bold" fill="#8b6f47" text-anchor="end">WALKWAY ➔ 90 cm</text>
  </g>

  <!-- Table Card -->
  <g transform="translate(80, 850)" filter="url(#cardShadow)">
    <rect width="840" height="480" rx="16" fill="#ffffff" stroke="#ded4c2" stroke-width="1" />
    <rect width="840" height="55" rx="16" fill="#171611" />
    <rect y="40" width="840" height="15" fill="#171611" /> <!-- sharp corner patch -->
    
    <text x="40" y="34" font-family="'Inter', sans-serif" font-size="14" font-weight="bold" fill="#f8f5ee" letter-spacing="1">KEY CLEARANCE ZONE</text>
    <text x="460" y="34" font-family="'Inter', sans-serif" font-size="14" font-weight="bold" fill="#c8ad7f" letter-spacing="1">MINIMUM</text>
    <text x="680" y="34" font-family="'Inter', sans-serif" font-size="14" font-weight="bold" fill="#c8ad7f" letter-spacing="1">IDEAL</text>

    <!-- Row 1 -->
    <g transform="translate(40, 95)">
      <text x="0" y="0" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611">Sofa to Coffee Table</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="13" fill="#171611" fill-opacity="0.6">Comfortable legroom &amp; arm reach</text>
      <text x="420" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#8b6f47">35 cm (14")</text>
      <text x="640" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#171611">45 cm (18")</text>
      <line x1="0" y1="38" x2="760" y2="38" stroke="#ebe3d5" stroke-width="1" />
    </g>

    <!-- Row 2 -->
    <g transform="translate(40, 175)">
      <text x="0" y="0" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611">Primary Room Walkway</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="13" fill="#171611" fill-opacity="0.6">Main path between door &amp; seating</text>
      <text x="420" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#8b6f47">75 cm (30")</text>
      <text x="640" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#171611">90 cm (36")</text>
      <line x1="0" y1="38" x2="760" y2="38" stroke="#ebe3d5" stroke-width="1" />
    </g>

    <!-- Row 3 -->
    <g transform="translate(40, 255)">
      <text x="0" y="0" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611">Sofa to TV (55" 4K Screen)</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="13" fill="#171611" fill-opacity="0.6">SMPTE ergonomic eye angle (30°)</text>
      <text x="420" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#8b6f47">1.7 m (5.6 ft)</text>
      <text x="640" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#171611">2.3 m (7.5 ft)</text>
      <line x1="0" y1="38" x2="760" y2="38" stroke="#ebe3d5" stroke-width="1" />
    </g>

    <!-- Row 4 -->
    <g transform="translate(40, 335)">
      <text x="0" y="0" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611">Coffee Table Height vs Sofa</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="13" fill="#171611" fill-opacity="0.6">Relative to top of seat cushion</text>
      <text x="420" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#8b6f47">-5 cm (-2")</text>
      <text x="640" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#171611">Exact Level</text>
      <line x1="0" y1="38" x2="760" y2="38" stroke="#ebe3d5" stroke-width="1" />
    </g>

    <!-- Trust Footer -->
    <g transform="translate(40, 425)">
      <text x="0" y="0" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#8b6f47">✓ Verified Architectural Standard: Neufert &amp; NKBA Anthropometrics</text>
    </g>
  </g>
`;

// PIN 2: Dining Table Clearances
const pin2Content = `
  <!-- Category Badge -->
  <g transform="translate(80, 175)">
    <rect x="0" y="0" width="220" height="34" rx="17" fill="#8b6f47" fill-opacity="0.12" />
    <text x="110" y="22" font-family="'Inter', Helvetica, sans-serif" font-size="12" font-weight="700" fill="#8b6f47" text-anchor="middle" letter-spacing="2">DINING ROOM SPACING</text>
  </g>

  <!-- Title -->
  <text x="80" y="260" font-family="'Playfair Display', Georgia, serif" font-size="46" font-weight="bold" fill="#171611">
    How Far From The Wall?
  </text>
  <text x="80" y="310" font-family="'Playfair Display', Georgia, serif" font-size="34" font-style="italic" fill="#8b6f47">
    Small Apartment Dining Clearances
  </text>

  <!-- Subtitle -->
  <text x="80" y="355" font-family="'Inter', Helvetica, sans-serif" font-size="16" fill="#171611" fill-opacity="0.75">
    Avoid trapped guests and blocked doors with standard chair push-back metrics.
  </text>

  <!-- Visual Schematic -->
  <g transform="translate(80, 395)" filter="url(#cardShadow)">
    <rect width="840" height="420" rx="16" fill="#ffffff" stroke="#ded4c2" stroke-width="1" />
    <text x="35" y="45" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="#8b6f47" letter-spacing="2">DINING PERIMETER CLEARANCE RULES</text>

    <!-- Table Graphic (Round Drop Leaf) -->
    <circle cx="300" cy="240" r="110" fill="#171611" />
    <text x="300" y="245" font-family="'Playfair Display', Georgia, serif" font-size="20" font-weight="bold" fill="#c8ad7f" text-anchor="middle">90 cm ROUND</text>

    <!-- Chairs -->
    <rect x="260" y="85" width="80" height="35" rx="6" fill="#ebe3d5" stroke="#171611" stroke-width="1.5" />
    <rect x="260" y="360" width="80" height="35" rx="6" fill="#ebe3d5" stroke="#171611" stroke-width="1.5" />
    <rect x="145" y="200" width="35" height="80" rx="6" fill="#ebe3d5" stroke="#171611" stroke-width="1.5" />
    <rect x="420" y="200" width="35" height="80" rx="6" fill="#ebe3d5" stroke="#171611" stroke-width="1.5" />

    <!-- Wall Indicator Right -->
    <line x1="680" y1="80" x2="680" y2="400" stroke="#171611" stroke-width="6" stroke-linecap="round" />
    <text x="700" y="245" font-family="'Inter', sans-serif" font-size="15" font-weight="bold" fill="#171611">WALL</text>

    <!-- Clearance Dimension Line Table to Wall -->
    <line x1="410" y1="240" x2="680" y2="240" stroke="#8b6f47" stroke-width="2" stroke-dasharray="4,4" />
    <rect x="480" y="215" width="130" height="30" rx="6" fill="#8b6f47" />
    <text x="545" y="235" font-family="'Inter', sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">90 – 105 cm</text>
    <text x="545" y="270" font-family="'Inter', sans-serif" font-size="12" fill="#171611" fill-opacity="0.7" text-anchor="middle">Allows Walk-Behind</text>
  </g>

  <!-- Data Table Card -->
  <g transform="translate(80, 850)" filter="url(#cardShadow)">
    <rect width="840" height="480" rx="16" fill="#ffffff" stroke="#ded4c2" stroke-width="1" />
    <rect width="840" height="55" rx="16" fill="#171611" />
    <rect y="40" width="840" height="15" fill="#171611" />
    
    <text x="40" y="34" font-family="'Inter', sans-serif" font-size="14" font-weight="bold" fill="#f8f5ee" letter-spacing="1">CLEARANCE REQUIREMENT</text>
    <text x="460" y="34" font-family="'Inter', sans-serif" font-size="14" font-weight="bold" fill="#c8ad7f" letter-spacing="1">MINIMUM</text>
    <text x="680" y="34" font-family="'Inter', sans-serif" font-size="14" font-weight="bold" fill="#c8ad7f" letter-spacing="1">COMFORT</text>

    <g transform="translate(40, 95)">
      <text x="0" y="0" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611">Chair Push-Back (No Passage)</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="13" fill="#171611" fill-opacity="0.6">Allows diner to stand up from table</text>
      <text x="420" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#8b6f47">75 cm (30")</text>
      <text x="640" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#171611">80 cm (32")</text>
      <line x1="0" y1="38" x2="760" y2="38" stroke="#ebe3d5" stroke-width="1" />
    </g>

    <g transform="translate(40, 175)">
      <text x="0" y="0" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611">Table Edge to Wall Walkway</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="13" fill="#171611" fill-opacity="0.6">Allows walking behind seated diners</text>
      <text x="420" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#8b6f47">90 cm (36")</text>
      <text x="640" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#171611">105 cm (42")</text>
      <line x1="0" y1="38" x2="760" y2="38" stroke="#ebe3d5" stroke-width="1" />
    </g>

    <g transform="translate(40, 255)">
      <text x="0" y="0" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611">Per-Diner Width on Tabletop</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="13" fill="#171611" fill-opacity="0.6">Elbow room between diners</text>
      <text x="420" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#8b6f47">60 cm (24")</text>
      <text x="640" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#171611">70 cm (28")</text>
      <line x1="0" y1="38" x2="760" y2="38" stroke="#ebe3d5" stroke-width="1" />
    </g>

    <g transform="translate(40, 335)">
      <text x="0" y="0" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611">Banquette Seating Depth</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="13" fill="#171611" fill-opacity="0.6">Built-in bench cushion depth</text>
      <text x="420" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#8b6f47">45 cm (18")</text>
      <text x="640" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#171611">50 cm (20")</text>
      <line x1="0" y1="38" x2="760" y2="38" stroke="#ebe3d5" stroke-width="1" />
    </g>

    <g transform="translate(40, 425)">
      <text x="0" y="0" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#8b6f47">✓ Complies with UK Building Regulations Part M &amp; NKBA Dining Standards</text>
    </g>
  </g>
`;

// PIN 3: Galley Kitchen Work Aisles
const pin3Content = `
  <!-- Category Badge -->
  <g transform="translate(80, 175)">
    <rect x="0" y="0" width="220" height="34" rx="17" fill="#8b6f47" fill-opacity="0.12" />
    <text x="110" y="22" font-family="'Inter', Helvetica, sans-serif" font-size="12" font-weight="700" fill="#8b6f47" text-anchor="middle" letter-spacing="2">KITCHEN ERGONOMICS</text>
  </g>

  <!-- Title -->
  <text x="80" y="260" font-family="'Playfair Display', Georgia, serif" font-size="46" font-weight="bold" fill="#171611">
    Galley Kitchen Rules
  </text>
  <text x="80" y="310" font-family="'Playfair Display', Georgia, serif" font-size="34" font-style="italic" fill="#8b6f47">
    NKBA Work Aisle Clearances for Small Flats
  </text>

  <!-- Subtitle -->
  <text x="80" y="355" font-family="'Inter', Helvetica, sans-serif" font-size="16" fill="#171611" fill-opacity="0.75">
    Prevent oven door collisions and cramped prep counters in compact kitchens.
  </text>

  <!-- Schematic Diagram -->
  <g transform="translate(80, 395)" filter="url(#cardShadow)">
    <rect width="840" height="420" rx="16" fill="#ffffff" stroke="#ded4c2" stroke-width="1" />
    <text x="35" y="45" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="#8b6f47" letter-spacing="2">GALLEY AISLE CLEARANCE BLUEPRINT</text>

    <!-- Counter Top Left -->
    <rect x="100" y="100" width="640" height="60" fill="#ebe3d5" stroke="#171611" stroke-width="1.5" />
    <text x="420" y="137" font-family="'Inter', sans-serif" font-size="14" font-weight="bold" fill="#171611" text-anchor="middle">SINK &amp; PREP RUN (60 cm DEPTH)</text>

    <!-- Counter Bottom Right -->
    <rect x="100" y="280" width="640" height="60" fill="#ebe3d5" stroke="#171611" stroke-width="1.5" />
    <text x="420" y="317" font-family="'Inter', sans-serif" font-size="14" font-weight="bold" fill="#171611" text-anchor="middle">COOKTOP &amp; OVEN RUN (60 cm DEPTH)</text>

    <!-- Aisle Clearance Dimension -->
    <line x1="420" y1="165" x2="420" y2="275" stroke="#8b6f47" stroke-width="3" />
    <rect x="330" y="205" width="180" height="34" rx="8" fill="#8b6f47" />
    <text x="420" y="228" font-family="'Inter', sans-serif" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">105 cm (42") AISLE</text>

    <text x="710" y="228" font-family="'Inter', sans-serif" font-size="12" font-weight="bold" fill="#8b6f47" text-anchor="end">SINGLE-COOK MIN: 90 cm</text>
  </g>

  <!-- Table -->
  <g transform="translate(80, 850)" filter="url(#cardShadow)">
    <rect width="840" height="480" rx="16" fill="#ffffff" stroke="#ded4c2" stroke-width="1" />
    <rect width="840" height="55" rx="16" fill="#171611" />
    <rect y="40" width="840" height="15" fill="#171611" />
    
    <text x="40" y="34" font-family="'Inter', sans-serif" font-size="14" font-weight="bold" fill="#f8f5ee" letter-spacing="1">KITCHEN WORK ZONE</text>
    <text x="460" y="34" font-family="'Inter', sans-serif" font-size="14" font-weight="bold" fill="#c8ad7f" letter-spacing="1">MINIMUM</text>
    <text x="680" y="34" font-family="'Inter', sans-serif" font-size="14" font-weight="bold" fill="#c8ad7f" letter-spacing="1">NKBA BENCHMARK</text>

    <g transform="translate(40, 95)">
      <text x="0" y="0" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611">Single-Cook Work Aisle</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="13" fill="#171611" fill-opacity="0.6">Counter edge to opposing counter</text>
      <text x="420" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#8b6f47">90 cm (36")</text>
      <text x="640" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#171611">105 cm (42")</text>
      <line x1="0" y1="38" x2="760" y2="38" stroke="#ebe3d5" stroke-width="1" />
    </g>

    <g transform="translate(40, 175)">
      <text x="0" y="0" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611">Two-Cook / Shared Kitchen Aisle</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="13" fill="#171611" fill-opacity="0.6">Allows two adults to pass back-to-back</text>
      <text x="420" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#8b6f47">105 cm (42")</text>
      <text x="640" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#171611">120 cm (48")</text>
      <line x1="0" y1="38" x2="760" y2="38" stroke="#ebe3d5" stroke-width="1" />
    </g>

    <g transform="translate(40, 255)">
      <text x="0" y="0" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611">Oven Door Swing Open Buffer</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="13" fill="#171611" fill-opacity="0.6">Door open plus squatting cook space</text>
      <text x="420" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#8b6f47">90 cm (36")</text>
      <text x="640" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#171611">105 cm (42")</text>
      <line x1="0" y1="38" x2="760" y2="38" stroke="#ebe3d5" stroke-width="1" />
    </g>

    <g transform="translate(40, 335)">
      <text x="0" y="0" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611">Upper Cabinet Clearance</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="13" fill="#171611" fill-opacity="0.6">Countertop to underside of wall cabinets</text>
      <text x="420" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#8b6f47">45 cm (18")</text>
      <text x="640" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#171611">50 cm (20")</text>
      <line x1="0" y1="38" x2="760" y2="38" stroke="#ebe3d5" stroke-width="1" />
    </g>

    <g transform="translate(40, 425)">
      <text x="0" y="0" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#8b6f47">✓ National Kitchen &amp; Bath Association (NKBA) Planning Guideline 3</text>
    </g>
  </g>
`;

// PIN 4: Bedroom Ergonomics
const pin4Content = `
  <!-- Category Badge -->
  <g transform="translate(80, 175)">
    <rect x="0" y="0" width="220" height="34" rx="17" fill="#8b6f47" fill-opacity="0.12" />
    <text x="110" y="22" font-family="'Inter', Helvetica, sans-serif" font-size="12" font-weight="700" fill="#8b6f47" text-anchor="middle" letter-spacing="2">BEDROOM ERGONOMICS</text>
  </g>

  <!-- Title -->
  <text x="80" y="260" font-family="'Playfair Display', Georgia, serif" font-size="46" font-weight="bold" fill="#171611">
    Bed &amp; Wardrobe
  </text>
  <text x="80" y="310" font-family="'Playfair Display', Georgia, serif" font-size="34" font-style="italic" fill="#8b6f47">
    Clearance &amp; Nightstand Height Rules
  </text>

  <!-- Subtitle -->
  <text x="80" y="355" font-family="'Inter', Helvetica, sans-serif" font-size="16" fill="#171611" fill-opacity="0.75">
    The essential small bedroom spacing guide to avoid blocked wardrobes.
  </text>

  <!-- Visual Schematic -->
  <g transform="translate(80, 395)" filter="url(#cardShadow)">
    <rect width="840" height="420" rx="16" fill="#ffffff" stroke="#ded4c2" stroke-width="1" />
    <text x="35" y="45" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="#8b6f47" letter-spacing="2">COMPACT BEDROOM LAYOUT SCHEMATIC</text>

    <!-- Bed Representation -->
    <rect x="250" y="100" width="340" height="260" rx="12" fill="#ebe3d5" stroke="#171611" stroke-width="2" />
    <rect x="280" y="115" width="130" height="40" rx="6" fill="#ffffff" stroke="#171611" stroke-width="1" />
    <rect x="430" y="115" width="130" height="40" rx="6" fill="#ffffff" stroke="#171611" stroke-width="1" />
    <text x="420" y="250" font-family="'Playfair Display', Georgia, serif" font-size="20" font-weight="bold" fill="#171611" text-anchor="middle">DOUBLE BED (135 x 190 cm)</text>

    <!-- Floating Nightstands -->
    <rect x="150" y="115" width="70" height="50" rx="6" fill="#171611" />
    <text x="185" y="145" font-family="'Inter', sans-serif" font-size="11" font-weight="bold" fill="#c8ad7f" text-anchor="middle">STAND</text>
    <rect x="620" y="115" width="70" height="50" rx="6" fill="#171611" />
    <text x="655" y="145" font-family="'Inter', sans-serif" font-size="11" font-weight="bold" fill="#c8ad7f" text-anchor="middle">STAND</text>

    <!-- Side Clearance Indicator -->
    <line x1="590" y1="230" x2="720" y2="230" stroke="#8b6f47" stroke-width="2" stroke-dasharray="3,3" />
    <rect x="615" y="215" width="80" height="26" rx="6" fill="#8b6f47" />
    <text x="655" y="233" font-family="'Inter', sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">60 cm</text>
    <text x="725" y="235" font-family="'Inter', sans-serif" font-size="12" font-weight="bold" fill="#171611">WALL</text>

    <!-- Foot of Bed Clearance -->
    <line x1="420" y1="360" x2="420" y2="400" stroke="#8b6f47" stroke-width="2" />
    <rect x="360" y="370" width="120" height="26" rx="6" fill="#171611" />
    <text x="420" y="388" font-family="'Inter', sans-serif" font-size="12" font-weight="bold" fill="#c8ad7f" text-anchor="middle">FOOT: 75 cm</text>
  </g>

  <!-- Table Card -->
  <g transform="translate(80, 850)" filter="url(#cardShadow)">
    <rect width="840" height="480" rx="16" fill="#ffffff" stroke="#ded4c2" stroke-width="1" />
    <rect width="840" height="55" rx="16" fill="#171611" />
    <rect y="40" width="840" height="15" fill="#171611" />
    
    <text x="40" y="34" font-family="'Inter', sans-serif" font-size="14" font-weight="bold" fill="#f8f5ee" letter-spacing="1">BEDROOM SPATIAL ELEMENT</text>
    <text x="460" y="34" font-family="'Inter', sans-serif" font-size="14" font-weight="bold" fill="#c8ad7f" letter-spacing="1">MINIMUM</text>
    <text x="680" y="34" font-family="'Inter', sans-serif" font-size="14" font-weight="bold" fill="#c8ad7f" letter-spacing="1">COMFORT</text>

    <g transform="translate(40, 95)">
      <text x="0" y="0" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611">Bed-to-Side-Wall Walkway</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="13" fill="#171611" fill-opacity="0.6">Allows making the bed comfortably</text>
      <text x="420" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#8b6f47">55 cm (22")</text>
      <text x="640" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#171611">75 cm (30")</text>
      <line x1="0" y1="38" x2="760" y2="38" stroke="#ebe3d5" stroke-width="1" />
    </g>

    <g transform="translate(40, 175)">
      <text x="0" y="0" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611">Hinged Wardrobe Door Arc Buffer</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="13" fill="#171611" fill-opacity="0.6">Door swing + standing user clearance</text>
      <text x="420" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#8b6f47">80 cm (32")</text>
      <text x="640" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#171611">95 cm (38")</text>
      <line x1="0" y1="38" x2="760" y2="38" stroke="#ebe3d5" stroke-width="1" />
    </g>

    <g transform="translate(40, 255)">
      <text x="0" y="0" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611">Nightstand Height vs Mattress</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="13" fill="#171611" fill-opacity="0.6">Tabletop surface relative to mattress top</text>
      <text x="420" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#8b6f47">Level / -2 cm</text>
      <text x="640" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#171611">Level with Top</text>
      <line x1="0" y1="38" x2="760" y2="38" stroke="#ebe3d5" stroke-width="1" />
    </g>

    <g transform="translate(40, 335)">
      <text x="0" y="0" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611">Under-Bed Storage Drawer Pullout</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="13" fill="#171611" fill-opacity="0.6">Side clearance needed to pull drawer out</text>
      <text x="420" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#8b6f47">65 cm (26")</text>
      <text x="640" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#171611">80 cm (32")</text>
      <line x1="0" y1="38" x2="760" y2="38" stroke="#ebe3d5" stroke-width="1" />
    </g>

    <g transform="translate(40, 425)">
      <text x="0" y="0" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#8b6f47">✓ Standard Architectural Ergonomics &amp; Neufert Anthropometric Data</text>
    </g>
  </g>
`;

// PIN 5: Studio Apartment Zoning
const pin5Content = `
  <!-- Category Badge -->
  <g transform="translate(80, 175)">
    <rect x="0" y="0" width="220" height="34" rx="17" fill="#8b6f47" fill-opacity="0.12" />
    <text x="110" y="22" font-family="'Inter', Helvetica, sans-serif" font-size="12" font-weight="700" fill="#8b6f47" text-anchor="middle" letter-spacing="2">STUDIO APARTMENT ZONING</text>
  </g>

  <!-- Title -->
  <text x="80" y="260" font-family="'Playfair Display', Georgia, serif" font-size="46" font-weight="bold" fill="#171611">
    Studio Zoning Rules
  </text>
  <text x="80" y="310" font-family="'Playfair Display', Georgia, serif" font-size="34" font-style="italic" fill="#8b6f47">
    Dividing Sleeping &amp; Living Spaces
  </text>

  <!-- Subtitle -->
  <text x="80" y="355" font-family="'Inter', Helvetica, sans-serif" font-size="16" fill="#171611" fill-opacity="0.75">
    How to delineate private bedroom areas in micro-apartments under 45 m².
  </text>

  <!-- Visual Schematic -->
  <g transform="translate(80, 395)" filter="url(#cardShadow)">
    <rect width="840" height="420" rx="16" fill="#ffffff" stroke="#ded4c2" stroke-width="1" />
    <text x="35" y="45" font-family="'Inter', sans-serif" font-size="13" font-weight="700" fill="#8b6f47" letter-spacing="2">OPEN-PLAN STUDIO ZONING BLUEPRINT</text>

    <!-- Zone A: Sleeping -->
    <rect x="70" y="90" width="310" height="290" rx="12" fill="#ebe3d5" stroke="#171611" stroke-width="1.5" />
    <text x="225" y="130" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611" text-anchor="middle">BEDROOM ZONE</text>
    <rect x="110" y="160" width="230" height="190" rx="8" fill="#ffffff" stroke="#171611" stroke-width="1" />
    <text x="225" y="260" font-family="'Inter', sans-serif" font-size="14" font-weight="600" fill="#171611" text-anchor="middle">Bed (135x190)</text>

    <!-- Divider: Open Bookcase / Slats -->
    <rect x="400" y="90" width="35" height="290" rx="6" fill="#171611" />
    <text x="418" y="240" font-family="'Inter', sans-serif" font-size="12" font-weight="bold" fill="#c8ad7f" text-anchor="middle" transform="rotate(-90 418 240)">OPEN SHELF DIVIDER</text>

    <!-- Zone B: Living Room -->
    <rect x="455" y="90" width="320" height="290" rx="12" fill="#f8f5ee" stroke="#171611" stroke-width="1.5" />
    <text x="615" y="130" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611" text-anchor="middle">LIVING ZONE</text>
    <rect x="480" y="180" width="270" height="80" rx="8" fill="#ebe3d5" stroke="#171611" stroke-width="1" />
    <text x="615" y="228" font-family="'Inter', sans-serif" font-size="14" font-weight="600" fill="#171611" text-anchor="middle">Compact Sofa</text>

    <!-- Circulation Arrow at Base -->
    <text x="420" y="405" font-family="'Inter', sans-serif" font-size="12" font-weight="bold" fill="#8b6f47" text-anchor="middle">
      ◄── 75 – 90 cm CIRCULATION WALKWAY ──►
    </text>
  </g>

  <!-- Table Card -->
  <g transform="translate(80, 850)" filter="url(#cardShadow)">
    <rect width="840" height="480" rx="16" fill="#ffffff" stroke="#ded4c2" stroke-width="1" />
    <rect width="840" height="55" rx="16" fill="#171611" />
    <rect y="40" width="840" height="15" fill="#171611" />
    
    <text x="40" y="34" font-family="'Inter', sans-serif" font-size="14" font-weight="bold" fill="#f8f5ee" letter-spacing="1">STUDIO PARTITION TYPE</text>
    <text x="440" y="34" font-family="'Inter', sans-serif" font-size="14" font-weight="bold" fill="#c8ad7f" letter-spacing="1">CLEARANCE</text>
    <text x="660" y="34" font-family="'Inter', sans-serif" font-size="14" font-weight="bold" fill="#c8ad7f" letter-spacing="1">LIGHT EFFICIENCY</text>

    <g transform="translate(40, 95)">
      <text x="0" y="0" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611">Open-Back Bookcase</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="13" fill="#171611" fill-opacity="0.6">35-40 cm deep unit (e.g. Kallax)</text>
      <text x="400" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#8b6f47">75 - 90 cm</text>
      <text x="620" y="8" font-family="'Inter', sans-serif" font-size="15" font-weight="600" fill="#171611">Preserves Daylight</text>
      <line x1="0" y1="38" x2="760" y2="38" stroke="#ebe3d5" stroke-width="1" />
    </g>

    <g transform="translate(40, 175)">
      <text x="0" y="0" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611">Ceiling Curtain Track</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="13" fill="#171611" fill-opacity="0.6">Flush ceiling profile (5 cm wide)</text>
      <text x="400" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#8b6f47">60 cm buffer</text>
      <text x="620" y="8" font-family="'Inter', sans-serif" font-size="15" font-weight="600" fill="#171611">100% Retractable</text>
      <line x1="0" y1="38" x2="760" y2="38" stroke="#ebe3d5" stroke-width="1" />
    </g>

    <g transform="translate(40, 255)">
      <text x="0" y="0" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611">Slatted Timber Screen</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="13" fill="#171611" fill-opacity="0.6">Vertical acoustic wood battens</text>
      <text x="400" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#8b6f47">70 cm passage</text>
      <text x="620" y="8" font-family="'Inter', sans-serif" font-size="15" font-weight="600" fill="#171611">70%+ Light Flow</text>
      <line x1="0" y1="38" x2="760" y2="38" stroke="#ebe3d5" stroke-width="1" />
    </g>

    <g transform="translate(40, 335)">
      <text x="0" y="0" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="bold" fill="#171611">Sofa Back-to-Bed Console</text>
      <text x="0" y="20" font-family="'Inter', sans-serif" font-size="13" fill="#171611" fill-opacity="0.6">25-30 cm drop console table</text>
      <text x="400" y="8" font-family="'Inter', sans-serif" font-size="16" font-weight="bold" fill="#8b6f47">45 cm spacer</text>
      <text x="620" y="8" font-family="'Inter', sans-serif" font-size="15" font-weight="600" fill="#171611">Dual Function</text>
      <line x1="0" y1="38" x2="760" y2="38" stroke="#ebe3d5" stroke-width="1" />
    </g>

    <g transform="translate(40, 425)">
      <text x="0" y="0" font-family="'Inter', sans-serif" font-size="12" font-weight="600" fill="#8b6f47">✓ Field-tested studio zoning benchmarks for apartments under 45 m²</text>
    </g>
  </g>
`;

fs.writeFileSync(path.join(outDir, 'pin-1-living-room-clearances.svg'), svgWrapper(pin1Content), 'utf8');
fs.writeFileSync(path.join(outDir, 'pin-2-dining-area-spacing.svg'), svgWrapper(pin2Content), 'utf8');
fs.writeFileSync(path.join(outDir, 'pin-3-galley-kitchen-work-aisles.svg'), svgWrapper(pin3Content), 'utf8');
fs.writeFileSync(path.join(outDir, 'pin-4-bedroom-ergonomics.svg'), svgWrapper(pin4Content), 'utf8');
fs.writeFileSync(path.join(outDir, 'pin-5-studio-apartment-zoning.svg'), svgWrapper(pin5Content), 'utf8');

console.log('Successfully generated all 5 Pinterest Pin SVGs in public/pinterest-pins/');
