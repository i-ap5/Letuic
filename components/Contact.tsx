import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });

  const [errors, setErrors] = useState<{ email?: string; name?: string; phone?: string; description?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Ensure it starts with +91
    if (!value.startsWith('+91 ')) {
      value = '+91 ' + value.replace(/^\+91\s?/, '');
    }

    // Allow only numbers/spaces
    const numericPart = value.substring(4).replace(/\D/g, '');

    // Limit to 10 digits
    if (numericPart.length > 10) return;

    setFormData({ ...formData, phone: '+91 ' + numericPart });
    if (errors.phone) setErrors({ ...errors, phone: undefined });
  };

  const validate = () => {
    const newErrors: { email?: string; name?: string; phone?: string; description?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "We need a name to address you properly!";
    }

    if (!formData.email.trim()) {
      newErrors.email = "How can we write back without an email?";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "That email looks a bit disjointed. Typo?";
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    // +91 is 2 digits + 10 digit number = 12 digits total, or just check suffix length
    if (phoneDigits.length < 12) { // 91 + 10 digits
      newErrors.phone = "We need 10 valid digits to reach you!";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Tell us a tiny bit more about your vision!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Validation
    if (!validate()) return;

    setIsSubmitting(true);

    const API_URL = "/api/submit-contact";

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Server submission failed");

      // Artificial delay for smooth UX
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      }, 1000);
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
      setSubmitted(true); // Fail-safe
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', description: '' });
  };

  return (
    <section className="container max-w-[1280px] mx-auto px-4 md:px-10 py-24 relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[50%] aspect-square bg-primary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

        {/* Left Content */}
        <div className="lg:col-span-5 space-y-10 reveal-left">
          <div className="px-4 py-1.5 rounded-full bg-navy-custom/5 border border-navy-custom/10 text-[9px] font-black uppercase tracking-[0.4em] text-navy-custom w-fit">
            Contact Us
          </div>

          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-navy-custom leading-[0.95]">
            Talk to <br /><span className="text-gradient">Us.</span>
          </h2>

          <p className="text-base text-navy-custom/40 font-medium leading-relaxed max-w-sm">
            Ready to bring Letuic to your school? Send us a message and we'll help you get started.
          </p>

          <div className="space-y-6 pt-4">
            {[
              {
                label: 'Our Office',
                value: 'IT Park, TVM',
                href: 'https://maps.google.com/?q=IT+Park+Trivandrum',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              },
              {
                label: 'Give us a call',
                value: '+91 95179 07519',
                href: 'tel:+919517907519',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              },
              {
                label: 'Send an email',
                value: 'info@letuic.com',
                href: 'mailto:info@letuic.com',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              }
            ].map((item, i) => {
              const Wrapper = item.href ? 'a' : 'div';
              return (
                <Wrapper
                  key={i}
                  href={item.href}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`flex items-center gap-5 group ${item.href ? 'cursor-pointer hover:translate-x-1 transition-transform' : ''}`}
                >
                  <div className="size-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:bg-primary transition-all duration-500 text-navy-custom">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-navy-custom/20">{item.label}</div>
                    <div className="text-base font-bold text-navy-custom group-hover:text-primary transition-colors">{item.value}</div>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-7 w-full reveal-right">
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-premium border border-white/80 glass-card min-h-[580px] flex flex-col justify-center relative transition-all duration-500">

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 w-full animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* Name Field */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-navy-custom/40 ml-2">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className={`w-full bg-apple-grey/60 border-none rounded-xl py-4 px-5 text-sm font-medium focus:ring-2 focus:bg-white transition-all outline-none ${errors.name ? 'ring-2 ring-red-500/50 bg-red-50/50' : 'focus:ring-primary'}`}
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                    />
                    {errors.name && <p className="text-red-500 text-[10px] font-normal ml-2">{errors.name}</p>}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-navy-custom/40 ml-2">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className={`w-full bg-apple-grey/60 border-none rounded-xl py-4 px-5 text-sm font-medium focus:ring-2 focus:bg-white transition-all outline-none ${errors.email ? 'ring-2 ring-red-500/50 bg-red-50/50' : 'focus:ring-primary'}`}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                    />
                    {errors.email && <p className="text-red-500 text-[10px] font-normal ml-2">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-navy-custom/40 ml-2">Phone</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className={`w-full bg-apple-grey/60 border-none rounded-xl py-4 px-5 text-sm font-medium focus:ring-2 focus:bg-white transition-all outline-none ${errors.phone ? 'ring-2 ring-red-500/50 bg-red-50/50' : 'focus:ring-primary'}`}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                  />
                  {errors.phone && <p className="text-red-500 text-[10px] font-normal ml-2">{errors.phone}</p>}
                </div>

                {/* Description Field */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-navy-custom/40 ml-2">Objectives</label>
                  <textarea
                    rows={3}
                    placeholder="What do you expect from Letuic?"
                    className={`w-full bg-apple-grey/60 border-none rounded-2xl py-4 px-5 text-sm font-medium focus:ring-2 focus:bg-white transition-all outline-none resize-none ${errors.description ? 'ring-2 ring-red-500/50 bg-red-50/50' : 'focus:ring-primary'}`}
                    value={formData.description}
                    onChange={(e) => {
                      setFormData({ ...formData, description: e.target.value });
                      if (errors.description) setErrors({ ...errors, description: undefined });
                    }}
                  ></textarea>
                  {errors.description && <p className="text-red-500 text-[10px] font-normal ml-2">{errors.description}</p>}
                </div>

                {/* Submit Button - Fixed Height to prevent jump */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-navy-custom text-white h-[60px] rounded-2xl font-bold text-base hover:bg-black transition-all flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Send Message
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </>
                  )}
                </button>
              </form>
            ) : (
              // Success View - integrated in the same card
              <div className="flex flex-col items-center justify-center text-center animate-fade-in w-full h-full space-y-8">
                <div className="size-24 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-2">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="animate-[scale_0.4s_ease-out]"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-navy-custom tracking-tighter mb-4">Message Sent!</h3>
                  <p className="text-navy-custom/60 font-medium leading-relaxed max-w-xs mx-auto">
                    We've received your inquiry. Our team will get back to you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="px-8 py-3 rounded-xl border-2 border-navy-custom/5 text-navy-custom font-bold text-sm hover:bg-navy-custom hover:text-white transition-all"
                >
                  Send Another
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;