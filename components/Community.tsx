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

            {/* Custom Animations Styles - ENHANCED */}
            <style>{`
                @keyframes orbit-cw { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes orbit-ccw { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
                @keyframes maintain-upright { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
                @keyframes maintain-upright-ccw { from { transform: rotate(-360deg); } to { transform: rotate(0deg); } }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 40px -10px rgba(219, 232, 144, 0.4); }
                    50% { box-shadow: 0 0 60px -5px rgba(219, 232, 144, 0.6); }
                }
                
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes subtle-float {
                    0%, 100% { transform: translate(0, 0); }
                    25% { transform: translate(5px, -5px); }
                    50% { transform: translate(0, -8px); }
                    75% { transform: translate(-5px, -5px); }
                }
                
                .anim-orbit-slow { animation: orbit-cw 50s linear infinite; }
                .anim-orbit-med { animation: orbit-ccw 35s linear infinite; }
                .anim-orbit-fast { animation: orbit-cw 20s linear infinite; }
                
                .anim-counter-slow { animation: maintain-upright 50s linear infinite; }
                .anim-counter-med { animation: maintain-upright-ccw 35s linear infinite; }
                .anim-counter-fast { animation: maintain-upright 20s linear infinite; }
                
                .anim-float { animation: float 4s ease-in-out infinite; }
                .anim-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
                .anim-fade-in { animation: fade-in-up 0.8s ease-out forwards; }
                .anim-subtle-float { animation: subtle-float 6s ease-in-out infinite; }
                
                .orbit-ring {
                    border-color: transparent;
                    background: linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent);
                    background-clip: padding-box;
                }
                
                .card-glow:hover {
                    box-shadow: 0 0 40px -10px rgba(219, 232, 144, 0.3);
                }
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

                    {/* Right: ENHANCED Circular Modern Ecosystem */}
                    <div className="relative h-[350px] md:h-[650px] flex items-center justify-center">

                        {/* Background Glow */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/5 rounded-full blur-[100px]" />
                        </div>

                        {/* Floating Ambient Particles */}
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-primary/40 rounded-full anim-subtle-float"
                                style={{
                                    left: `${20 + Math.random() * 60}%`,
                                    top: `${20 + Math.random() * 60}%`,
                                    animationDelay: `${i * 0.5}s`,
                                    opacity: 0.3 + Math.random() * 0.4
                                }}
                            />
                        ))}

                        {/* Scalable Container */}
                        <div className="relative flex items-center justify-center transform scale-[0.55] sm:scale-75 md:scale-100 transition-transform duration-500">

                            {/* Center Hub - Enhanced */}
                            <div className="absolute z-30 size-36 anim-pulse-glow">
                                {/* Outer Ring */}
                                <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                                {/* Inner Ring */}
                                <div className="absolute inset-2 border border-white/10 rounded-full" />
                                {/* Core */}
                                <div className="absolute inset-0 bg-gradient-to-br from-navy-custom/80 to-navy-custom backdrop-blur-2xl border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_60px_-15px_theme(colors.primary.DEFAULT)]">
                                    <LogoSecW className="w-14 h-14 text-white anim-float [&_.cls-1]:hidden" />
                                </div>
                            </div>

                            {/* Orbit 1: Fast (Avatars) */}
                            <div className="absolute size-[280px] rounded-full anim-orbit-fast">
                                <div className="absolute inset-0 border border-white/[0.03] rounded-full" />
                                {/* Avatar 1 */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 anim-counter-fast" style={{ animationDelay: '0s' }}>
                                    <div className="size-14 rounded-full border-2 border-primary/30 p-0.5 bg-navy-custom/80 backdrop-blur-md shadow-lg hover:scale-110 transition-transform cursor-pointer">
                                        <img src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png" className="size-full rounded-full" />
                                    </div>
                                </div>
                                {/* Avatar 2 */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 anim-counter-fast">
                                    <div className="size-12 rounded-full border border-white/10 p-0.5 bg-navy-custom/60 backdrop-blur-md shadow-lg hover:scale-110 transition-transform cursor-pointer">
                                        <img src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png" className="size-full rounded-full" />
                                    </div>
                                </div>
                                {/* Counter Badge */}
                                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 anim-counter-fast">
                                    <div className="size-11 rounded-full bg-gradient-to-br from-primary to-lime-400 flex items-center justify-center text-navy-custom font-black text-xs shadow-[0_0_30px_-5px_theme(colors.primary.DEFAULT)] hover:scale-110 transition-transform cursor-pointer">
                                        +5
                                    </div>
                                </div>
                            </div>

                            {/* Orbit 2: Medium (Topic Bubbles) */}
                            <div className="absolute size-[430px] rounded-full anim-orbit-med">
                                <div className="absolute inset-0 border border-dashed border-white/[0.04] rounded-full" />
                                {/* Topic 1 */}
                                <div className="absolute top-[12%] right-[12%] anim-counter-med">
                                    <div className="px-4 py-2.5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full flex items-center gap-2 hover:bg-white/[0.08] hover:scale-105 transition-all cursor-pointer card-glow">
                                        <div className="size-2 bg-blue-400 rounded-full animate-pulse" />
                                        <span className="text-xs font-bold text-white whitespace-nowrap">Physics 101</span>
                                    </div>
                                </div>
                                {/* Topic 2 */}
                                <div className="absolute bottom-[18%] left-[8%] anim-counter-med">
                                    <div className="px-4 py-2.5 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full flex items-center gap-2 hover:bg-white/[0.08] hover:scale-105 transition-all cursor-pointer card-glow">
                                        <span className="text-base">🎨</span>
                                        <span className="text-xs font-bold text-white whitespace-nowrap">Digital Art</span>
                                    </div>
                                </div>
                                {/* Topic 3 - Quiz */}
                                <div className="absolute top-[45%] -left-[3%] anim-counter-med">
                                    <div className="size-16 bg-gradient-to-br from-purple-500/20 to-purple-600/10 backdrop-blur-md border border-purple-400/20 rounded-full flex flex-col items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-[0_0_30px_-10px_rgba(168,85,247,0.4)]">
                                        <span className="text-[9px] font-bold text-purple-300 uppercase">New</span>
                                        <span className="text-sm font-black text-white">Quiz</span>
                                    </div>
                                </div>
                            </div>

                            {/* Orbit 3: Slow (Feature Cards) */}
                            <div className="absolute size-[600px] rounded-full anim-orbit-slow">
                                <div className="absolute inset-0 border border-white/[0.02] rounded-full" />

                                {/* Card 1: Code Sprint Challenge */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 anim-counter-slow">
                                    <div className="w-52 p-4 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl hover:scale-105 transition-all cursor-pointer group card-glow">
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="size-9 rounded-xl bg-gradient-to-br from-red-500/30 to-orange-500/20 flex items-center justify-center">
                                                <span className="text-lg">⚡</span>
                                            </div>
                                            <span className="text-[9px] font-bold text-red-400 bg-red-500/10 px-2 py-1 rounded-full border border-red-500/20 flex items-center gap-1">
                                                <span className="size-1.5 bg-red-500 rounded-full animate-pulse" />
                                                LIVE
                                            </span>
                                        </div>
                                        <div className="text-sm font-bold text-white mb-1 group-hover:text-primary transition-colors">Code Sprint 2.0</div>
                                        <div className="text-[10px] text-white/50 mb-3">250 students competing</div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div className="h-full w-2/3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2: Top Mentor */}
                                <div className="absolute bottom-[8%] right-[12%] anim-counter-slow">
                                    <div className="w-48 p-4 bg-navy-custom/70 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex items-center gap-3 hover:scale-105 transition-all cursor-pointer card-glow">
                                        <div className="relative">
                                            <img src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png" className="size-12 rounded-xl border border-white/10" />
                                            <div className="absolute -bottom-1 -right-1 size-5 bg-primary rounded-lg flex items-center justify-center">
                                                <svg className="w-3 h-3 text-navy-custom" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-[9px] font-bold text-primary uppercase tracking-wider">Top Mentor</div>
                                            <div className="text-sm font-bold text-white">Dr. Rao</div>
                                            <div className="text-[10px] text-white/40">500+ Helps</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3: Discussion Thread */}
                                <div className="absolute bottom-[28%] left-[-2%] anim-counter-slow">
                                    <div className="w-44 p-4 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl hover:scale-105 transition-all cursor-pointer card-glow">
                                        <div className="flex -space-x-2 mb-3">
                                            {[6, 7, 8].map(i => (
                                                <div key={i} className="size-7 rounded-full border-2 border-navy-custom overflow-hidden">
                                                    <img src={`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-${i}.png`} className="size-full" />
                                                </div>
                                            ))}
                                            <div className="size-7 rounded-full border-2 border-navy-custom bg-white/10 flex items-center justify-center text-[8px] font-bold">+12</div>
                                        </div>
                                        <div className="text-[11px] font-bold text-white mb-1">New Discussion</div>
                                        <div className="text-[10px] text-white/50">in <span className="text-blue-400 font-bold">#Mathematics</span></div>
                                    </div>
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
