
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="max-w-xl w-full text-center reveal-scale in-view">
          <div className="size-24 bg-primary rounded-apple-sm flex items-center justify-center text-navy-custom mx-auto mb-10 shadow-glow">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <h2 className="text-5xl font-extrabold text-navy-custom mb-6 tracking-tighter">Transmission Successful.</h2>
          <p className="text-xl text-navy-custom/40 font-medium leading-relaxed">Your request for fidelity integration has been received. Our institutional specialists will contact you within 24 synchronization cycles.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-12 bg-navy-custom text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all"
          >
            Back to Platform
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-24 relative overflow-hidden px-6">
      {/* Background elements */}
      <div className="absolute top-0 right-0 size-[600px] bg-primary/10 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10"></div>
      
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="reveal-left in-view">
          <div className="px-6 py-2 rounded-full bg-navy-custom/5 border border-navy-custom/10 text-[10px] font-black uppercase tracking-[0.4em] text-navy-custom mb-10 w-fit">Inquiry Node</div>
          <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-navy-custom leading-[0.9] mb-10  ">Get in <br/><span className="text-gradient">Sync.</span></h2>
          <p className="text-xl text-navy-custom/40 font-medium leading-relaxed max-w-lg mb-16">
            Ready to deploy LetUIC Intelligence in your institution? Submit your telemetry data and let's orchestrate your educational future.
          </p>

          <div className="space-y-8">
            {[
              { label: 'Campus HQ', value: 'IT Park, TVM' },
              { label: 'Neural Line', value: '+91 800-000-222' },
              { label: 'Sync Channel', value: 'info@letuic.com' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="size-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:bg-primary transition-all duration-500">
                  <div className="size-1.5 bg-navy-custom rounded-full"></div>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-navy-custom/20">{item.label}</div>
                  <div className="text-lg font-bold text-navy-custom">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-right in-view">
          <div className="bg-white rounded-apple p-10 md:p-14 shadow-premium border border-white/80 glass-card">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-widest text-navy-custom/40 ml-2">Institutional Lead Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-apple-grey/60 border-none rounded-2xl py-5 px-6 font-medium focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-widest text-navy-custom/40 ml-2">Official Email Node</label>
                  <input 
                    required
                    type="email" 
                    placeholder="lead@institution.edu"
                    className="w-full bg-apple-grey/60 border-none rounded-2xl py-5 px-6 font-medium focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase tracking-widest text-navy-custom/40 ml-2">Contact Frequency (Phone)</label>
                <input 
                  required
                  type="tel" 
                  placeholder="+91 98765 43210"
                  className="w-full bg-apple-grey/60 border-none rounded-2xl py-5 px-6 font-medium focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-black uppercase tracking-widest text-navy-custom/40 ml-2">Integration Objectives</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell us about your institutional scale and goals..."
                  className="w-full bg-apple-grey/60 border-none rounded-3xl py-5 px-6 font-medium focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none resize-none"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-navy-custom text-white py-6 rounded-3xl font-bold text-xl hover:bg-black hover:shadow-2xl transition-all flex items-center justify-center gap-4 group disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="size-6 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                ) : (
                  <>
                    Deploy Inquiry
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
