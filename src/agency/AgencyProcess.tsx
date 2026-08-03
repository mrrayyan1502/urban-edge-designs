import { motion } from "framer-motion";
import { MessagesSquare, PencilRuler, Rocket } from "lucide-react";
import { AGENCY } from "@/data/demos";
import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    icon: MessagesSquare,
    n: "01",
    title: "Tell Us About Your Business",
    text: "A quick call or message — your services, prices, style and what you want your website to achieve.",
  },
  {
    icon: PencilRuler,
    n: "02",
    title: "We Build Your Demo",
    text: "Within days you get a working demo of your new website with its AI chatbot. You approve it before paying the balance.",
  },
  {
    icon: Rocket,
    n: "03",
    title: "Launch & Grow",
    text: "We launch, connect your domain and hand over the keys. Optional care plans keep everything updated and improving.",
  },
];

export default function AgencyProcess() {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#efe7d8]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-[#c05a2e]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#c05a2e]">How It Works</span>
            <div className="h-px w-12 bg-[#c05a2e]" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-[#1c1a15]">
            From First Chat to <span className="italic terra-gradient-text">Launch</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className="card-cream rounded-3xl p-8 relative"
            >
              <div className="font-display text-6xl text-[#c05a2e]/20 absolute top-6 right-7">{s.n}</div>
              <div className="w-12 h-12 rounded-2xl bg-[#122e24] flex items-center justify-center">
                <s.icon size={22} className="text-[#f6f1e7]" />
              </div>
              <h3 className="font-display text-2xl text-[#1c1a15] mt-6">{s.title}</h3>
              <p className="mt-3 text-sm font-light text-[#1c1a15]/60 leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#quote"
            className="btn-terra inline-flex items-center gap-2 px-10 py-4 rounded-full font-medium tracking-wide text-lg min-h-[52px]"
          >
            Start Step 01 — It's Free <ArrowRight size={18} aria-hidden="true" />
          </a>
          <p className="mt-4 text-sm font-light text-[#1c1a15]/50">
            Or call / WhatsApp us on {AGENCY.phone} · {AGENCY.email}
          </p>
        </div>
      </div>
    </section>
  );
}
