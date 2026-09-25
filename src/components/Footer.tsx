import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Mail, ShieldCheck, Heart } from "lucide-react";
import { CATEGORIES } from "@/data/contentData";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#1c1a15] text-[#faf7f2] font-sans border-t border-[#2d2a23] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Signup Block */}
        <div className="bg-[#26241e] border border-[#3b372d] rounded-2xl p-8 lg:p-12 mb-16 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#a8b8aa] font-semibold block mb-2">
              Weekly Small Space Dispatch
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#faf7f2] leading-tight">
              Make your space work harder.
            </h3>
            <p className="mt-3 text-sm text-[#faf7f2]/70 font-light max-w-md">
              Get practical small-space ideas, smart design inspiration, and handpicked affordable finds delivered directly to your inbox. No spam.
            </p>
          </div>
          <div>
            {subscribed ? (
              <div className="bg-[#4a5d4e]/30 border border-[#4a5d4e] rounded-xl p-4 text-center">
                <p className="font-serif text-lg text-[#faf7f2]">Thank you for subscribing!</p>
                <p className="text-xs text-[#faf7f2]/70 mt-1">Check your inbox for our latest small-space guide.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="px-4 py-3.5 rounded-full bg-[#1c1a15] border border-[#484338] text-sm text-[#faf7f2] placeholder-[#faf7f2]/40 focus:outline-none focus:border-[#4a5d4e] flex-1"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-full bg-[#4a5d4e] text-sm font-semibold text-[#faf7f2] hover:bg-[#5b7260] transition-colors flex items-center justify-center gap-2"
                >
                  Subscribe <ArrowRight size={16} />
                </button>
              </form>
            )}
            <p className="text-[11px] text-[#faf7f2]/40 mt-3 text-center sm:text-left">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 pb-16 border-b border-[#2d2a23]">
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 group mb-4">
              <div className="w-10 h-10 rounded-md bg-[#faf7f2] text-[#1c1a15] flex items-center justify-center font-serif text-lg font-bold">
                UE
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-[#faf7f2]">
                  Urban Edge <span className="font-serif italic text-[#a8b8aa]">Design</span>
                </span>
                <span className="block text-[10px] tracking-[0.25em] uppercase text-[#faf7f2]/50 font-sans">
                  Better ideas for smaller spaces
                </span>
              </div>
            </Link>
            <p className="text-xs text-[#faf7f2]/70 font-light leading-relaxed max-w-sm">
              An independent interior inspiration platform dedicated to apartments, flats, studios, compact rooms, and rented properties.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xs text-[#faf7f2]/50">
              <ShieldCheck size={16} className="text-[#a8b8aa]" />
              <span>Editorial Independence & Transparency</span>
            </div>
          </div>

          {/* Rooms */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-[#faf7f2] uppercase tracking-wider mb-4">
              Rooms
            </h4>
            <ul className="space-y-2.5 text-xs text-[#faf7f2]/70">
              {CATEGORIES.slice(0, 5).map((cat) => (
                <li key={cat.slug}>
                  <Link to={`/category/${cat.slug}`} className="hover:text-[#a8b8aa] transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideas & Shop */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-[#faf7f2] uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#faf7f2]/70">
              <li>
                <Link to="/category/storage" className="hover:text-[#a8b8aa] transition-colors">
                  Storage Solutions
                </Link>
              </li>
              <li>
                <Link to="/category/decor" className="hover:text-[#a8b8aa] transition-colors">
                  Small Decor
                </Link>
              </li>
              <li>
                <Link to="/shop-the-look" className="hover:text-[#a8b8aa] transition-colors text-[#a8b8aa]">
                  Shop the Look
                </Link>
              </li>
              <li>
                <Link to="/ideas/small-living-room-ideas" className="hover:text-[#a8b8aa] transition-colors">
                  Living Room Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Trust & Editorial Policies */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-[#faf7f2] uppercase tracking-wider mb-4">
              Trust & Policies
            </h4>
            <ul className="space-y-2 text-xs text-[#faf7f2]/70">
              <li>
                <Link to="/about-us" className="hover:text-[#a8b8aa] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#a8b8aa] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#a8b8aa] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-[#a8b8aa] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/affiliate-disclosure" className="hover:text-[#a8b8aa] transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link to="/editorial-policy" className="hover:text-[#a8b8aa] transition-colors">
                  Editorial Policy
                </Link>
              </li>
              <li>
                <Link to="/advertising-policy" className="hover:text-[#a8b8aa] transition-colors">
                  Advertising Policy
                </Link>
              </li>
              <li>
                <Link to="/image-credits" className="hover:text-[#a8b8aa] transition-colors">
                  Image Credits
                </Link>
              </li>
              <li>
                <Link to="/content-corrections" className="hover:text-[#a8b8aa] transition-colors">
                  Content Corrections
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#faf7f2]/50 gap-4">
          <p>© {new Date().getFullYear()} Urban Edge Design. All rights reserved.</p>
          <p className="text-center sm:text-right">
            This site contains affiliate links. We may earn a commission on qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  );
}
