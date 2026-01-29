
// import React from 'react';

// interface HeroProps {
//   onOpenAssistant: () => void;
// }

// const Hero: React.FC<HeroProps> = ({ onOpenAssistant }) => {
//   return (
//     <section className="relative min-h-screen flex flex-col bg-[#F8F9FA] overflow-hidden pt-24">
//       {/* Ultra-High-Fidelity Ambient Background */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {/* Soft Organic Orbs */}
//         <div className="absolute top-[-10%] left-[-5%] w-[70vw] h-[70vw] bg-primary/20 rounded-full blur-[160px] animate-pulse-glow"></div>
//         <div className="absolute bottom-[-5%] right-[-5%] w-[60vw] h-[60vw] bg-navy-custom/5 rounded-full blur-[140px]"></div>

//         {/* Subtle Geometric Pattern Overlay */}
//         <div className="absolute inset-0 opacity-[0.02]" style={{ 
//           backgroundImage: 'linear-gradient(#152328 1px, transparent 1px), linear-gradient(90deg, #152328 1px, transparent 1px)', 
//           backgroundSize: '80px 80px' 
//         }}></div>
//       </div>

//       {/* Spatial Awareness Widgets (Desktop Optimized) */}
//       <div className="absolute inset-0 pointer-events-none z-10 hidden xl:block">
//         {/* Real-time Logistics Widget */}
//         <div className="absolute top-[20%] left-[8%] animate-float-diagonal pointer-events-auto">
//           <div className="glass-card p-5 rounded-[32px] shadow-premium w-64 border border-white/80 group hover:scale-105 transition-all duration-1000 animate-slide-in-left opacity-0" style={{ animationDelay: '0.8s' }}>
//             <div className="flex items-center gap-4 mb-4">
//               <div className="size-11 bg-navy-custom rounded-2xl flex items-center justify-center text-primary shadow-lg group-hover:rotate-12 transition-transform">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
//               </div>
//               <div className="flex-1">
//                 <div className="text-[9px] font-black uppercase tracking-[0.25em] text-navy-custom/30">Fleet GPS</div>
//                 <div className="text-xs font-bold text-navy-custom">Bus 4A Arriving</div>
//               </div>
//             </div>
//             <div className="flex gap-1">
//                {[1,2,3,4,5].map(i => <div key={i} className={`h-1 flex-1 rounded-full ${i < 4 ? 'bg-primary' : 'bg-navy-custom/5'}`}></div>)}
//             </div>
//           </div>
//         </div>

//       {/* Faculty Node */}
//         <div className="absolute left-[8%] top-1/2 translate-y-[20px] animate-float-diagonal pointer-events-auto">
//           <div 
//             className="relative group animate-slide-in-left opacity-0" 
//             style={{ animationDelay: '0.9s' }} // Slightly after the GPS widget
//           >
//             {/* Connection Wire */}
//             <div className="absolute top-1/2 left-full w-32 h-[1px] bg-gradient-to-r from-navy-custom/20 to-transparent -z-10"></div>

//             <div className="size-32 rounded-full glass-card border border-white p-6 shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-700">
//               <div className="absolute inset-0 rounded-full border border-primary/40 animate-spin-slow opacity-50"></div>
//               <img
//                 src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Technologist.png"
//                 alt="Faculty"
//                 className="size-full object-contain drop-shadow-xl"
//               />
//             </div>

//             {/* Micro Badge */}
//             <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-navy-custom text-primary rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl">
//               Faculty Node
//             </div>
//           </div>
//         </div>


//                   {/* Learner Node */}
//         <div className="absolute top-[20%] right-[8%] animate-float-alt pointer-events-auto">
//           <div 
//             className="relative group animate-slide-in-right opacity-0" 
//             style={{ animationDelay: '1.1s' }} // Slightly after the Attendance widget
//           >
//             {/* Connection Wire Effect */}
//             <div className="absolute top-1/2 right-full w-32 h-[1px] bg-gradient-to-l from-navy-custom/20 to-transparent -z-10"></div>

//             <div className="size-32 rounded-full glass-card border border-white p-6 shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-700">
//               <div className="absolute inset-0 rounded-full border border-primary/40 animate-spin-slow-reverse opacity-50"></div>
//               <img 
//                 src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Student.png" 
//                 alt="Student" 
//                 className="size-full object-contain drop-shadow-xl" 
//               />
//             </div>

//             {/* Micro Badge */}
//             <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-navy-custom rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl">
//               Learner Node
//             </div>
//           </div>
//         </div>


//         {/* Neural Attendance Widget */}
//         <div className="absolute bottom-[30%] right-[8%] animate-float-alt pointer-events-auto">
//           <div className="glass-card p-6 rounded-[36px] shadow-premium w-72 border border-white/80 group hover:-translate-y-4 transition-all duration-1000 animate-slide-in-right opacity-0" style={{ animationDelay: '1s' }}>
//              <div className="flex justify-between items-center mb-6">
//                 <div>
//                   <div className="text-[9px] font-black uppercase tracking-[0.25em] text-navy-custom/30 mb-1">Campus Sync</div>
//                   <div className="text-2xl font-black text-navy-custom tracking-tighter leading-none">98.2%</div>
//                 </div>
//                 <div className="size-12 bg-primary/15 rounded-[20px] flex items-center justify-center text-navy-custom">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
//                 </div>
//              </div>
//              <div className="flex items-center gap-2">
//                 <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Parent Alerts Sent</span>
//                 <div className="flex-1 h-px bg-navy-custom/5"></div>
//              </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Hero Content */}
//       <div className="relative z-20 flex-1 flex flex-col items-center justify-center container max-w-[1400px] mx-auto px-6 text-center">
//         {/* Sophisticated Reveal Badge */}
//         <div className="inline-flex items-center gap-4 bg-white/40 backdrop-blur-2xl px-6 py-2 rounded-full shadow-sm border border-white/60 mb-12 animate-fade-up opacity-0">
//           <span className="relative flex h-2.5 w-2.5">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-[0_0_10px_#dbe890]"></span>
//           </span>
//           <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.5em] text-navy-custom/40">Modern Edu-Partner</span>
//         </div>

//         {/* Monumental Typography */}
//         <h1 className="text-7xl md:text-9xl lg:text-[120px] xl:text-[130px] font-extrabold text-navy-custom leading-[0.82] max-w-7xl mx-auto mb-16 tracking-[-0.08em] animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
//           Educational <br className="hidden lg:block"/>
//           <span className="text-gradient">Fidelity</span> Hub.
//         </h1>

//         {/* Refined Brand Context */}
//         <p className="text-lg md:text-xl text-navy-custom/30 max-w-2xl mx-auto leading-relaxed font-medium mb-16 animate-fade-up opacity-0" style={{ animationDelay: '0.4s' }}>
//           Real-time performance metrics, logistics, and chapter-synced deployment. Built exclusively for elite CBSE & State institutions.
//         </p>

//         {/* CTA Synergy */}
//         <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-up opacity-0" style={{ animationDelay: '0.6s' }}>
//           <button 
//             onClick={() => onNavigate?.('contact')}
//             className="w-full sm:w-auto bg-navy-custom text-white pl-12 pr-6 py-6 rounded-[28px] font-bold text-xl hover:bg-black hover:shadow-2xl hover:shadow-navy-custom/30 hover:-translate-y-2 transition-all duration-700 flex items-center justify-center gap-10 active:scale-95 group"
//           >
//             Launch Assistant
//             <div className="size-12 bg-primary rounded-2xl flex items-center justify-center text-navy-custom group-hover:rotate-[-15deg] transition-transform shadow-lg border border-white/5">
//               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
//             </div>
//           </button>
//           <button className="w-full sm:w-auto bg-white/20 backdrop-blur-3xl text-navy-custom border border-white px-14 py-6 rounded-[28px] font-bold text-xl hover:bg-white hover:shadow-premium transition-all duration-700 flex items-center justify-center gap-3 active:scale-95">
//             View Platform
//           </button>
//         </div>
//       </div>

//       {/* High-End Feature Dock with Gradient Masking */}
//       <div className="w-full border-t border-gray-200/40 bg-white/20 backdrop-blur-3xl py-12 relative z-30 overflow-hidden trusted-gradient animate-zoom-in opacity-0" style={{ animationDelay: '0.5s' }}>
//         <div className="flex whitespace-nowrap animate-scroll-x">
//           {[...Array(2)].map((_, i) => (
//             <div key={i} className="flex items-center gap-24 md:gap-48 px-24 md:px-48">
//               {[
//                 { label: 'Syllabus Synchronization', icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20' },
//                 { label: 'Real-time Fleet GPS', icon: 'M19 17h2c.6 0 1-.4 1-1v-3' },
//                 { label: 'Neural Presence Log', icon: 'M16 21v-2a4 4 0 0 0-4-4H6' },
//                 { label: 'Growth Performance IQ', icon: 'M12 20V10' },
//                 { label: 'Adaptive Assessments', icon: 'M12 2v20' },
//                 { label: 'Campus Activity Stream', icon: 'M22 2 11 13' }
//               ].map((item) => (
//                 <div key={item.label} className="flex items-center gap-6 group cursor-default">
//                   <div className="size-11 rounded-2xl bg-navy-custom/5 border border-white/40 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-700">
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-navy-custom/20 group-hover:text-navy-custom transition-colors"><path d={item.icon}/></svg>
//                   </div>
//                   <span className="text-[11px] md:text-xs font-black text-navy-custom/20 uppercase tracking-[0.45em] group-hover:text-navy-custom transition-colors">{item.label}</span>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
// import React from 'react';

// interface HeroProps {
//   onOpenAssistant: () => void;
// }

// const Hero: React.FC<HeroProps> = ({ onOpenAssistant }) => {
//   return (
//     <section className="relative min-h-screen flex flex-col bg-[#F8F9FA] overflow-hidden pt-24">
//       {/* Custom Explode Animation Logic */}
//       <style dangerouslySetInnerHTML={{ __html: `
//         @keyframes explode-burst {
//           0% { 
//             transform: translate(var(--tw-translate-x, 0), var(--tw-translate-y, 0)) scale(0);
//             opacity: 0;
//             filter: blur(20px);
//           }
//           40% {
//             opacity: 1;
//           }
//           100% { 
//             transform: translate(0, 0) scale(1);
//             opacity: 1;
//             filter: blur(0px);
//           }
//         }
//         .animate-explode {
//           animation: explode-burst 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//         }
//       `}} />

//       {/* Ultra-High-Fidelity Ambient Background */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-[-10%] left-[-5%] w-[70vw] h-[70vw] bg-primary/20 rounded-full blur-[160px] animate-pulse-glow"></div>
//         <div className="absolute bottom-[-5%] right-[-5%] w-[60vw] h-[60vw] bg-navy-custom/5 rounded-full blur-[140px]"></div>
//         <div className="absolute inset-0 opacity-[0.02]" style={{ 
//           backgroundImage: 'linear-gradient(#152328 1px, transparent 1px), linear-gradient(90deg, #152328 1px, transparent 1px)', 
//           backgroundSize: '80px 80px' 
//         }}></div>
//       </div>

//       {/* Spatial Awareness Widgets (Desktop Optimized) */}
//       <div className="absolute inset-0 pointer-events-none z-10 hidden xl:block">

//         {/* 1. Fleet GPS (Top Left) - Explodes from Center-Left */}
//         <div className="absolute top-[20%] left-[8%] animate-float-diagonal pointer-events-auto">
//           <div className="animate-explode opacity-0" style={{ animationDelay: '0.8s', '--tw-translate-x': '100px', '--tw-translate-y': '100px' } as any}>
//             <div className="glass-card p-5 rounded-[32px] shadow-premium w-64 border border-white/80 group hover:scale-105 transition-all duration-1000">
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="size-11 bg-navy-custom rounded-2xl flex items-center justify-center text-primary shadow-lg group-hover:rotate-12 transition-transform">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
//                 </div>
//                 <div className="flex-1">
//                   <div className="text-[9px] font-black uppercase tracking-[0.25em] text-navy-custom/30">Fleet GPS</div>
//                   <div className="text-xs font-bold text-navy-custom">Bus 4A Arriving</div>
//                 </div>
//               </div>
//               <div className="flex gap-1">
//                  {[1,2,3,4,5].map(i => <div key={i} className={`h-1 flex-1 rounded-full ${i < 4 ? 'bg-primary' : 'bg-navy-custom/5'}`}></div>)}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* 2. Faculty Node (Center Left) - Explodes from Center */}
//         <div className="absolute left-[8%] top-1/2 translate-y-[20px] animate-float-diagonal pointer-events-auto">
//           <div className="animate-explode opacity-0" style={{ animationDelay: '0.9s', '--tw-translate-x': '150px' } as any}>
//             <div className="relative group">
//               <div className="absolute top-1/2 left-full w-32 h-[1px] bg-gradient-to-r from-navy-custom/20 to-transparent -z-10"></div>
//               <div className="size-32 rounded-full glass-card border border-white p-6 shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-700">
//                 <div className="absolute inset-0 rounded-full border border-primary/40 animate-spin-slow opacity-50"></div>
//                 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Technologist.png" alt="Faculty" className="size-full object-contain drop-shadow-xl" />
//               </div>
//               <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-navy-custom text-primary rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl">Faculty Node</div>
//             </div>
//           </div>
//         </div>

//         {/* 3. Learner Node (Top Right) - Explodes from Center */}
//         <div className="absolute top-[20%] right-[8%] animate-float-alt pointer-events-auto">
//           <div className="animate-explode opacity-0" style={{ animationDelay: '1.1s', '--tw-translate-x': '-150px', '--tw-translate-y': '100px' } as any}>
//             <div className="relative group">
//               <div className="absolute top-1/2 right-full w-32 h-[1px] bg-gradient-to-l from-navy-custom/20 to-transparent -z-10"></div>
//               <div className="size-32 rounded-full glass-card border border-white p-6 shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-700">
//                 <div className="absolute inset-0 rounded-full border border-primary/40 animate-spin-slow-reverse opacity-50"></div>
//                 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Student.png" alt="Student" className="size-full object-contain drop-shadow-xl" />
//               </div>
//               <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-navy-custom rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl">Learner Node</div>
//             </div>
//           </div>
//         </div>

//         {/* 4. Campus Sync (Bottom Right) - Explodes from Center */}
//         <div className="absolute bottom-[30%] right-[8%] animate-float-alt pointer-events-auto">
//           <div className="animate-explode opacity-0" style={{ animationDelay: '1s', '--tw-translate-x': '-100px', '--tw-translate-y': '-100px' } as any}>
//             <div className="glass-card p-6 rounded-[36px] shadow-premium w-72 border border-white/80 group hover:-translate-y-4 transition-all duration-1000">
//                <div className="flex justify-between items-center mb-6">
//                   <div>
//                     <div className="text-[9px] font-black uppercase tracking-[0.25em] text-navy-custom/30 mb-1">Campus Sync</div>
//                     <div className="text-2xl font-black text-navy-custom tracking-tighter leading-none">98.2%</div>
//                   </div>
//                   <div className="size-12 bg-primary/15 rounded-[20px] flex items-center justify-center text-navy-custom">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
//                   </div>
//                </div>
//                <div className="flex items-center gap-2">
//                   <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Parent Alerts Sent</span>
//                   <div className="flex-1 h-px bg-navy-custom/5"></div>
//                </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Hero Content */}
//       <div className="relative z-20 flex-1 flex flex-col items-center justify-center container max-w-[1400px] mx-auto px-6 text-center">
//         <div className="inline-flex items-center gap-4 bg-white/40 backdrop-blur-2xl px-6 py-2 rounded-full shadow-sm border border-white/60 mb-12 animate-fade-up opacity-0">
//           <span className="relative flex h-2.5 w-2.5">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-[0_0_10px_#dbe890]"></span>
//           </span>
//           <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.5em] text-navy-custom/40">Modern Edu-Partner</span>
//         </div>

//         <h1 className="text-7xl md:text-9xl lg:text-[120px] xl:text-[130px] font-extrabold text-navy-custom leading-[0.82] max-w-7xl mx-auto mb-16 tracking-[-0.08em] animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
//           Educational <br className="hidden lg:block"/>
//           <span className="text-gradient">Fidelity</span> Hub.
//         </h1>

//         <p className="text-lg md:text-xl text-navy-custom/30 max-w-2xl mx-auto leading-relaxed font-medium mb-16 animate-fade-up opacity-0" style={{ animationDelay: '0.4s' }}>
//           Real-time performance metrics, logistics, and chapter-synced deployment. Built exclusively for elite CBSE & State institutions.
//         </p>

//         <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-up opacity-0" style={{ animationDelay: '0.6s' }}>
//           <button onClick={onOpenAssistant} className="w-full sm:w-auto bg-navy-custom text-white pl-12 pr-6 py-6 rounded-[28px] font-bold text-xl hover:bg-black hover:shadow-2xl hover:shadow-navy-custom/30 hover:-translate-y-2 transition-all duration-700 flex items-center justify-center gap-10 active:scale-95 group">
//             Launch Assistant
//             <div className="size-12 bg-primary rounded-2xl flex items-center justify-center text-navy-custom group-hover:rotate-[-15deg] transition-transform shadow-lg border border-white/5">
//               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
//             </div>
//           </button>
//           <button className="w-full sm:w-auto bg-white/20 backdrop-blur-3xl text-navy-custom border border-white px-14 py-6 rounded-[28px] font-bold text-xl hover:bg-white hover:shadow-premium transition-all duration-700 flex items-center justify-center gap-3 active:scale-95">
//             View Platform
//           </button>
//         </div>
//       </div>

//       {/* Feature Dock */}
//       <div className="w-full border-t border-gray-200/40 bg-white/20 backdrop-blur-3xl py-12 relative z-30 overflow-hidden trusted-gradient animate-zoom-in opacity-0" style={{ animationDelay: '0.5s' }}>
//         <div className="flex whitespace-nowrap animate-scroll-x">
//           {[...Array(2)].map((_, i) => (
//             <div key={i} className="flex items-center gap-24 md:gap-48 px-24 md:px-48">
//               {[
//                 { label: 'Syllabus Synchronization', icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20' },
//                 { label: 'Real-time Fleet GPS', icon: 'M19 17h2c.6 0 1-.4 1-1v-3' },
//                 { label: 'Neural Presence Log', icon: 'M16 21v-2a4 4 0 0 0-4-4H6' },
//                 { label: 'Growth Performance IQ', icon: 'M12 20V10' },
//                 { label: 'Adaptive Assessments', icon: 'M12 2v20' },
//                 { label: 'Campus Activity Stream', icon: 'M22 2 11 13' }
//               ].map((item) => (
//                 <div key={item.label} className="flex items-center gap-6 group cursor-default">
//                   <div className="size-11 rounded-2xl bg-navy-custom/5 border border-white/40 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-700">
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-navy-custom/20 group-hover:text-navy-custom transition-colors"><path d={item.icon}/></svg>
//                   </div>
//                   <span className="text-[11px] md:text-xs font-black text-navy-custom/20 uppercase tracking-[0.45em] group-hover:text-navy-custom transition-colors">{item.label}</span>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

//##########################################################################

// import React from 'react';

// interface HeroProps {
//   onOpenAssistant: () => void;
// }

// const Hero: React.FC<HeroProps> = ({ onOpenAssistant }) => {
//   return (
//     <section className="relative min-h-screen flex flex-col bg-[#F8F9FA] overflow-hidden pt-24">
//       {/* Premium Blur-to-Focus Animation */}
//       <style dangerouslySetInnerHTML={{ __html: `
//         @keyframes explode-with-focus {
//           0% { 
//             transform: translate(var(--tw-translate-x, 0), var(--tw-translate-y, 0)) scale(0.4);
//             opacity: 0;
//             filter: blur(15px);
//           }
//           /* Blur clears early (at 70%) to ensure sharpness at the end */
//           70% {
//             filter: blur(0px);
//             opacity: 1;
//           }
//           100% { 
//             transform: translate(0, 0) scale(1);
//             opacity: 1;
//             filter: blur(0px);
//           }
//         }
//         .animate-explode-focus {
//           animation: explode-with-focus 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
//           will-change: transform, opacity, filter;
//           backface-visibility: hidden;
//         }
//       `}} />

//       {/* Ultra-High-Fidelity Ambient Background */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-[-10%] left-[-5%] w-[70vw] h-[70vw] bg-primary/20 rounded-full blur-[160px] animate-pulse-glow"></div>
//         <div className="absolute bottom-[-5%] right-[-5%] w-[60vw] h-[60vw] bg-navy-custom/5 rounded-full blur-[140px]"></div>
//         <div className="absolute inset-0 opacity-[0.02]" style={{ 
//           backgroundImage: 'linear-gradient(#152328 1px, transparent 1px), linear-gradient(90deg, #152328 1px, transparent 1px)', 
//           backgroundSize: '80px 80px' 
//         }}></div>
//       </div>

//       {/* Spatial Awareness Widgets */}
//       <div className="absolute inset-0 pointer-events-none z-10 hidden xl:block">

//         {/* Fleet GPS - Top Left */}
//         <div className="absolute top-[20%] left-[8%] animate-float-diagonal pointer-events-auto">
//           <div className="animate-explode-focus opacity-0" style={{ animationDelay: '0.8s', '--tw-translate-x': '140px', '--tw-translate-y': '140px' } as any}>
//             <div className="glass-card p-5 rounded-[32px] shadow-premium w-64 border border-white/80 group hover:scale-105 transition-all duration-700">
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="size-11 bg-navy-custom rounded-2xl flex items-center justify-center text-primary shadow-lg">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
//                 </div>
//                 <div className="flex-1 text-left">
//                   <div className="text-[9px] font-black uppercase tracking-[0.25em] text-navy-custom/30">Fleet GPS</div>
//                   <div className="text-xs font-bold text-navy-custom">Bus 4A Arriving</div>
//                 </div>
//               </div>
//               <div className="flex gap-1">
//                  {[1,2,3,4,5].map(i => <div key={i} className={`h-1 flex-1 rounded-full ${i < 4 ? 'bg-primary' : 'bg-navy-custom/5'}`}></div>)}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Faculty Node - Mid Left */}
//         <div className="absolute left-[8%] top-1/2 translate-y-[20px] animate-float-diagonal pointer-events-auto">
//           <div className="animate-explode-focus opacity-0" style={{ animationDelay: '0.9s', '--tw-translate-x': '200px' } as any}>
//             <div className="relative group">
//               <div className="absolute top-1/2 left-full w-32 h-[1px] bg-gradient-to-r from-navy-custom/20 to-transparent -z-10"></div>
//               <div className="size-32 rounded-full glass-card border border-white p-6 shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-700">
//                 <div className="absolute inset-0 rounded-full border border-primary/40 animate-spin-slow opacity-50"></div>
//                 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Technologist.png" alt="Faculty" className="size-full object-contain drop-shadow-xl" />
//               </div>
//               <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-navy-custom text-primary rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl whitespace-nowrap">Faculty Node</div>
//             </div>
//           </div>
//         </div>

//         {/* Learner Node - Top Right */}
//         <div className="absolute top-[20%] right-[8%] animate-float-alt pointer-events-auto">
//           <div className="animate-explode-focus opacity-0" style={{ animationDelay: '1.1s', '--tw-translate-x': '-200px', '--tw-translate-y': '140px' } as any}>
//             <div className="relative group">
//               <div className="absolute top-1/2 right-full w-32 h-[1px] bg-gradient-to-l from-navy-custom/20 to-transparent -z-10"></div>
//               <div className="size-32 rounded-full glass-card border border-white p-6 shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-700">
//                 <div className="absolute inset-0 rounded-full border border-primary/40 animate-spin-slow-reverse opacity-50"></div>
//                 <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Student.png" alt="Student" className="size-full object-contain drop-shadow-xl" />
//               </div>
//               <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-navy-custom rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl whitespace-nowrap">Learner Node</div>
//             </div>
//           </div>
//         </div>

//         {/* Campus Sync - Bottom Right */}
//         <div className="absolute bottom-[30%] right-[8%] animate-float-alt pointer-events-auto">
//           <div className="animate-explode-focus opacity-0" style={{ animationDelay: '1s', '--tw-translate-x': '-140px', '--tw-translate-y': '-140px' } as any}>
//             <div className="glass-card p-6 rounded-[36px] shadow-premium w-72 border border-white/80 group hover:-translate-y-4 transition-all duration-700 text-left">
//                <div className="flex justify-between items-center mb-6">
//                   <div>
//                     <div className="text-[9px] font-black uppercase tracking-[0.25em] text-navy-custom/30 mb-1">Campus Sync</div>
//                     <div className="text-2xl font-black text-navy-custom tracking-tighter leading-none">98.2%</div>
//                   </div>
//                   <div className="size-12 bg-primary/15 rounded-[20px] flex items-center justify-center text-navy-custom">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
//                   </div>
//                </div>
//                <div className="flex items-center gap-2">
//                   <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Parent Alerts Sent</span>
//                   <div className="flex-1 h-px bg-navy-custom/5"></div>
//                </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Hero Content */}
//       <div className="relative z-20 flex-1 flex flex-col items-center justify-center container max-w-[1400px] mx-auto px-6 text-center">
//         <div className="inline-flex items-center gap-4 bg-white/40 backdrop-blur-2xl px-6 py-2 rounded-full shadow-sm border border-white/60 mb-12 animate-fade-up opacity-0">
//           <span className="relative flex h-2.5 w-2.5">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
//             <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-[0_0_10px_#dbe890]"></span>
//           </span>
//           <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.5em] text-navy-custom/40">Modern Edu-Partner</span>
//         </div>

//         <h1 className="text-7xl md:text-9xl lg:text-[120px] xl:text-[130px] font-extrabold text-navy-custom leading-[0.82] max-w-7xl mx-auto mb-16 tracking-[-0.08em] animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
//           Educational <br className="hidden lg:block"/>
//           <span className="text-gradient">Fidelity</span> Hub.
//         </h1>

//         <p className="text-lg md:text-xl text-navy-custom/30 max-w-2xl mx-auto leading-relaxed font-medium mb-16 animate-fade-up opacity-0" style={{ animationDelay: '0.4s' }}>
//           Real-time performance metrics, logistics, and chapter-synced deployment. Built exclusively for elite CBSE & State institutions.
//         </p>

//         <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-up opacity-0" style={{ animationDelay: '0.6s' }}>
//           <button onClick={onOpenAssistant} className="w-full sm:w-auto bg-navy-custom text-white pl-12 pr-6 py-6 rounded-[28px] font-bold text-xl hover:bg-black hover:shadow-2xl transition-all duration-700 flex items-center justify-center gap-10 active:scale-95 group">
//             Launch Assistant
//             <div className="size-12 bg-primary rounded-2xl flex items-center justify-center text-navy-custom shadow-lg border border-white/5">
//               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
//             </div>
//           </button>
//           <button className="w-full sm:w-auto bg-white/20 backdrop-blur-3xl text-navy-custom border border-white px-14 py-6 rounded-[28px] font-bold text-xl hover:bg-white hover:shadow-premium transition-all duration-700 flex items-center justify-center gap-3 active:scale-95">
//             View Platform
//           </button>
//         </div>
//       </div>

//       {/* Feature Dock */}
//       <div className="w-full border-t border-gray-200/40 bg-white/20 backdrop-blur-3xl py-12 relative z-30 overflow-hidden animate-zoom-in opacity-0" style={{ animationDelay: '0.5s' }}>
//         <div className="flex whitespace-nowrap animate-scroll-x">
//           {[...Array(2)].map((_, i) => (
//             <div key={i} className="flex items-center gap-24 md:gap-48 px-24 md:px-48">
//               {[
//                 { label: 'Syllabus Synchronization', icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20' },
//                 { label: 'Real-time Fleet GPS', icon: 'M19 17h2c.6 0 1-.4 1-1v-3' },
//                 { label: 'Neural Presence Log', icon: 'M16 21v-2a4 4 0 0 0-4-4H6' },
//                 { label: 'Growth Performance IQ', icon: 'M12 20V10' },
//                 { label: 'Adaptive Assessments', icon: 'M12 2v20' },
//                 { label: 'Campus Activity Stream', icon: 'M22 2 11 13' }
//               ].map((item) => (
//                 <div key={item.label} className="flex items-center gap-6 group cursor-default">
//                   <div className="size-11 rounded-2xl bg-navy-custom/5 border border-white/40 flex items-center justify-center group-hover:bg-primary transition-all duration-700">
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-navy-custom/20 group-hover:text-navy-custom"><path d={item.icon}/></svg>
//                   </div>
//                   <span className="text-[11px] md:text-xs font-black text-navy-custom/20 uppercase tracking-[0.45em] group-hover:text-navy-custom">{item.label}</span>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

//###########################################################################


import React from 'react';

interface HeroProps {
  onOpenAssistant: () => void;
  onNavigate?: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAssistant, onNavigate }) => {
  return (
    // <section className="relative min-h-screen flex flex-col bg-[#F8F9FA] overflow-hidden pt-20">
    // <section className="relative h-auto flex flex-col bg-[#F8F9FA] overflow-hidden pt-20 pb-12">
    <section className="relative h-[100dvh] flex flex-col bg-[#F8F9FA] overflow-hidden pt-20 pb-12">

      {/* Premium Blur-to-Focus Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes explode-with-focus {
          0% { 
            transform: translate(var(--tw-translate-x, 0), var(--tw-translate-y, 0)) scale(0.4);
            opacity: 0;
            filter: blur(15px);
          }
          70% { filter: blur(0px); opacity: 1; }
          100% { transform: translate(0, 0) scale(1); opacity: 1; filter: blur(0px); }
        }
        .animate-explode-focus {
          animation: explode-with-focus 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity, filter;
          backface-visibility: hidden;
        }
      `}} />

      {/* Ambient Background */}
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden"> */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
      /* Add this style object to create the global fade mask */
      // style={{
      //   maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
      //   WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
      // }}
      >

        <div className="absolute top-[-10%] left-[-5%] w-[70vw] h-[70vw] bg-primary/20 rounded-full blur-[160px] animate-pulse-glow"></div>
        <div className="absolute bottom-[-20%] right-[-5%] w-[60vw] h-[60vw] bg-navy-custom/5 rounded-full blur-[140px]"></div>
        {/* <div className="absolute bottom-[5%] right-[-5%] w-[60vw] h-[60vw] bg-navy-custom/5 rounded-full blur-[140px]"></div> */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(#152328 1px, transparent 1px), linear-gradient(90deg, #152328 1px, transparent 1px)',
          backgroundSize: '65px 65px'
        }}></div>
        {/* NEW: Bottom Vignette - Adds a physical layer of depth to the softening */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#F8F9FA] to-transparent z-10"></div>
      </div>

      {/* Spatial Awareness Widgets - REDUCED SIZES */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden xl:block">

        {/* Fleet GPS - Scaled down from w-64 to w-56 */}
        <div className="absolute top-[18%] left-[10%] animate-float-diagonal pointer-events-auto">
          <div className="animate-explode-focus opacity-0" style={{ animationDelay: '0.8s', '--tw-translate-x': '100px', '--tw-translate-y': '100px' } as any}>
            <div className="glass-card p-4 rounded-[24px] shadow-premium w-56 border border-white/80 group hover:scale-105 transition-all duration-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-9 bg-navy-custom rounded-xl flex items-center justify-center text-primary shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div className="flex-1 text-left">
                  <div className="text-[9px] font-black tracking-[0.15em] text-navy-custom/30">Fleet GPS</div>
                  <div className="text-[11px] font-bold text-navy-custom">Bus 4A Arriving</div>
                </div>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => <div key={i} className={`h-1 flex-1 rounded-full ${i < 4 ? 'bg-primary' : 'bg-navy-custom/5'}`}></div>)}
              </div>
            </div>
          </div>
        </div>

        {/* Faculty Node - Scaled down from size-32 to size-28 */}
        {/* <div className="absolute left-[10%] top-1/2 -translate-y-1/2 animate-float-diagonal pointer-events-auto">
          <div className="animate-explode-focus opacity-0" style={{ animationDelay: '0.9s', '--tw-translate-x': '150px' } as any}>
            <div className="relative group">
              <div className="size-28 rounded-full glass-card border border-white p-5 shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-700">
                <div className="absolute inset-0 rounded-full border border-primary/40 animate-spin-slow opacity-50"></div>
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Technologist.png" alt="Faculty" className="size-full object-contain drop-shadow-xl" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-navy-custom text-primary rounded-full text-[8px] font-black uppercase tracking-widest shadow-xl whitespace-nowrap">Faculty Node</div>
            </div>
          </div>
        </div> */}

        {/* Learner Node - Scaled down from size-32 to size-28 */}
        {/* <div className="absolute top-[18%] right-[10%] animate-float-alt pointer-events-auto">
          <div className="animate-explode-focus opacity-0" style={{ animationDelay: '1.1s', '--tw-translate-x': '-150px', '--tw-translate-y': '100px' } as any}>
            <div className="relative group">
              <div className="size-28 rounded-full glass-card border border-white p-5 shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-700">
                <div className="absolute inset-0 rounded-full border border-primary/40 animate-spin-slow-reverse opacity-50"></div>
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Student.png" alt="Student" className="size-full object-contain drop-shadow-xl" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-navy-custom rounded-full text-[8px] font-black uppercase tracking-widest shadow-xl whitespace-nowrap">Learner Node</div>
            </div>
          </div>
        </div> */}


        {/* Faculty Node (Mid Left) */}
        <div className="absolute left-[10%] top-1/2 -translate-y-1/2 animate-float-diagonal pointer-events-auto">

          <div className="animate-explode-focus opacity-0" style={{ animationDelay: '0.9s', '--tw-translate-x': '150px' } as any}>
            <div className="relative group">

              {/* CONNECTION LINE - LEFT TO RIGHT */}
              <div className="absolute top-1/2 left-[100%] w-24 h-[1px] bg-gradient-to-r from-navy-custom/20 to-transparent -z-10 origin-left"></div>

              <div className="size-28 rounded-full glass-card border border-white p-5 shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-700">
                <div className="absolute inset-0 rounded-full border border-primary/40 animate-spin-slow opacity-50"></div>
                {/* <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Technologist.png" alt="Faculty" className="size-full object-contain drop-shadow-xl" /> */}
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/55e1dceff489121c3f7c7a7ec4f4d401d2cbd53e/Emojis/People%20with%20professions/Man%20Teacher%20Light%20Skin%20Tone.png" alt="Faculty" className="size-full object-contain drop-shadow-xl" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-navy-custom text-primary rounded-full text-[9px] font-black tracking-widest shadow-xl whitespace-nowrap uppercase">Faculty Node</div>
            </div>
          </div>
        </div>

        {/* Learner Node (Top Right) */}
        <div className="absolute top-[24%] right-[10%] animate-float-alt pointer-events-auto">
          <div className="animate-explode-focus opacity-0" style={{ animationDelay: '1.1s', '--tw-translate-x': '-150px', '--tw-translate-y': '100px' } as any}>
            <div className="relative group">

              {/* CONNECTION LINE - RIGHT TO LEFT */}
              <div className="absolute top-1/2 right-[100%] w-24 h-[1px] bg-gradient-to-l from-navy-custom/20 to-transparent -z-10 origin-right"></div>

              <div className="size-28 rounded-full glass-card border border-white p-5 shadow-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-700">
                <div className="absolute inset-0 rounded-full border border-primary/40 animate-spin-slow-reverse opacity-50"></div>
                {/* <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Student.png" alt="Student" className="size-full object-contain drop-shadow-xl" /> */}
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/55e1dceff489121c3f7c7a7ec4f4d401d2cbd53e/Emojis/People%20with%20professions/Man%20Student%20Light%20Skin%20Tone.png" alt="Student" className="size-full object-contain drop-shadow-xl" />

              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-navy-custom rounded-full text-[9px] font-black tracking-widest shadow-xl whitespace-nowrap uppercase">Learner Node</div>
            </div>
          </div>
        </div>
        {/* Campus Sync - Scaled down from w-72 to w-64 */}
        <div className="absolute bottom-[20%] right-[8%] animate-float-alt pointer-events-auto">
          <div className="animate-explode-focus opacity-0" style={{ animationDelay: '1s', '--tw-translate-x': '-100px', '--tw-translate-y': '-100px' } as any}>
            <div className="glass-card p-5 rounded-[28px] shadow-premium w-64 border border-white/80 group hover:-translate-y-3 transition-all duration-700 text-left">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-[9px] font-black tracking-[0.15em] text-navy-custom/30 mb-0.5">Campus Sync</div>
                  <div className="text-xl font-black text-navy-custom tracking-tighter leading-none">98.2%</div>
                </div>
                <div className="size-10 bg-primary/15 rounded-xl flex items-center justify-center text-navy-custom">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-green-500 tracking-widest">Alerts Sent</span>
                <div className="flex-1 h-px bg-navy-custom/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Content - REFINED TYPOGRAPHY */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center container max-w-[1200px] mx-auto px-6 text-center">
        {/* <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-2xl px-5 py-1.5 rounded-full shadow-sm border border-white/30 mb-8 animate-fade-up opacity-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-[0_0_8px_#dbe890]"></span>
          </span> */}
        <div className="inline-flex items-center gap-3  px-5 py-1.5 rounded-full mb-8 animate-fade-up opacity-0">

          <span className="text-[10px] font-bold tracking-[0.2em] text-navy-custom/40 uppercase">Simply Collaborate</span>
        </div>

        {/* Heading: Reduced size from 120px to 100px */}
        <h1 className="text-6xl md:text-8xl lg:text-[90px] xl:text-[100px] font-extrabold text-navy-custom leading-[0.85] max-w-6xl mx-auto mb-10 tracking-[-0.04em] animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
          School life made <br className="hidden lg:block" />
          <span className="text-gradient">easier</span> for Everyone.
        </h1>

        {/* Description: Reduced size and mb */}
        <p className="text-base md:text-lg text-navy-custom/30 max-w-xl mx-auto leading-relaxed font-medium mb-10 animate-fade-up opacity-0" style={{ animationDelay: '0.4s' }}>
          Attendance, bus tracking, marks, and notes—everything you need to know about your school, right on your phone. No confusion. Just clarity.
        </p>

        {/* Buttons: Reduced padding and rounded corners */}
        {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: '0.6s' }}>
          <button onClick={onOpenAssistant} className="w-full sm:w-auto bg-navy-custom text-white pl-10 pr-5 py-4 rounded-[22px] font-bold text-lg hover:bg-black hover:shadow-2xl transition-all duration-700 flex items-center justify-center gap-8 active:scale-95 group">
            Launch LetBot
            <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-navy-custom shadow-lg border border-white/5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
            </div>
          </button>
          <button className="w-full sm:w-auto bg-white/20 backdrop-blur-3xl text-navy-custom border border-white px-10 py-4 rounded-[22px] font-bold text-lg hover:bg-white hover:shadow-premium transition-all duration-700 flex items-center justify-center gap-3 active:scale-95">
            View Platform
          </button>
        </div> */}
        <div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-up opacity-0"
          style={{ animationDelay: "0.6s" }}
        >
          {/* PRIMARY BUTTON */}
          <button
            onClick={() => onNavigate?.('contact')}
            className="group relative w-[280px] h-[64px] rounded-[22px]
    bg-navy-custom text-white font-bold text-lg
    flex items-center
    pl-12 pr-20
    overflow-hidden
    transition-all duration-700
    hover:bg-black hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]
    active:scale-95"
          >
            <span className="transition-transform duration-500 group-hover:-translate-x-2">
              Contact Sales
            </span>

            {/* Arrow */}
            <span
              className="absolute right-6 flex items-center justify-center
      size-10 rounded-xl bg-primary text-navy-custom
      shadow-lg border border-white/10
      transition-all duration-500
      group-hover:translate-x-2 group-hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform transition-transform duration-500
        -rotate-90 group-hover:rotate-0"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </span>
          </button>


          {/* SECONDARY BUTTON */}
          <button
            // onClick={() => onNavigate?.('community')}

            className="relative w-[280px] h-[64px] rounded-[22px]
               bg-white/20 backdrop-blur-3xl
               text-navy-custom font-bold text-lg
               border border-white/30
               flex items-center justify-center
               transition-all duration-700
               hover:bg-white hover:shadow-[0_15px_50px_rgba(0,0,0,0.2)]
               active:scale-95"
          >
            Explore Community
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;