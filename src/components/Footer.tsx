import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { CATEGORIES } from "@/data/contentData";
import { trackEvent } from "@/lib/analytics";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    const subject = encodeURIComponent("Urban Edge Design newsletter signup");
    const body = encodeURIComponent(`Please add this address to the Urban Edge Design newsletter list: ${email.trim()}`);
    trackEvent("newsletter_submit", { method: "email_fallback" });
    window.location.href = `mailto:contact@urban-edge-designs.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="bg-[#171611] text-[#f8f5ee] font-sans border-t border-[#2c2923] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-[#211f1a] border border-[#3a342a] rounded-[28px] p-8 lg:p-12 mb-16 grid lg:grid-cols-2 gap-8 items-center shadow-2xl">
          <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-[#8b6f47]/10 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#c8ad7f] font-semibold block mb-3">The Urban Edit</span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#f8f5ee] leading-tight">Make every square metre feel considered.</h3>
            <p className="mt-3 text-sm text-[#f8f5ee]/65 font-light max-w-lg leading-relaxed">
              Join our early reader list for practical small-space ideas, refined room inspiration and carefully selected finds.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="relative">
            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                autoComplete="email"
                className="px-5 py-3.5 rounded-full bg-[#171611] border border-[#4a4338] text-sm text-[#f8f5ee] placeholder-[#f8f5ee]/35 focus:outline-none focus:border-[#c8ad7f] flex-1"
              />
              <button type="submit" className="px-7 py-3.5 rounded-full bg-[#c8ad7f] text-sm font-semibold text-[#171611] hover:bg-[#dbc397] transition-colors flex items-center justify-center gap-2">
                Join the List <ArrowRight size={16} />
              </button>
            </div>
            <p className="text-[11px] text-[#f8f5ee]/35 mt-3">Opens your email app to confirm the request. No address is silently stored by this website.</p>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 pb-16 border-b border-[#2c2923]">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 group mb-5">
              <div className="w-11 h-11 rounded-full border border-[#c8ad7f]/60 text-[#c8ad7f] flex items-center justify-center font-serif text-lg font-semibold">UE</div>
              <div>
                <span className="font-serif text-2xl font-semibold tracking-tight text-[#f8f5ee]">Urban Edge <span className="italic text-[#c8ad7f]">Design</span></span>
                <span className="block text-[9px] tracking-[0.28em] uppercase text-[#f8f5ee]/45">Better ideas for smaller spaces</span>
              </div>
            </Link>
            <p className="text-xs text-[#f8f5ee]/60 font-light leading-relaxed max-w-sm">Independent inspiration for apartments, flats, studios and compact homes — with a focus on useful layouts, visual calm and smarter buying.</p>
            <div className="mt-6 flex items-center gap-2.5 text-xs text-[#f8f5ee]/45"><ShieldCheck size={15} className="text-[#c8ad7f]" /><span>Transparent editorial & affiliate standards</span></div>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold text-[#c8ad7f] uppercase tracking-[0.22em] mb-4">Rooms</h4>
            <ul className="space-y-2.5 text-xs text-[#f8f5ee]/65">
              {CATEGORIES.slice(0, 5).map((cat) => <li key={cat.slug}><Link to={`/category/${cat.slug}`} className="hover:text-[#c8ad7f] transition-colors">{cat.name}</Link></li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold text-[#c8ad7f] uppercase tracking-[0.22em] mb-4">Explore</h4>
            <ul className="space-y-2.5 text-xs text-[#f8f5ee]/65">
              <li><Link to="/category/storage" className="hover:text-[#c8ad7f]">Storage Solutions</Link></li>
              <li><Link to="/category/decor" className="hover:text-[#c8ad7f]">Decor</Link></li>
              <li><Link to="/shop-the-look" className="hover:text-[#c8ad7f]">Shop the Look</Link></li>
              <li><Link to="/ideas/small-living-room-ideas" className="hover:text-[#c8ad7f]">Popular Guides</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold text-[#c8ad7f] uppercase tracking-[0.22em] mb-4">Trust</h4>
            <ul className="space-y-2 text-xs text-[#f8f5ee]/65">
              <li><Link to="/about-us" className="hover:text-[#c8ad7f]">About</Link></li>
              <li><Link to="/contact" className="hover:text-[#c8ad7f]">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#c8ad7f]">Privacy</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-[#c8ad7f]">Cookies</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-[#c8ad7f]">Terms</Link></li>
              <li><Link to="/affiliate-disclosure" className="hover:text-[#c8ad7f]">Affiliate Disclosure</Link></li>
              <li><Link to="/editorial-policy" className="hover:text-[#c8ad7f]">Editorial Policy</Link></li>
              <li><Link to="/advertising-policy" className="hover:text-[#c8ad7f]">Advertising Policy</Link></li>
              <li><button type="button" onClick={() => window.dispatchEvent(new Event("ued:open-cookie-settings"))} className="hover:text-[#c8ad7f] text-left">Cookie Settings</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#f8f5ee]/40 gap-4">
          <p>© {new Date().getFullYear()} Urban Edge Design. All rights reserved.</p>
          <p className="text-center sm:text-right">Affiliate links may earn us a commission at no additional cost to you.</p>
        </div>
      </div>
    </footer>
  );
}
