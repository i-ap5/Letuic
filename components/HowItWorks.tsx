
// import React from 'react';

// const steps = [
//   {
//     num: '01',
//     title: 'Precision Deployment',
//     tag: 'Academic Sync',
//     description: 'Faculty deploy syllabus-aligned materials chapter-by-chapter. Seamless syncing ensures students are on the same page instantly.'
//   },
//   {
//     num: '02',
//     title: 'Reactive Alerts',
//     tag: 'Neural Alerts',
//     description: 'Attendance triggers real-time parent notifications. Every assessment initiates a deep-dive fidelity analysis automatically.'
//   },
//   {
//     num: '03',
//     title: 'Knowledge Synthesis',
//     tag: 'Community Hub',
//     description: 'Students shift from passive consumers to active knowledge creators. Collaborative forums foster a digital campus culture.'
//   }
// ];

// const HowItWorks: React.FC = () => {
//   return (
//     <section className="container max-w-[1400px] mx-auto px-6 mb-40">
//       <div className="flex flex-col items-center text-center mb-32 reveal">
//         <div className="px-6 py-2 rounded-full bg-navy-custom/5 border border-navy-custom/10 text-[10px] font-black uppercase tracking-[0.4em] text-navy-custom mb-10">The Methodology</div>
//         <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-navy-custom leading-[0.9] mb-10">Orchestrated <br/>Efficiency.</h2>
//         <p className="text-l md:text-xl text-navy-custom/40 font-medium max-w-2xl leading-relaxed">A refined three-step methodology designed to bridge the gap between institutional management and home-life.</p>
//       </div>
      
//       <div className="relative">
//         {/* Connection Path Line - Desktop only */}
//         <div className="absolute top-[50%] left-[10%] right-[10%] h-[1.5px] bg-gradient-to-r from-transparent via-navy-custom/5 to-transparent hidden lg:block -translate-y-1/2"></div>
        
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
//           {steps.map((step, i) => (
//             <div key={step.num} className={`group relative flex flex-col items-center reveal-scale`} style={{ transitionDelay: `${i * 0.2}s` }}>
              
//               <div className="bg-white rounded-apple p-12 shadow-sm border border-gray-100 flex flex-col items-center text-center group-hover:shadow-premium group-hover:border-navy-custom/5 transition-all duration-700 flex-1 hover:-translate-y-4 relative overflow-hidden">
//                  {/* Integrated Integrated Step Number Background */}
//                  <div className="absolute -top-10 -right-10 p-10 text-[180px] font-black text-navy-custom/[0.02] select-none pointer-events-none group-hover:text-primary/5 transition-colors leading-none">
//                     {step.num}
//                  </div>
                 
//                  <div className="flex items-center gap-4 mb-12 relative z-10 w-full justify-center">
//                     <div className="size-12 rounded-2xl bg-navy-custom flex items-center justify-center text-primary shadow-xl group-hover:rotate-12 transition-all duration-500">
//                        <span className="text-sm font-black">{step.num}</span>
//                     </div>
//                     <div className="px-4 py-2 rounded-full bg-apple-grey text-[10px] font-black uppercase tracking-[0.2em] text-navy-custom/30 group-hover:bg-primary group-hover:text-navy-custom transition-all">
//                        {step.tag}
//                     </div>
//                  </div>
                 
//                  <div className="size-16 bg-apple-grey rounded-2xl flex items-center justify-center text-navy-custom/40 mb-10 group-hover:bg-navy-custom group-hover:text-primary transition-all duration-500 relative z-10">
//                     {i === 0 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>}
//                     {i === 1 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>}
//                     {i === 2 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
//                  </div>
                 
//                  <h3 className="text-3xl font-extrabold mb-6 text-navy-custom tracking-tight leading-tight z-10">{step.title}</h3>
//                  <p className="text-navy-custom/50 text-lg leading-relaxed font-medium max-w-[280px] z-10">{step.description}</p>
                 
//                  <div className="mt-14 w-8 h-[2px] bg-navy-custom/5 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-1000"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* Branding for Workflow */}
//       <div className="mt-32 flex justify-center reveal">
//          <div className="flex items-center gap-4 group cursor-default">
//             <div className="size-2 bg-navy-custom rounded-full animate-pulse group-hover:bg-primary transition-colors"></div>
//             <span className="text-[10px] font-black uppercase tracking-[0.6em] text-navy-custom/10 group-hover:text-navy-custom/40 transition-colors">LetUIC Core Workflow</span>
//          </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;
import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Precision Deployment',
    tag: 'Academic Sync',
    description: 'Faculty deploy syllabus-aligned materials chapter-by-chapter. Seamless syncing ensures students are on the same page instantly.'
  },
  {
    num: '02',
    title: 'Reactive Alerts',
    tag: 'Neural Alerts',
    description: 'Attendance triggers real-time parent notifications. Every assessment initiates a deep-dive fidelity analysis automatically.'
  },
  {
    num: '03',
    title: 'Knowledge Synthesis',
    tag: 'Community Hub',
    description: 'Students shift from passive consumers to active knowledge creators. Collaborative forums foster a digital campus culture.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    /* Reduced container max-width and margins */
    <section className="container max-w-[1280px] mx-auto px-6 mb-32">
      
      {/* Reduced bottom margin from mb-32 to mb-20 */}
      <div className="flex flex-col items-center text-center mb-20 reveal">
        <div className="px-5 py-1.5 rounded-full bg-navy-custom/5 border border-navy-custom/10 text-[9px] font-black uppercase tracking-[0.4em] text-navy-custom mb-8">
          The Methodology
        </div>
        {/* Condensed heading scale from text-8xl to text-5xl/text-6xl */}
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-navy-custom leading-[0.95] mb-6">
          Orchestrated <br/>Efficiency.
        </h2>
        <p className="text-base md:text-lg text-navy-custom/40 font-medium max-w-xl leading-relaxed">
          A refined three-step methodology designed to bridge the gap between institutional management and home-life.
        </p>
      </div>
      
      <div className="relative">
        {/* Connection Path Line */}
        <div className="absolute top-[50%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-navy-custom/5 to-transparent hidden lg:block -translate-y-1/2"></div>
        
        {/* Reduced gap from 12 to 6 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
          {steps.map((step, i) => (
            <div key={step.num} className="group relative flex flex-col items-center reveal-scale" style={{ transitionDelay: `${i * 0.2}s` }}>
              
              {/* Reduced padding from p-12 to p-10 and tighter border-radius */}
              <div className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center group-hover:shadow-premium group-hover:border-navy-custom/5 transition-all duration-700 flex-1 hover:-translate-y-2 relative overflow-hidden">
                 
                 {/* Integrated Step Number Background - Scaled down from 180px to 140px */}
                 <div className="absolute -top-6 -right-6 p-6 text-[140px] font-black text-navy-custom/[0.02] select-none pointer-events-none group-hover:text-primary/5 transition-colors leading-none">
                    {step.num}
                 </div>
                 
                 {/* Header area - Reduced mb from 12 to 8 */}
                 <div className="flex items-center gap-3 mb-8 relative z-10 w-full justify-center">
                    <div className="size-10 rounded-xl bg-navy-custom flex items-center justify-center text-primary shadow-lg group-hover:rotate-12 transition-all duration-500">
                       <span className="text-xs font-black">{step.num}</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-apple-grey text-[9px] font-black uppercase tracking-[0.2em] text-navy-custom/30 group-hover:bg-primary group-hover:text-navy-custom transition-all">
                       {step.tag}
                    </div>
                 </div>
                 
                 {/* Icon - Reduced size from 16 to 14 and mb from 10 to 8 */}
                 <div className="size-14 bg-apple-grey rounded-2xl flex items-center justify-center text-navy-custom/40 mb-8 group-hover:bg-navy-custom group-hover:text-primary transition-all duration-500 relative z-10">
                    {i === 0 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>}
                    {i === 1 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>}
                    {i === 2 && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
                 </div>
                 
                 {/* Text content - Reduced h3 from 3xl to 2xl and body to base */}
                 <h3 className="text-2xl font-extrabold mb-4 text-navy-custom tracking-tight leading-tight z-10">
                   {step.title}
                 </h3>
                 <p className="text-navy-custom/50 text-base leading-relaxed font-medium max-w-[260px] z-10">
                   {step.description}
                 </p>
                 
                 {/* Interaction Line - Tighter margin */}
                 <div className="mt-10 w-6 h-[1.5px] bg-navy-custom/5 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-1000"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Branding - Reduced margin from 32 to 20 */}
      <div className="mt-20 flex justify-center reveal">
         <div className="flex items-center gap-4 group cursor-default">
            <div className="size-1.5 bg-navy-custom rounded-full animate-pulse group-hover:bg-primary transition-colors"></div>
            <span className="text-[9px] font-black uppercase tracking-[0.6em] text-navy-custom/10 group-hover:text-navy-custom/40 transition-colors">
              LetUIC Core Workflow
            </span>
         </div>
      </div>
    </section>
  );
};

export default HowItWorks;