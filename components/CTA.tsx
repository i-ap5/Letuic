
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-8 pb-32">
      <div className="bg-navy-custom rounded-[48px] p-24 text-center relative overflow-hidden">
        {/* Abstract shapes for depth */}
        <div className="absolute top-0 right-0 size-[600px] bg-primary/20 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 size-[400px] bg-primary/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          <h2 className="text-6xl lg:text-8xl font-extrabold text-white tracking-tighter leading-[0.9]">
            Ready to Upgrade your <span className="text-primary">Learning Ecosystem?</span>
          </h2>
          <p className="text-xl text-white/50 font-medium">
            Join the elite institutions building the future of digital education today.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-primary text-navy-custom px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-primary/20">
              Get Started Now
            </button>
            <button className="bg-white/10 text-white border border-white/20 px-12 py-5 rounded-full font-bold text-lg backdrop-blur-md hover:bg-white/20 transition-all">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
