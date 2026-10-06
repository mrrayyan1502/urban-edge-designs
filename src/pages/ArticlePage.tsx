import { useState } from "react";
import { useParams, Link } from "react-router";
import { ChevronRight, Clock, Calendar, HelpCircle, Sparkles, AlertCircle, List, ExternalLink, Table } from "lucide-react";
import { ARTICLES, SHOP_THE_LOOK_ROOMS } from "@/data/contentData";
import PinterestButton from "@/components/PinterestButton";
import AdPlaceholder from "@/components/AdPlaceholder";
import { usePageMeta } from "@/lib/usePageMeta";
import NotFound from "@/components/NotFound";

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES.find((a) => a.slug === slug);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  usePageMeta(
    article ? `${article.title} | Urban Edge Design` : "Page Not Found | Urban Edge Design",
    article ? article.excerpt : "The requested article could not be found.",
    !article,
    article?.heroImage
  );

  if (!article) return <NotFound />;

  const relatedArticles = ARTICLES.filter((a) => article.relatedArticleSlugs?.includes(a.slug));
  const relatedRooms = SHOP_THE_LOOK_ROOMS.filter((r) => article.relatedShopLookSlugs?.includes(r.slug));

  // Schema.org Article + FAQ JSON-LD
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.heroImage,
    "datePublished": article.publishDate,
    "dateModified": article.updatedDate,
    "author": {
      "@type": "Organization",
      "name": article.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "Urban Edge Design",
      "logo": {
        "@type": "ImageObject",
        "url": "https://urban-edge-designs.com/og-image.png"
      }
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://urban-edge-designs.com/" },
      { "@type": "ListItem", "position": 2, "name": article.category, "item": `https://urban-edge-designs.com/category/${article.roomSlug}` },
      { "@type": "ListItem", "position": 3, "name": article.title, "item": `https://urban-edge-designs.com/ideas/${article.slug}` }
    ]
  };

  const faqJsonLd = article.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  } : null;

  return (
    <div className="bg-[#f8f5ee] font-sans text-[#171611] min-h-screen pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      {/* Breadcrumb Header */}
      <div className="bg-[#ebe3d5]/50 border-b border-[#ebe3d5] py-3 text-xs text-[#171611]/60 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-2">
          <Link to="/" className="hover:text-[#8b6f47]">Home</Link>
          <ChevronRight size={12} />
          <Link to={`/category/${article.roomSlug}`} className="hover:text-[#8b6f47]">
            {article.category}
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#171611] font-semibold truncate max-w-xs sm:max-w-md">
            {article.title}
          </span>
        </div>
      </div>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Article Header & Title */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#ebe3d5] text-[#8b6f47] text-xs font-semibold uppercase tracking-wider">
            {article.category} • {article.style} Style
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171611] leading-[1.18]">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#171611]/75 font-light leading-relaxed max-w-3xl mx-auto">
            {article.excerpt}
          </p>

          {/* Meta Info Line */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-[#171611]/60 border-t border-b border-[#ebe3d5] py-3">
            <div className="flex items-center gap-2">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-7 h-7 rounded-full object-cover"
              />
              <span className="font-medium text-[#171611]">{article.author.name}</span>
            </div>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> Updated {article.updatedDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {article.readTime}
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-8 max-w-5xl mx-auto relative rounded-2xl overflow-hidden border border-[#ded4c2] shadow-lg">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-[360px] sm:h-[480px] object-cover"
          />
          <div className="absolute top-4 right-4">
            <PinterestButton imageUrl={article.heroImage} title={article.title} />
          </div>
        </div>

        {/* Affiliate Disclosure Banner */}
        <div className="max-w-4xl mx-auto mt-6 bg-[#ebe3d5]/40 border border-[#ded4c2] rounded-xl p-3.5 flex items-start gap-3 text-xs text-[#171611]/70">
          <AlertCircle size={16} className="text-[#8b6f47] shrink-0 mt-0.5" />
          <p>
            <strong>Affiliate Disclosure:</strong> Urban Edge Design is reader-supported. When you buy through our links, we may earn an affiliate commission at no extra cost to you. Read our full{" "}
            <Link to="/affiliate-disclosure" className="underline text-[#8b6f47]">
              disclosure policy
            </Link>.
          </p>
        </div>

        {/* Main Content Body Layout (Sidebar + Main Content) */}
        <div className="max-w-4xl mx-auto mt-12 grid lg:grid-cols-12 gap-10">
          {/* Left Table of Contents Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 bg-[#ebe3d5]/50 border border-[#ded4c2] rounded-2xl p-5">
              <h3 className="font-serif text-sm font-semibold text-[#171611] uppercase tracking-wider flex items-center gap-2 mb-3 pb-2 border-b border-[#ded4c2]">
                <List size={16} className="text-[#8b6f47]" /> In This Guide
              </h3>
              <ul className="space-y-2 text-xs">
                {article.toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-[#171611]/80 hover:text-[#8b6f47] transition-colors block leading-relaxed"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Right Main Article Content */}
          <div className="lg:col-span-8 space-y-10 text-[#171611] text-base leading-relaxed font-light">
            <p className="font-normal text-lg leading-relaxed text-[#171611]/90 border-l-4 border-[#8b6f47] pl-4 italic bg-[#ebe3d5]/20 py-2 rounded-r-lg">
              {article.content.intro}
            </p>

            {/* AEO / GEO Quick Answer Box */}
            {article.content.quickAnswer && (
              <div className="bg-[#f4eee4] border border-[#8b6f47]/30 rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-[#8b6f47] font-semibold text-xs uppercase tracking-wider">
                  <Sparkles size={16} /> Key Takeaway & Quick Answer
                </div>
                <p className="text-base text-[#171611] font-medium leading-relaxed">
                  {article.content.quickAnswer}
                </p>
              </div>
            )}

            <AdPlaceholder slot="In-Article Top" />

            {/* Sections */}
            {article.content.sections.map((sec) => (
              <section id={sec.id} key={sec.id} className="space-y-4 pt-6 border-t border-[#ebe3d5]">
                <h2 className="font-serif text-2xl font-bold text-[#171611] tracking-tight">
                  {sec.title}
                </h2>

                {/* Paragraphs */}
                {sec.paragraphs && sec.paragraphs.length > 0 ? (
                  <div className="space-y-3.5">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-[#171611]/85 leading-relaxed font-light">
                        {p}
                      </p>
                    ))}
                  </div>
                ) : sec.body ? (
                  <div className="space-y-3.5">
                    {sec.body.split("\n\n").map((p, pIdx) => (
                      <p key={pIdx} className="text-[#171611]/85 leading-relaxed font-light">
                        {p}
                      </p>
                    ))}
                  </div>
                ) : null}

                {/* Key Technical Specs / Clearance Rules */}
                {sec.specs && sec.specs.length > 0 && (
                  <div className="my-4 grid grid-cols-2 sm:grid-cols-3 gap-2.5 bg-[#ebe3d5]/30 p-4 rounded-xl border border-[#ded4c2]">
                    {sec.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="text-xs">
                        <span className="block text-[#8b6f47] font-semibold uppercase tracking-wider text-[10px]">
                          {spec.label}
                        </span>
                        <span className="font-medium text-[#171611]">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Section Image */}
                {sec.image && (
                  <div className="relative rounded-2xl overflow-hidden border border-[#ded4c2] my-6 group shadow-sm">
                    <img
                      src={sec.image}
                      alt={sec.imageAlt || sec.title}
                      className="w-full h-[320px] object-cover"
                    />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <PinterestButton imageUrl={sec.image} title={sec.title} />
                    </div>
                  </div>
                )}

                {/* Section Comparison / Data Table */}
                {sec.table && (
                  <div className="my-6 overflow-x-auto rounded-xl border border-[#ded4c2] bg-[#fdfbf7] shadow-sm">
                    {sec.table.caption && (
                      <div className="px-4 py-2.5 bg-[#ebe3d5]/50 border-b border-[#ded4c2] text-xs font-semibold uppercase tracking-wider text-[#8b6f47]">
                        {sec.table.caption}
                      </div>
                    )}
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="bg-[#ebe3d5]/70 border-b border-[#ded4c2]">
                          {sec.table.headers.map((h, hi) => (
                            <th key={hi} className="p-3 font-semibold text-[#171611]">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#ebe3d5]">
                        {sec.table.rows.map((row, ri) => (
                          <tr key={ri} className="hover:bg-[#ebe3d5]/20 transition-colors">
                            {row.map((cell, ci) => (
                              <td key={ci} className="p-3 text-[#171611]/85">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Designer Tip */}
                {sec.tip && (
                  <div className="bg-[#8b6f47]/10 border-l-4 border-[#8b6f47] p-4 rounded-r-xl text-xs sm:text-sm text-[#171611]/90 font-medium">
                    {sec.tip}
                  </div>
                )}

                {/* Recommended Products with Affiliate Links */}
                {sec.recommendedProducts && sec.recommendedProducts.length > 0 && (
                  <div className="my-6 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#8b6f47]">
                      Recommended Design Pieces
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {sec.recommendedProducts.map((prod, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-4 bg-[#fdfbf7] border border-[#ded4c2] rounded-xl flex flex-col justify-between hover:border-[#8b6f47] transition-all shadow-sm"
                        >
                          <div>
                            <div className="flex justify-between items-start gap-2">
                              <span className="font-serif text-sm font-semibold text-[#171611]">{prod.name}</span>
                              <span className="text-xs font-bold text-[#8b6f47] shrink-0">{prod.price}</span>
                            </div>
                            <p className="text-xs text-[#171611]/70 font-light mt-1.5 leading-relaxed">{prod.description}</p>
                          </div>
                          <a
                            href={prod.amazonUrl}
                            target="_blank"
                            rel="nofollow sponsored noopener noreferrer"
                            className="mt-3.5 inline-flex items-center justify-center gap-1.5 w-full py-2 bg-[#171611] text-[#f8f5ee] rounded-lg text-xs font-semibold hover:bg-[#8b6f47] transition-colors"
                          >
                            <span>Check Price on Amazon</span>
                            <ExternalLink size={12} />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            ))}

            {/* Master Comparison Table */}
            {article.content.comparisonTable && (
              <section className="pt-6 border-t border-[#ebe3d5]">
                <div className="flex items-center gap-2 mb-4">
                  <Table className="text-[#8b6f47]" size={20} />
                  <h3 className="font-serif text-2xl font-bold text-[#171611]">
                    {article.content.comparisonTable.caption || "Design Comparison Guide"}
                  </h3>
                </div>
                <div className="overflow-x-auto rounded-xl border border-[#ded4c2] bg-[#fdfbf7] shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#ebe3d5]/70 border-b border-[#ded4c2]">
                        {article.content.comparisonTable.headers.map((h, hi) => (
                          <th key={hi} className="p-3 font-semibold text-[#171611]">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#ebe3d5]">
                      {article.content.comparisonTable.rows.map((row, ri) => (
                        <tr key={ri} className="hover:bg-[#ebe3d5]/20 transition-colors">
                          {row.map((cell, ci) => (
                            <td key={ci} className="p-3 text-[#171611]/85">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            <AdPlaceholder slot="In-Article Bottom" />

            {/* FAQ Accordion Section */}
            {article.faqs.length > 0 && (
              <section id="faq-section" className="pt-8 border-t border-[#ebe3d5]">
                <h3 className="font-serif text-2xl font-bold text-[#171611] flex items-center gap-2 mb-6">
                  <HelpCircle className="text-[#8b6f47]" size={24} /> Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {article.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="border border-[#ded4c2] rounded-xl overflow-hidden bg-[#f8f5ee]"
                    >
                      <button
                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                        className="w-full p-4 text-left font-serif text-base font-semibold text-[#171611] flex justify-between items-center hover:bg-[#ebe3d5]/40 transition-colors"
                      >
                        <span>{faq.question}</span>
                        <span className="text-lg text-[#8b6f47]">{activeFaq === i ? "−" : "+"}</span>
                      </button>
                      {activeFaq === i && (
                        <div className="p-4 pt-0 text-xs sm:text-sm text-[#171611]/75 border-t border-[#ebe3d5] bg-[#ebe3d5]/20">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Author Box */}
            <div className="bg-[#ebe3d5]/50 border border-[#ded4c2] rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-16 h-16 rounded-full object-cover shrink-0 border-2 border-[#f8f5ee]"
              />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8b6f47] font-bold">
                  Written By
                </span>
                <h4 className="font-serif text-lg font-bold text-[#171611]">{article.author.name}</h4>
                <p className="text-xs text-[#8b6f47] font-medium">{article.author.role}</p>
                <p className="text-xs text-[#171611]/70 font-light mt-2 leading-relaxed">
                  {article.author.bio}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Shop the Look Section */}
        {relatedRooms.length > 0 && (
          <section className="max-w-4xl mx-auto mt-16 pt-12 border-t border-[#ebe3d5]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8b6f47] font-bold flex items-center gap-1">
                  <Sparkles size={13} /> Recreate The Style
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#171611]">
                  Related Shop the Look Rooms
                </h3>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedRooms.map((room) => (
                <div
                  key={room.id}
                  className="bg-[#f8f5ee] border border-[#ded4c2] rounded-2xl overflow-hidden group shadow-sm flex flex-col justify-between"
                >
                  <img
                    src={room.heroImage}
                    alt={room.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <span className="text-[10px] uppercase font-bold text-[#8b6f47]">
                      {room.style}
                    </span>
                    <h4 className="font-serif text-lg font-semibold text-[#171611]">{room.title}</h4>
                    <p className="text-xs text-[#171611]/70 font-light mt-1 line-clamp-2">
                      {room.subtitle}
                    </p>
                    <Link
                      to={`/shop-the-look/${room.slug}`}
                      className="mt-4 w-full py-2.5 rounded-full bg-[#171611] text-[#f8f5ee] text-xs font-semibold text-center hover:bg-[#8b6f47] transition-colors block"
                    >
                      Shop This Room
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="max-w-4xl mx-auto mt-16 pt-12 border-t border-[#ebe3d5]">
            <h3 className="font-serif text-2xl font-bold text-[#171611] mb-8">
              More Small Space Ideas
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedArticles.map((art) => (
                <Link
                  key={art.id}
                  to={`/ideas/${art.slug}`}
                  className="bg-[#f8f5ee] border border-[#ded4c2] rounded-2xl p-4 flex gap-4 items-center group hover:border-[#8b6f47] transition-colors"
                >
                  <img
                    src={art.heroImage}
                    alt={art.title}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#8b6f47]">
                      {art.category}
                    </span>
                    <h4 className="font-serif text-sm font-semibold text-[#171611] group-hover:text-[#8b6f47] transition-colors line-clamp-2">
                      {art.title}
                    </h4>
                    <span className="text-[11px] text-[#171611]/50 mt-1 block">
                      {art.readTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}
