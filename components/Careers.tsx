import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPublishedJobs, Job } from '../lib/jobs';

interface CareersProps {
    onNavigate: (view: 'home' | 'contact' | 'community' | 'careers') => void;
}

const LOCATION_LABEL: Record<string, string> = {
    remote: 'Remote',
    onsite: 'On-site',
    hybrid: 'Hybrid',
};

const JOB_TYPE_LABEL: Record<string, string> = {
    full_time: 'Full time',
    part_time: 'Part time',
    internship: 'Internship',
    contract: 'Contract',
};

const Careers: React.FC<CareersProps> = ({ onNavigate }) => {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);

    const formatSalary = (min?: number, max?: number, currency?: string) => {
        if (!min && !max) return null;
        const cur = currency || '₹';
        if (min && max) return `${cur}${min.toLocaleString()} - ${max.toLocaleString()}`;
        return `${cur}${(min || max || 0).toLocaleString()}+`;
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const jobsData = await getPublishedJobs();
            setJobs(jobsData);
        } catch (error) {
            console.error("Error fetching jobs:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="container max-w-[1280px] mx-auto px-5 md:px-10 pt-28 md:pt-32 pb-16 md:pb-24 relative min-h-screen overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[40%] aspect-square bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[40%] aspect-square bg-navy-custom/5 blur-[120px] rounded-full translate-y-1/3 -translate-x-1/3 -z-10"></div>
            <div className="absolute top-0 right-0 w-[40%] aspect-square bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[40%] aspect-square bg-navy-custom/5 blur-[120px] rounded-full translate-y-1/3 -translate-x-1/3 -z-10"></div>
            <div className="mb-20 text-left reveal in-view max-w-[1000px] mx-auto">
                <div className="px-4 py-1.5 rounded-full bg-navy-custom/5 border border-navy-custom/10 text-[9px] font-black uppercase tracking-widest text-navy-custom w-fit mb-8">
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

            <div className="space-y-8 reveal-scale in-view max-w-[1000px] mx-auto">
                <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-custom/30 mb-8 border-b border-navy-custom/5 pb-4">
                    Open Positions
                </h2>

                {loading ? (
                    <div className="flex flex-col gap-6">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="p-8 rounded-[2.5rem] bg-navy/[0.02] border border-navy/[0.05] animate-pulse">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-2">
                                        <div className="w-20 h-5 bg-navy/5 rounded-lg" />
                                        <div className="w-24 h-5 bg-navy/5 rounded-lg" />
                                    </div>
                                    <div className="w-16 h-4 bg-navy/5 rounded-lg" />
                                </div>
                                <div className="w-[60%] h-10 bg-navy/10 rounded-xl mb-4" />
                                <div className="space-y-2 mb-8">
                                    <div className="w-[85%] h-4 bg-navy/5 rounded-lg" />
                                    <div className="w-[40%] h-4 bg-navy/5 rounded-lg" />
                                </div>
                                <div className="flex justify-between items-center pt-6 border-t border-navy/5">
                                    <div className="flex gap-8">
                                        <div className="w-24 h-10 bg-navy/5 rounded-lg" />
                                        <div className="w-20 h-10 bg-navy/5 rounded-lg" />
                                    </div>
                                    <div className="w-32 h-10 bg-navy/5 rounded-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : jobs.length > 0 ? (
                    jobs.map(job => (
                        <div
                            key={job.id}
                            onClick={() => navigate(`/careers/${job.slug}`)}
                            className="group block p-8 rounded-[2.5rem] bg-white border border-navy/5 hover:border-primary/20 hover:shadow-2xl hover:shadow-navy/5 transition-all duration-500 cursor-pointer relative overflow-hidden"
                        >
                            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex flex-wrap items-center gap-2">
                                        {job.department && (
                                            <span className="px-3 py-1 rounded-lg bg-navy text-primary text-[10px] font-black tracking-widest uppercase">
                                                {job.department}
                                            </span>
                                        )}
                                        <span className="px-3 py-1 rounded-lg bg-navy/5 text-navy/40 text-[10px] font-bold tracking-widest uppercase">
                                            {LOCATION_LABEL[job.location] || job.location}
                                        </span>
                                        {job.type && (
                                            <span className="px-3 py-1 rounded-lg bg-primary/10 text-navy/60 text-[10px] font-bold tracking-widest uppercase">
                                                {JOB_TYPE_LABEL[job.type] || job.type}
                                            </span>
                                        )}
                                    </div>
                                    <div className="text-[10px] font-black text-navy/10 uppercase tracking-[0.2em]">
                                        Ref: {job.id.slice(0, 8)}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-3xl md:text-4xl font-black text-navy group-hover:text-secondary transition-colors duration-300 tracking-tighter leading-none">
                                        {job.title}
                                    </h3>
                                    
                                    {job.description && (
                                        <p className="text-navy/40 text-sm font-medium line-clamp-2 leading-relaxed max-w-2xl">
                                            {job.description}
                                        </p>
                                    )}
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-6 pt-4 border-t border-navy/5">
                                    <div className="flex flex-wrap items-center gap-8">
                                        {job.showSalary && (job.salaryMin || job.salaryMax) && (
                                            <div className="flex flex-col">
                                                <span className="text-[9px] font-black text-navy/20 uppercase tracking-widest mb-1">Salary range</span>
                                                <span className="text-sm font-bold text-navy">
                                                    {formatSalary(job.salaryMin, job.salaryMax, job.salaryCurrency)}
                                                </span>
                                            </div>
                                        )}
                                        <div className="flex flex-col">
                                            <span className="text-[9px] font-black text-navy/20 uppercase tracking-widest mb-1">
                                                {job.duration ? 'Duration' : 'Employment'}
                                            </span>
                                            <span className="text-sm font-bold text-navy">
                                                {job.duration || (job.type ? JOB_TYPE_LABEL[job.type] : 'Full time')}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 text-secondary font-bold text-sm">
                                        View position
                                        <div className="size-10 rounded-full bg-navy/5 group-hover:bg-secondary group-hover:text-white flex items-center justify-center transition-all duration-300">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform">
                                                <path d="M5 12h14" />
                                                <path d="m12 5 7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12 bg-navy-custom/[0.02] rounded-[2rem] border border-dashed border-navy-custom/10">
                        <p className="text-navy-custom/40 font-medium">No open positions at the moment. Check back later!</p>
                    </div>
                )}
            </div>

            {/* General Applications / HR Contact - Hidden as requested */}
            {/* <div className="mt-24 max-w-[1000px] mx-auto reveal-scale text-center">
                <div className="p-10 rounded-[32px] bg-white border border-gray-100 shadow-premium glass-card relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-black text-navy mb-4">Don't see your role?</h3>
                        <p className="text-navy/50 font-medium mb-6 max-w-lg mx-auto">
                            We're always looking for exceptional talent. Send your open application and let us know how you can make a difference.
                        </p>
                        <a
                            href="mailto:hr@letuic.com"
                            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all shadow-lg hover:-translate-y-1 group"
                        >
                            Email Us
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div> */}
        </section >
    );
};

export default Careers;
