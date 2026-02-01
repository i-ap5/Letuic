
import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Start Teaching',
    tag: 'For Teachers',
    description: 'Teachers just teach. We handle the rest. Mark attendance and share notes in seconds.'
  },
  {
    num: '02',
    title: 'Learn without limits',
    tag: 'For Students',
    description: "School follows you home, in the best way. Get notes, ask questions, and check your marks anytime."
  },
  {
    num: '03',
    title: 'Connect from home',
    tag: 'For Parents',
    description: "You're always in the loop, without the stress. Know about the bus, marks, and everything else."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="container max-w-[1280px] mx-auto px-4 md:px-6 mb-32">
      <div className="flex flex-col items-center text-center mb-20 reveal">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-12 bg-navy-custom/10"></div>
          <span className="text-[10px] font-black tracking-[0.6em] text-navy-custom/30 uppercase">
            Simple Magic
          </span>
          <div className="h-px w-12 bg-navy-custom/10"></div>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-navy-custom tracking-tighter leading-none mb-8">
          How it <br />Helps You.
        </h2>
        <p className="text-base md:text-lg text-navy-custom/40 font-medium max-w-xl leading-relaxed">
          We keep things simple so you can focus on what matters most, learning and growing.
        </p>
      </div>

      <div className="relative">
        <div className="absolute top-[50%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-navy-custom/5 to-transparent hidden lg:block -translate-y-1/2"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
          {steps.map((step, i) => (
            <div key={step.num} className="group relative flex flex-col items-center reveal-scale" style={{ transitionDelay: `${i * 0.2}s` }}>
              <div className="bg-white rounded-[32px] p-10 shadow-sm border border-gray-100 flex flex-col items-center text-center group-hover:shadow-premium group-hover:border-navy-custom/5 transition-all duration-700 flex-1 hover:-translate-y-2 relative overflow-hidden">

                <div className="absolute -top-6 -right-6 p-6 text-[140px] font-black text-navy-custom/[0.02] select-none pointer-events-none group-hover:text-primary/10 transition-colors leading-none">
                  {step.num}
                </div>

                <div className="flex items-center gap-3 mb-8 relative z-10 w-full justify-center">
                  <div className="size-10 rounded-xl bg-navy-custom flex items-center justify-center text-primary shadow-lg group-hover:rotate-[15deg] transition-all duration-500">
                    <span className="text-xs font-black">{step.num}</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-full uppercase bg-apple-grey text-[9px] font-black tracking-[0.2em] text-navy-custom/30 group-hover:bg-primary group-hover:text-navy-custom transition-all">
                    {step.tag}
                  </div>
                </div>

                {/* --- VISUALLY SYNCHRONIZED PREMIUM ICONS --- */}
                <div className="size-20 relative mb-10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/0 blur-2xl group-hover:bg-primary/25 transition-all duration-700 rounded-full"></div>

                  <div className="relative size-16 bg-navy-custom/5 rounded-2xl flex items-center justify-center text-navy-custom/50 group-hover:bg-navy-custom group-hover:text-white transition-all duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 z-10 shadow-sm border border-navy-custom/5">

                    {/* Step 1: Teacher (Tablet - Width 14, Height 18) */}
                    {i === 0 && (
                      <div className="relative size-8 flex items-center justify-center">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="5" y="3" width="14" height="18" rx="2" ry="2" />
                          <circle cx="12" cy="18" r="0.5" fill="currentColor" />
                        </svg>
                        <div className="absolute inset-x-0 top-0 h-full flex items-center justify-center overflow-hidden pointer-events-none">
                          <div className="w-3.5 h-[2px] bg-primary group-hover:animate-[scan_2s_ease-in-out_infinite] shadow-[0_0_8px_theme(colors.primary.DEFAULT)] opacity-0 group-hover:opacity-100 absolute top-4"></div>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary mt-1 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-500">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Student (Graduation Cap - Standardized Width 20) */}
                    {i === 1 && (
                      <div className="relative size-8 flex items-center justify-center">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 group-hover:rotate-[-5deg] transition-all duration-500">
                          <path d="M22 10l-10-5-10 5 10 5 10-5z" />
                          <path d="M6 12v5c3 3 9 3 12 0v-5" />
                          <path d="M22 10v6" />
                        </svg>
                        <div className="absolute top-0 right-0 size-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-3 group-hover:translate-x-2 transition-all duration-700"></div>
                      </div>
                    )}

                    {/* Step 3: Parent (House - Unified Width 14, Height 18) */}
                    {i === 2 && (
                      <div className="relative size-8 flex items-center justify-center">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 10l7-7 7 7v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V10z" />
                        </svg>
                        {/* Perfect Centered Carousel in House Body */}
                        <div className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 size-5 overflow-hidden pointer-events-none">
                          <div className="flex flex-col items-center transition-transform duration-1000 group-hover:animate-[cycleSteps_4s_ease-in-out_infinite]">
                            <div className="size-5 mb-3 flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 11V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v5l-1 1v2h1v4h2v-4h8v4h2v-4h1v-2l-1-1zm-10 0V8h8v3H8zm1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" /></svg>
                            </div>
                            <div className="size-5 mb-3 flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                            </div>
                            <div className="size-5 mb-3 flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                            </div>
                            <div className="size-5 flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 11V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v5l-1 1v2h1v4h2v-4h8v4h2v-4h1v-2l-1-1zm-10 0V8h8v3H8zm1 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" /></svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold mb-4 text-navy-custom tracking-tight leading-tight z-10">
                  {step.title}
                </h3>
                <p className="text-navy-custom/50 text-base leading-relaxed font-medium max-w-[260px] z-10">
                  {step.description}
                </p>

                <div className="mt-10 w-6 h-[1.5px] bg-navy-custom/5 rounded-full group-hover:w-full group-hover:bg-primary transition-all duration-1000"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 flex justify-center reveal"></div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scan {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(14px); }
        }
        @keyframes cycleSteps {
          0%, 20% { transform: translateY(0); }
          25%, 45% { transform: translateY(-32px); }
          50%, 70% { transform: translateY(-64px); }
          75%, 95% { transform: translateY(-96px); }
          100% { transform: translateY(0); }
        }
      `}} />
    </section>
  );
};

export default HowItWorks;