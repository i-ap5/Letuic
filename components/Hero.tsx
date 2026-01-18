
import React from 'react';

interface HeroProps {
  onOpenAssistant: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAssistant }) => {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#F8F9FA] overflow-hidden pt-24">
      {/* Ultra-High-Fidelity Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Organic Orbs */}
        <div className="absolute top-[-10%] left-[-5%] w-[70vw] h-[70vw] bg-primary/20 rounded-full blur-[160px] animate-pulse-glow"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[60vw] h-[60vw] bg-navy-custom/5 rounded-full blur-[140px]"></div>
        
        {/* Subtle Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ 
          backgroundImage: 'linear-gradient(#152328 1px, transparent 1px), linear-gradient(90deg, #152328 1px, transparent 1px)', 
          backgroundSize: '80px 80px' 
        }}></div>
      </div>

      {/* Spatial Awareness Widgets (Desktop Optimized) */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden xl:block">
        {/* Real-time Logistics Widget */}
        <div className="absolute top-[20%] left-[8%] animate-float-diagonal pointer-events-auto">
          <div className="glass-card p-5 rounded-[32px] shadow-premium w-64 border border-white/80 group hover:scale-105 transition-all duration-1000 animate-slide-in-left opacity-0" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="size-11 bg-navy-custom rounded-2xl flex items-center justify-center text-primary shadow-lg group-hover:rotate-12 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div className="flex-1">
                <div className="text-[9px] font-black uppercase tracking-[0.25em] text-navy-custom/30">Fleet GPS</div>
                <div className="text-xs font-bold text-navy-custom">Bus 4A Arriving</div>
              </div>
            </div>
            <div className="flex gap-1">
               {[1,2,3,4,5].map(i => <div key={i} className={`h-1 flex-1 rounded-full ${i < 4 ? 'bg-primary' : 'bg-navy-custom/5'}`}></div>)}
            </div>
          </div>
        </div>

        {/* Neural Attendance Widget */}
        <div className="absolute bottom-[30%] right-[8%] animate-float-alt pointer-events-auto">
          <div className="glass-card p-6 rounded-[36px] shadow-premium w-72 border border-white/80 group hover:-translate-y-4 transition-all duration-1000 animate-slide-in-right opacity-0" style={{ animationDelay: '1s' }}>
             <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-[9px] font-black uppercase tracking-[0.25em] text-navy-custom/30 mb-1">Campus Sync</div>
                  <div className="text-2xl font-black text-navy-custom tracking-tighter leading-none">98.2%</div>
                </div>
                <div className="size-12 bg-primary/15 rounded-[20px] flex items-center justify-center text-navy-custom">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                </div>
             </div>
             <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Parent Alerts Sent</span>
                <div className="flex-1 h-px bg-navy-custom/5"></div>
             </div>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center container max-w-[1400px] mx-auto px-6 text-center">
        {/* Sophisticated Reveal Badge */}
        <div className="inline-flex items-center gap-4 bg-white/40 backdrop-blur-2xl px-6 py-2 rounded-full shadow-sm border border-white/60 mb-12 animate-fade-up opacity-0">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-[0_0_10px_#dbe890]"></span>
          </span>
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.5em] text-navy-custom/40">Modern Edu-Partner</span>
        </div>

        {/* Monumental Typography */}
        <h1 className="text-7xl md:text-9xl lg:text-[120px] xl:text-[130px] font-extrabold text-navy-custom leading-[0.82] max-w-7xl mx-auto mb-16 tracking-[-0.08em] animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
          Educational <br className="hidden lg:block"/>
          <span className="text-gradient">Fidelity</span> Hub.
        </h1>

        {/* Refined Brand Context */}
        <p className="text-lg md:text-xl text-navy-custom/30 max-w-2xl mx-auto leading-relaxed font-medium mb-16 animate-fade-up opacity-0" style={{ animationDelay: '0.4s' }}>
          Real-time performance metrics, logistics, and chapter-synced deployment. Built exclusively for elite CBSE & State institutions.
        </p>

        {/* CTA Synergy */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 animate-fade-up opacity-0" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={onOpenAssistant}
            className="w-full sm:w-auto bg-navy-custom text-white pl-12 pr-6 py-6 rounded-[28px] font-bold text-xl hover:bg-black hover:shadow-2xl hover:shadow-navy-custom/30 hover:-translate-y-2 transition-all duration-700 flex items-center justify-center gap-10 active:scale-95 group"
          >
            Launch Assistant
            <div className="size-12 bg-primary rounded-2xl flex items-center justify-center text-navy-custom group-hover:rotate-[-15deg] transition-transform shadow-lg border border-white/5">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
            </div>
          </button>
          <button className="w-full sm:w-auto bg-white/20 backdrop-blur-3xl text-navy-custom border border-white px-14 py-6 rounded-[28px] font-bold text-xl hover:bg-white hover:shadow-premium transition-all duration-700 flex items-center justify-center gap-3 active:scale-95">
            View Platform
          </button>
        </div>
      </div>

      {/* High-End Feature Dock with Gradient Masking */}
      <div className="w-full border-t border-gray-200/40 bg-white/20 backdrop-blur-3xl py-12 relative z-30 overflow-hidden trusted-gradient animate-zoom-in opacity-0" style={{ animationDelay: '0.5s' }}>
        <div className="flex whitespace-nowrap animate-scroll-x">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-24 md:gap-48 px-24 md:px-48">
              {[
                { label: 'Syllabus Synchronization', icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20' },
                { label: 'Real-time Fleet GPS', icon: 'M19 17h2c.6 0 1-.4 1-1v-3' },
                { label: 'Neural Presence Log', icon: 'M16 21v-2a4 4 0 0 0-4-4H6' },
                { label: 'Growth Performance IQ', icon: 'M12 20V10' },
                { label: 'Adaptive Assessments', icon: 'M12 2v20' },
                { label: 'Campus Activity Stream', icon: 'M22 2 11 13' }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-6 group cursor-default">
                  <div className="size-11 rounded-2xl bg-navy-custom/5 border border-white/40 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-700">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-navy-custom/20 group-hover:text-navy-custom transition-colors"><path d={item.icon}/></svg>
                  </div>
                  <span className="text-[11px] md:text-xs font-black text-navy-custom/20 uppercase tracking-[0.45em] group-hover:text-navy-custom transition-colors">{item.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
