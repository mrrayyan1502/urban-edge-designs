export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "Living Room" | "Bedroom" | "Kitchen" | "Bathroom" | "Small Apartments" | "Storage" | "Decor";
  roomSlug: string;
  style: "Modern" | "Minimalist" | "Japandi" | "Scandinavian" | "Contemporary" | "Industrial";
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
    name: "Elena Rostova",
    role: "Senior Architectural & Interior Editor",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    bio: "Elena specializes in urban micro-living and Scandinavian minimalism. She has designed over 40 apartment makeovers across London and Berlin."
  },
  {
    name: "Marcus Vance",
    role: "Furniture & Spatial Design Strategist",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    bio: "Marcus consults for space-saving modular furniture brands and writes about rental-friendly DIY renovations."
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
    designerNotes: "Keep the sofa legs exposed and elevated from the floor to allow light to flow underneath, instantly making a 12sqm room feel 30% wider.",
    products: [
      {
        id: "p1",
        name: "Kanso 2-Seater Linen Sofa in Oat",
        brand: "NORDIC HOME",
        retailer: "Made / Design Co",
        price: "£599.00",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
        description: "Slim armrests and raised tapered legs engineered for compact living rooms.",
        affiliateUrl: "https://amazon.co.uk",
        tier: "Featured"
      },
      {
        id: "p2",
        name: "Solid Oak Nesting Coffee Tables (Set of 2)",
        brand: "URBAN WOOD",
        retailer: "John Lewis & Partners",
        price: "£189.00",
        image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80",
        description: "Tuck the smaller table away when entertaining or pull out for drinks.",
        affiliateUrl: "https://amazon.co.uk",
        tier: "Featured"
      },
      {
        id: "p3",
        name: "Woven Jute & Wool Area Rug (160x230cm)",
        brand: "CRAFT & WEAVE",
        retailer: "Dunelm / Amazon",
        price: "£120.00",
        image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=600&q=80",
        description: "Natural fibers add tactile warmth without visual clutter.",
        affiliateUrl: "https://amazon.co.uk",
        tier: "Featured"
      },
      {
        id: "p4",
        name: "Adjustable Brass Arch Floor Lamp",
        brand: "LUMEN STUDIO",
        retailer: "Oliver Bonas",
        price: "£145.00",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80",
        description: "Frees up table surfaces by arching light directly over the sofa corner.",
        affiliateUrl: "https://amazon.co.uk",
        tier: "Featured"
      }
    ],
    budgetAlternatives: [
      {
        id: "p5",
        name: "Compact 2-Seater Fabric Sofa - Sand",
        brand: "HOME ESSENTIALS",
        retailer: "Amazon UK",
        price: "£279.00",
        image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80",
        description: "Budget-friendly alternative with clean lines and stain-resistant fabric.",
        affiliateUrl: "https://amazon.co.uk",
        tier: "Budget"
      },
      {
        id: "p6",
        name: "Round Stacking Coffee Table Pair",
        brand: "MODERN LIVING",
        retailer: "Wayfair",
        price: "£79.00",
        image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&w=600&q=80",
        description: "Lighter weight veneer tables perfect for rental flats.",
        affiliateUrl: "https://amazon.co.uk",
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
        name: "Lift-Up Storage Ottoman Bed (Double)",
        brand: "SLEEP & SPACE",
        retailer: "Dreams / Amazon",
        price: "£449.00",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
        description: "Hydraulic lift mechanism reveals 650 liters of hidden under-bed storage for bedding and luggage.",
        affiliateUrl: "https://amazon.co.uk",
        tier: "Featured"
      },
      {
        id: "p8",
        name: "Floating Oak Bedside Shelf with Drawer",
        brand: "URBAN CRAFT",
        retailer: "Etsy / Amazon",
        price: "£65.00",
        image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
        description: "Zero floor contact makes small bedroom floors appear continuous.",
        affiliateUrl: "https://amazon.co.uk",
        tier: "Featured"
      }
    ],
    budgetAlternatives: [
      {
        id: "p9",
        name: "Underbed Rolling Storage Bins (Set of 2)",
        brand: "STORAGE PRO",
        retailer: "Amazon UK",
        price: "£34.99",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80",
        description: "Dust-proof zippered containers with reinforced handles.",
        affiliateUrl: "https://amazon.co.uk",
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
        name: "Low-Rider 3-Seater Sofa in Charcoal",
        brand: "JAPANDI STUDIO",
        retailer: "Habitat / Argos",
        price: "£499.00",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
        description: "Grounded seating height emphasizes room ceiling height.",
        affiliateUrl: "https://amazon.co.uk",
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
    title: "25 Small Living Room Ideas That Make the Most of Your Space",
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
    title: "21 Small Bedroom Storage Ideas That Keep Clothes & Clutter Hidden",
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
    title: "19 Studio Apartment Layout Ideas for Seamless Micro Living",
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
  }
];

export const EVERGREEN_GUIDES = [
  {
    title: "17 Ways to Make a Small Room Look Bigger (Without Knocking Down Walls)",
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
    title: "Small Space Storage Hacks That Cost Under £50",
    slug: "small-bedroom-storage",
    category: "Storage",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
    readTime: "6 min read"
  }
];
