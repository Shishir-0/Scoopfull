import React, { useState } from 'react';
import { Lead, LeadStatus, LeadProgramme } from '../../types/lead';
import { Search, Filter, ArrowUpDown, ChevronRight, Eye } from 'lucide-react';

interface LeadTableProps {
  leads: Lead[];
  onSelectLead: (lead: Lead) => void;
}

export const LeadTable: React.FC<LeadTableProps> = ({ leads, onSelectLead }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedProgramme, setSelectedProgramme] = useState<string>('all');

  const filteredLeads = leads.filter(l => {
    // Search
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q ||
      l.id.toLowerCase().includes(q) ||
      l.fullName.toLowerCase().includes(q) ||
      l.city.toLowerCase().includes(q) ||
      l.phone.toLowerCase().includes(q) ||
      l.email.toLowerCase().includes(q) ||
      (l.area && l.area.toLowerCase().includes(q));

    // Status
    const matchesStatus = selectedStatus === 'all' || l.status === selectedStatus;

    // Programme
    const matchesProgramme = selectedProgramme === 'all' || l.programme === selectedProgramme;

    return matchesSearch && matchesStatus && matchesProgramme;
  });

  const getStatusBadge = (status: LeadStatus) => {
    const labels: Record<LeadStatus, string> = {
      new: 'New',
      contacted: 'Contacted',
      qualified: 'Qualified',
      site_scouted: 'Site Scouted',
      loi_sent: 'LOI Issued',
      agreement_signed: 'Agreement Signed',
      disqualified: 'Closed / Disqualified'
    };
    return <span className={`status-pill status-${status}`}>{labels[status]}</span>;
  };

  const getProgrammeLabel = (programme: LeadProgramme) => {
    const labels: Record<LeadProgramme, string> = {
      franchise_foco: 'FOCO Parlour',
      franchise_fofo: 'FOFO Parlour',
      founding_partner: 'Founding Partner (<₹10L)',
      cafe_freezer: 'Café Freezer Placement',
      distributor: 'Territory Distribution',
      horeca_bulk: 'HORECA Bulk',
      white_label: 'White Label OEM'
    };
    return labels[programme] || programme;
  };

  const formatCapital = (range: string) => {
    switch (range) {
      case 'under_10l': return '< ₹10L';
      case '10l_to_25l': return '₹10L – ₹25L';
      case '25l_to_40l': return '₹25L – ₹40L';
      case 'above_40l': return '> ₹40L';
      default: return 'N/A';
    }
  };

  return (
    <div>
      {/* Controls Strip */}
      <div className="dashboard-controls">
        <div className="search-box-wrap">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search by candidate name, city, phone, email, or lead ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-selects">
          <select
            className="dash-select"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            aria-label="Filter by Status"
          >
            <option value="all">All Statuses ({leads.length})</option>
            <option value="new">New Inquiries</option>
            <option value="contacted">Contacted</option>
            <option value="qualified">Qualified</option>
            <option value="site_scouted">Site Scouted</option>
            <option value="loi_sent">LOI Issued</option>
            <option value="agreement_signed">Agreement Signed</option>
            <option value="disqualified">Disqualified</option>
          </select>

          <select
            className="dash-select"
            value={selectedProgramme}
            onChange={(e) => setSelectedProgramme(e.target.value)}
            aria-label="Filter by Programme"
          >
            <option value="all">All Programmes</option>
            <option value="franchise_foco">FOCO Parlour</option>
            <option value="franchise_fofo">FOFO Parlour</option>
            <option value="founding_partner">Founding Partner (&lt;₹10L)</option>
            <option value="cafe_freezer">Café Freezer</option>
            <option value="distributor">Distributor</option>
            <option value="horeca_bulk">HORECA Bulk</option>
            <option value="white_label">White Label</option>
          </select>
        </div>
      </div>

      {/* Table Card */}
      <div className="table-card">
        {filteredLeads.length === 0 ? (
          <div style={{ padding: '48px 24px', textAlign: 'center', color: 'var(--color-soft)' }}>
            <p style={{ fontSize: '1.0625rem', marginBottom: '8px' }}>No lead inquiries match your current search or filters.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedStatus('all'); setSelectedProgramme('all'); }}
              className="btn btn-outline btn-sm"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table className="leads-table">
              <thead>
                <tr>
                  <th>Lead ID</th>
                  <th>Candidate & Contact</th>
                  <th>Programme</th>
                  <th>Target Location</th>
                  <th>Capital Tier</th>
                  <th>Timeline</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} onClick={() => onSelectLead(lead)}>
                    <td>
                      <span className="lead-id-tag">{lead.id}</span>
                      {lead.isDemoSample && (
                        <span style={{ display: 'block', fontSize: '0.6875rem', color: 'var(--color-muted)' }}>Demo Seed</span>
                      )}
                    </td>

                    <td className="lead-name-cell">
                      <b>{lead.fullName}</b>
                      <span>{lead.phone} · {lead.email}</span>
                    </td>

                    <td>
                      <span className="badge badge-plum" style={{ fontSize: '0.6875rem' }}>
                        {getProgrammeLabel(lead.programme)}
                      </span>
                    </td>

                    <td>
                      <b style={{ color: 'var(--color-plum)', fontSize: '0.875rem' }}>{lead.city}</b>
                      {lead.area && <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--color-muted)' }}>{lead.area}</span>}
                    </td>

                    <td style={{ fontWeight: 600, color: 'var(--color-plum)' }}>
                      {formatCapital(lead.investmentRange)}
                    </td>

                    <td style={{ fontSize: '0.8125rem', color: 'var(--color-soft)', textTransform: 'capitalize' }}>
                      {lead.timeline.replace(/_/g, ' ')}
                    </td>

                    <td>
                      {getStatusBadge(lead.status)}
                    </td>

                    <td style={{ textAlign: 'right' }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectLead(lead);
                        }}
                        className="btn btn-ghost btn-sm"
                        aria-label={`View details for ${lead.fullName}`}
                      >
                        <Eye size={15} />
                        <span>Inspect</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
