import type { BotConfig } from "@/data/demos";

/* ============================================================
   Conversation-state engine for the four fictional demo chatbots.
   All enquiry data is temporary (component state) — nothing is
   sent, saved or confirmed. No real booking is ever arranged.
   ============================================================ */

export interface Enquiry {
  serviceIdx: number | null;
  optionIdx: number | null;
  name: string | null;
  datetime: string | null;
  contact: string | null;
}

export type Stage =
  | "idle"
  | "service"
  | "option"
  | "name"
  | "datetime"
  | "contact"
  | "review";

export interface EngineState {
  stage: Stage;
  data: Enquiry;
}

export const EMPTY_ENQUIRY: Enquiry = {
  serviceIdx: null,
  optionIdx: null,
  name: null,
  datetime: null,
  contact: null,
};

/* ---------------- text normalisation + typo tolerance ---------------- */

const TYPO_MAP: [RegExp, string][] = [
  [/\bgoogd\b/g, "good"],
  [/\bhelo|helllo|hlelo|hellp\b/g, "hello"],
  [/\bmornng|moring\b/g, "morning"],
  [/\baftrnoon|afternon|afternooon\b/g, "afternoon"],
  [/\bmenue|menue\b/g, "menu"],
  [/\bypu|yuo|yu\b/g, "you"],
  [/\bwhats\b/g, "what is"],
  [/\bservcies|servics|sevices|servises\b/g, "services"],
  [/\bappoinment|apointm?ent|appointmnet|appt\b/g, "appointment"],
  [/\bleakage\b/g, "leak"],
  [/\bbookng|boking|boooking\b/g, "booking"],
  [/\btabel\b/g, "table"],
  [/\bresaurant|restraunt|resturant\b/g, "restaurant"],
  [/\btretment|treatmant\b/g, "treatment"],
  [/\bprive|prcie\b/g, "price"],
  [/\bopene?ing\b/g, "opening"],
  [/\btomm?orrow|tommorow\b/g, "tomorrow"],
  [/\bthier\b/g, "their"],
  [/\bcannel\b/g, "cancel"],
];

export function normalize(raw: string): string {
  let q = ` ${raw.toLowerCase().trim()} `;
  q = q.replace(/[?!.,;:'"]+/g, " ");
  for (const [re, rep] of TYPO_MAP) q = q.replace(re, rep);
  return q.replace(/\s+/g, " ").trim();
}

/* ---------------- greeting detection ---------------- */

const GREETING_RE =
  /^(hi+|hello+|hey+|heyy+|hiya|howdy|yo|good\s+(morning|afternoon|evening|day)|morning|afternoon|evening|greetings|salam|salaam)\b/;

export function isGreeting(q: string): boolean {
  return GREETING_RE.test(q) && q.length < 40;
}

/* ---------------- cancel / restart detection ---------------- */

export function isCancel(q: string): boolean {
  return /\bcancel\b|\bnever\s*mind\b|\bforget\s*(it|this)\b|\bstop\b|\babort\b|\bno\s*thanks?\b/.test(q);
}
export function isRestart(q: string): boolean {
  return /\bstart\s*(again|over)\b|\brestart\b|\bbegin\s*again\b|\breset\b|\bstart\s*from\s*(the\s*)?(start|beginning)\b/.test(q);
}

/* ---------------- date/time validation ---------------- */

// clearly invalid / incomplete / vague times
const INVALID_TIME_RE =
  /\b0\s*am\b|\b0\s*pm\b|\b25\s*:|\b2[4-9]\s*(am|pm)\b|\b1[3-9]\s*(am)\b|\bat\s+\d{1,2}\s*$|^\s*at\s+\d{1,2}\s*$|\bsometime\b|\blater\b|\bsoon\b|\bwhenever\b|\bany\s*time\b/;

// a plausible, sufficiently-specific date/time expression
const VALID_TIME_RE =
  /\b(mon(day)?|tue(sday)?|wed(nesday)?|thu(rsday)?|fri(day)?|sat(urday)?|sun(day)?)\b|\btoday\b|\btomorrow\b|\btonight\b|\b\d{1,2}\s*(am|pm|a\.m\.|p\.m\.)\b|\b\d{1,2}:\d{2}\b|\b(morning|afternoon|evening|noon|midday|lunchtime|night)\b|\b\d{1,2}(st|nd|rd|th)?\s+(of\s+)?(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/;

export function isClearlyInvalidTime(q: string): boolean {
  // a bare number like "at 9" or "9" alone is not enough
  if (/^\s*(at\s+)?\d{1,2}\s*$/.test(q)) return true;
  return INVALID_TIME_RE.test(q);
}
export function isPlausibleTime(q: string): boolean {
  if (isClearlyInvalidTime(q)) return false;
  return VALID_TIME_RE.test(q) && q.length >= 3;
}

/* Extract a clean date/time value from a correction phrase.
   e.g. "i mean 9 am" → "9 am", "not tomorrow, saturday" → "saturday" */
export function extractTimeValue(q: string, raw: string): string {
  // strip leading correction phrasing (repeatedly: "sorry, make it 9 am" → "9 am")
  let s = q;
  let prev = "";
  while (prev !== s) {
    prev = s;
    s = s
      .replace(/^\s*[,.\s]*/, "")
      .replace(/^(?:i\s*mean(?:t)?|sorry|make\s*(?:that|it)|change\s*(?:it|that)\s*to|make\s*it)\b\s*/i, "")
      .replace(/^not\s+(?:tomorrow|that|this)\b\s*/i, "")
      .replace(/^[,.\s]+/, "");
  }
  s = s.replace(/\binstead\b/g, "").replace(/[,.\s]+$/, "").trim();
  if (!s) return raw.trim();
  return s;
}

/* ---------------- contact validation ---------------- */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[\d\s().-]{7,18}$/;

export function isValidContact(raw: string): boolean {
  const t = raw.trim();
  if (EMAIL_RE.test(t)) return true;
  // must contain enough digits to be a phone number
  const digits = t.replace(/\D/g, "");
  if (PHONE_RE.test(t) && digits.length >= 7 && digits.length <= 15) return true;
  return false;
}

/* ---------------- correction detection ---------------- */

export interface Correction {
  field: "name" | "datetime" | "contact" | "service";
  value?: string;
}

export function detectCorrection(q: string, raw: string): Correction | null {
  // name correction: "my name is actually Sarah", "actually it's Sarah", "call me Sarah"
  let m = q.match(/\b(?:my name is|it's|it is|call me|i'?m)\s+(?:actually\s+)?([a-z]{2,20})\b/);
  if (m && /\bactually|name is|call me\b/.test(q)) {
    return { field: "name", value: capitalize(m[1]) };
  }
  // service change: "change the service to X"
  m = q.match(/\bchange\s+(?:the\s+)?(?:service|treatment|table|option)\s+to\s+(.+)/);
  if (m) return { field: "service", value: m[1].trim() };
  // time correction phrases
  if (
    /\bi\s*mean(t)?\b|\bsorry,?\s*make\s*(that|it)\b|\bchange\s*(it|that)\s*to\b|\bmake\s*it\b|\binstead\b|\bi\s*meant\b|\bnot\s+tomorrow\b|\buse\s+.*instead\b/.test(q)
  ) {
    // strip the correction phrasing so the stored value is clean
    const cleaned = extractTimeValue(q, raw);
    // if it carries contact info → contact correction
    if (isValidContact(cleaned)) return { field: "contact", value: cleaned };
    // if it carries a plausible time → datetime correction
    if (isPlausibleTime(cleaned) || /\b\d{1,2}\s*(am|pm)\b/.test(cleaned)) {
      return { field: "datetime", value: cleaned };
    }
    if (/\bthat (phone|number|email)\b.*\bwrong\b|\bwrong (number|email|phone)\b/.test(q)) {
      return { field: "contact" };
    }
  }
  if (/\b(phone|number|email)\s+is\s+wrong\b|\bwrong\s+(phone|number|email)\b/.test(q)) {
    return { field: "contact" };
  }
  return null;
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/* ---------------- services list (respects business type) ---------------- */

export function servicesList(bot: BotConfig): string {
  const lines = bot.services.map(
    (s) => `· ${s.name} — ${s.options.map((o) => o.label).join(", ")}`
  );
  const tail = bot.byGuests
    ? `\n\nThese are example options. Say "book" to submit a demonstration ${bot.enquiryType}.`
    : `\n\nAsk me about any of these for more detail, or say "book" to submit a demonstration ${bot.enquiryType}.`;
  return `Here's what we offer:\n\n${lines.join("\n")}${tail}`;
}

export function menuText(bot: BotConfig): string {
  if (!bot.menu) return servicesList(bot);
  const parts = bot.menu.map((sec) => `${sec.title}:\n${sec.items}`);
  return `Here's our example menu (fictional, prices are examples):\n\n${parts.join("\n\n")}\n\nSay "book" to submit a demonstration ${bot.enquiryType}.`;
}

/* ---------------- opening-hours "today" (Europe/London) ---------------- */

export interface DayHours {
  day: number; // 0=Sun
  label: string;
}

export function todayHours(bot: BotConfig): string | null {
  // map bot to weekly hours
  const hours = getWeeklyHours(bot);
  if (!hours) return null;
  const now = new Date(
    new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })
  );
  const day = now.getDay();
  const entry = hours.find((h) => h.day === day);
  if (!entry) return null;
  if (/^closed/i.test(entry.label)) {
    const extra = entry.label.replace(/^closed\s*(today)?\s*/i, "").trim();
    return `Today (${dayName(day)}) we're closed${extra ? ` ${extra}` : ""}. (Fictional demonstration hours.)`;
  }
  return `Today (${dayName(day)}) we're open ${entry.label}. (Fictional demonstration hours.)`;
}

function dayName(d: number): string {
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d];
}

function getWeeklyHours(bot: BotConfig): DayHours[] | null {
  // Identify by botName prefix
  const n = bot.botName.toLowerCase();
  if (n.startsWith("lotus")) {
    return [
      { day: 0, label: "10am–6pm" },
      { day: 1, label: "9am–8pm" },
      { day: 2, label: "9am–8pm" },
      { day: 3, label: "9am–8pm" },
      { day: 4, label: "9am–8pm" },
      { day: 5, label: "9am–8pm" },
      { day: 6, label: "9am–8pm" },
    ];
  }
  if (n.startsWith("fixi")) {
    return [
      { day: 0, label: "emergency line only (24/7)" },
      { day: 1, label: "8am–6pm" },
      { day: 2, label: "8am–6pm" },
      { day: 3, label: "8am–6pm" },
      { day: 4, label: "8am–6pm" },
      { day: 5, label: "8am–6pm" },
      { day: 6, label: "8am–6pm" },
    ];
  }
  if (n.startsWith("ember")) {
    return [
      { day: 0, label: "12–3pm lunch, 5:30–10pm dinner (Sunday roast 12–5pm)" },
      { day: 1, label: "closed today (Mondays)" },
      { day: 2, label: "12–3pm lunch, 5:30–10pm dinner" },
      { day: 3, label: "12–3pm lunch, 5:30–10pm dinner" },
      { day: 4, label: "12–3pm lunch, 5:30–10pm dinner" },
      { day: 5, label: "12–3pm lunch, 5:30–10pm dinner" },
      { day: 6, label: "12–3pm lunch, 5:30–10pm dinner" },
    ];
  }
  if (n.startsWith("bright")) {
    return [
      { day: 0, label: "closed today (Sundays)" },
      { day: 1, label: "8:30am–6pm" },
      { day: 2, label: "8:30am–6pm" },
      { day: 3, label: "8:30am–6pm" },
      { day: 4, label: "8:30am–7pm" },
      { day: 5, label: "8:30am–6pm" },
      { day: 6, label: "9am–2pm (hygiene & emergencies)" },
    ];
  }
  return null;
}
