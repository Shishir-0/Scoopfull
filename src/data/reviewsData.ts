export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  quote: string;
  source: 'Google' | 'Zomato';
  highlightFlavour?: string;
}

export const REVIEWS: CustomerReview[] = [
  {
    id: 'rev-01',
    author: 'Praveen K.',
    location: 'Rajajinagar Flagship',
    rating: 5,
    quote: 'Absolutely loved the ice cream here, Scoopful is truly a paradise for ice cream lovers in Bengaluru. The Belgian chocolate is so rich and dark.',
    source: 'Google',
    highlightFlavour: 'Belgian Chocolate'
  },
  {
    id: 'rev-02',
    author: 'Ananya S.',
    location: 'Sahakarnagar Parlour',
    rating: 5,
    quote: 'The sundae was amazing! Smooth and creamy, looked great and tasted even better. The sitaphal has such a subtle taste but at the same time it is beautiful tasting. Worth every rupee.',
    source: 'Google',
    highlightFlavour: 'Sitaphal Crème'
  },
  {
    id: 'rev-03',
    author: 'Raghav M.',
    location: 'Sarjapur Parlour',
    rating: 5,
    quote: 'The kundha ice cream flavour beats it all... it’s the best I’ve ever had in Karnataka. Authentic caramelized milk flavor without synthetic essence.',
    source: 'Google',
    highlightFlavour: 'Belagavi Kundha'
  },
  {
    id: 'rev-04',
    author: 'Deepika R.',
    location: 'Rajajinagar Flagship',
    rating: 5,
    quote: 'Tasted the ice cream after 3 months and the taste has increased so much, loved it. Sugar-free ice creams with no preservatives or artificial chemicals.',
    source: 'Google',
    highlightFlavour: 'Sugar-Free Dark Cocoa'
  },
  {
    id: 'rev-05',
    author: 'Vikas N.',
    location: 'Sahakarnagar Parlour',
    rating: 5,
    quote: 'Very good experience. I have visited many times and have always been satisfied with the ice cream. Clean parlor, friendly staff and consistent scoops.',
    source: 'Google',
    highlightFlavour: 'Mango Alphonso'
  },
  {
    id: 'rev-06',
    author: 'Kavitha B.',
    location: 'Sarjapur Parlour',
    rating: 5,
    quote: 'Offering tempting sundaes at a great price — good taste, genuine ice cream with real ingredients. We love coming here on weekends.',
    source: 'Zomato',
    highlightFlavour: 'Royal Honey Sundae'
  }
];
