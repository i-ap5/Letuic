
// import React from 'react';
// import LogoSec from "@/components/assets/logo.svg?react";


// interface NavbarProps {
//   onNavigate: (view: 'home' | 'contact') => void;
//   currentView: 'home' | 'contact';
// }

// const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
//   const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
//     if (currentView !== 'home') {
//       onNavigate('home');
//       // Delay to allow DOM to render home sections before scrolling
//       setTimeout(() => {
//         document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//       }, 100);
//     } else {
//       e.preventDefault();
//       document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <header className="fixed top-0 z-[100] w-full bg-apple-grey/70 backdrop-blur-2xl border-b border-gray-200/30 py-4">
//       <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
//         <div 
//           className="flex items-center gap-2 cursor-pointer" 
//           onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
//         >
//           <div className="p-1.5">
//             {/* <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 48 48">
//               <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"></path>
//             </svg>

//             <img src="icons/logo-sec.svg" className="w-10 h-10" alt="icon" />

//                 <LogoSec className="w-10 h-10 text-primary" />
//             <LogoSec className="h-10 text-white" /> */}

//               <LogoSec className="w-40 h-10 text-white" />

//           </div>
//           {/* <span className="text-xl font-extrabold tracking-tighter text-navy-custom">Letuic</span> */}
//         </div>
        
//         <nav className="hidden lg:flex items-center gap-8">
//           {[
//             { label: 'Home', id: 'platform' },
//             { label: 'Features', id: 'ecosystem' },
//             { label: 'Methodology', id: 'solutions' },
//             // { label: 'Security', id: 'security' }
//           ].map((item) => (
//             <a 
//               key={item.label} 
//               href={`#${item.id}`}
//               onClick={(e) => handleNavClick(e, item.id)}
//               className={`text-sm font-bold transition-colors ${currentView === 'home' ? 'text-navy-custom/50 hover:text-navy-custom' : 'text-navy-custom/30 hover:text-navy-custom'}`}
//             >
//               {item.label}
//             </a>
//           ))}
//           <button 
//             onClick={() => onNavigate('contact')}
//             className={`text-sm font-bold transition-colors ${currentView === 'contact' ? 'text-navy-custom' : 'text-navy-custom/50 hover:text-navy-custom'}`}
//           >
//             Contact
//           </button>
//         </nav>
        
//         <div className="flex items-center gap-4">
//           <button className="text-sm font-bold text-navy-custom/80 mr-4">Sign In</button>
//           <button 
//             onClick={() => onNavigate('contact')}
//             className="bg-navy-custom text-white px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-navy-custom/10"
//           >
//             Get Started
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import LogoSec from "@/components/assets/logo.svg?react";

interface NavbarProps {
  onNavigate: (view: 'home' | 'contact') => void;
  currentView: 'home' | 'contact';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
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
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* CAPSULE WRAPPER */}
      <div className="fixed top-0 left-0 right-0 z-[500] flex justify-center p-4 md:p-6 pointer-events-none">
        <header 
          className={`
            pointer-events-auto flex items-center justify-between
            transition-all duration-700 ease-in-out px-6 md:px-8
            ${isScrolled 
              ? 'w-full max-w-[900px] h-14 rounded-2xl bg-white/70 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)]' 
              : 'w-full max-w-[1340px] h-16 rounded-none bg-transparent'
            }
          `}
        >
          {/* LOGO */}
          <LogoSec 
            className="w-28 md:w-36 h-8 cursor-pointer text-navy-custom transition-all duration-500 hover:opacity-70" 
            onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }} 
          />

          {/* DESKTOP LINKS */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => handleNav(link.id)}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-navy-custom/30 hover:text-navy-custom transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-navy-custom text-white px-5 py-2 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-primary hover:text-navy-custom transition-all duration-300 shadow-lg shadow-navy-custom/10"
            >
              Contact
            </button>

            {/* HAMBURGER (Stays inside the capsule) */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden flex flex-col gap-1.5 p-2 text-navy-custom relative z-[600]"
            >
              <span className={`h-0.5 w-5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-5 bg-current transition-all ${isOpen ? 'opacity-0 scale-0' : ''}`}></span>
              <span className={`h-0.5 w-5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </header>
      </div>

      {/* FULL SCREEN REVEAL MENU (Prevents Section Breaking) */}
      <div className={`fixed inset-0 z-[550] lg:hidden transition-all duration-700 ${isOpen ? 'visible' : 'invisible pointer-events-none'}`}>
        {/* Background Morph */}
        <div className={`absolute inset-0 bg-white transition-all duration-700 ease-expo ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`} />
        
        {/* Menu Content */}
        <div className="relative h-full flex flex-col justify-center items-center px-10">
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link, i) => (
              <button 
                key={link.id} 
                onClick={() => handleNav(link.id)}
                className={`text-4xl font-black text-navy-custom tracking-tighter transition-all duration-700 delay-[${i * 100}ms] ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => { onNavigate('contact'); setIsOpen(false); }}
              className={`text-4xl font-black text-primary tracking-tighter transition-all duration-700 delay-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              Contact
            </button>
          </div>

          <div className="absolute bottom-20 text-center">
             <p className="text-[10px] font-black uppercase tracking-[0.5em] text-navy-custom/20">Institutional Access v4.0</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;