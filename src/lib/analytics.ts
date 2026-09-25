/**
 * Consent-gated Google Analytics.
 * GA4 (VITE_GA_MEASUREMENT_ID) is only loaded AFTER the user accepts analytics cookies.
 * No names, emails, phone numbers, or message contents are ever tracked.
 */

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-8F1TR8INLK";
export const CONSENT_KEY = "ued_cookie_consent";

export type ConsentChoice = "accepted" | "rejected" | "essential_only" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function getConsent(): ConsentChoice {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "accepted" || v === "rejected" || v === "essential_only" ? (v as ConsentChoice) : null;
  } catch {
    return null;
  }
}

export function setConsent(choice: Exclude<ConsentChoice, null>) {
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    /* storage unavailable */
  }
  if (choice === "accepted") {
    loadAnalytics();
  }
}

function loadAnalytics() {
  if (!GA_ID || document.getElementById("ued-ga-script")) return;
  const s = document.createElement("script");
  s.id = "ued-ga-script";
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

/** Track SPA navigation as page views after consent. */
export function trackPageView(path: string, title?: string) {
  if (getConsent() !== "accepted" || typeof window.gtag !== "function" || !GA_ID) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });
}

export type TrackEvent =
  | "article_view"
  | "shop_look_view"
  | "affiliate_click"
  | "category_select"
  | "search_perform"
  | "newsletter_submit"
  | "contact_form_submit";

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
  if (getConsent() !== "accepted" || typeof window.gtag !== "function" || !GA_ID) return;
  window.gtag("event", event, { ...baseParams(), ...params });
}
