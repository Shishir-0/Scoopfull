export interface Outlet {
  id: string;
  name: string;
  zone: string;
  type: 'Flagship Parlour' | 'Active Parlour' | 'Upcoming Neighbourhood';
  status: 'open' | 'pipeline';
  address: string;
  hours?: string;
  googleRating?: number;
  reviewCount?: number;
  googleMapUrl?: string;
  swiggyUrl?: string;
  zomatoUrl?: string;
  featuredFlavour?: string;
}

export const OUTLETS: Outlet[] = [
  {
    id: 'rajajinagar',
    name: 'Rajajinagar Flagship',
    zone: 'West Bengaluru',
    type: 'Flagship Parlour',
    status: 'open',
    address: '1st Block, Rajajinagar, Bengaluru, Karnataka 560010',
    hours: '11:30 AM – 11:30 PM daily',
    googleRating: 4.8,
    reviewCount: 200,
    googleMapUrl: 'https://share.google/SEZgqIIKLXwIXUWTM',
    swiggyUrl: 'https://www.swiggy.com/menu/1052063?source=sharing',
    zomatoUrl: 'https://www.zomato.com/bangalore/scoopful-1-rajajinagar-bangalore',
    featuredFlavour: 'Belgian Chocolate & Honey Nut Sundae'
  },
  {
    id: 'sahakarnagar',
    name: 'Sahakarnagar Parlour',
    zone: 'North Bengaluru',
    type: 'Active Parlour',
    status: 'open',
    address: 'F Block, Sahakarnagar Main Road, Bengaluru, Karnataka 560092',
    hours: '12:00 PM – 11:00 PM daily',
    googleRating: 4.8,
    reviewCount: 95,
    googleMapUrl: 'https://share.google/SEZgqIIKLXwIXUWTM',
    swiggyUrl: 'https://www.swiggy.com/menu/1052063?source=sharing',
    zomatoUrl: 'https://www.zomato.com/bangalore/scoopful-1-rajajinagar-bangalore',
    featuredFlavour: 'Sitaphal Crème & Mango Alphonso'
  },
  {
    id: 'sarjapur',
    name: 'Sarjapur Parlour',
    zone: 'East Bengaluru / Tech Corridor',
    type: 'Active Parlour',
    status: 'open',
    address: 'Sarjapur Main Road, Doddakannelli, Bengaluru, Karnataka 560035',
    hours: '12:00 PM – 11:30 PM daily',
    googleRating: 4.9,
    reviewCount: 80,
    googleMapUrl: 'https://share.google/SEZgqIIKLXwIXUWTM',
    swiggyUrl: 'https://www.swiggy.com/menu/1052063?source=sharing',
    zomatoUrl: 'https://www.zomato.com/bangalore/scoopful-1-rajajinagar-bangalore',
    featuredFlavour: 'Belagavi Kundha & Cookies N Cream'
  }
];

export const UPCOMING_AREAS = [
  'Indiranagar',
  'Koramangala',
  'HSR Layout',
  'JP Nagar',
  'Jayanagar',
  'Brookfield',
  'Munnekollal',
  'BTM Layout',
  'Basavanagudi',
  'Vasanth Nagar',
  'Chandra Layout',
  'Kammanahalli'
];
