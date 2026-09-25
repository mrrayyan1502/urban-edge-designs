import { useState } from "react";
import { Link } from "react-router";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";
import { ARTICLES, SHOP_THE_LOOK_ROOMS } from "@/data/contentData";

export default function SearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const filteredArticles = query.trim()
    ? ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.category.toLowerCase().includes(query.toLowerCase()) ||
          a.excerpt.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredRooms = query.trim()
    ? SHOP_THE_LOOK_ROOMS.filter(
        (r) =>
          r.title.toLowerCase().includes(query.toLowerCase()) ||
          r.style.toLowerCase().includes(query.toLowerCase()) ||
          r.roomType.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-[#1c1a15]/70 backdrop-blur-sm flex items-start justify-center pt-16 px-4 animate-fadeIn">
      <div className="bg-[#faf7f2] border border-[#e5dfd3] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#eee8dc] flex items-center gap-3">
          <Search size={20} className="text-[#4a5d4e]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search small living room, studio storage, Japandi..."
            autoFocus
            className="w-full bg-transparent text-sm sm:text-base font-sans text-[#1c1a15] placeholder-[#1c1a15]/40 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-[#1c1a15]/60 hover:text-[#1c1a15] rounded-full hover:bg-[#eee8dc] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Popular Quick Suggestions */}
        {!query && (
          <div className="p-6 space-y-4">
            <p className="text-[11px] uppercase tracking-widest text-[#4a5d4e] font-bold">
              Popular Small-Space Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Small Living Room",
                "Studio Apartment",
                "Under-Bed Storage",
                "Japandi Living Room",
                "Rental Decor",
                "Small Kitchen",
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3.5 py-1.5 rounded-full border border-[#eee8dc] bg-[#eee8dc]/50 text-xs text-[#1c1a15]/80 hover:border-[#4a5d4e] hover:text-[#4a5d4e] transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results List */}
        {query && (
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
            {filteredArticles.length === 0 && filteredRooms.length === 0 ? (
              <p className="text-center py-8 text-sm text-[#1c1a15]/60">
                No articles or rooms found matching "{query}". Try "living room" or "storage".
              </p>
            ) : (
              <>
                {filteredArticles.length > 0 && (
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-[#4a5d4e] font-bold mb-3">
                      Articles ({filteredArticles.length})
                    </p>
                    <div className="space-y-3">
                      {filteredArticles.map((art) => (
                        <Link
                          key={art.id}
                          to={`/ideas/${art.slug}`}
                          onClick={onClose}
                          className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-[#eee8dc] transition-colors group"
                        >
                          <img
                            src={art.heroImage}
                            alt={art.title}
                            className="w-14 h-14 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <span className="text-[10px] uppercase tracking-wider text-[#4a5d4e] font-semibold">
                              {art.category}
                            </span>
                            <h4 className="font-serif text-sm font-semibold text-[#1c1a15] group-hover:text-[#4a5d4e] transition-colors">
                              {art.title}
                            </h4>
                          </div>
                          <ArrowRight size={16} className="text-[#1c1a15]/40 group-hover:text-[#4a5d4e]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {filteredRooms.length > 0 && (
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-[#4a5d4e] font-bold mb-3 flex items-center gap-1">
                      <Sparkles size={12} /> Shop the Look ({filteredRooms.length})
                    </p>
                    <div className="space-y-3">
                      {filteredRooms.map((room) => (
                        <Link
                          key={room.id}
                          to={`/shop-the-look/${room.slug}`}
                          onClick={onClose}
                          className="flex items-center gap-4 p-2.5 rounded-xl hover:bg-[#eee8dc] transition-colors group"
                        >
                          <img
                            src={room.heroImage}
                            alt={room.title}
                            className="w-14 h-14 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <span className="text-[10px] uppercase tracking-wider text-[#4a5d4e] font-semibold">
                              {room.style}
                            </span>
                            <h4 className="font-serif text-sm font-semibold text-[#1c1a15] group-hover:text-[#4a5d4e] transition-colors">
                              {room.title}
                            </h4>
                          </div>
                          <ArrowRight size={16} className="text-[#1c1a15]/40 group-hover:text-[#4a5d4e]" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
