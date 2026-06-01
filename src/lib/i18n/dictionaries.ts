export type Locale = "en" | "mr";

export const LOCALES: Locale[] = ["en", "mr"];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, { short: string; long: string }> = {
  en: { short: "EN", long: "English" },
  mr: { short: "मरा", long: "मराठी" },
};

const en = {
    site: {
      name: "Shetsarthi Agro",
      fullName: "SHETSARTHI AGRO AGENCIES",
      tagline: "Empowering Farmers Through Modern Agricultural Solutions",
      location: "Manori, Maharashtra",
      stateLabel: "Maharashtra",
      description:
        "An immersive agricultural experience helping Maharashtra farmers grow better crops through knowledge, quality products and expert guidance.",
      address: "Shop No 01, Vavi To Nandur Road, Manori, Maharashtra 422606, India",
      whatsappMsg: "Hi! I'd like to know more about SHETSARTHI AGRO AGENCIES.",
    },
    common: {
      talkToExpert: "Talk to Expert",
      callExpert: "Call Expert",
      call: "Call",
      callNow: "Call Now",
      whatsapp: "WhatsApp",
      whatsappUs: "WhatsApp Us",
      enquire: "Enquire Now",
      enquireWhatsapp: "Enquire on WhatsApp",
      explore: "Explore",
      learnMore: "Learn More",
      sendMessage: "Send Message",
      readyWhenYou: "Ready when you are",
      scroll: "Scroll",
      menu: "Menu",
      close: "Close",
      chapter: "Chapter",
      stillQuestion: "Still have a question?",
      askWhatsapp: "Ask on WhatsApp",
    },
    nav: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Products", href: "/products" },
      { label: "Crop Advisory", href: "/advisory" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
    hero: {
      line1: "Modern Agriculture",
      line2: "Begins Here",
      description:
        "Helping Maharashtra farmers grow better crops through knowledge, quality products and expert guidance.",
      ctaPrimary: "Talk to Expert",
      ctaSecondary: "Explore Journey",
    },
    story: {
      eyebrow: "Our Story",
      title1: "From hand ploughs",
      title2: "to",
      titleAccent: "data-driven",
      title3: "farms.",
      lede:
        "Maharashtra's agriculture has evolved through centuries. We're carrying it into the next one.",
      stages: [
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
      ],
    },
    services: {
      eyebrow: "Services",
      title1: "Every farm needs",
      title2: "an",
      titleAccent: "ecosystem.",
      lede: "Seven services orbit a single mission — your harvest. Hover any node to explore.",
      centerLine1: "Green",
      centerLine2: "Harvest",
      items: [
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
      ],
    },
    impact: {
      title1: "Numbers that",
      titleAccent: "mean something.",
      stats: [
        { value: 5000, suffix: "+", label: "Farmers Served", sub: "Across Maharashtra" },
        { value: 100, suffix: "+", label: "Quality Products", sub: "Curated & tested" },
        { value: 50, suffix: "+", label: "Villages Reached", sub: "Vidarbha to Konkan" },
        { value: 10, suffix: "+", label: "Years of Expertise", sub: "On-field experience" },
      ],
    },
    products: {
      eyebrow: "Products",
      title1: "Curated for",
      title2: "Maharashtra's soil.",
      lede: "Scroll to glide through products field-tested with farmers across Maharashtra.",
      ctaLine1: "See the full",
      ctaLine2: "catalog",
      ctaButton: "Explore Products",
      moreOnTheWay: "More on the way",
      items: [
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
      ],
    },
    journey: {
      eyebrow: "Crop Journey",
      title1: "Seven stages.",
      titleAccent: "One harvest.",
      items: [
        { step: "01", title: "Seed", body: "Choosing the right variety for your soil and season.", icon: "🌰" },
        { step: "02", title: "Soil", body: "Testing, conditioning and feeding the earth.", icon: "🟫" },
        { step: "03", title: "Water", body: "Smart irrigation that respects every monsoon drop.", icon: "💧" },
        { step: "04", title: "Growth", body: "Daily care, expert advice and timely intervention.", icon: "🌿" },
        { step: "05", title: "Protection", body: "Defending against pests, weather and disease.", icon: "🛡️" },
        { step: "06", title: "Harvest", body: "Picking at the perfect moment for maximum value.", icon: "🌾" },
        { step: "07", title: "Market", body: "Connecting your produce to the best buyers.", icon: "🛒" },
      ],
    },
    testimonials: {
      eyebrow: "Voices from the field",
      title1: "Maharashtra's farmers",
      titleAccent: "in their own words.",
      items: [
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
      ],
    },
    finalCta: {
      badge: "Ready when you are",
      line1: "Let's grow",
      line2: "together.",
      lede:
        "A 20-minute call with our agronomist could change this season for you. No commitment. Just farmer-to-farmer talk.",
    },
    footer: {
      headingLine1: "Let's grow",
      headingLine2: "together.",
      lede:
        "From seed to mandi, our agronomists walk with you at every step. Talk to a Maharashtra-based expert today.",
      sitemap: "Sitemap",
      reachUs: "Reach Us",
      rights: "All rights reserved.",
      crafted: "Crafted with cinematic care for Maharashtra's farmers.",
    },
    faqs: {
      items: [
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
      ],
    },
    pages: {
      services: {
        eyebrow: "Services",
        title: "Everything your",
        italic: "farm needs.",
        description:
          "Seven integrated services designed for Maharashtra's diverse agro-climatic zones — from Vidarbha cotton to Konkan rice.",
        ctaHeading: "Not sure where to start?",
        ctaBody:
          "Call us. Tell us your crop, your district, your problem. We'll point you in the right direction — for free.",
        ctaButton: "Talk to Expert",
      },
      products: {
        eyebrow: "Products",
        title: "Field-tested.",
        italic: "Farmer-approved.",
        description:
          "Every product in our catalog has been tested with real farmers across Maharashtra before we stock it.",
        ctaEnquire: "Enquire on WhatsApp",
        whatsappEnquiry: "Hi, I'd like to enquire about",
      },
      contact: {
        eyebrow: "Contact",
        title: "We're here",
        italic: "for you.",
        description:
          "Walk in, call, or WhatsApp — our agronomists are ready to help with your crop, soil or product questions.",
        heading1: "Get in",
        headingAccent: "touch.",
        lede:
          "Whether you need a soil test, crop advice or just want to know what fertilizer to use this season — reach out. No appointment needed.",
        cards: {
          call: "Call Us",
          email: "Email",
          visit: "Visit Us",
          hours: "Hours",
          hoursValue: "Mon–Sat: 8am – 7pm · Sun: 9am – 2pm",
        },
      },
      faq: {
        eyebrow: "FAQ",
        title: "Questions",
        italic: "answered.",
        description:
          "Everything Maharashtra farmers ask us most — from soil testing to government schemes.",
      },
      advisory: {
        eyebrow: "Crop Advisory",
        title: "Expert guidance",
        italic: "for every crop.",
        description:
          "Our agronomists understand Maharashtra's agro-climatic zones. From cotton in Yavatmal to grapes in Nashik — we've been there.",
        cropsHeading: "Crops we advise on.",
        worksHeading: "How advisory works.",
        ctaButton: "Book Free Advisory Call",
        crops: [
          { name: "Cotton", zone: "Vidarbha & Marathwada", season: "Kharif", icon: "🌿" },
          { name: "Soybean", zone: "Vidarbha", season: "Kharif", icon: "🫘" },
          { name: "Grapes", zone: "Nashik & Pune", season: "Year-round", icon: "🍇" },
          { name: "Sugarcane", zone: "Western Maharashtra", season: "Year-round", icon: "🎋" },
          { name: "Onion", zone: "Solapur & Nashik", season: "Rabi", icon: "🧅" },
          { name: "Pomegranate", zone: "Solapur", season: "Year-round", icon: "🍎" },
          { name: "Turmeric", zone: "Sangli", season: "Kharif", icon: "🟡" },
          { name: "Rice", zone: "Konkan & Vidarbha", season: "Kharif", icon: "🌾" },
        ],
        steps: [
          { step: "01", title: "Tell us your crop", body: "Call or WhatsApp with your crop, district and current stage." },
          { step: "02", title: "Field assessment", body: "Our agronomist visits or reviews photos/video of your field." },
          { step: "03", title: "Custom plan", body: "You receive a season plan — seeds, nutrition, protection and irrigation." },
          { step: "04", title: "Season support", body: "Weekly check-ins during critical growth stages." },
        ],
      },
    },
    contactForm: {
      successHeading: "Message received!",
      successBody:
        "We'll call you back within 24 hours. For urgent queries, WhatsApp us directly.",
      nameLabel: "Your Name",
      namePlaceholder: "Sandeep Patil",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+91 93594 99856",
      locationLabel: "District / Village",
      locationPlaceholder: "Manori, Maharashtra",
      messageLabel: "How can we help?",
      messagePlaceholder: "Tell us about your crop, problem or enquiry...",
      submit: "Send Message",
      disclaimer:
        "This is a static demo form. For real enquiries, call or WhatsApp us directly.",
    },
};

export type Dict = typeof en;

const mr: Dict = {
    site: {
      name: "शेतसारथी ॲग्रो",
      fullName: "शेतसारथी ॲग्रो एजन्सीज",
      tagline: "आधुनिक कृषी उपायांद्वारे शेतकऱ्यांचे सक्षमीकरण",
      location: "मनोरी, महाराष्ट्र",
      stateLabel: "महाराष्ट्र",
      description:
        "ज्ञान, दर्जेदार उत्पादने आणि तज्ज्ञ मार्गदर्शनातून महाराष्ट्रातील शेतकऱ्यांना अधिक चांगली पिके घेण्यास मदत करणारा एक सर्वसमावेशक कृषी अनुभव.",
      address: "दुकान क्र. ०१, वावी ते नांदूर रोड, मनोरी, महाराष्ट्र ४२२६०६, भारत",
      whatsappMsg: "नमस्कार! मला शेतसारथी ॲग्रो एजन्सीजबद्दल अधिक माहिती हवी आहे.",
    },
    common: {
      talkToExpert: "तज्ज्ञांशी बोला",
      callExpert: "तज्ज्ञांना फोन करा",
      call: "फोन",
      callNow: "आत्ता फोन करा",
      whatsapp: "व्हॉट्सॲप",
      whatsappUs: "व्हॉट्सॲपवर संपर्क करा",
      enquire: "चौकशी करा",
      enquireWhatsapp: "व्हॉट्सॲपवर चौकशी करा",
      explore: "एक्सप्लोर करा",
      learnMore: "अधिक जाणून घ्या",
      sendMessage: "संदेश पाठवा",
      readyWhenYou: "तुमच्या तयारीनुसार",
      scroll: "स्क्रोल",
      menu: "मेनू",
      close: "बंद करा",
      chapter: "अध्याय",
      stillQuestion: "अजूनही प्रश्न आहे?",
      askWhatsapp: "व्हॉट्सॲपवर विचारा",
    },
    nav: [
      { label: "मुख्यपृष्ठ", href: "/" },
      { label: "सेवा", href: "/services" },
      { label: "उत्पादने", href: "/products" },
      { label: "पीक सल्ला", href: "/advisory" },
      { label: "प्रश्नोत्तरे", href: "/faq" },
      { label: "संपर्क", href: "/contact" },
    ],
    hero: {
      line1: "आधुनिक शेती",
      line2: "इथून सुरू होते",
      description:
        "ज्ञान, दर्जेदार उत्पादने आणि तज्ज्ञ मार्गदर्शनातून महाराष्ट्रातील शेतकऱ्यांना अधिक चांगली पिके घेण्यास मदत करतो.",
      ctaPrimary: "तज्ज्ञांशी बोला",
      ctaSecondary: "प्रवास पाहा",
    },
    story: {
      eyebrow: "आमची कहाणी",
      title1: "हातातील नांगरापासून",
      title2: "ते",
      titleAccent: "डेटा-आधारित",
      title3: "शेतीपर्यंत.",
      lede:
        "महाराष्ट्राच्या शेतीने अनेक शतकांचा प्रवास केला आहे. आम्ही तो पुढच्या शतकात नेत आहोत.",
      stages: [
        {
          era: "१८५० — १९६०",
          title: "पारंपरिक शेती",
          body:
            "पिढ्यान्‌पिढ्या महाराष्ट्राच्या शेतकऱ्यांनी लाकडी नांगर, पावसाच्या प्रार्थना आणि वडिलोपार्जित ज्ञानाच्या जोरावर मातीची सेवा केली. प्रत्येक हंगाम संयम आणि कष्टांचाच ठरला.",
          accent: "#6D4C41",
          image:
            "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1600&q=80&auto=format&fit=crop",
        },
        {
          era: "१९६० — २०००",
          title: "वैज्ञानिक शेती",
          body:
            "हरितक्रांतीने संकरित बियाणे, खते आणि ट्रॅक्टर आणले. उत्पादन वाढले, पण त्यांचा योग्य वापर कसा करावा यासाठी मार्गदर्शनाची गरजही वाढली.",
          accent: "#F9A825",
          image:
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80&auto=format&fit=crop",
        },
        {
          era: "२००० — आज",
          title: "आधुनिक शेती",
          body:
            "माती-तपासणीनुसारची खते, ठिबक सिंचन आणि अचूक सल्ला शेतीचे रूप पालटत आहेत. आज ज्ञान हीच सर्वात मौल्यवान निविष्ठा आहे.",
          accent: "#2E7D32",
          image:
            "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&q=80&auto=format&fit=crop",
        },
        {
          era: "उद्या",
          title: "भविष्यातील शेती",
          body:
            "डेटा, उपग्रह आणि शाश्वत पद्धती जमिनीच्या साथीने काम करतील — आणि शेतसारथी ॲग्रो महाराष्ट्राच्या शेतकऱ्यांना त्याच दिशेला घेऊन जात आहे.",
          accent: "#66BB6A",
          image:
            "https://images.unsplash.com/photo-1530267981375-f0de937f5f13?w=1600&q=80&auto=format&fit=crop",
        },
      ],
    },
    services: {
      eyebrow: "सेवा",
      title1: "प्रत्येक शेताला",
      title2: "हवी एक",
      titleAccent: "परिसंस्था.",
      lede: "एका ध्येयाभोवती फिरणाऱ्या सात सेवा — तुमचे पीक. कोणत्याही नोडवर हॉवर करा.",
      centerLine1: "हरित",
      centerLine2: "हंगाम",
      items: [
        {
          id: "seeds",
          title: "दर्जेदार बियाणे",
          short: "संकरित आणि देशी वाण",
          description:
            "मातीशी सुसंगत, हवामानाला तग धरणारे आणि भरघोस उत्पादन देणारे महाराष्ट्रासाठी निवडलेले संकरित व पारंपरिक बियाणे.",
          icon: "🌱",
          color: "#66BB6A",
        },
        {
          id: "fertilizers",
          title: "स्मार्ट खते",
          short: "मातीनुसार पोषण",
          description:
            "खरीप-रब्बीच्या अहवालावर आधारित सेंद्रिय आणि रासायनिक खतांचा सल्ला — मजबूत मुळे आणि अधिक उत्पादनासाठी.",
          icon: "🪴",
          color: "#2E7D32",
        },
        {
          id: "pesticides",
          title: "पीक संरक्षण",
          short: "कीड, बुरशी व तण नियंत्रण",
          description:
            "मातीला इजा न पोहोचवता पिकांचे रक्षण करण्यासाठी लक्ष्यित रासायनिक व जैव-कीटकनाशकांचा सल्ला आणि सुरक्षित वापराचे प्रशिक्षण.",
          icon: "🛡️",
          color: "#F9A825",
        },
        {
          id: "advisory",
          title: "पीक सल्ला",
          short: "वैयक्तिक तज्ज्ञ सल्ला",
          description:
            "विदर्भापासून कोकणपर्यंत — महाराष्ट्राचे कृषी-हवामान विभाग समजणाऱ्या तज्ज्ञांकडून वैयक्तिक सल्ला.",
          icon: "🧑‍🌾",
          color: "#1B5E20",
        },
        {
          id: "schemes",
          title: "शासकीय योजना",
          short: "पीएम-किसान, पीएमएफबीवाय व अधिक",
          description:
            "केंद्र व राज्य सरकारच्या अनुदान, विमा व कर्ज योजनांसाठी सुरवातीपासून शेवटपर्यंत संपूर्ण मदत.",
          icon: "📜",
          color: "#6D4C41",
        },
        {
          id: "soil",
          title: "माती परीक्षण",
          short: "प्रयोगशाळेतील एनपीके विश्लेषण",
          description:
            "तुमच्या शेतजमिनीचा अचूक पीएच, एनपीके आणि सूक्ष्म अन्नद्रव्य अहवाल आणि ४८ तासांत वैयक्तिक कृती-आराखडा.",
          icon: "🧪",
          color: "#43A047",
        },
        {
          id: "equipment",
          title: "यंत्रसामग्री मार्गदर्शन",
          short: "आधुनिक शेती-यंत्रे",
          description:
            "ट्रॅक्टर, सिंचन प्रणाली, फवारणी यंत्रे व भाड्याच्या भागीदारांची तुमच्या शेताच्या आकारानुसार शिफारस.",
          icon: "🚜",
          color: "#F9A825",
        },
      ],
    },
    impact: {
      title1: "अर्थपूर्ण",
      titleAccent: "आकडे.",
      stats: [
        { value: 5000, suffix: "+", label: "सेवा दिलेले शेतकरी", sub: "संपूर्ण महाराष्ट्रात" },
        { value: 100, suffix: "+", label: "दर्जेदार उत्पादने", sub: "निवडलेली व तपासलेली" },
        { value: 50, suffix: "+", label: "गावांपर्यंत पोहोच", sub: "विदर्भ ते कोकण" },
        { value: 10, suffix: "+", label: "वर्षांचा अनुभव", sub: "बांधावरचा अनुभव" },
      ],
    },
    products: {
      eyebrow: "उत्पादने",
      title1: "महाराष्ट्राच्या मातीसाठी",
      title2: "निवडलेली उत्पादने.",
      lede: "महाराष्ट्रभरातील शेतकऱ्यांसोबत क्षेत्र-चाचणी झालेली उत्पादने स्क्रोल करून पाहा.",
      ctaLine1: "संपूर्ण",
      ctaLine2: "कॅटलॉग पाहा",
      ctaButton: "उत्पादने पाहा",
      moreOnTheWay: "अजून बरीच येत आहेत",
      items: [
        {
          id: "seeds-cotton",
          category: "बियाणे",
          title: "बीटी कापूस हायब्रिड",
          tagline: "विदर्भात चाचणी झालेले, दुष्काळ-सहनशील",
          description:
            "महाराष्ट्राच्या काळ्या मातीसाठी विकसित केलेले उच्च-उत्पादक बीटी कापूस संकरित. मजबूत धागा, लवकर पक्व होणारे, कमी पाण्याची गरज.",
          image:
            "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=1200&q=80&auto=format&fit=crop",
          color: "#66BB6A",
        },
        {
          id: "fertilizer-organic",
          category: "खते",
          title: "ऑर्गनिकेअर ३६०",
          tagline: "कंपोस्ट + जैव-खत मिश्रण",
          description:
            "गांडूळ खत आणि ट्रायकोडर्माचे मिश्रण जे मातीची जैविक रचना पुन्हा उभारते आणि पिकाला हळूहळू पोषण देते.",
          image:
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80&auto=format&fit=crop",
          color: "#2E7D32",
        },
        {
          id: "pesticide-bio",
          category: "कीटकनाशके",
          title: "नीमशील्ड बायो",
          tagline: "कडुनिंब-आधारित, अन्न-सुरक्षित",
          description:
            "रासायनिक अवशेषांशिवाय मावा, पांढरी माशी आणि बोंडअळी नियंत्रित करणारा कोल्ड-प्रेस्ड कडुनिंब अर्क.",
          image:
            "https://images.unsplash.com/photo-1611843467160-25afb8df1074?w=1200&q=80&auto=format&fit=crop",
          color: "#F9A825",
        },
        {
          id: "equipment-drip",
          category: "यंत्रसामग्री",
          title: "ड्रिपसेन्स किट",
          tagline: "स्मार्ट ठिबक सिंचन",
          description:
            "मातीच्या आर्द्रता-सेन्सरसह मॉड्युलर ठिबक सिंचन किट. पाटाच्या तुलनेत ६०% पर्यंत पाण्याची बचत.",
          image:
            "https://images.unsplash.com/photo-1599045118108-bf9954418b76?w=1200&q=80&auto=format&fit=crop",
          color: "#1B5E20",
        },
        {
          id: "seeds-soybean",
          category: "बियाणे",
          title: "सोयाबीन MAUS-७१",
          tagline: "पीडीकेव्ही-शिफारस संकरित",
          description:
            "पीडीकेव्ही अकोला येथील दर्जेदार सोयाबीन वाण — उच्च तेल-घटक, यलो मोझॅक विषाणूस प्रतिरोधक.",
          image:
            "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1200&q=80&auto=format&fit=crop",
          color: "#43A047",
        },
        {
          id: "equipment-sprayer",
          category: "यंत्रसामग्री",
          title: "इकोस्प्रे प्रो",
          tagline: "बॅटरीवर चालणारा पाठीवरचा फवारणी पंप",
          description:
            "८ तासांच्या बॅटरीसह वजनाने हलका १६ लिटर पाठीवरचा फवारणी पंप. शेतकऱ्यांचा थकवा आणि रसायनांचा अपव्यय कमी करतो.",
          image:
            "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80&auto=format&fit=crop",
          color: "#6D4C41",
        },
      ],
    },
    journey: {
      eyebrow: "पीक प्रवास",
      title1: "सात टप्पे.",
      titleAccent: "एक हंगाम.",
      items: [
        { step: "०१", title: "बियाणे", body: "तुमच्या मातीला आणि हंगामाला योग्य वाण निवडणे.", icon: "🌰" },
        { step: "०२", title: "माती", body: "मातीचे परीक्षण, सुधारणा आणि पोषण.", icon: "🟫" },
        { step: "०३", title: "पाणी", body: "पावसाच्या प्रत्येक थेंबाचा आदर करणारे स्मार्ट सिंचन.", icon: "💧" },
        { step: "०४", title: "वाढ", body: "दैनंदिन काळजी, तज्ज्ञ सल्ला आणि वेळेवर हस्तक्षेप.", icon: "🌿" },
        { step: "०५", title: "संरक्षण", body: "कीड, हवामान आणि रोगांपासून बचाव.", icon: "🛡️" },
        { step: "०६", title: "कापणी", body: "सर्वोच्च मूल्यासाठी अचूक वेळी कापणी.", icon: "🌾" },
        { step: "०७", title: "बाजार", body: "तुमच्या उत्पादनाला सर्वोत्तम खरेदीदारांशी जोडणे.", icon: "🛒" },
      ],
    },
    testimonials: {
      eyebrow: "बांधावरील आवाज",
      title1: "महाराष्ट्राचे शेतकरी",
      titleAccent: "त्यांच्याच शब्दांत.",
      items: [
        {
          name: "संदीप पाटील",
          village: "सांगली जिल्हा",
          crop: "ऊस उत्पादक",
          quote:
            "शेतसारथी ॲग्रोच्या माती-अहवालाने सगळं बदललं. योग्य खतांच्या मिश्रणाने माझं ऊसाचं उत्पादन एका हंगामात २८% ने वाढलं.",
          avatar:
            "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80&auto=format&fit=crop",
        },
        {
          name: "रेखा भोसले",
          village: "नाशिक जिल्हा",
          crop: "द्राक्ष उत्पादक",
          quote:
            "सल्लागार टीमने माझ्या द्राक्षबागेला कोणापेक्षाही चांगलं समजून घेतलं. योग्य वेळी बुरशीच्या प्रकोपापासून त्यांनी पीक वाचवलं.",
          avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop",
        },
        {
          name: "विकास देशमुख",
          village: "यवतमाळ जिल्हा",
          crop: "कापूस उत्पादक",
          quote:
            "मी २२ वर्षांपासून कापूस पिकवतो. शेतकऱ्याला ग्राहक नव्हे तर भागीदार मानणारी शेतसारथी ॲग्रो ही पहिलीच जागा.",
          avatar:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop",
        },
        {
          name: "सुनीता काळे",
          village: "सोलापूर जिल्हा",
          crop: "डाळिंब उत्पादक",
          quote:
            "त्यांच्या ठिबक सिंचन किटने माझं पाण्याचं बिल अर्धं केलं. डाळिंबं इतकी रसाळ कधीच नव्हती.",
          avatar:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop",
        },
        {
          name: "अनिल जाधव",
          village: "कोल्हापूर जिल्हा",
          crop: "सोयाबीन उत्पादक",
          quote:
            "बियाण्यापासून मंडईपर्यंत — प्रत्येक टप्प्यावर ते माझ्यासोबत होते. हे माझ्या स्वतःच्या वडिलांनाही जमलं नसतं.",
          avatar:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop",
        },
        {
          name: "मनीषा पवार",
          village: "पुणे जिल्हा",
          crop: "कांदा उत्पादक",
          quote:
            "शासकीय योजनेच्या मदतीने फवारणी पंप घेताना ₹४०,००० वाचले. कागदपत्रांचा सगळा गोंधळ ते सांभाळतात.",
          avatar:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80&auto=format&fit=crop",
        },
      ],
    },
    finalCta: {
      badge: "तुमच्या तयारीनुसार",
      line1: "चला, सोबत",
      line2: "वाढूया.",
      lede:
        "आमच्या कृषी तज्ज्ञांसोबतचा २० मिनिटांचा संवाद तुमचा हा हंगाम बदलू शकतो. कुठलंही बंधन नाही. फक्त शेतकरी-ते-शेतकरी मनमोकळी चर्चा.",
    },
    footer: {
      headingLine1: "चला, सोबत",
      headingLine2: "वाढूया.",
      lede:
        "बियाण्यापासून मंडईपर्यंत — आमचे कृषी तज्ज्ञ प्रत्येक टप्प्यावर तुमच्यासोबत आहेत. आजच महाराष्ट्रातील तज्ज्ञांशी बोला.",
      sitemap: "साइटमॅप",
      reachUs: "आमच्यापर्यंत पोहोचा",
      rights: "सर्व हक्क राखीव.",
      crafted: "महाराष्ट्राच्या शेतकऱ्यांसाठी मनापासून तयार केलेले.",
    },
    faqs: {
      items: [
        {
          q: "महाराष्ट्रातील कोणत्या भागांत तुम्ही सेवा देता?",
          a: "सध्या आम्ही विदर्भ, मराठवाडा, पश्चिम महाराष्ट्र, उत्तर महाराष्ट्र आणि कोकणातील शेतकऱ्यांना सेवा देतो — नाशिक, पुणे, सांगली, सोलापूर, यवतमाळ, कोल्हापूर आणि आजूबाजूच्या जिल्ह्यांमधील ५० हून अधिक गावांत.",
        },
        {
          q: "माती परीक्षण खरंच मोफत आहे का?",
          a: "आमच्या शेतकरी स्वागत योजनेअंतर्गत पहिल्यांदा माती परीक्षण फक्त ₹२९९ प्रति नमुना दराने केले जाते. सविस्तर अहवाल ४८ तासांत आणि ३० मिनिटांचा मोफत सल्ला कॉल मिळतो.",
        },
        {
          q: "तुम्ही फक्त रासायनिक खतंच विकता का?",
          a: "नाही. आम्ही मातीच्या आरोग्यावर ठाम विश्वास ठेवतो. सेंद्रिय, जैविक आणि रासायनिक — तिन्ही प्रकारची खते आम्ही देतो, पण तुमच्या माती-अहवालानुसार योग्य मिश्रणाची शिफारस करतो.",
        },
        {
          q: "पीएम-किसान आणि पीक विम्यासाठी तुम्ही मदत करता का?",
          a: "होय. पीएम-किसान, पीएमएफबीवाय (पीक विमा), कृषी यंत्र अनुदान, महाडीबीटी आणि बहुतेक महाराष्ट्र राज्य कृषी योजनांचे कागदपत्र व पाठपुरावा आमची टीम करते.",
        },
        {
          q: "उत्पादने खरेदीसाठी मला तुमच्या कार्यालयात यावे लागते का?",
          a: "अजिबात नाही. फोन किंवा व्हॉट्सॲप करा — आम्ही संपूर्ण महाराष्ट्रात होम डिलिव्हरी देतो आणि आमच्या सेवा-क्षेत्रांत आमचे कृषी तज्ज्ञ शेतावर भेट देतात.",
        },
        {
          q: "पीक सल्ल्याचा खर्च किती?",
          a: "आमची उत्पादने खरेदी करणाऱ्या शेतकऱ्यांसाठी मूलभूत सल्ला मोफत आहे. हंगामभरचे सविस्तर सल्ला आराखडे ₹१,४९९ प्रति एकर प्रति हंगामापासून सुरू होतात.",
        },
      ],
    },
    pages: {
      services: {
        eyebrow: "सेवा",
        title: "तुमच्या शेताला हवं",
        italic: "ते सगळं.",
        description:
          "विदर्भातील कापसापासून कोकणातील भातापर्यंत — महाराष्ट्राच्या विविध कृषी-हवामान विभागांसाठी डिझाइन केलेल्या सात एकात्मिक सेवा.",
        ctaHeading: "कुठून सुरुवात करावी हे कळत नाही?",
        ctaBody:
          "आम्हाला फोन करा. तुमचे पीक, तुमचा जिल्हा, तुमची अडचण सांगा. आम्ही तुम्हाला योग्य दिशा दाखवू — पूर्णपणे मोफत.",
        ctaButton: "तज्ज्ञांशी बोला",
      },
      products: {
        eyebrow: "उत्पादने",
        title: "क्षेत्रात तपासलेली.",
        italic: "शेतकऱ्यांनी मान्य केलेली.",
        description:
          "आमच्या कॅटलॉगमधील प्रत्येक उत्पादन साठवण्याआधी महाराष्ट्रातील खऱ्या शेतकऱ्यांसोबत तपासलेले आहे.",
        ctaEnquire: "व्हॉट्सॲपवर चौकशी करा",
        whatsappEnquiry: "नमस्कार, मला यासंबंधी चौकशी करायची आहे:",
      },
      contact: {
        eyebrow: "संपर्क",
        title: "आम्ही तुमच्यासाठी",
        italic: "इथेच आहोत.",
        description:
          "या, फोन करा किंवा व्हॉट्सॲप करा — आमचे कृषी तज्ज्ञ तुमच्या पीक, माती किंवा उत्पादनांच्या प्रश्नांसाठी सज्ज आहेत.",
        heading1: "संपर्कात",
        headingAccent: "रहा.",
        lede:
          "माती परीक्षण, पीक सल्ला किंवा या हंगामात कोणतं खत वापरावं — यासाठी संपर्क साधा. अपॉइंटमेंटची गरज नाही.",
        cards: {
          call: "आम्हाला फोन करा",
          email: "ईमेल",
          visit: "आम्हाला भेट द्या",
          hours: "वेळा",
          hoursValue: "सोम–शनि: सकाळी ८ – सायंकाळी ७ · रवि: सकाळी ९ – दुपारी २",
        },
      },
      faq: {
        eyebrow: "प्रश्नोत्तरे",
        title: "प्रश्नांची",
        italic: "उत्तरे.",
        description:
          "माती परीक्षणापासून शासकीय योजनांपर्यंत — महाराष्ट्राचे शेतकरी आम्हाला विचारलेले सर्व प्रश्न.",
      },
      advisory: {
        eyebrow: "पीक सल्ला",
        title: "प्रत्येक पिकासाठी",
        italic: "तज्ज्ञ मार्गदर्शन.",
        description:
          "आमचे कृषी तज्ज्ञ महाराष्ट्राचे कृषी-हवामान विभाग समजतात. यवतमाळच्या कापसापासून नाशिकच्या द्राक्षांपर्यंत — आम्ही तिथे राहिलो आहोत.",
        cropsHeading: "आम्ही सल्ला देणारी पिके.",
        worksHeading: "सल्ला कसा चालतो.",
        ctaButton: "मोफत सल्ला कॉल बुक करा",
        crops: [
          { name: "कापूस", zone: "विदर्भ व मराठवाडा", season: "खरीप", icon: "🌿" },
          { name: "सोयाबीन", zone: "विदर्भ", season: "खरीप", icon: "🫘" },
          { name: "द्राक्षे", zone: "नाशिक व पुणे", season: "वर्षभर", icon: "🍇" },
          { name: "ऊस", zone: "पश्चिम महाराष्ट्र", season: "वर्षभर", icon: "🎋" },
          { name: "कांदा", zone: "सोलापूर व नाशिक", season: "रब्बी", icon: "🧅" },
          { name: "डाळिंब", zone: "सोलापूर", season: "वर्षभर", icon: "🍎" },
          { name: "हळद", zone: "सांगली", season: "खरीप", icon: "🟡" },
          { name: "भात", zone: "कोकण व विदर्भ", season: "खरीप", icon: "🌾" },
        ],
        steps: [
          { step: "०१", title: "तुमचं पीक सांगा", body: "तुमचं पीक, जिल्हा आणि सध्याचा टप्पा फोन किंवा व्हॉट्सॲपवर सांगा." },
          { step: "०२", title: "क्षेत्र तपासणी", body: "आमचे कृषी तज्ज्ञ शेतावर भेट देतात किंवा फोटो/व्हिडिओ तपासतात." },
          { step: "०३", title: "वैयक्तिक योजना", body: "बियाणे, पोषण, संरक्षण आणि सिंचनासह हंगामी आराखडा तुम्हाला मिळतो." },
          { step: "०४", title: "हंगामी पाठिंबा", body: "महत्त्वाच्या वाढीच्या टप्प्यांमध्ये साप्ताहिक संपर्क.", },
        ],
      },
    },
    contactForm: {
      successHeading: "संदेश मिळाला!",
      successBody:
        "आम्ही २४ तासांत तुम्हाला परत फोन करू. तातडीच्या प्रश्नांसाठी थेट व्हॉट्सॲप करा.",
      nameLabel: "तुमचं नाव",
      namePlaceholder: "संदीप पाटील",
      phoneLabel: "मोबाइल क्रमांक",
      phonePlaceholder: "+९१ ९३५९४ ९९८५६",
      locationLabel: "जिल्हा / गाव",
      locationPlaceholder: "मनोरी, महाराष्ट्र",
      messageLabel: "आम्ही कशी मदत करू?",
      messagePlaceholder: "तुमचं पीक, अडचण किंवा चौकशी सांगा...",
      submit: "संदेश पाठवा",
      disclaimer:
        "हा एक स्थिर डेमो फॉर्म आहे. खऱ्या चौकशीसाठी थेट फोन किंवा व्हॉट्सॲप करा.",
    },
};

const dictionaries: Record<Locale, Dict> = { en, mr };

export default dictionaries;
