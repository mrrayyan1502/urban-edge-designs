import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Phone, Mail, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { AGENCY, waLink, telLink, mailLink } from "@/data/demos";
import { trackEvent } from "@/lib/analytics";
import { SiWhatsapp } from "@/components/icons";

const PACKAGES = [
  "Starter AI Chatbot — £99",
  "Standard Website + AI Chatbot — £249",
  "Premium Website + AI Chatbot — £499",
  "Website Redesign",
  "Not Sure",
];

const CONTACT_METHODS = ["WhatsApp", "Phone", "Email"];

interface FormState {
  name: string;
  business: string;
  industry: string;
  website: string;
  email: string;
  phone: string;
  pkg: string;
  services: string;
  goal: string;
  contactMethod: string;
  details: string;
  consent: boolean;
}

const EMPTY: FormState = {
  name: "",
  business: "",
  industry: "",
  website: "",
  email: "",
  phone: "",
  pkg: "",
  services: "",
  goal: "",
  contactMethod: "WhatsApp",
  details: "",
  consent: false,
};

// Pricing-plan buttons dispatch these names; map them to form package options
const PACKAGE_MAP: Record<string, string> = {
  "Starter — £99": "Starter AI Chatbot — £99",
  "Standard — £249": "Standard Website + AI Chatbot — £249",
  "Premium — £499": "Premium Website + AI Chatbot — £499",
};

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [opened, setOpened] = useState(false);
  const startedRef = useRef(false);

  // Package buttons elsewhere on the page preselect the matching package
  useEffect(() => {
    const handler = (e: Event) => {
      const pkg = (e as CustomEvent<string>).detail;
      const mapped = PACKAGE_MAP[pkg];
      if (mapped) {
        setForm((f) => ({ ...f, pkg: mapped }));
        trackEvent("package_select", { package: mapped });
        document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("select-package", handler);
    return () => window.removeEventListener("select-package", handler);
  }, []);

  const set = (k: keyof FormState, v: string | boolean) => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent("quote_form_start");
    }
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Please enter your full name.";
    if (!form.business.trim()) e.business = "Please enter your business name.";
    if (!form.industry.trim()) e.industry = "Please tell us your business type or industry.";
    if (!form.email.trim()) e.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "Please enter a valid email address.";
    if (!form.phone.trim()) e.phone = "Please enter a phone or WhatsApp number.";
    if (!form.pkg) e.pkg = "Please choose a package.";
    if (!form.services.trim()) e.services = "Please list the main services your business offers.";
    if (!form.goal.trim()) e.goal = "Please tell us what you want the website or chatbot to achieve.";
    if (form.website.trim() && !/^(https?:\/\/)?[\w-]+(\.[\w-]+)+/.test(form.website.trim()))
      e.website = "Please enter a valid website address, or leave it blank.";
    if (!form.consent) e.consent = "Please confirm you agree to the Privacy Policy.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    const message = [
      "Hello Urban Edge Designs,",
      "",
      "I would like to request a free demo.",
      "",
      `Name: ${form.name.trim()}`,
      `Business: ${form.business.trim()}`,
      `Industry: ${form.industry.trim()}`,
      `Existing Website: ${form.website.trim() || "None"}`,
      `Required Package: ${form.pkg}`,
      `Business Services: ${form.services.trim()}`,
      `Project Goal: ${form.goal.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone/WhatsApp: ${form.phone.trim()}`,
      `Preferred Contact: ${form.contactMethod}`,
      `Additional Details: ${form.details.trim() || "None"}`,
      "",
      "I understand that this is an enquiry and no work or payment is confirmed yet.",
    ].join("\n");

    trackEvent("quote_form_submit", { package: form.pkg });
    window.open(waLink(message), "_blank", "noopener,noreferrer");
    setOpened(true);
  };

  const inputCls = (bad?: string) =>
    `w-full rounded-xl border px-4 py-3 text-sm bg-white/70 text-[#1c1a15] placeholder:text-[#1c1a15]/35 focus:outline-none focus:ring-2 transition-shadow ${
      bad ? "border-red-500 focus:ring-red-300" : "border-[#1c1a15]/20 focus:ring-[#c05a2e]/40 focus:border-[#c05a2e]"
    }`;

  const labelCls = "block text-xs tracking-widest uppercase text-[#1c1a15]/60 mb-1.5";
  const errCls = "mt-1 text-xs text-red-600";

  return (
    <section id="quote" className="py-24 md:py-32 bg-[#122e24] relative overflow-hidden" aria-labelledby="quote-heading">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full border border-[#f6f1e7]/5" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-12 bg-[#d9734a]" aria-hidden="true" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#d9734a]">Free Demo &amp; Quote</span>
          </div>
          <h2 id="quote-heading" className="font-display text-4xl md:text-5xl leading-tight text-[#f6f1e7]">
            Request Your <span className="italic text-[#d9734a]">Free Demo</span>
          </h2>
          <p className="mt-5 text-[#f6f1e7]/60 font-light leading-relaxed">
            Tell us about your business and we'll come back with a plan for your website
            and AI chatbot. Submitting opens WhatsApp with your enquiry pre-filled —
            just press send, and we'll reply personally.
          </p>
          <div className="mt-6 rounded-2xl border border-[#f6f1e7]/15 bg-[#f6f1e7]/[0.04] px-5 py-4 flex items-start gap-3">
            <ShieldCheck size={20} className="text-[#d9734a] shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-[#f6f1e7]/65 font-light leading-relaxed">
              Submitting this form does not require payment. After we review your
              requirements and agree the project scope, we will privately send the
              correct secure Stripe deposit link.
            </p>
          </div>
          <p className="mt-6 text-sm text-[#f6f1e7]/45 font-light">
            Prefer to talk directly? You always can:
          </p>
          <div className="mt-4 space-y-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "quote_section" })}
              aria-label="Chat with Urban Edge Designs on WhatsApp"
              className="flex items-center gap-3 text-[#f6f1e7] hover:text-[#d9734a] transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-[#f6f1e7]/10 flex items-center justify-center shrink-0">
                <SiWhatsapp size={16} />
              </span>
              WhatsApp us — {AGENCY.phone}
            </a>
            <a
              href={telLink}
              onClick={() => trackEvent("phone_click", { location: "quote_section" })}
              className="flex items-center gap-3 text-[#f6f1e7] hover:text-[#d9734a] transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-[#f6f1e7]/10 flex items-center justify-center shrink-0">
                <Phone size={16} />
              </span>
              Call us — {AGENCY.phone}
            </a>
            <a
              href={mailLink}
              onClick={() => trackEvent("email_click", { location: "quote_section" })}
              className="flex items-center gap-3 text-[#f6f1e7] hover:text-[#d9734a] transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-[#f6f1e7]/10 flex items-center justify-center shrink-0">
                <Mail size={16} />
              </span>
              {AGENCY.email}
            </a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          onSubmit={submit}
          noValidate
          className="lg:col-span-3 rounded-3xl bg-[#f6f1e7] p-6 md:p-9 text-[#1c1a15]"
        >
          {opened && (
            <div
              role="status"
              className="mb-6 rounded-xl bg-[#122e24]/[0.07] border border-[#122e24]/20 px-4 py-3.5 flex items-start gap-3"
            >
              <CheckCircle2 size={20} className="text-[#122e24] shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm font-light">
                <strong>Your enquiry is ready.</strong> WhatsApp has been opened so you can
                review and send your message. If it didn't open,{" "}
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { location: "quote_fallback" })}
                  className="underline underline-offset-2 text-[#c05a2e]"
                >
                  tap here to try again
                </a>
                , call us on{" "}
                <a href={telLink} onClick={() => trackEvent("phone_click", { location: "quote_fallback" })} className="underline underline-offset-2 text-[#c05a2e]">
                  {AGENCY.phone}
                </a>{" "}
                or email{" "}
                <a href={mailLink} onClick={() => trackEvent("email_click", { location: "quote_fallback" })} className="underline underline-offset-2 text-[#c05a2e]">
                  {AGENCY.email}
                </a>
                .
              </p>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="qf-name" className={labelCls}>Full name *</label>
              <input id="qf-name" autoComplete="name" className={inputCls(errors.name)} value={form.name}
                onChange={(e) => set("name", e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "qf-name-err" : undefined} />
              {errors.name && <p id="qf-name-err" role="alert" className={errCls}>{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="qf-business" className={labelCls}>Business name *</label>
              <input id="qf-business" autoComplete="organization" className={inputCls(errors.business)} value={form.business}
                onChange={(e) => set("business", e.target.value)} aria-invalid={!!errors.business} aria-describedby={errors.business ? "qf-business-err" : undefined} />
              {errors.business && <p id="qf-business-err" role="alert" className={errCls}>{errors.business}</p>}
            </div>
            <div>
              <label htmlFor="qf-industry" className={labelCls}>Business type *</label>
              <input id="qf-industry" placeholder="e.g. salon, plumber, café" className={inputCls(errors.industry)} value={form.industry}
                onChange={(e) => set("industry", e.target.value)} aria-invalid={!!errors.industry} aria-describedby={errors.industry ? "qf-industry-err" : undefined} />
              {errors.industry && <p id="qf-industry-err" role="alert" className={errCls}>{errors.industry}</p>}
            </div>
            <div>
              <label htmlFor="qf-website" className={labelCls}>
                Existing website URL <span className="normal-case tracking-normal">(optional)</span>
              </label>
              <input id="qf-website" inputMode="url" placeholder="https://" className={inputCls(errors.website)} value={form.website}
                onChange={(e) => set("website", e.target.value)} aria-invalid={!!errors.website} aria-describedby={errors.website ? "qf-website-err" : undefined} />
              {errors.website && <p id="qf-website-err" role="alert" className={errCls}>{errors.website}</p>}
            </div>
            <div>
              <label htmlFor="qf-email" className={labelCls}>Email address *</label>
              <input id="qf-email" type="email" autoComplete="email" className={inputCls(errors.email)} value={form.email}
                onChange={(e) => set("email", e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "qf-email-err" : undefined} />
              {errors.email && <p id="qf-email-err" role="alert" className={errCls}>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="qf-phone" className={labelCls}>Phone / WhatsApp number *</label>
              <input id="qf-phone" type="tel" autoComplete="tel" className={inputCls(errors.phone)} value={form.phone}
                onChange={(e) => set("phone", e.target.value)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "qf-phone-err" : undefined} />
              {errors.phone && <p id="qf-phone-err" role="alert" className={errCls}>{errors.phone}</p>}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="qf-package" className={labelCls}>Required package *</label>
              <select id="qf-package" className={inputCls(errors.pkg)} value={form.pkg}
                onChange={(e) => set("pkg", e.target.value)} aria-invalid={!!errors.pkg} aria-describedby={errors.pkg ? "qf-package-err" : undefined}>
                <option value="">Choose a package…</option>
                {PACKAGES.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              {errors.pkg && <p id="qf-package-err" role="alert" className={errCls}>{errors.pkg}</p>}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="qf-services" className={labelCls}>Main services your business offers *</label>
              <input id="qf-services" placeholder="e.g. haircuts, colour treatments, bridal packages" className={inputCls(errors.services)} value={form.services}
                onChange={(e) => set("services", e.target.value)} aria-invalid={!!errors.services} aria-describedby={errors.services ? "qf-services-err" : undefined} />
              {errors.services && <p id="qf-services-err" role="alert" className={errCls}>{errors.services}</p>}
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="qf-goal" className={labelCls}>What do you want the website / chatbot to achieve? *</label>
              <input id="qf-goal" placeholder="e.g. more bookings, fewer phone enquiries, online menu orders" className={inputCls(errors.goal)} value={form.goal}
                onChange={(e) => set("goal", e.target.value)} aria-invalid={!!errors.goal} aria-describedby={errors.goal ? "qf-goal-err" : undefined} />
              {errors.goal && <p id="qf-goal-err" role="alert" className={errCls}>{errors.goal}</p>}
            </div>
            <fieldset className="sm:col-span-2">
              <legend className={labelCls}>Preferred contact method *</legend>
              <div className="flex flex-wrap gap-3 mt-1">
                {CONTACT_METHODS.map((m) => (
                  <label
                    key={m}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm cursor-pointer transition-colors min-h-[44px] ${
                      form.contactMethod === m
                        ? "border-[#c05a2e] bg-[#c05a2e]/10 text-[#1c1a15] font-medium"
                        : "border-[#1c1a15]/20 text-[#1c1a15]/60 hover:border-[#c05a2e]/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="qf-contact-method"
                      value={m}
                      checked={form.contactMethod === m}
                      onChange={() => set("contactMethod", m)}
                      className="accent-[#c05a2e]"
                    />
                    {m}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="mt-4">
            <label htmlFor="qf-details" className={labelCls}>
              Additional project details <span className="normal-case tracking-normal">(optional)</span>
            </label>
            <textarea id="qf-details" rows={3} placeholder="Pages, features, deadlines — anything helpful."
              className={`${inputCls()} resize-y`} value={form.details} onChange={(e) => set("details", e.target.value)} />
          </div>

          <div className="mt-5">
            <div className="flex items-start gap-3">
              <input id="qf-consent" type="checkbox" checked={form.consent}
                onChange={(e) => set("consent", e.target.checked)}
                className="mt-1 w-4 h-4 accent-[#c05a2e]" aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "qf-consent-err" : undefined} />
              <label htmlFor="qf-consent" className="text-sm font-light text-[#1c1a15]/70">
                I agree to Urban Edge Designs contacting me about my enquiry as described in the{" "}
                <Link to="/privacy-policy" className="underline underline-offset-2 text-[#c05a2e] hover:opacity-80">
                  Privacy Policy
                </Link>
                . *
              </label>
            </div>
            {errors.consent && <p id="qf-consent-err" role="alert" className={errCls}>{errors.consent}</p>}
          </div>

          <button type="submit" className="btn-terra mt-7 w-full flex items-center justify-center gap-2.5 rounded-full py-4 font-medium tracking-wide min-h-[44px]">
            <SiWhatsapp size={18} /> Send Enquiry via WhatsApp
          </button>
          <p className="mt-3 text-center text-xs font-light text-[#1c1a15]/45 flex items-center justify-center gap-1.5">
            <Send size={12} aria-hidden="true" /> Opens WhatsApp with your details pre-filled — nothing is sent until you press send.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
