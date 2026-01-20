
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AssistantModal from './components/AssistantModal';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'contact'>('home');

  useEffect(() => {
    // Scroll Reveal Observer
    const observerOptions = {
      threshold: 0.15,
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
  }, [currentView]); // Re-observe when view changes

  return (
    <div className="min-h-screen selection:bg-primary/30">
      <Navbar onNavigate={(view) => setCurrentView(view)} currentView={currentView} />
      
      <main className="pt-2">
        {currentView === 'home' ? (
          <>
            <div id="platform">
              <Hero onOpenAssistant={() => setIsAssistantOpen(true)} />
            </div>
            
            <div id="ecosystem" className="scroll-mt-32">
              <BentoGrid />
            </div>
            
            <div id="solutions" className="scroll-mt-32">
              <HowItWorks />
            </div>
            
            <div id="security" className="reveal scroll-mt-32">
              <CTA />
            </div>
          </>
        ) : (
          <Contact />
        )}
      </main>

      <Footer onNavigate={(view) => setCurrentView(view)} />

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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
      </button>
    </div>
  );
};

export default App;
