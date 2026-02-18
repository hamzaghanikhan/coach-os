import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import IncomeTrapSection from './components/IncomeTrapSection';
import ExpandedProblemSection from './components/ExpandedProblemSection';
import IntroducingSection from './components/IntroducingSection';
import PricingSection from './components/PricingSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import MediaPage from './pages/MediaPage';
import ChallengesPage from './pages/ChallengesPage';
import AuditPage from './pages/AuditPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <IncomeTrapSection />
      <ExpandedProblemSection />
      <IntroducingSection />
      <PricingSection />
      <HowWeWorkSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/media" element={<MediaPage />} />
        <Route path="/services/challenges" element={<ChallengesPage />} />
        <Route path="/services/audit" element={<AuditPage />} />
      </Routes>
    </BrowserRouter>
  );
}
