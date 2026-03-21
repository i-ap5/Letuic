import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[90vh] flex flex-col items-center justify-center px-5 pt-40 pb-20 text-center relative overflow-hidden bg-white">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            
            <div className="relative z-10 max-w-lg mx-auto reveal-scale in-view">
                <div className="text-[120px] md:text-[180px] font-black text-navy leading-none tracking-tighter opacity-10 mb-[-40px] md:mb-[-60px]">
                    404
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black text-navy mb-6 tracking-tighter leading-tight">
                    Lost in the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500">Ecosystem?</span>
                </h1>
                
                <p className="text-lg md:text-xl text-navy/40 font-medium mb-12 leading-relaxed">
                    The node you're looking for doesn't exist or has been moved to a different coordinate.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => navigate('/')}
                        className="px-10 py-4 rounded-2xl bg-secondary text-white font-bold hover:bg-black transition-all shadow-xl hover:-translate-y-1 active:scale-95 flex items-center gap-2 group"
                    >
                        Back to home
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                        </svg>
                    </button>
                    
                    <button
                        onClick={() => navigate('/careers')}
                        className="px-10 py-4 rounded-2xl bg-navy/5 text-navy/60 font-bold hover:bg-navy/10 transition-all active:scale-95"
                    >
                        View careers
                    </button>
                </div>
            </div>

            {/* Orbiting element for flavor */}
            <div className="absolute top-1/4 right-1/4 size-12 bg-primary rounded-full blur-xl opacity-20 animate-float-diagonal"></div>
            <div className="absolute bottom-1/4 left-1/4 size-20 bg-secondary rounded-full blur-2xl opacity-10 animate-float-alt"></div>
        </div>
    );
};

export default NotFound;
