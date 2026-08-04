import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { DEMOS, DEMO_ROUTES } from "@/data/demos";

export default function DemoGallery() {
  return (
    <section id="demos" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-12 bg-[#c05a2e]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#c05a2e]">Live Demo Websites</span>
            </div>
            <h2 className="font-display text-4xl md:text-6xl leading-tight text-[#1c1a15]">
              Don't Imagine It.
              <span className="italic terra-gradient-text"> Click It.</span>
            </h2>
            <p className="mt-5 text-[#1c1a15]/60 font-light leading-relaxed">
              Four fully working demo websites — every button works, and each one has a
              live AI chatbot you can talk to right now. Find your industry and try it.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#1c1a15]/50 font-light">
            <MessageCircle size={16} className="text-[#c05a2e]" />
            Tip: open a demo and chat with its AI assistant
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {DEMOS.map((d, i) => (
            <motion.div
              key={d.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 2) * 0.12, duration: 0.6 }}
              className="card-cream group rounded-3xl overflow-hidden block"
            >
              <Link to={DEMO_ROUTES[d.slug]} aria-label={`Open the ${d.category} live demo website`}>
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img
                    src={d.heroImage}
                    alt={`${d.category} demo website preview`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width={2048}
                    height={1152}
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#122e24]/70 via-transparent to-transparent" aria-hidden="true" />
                  <div className="absolute top-4 left-4 bg-[#f6f1e7]/95 backdrop-blur px-4 py-1.5 rounded-full text-[11px] tracking-[0.2em] uppercase text-[#1c1a15]">
                    {d.category}
                  </div>
                  <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-[#c05a2e] text-[#fff8f0] flex items-center justify-center transition-transform group-hover:rotate-45" aria-hidden="true">
                    <ArrowUpRight size={19} />
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                    <span className="text-xs text-[#f6f1e7]/90 tracking-wide">Fictional demo · AI chatbot live</span>
                  </div>
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-display text-2xl text-[#1c1a15]">
                    {d.brand} <span className="italic text-[#c05a2e]">· {d.tagline}</span>
                  </h3>
                  <p className="mt-2 text-sm font-light text-[#1c1a15]/55">Perfect for: {d.audience}</p>
                  <div className="mt-4 text-sm font-medium text-[#c05a2e] flex items-center gap-1.5">
                    Open live demo <ArrowUpRight size={15} aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
