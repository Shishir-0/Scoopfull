import React from 'react';
import { Lead } from '../../types/lead';
import { Users, Store, Coffee, IndianRupee, Clock } from 'lucide-react';

interface MetricsSummaryProps {
  leads: Lead[];
}

export const MetricsSummary: React.FC<MetricsSummaryProps> = ({ leads }) => {
  const totalCount = leads.length;

  const franchiseCount = leads.filter(l =>
    ['franchise_foco', 'franchise_fofo', 'founding_partner'].includes(l.programme)
  ).length;

  const cafeCount = leads.filter(l => l.programme === 'cafe_freezer').length;

  const actionRequiredCount = leads.filter(l =>
    ['new', 'contacted'].includes(l.status)
  ).length;

  // Compute pipeline capital indicative value
  const totalCapitalLakhs = leads.reduce((acc, l) => {
    switch (l.investmentRange) {
      case 'under_10l': return acc + 8.5;
      case '10l_to_25l': return acc + 22.0;
      case '25l_to_40l': return acc + 32.0;
      case 'above_40l': return acc + 50.0;
      default: return acc;
    }
  }, 0);

  return (
    <div className="dashboard-metrics-grid">
      {/* Metric 1 */}
      <div className="metric-card">
        <div className="metric-card-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Users size={14} color="var(--color-mauve)" />
          <span>Total Pipeline</span>
        </div>
        <div className="metric-card-val">{totalCount}</div>
        <div className="metric-card-sub">Inbound qualified submissions</div>
      </div>

      {/* Metric 2 */}
      <div className="metric-card">
        <div className="metric-card-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Store size={14} color="var(--color-mauve)" />
          <span>Franchise Leads</span>
        </div>
        <div className="metric-card-val">{franchiseCount}</div>
        <div className="metric-card-sub">FOCO, FOFO & Founding</div>
      </div>

      {/* Metric 3 */}
      <div className="metric-card">
        <div className="metric-card-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Coffee size={14} color="var(--color-gold-ink)" />
          <span>Café Placements</span>
        </div>
        <div className="metric-card-val">{cafeCount}</div>
        <div className="metric-card-sub">Freezer revenue share</div>
      </div>

      {/* Metric 4 */}
      <div className="metric-card">
        <div className="metric-card-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <IndianRupee size={14} color="var(--color-success)" />
          <span>Pipeline Capital</span>
        </div>
        <div className="metric-card-val">₹{totalCapitalLakhs.toFixed(1)}L</div>
        <div className="metric-card-sub">Indicative investment pool</div>
      </div>

      {/* Metric 5 */}
      <div className="metric-card" style={{ borderColor: actionRequiredCount > 0 ? 'var(--color-gold)' : 'var(--color-line)' }}>
        <div className="metric-card-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Clock size={14} color="var(--color-warning)" />
          <span>Action Required</span>
        </div>
        <div className="metric-card-val" style={{ color: actionRequiredCount > 0 ? 'var(--color-warning)' : 'var(--color-plum)' }}>
          {actionRequiredCount}
        </div>
        <div className="metric-card-sub">Awaiting discovery call</div>
      </div>
    </div>
  );
};
