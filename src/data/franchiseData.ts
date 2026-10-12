import { ModelDetail, ParlourFormat } from '../types/franchise';

export const FRANCHISE_MODELS: Record<'foco' | 'fofo', ModelDetail> = {
  foco: {
    id: 'foco',
    name: 'FOCO Model',
    shortName: 'Franchisee Owned, Company Operated',
    tagline: 'Pure capital investment. We handle all staffing, operations, and store overheads.',
    capitalRole: 'Partner funds franchise fee, interior setup, and refundable rent deposit.',
    operatingRole: 'Scoopful manages 100% of day-to-day operations, billing, inventory, and hygiene audits.',
    whoEmploysStaff: 'Scoopful hires, trains, and pays all parlour staff.',
    whoPaysRent: 'Scoopful pays store monthly rent and electricity utilities directly.',
    investorPayout: '5% of net sales in months 1–3 (ramp-up), then 12% of net sales paid monthly via NEFT.',
    scoopfulRevenue: 'Scoopful retains remaining operational revenue to cover rent, COGS, staff, and logistics.',
    exitTerms: '5-year agreement. At exit, Scoopful buys back store equipment at depreciated value; lease deposit returned.',
    idealProfile: 'Professionals, HNIs, and angel investors seeking passive F&B income without daily time commitment.'
  },
  fofo: {
    id: 'fofo',
    name: 'FOFO Model',
    shortName: 'Franchisee Owned, Franchisee Operated',
    tagline: 'Be your own boss with Scoopful’s proven supply chain, brand, and training behind you.',
    capitalRole: 'Partner funds franchise fee, fit-out, rent deposit, and a small working-capital reserve.',
    operatingRole: 'Partner manages store operations with a full-time store manager adhering to Scoopful SOPs.',
    whoEmploysStaff: 'Franchise partner employs the team (trained by Scoopful trainers on site for 10 days).',
    whoPaysRent: 'Franchise partner pays location lease and utilities directly.',
    investorPayout: 'Partner retains 100% of outlet operating profits after expenses.',
    scoopfulRevenue: 'Partner pays Scoopful a 6% brand royalty plus a 2% central marketing fund on monthly net sales.',
    exitTerms: '5-year agreement with 3-year lock-in. Partner retains all equipment and fixtures upon unbranding.',
    idealProfile: 'Entrepreneurs, F&B operators, and hands-on founders who visit their store at least twice a week.'
  }
};

export const PARLOUR_FORMATS: ParlourFormat[] = [
  {
    id: 'founding-food-court',
    name: 'Founding Food Court Counter',
    category: 'founding',
    space: '100 – 200 sq ft',
    seating: 'Shared food court seating',
    staff: '3 members',
    targetLocations: 'Malls, IT tech parks, university campuses',
    totalSetupEstimate: '₹7.6L – ₹8.4L all-in',
    franchiseFee: 'Included in all-in package',
    realisticPayback: 'FOFO: ~9 months | FOCO: ~14 months',
    notes: 'Part of the 12-slot Founding Partner Programme. Terms locked for 5 years. Average bill ~₹140–₹150.'
  },
  {
    id: 'founding-qsr-scoop',
    name: 'Founding QSR Scoop Bar',
    category: 'founding',
    space: '150 – 300 sq ft (Ground floor)',
    seating: 'High-stool ledge / quick grab-and-go',
    staff: '4 members',
    targetLocations: 'High-street retail, pedestrian markets, bustling QSR strips',
    totalSetupEstimate: '₹8.9L – ₹9.9L all-in',
    franchiseFee: 'Included in all-in package',
    realisticPayback: 'FOFO: ~11 months | FOCO: ~17 months',
    notes: 'Ground floor only with evening pedestrian footfall. Full 15-16 flavour display freezer.'
  },
  {
    id: 'standard-compact',
    name: 'Compact Parlour',
    category: 'standard',
    space: '500 – 999 sq ft',
    seating: '12 – 16 dedicated seats',
    staff: '~6 members',
    targetLocations: 'Premium residential high streets, destination dining strips',
    totalSetupEstimate: '₹19.5L – ₹24.5L setup + Fee',
    franchiseFee: 'FOCO: ₹7.0L + GST | FOFO: ₹4.0L + GST',
    realisticPayback: 'FOFO: 14–18 months | FOCO: 22–28 months',
    notes: 'Full experiential parlour serving scoops, sundaes, cold coffees, and takeaway jars. 2 km exclusive territory.'
  },
  {
    id: 'standard-signature',
    name: 'Signature Parlour',
    category: 'standard',
    space: '1,000+ sq ft',
    seating: '28 – 32 dedicated seats with aesthetic lounge',
    staff: '~9 members',
    targetLocations: 'Prime landmark corners, high-end high streets in metro hubs',
    totalSetupEstimate: '₹25.8L – ₹32.8L setup + Fee',
    franchiseFee: 'FOCO: ₹8.0L + GST | FOFO: ₹5.0L + GST',
    realisticPayback: 'FOFO: 18–24 months | FOCO: 28–34 months',
    notes: 'Showcase destination featuring live sundae bar, waffle cone ovens, and dessert tasting flights.'
  }
];

export const FRANCHISE_PROCESS_STEPS = [
  { step: '01', title: 'Expression of Interest', duration: 'Day 0', desc: 'Submit qualification details with target city, preferred model (FOCO/FOFO), and capital readiness.' },
  { step: '02', title: 'Discovery & Parlour Visit', duration: 'Days 1–7', desc: 'Direct discovery call with Scoopful leadership and visit an operating parlour during peak evening hours.' },
  { step: '03', title: 'Site Scouting & Viability', duration: 'Days 8–20', desc: 'Joint review of proposed commercial sites with detailed footfall, parking, and demographic viability analysis.' },
  { step: '04', title: 'Letter of Intent (LOI)', duration: 'Day 21', desc: 'Execution of LOI with ₹1.0 Lakh token advance (fully adjusted against the franchise fee).' },
  { step: '05', title: 'Definitive Agreement', duration: 'Days 22–30', desc: 'Execution of standard 5-year Franchise Agreement; 50% franchise fee payment.' },
  { step: '06', title: 'Design & Store Fitout', duration: 'Days 31–65', desc: 'Scoopful architectural team delivers layout, 3D renders, equipment procurement, and interior build.' },
  { step: '07', title: 'Hiring & 10-Day Training', duration: 'Days 55–70', desc: 'Rigorous 10-day hands-on counter training. Mandatory 95/100 score before serving first customer.' },
  { step: '08', title: 'Grand Launch', duration: 'Day 75', desc: 'Refrigerated cold-chain delivery, live Swiggy/Zomato listings, and hyper-local launch campaign.' }
];

export const DOWNLOADABLE_GUIDES = [
  {
    id: 'partner-guide',
    title: 'Franchise Partner Guide 2026',
    description: 'Comprehensive side-by-side comparison of FOCO and FOFO models, investment line items, and operating standards.',
    size: '4.0 MB',
    filename: 'scoopful-franchise-partner-guide-2026.pdf',
    url: '/downloads/scoopful-franchise-partner-guide-2026.pdf'
  },
  {
    id: 'foco-prospectus',
    title: 'FOCO Investor Prospectus',
    description: 'Dedicated financial model for passive investors: sales share mechanics, payout schedules, and buy-back guarantees.',
    size: '3.8 MB',
    filename: 'scoopful-foco-franchise-prospectus-2026.pdf',
    url: '/downloads/scoopful-foco-franchise-prospectus-2026.pdf'
  },
  {
    id: 'fofo-prospectus',
    title: 'FOFO Owner-Operator Prospectus',
    description: 'Unit economics, 6% royalty structure, ingredient indent process, and store manager training checklist.',
    size: '4.0 MB',
    filename: 'scoopful-fofo-franchise-prospectus-2026.pdf',
    url: '/downloads/scoopful-fofo-franchise-prospectus-2026.pdf'
  },
  {
    id: 'founding-programme',
    title: 'Founding Partner Programme Guide',
    description: 'Strictly limited to 12 outlets under ₹10 Lakhs all-in. Special five-year locked commercial terms.',
    size: '1.8 MB',
    filename: 'scoopful-founding-partner-programme-2026.pdf',
    url: '/downloads/scoopful-founding-partner-programme-2026.pdf'
  }
];
