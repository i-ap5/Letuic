import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, AreaChart, Area, YAxis } from 'recharts';
import Lottie from 'lottie-react';
import { busAnimationData } from '../constants/busAnimation';

import LogoWhite from "@/components/assets/lg_w.svg?react";

const generateChartData = () => [
  { name: 'Mon', val: Math.floor(Math.random() * 2000) + 3000 },
  { name: 'Tue', val: Math.floor(Math.random() * 2000) + 2500 },
  { name: 'Wed', val: Math.floor(Math.random() * 2000) + 1500 },
  { name: 'Thu', val: Math.floor(Math.random() * 2000) + 2700 },
  { name: 'Fri', val: Math.floor(Math.random() * 2000) + 1800 },
  { name: 'Sat', val: Math.floor(Math.random() * 2000) + 2300 },
  { name: 'Sun', val: Math.floor(Math.random() * 2000) + 3400 },
];

interface BentoGridProps {
  onNavigate?: (view: 'home' | 'community') => void;
}

const BentoGrid: React.FC<BentoGridProps> = ({ onNavigate }) => {
  const [performanceData, setPerformanceData] = useState(generateChartData());

  useEffect(() => {
    const interval = setInterval(() => {
      setPerformanceData(generateChartData());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container max-w-[1280px] mx-auto px-4 md:px-6 pb-32">
      <div className="w-full relative z-30 pt-10 pb-6 overflow-hidden">
        {/* Optical Anchor */}
        <div
          className="absolute top-6 left-1/2 -translate-x-1/2 h-[1.5px]
             bg-primary shadow-[0_0_12px_rgba(219,232,144,0.35)]
             animate-width-grow
             w-12 md:w-20"
        />

        {/* ================= DESKTOP VERSION ================= */}
        <div
          className="hidden md:block relative group animate-fade-up opacity-0"
          style={{ animationDelay: "0.8s" }}
        >
          {/* Edge Masks */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none" />

          <div className="flex whitespace-nowrap animate-scroll-modern items-center hover:[animation-play-state:paused] cursor-default">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center">
                {[
                  { category: "Classroom", title: "Lesson Plans" },
                  { category: "Transport", title: "Bus Tracker" },
                  { category: "Daily", title: "Attendance" },
                  { category: "Progress", title: "My Marks" },
                  { category: "Homework", title: "Assignments" },
                  { category: "Campus", title: "Notice Board" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center px-10 group/item"
                  >
                    <span className="text-[13px] font-extrabold tracking-tight text-navy-custom/20 group-hover/item:text-primary transition-colors duration-500">
                      {item.category}
                    </span>
                    <span className="ml-2 text-[13px] font-extrabold text-navy-custom/80 tracking-tight">
                      {item.title}
                    </span>
                    <div className="w-10 h-px bg-navy-custom/10 ml-10 group-hover/item:bg-primary/40 transition-all duration-700" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ================= MOBILE VERSION ================= */}
        <div
          className="md:hidden px-6 animate-fade-up opacity-0"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-center">
            {[
              { category: "Classroom", title: "Lesson Plans" },
              { category: "Transport", title: "Bus Tracker" },
              { category: "Daily", title: "Attendance" },
              { category: "Progress", title: "My Marks" },
              { category: "Homework", title: "Assignments" },
              { category: "Campus", title: "Notice Board" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-widest text-navy-custom/30">
                  {item.category}
                </span>
                <span className="text-sm font-extrabold text-navy-custom">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Transition Title Section */}
      <div className="pt-40 pb-20 text-center relative reveal reveal-scale">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-navy-custom/10"></div>
            <span className="text-[10px] font-black tracking-[0.6em] text-navy-custom/30 uppercase">
              Intelligence Node
            </span>
            <div className="h-px w-12 bg-navy-custom/10"></div>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-navy-custom tracking-tighter leading-none mb-8">
            The Ecosystem of <br className="hidden sm:block" />
            <span className="text-gradient">Synchrony.</span>
          </h2>

          <p className="text-l md:text-xl text-navy-custom/30 font-medium max-w-2xl mx-auto">
            A symmetrical architecture connecting every stakeholder in the high-fidelity digital campus.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">


        {/* 01. Institutional Control Center */}
        <div className="md:col-span-12 lg:col-span-8 bg-white rounded-apple p-8 md:p-12 shadow-bento hover:shadow-bento-hover transition-all duration-700 overflow-hidden group border border-gray-100 relative reveal-left">
          <div className="flex flex-col lg:flex-row h-full gap-12 relative z-10">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex gap-2 mb-8">
                  {/* <span className="px-3 py-1 rounded-full text-[9px] font-black tracking-widest bg-navy-custom text-primary">Single App</span> */}
                  <span className="px-3 py-1 rounded-full text-[9px] font-black tracking-widest bg-apple-grey text-navy-custom/40 border border-gray-100 uppercase">For Everyone</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-[1.05] tracking-tighter text-navy-custom">Everything in <br />one place.</h3>
                <p className="text-navy-custom/50 text-lg leading-relaxed font-medium max-w-sm">No more switching between apps. Notes, marks, updates, and bus tracking, all right here.</p>
              </div>
              <div className="flex items-center gap-4 mt-12">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="size-10 rounded-full border-[3px] border-white bg-gray-100 shadow-sm overflow-hidden relative z-10 grayscale hover:grayscale-0 transition-all duration-500">
                      <img src={`https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-${i}.png`} className="size-full object-cover" alt="User" />
                    </div>
                  ))}
                  <div className="size-10 rounded-full border-[3px] border-white bg-navy-custom flex items-center justify-center text-[16px] font-bold text-white relative z-20">
                    +
                  </div>
                </div>
                <div>
                  <div className="text-[13px] font-bold text-navy-custom leading-tight">Active Campus</div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                    </span>
                    <span className="text-[9px] font-bold text-navy-custom/40 uppercase tracking-wider">Sync Live</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-transparent flex items-center justify-center relative overflow-hidden group min-h-[320px]">

              {/* MASTER CONTAINER - Rigidly Centered */}
              <div className="relative size-[300px] flex items-center justify-center scale-[0.8] sm:scale-100 transition-transform duration-500">

                {/* 1. Background Glow (Centered) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="size-48 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                </div>

                {/* 2. Orbits (Absolute Centered) */}

                {/* ORBIT 3: Ecosystem (Outer - Slow) */}
                <div className="absolute inset-0 m-auto size-[280px] border border-navy-custom/5 rounded-full animate-[spin_25s_linear_infinite]">
                  {/* Icon 1: Parent (Bottom) */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="animate-[spin_25s_linear_infinite_reverse]">
                      <div className="size-12 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center text-navy-custom">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                      </div>
                    </div>
                  </div>
                  {/* Icon 2: Badges (Top) */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="animate-[spin_25s_linear_infinite_reverse]">
                      <div className="size-12 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center text-purple-600">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ORBIT 2: People (Middle - Medium) */}
                <div className="absolute inset-0 m-auto size-[210px] border border-navy-custom/5 rounded-full animate-[spin_18s_linear_infinite_reverse]">
                  {/* Icon 1: Student (Right) */}
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                    <div className="animate-[spin_18s_linear_infinite]">
                      <div className="size-12 rounded-full bg-primary border-2 border-white shadow-xl flex items-center justify-center text-navy-custom font-black text-sm">
                        A+
                      </div>
                    </div>
                  </div>
                  {/* Icon 2: Teacher (Left) */}
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                    <div className="animate-[spin_18s_linear_infinite]">
                      <div className="size-12 rounded-full bg-white border border-gray-100 shadow-xl flex items-center justify-center text-navy-custom">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ORBIT 1: Features (Inner - Fast) */}
                <div className="absolute inset-0 m-auto size-[140px] border border-navy-custom/5 rounded-full animate-[spin_12s_linear_infinite]">
                  {/* Icon 1: Bell (Top) */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="animate-[spin_12s_linear_infinite_reverse]">
                      <div className="size-10 rounded-full bg-white border border-gray-100 shadow-lg flex items-center justify-center text-orange-500">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                      </div>
                    </div>
                  </div>
                  {/* Icon 2: Mark (Bottom) */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                    <div className="animate-[spin_12s_linear_infinite_reverse]">
                      <div className="size-10 rounded-full bg-white border border-gray-100 shadow-lg flex items-center justify-center text-green-600">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Central Hub (Relative - On Top) */}
                <div className="relative z-20 flex flex-col items-center justify-center">
                  <div className="size-16 rounded-full bg-gradient-to-b from-navy-custom to-[#0f172a] border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] flex items-center justify-center relative z-20 group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute top-2 w-12 h-6 bg-white/5 rounded-[100%] blur-[2px]"></div>
                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
                    <LogoWhite className="w-12 h-12 text-white relative z-10" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* 02. Safety Hub */}
        <div className="md:col-span-12 lg:col-span-4 bg-white rounded-apple p-8 shadow-bento hover:shadow-bento-hover transition-all duration-700 border border-gray-100 flex flex-col group overflow-hidden reveal-right">
          <div className="flex items-center justify-between mb-6">
            <span className="px-3 py-1 rounded-full text-[9px] font-black tracking-widest bg-primary/20 text-navy-custom uppercase">Live Map</span>
            <div className="size-2.5 bg-green-500 rounded-full shadow-[0_0_12px_#22c55e]"></div>
          </div>
          <h3 className="text-2xl font-extrabold mb-3 tracking-tight text-navy-custom">Where is the bus?</h3>
          <p className="text-navy-custom/40 text-sm font-medium mb-8 leading-relaxed">Watch the school bus move in real-time. No more waiting at the stop wondering if you missed it.</p>

          <div className="mt-auto relative w-full h-48 bg-apple-grey rounded-apple-sm border border-gray-100 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#152328 1px, transparent 1px)', backgroundSize: '15px 15px' }}></div>
            <div className="w-full max-w-[220px]">
              <Lottie animationData={busAnimationData} loop={true} />
            </div>
            <div className="absolute top-4 left-4 z-20">
              <div className="flex items-center gap-2 ">
                {/* <div className="size-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div> */}
                <span className="text-[9px] font-black tracking-widest text-navy-custom/80 uppercase">Bus 4A • Moving</span>
              </div>
            </div>
          </div>
        </div>

        {/* 03. Momentum Feed */}
        <div className="md:col-span-12 lg:col-span-4 bg-primary rounded-apple pt-8 px-0 shadow-bento hover:shadow-bento-hover transition-all duration-700 flex flex-col border border-primary/20 overflow-hidden group reveal relative" style={{ transitionDelay: '0.1s' }}>
          <div className="flex justify-between items-center mb-6 px-8 relative z-10">
            <div className="px-3 py-1.5 rounded-full text-[9px] font-black tracking-widest bg-navy-custom text-primary shadow-lg flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              LIVE NOW
            </div>
          </div>
          <div className="px-8 mb-6">
            <h3 className="text-3xl font-black tracking-tight text-navy-custom leading-none ">Classroom buzz</h3>
            <p className="text-[10px] font-black text-navy-custom/30 tracking-[0.04em] mt-3">What's happening today?</p>
          </div>
          <div className="mt-4 relative z-10 px-6 flex-1 flex flex-col justify-end pb-6">
            {/* Stack Effect Backgrounds (Floating) */}
            <div className="absolute bottom-4 left-10 right-10 h-12 bg-white/20 backdrop-blur-sm rounded-[24px] z-0"></div>
            <div className="absolute bottom-5 left-8 right-8 h-12 bg-white/40 backdrop-blur-md rounded-[28px] z-0"></div>

            {/* Main Card (Floating) */}
            <div className="bg-white/90 backdrop-blur-[40px] rounded-[32px] p-6 shadow-2xl border border-white/60 transform transition-all duration-500 hover:-translate-y-2 relative z-10 flex-1 overflow-hidden">
              {/* Overlay Element (Gradient Sheen) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-navy-custom text-primary flex items-center justify-center font-bold text-xs border-2 border-primary/40 shadow-xl">BM</div>
                  <div>
                    <div className="text-[12px] font-black text-navy-custom leading-none mb-0.5">Ms. Bindu Mathew</div>
                    <div className="text-[9px] font-medium text-navy-custom/40 tracking-normal">Sr. Physics Faculty</div>
                  </div>
                </div>
                <div className="text-[9px] font-black text-navy-custom/20">JUST NOW</div>
              </div>

              <div className="space-y-4 mb-5">
                <p className="text-[13px] font-bold text-navy-custom/80 leading-[1.5]">
                  I have assigned a Physics assignment based on today’s lesson. The topic covered in class should be used for this assignment. Please complete it and submit it in the next class without fail.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded-md bg-navy-custom/5 text-[10px] font-bold text-navy-custom/60">#Physics</span>
                  <span className="px-2 py-1 rounded-md bg-navy-custom/5 text-[10px] font-bold text-navy-custom/60">#Homework</span>
                  <span className="px-2 py-1 rounded-md bg-red-500/10 text-[10px] font-bold text-red-500">Due Tomorrow</span>
                </div>

                {/* Visual Attachment */}
                <div className="flex items-center gap-3 p-3 bg-navy-custom/5 rounded-2xl border border-navy-custom/5 hover:bg-navy-custom/10 transition-colors cursor-pointer group/file relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 translate-x-[-100%] group-hover/file:translate-x-[100%] transition-transform duration-1000"></div>
                  <div className="size-9 rounded-xl bg-white flex items-center justify-center text-red-500 shadow-sm border border-gray-100 group-hover/file:scale-110 transition-transform relative z-10">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
                  </div>
                  <div className="relative z-10">
                    <div className="text-[11px] font-bold text-navy-custom mb-0.5">Physics_Assignment_Ch4.pdf</div>
                    <div className="text-[9px] font-black text-navy-custom/30 uppercase tracking-widest">1.8 MB • PDF</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-navy-custom/5">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5 cursor-pointer group/action opacity-60 hover:opacity-100 transition-opacity">
                    <div className="size-7 bg-navy-custom/5 rounded-full flex items-center justify-center group-hover/action:bg-navy-custom transition-all">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-navy-custom/40 group-hover/action:text-primary"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
                    </div>
                    <span className="text-[9px] font-black text-navy-custom/40">124</span>
                  </div>
                </div>
                <div className="size-8 bg-navy-custom rounded-xl flex items-center justify-center text-primary shadow-lg hover:scale-110 transition-transform cursor-pointer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 04. Peer Communities */}
        <div className="md:col-span-12 lg:col-span-8 bg-navy-custom rounded-apple p-10 md:p-12 shadow-bento hover:shadow-bento-hover transition-all duration-700 flex flex-col border border-navy-custom group gap-12 relative overflow-hidden reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="flex flex-col lg:flex-row h-full gap-12 relative z-10">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex gap-2 mb-8">
                  <span className="px-3 py-1.5 rounded-full text-[9px] font-black tracking-widest bg-white/5 text-primary border border-white/10">v4.0 HUB</span>
                  <span className="px-3 py-1.5 rounded-full text-[9px] font-black tracking-widest bg-primary text-navy-custom uppercase">Synthesis Active</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tighter leading-tight text-white">Learning <br />together.</h3>
                <p className="text-white/40 text-base font-medium leading-relaxed max-w-sm mb-4">A safe space to ask questions and help friends. Because learning is better when we do it together.</p>
                <div className="flex items-center gap-3 mb-8">
                  <div className="px-3 py-1.5 rounded-full bg-primary/20 text-primary text-[10px] font-black tracking-wider">AURA Points</div>
                  <div className="text-white/60 text-sm font-medium">Earn recognition for helping peers</div>
                </div>

                <button
                  onClick={() => onNavigate && onNavigate('community')}
                  className="group flex items-center gap-2 text-primary text-sm font-bold tracking-wide hover:text-white transition-colors"
                >
                  Explore Community
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                </button>
              </div>
              <div className="mt-10 pt-10 border-t border-white/5">
                <div className="text-[9px] font-black tracking-normal text-white/20 mb-5">Trending Perspectives</div>
                <div className="flex flex-wrap gap-2">
                  {['Calculus', 'AI Ethics', 'Vedic Math'].map(tag => (
                    <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 text-[8px] font-bold text-white/40 border border-white/5 hover:bg-primary/20 hover:text-primary transition-all">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                {[
                  { q: 'Calculus Mind', up: 42, aura: '+125', color: 'bg-primary/10 text-primary border-primary/20' },
                  { q: 'Organic Chem Hub', up: 89, aura: '+89', color: 'bg-white/5 text-white/40 border-white/5' },
                  { q: 'Exam Preparation', up: 156, aura: '+210', color: 'bg-white/10 text-white border-white/10' }
                ].map((item, i) => (
                  <div key={i} className={`p-5 rounded-apple-sm border flex items-center justify-between hover:bg-white/10 transition-all cursor-pointer group/item hover:-translate-y-1 ${item.color}`}>
                    <div className="flex items-center gap-4">
                      <div className="size-9 bg-white/5 rounded-xl flex items-center justify-center text-[9px] font-black group-hover/item:bg-primary group-hover/item:text-navy-custom transition-all">#{item.up}</div>
                      <div>
                        <span className="font-bold text-sm tracking-tight block">{item.q}</span>
                        <span className="text-[10px] font-bold text-primary/60 group-hover/item:text-primary">Aura {item.aura}</span>
                      </div>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="opacity-0 group-hover/item:opacity-100 transition-all"><path d="m9 18 6-6-6-6" /></svg>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex items-center justify-between bg-white/5 p-5 rounded-[32px] border border-white/5 group-hover:bg-white/10 transition-all">
                <div className="flex items-center gap-4">
                  <div className="size-9 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                  </div>
                  <div className="text-white text-[11px] font-black"> Global Discussions</div>
                </div>
                <div className="size-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 - GROWTH */}
        <div className="md:col-span-12 lg:col-span-4 bg-white rounded-apple p-8 shadow-bento hover:shadow-bento-hover transition-all duration-700 border border-gray-100 group flex flex-col justify-between overflow-hidden relative reveal" style={{ transitionDelay: '0.1s' }}>
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-navy-custom tracking-tighter mb-4">Growing <br />every day</h3>
            <p className="text-navy-custom/40 text-sm font-medium leading-relaxed">Track progress, not just marks. See where you shine and where you can do even better.</p>
          </div>

          {/* Chart Container */}
          <div className="relative h-40 mt-4 w-full flex items-end justify-between gap-2 pb-2 px-4">
            {[25, 30, 40, 55, 75, 95].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group/bar">
                <div
                  className="w-3 md:w-4 rounded-t-full transition-all duration-500 ease-out relative"
                  style={{
                    height: `${height}%`,
                    backgroundColor: '#dbe890', // Explicit light green base
                    transitionDelay: `${i * 50}ms`
                  }}
                >
                  {/* Darker overlay on hover */}
                  <div
                    className="absolute bottom-0 left-0 w-full bg-[#a3b839] transition-all duration-500 ease-out rounded-t-full"
                    style={{
                      height: '0%',
                      opacity: 0
                    }}
                  />
                  <style>{`
                     .group:hover .group\\/bar:nth-child(${i + 1}) > div {
                       background-color: #c5d96a !important;
                       height: ${Math.min(height + 10, 100)}% !important;
                     }
                   `}</style>
                </div>
                <span className="text-[10px] font-bold text-gray-400">
                  {['M', 'T', 'W', 'T', 'F', 'S'][i]}
                </span>
              </div>
            ))}

            {/* Float Badge */}
            <div className="absolute top-0 right-0 bg-[#dbe890] text-navy-custom px-3 py-1 rounded-full text-[10px] font-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
              +15%
            </div>
          </div>
        </div>

        <div className="md:col-span-12 lg:col-span-4 bg-navy-custom rounded-apple p-8 shadow-bento hover:shadow-bento-hover transition-all duration-700 border border-navy-custom group flex flex-col justify-between overflow-hidden relative reveal" style={{ transitionDelay: '0.2s' }}>
          <div>
            <div className="px-3 py-1 rounded-full text-[9px] font-black tracking-[0.2em] bg-white/10 text-primary mb-6 w-fit uppercase">Academic Core</div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tighter mb-4">Notes in <br />your pocket</h3>
            <p className="text-white/30 text-sm font-medium leading-relaxed">Class notes and study materials, ready whenever you need them.</p>
          </div>
          <div className="flex gap-2 pt-6">
            {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-1 flex-1 bg-white/10 rounded-full group-hover:bg-primary transition-all duration-500" style={{ transitionDelay: `${i * 100}ms` }}></div>)}
          </div>
        </div>

        <div className="md:col-span-12 lg:col-span-4 bg-white rounded-apple p-8 shadow-bento hover:shadow-bento-hover transition-all duration-700 border border-gray-100 group flex flex-col justify-between overflow-visible relative reveal" style={{ transitionDelay: '0.3s' }}>
          {/* RESTORED BLUR ORB */}
          <div className="absolute -bottom-8 -right-8 size-24 bg-primary/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-1000"></div>
          <div>
            <div className="px-3 py-1 rounded-full text-[9px] font-black tracking-[0.2em] bg-primary text-navy-custom mb-6 w-fit uppercase">Attendance</div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-navy-custom tracking-tighter mb-4">Safe at <br />school</h3>
            <p className="text-navy-custom/40 text-sm font-medium leading-relaxed">Get a gentle ping when your child reaches school. Peace of mind, every morning.</p>
          </div>
          <div className="flex items-center gap-3 pt-6 relative">
            {/* iOS-style Notification */}
            <div className="w-full bg-gray-50 p-3 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 transition-all duration-500 group-hover:bg-white group-hover:shadow-xl group-hover:scale-[1.02]">
              {/* App Icon */}
              <div className="size-10 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>
              </div>
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-navy-custom uppercase tracking-wide">Letuic</span>
                  <span className="text-[9px] text-gray-400 shrink-0">now</span>
                </div>
                <div className="text-[12px] font-semibold text-navy-custom truncate group-hover:hidden">Abhishek has arrived safely</div>
                <div className="text-[10px] text-gray-500 truncate group-hover:hidden">Attendance marked at school</div>
                {/* Expanded State */}
                <div className="hidden group-hover:block">
                  <div className="text-[13px] font-bold text-green-600">Woohoo! Abhishek is present</div>
                  <div className="text-[10px] text-gray-600">Marked at 9:00 AM • St. Mary's School</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BentoGrid;