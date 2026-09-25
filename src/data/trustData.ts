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
        text: "Our editorial team tests, researches, and selects spatial layouts, multifunctional furniture, and decor that prioritize real-life utility, budget transparency, and durability. We never publish mass-generated thin pages or fake reviews."
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
        text: "We collect voluntary email addresses when you subscribe to our newsletter and anonymous analytics usage data (via Google Analytics 4) to improve website performance."
      },
      {
        heading: "2. Cookies & Tracking",
        text: "We use essential cookies for site functionality and non-essential cookies for performance analytics and affiliate link attribution. You can customize cookie preferences anytime via our Cookie Consent banner."
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
        text: "Images featured on Urban Edge Design originate from licensed stock photography, brand press kits, designer submissions, and original photography. If you believe your copyrighted image has been used without attribution, please contact copyright@urban-edge-designs.com."
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
        text: "We review product pricing and availability regularly. If you notice an outdated link or factual error, notify corrections@urban-edge-designs.com for immediate updating."
      }
    ]
  }
};
