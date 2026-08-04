import { motion } from "framer-motion";
import { Check, ShieldCheck, Phone, Mail } from "lucide-react";
import { AGENCY, telLink, mailLink } from "@/data/demos";
import { trackEvent } from "@/lib/analytics";

function selectPackage(pkg: string) {
  window.dispatchEvent(new CustomEvent("select-package", { detail: pkg }));
}

const PLANS = [
  {
    name: "Starter",
    price: 99,
    blurb: "AI chatbot for your existing website",
    features: [
      "Trained on your services & FAQs",
      "Basic lead collection",
      "1 round of revisions",
      "3–5 working days",
    ],
    monthly: "Chatbot Management · from £29/month",
    popular: false,
  },
  {
    name: "Standard",
    price: 249,
    blurb: "Professional website + AI chatbot",
    features: [
      "4–5 page mobile-friendly website",
      "Contact form & Google Maps",
      "Basic on-page SEO",
      "2 rounds of revisions",
      "5–7 working days",
    ],
    monthly: "Care Plan · from £39/month",
    popular: true,
  },
  {
    name: "Premium",
    price: 499,
    blurb: "Complete business website package",
    features: [
      "Up to 7 pages",
      "Booking or reservation system",
      "Advanced chatbot & lead capture",
      "Enhanced SEO setup",
      "30 days of support",
    ],
    monthly: "Growth Plan · from £49/month",
    popular: false,
  },
];

export default function AgencyPricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-[#c05a2e]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c05a2e]">Simple, Honest Pricing</span>
            <div className="h-px w-12 bg-[#c05a2e]" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-[#1c1a15]">
            Pick Your <span className="italic terra-gradient-text">Package</span>
          </h2>
          <p className="mt-5 text-[#1c1a15]/60 font-light">
            One-time setup prices — no hidden costs, no surprises. Monthly plans below are
            optional extras. Domain, hosting and paid third-party services are charged
            separately, and custom requirements may adjust the final quote.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                p.popular
                  ? "bg-[#122e24] text-[#f6f1e7] lg:-my-4 lg:py-12 shadow-2xl"
                  : "card-cream text-[#1c1a15]"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#c05a2e] text-[#fff8f0] text-[11px] tracking-[0.25em] uppercase px-5 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xs tracking-[0.3em] uppercase text-center opacity-80">{p.name}</h3>
              <div className="text-center mt-4">
                <span className={`font-display text-6xl ${p.popular ? "text-[#f6f1e7]" : "text-[#c05a2e]"}`}>
                  £{p.price}
                </span>
                <div className={`text-sm font-light mt-1 ${p.popular ? "text-[#f6f1e7]/60" : "text-[#1c1a15]/50"}`}>
                  one-time setup
                </div>
              </div>
              <p className={`text-center font-display italic text-lg mt-4 ${p.popular ? "text-[#f6f1e7]" : "text-[#1c1a15]"}`}>
                {p.blurb}
              </p>
              <div className={`my-6 h-px ${p.popular ? "bg-[#d9734a]/40" : "bg-[#1c1a15]/10"}`} />
              <ul className="space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm font-light items-start">
                    <Check size={16} className={`shrink-0 mt-0.5 ${p.popular ? "text-[#d9734a]" : "text-[#122e24]"}`} />
                    <span className={p.popular ? "text-[#f6f1e7]/80" : "text-[#1c1a15]/70"}>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => selectPackage(`${p.name} — £${p.price}`)}
                className={`mt-8 text-center rounded-full py-3.5 font-medium tracking-wide min-h-[48px] ${
                  p.popular ? "btn-terra" : "btn-green"
                }`}
                aria-label={`Get started with the ${p.name} package at £${p.price}`}
              >
                Get Started — Free Quote
              </button>
              <div
                className={`mt-4 text-center text-[11px] tracking-[0.15em] uppercase rounded-full py-2.5 px-3 ${
                  p.popular ? "bg-[#f6f1e7]/10 text-[#f6f1e7]/80" : "bg-[#122e24]/[0.06] text-[#1c1a15]/60"
                }`}
              >
                {p.monthly}
              </div>
            </motion.div>
          ))}
        </div>

        {/* trust banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-3xl border-2 border-[#c05a2e]/60 p-7 md:p-8 flex flex-col md:flex-row items-center gap-6"
        >
          <div className="w-16 h-16 rounded-full bg-[#c05a2e] flex items-center justify-center shrink-0">
            <ShieldCheck size={30} className="text-[#fff8f0]" />
          </div>
          <div className="text-center md:text-left">
            <div className="font-display text-xl md:text-2xl text-[#1c1a15] tracking-wide">
              50% to start · 50% after demo approval
            </div>
            <p className="text-sm font-light text-[#1c1a15]/55 mt-1.5">
              Domain, hosting and paid third-party software are charged separately.
              Prices may vary for custom requirements.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-[#1c1a15]">
          <a
            href={telLink}
            onClick={() => trackEvent("phone_click", { location: "pricing" })}
            className="flex items-center gap-2.5 font-display text-2xl hover:text-[#c05a2e] transition-colors"
          >
            <span className="w-10 h-10 rounded-full bg-[#122e24] flex items-center justify-center" aria-hidden="true">
              <Phone size={17} className="text-[#f6f1e7]" />
            </span>
            {AGENCY.phone}
          </a>
          <a
            href={mailLink}
            onClick={() => trackEvent("email_click", { location: "pricing" })}
            className="flex items-center gap-2.5 text-lg hover:text-[#c05a2e] transition-colors"
          >
            <span className="w-10 h-10 rounded-full bg-[#122e24] flex items-center justify-center" aria-hidden="true">
              <Mail size={17} className="text-[#f6f1e7]" />
            </span>
            {AGENCY.email}
          </a>
        </div>
      </div>
    </section>
  );
}
