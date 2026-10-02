/**
 * AURELLE — The Essential Guide to Fine Jewelry & Watches
 * Central Data Repository
 */

const AURELLE_DATA = {
  // --------------------------------------------------------------------------
  // 1. WATCHES CATALOG
  // --------------------------------------------------------------------------
  watches: [
    {
      id: 'watch-chronograph-rose',
      title: 'Aethelbert Heritage Monopusher Chronograph',
      category: 'Watches',
      subcategory: 'Chronographs',
      type: 'Watch',
      tagline: 'Precision column-wheel timing with hand-finished chamfered bridges',
      image: 'assets/images/hero-chronograph.jpg',
      priceGuide: 'Editorial Reference Class',
      badge: 'Collector Icon',
      rating: 4.9,
      overview: 'A masterpiece of mid-century horological restraint, the Heritage Monopusher integrates a bespoke hand-wound column-wheel chronograph calibre with dual registers on an anthracite sunburst dial.',
      specs: {
        movement: 'Calibre A-88 Manual-Wind Column Wheel',
        powerReserve: '65 Hours',
        caseMaterial: '18K Rose Gold & Brushed 316L Steel',
        caseDiameter: '39.5 mm',
        caseThickness: '11.8 mm',
        waterResistance: '50 Meters (5 ATM)',
        crystal: 'Box-domed Sapphire with Anti-Reflective Coating',
        frequency: '28,800 vph (4 Hz)',
        complications: 'Monopusher Chronograph, 30-Min Counter, Tachymeter',
        strap: 'Hand-stitched Louisiana Alligator with Rose Gold Pin Buckle'
      },
      materials: [
        { name: '18K Rose Gold (750)', desc: '75% pure gold alloyed with copper and silver for warm longevity.' },
        { name: 'Double-Domed Sapphire', desc: 'Mohs hardness 9 synthetic corundum crystal.' }
      ],
      care: [
        'Wind manually at the same time each morning until gentle resistance is felt.',
        'Avoid engaging the chronograph pushers underwater.',
        'Full mechanical overhaul recommended every 4–5 years.'
      ],
      thingsToKnow: [
        'Monopusher mechanisms execute Start, Stop, and Reset via a single crown button.',
        'Anthracite dials are susceptible to UV fading if stored in direct sunlight.'
      ]
    },
    {
      id: 'watch-skeleton-tourbillon',
      title: 'Vanguard Calibre GG-1 Skeleton Tourbillon',
      category: 'Watches',
      subcategory: 'Mechanical',
      type: 'Watch',
      tagline: 'One-minute flying tourbillon in ultra-light titanium cage',
      image: 'assets/images/hero-watch-movement.jpg',
      priceGuide: 'Haute Horlogerie',
      badge: 'Masterpiece',
      rating: 5.0,
      overview: 'Stripping away excess mass to reveal pure mechanical architecture, the GG-1 Tourbillon defies gravitational positional errors through a hand-beveled titanium cage revolving every 60 seconds.',
      specs: {
        movement: 'Calibre GG-12 In-House Skeleton Tourbillon',
        powerReserve: '72 Hours (Twin Barrels)',
        caseMaterial: 'Grade 5 Titanium & Obsidian Ceramic',
        caseDiameter: '41.0 mm',
        caseThickness: '10.2 mm',
        waterResistance: '30 Meters (3 ATM)',
        crystal: 'Flat Sapphire with Multi-layer Internal AR',
        frequency: '21,600 vph (3 Hz)',
        complications: 'Flying 60-Second Tourbillon, Power Reserve Indicator',
        strap: 'Integrated Vulcanized Rubber with Titanium Deployant'
      },
      materials: [
        { name: 'Grade 5 Titanium', desc: 'Ti-6Al-4V alloy offering superior tensile strength and corrosion immunity.' },
        { name: 'Synthetic Rubies', desc: '21 low-friction pivot jewels.' }
      ],
      care: [
        'Keep away from strong magnetic fields (speakers, magnetic clasps > 4,800 A/m).',
        'Use only microfiber cloths; avoid abrasive polishers on brushed titanium.'
      ],
      thingsToKnow: [
        'Originally patented by Abraham-Louis Breguet in 1801 to negate gravity in pocket watches.',
        'Skeletal bridges require up to 40 hours of hand anglage per movement.'
      ]
    },
    {
      id: 'watch-sub-mariner-diver',
      title: 'Nautilus Deep-Sea 300M Automatic Diver',
      category: 'Watches',
      subcategory: 'Dive Watches',
      type: 'Watch',
      tagline: 'ISO 6425 certified saturation diving instrument with helium escape valve',
      image: 'assets/images/hero-craftsman-tools.jpg',
      priceGuide: 'Professional Tool',
      badge: 'Tool Classic',
      rating: 4.8,
      overview: 'Engineered for oceanic exploration, featuring an ultra-legible matte dial with Super-LumiNova Grade X1 markers, a unidirectional ceramic bezel, and a robust automatic movement.',
      specs: {
        movement: 'Calibre N-31 Automatic Bi-directional Winding',
        powerReserve: '50 Hours',
        caseMaterial: '904L Oystersteel & High-Tech Ceramic Bezel',
        caseDiameter: '42.0 mm',
        caseThickness: '13.4 mm',
        waterResistance: '300 Meters (30 ATM)',
        crystal: '4.0 mm Flat Sapphire Crystal with Date Cyclops',
        frequency: '28,800 vph',
        complications: 'Date aperture, 60-Minute Elapsed Diving Scale',
        strap: 'Solid 904L Steel Bracelet with GlideLock Micro-Adjustment'
      },
      materials: [
        { name: '904L Stainless Steel', desc: 'High nickel-chromium superalloy resistant to harsh saltwater corrosion.' },
        { name: 'Cerachrom Bezel', desc: 'Diamond-hard ceramic resistant to scratches and UV degradation.' }
      ],
      care: [
        'Rinse thoroughly under fresh lukewarm water after saltwater exposure.',
        'Ensure the crown is screwed down tight before any immersion.',
        'Pressure test water seals annually.'
      ],
      thingsToKnow: [
        'Unidirectional bezels prevent accidental extensions of remaining dive time if bumped.',
        'ISO 6425 requires testing at 125% of rated depth (375 meters for a 300m watch).'
      ]
    },
    {
      id: 'watch-calatrava-dress',
      title: 'Elegance Ultra-Thin 18K Yellow Gold Dress Watch',
      category: 'Watches',
      subcategory: 'Dress Watches',
      type: 'Watch',
      tagline: 'Pure minimalism with Grand Feu enamel dial and Breguet numerals',
      image: 'assets/images/hero-chronograph.jpg',
      priceGuide: 'Traditional Heritage',
      badge: 'Timeless',
      rating: 4.9,
      overview: 'The epitome of formal watchmaking elegance. Measuring merely 6.8 mm in thickness, the Grand Feu enamel dial retains permanent pristine luster that will never fade over centuries.',
      specs: {
        movement: 'Ultra-Thin Calibre 210 Manual-Wind',
        powerReserve: '45 Hours',
        caseMaterial: '18K Yellow Gold (3N)',
        caseDiameter: '37.0 mm',
        caseThickness: '6.8 mm',
        waterResistance: '30 Meters (Splash Resistant)',
        crystal: 'Low-Profile Scratchproof Sapphire',
        frequency: '21,600 vph',
        complications: 'Small Seconds Subdial at 6 o’clock',
        strap: 'Gloss Black French Calfskin with 18K Gold Tang Buckle'
      },
      materials: [
        { name: 'Grand Feu Enamel', desc: 'Silica powders fired at 800°C over solid gold dial plate.' },
        { name: '18K Yellow Gold', desc: 'Classic 750 gold with high luster polish.' }
      ],
      care: [
        'Never submerge in water; keep dry and away from humidity.',
        'Store in a temperature-controlled cedar or suede watch box.'
      ],
      thingsToKnow: [
        'Grand Feu enamel dials have an extremely high rejection rate during artisan kiln firing.',
        'The ideal dress watch diameter historically rests between 36 mm and 38 mm.'
      ]
    },
    {
      id: 'watch-perpetual-calendar-platinum',
      title: 'Celeste Astronomic Perpetual Calendar & Moonphase',
      category: 'Watches',
      subcategory: 'Complications',
      type: 'Watch',
      tagline: 'Mechanically programmed through the year 2100 with aventurine star dial',
      image: 'assets/images/hero-watch-movement.jpg',
      priceGuide: 'Grand Complication',
      badge: 'Grand Complication',
      rating: 5.0,
      overview: 'A breathtaking mechanical calendar that automatically accounts for months of 28, 30, and 31 days as well as leap years, accompanied by an astronomically accurate moonphase with a deviation of only 1 day in 122 years.',
      specs: {
        movement: 'Calibre CP-99 Automatic Perpetual Calendar',
        powerReserve: '68 Hours',
        caseMaterial: 'Platinum 950 with Hand-Finished Anglage',
        caseDiameter: '40.0 mm',
        caseThickness: '11.2 mm',
        waterResistance: '30 Meters (3 ATM)',
        crystal: 'Anti-Reflective Domed Sapphire',
        frequency: '28,800 vph (4 Hz)',
        complications: 'Perpetual Calendar, Leap Year, 122-Year Moonphase, Day/Date/Month',
        strap: 'Midnight Blue Hand-Rolled Alligator with Platinum Deployant'
      },
      materials: [
        { name: 'Platinum 950', desc: 'Hypoallergenic, dense 95% pure noble metal with eternal patina.' },
        { name: 'Aventurine Glass Dial', desc: 'Copper crystal inclusions evoking a starlit night sky.' }
      ],
      care: [
        'Keep continuous on an automatic winder to prevent manual resetting of calendar disks.',
        'Never adjust calendar correctors between 8 PM and 3 AM when gears are engaged.'
      ],
      thingsToKnow: [
        'The perpetual calendar mechanism was first miniaturized for wristwatches by Patek Philippe in 1925.',
        'Leap year cam completes one full revolution every 48 months.'
      ]
    },
    {
      id: 'watch-aero-gmt-titanium',
      title: 'Aero-Navigator Dual-Time GMT Chronometer',
      category: 'Watches',
      subcategory: 'Automatic',
      type: 'Watch',
      tagline: 'Independent 24-hour jumping local hour hand with bi-color ceramic 24h bezel',
      image: 'assets/images/hero-chronograph.jpg',
      priceGuide: 'Aviation Instrument',
      badge: 'Traveler Icon',
      rating: 4.9,
      overview: 'Designed for transcontinental globetrotters and aviators, allowing simultaneous tracking of home reference time and local destination time with an instantaneous jumping hour mechanism.',
      specs: {
        movement: 'Calibre AN-24 Certified COSC Chronometer',
        powerReserve: '70 Hours',
        caseMaterial: 'Grade 5 Titanium & Dual-Tone Ceramic',
        caseDiameter: '40.5 mm',
        caseThickness: '12.4 mm',
        waterResistance: '100 Meters (10 ATM)',
        crystal: 'Sapphire Crystal with Cyclops Magnifier',
        frequency: '28,800 vph',
        complications: 'Independent 24h GMT Hand, Date, 24-Hour Rotating Bezel',
        strap: 'Titanium Grade 5 3-Link Bracelet with Extension Link'
      },
      materials: [
        { name: 'Grade 5 Titanium', desc: 'Lightweight aerospace alloy resisting sweat and ocean corrosion.' },
        { name: 'Bi-Color Zirconia Ceramic', desc: 'Split daytime/nighttime tone sintered at 1500°C.' }
      ],
      care: [
        'Rinse in freshwater after swimming; dry with a soft cloth.',
        'Operate winding crown only when screw-lock is completely unthreaded.'
      ],
      thingsToKnow: [
        'True "Flyer GMT" movements permit jumping the 12-hour hand backwards and forwards without hacking the seconds hand.'
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // 2. FINE JEWELRY CATALOG
  // --------------------------------------------------------------------------
  jewelry: [
    {
      id: 'jewelry-colombian-emerald-ring',
      title: 'Royal Muzo Colombian Emerald & Diamond Halo Ring',
      category: 'Jewelry',
      subcategory: 'Rings',
      type: 'Jewelry',
      tagline: '3.45 ct unheated emerald with double micro-pavé diamond halo',
      image: 'assets/images/hero-jewelry-ring.jpg',
      priceGuide: 'High Jewelry Exclusive',
      badge: 'Rare Gem',
      rating: 5.0,
      overview: 'Featuring a vivid green Muzo Colombian emerald celebrated for its lush jardin inclusions and velvety glow, set in custom handcrafted 18k yellow and platinum milgrain filigree.',
      specs: {
        metal: '18K Yellow Gold Shank & Platinum 950 Prongs',
        gemstone: 'Natural Colombian Emerald (Muzo Origin)',
        caratWeight: '3.45 ct (Center) + 0.85 ct (Accent Diamonds)',
        cut: 'Octagonal Step Emerald Cut',
        colorGrade: 'Vivid Bluish-Green (Muzo Green)',
        clarity: 'Minor Clarity Enhancement (Traditional Cedarwood Oil)',
        dimensions: '10.2 x 8.4 x 6.1 mm',
        ringSize: 'US 6.5 (Resizable 5 - 8)'
      },
      materials: [
        { name: 'Natural Colombian Emerald', desc: 'Chromium-colored beryl with unique crystalline jardin fingerprint.' },
        { name: 'Platinum 950', desc: 'Dense white precious metal providing unyielding prong security.' }
      ],
      care: [
        'NEVER place emeralds in ultrasonic or steam cleaners.',
        'Clean gently using warm distilled water, mild Castile soap, and a camel-hair brush.',
        'Avoid sharp impacts as beryl has natural internal fissures.'
      ],
      thingsToKnow: [
        'Over 99% of fine emeralds feature natural internal inclusions known as "jardin" (garden).',
        'Cedarwood oil is the accepted historical standard for optimizing emerald optical clarity.'
      ]
    },
    {
      id: 'jewelry-sapphire-diamond-necklace',
      title: 'Sovereign Royal Blue Sapphire & Diamond Rivière Collar',
      category: 'Jewelry',
      subcategory: 'Necklaces',
      type: 'Jewelry',
      tagline: 'Graduated unheated Ceylon sapphires totaling 42 carats',
      image: 'assets/images/hero-fine-necklace.jpg',
      priceGuide: 'Museum Collection',
      badge: 'Signature',
      rating: 5.0,
      overview: 'An extraordinary articulated collar showcasing 38 pear and oval-cut Ceylon sapphires of royal blue saturation, surrounded by 18.5 carats of DEF VVS brilliant diamonds in Platinum 950.',
      specs: {
        metal: 'Platinum 950 Articulated Links',
        gemstone: 'Royal Blue Ceylon Sapphires & Brilliant Diamonds',
        caratWeight: '42.0 ct (Sapphires) + 18.5 ct (Diamonds)',
        cut: 'Pear, Oval & Baguette Mixed Brilliant',
        colorGrade: 'Royal Blue / D-F Colorless Diamonds',
        clarity: 'VVS1–VVS2 Diamonds / Eye Clean Sapphires',
        dimensions: '16.5 inches (42 cm) length',
        clasp: 'Concealed Double-Safety Platinum Tongue Clasp'
      },
      materials: [
        { name: 'Ceylon Royal Blue Sapphire', desc: 'Corundum of remarkable clarity and velvety electric blue hue.' },
        { name: 'DEF Colorless Diamonds', desc: 'Top tier color grade reflecting pure white dispersion.' }
      ],
      care: [
        'Store laid flat in the supplied velvet-lined fitted casket.',
        'Professional inspection of link articulators recommended annually.',
        'Safe for ultrasonic cleaning when conducted by certified jewelers.'
      ],
      thingsToKnow: [
        'Matching 38 unheated sapphires of identical color saturation can take over 5 years of gemological sourcing.',
        'Corundum possesses a Mohs hardness of 9, second only to diamond.'
      ]
    },
    {
      id: 'jewelry-diamond-tennis-bracelet',
      title: 'Lumière Seamless 10.0 ct Diamond Tennis Bracelet',
      category: 'Jewelry',
      subcategory: 'Bracelets',
      type: 'Jewelry',
      tagline: 'Individually matched round brilliant diamonds in 4-prong 18K white gold',
      image: 'assets/images/hero-fine-necklace.jpg',
      priceGuide: 'Essential Fine Jewelry',
      badge: 'Essential',
      rating: 4.9,
      overview: 'The quintessential luxury jewelry essential. 52 precision-cut Ideal diamonds linked with zero-tolerance flexibility and a dual-safety internal plunger clasp.',
      specs: {
        metal: '18K White Gold with Rhodium Finish',
        gemstone: 'Natural Earth-Mined Diamonds',
        caratWeight: '10.20 ct Total Weight (0.20 ct per stone)',
        cut: 'Round Brilliant Ideal Cut (Triple Excellent)',
        colorGrade: 'F - G Color',
        clarity: 'VS1 - VS2',
        dimensions: '7.0 inches (17.8 cm)',
        clasp: 'Hidden Box Lock with Dual Figure-8 Safety Catches'
      },
      materials: [
        { name: '18K White Gold', desc: '75% gold alloyed with palladium and nickel, rhodium plated.' },
        { name: 'Triple Excellent Diamonds', desc: 'GIA certified Excellent Cut, Polish, and Symmetry.' }
      ],
      care: [
        'Soak in warm sudsy water for 15 minutes, gently brush back of settings to remove lotions.',
        'Wipe dry with a lint-free microfiber cloth.'
      ],
      thingsToKnow: [
        'The term "tennis bracelet" originated in 1987 when Chris Evert paused her US Open match to retrieve her diamond bracelet.'
      ]
    },
    {
      id: 'jewelry-south-sea-pearl-earrings',
      title: 'Aura Golden South Sea Pearl & Diamond Drop Earrings',
      category: 'Jewelry',
      subcategory: 'Earrings',
      type: 'Jewelry',
      tagline: '13-14mm natural champagne golden pearls from Palawan',
      image: 'assets/images/hero-jewelry-ring.jpg',
      priceGuide: 'Organic Gem Heritage',
      badge: 'Organic Luxury',
      rating: 4.8,
      overview: 'Lustrous, rare golden South Sea pearls harvested from the Pinctada maxima oyster, suspended beneath delicate diamond marquise leaves in solid 18k yellow gold.',
      specs: {
        metal: '18K Yellow Gold (750)',
        gemstone: 'Natural Golden South Sea Pearls & Marquise Diamonds',
        caratWeight: '1.20 ct Accent Diamonds',
        pearlSize: '13.5 mm Diameter matched pair',
        pearlLuster: 'AAA High Mirror Luster (Thick Nacre)',
        colorGrade: 'Natural Deep Champagne Gold (No Dye)',
        backing: 'Heavy-duty La Pousette Alpha Locking Backs'
      },
      materials: [
        { name: 'South Sea Pearl', desc: 'Organic gem created over 24–48 months inside saltwater oysters.' }
      ],
      care: [
        'Remember the rule: "Last on, first off." Apply perfumes and hairsprays before putting on pearls.',
        'Never clean in acids, vinegar, or ultrasonic baths. Wipe with a damp soft chamois.'
      ],
      thingsToKnow: [
        'Pearls are organic gems with a Mohs hardness of 2.5–4.5, requiring gentle, separate storage.'
      ]
    },
    {
      id: 'jewelry-art-deco-sapphire-brooch',
      title: 'Belle Époque Platinum & Kashmir Sapphire Brooch',
      category: 'Jewelry',
      subcategory: 'Brooches',
      type: 'Jewelry',
      tagline: 'Geometric openwork filigree set with unheated Kashmir sapphire and baguette diamonds',
      image: 'assets/images/hero-craftsman-tools.jpg',
      priceGuide: 'Heirloom Masterwork',
      badge: 'Historic Provenance',
      rating: 5.0,
      overview: 'An exquisite museum-grade Art Deco brooch showcasing an intensely saturated cornflower blue unheated Kashmir sapphire, surrounded by hand-pierced platinum openwork with calibre-cut calibré accents.',
      specs: {
        metal: 'Platinum 950 with Hand-Milgrained Edges',
        gemstone: 'Natural Kashmir Sapphire & Old European Cut Diamonds',
        caratWeight: '5.10 ct (Sapphire) + 3.40 ct (Diamonds)',
        cut: 'Cushion Mixed Cut Sapphire & Baguette Frame',
        colorGrade: 'Royal Cornflower Blue (No Heat)',
        clarity: 'Velvety Silk Optical Character',
        dimensions: '54 mm x 28 mm',
        clasp: 'Double-Pin Safety Catch Mechanism'
      },
      materials: [
        { name: 'Kashmir Sapphire', desc: 'Mined from the legendary high-altitude Zanskar deposits (1881–1887).' },
        { name: 'Platinum 950', desc: 'Superior tensile strength allowing razor-thin filigree wire.' }
      ],
      care: [
        'Handle with cotton gloves to prevent skin sebum transfer onto openwork.',
        'Clean exclusively with specialized soft horsehair brushes and mild distilled water.'
      ],
      thingsToKnow: [
        'Kashmir sapphires obtain their signature velvety glow from microscopic rutile silk needles.',
        'Art Deco jewelers championed platinum because it resisted tarnishing and held diamonds in minimal prongs.'
      ]
    },
    {
      id: 'jewelry-imperial-ruby-pendant',
      title: 'Imperial Burmese Pigeon Blood Ruby & Diamond Drop',
      category: 'Jewelry',
      subcategory: 'Necklaces',
      type: 'Jewelry',
      tagline: '4.20 ct unheated Mogok ruby with strong red UV fluorescence',
      image: 'assets/images/hero-fine-necklace.jpg',
      priceGuide: 'High Jewelry Exclusive',
      badge: 'Rare Gem',
      rating: 5.0,
      overview: 'A legendary gemstone from the historic Mogok stone tract in Myanmar. The unheated pigeon’s blood ruby exhibits powerful natural fluorescence, glowing like red embers under natural daylight.',
      specs: {
        metal: '18K Yellow Gold Setting & Platinum 950 Bail',
        gemstone: 'Natural Unheated Burmese Ruby & Pear Diamonds',
        caratWeight: '4.20 ct (Ruby) + 2.15 ct (Diamond Halo)',
        cut: 'Oval Brilliant / Step Cut',
        colorGrade: 'Pigeon’s Blood Red (SSEF Certified)',
        clarity: 'Eye Clean with Microscopic Rutile Silk',
        dimensions: '18.0 inches (45.7 cm) Platinum Chain',
        clasp: 'Hand-chased Lobster Clasp with Safety Plunger'
      },
      materials: [
        { name: 'Mogok Ruby (Burma)', desc: 'Chromium-rich corundum with minimal iron, generating intense red fluorescence.' },
        { name: '18K Yellow Gold', desc: 'Yellow gold inner bezel enhances warm ruby undertones.' }
      ],
      care: [
        'Safe for warm sudsy water cleaning; avoid harsh chemical household cleaners.',
        'Store in a dedicated silk-lined compartment away from diamond jewelry.'
      ],
      thingsToKnow: [
        'Unheated Burmese rubies over 3 carats of top pigeon’s blood saturation command higher per-carat auction prices than colorless diamonds.'
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // 3. ESSENTIALS & EQUIPMENT CATALOG
  // --------------------------------------------------------------------------
  essentials: [
    {
      id: 'essential-triplet-loupe',
      title: 'Precision 10x Achromatic Gemological Triplet Loupe',
      category: 'Essentials',
      subcategory: 'Jewelry Tools',
      type: 'Equipment',
      tagline: 'Aplanatic optical glass triplet with anti-reflective coating',
      image: 'assets/images/hero-craftsman-tools.jpg',
      priceGuide: 'Essential Connoisseur Tool',
      badge: 'Essential',
      rating: 5.0,
      overview: 'The fundamental instrument for assessing diamond cut, clarity inclusions, hallmarks, and watch movement anglage. Corrected for both chromatic and spherical optical aberrations.',
      specs: {
        magnification: '10x Standard GIA / CIBJO Specification',
        lensDiameter: '21 mm',
        lensStructure: '3 Bonded Optical Grade Glass Lenses (Triplet)',
        bodyMaterial: 'Solid Matte Black Brass (Prevents Internal Glare)',
        fieldOfView: '18 mm Flat Focal Plane',
        focalDistance: '25 mm',
        weight: '48 grams',
        casing: 'Genuine Top-Grain Suede Protective Pouch'
      },
      materials: [
        { name: 'Achromatic Optical Glass', desc: 'Eliminates color fringing around diamond facets.' },
        { name: 'Matte Brass Frame', desc: 'Durable non-reflective metal body.' }
      ],
      care: [
        'Clean lenses solely with optical microfiber cloths and lens blower.',
        'Never use household paper towels or solvents which strip anti-glare coatings.'
      ],
      thingsToKnow: [
        '10x magnification is the legal international standard under which all diamond clarity grading is determined.'
      ]
    },
    {
      id: 'essential-bergeon-springbar-tool',
      title: 'Swiss Precision Spring-Bar & Strap Removal Instrument',
      category: 'Essentials',
      subcategory: 'Watch Tools',
      type: 'Equipment',
      tagline: 'Hardened stainless steel micro-fork and reversible pin',
      image: 'assets/images/hero-craftsman-tools.jpg',
      priceGuide: 'Professional Horology',
      badge: 'Horologist Choice',
      rating: 4.9,
      overview: 'Designed to change watch bracelets and straps without scratching polished lugs. Features a fine 1.0mm micro-fork for tight metal end-links and a 3.0mm standard fork.',
      specs: {
        bodyMaterial: 'Knurled Anodized Aluminum with Grip Rims',
        tipMaterial: 'Tempered Swiss High-Carbon Stainless Steel (60 HRC)',
        tipSizes: '1.0 mm Micro-Fork & 0.8 mm Pointed Pusher Pin',
        length: '145 mm',
        compatibility: 'All standard spring bars, drilled lugs, and micro-adjust clasps',
        origin: 'Le Locle, Switzerland'
      },
      materials: [
        { name: 'Tempered Tool Steel', desc: 'Resists bending and burring when compressing high-tension spring bars.' }
      ],
      care: [
        'Store in a dry sleeve; replace worn tips to prevent lug slippage.'
      ],
      thingsToKnow: [
        'Always apply masking tape to watch lugs before compressing spring bars to protect against accidental tool slips.'
      ]
    },
    {
      id: 'essential-leather-watch-roll',
      title: 'Verona Hand-Stitched 3-Watch Prism Travel Roll',
      category: 'Essentials',
      subcategory: 'Storage',
      type: 'Equipment',
      tagline: 'Crush-proof hexagonal architecture with slide-in cushion rails',
      image: 'assets/images/hero-craftsman-tools.jpg',
      priceGuide: 'Travel Essential',
      badge: 'Travel Companion',
      rating: 4.9,
      overview: 'Safeguards your finest timepieces on journeys. Each watch sits on an independent sliding cushion that secures rigidly into side rails, preventing watches from touching.',
      specs: {
        capacity: '3 Timepieces (up to 46 mm diameter each)',
        exterior: 'Full-Grain Italian Tuscan Vegetable-Tanned Leather',
        interior: 'Ultra-Soft Premium Micro-Suede (Non-Abrasive)',
        closure: 'Four Concealed Swiss Snap Fasteners',
        dimensions: '22.5 x 10.0 x 7.5 cm',
        cushions: 'Compressible Memory Foam suitable for 15–21 cm wrists'
      },
      materials: [
        { name: 'Vegetable-Tanned Tuscan Leather', desc: 'Ages gracefully with rich natural patina.' },
        { name: 'Non-Abrasive Micro-Suede', desc: 'Guarantees zero hairline scratches on polished casebacks.' }
      ],
      care: [
        'Condition leather with beeswax balm once a year; keep out of prolonged direct sun.'
      ],
      thingsToKnow: [
        'Prism / flat-base watch rolls prevent rolling on bedside tables or hotel consoles.'
      ]
    },
    {
      id: 'essential-quad-winder',
      title: 'Geneva Master Quad Automatic Watch Winder',
      category: 'Essentials',
      subcategory: 'Watch Tools',
      type: 'Equipment',
      tagline: 'Ultra-quiet Japanese Mabuchi motors with individual TPD settings',
      image: 'assets/images/hero-watch-movement.jpg',
      priceGuide: 'Collector Equipment',
      badge: 'Collector Gear',
      rating: 4.8,
      overview: 'Keeps perpetual calendars and automatic complications wound to factory specification without over-stressing mainsprings, using intermittent rotation cycles.',
      specs: {
        rotors: '4 Independent Programmable Turntables + 4 Static Storage Slots',
        motorType: 'Whisper-Quiet Japanese Mabuchi Brushless Rotor (< 10dB)',
        tpdSettings: '650, 750, 850, 1000, 1950 Turns Per Day',
        direction: 'Clockwise, Counter-Clockwise, Bi-directional',
        exterior: 'Multi-layer Piano Lacquer over Piano Walnut Veneer',
        power: 'Dual AC Mains Adapter (110–240V) or Battery Backup'
      },
      materials: [
        { name: 'Walnut Veneer & Tempered Glass', desc: 'Shields movements from airborne dust.' }
      ],
      care: [
        'Wipe gloss surface with anti-static cloth.'
      ],
      thingsToKnow: [
        'Automatic movements have a bridle on the mainspring that slips when fully wound, but winders preserve oils evenly.'
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // 4. MATERIALS & GEMSTONES GUIDE DATA
  // --------------------------------------------------------------------------
  materials: [
    {
      id: 'mat-18k-gold',
      name: '18K Gold (750)',
      category: 'Precious Metals',
      composition: '75.0% Pure Gold + 25.0% Alloying Metals (Copper, Silver, Palladium)',
      hardness: '2.5 – 3.0 Mohs (Rockwell B 80–120)',
      durability: 'Exceptional balance of rich golden luster and everyday wearability',
      care: 'Warm mild soapy water, soft brush, soft polishing cloth. Avoid bleach and chlorine.',
      uses: 'High jewelry, luxury watch cases, solitaire rings, fine chains',
      characteristics: 'Rich warm color, substantial density, non-tarnishing, hypoallergenic.'
    },
    {
      id: 'mat-platinum-950',
      name: 'Platinum (Pt 950)',
      category: 'Precious Metals',
      composition: '95.0% Pure Platinum + 5.0% Ruthenium or Iridium',
      hardness: '4.0 – 4.5 Mohs (Vickers 120–160)',
      durability: 'Extreme density; metal displaces into patina rather than wearing away',
      care: 'Ultrasonic safe; polish professionally to restore mirror finish, or celebrate natural satin patina.',
      uses: 'Engagement prongs, heirloom necklaces, grand complication watch cases',
      characteristics: 'Naturally pure white, hypoallergenic, heavy hand feel, unmatched stone security.'
    },
    {
      id: 'mat-14k-gold',
      name: '14K Gold (585)',
      category: 'Precious Metals',
      composition: '58.5% Pure Gold + 41.5% Copper, Silver, Zinc',
      hardness: '3.0 – 3.5 Mohs',
      durability: 'High resistance to scratching and daily abrasion',
      care: 'Standard jewelry cleaning wash; safe for daily active lifestyles.',
      uses: 'Everyday fine jewelry, lifestyle rings, bracelets',
      characteristics: 'Slightly lighter gold hue, rigid structural strength, budget-friendly resilience.'
    },
    {
      id: 'mat-925-silver',
      name: 'Sterling Silver (925)',
      category: 'Precious Metals',
      composition: '92.5% Pure Silver + 7.5% Copper',
      hardness: '2.5 – 3.0 Mohs',
      durability: 'Malleable; prone to oxidation/tarnish over time without care',
      care: 'Store in anti-tarnish cloth pouches; use silver polishing dip or cloth.',
      uses: 'Designer jewelry, cufflinks, decorative silverware, brooches',
      characteristics: 'Brightest optical reflectivity of all metals, accessible luxury.'
    },
    {
      id: 'mat-titanium-g5',
      name: 'Grade 5 Titanium (Ti-6Al-4V)',
      category: 'Modern Engineering Metals',
      composition: '90% Titanium, 6% Aluminum, 4% Vanadium',
      hardness: '6.0 Mohs (Vickers ~350)',
      durability: '40% lighter than steel, immune to saltwater and acid corrosion',
      care: 'Mild soap, warm water. Resistant to nearly all chemical degradation.',
      uses: 'Tourbillon bridges, diver cases, avant-garde luxury sports watches',
      characteristics: 'Cool gunmetal hue, ultra-lightweight warmth on skin.'
    }
  ],

  gemstones: [
    {
      id: 'gem-diamond',
      name: 'Diamond',
      mineral: 'Pure Crystallized Carbon',
      hardness: 10,
      refractiveIndex: '2.417',
      dispersion: '0.044 (High Fire)',
      durability: 'Hardest known natural substance; resistant to scratches from all other materials.',
      rarity: 'Type IIa chemical purity represents top 1-2% of all natural gem diamonds.',
      care: 'Repels water but attracts oils. Clean with degreasing ammonia-free jewelry washes.',
      uses: 'Solitaires, Rivière collars, pavé dials, eternity bands.'
    },
    {
      id: 'gem-sapphire',
      name: 'Royal Blue Sapphire',
      mineral: 'Corundum (Al₂O₃ with Fe & Ti)',
      hardness: 9,
      refractiveIndex: '1.762 – 1.770',
      dispersion: '0.018',
      durability: 'Superb toughness with no cleavage planes, perfect for everyday engagement rings.',
      rarity: 'Unheated Kashmir and Ceylon royal blues command premier gemological prestige.',
      care: 'Ultrasonic and steam safe unless heavily fractured.',
      uses: 'Statement rings, high jewelry necklaces, luxury watch dials.'
    },
    {
      id: 'gem-ruby',
      name: 'Pigeon Blood Ruby',
      mineral: 'Corundum (Al₂O₃ with Chromium)',
      hardness: 9,
      refractiveIndex: '1.762 – 1.770',
      dispersion: '0.018',
      durability: 'Extremely durable and tough; UV light excites strong red fluorescence.',
      rarity: 'Top gem quality unheated Burmese rubies exceed diamond price-per-carat.',
      care: 'Warm soapy water; professional inspection of prong integrity.',
      uses: 'Crown jewels, halo rings, anniversary bracelets.'
    },
    {
      id: 'gem-emerald',
      name: 'Colombian Emerald',
      mineral: 'Beryl (Be₃Al₂Si₆O₁₈ with Cr & V)',
      hardness: 7.5,
      refractiveIndex: '1.577 – 1.583',
      dispersion: '0.014',
      durability: 'Brittle due to natural inclusions (jardin); requires mindful wearing.',
      rarity: 'Muzo and Chivor mines produce historic collector specimens.',
      care: 'NEVER steam or ultrasonic clean. Use lukewarm water and gentle cloth only.',
      uses: 'Cocktail rings, pendant drops, museum brooches.'
    },
    {
      id: 'gem-pearl',
      name: 'South Sea Cultured Pearl',
      mineral: 'Organic Aragonite Calcium Carbonate & Conchiolin',
      hardness: 3.5,
      refractiveIndex: '1.53 – 1.69',
      dispersion: 'N/A (Orient & Deep Luster)',
      durability: 'Soft organic gem; susceptible to acids, cosmetics, and dry air.',
      rarity: 'Large 14mm+ flawless pearls require years of ocean oyster cultivation.',
      care: 'Wipe with damp cloth after wearing. Store flat in breathable silk pouch.',
      uses: 'Chokers, drop earrings, classic bridal jewelry.'
    }
  ],

  // --------------------------------------------------------------------------
  // 5. WATCH MOVEMENTS GUIDE DATA
  // --------------------------------------------------------------------------
  movements: [
    {
      id: 'mov-manual',
      name: 'Manual-Wind Mechanical',
      subtext: 'The purist horological connection',
      powerSource: 'Coiled Mainspring inside Barrel, wound via Crown',
      frequency: '18,000 to 28,800 vph',
      accuracy: '-4 to +6 seconds / day (Chronometer spec)',
      maintenance: 'Complete disassembly, cleaning & synthetic re-lubrication every 4–6 years',
      characteristics: 'Slimmest case profiles, unobstructed view of decorated bridges, Geneva stripes, and balance wheel.',
      diagramSvg: `<svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="150" r="120" stroke="var(--border-medium)" stroke-width="2" stroke-dasharray="4 4" />
        <circle cx="200" cy="150" r="90" stroke="var(--accent-gold)" stroke-width="3" />
        <!-- Balance Wheel -->
        <circle cx="150" cy="120" r="45" stroke="var(--accent-gold-light)" stroke-width="2" />
        <line x1="150" y1="75" x2="150" y2="165" stroke="var(--accent-gold)" stroke-width="2" />
        <line x1="105" y1="120" x2="195" y2="120" stroke="var(--accent-gold)" stroke-width="2" />
        <!-- Escapement -->
        <circle cx="240" cy="120" r="28" stroke="var(--text-muted)" stroke-width="1.5" />
        <!-- Mainspring Barrel -->
        <circle cx="200" cy="200" r="40" stroke="var(--accent-gold)" stroke-width="2.5" />
        <circle cx="200" cy="200" r="15" fill="var(--accent-gold-glow)" stroke="var(--accent-gold)" />
        <text x="200" y="275" text-anchor="middle" fill="var(--text-secondary)" font-size="12" letter-spacing="1">MAINSPRING POWER TRAIN</text>
      </svg>`
    },
    {
      id: 'mov-automatic',
      name: 'Automatic (Self-Winding)',
      subtext: 'Kinetic energy captured from daily wrist movement',
      powerSource: 'Weighted Oscillating Rotor driving gear train to barrel',
      frequency: '28,800 vph (4 Hz) standard',
      accuracy: '-4 to +6 seconds / day',
      maintenance: 'Service interval 5–7 years; check rotor ball bearings and winding pawls',
      characteristics: 'Constant power reserve when worn daily, slightly thicker case to accommodate rotor clearance.',
      diagramSvg: `<svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="150" r="120" stroke="var(--border-medium)" stroke-width="2" />
        <!-- Oscillating Rotor Arc -->
        <path d="M 90 150 A 110 110 0 0 1 310 150 L 200 150 Z" fill="var(--accent-gold-glow)" stroke="var(--accent-gold)" stroke-width="2" />
        <circle cx="200" cy="150" r="14" fill="var(--bg-card)" stroke="var(--accent-gold)" stroke-width="2" />
        <circle cx="200" cy="150" r="4" fill="var(--accent-gold)" />
        <text x="200" y="115" text-anchor="middle" fill="var(--accent-gold-light)" font-size="11" letter-spacing="2">HEAVY TUNGSTEN ROTOR</text>
        <circle cx="150" cy="200" r="30" stroke="var(--text-muted)" stroke-width="1.5" />
        <text x="200" y="275" text-anchor="middle" fill="var(--text-secondary)" font-size="12" letter-spacing="1">BI-DIRECTIONAL WINDING GEARS</text>
      </svg>`
    },
    {
      id: 'mov-quartz',
      name: 'High-Precision Quartz',
      subtext: 'Electronic piezoelectric frequency regulation',
      powerSource: 'Silver Oxide Battery / Solar Cell powering IC chip',
      frequency: '32,768 Hz (or 262 kHz for High-Beat Quartz)',
      accuracy: '±10 to ±15 seconds / MONTH (or ±5s/year for Thermo-compensated)',
      maintenance: 'Battery replacement every 2–3 years + gasket seal check',
      characteristics: 'Ultimate grab-and-go reliability, superior shock resistance, crisp one-tick per second stepper motion.',
      diagramSvg: `<svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="80" y="50" width="240" height="200" rx="8" stroke="var(--border-medium)" stroke-width="2" fill="var(--bg-tertiary)" />
        <!-- Quartz Tuning Fork -->
        <path d="M 175 110 V 170 M 225 110 V 170 M 175 170 H 225 M 200 170 V 210" stroke="var(--accent-gold)" stroke-width="4" stroke-linecap="round" />
        <!-- IC Chip -->
        <rect x="120" y="80" width="50" height="40" rx="4" fill="var(--bg-card)" stroke="var(--accent-gold-dark)" stroke-width="1.5" />
        <!-- Battery Cell -->
        <circle cx="280" cy="150" r="28" fill="var(--bg-card)" stroke="var(--accent-gold)" stroke-width="2" />
        <text x="280" y="154" text-anchor="middle" fill="var(--accent-gold)" font-size="11">1.55V</text>
        <text x="200" y="275" text-anchor="middle" fill="var(--text-secondary)" font-size="12" letter-spacing="1">32,768 Hz CRYSTAL RESONATOR</text>
      </svg>`
    },
    {
      id: 'mov-tourbillon',
      name: 'Tourbillon Escapement',
      subtext: 'Anti-gravitational rotating cage complication',
      powerSource: 'High-Torque Mainspring driving revolving carriage',
      frequency: '21,600 to 28,800 vph',
      accuracy: 'Superior positional rate stability across all wrist angles',
      maintenance: 'Specialist master watchmaker overhaul every 3–4 years',
      characteristics: 'Visual spectacle of revolving balance wheel, pallets, and escape wheel inside a sub-gram titanium cage.',
      diagramSvg: `<svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="150" r="95" stroke="var(--accent-gold)" stroke-width="2" stroke-dasharray="6 3" />
        <!-- Revolving 3-Arm Cage -->
        <line x1="200" y1="150" x2="200" y2="60" stroke="var(--accent-gold-light)" stroke-width="3" stroke-linecap="round" />
        <line x1="200" y1="150" x2="120" y2="195" stroke="var(--accent-gold-light)" stroke-width="3" stroke-linecap="round" />
        <line x1="200" y1="150" x2="280" y2="195" stroke="var(--accent-gold-light)" stroke-width="3" stroke-linecap="round" />
        <circle cx="200" cy="150" r="50" stroke="var(--text-muted)" stroke-width="1.5" />
        <circle cx="200" cy="150" r="12" fill="var(--accent-gold)" />
        <text x="200" y="275" text-anchor="middle" fill="var(--text-secondary)" font-size="12" letter-spacing="1">60-SECOND REVOLVING REGLAGE CAGE</text>
      </svg>`
    }
  ],

  // --------------------------------------------------------------------------
  // 6. EDITORIAL GUIDES
  // --------------------------------------------------------------------------
  guides: [
    {
      id: 'guide-water-resistance',
      title: 'The Connoisseur’s Complete Guide to Watch Water Resistance',
      slug: 'guide-water-resistance',
      category: 'Watches',
      readingTime: '7 min read',
      author: 'Horological Research Bureau',
      publishDate: 'Autumn Edition',
      image: 'assets/images/hero-chronograph.jpg',
      lead: 'Why 30 meters doesn’t mean you can dive 30 meters down, and how dynamic pressure, thermal shock, and screw-down crowns actually work in luxury watchmaking.',
      contentHtml: `
        <p>Few specifications in the horological world cause as much misunderstanding as the water-resistance rating engraved on casebacks. When a luxury watch claims <strong>30M (3 ATM)</strong>, intuitive logic suggests one could swim at ten feet with zero danger. In reality, doing so will likely flood your watch movement.</p>
        
        <h3>Static Laboratory Ratings vs. Real-World Dynamic Pressure</h3>
        <p>Water-resistance ratings are calculated under pristine laboratory conditions using <em>static pressure</em> with the watch completely motionless in still water. When a swimmer strokes their arm through the water, the instantaneous pressure spike (dynamic pressure) easily exceeds 3 to 5 atmospheres at mere inches below the surface.</p>
        
        <blockquote>"Gaskets do not last forever. Synthetic nitrile and fluorocarbon seals naturally degrade over time from exposure to chlorine, body salts, and temperature swings."</blockquote>
        
        <h3>The Decisive Depth Hierarchy</h3>
        <ul>
          <li><strong>30 Meters (3 ATM / 100 ft):</strong> Splash resistant only. Safe for washing hands, raindrops. Never submerge.</li>
          <li><strong>50 Meters (5 ATM / 165 ft):</strong> Shallow immersion, surface swimming without diving or vigorous arm flailing.</li>
          <li><strong>100 Meters (10 ATM / 330 ft):</strong> Snorkeling, swimming, poolside recreation. Screw-down crown highly recommended.</li>
          <li><strong>200–300 Meters (20–30 ATM / 660–1000 ft):</strong> Scuba diving, high-impact water sports. Mandatory screw-down crown and caseback.</li>
        </ul>
        
        <h3>Essential Maintenance Protocols</h3>
        <p>Never operate chronograph pushers or adjust the crown while wet. Have your gaskets pressure-tested once every twelve months prior to summer or ocean travel.</p>
      `,
      relatedItemIds: ['watch-sub-mariner-diver', 'essential-bergeon-springbar-tool']
    },
    {
      id: 'guide-18k-vs-14k-platinum',
      title: 'Precious Metals Deconstructed: 18K vs 14K Gold vs Platinum 950',
      slug: 'guide-18k-vs-14k-platinum',
      category: 'Materials',
      readingTime: '9 min read',
      author: 'Gemological & Metallurgical Guild',
      publishDate: 'Permanent Reference',
      image: 'assets/images/hero-jewelry-ring.jpg',
      lead: 'A comprehensive comparative analysis of alloy chemistry, weight, scratch behavior, patina formation, and long-term heirloom longevity.',
      contentHtml: `
        <p>Choosing between 18K gold, 14K gold, and Platinum 950 is not solely a financial decision—it is a fundamental choice regarding how a precious piece will age with your skin over decades.</p>
        
        <h3>The Chemistry of Gold Alloys</h3>
        <p>Pure 24K gold is too soft for intricate gem settings. To achieve structural integrity, master goldsmiths blend pure gold with copper, silver, zinc, and palladium.</p>
        <ul>
          <li><strong>18K Gold (750):</strong> Composed of 75% pure gold. Possesses a deep, rich buttery hue and heavy, satisfying weight.</li>
          <li><strong>14K Gold (585):</strong> Composed of 58.5% pure gold. Highly durable and resistant to day-to-day deformation.</li>
          <li><strong>Platinum (Pt 950):</strong> Naturally white, 95% pure, dense, and hypoallergenic. It does not lose metal when scratched—it simply shifts into an admired satin patina.</li>
        </ul>
      `,
      relatedItemIds: ['jewelry-colombian-emerald-ring', 'jewelry-diamond-tennis-bracelet']
    },
    {
      id: 'guide-inspecting-with-loupe',
      title: 'How to Inspect Fine Gemstones & Horology with a 10x Loupe',
      slug: 'guide-inspecting-with-loupe',
      category: 'Care & Essentials',
      readingTime: '6 min read',
      author: 'Master Appraiser Series',
      publishDate: 'Essential Skills',
      image: 'assets/images/hero-craftsman-tools.jpg',
      lead: 'Mastering focal plane stabilization, darkfield lighting techniques, and identifying hallmarks, culets, and movement anglage.',
      contentHtml: `
        <p>Holding a 10x loupe properly separates casual observers from educated collectors. The standard 10x triplet is the universally recognized optical benchmark across GIA, CIBJO, and Swiss watch laboratories.</p>
        
        <h3>Step-by-Step Loupe Technique</h3>
        <ol>
          <li>Hold the loupe against your dominant eye socket like a monocle or pair of spectacles.</li>
          <li>Bring the jewelry or watch piece towards your eye until it snaps into sharp focus (~1 inch distance).</li>
          <li>Anchor both of your thumbs together to create a rigid physical tripod that prevents hand tremors.</li>
          <li>Tilt the stone under overhead directional light to observe internal crystal inclusions and girdle laser inscriptions.</li>
        </ol>
      `,
      relatedItemIds: ['essential-triplet-loupe', 'essential-bergeon-springbar-tool']
    },
    {
      id: 'guide-mechanical-vs-automatic',
      title: 'Mechanical vs Automatic: An Engineer’s Breakdown of Horology',
      slug: 'guide-mechanical-vs-automatic',
      category: 'Movements',
      readingTime: '8 min read',
      author: 'Technical Horology Review',
      publishDate: 'Collector Foundation',
      image: 'assets/images/hero-watch-movement.jpg',
      lead: 'Mainspring dynamics, power reserve curves, winding bridles, and the tactile ritual of manual winding.',
      contentHtml: `
        <p>While both manual and automatic watches share an escapement, gear train, and balance wheel, their daily user experience and mechanical topology differ substantially.</p>
        <p>Manual-wind calibres afford collectors a direct, ritualistic tactile relationship with the mechanism. Free from the visual obstruction of an oscillating rotor, manual movements showcase finished bridges, blued screws, and polished click-wheels in their purest glory.</p>
      `,
      relatedItemIds: ['watch-skeleton-tourbillon', 'watch-chronograph-rose', 'essential-quad-winder']
    }
  ],

  // --------------------------------------------------------------------------
  // 7. CURATED COLLECTIONS
  // --------------------------------------------------------------------------
  collections: [
    {
      id: 'col-everyday-watch',
      title: 'The Everyday Watch Collection',
      tagline: 'Versatility, water resistance, and understated elegance for daily wear',
      curator: 'Aurelle Horology Desk',
      itemCount: 4,
      image: 'assets/images/hero-chronograph.jpg',
      itemIds: ['watch-chronograph-rose', 'watch-sub-mariner-diver', 'essential-leather-watch-roll', 'guide-water-resistance']
    },
    {
      id: 'col-jewelry-starter',
      title: 'The Fine Jewelry Starter Collection',
      tagline: 'Timeless foundational heirlooms built to anchor any jewelry wardrobe',
      curator: 'Aurelle Fine Jewelry Editorial',
      itemCount: 4,
      image: 'assets/images/hero-jewelry-ring.jpg',
      itemIds: ['jewelry-colombian-emerald-ring', 'jewelry-diamond-tennis-bracelet', 'essential-triplet-loupe', 'guide-18k-vs-14k-platinum']
    },
    {
      id: 'col-mechanical-essentials',
      title: 'Mechanical Watch Essentials',
      tagline: 'Pure haute horlogerie calibres, skeleton aesthetics, and preservation equipment',
      curator: 'Master Watchmaker Guild',
      itemCount: 4,
      image: 'assets/images/hero-watch-movement.jpg',
      itemIds: ['watch-skeleton-tourbillon', 'watch-chronograph-rose', 'essential-quad-winder', 'guide-mechanical-vs-automatic']
    },
    {
      id: 'col-collector-desk',
      title: 'The Collector’s Workbench',
      tagline: 'Professional grade inspection optics, spring-bar instruments, and travel preservation',
      curator: 'Restoration Bureau',
      itemCount: 4,
      image: 'assets/images/hero-craftsman-tools.jpg',
      itemIds: ['essential-triplet-loupe', 'essential-bergeon-springbar-tool', 'essential-leather-watch-roll', 'guide-inspecting-with-loupe']
    }
  ]
};

// Expose globally
window.AURELLE_DATA = AURELLE_DATA;
