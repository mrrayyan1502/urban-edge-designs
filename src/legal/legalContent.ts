export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

const UPDATED = "August 2026";

export const LEGAL_DOCS: LegalDoc[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    updated: UPDATED,
    intro:
      "This Privacy Policy explains what information Urban Edge Designs collects when you use this website or contact us, why we collect it, and how you can reach us about your data.",
    sections: [
      {
        heading: "Who we are",
        body: [
          "Urban Edge Designs is a small web design studio providing websites and AI chatbots for small businesses. You can contact us at any time by email at urbanedgedesigns88@gmail.com or by phone on 07454 291587 about anything in this policy.",
        ],
      },
      {
        heading: "What information we collect",
        body: [
          "When you fill in our enquiry form or contact us, we collect the details you choose to give us: your name, business name, business type, existing website address, email address, phone/WhatsApp number, the service you're interested in, your approximate budget and your project details.",
          "Submitting our enquiry form opens WhatsApp with your details pre-filled into a message. Nothing is sent to us until you press send inside WhatsApp, and your message is then handled under WhatsApp's own privacy terms as well as this policy.",
        ],
      },
      {
        heading: "Why we collect it",
        body: [
          "We use your enquiry details only to respond to your enquiry, prepare quotations and demos, deliver the services you order, and provide support. We do not sell your personal information, and we do not use it for unrelated marketing lists.",
        ],
      },
      {
        heading: "Analytics and cookies",
        body: [
          "With your consent, we use Google Analytics to understand how visitors use this website — for example which pages are viewed and which buttons are clicked. Google Analytics is only loaded after you accept analytics cookies in our consent banner, and you can reject analytics without affecting how the site works. We never send names, email addresses, phone numbers or message contents to Google Analytics. See our Cookie Policy for details.",
        ],
      },
      {
        heading: "Demonstration content",
        body: [
          "This website contains fictional demonstration businesses (a spa, a trades company, a restaurant and a dental studio) created to show what we build. All names, contact details, reviews and locations in those demos are fictional and are used for demonstration purposes only.",
        ],
      },
      {
        heading: "How long we keep information",
        body: [
          "We keep enquiry and project correspondence only for as long as needed to handle your enquiry, deliver your project and meet any legal or accounting obligations, after which it is deleted.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Under UK data protection law you have the right to access, correct or delete your personal information, and to object to or restrict how we use it. To exercise any of these rights, email urbanedgedesigns88@gmail.com. Nothing in this policy restricts your mandatory UK consumer rights.",
        ],
      },
      {
        heading: "General disclaimer",
        body: [
          "Information on this website is provided for general business purposes and does not constitute legal, financial or professional advice.",
        ],
      },
    ],
  },
  {
    slug: "terms-of-service",
    title: "Terms of Service",
    updated: UPDATED,
    intro:
      "These terms explain how Urban Edge Designs works with you when you order a website, AI chatbot or related service. They're written to be fair and easy to read.",
    sections: [
      {
        heading: "Our services",
        body: [
          "We provide website design, website redesign, AI chatbot setup and optional monthly care plans for small businesses, as described on this website. Every project begins with a clear quotation describing what is included.",
        ],
      },
      {
        heading: "Payment: 50% to start, 50% on demo approval",
        body: [
          "Work begins once 50% of the agreed project price has been paid. We then build your working demo. The remaining 50% is payable after you approve the demo and before final launch and handover.",
          "Domain registration, hosting, paid APIs and paid third-party software are charged separately unless explicitly stated in writing. Custom requirements beyond the agreed scope may change the final quotation — always with your approval first.",
        ],
      },
      {
        heading: "Revisions",
        body: [
          "Each package includes a stated number of revision rounds (Starter: 1, Standard: 2, Premium: revisions within its 30-day support period). Additional revisions can be arranged at a fair, pre-agreed rate.",
        ],
      },
      {
        heading: "Timelines",
        body: [
          "Typical delivery is 3–5 working days for Starter, 5–7 for Standard and 7–14 for Premium projects, counted from when we receive your content and the initial payment. Timelines are agreed in good faith; delays in receiving required content or feedback may extend them.",
        ],
      },
      {
        heading: "Ownership",
        body: [
          "Once the final balance is paid, the finished website and its content belong to you. Until then, draft designs and demos remain the property of Urban Edge Designs.",
        ],
      },
      {
        heading: "Honest expectations",
        body: [
          "We do not guarantee specific sales figures, lead volumes or search-engine rankings, and we will never claim otherwise. AI chatbots answer from the knowledge base we configure with you and clearly indicate when they don't know an answer; bookings made through a chatbot are enquiries until you confirm them with the customer.",
        ],
      },
      {
        heading: "Monthly plans",
        body: [
          "Care, chatbot management and growth plans are optional recurring monthly services. You can cancel a monthly plan at any time with effect from the next billing cycle.",
        ],
      },
      {
        heading: "Your statutory rights",
        body: [
          "Nothing in these terms restricts your mandatory rights under UK consumer law. Information on this website is provided for general business purposes and does not constitute legal, financial or professional advice.",
        ],
      },
    ],
  },
  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    updated: UPDATED,
    intro:
      "This policy explains which cookies and similar technologies this website uses, and the choices you have.",
    sections: [
      {
        heading: "Essential cookies",
        body: [
          "A small amount of information is stored in your browser to make the site work — for example, remembering your cookie consent choice itself. These are essential and cannot be switched off.",
        ],
      },
      {
        heading: "Analytics cookies (optional)",
        body: [
          "If you choose 'Accept Analytics' in our consent banner, we load Google Analytics (measurement ID G-MX1K24JJSK) to count visits and understand which pages and features are used. Analytics cookies are never loaded before you consent, and the website works exactly the same if you reject them.",
          "We track only anonymous usage events such as page views, demo views, chatbot opens and button clicks. We never send your name, email address, phone number or the contents of your messages to Google Analytics.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          "You can accept or reject analytics at any time. To change your choice, clear this site's stored data in your browser settings — the consent banner will then appear again on your next visit.",
        ],
      },
      {
        heading: "Third-party content",
        body: [
          "Demo pages embed Google Maps, which may set its own cookies when you interact with the map. WhatsApp links open the WhatsApp service, which operates under its own privacy and cookie terms.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "Questions about cookies? Email urbanedgedesigns88@gmail.com and we'll be happy to explain anything in plain English.",
        ],
      },
    ],
  },
  {
    slug: "refund-policy",
    title: "Refund & Cancellation Policy",
    updated: UPDATED,
    intro:
      "We want you to feel completely safe ordering from Urban Edge Designs. This policy explains how deposits, cancellations and refunds work for our custom website and chatbot services.",
    sections: [
      {
        heading: "How payment works",
        body: [
          "You pay 50% of the agreed price to begin work, and the remaining 50% only after you approve your working demo, before final launch and handover. You will never be asked to pay the full amount up front.",
        ],
      },
      {
        heading: "Cancelling before work begins",
        body: [
          "If you cancel before we have started work on your project, your 50% deposit is refunded in full.",
        ],
      },
      {
        heading: "Cancelling after work has begun",
        body: [
          "Because our services are custom digital work created specifically for your business, the 50% deposit covers the design and development time already invested once work has begun. If you cancel part-way through, we'll agree a fair partial refund based on the work completed to date.",
        ],
      },
      {
        heading: "After demo approval",
        body: [
          "Once you have approved the demo and paid the final balance, the project is considered delivered and refunds are not normally available — though if something isn't working as agreed, we will always fix it first. That's what our revision rounds and support periods are for.",
        ],
      },
      {
        heading: "Monthly plans",
        body: [
          "Optional care, chatbot management and growth plans can be cancelled at any time. Cancellation takes effect from the next monthly billing cycle; we don't charge cancellation fees.",
        ],
      },
      {
        heading: "Your statutory rights",
        body: [
          "This policy does not restrict your mandatory rights under UK consumer law, including rights relating to services not provided with reasonable care and skill. Any questions — just email urbanedgedesigns88@gmail.com or call 07454 291587 and we'll sort it out fairly.",
        ],
      },
    ],
  },
];
