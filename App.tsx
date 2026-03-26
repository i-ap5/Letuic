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
import Careers from './components/Careers';
import JobDetails from './components/JobDetails';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import NotFound from './components/NotFound';

const AppContent: React.FC = () => {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const currentView = location.pathname.includes('/community')
    ? 'community'
    : location.pathname.includes('/contact')
      ? 'contact'
      : location.pathname.includes('/careers')
        ? 'careers'
        : location.pathname.includes('/blog')
          ? 'blog'
          : 'home';

  const handleNavigate = (view: 'home' | 'contact' | 'community' | 'careers' | 'blog') => {
    if (view === 'home') navigate('/');
    else if (view === 'contact') navigate('/contact');
    else if (view === 'community') navigate('/community');
    else if (view === 'careers') navigate('/careers');
    else if (view === 'blog') navigate('/blog');
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const baseUrl = 'https://letuic.com';
    const canonicalUrl = `${baseUrl}${location.pathname === '/' ? '' : location.pathname}`;

    // Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Update OG URL
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

    // Dynamic SEO Metadata for current page
    const metaDescription = document.querySelector('meta[name="description"]');
    if (currentView === 'home') {
      document.title = 'Letuic | Modern EdTech Hub - Empowering Learning Ecosystems';
      const desc = 'Letuic is a premium EdTech platform providing students and educators with modern digital learning tools, collaborative workspaces, and career opportunities.';
      if (metaDescription) metaDescription.setAttribute('content', desc);
    } else if (currentView === 'community') {
      document.title = 'Letuic Community | Connect & Learn - Collaborative EdTech and Learning';
      const desc = 'Join the Letuic Community. Collaborate with educators, students, and institutions driving the future of learning with modern digital tools.';
      if (metaDescription) metaDescription.setAttribute('content', desc);
    } else if (currentView === 'contact') {
      document.title = 'Contact Letuic | Enterprise EdTech - Get in Touch';
      const desc = 'Get in touch with Letuic to bring modern digital learning tools to your educational institution. We help scale learning ecosystems.';
      if (metaDescription) metaDescription.setAttribute('content', desc);
    } else if (currentView === 'careers') {
      document.title = 'Careers at Letuic | Build the Future of EdTech';
      const desc = 'Join the Letuic team and build the future of educational technology. Explore open roles in product, engineering, and growth.';
      if (metaDescription) metaDescription.setAttribute('content', desc);
    } else if (currentView === 'blog') {
      if (location.pathname === '/blog') {
        document.title = 'Letuic Blog | Edu-Insights & Innovation';
        const desc = 'Explore the latest insights on educational technology, student success stories, and platform updates from the Letuic team.';
        if (metaDescription) metaDescription.setAttribute('content', desc);
      }
    } else {
      document.title = '404 | Page Not Found - Letuic';
      if (metaDescription) metaDescription.setAttribute('content', 'The page you are looking for does not exist in the Letuic ecosystem.');
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
          <Route path="/careers" element={<Careers onNavigate={handleNavigate} />} />
          <Route path="/careers/:slug" element={<JobDetails onNavigate={handleNavigate} />} />
          <Route path="/blog" element={<Blog onNavigate={handleNavigate} />} />
          <Route path="/blog/:slug" element={<BlogPost onNavigate={handleNavigate} />} />
          <Route path="*" element={<NotFound />} />
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
