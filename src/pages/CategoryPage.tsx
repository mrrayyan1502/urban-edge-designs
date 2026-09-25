import { useState } from "react";
import { useParams, Link } from "react-router";
import { ArrowRight, Filter, ChevronRight } from "lucide-react";
import { CATEGORIES, ARTICLES, SHOP_THE_LOOK_ROOMS } from "@/data/contentData";
import PinterestButton from "@/components/PinterestButton";
import AdPlaceholder from "@/components/AdPlaceholder";
import { usePageMeta } from "@/lib/usePageMeta";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [activeSubcat, setActiveSubcat] = useState<string>("All");

  const category = CATEGORIES.find((c) => c.slug === slug) || CATEGORIES[0];

  usePageMeta(
    `${category.name} Ideas & Small Space Solutions | Urban Edge Design`,
    category.description
  );

  const categoryArticles = ARTICLES.filter(
    (a) => a.roomSlug === category.slug || a.category.toLowerCase() === category.name.toLowerCase()
  );

  const categoryRooms = SHOP_THE_LOOK_ROOMS.filter(
    (r) => r.roomType.toLowerCase().includes(category.name.toLowerCase()) || r.slug.includes(category.slug)
  );

  return (
    <div className="bg-[#faf7f2] font-sans text-[#1c1a15] min-h-screen pb-20">
      {/* Breadcrumb Bar */}
      <div className="bg-[#eee8dc]/50 border-b border-[#eee8dc] py-3 text-xs text-[#1c1a15]/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link to="/" className="hover:text-[#4a5d4e]">Home</Link>
          <ChevronRight size={12} />
          <span className="text-[#1c1a15] font-semibold">{category.name}</span>
        </div>
      </div>

      {/* Category Hero Header */}
      <section className="relative py-14 border-b border-[#eee8dc] bg-[#eee8dc]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#4a5d4e] font-semibold block mb-2">
              Content Hub & Design Ideas
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1c1a15]">
              {category.name} <span className="font-serif italic font-normal text-[#4a5d4e]">Ideas</span>
            </h1>
            <p className="mt-4 text-base text-[#1c1a15]/70 font-light leading-relaxed">
              {category.description}
            </p>
          </div>

          {/* Subcategory Filter Pills */}
          <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-[#e5dfd3]">
            <button
              onClick={() => setActiveSubcat("All")}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors ${
                activeSubcat === "All"
                  ? "bg-[#1c1a15] text-[#faf7f2]"
                  : "bg-[#faf7f2] border border-[#e5dfd3] text-[#1c1a15]/80 hover:border-[#4a5d4e]"
              }`}
            >
              All {category.name} Guides
            </button>
            {category.subcategories.map((sub, i) => (
              <button
                key={i}
                onClick={() => setActiveSubcat(sub)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                  activeSubcat === sub
                    ? "bg-[#4a5d4e] text-[#faf7f2]"
                    : "bg-[#faf7f2] border border-[#e5dfd3] text-[#1c1a15]/80 hover:border-[#4a5d4e]"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-serif text-2xl font-bold text-[#1c1a15] mb-8">
          Latest {category.name} Guides & Articles
        </h2>

        {categoryArticles.length === 0 ? (
          <div className="bg-[#eee8dc]/40 border border-dashed border-[#c8bfae] rounded-2xl p-12 text-center">
            <p className="font-serif text-lg text-[#1c1a15]/70">
              New {category.name} guides are being published this week!
            </p>
            <p className="text-xs text-[#1c1a15]/50 mt-1">
              Check out our living room or small apartment hub in the meantime.
            </p>
            <Link
              to="/"
              className="inline-block mt-4 px-6 py-2.5 rounded-full bg-[#1c1a15] text-[#faf7f2] text-xs font-semibold"
            >
              Return to Homepage
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((art) => (
              <article
                key={art.id}
                className="bg-[#faf7f2] border border-[#e5dfd3] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={art.heroImage}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <PinterestButton imageUrl={art.heroImage} title={art.title} />
                  </div>
                  <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#1c1a15]/80 text-[#faf7f2] text-[10px] uppercase font-bold tracking-wider">
                    {art.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-[#1c1a15]/50 block mb-1">
                      {art.readTime} • Updated {art.updatedDate}
                    </span>
                    <Link to={`/ideas/${art.slug}`}>
                      <h3 className="font-serif text-lg font-semibold text-[#1c1a15] group-hover:text-[#4a5d4e] transition-colors leading-snug">
                        {art.title}
                      </h3>
                    </Link>
                    <p className="mt-2 text-xs text-[#1c1a15]/70 font-light line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#eee8dc] flex items-center justify-between text-xs">
                    <span className="text-[#1c1a15]/60 font-medium">By {art.author.name}</span>
                    <Link
                      to={`/ideas/${art.slug}`}
                      className="font-semibold text-[#4a5d4e] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      Read Guide <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <AdPlaceholder slot="Category Page Banner" />

        {/* Category Shop the Look Section */}
        {categoryRooms.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[#eee8dc]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#4a5d4e] font-bold">
                  Curated Products
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1c1a15]">
                  Shop {category.name} Looks
                </h3>
              </div>
              <Link
                to="/shop-the-look"
                className="text-xs uppercase font-semibold text-[#4a5d4e] flex items-center gap-1"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {categoryRooms.map((room) => (
                <div
                  key={room.id}
                  className="bg-[#faf7f2] border border-[#e5dfd3] rounded-2xl overflow-hidden flex flex-col sm:flex-row group"
                >
                  <img
                    src={room.heroImage}
                    alt={room.title}
                    className="w-full sm:w-1/2 h-56 sm:h-auto object-cover"
                  />
                  <div className="p-6 sm:w-1/2 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#4a5d4e] font-bold">
                        {room.style}
                      </span>
                      <h4 className="font-serif text-lg font-semibold text-[#1c1a15] mt-1">
                        {room.title}
                      </h4>
                      <p className="text-xs text-[#1c1a15]/70 font-light mt-2 line-clamp-3">
                        {room.subtitle}
                      </p>
                    </div>
                    <Link
                      to={`/shop-the-look/${room.slug}`}
                      className="mt-4 px-5 py-2.5 rounded-full bg-[#1c1a15] text-[#faf7f2] text-xs font-semibold text-center hover:bg-[#4a5d4e] transition-colors"
                    >
                      Shop Look
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
