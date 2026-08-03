/**
 * Consent-gated Google Analytics.
 * GA (G-MX1K24JJSK) is only loaded AFTER the user accepts analytics cookies.
 * No names, emails, phone numbers or message contents are ever tracked.
 */

const GA_ID = "G-MX1K24JJSK";
const CONSENT_KEY = "ue_cookie_consent";

export type ConsentChoice = "accepted" | "rejected" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function getConsent(): ConsentChoice {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "accepted" || v === "rejected" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(choice: Exclude<ConsentChoice, null>) {
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    /* storage unavailable — consent applies to this session only */
  }
  if (choice === "accepted") loadAnalytics();
}

function loadAnalytics() {
  if (document.getElementById("ue-ga-script")) return;
  const s = document.createElement("script");
  s.id = "ue-ga-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true });
}

/** Initialise on load: if consent was previously accepted, load GA right away. */
export function initAnalytics() {
  if (getConsent() === "accepted") loadAnalytics();
}

export type TrackEvent =
  | "demo_view"
  | "chatbot_open"
  | "chatbot_message"
  | "package_select"
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "quote_form_start"
  | "quote_form_submit";

/**
 * Non-personal context attached to every event: page path, traffic source
 * (referring host) and campaign (utm_campaign). Never includes any PII.
 */
function baseParams(): Record<string, string> {
  const p: Record<string, string> = { page_path: window.location.pathname };
  try {
    if (document.referrer) p.traffic_source = new URL(document.referrer).hostname;
    else p.traffic_source = "direct";
  } catch {
    p.traffic_source = "direct";
  }
  const campaign = new URLSearchParams(window.location.search).get("utm_campaign");
  if (campaign) p.campaign = campaign;
  return p;
}

/** Fires only when analytics consent has been given. Never pass personal data. */
export function trackEvent(event: TrackEvent, params?: Record<string, string>) {
  if (getConsent() !== "accepted" || typeof window.gtag !== "function") return;
  window.gtag("event", event, { ...baseParams(), ...params });
}
