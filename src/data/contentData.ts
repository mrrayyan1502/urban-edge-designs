export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Living Room" | "Bedroom" | "Kitchen" | "Bathroom" | "Small Apartments" | "Storage" | "Decor";
  roomSlug: string;
  style: "Modern" | "Minimalist" | "Warm Minimalist" | "Japandi" | "Scandinavian" | "Contemporary" | "Industrial";
  color: "Neutral" | "Green" | "Beige" | "White" | "Dark" | "Terracotta";
  budget: "Budget" | "Mid-range" | "Premium";
  space: "Tiny" | "Small" | "Medium";
  propertyType: "Studio" | "Apartment" | "Flat" | "Rental" | "House";
  heroImage: string;
  pinterestImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishDate: string;
  updatedDate: string;
  readTime: string;
  toc: { id: string; title: string }[];
  content: {
    intro: string;
    sections: {
      id: string;
      title: string;
      body: string;
      image?: string;
      imageAlt?: string;
      tip?: string;
    }[];
  };
  faqs: { question: string; answer: string }[];
  relatedArticleSlugs: string[];
  relatedShopLookSlugs: string[];
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  retailer: string;
  price: string;
  image: string;
  description: string;
  affiliateUrl: string;
  tier: "Budget" | "Premium" | "Featured";
  category: string;
  isSponsored?: boolean;
}

export interface ShopLookRoom {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  roomType: "Living Room" | "Bedroom" | "Kitchen" | "Bathroom" | "Studio Apartment";
  style: "Warm Minimalist" | "Japandi" | "Modern Small" | "Neutral Studio" | "Small Luxury" | "Scandinavian";
  colorPalette: string[];
  heroImage: string;
  description: string;
  products: Product[];
  budgetAlternatives: Product[];
  designerNotes: string;
}

export const CATEGORIES = [
  {
    name: "Living Room",
    slug: "living-room",
    description: "Clever layouts, multifunctional furniture, and cozy styling for compact living spaces.",
    heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    subcategories: [
      "Small Living Room Ideas",
      "Apartment Living Room",
      "Modern Living Rooms",
      "Minimalist Living Rooms",
      "Living Room with TV",
      "Living/Dining Combos",
      "Living Room Storage",
      "Colour Palettes",
      "Layout Guides",
      "Budget Makeovers",
      "Rental-Friendly"
    ]
  },
  {
    name: "Bedroom",
    slug: "bedroom",
    description: "Restful, space-smart bedroom ideas for compact master suites, studios, and guest rooms.",
    heroImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    subcategories: [
      "Small Bedroom Ideas",
      "Master Bedroom Storage",
      "Bedrooms with Desks",
      "Under-Bed Storage",
      "Rental Bedroom Decor",
      "Minimalist Bedrooms",
      "Cosy Lighting",
      "Small Wardrobes"
    ]
  },
  {
    name: "Kitchen",
    slug: "kitchen",
    description: "Galley kitchen solutions, vertical pantry hacks, and space-saving dining nooks.",
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    subcategories: [
      "Small Kitchen Ideas",
      "Galley Kitchen Layouts",
      "Apartment Kitchen Storage",
      "Rental Countertop Hacks",
      "Compact Dining Nooks",
      "Pantry Organisation"
    ]
  },
  {
    name: "Bathroom",
    slug: "bathroom",
    description: "Stylish storage, floating vanities, and optical illusions for small bathrooms & ensuites.",
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    subcategories: [
      "Small Bathroom Storage",
      "Ensuite Ideas",
      "Rental Bathroom Hacks",
      "Floating Vanities",
      "Mirror Magic"
    ]
  },
  {
    name: "Small Apartments",
    slug: "small-apartments",
    description: "Complete studio layouts, open-plan zoning, and rental-approved home upgrades.",
    heroImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    subcategories: [
      "Studio Apartment Layouts",
      "1-Bedroom Space Hacks",
      "Zoning Ideas",
      "Small Balconies",
      "Open-Plan Living"
    ]
  },
  {
    name: "Storage",
    slug: "storage",
    description: "Hidden drawers, vertical wall systems, under-bed storage, and multi-use furniture.",
    heroImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80",
    subcategories: [
      "Vertical Storage",
      "Under-Bed Hacks",
      "Entryway Organisation",
      "Multifunctional Furniture",
      "Hidden Closets"
    ]
  },
  {
    name: "Decor",
    slug: "decor",
    description: "Rugs, mirrors, lighting, wall art, and indoor greenery tailored for smaller footprints.",
    heroImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80",
    subcategories: [
      "Wall Mirrors",
      "Statement Rugs",
      "Compact Lighting",
      "Rental Wall Art",
      "Small Space Plants"
    ]
  }
];

export const AUTHORS = [
  {
    name: "Urban Edge Design Editorial Team",
    role: "Small-space interiors & editorial research",
    avatar: "/og-image.png",
    bio: "Our editorial team researches practical layouts, space-saving ideas, materials and product categories for compact homes."
  },
  {
    name: "Urban Edge Design Product Desk",
    role: "Furniture & product research",
    avatar: "/og-image.png",
    bio: "Our product desk curates space-conscious furniture and decor references. Product availability, pricing and retailer links should be verified before publication."
  }
];

export const SHOP_THE_LOOK_ROOMS: ShopLookRoom[] = [
  {
    id: "stl-1",
    slug: "warm-minimalist-living-room",
    title: "Warm Minimalist Small Living Room",
    subtitle: "A serene, clutter-free living room featuring organic textures and compact wood furniture.",
    roomType: "Living Room",
    style: "Warm Minimalist",
    colorPalette: ["#FAF7F2", "#D8C4B6", "#4F4A45", "#A89A8E"],
    heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    description: "Designed specifically for narrow urban apartments. This look combines a low-profile linen sofa, slim nesting oak tables, and neutral bouclé cushions to maximize perceived floor space.",
    designerNotes: "Keep the sofa visually light and elevated on exposed legs. Seeing more continuous floor area can help a compact room feel less crowded.",
    products: [
      {
        id: "p1",
        name: "Compact linen-look 2-seater sofa",
        brand: "STYLE REFERENCE",
        retailer: "Amazon UK search",
        price: "Check current price",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
        description: "Slim armrests and raised tapered legs engineered for compact living rooms.",
        affiliateUrl: "https://www.amazon.co.uk/s?k=compact+2+seater+sofa&tag=urbanedge0c-20",
        tier: "Featured"
      },
      {
        id: "p2",
        name: "Oak-look nesting coffee tables",
        brand: "STYLE REFERENCE",
        retailer: "Amazon UK search",
        price: "Check current price",
        image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80",
        description: "Tuck the smaller table away when entertaining or pull out for drinks.",
        affiliateUrl: "https://www.amazon.co.uk/s?k=nesting+coffee+tables&tag=urbanedge0c-20",
        tier: "Featured"
      },
      {
        id: "p3",
        name: "Natural-texture area rug",
        brand: "STYLE REFERENCE",
        retailer: "Amazon UK search",
        price: "Check current price",
        image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=600&q=80",
        description: "Natural fibers add tactile warmth without visual clutter.",
        affiliateUrl: "https://www.amazon.co.uk/s?k=natural+area+rug&tag=urbanedge0c-20",
        tier: "Featured"
      },
      {
        id: "p4",
        name: "Slim arch floor lamp",
        brand: "STYLE REFERENCE",
        retailer: "Amazon UK search",
        price: "Check current price",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
        description: "Frees up table surfaces by arching light directly over the sofa corner.",
        affiliateUrl: "https://www.amazon.co.uk/s?k=slim+arch+floor+lamp&tag=urbanedge0c-20",
        tier: "Featured"
      }
    ],
    budgetAlternatives: [
      {
        id: "p5",
        name: "Compact sand-tone 2-seater sofa",
        brand: "STYLE REFERENCE",
        retailer: "Amazon UK",
        price: "Check current price",
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80",
        description: "Budget-friendly alternative with clean lines and stain-resistant fabric.",
        affiliateUrl: "https://www.amazon.co.uk/s?k=compact+2+seater+sofa&tag=urbanedge0c-20",
        tier: "Budget"
      },
      {
        id: "p6",
        name: "Round stacking coffee table pair",
        brand: "STYLE REFERENCE",
        retailer: "Amazon UK search",
        price: "Check current price",
        image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&w=600&q=80",
        description: "Lighter weight veneer tables perfect for rental flats.",
        affiliateUrl: "https://www.amazon.co.uk/s?k=stacking+coffee+tables&tag=urbanedge0c-20",
        tier: "Budget"
      }
    ]
  },
  {
    id: "stl-2",
    slug: "modern-small-bedroom",
    title: "Space-Optimized Modern Bedroom",
    subtitle: "Clever wall-mounted nightstands and under-bed storage drawers in a soothing calm scheme.",
    roomType: "Bedroom",
    style: "Modern Small",
    colorPalette: ["#E3E7E4", "#2B3A33", "#D2C4B7", "#FAF7F2"],
    heroImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    description: "Maximizing every square inch in a 10sqm bedroom with floating wall shelves, built-in hydraulic bed storage, and soft linen bedding.",
    designerNotes: "Using wall-mounted sconce lights instead of bedside lamps saves precious surface area for books and phone chargers.",
    products: [
      {
        id: "p7",
        name: "Lift-up storage ottoman bed",
        brand: "STYLE REFERENCE",
        retailer: "Amazon UK search",
        price: "Check current price",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
        description: "Lift-up storage creates useful hidden space for bedding, seasonal clothing and luggage.",
        affiliateUrl: "https://www.amazon.co.uk/s?k=ottoman+storage+bed&tag=urbanedge0c-20",
        tier: "Featured"
      },
      {
        id: "p8",
        name: "Floating bedside shelf with drawer",
        brand: "STYLE REFERENCE",
        retailer: "Amazon UK search",
        price: "Check current price",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        description: "Zero floor contact makes small bedroom floors appear continuous.",
        affiliateUrl: "https://www.amazon.co.uk/s?k=floating+bedside+shelf&tag=urbanedge0c-20",
        tier: "Featured"
      }
    ],
    budgetAlternatives: [
      {
        id: "p9",
        name: "Low-profile under-bed storage bins",
        brand: "STYLE REFERENCE",
        retailer: "Amazon UK",
        price: "Check current price",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80",
        description: "Dust-proof zippered containers with reinforced handles.",
        affiliateUrl: "https://www.amazon.co.uk/s?k=underbed+storage+bins&tag=urbanedge0c-20",
        tier: "Budget"
      }
    ]
  },
  {
    id: "stl-3",
    slug: "japandi-living-room",
    title: "Japandi Studio Living Area",
    subtitle: "Harmonious blending of Japanese functional minimalism and Scandinavian hygge warmth.",
    roomType: "Studio Apartment",
    style: "Japandi",
    colorPalette: ["#F5F2EC", "#3B3835", "#C8B69F", "#78866B"],
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    description: "Low-profile futon-style sofa, paper pendant lamp, and slatted bamboo room dividers to separate sleep and lounge zones.",
    designerNotes: "Slatted wooden partitions keep sightlines open while giving physical boundaries to studio living areas.",
    products: [
      {
        id: "p10",
        name: "Low-profile charcoal sofa",
        brand: "STYLE REFERENCE",
        retailer: "Amazon UK search",
        price: "Check current price",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
        description: "Grounded seating height emphasizes room ceiling height.",
        affiliateUrl: "https://www.amazon.co.uk/s?k=low+profile+sofa&tag=urbanedge0c-20",
        tier: "Featured"
      }
    ],
    budgetAlternatives: []
  }
];

export const ARTICLES: Article[] = [
  {
    id: "art-1",
    slug: "small-living-room-ideas",
    title: "Small Living Room Ideas That Make the Most of Your Space",
    excerpt: "Transform a cramped urban living room into a light, functional haven with multi-use furniture, elevated sightlines, and clever wall storage.",
    category: "Living Room",
    roomSlug: "living-room",
    style: "Warm Minimalist",
    color: "Beige",
    budget: "Mid-range",
    space: "Small",
    propertyType: "Apartment",
    heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    pinterestImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=1200",
    author: AUTHORS[0],
    publishDate: "2026-08-10",
    updatedDate: "2026-09-20",
    readTime: "7 min read",
    toc: [
      { id: "elevate-furniture", title: "1. Choose Leggy, Elevated Furniture" },
      { id: "vertical-storage", title: "2. Build Upward with Vertical Wall Shelving" },
      { id: "oversized-rugs", title: "3. Use an Oversized Area Rug" },
      { id: "nesting-tables", title: "4. Swap Bulky Coffee Tables for Nesting Sets" },
      { id: "light-reflectors", title: "5. Position Mirrors Opposite Natural Light" },
      { id: "faq-section", title: "Frequently Asked Questions" }
    ],
    content: {
      intro: "Living in a small apartment or compact flat doesn't mean compromising on comfort or style. By using smart spatial proportion, strategic lighting, and scaled furniture, you can make even a 10-square-meter living room feel airy, welcoming, and organized.",
      sections: [
        {
          id: "elevate-furniture",
          title: "1. Choose Leggy, Elevated Furniture",
          body: "When floor space is at a premium, heavy boxy sofas that sit flat on the carpet trap visual weight and make rooms feel smaller. Instead, choose sofas, armchairs, and sideboards with tall, tapered legs. Seeing the floor extend under the furniture deceives the eye into perceiving a wider room footprint.",
          image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80",
          imageAlt: "Compact 2-seater sofa with tall tapered wood legs in a bright living room",
          tip: "Pro Tip: Aim for at least 15cm of clearance underneath main seating pieces to maximize light reflection."
        },
        {
          id: "vertical-storage",
          title: "2. Build Upward with Vertical Wall Shelving",
          body: "Instead of taking up valuable floor area with bulky bookcases, take advantage of vertical wall space right up to the ceiling line. Modular floating shelving systems draw the gaze upward, emphasizing vertical height rather than narrow room width.",
          image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80",
          imageAlt: "Tall vertical wall shelving filled with books, plants, and storage baskets",
          tip: "Rental Idea: Use tension-pole shelving units or non-damaging adhesive picture L-ledges."
        },
        {
          id: "oversized-rugs",
          title: "3. Use an Oversized Area Rug",
          body: "A common mistake in small space decorating is buying a tiny rug that floats awkwardly under the coffee table. This chops up the floor plan visually. A larger rug—where at least the front legs of all seating rest on top—anchors the zone and creates an expansive illusion.",
          image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1000&q=80",
          imageAlt: "Large neutral wool rug anchoring a small living room sofa and coffee table",
          tip: "Measure your room and leave a 20-30cm border of bare floor around the rug edges."
        },
        {
          id: "nesting-tables",
          title: "4. Swap Bulky Coffee Tables for Nesting Sets",
          body: "Heavy solid-wood coffee tables create traffic bottlenecks. Nesting tables can be stacked together daily to free up floor space, then expanded when guests arrive for snacks and drinks.",
          image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80",
          imageAlt: "Set of 2 nesting round oak tables next to a compact sofa",
          tip: "Look for lightweight materials like oak veneer, aluminum, or glass top surfaces."
        },
        {
          id: "light-reflectors",
          title: "5. Position Mirrors Opposite Natural Light",
          body: "Placing a large framed floor or wall mirror directly opposite your primary window instantly doubles the ambient daylight circulating through the room and creates a convincing optical depth.",
          image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
          imageAlt: "Large arched mirror reflecting window daylight in a small apartment",
          tip: "Arched or round mirrors break up rigid square wall lines in small flats."
        }
      ]
    },
    faqs: [
      {
        question: "What color makes a small living room look bigger?",
        answer: "Light neutrals like warm white, soft cream, pale sage, and light beige reflect maximum natural light. Painting baseboards and walls in the same shade reduces visual breaks."
      },
      {
        question: "How do I fit a TV and dining area in a tiny living room?",
        answer: "Use wall-mounted slim TVs above low-profile media units and pair them with a drop-leaf or extendable dining table tucked against a wall or behind the sofa back."
      }
    ],
    relatedArticleSlugs: ["small-bedroom-storage", "studio-apartment-layout-ideas", "small-kitchen-ideas"],
    relatedShopLookSlugs: ["warm-minimalist-living-room", "japandi-living-room"]
  },
  {
    id: "art-2",
    slug: "small-bedroom-storage",
    title: "Small Bedroom Storage Ideas That Keep Clothes & Clutter Hidden",
    excerpt: "Conquer small bedroom clutter with ottoman lift-up beds, vertical hanging organisers, and floating bedside drawers.",
    category: "Bedroom",
    roomSlug: "bedroom",
    style: "Minimalist",
    color: "White",
    budget: "Budget",
    space: "Small",
    propertyType: "Apartment",
    heroImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    pinterestImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=1200",
    author: AUTHORS[1],
    publishDate: "2026-08-14",
    updatedDate: "2026-09-22",
    readTime: "6 min read",
    toc: [
      { id: "ottoman-beds", title: "1. Invest in a Lift-Up Ottoman Storage Bed" },
      { id: "floating-nightstands", title: "2. Install Floating Wall Nightstands" },
      { id: "headboard-nook", title: "3. Use Headboard Storage Nooks" }
    ],
    content: {
      intro: "A clutter-free bedroom is essential for restful sleep. In small city bedrooms, standard wardrobes often take up too much floor footprint. These clever storage solutions utilize hidden volumes under the mattress and along unused wall height.",
      sections: [
        {
          id: "ottoman-beds",
          title: "1. Invest in a Lift-Up Ottoman Storage Bed",
          body: "Unlike traditional drawer beds that require wide side clearance to pull out, hydraulic gas-lift ottoman beds open smoothly from the foot. You gain up to 600 liters of dust-free storage space—ideal for suitcases, winter coats, and spare bedding.",
          image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
          imageAlt: "Lift-up ottoman storage bed in a modern compact bedroom",
          tip: "Organize items inside vacuum storage bags to squeeze 3x more linen into your bed frame."
        },
        {
          id: "floating-nightstands",
          title: "2. Install Floating Wall Nightstands",
          body: "Floor-standing nightstands eat up valuable floor real estate beside the bed. Floating drawers or shelves keep floor space open, making room cleaning easier while giving a sleek minimalist aesthetic.",
          image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80",
          imageAlt: "Wall-mounted oak floating nightstand next to bed",
          tip: "Mount your reading light on the wall above the shelf to keep the surface totally clear."
        }
      ]
    },
    faqs: [
      {
        question: "How do you fit a wardrobe in a tiny bedroom?",
        answer: "Opt for sliding doors rather than push-to-open doors, or use open clothing rails with canvas hanging organisers and decorative curtains."
      }
    ],
    relatedArticleSlugs: ["small-living-room-ideas", "studio-apartment-layout-ideas"],
    relatedShopLookSlugs: ["modern-small-bedroom"]
  },
  {
    id: "art-3",
    slug: "studio-apartment-layout-ideas",
    title: "Studio Apartment Layout Ideas for Seamless Micro Living",
    excerpt: "Learn how to define distinct sleep, work, and living zones in a single room studio without building permanent walls.",
    category: "Small Apartments",
    roomSlug: "small-apartments",
    style: "Japandi",
    color: "Neutral",
    budget: "Mid-range",
    space: "Tiny",
    propertyType: "Studio",
    heroImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    pinterestImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=1200",
    author: AUTHORS[0],
    publishDate: "2026-08-18",
    updatedDate: "2026-09-24",
    readTime: "8 min read",
    toc: [
      { id: "room-dividers", title: "1. Slatted Wooden Room Dividers" },
      { id: "rug-zoning", title: "2. Zone Functional Spaces with Rugs" }
    ],
    content: {
      intro: "Studio apartment living requires creative spatial discipline. The secret is defining distinct zones for sleeping, working, and dining so your home doesn't feel like a bedroom with a fridge.",
      sections: [
        {
          id: "room-dividers",
          title: "1. Slatted Wooden Room Dividers",
          body: "Solid partition walls block daylight and make studio apartments feel boxed-in. Open wooden slat dividers or open-backed bookshelves act as room dividers while allowing light and airflow to pass right through.",
          image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
          imageAlt: "Slatted bamboo partition screen separating bed and lounge in studio",
          tip: "Place potted trailing plants on open shelves to create a living green screen."
        },
        {
          id: "rug-zoning",
          title: "2. Zone Functional Spaces with Rugs",
          body: "Use different textured rugs to visually separate the 'living room' area from the 'bedroom' area without constructing physical boundaries.",
          image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
          imageAlt: "Studio apartment with zoned rug areas for sleeping and living",
          tip: "Keep the color palette consistent across zones to maintain visual flow."
        }
      ]
    },
    faqs: [
      {
        question: "Where should I place my bed in a studio apartment?",
        answer: "Position the bed furthest away from the front entrance door, ideally in a corner or alcove that can be screened off with curtains or a room divider."
      }
    ],
    relatedArticleSlugs: ["small-living-room-ideas", "small-kitchen-ideas"],
    relatedShopLookSlugs: ["japandi-living-room", "warm-minimalist-living-room"]
  },
  {
    id: "art-4",
    slug: "small-kitchen-ideas",
    title: "25 Small Kitchen Ideas for Apartments That Double Countertop Space",
    excerpt: "Maximize cramped galley kitchens with floating spice racks, magnetic knife strips, and over-sink cutting boards.",
    category: "Kitchen",
    roomSlug: "kitchen",
    style: "Modern",
    color: "Green",
    budget: "Budget",
    space: "Small",
    propertyType: "Rental",
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    pinterestImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=1200",
    author: AUTHORS[1],
    publishDate: "2026-08-22",
    updatedDate: "2026-09-24",
    readTime: "7 min read",
    toc: [
      { id: "vertical-rail", title: "1. Install Wall-Mounted Hanging Rails" },
      { id: "trolley-cart", title: "2. Add a Slim Kitchen Cart on Wheels" }
    ],
    content: {
      intro: "Small kitchens in rented flats can quickly feel cluttered during meal prep. By getting utensils and spices off countertop surfaces onto wall hanging systems, you double your usable food preparation space.",
      sections: [
        {
          id: "vertical-rail",
          title: "1. Install Wall-Mounted Hanging Rails",
          body: "Stainless steel or brass utensil rails mounted beneath upper cabinets keep spatulas, ladles, strainers, and measuring cups within reach without taking up drawer or counter space.",
          image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
          imageAlt: "Wall-mounted kitchen rail with hanging copper utensils",
          tip: "Use S-hooks to hang coffee mugs, oven mitts, and small herb pots."
        }
      ]
    },
    faqs: [
      {
        question: "How do I get more counter space in a small kitchen?",
        answer: "Buy an over-the-sink cutting board, use stove top burner covers when not cooking, and roll in a portable butcher block cart."
      }
    ],
    relatedArticleSlugs: ["small-living-room-ideas", "small-bedroom-storage"],
    relatedShopLookSlugs: ["warm-minimalist-living-room"]
  },
  {
    id: "art-5",
    slug: "small-bathroom-ideas",
    title: "Small Bathroom Ideas That Feel Calm, Useful and Uncluttered",
    excerpt: "Use floating storage, clearer sightlines, layered lighting and restrained finishes to make a compact bathroom work harder without feeling busy.",
    category: "Bathroom",
    roomSlug: "bathroom",
    style: "Modern",
    color: "Neutral",
    budget: "Mid-range",
    space: "Small",
    propertyType: "Apartment",
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=82",
    pinterestImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=82",
    author: AUTHORS[0],
    publishDate: "2026-09-18",
    updatedDate: "2026-09-25",
    readTime: "6 min read",
    toc: [
      { id: "floating-storage", title: "Choose Floating Storage" },
      { id: "visual-continuity", title: "Create Visual Continuity" },
      { id: "layered-lighting", title: "Layer the Lighting" }
    ],
    content: {
      intro: "A small bathroom usually feels better when the visual field is simple and the floor remains as visible as possible. Start with the layout, then add storage only where it solves a real daily problem.",
      sections: [
        { id: "floating-storage", title: "Choose Floating Storage", body: "Wall-mounted vanities, slim mirrored cabinets and shallow shelves keep essentials close without making the floor plan feel heavier. Prioritise storage depth carefully so doors and circulation paths remain comfortable.", tip: "Measure door swings, towel-rail clearance and knee space before ordering wall-mounted furniture." },
        { id: "visual-continuity", title: "Create Visual Continuity", body: "Using a limited material palette can reduce visual fragmentation. Repeating one tile tone or keeping grout contrast subtle often makes a compact room feel calmer than mixing many competing finishes." },
        { id: "layered-lighting", title: "Layer the Lighting", body: "Combine practical overhead light with softer mirror lighting where possible. Good facial illumination and fewer harsh shadows improve function while making the room feel more considered." }
      ]
    },
    faqs: [
      { question: "How do I make a very small bathroom feel less cramped?", answer: "Keep circulation clear, use appropriately scaled fixtures, reduce visual clutter and favour storage that does not unnecessarily occupy floor area." },
      { question: "Are large tiles suitable for small bathrooms?", answer: "They can be. Fewer grout lines may create a calmer visual field, but tile size should still suit the room geometry, falls and installation requirements." }
    ],
    relatedArticleSlugs: ["small-living-room-ideas", "studio-apartment-layout-ideas"],
    relatedShopLookSlugs: []
  },
  {
    id: "art-6",
    slug: "small-space-storage-ideas",
    title: "Small-Space Storage Ideas That Keep Everyday Clutter Under Control",
    excerpt: "Build useful storage into overlooked vertical, under-bed and transitional areas without filling every wall with bulky furniture.",
    category: "Storage",
    roomSlug: "storage",
    style: "Minimalist",
    color: "Neutral",
    budget: "Budget",
    space: "Small",
    propertyType: "Flat",
    heroImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1400&q=82",
    pinterestImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=82",
    author: AUTHORS[0],
    publishDate: "2026-09-19",
    updatedDate: "2026-09-25",
    readTime: "7 min read",
    toc: [
      { id: "vertical-space", title: "Use Vertical Space Intentionally" },
      { id: "hidden-storage", title: "Choose Hidden Storage for High-Clutter Items" },
      { id: "entry-zones", title: "Give the Entryway a Landing Zone" }
    ],
    content: {
      intro: "The goal of small-space storage is not to hide more possessions in the same footprint. It is to give frequently used items a predictable home while protecting circulation, daylight and visual calm.",
      sections: [
        { id: "vertical-space", title: "Use Vertical Space Intentionally", body: "Tall shelving, wall rails and over-door solutions can use height without consuming much floor area. Keep the most-used items between waist and eye level, and reserve harder-to-reach shelves for seasonal belongings." },
        { id: "hidden-storage", title: "Choose Hidden Storage for High-Clutter Items", body: "Beds, benches and ottomans with concealed compartments work best for items that are bulky but not constantly accessed. Avoid buying storage furniture before measuring what actually needs to go inside." },
        { id: "entry-zones", title: "Give the Entryway a Landing Zone", body: "A compact tray, hooks and one closed basket can prevent keys, bags, shoes and post from migrating through the rest of the home.", tip: "A storage system is successful when it reduces daily friction, not when every empty surface has been filled." }
      ]
    },
    faqs: [
      { question: "What should I store first in a small flat?", answer: "Start with the items that currently create daily clutter: shoes, outerwear, laundry, charging cables, cleaning supplies and frequently used kitchen items." },
      { question: "Is open shelving good for a small space?", answer: "It can be, especially for attractive or frequently used items, but too much exposed storage can increase visual noise. A mix of open and closed storage is often easier to maintain." }
    ],
    relatedArticleSlugs: ["small-bedroom-storage", "studio-apartment-layout-ideas"],
    relatedShopLookSlugs: ["modern-small-bedroom"]
  },
  {
    id: "art-7",
    slug: "small-space-decor-ideas",
    title: "Small-Space Decor Ideas for a More Polished, Less Cluttered Home",
    excerpt: "Use scale, texture, mirrors, lighting and a disciplined colour story to add personality without overwhelming a compact room.",
    category: "Decor",
    roomSlug: "decor",
    style: "Warm Minimalist",
    color: "Beige",
    budget: "Budget",
    space: "Small",
    propertyType: "Rental",
    heroImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1400&q=82",
    pinterestImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=82",
    author: AUTHORS[1],
    publishDate: "2026-09-20",
    updatedDate: "2026-09-25",
    readTime: "6 min read",
    toc: [
      { id: "scale", title: "Choose Fewer, Better-Scaled Pieces" },
      { id: "mirrors", title: "Use Mirrors for Light, Not Just Decoration" },
      { id: "texture", title: "Layer Texture Within a Tight Palette" }
    ],
    content: {
      intro: "Compact rooms rarely need tiny versions of everything. A restrained number of correctly scaled pieces usually looks more intentional than many small accessories competing for attention.",
      sections: [
        { id: "scale", title: "Choose Fewer, Better-Scaled Pieces", body: "One well-proportioned artwork, rug or pendant can create a stronger focal point than a collection of undersized accents. Leave breathing room around decorative objects so each one has visual purpose." },
        { id: "mirrors", title: "Use Mirrors for Light, Not Just Decoration", body: "Place mirrors where they can reflect daylight or an attractive sightline rather than automatically hanging them on the darkest wall. Consider what will actually be reflected from normal viewing positions." },
        { id: "texture", title: "Layer Texture Within a Tight Palette", body: "Linen, timber, wool, ceramic and woven fibres can add depth even when the colour palette stays restrained. Texture is especially useful in rentals where major architectural changes are not practical.", tip: "Before adding another decorative object, ask whether changing scale, lighting or texture would solve the room more elegantly." }
      ]
    },
    faqs: [
      { question: "How many colours should I use in a small room?", answer: "There is no fixed number, but a limited base palette with one or two controlled accents is usually easier to make cohesive in a compact room." },
      { question: "Should small rooms only use light colours?", answer: "No. Dark colours can work well when used deliberately. What matters is the relationship between daylight, artificial lighting, contrast, furniture scale and the atmosphere you want." }
    ],
    relatedArticleSlugs: ["small-living-room-ideas", "small-bedroom-storage"],
    relatedShopLookSlugs: ["warm-minimalist-living-room", "japandi-living-room"]
  },
  {
    id: "art-8",
    slug: "small-bedroom-ideas",
    title: "Small Bedroom Ideas for a Calm, Space-Smart Room",
    excerpt: "Make a compact bedroom feel calmer with better furniture scale, wall-mounted lighting, concealed storage and a restrained colour palette.",
    category: "Bedroom", roomSlug: "bedroom", style: "Warm Minimalist", color: "Neutral", budget: "Mid-range", space: "Small", propertyType: "Flat",
    heroImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=82",
    pinterestImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=82",
    author: AUTHORS[0], publishDate: "2026-09-25", updatedDate: "2026-09-25", readTime: "6 min read",
    toc: [{ id: "scale", title: "Start with furniture scale" }, { id: "walls", title: "Move useful functions to the walls" }, { id: "palette", title: "Keep the visual palette calm" }],
    content: { intro: "In a small bedroom, the layout matters more than adding decorative pieces. Start by protecting the path around the bed, then choose storage and lighting that reduce floor clutter.", sections: [
      { id: "scale", title: "Start with furniture scale", body: "Measure the bed wall and circulation first. A slightly narrower bedside table, a bed with exposed legs or a low-profile frame can preserve breathing room without making the room feel under-furnished.", tip: "Mark the proposed furniture footprint on the floor with painter's tape before buying." },
      { id: "walls", title: "Move useful functions to the walls", body: "Wall-mounted sconces, floating shelves and slim hooks can replace bulky bedside furniture. Keep the most-used items close to hand and avoid filling every vertical surface." },
      { id: "palette", title: "Keep the visual palette calm", body: "A limited combination of wall colour, bedding and timber tones makes the room easier to read visually. Add personality through texture rather than many small contrasting accessories." }
    ]},
    faqs: [{ question: "Where should a bed go in a small bedroom?", answer: "Choose the wall that preserves the clearest circulation path and access to wardrobes, doors and windows. Symmetry is useful only when it does not waste space." }],
    relatedArticleSlugs: ["small-bedroom-storage", "small-space-storage-ideas", "small-space-decor-ideas"], relatedShopLookSlugs: ["modern-small-bedroom"]
  },
  {
    id: "art-9",
    slug: "small-living-room-layout-ideas",
    title: "Small Living Room Layout Ideas That Improve Flow",
    excerpt: "Plan a compact living room around circulation, focal points and flexible furniture rather than pushing every piece against a wall.",
    category: "Living Room", roomSlug: "living-room", style: "Modern", color: "Beige", budget: "Budget", space: "Small", propertyType: "Apartment",
    heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=82", pinterestImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=82",
    author: AUTHORS[0], publishDate: "2026-09-25", updatedDate: "2026-09-25", readTime: "6 min read",
    toc: [{ id: "path", title: "Protect the main walkway" }, { id: "anchor", title: "Choose one visual anchor" }, { id: "flex", title: "Use flexible secondary seating" }],
    content: { intro: "A good small living room layout makes movement feel effortless. Before styling, decide where people enter, where they naturally walk and which activity deserves the strongest position.", sections: [
      { id: "path", title: "Protect the main walkway", body: "Keep the route between doors, seating and adjacent rooms as direct as possible. Avoid placing coffee tables or accent chairs where they force people into repeated detours." },
      { id: "anchor", title: "Choose one visual anchor", body: "A window, fireplace, media wall or artwork can become the room's focal point. Arrange the main sofa to acknowledge that feature instead of trying to give every wall equal importance." },
      { id: "flex", title: "Use flexible secondary seating", body: "Poufs, stools and lightweight occasional chairs can provide extra seats without permanently occupying the room's centre." }
    ]},
    faqs: [{ question: "Should a sofa touch the wall in a small room?", answer: "It can, but leaving even a small gap may improve proportions and access to curtains or sockets. Choose based on circulation rather than a fixed rule." }],
    relatedArticleSlugs: ["small-living-room-ideas", "small-space-decor-ideas", "small-space-storage-ideas"], relatedShopLookSlugs: ["warm-minimalist-living-room", "japandi-living-room"]
  },
  {
    id: "art-10",
    slug: "small-living-room-with-tv",
    title: "Small Living Room With TV: Practical Layout and Styling Ideas",
    excerpt: "Fit a television into a compact living room without letting the screen dominate the entire space.",
    category: "Living Room", roomSlug: "living-room", style: "Contemporary", color: "Neutral", budget: "Mid-range", space: "Small", propertyType: "Flat",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=82", pinterestImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=82",
    author: AUTHORS[0], publishDate: "2026-09-25", updatedDate: "2026-09-25", readTime: "5 min read",
    toc: [{ id: "height", title: "Set a comfortable screen height" }, { id: "console", title: "Keep the media unit visually light" }, { id: "balance", title: "Balance the wall around the TV" }],
    content: { intro: "The television often becomes the strongest dark rectangle in a small room. Treat it as one part of the composition and keep viewing comfort more important than decorative tricks.", sections: [
      { id: "height", title: "Set a comfortable screen height", body: "Position the screen so the centre sits close to seated eye level where practical. Avoid mounting it unusually high simply to free a wall below." },
      { id: "console", title: "Keep the media unit visually light", body: "A shallow floating console or slim-legged unit can provide cable and device storage while preserving more visible floor area." },
      { id: "balance", title: "Balance the wall around the TV", body: "Use restrained shelving, artwork or a textured wall finish to integrate the screen. Avoid surrounding it with so many objects that the wall becomes visually noisy." }
    ]},
    faqs: [{ question: "Is a large TV always wrong in a small living room?", answer: "No. Screen size should relate to viewing distance and how the room is used. A larger screen can still work if the layout remains comfortable and uncluttered." }],
    relatedArticleSlugs: ["small-living-room-layout-ideas", "small-living-room-ideas"], relatedShopLookSlugs: ["warm-minimalist-living-room"]
  },
  {
    id: "art-11",
    slug: "small-bedroom-with-desk",
    title: "Small Bedroom With Desk Ideas for Work and Rest",
    excerpt: "Create a useful work zone in a compact bedroom without allowing the desk to take over the sleeping area.",
    category: "Bedroom", roomSlug: "bedroom", style: "Scandinavian", color: "White", budget: "Budget", space: "Small", propertyType: "Rental",
    heroImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=82", pinterestImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=82",
    author: AUTHORS[0], publishDate: "2026-09-25", updatedDate: "2026-09-25", readTime: "5 min read",
    toc: [{ id: "narrow", title: "Choose a shallow desk" }, { id: "light", title: "Use task lighting" }, { id: "reset", title: "Create an end-of-day reset" }],
    content: { intro: "A bedroom workspace works best when it has a defined footprint and can visually quiet down after work. Prioritise ergonomics, cable control and enough clear surface for the tasks you actually do.", sections: [
      { id: "narrow", title: "Choose a shallow desk", body: "A slim desk or wall-mounted surface can provide laptop space while protecting circulation beside the bed. Measure chair pull-out depth before deciding on the position." },
      { id: "light", title: "Use task lighting", body: "A directional wall or desk light reduces the need to brighten the whole bedroom for work. Position it to avoid screen glare and harsh shadows." },
      { id: "reset", title: "Create an end-of-day reset", body: "Use one drawer, box or laptop stand to remove work items from view when the day ends. This helps the bedroom return to a calmer visual state." }
    ]},
    faqs: [{ question: "Can a desk go beside the bed?", answer: "Yes, if chair clearance and access to the bed remain comfortable. A desk can even replace a bedside table when its height and storage suit both uses." }],
    relatedArticleSlugs: ["small-bedroom-ideas", "small-bedroom-storage"], relatedShopLookSlugs: ["modern-small-bedroom"]
  },
  {
    id: "art-12",
    slug: "small-bedroom-layout-ideas",
    title: "Small Bedroom Layout Ideas That Protect Floor Space",
    excerpt: "Use bed placement, wardrobe clearance and simple circulation rules to improve a tight bedroom plan.",
    category: "Bedroom", roomSlug: "bedroom", style: "Modern", color: "Neutral", budget: "Budget", space: "Tiny", propertyType: "Apartment",
    heroImage: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1400&q=82", pinterestImage: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=82",
    author: AUTHORS[0], publishDate: "2026-09-25", updatedDate: "2026-09-25", readTime: "5 min read",
    toc: [{ id: "bed", title: "Place the bed first" }, { id: "wardrobe", title: "Protect wardrobe access" }, { id: "corners", title: "Use awkward corners deliberately" }],
    content: { intro: "Small bedroom layouts become easier when you place the largest object first. The bed establishes the circulation pattern, so solve that before choosing storage or decorative furniture.", sections: [
      { id: "bed", title: "Place the bed first", body: "Test the longest uninterrupted wall and consider whether one-sided access is acceptable for the people using the room. Keep door swings and radiator clearance in mind." },
      { id: "wardrobe", title: "Protect wardrobe access", body: "Sliding doors can help where swing space is limited, but internal drawer access still needs room. Measure the wardrobe in use, not just when closed." },
      { id: "corners", title: "Use awkward corners deliberately", body: "A narrow chair, shelf, laundry basket or plant can make use of a corner without forcing a bulky piece into the central floor area." }
    ]},
    faqs: [{ question: "Is it okay to put a bed against a wall?", answer: "Yes, especially in a single-occupancy room or very tight plan. The trade-off is reduced access for making the bed and for a second sleeper." }],
    relatedArticleSlugs: ["small-bedroom-ideas", "small-bedroom-with-desk", "small-bedroom-storage"], relatedShopLookSlugs: ["modern-small-bedroom"]
  },
  {
    id: "art-13",
    slug: "small-kitchen-storage-ideas",
    title: "Small Kitchen Storage Ideas for Clearer Worktops",
    excerpt: "Use cabinet interiors, wall zones and portable storage to keep a compact kitchen practical without crowding the counters.",
    category: "Kitchen", roomSlug: "kitchen", style: "Modern", color: "White", budget: "Budget", space: "Small", propertyType: "Apartment",
    heroImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=82", pinterestImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=82",
    author: AUTHORS[0], publishDate: "2026-09-25", updatedDate: "2026-09-25", readTime: "6 min read",
    toc: [{ id: "cabinets", title: "Use the full cabinet height" }, { id: "worktop", title: "Protect the worktop" }, { id: "portable", title: "Add movable storage only when needed" }],
    content: { intro: "In a compact kitchen, storage should support cooking rather than simply hold more things. Keep everyday tools close to their point of use and move rarely used items higher or elsewhere.", sections: [
      { id: "cabinets", title: "Use the full cabinet height", body: "Shelf risers, internal racks and stackable containers can make tall cupboards easier to use. Avoid piling items so deeply that the ones at the back disappear." },
      { id: "worktop", title: "Protect the worktop", body: "Keep only the appliances you use frequently on the counter. Wall rails, magnetic strips and cabinet-door organisers can reclaim useful prep space." },
      { id: "portable", title: "Add movable storage only when needed", body: "A narrow trolley can add prep and pantry capacity, but it should have a clear parking position so it does not become a permanent obstacle." }
    ]},
    faqs: [{ question: "What should stay on a small kitchen counter?", answer: "Only items used frequently enough to justify the space. Grouping essentials on one tray can also make cleaning and visual organisation easier." }],
    relatedArticleSlugs: ["small-kitchen-ideas", "small-space-storage-ideas"], relatedShopLookSlugs: []
  },
  {
    id: "art-14",
    slug: "galley-kitchen-ideas",
    title: "Galley Kitchen Ideas for Better Flow and Storage",
    excerpt: "Improve a narrow galley kitchen with clearer work zones, lighter visual lines and storage that does not obstruct movement.",
    category: "Kitchen", roomSlug: "kitchen", style: "Contemporary", color: "White", budget: "Mid-range", space: "Small", propertyType: "Flat",
    heroImage: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1400&q=82", pinterestImage: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1000&q=82",
    author: AUTHORS[0], publishDate: "2026-09-25", updatedDate: "2026-09-25", readTime: "6 min read",
    toc: [{ id: "zones", title: "Separate prep and cleaning zones" }, { id: "upper", title: "Manage upper cabinets carefully" }, { id: "light", title: "Use continuous lighting" }],
    content: { intro: "A galley layout can be highly efficient because everything is close. The challenge is preventing the two parallel runs from feeling visually heavy or creating conflicts between open doors and people moving through the space.", sections: [
      { id: "zones", title: "Separate prep and cleaning zones", body: "Keep the sink, bin and dishwasher working together where possible, while preserving a separate stretch of uninterrupted counter for preparation." },
      { id: "upper", title: "Manage upper cabinets carefully", body: "Full-height wall cabinets provide storage but can make a narrow room feel enclosed. Consider open space, glass fronts or lighter finishes in selected areas rather than automatically filling every wall." },
      { id: "light", title: "Use continuous lighting", body: "Under-cabinet lighting reduces dark worktop zones and can make the room feel longer and more even after sunset." }
    ]},
    faqs: [{ question: "Is a galley kitchen good for a small home?", answer: "It can be very efficient. The key is maintaining comfortable aisle width and preventing appliance, cabinet and room doors from colliding." }],
    relatedArticleSlugs: ["small-kitchen-ideas", "small-kitchen-storage-ideas"], relatedShopLookSlugs: []
  },
  {
    id: "art-15",
    slug: "rental-friendly-decorating-ideas",
    title: "Rental-Friendly Decorating Ideas for Small Flats",
    excerpt: "Add personality to a rented flat with reversible lighting, textiles, furniture and wall treatments that are easier to undo when you move.",
    category: "Decor", roomSlug: "decor", style: "Warm Minimalist", color: "Terracotta", budget: "Budget", space: "Small", propertyType: "Rental",
    heroImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1400&q=82", pinterestImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=82",
    author: AUTHORS[0], publishDate: "2026-09-25", updatedDate: "2026-09-25", readTime: "6 min read",
    toc: [{ id: "textiles", title: "Use textiles for colour" }, { id: "lighting", title: "Upgrade portable lighting" }, { id: "walls", title: "Treat walls reversibly" }],
    content: { intro: "Rental-friendly design works best when the investment can move with you. Focus on portable pieces that improve comfort and identity without depending on permanent alterations.", sections: [
      { id: "textiles", title: "Use textiles for colour", body: "Curtains, rugs, cushions and bedding can establish a palette without repainting. Choose fewer coordinated pieces rather than adding many unrelated accents." },
      { id: "lighting", title: "Upgrade portable lighting", body: "Floor and table lamps can improve atmosphere without touching fixed electrical fittings. Use warm, comfortable light levels suited to each activity." },
      { id: "walls", title: "Treat walls reversibly", body: "Picture ledges, removable hooks and renter-approved adhesive products can create displays with less permanent impact. Always follow the product instructions and your tenancy agreement." }
    ]},
    faqs: [{ question: "Can I use peel-and-stick products in a rental?", answer: "Only if the surface and tenancy rules allow it. Some adhesives can damage paint or leave residue, so test a discreet area first." }],
    relatedArticleSlugs: ["small-space-decor-ideas", "studio-apartment-layout-ideas"], relatedShopLookSlugs: ["japandi-living-room"]
  },
  {
    id: "art-16",
    slug: "studio-apartment-ideas",
    title: "Studio Apartment Ideas for a More Organised One-Room Home",
    excerpt: "Create clear zones for sleeping, working, eating and relaxing without making a studio feel divided into tiny boxes.",
    category: "Small Apartments", roomSlug: "small-apartments", style: "Japandi", color: "Neutral", budget: "Mid-range", space: "Tiny", propertyType: "Studio",
    heroImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=82", pinterestImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=82",
    author: AUTHORS[0], publishDate: "2026-09-25", updatedDate: "2026-09-25", readTime: "7 min read",
    toc: [{ id: "zones", title: "Define zones without hard walls" }, { id: "storage", title: "Concentrate storage" }, { id: "furniture", title: "Choose furniture with more than one use" }],
    content: { intro: "The best studio apartments feel like one coherent home with several clear functions. Use rugs, lighting, furniture orientation and storage placement to signal those functions without blocking light.", sections: [
      { id: "zones", title: "Define zones without hard walls", body: "Turn a sofa, open shelving unit or rug to create subtle boundaries. Keep the main sightline and natural light path as open as possible." },
      { id: "storage", title: "Concentrate storage", body: "A few well-planned storage walls or tall cabinets often look calmer than many small storage pieces scattered around the room." },
      { id: "furniture", title: "Choose furniture with more than one use", body: "A drop-leaf table, storage bench or nesting table can support different activities while reducing the number of permanent furniture footprints." }
    ]},
    faqs: [{ question: "How can I separate a bed in a studio apartment?", answer: "Use a curtain, slatted screen, open shelf or strategic furniture placement while maintaining ventilation, light and safe circulation." }],
    relatedArticleSlugs: ["studio-apartment-layout-ideas", "small-space-storage-ideas", "rental-friendly-decorating-ideas"], relatedShopLookSlugs: ["japandi-living-room"]
  },
  {
    id: "art-17",
    slug: "small-apartment-storage-ideas",
    title: "Small Apartment Storage Ideas That Reduce Daily Clutter",
    excerpt: "Organise a compact apartment around entry, bedroom, kitchen and living-room storage zones instead of buying random containers.",
    category: "Small Apartments", roomSlug: "small-apartments", style: "Minimalist", color: "Neutral", budget: "Budget", space: "Small", propertyType: "Apartment",
    heroImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1400&q=82", pinterestImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=82",
    author: AUTHORS[0], publishDate: "2026-09-25", updatedDate: "2026-09-25", readTime: "6 min read",
    toc: [{ id: "entry", title: "Solve the entry first" }, { id: "closed", title: "Use closed storage for visual noise" }, { id: "seasonal", title: "Move seasonal items out of prime space" }],
    content: { intro: "Storage improves a small apartment when it reduces repeated decisions. Give everyday categories a predictable home and keep prime storage positions for items you reach for most often.", sections: [
      { id: "entry", title: "Solve the entry first", body: "A compact shoe zone, hooks and a tray for keys can stop clutter before it spreads into living areas." },
      { id: "closed", title: "Use closed storage for visual noise", body: "Documents, cables, cleaning products and mixed small objects often look calmer behind doors or in labelled boxes than on open shelving." },
      { id: "seasonal", title: "Move seasonal items out of prime space", body: "Store off-season clothing and occasional equipment higher up, under the bed or in clearly labelled containers so daily storage remains easy to reach." }
    ]},
    faqs: [{ question: "How do I avoid overbuying storage containers?", answer: "Declutter and measure first. Choose containers only after you know the category, quantity and exact shelf or cabinet dimensions." }],
    relatedArticleSlugs: ["small-space-storage-ideas", "studio-apartment-ideas"], relatedShopLookSlugs: []
  },
  {
    id: "art-18",
    slug: "small-bathroom-storage-ideas",
    title: "Small Bathroom Storage Ideas Without Bulky Cabinets",
    excerpt: "Keep toiletries and towels organised with shallow, wall-mounted and recessed storage that preserves the room's circulation.",
    category: "Bathroom", roomSlug: "bathroom", style: "Modern", color: "White", budget: "Budget", space: "Tiny", propertyType: "Flat",
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=82", pinterestImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=82",
    author: AUTHORS[0], publishDate: "2026-09-25", updatedDate: "2026-09-25", readTime: "5 min read",
    toc: [{ id: "mirror", title: "Use the mirror zone" }, { id: "shallow", title: "Prefer shallow storage" }, { id: "daily", title: "Separate daily and occasional items" }],
    content: { intro: "Compact bathrooms need storage, but deep cabinets can make them harder to move through. Prioritise shallow storage near the point of use and keep the floor as visually clear as possible.", sections: [
      { id: "mirror", title: "Use the mirror zone", body: "A mirrored cabinet can combine grooming storage and reflection without adding another freestanding piece. Check door clearance and lighting positions before installation." },
      { id: "shallow", title: "Prefer shallow storage", body: "Narrow shelves, recessed niches and slim wall cabinets often hold small bathroom items more efficiently than deep cupboards where products disappear behind one another." },
      { id: "daily", title: "Separate daily and occasional items", body: "Keep daily skincare and dental products within easy reach; move refills, medicines and spare toiletries to less prominent storage where appropriate." }
    ]},
    faqs: [{ question: "What is the best storage above a toilet?", answer: "A shallow closed cabinet or a small number of shelves can work if they do not interfere with headroom, servicing access or safe use." }],
    relatedArticleSlugs: ["small-bathroom-ideas", "small-space-storage-ideas"], relatedShopLookSlugs: []
  },
  {
    id: "art-19",
    slug: "small-home-office-ideas",
    title: "Small Home Office Ideas for Compact Flats",
    excerpt: "Create a focused work zone using narrow desks, wall storage, task lighting and a clear end-of-day reset routine.",
    category: "Decor", roomSlug: "decor", style: "Scandinavian", color: "White", budget: "Budget", space: "Small", propertyType: "Apartment",
    heroImage: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1400&q=82", pinterestImage: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1000&q=82",
    author: AUTHORS[0], publishDate: "2026-09-25", updatedDate: "2026-09-25", readTime: "6 min read",
    toc: [{ id: "desk", title: "Choose a desk for the task" }, { id: "background", title: "Control the visual background" }, { id: "storage", title: "Keep work storage compact" }],
    content: { intro: "A small home office does not need its own room, but it does need a defined working position. Start with posture, screen placement and light, then make the area visually tidy enough to share with the rest of the home.", sections: [
      { id: "desk", title: "Choose a desk for the task", body: "A laptop-only setup can use a shallower surface than a workstation with two monitors. Choose width and depth based on actual equipment rather than buying the largest desk that fits." },
      { id: "background", title: "Control the visual background", body: "A calm wall, curtain or well-organised shelf behind you can improve video calls and make the workspace feel more intentional." },
      { id: "storage", title: "Keep work storage compact", body: "Use one drawer unit, wall shelf or portable box for documents and accessories. Avoid allowing office storage to spread across several rooms." }
    ]},
    faqs: [{ question: "Where can I put a desk in a one-bedroom flat?", answer: "Common options include a bedroom corner, living-room wall, hallway alcove or dining-area edge. Choose the location with the best balance of light, power access and separation from distractions." }],
    relatedArticleSlugs: ["small-bedroom-with-desk", "studio-apartment-ideas"], relatedShopLookSlugs: []
  },
  {
    id: "art-20",
    slug: "furniture-for-small-apartments",
    title: "Furniture for Small Apartments: What to Prioritise",
    excerpt: "Choose compact furniture by proportion, function and circulation rather than relying on products simply labelled 'small space'.",
    category: "Small Apartments", roomSlug: "small-apartments", style: "Modern", color: "Beige", budget: "Mid-range", space: "Small", propertyType: "Apartment",
    heroImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=82", pinterestImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=82",
    author: AUTHORS[1], publishDate: "2026-09-25", updatedDate: "2026-09-25", readTime: "6 min read",
    toc: [{ id: "measure", title: "Measure circulation, not just walls" }, { id: "multi", title: "Prioritise useful multi-function pieces" }, { id: "visual", title: "Consider visual weight" }],
    content: { intro: "The right furniture for a small apartment is not always the smallest furniture. A properly scaled sofa or table can look calmer than several undersized pieces, provided the circulation remains comfortable.", sections: [
      { id: "measure", title: "Measure circulation, not just walls", body: "Record doorways, hall widths, lift dimensions and the space needed to pull out chairs or open drawers. Delivery access matters as much as the final footprint." },
      { id: "multi", title: "Prioritise useful multi-function pieces", body: "Storage benches, nesting tables and extendable dining tables can earn their footprint when both functions are genuinely useful to you." },
      { id: "visual", title: "Consider visual weight", body: "Raised legs, open bases, slim arms and lighter materials can make substantial furniture feel less dominant while still providing comfort." }
    ]},
    faqs: [{ question: "Should every piece of furniture in a small apartment be multifunctional?", answer: "No. Multi-function furniture is useful only when both functions are convenient. A simple, well-proportioned piece is often better than a complicated one you rarely use." }],
    relatedArticleSlugs: ["small-living-room-ideas", "studio-apartment-ideas", "small-apartment-storage-ideas"], relatedShopLookSlugs: ["warm-minimalist-living-room", "japandi-living-room"]
  }
];

export const EVERGREEN_GUIDES = [
  {
    title: "Ways to Make a Small Room Look Bigger (Without Knocking Down Walls)",
    slug: "small-living-room-ideas",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    readTime: "8 min read"
  },
  {
    title: "The Ultimate Rental-Friendly Decorating Guide for Small Flats",
    slug: "studio-apartment-layout-ideas",
    category: "Small Apartments",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    readTime: "10 min read"
  },
  {
    title: "Small Space Storage Ideas for a Tighter Budget",
    slug: "small-bedroom-storage",
    category: "Storage",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
    readTime: "6 min read"
  }
];
