import React, { useState, useEffect } from 'react';
import LogoSec from "@/components/assets/logo.svg?react";
import LogoWhite from "@/components/assets/logo_w.svg?react";

interface NavbarProps {
  onNavigate: (view: 'home' | 'contact' | 'community') => void;
  currentView: 'home' | 'contact' | 'community';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Determine Logo and Theme: Always White/Green on Community, Switch on Scroll for others
  const isCommunity = currentView === 'community';
  const useWhiteLogo = isCommunity;
  const BrandLogo = useWhiteLogo ? LogoWhite : LogoSec;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { label: 'Platform', id: 'platform' },
    { label: 'Ecosystem', id: 'ecosystem' },
    { label: 'Methodology', id: 'solutions' },
  ];

  const handleNav = (id: string) => {
    setIsOpen(false);
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. THE INDEPENDENT TOGGLE 
          Moved out of the capsule so it's never trapped behind the menu 
      */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-8 right-8 md:right-12 z-[999] lg:hidden flex flex-col gap-1.5 p-3 text-navy-custom transition-all duration-500 ${isOpen ? 'scale-110' : 'scale-100'
          }`}
        aria-label="Toggle menu"
      >
        <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
        <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* 2. THE CAPSULE NAVBAR */}
      <div className={`fixed top-0 left-0 right-0 z-[500] flex justify-center p-4 md:p-6 transition-transform duration-700 ${isOpen ? '-translate-y-24' : 'translate-y-0'}`}>
        <header
          className={`
            flex items-center justify-between transition-all duration-700 ease-in-out px-6 md:px-8
            ${isScrolled
              ? `w-full max-w-[900px] h-14 rounded-2xl backdrop-blur-2xl border shadow-sm ${isCommunity ? 'bg-navy-custom/20 border-white/10' : 'bg-white/70 border-white/40'}`
              : 'w-full max-w-[1340px] h-16 rounded-none bg-transparent border-transparent'
            }
          `}
        >
          {/* Logo Container for styling stability */}
          <div
            className="relative w-28 md:w-36 h-8 cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <BrandLogo
              className={`absolute inset-0 size-full transition-colors duration-500 ${useWhiteLogo ? 'text-white' : 'text-navy-custom'
                }`}
            />
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${currentView === 'community' ? 'text-white/60 hover:text-white' : 'text-navy-custom/30 hover:text-navy-custom'}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Updated Contact Button Logic */}
            <button
              onClick={() => onNavigate('contact')}
              className={`${useWhiteLogo ? 'bg-primary text-navy-custom shadow-primary/20' : 'bg-navy-custom text-white shadow-navy-custom/10'} px-5 py-2 rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-lg hover:scale-105 transition-all duration-300`}
            >
              Contact
            </button>
            {/* Empty space to account for where the floating burger sits visually */}
            <div className="w-8 lg:hidden" />
          </div>
        </header>
      </div>

      {/* 3. FULL SCREEN REVEAL */}
      <div
        className={`fixed inset-0 z-[800] lg:hidden transition-all duration-700 ease-in-out
          ${isOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'}`}
      >
        {/* Background Morph */}
        <div className={`absolute inset-0 bg-white transition-transform duration-700 ${isOpen ? 'scale-100' : 'scale-110'}`} />

        <div className="relative h-full flex flex-col justify-center items-center px-10">
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link, i) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`text-4xl font-black tracking-tighter text-navy-custom transition-all duration-700
                  ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => { onNavigate('contact'); setIsOpen(false); }}
              className={`text-4xl font-black tracking-tighter text-primary transition-all duration-700 delay-300
                ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;