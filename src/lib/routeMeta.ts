import { ARTICLES, CATEGORIES, SHOP_THE_LOOK_ROOMS } from "@/data/contentData";
import { TRUST_DOCS } from "@/data/trustData";

export interface RouteMeta {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage: string;
  ogType: string;
  schema?: object[];
}

const SITE_URL = "https://urban-edge-designs.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

export function getRouteMeta(path: string): RouteMeta {
  const cleanPath = path.replace(/\/$/, "") || "/";
  const canonicalUrl = `${SITE_URL}${cleanPath === "/" ? "/" : cleanPath}`;

  // 1. Homepage
  if (cleanPath === "/") {
    return {
      title: "Urban Edge Design | Small Space Interior Ideas & Apartment Inspiration",
      description: "Discover practical small-space interior ideas, apartment inspiration, clever storage solutions and stylish ways to make compact homes work better.",
      canonicalUrl,
      ogImage: DEFAULT_IMAGE,
      ogType: "website",
      schema: [
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Urban Edge Design",
          "url": `${SITE_URL}/`,
          "description": "Small-space interior ideas, apartment inspiration, storage solutions and curated room looks."
        },
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Urban Edge Design",
          "url": `${SITE_URL}/`,
          "logo": DEFAULT_IMAGE
        }
      ]
    };
  }

  // 2. Ideas / Article Page (/ideas/:slug)
  if (cleanPath.startsWith("/ideas/")) {
    const slug = cleanPath.replace("/ideas/", "");
    const article = ARTICLES.find((a) => a.slug === slug);
    if (article) {
      const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.title,
        "description": article.excerpt,
        "image": article.heroImage,
        "datePublished": article.publishDate,
        "dateModified": article.updatedDate,
        "author": {
          "@type": "Person",
          "name": article.author.name
        },
        "publisher": {
          "@type": "Organization",
          "name": "Urban Edge Design",
          "logo": {
            "@type": "ImageObject",
            "url": DEFAULT_IMAGE
          }
        }
      };

      const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": article.category, "item": `${SITE_URL}/category/${article.roomSlug}` },
          { "@type": "ListItem", "position": 3, "name": article.title, "item": canonicalUrl }
        ]
      };

      const faqJsonLd = article.faqs && article.faqs.length > 0 ? {
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

      const schemas: object[] = [articleJsonLd, breadcrumbJsonLd];
      if (faqJsonLd) schemas.push(faqJsonLd);

      return {
        title: `${article.title} | Urban Edge Design`,
        description: article.excerpt,
        canonicalUrl,
        ogImage: article.heroImage || DEFAULT_IMAGE,
        ogType: "article",
        schema: schemas
      };
    }
  }

  // 3. Category Page (/category/:slug)
  if (cleanPath.startsWith("/category/")) {
    const slug = cleanPath.replace("/category/", "");
    const category = CATEGORIES.find((c) => c.slug === slug);
    if (category) {
      return {
        title: `${category.name} Ideas for Small Spaces | Urban Edge Design`,
        description: category.description,
        canonicalUrl,
        ogImage: category.heroImage || DEFAULT_IMAGE,
        ogType: "website"
      };
    }
  }

  // 4. Shop the Look (/shop-the-look and /shop-the-look/:slug)
  if (cleanPath === "/shop-the-look") {
    return {
      title: "Shop the Look | Curated Small Space Furniture & Decor | Urban Edge Design",
      description: "Explore curated furniture and decor pairings designed for compact living rooms, small bedrooms, and studio apartments.",
      canonicalUrl,
      ogImage: DEFAULT_IMAGE,
      ogType: "website"
    };
  }

  if (cleanPath.startsWith("/shop-the-look/")) {
    const slug = cleanPath.replace("/shop-the-look/", "");
    const room = SHOP_THE_LOOK_ROOMS.find((r) => r.slug === slug);
    if (room) {
      return {
        title: `${room.title} | Shop the Look | Urban Edge Design`,
        description: room.subtitle,
        canonicalUrl,
        ogImage: room.heroImage || DEFAULT_IMAGE,
        ogType: "website"
      };
    }
  }

  // 5. Trust / Legal Docs (about-us, privacy-policy, etc.)
  const docSlug = cleanPath.replace(/^\//, "");
  if (TRUST_DOCS[docSlug]) {
    const doc = TRUST_DOCS[docSlug];
    return {
      title: `${doc.title} | Urban Edge Design`,
      description: doc.summary,
      canonicalUrl,
      ogImage: DEFAULT_IMAGE,
      ogType: "website"
    };
  }

  // Default fallback
  return {
    title: "Urban Edge Design | Small Space Interior Ideas & Apartment Inspiration",
    description: "Practical small-space interior ideas, apartment inspiration, clever storage solutions, and curated Shop the Look product guides.",
    canonicalUrl,
    ogImage: DEFAULT_IMAGE,
    ogType: "website"
  };
}
