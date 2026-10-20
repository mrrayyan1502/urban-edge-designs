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
    lastUpdated: "October 2026",
    summary: "Better ideas for smaller spaces. We help apartment dwellers, renters, and small-home owners create functional, beautiful interiors through ergonomic layout guides and vetted design solutions.",
    sections: [
      {
        heading: "Our Mission",
        text: "Urban Edge Design was founded to solve a real, everyday modern challenge: the vast majority of mainstream interior design publications focus on sprawling suburban homes and multimillion-pound estates, leaving apartment dwellers, studio renters, and compact urban homeowners without practical spatial guidance. Our publication bridges that gap with field-tested architectural clearances, multi-functional furniture benchmarks, and honest interior design insights designed specifically for spaces under 75 square metres."
      },
      {
        heading: "Who We Are",
        text: "Founded by Rayyan Malik, an interior design researcher and small-space enthusiast, Urban Edge Design operates with an independent editorial desk. We work directly with spatial planning principles, ergonomic standards (including NKBA and Neufert data), and real apartment floor plans to curate living rooms, bedrooms, kitchens, and multi-purpose studio zones that balance aesthetic calm with genuine functional utility."
      },
      {
        heading: "Editorial Integrity & Fact-Checking",
        text: "We believe trust is earned through rigor. Every dimension, walkway clearance, and furniture recommendation published across our 29+ guides is cross-referenced against architectural standards, manufacturer specifications, and real room constraints. We do not publish fabricated user testimonials, AI hallucinations, or unverified claims. When we cite a measurement, we explain the human ergonomic context behind it."
      },
      {
        heading: "Contact & Editorial Office",
        text: "We welcome feedback, reader floor plans, and industry commentary. You can contact our editorial desk directly at contact@urban-edge-designs.com or via our dedicated contact page."
      }
    ]
  },
  "contact": {
    slug: "contact",
    title: "Contact Us",
    lastUpdated: "October 2026",
    summary: "Get in touch with the Urban Edge Design editorial team for press inquiries, content corrections, spatial queries, or advertising partnerships.",
    sections: [
      {
        heading: "Editorial & Press Inquiries",
        text: "Have a design story, innovative compact furniture launch, or architectural perspective to share? Reach our editorial desk at contact@urban-edge-designs.com. We respond to all verified press inquiries within 48 business hours."
      },
      {
        heading: "Affiliate & Brand Partnerships",
        text: "For brand collaborations, ethical affiliate partnerships, and media kit inquiries, email partnerships@urban-edge-designs.com. Note that sponsored content must meet our strict small-space utility criteria and will always be transparently labelled."
      },
      {
        heading: "Corrections & Feedback",
        text: "If you have spotted an outdated dimension, broken reference link, or factual inaccuracy in any of our guides, please email us directly with the subject line '[Correction Request]' to ensure immediate review by our research team."
      }
    ]
  },
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy",
    lastUpdated: "October 2026",
    summary: "How Urban Edge Design collects, uses, and safeguards your data in compliance with the General Data Protection Regulation (GDPR), the UK Data Protection Act, and Google AdSense publisher policies.",
    sections: [
      {
        heading: "1. Overview & Data Controller",
        text: "Urban Edge Design ('we', 'us', or 'our') operates https://urban-edge-designs.com/. We are committed to protecting your online privacy. This Privacy Policy explains our data collection practices, the technologies we employ, and how you can exercise full control over your personal data."
      },
      {
        heading: "2. Information We Collect",
        text: "We collect minimal personal data. When you contact us via email or our on-site contact form, you voluntarily provide your name, email address, and inquiry topic. We use this information solely to answer your questions and provide editorial customer support. We do not sell, rent, or trade your personal contact details to third parties under any circumstances."
      },
      {
        heading: "3. Log Files & Standard Web Analytics",
        text: "Like most standard website servers, our hosting infrastructure logs anonymous operational information, including Internet Protocol (IP) addresses, browser type, Internet Service Provider (ISP), referring/exit pages, platform type, date/time stamp, and number of clicks. This data is not linked to any personally identifiable information and is used exclusively to analyze site traffic trends, prevent security abuse, and optimize server load."
      },
      {
        heading: "4. Third-Party Advertising & Google AdSense / DoubleClick DART Cookies",
        text: "Urban Edge Design partners with third-party advertising companies, including Google AdSense, to serve advertisements when you visit our website. These companies may use cookies, web beacons, and similar technologies to collect non-personally identifiable information (such as your IP address, browser type, and pages visited) to serve advertisements tailored to your interests. Specifically: (a) Google, as a third-party vendor, uses cookies to serve ads on our site; (b) Google's use of the DoubleClick DART cookie enables it and its partners to serve ads to our users based on their visits to Urban Edge Design and other sites across the Internet; (c) Users may opt out of the use of the DART cookie for interest-based advertising by visiting the Google Ad and Content Network Privacy Policy at https://policies.google.com/technologies/ads or the Network Advertising Initiative opt-out page at https://optout.networkadvertising.org/."
      },
      {
        heading: "5. User Choices & Cookie Management",
        text: "You can choose to disable or selectively turn off cookies in your browser settings or by managing preferences through our Cookie Consent banner. Additionally, you can opt out of personalized advertising from hundreds of participating ad networks via the Digital Advertising Alliance Consumer Choice tool at https://optout.aboutads.info/ or Your Online Choices (EU) at https://www.youronlinechoices.eu/."
      },
      {
        heading: "6. GDPR & UK Data Protection Rights",
        text: "If you are a resident of the European Economic Area (EEA) or the United Kingdom, you have comprehensive rights under the GDPR and UK Data Protection Act, including: the right to access your personal data, the right to rectify inaccurate records, the right to erasure ('right to be forgotten'), the right to restrict processing, and the right to data portability. To exercise any of these rights, contact us at contact@urban-edge-designs.com."
      },
      {
        heading: "7. California Consumer Privacy Act (CCPA / CPRA)",
        text: "Under the California Consumer Privacy Act, California consumers have the right to request disclosure of personal information collected, request deletion of personal information, and opt out of the sale or sharing of personal information. Urban Edge Design does not sell consumer personal information. To submit a CCPA inquiry, email contact@urban-edge-designs.com."
      },
      {
        heading: "8. Children's Privacy (COPPA Compliance)",
        text: "Urban Edge Design does not knowingly collect or solicit any personal information from children under the age of 13. If you believe that a child under 13 has provided us with personal information, please contact us immediately, and we will promptly remove such records from our systems."
      }
    ]
  },
  "cookie-policy": {
    slug: "cookie-policy",
    title: "Cookie Policy",
    lastUpdated: "October 2026",
    summary: "Detailed breakdown of the essential, analytical, and third-party advertising cookies utilized across Urban Edge Design.",
    sections: [
      {
        heading: "1. What Are Cookies?",
        text: "Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work efficiently, remember your preferences, and provide analytical information to site owners."
      },
      {
        heading: "2. Categories of Cookies We Use",
        text: "Urban Edge Design utilizes three categories of cookies: (a) Strictly Necessary Cookies: Essential for the operation of the website, including remembering your cookie consent choices and theme settings; (b) Performance & Analytics Cookies: Anonymized metrics to understand which design articles and dimensions guides receive the most readership; (c) Advertising & Targeting Cookies: Placed by authorized advertising partners such as Google AdSense to deliver relevant advertisements and measure ad performance."
      },
      {
        heading: "3. Controlling Your Cookies",
        text: "You can modify your cookie settings at any time using our on-site Cookie Settings button in the footer, or through your web browser's native settings. Note that disabling certain cookies may affect the visual display or functionality of certain interactive features."
      }
    ]
  },
  "terms-of-service": {
    slug: "terms-of-service",
    title: "Terms of Service",
    lastUpdated: "October 2026",
    summary: "Terms and conditions governing the access and use of Urban Edge Design, its guides, tables, and architectural reference content.",
    sections: [
      {
        heading: "1. Agreement to Terms",
        text: "By accessing and using Urban Edge Design (https://urban-edge-designs.com/), you agree to be bound by these Terms of Service, all applicable laws, and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
      },
      {
        heading: "2. Intellectual Property Rights",
        text: "All content published on Urban Edge Design, including articles, dimensions guides, comparison tables, original graphics, SVG diagrams, and editorial layouts, is the intellectual property of Urban Edge Design and protected by international copyright laws. You may quote brief excerpts or cite our measurement data provided that clear, clickable attribution with a hyperlink to the original source URL is maintained. Mass scraping, automated harvesting, or unauthorized reproduction without express written consent is strictly prohibited."
      },
      {
        heading: "3. Informational Disclaimer",
        text: "The interior design layouts, clearance measurements, and furniture guidelines provided on this site are for informational and educational planning purposes. While measurements are meticulously researched against established building guidelines (NKBA, Neufert, UK Building Regs), individual room dimensions, architectural variations, local building codes, and structural walls may require custom spatial accommodations. Always verify physical measurements on-site before purchasing furniture or undertaking structural renovations."
      },
      {
        heading: "4. External Links & Third-Party Content",
        text: "Urban Edge Design contains links to external third-party websites, retailers, and reference publications. We do not control or endorse the content, privacy practices, or goods offered by third-party websites and assume no liability for their practices."
      },
      {
        heading: "5. Limitation of Liability",
        text: "In no event shall Urban Edge Design, its founder, or contributors be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the materials on this website."
      }
    ]
  },
  "affiliate-disclosure": {
    slug: "affiliate-disclosure",
    title: "Affiliate & Advertising Disclosure",
    lastUpdated: "October 2026",
    summary: "Full transparency regarding how Urban Edge Design maintains editorial independence while generating revenue through ethical affiliate links and display advertising.",
    sections: [
      {
        heading: "Affiliate Marketing Transparency",
        text: "In compliance with Federal Trade Commission (FTC) guidelines and UK Advertising Standards Authority (ASA) regulations, please note that Urban Edge Design participates in affiliate marketing programs. When you click on certain product links or 'Shop the Look' items and complete a purchase, we may receive a small commission from the retailer at zero additional cost to you."
      },
      {
        heading: "Strict Editorial Independence",
        text: "Our product selections and layout advice are never influenced by affiliate partnerships. We do not accept payment to rank one furniture piece over another. Every recommendation is chosen strictly based on spatial efficiency, build quality, and relevance for small-space living."
      },
      {
        heading: "Display Advertising Disclosure",
        text: "Urban Edge Design displays third-party programmatic advertisements (including Google AdSense). These advertisements are dynamically served by ad networks and are clearly separated from our editorial content."
      }
    ]
  },
  "editorial-policy": {
    slug: "editorial-policy",
    title: "Editorial Policy & Standards",
    lastUpdated: "October 2026",
    summary: "Our principles of ergonomic accuracy, human authorship, and verified spatial advice.",
    sections: [
      {
        heading: "1. Spatial Accuracy & Ergonomic Benchmarks",
        text: "All spatial clearance dimensions, walkway widths, and furniture scale suggestions are vetted against recognized standards (such as NKBA kitchen guidelines and architectural anthropometrics) to ensure actionable, realistic advice for compact homes."
      },
      {
        heading: "2. Human-Centric Research",
        text: "Every guide is conceived, structured, and researched by real interior design enthusiasts and researchers. We do not publish automated, unedited AI content or generic filler text."
      },
      {
        heading: "3. Objective Critiques",
        text: "When evaluating compact furniture designs—such as wall-mounted desks, storage beds, or nesting tables—we highlight both the advantages and the practical constraints (e.g., wall stud requirements or assembly complexity)."
      }
    ]
  },
  "advertising-policy": {
    slug: "advertising-policy",
    title: "Advertising Policy",
    lastUpdated: "October 2026",
    summary: "Standards governing display ads, sponsored collaborations, and advertiser relationships on Urban Edge Design.",
    sections: [
      {
        heading: "1. Clear Distinction Between Content & Advertising",
        text: "We strictly uphold a clear distinction between independent editorial content and paid advertising. All display advertisements, native ad blocks, and sponsored partnerships are explicitly marked with labels such as 'Advertisement', 'Sponsored', or 'Ad'."
      },
      {
        heading: "2. Ad Quality & User Experience",
        text: "We do not accept deceptive, auto-redirecting, pop-under, or malicious advertising. Advertisements must not compromise page speed, readability, or user privacy."
      },
      {
        heading: "3. Google AdSense & Third-Party Ad Networks",
        text: "Our display advertising complies with Google AdSense Program Policies, including restrictions against invalid traffic, deceptive ad placements, or encouraging accidental clicks."
      }
    ]
  },
  "image-credits": {
    slug: "image-credits",
    title: "Image Credits & Copyright",
    lastUpdated: "October 2026",
    summary: "Information on photography sources, creative commons attribution, and copyright compliance.",
    sections: [
      {
        heading: "Image Sources & Licensing",
        text: "Editorial photography featured on Urban Edge Design is sourced from licensed commercial photo libraries (including Unsplash and Pexels) under permissible editorial licenses, as well as original vector graphics and diagrammatic illustrations produced in-house. All rights remain with the respective original photographers and copyright holders."
      },
      {
        heading: "DMCA & Copyright Inquiries",
        text: "We respect the intellectual property rights of all artists and creators. If you believe your copyrighted image or creative asset appears on our site without proper licensing or attribution, please email us at contact@urban-edge-designs.com with proof of ownership, and we will promptly update attribution or remove the asset within 24 hours."
      }
    ]
  },
  "content-corrections": {
    slug: "content-corrections",
    title: "Content Correction Policy",
    lastUpdated: "October 2026",
    summary: "Our protocol for updating outdated dimensions, correcting pricing, and maintaining factual integrity.",
    sections: [
      {
        heading: "Commitment to Accuracy",
        text: "We strive to keep all furniture dimensions, clearance formulas, and design guidelines current and accurate. When errors are identified, we update the affected page promptly and note significant revisions with an updated datestamp."
      },
      {
        heading: "Submitting a Correction",
        text: "If you detect any factual error or broken link in our content, please notify our editorial desk at contact@urban-edge-designs.com. Every inquiry is verified and addressed promptly."
      }
    ]
  }
};
