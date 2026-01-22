
// import React from 'react';

// interface FooterProps {
//   onNavigate: (view: 'home' | 'contact') => void;
// }

// const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
//   const sections = [
//     {
//       title: 'Platform',
//       links: ['Admins', 'Teachers', 'Students']
//     },
//     {
//       title: 'Company',
//       links: ['About', 'Careers', 'Newsroom']
//     },
//     {
//       title: 'Support',
//       links: ['Help Center', 'API Docs', 'Security']
//     },
//     {
//       title: 'Legal',
//       links: ['Privacy', 'Terms', 'GDPR']
//     }
//   ];

//   return (
//     <footer className="bg-white pt-24 pb-12">
//       <div className="max-w-[1400px] mx-auto px-8">
//         <div className="grid grid-cols-12 gap-16 mb-24">
//           <div className="col-span-12 lg:col-span-4 space-y-8">
//             <div 
//               className="flex items-center gap-2 cursor-pointer"
//               onClick={() => onNavigate('home')}
//             >
//               <div className="bg-navy-custom p-1.5 rounded-lg">
//                 <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 48 48">
//                   <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"></path>
//                 </svg>
//               </div>
//               <span className="text-xl font-extrabold tracking-tighter text-navy-custom">LetUIC</span>
//             </div>
//             <p className="text-navy-custom/40 text-lg leading-relaxed max-w-sm">Leading the next generation of educational intelligence through connected platforms.</p>
//           </div>
          
//           <div className="col-span-12 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
//             {sections.map((section) => (
//               <div key={section.title}>
//                 <h4 className="text-[10px] font-bold uppercase tracking-widest text-navy-custom/30 mb-8">{section.title}</h4>
//                 <ul className="space-y-4 text-sm font-bold text-navy-custom/60">
//                   {section.links.map((link) => (
//                     <li key={link}><a className="hover:text-navy-custom transition-colors" href="#">{link}</a></li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
//           <p className="text-[10px] font-bold text-navy-custom/20 uppercase tracking-widest">© 2026 LetUIC Inc.</p>
//           <div className="flex gap-8 text-[10px] font-bold text-navy-custom/40 uppercase tracking-widest">
//             {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
//               <a key={social} className="hover:text-navy-custom transition-colors" href="#">{social}</a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import LogoSec from "@/components/assets/logo.svg?react";

interface FooterProps {
  onNavigate: (view: 'home' | 'contact') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const sections = [
    {
      title: 'Platform',
      links: ['Admins', 'Teachers', 'Students'],
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Newsroom'],
    },
    {
      title: 'Support',
      links: ['Help Center', 'API Docs', 'Security'],
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'GDPR'],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 pt-20 pb-10">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

          {/* BRAND COLUMN */}
          <div className="lg:col-span-4 space-y-6">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 w-fit"
            >
              <LogoSec className="w-28 h-8 text-navy-custom" />
            </button>

            <p className="text-navy-custom/40 text-base leading-relaxed max-w-sm">
              Leading the next generation of educational intelligence through
              connected platforms.
            </p>
          </div>

          {/* LINKS GRID */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-12">
              {sections.map(section => (
                <div key={section.title}>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-navy-custom/30 mb-5">
                    {section.title}
                  </h4>

                  <ul className="space-y-3">
                    {section.links.map(link => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm font-bold text-navy-custom/60 hover:text-navy-custom transition-colors block"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-navy-custom/20 uppercase tracking-[0.35em]">
            © 2026 LetUIC Inc.
          </p>

          <div className="flex gap-6 text-[10px] font-bold text-navy-custom/40 uppercase tracking-[0.35em]">
            {['LinkedIn', 'Twitter', 'Instagram'].map(social => (
              <a
                key={social}
                href="#"
                className="hover:text-navy-custom transition-colors"
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
