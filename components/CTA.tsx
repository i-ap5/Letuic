import React from 'react';

interface CTAProps {
  onNavigate?: (page: string) => void;
}

const CTA: React.FC<CTAProps> = ({ onNavigate }) => {
  return (
    /* 1340px width to match the new "bit more" scale */
    <section className="max-w-[1340px] mx-auto px-4 md:px-8 pb-20">

      {/* Container: Changed rounded and padding for mobile compatibility */}
      <div className="bg-navy-custom rounded-[32px] md:rounded-[48px] p-8 md:p-20 text-center relative overflow-hidden">

        {/* Abstract shapes: Changed from fixed size to % to stop mobile breaking */}
        <div className="absolute top-0 right-0 w-[80%] md:w-[50%] aspect-square bg-primary/20 blur-[80px] md:blur-[140px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[60%] md:w-[40%] aspect-square bg-primary/10 blur-[60px] md:blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Header: Fixed font sizes for mobile (text-3xl) vs Desktop (text-7xl) */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-[1.1] md:leading-[0.95] mb-6 md:mb-8">
            Ready to Upgrade your <br className="hidden md:block" />
            <span className="text-primary">Learning Ecosystem?</span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-white/50 font-medium mb-10 md:mb-12">
            Join the elite institutions building the future of digital education today.
          </p>

          {/* Buttons: Stack on mobile, side-by-side on desktop */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
            <button
              onClick={() => onNavigate?.('contact')}
              className="w-full sm:w-auto bg-primary text-navy-custom px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:scale-105 transition-all"
            >
              Get Started Now
            </button>
            <button className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg backdrop-blur-md hover:bg-white/20 transition-all">
              Talk to Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;