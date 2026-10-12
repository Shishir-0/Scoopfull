import React from 'react';
import { FranchiseHero } from '../components/franchise/FranchiseHero';
import { ModelComparison } from '../components/franchise/ModelComparison';
import { FoundingProgrammeCard } from '../components/franchise/FoundingProgrammeCard';
import { FormatBreakdown } from '../components/franchise/FormatBreakdown';
import { ProcessTimeline } from '../components/franchise/ProcessTimeline';
import { DocumentDownloads } from '../components/franchise/DocumentDownloads';
import { FranchiseFAQ } from '../components/franchise/FranchiseFAQ';
import { QualificationWizard } from '../components/partners/QualificationWizard';

interface FranchisePageProps {
  onNavigateToDashboard: () => void;
}

export const FranchisePage: React.FC<FranchisePageProps> = ({ onNavigateToDashboard }) => {
  const handleScrollToEnquiry = () => {
    document.getElementById('qualification-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main role="main">
      {/* 1. Hero */}
      <FranchiseHero onScrollToEnquiry={handleScrollToEnquiry} />

      {/* 2. Model Comparison: FOCO vs FOFO */}
      <ModelComparison />

      {/* 3. Founding Partner Programme (<₹10L) */}
      <FoundingProgrammeCard />

      {/* 4. Format Breakdown (Compact vs Signature) */}
      <FormatBreakdown />

      {/* 5. 60-90 Day Launch Timeline */}
      <ProcessTimeline />

      {/* 6. Document Downloads (All 4 Official PDFs) */}
      <DocumentDownloads />

      {/* 7. Franchise FAQs */}
      <FranchiseFAQ />

      {/* 8. Structured Qualification Flow */}
      <QualificationWizard
        initialProgramme="franchise_foco"
        sourcePage="franchise_page"
        onNavigateToDashboard={onNavigateToDashboard}
      />
    </main>
  );
};
