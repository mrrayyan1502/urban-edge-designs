import { Phone, Mail, Globe } from "lucide-react";
import { Link } from "react-router";
import { AGENCY, waLink, telLink, mailLink } from "@/data/demos";
import { trackEvent } from "@/lib/analytics";
import { SiWhatsapp } from "@/components/icons";

const SERVICE_LINKS = [
  { label: "Live Demos", to: "/#demos" },
  { label: "Services", to: "/#services" },
  { label: "Pricing", to: "/#pricing" },
  { label: "Process", to: "/#process" },
  { label: "FAQ", to: "/#faq" },
  { label: "Free Quote", to: "/#quote" },
];

const DEMO_LINKS = [
  { label: "Salon, Spa & Massage", to: "/demos/spa-salon" },
  { label: "Trades & Home Services", to: "/demos/trades-home-services" },
  { label: "Restaurant & Café", to: "/demos/restaurant-cafe" },
  { label: "Dentist & Clinics", to: "/demos/dental-clinic" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms-of-service" },
  { label: "Cookie Policy", to: "/cookie-policy" },
  { label: "Refund & Cancellation", to: "/refund-policy" },
];

export default function AgencyFooter() {
  return (
    <footer id="contact" className="bg-[#122e24] text-[#f6f1e7]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center pb-16 border-b border-[#f6f1e7]/10">
          <div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Ready to Make Your Business
              <span className="italic text-[#d9734a]"> Look Unforgettable?</span>
            </h2>
            <p className="mt-5 text-[#f6f1e7]/60 font-light max-w-lg">
              Tell us about your business today — and see a working demo of your new
              website with its AI chatbot within days, not months.
            </p>
          </div>
          <div className="space-y-4 lg:justify-self-end w-full max-w-md">
            <a
              href={telLink}
              onClick={() => trackEvent("phone_click", { location: "footer" })}
              className="flex items-center gap-4 rounded-2xl border border-[#f6f1e7]/15 bg-[#f6f1e7]/[0.04] px-6 py-5 hover:border-[#d9734a]/60 transition-colors"
            >
              <span className="w-11 h-11 rounded-full bg-[#c05a2e] flex items-center justify-center shrink-0" aria-hidden="true">
                <Phone size={18} />
              </span>
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-[#f6f1e7]/50">Call Us</div>
                <div className="font-display text-xl">{AGENCY.phone}</div>
              </div>
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "footer" })}
              className="flex items-center gap-4 rounded-2xl border border-[#f6f1e7]/15 bg-[#f6f1e7]/[0.04] px-6 py-5 hover:border-[#d9734a]/60 transition-colors"
            >
              <span className="w-11 h-11 rounded-full bg-[#c05a2e] flex items-center justify-center shrink-0" aria-hidden="true">
                <SiWhatsapp size={18} />
              </span>
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-[#f6f1e7]/50">WhatsApp Us</div>
                <div className="font-display text-xl">Message Anytime</div>
              </div>
            </a>
            <a
              href={mailLink}
              onClick={() => trackEvent("email_click", { location: "footer" })}
              className="flex items-center gap-4 rounded-2xl border border-[#f6f1e7]/15 bg-[#f6f1e7]/[0.04] px-6 py-5 hover:border-[#d9734a]/60 transition-colors"
            >
              <span className="w-11 h-11 rounded-full bg-[#c05a2e] flex items-center justify-center shrink-0" aria-hidden="true">
                <Mail size={18} />
              </span>
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-[#f6f1e7]/50">Email Us</div>
                <div className="font-display text-base break-all">{AGENCY.email}</div>
              </div>
            </a>
          </div>
        </div>

        <nav className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14" aria-label="Footer navigation">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#f6f1e7]/10 flex items-center justify-center relative" aria-hidden="true">
                <span className="font-display text-xs font-semibold">UE</span>
                <span className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-[#c05a2e]" />
              </div>
              <div className="font-display">
                Urban Edge <span className="italic text-[#d9734a]">Designs</span>
              </div>
            </div>
            <p className="mt-4 text-sm font-light text-[#f6f1e7]/50 leading-relaxed">
              Professional, mobile-friendly websites with smart AI chatbots for UK
              small businesses. Smart websites. Smarter business.
            </p>
            <p className="mt-4 text-xs font-light text-[#f6f1e7]/35 flex items-center gap-1.5">
              <Globe size={12} aria-hidden="true" /> Main brand domain: {AGENCY.domain}
            </p>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-[#d9734a]">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICE_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.to} className="text-sm font-light text-[#f6f1e7]/60 hover:text-[#f6f1e7] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-[#d9734a]">Live Demos</h3>
            <ul className="mt-4 space-y-2.5">
              {DEMO_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm font-light text-[#f6f1e7]/60 hover:text-[#f6f1e7] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.3em] uppercase text-[#d9734a]">Legal</h3>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm font-light text-[#f6f1e7]/60 hover:text-[#f6f1e7] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="pt-8 border-t border-[#f6f1e7]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#f6f1e7]/40 tracking-widest uppercase">
            © {new Date().getFullYear()} {AGENCY.name} · All rights reserved
          </div>
          <div className="text-[11px] text-[#f6f1e7]/30 font-light text-center md:text-right max-w-lg">
            Information on this website is provided for general business purposes and
            does not constitute legal, financial or professional advice.
          </div>
        </div>
      </div>
    </footer>
  );
}
