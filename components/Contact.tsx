
// import React, { useState } from 'react';

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     description: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     // Simulate API call
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitted(true);
//     }, 1500);
//   };

//   if (submitted) {
//     return (
//       <section className="min-h-[80vh] flex items-center justify-center px-6">
//         <div className="max-w-xl w-full text-center reveal-scale in-view">
//           <div className="size-24 bg-primary rounded-apple-sm flex items-center justify-center text-navy-custom mx-auto mb-10 shadow-glow">
//             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
//           </div>
//           <h2 className="text-5xl font-extrabold text-navy-custom mb-6 tracking-tighter">Transmission Successful.</h2>
//           <p className="text-xl text-navy-custom/40 font-medium leading-relaxed">Your request for fidelity integration has been received. Our institutional specialists will contact you within 24 synchronization cycles.</p>
//           <button 
//             onClick={() => window.location.reload()} 
//             className="mt-12 bg-navy-custom text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all"
//           >
//             Back to Platform
//           </button>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="min-h-screen py-24 relative overflow-hidden px-6">
//       {/* Background elements */}
//       <div className="absolute top-0 right-0 size-[600px] bg-primary/10 blur-[140px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10"></div>

//       <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
//         <div className="reveal-left in-view">
//           <div className="px-6 py-2 rounded-full bg-navy-custom/5 border border-navy-custom/10 text-[10px] font-black uppercase tracking-[0.4em] text-navy-custom mb-10 w-fit">Inquiry Node</div>
//           <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter text-navy-custom leading-[0.9] mb-10  ">Get in <br/><span className="text-gradient">Sync.</span></h2>
//           <p className="text-xl text-navy-custom/40 font-medium leading-relaxed max-w-lg mb-16">
//             Ready to deploy LetUIC Intelligence in your institution? Submit your telemetry data and let's orchestrate your educational future.
//           </p>

//           <div className="space-y-8">
//             {[
//               { label: 'Campus HQ', value: 'IT Park, TVM' },
//               { label: 'Neural Line', value: '+91 800-000-222' },
//               { label: 'Sync Channel', value: 'info@letuic.com' }
//             ].map((item, i) => (
//               <div key={i} className="flex items-center gap-6 group">
//                 <div className="size-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:bg-primary transition-all duration-500">
//                   <div className="size-1.5 bg-navy-custom rounded-full"></div>
//                 </div>
//                 <div>
//                   <div className="text-[10px] font-black uppercase tracking-widest text-navy-custom/20">{item.label}</div>
//                   <div className="text-lg font-bold text-navy-custom">{item.value}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="reveal-right in-view">
//           <div className="bg-white rounded-apple p-10 md:p-14 shadow-premium border border-white/80 glass-card">
//             <form onSubmit={handleSubmit} className="space-y-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div className="space-y-3">
//                   <label className="text-[11px] font-black uppercase tracking-widest text-navy-custom/40 ml-2">Institutional Lead Name</label>
//                   <input 
//                     required
//                     type="text" 
//                     placeholder="John Doe"
//                     className="w-full bg-apple-grey/60 border-none rounded-2xl py-5 px-6 font-medium focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
//                     value={formData.name}
//                     onChange={(e) => setFormData({...formData, name: e.target.value})}
//                   />
//                 </div>
//                 <div className="space-y-3">
//                   <label className="text-[11px] font-black uppercase tracking-widest text-navy-custom/40 ml-2">Official Email Node</label>
//                   <input 
//                     required
//                     type="email" 
//                     placeholder="lead@institution.edu"
//                     className="w-full bg-apple-grey/60 border-none rounded-2xl py-5 px-6 font-medium focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                   />
//                 </div>
//               </div>

//               <div className="space-y-3">
//                 <label className="text-[11px] font-black uppercase tracking-widest text-navy-custom/40 ml-2">Contact Frequency (Phone)</label>
//                 <input 
//                   required
//                   type="tel" 
//                   placeholder="+91 98765 43210"
//                   className="w-full bg-apple-grey/60 border-none rounded-2xl py-5 px-6 font-medium focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
//                   value={formData.phone}
//                   onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                 />
//               </div>

//               <div className="space-y-3">
//                 <label className="text-[11px] font-black uppercase tracking-widest text-navy-custom/40 ml-2">Integration Objectives</label>
//                 <textarea 
//                   required
//                   rows={4}
//                   placeholder="Tell us about your institutional scale and goals..."
//                   className="w-full bg-apple-grey/60 border-none rounded-3xl py-5 px-6 font-medium focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none resize-none"
//                   value={formData.description}
//                   onChange={(e) => setFormData({...formData, description: e.target.value})}
//                 ></textarea>
//               </div>

//               <button 
//                 type="submit" 
//                 disabled={isSubmitting}
//                 className="w-full bg-navy-custom text-white py-6 rounded-3xl font-bold text-xl hover:bg-black hover:shadow-2xl transition-all flex items-center justify-center gap-4 group disabled:opacity-50"
//               >
//                 {isSubmitting ? (
//                   <div className="size-6 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
//                 ) : (
//                   <>
//                     Deploy Inquiry
//                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
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
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center reveal-scale">
          <div className="size-20 bg-primary rounded-[24px] flex items-center justify-center text-navy-custom mx-auto mb-8 shadow-lg">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
          </div>
          <h2 className="text-3xl font-black text-navy-custom mb-4 tracking-tighter">Transmission Successful.</h2>
          <p className="text-base text-navy-custom/40 font-medium">Your institutional telemetry has been received. Expect sync within 24 cycles.</p>
          <button onClick={() => window.location.reload()} className="mt-10 bg-navy-custom text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:scale-105 transition-all">
            Back to Platform
          </button>
        </div>
      </section>
    );
  }

  return (
    /* Container locked to 1280px with px-6/px-10 to match Bento Grid sides */
    <section className="container max-w-[1280px] mx-auto px-6 md:px-10 py-24 relative overflow-hidden">

      {/* Percentage-based background blur - Stops mobile breaking */}
      <div className="absolute top-0 right-0 w-[50%] aspect-square bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

        {/* Left Content - Takes 5 cols */}
        <div className="lg:col-span-5 space-y-10 reveal-left">
          <div className="px-4 py-1.5 rounded-full bg-navy-custom/5 border border-navy-custom/10 text-[9px] font-black uppercase tracking-[0.4em] text-navy-custom w-fit">
            Inquiry Node
          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-navy-custom leading-[0.95]">
            Get in <br /><span className="text-gradient">Sync.</span>
          </h2>

          <p className="text-base text-navy-custom/40 font-medium leading-relaxed max-w-sm">
            Ready to deploy Letuic Intelligence? Submit your telemetry data and let's orchestrate your educational future.
          </p>

          <div className="space-y-6 pt-4">
            {[
              { label: 'Campus HQ', value: 'IT Park, TVM' },
              { label: 'Neural Line', value: '+91 800-000-222' },
              { label: 'Sync Channel', value: 'info@letuic.com' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5 group">
                <div className="size-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:bg-primary transition-all duration-500">
                  <div className="size-1 bg-navy-custom rounded-full"></div>
                </div>
                <div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-navy-custom/20">{item.label}</div>
                  <div className="text-base font-bold text-navy-custom">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form - Takes 7 cols */}
        <div className="lg:col-span-7 w-full reveal-right">
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-premium border border-white/80 glass-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-navy-custom/40 ml-2">Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-apple-grey/60 border-none rounded-xl py-4 px-5 text-sm font-medium focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-navy-custom/40 ml-2">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-apple-grey/60 border-none rounded-xl py-4 px-5 text-sm font-medium focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-navy-custom/40 ml-2">Phone</label>
                <input
                  required
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-apple-grey/60 border-none rounded-xl py-4 px-5 text-sm font-medium focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-navy-custom/40 ml-2">Objectives</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Institution scale and goals..."
                  className="w-full bg-apple-grey/60 border-none rounded-2xl py-4 px-5 text-sm font-medium focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none resize-none"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-navy-custom text-white py-4.5 rounded-2xl font-bold text-base hover:bg-black transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Send Inquiry
                    <svg width="18" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
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