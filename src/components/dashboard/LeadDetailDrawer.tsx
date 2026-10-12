import React, { useState } from 'react';
import { Lead, LeadStatus } from '../../types/lead';
import { LeadStorageService } from '../../services/leadStorageService';
import { WhatsAppService } from '../../services/whatsappService';
import { X, MessageSquare, Mail, Copy, Check, Clock, ShieldCheck, Save } from 'lucide-react';

interface LeadDetailDrawerProps {
  lead: Lead | null;
  onClose: () => void;
  onLeadUpdated: () => void;
}

export const LeadDetailDrawer: React.FC<LeadDetailDrawerProps> = ({ lead, onClose, onLeadUpdated }) => {
  if (!lead) return null;

  const [currentStatus, setCurrentStatus] = useState<LeadStatus>(lead.status);
  const [internalNotes, setInternalNotes] = useState<string>(lead.internalNotes || '');
  const [isCopied, setIsCopied] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleStatusChange = (newStatus: LeadStatus) => {
    setCurrentStatus(newStatus);
    LeadStorageService.updateLeadStatus(lead.id, newStatus);
    onLeadUpdated();
  };

  const handleSaveNotes = () => {
    LeadStorageService.updateLeadNotes(lead.id, internalNotes);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
    onLeadUpdated();
  };

  const handleCopySummary = () => {
    const summary = [
      `SCOOPFUL COMMERCIAL LEAD: ${lead.id}`,
      `Candidate: ${lead.fullName}`,
      `Phone: ${lead.phone}`,
      `Email: ${lead.email}`,
      `Programme: ${lead.programme}`,
      `Location: ${lead.city} ${lead.area ? `(${lead.area})` : ''}`,
      `Capital Tier: ${lead.investmentRange}`,
      `Timeline: ${lead.timeline}`,
      `Site: ${lead.siteStatus} ${lead.siteSqFt ? `(${lead.siteSqFt})` : ''}`,
      `Notes: ${lead.notes || 'None'}`
    ].join('\n');

    navigator.clipboard.writeText(summary);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const whatsappUrl = WhatsAppService.getPartnerQualificationUrl(lead);

  return (
    <div className="drawer-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="drawer-title">
      <div className="drawer-panel" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="drawer-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="lead-id-tag">{lead.id}</span>
              {lead.isDemoSample ? (
                <span className="badge badge-warning" style={{ fontSize: '0.6875rem' }}>Concept Demo Lead</span>
              ) : (
                <span className="badge badge-success" style={{ fontSize: '0.6875rem' }}>Live Web Submission</span>
              )}
            </div>
            <h3 id="drawer-title" style={{ fontSize: '1.25rem', color: 'var(--color-plum)' }}>
              {lead.fullName}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close details"
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--color-soft)', padding: '6px' }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="drawer-body">
          {/* Status Pipeline Controller */}
          <div style={{ backgroundColor: '#FAF4EB', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-line)', marginBottom: '24px' }}>
            <label className="form-label" htmlFor="lead-status-select" style={{ fontSize: '0.8125rem' }}>
              CURRENT PIPELINE STAGE
            </label>
            <select
              id="lead-status-select"
              className="dash-select"
              style={{ width: '100%', padding: '10px 12px', fontSize: '0.9375rem', fontWeight: 600 }}
              value={currentStatus}
              onChange={(e) => handleStatusChange(e.target.value as LeadStatus)}
            >
              <option value="new">1. New / Pending Discovery</option>
              <option value="contacted">2. Contacted (Discovery Call)</option>
              <option value="qualified">3. Qualified Candidate</option>
              <option value="site_scouted">4. Site Scouted & Approved</option>
              <option value="loi_sent">5. Letter of Intent (LOI) Issued</option>
              <option value="agreement_signed">6. Agreement Signed & Onboarded</option>
              <option value="disqualified">7. Disqualified / Dropped</option>
            </select>
          </div>

          {/* Key Facts Grid */}
          <div className="drawer-kv-grid">
            <div className="drawer-kv-item">
              <span>Programme</span>
              <b>{lead.programme.replace(/_/g, ' ').toUpperCase()}</b>
            </div>
            <div className="drawer-kv-item">
              <span>Capital Tier</span>
              <b>{lead.investmentRange.replace(/_/g, ' ').toUpperCase()}</b>
            </div>
            <div className="drawer-kv-item">
              <span>Phone</span>
              <b><a href={`tel:${lead.phone}`}>{lead.phone}</a></b>
            </div>
            <div className="drawer-kv-item">
              <span>Email</span>
              <b><a href={`mailto:${lead.email}`}>{lead.email}</a></b>
            </div>
            <div className="drawer-kv-item">
              <span>Target City</span>
              <b>{lead.city}</b>
            </div>
            <div className="drawer-kv-item">
              <span>Area / Micro-market</span>
              <b>{lead.area || 'Not specified'}</b>
            </div>
            <div className="drawer-kv-item">
              <span>Site Status</span>
              <b>{lead.siteStatus.replace(/_/g, ' ')}</b>
            </div>
            <div className="drawer-kv-item">
              <span>Carpet Area</span>
              <b>{lead.siteSqFt || 'Pending scouting'}</b>
            </div>
            <div className="drawer-kv-item">
              <span>Timeline</span>
              <b>{lead.timeline.replace(/_/g, ' ')}</b>
            </div>
            <div className="drawer-kv-item">
              <span>Captured From</span>
              <b>{lead.source.replace(/_/g, ' ')}</b>
            </div>
          </div>

          {/* Candidate Notes */}
          {lead.notes && (
            <div style={{ marginBottom: '24px' }}>
              <div className="drawer-section-title">Candidate Inquiry Note</div>
              <p style={{ backgroundColor: '#ffffff', padding: '14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-line)', fontSize: '0.875rem', color: 'var(--color-cocoa)', fontStyle: 'italic', margin: 0 }}>
                “{lead.notes}”
              </p>
            </div>
          )}

          {/* Internal CRM Notes */}
          <div style={{ marginBottom: '28px' }}>
            <div className="drawer-section-title">Internal Qualification Notes</div>
            <textarea
              className="form-textarea"
              rows={3}
              placeholder="Record notes from discovery call, financial capacity, site viability..."
              value={internalNotes}
              onChange={(e) => setInternalNotes(e.target.value)}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
              <button onClick={handleSaveNotes} className="btn btn-outline btn-sm">
                <Save size={14} />
                <span>{saveSuccess ? 'Saved!' : 'Save Internal Note'}</span>
              </button>
            </div>
          </div>

          {/* Audit Trail */}
          <div>
            <div className="drawer-section-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} />
              <span>Activity & Status History</span>
            </div>
            <div className="audit-timeline-list">
              {lead.auditTrail.map((entry, idx) => (
                <div key={idx} className="audit-timeline-item">
                  <div style={{ fontWeight: 600, color: 'var(--color-plum)' }}>{entry.action}</div>
                  <div className="audit-time">
                    {new Date(entry.timestamp).toLocaleString()} · by {entry.performedBy}
                  </div>
                  {entry.notes && (
                    <div style={{ color: 'var(--color-soft)', marginTop: '2px' }}>{entry.notes}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Quick Actions */}
        <div className="drawer-footer">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold btn-sm"
            style={{ gap: '6px' }}
          >
            <MessageSquare size={14} />
            <span>WhatsApp</span>
          </a>

          <a
            href={`mailto:${lead.email}?subject=${encodeURIComponent(`Scoopful Partnership Inquiry [${lead.id}]`)}`}
            className="btn btn-outline btn-sm"
            style={{ gap: '6px' }}
          >
            <Mail size={14} />
            <span>Email</span>
          </a>

          <button
            onClick={handleCopySummary}
            className="btn btn-ghost btn-sm"
            style={{ gap: '6px' }}
          >
            {isCopied ? <Check size={14} color="var(--color-success)" /> : <Copy size={14} />}
            <span>{isCopied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
