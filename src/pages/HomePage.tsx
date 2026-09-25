import { Link } from "react-router";
import { ArrowRight, Sparkles, BookOpen, Layers, CheckCircle2, ChevronRight, Compass } from "lucide-react";
import { ARTICLES, CATEGORIES, SHOP_THE_LOOK_ROOMS, EVERGREEN_GUIDES } from "@/data/contentData";
import PinterestButton from "@/components/PinterestButton";
import AdPlaceholder from "@/components/AdPlaceholder";
import { usePageMeta } from "@/lib/usePageMeta";

export default function HomePage() {
  usePageMeta(
    "Urban Edge Design | Small Space Interior Ideas & Apartment Inspiration",
    "Discover practical small-space interior ideas, apartment inspiration, clever storage solutions and stylish ways to make compact homes work better."
  );

  return (
    <div className="bg-[#f8f5ee] font-sans text-[#171611]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#ebe3d5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Editorial Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ebe3d5] text-[#8b6f47] text-xs font-semibold uppercase tracking-wider">
                <Compass size={14} /> Practical Micro-Living Architecture
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171611] leading-[1.15]">
                Better ideas for <br />
                <span className="italic font-serif font-normal text-[#8b6f47]">smaller spaces.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#171611]/75 font-light leading-relaxed max-w-2xl">
                Practical interior inspiration, clever storage solutions, and stylish furniture ideas for apartments, flats, studios, and compact urban homes.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/category/living-room"
                  className="px-7 py-3.5 rounded-full bg-[#171611] text-[#f8f5ee] text-sm font-semibold hover:bg-[#8b6f47] transition-colors shadow-sm flex items-center gap-2"
                >
                  Explore Small Space Ideas <ArrowRight size={16} />
                </Link>
                <Link
                  to="/shop-the-look"
                  className="px-7 py-3.5 rounded-full border border-[#171611]/20 text-[#171611] text-sm font-semibold hover:border-[#171611] transition-colors flex items-center gap-2 bg-[#f8f5ee]"
                >
                  <Sparkles size={16} className="text-[#8b6f47]" /> Shop the Look
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-[#ebe3d5] flex items-center gap-6 text-xs text-[#171611]/60">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#8b6f47]" /> Rental-Friendly Hacks
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#8b6f47]" /> Space-Optimized
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#8b6f47]" /> Budget Conscious
                </span>
              </div>
            </div>

            {/* Right Featured Room Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#ded4c2] group">
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80"
                  alt="Warm Minimalist Small Living Room Inspiration"
                  className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-10">
                  <PinterestButton
                    imageUrl="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80"
                    title="Warm Minimalist Small Living Room Ideas"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#171611]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-[#f8f5ee]">
                  <span className="text-[10px] uppercase tracking-widest text-[#c8ad7f] font-bold">
                    Featured Look · Living Room
                  </span>
                  <h3 className="font-serif text-xl font-semibold mt-1">
                    Warm Minimalist Small Living Room
                  </h3>
                  <Link
                    to="/shop-the-look/warm-minimalist-living-room"
                    className="inline-flex items-center gap-1.5 text-xs text-[#f8f5ee]/90 hover:text-white mt-2 font-medium underline underline-offset-4"
                  >
                    Shop Furniture & Decor <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BROWSE BY ROOM */}
      <section className="py-16 bg-[#ebe3d5]/40 border-b border-[#ebe3d5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#8b6f47] font-semibold block mb-1">
                Explore Categories
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#171611]">Browse by Room</h2>
            </div>
            <Link
              to="/category/living-room"
              className="text-xs uppercase font-semibold text-[#8b6f47] hover:text-[#171611] flex items-center gap-1 mt-2 sm:mt-0"
            >
              All Categories <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="group bg-[#f8f5ee] border border-[#ded4c2] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={cat.heroImage}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#171611]/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#171611] group-hover:text-[#8b6f47] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-[#171611]/60 mt-1 line-clamp-2 font-light">
                      {cat.description}
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold text-[#8b6f47] mt-4 flex items-center gap-1 uppercase tracking-wider">
                    Browse Hub <ChevronRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRENDING IDEAS & EDITORIAL ARTICLES */}
      <section className="py-20 border-b border-[#ebe3d5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#8b6f47] font-semibold block mb-1">
                Handpicked Small-Space Guides
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171611]">
                Trending Small Space Ideas
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((art) => (
              <article
                key={art.id}
                className="bg-[#f8f5ee] border border-[#ded4c2] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={art.heroImage}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <PinterestButton imageUrl={art.heroImage} title={art.title} />
                  </div>
                  <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#171611]/80 text-[#f8f5ee] text-[10px] uppercase font-bold tracking-wider backdrop-blur-sm">
                    {art.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-[#171611]/50 mb-2">
                      <span>{art.readTime}</span>
                      <span>•</span>
                      <span>Updated {art.updatedDate}</span>
                    </div>
                    <Link to={`/ideas/${art.slug}`}>
                      <h3 className="font-serif text-xl font-semibold text-[#171611] group-hover:text-[#8b6f47] transition-colors leading-snug">
                        {art.title}
                      </h3>
                    </Link>
                    <p className="mt-2.5 text-xs text-[#171611]/70 font-light line-clamp-3 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#ebe3d5] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={art.author.avatar}
                        alt={art.author.name}
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <span className="text-xs text-[#171611]/80 font-medium">{art.author.name}</span>
                    </div>
                    <Link
                      to={`/ideas/${art.slug}`}
                      className="text-xs font-semibold text-[#8b6f47] group-hover:translate-x-1 transition-transform flex items-center gap-1"
                    >
                      Read Guide <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <AdPlaceholder slot="Homepage Mid-Feed" />
        </div>
      </section>

      {/* 4. SMALL SPACE SOLUTIONS (PROBLEM SOLVING CARDS) */}
      <section className="py-20 bg-[#171611] text-[#f8f5ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c8ad7f] font-semibold block mb-2">
              Practical Problem Solvers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">Small Space Solutions</h2>
            <p className="mt-3 text-sm text-[#f8f5ee]/70 font-light">
              Architectural tricks and spatial zoning tips for common compact layout challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Need More Storage?",
                desc: "Discover hydraulic lift beds, vertical wall racks, and hidden storage ottomans.",
                icon: Layers,
                link: "/category/storage"
              },
              {
                title: "Making a Small Room Look Bigger",
                desc: "Optical sightline tricks, elevated leggy furniture, and strategic daylight mirrors.",
                icon: Compass,
                link: "/ideas/small-living-room-ideas"
              },
              {
                title: "Furniture for Small Spaces",
                desc: "Nesting tables, folding drop-leaf dining, and slim armrest compact seating.",
                icon: BookOpen,
                link: "/category/living-room"
              },
              {
                title: "Rental-Friendly Upgrades",
                desc: "Peel-and-stick tiles, tension pole shelves, and non-damaging hanging systems.",
                icon: CheckCircle2,
                link: "/category/small-apartments"
              },
              {
                title: "Creating Zones in Studio Apartments",
                desc: "Slatted bamboo dividers, open bookcases, and rug boundary zoning.",
                icon: Sparkles,
                link: "/ideas/studio-apartment-layout-ideas"
              }
            ].map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#211f1a] border border-[#3a342a] rounded-2xl p-6 hover:border-[#8b6f47] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#8b6f47]/20 text-[#c8ad7f] flex items-center justify-center mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-[#f8f5ee]">{sol.title}</h3>
                    <p className="mt-2 text-xs text-[#f8f5ee]/70 font-light leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>
                  <Link
                    to={sol.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c8ad7f] hover:text-[#f8f5ee] mt-6"
                  >
                    Explore Solutions <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. SHOP THE LOOK FEATURED SECTION */}
      <section className="py-20 border-b border-[#ebe3d5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#8b6f47] font-semibold block mb-1">
                Curated Furniture & Decor Pairs
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171611]">
                Shop the Look
              </h2>
            </div>
            <Link
              to="/shop-the-look"
              className="text-xs uppercase font-semibold text-[#8b6f47] hover:text-[#171611] flex items-center gap-1 mt-2 sm:mt-0"
            >
              View All Room Looks <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {SHOP_THE_LOOK_ROOMS.map((room) => (
              <div
                key={room.id}
                className="bg-[#f8f5ee] border border-[#ded4c2] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.heroImage}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#171611]/80 text-[#f8f5ee] px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider">
                    {room.style}
                  </div>
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

                  {/* Included Products Quick Count */}
                  <div className="bg-[#ebe3d5]/50 rounded-xl p-3 flex items-center justify-between text-xs text-[#171611]/80 font-medium">
                    <span>{room.products.length} Curated Items Included</span>
                    <span className="text-[#8b6f47] font-semibold">From {room.products[0]?.price}</span>
                  </div>

                  <Link
                    to={`/shop-the-look/${room.slug}`}
                    className="w-full py-3 rounded-full bg-[#171611] text-[#f8f5ee] text-xs font-semibold text-center hover:bg-[#8b6f47] transition-colors block"
                  >
                    Shop This Room Look
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. POPULAR EVERGREEN GUIDES */}
      <section className="py-20 bg-[#ebe3d5]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8b6f47] font-semibold block mb-1">
              Evergreen SEO Knowledge Hub
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#171611]">Popular Small Space Guides</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {EVERGREEN_GUIDES.map((g, i) => (
              <Link
                key={i}
                to={`/ideas/${g.slug}`}
                className="bg-[#f8f5ee] border border-[#ded4c2] rounded-2xl p-5 hover:border-[#8b6f47] transition-colors flex items-center gap-4 group"
              >
                <img
                  src={g.image}
                  alt={g.title}
                  className="w-20 h-20 rounded-xl object-cover shrink-0"
                />
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#8b6f47] tracking-wider">
                    {g.category}
                  </span>
                  <h4 className="font-serif text-sm font-semibold text-[#171611] group-hover:text-[#8b6f47] transition-colors line-clamp-2 mt-0.5">
                    {g.title}
                  </h4>
                  <span className="text-[11px] text-[#171611]/50 block mt-1">{g.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
