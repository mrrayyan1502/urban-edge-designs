import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { usePageMeta } from "@/lib/usePageMeta";
import { DEMO_ROUTES } from "@/data/demos";

export default function NotFound() {
  usePageMeta(
    "Page Not Found | Urban Edge Designs",
    "The page you are looking for does not exist. Return to Urban Edge Designs — web design and AI chatbots for UK small businesses."
  );

  return (
    <main className="min-h-screen bg-[#f6f1e7] flex items-center justify-center px-5 py-24">
      <div className="text-center max-w-xl">
        <div className="font-display text-8xl md:text-9xl text-[#c05a2e] leading-none">404</div>
        <h1 className="mt-4 font-display text-3xl md:text-4xl text-[#1c1a15]">
          This page doesn't exist
        </h1>
        <p className="mt-4 text-[#1c1a15]/60 font-light leading-relaxed">
          The link may be old or mistyped. Let's get you back to something useful.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="btn-green flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium min-h-[44px]"
          >
            <ArrowLeft size={15} aria-hidden="true" /> Back to Home
          </Link>
        </div>
        <nav aria-label="Popular pages" className="mt-10">
          <p className="text-xs tracking-[0.25em] uppercase text-[#1c1a15]/40 mb-3">Or explore a demo</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: "Spa & Salon", to: DEMO_ROUTES.spa },
              { label: "Trades", to: DEMO_ROUTES.trades },
              { label: "Restaurant", to: DEMO_ROUTES.restaurant },
              { label: "Dental", to: DEMO_ROUTES.dental },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-4 py-2 rounded-full border border-[#1c1a15]/20 text-sm text-[#1c1a15]/70 hover:border-[#c05a2e] hover:text-[#c05a2e] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </main>
  );
}
