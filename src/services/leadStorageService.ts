import { Lead, LeadStatus, QualificationFormData } from '../types/lead';
import { INITIAL_LEADS } from '../data/initialLeads';

const STORAGE_KEY = 'scoopful_leads_v1';
const EVENT_NAME = 'scoopful_leads_updated';

export class LeadStorageService {
  private static getStoredLeads(): Lead[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_LEADS));
        return INITIAL_LEADS;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_LEADS;
    }
  }

  public static getAllLeads(): Lead[] {
    return this.getStoredLeads();
  }

  public static getLeadById(id: string): Lead | undefined {
    return this.getAllLeads().find(l => l.id === id);
  }

  public static createLead(formData: QualificationFormData, source: Lead['source'] = 'partner_hub'): Lead {
    const existing = this.getAllLeads();
    const count = existing.length + 1;
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newId = `SCP-2026-${count.toString().padStart(2, '0')}${randomSuffix.toString().slice(-2)}`;
    const now = new Date().toISOString();

    const newLead: Lead = {
      id: newId,
      uuid: crypto.randomUUID ? crypto.randomUUID() : `uuid-${Date.now()}-${randomSuffix}`,
      createdAt: now,
      updatedAt: now,
      status: 'new',
      programme: formData.programme,
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      city: formData.city.trim(),
      area: formData.area?.trim() || '',
      investmentRange: formData.investmentRange,
      siteStatus: formData.siteStatus,
      siteSqFt: formData.siteSqFt?.trim() || '',
      timeline: formData.timeline,
      notes: formData.notes?.trim() || '',
      internalNotes: 'New inbound commercial submission awaiting discovery call.',
      source,
      isDemoSample: false, // Authentic submission captured from visitor interaction
      auditTrail: [
        {
          timestamp: now,
          action: `Inbound enquiry captured via ${source.replace('_', ' ')}`,
          performedBy: 'Visitor'
        }
      ]
    };

    const updated = [newLead, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: newLead }));
    return newLead;
  }

  public static updateLeadStatus(id: string, newStatus: LeadStatus, note?: string): boolean {
    const leads = this.getAllLeads();
    const index = leads.findIndex(l => l.id === id);
    if (index === -1) return false;

    const now = new Date().toISOString();
    const lead = leads[index];
    lead.status = newStatus;
    lead.updatedAt = now;
    lead.auditTrail.unshift({
      timestamp: now,
      action: `Status updated to ${newStatus.replace('_', ' ').toUpperCase()}`,
      performedBy: 'Lead Manager',
      notes: note
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
    window.dispatchEvent(new CustomEvent(EVENT_NAME));
    return true;
  }

  public static updateLeadNotes(id: string, internalNotes: string): boolean {
    const leads = this.getAllLeads();
    const index = leads.findIndex(l => l.id === id);
    if (index === -1) return false;

    const now = new Date().toISOString();
    leads[index].internalNotes = internalNotes;
    leads[index].updatedAt = now;
    leads[index].auditTrail.unshift({
      timestamp: now,
      action: 'Internal notes updated',
      performedBy: 'Lead Manager'
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
    window.dispatchEvent(new CustomEvent(EVENT_NAME));
    return true;
  }

  public static resetToDemoData(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_LEADS));
    window.dispatchEvent(new CustomEvent(EVENT_NAME));
  }

  public static exportToCsv(): string {
    const leads = this.getAllLeads();
    const headers = ['Lead ID', 'Created At', 'Status', 'Programme', 'Full Name', 'Phone', 'Email', 'City', 'Area', 'Investment Range', 'Site Status', 'Timeline', 'Demo Sample'];
    const rows = leads.map(l => [
      l.id,
      l.createdAt,
      l.status,
      l.programme,
      `"${l.fullName.replace(/"/g, '""')}"`,
      `"${l.phone}"`,
      `"${l.email}"`,
      `"${l.city}"`,
      `"${l.area || ''}"`,
      l.investmentRange,
      l.siteStatus,
      l.timeline,
      l.isDemoSample ? 'YES' : 'NO'
    ]);
    return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  }

  public static subscribe(callback: () => void): () => void {
    window.addEventListener(EVENT_NAME, callback);
    return () => window.removeEventListener(EVENT_NAME, callback);
  }
}
