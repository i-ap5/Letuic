import React, { useEffect, useRef } from 'react';
import LogoSec from "@/components/assets/logo.svg?react";
import LogoSecW from "@/components/assets/lg_w.svg?react";


interface CommunityProps {
    onNavigate: (view: 'home' | 'contact' | 'community') => void;
}

const Community: React.FC<CommunityProps> = ({ onNavigate }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);

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

            {/* Custom Animations Styles */}
            <style>{`
                @keyframes orbit-cw { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes orbit-ccw { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
                @keyframes maintain-upright { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
                @keyframes maintain-upright-ccw { from { transform: rotate(-360deg); } to { transform: rotate(0deg); } }
                
                .anim-orbit-slow { animation: orbit-cw 40s linear infinite; }
                .anim-orbit-med { animation: orbit-ccw 25s linear infinite; }
                .anim-orbit-fast { animation: orbit-cw 15s linear infinite; }
                
                .anim-counter-slow { animation: maintain-upright 40s linear infinite; }
                .anim-counter-med { animation: maintain-upright-ccw 25s linear infinite; }
                .anim-counter-fast { animation: maintain-upright 15s linear infinite; }
            `}</style>

            {/* Hero Section */}
            <section className="px-4 md:px-12 mb-32 relative overflow-visible">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    {/* Left: Text Content */}
                    <div className="relative z-10 animate-fade-up">
                        <div className="inline-flex px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-widest uppercase mb-8 shadow-[0_0_20px_-5px_theme(colors.primary.DEFAULT)]">
                            Student Hub
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                            Built for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-lime-300 to-green-400 drop-shadow-2xl">Ambition.</span>
                        </h1>
                        <p className="text-xl text-white/50 max-w-2xl leading-relaxed font-medium mb-10">
                            Connect with peers, find your path, and showcase your skills. This is your space to grow beyond the classroom.
                        </p>

                        <div className="flex gap-4 items-center">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="size-10 rounded-full border-2 border-navy-custom overflow-hidden shadow-lg hover:scale-110 transition-transform bg-gray-800">
                                        <img src={`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-${i}.png`} alt="User" />
                                    </div>
                                ))}
                                <div className="size-10 rounded-full border-2 border-navy-custom bg-white/10 flex items-center justify-center text-[10px] font-bold backdrop-blur-sm">+2k</div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-white font-bold text-sm">Active Students</span>
                                <span className="flex items-center gap-1 text-primary text-xs font-bold">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                    </span>
                                    Live now
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Circular Modern Ecosystem */}
                    <div className="relative h-[350px] md:h-[650px] flex items-center justify-center overflow-hidden md:overflow-visible">
                        {/* Scalable Container for Mobile */}
                        <div className="relative flex items-center justify-center transform scale-[0.55] sm:scale-75 md:scale-100 transition-transform duration-500">
                            {/* Center Hub */}
                            <div className="absolute z-30 size-32 bg-navy-custom/30 backdrop-blur-2xl border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_80px_-20px_theme(colors.primary.DEFAULT)]">
                                <div className="absolute inset-0 border border-primary/20 rounded-full animate-ping opacity-20 duration-[3s]" />
                                <LogoSecW className="w-14 h-14 text-white" />
                            </div>

                            {/* Orbit 1: Fast (Avatars) */}
                            <div className="absolute size-[280px] border border-white/5 rounded-full anim-orbit-fast">
                                {/* Item 1 */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 rounded-full border border-white/10 p-1 bg-navy-custom/50 backdrop-blur-md anim-counter-fast">
                                    <img src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png" className="size-full rounded-full" />
                                </div>
                                {/* Item 2 */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 size-12 rounded-full border border-white/10 p-1 bg-navy-custom/50 backdrop-blur-md anim-counter-fast">
                                    <img src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png" className="size-full rounded-full" />
                                </div>
                                {/* Item 3 */}
                                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-full bg-primary flex items-center justify-center text-navy-custom font-black text-xs anim-counter-fast shadow-[0_0_20px_theme(colors.primary.DEFAULT)]">
                                    +5
                                </div>
                            </div>

                            {/* Orbit 2: Medium (Topics/Bubbles) */}
                            <div className="absolute size-[420px] border border-white/5 rounded-full anim-orbit-med">
                                {/* Topic 1 */}
                                <div className="absolute top-[15%] right-[15%] p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-2 anim-counter-med hover:scale-110 transition-transform cursor-pointer">
                                    <div className="size-2 bg-blue-400 rounded-full animate-pulse" />
                                    <span className="text-xs font-bold text-white">Physics 101</span>
                                </div>
                                {/* Topic 2 */}
                                <div className="absolute bottom-[20%] left-[10%] p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center gap-2 anim-counter-med hover:scale-110 transition-transform cursor-pointer">
                                    <span className="text-lg">🎨</span>
                                    <span className="text-xs font-bold text-white">Digital Art</span>
                                </div>
                                {/* Topic 3 */}
                                <div className="absolute top-[40%] -left-[5%] size-14 bg-purple-500/20 backdrop-blur-md border border-purple-500/30 rounded-2xl flex flex-col items-center justify-center anim-counter-med">
                                    <span className="text-[10px] font-bold text-purple-200">New</span>
                                    <span className="text-xs font-black text-white">Quiz</span>
                                </div>
                            </div>

                            {/* Orbit 3: Slow (Large Cards) */}
                            <div className="absolute size-[580px] border border-dashed border-white/5 rounded-full anim-orbit-slow">
                                {/* Card 1: Challenge */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 p-4 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl shadow-2xl anim-counter-slow group hover:scale-105 transition-transform">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="size-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500">⚡</div>
                                        <span className="text-[9px] font-bold text-white/40 bg-white/5 px-2 py-1 rounded">LIVE</span>
                                    </div>
                                    <div className="text-sm font-bold text-white mb-1">Code Sprint 2.0</div>
                                    <div className="text-[10px] text-white/50">250 students competing</div>
                                    <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full w-2/3 bg-red-500 rounded-full" />
                                    </div>
                                </div>

                                {/* Card 2: Top Mentor */}
                                <div className="absolute bottom-[10%] right-[15%] w-44 p-3 bg-navy-custom/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl anim-counter-slow flex items-center gap-3">
                                    <img src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png" className="size-10 rounded-full border border-white/10 bg-black" />
                                    <div>
                                        <div className="text-[10px] font-bold text-primary uppercase">Top Mentor</div>
                                        <div className="text-xs font-bold text-white">Dr. Rao</div>
                                        <div className="text-[9px] text-white/40">500+ Helps</div>
                                    </div>
                                </div>

                                {/* Card 3: New Discussion */}
                                <div className="absolute bottom-[30%] left-[0%] w-40 p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl anim-counter-slow">
                                    <div className="flex -space-x-2 mb-2">
                                        {[1, 2, 3].map(i => <div key={i} className="size-6 rounded-full border border-navy-custom bg-gray-700 overflow-hidden"><img src={`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-${i + 5}.png`} /></div>)}
                                    </div>
                                    <div className="text-[10px] font-bold text-white">New Discussion in <span className="text-blue-400">#Math</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Sections */}
            <section className="px-4 md:px-12 max-w-7xl mx-auto space-y-32">

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
                                    <img src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png" alt="Counselor" />
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
                                    title: 'Discussion Forums',
                                    desc: 'Participate in threads, review discussions, and solve doubts. Learning is better together.',
                                    icon: (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                    ),
                                    badge: 'Top Voice'
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
            <section className="mt-40 mb-20 text-center px-4 relative max-w-4xl mx-auto">
                {/* Glow BG */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

                <h3 className="relative z-10 text-5xl md:text-7xl font-black tracking-tighter mb-10 text-white leading-[0.9]">
                    Ready to shape <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-400">the future?</span>
                </h3>

                <button
                    onClick={() => onNavigate('contact')}
                    className="relative z-10 px-12 py-5 text-lg bg-primary text-navy-custom rounded-full font-black tracking-normal  hover:scale-105 transition-transform shadow-[0_0_60px_-15px_#dbe890]"
                >
                    Talk to us
                </button>
            </section>

        </div>
    );
};

export default Community;
