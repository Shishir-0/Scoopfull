import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FlavourGallery } from '../components/home/FlavourGallery';
import { BrandDifferentiators } from '../components/home/BrandDifferentiators';
import { StorySection } from '../components/home/StorySection';
import { OutletFinder } from '../components/home/OutletFinder';
import { CustomerReviews } from '../components/home/CustomerReviews';
import { CommercialGateway } from '../components/home/CommercialGateway';

interface HomePageProps {
  onOpenOrderModal: (flavourName?: string) => void;
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenOrderModal, onNavigate }) => {
  const handleExploreFlavours = () => {
    document.getElementById('flavours')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main role="main">
      {/* 1. Hero */}
      <HeroSection
        onOpenOrderModal={() => onOpenOrderModal()}
        onExploreFlavours={handleExploreFlavours}
      />

      {/* 2. Flavour Discovery */}
      <FlavourGallery
        onSelectFlavourForOrder={(flavourName) => onOpenOrderModal(flavourName)}
      />

      {/* 3. The Scoopful Standard */}
      <BrandDifferentiators />

      {/* 4. Origin Story & ScoopfulCares */}
      <StorySection />

      {/* 5. Bengaluru Outlets */}
      <OutletFinder
        onNavigateToFranchise={() => onNavigate('/franchise')}
      />

      {/* 6. Customer Reviews & Social Proof */}
      <CustomerReviews />

      {/* 7. Commercial Gateway */}
      <CommercialGateway
        onNavigateToFranchise={() => onNavigate('/franchise')}
        onNavigateToPartners={() => onNavigate('/partners')}
      />
    </main>
  );
};
