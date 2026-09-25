export interface TrustDoc {
  slug: string;
  title: string;
  lastUpdated: string;
  summary: string;
  sections: { heading: string; text: string }[];
}

export const TRUST_DOCS: Record<string, TrustDoc> = {
  "about-us": {
    slug: "about-us",
    title: "About Urban Edge Design",
    lastUpdated: "September 2026",
    summary: "Better ideas for smaller spaces. We help apartment dwellers, renters, and small-home owners create functional, beautiful interiors.",
    sections: [
      {
        heading: "Our Mission",
        text: "Urban Edge Design was founded to solve a real modern problem: most interior design inspiration is created for vast suburban mansions, while millions of people live in compact urban apartments, flats, studios, and rented spaces. We publish practical, space-smart ideas, clever storage solutions, and accessible product recommendations."
      },
      {
        heading: "Editorial Standards",
        text: "Our editorial process focuses on researching practical layouts, multifunctional furniture categories, materials and decor ideas for compact homes. We aim to distinguish inspiration from verified product information and do not publish fabricated first-hand reviews."
      }
    ]
  },
  "contact": {
    slug: "contact",
    title: "Contact Us",
    lastUpdated: "September 2026",
    summary: "Get in touch with the Urban Edge Design editorial team for press inquiries, content corrections, or advertising partnerships.",
    sections: [
      {
        heading: "Editorial & Press Inquiries",
        text: "Have a design story, small space makeover, or product release to share? Reach us at contact@urban-edge-designs.com."
      },
      {
        heading: "Affiliate & Brand Partnerships",
        text: "For brand collaborations, sponsored posts, and product inclusions, email partnerships@urban-edge-designs.com."
      }
    ]
  },
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy",
    lastUpdated: "September 2026",
    summary: "How Urban Edge Design collects, uses, and protects your personal data in compliance with GDPR and UK Privacy laws.",
    sections: [
      {
        heading: "1. Information We Collect",
        text: "We only collect personal information when you deliberately provide it through a configured contact or newsletter service. Analytics should only be enabled after the required consent and tracking configuration is in place."
      },
      {
        heading: "2. Cookies & Tracking",
        text: "The site may use essential browser storage for preferences. Non-essential analytics or advertising technologies should only be activated in accordance with the consent choices shown in the cookie banner."
      }
    ]
  },
  "cookie-policy": {
    slug: "cookie-policy",
    title: "Cookie Policy",
    lastUpdated: "September 2026",
    summary: "How Urban Edge Design uses essential browser storage and how non-essential analytics or advertising technologies should be handled.",
    sections: [
      {
        heading: "Essential Storage",
        text: "The site may store essential preferences, such as your cookie-consent choice, so the interface can remember your selection."
      },
      {
        heading: "Analytics & Advertising",
        text: "Non-essential analytics, advertising, or affiliate-attribution technologies should only be loaded when they are configured and when the required consent has been obtained. You can reject non-essential tracking from the consent banner."
      },
      {
        heading: "Changing Your Choice",
        text: "If a consent-management control is enabled on the site, you can use it to update your preferences. You can also clear site data in your browser to reset the stored consent choice."
      }
    ]
  },
  "terms-of-service": {
    slug: "terms-of-service",
    title: "Terms of Service",
    lastUpdated: "September 2026",
    summary: "Terms and conditions governing the use of the Urban Edge Design website and published content.",
    sections: [
      {
        heading: "1. Intellectual Property",
        text: "All text, design layouts, original photography, and custom graphics on Urban Edge Design are protected by copyright laws. Unauthorized reproduction or scraping is strictly prohibited."
      }
    ]
  },
  "affiliate-disclosure": {
    slug: "affiliate-disclosure",
    title: "Affiliate & Advertising Disclosure",
    lastUpdated: "September 2026",
    summary: "Transparency regarding how Urban Edge Design earns revenue through affiliate links and advertising.",
    sections: [
      {
        heading: "Affiliate Relationship Transparency",
        text: "Urban Edge Design participates in affiliate marketing programs. This means we may earn a small sales commission if you click through our 'Shop the Look' or product links and make a purchase, at zero extra cost to you."
      },
      {
        heading: "Uncompromised Editorial Independence",
        text: "Affiliate partnerships never dictate our editorial rankings or recommendations. We only feature products we genuinely believe offer high utility, good design, and value for compact living."
      }
    ]
  },
  "editorial-policy": {
    slug: "editorial-policy",
    title: "Editorial Policy & Standards",
    lastUpdated: "September 2026",
    summary: "Our commitment to practical accuracy, ethical product recommendations, and human-crafted journalism.",
    sections: [
      {
        heading: "Fact-Checking & Measurement",
        text: "All dimensions, layout advice, and spatial measurements in our articles are cross-checked against standard furniture ergonomics."
      }
    ]
  },
  "advertising-policy": {
    slug: "advertising-policy",
    title: "Advertising Policy",
    lastUpdated: "September 2026",
    summary: "Guidelines for display advertising (Google AdSense) and sponsored content on Urban Edge Design.",
    sections: [
      {
        heading: "Clear Labeling",
        text: "All display ads and sponsored partner posts are clearly identified with 'Advertisement' or 'Sponsored' tags to maintain reader trust."
      }
    ]
  },
  "image-credits": {
    slug: "image-credits",
    title: "Image Credits & Copyright",
    lastUpdated: "September 2026",
    summary: "Information on photography sources and copyright compliance.",
    sections: [
      {
        heading: "Image Sources",
        text: "Current editorial imagery is sourced from image providers and URLs referenced in the website code, including Unsplash imagery. Before adding third-party brand, designer, or reader-submitted photography, usage rights should be verified. Copyright concerns can be reported to contact@urban-edge-designs.com."
      }
    ]
  },
  "content-corrections": {
    slug: "content-corrections",
    title: "Content Correction Policy",
    lastUpdated: "September 2026",
    summary: "Our protocol for updating outdated prices, fixing typos, and issuing corrections.",
    sections: [
      {
        heading: "Prompt Updates",
        text: "Product pricing and availability can change quickly. Where live retailer verification is not configured, the site should avoid presenting a price as current. If you notice an outdated link or factual error, email contact@urban-edge-designs.com so it can be reviewed."
      }
    ]
  }
};
