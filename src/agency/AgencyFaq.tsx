import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS: { q: string; a: string }[] = [
  {
    q: "What information do you need to start?",
    a: "Just the basics: your business name, what you do, your services and prices, contact details, and any colours, logo or photos you'd like us to use. If you don't have branding yet, we can create a clean look for you as part of the project.",
  },
  {
    q: "How long will my website take?",
    a: "Starter chatbot projects typically take 3–5 working days, Standard websites 5–7 working days, and Premium packages around 7–14 working days depending on scope. We'll always agree a timeline with you before work begins.",
  },
  {
    q: "Will I see a demo before paying the final balance?",
    a: "Yes — always. You pay 50% to begin work, we build your working demo (including your AI chatbot), and only after you approve the demo is the remaining 50% due, before final launch and handover.",
  },
  {
    q: "What is included in each package?",
    a: "Starter (£99): an AI chatbot added to your existing website, trained on your services and FAQs, with basic lead collection. Standard (£249): a 4–5 page mobile-friendly website plus AI chatbot, contact form, Google Maps and basic on-page SEO. Premium (£499): up to 7 pages, a booking or reservation system, advanced chatbot with lead capture, enhanced SEO and 30 days of support.",
  },
  {
    q: "Are domain and hosting included?",
    a: "Domain registration, hosting and any paid third-party software (for example booking systems or paid APIs) are charged separately unless we state otherwise in writing. We'll always tell you the exact costs before you commit — no surprises.",
  },
  {
    q: "Are there any monthly charges?",
    a: "Only if you choose one. Our chatbot management, care and growth plans (from £29–£49/month) are optional recurring services that cover updates, content changes and priority support. Your website itself is a one-time build cost.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely — redesigns are one of our most popular services. We keep what's working, modernise the design, improve speed and mobile experience, and can add an AI chatbot at the same time.",
  },
  {
    q: "Can the chatbot answer questions about my own services and prices?",
    a: "Yes. Every chatbot we build is trained on your actual services, prices, opening hours, FAQs and policies — so it answers your customers accurately, in your tone of voice. If it doesn't know something, it says so and offers to connect the customer with you.",
  },
  {
    q: "Can I request changes?",
    a: "Of course. Starter includes 1 round of revisions, Standard includes 2, and Premium includes revisions within its 30-day support period. Additional rounds can always be arranged at a fair rate.",
  },
  {
    q: "Who owns the finished website?",
    a: "You do. Once the final balance is paid, the website, its content and design are yours. We hand everything over and you're free to host it wherever you like.",
  },
  {
    q: "Does the chatbot confirm bookings automatically?",
    a: "No — and we'd rather be honest about that. The chatbot collects the customer's details and preferred time as a booking enquiry, which is passed to you. You (or your team) confirm every booking personally, so you stay in full control of your diary.",
  },
  {
    q: "What support is available after launch?",
    a: "Premium includes 30 days of support as standard. Beyond that, our optional care plans (from £29/month) cover chatbot management, updates and priority help. And you can always email us — we answer every message personally. Please note: we don't guarantee specific sales figures, lead volumes or Google rankings — no honest agency can.",
  },
  {
    q: "Can I contact you through WhatsApp?",
    a: "Yes. Use any WhatsApp button on this website to send your enquiry directly to Urban Edge Designs.",
  },
  {
    q: "Will a chatbot answer me on WhatsApp?",
    a: "WhatsApp enquiries are currently reviewed by a person. Automated greeting or away messages may confirm receipt, but project advice, quotations and payment links are provided after human review.",
  },
  {
    q: "Will I be asked to pay immediately?",
    a: "No. We first confirm your requirements, package, price and project scope. A secure Stripe deposit link is then sent privately if you decide to proceed.",
  },
  {
    q: "How does payment work?",
    a: "A 50% deposit is required to begin the agreed project. The remaining 50% is due after demo approval and before final launch or handover. Payment links are sent privately and are never requested through the demo chatbot.",
  },
  {
    q: "Does submitting an enquiry create a contract?",
    a: "No. Submitting an enquiry or requesting a demo does not confirm a project or create a payment obligation.",
  },
];

export default function AgencyFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-[#c05a2e]" aria-hidden="true" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c05a2e]">Questions, Answered</span>
            <div className="h-px w-12 bg-[#c05a2e]" aria-hidden="true" />
          </div>
          <h2 id="faq-heading" className="font-display text-4xl md:text-6xl text-[#1c1a15]">
            No Surprises. <span className="italic terra-gradient-text">Just Clarity.</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const open = openIdx === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
                className="card-cream rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left min-h-[56px]"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="font-display text-lg text-[#1c1a15]">{f.q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[#c05a2e] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-6 text-sm font-light text-[#1c1a15]/65 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
