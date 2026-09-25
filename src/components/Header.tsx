import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Search, Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { CATEGORIES } from "@/data/contentData";

export default function Header({ onOpenSearch }: { onOpenSearch: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#f8f5ee]/95 backdrop-blur-md border-[#ded4c2] shadow-sm py-3"
          : "bg-[#f8f5ee] border-[#ebe3d5] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top announcement / subhead bar */}
        <div className="hidden lg:flex items-center justify-between pb-2 border-b border-[#ebe3d5]/70 mb-3 text-[11px] tracking-wider uppercase text-[#171611]/60 font-sans">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#8b6f47]"></span>
            <span>Better ideas for smaller spaces</span>
          </div>
          <div className="flex items-center gap-6">
            <span>Interiors · Compact Living · Curated Finds</span>
            <Link to="/affiliate-disclosure" className="hover:text-[#8b6f47] transition-colors">
              Affiliate Disclosure
            </Link>
          </div>
        </div>

        {/* Main Nav Container */}
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full border border-[#8b6f47]/45 bg-[#171611] text-[#c8ad7f] flex items-center justify-center font-serif text-base font-semibold tracking-tight group-hover:border-[#8b6f47] group-hover:bg-[#211f1a] transition-all">
              UE
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#171611]">
                Urban Edge <span className="font-serif italic text-[#8b6f47]">Design</span>
              </span>
              <span className="block text-[10px] tracking-[0.25em] uppercase text-[#171611]/60 font-sans -mt-1">
                Smart Interiors for Modern Living
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs tracking-wider uppercase font-medium text-[#171611]/80 font-sans">
            <Link to="/" className="hover:text-[#8b6f47] transition-colors py-1">
              Home
            </Link>

            {/* Room Categories Dropdown */}
            {CATEGORIES.slice(0, 5).map((cat) => (
              <div
                key={cat.slug}
                className="relative"
                onMouseEnter={() => setActiveDropdown(cat.slug)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={`/category/${cat.slug}`}
                  className="hover:text-[#8b6f47] transition-colors flex items-center gap-1 py-1"
                >
                  {cat.name}
                  <ChevronDown size={12} className="opacity-60" />
                </Link>

                {activeDropdown === cat.slug && (
                  <div className="absolute top-full left-0 w-64 bg-[#f8f5ee] border border-[#ded4c2] shadow-2xl rounded-2xl p-4 mt-1 z-50 animate-fadeIn">
                    <p className="text-[10px] uppercase font-bold text-[#8b6f47] tracking-widest mb-2 border-b border-[#ebe3d5] pb-1">
                      {cat.name} Topics
                    </p>
                    <ul className="space-y-2">
                      {cat.subcategories.slice(0, 6).map((sub, idx) => (
                        <li key={idx}>
                          <Link
                            to={`/category/${cat.slug}?topic=${encodeURIComponent(sub)}`}
                            className="text-xs text-[#171611]/80 hover:text-[#8b6f47] normal-case block transition-colors"
                          >
                            {sub}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            <Link to="/category/storage" className="hover:text-[#8b6f47] transition-colors py-1">
              Storage
            </Link>
            <Link to="/category/decor" className="hover:text-[#8b6f47] transition-colors py-1">
              Decor
            </Link>
            <Link
              to="/shop-the-look"
              className="text-[#8b6f47] font-semibold hover:text-[#171611] transition-colors flex items-center gap-1 py-1"
            >
              <Sparkles size={13} />
              Shop the Look
            </Link>
          </nav>

          {/* Action buttons (Search & Mobile Menu Toggle) */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#ded4c2] text-xs text-[#171611]/70 hover:border-[#171611] hover:text-[#171611] transition-all bg-[#f8f5ee]"
              aria-label="Search site"
            >
              <Search size={14} />
              <span className="hidden sm:inline">Search ideas...</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#171611]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-[#ebe3d5] pb-6 space-y-4 animate-fadeIn">
            <nav className="flex flex-col space-y-3 font-sans text-sm tracking-wide">
              <Link to="/" className="font-semibold text-[#171611]">
                Home
              </Link>
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className="text-[#171611]/80 hover:text-[#8b6f47] pl-2 border-l-2 border-[#ebe3d5]"
                >
                  {cat.name}
                </Link>
              ))}
              <Link
                to="/shop-the-look"
                className="font-semibold text-[#8b6f47] flex items-center gap-1 pt-2"
              >
                <Sparkles size={14} />
                Shop the Look
              </Link>
              <Link to="/about-us" className="text-xs uppercase tracking-wider text-[#171611]/60 pt-2">
                About Urban Edge Design
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
