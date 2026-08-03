import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { waLink } from "@/data/demos";
import { trackEvent } from "@/lib/analytics";
import { SiWhatsapp } from "@/components/icons";

const LINKS = [
  { label: "Demos", href: "#demos" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function AgencyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const goQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" }), 100);
    } else {
      document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-[#f6f1e7]/90 backdrop-blur-md border-b border-[#1c1a15]/10 py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="Urban Edge Designs — home">
          <div className="w-11 h-11 rounded-xl bg-[#122e24] flex items-center justify-center relative overflow-hidden" aria-hidden="true">
            <span className="font-display text-[#f6f1e7] text-sm font-semibold tracking-tight">UE</span>
            <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-[#c05a2e]" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-tight text-[#1c1a15]">
              Urban Edge <span className="italic text-[#c05a2e]">Designs</span>
            </div>
            <div className="text-[9px] tracking-[0.32em] uppercase text-[#1c1a15]/50">
              Smart Websites · Smarter Business
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.22em] uppercase text-[#1c1a15]/60 hover:text-[#c05a2e] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "header" })}
            aria-label="Chat with Urban Edge Designs on WhatsApp"
            className="flex items-center justify-center w-11 h-11 rounded-full border border-[#122e24]/25 text-[#122e24] hover:bg-[#122e24] hover:text-[#f6f1e7] transition-colors"
          >
            <SiWhatsapp size={18} aria-hidden="true" />
          </a>
          <a
            href="#quote"
            onClick={goQuote}
            className="btn-green flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium min-h-[44px]"
          >
            Start Your Project <ArrowRight size={15} aria-hidden="true" />
          </a>
        </nav>

        <button
          className="lg:hidden text-[#1c1a15] p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav
          className="lg:hidden bg-[#f6f1e7]/95 backdrop-blur-md border-t border-[#1c1a15]/10 mt-3 px-6 py-5 flex flex-col gap-4"
          aria-label="Mobile navigation"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.2em] uppercase text-[#1c1a15]/70 py-1"
            >
              {l.label}
            </a>
          ))}
          <a href="#quote" onClick={goQuote} className="btn-green text-center px-6 py-3.5 rounded-full text-sm font-medium">
            Start Your Project
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "header_mobile" })}
            aria-label="Chat with Urban Edge Designs on WhatsApp"
            className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-medium border border-[#122e24]/30 text-[#122e24]"
          >
            <SiWhatsapp size={17} aria-hidden="true" /> WhatsApp Us
          </a>
        </nav>
      )}
    </header>
  );
}
