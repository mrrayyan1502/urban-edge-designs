import { motion } from "framer-motion";
import { Globe, Bot, RefreshCcw, TrendingUp } from "lucide-react";

const SERVICES = [
  {
    icon: Bot,
    title: "AI Chatbots",
    text: "A smart assistant trained on your services, prices and FAQs. It answers customers, takes bookings and collects leads — 24/7, even while you sleep.",
    tag: "From £99",
  },
  {
    icon: Globe,
    title: "New Websites",
    text: "Beautiful, mobile-friendly websites built to turn visitors into customers. Copy, images, contact forms, Google Maps and basic SEO — all handled.",
    tag: "From £249",
  },
  {
    icon: RefreshCcw,
    title: "Website Redesigns",
    text: "Already have a site that looks tired? We rebuild it into something modern, fast and conversion-focused — without losing what already works.",
    tag: "From £249",
  },
  {
    icon: TrendingUp,
    title: "Growth & Care Plans",
    text: "Monthly chatbot management, updates, content tweaks and priority support — so your website keeps working as hard as you do.",
    tag: "From £29/mo",
  },
];

export default function AgencyServices() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#122e24] relative overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full border border-[#f6f1e7]/5" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-12 bg-[#d9734a]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#d9734a]">What We Do</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight text-[#f6f1e7]">
            Everything Your Business Needs to
            <span className="italic text-[#d9734a]"> Look Expensive</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 2) * 0.1, duration: 0.55 }}
              className="rounded-3xl p-8 border border-[#f6f1e7]/10 bg-[#f6f1e7]/[0.03] hover:bg-[#f6f1e7]/[0.06] hover:border-[#d9734a]/40 transition-all duration-500 group"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#c05a2e]/15 border border-[#c05a2e]/30 flex items-center justify-center">
                  <s.icon size={22} className="text-[#d9734a]" />
                </div>
                <span className="text-xs tracking-[0.2em] uppercase text-[#d9734a]">{s.tag}</span>
              </div>
              <h3 className="font-display text-2xl text-[#f6f1e7] mt-6">{s.title}</h3>
              <p className="mt-3 text-sm font-light text-[#f6f1e7]/60 leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
