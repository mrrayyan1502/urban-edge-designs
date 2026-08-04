import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  Menu, X, Phone, Mail, MapPin, Clock, Star, Quote, ArrowLeft, Sparkles, MessageCircle,
} from "lucide-react";
import type { DemoConfig } from "@/data/demos";
import { AGENCY } from "@/data/demos";
import DemoChatbot from "./DemoChatbot";
import { usePageMeta } from "@/lib/usePageMeta";
import { trackEvent } from "@/lib/analytics";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function DemoSite({ demo }: { demo: DemoConfig }) {
  const dark = demo.theme === "dark";
  const [open, setOpen] = useState(false);

  usePageMeta(
    `${demo.brand} ${demo.tagline} — Demo Website by Urban Edge Designs`,
    `Fictional ${demo.category.toLowerCase()} demo website with a working AI chatbot, built by Urban Edge Designs to demonstrate website and chatbot capabilities.`
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    trackEvent("demo_view", { demo: demo.slug });
  }, [demo.slug]);

  const bg = dark ? "#0b1f1a" : "#faf7f0";
  const bgAlt = dark ? "#0d241d" : "#f1ebdd";
  const text = dark ? "#f5efe4" : "#211d16";
  const textSoft = dark ? "rgba(245,239,228,0.65)" : "rgba(33,29,22,0.6)";
  const line = dark ? "rgba(255,255,255,0.12)" : "rgba(33,29,22,0.12)";

  return (
    <div style={{ background: bg, color: text }} className="min-h-screen">
      <a
        href="#demo-main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[70] focus:top-2 focus:left-2 focus:bg-[#c05a2e] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Demo banner */}
      <div
        className="sticky top-0 z-50 px-4 py-2.5 flex items-center justify-center gap-3 text-xs sm:text-sm"
        style={{ background: "#122e24", color: "#f6f1e7" }}
        role="note"
      >
        <Sparkles size={14} className="shrink-0" style={{ color: "#d9734a" }} aria-hidden="true" />
        <span className="text-center font-light">
          Live demonstration by <strong className="font-medium">Urban Edge Designs</strong>. This is a fictional
          example created to demonstrate website and AI chatbot capabilities.
        </span>
        <Link
          to="/"
          className="hidden sm:flex items-center gap-1 underline underline-offset-2 hover:opacity-80 shrink-0"
        >
          <ArrowLeft size={13} aria-hidden="true" /> Back to Urban Edge
        </Link>
      </div>

      {/* Navbar */}
      <header
        className="sticky z-40 border-b backdrop-blur-md"
        style={{ top: 41, background: dark ? "rgba(11,31,26,0.85)" : "rgba(250,247,240,0.85)", borderColor: line }}
      >
        <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-display font-semibold"
              style={{ border: `1.5px solid ${demo.accent}`, color: demo.accent }}
              aria-hidden="true"
            >
              {demo.monogram}
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg tracking-wide">{demo.brand}</div>
              <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: demo.accent }}>
                {demo.tagline}
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7" aria-label={`${demo.brand} navigation`}>
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-60"
                style={{ color: textSoft }}
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:${demo.contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-transform hover:-translate-y-0.5 min-h-[44px]"
              style={{ background: demo.accent, color: dark ? "#0b1f1a" : "#fff8f0" }}
            >
              <Phone size={14} aria-hidden="true" /> {demo.contact.phone}
            </a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
        {open && (
          <nav
            className="md:hidden border-t px-5 py-4 flex flex-col gap-3"
            style={{ borderColor: line, background: bg }}
            aria-label={`${demo.brand} mobile navigation`}
          >
            {NAV.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-widest uppercase py-2"
                style={{ color: textSoft }}
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="demo-main">
        {/* Hero */}
        <section className="relative min-h-[88vh] flex items-center overflow-hidden">
          <img
            src={demo.heroImage}
            alt={`${demo.brand} — ${demo.category} demo website hero image`}
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background: dark
                ? "linear-gradient(100deg, rgba(11,31,26,0.95) 20%, rgba(11,31,26,0.6) 60%, rgba(11,31,26,0.25))"
                : "linear-gradient(100deg, rgba(20,16,10,0.85) 10%, rgba(20,16,10,0.55) 55%, rgba(20,16,10,0.2))",
            }}
          />
          <div className="relative z-10 max-w-6xl mx-auto px-5 py-24 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12" style={{ background: demo.accent }} aria-hidden="true" />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: demo.accent }}>
                  {demo.heroBadge}
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl leading-[1.03] text-[#faf6ee]">
                {demo.heroHeadline}
                <span className="block italic" style={{ color: demo.accent }}>
                  {demo.heroHeadlineAccent}
                </span>
              </h1>
              <p className="mt-6 text-lg font-light leading-relaxed max-w-xl" style={{ color: "rgba(250,246,238,0.8)" }}>
                {demo.heroSub}
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="px-8 py-4 rounded-full font-medium tracking-wide transition-transform hover:-translate-y-0.5 min-h-[52px] flex items-center"
                  style={{ background: demo.accent, color: dark ? "#0b1f1a" : "#fff8f0" }}
                >
                  Explore Services
                </a>
                <button
                  onClick={() => window.dispatchEvent(new CustomEvent("open-chat"))}
                  className="flex items-center gap-2 px-8 py-4 rounded-full font-medium tracking-wide border transition-all hover:bg-white/10 min-h-[52px]"
                  style={{ borderColor: demo.accent, color: demo.accent }}
                >
                  <MessageCircle size={17} aria-hidden="true" /> Chat With Us
                </button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-5 max-w-md">
                {demo.stats.map((s) => (
                  <div key={s.l} className="pl-4" style={{ borderLeft: `1px solid ${demo.accent}66` }}>
                    <div className="font-display text-2xl md:text-3xl" style={{ color: demo.accent }}>{s.n}</div>
                    <div className="text-[10px] tracking-[0.2em] uppercase mt-1" style={{ color: "rgba(250,246,238,0.6)" }}>
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 md:py-28" style={{ background: bgAlt }} aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10" style={{ background: demo.accent }} aria-hidden="true" />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: demo.accent }}>What We Do</span>
                <div className="h-px w-10" style={{ background: demo.accent }} aria-hidden="true" />
              </div>
              <h2 id="services-heading" className="font-display text-4xl md:text-5xl">{demo.servicesTitle}</h2>
              <p className="mt-4 font-light" style={{ color: textSoft }}>{demo.servicesSub}</p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {demo.services.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: (i % 3) * 0.08, duration: 0.55 }}
                  className="demo-card rounded-2xl p-6 flex flex-col"
                  style={{
                    background: dark ? "rgba(255,255,255,0.04)" : "#fffdf8",
                    border: `1px solid ${line}`,
                  }}
                >
                  <h3 className="font-display text-xl">{s.name}</h3>
                  <p className="mt-2.5 text-sm font-light leading-relaxed flex-1" style={{ color: textSoft }}>
                    {s.desc}
                  </p>
                  <div className="mt-5 pt-4 flex items-center justify-between" style={{ borderTop: `1px solid ${line}` }}>
                    <span className="font-display text-lg" style={{ color: demo.accent }}>{s.price}</span>
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent("open-chat"))}
                      className="text-xs tracking-widest uppercase px-4 py-2.5 rounded-full transition-all hover:opacity-75 min-h-[40px]"
                      style={{ border: `1px solid ${demo.accent}`, color: demo.accent }}
                      aria-label={`Book ${s.name} via chat`}
                    >
                      Book
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About / features */}
        <section id="about" className="py-20 md:py-28" aria-labelledby="about-heading">
          <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10" style={{ background: demo.accent }} aria-hidden="true" />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: demo.accent }}>Why Us</span>
              </div>
              <h2 id="about-heading" className="font-display text-3xl md:text-5xl leading-tight">{demo.aboutTitle}</h2>
              <p className="mt-5 font-light leading-relaxed" style={{ color: textSoft }}>{demo.aboutText}</p>
              <div className="mt-9 space-y-5">
                {demo.features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div
                      className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                      style={{ border: `1px solid ${demo.accent}66`, color: demo.accent }}
                      aria-hidden="true"
                    >
                      <f.icon size={19} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg">{f.title}</h3>
                      <p className="text-sm font-light mt-0.5" style={{ color: textSoft }}>{f.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75 }}
              className="rounded-2xl overflow-hidden"
              style={{ border: `1px solid ${line}` }}
            >
              <img
                src={demo.secondaryImage}
                alt={`Inside ${demo.brand} — demonstration photograph`}
                className="w-full h-[380px] md:h-[480px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-20 md:py-28" style={{ background: bgAlt }} aria-labelledby="reviews-heading">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10" style={{ background: demo.accent }} aria-hidden="true" />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: demo.accent }}>Reviews</span>
                <div className="h-px w-10" style={{ background: demo.accent }} aria-hidden="true" />
              </div>
              <h2 id="reviews-heading" className="font-display text-4xl md:text-5xl">What People Say</h2>
              <p
                className="mt-4 inline-block text-xs font-light tracking-wide px-4 py-2 rounded-full"
                style={{ background: `${demo.accent}14`, color: textSoft, border: `1px dashed ${demo.accent}55` }}
                role="note"
              >
                Sample testimonials shown for demonstration purposes. These are not reviews from real customers.
              </p>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {demo.reviews.map((r, i) => (
                <motion.figure
                  key={r.name}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.55 }}
                  className="demo-card rounded-2xl p-6 flex flex-col"
                  style={{ background: dark ? "rgba(255,255,255,0.04)" : "#fffdf8", border: `1px solid ${line}` }}
                >
                  <Quote size={24} style={{ color: `${demo.accent}88` }} aria-hidden="true" />
                  <div className="flex gap-1 mt-3" aria-label="Illustrative five-star rating (sample)">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={13} style={{ color: demo.accent, fill: demo.accent }} aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-sm font-light leading-relaxed flex-1" style={{ color: textSoft }}>
                    "{r.text}"
                  </blockquote>
                  <figcaption className="mt-5 pt-3 font-display" style={{ borderTop: `1px solid ${line}`, color: demo.accent }}>
                    — {r.name} <span className="text-xs font-light opacity-60">(sample)</span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 md:py-28" aria-labelledby="contact-heading">
          <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10" style={{ background: demo.accent }} aria-hidden="true" />
                <span className="text-xs tracking-[0.3em] uppercase" style={{ color: demo.accent }}>Visit Us</span>
              </div>
              <h2 id="contact-heading" className="font-display text-3xl md:text-5xl leading-tight">We'd Love to Hear From You</h2>
              <div className="mt-8 space-y-4">
                <div className="flex gap-3 items-start">
                  <MapPin size={19} className="mt-0.5 shrink-0" style={{ color: demo.accent }} aria-hidden="true" />
                  <div>
                    <div>{demo.contact.address}</div>
                    <div className="text-sm font-light mt-0.5" style={{ color: textSoft }}>{demo.contact.note}</div>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <Clock size={19} className="shrink-0" style={{ color: demo.accent }} aria-hidden="true" />
                  <div>{demo.contact.hours}</div>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone size={19} className="shrink-0" style={{ color: demo.accent }} aria-hidden="true" />
                  <a href={`tel:${demo.contact.phone.replace(/\s/g, "")}`} className="hover:opacity-70 transition-opacity">
                    {demo.contact.phone}
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail size={19} className="shrink-0" style={{ color: demo.accent }} aria-hidden="true" />
                  <a href={`mailto:${demo.contact.email}`} className="hover:opacity-70 transition-opacity">
                    {demo.contact.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-chat"))}
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium tracking-wide transition-transform hover:-translate-y-0.5 min-h-[52px]"
                style={{ background: demo.accent, color: dark ? "#0b1f1a" : "#fff8f0" }}
              >
                <MessageCircle size={17} aria-hidden="true" /> Book via Chat — It Takes 30 Seconds
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden h-[360px] md:h-[440px]" style={{ border: `1px solid ${line}` }}>
              <iframe
                title={`Map showing the fictional location of ${demo.brand}`}
                src="https://www.google.com/maps?q=London&output=embed"
                className="w-full h-full grayscale-[30%]"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 border-t" style={{ borderColor: line, background: dark ? "#081812" : "#efe9db" }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-display text-sm font-semibold"
              style={{ border: `1.5px solid ${demo.accent}`, color: demo.accent }}
              aria-hidden="true"
            >
              {demo.monogram}
            </div>
            <div className="leading-tight">
              <div className="font-display">{demo.brand}</div>
              <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: demo.accent }}>{demo.tagline}</div>
            </div>
          </div>
          <div className="text-xs font-light text-center md:text-right" style={{ color: textSoft }}>
            <div className="mt-1 opacity-80 max-w-md">
              Demo website by {AGENCY.name} — all business names, contact details, reviews and locations
              shown here are fictional.
            </div>
          </div>
        </div>
      </footer>

      <DemoChatbot bot={demo.bot} phone={demo.contact.phone} business={demo.brand} dark={dark} />
    </div>
  );
}
