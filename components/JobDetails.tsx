import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface JobDetailsProps {
    onNavigate: (view: 'home' | 'contact' | 'community' | 'careers') => void;
}

const JobDetails: React.FC<JobDetailsProps> = ({ onNavigate }) => {
    const navigate = useNavigate();
    const [file, setFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Controlled inputs and specific errors
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });
    const [errors, setErrors] = useState<{ firstName?: string, lastName?: string, email?: string, file?: string, server?: string }>({});
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleFileProcess = (selectedFile: File) => {
        setErrors(prev => ({ ...prev, file: undefined }));
        if (selectedFile.type !== 'application/pdf' && !selectedFile.name.toLowerCase().endsWith('.pdf')) {
            setErrors(prev => ({ ...prev, file: 'Please upload a valid PDF file.' }));
            return;
        }
        if (selectedFile.size > 1 * 1024 * 1024) {
            setErrors(prev => ({ ...prev, file: 'File size exceeds 1MB limit.' }));
            return;
        }
        setFile(selectedFile);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            handleFileProcess(e.target.files[0]);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileProcess(e.dataTransfer.files[0]);
        }
    };

    const validateForm = () => {
        const newErrors: typeof errors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required.';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required.';

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        if (!file) newErrors.file = 'Please attach your CV in PDF format.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});

        if (!validateForm() || !file) {
            return;
        }

        setIsSubmitting(true);

        const apiFormData = new FormData();
        apiFormData.append('firstName', formData.firstName);
        apiFormData.append('lastName', formData.lastName);
        apiFormData.append('email', formData.email);
        apiFormData.append('cv', file);

        try {
            const response = await fetch('/api/submit-application', {
                method: 'POST',
                body: apiFormData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit application');
            }

            setSubmitted(true);
        } catch (error: any) {
            console.error("Submission error:", error);
            setErrors({ server: error.message || 'Something went wrong. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="container max-w-[1280px] mx-auto px-5 md:px-10 pt-28 md:pt-32 pb-16 md:pb-24 relative min-h-screen overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-[40%] aspect-square bg-navy-custom/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/4 -z-10"></div>
            <div className="absolute bottom-1/4 right-0 w-[30%] aspect-square bg-primary/10 blur-[100px] rounded-full translate-x-1/3 -z-10"></div>

            <div className="max-w-[1100px] mx-auto relative z-10">
                <button
                    onClick={() => navigate('/careers')}
                    className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-navy-custom/40 hover:text-primary transition-colors mb-12 group"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:-translate-x-1 transition-transform">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to Careers
                </button>

                <div className="mb-16 reveal">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black tracking-widest uppercase shadow-sm">
                            Growth Team
                        </span>
                        <span className="px-4 py-1.5 rounded-full bg-navy-custom/5 text-navy-custom/50 text-[10px] font-black tracking-widest uppercase">
                            Internship
                        </span>
                        <span className="px-4 py-1.5 rounded-full bg-navy-custom/5 text-navy-custom/50 text-[10px] font-black tracking-widest uppercase">
                            On-site
                        </span>
                        <span className="px-4 py-1.5 rounded-full bg-navy-custom/5 text-navy-custom/50 text-[10px] font-black tracking-widest uppercase">
                            4 Months
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-navy-custom tracking-tighter mb-6 leading-[0.95]">
                        Growth Marketing Intern
                    </h1>
                    <p className="text-lg md:text-xl text-navy-custom/50 font-medium leading-relaxed max-w-2xl">
                        Help us scale Letuic's reach to educators and students worldwide. Join a fast-paced team and make a real impact on our growth trajectory.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Job Description */}
                    <div className="lg:col-span-7 space-y-12 text-navy-custom/70 reveal-left">
                        <section>
                            <h3 className="text-2xl font-black text-navy-custom mb-4 tracker-tight">About the Role</h3>
                            <p className="leading-relaxed font-medium">
                                As a Growth Marketing Intern, you will work directly with our core team to devise and execute strategies
                                that drive user acquisition and engagement, primarily focusing on marketing and sales. You will have a hands-on role in shaping our brand presence
                                across multiple channels, measuring the impact of our campaigns, and contributing significantly to the company's overall growth plan.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-black text-navy-custom mb-4 tracker-tight">What You'll Do</h3>
                            <ul className="space-y-3 font-medium">
                                <li className="flex items-start gap-3">
                                    <div className="size-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <span>Spearhead initiatives primarily across marketing and sales channels.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="size-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <span>Execute and refine the overarching company growth plan.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="size-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <span>Assist in creating and managing campaigns across social media and email.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="size-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <span>Analyze data sets to identify growth opportunities and optimize user funnels.</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-2xl font-black text-navy-custom mb-4 tracker-tight">Who You Are</h3>
                            <ul className="space-y-3 font-medium">
                                <li className="flex items-start gap-3">
                                    <div className="size-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <span>Currently pursuing or holding an MBA or any equivalent Bachelor's degree.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="size-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <span>Strong analytical skills with a data-driven mindset.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="size-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <span>Strong communication and creative ideas for engaging our audience.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="size-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                    <span>Passionate about education technology and growth-focused environments.</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-2xl font-black text-navy-custom mb-4 tracker-tight">Important Details</h3>
                            <p className="leading-relaxed font-medium">
                                This is an <span className="text-navy-custom font-black">On-site</span> position. The duration of this internship is <span className="text-navy-custom font-black">4 months</span>, with a high possibility to convert to a <span className="text-primary font-black">Full-Time role</span> based on performance.
                                Remuneration will be provided as per industry standards.
                            </p>
                        </section>
                    </div>

                    {/* Application Form */}
                    <div className="lg:col-span-5 w-full reveal-right">
                        <div className="md:bg-white md:rounded-[32px] pt-8 md:p-8 md:border md:border-navy-custom/10 sticky top-32">
                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
                                    <div>
                                        <h2 className="text-2xl font-black text-navy-custom tracking-tighter mb-2">Apply Here.</h2>
                                        <p className="text-[11px] font-medium text-navy-custom/40 mb-8">
                                            Prefer email? Send your CV directly to <a href="mailto:hr@letuic.com" className="text-primary hover:underline font-bold">hr@letuic.com</a>
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-[10px] font-black uppercase tracking-widest text-navy-custom/40 ml-2">First Name <span className="text-red-500">*</span></label>
                                            <input
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                type="text"
                                                className={`w-full bg-apple-grey/60 border rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none mt-1 ${errors.firstName ? 'border-red-400 focus:ring-red-400' : 'border-transparent'}`}
                                            />
                                            {errors.firstName && <p className="text-red-500 text-[10px] mt-1 ml-2">{errors.firstName}</p>}
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-black uppercase tracking-widest text-navy-custom/40 ml-2">Last Name <span className="text-red-500">*</span></label>
                                            <input
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                type="text"
                                                className={`w-full bg-apple-grey/60 border rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none mt-1 ${errors.lastName ? 'border-red-400 focus:ring-red-400' : 'border-transparent'}`}
                                            />
                                            {errors.lastName && <p className="text-red-500 text-[10px]  mt-1 ml-2">{errors.lastName}</p>}
                                        </div>
                                        <div>
                                            <label className="text-[10px] font-black uppercase tracking-widest text-navy-custom/40 ml-2">Email <span className="text-red-500">*</span></label>
                                            <input
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                type="email"
                                                className={`w-full bg-apple-grey/60 border rounded-xl py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none mt-1 ${errors.email ? 'border-red-400 focus:ring-red-400' : 'border-transparent'}`}
                                            />
                                            {errors.email && <p className="text-red-500 text-[10px]  mt-1 ml-2">{errors.email}</p>}
                                        </div>

                                        <div className="pt-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-navy-custom/40 ml-2 block mb-2">CV / Resume (PDF) <span className="text-red-500">*</span></label>
                                            <div className="relative">
                                                <input
                                                    type="file"
                                                    accept="application/pdf"
                                                    onChange={handleFileChange}
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                                    title=""
                                                />
                                                <div
                                                    onDragOver={handleDragOver}
                                                    onDragLeave={handleDragLeave}
                                                    onDrop={handleDrop}
                                                    className={`w-full border-2 border-dashed rounded-xl px-4 py-8 text-center transition-colors flex flex-col items-center justify-center gap-3 relative z-0
                                                        ${file ? 'border-primary/50 bg-primary/5' :
                                                            errors.file ? 'border-red-400 bg-red-50' :
                                                                isDragging ? 'border-primary bg-primary/10 scale-[1.02] shadow-inner' : 'border-navy-custom/10 bg-apple-grey/60'
                                                        }`}
                                                >
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={file ? 'text-primary' : errors.file ? 'text-red-400' : 'text-navy-custom/30'}>
                                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                        <polyline points="17 8 12 3 7 8" />
                                                        <line x1="12" y1="3" x2="12" y2="15" />
                                                    </svg>
                                                    {file ? (
                                                        <span className="text-primary font-bold text-xs">{file.name}</span>
                                                    ) : (
                                                        <div className="flex flex-col">
                                                            <span className={`font-bold text-[10px] tracking-normal ${errors.file ? 'text-red-500' : 'text-navy-custom/40'}`}>
                                                                {isDragging ? 'Drop PDF Here' : 'Drag & Drop or Click to Upload'}
                                                            </span>
                                                            <span className="text-[9px] font-bold text-navy-custom/30 mt-1">MAX SIZE: 1 MB</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            {errors.file && <p className="text-red-500 text-[10px] mt-2 ml-2">{errors.file}</p>}
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full mt-4 bg-navy-custom text-white hover:bg-black font-bold text-sm h-[56px] rounded-xl transition-all shadow-lg hover:shadow-primary/20 hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 flex justify-center items-center gap-2 group"
                                    >
                                        {isSubmitting ? (
                                            <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                Submit Application
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform">
                                                    <path d="M5 12h14" />
                                                    <path d="m12 5 7 7-7 7" />
                                                </svg>
                                            </>
                                        )}
                                    </button>

                                    {errors.server && (
                                        <div className="p-4 rounded-xl bg-red-50 border border-red-100 mt-4 text-center">
                                            <p className="text-red-500 text-xs font-bold">{errors.server}</p>
                                        </div>
                                    )}
                                </form>
                            ) : (
                                <div className="flex flex-col items-center justify-center text-center animate-fade-in w-full h-full space-y-6 py-10">
                                    <div className="size-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-2">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="animate-[scale_0.4s_ease-out]">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-navy-custom tracking-tighter mb-3">Application Received</h3>
                                        <p className="text-navy-custom/60 font-medium leading-relaxed text-sm">
                                            Thank you for applying. We'll review your CV and get back to you shortly.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobDetails;
