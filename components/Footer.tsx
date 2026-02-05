import React from 'react';
import LogoSec from "@/components/assets/logo.svg?react";
import LogoWhite from "@/components/assets/logo_w.svg?react";

interface FooterProps {
  onNavigate: (view: 'home' | 'contact' | 'community') => void;
  currentView: 'home' | 'contact' | 'community';
}

const Footer: React.FC<FooterProps> = ({ onNavigate, currentView }) => {
  const isDark = currentView === 'community'
    ;
  const BrandLogo = isDark ? LogoWhite : LogoSec;

  const socials = [
    { name: 'LinkedIn', href: '#', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
    { name: 'Twitter', href: '#', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
    { name: 'Instagram', href: '#', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg> },
  ];

  const navLinks = [
    { label: 'Home', action: () => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
    {
      label: 'Community', action: () => {
        onNavigate('community');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    { label: 'Contact', action: () => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); } },
  ];

  return (
    <footer className={`relative overflow-hidden transition-colors duration-500 ${isDark ? 'bg-navy-custom' : 'bg-[#FAFAFA]'}`}>

      {/* Subtle top border */}
      <div className={`absolute top-0 left-0 right-0 h-px ${isDark ? 'bg-white/10' : 'bg-navy-custom/5'}`} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8">

        {/* Main Content */}
        <div className="py-12 md:py-16">

          {/* Mobile Layout - Clean & Centered */}
          <div className="md:hidden text-center">
            {/* Logo */}
            <button
              onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-block mb-5"
            >
              <BrandLogo className={`w-24 h-6 ${isDark ? 'text-white' : 'text-navy-custom'}`} />
            </button>

            {/* Tagline */}
            <p className={`text-[13px] leading-relaxed max-w-[260px] mx-auto mb-8 ${isDark ? 'text-white/50' : 'text-navy-custom/50'}`}>
              The future of educational intelligence.
            </p>

            {/* Navigation Links - Horizontal */}
            <div className="flex justify-center gap-6 mb-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={link.action}
                  className={`text-sm font-bold transition-colors ${isDark
                    ? 'text-white/70 hover:text-primary'
                    : 'text-navy-custom/70 hover:text-primary'
                    }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Email */}
            <a
              href="mailto:info@letuic.com"
              className={`inline-block text-sm font-bold mb-8 transition-colors ${isDark ? 'text-white hover:text-primary' : 'text-navy-custom hover:text-primary'}`}
            >
              info@letuic.com
            </a>

            {/* Social Icons */}
            <div className="flex justify-center gap-3 mb-8">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className={`size-10 rounded-full flex items-center justify-center transition-all hover:scale-110 ${isDark
                    ? 'bg-white/10 text-white/60 hover:bg-primary hover:text-navy-custom'
                    : 'bg-navy-custom/5 text-navy-custom/50 hover:bg-navy-custom hover:text-white'
                    }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className={`h-px w-12 mx-auto mb-6 ${isDark ? 'bg-white/10' : 'bg-navy-custom/10'}`} />

            {/* Copyright */}
            <p className={`text-[11px] font-medium ${isDark ? 'text-white/40' : 'text-navy-custom/40'}`}>
              Let your Intelligence Collaborate.
            </p>
          </div>

          {/* Desktop Layout - Professional Grid */}
          <div className="hidden md:grid md:grid-cols-12 gap-8 items-start">
            {/* Brand Column */}
            <div className="col-span-5">
              <button
                onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="group mb-5"
              >
                <BrandLogo className={`w-28 h-7 group-hover:opacity-70 transition-opacity ${isDark ? 'text-white' : 'text-navy-custom'}`} />
              </button>
              <p className={`text-sm leading-relaxed max-w-[300px] mb-6 ${isDark ? 'text-white/50' : 'text-navy-custom/50'}`}>
                Leading the next generation of educational intelligence. Connected. Secure. Smart.
              </p>

              {/* Social Icons */}
              <div className="flex gap-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className={`size-9 rounded-lg flex items-center justify-center transition-all hover:scale-110 ${isDark
                      ? 'bg-white/5 text-white/50 hover:bg-primary hover:text-navy-custom'
                      : 'bg-navy-custom/5 text-navy-custom/40 hover:bg-navy-custom hover:text-white'
                      }`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Column */}
            <div className="col-span-3">
              <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] mb-5 ${isDark ? 'text-white/30' : 'text-navy-custom/30'}`}>
                Explore
              </h4>
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={link.action}
                    className={`block text-sm font-medium transition-colors ${isDark ? 'text-white/60 hover:text-white' : 'text-navy-custom/60 hover:text-navy-custom'}`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Column */}
            <div className="col-span-4">
              <h4 className={`text-[10px] font-black uppercase tracking-[0.2em] mb-5 ${isDark ? 'text-white/30' : 'text-navy-custom/30'}`}>
                Get in Touch
              </h4>
              <a
                href="mailto:info@letuic.com"
                className={`text-base font-bold hover:text-primary transition-colors block mb-5 ${isDark ? 'text-white' : 'text-navy-custom'}`}
              >
                info@letuic.com
              </a>
              <button
                onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`px-6 py-3 rounded-xl text-xs font-bold tracking-wide transition-all hover:scale-[1.02] ${isDark
                  ? 'bg-primary text-navy-custom hover:shadow-lg hover:shadow-primary/20'
                  : 'bg-navy-custom text-white hover:shadow-lg hover:shadow-navy-custom/20'
                  }`}
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`py-6 border-t ${isDark ? 'border-white/10' : 'border-navy-custom/5'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className={`text-xs font-medium ${isDark ? 'text-white/50' : 'text-navy-custom/40'}`}>
              © 2026 Letuic Inc. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className={`flex gap-6 text-xs font-medium ${isDark ? 'text-white/40' : 'text-navy-custom/40'}`}>
              {['Privacy', 'Terms'].map(item => (
                <a
                  key={item}
                  href="#"
                  className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-navy-custom'}`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
