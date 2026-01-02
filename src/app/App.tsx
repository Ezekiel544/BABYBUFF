import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { AnnouncementBanner } from './components/AnnouncementBanner';
import { HeroSection } from './components/HeroSection';
import { BuyNowSection } from './components/BuyNowSection';
import { TaglineSection } from './components/TaglineSection';
import { AboutSection } from './components/AboutSection';
import { TokenomicsSection } from './components/TokenomicsSection';
import { RoadmapSection } from './components/RoadmapSection';
import { CommunitySection } from './components/CommunitySection';
import { NFTSection } from './components/NFTSection';
import { FAQSection } from './components/FAQSection';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { AnimatedBackground } from './components/AnimatedBackground';
import { LoadingScreen } from './components/LoadingScreen';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
    
      
      { (
        <div className="min-h-screen bg-[#0a0a0f] relative">
          {/* <AnimatedBackground /> */}
          {/* <AnnouncementBanner /> */}
          <Navbar />
          <main>
            <HeroSection />
            <BuyNowSection />
            <TaglineSection />
            <AboutSection />
            <TokenomicsSection />
            <RoadmapSection />
            <CommunitySection />
            <NFTSection />
            <FAQSection />
            <TeamSection />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </>
  );
}