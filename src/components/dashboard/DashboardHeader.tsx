import React from 'react';
import { Download, RefreshCw, ArrowLeft, ShieldAlert } from 'lucide-react';
import { LeadStorageService } from '../../services/leadStorageService';

interface DashboardHeaderProps {
  onBackToSite: () => void;
  onRefreshLeads: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onBackToSite, onRefreshLeads }) => {
  const handleExportCsv = () => {
    const csvContent = LeadStorageService.exportToCsv();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `scoopful-leads-export-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReset = () => {
    if (window.confirm('Reset lead repository to initial demonstration seed data? (Your test submissions will be replaced with clean demo records).')) {
      LeadStorageService.resetToDemoData();
      onRefreshLeads();
    }
  };

  return (
    <header>
      {/* Concept Demo Notice */}
      <div className="demo-banner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="demo-banner-tag">CONCEPT DEMONSTRATION</span>
          <span>Sample leads are illustrative. Live web submissions from visitors are captured in local browser memory.</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span>Client: Scoopful (Bengaluru)</span>
          <span>ANSTAT Engineering</span>
        </div>
      </div>

      <div className="container dashboard-head">
        <div className="dashboard-title-row">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <button
                onClick={onBackToSite}
                className="btn btn-ghost btn-sm"
                style={{ padding: '4px 8px', color: 'var(--color-mauve)' }}
              >
                <ArrowLeft size={16} />
                <span>Return to Scoopful Website</span>
              </button>
            </div>

            <h1 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--color-plum)', marginBottom: '6px' }}>
              Partner Acquisition & Qualification CRM
            </h1>
            <p style={{ color: 'var(--color-soft)', fontSize: '0.9375rem', margin: 0, maxWidth: '680px' }}>
              Operational proof-of-concept demonstrating structured lead capture, multi-stage status management, geographic qualification, and zero-loss WhatsApp handoff.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={handleReset}
              className="btn btn-outline btn-sm"
              title="Reset demonstration state"
            >
              <RefreshCw size={14} />
              <span>Reset Demo Seed</span>
            </button>

            <button
              onClick={handleExportCsv}
              className="btn btn-plum btn-sm"
            >
              <Download size={14} />
              <span>Export CSV ({LeadStorageService.getAllLeads().length})</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
