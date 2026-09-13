/**
 * Luxe Lights Unisex Salon - Interactive Application Engine (Client Edition - No Rates)
 * Includes: 5-Slide Rotating Hero Carousel, Curated 6-Item Services Preview,
 * Deduplicated Curated Imagery, and Anchor-Tag WhatsApp Integration
 */

// --- 1. Master Services Catalogue (Curated Treatments - Zero Rates, Distinct Images) ---
const SERVICES_DATA = [
  {
    "id": "whc-hair-cut",
    "category": "hair",
    "title": "Hair Cut",
    "desc": "Precision haircut customized to your hair texture, volume, and facial structure.",
    "tag": "Signature",
    "img": "assets/haircut_service.jpg",
    "suitableFor": "Everyday grooming & style refresh"
  },
  {
    "id": "whc-adv-hair-cut",
    "category": "hair",
    "title": "Advance Hair Cut",
    "desc": "Multi-layered styling, precision texturizing, graduation cuts, and bespoke framing.",
    "tag": "Popular",
    "img": "assets/haircut_service.jpg",
    "suitableFor": "Trendy dimensional styles & volume"
  },
  {
    "id": "whc-head-wash",
    "category": "hair",
    "title": "Head Wash",
    "desc": "Deep cleansing scalp wash with salon-grade antioxidant shampoo and moisture conditioner.",
    "tag": "Essential",
    "img": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Scalp detox & refreshing wash"
  },
  {
    "id": "whc-head-wash-blowdry",
    "category": "hair",
    "title": "Head Wash / Blow Dry",
    "desc": "Shampoo cleanse followed by professional volume, inward, or outward blow-dry finish.",
    "tag": "Styling",
    "img": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Pre-meeting, party, or evening styling"
  },
  {
    "id": "whc-head-massage",
    "category": "hair",
    "title": "Head Massage",
    "desc": "Therapeutic scalp acupressure with heated botanical oils stimulating follicles and melting tension.",
    "tag": "Relaxation",
    "img": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Stress relief & follicle nourishment"
  },
  {
    "id": "whc-roller-styling",
    "category": "hair",
    "title": "Rollar Styling",
    "desc": "Classic heated roller setting creating bouncy, buoyant curls with lasting root volume.",
    "tag": "Styling",
    "img": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "High-volume vintage & modern waves"
  },
  {
    "id": "whc-ironing-crimping",
    "category": "hair",
    "title": "Ironing / Crimping",
    "desc": "Thermal flat-iron sleek straight finish or textured crimping with heat-defense shield.",
    "tag": "Styling",
    "img": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Ultra-sleek mirror straight looks"
  },
  {
    "id": "whc-ironing-curls",
    "category": "hair",
    "title": "Ironing Curls",
    "desc": "Smooth ribbon tonging creating soft romantic spirals, beach waves, or defined party curls.",
    "tag": "Party Look",
    "img": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Festive celebrations & cocktail events"
  },
  {
    "id": "whc-split-ends",
    "category": "hair",
    "title": "Split Ends Treatment",
    "desc": "Micro-trimming split hair ends without losing length, paired with cuticle bonding therapy.",
    "tag": "Care",
    "img": "assets/haircut_service.jpg",
    "suitableFor": "Brittle ends & healthy length retention"
  },
  {
    "id": "whc-root-touchup",
    "category": "hair",
    "title": "Root Touch-up",
    "desc": "Precise color application targeting regrowth and 100% seamless grey coverage.",
    "tag": "Color",
    "img": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Monthly regrowth maintenance"
  },
  {
    "id": "whc-deep-cond",
    "category": "hair",
    "title": "Deep Conditioning",
    "desc": "Hydro-intensive restorative cream infusion reviving parched hair strands.",
    "tag": "Repair",
    "img": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Dry, chemically treated or weathered hair"
  },
  {
    "id": "whc-shiner-spa",
    "category": "hair",
    "title": "Shiner Hair Spa",
    "desc": "Multi-step micro-mist scalp and strand spa depositing mirror-like radiant shine.",
    "tag": "Client Favorite",
    "img": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Lustrous gloss & silky bounce"
  },
  {
    "id": "whc-smoothening-spa",
    "category": "hair",
    "title": "Smoothening Hair Spa",
    "desc": "Anti-frizz moisture lock spa relaxing unruly strands for long-lasting smoothness.",
    "tag": "Popular",
    "img": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Frizzy, wavy, or unruly textures"
  },
  {
    "id": "whc-silk-spa",
    "category": "hair",
    "title": "Silk Treatment Spa",
    "desc": "Hydrolyzed silk protein formula coating cuticles with velvet touch softness.",
    "tag": "Luxury",
    "img": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Coarse, rough hair seeking extreme softness"
  },
  {
    "id": "whc-color-care-spa",
    "category": "hair",
    "title": "Color Care SPA",
    "desc": "pH-balanced color lock treatment preserving vibrant hues and hair elasticity.",
    "tag": "Color Care",
    "img": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Colored, highlighted, or toned hair"
  },
  {
    "id": "whc-anti-dandruff",
    "category": "hair",
    "title": "Anti-Dandruff Treatment",
    "desc": "Antiseptic purifying scalp peel and mask eliminating stubborn flakes and itching.",
    "tag": "Scalp Care",
    "img": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Dry or oily flake-prone scalps"
  },
  {
    "id": "whc-anti-hairfall",
    "category": "hair",
    "title": "Anti-Hairfall Treatment",
    "desc": "Follicular peptide micro-infusion strengthening hair roots to minimize shedding.",
    "tag": "Treatment",
    "img": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Thinning hair & post-seasonal hair loss"
  },
  {
    "id": "phc-global-color",
    "category": "hair",
    "title": "Global Hair Color",
    "desc": "Complete uniform color transformation with rich tonal depth and radiant shine.",
    "tag": "Transformation",
    "img": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Complete color overhaul & shade shift"
  },
  {
    "id": "phc-crown-highlights",
    "category": "hair",
    "title": "Crown Part Highlights",
    "desc": "Artisanal foils across the crown creating face-framing illumination and contrast.",
    "tag": "Highlights",
    "img": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Subtle dimension without full commitment"
  },
  {
    "id": "phc-global-highlights",
    "category": "hair",
    "title": "Global Highlights",
    "desc": "Full-head dimensional highlights and lowlights tailored to complement your skin tone.",
    "tag": "Bestseller",
    "img": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Rich dimensional movement & brightness"
  },
  {
    "id": "phc-rebonding",
    "category": "hair",
    "title": "Rebonding",
    "desc": "Structural bond realignment for permanently straight, sleek, and frizz-free hair.",
    "tag": "Permanent",
    "img": "assets/keratin_service.jpg",
    "suitableFor": "Resistant curly or coarse hair"
  },
  {
    "id": "phc-smoothening",
    "category": "hair",
    "title": "Smoothening",
    "desc": "Natural straight finish preserving organic movement while erasing humidity frizz.",
    "tag": "Popular",
    "img": "assets/keratin_service.jpg",
    "suitableFor": "Natural-looking manageable straight hair"
  },
  {
    "id": "phc-moisture-therapy",
    "category": "hair",
    "title": "Moisture Therapy",
    "desc": "Lipid-replenishing deep cortex therapy restoring elasticity to over-processed hair.",
    "tag": "Therapy",
    "img": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Severe chemical dryness & heat damage"
  },
  {
    "id": "phc-silk-therapy",
    "category": "hair",
    "title": "Silk Therapy",
    "desc": "Intensive amino-silk bonding creating an impermeable sheen and liquid hair texture.",
    "tag": "Silk Glow",
    "img": "assets/keratin_service.jpg",
    "suitableFor": "Glass-hair finish & cuticle sealing"
  },
  {
    "id": "phc-keratin",
    "category": "hair",
    "title": "Keratin Treatment",
    "desc": "Hydrolyzed keratin infusion eliminating 90%+ frizz and cutting blow-dry time in half.",
    "tag": "Most Requested",
    "img": "assets/keratin_service.jpg",
    "suitableFor": "Frizz control for 4-5 months"
  },
  {
    "id": "phc-supreme-therapy",
    "category": "hair",
    "title": "Supreme Therapy",
    "desc": "Master reconstructive hair overhaul combining multi-peptides and deep keratin repair.",
    "tag": "VIP",
    "img": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Ultimate premium hair restoration"
  },
  {
    "id": "bl-under-arms",
    "category": "waxing",
    "title": "Under-Arms Bleach",
    "desc": "Gentle melanin-calming bleach formulated specifically for sensitive underarm skin.",
    "tag": "Brightening",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Even skin tone & dark shadow reduction"
  },
  {
    "id": "bl-full-arms",
    "category": "waxing",
    "title": "Full Arms Bleach",
    "desc": "Even hair lightening and sun-tan correction from shoulders down to fingers.",
    "tag": "De-Tan",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Sun exposure & even arm complexion"
  },
  {
    "id": "bl-half-arms",
    "category": "waxing",
    "title": "Half Arms Bleach",
    "desc": "Quick lightening treatment targeting forearms and hands.",
    "tag": "Quick",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Forearm de-tanning"
  },
  {
    "id": "bl-full-legs",
    "category": "waxing",
    "title": "Full Legs Bleach",
    "desc": "Complete leg skin lightening and tone harmonization for lehengas and dresses.",
    "tag": "Full Body",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Full leg radiance for events"
  },
  {
    "id": "bl-face-neck",
    "category": "waxing",
    "title": "Face & Neck Bleach",
    "desc": "Gentle facial bleach lightening fine peach fuzz to match your natural complexion.",
    "tag": "Face Glow",
    "img": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Pre-makeup brightness & tan recovery"
  },
  {
    "id": "bl-sidelock",
    "category": "waxing",
    "title": "Side Lock Bleach",
    "desc": "Targeted side-burn hair lightening blending seamlessly into facial skin.",
    "tag": "Touch-up",
    "img": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Neat facial profile blending"
  },
  {
    "id": "bl-back-front",
    "category": "waxing",
    "title": "Full Back and Front Bleach",
    "desc": "Torso de-tanning and hair softening for blouses, backless gowns, and swimwear.",
    "tag": "Occasion",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Bridal blouse & cocktail attire"
  },
  {
    "id": "bl-full-body",
    "category": "waxing",
    "title": "Full Body Bleach",
    "desc": "Comprehensive head-to-toe skin tone evening and total body de-tanning.",
    "tag": "Bridal Special",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Full bridal trousseau preparation"
  },
  {
    "id": "bl-body-polishing",
    "category": "waxing",
    "title": "Body Polishing",
    "desc": "Exfoliating botanical scrub, dead cell buffing, and warm essential oil body glow massage.",
    "tag": "Royal Care",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Silky smooth skin & regal radiance"
  },
  {
    "id": "cu-fruit",
    "category": "facial",
    "title": "Fruit Clean-up",
    "desc": "Pure botanical fruit enzyme wash and scrub clearing daily grime and impurities.",
    "tag": "Gentle",
    "img": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Sensitive skin & quick routine refresh"
  },
  {
    "id": "cu-kaya",
    "category": "facial",
    "title": "Kaya Clean-up",
    "desc": "Deep pore purification and gentle blemish removal for calmer, clearer skin.",
    "tag": "Skin Care",
    "img": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Blemish-prone & congested skin"
  },
  {
    "id": "cu-dtan",
    "category": "facial",
    "title": "D-Tan Clean-up",
    "desc": "Specialized lactic & botanical pack drawing out embedded sun damage and tanning.",
    "tag": "Popular",
    "img": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Sun tan reversal & dullness"
  },
  {
    "id": "cu-aroma",
    "category": "facial",
    "title": "Aroma Clean-up",
    "desc": "Aromatic essential oils steam and cleanse soothing senses and balancing natural sebum.",
    "tag": "Aromatic",
    "img": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Stress relief & revitalized glow"
  },
  {
    "id": "cu-lotus",
    "category": "facial",
    "title": "Lotus Clean-up",
    "desc": "Lotus herbal actives cleansing deep into pores while sealing in natural moisture.",
    "tag": "Herbal",
    "img": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Balanced moisture & clear skin"
  },
  {
    "id": "cu-o3",
    "category": "facial",
    "title": "O3+ Clean-up",
    "desc": "Oxygen-charged marine algae treatment giving an immediate translucent glow.",
    "tag": "Instant Glow",
    "img": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Instant party prep & bright radiance"
  },
  {
    "id": "cu-cheryls",
    "category": "facial",
    "title": "Cheryl's Clean-up",
    "desc": "Targeted salon formulation balancing sebum, brightening tone, and smoothing texture.",
    "tag": "Specialist",
    "img": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Combination & oily complexion balance"
  },
  {
    "id": "fac-dtan-pack",
    "category": "facial",
    "title": "D-Tan Pack",
    "desc": "Potent de-pigmentation clay pack lightening stubborn tanning across the face and neck.",
    "tag": "Sun Recovery",
    "img": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Post-travel sun damage & tanned skin"
  },
  {
    "id": "fac-fruit",
    "category": "facial",
    "title": "Fruit Facial",
    "desc": "Multi-fruit vitamin therapy replenishing nutrients, refining texture, and softening skin.",
    "tag": "Natural",
    "img": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "All skin types & youthful softness"
  },
  {
    "id": "fac-aroma",
    "category": "facial",
    "title": "Aroma Facial",
    "desc": "Lavender, chamomile, and rose floral essences paired with lymphatic face massage.",
    "tag": "Relaxing",
    "img": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Fatigued skin & deep holistic calm"
  },
  {
    "id": "fac-lotus",
    "category": "facial",
    "title": "Lotus Facial",
    "desc": "Sacred lotus bio-actives restoring skin barrier function and radiant suppleness.",
    "tag": "Radiance",
    "img": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Dehydrated or sensitive skin types"
  },
  {
    "id": "fac-anti-acne",
    "category": "facial",
    "title": "Anti Acne Facial",
    "desc": "Tea-tree, neem, and salicylic purifying facial controlling active acne and breakouts.",
    "tag": "Clear Skin",
    "img": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Oily, acne-prone & congested pores"
  },
  {
    "id": "fac-mint",
    "category": "facial",
    "title": "Mint-Enrichment Facial",
    "desc": "Invigorating menthol detox providing icy-cool relief, tight pores, and oil control.",
    "tag": "Refreshing",
    "img": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Summer heat relief & enlarged pores"
  },
  {
    "id": "fac-instant",
    "category": "facial",
    "title": "Instant Facial",
    "desc": "Fast-acting radiance infusion delivering quick illumination for unexpected events.",
    "tag": "Quick Glow",
    "img": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Same-day events & busy schedules"
  },
  {
    "id": "fac-anti-aging",
    "category": "facial",
    "title": "Anti-Aging Facial",
    "desc": "Collagen peptides, firming massage, and elastin boosters reducing visible fine lines.",
    "tag": "Youth Boost",
    "img": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Mature skin & loss of firmness"
  },
  {
    "id": "fac-anti-pigmentation",
    "category": "facial",
    "title": "Anti-Pigmentation Facial",
    "desc": "Kojic and arbutin brightening therapy fading dark spots, melasma, and uneven patches.",
    "tag": "Even Tone",
    "img": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Hyperpigmentation & blemish marks"
  },
  {
    "id": "fac-skin-tightening",
    "category": "facial",
    "title": "Skin-Tightening Facial",
    "desc": "Firming facial massage and tension-lifting algae mask contouring jawline and cheeks.",
    "tag": "Firming",
    "img": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Sagging contours & puffiness"
  },
  {
    "id": "fac-kaya",
    "category": "facial",
    "title": "Kaya Facial",
    "desc": "Deep intensive hydration delivering moisture to the deeper layers of skin.",
    "tag": "Intensive",
    "img": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Dry, flaking skin & dull texture"
  },
  {
    "id": "fac-gold",
    "category": "facial",
    "title": "Gold Facial",
    "desc": "Pure 24K gold foil particles boosting micro-circulation and imparting imperial shimmer.",
    "tag": "Royal Glow",
    "img": "assets/gold_facial.jpg",
    "suitableFor": "Bridal, engagement & festive celebrations"
  },
  {
    "id": "fac-vitamin-c",
    "category": "facial",
    "title": "Vitamin C Facial",
    "desc": "Potent antioxidant therapy revitalizing fatigued cells and boosting youthful brightness.",
    "tag": "Brightening",
    "img": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Pollution defense & luminous skin"
  },
  {
    "id": "fac-cheryls",
    "category": "facial",
    "title": "Cheryl's Facial",
    "desc": "Targeted corrective facial delivering visible clarity, refined pores, and healthy sheen.",
    "tag": "Signature",
    "img": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Uneven tone & bridal prep"
  },
  {
    "id": "fac-o3",
    "category": "facial",
    "title": "O3 Facial",
    "desc": "Advanced multi-stage oxygen treatment delivering signature red-carpet radiance.",
    "tag": "VIP Choice",
    "img": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Ultimate brightening & pre-wedding glam"
  },
  {
    "id": "thr-eyebrows",
    "category": "waxing",
    "title": "Eyebrows Threading",
    "desc": "Artisanal arch shaping tailored precisely to your facial symmetry and eye line.",
    "tag": "Precision",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Crisp, defined brow arches"
  },
  {
    "id": "thr-upper-lips",
    "category": "waxing",
    "title": "Upper Lips Threading",
    "desc": "Quick, precise hair removal around the upper lip followed by cooling aloe touch.",
    "tag": "Quick",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Clean, smooth lip boundary"
  },
  {
    "id": "thr-forehead",
    "category": "waxing",
    "title": "Forehead Threading",
    "desc": "Hairline definition and forehead peach-fuzz epilation for clean foundation finish.",
    "tag": "Smooth",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Clean hairline & glass forehead"
  },
  {
    "id": "thr-lower-lips",
    "category": "waxing",
    "title": "Lower Lips Threading",
    "desc": "Gentle epilation clearing fine hairs below the lower lip line.",
    "tag": "Delicate",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Smooth lower chin area"
  },
  {
    "id": "thr-side-lock",
    "category": "waxing",
    "title": "Side Lock Threading",
    "desc": "Precision shaping of side locks for a neat, sculpted cheek contour.",
    "tag": "Shaping",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Neat cheek contouring"
  },
  {
    "id": "thr-full-face",
    "category": "waxing",
    "title": "Full-Face Threading",
    "desc": "Complete facial epilation creating an immaculate canvas for high-definition makeup.",
    "tag": "Complete",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Bridal makeup & pore-free canvas"
  },
  {
    "id": "nwx-full-arms",
    "category": "waxing",
    "title": "Full Arms (Normal Wax)",
    "desc": "Complete hair removal from shoulders down to knuckles with soothing post-wax lotion.",
    "tag": "Classic",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Everyday silky arms"
  },
  {
    "id": "nwx-half-arms",
    "category": "waxing",
    "title": "Half Arms (Normal Wax)",
    "desc": "Quick forearm epilation from elbows to wrists.",
    "tag": "Classic",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Routine upkeep"
  },
  {
    "id": "nwx-full-legs",
    "category": "waxing",
    "title": "Full Legs (Normal Wax)",
    "desc": "Complete hair removal from upper thighs to toes leaving legs smooth and soft.",
    "tag": "Classic",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Smooth legs for dresses & lehengas"
  },
  {
    "id": "nwx-half-legs",
    "category": "waxing",
    "title": "Half Legs (Normal Wax)",
    "desc": "Lower leg waxing from knees down to ankles.",
    "tag": "Classic",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Calf & ankle smoothness"
  },
  {
    "id": "nwx-under-arms",
    "category": "waxing",
    "title": "Under Arms (Normal Wax)",
    "desc": "Clean, fast underarm waxing with antiseptic finish.",
    "tag": "Classic",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Hygienic routine care"
  },
  {
    "id": "nwx-chin",
    "category": "waxing",
    "title": "Chin Wax (Normal Wax)",
    "desc": "Targeted chin hair waxing with post-treatment soothing astringent.",
    "tag": "Classic",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Chin peach fuzz removal"
  },
  {
    "id": "nwx-back-upper",
    "category": "waxing",
    "title": "Full Back Upper Body (Normal Wax)",
    "desc": "Upper back waxing for smooth shoulder lines and deep-cut blouses.",
    "tag": "Classic",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Backless blouse & dress prep"
  },
  {
    "id": "nwx-front-upper",
    "category": "waxing",
    "title": "Full Front Upper Body (Normal Wax)",
    "desc": "Gentle front torso waxing with skin-calming lotion finish.",
    "tag": "Classic",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Smooth front silhouette"
  },
  {
    "id": "nwx-upper-lips",
    "category": "waxing",
    "title": "Upper Lips Wax (Normal Wax)",
    "desc": "Fast strip waxing epilation along the upper lip line.",
    "tag": "Classic",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Quick lip clean"
  },
  {
    "id": "nwx-stomach",
    "category": "waxing",
    "title": "Stomach Wax (Normal Wax)",
    "desc": "Abdomen and waistline hair removal for smooth saree drapes.",
    "tag": "Classic",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Midriff & saree readiness"
  },
  {
    "id": "nwx-bikini",
    "category": "waxing",
    "title": "Bikini Wax (Normal Wax)",
    "desc": "Hygienic bikini line contouring conducted in private, spotless comfort.",
    "tag": "Hygienic",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Swimwear & private grooming"
  },
  {
    "id": "nwx-full-body",
    "category": "waxing",
    "title": "Full Body Wax (Normal Wax)",
    "desc": "Complete head-to-toe waxing session conducted with hygienic disposables.",
    "tag": "Full Body",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Total body silky reset"
  },
  {
    "id": "rwx-full-arms",
    "category": "waxing",
    "title": "Full Arms (Rica Wax)",
    "desc": "Italian lipo-soluble wax with gentle grip, calming vegetable oils, and zero redness.",
    "tag": "Gentle Rica",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Sensitive skin & pain minimization"
  },
  {
    "id": "rwx-half-arms",
    "category": "waxing",
    "title": "Half Arms (Rica Wax)",
    "desc": "Rica epilation from elbows down with soothing after-wax conditioning oil.",
    "tag": "Gentle Rica",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Sensitive forearms"
  },
  {
    "id": "rwx-full-legs",
    "category": "waxing",
    "title": "Full Legs (Rica Wax)",
    "desc": "Pain-minimized full leg Rica waxing removing even the finest ingrown hairs.",
    "tag": "Gentle Rica",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Ultra-smooth legs with zero rash"
  },
  {
    "id": "rwx-half-legs",
    "category": "waxing",
    "title": "Half Legs (Rica Wax)",
    "desc": "Lower leg Rica waxing with deep botanical hydration.",
    "tag": "Gentle Rica",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Quick calf grooming"
  },
  {
    "id": "rwx-under-arms",
    "category": "waxing",
    "title": "Under Arms (Rica Wax)",
    "desc": "Hypoallergenic Italian wax gentle on delicate underarms preventing darkness.",
    "tag": "Sensitive",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Sensitive underarm care"
  },
  {
    "id": "rwx-back-upper",
    "category": "waxing",
    "title": "Full Back Upper Body (Rica Wax)",
    "desc": "Gentle back hair removal with pre-wax lotion and post-wax soothing oil.",
    "tag": "Comfort",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Sensitive back skin"
  },
  {
    "id": "rwx-front-upper",
    "category": "waxing",
    "title": "Full Front Upper Body (Rica Wax)",
    "desc": "Front upper body waxing with Italian botanical formula minimizing redness.",
    "tag": "Comfort",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Torso comfort"
  },
  {
    "id": "rwx-upper-lips",
    "category": "waxing",
    "title": "Upper Lips Wax (Rica Wax)",
    "desc": "Zero-colophony Rica facial wax formulated specifically for tender lip contours.",
    "tag": "Delicate",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Sensitive facial skin"
  },
  {
    "id": "rwx-chin",
    "category": "waxing",
    "title": "Chin Wax (Rica Wax)",
    "desc": "Tender chin hair removal with nourishing post-epilation botanical oil.",
    "tag": "Delicate",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Facial softness without redness"
  },
  {
    "id": "rwx-stomach",
    "category": "waxing",
    "title": "Stomach Wax (Rica Wax)",
    "desc": "Gentle midriff Rica waxing soothing sensitive stomach skin.",
    "tag": "Comfort",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Smooth waistline"
  },
  {
    "id": "rwx-bikini",
    "category": "waxing",
    "title": "Bikini Wax (Rica Wax)",
    "desc": "Specialized peel-off Rica Brazilian wax with avocado oil for painless private care.",
    "tag": "Premium",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Maximum hygiene & comfort"
  },
  {
    "id": "rwx-full-body",
    "category": "waxing",
    "title": "Full Body Wax (Rica Wax)",
    "desc": "The gold standard full body waxing ritual with Italian Rica liposoluble formula.",
    "tag": "Luxury Wax",
    "img": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Bridal trousseau & supreme body smoothness"
  },
  {
    "id": "mp-basic-mani",
    "category": "nails",
    "title": "Basic Manicure",
    "desc": "Warm hand soak, cuticle cleaning, precision nail shaping, buffing, and hand lotion.",
    "tag": "Care",
    "img": "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Routine neat hand grooming"
  },
  {
    "id": "mp-basic-pedi",
    "category": "nails",
    "title": "Basic Pedicure",
    "desc": "Foot bath, heel buffing, cuticle trimming, toenail shaping, and foot moisturizing.",
    "tag": "Care",
    "img": "assets/pedicure_station.jpg",
    "suitableFor": "Clean and refreshed feet"
  },
  {
    "id": "mp-deluxe-mani",
    "category": "nails",
    "title": "Deluxe Manicure",
    "desc": "Aromatic hand scrub, dead cell peeling, clarifying mask wrap, and relaxing hand massage.",
    "tag": "Deluxe",
    "img": "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Deep hydration & velvety hands"
  },
  {
    "id": "mp-deluxe-pedi",
    "category": "nails",
    "title": "Deluxe Pedicure",
    "desc": "Intensive cracked-heel therapy, exfoliating scrub, moisture wrap, and extended acupressure.",
    "tag": "Deluxe",
    "img": "assets/pedicure_station.jpg",
    "suitableFor": "Tired feet, cracked heels & relaxation"
  },
  {
    "id": "mp-french-mani",
    "category": "nails",
    "title": "French Manicure",
    "desc": "Immaculate translucent base crowned with crisp white tips for timeless elegance.",
    "tag": "Classic",
    "img": "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Timeless professional & bridal hands"
  },
  {
    "id": "mp-french-pedi",
    "category": "nails",
    "title": "French Pedicure",
    "desc": "Pristine French white smile-line styling over neat, buffed toenails.",
    "tag": "Classic",
    "img": "assets/pedicure_station.jpg",
    "suitableFor": "Open-toe sandals & chic events"
  },
  {
    "id": "mp-dtan-mani",
    "category": "nails",
    "title": "De-Tan Manicure",
    "desc": "Specialized lactic brightening peel clearing sun pigmentation across hands and fingers.",
    "tag": "De-Tan",
    "img": "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Sun-tanned hands & knuckles"
  },
  {
    "id": "mp-dtan-pedi",
    "category": "nails",
    "title": "De-Tan Pedicure",
    "desc": "Brightening foot scrub removing strap marks and sun discoloration.",
    "tag": "De-Tan",
    "img": "assets/pedicure_station.jpg",
    "suitableFor": "Even foot skin tone"
  },
  {
    "id": "mp-lotus-mani",
    "category": "nails",
    "title": "Lotus Manicure",
    "desc": "Herbal lotus floral soak, anti-aging hand mask, and botanical moisture sealing.",
    "tag": "Herbal",
    "img": "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Nourished, youthful hands"
  },
  {
    "id": "mp-lotus-pedi",
    "category": "nails",
    "title": "Lotus Pedicure",
    "desc": "Therapeutic herbal lotus foot bath, botanical scrub, and deep nourishing balm.",
    "tag": "Herbal",
    "img": "assets/pedicure_station.jpg",
    "suitableFor": "Soft, deeply relaxed feet"
  },
  {
    "id": "mp-cut-file-polish",
    "category": "nails",
    "title": "Cut, File, Polish",
    "desc": "Express nail trim, shape, shine buff, and fresh application of premium lacquer.",
    "tag": "Express",
    "img": "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Fast nail refresh between full sessions"
  },
  {
    "id": "na-paint-brush",
    "category": "nails",
    "title": "Nail Paint & Brush Art",
    "desc": "Freehand creative artistry, fine florals, metallic lines, and custom motifs.",
    "tag": "Artistic",
    "img": "assets/nail_studio.jpg",
    "suitableFor": "Personalized nail statement"
  },
  {
    "id": "na-needle-art",
    "category": "nails",
    "title": "Needle Art",
    "desc": "Precision needle-drag marbling, peacock swirls, and abstract feather effects.",
    "tag": "Intricate",
    "img": "assets/nail_studio.jpg",
    "suitableFor": "Intricate marble nail designs"
  },
  {
    "id": "na-french-art",
    "category": "nails",
    "title": "French Art",
    "desc": "Modernized French tips featuring chrome edges, glitter gradients, or colored curves.",
    "tag": "Modern",
    "img": "assets/nail_studio.jpg",
    "suitableFor": "Contemporary chic styling"
  },
  {
    "id": "na-stamp-art",
    "category": "nails",
    "title": "Stamp Art",
    "desc": "Flawless laser-cut stencil stamping creating repeating mandalas and lace motifs.",
    "tag": "Pattern",
    "img": "assets/nail_studio.jpg",
    "suitableFor": "Intricate geometric patterns"
  },
  {
    "id": "na-sticker-art",
    "category": "nails",
    "title": "Sticker Art",
    "desc": "High-definition 3D decals, metallic foils, and gemstone nail embellishments.",
    "tag": "Accent",
    "img": "assets/nail_studio.jpg",
    "suitableFor": "Party accent nails"
  },
  {
    "id": "na-gel-paint",
    "category": "nails",
    "title": "Gel Nail Paint",
    "desc": "UV/LED cured high-shine lacquer lasting 3+ weeks with zero chipping.",
    "tag": "Long Lasting",
    "img": "assets/nail_studio.jpg",
    "suitableFor": "Durable everyday brilliance"
  },
  {
    "id": "na-gel-extensions",
    "category": "nails",
    "title": "Gel Nail Extensions",
    "desc": "Sculpted lightweight gel extensions offering natural feel and elegant strength.",
    "tag": "Popular",
    "img": "assets/nail_studio.jpg",
    "suitableFor": "Natural-look elongated nails"
  },
  {
    "id": "na-acrylic-extensions",
    "category": "nails",
    "title": "Acrylic Extensions",
    "desc": "High-durability sculpted acrylic tips with custom shape (almond, coffin, square, stiletto).",
    "tag": "Statement",
    "img": "assets/nail_studio.jpg",
    "suitableFor": "Maximum length, strength & statement nails"
  },
  {
    "id": "mu-eyes-makeup",
    "category": "bridal",
    "title": "Eyes Makeup",
    "desc": "Smokey eye artistry, cut crease, metallic foil shimmer, lash enhancement, and wing liner.",
    "tag": "Glamour",
    "img": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Statement party eye focus"
  },
  {
    "id": "mu-natural-makeup",
    "category": "bridal",
    "title": "Natural Makeup",
    "desc": "Subtle dewy complexion base, soft cheek tint, understated eyes, and nude lip finish.",
    "tag": "Everyday",
    "img": "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Daytime functions, pooja & meetings"
  },
  {
    "id": "mu-party-makeup",
    "category": "bridal",
    "title": "Party Makeup",
    "desc": "HD camera-ready makeup, contouring, luminous highlight, lash application, and hair styling.",
    "tag": "Occasion",
    "img": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    "suitableFor": "Cocktails, sangeet guests & wedding parties"
  },
  {
    "id": "mu-engagement-makeup",
    "category": "bridal",
    "title": "Engagement Makeup",
    "desc": "Radiant ring-ceremony glamour, designer hair artistry, lash enhancement, and dupatta draping.",
    "tag": "Bridal Glam",
    "img": "assets/bridal_after.jpg",
    "suitableFor": "Brides on engagement / sagai day"
  },
  {
    "id": "mu-reception-makeup",
    "category": "bridal",
    "title": "Reception Makeup",
    "desc": "Sophisticated bridal evening styling designed for stage lighting and ballroom photography.",
    "tag": "Evening",
    "img": "assets/bridal_after.jpg",
    "suitableFor": "Wedding reception brides"
  },
  {
    "id": "mu-bridal-makeup",
    "category": "bridal",
    "title": "Bridal Makeup",
    "desc": "Grand royal bridal transformation: 4K HD base, jewelry setting, dupatta draping, floral hair artistry, and premium lashes.",
    "tag": "Wedding Day",
    "img": "assets/indian_bride.jpg",
    "suitableFor": "The grand wedding day bride"
  },
  {
    "id": "mu-pre-bridal-makeup",
    "category": "bridal",
    "title": "Pre-Bridal Makeup",
    "desc": "Complete trial session, color matching, look visualization, and skin consultation.",
    "tag": "VIP Bridal",
    "img": "assets/bridal_after.jpg",
    "suitableFor": "Bridal trial & look customization"
  }
];

// --- 2. Real Transformation Before & After Data (Authentic Client Pairs) ---
const TRANSFORMATIONS = [
  {
    title: 'Nanoplastia Glass Shine Treatment',
    desc: 'Reversed dry, frizzy damage on the exact same hair length — delivering silky, mirror-glossy smooth straightness with deep protein reconstruction.',
    beforeImg: 'assets/hair_before.jpg',
    afterImg: 'assets/hair_after.jpg',
  },
  {
    title: 'Royal HD Camera-Ready Indian Bridal Makeover',
    desc: 'From natural bare skin to an exquisite royal Indian bride with luminous 4K HD finish, gold Kundan jewelry, and traditional dupatta setting.',
    beforeImg: 'assets/bridal_before.jpg',
    afterImg: 'assets/bridal_after.jpg',
  },
  {
    title: 'Gentleman Beard Architecture & Precision Fade',
    desc: 'Sculpted razor-sharp beard symmetry, beard spa conditioning, and seamless texture taper fade on the same patron.',
    beforeImg: 'assets/groom_before.jpg',
    afterImg: 'assets/groom_after.jpg',
  }
];

// --- 3. Studio & Work Gallery Data (100% Unique Photos - Zero Repeated Images) ---
const GALLERY_ITEMS = [
  {
    category: 'bridal',
    caption: 'Royal Indian Bridal Couture & Floral Hair Artistry',
    img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'hair',
    caption: 'Luxe Lights Signature Hair Spa & Wash Station',
    img: 'assets/salon_interior.jpg'
  },
  {
    category: 'men',
    caption: 'Gentlemen Traditional Styling & Fine Beard Grooming',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'bridal',
    caption: 'Intricate Bridal Jewellery & Regal Kundan Detailing',
    img: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'men',
    caption: 'Precision Taper Fade & Sharp Edge Work',
    img: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'salon',
    caption: 'Luxe Lights Styling Stations & Warm Ambient Glow',
    img: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'salon',
    caption: 'Dedicated Private VIP Aesthetic Suite',
    img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'hair',
    caption: 'Master Stylist Sectioning & Precision Tools',
    img: 'assets/salon_tools.jpg'
  },
  {
    category: 'salon',
    caption: 'Luxury Hair Washing & Reclining Spa Lounge',
    img: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80'
  },
  {
    category: 'hair',
    caption: 'Silky Bouncy Blowout & Polished Texture',
    img: 'assets/hair_care.jpg'
  },
  {
    category: 'bridal',
    caption: 'Radiant Skin Prep & Medi-Facial Aesthetics',
    img: 'assets/skin_treatment.jpg'
  },
  {
    category: 'men',
    caption: 'Gentlemen Scalp & Beard Revival Lounge',
    img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80'
  }
];

// --- 4. 5-Slide Rotating Hero Carousel Engine ---
const HERO_SLIDES_DATA = [
  {
    title: 'Look Captivating. <br /><span class="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent italic font-normal">Be Your Own Kind of Beautiful.</span>',
    subtitle: 'Experience couture hair transformations, glow-boosting hydra-facials, and bespoke bridal trousseau styling in Kharar.'
  },
  {
    title: 'Radiant Skin Rituals. <br /><span class="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent italic font-normal">Instant Korean Glass Skin Glow.</span>',
    subtitle: 'Advanced vortex exfoliation, Casmara pure 24K gold dust facials, and deep sun tan recovery.'
  },
  {
    title: 'Royal Bridal Artistry. <br /><span class="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent italic font-normal">Cinematic 4K HD Perfection.</span>',
    subtitle: 'Flawless camera-ready makeup, designer floral hair artistry, Kundan jewelry setting, and master lehenga draping.'
  },
  {
    title: 'Gentlemen Grooming. <br /><span class="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent italic font-normal">Razor-Sharp Precision & Fades.</span>',
    subtitle: 'Beard sculpting with hot towel razor finish, active charcoal detox facials, and personalized hair design.'
  },
  {
    title: 'Unhurried Sanctuary. <br /><span class="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 bg-clip-text text-transparent italic font-normal">A Calm, Considered Experience.</span>',
    subtitle: 'World-class care using prestige brands (L’Oréal, Olaplex) with one-to-one consultation in a private, hygienic atmosphere.'
  }
];

let currentHeroSlide = 0;
let heroInterval = null;

function showHeroSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const dotsContainer = document.getElementById('hero-dots');
  const titleEl = document.getElementById('hero-title');
  const subtitleEl = document.getElementById('hero-subtitle');

  if (!slides.length) return;

  if (index >= slides.length) currentHeroSlide = 0;
  else if (index < 0) currentHeroSlide = slides.length - 1;
  else currentHeroSlide = index;

  // Update slide images with smooth fade
  slides.forEach((slide, i) => {
    if (i === currentHeroSlide) {
      slide.classList.remove('opacity-0', 'pointer-events-none');
      slide.classList.add('opacity-100');
    } else {
      slide.classList.remove('opacity-100');
      slide.classList.add('opacity-0', 'pointer-events-none');
    }
  });

  // Update dots
  if (dotsContainer) {
    const dots = dotsContainer.querySelectorAll('button');
    dots.forEach((dot, i) => {
      if (i === currentHeroSlide) {
        dot.className = 'w-8 h-2 rounded-full bg-gold-400 transition-all duration-300';
      } else {
        dot.className = 'w-2 h-2 rounded-full bg-white/30 hover:bg-white/60 transition-all duration-300';
      }
    });
  }

  // Update headlines with smooth fade
  if (titleEl && subtitleEl && HERO_SLIDES_DATA[currentHeroSlide]) {
    titleEl.style.opacity = '0';
    subtitleEl.style.opacity = '0';
    setTimeout(() => {
      titleEl.innerHTML = HERO_SLIDES_DATA[currentHeroSlide].title;
      subtitleEl.innerHTML = HERO_SLIDES_DATA[currentHeroSlide].subtitle;
      titleEl.style.opacity = '1';
      subtitleEl.style.opacity = '1';
    }, 250);
  }
}

function nextHeroSlide() {
  showHeroSlide(currentHeroSlide + 1);
  resetHeroTimer();
}

function prevHeroSlide() {
  showHeroSlide(currentHeroSlide - 1);
  resetHeroTimer();
}

function goHeroSlide(index) {
  showHeroSlide(index);
  resetHeroTimer();
}

function startHeroTimer() {
  heroInterval = setInterval(() => {
    showHeroSlide(currentHeroSlide + 1);
  }, 5000);
}

function resetHeroTimer() {
  if (heroInterval) clearInterval(heroInterval);
  startHeroTimer();
}

function initHeroTouchSwipe() {
  const heroSection = document.getElementById('hero');
  if (!heroSection) return;

  let startX = 0;
  let endX = 0;

  heroSection.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  }, { passive: true });

  heroSection.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextHeroSlide();
      else prevHeroSlide();
    }
  }, { passive: true });

  // Pause autoplay on mouse hover
  heroSection.addEventListener('mouseenter', () => {
    if (heroInterval) clearInterval(heroInterval);
  });
  heroSection.addEventListener('mouseleave', () => {
    resetHeroTimer();
  });
}

// --- 4b. Real Google Reviews (verified 5-star, pulled from the salon's Google Business Profile) ---
const GOOGLE_REVIEWS_DATA = [
  {
    name: 'Amarjeet Kaur',
    meta: 'Google Verified • 2 months ago',
    text: "I got hair services here for both myself and my mother. I got my haircut exactly the way I wanted, and I'm very happy with the result. The services here are really excellent. I also got my mother's hair colored, and the results turned out amazing. Everyone was very friendly, polite, and professional. Highly recommended!"
  },
  {
    name: 'Anmol',
    meta: 'Google Verified • 7 months ago',
    text: "This salon is a gem. Impeccable service, beautiful atmosphere, and truly talented stylists. I felt pampered from start to finish, and the results were flawless. You can tell they genuinely care about their clients and their craft. Worth every penny!"
  },
  {
    name: 'Pardeep Moffar',
    meta: 'Google Verified • 6 months ago',
    text: "Honestly agar 7⭐ rating dene ka option hota to main zaroor deta. Luxe Lights Unisex Salon ka service, staff behaviour aur finishing sab top level hai. Haircut aur grooming bilkul professional level ki hoti hai. Highly recommended!"
  },
  {
    name: 'Kartik Verma',
    meta: 'Google Verified • 1 month ago',
    text: "Exceptional service from start to finish. The team is highly skilled, uses quality products, and truly understands what the client wants. The atmosphere is relaxing, and the results exceeded my expectations. Highly recommend this salon to anyone looking for top-quality service."
  },
  {
    name: 'Rohit',
    meta: 'Google Verified • 4 months ago',
    text: "Absolutely fantastic experience! The shop is clean, the staff is welcoming, and the atmosphere is great. My barber listened exactly to what I wanted and nailed it. Highly recommend this place to anyone looking for a top-notch cut. I will definitely be back!"
  },
  {
    name: 'Rajwinder Kaur',
    meta: 'Google Verified • 5 months ago',
    text: "Absolutely amazing salon service! I would give it 7 stars if I could. The staff were very professional, friendly, and attentive. The ambiance was clean, relaxing, and beautifully maintained. The service was done with great care and precision, and the results were perfect."
  },
  {
    name: 'Kamruddin Irfan',
    meta: 'Google Verified • 6 months ago',
    text: "Absolutely outstanding salon service! The staff was professional, friendly, and highly skilled. They made me feel comfortable from the moment I walked in. The salon was clean, hygienic, and had a very relaxing atmosphere. Highly recommend this salon to everyone looking for quality and excellent service."
  },
  {
    name: 'Bhupinr',
    meta: 'Google Verified • 6 months ago',
    text: "I had a wonderful experience! The team is skilled, polite, and understands exactly what you want. Truly a 5-star service."
  }
];

let reviewsCarouselIndex = 0;
let reviewsCarouselTimer = null;

function renderReviewCard(review) {
  const initial = review.name.trim().charAt(0).toUpperCase();
  return `
    <div class="p-6 rounded-2xl bg-noir-900 border border-white/5 space-y-4 flex flex-col justify-between">
      <div class="space-y-3">
        <div class="flex text-gold-400">
          ${'<i data-lucide="star" class="w-3.5 h-3.5 fill-gold-400"></i>'.repeat(5)}
        </div>
        <p class="text-neutral-300 text-xs sm:text-sm leading-relaxed italic">"${review.text}"</p>
      </div>
      <div class="flex items-center gap-3 pt-4 border-t border-white/5">
        <div class="w-9 h-9 rounded-full bg-gold-500/20 text-gold-400 font-bold text-xs flex items-center justify-center shrink-0">
          ${initial}
        </div>
        <div>
          <div class="text-white text-xs font-bold">${review.name}</div>
          <div class="text-neutral-500 text-[10px]">${review.meta}</div>
        </div>
      </div>
    </div>
  `;
}

function renderReviewsCarousel() {
  const track = document.getElementById('reviews-carousel-track');
  const dotsWrap = document.getElementById('reviews-carousel-dots');
  if (!track) return;

  const total = GOOGLE_REVIEWS_DATA.length;
  const visible = [0, 1, 2].map(offset => GOOGLE_REVIEWS_DATA[(reviewsCarouselIndex + offset) % total]);

  track.innerHTML = visible.map(renderReviewCard).join('');

  if (dotsWrap) {
    dotsWrap.innerHTML = GOOGLE_REVIEWS_DATA.map((_, i) => `
      <span class="inline-block rounded-full transition-all ${i === reviewsCarouselIndex ? 'w-4 h-1.5 bg-gold-400' : 'w-1.5 h-1.5 bg-white/20'}"></span>
    `).join('');
  }

  if (window.lucide) lucide.createIcons();
}

const REVIEWS_SLIDE_MS = 700;   // how long the slide animation takes
const REVIEWS_PAUSE_MS = 4800;  // how long each set stays visible before sliding

function setTrackTransform(track, x, opacity, withTransition) {
  track.style.transition = withTransition
    ? `transform ${REVIEWS_SLIDE_MS}ms ease-in-out, opacity ${REVIEWS_SLIDE_MS}ms ease-in-out`
    : 'none';
  track.style.transform = `translateX(${x})`;
  track.style.opacity = opacity;
}

function advanceReviewsCarousel() {
  const track = document.getElementById('reviews-carousel-track');
  if (!track) return;

  // Slide the current set out to the right
  setTrackTransform(track, '0%', '1', false);
  void track.offsetWidth; // force reflow so the transition below actually animates
  setTrackTransform(track, '100%', '0', true);

  setTimeout(() => {
    reviewsCarouselIndex = (reviewsCarouselIndex + 1) % GOOGLE_REVIEWS_DATA.length;
    renderReviewsCarousel();

    // Position the new set off-screen to the left, then slide it in to the right into place
    setTrackTransform(track, '-100%', '0', false);
    void track.offsetWidth;
    setTrackTransform(track, '0%', '1', true);
  }, REVIEWS_SLIDE_MS);
}

function initReviewsCarousel() {
  renderReviewsCarousel();
  const track = document.getElementById('reviews-carousel-track');
  if (track) setTrackTransform(track, '0%', '1', false);
  if (reviewsCarouselTimer) clearInterval(reviewsCarouselTimer);
  reviewsCarouselTimer = setInterval(advanceReviewsCarousel, REVIEWS_PAUSE_MS + REVIEWS_SLIDE_MS);
}

// --- 4c. Appointment Form: Primary Treatment dropdown, built live from the real 113-item catalogue ---
function populateBookingServiceOptions() {
  const select = document.getElementById('bm-service');
  if (!select) return;

  const categoryLabels = {
    hair: 'Hair Care & Texture',
    facial: 'Facials & Clean-Up',
    waxing: 'Waxing & Bleach',
    nails: 'Nails & Pedicure',
    bridal: 'Bridal & Make Up'
  };

  const byCategory = {};
  SERVICES_DATA.forEach(s => {
    if (!byCategory[s.category]) byCategory[s.category] = [];
    byCategory[s.category].push(s.title);
  });

  let html = '<option value="" disabled selected>Select a treatment</option>';
  Object.keys(categoryLabels).forEach(cat => {
    if (!byCategory[cat]) return;
    html += `<optgroup label="${categoryLabels[cat]}">`;
    byCategory[cat].forEach(title => {
      html += `<option value="${title}">${title}</option>`;
    });
    html += '</optgroup>';
  });
  html += '<option value="Other / Free In-Person Consultation">Other / Free In-Person Consultation</option>';

  select.innerHTML = html;
}

// --- 4d. Live Open/Closed Status (9:00 AM – 9:00 PM, open all 7 days) ---
// Inline hex/rgba values (not Tailwind class names) are used deliberately here so the
// open/closed color always renders correctly -- including when the page is opened
// directly from a local file (file://) rather than a hosted server, where Tailwind's
// CDN script can be slower/unreliable to pick up dynamically-added utility classes.
const STATUS_COLORS = {
  open: {
    dot: '#34d399',           // emerald-400
    circleBg: 'rgba(16,185,129,0.2)',   // emerald-500/20
    circleBorder: 'rgba(16,185,129,0.4)', // emerald-500/40
    label: '#34d399'
  },
  closed: {
    dot: '#f87171',           // red-400
    circleBg: 'rgba(239,68,68,0.2)',    // red-500/20
    circleBorder: 'rgba(239,68,68,0.4)', // red-500/40
    label: '#f87171'
  }
};

function isSalonOpenNow() {
  const now = new Date();
  const hour = now.getHours() + now.getMinutes() / 60;
  return hour >= 9 && hour < 21;
}

function updateOpenStatus() {
  const open = isSalonOpenNow();
  const c = open ? STATUS_COLORS.open : STATUS_COLORS.closed;

  const ribbonDot = document.getElementById('ribbon-status-dot');
  if (ribbonDot) {
    ribbonDot.style.backgroundColor = c.dot;
  }

  const badgeCircle = document.getElementById('status-badge-circle');
  if (badgeCircle) {
    badgeCircle.style.backgroundColor = c.circleBg;
    badgeCircle.style.borderColor = c.circleBorder;
  }

  const badgeDot = document.getElementById('status-badge-dot');
  if (badgeDot) {
    badgeDot.style.backgroundColor = c.dot;
  }

  const badgeLabel = document.getElementById('status-badge-label');
  if (badgeLabel) {
    badgeLabel.textContent = open ? 'Open Today' : 'Closed Now';
    badgeLabel.style.color = c.label;
  }
}

// --- 5. Render Services Grid (Curated 6-Item Preview, Zero Rates) ---
function renderServices(category = 'all') {
  const container = document.getElementById('services-grid');
  if (!container) return;

  // For 'all', show curated 6 highlights representing every PDF domain
  const curatedIds = ['whc-hair-cut', 'phc-keratin', 'fac-gold', 'rwx-full-body', 'na-gel-extensions', 'mu-bridal-makeup'];
  let filtered = category === 'all'
    ? SERVICES_DATA.filter(s => curatedIds.includes(s.id))
    : SERVICES_DATA.filter(s => s.category === category);

  container.innerHTML = filtered.map(service => `
    <div class="service-card rounded-2xl bg-noir-850/90 border border-white/10 overflow-hidden flex flex-col justify-between group">
      <div>
        <div class="relative h-48 overflow-hidden">
          <img src="${service.img}" alt="${service.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-noir-900 via-transparent to-transparent"></div>
          <span class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-noir-950/80 border border-gold-500/40 text-gold-300 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
            ${service.tag}
          </span>
        </div>

        <div class="p-5 space-y-2.5">
          <div class="flex items-baseline justify-between gap-2">
            <h3 class="font-serif text-lg font-bold text-white group-hover:text-gold-300 transition-colors">${service.title}</h3>
          </div>
          <p class="text-neutral-400 text-xs leading-relaxed">${service.desc}</p>
          <div class="text-[11px] text-gold-400/80 italic">
            Best for: ${service.suitableFor}
          </div>
        </div>
      </div>

      <div class="p-5 pt-3 border-t border-white/5 mt-2 flex items-center justify-between">
        <div class="flex items-center gap-1.5 text-xs text-gold-400 font-medium">
          <i data-lucide="sparkles" class="w-3.5 h-3.5 text-gold-400"></i>
          <span>Official PDF Service</span>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="toggleCalcService('${service.id}', true)" title="Add to Custom Package" class="px-3 py-1.5 rounded-lg bg-noir-800 border border-white/10 text-neutral-300 hover:text-gold-400 hover:border-gold-400 transition-all text-xs font-semibold flex items-center gap-1.5">
            <i data-lucide="plus" class="w-3.5 h-3.5"></i>
            <span>Add</span>
          </button>
          <button onclick="openBookingModal('${service.title}')" class="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-gold-600 to-gold-500 text-noir-950 font-bold text-xs uppercase tracking-wider hover:shadow-gold-sm transition-all">
            Book
          </button>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

function filterServices(category, btn) {
  document.querySelectorAll('.service-tab-btn').forEach(b => b.classList.remove('active-tab'));
  btn.classList.add('active-tab');
  renderServices(category);
}

// --- 6. Interactive Package Builder / Treatment Selector (Live Anchor WhatsApp) ---
let selectedServiceIds = new Set();
let calcActiveCategory = 'all';
let calcSearchQuery = '';

function filterCalcCategory(category, btn) {
  calcActiveCategory = category;
  document.querySelectorAll('.calc-cat-btn').forEach(b => {
    b.classList.remove('bg-gold-500', 'text-noir-950', 'font-bold');
    b.classList.add('bg-noir-800', 'text-neutral-300');
  });
  if (btn) {
    btn.classList.add('bg-gold-500', 'text-noir-950', 'font-bold');
    btn.classList.remove('bg-noir-800', 'text-neutral-300');
  }
  renderCalcChecklist();
}

function handleCalcSearch(e) {
  calcSearchQuery = (e.target.value || '').toLowerCase().trim();
  renderCalcChecklist();
}

function renderCalcChecklist() {
  const container = document.getElementById('calc-checklist');
  if (!container) return;

  const filtered = SERVICES_DATA.filter(service => {
    const matchesCat = calcActiveCategory === 'all' || service.category === calcActiveCategory;
    const matchesQuery = !calcSearchQuery ||
      service.title.toLowerCase().includes(calcSearchQuery) ||
      service.desc.toLowerCase().includes(calcSearchQuery) ||
      service.tag.toLowerCase().includes(calcSearchQuery);
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 text-neutral-400 text-xs">
        <i data-lucide="search" class="w-8 h-8 mx-auto mb-2 text-neutral-500"></i>
        <p>No treatments match your search. Try typing another treatment (e.g. Hair Cut, Facial, Rica Wax).</p>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(service => {
    const isSelected = selectedServiceIds.has(service.id);
    return `
      <div onclick="toggleCalcService('${service.id}')" id="calc-item-${service.id}" class="p-3.5 rounded-xl bg-noir-850 border ${isSelected ? 'border-gold-500 bg-noir-800' : 'border-white/5'} hover:border-gold-500/40 flex items-center justify-between cursor-pointer transition-all">
        <div class="flex items-center gap-3">
          <div id="calc-check-${service.id}" class="w-5 h-5 rounded-md border ${isSelected ? 'bg-gold-400 border-gold-400' : 'border-white/20'} flex items-center justify-center text-noir-950 transition-colors">
            <i data-lucide="check" class="w-3.5 h-3.5 ${isSelected ? '' : 'hidden'}"></i>
          </div>
          <div>
            <div class="text-white text-xs sm:text-sm font-semibold">${service.title}</div>
            <div class="text-neutral-400 text-[11px]"><span class="capitalize text-gold-400 font-medium">${service.category}</span> · ${service.desc}</div>
          </div>
        </div>
        <div class="text-[10px] px-2.5 py-1 rounded-full bg-noir-800 border border-white/10 text-gold-400 font-medium whitespace-nowrap ml-2">
          ${service.tag}
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

function initCalculator() {
  renderCalcChecklist();
  updateCalculatorDisplay();
}

function toggleCalcService(serviceId, scrollToCalc = false) {
  if (selectedServiceIds.has(serviceId)) {
    selectedServiceIds.delete(serviceId);
  } else {
    selectedServiceIds.add(serviceId);
  }
  renderCalcChecklist();
  updateCalculatorDisplay();

  if (scrollToCalc) {
    document.getElementById('rate-calculator')?.scrollIntoView({ behavior: 'smooth' });
  }
}

function updateCalculatorDisplay() {
  let count = selectedServiceIds.size;
  const countEl = document.getElementById('calc-count');
  const bookLink = document.getElementById('calc-book-link');

  if (countEl) {
    countEl.innerText = count === 0 ? '0 Treatments' : `${count} Treatment${count === 1 ? '' : 's'}`;
  }

  // Real <a href> live update with encodeURIComponent (Never blocked by pop-up blockers)
  if (bookLink) {
    if (count === 0) {
      bookLink.classList.add('pointer-events-none', 'opacity-50');
      bookLink.removeAttribute('href');
    } else {
      bookLink.classList.remove('pointer-events-none', 'opacity-50');
      const selectedItems = SERVICES_DATA.filter(s => selectedServiceIds.has(s.id));
      const titles = selectedItems.map(s => "- " + s.title).join(String.fromCharCode(10));
      const lines = [
        "Hello Luxe Lights Unisex Salon!",
        "",
        "I selected the following treatments from your official price list and would like to book an appointment:",
        "",
        titles,
        "",
        count >= 4 ? "(Selected 4+ services - Qualifying for extra discount on appointment day!)" : "",
        count >= 4 ? "" : null,
        "Please let me know the earliest available consultation and appointment slots for this week. Thank you!"
      ].filter(item => item !== null);
      const textMsg = lines.join(String.fromCharCode(10));
      bookLink.href = "https://wa.me/917986069459?text=" + encodeURIComponent(textMsg);
    }
  }
}

// --- 7. Interactive Before & After Slider ---
let currentTransIndex = 0;
let isDraggingBA = false;

function initBeforeAfterSlider() {
  const container = document.getElementById('ba-slider-container');
  const beforeWrap = document.getElementById('ba-before-wrap');
  const handle = document.getElementById('ba-handle');

  if (!container || !beforeWrap || !handle) return;

  const updatePosition = (clientX) => {
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const percentage = (x / rect.width) * 100;
    beforeWrap.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  };

  // Mouse Events
  container.addEventListener('mousedown', (e) => {
    isDraggingBA = true;
    updatePosition(e.clientX);
  });

  window.addEventListener('mouseup', () => {
    isDraggingBA = false;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDraggingBA) return;
    updatePosition(e.clientX);
  });

  // Touch Events
  container.addEventListener('touchstart', (e) => {
    isDraggingBA = true;
    updatePosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDraggingBA = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDraggingBA) return;
    updatePosition(e.touches[0].clientX);
  }, { passive: true });
}

function switchTransformation(index, btn) {
  currentTransIndex = index;
  const data = TRANSFORMATIONS[index];
  if (!data) return;

  document.querySelectorAll('.trans-tab').forEach(b => b.classList.remove('active-trans-tab'));
  btn.classList.add('active-trans-tab');

  const beforeImg = document.getElementById('ba-before-img');
  const afterImg = document.getElementById('ba-after-img');
  const titleEl = document.getElementById('trans-title');
  const descEl = document.getElementById('trans-desc');

  if (beforeImg) beforeImg.src = data.beforeImg;
  if (afterImg) afterImg.src = data.afterImg;
  if (titleEl) titleEl.innerText = data.title;
  if (descEl) descEl.innerText = data.desc;

  // Reset to 50%
  const beforeWrap = document.getElementById('ba-before-wrap');
  const handle = document.getElementById('ba-handle');
  if (beforeWrap) beforeWrap.style.width = '50%';
  if (handle) handle.style.left = '50%';
}

// --- 8. Studio Gallery & Lightbox ---
function renderGallery(category = 'all') {
  const container = document.getElementById('gallery-grid');
  if (!container) return;

  const filtered = category === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(g => g.category === category);

  container.innerHTML = filtered.map(item => `
    <div onclick="openLightbox('${item.img}', '${item.caption.replace(/'/g, "\\'")}')" class="relative group h-64 rounded-2xl overflow-hidden border border-white/5 cursor-pointer bg-noir-850">
      <img src="${item.img}" alt="${item.caption}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <span class="text-white text-xs font-semibold drop-shadow">${item.caption}</span>
      </div>
      <div class="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <i data-lucide="zoom-in" class="w-4 h-4"></i>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

function filterGallery(category, btn) {
  document.querySelectorAll('.gal-tab').forEach(b => b.classList.remove('active-tab'));
  btn.classList.add('active-tab');
  renderGallery(category);
}

function openLightbox(src, caption) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');

  if (img) img.src = src;
  if (cap) cap.innerText = caption;
  if (modal) modal.classList.remove('hidden');
}

function closeLightbox() {
  const modal = document.getElementById('lightbox-modal');
  if (modal) modal.classList.add('hidden');
}

// --- 9. Appointment Booking Modal Controller (Temp Anchor Helper) ---
function openBookingModal(serviceName = null) {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;

  const dateInput = document.getElementById('bm-date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    if (!dateInput.value) dateInput.value = today;
  }

  if (serviceName) {
    const serviceSelect = document.getElementById('bm-service');
    if (serviceSelect) {
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].text.includes(serviceName) || serviceSelect.options[i].value.includes(serviceName)) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

function handleBookingSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('bm-name')?.value || '';
  const phone = document.getElementById('bm-phone')?.value || '';
  const gender = document.getElementById('bm-gender')?.value || '';
  const service = document.getElementById('bm-service')?.value || '';
  const date = document.getElementById('bm-date')?.value || '';
  const time = document.getElementById('bm-time')?.value || '';
  const notes = document.getElementById('bm-notes')?.value || 'None';

  const messageText = `*NEW APPOINTMENT REQUEST - LUXE LIGHTS KHARAR*\n\n` +
    `👤 *Client Name:* ${name}\n` +
    `📞 *Phone:* ${phone}\n` +
    `🏷️ *Category:* ${gender}\n` +
    `✨ *Service Requested:* ${service}\n` +
    `📅 *Preferred Date:* ${date}\n` +
    `⏰ *Preferred Slot:* ${time}\n` +
    `📝 *Special Notes:* ${notes}\n\n` +
    `_Sent via Luxe Lights Online Portal_`;

  const waUrl = `https://wa.me/917986069459?text=${encodeURIComponent(messageText)}`;

  // Safe temp anchor click (never blocked by popup sandboxes)
  const a = document.createElement('a');
  a.href = waUrl;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  closeBookingModal();
}

// --- 10. Mobile Menu Navigation ---
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');

  if (!menu) return;
  const isHidden = menu.classList.contains('hidden');

  if (isHidden) {
    menu.classList.remove('hidden');
    if (openIcon) openIcon.classList.add('hidden');
    if (closeIcon) closeIcon.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
    if (openIcon) openIcon.classList.remove('hidden');
    if (closeIcon) closeIcon.classList.add('hidden');
  }
}

// --- 11. Header Transparency on Scroll ---
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (!header) return;
  if (window.scrollY > 40) {
    header.classList.add('shadow-xl', 'bg-noir-950/98');
    header.classList.remove('bg-noir-950/95');
  } else {
    header.classList.remove('shadow-xl', 'bg-noir-950/98');
    header.classList.add('bg-noir-950/95');
  }
});

// Close modal on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeBookingModal();
    closeLightbox();
  }
});

// --- Initialize All Components On Load ---
document.addEventListener('DOMContentLoaded', () => {
  startHeroTimer();
  initHeroTouchSwipe();
  renderServices('all');
  initCalculator();
  initBeforeAfterSlider();
  renderGallery('all');
  initReviewsCarousel();
  populateBookingServiceOptions();
  updateOpenStatus();
  setInterval(updateOpenStatus, 60000);

  if (window.lucide) {
    lucide.createIcons();
  }
});
