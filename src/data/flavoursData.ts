export interface FlavourItem {
  id: string;
  name: string;
  category: 'artisan' | 'indian_heritage' | 'sugar_free' | 'sundaes_jars';
  tagline: string;
  description: string;
  ingredients: string[];
  portion: string; // e.g. "80g calibrated scoop"
  image: string;
  isBestseller?: boolean;
  dietary: ('gluten_free' | 'sugar_free' | 'vegetarian' | 'nut_free')[];
  pairing?: string;
}

export const FLAVOURS: FlavourItem[] = [
  {
    id: 'belgian-chocolate',
    name: 'Belgian Chocolate',
    category: 'artisan',
    tagline: 'Our undisputed signature bestseller',
    description: 'Crafted with genuine Van Houten Dutch-processed cocoa, blended slowly for a dense, silky, deep chocolate body without cloying sweetness.',
    ingredients: ['Van Houten Cocoa', 'Pure Dairy Cream', 'Cane Sugar', 'Cocoa Butter'],
    portion: '80g calibrated scoop',
    image: '/img/menu/menu-01.jpg',
    isBestseller: true,
    dietary: ['vegetarian', 'gluten_free'],
    pairing: 'Pairs exquisitely with Roasted Almond or Espresso'
  },
  {
    id: 'mango-alphonso',
    name: 'Mango Alphonso',
    category: 'artisan',
    tagline: 'Sun-ripened Ratnagiri Alphonso pulp',
    description: 'Natural seasonal sweetness with zero artificial concentrates or synthetic mango essences. Summer captured in an ultra-smooth churn.',
    ingredients: ['Ratnagiri Alphonso Mango Purée', 'Fresh Milk', 'Cream', 'Organic Sugar'],
    portion: '80g calibrated scoop',
    image: '/img/menu/menu-02.jpg',
    isBestseller: true,
    dietary: ['vegetarian', 'gluten_free', 'nut_free'],
    pairing: 'Best enjoyed with a drizzle of honey or fresh cream'
  },
  {
    id: 'pistachio-royale',
    name: 'Pistachio Royale',
    category: 'artisan',
    tagline: 'Real roasted pistachios, zero artificial green coloring',
    description: 'We roast genuine Iranian pistachios in-house, grinding half into paste and hand-crushing the rest for rich nutty texture.',
    ingredients: ['Roasted Pistachio Nuts', 'Whole Milk', 'Cream', 'Cardamom Essence'],
    portion: '80g calibrated scoop',
    image: '/img/pistachio-scoop.jpg',
    isBestseller: true,
    dietary: ['vegetarian', 'gluten_free'],
    pairing: 'Superb when paired with Belgian Chocolate'
  },
  {
    id: 'kundha',
    name: 'Belagavi Kundha',
    category: 'indian_heritage',
    tagline: 'Karnataka’s iconic caramelized milk heritage',
    description: 'Simmered milk solids and khowa caramelized over slow heat for 6 hours, folded into fresh cream. Deep caramel depth with grainy fudge textures.',
    ingredients: ['Slow-Caramelized Mawa', 'Whole Milk', 'Nutmeg', 'Cardamom'],
    portion: '80g calibrated scoop',
    image: '/img/menu/menu-03.jpg',
    isBestseller: true,
    dietary: ['vegetarian', 'gluten_free'],
    pairing: 'A Bengaluru favourite, rated 5/5 across customer reviews'
  },
  {
    id: 'sitaphal-creme',
    name: 'Sitaphal (Custard Apple)',
    category: 'indian_heritage',
    tagline: 'Hand-deseeded fresh custard apple pulp',
    description: 'Delicate, fragrant fruit flesh suspended in creamy churn. Subtly sweet, floral, and true to the natural autumn harvest.',
    ingredients: ['Fresh Custard Apple Flesh', 'Farm Dairy Cream', 'Cane Sugar'],
    portion: '80g calibrated scoop',
    image: '/img/menu/menu-04.jpg',
    dietary: ['vegetarian', 'gluten_free', 'nut_free'],
    pairing: 'Refreshing after-dinner dessert'
  },
  {
    id: 'rasmalai-saffron',
    name: 'Royal Rasmalai & Saffron',
    category: 'indian_heritage',
    tagline: 'Infused with Kashmiri saffron & soft chenna bites',
    description: 'Crumbled chenna cottage cheese steeped in saffron milk, garnished with pistachio slivers and crushed cardamom pods.',
    ingredients: ['Kashmiri Saffron', 'Chenna Bites', 'Pistachios', 'Whole Milk'],
    portion: '80g calibrated scoop',
    image: '/img/menu/menu-05.jpg',
    dietary: ['vegetarian'],
    pairing: 'Festive classic, popular in our takeaway jars'
  },
  {
    id: 'sugar-free-dark-cocoa',
    name: 'Sugar-Free Dark Cocoa',
    category: 'sugar_free',
    tagline: 'Guilt-free indulgence, 100% diabetic friendly',
    description: 'Sweetened naturally with stevia extract and prebiotic fibres, preserving the full depth of Van Houten dark cocoa without blood sugar spikes.',
    ingredients: ['Van Houten Cocoa', 'Dairy Cream', 'Plant-Derived Stevia Extract', 'Dietary Fibre'],
    portion: '80g calibrated scoop',
    image: '/img/menu/menu-06.jpg',
    dietary: ['sugar_free', 'vegetarian', 'gluten_free'],
    pairing: 'Zero compromises on creaminess or aftertaste'
  },
  {
    id: 'sugar-free-alphonso',
    name: 'Sugar-Free Alphonso',
    category: 'sugar_free',
    tagline: 'Real fruit purée with zero added sucrose',
    description: 'Only the natural sugars of sun-ripened Alphonso mangoes, churned with heavy cream for health-conscious dessert lovers.',
    ingredients: ['Alphonso Mango Purée', 'Fresh Milk', 'Erythritol & Stevia Blend'],
    portion: '80g calibrated scoop',
    image: '/img/menu/menu-07.jpg',
    dietary: ['sugar_free', 'vegetarian', 'gluten_free', 'nut_free'],
    pairing: 'The #1 requested dietary flavour in Bengaluru'
  },
  {
    id: 'cookies-n-cream-jar',
    name: 'Cookies N Cream Takeaway Jar',
    category: 'sundaes_jars',
    tagline: 'Individual glass jar with double Oreo crumble',
    description: 'Creamy sweet cream churn layered with hand-crumbled dark chocolate cookies. Sealed freshness for home freezer storage.',
    ingredients: ['Dark Cocoa Cookie Crumble', 'Sweet Milk Base', 'Vanilla Bean Purée'],
    portion: '200ml sealed glass jar',
    image: '/img/menu/menu-20.jpg',
    dietary: ['vegetarian'],
    pairing: 'Ideal for gifting and dinner parties'
  },
  {
    id: 'honey-dryfruit-sundae',
    name: 'Royal Honey & Dry Fruit Sundae',
    category: 'sundaes_jars',
    tagline: 'Three scoops drizzled with Coorg honey and roasted nuts',
    description: 'Pistachio Royale, Belgian Chocolate, and Custard Apple crowned with toasted cashews, golden almonds, and pure amber forest honey.',
    ingredients: ['3 Calibrated Scoops', 'Forest Honey', 'Roasted Cashews', 'California Almonds'],
    portion: 'Grand parlour sundae',
    image: '/img/hero-honey-sundae.jpg',
    isBestseller: true,
    dietary: ['vegetarian', 'gluten_free'],
    pairing: 'Signature parlour showpiece'
  },
  {
    id: 'choco-roasted-almond',
    name: 'Choco Roasted Almond Jar',
    category: 'sundaes_jars',
    tagline: 'Silky cocoa fudge folded with crunchy almonds',
    description: 'Rich dark chocolate ice cream paired with slow-roasted salted almond bites in an individual takeaway jar.',
    ingredients: ['Van Houten Cocoa', 'Salted Roasted Almonds', 'Cream', 'Brown Sugar'],
    portion: '200ml sealed glass jar',
    image: '/img/menu/menu-21.jpg',
    dietary: ['vegetarian', 'gluten_free'],
    pairing: 'Available for instant Swiggy & Zomato delivery'
  },
  {
    id: 'tender-coconut',
    name: 'Fresh Tender Coconut',
    category: 'artisan',
    tagline: 'Real malai bits from coastal Karnataka coconuts',
    description: 'Tender coconut water and soft spoon meat folded gently into fresh dairy cream. Gentle, hydrating, and naturally refreshing.',
    ingredients: ['Tender Coconut Malai', 'Coconut Water Extract', 'Fresh Cream', 'Milk'],
    portion: '80g calibrated scoop',
    image: '/img/menu/menu-11.jpg',
    dietary: ['vegetarian', 'gluten_free', 'nut_free'],
    pairing: 'Subtle and soothing palate cleanser'
  }
];
