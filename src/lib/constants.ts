export const SITE = {
  name: "Shetsarthi Agro",
  fullName: "SHETSARTHI AGRO AGENCIES",
  tagline: "Empowering Farmers Through Modern Agricultural Solutions",
  location: "Manori, Maharashtra",
  description:
    "An immersive agricultural experience helping Maharashtra farmers grow better crops through knowledge, quality products and expert guidance.",
  url: "https://www.google.com/maps/place/SHETSARTHI+AGRO+AGENCIES",
  phone: "+91 93594 99856",
  phoneRaw: "+919359499856",
  whatsapp: "+919359499856",
  whatsappMsg: "Hi! I'd like to know more about SHETSARTHI AGRO AGENCIES.",
  email: "",
  address: "Shop No 01, Vavi To Nandur Road, Manori, Maharashtra 422606, India",
  plusCode: "P5W3+6F Manori, Maharashtra",
  coordinates: {
    lat: 19.745578,
    lng: 74.1536694,
  },
  mapUrl:
    "https://www.google.com/maps/place/SHETSARTHI+AGRO+AGENCIES/@19.7460491,74.1543479,17.51z/data=!4m6!3m5!1s0x3bddad7a89da0df5:0x236a6ddb95febe49!8m2!3d19.745578!4d74.1536694!16s%2Fg%2F11v59g49td",
  mapEmbedUrl:
    "https://www.google.com/maps?q=19.745578,74.1536694&hl=en&z=17&output=embed",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Crop Advisory", href: "/advisory" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "seeds",
    title: "Premium Seeds",
    short: "Hybrid & native seed varieties",
    description:
      "Curated hybrid and traditional Maharashtra seed varieties tested for soil compatibility, climate resilience and high yield.",
    icon: "🌱",
    color: "#66BB6A",
  },
  {
    id: "fertilizers",
    title: "Smart Fertilizers",
    short: "Soil-tuned nutrition",
    description:
      "Organic and chemical fertilizers prescribed based on real soil reports for healthier roots and bigger harvests.",
    icon: "🪴",
    color: "#2E7D32",
  },
  {
    id: "pesticides",
    title: "Crop Protection",
    short: "Pest, fungus & weed control",
    description:
      "Targeted pesticide and bio-pesticide guidance with safe handling training to protect crops without harming soil.",
    icon: "🛡️",
    color: "#F9A825",
  },
  {
    id: "advisory",
    title: "Crop Advisory",
    short: "Expert agronomy 1-on-1",
    description:
      "Personalised advisory from agronomists who understand Maharashtra's agro-climatic zones — from Vidarbha to Konkan.",
    icon: "🧑‍🌾",
    color: "#1B5E20",
  },
  {
    id: "schemes",
    title: "Government Schemes",
    short: "PM-KISAN, PMFBY & more",
    description:
      "End-to-end help with applying to central and Maharashtra-state agricultural subsidies, insurance and loans.",
    icon: "📜",
    color: "#6D4C41",
  },
  {
    id: "soil",
    title: "Soil Testing",
    short: "Lab-grade NPK analysis",
    description:
      "Get a precise pH, NPK and micronutrient report for your farmland and a custom action plan within 48 hours.",
    icon: "🧪",
    color: "#43A047",
  },
  {
    id: "equipment",
    title: "Equipment Guidance",
    short: "Modern farm machinery",
    description:
      "Recommendations on tractors, irrigation systems, sprayers and rental partners suited to your farm size.",
    icon: "🚜",
    color: "#F9A825",
  },
] as const;

export const STATS = [
  { value: 5000, suffix: "+", label: "Farmers Served", sub: "Across Maharashtra" },
  { value: 100, suffix: "+", label: "Quality Products", sub: "Curated & tested" },
  { value: 50, suffix: "+", label: "Villages Reached", sub: "Vidarbha to Konkan" },
  { value: 10, suffix: "+", label: "Years of Expertise", sub: "On-field experience" },
] as const;

export const STORY_STAGES = [
  {
    era: "1850 — 1960",
    title: "Traditional Farming",
    body:
      "For generations, Maharashtra's farmers worked the soil with wooden ploughs, monsoon prayers and inherited wisdom. Patience and hardship defined every harvest.",
    accent: "#6D4C41",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1600&q=80&auto=format&fit=crop",
  },
  {
    era: "1960 — 2000",
    title: "Scientific Farming",
    body:
      "The Green Revolution introduced hybrid seeds, fertilizers and tractors. Yields rose, but so did the need for guidance to use them right.",
    accent: "#F9A825",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80&auto=format&fit=crop",
  },
  {
    era: "2000 — Today",
    title: "Modern Agriculture",
    body:
      "Soil-tested fertilizers, drip irrigation and precision advisory are transforming farms. Knowledge is now the most valuable input.",
    accent: "#2E7D32",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&q=80&auto=format&fit=crop",
  },
  {
    era: "Tomorrow",
    title: "Future Farming",
    body:
      "Data, satellites and sustainable practices working with the land — that's where Shetsarthi Agro is taking Maharashtra's farmers next.",
    accent: "#66BB6A",
    image:
      "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?w=1600&q=80&auto=format&fit=crop",
  },
] as const;

export const CROP_JOURNEY = [
  { step: "01", title: "Seed", body: "Choosing the right variety for your soil and season.", icon: "🌰" },
  { step: "02", title: "Soil", body: "Testing, conditioning and feeding the earth.", icon: "🟫" },
  { step: "03", title: "Water", body: "Smart irrigation that respects every monsoon drop.", icon: "💧" },
  { step: "04", title: "Growth", body: "Daily care, expert advice and timely intervention.", icon: "🌿" },
  { step: "05", title: "Protection", body: "Defending against pests, weather and disease.", icon: "🛡️" },
  { step: "06", title: "Harvest", body: "Picking at the perfect moment for maximum value.", icon: "🌾" },
  { step: "07", title: "Market", body: "Connecting your produce to the best buyers.", icon: "🛒" },
] as const;

export const PRODUCTS = [
  {
    id: "seeds-cotton",
    category: "Seeds",
    title: "BT Cotton Hybrid",
    tagline: "Vidarbha-tested, drought-resilient",
    description:
      "High-yielding BT cotton hybrid bred for Maharashtra's black cotton soil. Strong fibre, early maturity, low water demand.",
    image:
      "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=1200&q=80&auto=format&fit=crop",
    color: "#66BB6A",
  },
  {
    id: "fertilizer-organic",
    category: "Fertilizers",
    title: "OrganiCare 360",
    tagline: "Compost + biofertilizer blend",
    description:
      "A vermicompost and Trichoderma blend that rebuilds soil microbiome while feeding the crop slow and steady.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80&auto=format&fit=crop",
    color: "#2E7D32",
  },
  {
    id: "pesticide-bio",
    category: "Pesticides",
    title: "NeemShield Bio",
    tagline: "Neem-based, food-safe",
    description:
      "Cold-pressed neem extract that controls aphids, whiteflies and bollworm without chemical residue.",
    image:
      "https://images.unsplash.com/photo-1611843467160-25afb8df1074?w=1200&q=80&auto=format&fit=crop",
    color: "#F9A825",
  },
  {
    id: "equipment-drip",
    category: "Equipment",
    title: "DripSense Kit",
    tagline: "Smart drip irrigation",
    description:
      "Modular drip irrigation kit with soil moisture sensor. Save up to 60% water vs flood irrigation.",
    image:
      "https://images.unsplash.com/photo-1599045118108-bf9954418b76?w=1200&q=80&auto=format&fit=crop",
    color: "#1B5E20",
  },
  {
    id: "seeds-soybean",
    category: "Seeds",
    title: "Soybean MAUS-71",
    tagline: "PDKV-recommended hybrid",
    description:
      "Premium soybean variety from PDKV Akola — high oil content, resistant to yellow mosaic virus.",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1200&q=80&auto=format&fit=crop",
    color: "#43A047",
  },
  {
    id: "equipment-sprayer",
    category: "Equipment",
    title: "EcoSpray Pro",
    tagline: "Battery-powered knapsack sprayer",
    description:
      "Lightweight 16L knapsack sprayer with 8-hour battery. Reduces farmer fatigue and chemical waste.",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80&auto=format&fit=crop",
    color: "#6D4C41",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sandeep Patil",
    village: "Sangli District",
    crop: "Sugarcane Farmer",
    quote:
      "Shetsarthi Agro's soil report changed everything. My sugarcane yield went up by 28% in one season just by switching to the right fertilizer mix.",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Rekha Bhosle",
    village: "Nashik District",
    crop: "Grape Cultivator",
    quote:
      "The advisory team understood my vineyard better than anyone. They saved my crop from a fungal outbreak just in time.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Vikas Deshmukh",
    village: "Yavatmal District",
    crop: "Cotton Farmer",
    quote:
      "I've farmed cotton for 22 years. Shetsarthi Agro is the first place that treats farmers as partners, not customers.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Sunita Kale",
    village: "Solapur District",
    crop: "Pomegranate Grower",
    quote:
      "Their drip irrigation kit cut my water bill in half. Pomegranates have never been juicier.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Anil Jadhav",
    village: "Kolhapur District",
    crop: "Soybean Farmer",
    quote:
      "From seed to mandi — they walked with me at every step. That's something my own father couldn't have done.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop",
  },
  {
    name: "Manisha Pawar",
    village: "Pune District",
    crop: "Onion Farmer",
    quote:
      "The government scheme assistance saved me ₹40,000 on a sprayer purchase. They handle the paperwork mess for us.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop",
  },
] as const;

export const FAQS = [
  {
    q: "What areas of Maharashtra do you serve?",
    a: "We currently serve farmers across Vidarbha, Marathwada, Western Maharashtra, North Maharashtra and Konkan — over 50 villages in Nashik, Pune, Sangli, Solapur, Yavatmal, Kolhapur and surrounding districts.",
  },
  {
    q: "Is the soil testing really free?",
    a: "First-time soil testing is offered at a subsidised rate of ₹299 per sample as part of our farmer welcome program. Detailed reports arrive in 48 hours with a free 30-minute advisory call.",
  },
  {
    q: "Do you sell only chemical fertilizers?",
    a: "No. We strongly believe in soil health. We offer organic, bio and chemical fertilizers — but always recommend the right mix based on your soil report.",
  },
  {
    q: "Can you help with PM-KISAN and crop insurance?",
    a: "Yes. Our team handles documentation and tracking for PM-KISAN, PMFBY (crop insurance), Krishi Yantra subsidies, MahaDBT and most Maharashtra-state agricultural schemes.",
  },
  {
    q: "Do I need to visit your office to buy products?",
    a: "Not at all. Call or WhatsApp us — we deliver across Maharashtra and our agronomists do farm visits in our service zones.",
  },
  {
    q: "How much does crop advisory cost?",
    a: "Basic advisory is free for farmers buying our products. In-depth season-long advisory plans start at ₹1,499 per acre per season.",
  },
] as const;

