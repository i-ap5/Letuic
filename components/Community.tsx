import React, { useEffect, useRef } from 'react';

interface CommunityProps {
    onNavigate: (view: 'home' | 'contact' | 'community') => void;
}

const Community: React.FC<CommunityProps> = ({ onNavigate }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal-community');
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-navy-custom text-white selection:bg-primary/30 pb-20 pt-24 md:pt-32" ref={scrollRef}>

            {/* Back Navigation */}
            <div className="fixed top-24 left-6 z-40 md:left-12">
                <button
                    onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-1 transition-transform">
                        <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm font-bold">Back to Home</span>
                </button>
            </div>

            {/* Hero Section */}
            <section className="px-6 md:px-12 mb-32 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="relative z-10">
                        <div className="inline-flex px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-widest uppercase mb-8 animate-fade-up">
                            Student Hub
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
                            Built for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">Ambition.</span>
                        </h1>
                        <p className="text-xl text-white/50 max-w-2xl leading-relaxed font-medium animate-fade-up" style={{ animationDelay: '0.2s' }}>
                            Connect with peers, find your path, and showcase your skills. This is your space to grow beyond the classroom.
                        </p>
                    </div>

                    {/* Abstract Background Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                </div>
            </section>

            {/* Feature Sections */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto space-y-32">

                {/* 1. Interschool Competitions */}
                <div className="grid md:grid-cols-2 gap-12 items-center reveal-community opacity-0 translate-y-8 transition-all duration-1000">
                    <div className="order-2 md:order-1 relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[40px] blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-50"></div>
                        <div className="relative bg-white/5 border border-white/10 rounded-[40px] p-8 overflow-hidden h-[400px] flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                            <div className="space-y-4 w-full max-w-xs group-hover:-translate-y-2 transition-transform duration-500">
                                {/* Mock Event Cards */}
                                <div className="bg-navy-custom/50 backdrop-blur-md p-4 rounded-xl border border-white/5 flex items-center gap-4 transform translate-x-4 hover:scale-105 hover:bg-navy-custom/80 transition-all duration-300 hover:shadow-xl cursor-default">
                                    <div className="size-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-white/40 uppercase tracking-wider">State Level</div>
                                        <div className="font-bold">Science & Tech Fair</div>
                                    </div>
                                </div>
                                <div className="bg-navy-custom/80 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4 transform -translate-x-2 scale-110 shadow-2xl z-10 relative hover:scale-[1.15] hover:border-primary/50 transition-all duration-300 cursor-default">
                                    <div className="size-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-primary uppercase tracking-wider">Coming Soon</div>
                                        <div className="font-bold text-lg">Interschool Quiz 2026</div>
                                    </div>
                                </div>
                                <div className="bg-navy-custom/50 backdrop-blur-md p-4 rounded-xl border border-white/5 flex items-center gap-4 transform translate-x-8 hover:scale-105 hover:bg-navy-custom/80 transition-all duration-300 hover:shadow-xl cursor-default">
                                    <div className="size-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-white/40 uppercase tracking-wider">District</div>
                                        <div className="font-bold">Math Olympiad</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Rise to the <br />Challenge.</h2>
                        <p className="text-white/50 text-lg leading-relaxed mb-8">
                            Compete with the best minds from schools across the state. From quiz bowls to coding hackathons, show the world what you've got.
                        </p>
                        <ul className="space-y-4">
                            {['State-wide Leaderboards', 'School vs School Events', 'Certificate Vault'].map(item => (
                                <li key={item} className="flex items-center gap-3 font-bold text-white/80">
                                    <div className="size-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M20 6L9 17l-5-5" /></svg>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 2. Career Counseling */}
                <div className="grid md:grid-cols-2 gap-12 items-center reveal-community opacity-0 translate-y-8 transition-all duration-1000">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Find Your <br />North Star.</h2>
                        <p className="text-white/50 text-lg leading-relaxed mb-8">
                            Confused about what's next? Get expert guidance, explore career paths, and plan your future with confidence.
                        </p>
                        <button className="px-8 py-4 bg-white text-navy-custom rounded-full font-black tracking-wide hover:scale-105 transition-transform">
                            Explore Career Paths
                        </button>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-apple-grey/10 rounded-[40px] rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                        <div className="relative bg-white text-navy-custom rounded-[40px] p-8 md:p-12 overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="size-16 rounded-full bg-gray-200 overflow-hidden">
                                    <img src="https://ui-avatars.com/api/?name=Dr+Rao&background=random" alt="Counselor" />
                                </div>
                                <div>
                                    <div className="font-black text-xl">Dr. Rao</div>
                                    <div className="text-navy-custom/40 font-bold text-sm">Career Mentor • 15 Yrs Exp</div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="p-4 bg-apple-grey/50 rounded-2xl text-sm font-medium">
                                    "Based on your strength in Physics and Art, have you considered Architecture?"
                                </div>
                                <div className="flex justify-end">
                                    <div className="p-4 bg-primary text-navy-custom rounded-2xl text-sm font-bold shadow-lg">
                                        That sounds amazing! How do I start?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. The Aura Ecosystem */}
                <div className="w-full bg-gradient-to-b from-white/5 to-transparent rounded-[48px] p-8 md:p-20 text-center reveal-community opacity-0 translate-y-8 transition-all duration-1000 border border-white/5 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="relative z-10">
                        <div className="inline-flex px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black tracking-widest uppercase mb-8 border border-primary/20">
                            Gamified Learning
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                            Level Up Your <br /> Aura.
                        </h2>
                        <p className="text-white/50 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
                            Learning isn't just about grades. Contribute, help peers, and earn <strong>Aura Points</strong> to unlock badges and recognition.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
                            {[
                                {
                                    title: 'Earn Aura',
                                    desc: 'Get +10 Aura for every helpful answer and +50 for top-voted solutions.',
                                    icon: (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                    ),
                                    badge: '+10 Aura'
                                },
                                {
                                    title: 'Verified Badges',
                                    desc: 'Earn "Expert" badges in subjects you master. Stand out on the leaderboard.',
                                    icon: (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
                                    ),
                                    badge: 'Expert'
                                },
                                {
                                    title: 'Peer Reviews',
                                    desc: 'Review your friends\' assignments and give feedback. Learning is better together.',
                                    icon: (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                    ),
                                    badge: 'Reviewer'
                                }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-black/40 backdrop-blur-sm rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
                                    <div className="absolute top-4 right-4 text-[10px] font-black bg-white/5 text-white/40 px-2 py-1 rounded-md group-hover:bg-primary group-hover:text-navy-custom transition-colors">
                                        {item.badge}
                                    </div>
                                    <div className="size-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-white/60 group-hover:bg-primary group-hover:text-navy-custom group-hover:scale-110 transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/70 transition-colors">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>

            {/* CTA Footer */}
            <section className="mt-32 text-center px-6">
                <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white/60">Ready to join?</h3>
                <button
                    onClick={() => onNavigate('contact')}
                    className="px-10 py-5 text-lg bg-primary text-navy-custom rounded-full font-black tracking-wide hover:scale-105 transition-transform shadow-[0_0_50px_-10px_#dbe890]"
                >
                    Talk to your School
                </button>
            </section>

        </div>
    );
};

export default Community;
