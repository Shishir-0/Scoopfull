export type FranchiseModelType = 'foco' | 'fofo';

export interface ModelDetail {
  id: FranchiseModelType;
  name: string;
  shortName: string;
  tagline: string;
  capitalRole: string;
  operatingRole: string;
  whoEmploysStaff: string;
  whoPaysRent: string;
  investorPayout: string;
  scoopfulRevenue: string;
  exitTerms: string;
  idealProfile: string;
}

export interface ParlourFormat {
  id: string;
  name: string;
  category: 'founding' | 'standard';
  space: string;
  seating: string;
  staff: string;
  targetLocations: string;
  totalSetupEstimate: string;
  franchiseFee: string;
  realisticPayback: string;
  notes: string;
}
