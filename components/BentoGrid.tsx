
// import React, { useState, useEffect } from 'react';
// import { ResponsiveContainer, AreaChart, Area, YAxis } from 'recharts';
// import Lottie from 'lottie-react';
// import { busAnimationData } from '../constants/busAnimation';

// // Base data for the chart simulation
// const generateChartData = () => [
//   { name: 'Mon', val: Math.floor(Math.random() * 2000) + 3000 },
//   { name: 'Tue', val: Math.floor(Math.random() * 2000) + 2500 },
//   { name: 'Wed', val: Math.floor(Math.random() * 2000) + 1500 },
//   { name: 'Thu', val: Math.floor(Math.random() * 2000) + 2700 },
//   { name: 'Fri', val: Math.floor(Math.random() * 2000) + 1800 },
//   { name: 'Sat', val: Math.floor(Math.random() * 2000) + 2300 },
//   { name: 'Sun', val: Math.floor(Math.random() * 2000) + 3400 },
// ];

// const BentoGrid: React.FC = () => {
//   const [performanceData, setPerformanceData] = useState(generateChartData());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPerformanceData(generateChartData());
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="container max-w-[1400px] mx-auto px-6 pb-40">
//       <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
//         {/* 01. Institutional Control Center */}
//         <div className="md:col-span-12 lg:col-span-8 bg-white rounded-apple p-10 md:p-14 shadow-bento hover:shadow-bento-hover transition-all duration-700 overflow-hidden group border border-gray-100 relative reveal-left">
//           <div className="flex flex-col lg:flex-row h-full gap-16 relative z-10">
//             <div className="flex-1 flex flex-col justify-between">
//               <div>
//                 <div className="flex gap-2 mb-10">
//                   <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-navy-custom text-primary">Institutional Hub</span>
//                   <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-apple-grey text-navy-custom/40 border border-gray-100">Live Sync</span>
//                 </div>
//                 <h3 className="text-5xl md:text-6xl font-extrabold mb-8 leading-[1.05] tracking-tighter text-navy-custom">Campus <br/>Intelligence</h3>
//                 <p className="text-navy-custom/50 text-xl leading-relaxed font-medium max-w-md">The central nervous system for elite education. Orchestrate performance and growth trajectories in real-time.</p>
//               </div>
//               <div className="flex items-center gap-6 mt-16">
//                 <div className="flex -space-x-3">
//                   {[1, 2, 3].map(i => (
//                     <div key={i} className="size-12 rounded-full border-4 border-white bg-navy-custom/5 shadow-sm overflow-hidden flex items-center justify-center">
//                        <div className="size-full bg-navy-custom/10 animate-pulse"></div>
//                     </div>
//                   ))}
//                 </div>
//                 <span className="text-[11px] font-black uppercase tracking-widest text-navy-custom/20">32+ Active Nodes</span>
//               </div>
//             </div>
            
//             <div className="flex-1 bg-apple-grey/50 rounded-apple-sm p-8 flex flex-col gap-10 border border-white shadow-sm group-hover:bg-white transition-all duration-700">
//               <div className="flex justify-between items-center">
//                 <span className="text-[10px] font-black uppercase tracking-widest opacity-30 tracking-[0.2em]">Sync Velocity (Live)</span>
//                 <div className="size-10 rounded-xl bg-navy-custom flex items-center justify-center text-primary shadow-lg animate-pulse">
//                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
//                 </div>
//               </div>
//               <div className="h-44 w-full">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <AreaChart data={performanceData}>
//                     <defs>
//                       <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="5%" stopColor="#dbe890" stopOpacity={0.8}/>
//                         <stop offset="95%" stopColor="#dbe890" stopOpacity={0}/>
//                       </linearGradient>
//                     </defs>
//                     <YAxis hide domain={['dataMin - 500', 'dataMax + 500']} />
//                     <Area 
//                       type="monotone" 
//                       dataKey="val" 
//                       stroke="#152328" 
//                       strokeWidth={3} 
//                       fillOpacity={1} 
//                       fill="url(#colorVal)" 
//                       animationDuration={1500}
//                     />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               </div>
//               <div className="bg-navy-custom rounded-apple-sm p-5 text-white flex justify-between items-center group-hover:-translate-y-2 transition-transform shadow-xl">
//                 <div>
//                    <div className="text-[9px] font-black uppercase tracking-[0.3em] text-primary mb-1">Status</div>
//                    <div className="font-bold text-base tracking-tight">Active Stream Monitoring</div>
//                 </div>
//                 <div className="size-8 bg-primary/20 rounded-lg flex items-center justify-center">
//                   <div className="size-2 bg-primary rounded-full animate-ping"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* 02. Safety Hub */}
//         <div className="md:col-span-12 lg:col-span-4 bg-white rounded-apple p-10 shadow-bento hover:shadow-bento-hover transition-all duration-700 border border-gray-100 flex flex-col group overflow-hidden reveal-right">
//           <div className="flex items-center justify-between mb-8">
//              <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-primary/20 text-navy-custom">Fleet Tracking</span>
//              <div className="size-3 bg-green-500 rounded-full shadow-[0_0_12px_#22c55e]"></div>
//           </div>
//           <h3 className="text-3xl font-extrabold mb-4 tracking-tighter text-navy-custom">Live Fleet GPS</h3>
//           <p className="text-navy-custom/40 text-base font-medium mb-10 leading-relaxed">High-fidelity GPS trajectories and arrival predictions for every school route.</p>
          
//           <div className="mt-auto relative w-full h-56 bg-apple-grey rounded-apple-sm border border-gray-100 overflow-hidden flex items-center justify-center">
//              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#152328 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
//              <div className="w-full max-w-[280px]">
//                 <Lottie animationData={busAnimationData} loop={true} />
//              </div>
//              <div className="absolute bottom-4 left-6">
//                 <div className="flex items-center gap-2">
//                    <div className="size-1.5 bg-primary rounded-full animate-pulse"></div>
//                    <span className="text-[9px] font-black uppercase tracking-widest text-navy-custom/30">Bus 4A Active</span>
//                 </div>
//              </div>
//           </div>
//         </div>

//         {/* 03. MODERN Momentum Feed (Docked/Clipped Single Post) */}
//         <div className="md:col-span-12 lg:col-span-4 bg-primary rounded-apple pt-10 px-0 shadow-bento hover:shadow-bento-hover transition-all duration-700 flex flex-col border border-primary/20 overflow-hidden group reveal relative" style={{ transitionDelay: '0.1s' }}>
          
//           <div className="flex justify-between items-center mb-8 relative z-10 px-10">
//              <div className="px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-navy-custom text-primary shadow-lg flex items-center gap-2">
//                 <span className="relative flex h-2 w-2">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
//                 </span>
//                 LIVE NOW
//              </div>
//           </div>
          
//           <div className="px-10 mb-8">
//             <h3 className="text-4xl font-black tracking-tighter text-navy-custom leading-none uppercase italic">Momentum</h3>
//             <p className="text-[11px] font-black text-navy-custom/30 uppercase tracking-[0.2em] mt-3">Institution Social Node</p>
//           </div>
          
//           <div className="mt-auto relative z-10 px-10">
//              {/* LinkedIn Style Post Docked at Bottom with Low Opacity */}
//              <div className="bg-white/30 backdrop-blur-[40px] rounded-t-[40px] p-8 shadow-2xl border-t border-white/50 border-x border-white/30 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
//                 <div className="flex items-center justify-between mb-6">
//                    <div className="flex items-center gap-3">
//                       <div className="size-12 rounded-full bg-navy-custom text-primary flex items-center justify-center font-bold text-sm border-2 border-primary/40 shadow-xl group-hover:rotate-12 transition-transform">LN</div>
//                       <div>
//                          <div className="text-[13px] font-black text-navy-custom leading-none mb-1">Ms. Lakshmi Nair</div>
//                          <div className="text-[10px] font-bold text-navy-custom/40 uppercase tracking-widest">Sr. Physics Faculty</div>
//                       </div>
//                    </div>
//                    <div className="text-[10px] font-black text-navy-custom/20">JUST NOW</div>
//                 </div>

//                 <p className="text-[15px] font-bold text-navy-custom/80 leading-[1.4] mb-8">
//                    "Institutional Grade Analytics for the Kinetic Theory module have been deployed to all parent nodes. 92% mastery achieved in Class 10-A. Great job team!"
//                 </p>

//                 {/* Interaction Strip */}
//                 <div className="flex items-center justify-between pt-6 border-t border-navy-custom/5">
//                    <div className="flex gap-8">
//                       <div className="flex items-center gap-2.5 cursor-pointer group/action">
//                          <div className="size-9 bg-navy-custom/5 rounded-full flex items-center justify-center group-hover/action:bg-navy-custom transition-all">
//                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-navy-custom/40 group-hover/action:text-primary"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
//                          </div>
//                          <span className="text-[11px] font-black text-navy-custom/40 group-hover/action:text-navy-custom">124</span>
//                       </div>
//                       <div className="flex items-center gap-2.5 cursor-pointer group/action">
//                          <div className="size-9 bg-navy-custom/5 rounded-full flex items-center justify-center group-hover/action:bg-navy-custom transition-all">
//                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-navy-custom/40 group-hover/action:text-primary"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
//                          </div>
//                          <span className="text-[11px] font-black text-navy-custom/40 group-hover/action:text-navy-custom">12</span>
//                       </div>
//                    </div>
//                    <div className="size-10 bg-navy-custom rounded-2xl flex items-center justify-center text-primary shadow-lg hover:scale-110 transition-transform cursor-pointer">
//                       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
//                    </div>
//                 </div>
//              </div>
//           </div>
//         </div>

//         {/* 04. RICH Synthesis Forums (Filled Blank Space) */}
//         <div className="md:col-span-12 lg:col-span-8 bg-navy-custom rounded-apple p-12 md:p-14 shadow-bento hover:shadow-bento-hover transition-all duration-700 flex flex-col border border-navy-custom group gap-14 relative overflow-hidden reveal" style={{ transitionDelay: '0.2s' }}>
//           <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
          
//           <div className="flex flex-col lg:flex-row h-full gap-14 relative z-10">
//             <div className="flex-1 flex flex-col justify-between">
//                <div>
//                   <div className="flex gap-2 mb-10">
//                      <span className="px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/5 text-primary border border-white/10">v4.0 Hub</span>
//                      <span className="px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-primary text-navy-custom">Synthesis ACTIVE</span>
//                   </div>
//                   <h3 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tighter leading-tight text-white uppercase">Peer Knowledge <br/>Communities.</h3>
//                   <p className="text-white/40 text-lg font-medium leading-relaxed max-w-sm">From passive consumers to active creators. High-fidelity forums for students to solve chapter-specific problems.</p>
//                </div>
               
//                {/* Trending Section to Fill Space */}
//                <div className="mt-12 pt-12 border-t border-white/5">
//                   <div className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-6">Trending Perspectives</div>
//                   <div className="flex flex-wrap gap-2">
//                      {['Calculus', 'Organic Synthesis', 'Vedic Math', 'AI Ethics', 'Malayalam Lit'].map(tag => (
//                         <span key={tag} className="px-4 py-2 rounded-full bg-white/5 text-[9px] font-bold text-white/40 border border-white/5 hover:bg-primary/20 hover:text-primary transition-all cursor-default">
//                            #{tag}
//                         </span>
//                      ))}
//                   </div>
//                </div>
//             </div>

//             <div className="flex-1 flex flex-col justify-between">
//               <div className="space-y-4">
//                 {[
//                   { q: 'Calculus Synthesis', up: 42, color: 'bg-primary/10 text-primary border-primary/20' },
//                   { q: 'Organic Chem Hub', up: 89, color: 'bg-white/5 text-white/40 border-white/5' },
//                   { q: 'State Syllabus Prep', up: 156, color: 'bg-white/10 text-white border-white/10' }
//                 ].map((item, i) => (
//                     <div key={i} className={`p-6 rounded-apple-sm border flex items-center justify-between hover:bg-white/10 transition-all cursor-pointer group/item hover:-translate-y-1 ${item.color}`}>
//                       <div className="flex items-center gap-5">
//                           <div className="size-10 bg-white/5 rounded-2xl flex items-center justify-center text-[10px] font-black group-hover/item:bg-primary group-hover/item:text-navy-custom transition-all">#{item.up}</div>
//                           <span className="font-bold text-base tracking-tight">{item.q}</span>
//                       </div>
//                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="opacity-0 group-hover/item:opacity-100 transition-all"><path d="m9 18 6-6-6-6"/></svg>
//                     </div>
//                 ))}
//               </div>

//               {/* Bottom Filler Content */}
//               <div className="mt-14 flex items-center justify-between bg-white/5 p-6 rounded-[32px] border border-white/5 group-hover:bg-white/10 transition-all">
//                 <div className="flex items-center gap-4">
//                   <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
//                   </div>
//                   <div>
//                     <div className="text-white text-xs font-black">12.4K Global Discussions</div>
//                     <div className="text-white/30 text-[9px] font-bold uppercase tracking-widest">Across all institution nodes</div>
//                   </div>
//                 </div>
//                 <div className="size-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Row 3: Performance, Syllabus, Neural Attendance */}
//         <div className="md:col-span-12 lg:col-span-4 bg-white rounded-apple p-10 shadow-bento hover:shadow-bento-hover transition-all duration-700 border border-gray-100 group flex flex-col justify-between overflow-hidden relative reveal" style={{ transitionDelay: '0.1s' }}>
//           <div>
//             <div className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] bg-navy-custom text-primary mb-6 w-fit">Institutional Pulse</div>
//             <h3 className="text-3xl font-extrabold text-navy-custom tracking-tighter mb-4">Performance <br/>Fidelity</h3>
//             <div className="flex items-baseline gap-2 mb-6">
//               <span className="text-5xl font-black text-navy-custom tracking-tighter">8.4</span>
//               <span className="text-xl font-black text-primary">x</span>
//             </div>
//           </div>
//           <div className="space-y-3">
//              <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-navy-custom/30">
//                 <span>Efficiency</span>
//                 <span className="text-navy-custom">OPTIMAL</span>
//              </div>
//              <div className="h-1.5 w-full bg-apple-grey rounded-full overflow-hidden">
//                 <div className="h-full w-[84%] bg-navy-custom group-hover:bg-primary transition-all duration-700"></div>
//              </div>
//           </div>
//         </div>

//         <div className="md:col-span-12 lg:col-span-4 bg-navy-custom rounded-apple p-10 shadow-bento hover:shadow-bento-hover transition-all duration-700 border border-navy-custom group flex flex-col justify-between overflow-hidden relative reveal" style={{ transitionDelay: '0.2s' }}>
//           <div>
//             <div className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] bg-white/10 text-primary mb-6 w-fit">Academic Core</div>
//             <h3 className="text-3xl font-extrabold text-white tracking-tighter mb-4">CBSE & State <br/>Sync Engine</h3>
//             <p className="text-white/30 text-sm font-medium leading-relaxed">Syllabus-aligned chapters distilled into high-fidelity modules.</p>
//           </div>
//           <div className="flex gap-2 pt-6">
//             {[1,2,3,4,5].map(i => <div key={i} className="h-1 flex-1 bg-white/10 rounded-full group-hover:bg-primary transition-all duration-500" style={{ transitionDelay: `${i*100}ms` }}></div>)}
//           </div>
//         </div>

//         <div className="md:col-span-12 lg:col-span-4 bg-white rounded-apple p-10 shadow-bento hover:shadow-bento-hover transition-all duration-700 border border-gray-100 group flex flex-col justify-between overflow-hidden relative reveal" style={{ transitionDelay: '0.3s' }}>
//            <div className="absolute -bottom-8 -right-8 size-32 bg-primary/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-1000"></div>
//            <div>
//              <div className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] bg-primary text-navy-custom mb-6 w-fit">Safety Protocol</div>
//              <h3 className="text-3xl font-extrabold text-navy-custom tracking-tighter mb-4">Neural <br/>Presence</h3>
//              <p className="text-navy-custom/40 text-sm font-medium leading-relaxed">Automated attendance triggers instant parent verification alerts.</p>
//            </div>
//            <div className="flex items-center gap-3 pt-6">
//               <div className="size-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
//               <span className="text-[10px] font-black uppercase tracking-widest text-navy-custom/30">Verification active</span>
//            </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default BentoGrid;

import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, AreaChart, Area, YAxis } from 'recharts';
import Lottie from 'lottie-react';
import { busAnimationData } from '../constants/busAnimation';

const generateChartData = () => [
  { name: 'Mon', val: Math.floor(Math.random() * 2000) + 3000 },
  { name: 'Tue', val: Math.floor(Math.random() * 2000) + 2500 },
  { name: 'Wed', val: Math.floor(Math.random() * 2000) + 1500 },
  { name: 'Thu', val: Math.floor(Math.random() * 2000) + 2700 },
  { name: 'Fri', val: Math.floor(Math.random() * 2000) + 1800 },
  { name: 'Sat', val: Math.floor(Math.random() * 2000) + 2300 },
  { name: 'Sun', val: Math.floor(Math.random() * 2000) + 3400 },
];

const BentoGrid: React.FC = () => {
  const [performanceData, setPerformanceData] = useState(generateChartData());

  useEffect(() => {
    const interval = setInterval(() => {
      setPerformanceData(generateChartData());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container max-w-[1280px] mx-auto px-6 pb-32">
      {/* Reveal Container - Prevents the line from touching the dock */}
      <div className="w-full relative z-30 mt-0 pt-12 pb-0 overflow-hidden">
        
        {/* The "Optical Anchor" - Now spaced higher and animates width */}
        <div 
          className="absolute top-8 left-1/2 -translate-x-1/2 h-[1.5px] bg-primary shadow-[0_0_15px_rgba(219,232,144,0.4)] animate-width-grow"
          style={{ width: '80px' }}
        ></div>

        <div 
          className="relative group animate-fade-up opacity-0" 
          style={{ animationDelay: '0.8s' }}
        >
          {/* Refined Edge Masks */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none"></div>

          <div className="flex whitespace-nowrap animate-scroll-modern items-center hover:[animation-play-state:paused] cursor-default">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center">
                {[
                  { category: 'Syllabus', title: 'Synchronization' },
                  { category: 'Real-time', title: 'Fleet GPS' },
                  { category: 'Neural', title: 'Presence Log' },
                  { category: 'Growth', title: 'Performance IQ' },
                  { category: 'Adaptive', title: 'Assessments' },
                  { category: 'Campus', title: 'Activity Stream' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center group/item px-10">
                    
                    <div className="flex items-center gap-3">
                      <span className="text-[14px] font-extrabold tracking-tight text-navy-custom/20 group-hover/item:text-primary transition-all duration-500">
                        {item.category}
                      </span>
                      <span className="text-[14px] font-extrabold text-navy-custom/80 tracking-tight group-hover/item:text-navy-custom transition-all duration-500">
                        {item.title}
                      </span>
                    </div>

                    {/* Minimalist Separator */}
                    <div className="w-10 h-[1px] bg-navy-custom/[0.05] ml-10 group-hover/item:bg-primary/40 transition-all duration-700"></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Transition Title Section */}
            <div className="pt-40 pb-20 text-center relative reveal reveal-scale">
              <div className="max-w-4xl mx-auto px-6">
                <div className="flex items-center justify-center gap-4 mb-10">
                  <div className="h-px w-12 bg-navy-custom/10"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.6em] text-navy-custom/30">
                    Intelligence Node
                  </span>
                  <div className="h-px w-12 bg-navy-custom/10"></div>
                </div>

                <h2 className="text-5xl md:text-7xl font-black text-navy-custom tracking-tighter leading-none mb-8">
                  The Ecosystem of <br className="hidden sm:block" />
                  <span className="text-gradient">Synchrony.</span>
                </h2>

                <p className="text-l md:text-xl text-navy-custom/30 font-medium max-w-2xl mx-auto">
                  A symmetrical architecture connecting every stakeholder in the high-fidelity digital campus.
                </p>
              </div>
            </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        
        {/* 01. Institutional Control Center */}
        <div className="md:col-span-12 lg:col-span-8 bg-white rounded-apple p-8 md:p-12 shadow-bento hover:shadow-bento-hover transition-all duration-700 overflow-hidden group border border-gray-100 relative reveal-left">
          <div className="flex flex-col lg:flex-row h-full gap-12 relative z-10">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex gap-2 mb-8">
                  <span className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-navy-custom text-primary">Institutional Hub</span>
                  <span className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-apple-grey text-navy-custom/40 border border-gray-100">Live Sync</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-[1.05] tracking-tighter text-navy-custom">Campus <br/>Intelligence</h3>
                <p className="text-navy-custom/50 text-lg leading-relaxed font-medium max-w-sm">The central nervous system for elite education. Orchestrate performance and growth trajectories in real-time.</p>
              </div>
              <div className="flex items-center gap-5 mt-12">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="size-11 rounded-full border-4 border-white bg-navy-custom/5 shadow-sm overflow-hidden flex items-center justify-center">
                       <div className="size-full bg-navy-custom/10 animate-pulse"></div>
                    </div>
                  ))}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-navy-custom/20">32+ Active Nodes</span>
              </div>
            </div>
            
            <div className="flex-1 bg-apple-grey/50 rounded-apple-sm p-7 flex flex-col gap-8 border border-white shadow-sm group-hover:bg-white transition-all duration-700">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-black uppercase tracking-widest opacity-30 tracking-[0.2em]">Sync Velocity (Live)</span>
                <div className="size-9 rounded-xl bg-navy-custom flex items-center justify-center text-primary shadow-lg animate-pulse">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                </div>
              </div>
              <div className="h-40 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#dbe890" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#dbe890" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <YAxis hide domain={['dataMin - 500', 'dataMax + 500']} />
                    <Area type="monotone" dataKey="val" stroke="#152328" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" animationDuration={1500} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-navy-custom rounded-apple-sm p-4 text-white flex justify-between items-center group-hover:-translate-y-2 transition-transform shadow-xl">
                <div>
                   <div className="text-[8px] font-black uppercase tracking-[0.3em] text-primary mb-1">Status</div>
                   <div className="font-bold text-sm tracking-tight">Active Stream Monitoring</div>
                </div>
                <div className="size-7 bg-primary/20 rounded-lg flex items-center justify-center">
                  <div className="size-1.5 bg-primary rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 02. Safety Hub */}
        <div className="md:col-span-12 lg:col-span-4 bg-white rounded-apple p-8 shadow-bento hover:shadow-bento-hover transition-all duration-700 border border-gray-100 flex flex-col group overflow-hidden reveal-right">
          <div className="flex items-center justify-between mb-6">
             <span className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-primary/20 text-navy-custom">Fleet Tracking</span>
             <div className="size-2.5 bg-green-500 rounded-full shadow-[0_0_12px_#22c55e]"></div>
          </div>
          <h3 className="text-2xl font-extrabold mb-3 tracking-tighter text-navy-custom">Live Fleet GPS</h3>
          <p className="text-navy-custom/40 text-sm font-medium mb-8 leading-relaxed">High-fidelity GPS trajectories and arrival predictions for every school route.</p>
          
          <div className="mt-auto relative w-full h-48 bg-apple-grey rounded-apple-sm border border-gray-100 overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#152328 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
             <div className="w-full max-w-[220px]">
                <Lottie animationData={busAnimationData} loop={true} />
             </div>
             <div className="absolute bottom-4 left-5">
                <div className="flex items-center gap-2">
                   <div className="size-1.5 bg-primary rounded-full animate-pulse"></div>
                   <span className="text-[8px] font-black uppercase tracking-widest text-navy-custom/30">Bus 4A Active</span>
                </div>
             </div>
          </div>
        </div>

        {/* 03. Momentum Feed */}
        <div className="md:col-span-12 lg:col-span-4 bg-primary rounded-apple pt-8 px-0 shadow-bento hover:shadow-bento-hover transition-all duration-700 flex flex-col border border-primary/20 overflow-hidden group reveal relative" style={{ transitionDelay: '0.1s' }}>
          <div className="flex justify-between items-center mb-6 px-8 relative z-10">
             <div className="px-3 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest bg-navy-custom text-primary shadow-lg flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                LIVE NOW
             </div>
          </div>
          <div className="px-8 mb-6">
            <h3 className="text-3xl font-black tracking-tighter text-navy-custom leading-none uppercase ">Momentum</h3>
            <p className="text-[10px] font-black text-navy-custom/30 uppercase tracking-[0.2em] mt-3">Institution Social Node</p>
          </div>
          <div className="mt-auto relative z-10 px-8">
             <div className="bg-white/80 backdrop-blur-[40px] rounded-t-[40px] p-7 shadow-2xl border-t border-white/50 border-x border-white/30 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                <div className="flex items-center justify-between mb-5">
                   <div className="flex items-center gap-3">
                      <div className="size-11 rounded-full bg-navy-custom text-primary flex items-center justify-center font-bold text-xs border-2 border-primary/40 shadow-xl group-hover:rotate-12 transition-transform">JJ</div>
                      <div>
                         <div className="text-[12px] font-black text-navy-custom leading-none mb-1">Ms. John Jacob</div>
                         <div className="text-[9px] font-bold text-navy-custom/40 uppercase tracking-widest">Sr. Physics Faculty</div>
                      </div>
                   </div>
                   <div className="text-[9px] font-black text-navy-custom/20">JUST NOW</div>
                </div>
                <p className="text-[14px] font-bold text-navy-custom/80 leading-[1.4] mb-7">
                   "Institutional Grade Analytics for the Kinetic Theory module have been deployed to all parents. 92% mastery achieved."
                </p>
                <div className="flex items-center justify-between pt-5 border-t border-navy-custom/5">
                   <div className="flex gap-6">
                      <div className="flex items-center gap-2 cursor-pointer group/action">
                         <div className="size-8 bg-navy-custom/5 rounded-full flex items-center justify-center group-hover/action:bg-navy-custom transition-all">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-navy-custom/40 group-hover/action:text-primary"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
                         </div>
                         <span className="text-[10px] font-black text-navy-custom/40">124</span>
                      </div>
                   </div>
                   <div className="size-9 bg-navy-custom rounded-2xl flex items-center justify-center text-primary shadow-lg hover:scale-110 transition-transform cursor-pointer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* 04. Peer Communities */}
        <div className="md:col-span-12 lg:col-span-8 bg-navy-custom rounded-apple p-10 md:p-12 shadow-bento hover:shadow-bento-hover transition-all duration-700 flex flex-col border border-navy-custom group gap-12 relative overflow-hidden reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="flex flex-col lg:flex-row h-full gap-12 relative z-10">
            <div className="flex-1 flex flex-col justify-between">
               <div>
                  <div className="flex gap-2 mb-8">
                     <span className="px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-white/5 text-primary border border-white/10">v4.0 Hub</span>
                     <span className="px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-primary text-navy-custom">Synthesis ACTIVE</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tighter leading-tight text-white uppercase">Peer Knowledge <br/>Communities.</h3>
                  <p className="text-white/40 text-base font-medium leading-relaxed max-w-sm">From passive consumers to active creators. High-fidelity forums for students.</p>
               </div>
               <div className="mt-10 pt-10 border-t border-white/5">
                  <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/20 mb-5">Trending Perspectives</div>
                  <div className="flex flex-wrap gap-2">
                     {['Calculus', 'AI Ethics', 'Vedic Math'].map(tag => (
                        <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 text-[8px] font-bold text-white/40 border border-white/5 hover:bg-primary/20 hover:text-primary transition-all">#{tag}</span>
                     ))}
                  </div>
               </div>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                {[
                  { q: 'Calculus Synthesis', up: 42, color: 'bg-primary/10 text-primary border-primary/20' },
                  { q: 'Organic Chem Hub', up: 89, color: 'bg-white/5 text-white/40 border-white/5' },
                  { q: 'State Syllabus Prep', up: 156, color: 'bg-white/10 text-white border-white/10' }
                ].map((item, i) => (
                    <div key={i} className={`p-5 rounded-apple-sm border flex items-center justify-between hover:bg-white/10 transition-all cursor-pointer group/item hover:-translate-y-1 ${item.color}`}>
                      <div className="flex items-center gap-4">
                          <div className="size-9 bg-white/5 rounded-xl flex items-center justify-center text-[9px] font-black group-hover/item:bg-primary group-hover/item:text-navy-custom transition-all">#{item.up}</div>
                          <span className="font-bold text-sm tracking-tight">{item.q}</span>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="opacity-0 group-hover/item:opacity-100 transition-all"><path d="m9 18 6-6-6-6"/></svg>
                    </div>
                ))}
              </div>
              <div className="mt-10 flex items-center justify-between bg-white/5 p-5 rounded-[32px] border border-white/5 group-hover:bg-white/10 transition-all">
                <div className="flex items-center gap-4">
                  <div className="size-9 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  </div>
                  <div className="text-white text-[11px] font-black">12.4K Global Discussions</div>
                </div>
                <div className="size-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 - 1:1 RESTORED DETAILS */}
        <div className="md:col-span-12 lg:col-span-4 bg-white rounded-apple p-8 shadow-bento hover:shadow-bento-hover transition-all duration-700 border border-gray-100 group flex flex-col justify-between overflow-hidden relative reveal" style={{ transitionDelay: '0.1s' }}>
          <div>
            <div className="px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-[0.2em] bg-navy-custom text-primary mb-6 w-fit">Institutional Pulse</div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-navy-custom tracking-tighter mb-4">Performance <br/>Fidelity</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl md:text-5xl font-black text-navy-custom tracking-tighter">8.4</span>
              <span className="text-xl font-black text-primary">x</span>
            </div>
          </div>
          <div className="space-y-3">
             <div className="flex justify-between text-[9px] font-black uppercase tracking-widest text-navy-custom/30">
                <span>Efficiency</span>
                <span className="text-navy-custom">OPTIMAL</span>
             </div>
             <div className="h-1.5 w-full bg-apple-grey rounded-full overflow-hidden">
                <div className="h-full w-[84%] bg-navy-custom group-hover:bg-primary transition-all duration-700"></div>
             </div>
          </div>
        </div>

        <div className="md:col-span-12 lg:col-span-4 bg-navy-custom rounded-apple p-8 shadow-bento hover:shadow-bento-hover transition-all duration-700 border border-navy-custom group flex flex-col justify-between overflow-hidden relative reveal" style={{ transitionDelay: '0.2s' }}>
          <div>
            <div className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] bg-white/10 text-primary mb-6 w-fit">Academic Core</div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tighter mb-4">CBSE & State <br/>Sync Engine</h3>
            <p className="text-white/30 text-sm font-medium leading-relaxed">Syllabus-aligned chapters distilled into high-fidelity modules.</p>
          </div>
          <div className="flex gap-2 pt-6">
            {[1,2,3,4,5].map(i => <div key={i} className="h-1 flex-1 bg-white/10 rounded-full group-hover:bg-primary transition-all duration-500" style={{ transitionDelay: `${i*100}ms` }}></div>)}
          </div>
        </div>

        <div className="md:col-span-12 lg:col-span-4 bg-white rounded-apple p-8 shadow-bento hover:shadow-bento-hover transition-all duration-700 border border-gray-100 group flex flex-col justify-between overflow-hidden relative reveal" style={{ transitionDelay: '0.3s' }}>
           {/* RESTORED BLUR ORB */}
           <div className="absolute -bottom-8 -right-8 size-24 bg-primary/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-1000"></div>
           <div>
             <div className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] bg-primary text-navy-custom mb-6 w-fit">Safety Protocol</div>
             <h3 className="text-2xl md:text-3xl font-extrabold text-navy-custom tracking-tighter mb-4">Neural <br/>Presence</h3>
             <p className="text-navy-custom/40 text-sm font-medium leading-relaxed">Automated attendance triggers instant parent verification alerts.</p>
           </div>
           <div className="flex items-center gap-3 pt-6">
              <div className="size-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
              <span className="text-[9px] font-black uppercase tracking-widest text-navy-custom/30">Verification active</span>
           </div>
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;