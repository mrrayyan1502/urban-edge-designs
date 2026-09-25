import { Link } from "react-router";
import { ArrowLeft, Search, Sparkles } from "lucide-react";
import { usePageMeta } from "@/lib/usePageMeta";

export default function NotFound() {
  usePageMeta(
    "Page Not Found | Urban Edge Design",
    "The page you are looking for could not be found. Explore small-space interior ideas and curated room inspiration from Urban Edge Design.",
    true
  );

  return (
    <main className="min-h-[70vh] bg-[#f8f5ee] flex items-center justify-center px-5 py-24">
      <div className="text-center max-w-2xl">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#8b6f47] font-semibold">Urban Edge Design</span>
        <div className="font-serif text-8xl md:text-9xl text-[#171611] leading-none mt-3">404</div>
        <h1 className="mt-4 font-serif text-3xl md:text-4xl text-[#171611]">This space is still empty.</h1>
        <p className="mt-4 text-[#171611]/60 font-light leading-relaxed">
          The link may be old, mistyped, or no longer available. Continue with our most useful small-space collections.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#171611] text-[#f8f5ee] text-sm font-medium hover:bg-[#8b6f47] transition-colors min-h-[44px]">
            <ArrowLeft size={15} /> Back to Home
          </Link>
          <Link to="/shop-the-look" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#171611]/20 text-sm font-medium hover:border-[#8b6f47] hover:text-[#8b6f47] transition-colors min-h-[44px]">
            <Sparkles size={15} /> Shop the Look
          </Link>
        </div>
        <nav aria-label="Popular pages" className="mt-10 flex flex-wrap justify-center gap-2 text-xs">
          <Link to="/category/living-room" className="px-4 py-2 rounded-full bg-white/50 border border-[#ded4c2] hover:border-[#8b6f47]">Living Room</Link>
          <Link to="/category/bedroom" className="px-4 py-2 rounded-full bg-white/50 border border-[#ded4c2] hover:border-[#8b6f47]">Bedroom</Link>
          <Link to="/category/small-apartments" className="px-4 py-2 rounded-full bg-white/50 border border-[#ded4c2] hover:border-[#8b6f47]">Small Apartments</Link>
        </nav>
      </div>
    </main>
  );
}
