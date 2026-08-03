import type { LucideIcon } from "lucide-react";
import {
  Leaf, ShieldCheck, HeartHandshake,
  Clock, BadgeCheck, Truck, UtensilsCrossed, Wine, LeafyGreen,
  Smile, Stethoscope, Baby,
} from "lucide-react";

/* ---------------- Chatbot config types ---------------- */

export interface ServiceOption {
  label: string;
  price?: string;
}

export interface ChatService {
  name: string;
  options: ServiceOption[];
}

export interface Intent {
  keywords: string[];
  response: string;
  startsBooking?: boolean;
}

export interface BotConfig {
  botName: string;
  accent: string; // hex used for chat header/buttons
  accentText: string;
  greeting: string;
  quickReplies: string[];
  bookingWord: string; // "appointment" | "table" | "visit" | "quote"
  services: ChatService[];
  confirmNote: string;
  intents: Intent[];
  fallback: string;
}

/* ---------------- Demo site config ---------------- */

export interface DemoService {
  name: string;
  desc: string;
  price: string;
}

export interface DemoFeature {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface DemoConfig {
  slug: string;
  category: string;
  audience: string;
  theme: "dark" | "light";
  accent: string;
  accentSoft: string;
  brand: string;
  monogram: string;
  tagline: string;
  heroImage: string;
  heroBadge: string;
  heroHeadline: string;
  heroHeadlineAccent: string;
  heroSub: string;
  stats: { n: string; l: string }[];
  servicesTitle: string;
  servicesSub: string;
  services: DemoService[];
  features: DemoFeature[];
  aboutTitle: string;
  aboutText: string;
  secondaryImage: string;
  reviews: { name: string; text: string }[];
  contact: { phone: string; email: string; address: string; hours: string; note: string };
  bot: BotConfig;
}

/* =====================================================
   1. SPA / SALON / MASSAGE — "Velvet Lotus Spa & Salon"
   ===================================================== */

const spaBot: BotConfig = {
  botName: "Lotus — AI Concierge",
  accent: "#c9a55c",
  accentText: "#0b1f1a",
  greeting:
    "Welcome to Velvet Lotus! I'm Lotus, the spa's demo AI assistant (this whole site is a demonstration by Urban Edge Designs). Ask me about treatments, prices or gift vouchers — or say \"book\" and I'll arrange your escape in seconds.",
  quickReplies: ["Treatment prices", "Book a massage", "Opening hours", "Gift vouchers"],
  bookingWord: "appointment",
  services: [
    {
      name: "Signature Aromatherapy Massage",
      options: [
        { label: "45 mins · £49", price: "£49" },
        { label: "60 mins · £62", price: "£62" },
        { label: "90 mins · £88", price: "£88" },
      ],
    },
    {
      name: "Deep Tissue Massage",
      options: [
        { label: "45 mins · £52", price: "£52" },
        { label: "60 mins · £65", price: "£65" },
        { label: "90 mins · £92", price: "£92" },
      ],
    },
    {
      name: "Luxury Facial",
      options: [
        { label: "45 mins · £55", price: "£55" },
        { label: "75 mins · £75", price: "£75" },
      ],
    },
    {
      name: "Couples Ritual for Two",
      options: [
        { label: "60 mins · £120", price: "£120" },
        { label: "90 mins · £170", price: "£170" },
      ],
    },
  ],
  confirmNote:
    "To confirm your slot, tap \"Call to Confirm\" below — we're open 7 days a week and evenings fill fast.",
  intents: [
    {
      keywords: ["price", "cost", "how much", "fee", "charge"],
      response:
        "Here's a quick guide:\n\n· Massages — from £49 (45 min) to £92 (90 min)\n· Luxury Facials — from £55\n· Couples Ritual — from £120\n\nAsk me about any treatment for details, or say \"book\" to reserve your spot.",
    },
    {
      keywords: ["hour", "open", "close", "when", "time"],
      response:
        "We're open Monday to Saturday, 9am–8pm, and Sundays 10am–6pm. Evening slots are our most popular — shall I help you grab one?",
    },
    {
      keywords: ["where", "location", "address", "find", "park", "station", "direction"],
      response:
        "You'll find us at 14 Willow Lane, Meadowbrook, MB2 4QT — two minutes from Meadowbrook station, with free parking right outside. Anything else you'd like to know?",
    },
    {
      keywords: ["gift", "voucher", "present"],
      response:
        "Our eGift vouchers are a beautiful present — personalised, delivered instantly by email, and valid for 12 months on any treatment. You can order one by calling us, or I can note it for the team. A present they'll truly treasure!",
    },
    {
      keywords: ["facial", "skin", "glow"],
      response:
        "Our Luxury Facial (from £55) uses warm botanical oils and gentle sculpting techniques — guests say their skin glows for days. Would you like to book one?",
    },
    {
      keywords: ["couple", "partner", "together", "two"],
      response:
        "The Couples Ritual is perfect — two therapists, one candlelit room, side-by-side massages. From £120 for 60 minutes. Shall I start a booking?",
    },
    {
      keywords: ["stress", "relax", "recommend", "best", "suggest", "tired"],
      response:
        "For pure relaxation, I'd recommend our Signature Aromatherapy Massage — the 60-minute session (£62) is the guest favourite. Want me to book it for you?",
    },
    {
      keywords: ["book", "appointment", "reserve", "schedule"],
      response: "Wonderful! Which treatment would you like? Tap one below or type its name.",
      startsBooking: true,
    },
    {
      keywords: ["hello", "hi", "hey"],
      response:
        "Hello and welcome! I can share treatment prices, help you pick the perfect massage, or start a booking. What would you like?",
    },
    {
      keywords: ["thank"],
      response: "You're so welcome! We can't wait to pamper you. Anything else I can help with?",
    },
  ],
  fallback:
    "Happy to help! I can tell you about treatments, prices, opening hours or gift vouchers — or start a booking right here. What would you like to know?",
};

const spa: DemoConfig = {
  slug: "spa",
  category: "Salon, Spa & Massage",
  audience: "Beauty salons, spas, massage therapists, nail & hair studios",
  theme: "dark",
  accent: "#c9a55c",
  accentSoft: "rgba(201,165,92,0.15)",
  brand: "Velvet Lotus",
  monogram: "VL",
  tagline: "Spa & Salon",
  heroImage: "/images/hero-spa.webp",
  heroBadge: "Est. 2018 · Meadowbrook",
  heroHeadline: "Where Stress Melts",
  heroHeadlineAccent: "Into Silk",
  heroSub:
    "A boutique day spa offering massages, facials and beauty rituals by certified therapists — in five candlelit treatment rooms.",
  stats: [
    { n: "12+", l: "Treatments" },
    { n: "5", l: "Luxury Rooms" },
    { n: "7d", l: "Open Weekly" },
  ],
  servicesTitle: "Treatments & Prices",
  servicesSub: "Not sure which ritual suits you? Ask Lotus, our AI concierge — she'll guide you.",
  services: [
    { name: "Signature Aromatherapy Massage", desc: "Warm botanical oils, flowing strokes and gentle pressure-point work.", price: "from £49" },
    { name: "Deep Tissue Massage", desc: "Focused relief for chronic tension, stiff necks and tired backs.", price: "from £52" },
    { name: "Luxury Glow Facial", desc: "Deep cleanse, sculpting massage and a radiance-boosting botanical mask.", price: "from £55" },
    { name: "Hot Stone Therapy", desc: "Volcanic stones melt deep muscular tension while you drift away.", price: "from £58" },
    { name: "Couples Ritual for Two", desc: "Side-by-side massages in our private candlelit couples suite.", price: "from £120" },
    { name: "Manicure & Pedicure", desc: "Precision nail care with luxury soak, scrub and polish.", price: "from £28" },
  ],
  features: [
    { icon: Leaf, title: "Certified Therapists", text: "Every therapist is professionally trained, certified and fully insured." },
    { icon: ShieldCheck, title: "Spotless & Serene", text: "Immaculate rooms, fresh linens and a calming ambience, every visit." },
    { icon: HeartHandshake, title: "Honest Pricing", text: "Premium rituals at genuinely fair prices — no surprises, ever." },
  ],
  aboutTitle: "A Sanctuary in the Heart of Meadowbrook",
  aboutText:
    "Step off the high street and into calm. Soft light, warm oils and therapists who truly listen — Velvet Lotus is where the neighbourhood comes to breathe again.",
  secondaryImage: "/images/spa-oils.webp",
  reviews: [
    { name: "Emma R.", text: "The deep tissue massage here genuinely fixed my shoulder. Beautiful rooms, lovely people. I book every month now." },
    { name: "Priya K.", text: "Booked through their chat assistant in under a minute. The facial was divine — my skin has never looked better." },
    { name: "Tom W.", text: "Took my wife for the couples ritual on our anniversary. She hasn't stopped talking about it. Worth every penny." },
  ],
  contact: {
    phone: "020 7946 0321",
    email: "hello@velvetlotus-demo.co.uk",
    address: "14 Willow Lane, Meadowbrook, MB2 4QT",
    hours: "Mon–Sat 9am–8pm · Sun 10am–6pm",
    note: "2 minutes from Meadowbrook station · Free parking outside",
  },
  bot: spaBot,
};

/* =====================================================
   2. TRADES — "FixRight Home Services"
   ===================================================== */

const tradesBot: BotConfig = {
  botName: "Fixi — AI Assistant",
  accent: "#e07b2e",
  accentText: "#131c2b",
  greeting:
    "Hi! I'm Fixi, FixRight's demo AI assistant (this whole site is a demonstration by Urban Edge Designs). Leak, fault, project or clean-up — tell me what's going on and I'll get you a fast quote or an emergency visit.",
  quickReplies: ["Emergency help!", "Get a quote", "Your services", "Call out areas"],
  bookingWord: "visit",
  services: [
    {
      name: "Plumbing Repair",
      options: [
        { label: "Standard visit · from £65", price: "from £65" },
        { label: "Emergency call-out · from £95", price: "from £95" },
      ],
    },
    {
      name: "Electrical Work",
      options: [
        { label: "Standard visit · from £70", price: "from £70" },
        { label: "Emergency call-out · from £95", price: "from £95" },
      ],
    },
    {
      name: "Building & Renovation",
      options: [
        { label: "Free site survey · £0", price: "Free quote" },
      ],
    },
    {
      name: "Deep Cleaning",
      options: [
        { label: "One-off clean · from £80", price: "from £80" },
        { label: "End of tenancy · from £150", price: "from £150" },
      ],
    },
  ],
  confirmNote:
    "Tap \"Request Call-Out\" below and our team will ring you within 15 minutes to confirm your slot.",
  intents: [
    {
      keywords: ["emergency", "urgent", "leak", "burst", "flood", "no power", "sparking", "now", "asap"],
      response:
        "Sorry to hear that — let's move fast. Our emergency team aims to reach you within 60–90 minutes, 24/7. Emergency call-outs start from £95 with no hidden extras.\n\nTell me what service you need below, or tap \"Request Call-Out\" and we'll phone you straight back.",
      startsBooking: true,
    },
    {
      keywords: ["quote", "price", "cost", "how much", "charge", "estimate"],
      response:
        "Here's our honest pricing:\n\n· Standard call-out — from £65\n· Emergency call-out (24/7) — from £95\n· Deep cleaning — from £80\n· Building & renovation — free site survey, fixed written quote\n\nAll quotes are fixed before we start. Want me to arrange a visit?",
    },
    {
      keywords: ["plumb", "tap", "boiler", "toilet", "pipe", "sink", "water"],
      response:
        "Our Gas-Safe registered plumbers handle leaks, taps, toilets, radiators and full bathroom installs. Standard visits from £65, fixed quote before any work begins. Shall I book a plumber for you?",
    },
    {
      keywords: ["electr", "light", "socket", "fuse", "wiring", "power"],
      response:
        "Our NICEIC-certified electricians cover faults, rewires, sockets, lighting, fuse boards and EV chargers. From £70 with certification included. Want me to arrange a visit?",
    },
    {
      keywords: ["build", "extension", "renovation", "loft", "kitchen fit", "refurb"],
      response:
        "For building work we start with a free site survey, then give you a fixed written quote and a clear timeline — extensions, lofts, kitchens and full refurbs. Fancy booking your free survey?",
    },
    {
      keywords: ["clean", "tenancy", "carpet", "deep clean"],
      response:
        "Our cleaning team does one-off deep cleans (from £80), end-of-tenancy cleans with deposit-back guarantee (from £150), and regular weekly visits. Shall I get you booked in?",
    },
    {
      keywords: ["area", "cover", "where", "location", "postcode", "far"],
      response:
        "We cover all of Meadowbrook and a 15-mile radius — including Northfield, Ashcombe and the villages. Pop your postcode in and I'll confirm, or just tell me what you need!",
    },
    {
      keywords: ["book", "visit", "arrange", "schedule", "appointment", "come"],
      response: "Let's sort it. Which service do you need? Tap below or type it.",
      startsBooking: true,
    },
    {
      keywords: ["hour", "open", "when"],
      response:
        "Standard visits run Mon–Sat, 8am–6pm — and our emergency line is open 24 hours, 7 days a week. Need something sorted today?",
    },
    {
      keywords: ["hello", "hi", "hey"],
      response:
        "Hello! I can arrange emergency call-outs, free quotes or standard visits for plumbing, electrics, building and cleaning. What do you need?",
    },
    {
      keywords: ["thank"],
      response: "Anytime! That's what we're here for. Anything else on the to-do list?",
    },
  ],
  fallback:
    "No problem — I can help with emergency call-outs, quotes, our services and coverage areas. Or type \"book\" and I'll arrange a visit. What's on your mind?",
};

const trades: DemoConfig = {
  slug: "trades",
  category: "Trades & Home Services",
  audience: "Plumbers, electricians, builders, cleaners, handymen",
  theme: "light",
  accent: "#e07b2e",
  accentSoft: "rgba(224,123,46,0.12)",
  brand: "FixRight",
  monogram: "FR",
  tagline: "Home Services",
  heroImage: "/images/trades-hero.webp",
  heroBadge: "24/7 Emergency Line · 4.9★ Rated",
  heroHeadline: "Fixed Right.",
  heroHeadlineAccent: "First Time.",
  heroSub:
    "Plumbing, electrics, building and cleaning — certified local tradespeople, fixed quotes, and a 60-minute emergency response.",
  stats: [
    { n: "60min", l: "Emergency Response" },
    { n: "2,400+", l: "Jobs Completed" },
    { n: "12mo", l: "Work Guarantee" },
  ],
  servicesTitle: "Services & Honest Pricing",
  servicesSub: "Every job gets a fixed quote before we start — no surprises, no hidden extras.",
  services: [
    { name: "Plumbing", desc: "Leaks, taps, toilets, radiators, boilers and full bathroom installs.", price: "from £65" },
    { name: "Electrical", desc: "Faults, rewires, sockets, lighting, fuse boards and EV chargers.", price: "from £70" },
    { name: "Building & Renovation", desc: "Extensions, lofts, kitchens and full refurbishments, project-managed.", price: "free survey" },
    { name: "Deep Cleaning", desc: "One-off deep cleans and end-of-tenancy with deposit-back guarantee.", price: "from £80" },
    { name: "Emergency Call-Out", desc: "24/7 rapid response for leaks, power failures and urgent repairs.", price: "from £95" },
    { name: "Handyman Day Rate", desc: "A full day of odd jobs, flat-packs, repairs and finishing touches.", price: "from £180" },
  ],
  features: [
    { icon: BadgeCheck, title: "Fully Certified", text: "Gas-Safe plumbers, NICEIC electricians and vetted, insured teams." },
    { icon: Clock, title: "On Time, Every Time", text: "We give you a one-hour arrival window — and we stick to it." },
    { icon: Truck, title: "Fixed Quotes", text: "The price we quote is the price you pay. In writing, before we start." },
  ],
  aboutTitle: "The Team Your Neighbours Call First",
  aboutText:
    "FixRight started with one van and a simple promise: turn up on time, quote honestly, and leave every home better than we found it. Eight years and 2,400 jobs later, that promise hasn't changed.",
  secondaryImage: "/images/electrician.webp",
  reviews: [
    { name: "Margaret H.", text: "Burst pipe at 11pm, plumber here by midnight. Calm, tidy and the price matched the quote exactly. Incredible." },
    { name: "Jay P.", text: "Used the website chat at 7am, electrician arrived at 10am. Fuse board sorted and certified the same day." },
    { name: "The Okafors", text: "Full kitchen renovation, finished two days early. The cleanest builders we've ever had in the house." },
  ],
  contact: {
    phone: "020 7946 0487",
    email: "bookings@fixright-demo.co.uk",
    address: "Unit 3, Forge Business Park, Meadowbrook, MB1 8TR",
    hours: "Mon–Sat 8am–6pm · Emergencies 24/7",
    note: "Covering Meadowbrook + 15 miles · Free quotes on all work",
  },
  bot: tradesBot,
};

/* =====================================================
   3. RESTAURANT & CAFÉ — "Ember & Oak Kitchen"
   ===================================================== */

const restaurantBot: BotConfig = {
  botName: "Ember — AI Host",
  accent: "#b6542f",
  accentText: "#fff8f0",
  greeting:
    "Good evening! I'm Ember, Ember & Oak's demo AI host (this whole site is a demonstration by Urban Edge Designs). Ask me about the menu, dietary options or today's specials — or say \"book a table\" and I'll find you the perfect spot.",
  quickReplies: ["Book a table", "See the menu", "Dietary options", "Opening hours"],
  bookingWord: "table",
  services: [
    {
      name: "Lunch Table",
      options: [
        { label: "2 guests", price: "12–3pm" },
        { label: "4 guests", price: "12–3pm" },
        { label: "6+ guests", price: "12–3pm" },
      ],
    },
    {
      name: "Dinner Table",
      options: [
        { label: "2 guests", price: "5:30–10pm" },
        { label: "4 guests", price: "5:30–10pm" },
        { label: "6+ guests", price: "5:30–10pm" },
      ],
    },
    {
      name: "Chef's Tasting Menu",
      options: [
        { label: "2 guests · £65pp", price: "£65pp" },
        { label: "4 guests · £65pp", price: "£65pp" },
      ],
    },
    {
      name: "Sunday Roast",
      options: [
        { label: "2 guests", price: "12–5pm" },
        { label: "Family table (4–6)", price: "12–5pm" },
      ],
    },
  ],
  confirmNote:
    "Tap \"Confirm by Phone\" below and we'll hold your table — we keep every booking for 15 minutes past the reserved time.",
  intents: [
    {
      keywords: ["menu", "food", "eat", "dish", "special", "serve"],
      response:
        "A few guest favourites from our seasonal menu:\n\n· Wood-fired sea bass, herb oil — £24\n· Slow-braised lamb shoulder — £22\n· Wild mushroom risotto (v) — £17\n· Burnt Basque cheesecake — £8\n\nOur full menu changes with the seasons. Fancy the Chef's Tasting Menu? It's £65pp with wine pairings available.",
    },
    {
      keywords: ["vegan", "vegetarian", "gluten", "allerg", "dietary", "dairy", "halal"],
      response:
        "We look after every guest — we always have dedicated vegan and vegetarian dishes, most plates can be made gluten-free, and our team is fully trained on all 14 major allergens. Just mention any dietary needs when booking and the kitchen will prepare. Shall I reserve your table?",
    },
    {
      keywords: ["book", "table", "reserve", "reservation", "seat"],
      response: "Lovely! What kind of table are you after? Tap below or tell me.",
      startsBooking: true,
    },
    {
      keywords: ["hour", "open", "close", "when", "time"],
      response:
        "We're open Tuesday to Sunday: lunch 12–3pm and dinner 5:30–10pm, with our famous Sunday roast served 12–5pm. Closed Mondays — even chefs need a rest! Shall I book you in?",
    },
    {
      keywords: ["where", "location", "address", "park", "find", "direction"],
      response:
        "We're at 7 Church Street in the old village square, Meadowbrook, MB3 2LQ. There's a car park behind the square and we're 5 minutes from the station. See you soon?",
    },
    {
      keywords: ["price", "cost", "expensive", "much"],
      response:
        "Mains range from £15–£26, Sunday roasts from £16, and the Chef's Tasting Menu is £65 per person. Great wine starts at £6 a glass. Honest prices for proper cooking — shall I book a table?",
    },
    {
      keywords: ["private", "party", "event", "birthday", "celebration", "group"],
      response:
        "Our Oak Room seats up to 20 for private dining — birthdays, anniversaries and work dos, with set menus from £32pp. Tell me the occasion and I'll have our events manager call you back with options!",
    },
    {
      keywords: ["coffee", "brunch", "breakfast", "cake", "cafe"],
      response:
        "Our café counter opens at 9am Tuesday–Sunday for specialty coffee, fresh pastries and brunch plates until 11:30am. No booking needed — just wander in!",
    },
    {
      keywords: ["hello", "hi", "hey"],
      response:
        "Hello! I can show you the menu, handle dietary questions or book your table. What can I do for you?",
    },
    {
      keywords: ["thank"],
      response: "It's a pleasure! We look forward to feeding you. Anything else?",
    },
  ],
  fallback:
    "Happy to help with the menu, dietary options, opening hours or a table booking. What would you like to know?",
};

const restaurant: DemoConfig = {
  slug: "restaurant",
  category: "Restaurant & Café",
  audience: "Restaurants, cafés, bistros, takeaways, bakeries",
  theme: "light",
  accent: "#b6542f",
  accentSoft: "rgba(182,84,47,0.1)",
  brand: "Ember & Oak",
  monogram: "EO",
  tagline: "Kitchen & Café",
  heroImage: "/images/restaurant-hero.webp",
  heroBadge: "Seasonal Menu · Wood-Fired",
  heroHeadline: "Fire, Flavour",
  heroHeadlineAccent: "& Long Evenings",
  heroSub:
    "A village bistro where seasonal British produce meets the wood-fired grill. Lunch, dinner, Sunday roasts and a café counter from 9am.",
  stats: [
    { n: "4.8★", l: "900+ Reviews" },
    { n: "20", l: "Seasonal Dishes" },
    { n: "9am", l: "Café From" },
  ],
  servicesTitle: "From the Wood-Fired Grill",
  servicesSub: "Our menu follows the seasons — these are the plates guests come back for.",
  services: [
    { name: "Wood-Fired Sea Bass", desc: "Charred lemon, samphire, brown butter and herb oil.", price: "£24" },
    { name: "Slow-Braised Lamb Shoulder", desc: "Eight hours low and slow, smoked mash, red wine jus.", price: "£22" },
    { name: "Wild Mushroom Risotto", desc: "Aged parmesan, truffle oil, crispy sage. Vegetarian.", price: "£17" },
    { name: "Dry-Aged Sirloin", desc: "28-day aged, triple-cooked chips, bone marrow butter.", price: "£26" },
    { name: "Sunday Roast", desc: "Roast beef or nut roast, all the trimmings, proper gravy.", price: "from £16" },
    { name: "Burnt Basque Cheesecake", desc: "Caramelised top, vanilla cream — save room for it.", price: "£8" },
  ],
  features: [
    { icon: UtensilsCrossed, title: "Seasonal & Local", text: "Menus rewritten every eight weeks around the best local produce." },
    { icon: LeafyGreen, title: "Every Diet Welcome", text: "Dedicated vegan dishes, gluten-free options and full allergen care." },
    { icon: Wine, title: "The Oak Room", text: "Private dining for up to 20 — celebrations, set menus from £32pp." },
  ],
  aboutTitle: "A Bistro Built Around the Fire",
  aboutText:
    "Everything at Ember & Oak passes through the oak-fired grill — from morning sourdough to the last steak of the evening. Come for a quick coffee, stay for a long dinner.",
  secondaryImage: "/images/dish.webp",
  reviews: [
    { name: "Sophie & Dan", text: "Booked through the website chat in seconds. The sea bass was the best thing we've eaten all year." },
    { name: "Marcus L.", text: "Coeliac and usually nervous eating out — the team knew exactly what was safe. Felt completely looked after." },
    { name: "Gran's 80th", text: "Hired the Oak Room for 18 of us. Set menu, wine, candles — they made it feel like a family dinner, not a function." },
  ],
  contact: {
    phone: "020 7946 0554",
    email: "tables@emberandoak-demo.co.uk",
    address: "7 Church Street, Village Square, Meadowbrook, MB3 2LQ",
    hours: "Tue–Sun · Lunch 12–3pm · Dinner 5:30–10pm",
    note: "Café counter from 9am · Car park behind the square",
  },
  bot: restaurantBot,
};

/* =====================================================
   4. DENTAL — "Brightwell Dental Studio"
   ===================================================== */

const dentalBot: BotConfig = {
  botName: "Bright — AI Care Assistant",
  accent: "#2f7d6d",
  accentText: "#ffffff",
  greeting:
    "Hello! I'm Bright, Brightwell's demo AI care assistant (this whole site is a demonstration by Urban Edge Designs). I can explain treatments and prices, help nervous patients feel at ease, or book your appointment — how can I help today?",
  quickReplies: ["Book an appointment", "Treatment prices", "I'm a nervous patient", "NHS or private?"],
  bookingWord: "appointment",
  services: [
    {
      name: "New Patient Exam & Hygiene",
      options: [
        { label: "Exam + clean · £85", price: "£85" },
        { label: "Exam only · £55", price: "£55" },
      ],
    },
    {
      name: "Teeth Whitening",
      options: [
        { label: "Home kit · £249", price: "£249" },
        { label: "In-chair · £399", price: "£399" },
      ],
    },
    {
      name: "Invisalign Consultation",
      options: [
        { label: "Free 3D scan consult", price: "Free" },
      ],
    },
    {
      name: "Emergency Appointment",
      options: [
        { label: "Same-day slot · £95", price: "£95" },
      ],
    },
  ],
  confirmNote:
    "Tap \"Call to Confirm\" below — our reception team will find you the soonest slot and answer any final questions.",
  intents: [
    {
      keywords: ["nervous", "scared", "anxious", "fear", "afraid", "phobia", "worried"],
      response:
        "You're not alone — around half our new patients felt exactly the same on their first visit. Here's our promise:\n\n· We explain everything before we do anything\n· You can stop treatment at any moment, hand-signal agreed first\n· Numbing gel before every injection, always\n· Sedation options for very anxious patients\n\nYour first visit can be just a chat and a look — no treatment at all. Shall I book you a gentle first exam?",
    },
    {
      keywords: ["price", "cost", "much", "fee", "charge"],
      response:
        "Here's our transparent price guide:\n\n· New patient exam — £55\n· Exam + hygienist clean — £85\n· Teeth whitening — from £249\n· White fillings — from £120\n· Invisalign — from £2,800 (free consult first)\n\n0% finance available on treatments over £500. Would you like to book?",
    },
    {
      keywords: ["whiten", "white", "stain", "yellow"],
      response:
        "Our most popular option is the professional home whitening kit (£249) — custom trays, dentist-grade gel, results in about two weeks. In-chair whitening (£399) brightens in a single 90-minute visit. Fancy a whitening consult?",
    },
    {
      keywords: ["invisalign", "straight", "brace", "aligner", "crooked"],
      response:
        "Invisalign starts with a free consultation and 3D scan — you'll see your future smile on screen before deciding anything. Treatment typically runs 6–14 months, from £2,800 with 0% finance. Shall I book your free scan?",
    },
    {
      keywords: ["emergency", "pain", "toothache", "broken", "chipped", "swelling", "hurt"],
      response:
        "I'm sorry you're in pain — we hold same-day emergency slots every weekday (£95 including assessment and X-rays). Please call us as soon as we open at 8:30am, or tap below and I'll flag it to reception right away.",
      startsBooking: true,
    },
    {
      keywords: ["nhs", "private", "insurance"],
      response:
        "Brightwell is a private studio, which means no waiting lists and longer, unhurried appointments. We accept all major dental insurance plans and offer membership from £14/month covering exams, hygiene visits and 10% off treatment. Want me to explain membership?",
    },
    {
      keywords: ["book", "appointment", "register", "new patient", "check"],
      response: "Of course! What do you need? Tap below or type it.",
      startsBooking: true,
    },
    {
      keywords: ["hour", "open", "when", "saturday"],
      response:
        "We're open Monday–Friday 8:30am–6pm, plus Saturdays 9am–2pm for hygiene and emergencies. Evening slots until 7pm on Thursdays. Shall I find you a convenient time?",
    },
    {
      keywords: ["where", "location", "address", "park"],
      response:
        "We're at 22 Brightwell Parade, Meadowbrook, MB4 7HN — step-free access throughout and patient parking right outside. Easy to reach, easier to relax in!",
    },
    {
      keywords: ["child", "kid", "family", "children", "baby"],
      response:
        "We love little patients! Children's check-ups are £35, and under-5s are free when a parent is registered. Our gentle, no-rush approach makes first visits fun — most kids ask when they can come back!",
    },
    {
      keywords: ["hello", "hi", "hey"],
      response:
        "Hello! I can help with treatment prices, nervous patient care, or booking an appointment. What can I do for you?",
    },
    {
      keywords: ["thank"],
      response: "Very welcome! Here's to a healthy, confident smile. Anything else I can help with?",
    },
  ],
  fallback:
    "I can help with treatments and prices, booking appointments, nervous patient support or directions. What would you like to know?",
};

const dental: DemoConfig = {
  slug: "dental",
  category: "Dentist & Clinics",
  audience: "Dentists, physios, aesthetics, private clinics, opticians",
  theme: "light",
  accent: "#2f7d6d",
  accentSoft: "rgba(47,125,109,0.1)",
  brand: "Brightwell",
  monogram: "BW",
  tagline: "Dental Studio",
  heroImage: "/images/dental-hero.webp",
  heroBadge: "GDC Registered · 0% Finance",
  heroHeadline: "Dentistry That",
  heroHeadlineAccent: "Feels Different",
  heroSub:
    "A calm, modern private dental studio — unhurried appointments, transparent prices and a team that specialises in nervous patients.",
  stats: [
    { n: "5.0★", l: "400+ Reviews" },
    { n: "98%", l: "Would Recommend" },
    { n: "£14", l: "Membership From" },
  ],
  servicesTitle: "Treatments & Transparent Prices",
  servicesSub: "No surprises, no jargon — just honest pricing and gentle, expert care.",
  services: [
    { name: "New Patient Exam", desc: "Full assessment, X-rays and a personal treatment plan.", price: "£55" },
    { name: "Hygiene & Polish", desc: "Deep clean, stain removal and gum health check.", price: "from £65" },
    { name: "Teeth Whitening", desc: "Dentist-grade home kits or single-visit in-chair whitening.", price: "from £249" },
    { name: "Invisalign", desc: "Clear aligners with a free 3D smile-scan consultation first.", price: "from £2,800" },
    { name: "White Fillings & Crowns", desc: "Invisible, durable restorations matched to your smile.", price: "from £120" },
    { name: "Same-Day Emergency", desc: "Slots held every weekday for pain, chips and swelling.", price: "£95" },
  ],
  features: [
    { icon: Smile, title: "Nervous Patient Experts", text: "Stop-signals, numbing gel and chat-only first visits. You set the pace." },
    { icon: Stethoscope, title: "Unhurried Care", text: "30-minute appointments as standard — we never double-book." },
    { icon: Baby, title: "Family Friendly", text: "Under-5s free with a registered parent. Kids genuinely love us." },
  ],
  aboutTitle: "A Studio Designed Around Calm",
  aboutText:
    "Soft light, warm blankets, noise-cancelling headphones and dentists who explain everything twice. Brightwell was built for people who used to dread the dentist — and don't anymore.",
  secondaryImage: "/images/dental-care.webp",
  reviews: [
    { name: "Hannah D.", text: "I avoided dentists for 9 years. The team let me just talk on my first visit — six months later I've finished all my treatment, fear-free." },
    { name: "Ade O.", text: "Booked a same-day emergency slot through the website chat at 8:35am, seen by 10am. Broken crown fixed by lunch." },
    { name: "The Kellys", text: "All four of us registered, kids included. Membership makes it so affordable, and the studio feels more like a spa." },
  ],
  contact: {
    phone: "020 7946 0613",
    email: "smile@brightwell-demo.co.uk",
    address: "22 Brightwell Parade, Meadowbrook, MB4 7HN",
    hours: "Mon–Fri 8:30am–6pm · Sat 9am–2pm",
    note: "Step-free access · Patient parking outside",
  },
  bot: dentalBot,
};

export const DEMOS: DemoConfig[] = [spa, trades, restaurant, dental];

/** Crawlable demo routes used across the site and sitemap. */
export const DEMO_ROUTES: Record<string, string> = {
  spa: "/demos/spa-salon",
  trades: "/demos/trades-home-services",
  restaurant: "/demos/restaurant-cafe",
  dental: "/demos/dental-clinic",
};

export const AGENCY = {
  name: "Urban Edge Designs",
  tagline: "Smart Websites. Smarter Business.",
  phone: "07454 291587",
  phoneIntl: "+447454291587",
  whatsapp: "447454291587",
  email: "urbanedgedesigns88@gmail.com",
  domain: "urban-edge-designs.com",
};

export const WHATSAPP_DEFAULT_MSG =
  "Hello Urban Edge Designs, I'm interested in a website or AI chatbot for my business. Please tell me what information you need.";

export const waLink = (message: string = WHATSAPP_DEFAULT_MSG) =>
  `https://wa.me/${AGENCY.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:${AGENCY.phoneIntl}`;
export const mailLink = `mailto:${AGENCY.email}`;
