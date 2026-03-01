import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface CareersProps {
    onNavigate: (view: 'home' | 'contact' | 'community' | 'careers') => void;
}

const Careers: React.FC<CareersProps> = ({ onNavigate }) => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="container max-w-[1280px] mx-auto px-5 md:px-10 pt-28 md:pt-32 pb-16 md:pb-24 relative min-h-screen overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[40%] aspect-square bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[40%] aspect-square bg-navy-custom/5 blur-[120px] rounded-full translate-y-1/3 -translate-x-1/3 -z-10"></div>
            <div className="mb-20 text-left reveal max-w-[1000px] mx-auto">
                <div className="px-4 py-1.5 rounded-full bg-navy-custom/5 border border-navy-custom/10 text-[9px] font-black uppercase  text-navy-custom w-fit mb-8">
                    Careers
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-navy-custom tracking-tighter mb-6 leading-[0.95]">
                    Build the <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500">Future.</span>
                </h1>
                <p className="text-lg md:text-xl text-navy-custom/50 max-w-2xl font-medium leading-relaxed">
                    Join our mission to empower educators and students worldwide. We are looking for passionate individuals to scale and innovate with us.
                </p>
            </div>

            <div className="space-y-8 reveal-scale max-w-[1000px] mx-auto">
                <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-custom/30 mb-8 border-b border-navy-custom/5 pb-4">
                    Open Positions
                </h2>

                {/* Job Card */}
                <div
                    onClick={() => navigate('/careers/growth-intern')}
                    className="group block p-6 md:p-8 rounded-[2rem] bg-navy-custom/[0.02] border border-navy-custom/[0.04] hover:bg-white hover:border-primary/10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <div className="flex flex-wrap items-center gap-2 mb-4">
                                <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black tracking-widest uppercase shadow-sm">
                                    Growth Team
                                </span>
                                <span className="px-3 py-1.5 rounded-full bg-navy-custom/5 text-navy-custom/50 text-[10px] font-black tracking-widest uppercase">
                                    Full Time / On-site
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-navy-custom group-hover:text-primary transition-colors duration-300 tracking-tight">
                                Growth Marketing Intern
                            </h3>
                        </div>

                        <div className="flex items-center text-navy-custom/30 group-hover:text-primary transition-colors duration-300">
                            <span className="mr-4 font-black uppercase tracking-[0.2em] text-[10px] hidden md:block">View Details</span>
                            <div className="size-10 md:size-12 rounded-full bg-navy-custom/5 group-hover:bg-primary/10 flex items-center justify-center transition-colors duration-300">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* General Applications / HR Contact */}
            <div className="mt-24 max-w-[1000px] mx-auto reveal-scale text-center">
                <div className="p-10 rounded-[32px] bg-white border border-gray-100 shadow-premium glass-card relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-black text-navy-custom mb-4">Don't see your role?</h3>
                        <p className="text-navy-custom/50 font-medium mb-6 max-w-lg mx-auto">
                            We're always looking for exceptional talent. Send your open application and let us know how you can make a difference.
                        </p>
                        <a
                            href="mailto:hr@letuic.com"
                            className="inline-flex items-center gap-2 bg-navy-custom text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all shadow-lg hover:-translate-y-1 group"
                        >
                            Email Us
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Careers;
