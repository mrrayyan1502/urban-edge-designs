import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import type { LegalDoc } from "./legalContent";
import { usePageMeta } from "@/lib/usePageMeta";

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  usePageMeta(
    `${doc.title} | Urban Edge Designs`,
    `${doc.title} for Urban Edge Designs — smart websites and AI chatbots for UK small businesses.`
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [doc.slug]);

  return (
    <div className="min-h-screen bg-[#f6f1e7] text-[#1c1a15]">
      <header className="border-b border-[#1c1a15]/10 bg-[#f6f1e7]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-5 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#122e24] flex items-center justify-center relative" aria-hidden="true">
              <span className="font-display text-[#f6f1e7] text-xs font-semibold">UE</span>
              <span className="absolute bottom-0.5 right-0.5 w-1 h-1 rounded-full bg-[#c05a2e]" />
            </div>
            <span className="font-display">
              Urban Edge <span className="italic text-[#c05a2e]">Designs</span>
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm text-[#1c1a15]/60 hover:text-[#c05a2e] transition-colors"
          >
            <ArrowLeft size={15} aria-hidden="true" /> Back to site
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-5 py-14 md:py-20">
        <p className="text-xs tracking-[0.3em] uppercase text-[#c05a2e]">Urban Edge Designs · Legal</p>
        <h1 className="font-display text-4xl md:text-5xl mt-3">{doc.title}</h1>
        <p className="mt-3 text-sm font-light text-[#1c1a15]/50">Last updated: {doc.updated}</p>
        <p className="mt-6 font-light leading-relaxed text-[#1c1a15]/75">{doc.intro}</p>

        <div className="mt-10 space-y-8">
          {doc.sections.map((s, i) => (
            <section key={s.heading} aria-labelledby={`legal-${doc.slug}-${i}`}>
              <h2 id={`legal-${doc.slug}-${i}`} className="font-display text-2xl text-[#122e24]">
                {s.heading}
              </h2>
              {s.body.map((p, j) => (
                <p key={j} className="mt-3 text-sm font-light leading-relaxed text-[#1c1a15]/70">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-[#c05a2e]/30 bg-[#c05a2e]/[0.05] p-6">
          <p className="text-sm font-light text-[#1c1a15]/70">
            Questions about this {doc.title.toLowerCase()}? Contact us at{" "}
            <a href="mailto:urbanedgedesigns88@gmail.com" className="text-[#c05a2e] underline underline-offset-2">
              urbanedgedesigns88@gmail.com
            </a>{" "}
            or call{" "}
            <a href="tel:+447454291587" className="text-[#c05a2e] underline underline-offset-2">
              07454 291587
            </a>
            .
          </p>
        </div>
      </main>

      <footer className="border-t border-[#1c1a15]/10 py-8">
        <div className="max-w-4xl mx-auto px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-[#1c1a15]/45">
          <span>© {new Date().getFullYear()} Urban Edge Designs · All rights reserved</span>
          <nav className="flex flex-wrap gap-4" aria-label="Legal navigation">
            <Link to="/privacy-policy" className="hover:text-[#c05a2e]">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-[#c05a2e]">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-[#c05a2e]">Cookie Policy</Link>
            <Link to="/refund-policy" className="hover:text-[#c05a2e]">Refund &amp; Cancellation</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
