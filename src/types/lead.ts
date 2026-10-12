export type LeadStatus =
  | 'new'
  | 'contacted'
  | 'qualified'
  | 'site_scouted'
  | 'loi_sent'
  | 'agreement_signed'
  | 'disqualified';

export type LeadProgramme =
  | 'franchise_foco'
  | 'franchise_fofo'
  | 'founding_partner'
  | 'cafe_freezer'
  | 'distributor'
  | 'horeca_bulk'
  | 'white_label';

export type InvestmentRange =
  | 'under_10l'
  | '10l_to_25l'
  | '25l_to_40l'
  | 'above_40l'
  | 'not_applicable';

export interface LeadAuditEntry {
  timestamp: string;
  action: string;
  performedBy: string;
  notes?: string;
}

export interface Lead {
  id: string; // e.g. SCP-2026-XXXX
  uuid: string;
  createdAt: string;
  updatedAt: string;
  status: LeadStatus;
  programme: LeadProgramme;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  area?: string;
  investmentRange: InvestmentRange;
  siteStatus: 'have_site' | 'scouting' | 'need_assistance' | 'not_applicable';
  siteSqFt?: string;
  timeline: 'immediate' | 'within_30_days' | '1_to_3_months' | 'exploring';
  notes?: string;
  internalNotes?: string;
  source: 'partner_hub' | 'franchise_page' | 'homepage_teaser' | 'direct_inquiry';
  utmSource?: string;
  isDemoSample?: boolean;
  auditTrail: LeadAuditEntry[];
}

export interface QualificationFormData {
  programme: LeadProgramme;
  fullName: string;
  phone: string;
  email: string;
  city: string;
  area?: string;
  investmentRange: InvestmentRange;
  siteStatus: 'have_site' | 'scouting' | 'need_assistance' | 'not_applicable';
  siteSqFt?: string;
  timeline: 'immediate' | 'within_30_days' | '1_to_3_months' | 'exploring';
  notes?: string;
}
