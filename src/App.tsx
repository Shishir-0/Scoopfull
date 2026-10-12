import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { OrderModal } from './components/layout/OrderModal';
import { HomePage } from './pages/HomePage';
import { FranchisePage } from './pages/FranchisePage';
import { PartnersPage } from './pages/PartnersPage';
import { DashboardPage } from './pages/DashboardPage';
import { LegalPage } from './pages/LegalPage';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedFlavourForOrder, setSelectedFlavourForOrder] = useState<string | undefined>(undefined);

  // Synchronize history state
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenOrder = (flavourName?: string) => {
    setSelectedFlavourForOrder(flavourName);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrder = () => {
    setIsOrderModalOpen(false);
    setSelectedFlavourForOrder(undefined);
  };

  // Render current view
  const renderPage = () => {
    switch (currentPath) {
      case '/franchise':
        return <FranchisePage onNavigateToDashboard={() => navigate('/partner-dashboard')} />;
      case '/partners':
        return <PartnersPage onNavigateToDashboard={() => navigate('/partner-dashboard')} />;
      case '/partner-dashboard':
        return <DashboardPage onBackToSite={() => navigate('/')} />;
      case '/privacy-policy':
        return <LegalPage initialTab="privacy" onBackToHome={() => navigate('/')} />;
      case '/terms':
        return <LegalPage initialTab="terms" onBackToHome={() => navigate('/')} />;
      case '/':
      default:
        return <HomePage onOpenOrderModal={handleOpenOrder} onNavigate={navigate} />;
    }
  };

  const isDashboard = currentPath === '/partner-dashboard';

  return (
    <div className="app-container">
      {/* Site Header (Shown on public customer and partner pages) */}
      {!isDashboard && (
        <Header
          currentPath={currentPath}
          onNavigate={navigate}
          onOpenOrderModal={() => handleOpenOrder()}
        />
      )}

      {/* Main Content Area */}
      {renderPage()}

      {/* Site Footer (Shown on public customer and partner pages) */}
      {!isDashboard && <Footer onNavigate={navigate} />}

      {/* Global 1-Click Consumer Order Dialog */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrder}
        selectedFlavour={selectedFlavourForOrder}
      />
    </div>
  );
}

export default App;
