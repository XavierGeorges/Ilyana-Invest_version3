import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

import { StickyBottomBar } from './components/StickyBottomBar';
import { Services } from './components/Services';
import { Roadmap } from './components/Roadmap';
import { Partners } from './components/Partners';
import { DueDiligence } from './components/DueDiligence';
import { BuyersAdvantage } from './components/BuyersAdvantage';
import { ExpertEcosystem } from './components/ExpertEcosystem';
import { TransmissionNote } from './components/TransmissionNote';
import { Concierge } from './components/Concierge';
import { TransitionSection } from './components/TransitionSection';
import { NetworkTransitionSection } from './components/NetworkTransitionSection';
import { Destinations } from './components/Destinations';
import { Footer } from './components/Footer';
import { GeminiAdvisor } from './components/GeminiAdvisor';
import { Legal } from './components/Legal';
import { Privacy } from './components/Privacy';
import { ServiceDetail } from './components/ServiceDetail';
import { DestinationDetail } from './components/DestinationDetail';
import { PromoterLP } from './components/PromoterLP';
import { BookingPage } from './components/BookingPage';
import { PageType } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'legal':
        return <Legal onNavigate={setCurrentPage} />;
      case 'privacy':
        return <Privacy onNavigate={setCurrentPage} />;
      case 'service-acquisition':
        return <ServiceDetail type="acquisition" onNavigate={setCurrentPage} />;
      case 'service-build':
        return <ServiceDetail type="build" onNavigate={setCurrentPage} />;
      case 'service-management':
        return <ServiceDetail type="management" onNavigate={setCurrentPage} />;
      case 'destination-casablanca':
        return <DestinationDetail city="casablanca" onNavigate={setCurrentPage} />;
      case 'destination-marrakech':
        return <DestinationDetail city="marrakech" onNavigate={setCurrentPage} />;
      case 'destination-essaouira':
        return <DestinationDetail city="essaouira" onNavigate={setCurrentPage} />;
      case 'promoter-lp':
        return <PromoterLP onNavigate={setCurrentPage} />;
      case 'booking':
        return <BookingPage onNavigate={setCurrentPage} />;
      case 'home':
      default:
        return (
          <main>


            <Hero onNavigate={setCurrentPage} />
            
            {/* 
                Container for the rest of the page. 
                Removed solid bg and shadow to allow the "Destinations" section to show the fixed Hero image through transparency.
            */}
            <div className="relative z-20">
                <Destinations onNavigate={setCurrentPage} />
                <Services onNavigate={setCurrentPage} />
                <Roadmap />
                <Partners onNavigate={setCurrentPage} />
                <DueDiligence />
                <BuyersAdvantage onNavigate={setCurrentPage} />
                <NetworkTransitionSection />
                <ExpertEcosystem />
                <TransmissionNote />
                <Concierge />
                <TransitionSection />
                <StickyBottomBar onNavigate={setCurrentPage} />
            </div>
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background-light overflow-x-hidden flex flex-col justify-between">
      <Header onNavigate={setCurrentPage} />
      {renderContent()}
      {currentPage !== 'booking' && currentPage !== 'promoter-lp' && <Footer onNavigate={setCurrentPage} showCta={true} />}
      <GeminiAdvisor onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;