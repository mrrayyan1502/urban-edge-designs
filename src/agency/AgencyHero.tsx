import { motion } from "framer-motion";
import { ArrowRight, Bot, Star } from "lucide-react";

const MARQUEE = [
  "AI Chatbots", "Website Design", "Redesigns", "Booking Systems", "Lead Capture",
  "Mobile-First", "SEO Setup", "AI Chatbots", "Website Design", "Redesigns",
  "Booking Systems", "Lead Capture", "Mobile-First", "SEO Setup",
];

export default function AgencyHero() {
  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-0 overflow-hidden">
      {/* decorative shapes */}
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-[#c05a2e]/[0.07]" />
      <div className="absolute top-40 -left-40 w-[380px] h-[380px] rounded-full border border-[#122e24]/10" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative" id="main-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-7">
            <div className="h-px w-14 bg-[#c05a2e]" />
            <span className="text-xs tracking-[0.35em] uppercase text-[#c05a2e]">
              Websites + AI Chatbots for Small Business
            </span>
          </div>

          <h1 className="font-display text-[13vw] sm:text-7xl lg:text-8xl leading-[0.98] tracking-tight text-[#1c1a15]">
            Websites That
            <span className="block italic terra-gradient-text">Work</span>
            for You
          </h1>

          <p className="mt-8 text-lg md:text-xl font-light text-[#1c1a15]/65 leading-relaxed max-w-2xl">
            Professional, mobile-friendly websites with a smart AI chatbot that answers
            your customers, takes bookings and captures leads — while you get on with
            running your business.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#demos" className="btn-terra flex items-center gap-2 px-9 py-4 rounded-full font-medium tracking-wide min-h-[52px]">
              See Live Demos <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href="#quote" className="btn-outline-ink flex items-center px-9 py-4 rounded-full font-medium tracking-wide min-h-[52px]">
              Get a Free Quote
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#122e24] flex items-center justify-center">
                <Bot size={20} className="text-[#f6f1e7]" />
              </div>
              <div className="text-sm">
                <div className="font-medium text-[#1c1a15]">AI chatbot included</div>
                <div className="text-[#1c1a15]/50 font-light">Answers &amp; books 24/7</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#122e24] flex items-center justify-center">
                <Star size={18} className="text-[#f6f1e7]" />
              </div>
              <div className="text-sm">
                <div className="font-medium text-[#1c1a15]">50% to start</div>
                <div className="text-[#1c1a15]/50 font-light">50% after you approve the demo</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#122e24] flex items-center justify-center font-display text-[#f6f1e7] text-sm">
                3d
              </div>
              <div className="text-sm">
                <div className="font-medium text-[#1c1a15]">Fast turnaround</div>
                <div className="text-[#1c1a15]/50 font-light">From 3–5 working days</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* marquee */}
      <div className="mt-20 border-y border-[#1c1a15]/10 bg-[#122e24] py-4 overflow-hidden">
        <div className="marquee-track gap-10">
          {MARQUEE.map((m, i) => (
            <span key={i} className="flex items-center gap-10 text-[#f6f1e7]/80 text-sm tracking-[0.3em] uppercase whitespace-nowrap">
              {m} <span className="text-[#d9734a]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
