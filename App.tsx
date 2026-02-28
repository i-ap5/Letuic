import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AssistantModal from './components/AssistantModal';
import Contact from './components/Contact';
import Community from './components/Community';

const AppContent: React.FC = () => {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const currentView = location.pathname.includes('/community')
    ? 'community'
    : location.pathname.includes('/contact')
      ? 'contact'
      : 'home';

  const handleNavigate = (view: 'home' | 'contact' | 'community') => {
    if (view === 'home') navigate('/');
    else if (view === 'contact') navigate('/contact');
    else if (view === 'community') navigate('/community');
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Dynamic SEO Metadata for current page
    const metaDescription = document.querySelector('meta[name="description"]');
    if (currentView === 'home') {
      document.title = 'Letuic | Modern EdTech Hub';
      if (metaDescription) metaDescription.setAttribute('content', 'Letuic is an EdTech platform helping students and educators learn, teach, and collaborate using powerful digital tools.');
    } else if (currentView === 'community') {
      document.title = 'Letuic Community | Connect & Learn';
      if (metaDescription) metaDescription.setAttribute('content', 'Join the Letuic Community. Collaborate with educators, students, and institutions driving the future of learning.');
    } else if (currentView === 'contact') {
      document.title = 'Contact Letuic | Enterprise EdTech';
      if (metaDescription) metaDescription.setAttribute('content', 'Get in touch with Letuic to bring modern digital learning tools to your educational institution today.');
    }
  }, [location.pathname, currentView]);

  useEffect(() => {
    // Scroll Reveal Observer
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]); // Re-observe when view changes

  return (
    <div className={`min-h-screen selection:bg-primary/30 overflow-x-hidden ${currentView === 'community' ? 'bg-navy-custom' : 'bg-white'}`}>
      <Navbar onNavigate={handleNavigate} currentView={currentView} />

      <main>
        <Routes>
          <Route path="/" element={
            <>
              <div id="platform">
                <Hero
                  onOpenAssistant={() => setIsAssistantOpen(true)}
                  onNavigate={handleNavigate}
                />
              </div>

              <div id="ecosystem" className="scroll-mt-32">
                <BentoGrid onNavigate={handleNavigate} />
              </div>

              <div id="solutions" className="scroll-mt-32">
                <HowItWorks />
              </div>

              <div id="security" className="reveal scroll-mt-32">
                <CTA onNavigate={handleNavigate} />
              </div>
            </>
          } />

          <Route path="/community" element={<Community onNavigate={handleNavigate} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer onNavigate={handleNavigate} currentView={currentView} />

      <AssistantModal
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
      />

      {/* Floating Action Button for AI Assistant */}
      <button
        onClick={() => setIsAssistantOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-navy-custom text-primary p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping group-hover:animate-none"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
      </button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
