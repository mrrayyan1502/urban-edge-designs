import { useState } from "react";
import { useParams, Link } from "react-router";
import { Sparkles, ShoppingBag, ExternalLink, AlertCircle, ChevronRight, Check } from "lucide-react";
import { SHOP_THE_LOOK_ROOMS, ShopLookRoom, Product } from "@/data/contentData";
import PinterestButton from "@/components/PinterestButton";
import AdPlaceholder from "@/components/AdPlaceholder";
import { usePageMeta } from "@/lib/usePageMeta";

export default function ShopTheLookPage() {
  const { slug } = useParams<{ slug: string }>();
  const [selectedTab, setSelectedTab] = useState<"featured" | "budget">("featured");

  // If slug is present, render single room look detail view, otherwise render full gallery
  const activeRoom = slug
    ? SHOP_THE_LOOK_ROOMS.find((r) => r.slug === slug) || SHOP_THE_LOOK_ROOMS[0]
    : null;

  usePageMeta(
    activeRoom
      ? `${activeRoom.title} | Shop the Look | Urban Edge Design`
      : "Shop the Look | Small Space Interior Design Inspiration",
    activeRoom
      ? activeRoom.subtitle
      : "Discover curated furniture, decor, lighting, and rugs for compact living rooms, studio apartments, and small bedrooms."
  );

  return (
    <div className="bg-[#faf7f2] font-sans text-[#1c1a15] min-h-screen pb-24">
      {/* Breadcrumb Header */}
      <div className="bg-[#eee8dc]/50 border-b border-[#eee8dc] py-3 text-xs text-[#1c1a15]/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link to="/" className="hover:text-[#4a5d4e]">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop-the-look" className="hover:text-[#4a5d4e]">Shop the Look</Link>
          {activeRoom && (
            <>
              <ChevronRight size={12} />
              <span className="text-[#1c1a15] font-semibold truncate">{activeRoom.title}</span>
            </>
          )}
        </div>
      </div>

      {activeRoom ? (
        /* SINGLE ROOM DETAIL VIEW */
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Room Hero Image & Palette */}
            <div className="lg:col-span-7 space-y-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#e5dfd3] shadow-xl group">
                <img
                  src={activeRoom.heroImage}
                  alt={activeRoom.title}
                  className="w-full h-[460px] sm:h-[560px] object-cover"
                />
                <div className="absolute top-4 right-4">
                  <PinterestButton imageUrl={activeRoom.heroImage} title={activeRoom.title} />
                </div>
                <span className="absolute bottom-4 left-4 bg-[#1c1a15]/80 text-[#faf7f2] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                  {activeRoom.style} • {activeRoom.roomType}
                </span>
              </div>

              {/* Color Palette Display */}
              <div className="bg-[#eee8dc]/40 border border-[#e5dfd3] rounded-2xl p-5">
                <span className="text-[10px] uppercase font-bold text-[#4a5d4e] tracking-widest block mb-2">
                  Room Color Palette
                </span>
                <div className="flex items-center gap-3">
                  {activeRoom.colorPalette.map((hex, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-full border border-black/10 shadow-inner"
                        style={{ backgroundColor: hex }}
                      ></div>
                      <span className="text-[10px] font-mono text-[#1c1a15]/60 uppercase hidden sm:inline">
                        {hex}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Designer Notes */}
              <div className="bg-[#4a5d4e]/10 border-l-4 border-[#4a5d4e] p-5 rounded-r-2xl text-xs sm:text-sm text-[#1c1a15]/90">
                <span className="font-bold text-[#4a5d4e] uppercase text-[10px] tracking-widest block mb-1">
                  Designer Insight
                </span>
                {activeRoom.designerNotes}
              </div>
            </div>

            {/* Right Product Shopping List */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#4a5d4e] font-semibold block mb-1">
                  Shop the Look Collection
                </span>
                <h1 className="font-serif text-3xl font-bold text-[#1c1a15]">
                  {activeRoom.title}
                </h1>
                <p className="text-xs sm:text-sm text-[#1c1a15]/75 font-light mt-2 leading-relaxed">
                  {activeRoom.description}
                </p>
              </div>

              {/* Affiliate Disclosure Notice */}
              <div className="bg-[#eee8dc]/40 border border-[#e5dfd3] rounded-xl p-3 flex items-start gap-2 text-[11px] text-[#1c1a15]/70">
                <AlertCircle size={14} className="text-[#4a5d4e] shrink-0 mt-0.5" />
                <p>
                  This page contains affiliate links. If you buy through these links, we may earn a commission at no extra cost to you.
                </p>
              </div>

              {/* Featured vs Budget Tabs */}
              {activeRoom.budgetAlternatives.length > 0 && (
                <div className="flex border-b border-[#e5dfd3]">
                  <button
                    onClick={() => setSelectedTab("featured")}
                    className={`pb-2 text-xs uppercase tracking-wider font-bold border-b-2 transition-colors mr-6 ${
                      selectedTab === "featured"
                        ? "border-[#1c1a15] text-[#1c1a15]"
                        : "border-transparent text-[#1c1a15]/40 hover:text-[#1c1a15]"
                    }`}
                  >
                    Main Recommendations ({activeRoom.products.length})
                  </button>
                  <button
                    onClick={() => setSelectedTab("budget")}
                    className={`pb-2 text-xs uppercase tracking-wider font-bold border-b-2 transition-colors ${
                      selectedTab === "budget"
                        ? "border-[#4a5d4e] text-[#4a5d4e]"
                        : "border-transparent text-[#1c1a15]/40 hover:text-[#1c1a15]"
                    }`}
                  >
                    Budget Alternatives ({activeRoom.budgetAlternatives.length})
                  </button>
                </div>
              )}

              {/* Product Cards Grid */}
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1">
                {(selectedTab === "featured" ? activeRoom.products : activeRoom.budgetAlternatives).map(
                  (product) => (
                    <div
                      key={product.id}
                      className="bg-[#faf7f2] border border-[#e5dfd3] rounded-2xl p-4 flex gap-4 items-center hover:border-[#4a5d4e] transition-all shadow-sm"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20 rounded-xl object-cover shrink-0 border border-[#eee8dc]"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase font-bold text-[#4a5d4e] tracking-wider">
                            {product.brand}
                          </span>
                          <span className="font-serif text-sm font-bold text-[#1c1a15]">
                            {product.price}
                          </span>
                        </div>
                        <h4 className="font-serif text-sm font-semibold text-[#1c1a15] truncate mt-0.5">
                          {product.name}
                        </h4>
                        <p className="text-[11px] text-[#1c1a15]/60 font-light line-clamp-1 mt-0.5">
                          {product.description}
                        </p>
                        <div className="mt-2.5 flex items-center justify-between">
                          <span className="text-[10px] text-[#1c1a15]/40 uppercase">
                            Via {product.retailer}
                          </span>
                          <a
                            href={product.affiliateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-1.5 rounded-full bg-[#1c1a15] text-[#faf7f2] text-[11px] font-semibold hover:bg-[#4a5d4e] transition-colors flex items-center gap-1"
                          >
                            Shop Now <ExternalLink size={12} />
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </article>
      ) : (
        /* FULL GALLERY OVERVIEW */
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#4a5d4e] font-semibold flex items-center justify-center gap-1">
              <Sparkles size={14} /> Shop the Look
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1c1a15]">
              Curated Small Space Rooms
            </h1>
            <p className="text-sm text-[#1c1a15]/75 font-light leading-relaxed">
              Explore complete room layouts and shop exact furniture, lighting, and decor pieces designed for compact flats and apartments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SHOP_THE_LOOK_ROOMS.map((room) => (
              <div
                key={room.id}
                className="bg-[#faf7f2] border border-[#e5dfd3] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.heroImage}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#1c1a15]/80 text-[#faf7f2] px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider">
                    {room.style}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#1c1a15] group-hover:text-[#4a5d4e] transition-colors">
                      {room.title}
                    </h3>
                    <p className="text-xs text-[#1c1a15]/70 font-light mt-1.5 leading-relaxed">
                      {room.subtitle}
                    </p>
                  </div>

                  <Link
                    to={`/shop-the-look/${room.slug}`}
                    className="w-full py-3 rounded-full bg-[#1c1a15] text-[#faf7f2] text-xs font-semibold text-center hover:bg-[#4a5d4e] transition-colors block"
                  >
                    View Room & Products
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <AdPlaceholder slot="Shop the Look Gallery Bottom" />
        </section>
      )}
    </div>
  );
}
