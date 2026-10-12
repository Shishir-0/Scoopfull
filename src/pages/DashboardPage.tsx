import React, { useState, useEffect } from 'react';
import { AuthGate } from '../components/dashboard/AuthGate';
import { DashboardHeader } from '../components/dashboard/DashboardHeader';
import { MetricsSummary } from '../components/dashboard/MetricsSummary';
import { LeadTable } from '../components/dashboard/LeadTable';
import { LeadDetailDrawer } from '../components/dashboard/LeadDetailDrawer';
import { LeadStorageService } from '../services/leadStorageService';
import { Lead } from '../types/lead';

interface DashboardPageProps {
  onBackToSite: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onBackToSite }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('scoopful_dash_auth') === 'true';
  });

  const [leads, setLeads] = useState<Lead[]>(() => LeadStorageService.getAllLeads());
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const refreshLeads = () => {
    const updated = LeadStorageService.getAllLeads();
    setLeads([...updated]);
    if (selectedLead) {
      const refreshedSelected = updated.find(l => l.id === selectedLead.id) || null;
      setSelectedLead(refreshedSelected);
    }
  };

  useEffect(() => {
    const unsubscribe = LeadStorageService.subscribe(() => {
      refreshLeads();
    });
    return unsubscribe;
  }, [selectedLead]);

  const handleAuthenticated = () => {
    sessionStorage.setItem('scoopful_dash_auth', 'true');
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return (
      <main className="dashboard-canvas">
        <AuthGate onAuthenticated={handleAuthenticated} />
      </main>
    );
  }

  return (
    <main className="dashboard-canvas">
      {/* Header with Demo Disclosure & Global Actions */}
      <DashboardHeader
        onBackToSite={onBackToSite}
        onRefreshLeads={refreshLeads}
      />

      <div className="container">
        {/* KPI Summary Cards */}
        <MetricsSummary leads={leads} />

        {/* Searchable, Filterable Leads Table */}
        <LeadTable
          leads={leads}
          onSelectLead={(lead) => setSelectedLead(lead)}
        />
      </div>

      {/* Slide-in Detail Drawer */}
      <LeadDetailDrawer
        lead={selectedLead}
        onClose={() => setSelectedLead(null)}
        onLeadUpdated={refreshLeads}
      />
    </main>
  );
};
