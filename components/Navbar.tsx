
import React from 'react';
import LogoSec from "@/components/assets/logo.svg?react";


interface NavbarProps {
  onNavigate: (view: 'home' | 'contact') => void;
  currentView: 'home' | 'contact';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (currentView !== 'home') {
      onNavigate('home');
      // Delay to allow DOM to render home sections before scrolling
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 z-[100] w-full bg-apple-grey/70 backdrop-blur-2xl border-b border-gray-200/30 py-4">
      <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <div className="p-1.5">
            {/* <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 48 48">
              <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"></path>
            </svg>

            <img src="icons/logo-sec.svg" className="w-10 h-10" alt="icon" />

                <LogoSec className="w-10 h-10 text-primary" />
            <LogoSec className="h-10 text-white" /> */}

              <LogoSec className="w-40 h-12 text-white" />

          </div>
          {/* <span className="text-xl font-extrabold tracking-tighter text-navy-custom">Letuic</span> */}
        </div>
        
        <nav className="hidden lg:flex items-center gap-8">
          {[
            { label: 'Home', id: 'platform' },
            { label: 'Features', id: 'ecosystem' },
            { label: 'Methodology', id: 'solutions' },
            // { label: 'Security', id: 'security' }
          ].map((item) => (
            <a 
              key={item.label} 
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-sm font-bold transition-colors ${currentView === 'home' ? 'text-navy-custom/50 hover:text-navy-custom' : 'text-navy-custom/30 hover:text-navy-custom'}`}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={() => onNavigate('contact')}
            className={`text-sm font-bold transition-colors ${currentView === 'contact' ? 'text-navy-custom' : 'text-navy-custom/50 hover:text-navy-custom'}`}
          >
            Contact
          </button>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="text-sm font-bold text-navy-custom/80 mr-4">Sign In</button>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-navy-custom text-white px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-navy-custom/10"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
