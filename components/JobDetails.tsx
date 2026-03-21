import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getJobBySlug, submitApplication, markSubmitted, wasSubmitted, Job } from '../lib/jobs'

interface JobDetailsProps {
    onNavigate: (view: 'home' | 'contact' | 'community' | 'careers') => void
}

const LOCATION_LABEL: Record<string, string> = {
    remote: 'Remote', onsite: 'On-site', hybrid: 'Hybrid',
}

const JOB_TYPE_LABEL: Record<string, string> = {
    full_time: 'Full Time',
    part_time: 'Part Time',
    internship: 'Internship',
    contract: 'Contract',
}

const JobDetails: React.FC<JobDetailsProps> = ({ onNavigate }) => {
    const { slug } = useParams<{ slug: string }>()
    const navigate = useNavigate()

    const [job, setJob] = useState<Job | null>(null)
    const [loading, setLoading] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [isApplyOpen, setIsApplyOpen] = useState(false)

    // Form fields
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [resumeFile, setResumeFile] = useState<File | null>(null)
    const [answers, setAnswers] = useState<Record<string, string>>({})
    const [errors, setErrors] = useState<Record<string, string>>({})

    useEffect(() => {
        window.scrollTo(0, 0)
        if (slug) fetchJob(slug)
    }, [slug])

    // Prevent resubmit on refresh
    useEffect(() => {
        if (job && wasSubmitted(job.id)) setSubmitted(true)
    }, [job])

    // Disable background scroll when form is open
    useEffect(() => {
        if (isApplyOpen) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = 'unset'
        return () => { document.body.style.overflow = 'unset' }
    }, [isApplyOpen])

    const fetchJob = async (jobSlug: string) => {
        try {
            const data = await getJobBySlug(jobSlug)
            if (data && data.status !== 'draft') setJob(data)
            else setJob(null)
        } catch (error) {
            console.error('Error fetching job:', error)
        } finally {
            setLoading(false)
        }
    }

    const validate = () => {
        const newErrors: Record<string, string> = {}
        if (!name.trim()) newErrors['name'] = 'Full name is required.'
        if (!email.trim()) newErrors['email'] = 'Email address is required.'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            newErrors['email'] = 'Please enter a valid email address.'
        if (!phone.trim()) {
            newErrors['phone'] = 'Phone number is required.'
        } else if (!/^[6-9]\d{9}$/.test(phone.replace(/[\s\-+]/g, '').slice(-10))) {
            newErrors['phone'] = 'Please enter a valid 10-digit Indian mobile number.'
        }
        if (!resumeFile) newErrors['resume'] = 'Please upload your resume.'
        job?.questions?.forEach(q => {
            if (q.required && !answers[q.id]?.trim())
                newErrors[q.id] = `${q.label} is required.`
        })
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!job || !validate()) return
        setIsSubmitting(true)

        // Standardize phone number to +91 XXXXXXXXXX
        const cleanPhone = phone.replace(/[\s\-+]/g, '').slice(-10)
        const formattedPhone = `+91 ${cleanPhone}`

        try {
            await submitApplication(job, {
                name: name.trim(),
                email: email.trim(),
                phone: formattedPhone,
                resumeFile: resumeFile!,
                answers
            })
            markSubmitted(job.id)
            setSubmitted(true)
        } catch (error) {
            console.error('Submission error:', error)
            setErrors({ server: 'Failed to submit application. Please try again later.' })
        } finally {
            setIsSubmitting(false)
        }
    }

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="size-12 border-4 border-navy-custom/10 border-t-primary rounded-full animate-spin" />
        </div>
    )

    if (!job) return (
        <div className="min-h-screen flex flex-col items-center justify-center px-5 py-20">
            <h1 className="text-4xl font-black text-navy-custom mb-4">Job Not Found</h1>
            <p className="text-navy-custom/50 mb-8 font-medium">This position may have been removed or is no longer available.</p>
            <button onClick={() => navigate('/careers')} className="bg-navy-custom text-white px-8 py-3 rounded-xl font-bold hover:bg-black transition-all">Back to Careers</button>
        </div>
    )

    if (job.status === 'closed') return (
        <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center py-20">
            <div className="size-20 rounded-full bg-navy-custom/5 flex items-center justify-center text-navy-custom/30 mb-8">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
                </svg>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-navy-custom mb-6 tracking-tighter">{job.closedTitle || 'Applications Closed'}</h1>
            <p className="text-xl text-navy-custom/50 max-w-lg mb-8 leading-relaxed font-medium">{job.closedMessage || 'Thank you for your interest. We are no longer accepting applications for this position.'}</p>
            <button onClick={() => navigate('/careers')} className="bg-navy-custom text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg">View More Openings</button>
        </div>
    )

    const inputClass = (key: string) =>
        `w-full bg-navy-custom/[0.02] border rounded-xl py-4 px-5 text-sm font-medium focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all outline-none ${errors[key] ? 'border-red-400 bg-red-50/30' : 'border-navy-custom/10'}`

    const FieldError = ({ k }: { k: string }) => errors[k] ? (
        <div className="flex items-center gap-2 mt-2 ml-1 text-red-500">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p className="text-[10px] font-bold tracking-tight">{errors[k]}</p>
        </div>
    ) : null

    const Label = ({ text, required }: { text: string; required?: boolean }) => (
        <label className="text-[10px] font-black uppercase tracking-widest text-navy-custom/40 ml-1 block mb-3 group-focus-within:text-primary transition-colors">
            {text} {required && <span className="text-primary font-black animate-pulse">*</span>}
        </label>
    )

    return (
        <section className="container max-w-[1280px] mx-auto px-5 md:px-10 pt-32 md:pt-48 pb-16 md:pb-24 relative min-h-screen">
            <div className="max-w-[1100px] mx-auto relative z-10">
                <button onClick={() => navigate('/careers')}
                    className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-navy-custom/40 hover:text-primary transition-colors mb-12 group">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:-translate-x-1 transition-transform">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to Careers
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* ── Left Content: Job Information ── */}
                    <div className="lg:col-span-8 space-y-12">
                        <div className="reveal in-view">
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="px-4 py-1.5 rounded-full bg-navy-custom text-primary text-[10px] font-black tracking-widest uppercase shadow-sm">
                                    Open Position
                                </span>
                                {job.type && (
                                    <span className="px-4 py-1.5 rounded-full bg-navy-custom/5 text-navy-custom/50 text-[10px] font-black tracking-widest uppercase">
                                        {JOB_TYPE_LABEL[job.type] || job.type}
                                    </span>
                                )}
                                {job.location && (
                                    <span className="px-4 py-1.5 rounded-full bg-navy-custom/5 text-navy-custom/50 text-[10px] font-black tracking-widest uppercase">
                                        {LOCATION_LABEL[job.location] || job.location}
                                    </span>
                                )}
                                {job.department && (
                                    <span className="px-4 py-1.5 rounded-full bg-navy-custom/5 text-navy-custom/50 text-[10px] font-black tracking-widest uppercase">
                                        {job.department}
                                    </span>
                                )}
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black text-navy-custom tracking-tighter mb-8 leading-[0.95]">
                                {job.title}
                            </h1>

                            {job.description && (
                                <p className="text-lg text-navy-custom/60 font-medium leading-relaxed mb-10 max-w-2xl">
                                    {job.description}
                                </p>
                            )}

                            {job.sections?.length > 0 && (
                                <div className="space-y-10">
                                    {job.sections.map(section => (
                                        <div key={section.id} className="reveal in-view">
                                            {section.title && (
                                                <h2 className="text-xl font-black text-navy-custom mb-4 tracking-tight">
                                                    {section.title}
                                                </h2>
                                            )}
                                            <ul className="space-y-3">
                                                {section.bullets.map((bullet, i) => (
                                                    <li key={i} className="flex items-start gap-4 text-navy-custom/60 font-medium text-base">
                                                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="mt-16 py-12 border-t border-navy-custom/5 max-w-lg">
                                <button
                                    onClick={() => setIsApplyOpen(true)}
                                    className="w-full bg-secondary text-white hover:opacity-90 font-bold text-lg h-[64px] px-10 rounded-2xl transition-all shadow-lg hover:-translate-y-1 flex items-center justify-center gap-3 group"
                                >
                                    Apply for this position
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </button>
                                <p className="text-xs text-navy-custom/40 mt-4 ml-1 font-medium">
                                    Takes less than 2 minutes to apply
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── Right Content: Apply Now Button (Premium CTA) ── */}
                    <div className="lg:col-span-4 hidden lg:flex flex-col sticky top-48">
                        <button
                            onClick={() => setIsApplyOpen(true)}
                            className="w-full bg-secondary text-white hover:opacity-90 font-bold h-[64px] px-8 rounded-2xl transition-all shadow-xl hover:shadow-secondary/20 active:scale-95 text-lg flex items-center justify-center gap-3 group"
                        >
                            Apply now
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </button>
                        <div className="mt-8 space-y-4 px-2">
                            <p className="text-[10px] font-black text-navy-custom/20 uppercase tracking-[0.2em] leading-relaxed text-center">
                                Role details
                            </p>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center text-sm font-medium py-2 border-b border-navy-custom/5">
                                    <span className="text-navy-custom/40">Location</span>
                                    <span className="text-navy-custom">{LOCATION_LABEL[job.location] || job.location}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm font-medium py-2">
                                    <span className="text-navy-custom/40">Contract</span>
                                    <span className="text-navy-custom">{JOB_TYPE_LABEL[job.type || 'full_time']}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Slide-over Form Panel ── */}
            <div className={`fixed inset-0 z-[1000] transition-opacity duration-300 ${isApplyOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {/* Backdrop */}
                <div onClick={() => !isSubmitting && setIsApplyOpen(false)} className="absolute inset-0 bg-navy-custom/20 backdrop-blur-md" />

                {/* Side Panel */}
                <div className={`absolute top-0 right-0 h-full w-full md:w-[600px] bg-white shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.1)] transition-transform duration-500 transform ${isApplyOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>

                    {/* Header */}
                    <div className="flex items-center justify-between p-8 pt-10 md:pt-14 border-b border-navy-custom/5">
                        <div>
                            <h2 className="text-2xl font-black text-navy-custom tracking-tighter">Application Form</h2>
                            <p className="text-[10px] font-bold text-navy-custom/40 uppercase tracking-widest mt-1">Applying for: {job.title}</p>
                        </div>
                        <button
                            onClick={() => !isSubmitting && setIsApplyOpen(false)}
                            className="size-12 rounded-full bg-navy-custom/5 flex items-center justify-center text-navy-custom/30 hover:bg-navy-custom hover:text-white transition-all group"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:rotate-90 transition-transform">
                                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    {/* Scrollable Form Content */}
                    <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-10">

                                {/* Personal Details */}
                                <div className="space-y-8">
                                    <div className="group">
                                        <Label text="Full Name" required />
                                        <input type="text" value={name} onChange={e => setName(e.target.value)}
                                            placeholder="What should we call you?" className={inputClass('name')} />
                                        <FieldError k="name" />
                                    </div>

                                    <div className="group">
                                        <Label text="Email Address" required />
                                        <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                                            placeholder="Enter your email address" className={inputClass('email')} />
                                        <FieldError k="email" />
                                    </div>

                                    <div className="group">
                                        <Label text="Phone Number" required />
                                        <div className={`relative flex items-center bg-navy-custom/[0.02] border rounded-xl transition-all ${errors['phone'] ? 'border-red-400 bg-red-50/30' : 'border-navy-custom/10 focus-within:ring-4 focus-within:ring-primary/10 focus-within:border-primary focus-within:bg-white'}`}>
                                            <div className="pl-5 pr-3 self-stretch flex items-center text-sm font-black text-navy-custom/30 border-r border-navy-custom/5 bg-navy-custom/[0.02] rounded-l-xl">
                                                +91
                                            </div>
                                            <input
                                                type="tel"
                                                value={phone}
                                                maxLength={10}
                                                onChange={e => {
                                                    const val = e.target.value.replace(/\D/g, '').slice(0, 10)
                                                    setPhone(val)
                                                }}
                                                placeholder="98765 43210"
                                                className="flex-1 bg-transparent py-4 px-4 text-sm font-bold outline-none border-none focus:ring-0 placeholder:text-navy-custom/20 rounded-r-xl"
                                            />
                                        </div>
                                        <FieldError k="phone" />
                                    </div>

                                    <div className="group/resume relative">
                                        <Label text="Resume / CV" required />
                                        <div className={`relative group-within:ring-4 group-within:ring-primary/10 transition-all duration-300`}>
                                            <input
                                                type="file"
                                                id="resume-upload"
                                                accept=".pdf,.doc,.docx"
                                                onChange={e => {
                                                    const file = e.target.files?.[0]
                                                    if (!file) return
                                                    if (file.size > 2 * 1024 * 1024) {
                                                        setErrors(prev => ({ ...prev, resume: 'Resume must be under 2MB. Please compress your PDF.' }))
                                                        e.target.value = ''
                                                        return
                                                    }
                                                    setResumeFile(file)
                                                }}
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                            />
                                            <div className={`w-full min-h-[140px] rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-6 transition-all duration-300 ${resumeFile ? 'bg-primary/5 border-primary/40' : errors['resume'] ? 'bg-red-50/50 border-red-300' : 'bg-navy-custom/[0.02] border-navy-custom/10 group-hover/resume:border-primary/30 group-hover/resume:bg-white'}`}>
                                                <div className={`size-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover/resume:scale-110 ${resumeFile ? 'bg-primary text-navy-custom' : 'bg-navy-custom/5 text-navy-custom/30'}`}>
                                                    {resumeFile ? (
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                            <path d="M20 6L9 17l-5-5" />
                                                        </svg>
                                                    ) : (
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                            <polyline points="17 8 12 3 7 8" />
                                                            <line x1="12" y1="3" x2="12" y2="15" />
                                                        </svg>
                                                    )}
                                                </div>
                                                <div className="text-center">
                                                    <p className={`text-sm font-bold tracking-tight mb-1 ${resumeFile ? 'text-navy-custom' : 'text-navy-custom/70'}`}>
                                                        {resumeFile ? resumeFile.name : 'Upload your resume'}
                                                    </p>
                                                    <p className="text-[10px] font-medium text-navy-custom/40 uppercase tracking-widest">
                                                        {resumeFile ? 'Click or drag to replace' : 'PDF, DOC, DOCX (Max 2MB)'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <FieldError k="resume" />
                                    </div>
                                </div>

                                {/* Custom Questions */}
                                {job.questions?.length > 0 && (
                                    <div className="space-y-8 pt-8 border-t border-navy-custom/5">
                                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-custom/30">Additional Info</h3>
                                        {job.questions.map(q => (
                                            <div key={q.id} className="group">
                                                <Label text={q.label} required={q.required} />
                                                {q.type === 'long' ? (
                                                    <textarea
                                                        className={`w-full bg-navy-custom/[0.02] border rounded-2xl py-4 px-5 text-sm font-medium focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all outline-none min-h-[140px] resize-none ${errors[q.id] ? 'border-red-400 bg-red-50/30' : 'border-navy-custom/10'}`}
                                                        placeholder={`Share details...`}
                                                        value={answers[q.id] || ''}
                                                        onChange={e => setAnswers(a => ({ ...a, [q.id]: e.target.value }))}
                                                    />
                                                ) : (
                                                    <input
                                                        type={q.type === 'short' ? 'text' : q.type}
                                                        className={inputClass(q.id)}
                                                        placeholder={`Enter response...`}
                                                        value={answers[q.id] || ''}
                                                        onChange={e => setAnswers(a => ({ ...a, [q.id]: e.target.value }))}
                                                    />
                                                )}
                                                <FieldError k={q.id} />
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {errors.server && (
                                    <p className="text-red-500 text-[10px] font-black uppercase tracking-widest bg-red-50 p-4 rounded-xl">
                                        {errors.server}
                                    </p>
                                )}
                            </form>
                        ) : (
                            /* Success State */
                            <div className="h-full flex flex-col items-center justify-center text-center p-12 space-y-8">
                                <div className="size-24 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 animate-bounce">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <h2 className="text-4xl font-black text-navy-custom tracking-tighter">Application Sent!</h2>
                                <p className="text-navy-custom/50 font-medium leading-relaxed">
                                    Thanks for applying. Our talent team will review your profile and reach out if there's a match.
                                </p>
                                <button
                                    onClick={() => setIsApplyOpen(false)}
                                    className="px-10 py-4 rounded-xl bg-navy-custom text-white font-bold hover:bg-black transition-all"
                                >
                                    Close Panel
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Footer Actions */}
                    {!submitted && (
                        <div className="p-8 border-t border-navy-custom/5 bg-navy-custom/5 flex items-center gap-4">
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="flex-1 bg-navy-custom text-white font-black py-5 rounded-2xl hover:bg-black transition-all shadow-xl disabled:opacity-50 flex items-center justify-center gap-3"
                            >
                                {isSubmitting ? (
                                    <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Apply for {job.department}
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary">
                                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default JobDetails