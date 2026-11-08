import { useState } from "react";
import { useParams, Link } from "react-router";
import { Sparkles, ExternalLink, AlertCircle, ChevronRight, CheckCircle2 } from "lucide-react";
import { SHOP_THE_LOOK_ROOMS } from "@/data/contentData";
import PinterestButton from "@/components/PinterestButton";
import AdPlaceholder from "@/components/AdPlaceholder";
import { usePageMeta } from "@/lib/usePageMeta";
import NotFound from "@/components/NotFound";

export default function ShopTheLookPage() {
  const { slug } = useParams<{ slug: string }>();
  const [selectedTab, setSelectedTab] = useState<"featured" | "budget">("featured");

  // If slug is present, render single room look detail view, otherwise render full gallery
  const activeRoom = slug ? SHOP_THE_LOOK_ROOMS.find((r) => r.slug === slug) : null;
  const invalidRoom = Boolean(slug && !activeRoom);

  usePageMeta(
    activeRoom
      ? `${activeRoom.title} | Shop the Look | Urban Edge Design`
      : "Shop the Look | Curated Small Space Furniture | Urban Edge Design",
    activeRoom
      ? activeRoom.subtitle
      : invalidRoom
        ? "The requested room collection could not be found."
        : "Explore curated small-space furniture packages and shoppable room lookbooks for apartments, living rooms, and bedrooms from Urban Edge Design.",
    invalidRoom,
    activeRoom?.heroImage
  );

  if (invalidRoom) return <NotFound />;

  return (
    <div className="bg-[#f8f5ee] font-sans text-[#171611] min-h-screen pb-24">
      {/* Breadcrumb Header */}
      <div className="bg-[#ebe3d5]/50 border-b border-[#ebe3d5] py-3 text-xs text-[#171611]/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link to="/" className="hover:text-[#8b6f47]">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop-the-look" className="hover:text-[#8b6f47]">Shop the Look</Link>
          {activeRoom && (
            <>
              <ChevronRight size={12} />
              <span className="text-[#171611] font-semibold truncate">{activeRoom.title}</span>
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
              <div className="relative rounded-2xl overflow-hidden border border-[#ded4c2] shadow-xl group">
                <img
                  src={activeRoom.heroImage}
                  alt={activeRoom.title}
                  className="w-full h-[460px] sm:h-[560px] object-cover"
                />
                <div className="absolute top-4 right-4">
                  <PinterestButton imageUrl={activeRoom.heroImage} title={activeRoom.title} />
                </div>
                <span className="absolute bottom-4 left-4 bg-[#171611]/80 text-[#f8f5ee] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                  {activeRoom.style} • {activeRoom.roomType}
                </span>
              </div>

              {/* Color Palette Display */}
              <div className="bg-[#ebe3d5]/40 border border-[#ded4c2] rounded-2xl p-5">
                <span className="text-[10px] uppercase font-bold text-[#8b6f47] tracking-widest block mb-2">
                  Room Color Palette
                </span>
                <div className="flex items-center gap-3">
                  {activeRoom.colorPalette.map((hex, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-full border border-black/10 shadow-inner"
                        style={{ backgroundColor: hex }}
                      ></div>
                      <span className="text-[10px] font-mono text-[#171611]/60 uppercase hidden sm:inline">
                        {hex}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Designer Notes */}
              <div className="bg-[#8b6f47]/10 border-l-4 border-[#8b6f47] p-5 rounded-r-2xl text-xs sm:text-sm text-[#171611]/90">
                <span className="font-bold text-[#8b6f47] uppercase text-[10px] tracking-widest block mb-1">
                  Designer Insight
                </span>
                {activeRoom.designerNotes}
              </div>
            </div>

            {/* Right Product Shopping List */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#8b6f47] font-semibold block mb-1">
                  Shop the Look Collection
                </span>
                <h1 className="font-serif text-3xl font-bold text-[#171611]">
                  {activeRoom.title}
                </h1>
                <h2 className="font-serif text-base font-semibold text-[#8b6f47] mt-3">
                  The Design Concept: Warm Neutrals & Natural Textures
                </h2>
                <p className="text-xs sm:text-sm text-[#171611]/75 font-light mt-1.5 leading-relaxed">
                  {activeRoom.description}
                </p>
              </div>

              {/* Affiliate Disclosure Notice */}
              <div className="bg-[#ebe3d5]/40 border border-[#ded4c2] rounded-xl p-3 flex items-start gap-2 text-[11px] text-[#171611]/70">
                <AlertCircle size={14} className="text-[#8b6f47] shrink-0 mt-0.5" />
                <p>
                  This page contains affiliate links. If you buy through these links, we may earn a commission at no extra cost to you.
                </p>
              </div>

              {/* Featured vs Budget Tabs */}
              <div>
                <h2 className="font-serif text-lg font-bold text-[#171611] mb-3">
                  Curated Furniture & Specification Cards
                </h2>
                {activeRoom.budgetAlternatives.length > 0 && (
                  <div className="flex border-b border-[#ded4c2] mb-4">
                    <button
                      onClick={() => setSelectedTab("featured")}
                      className={`pb-2 text-xs uppercase tracking-wider font-bold border-b-2 transition-colors mr-6 ${
                        selectedTab === "featured"
                          ? "border-[#171611] text-[#171611]"
                          : "border-transparent text-[#171611]/40 hover:text-[#171611]"
                      }`}
                    >
                      Main Recommendations ({activeRoom.products.length})
                    </button>
                    <button
                      onClick={() => setSelectedTab("budget")}
                      className={`pb-2 text-xs uppercase tracking-wider font-bold border-b-2 transition-colors ${
                        selectedTab === "budget"
                          ? "border-[#8b6f47] text-[#8b6f47]"
                          : "border-transparent text-[#171611]/40 hover:text-[#171611]"
                      }`}
                    >
                      Budget Alternatives ({activeRoom.budgetAlternatives.length})
                    </button>
                  </div>
                )}
              </div>

              {/* Product Cards Grid */}
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1">
                {(selectedTab === "featured" ? activeRoom.products : activeRoom.budgetAlternatives).map(
                  (product) => (
                    <div
                      key={product.id}
                      className="bg-[#f8f5ee] border border-[#ded4c2] rounded-2xl p-4 flex flex-col gap-3 hover:border-[#8b6f47] transition-all shadow-sm"
                    >
                      <div className="flex gap-4 items-start">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-20 h-20 rounded-xl object-cover shrink-0 border border-[#ebe3d5]"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] uppercase font-bold text-[#8b6f47] tracking-wider">
                              {product.brand}
                            </span>
                            <span className="font-serif text-sm font-bold text-[#171611]">
                              {product.price}
                            </span>
                          </div>
                          <h3 className="font-serif text-sm font-semibold text-[#171611] truncate mt-0.5">
                            {product.name}
                          </h3>
                          <p className="text-[11px] text-[#171611]/60 font-light line-clamp-2 mt-0.5">
                            {product.description}
                          </p>
                        </div>
                      </div>

                      {/* On-Site Product Specification Card */}
                      <div className="bg-[#ebe3d5]/30 rounded-xl p-2.5 border border-[#ded4c2]/60 text-[11px] text-[#171611]/80 space-y-1">
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="font-bold text-[#8b6f47] uppercase tracking-wider flex items-center gap-1">
                            <CheckCircle2 size={12} className="text-[#8b6f47]" /> Product Specification
                          </span>
                          <span className="text-[#171611]/50 font-mono">
                            {product.tier === "Featured" ? "Primary Anchor" : "Compact Alternative"}
                          </span>
                        </div>
                        <p className="text-[10px] text-[#171611]/70 leading-snug">
                          Scale Profile: Proportional footprint curated for compact spaces under 600 sq. ft.
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[10px] text-[#171611]/50 uppercase tracking-wider">
                          Retailer: {product.retailer}
                        </span>
                        <a
                          href={product.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer sponsored nofollow"
                          className="px-3.5 py-1.5 rounded-full bg-[#171611] text-[#f8f5ee] text-[11px] font-semibold hover:bg-[#8b6f47] transition-colors flex items-center gap-1"
                        >
                          Browse Similar <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Contextual Space Layout & Editorial Advice Section */}
          <div className="mt-16 pt-12 border-t border-[#ded4c2] grid md:grid-cols-2 gap-10">
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#171611]">
                Compact Space Styling & Layout Advice
              </h2>
              <div className="text-sm text-[#171611]/80 leading-relaxed space-y-3 font-light">
                <p>
                  {activeRoom.slug === "modern-small-bedroom"
                    ? "In compact bedrooms under 120 square feet, maintaining a 24 to 30-inch perimeter walkway around the bed provides optimal flow where room dimensions permit. In tighter urban layouts, a compact 18 to 20-inch walkway functions effectively when paired with floating bedside shelves and articulating wall sconces to keep floor and tabletop surfaces completely clear."
                    : activeRoom.slug === "japandi-living-room"
                    ? "In open-concept studio apartments, maintain visual continuity by keeping furniture profiles low to the ground. Pair grounded seating with light-toned timbers and woven paper cord textures to anchor defined living and sleep zones without obstructing natural window light."
                    : "Preserve clear circulation in narrow living rooms by maintaining 14 to 18 inches between your sofa and coffee table edge. Elevating seating on slender exposed legs allows light to pass underneath, making compact living areas feel noticeably more open."}
                </p>
                <div className="bg-[#ebe3d5]/40 rounded-xl p-4 border border-[#ded4c2] text-xs space-y-1">
                  <span className="font-semibold text-[#8b6f47] block uppercase tracking-wider text-[10px]">
                    Curated Space Guideline
                  </span>
                  <p className="italic text-[#171611]/85">"{activeRoom.designerNotes}"</p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#171611]">
                Related Room Guides & Layout Ideas
              </h2>
              <div className="text-sm text-[#171611]/80 leading-relaxed space-y-3 font-light">
                <p>
                  Explore our comprehensive small-space editorial guides for layout diagrams, lighting advice, and storage strategies:
                </p>
                <ul className="space-y-2 text-xs">
                  <li>
                    <Link to="/ideas/small-living-room-ideas" className="text-[#8b6f47] hover:underline font-medium">
                      Small Living Room Ideas: Maximizing Functional Floor Area →
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop-the-look" className="text-[#8b6f47] hover:underline font-medium">
                      Shop the Look Hub: Browse All Curated Room Collections →
                    </Link>
                  </li>
                  <li>
                    <Link to="/affiliate-disclosure" className="text-[#171611]/60 hover:underline">
                      Affiliate & Advertising Disclosure: Learn How We Review Products →
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </article>
      ) : (
        /* FULL GALLERY OVERVIEW */
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8b6f47] font-semibold flex items-center justify-center gap-1">
              <Sparkles size={14} /> Shop the Look
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#171611]">
              Curated Small Space Rooms
            </h1>
            <p className="text-sm text-[#171611]/75 font-light leading-relaxed">
              Explore complete room layouts and shop exact furniture, lighting, and decor pieces designed for compact flats and apartments.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="font-serif text-2xl font-bold text-[#171611] mb-2">
              Explore Curated Rooms by Space
            </h2>
            <p className="text-xs sm:text-sm text-[#171611]/70 font-light">
              Choose a room package below to inspect tailored dimensions, color palettes, and shoppable furniture recommendations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SHOP_THE_LOOK_ROOMS.map((room) => (
              <div
                key={room.id}
                className="bg-[#f8f5ee] border border-[#ded4c2] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.heroImage}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#171611]/80 text-[#f8f5ee] px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider">
                    {room.style}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[#171611] group-hover:text-[#8b6f47] transition-colors">
                      {room.title}
                    </h3>
                    <p className="text-xs text-[#171611]/70 font-light mt-1.5 leading-relaxed">
                      {room.subtitle}
                    </p>
                  </div>

                  <Link
                    to={`/shop-the-look/${room.slug}`}
                    className="w-full py-3 rounded-full bg-[#171611] text-[#f8f5ee] text-xs font-semibold text-center hover:bg-[#8b6f47] transition-colors block"
                  >
                    View Room & Products
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Hub Editorial Context Sections */}
          <div className="mt-20 pt-12 border-t border-[#ded4c2] grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#171611]">
                How We Curate Space-Optimized Furniture
              </h2>
              <p className="text-sm text-[#171611]/80 leading-relaxed font-light">
                Furnishing a small apartment or compact home requires balance: every piece must serve a functional purpose while keeping floor space and natural sightlines open. At Urban Edge Design, our collections curate complete, space-optimized room layouts tailored specifically for urban living under 600 square feet.
              </p>
              <p className="text-sm text-[#171611]/80 leading-relaxed font-light">
                Instead of browsing endless catalogs of oversized furniture, explore our coordinated room concepts. Each collection features proportional furniture, multifunctional storage, and cohesive color palettes designed to maximize compact square footage.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-[#171611]">
                Design Advice & Shopping Transparency
              </h2>
              <p className="text-sm text-[#171611]/80 leading-relaxed font-light">
                For in-depth space planning diagrams and styling tips, explore our comprehensive guides on{" "}
                <Link to="/ideas/small-living-room-ideas" className="text-[#8b6f47] underline font-medium">
                  small living room ideas
                </Link>
                , bedroom storage strategies, and studio apartment floor plans.
              </p>
              <div className="bg-[#ebe3d5]/40 rounded-xl p-4 border border-[#ded4c2] text-xs text-[#171611]/75 leading-relaxed">
                Urban Edge Design participates in select affiliate programs. When you click through our curated recommendations, we may earn an affiliate commission at no extra cost to you. Read our full{" "}
                <Link to="/affiliate-disclosure" className="text-[#8b6f47] underline font-medium">
                  Affiliate & Advertising Disclosure
                </Link>{" "}
                for complete details.
              </div>
            </div>
          </div>

          <AdPlaceholder slot="Shop the Look Gallery Bottom" />
        </section>
      )}
    </div>
  );
}
