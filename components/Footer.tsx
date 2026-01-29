import React from 'react';
import LogoSec from "@/components/assets/logo.svg?react";
import LogoWhite from "@/components/assets/logo_w.svg?react";

interface FooterProps {
  onNavigate: (view: 'home' | 'contact' | 'community') => void;
  currentView: 'home' | 'contact' | 'community';
}

const Footer: React.FC<FooterProps> = ({ onNavigate, currentView }) => {
  // Community view triggers dark mode for internal footer styling
  const isDark = currentView === 'community';
  const BrandLogo = isDark ? LogoWhite : LogoSec;

  return (
    <footer className={`border-t transition-colors duration-500 ${isDark ? 'bg-navy-custom border-white/5' : 'bg-white border-gray-100'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-16 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* 1. Brand */}
          <div className="flex flex-col items-start space-y-6">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group"
            >
              <BrandLogo className={`w-32 h-8 group-hover:scale-105 transition-transform ${isDark ? 'text-white' : 'text-navy-custom'}`} />
            </button>
            <p className={`text-sm leading-relaxed max-w-xs transition-colors ${isDark ? 'text-white/40' : 'text-navy-custom/40'}`}>
              Leading the next generation of educational intelligence. Connected. Secure. Smart.
            </p>
          </div>

          {/* 2. Navigation */}
          <div className="flex flex-col space-y-6">
            <h4 className={`text-[10px] font-black uppercase tracking-[0.25em] ${isDark ? 'text-white/30' : 'text-navy-custom/30'}`}>Explore</h4>
            <div className="flex flex-col space-y-3 items-start">
              <button
                onClick={() => { onNavigate('community'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`text-sm font-bold hover:text-primary transition-colors ${isDark ? 'text-white' : 'text-navy-custom'}`}
              >
                Community Hub
              </button>
              <button
                onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`text-sm font-bold hover:text-primary transition-colors ${isDark ? 'text-white' : 'text-navy-custom'}`}
              >
                Contact Sales
              </button>
              <a href="#" className={`text-sm font-bold hover:text-primary transition-colors ${isDark ? 'text-white' : 'text-navy-custom'}`}>Home</a>
            </div>
          </div>

          {/* 3. Contact & Socials */}
          <div className="flex flex-col space-y-6">
            <h4 className={`text-[10px] font-black uppercase tracking-[0.25em] ${isDark ? 'text-white/30' : 'text-navy-custom/30'}`}>Connect</h4>
            <div className="space-y-4">
              <a href="mailto:info@letuic.com" className={`text-lg font-bold hover:text-primary transition-colors block ${isDark ? 'text-white' : 'text-navy-custom'}`}>
                info@letuic.com
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 ${isDark ? 'border-white/5' : 'border-gray-100'}`}>
          <p className={`text-[10px] font-bold uppercase tracking-[0.35em] ${isDark ? 'text-white/20' : 'text-navy-custom/20'}`}>
            © 2026 Letuic Inc.
          </p>

          <div className={`flex gap-8 text-[10px] font-bold uppercase tracking-[0.35em] ${isDark ? 'text-white/40' : 'text-navy-custom/40'}`}>
            {['LinkedIn', 'Twitter', 'Instagram'].map(social => (
              <a
                key={social}
                href="#"
                className={`transition-colors transform hover:-translate-y-1 inline-block ${isDark ? 'hover:text-white' : 'hover:text-navy-custom'}`}
              >
                {social}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
