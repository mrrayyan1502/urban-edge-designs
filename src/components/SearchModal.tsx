import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";
import { ARTICLES, SHOP_THE_LOOK_ROOMS } from "@/data/contentData";

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => inputRef.current?.focus(), 30);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalized = query.trim().toLowerCase();
  const filteredArticles = normalized
    ? ARTICLES.filter((a) => `${a.title} ${a.category} ${a.excerpt} ${a.style}`.toLowerCase().includes(normalized))
    : [];
  const filteredRooms = normalized
    ? SHOP_THE_LOOK_ROOMS.filter((r) => `${r.title} ${r.style} ${r.roomType} ${r.subtitle}`.toLowerCase().includes(normalized))
    : [];

  return (
    <div
      className="fixed inset-0 z-50 bg-[#171611]/72 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-4 animate-fadeIn"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="presentation"
    >
      <div role="dialog" aria-modal="true" aria-labelledby="site-search-title" className="bg-[#f8f5ee] border border-[#ded4c2] rounded-[24px] w-full max-w-2xl overflow-hidden shadow-2xl">
        <div className="p-4 sm:p-5 border-b border-[#ebe3d5] flex items-center gap-3">
          <Search size={20} className="text-[#8b6f47]" aria-hidden="true" />
          <label htmlFor="site-search" id="site-search-title" className="sr-only">Search Urban Edge Design</label>
          <input
            ref={inputRef}
            id="site-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search living rooms, studio storage, Japandi..."
            className="w-full bg-transparent text-sm sm:text-base text-[#171611] placeholder-[#171611]/40 focus:outline-none"
          />
          <button onClick={onClose} aria-label="Close search" className="p-2 text-[#171611]/55 hover:text-[#171611] rounded-full hover:bg-[#ebe3d5] transition-colors"><X size={20} /></button>
        </div>

        {!query && (
          <div className="p-6 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#8b6f47] font-semibold">Popular searches</p>
            <div className="flex flex-wrap gap-2">
              {["Small Living Room", "Studio Apartment", "Bedroom Storage", "Japandi Living Room", "Small Kitchen"].map((term) => (
                <button key={term} onClick={() => setQuery(term)} className="px-3.5 py-2 rounded-full border border-[#ded4c2] bg-white/40 text-xs text-[#171611]/75 hover:border-[#8b6f47] hover:text-[#8b6f47] transition-colors">{term}</button>
              ))}
            </div>
          </div>
        )}

        {query && (
          <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5 space-y-6">
            {filteredArticles.length === 0 && filteredRooms.length === 0 ? (
              <div className="text-center py-10"><p className="font-serif text-lg text-[#171611]">No matches yet</p><p className="mt-1 text-xs text-[#171611]/55">Try a broader term such as “living room”, “bedroom” or “studio”.</p></div>
            ) : (
              <>
                {filteredArticles.length > 0 && <div><p className="text-[10px] uppercase tracking-[0.22em] text-[#8b6f47] font-semibold mb-3">Ideas ({filteredArticles.length})</p><div className="space-y-2">{filteredArticles.map((art) => <Link key={art.id} to={`/ideas/${art.slug}`} onClick={onClose} className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-[#ebe3d5]/70 transition-colors group"><img src={art.heroImage} alt="" className="w-14 h-14 rounded-lg object-cover" /><div className="flex-1 min-w-0"><span className="text-[10px] uppercase tracking-wider text-[#8b6f47] font-semibold">{art.category}</span><h4 className="font-serif text-sm font-semibold text-[#171611] truncate">{art.title}</h4></div><ArrowRight size={16} className="text-[#171611]/35 group-hover:text-[#8b6f47]" /></Link>)}</div></div>}
                {filteredRooms.length > 0 && <div><p className="text-[10px] uppercase tracking-[0.22em] text-[#8b6f47] font-semibold mb-3 flex items-center gap-1"><Sparkles size={12} /> Shop the Look ({filteredRooms.length})</p><div className="space-y-2">{filteredRooms.map((room) => <Link key={room.id} to={`/shop-the-look/${room.slug}`} onClick={onClose} className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-[#ebe3d5]/70 transition-colors group"><img src={room.heroImage} alt="" className="w-14 h-14 rounded-lg object-cover" /><div className="flex-1 min-w-0"><span className="text-[10px] uppercase tracking-wider text-[#8b6f47] font-semibold">{room.style}</span><h4 className="font-serif text-sm font-semibold text-[#171611] truncate">{room.title}</h4></div><ArrowRight size={16} className="text-[#171611]/35 group-hover:text-[#8b6f47]" /></Link>)}</div></div>}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
