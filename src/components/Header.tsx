import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Search, Menu, X, ChevronDown, BookmarkHeart, Sparkles } from "lucide-react";
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
          ? "bg-[#faf7f2]/95 backdrop-blur-md border-[#e5dfd3] shadow-sm py-3"
          : "bg-[#faf7f2] border-[#eee8dc] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top announcement / subhead bar */}
        <div className="hidden lg:flex items-center justify-between pb-2 border-b border-[#eee8dc]/70 mb-3 text-[11px] tracking-wider uppercase text-[#1c1a15]/60 font-sans">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#4a5d4e]"></span>
            <span>Better ideas for smaller spaces</span>
          </div>
          <div className="flex items-center gap-6">
            <span>UK & International Small Home Editions</span>
            <Link to="/affiliate-disclosure" className="hover:text-[#4a5d4e] transition-colors">
              Affiliate Disclosure
            </Link>
          </div>
        </div>

        {/* Main Nav Container */}
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-md bg-[#1c1a15] text-[#faf7f2] flex items-center justify-center font-serif text-lg font-bold tracking-tighter group-hover:bg-[#4a5d4e] transition-colors">
              UE
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1c1a15]">
                Urban Edge <span className="font-serif italic text-[#4a5d4e]">Design</span>
              </span>
              <span className="block text-[10px] tracking-[0.25em] uppercase text-[#1c1a15]/60 font-sans -mt-1">
                Smart Interiors for Modern Living
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs tracking-wider uppercase font-medium text-[#1c1a15]/80 font-sans">
            <Link to="/" className="hover:text-[#4a5d4e] transition-colors py-1">
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
                  className="hover:text-[#4a5d4e] transition-colors flex items-center gap-1 py-1"
                >
                  {cat.name}
                  <ChevronDown size={12} className="opacity-60" />
                </Link>

                {activeDropdown === cat.slug && (
                  <div className="absolute top-full left-0 w-64 bg-[#faf7f2] border border-[#e5dfd3] shadow-lg rounded-md p-4 mt-1 z-50 animate-fadeIn">
                    <p className="text-[10px] uppercase font-bold text-[#4a5d4e] tracking-widest mb-2 border-b border-[#eee8dc] pb-1">
                      {cat.name} Topics
                    </p>
                    <ul className="space-y-2">
                      {cat.subcategories.slice(0, 6).map((sub, idx) => (
                        <li key={idx}>
                          <Link
                            to={`/category/${cat.slug}`}
                            className="text-xs text-[#1c1a15]/80 hover:text-[#4a5d4e] normal-case block transition-colors"
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

            <Link to="/category/storage" className="hover:text-[#4a5d4e] transition-colors py-1">
              Storage
            </Link>
            <Link to="/category/decor" className="hover:text-[#4a5d4e] transition-colors py-1">
              Decor
            </Link>
            <Link
              to="/shop-the-look"
              className="text-[#4a5d4e] font-semibold hover:text-[#1c1a15] transition-colors flex items-center gap-1 py-1"
            >
              <Sparkles size={13} />
              Shop the Look
            </Link>
          </nav>

          {/* Action buttons (Search & Mobile Menu Toggle) */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#e5dfd3] text-xs text-[#1c1a15]/70 hover:border-[#1c1a15] hover:text-[#1c1a15] transition-all bg-[#faf7f2]"
              aria-label="Search site"
            >
              <Search size={14} />
              <span className="hidden sm:inline">Search ideas...</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1c1a15]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-[#eee8dc] pb-6 space-y-4 animate-fadeIn">
            <nav className="flex flex-col space-y-3 font-sans text-sm tracking-wide">
              <Link to="/" className="font-semibold text-[#1c1a15]">
                Home
              </Link>
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className="text-[#1c1a15]/80 hover:text-[#4a5d4e] pl-2 border-l-2 border-[#eee8dc]"
                >
                  {cat.name}
                </Link>
              ))}
              <Link
                to="/shop-the-look"
                className="font-semibold text-[#4a5d4e] flex items-center gap-1 pt-2"
              >
                <Sparkles size={14} />
                Shop the Look
              </Link>
              <Link to="/about-us" className="text-xs uppercase tracking-wider text-[#1c1a15]/60 pt-2">
                About Urban Edge Design
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
