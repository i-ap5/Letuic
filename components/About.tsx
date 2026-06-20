import React, { useEffect } from 'react';

interface TeamMember {
  name: string;
  role: string;
  category: 'leadership' | 'technology' | 'education';
  bio: string;
  image: string;
  linkedin: string;
  twitter: string;
  github?: string;
  imagePosition?: string;
}

interface AboutProps {
  onNavigate: (view: 'home' | 'contact' | 'community' | 'careers' | 'blog' | 'about') => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team: TeamMember[] = [
    {
      name: 'Vishnu',
      role: 'CEO',
      category: 'leadership',
      bio: '',
      image: '/Letuic_v1.webp',
      linkedin: 'https://www.linkedin.com/in/vishnu-m-1497b2148/',
      twitter: '#',
      imagePosition: 'object-[center_15%]'
    },
    {
      name: 'Ashwin Venugopal',
      role: 'CMO',
      category: 'leadership',
      bio: '',
      image: '/Letuic_av.webp',
      linkedin: 'https://www.linkedin.com/in/ashwin-venugopal-0b0935260/',
      twitter: '#',
      imagePosition: 'object-[center_15%]'
    },
    {
      name: 'Arun Pradeep',
      role: 'Product Manager',
      category: 'technology',
      bio: '',
      image: '/Letuic_ak1.webp',
      linkedin: 'https://www.linkedin.com/in/akconnect/',
      twitter: '#',
      github: 'https://github.com/i-ap5',
      imagePosition: 'object-[center_15%]'
    }
  ];

  return (
    <section className="container max-w-[1280px] mx-auto px-5 md:px-10 pt-28 md:pt-32 pb-16 md:pb-24 relative min-h-screen overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40%] aspect-square bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[40%] aspect-square bg-navy-custom/5 blur-[120px] rounded-full translate-y-1/3 -translate-x-1/3 -z-10"></div>

      {/* Hero Section */}
      <div className="mb-16 text-left reveal in-view max-w-[1000px] mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-navy-custom/10"></div>
          <span className="text-[12px] font-black text-navy-custom/30">
            About Letuic
          </span>
          <div className="h-px w-12 bg-navy-custom/10"></div>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-navy-custom tracking-tighter mb-6 leading-[0.95]">
          Let Your Intelligence <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-500">Collaborate.</span>
        </h1>

        {/* About Us Paragraph */}
        <div className="mt-8 space-y-6 text-lg md:text-xl text-navy-custom/50 max-w-[1000px] font-medium leading-relaxed">
          <p>
            At Letuic, we believe the current models of education are ripe for a collaborative revolution. Traditional tools silo knowledge, creating barriers between students, researchers, and educators. We are building the modern educational tech hub to bridge these gaps, offering spaces where collective intelligence is prioritized.
          </p>
          <p>
            By designing beautiful, highly integrated digital workspaces, we encourage natural community-building and joint problem-solving. From secure platforms for institutions to active collaboration spaces for learners, Letuic is redefining how learning ecosystems co-create and thrive.
          </p>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-[1000px] mx-auto mb-24 reveal-scale in-view">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mission Card */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-navy-custom/5 hover:border-primary/20 hover:shadow-2xl hover:shadow-navy-custom/5 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="size-12 rounded-2xl bg-navy-custom text-primary flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m12 8-2 4h4l-2 4" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-navy-custom tracking-tight mb-4">
              Our Mission
            </h3>
            <p className="text-sm md:text-base font-medium text-navy-custom/50 leading-relaxed">
              To design and deploy modern, secure, and intuitive digital workspaces that allow learners, educators, and educational institutions to seamlessly synchronize their skills, communicate freely, and achieve learning excellence.
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-white border border-navy-custom/5 hover:border-primary/20 hover:shadow-2xl hover:shadow-navy-custom/5 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="size-12 rounded-2xl bg-navy-custom text-primary flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-navy-custom tracking-tight mb-4">
              Our Vision
            </h3>
            <p className="text-sm md:text-base font-medium text-navy-custom/50 leading-relaxed">
              To establish a zero-friction global learning ecosystem where intelligence is networked, accessibility is absolute, and technology aligns perfectly with human curiosity and cognitive growth.
            </p>
          </div>

        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-[1000px] mx-auto mb-24 reveal-scale in-view">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-navy-custom/5 pb-6">
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-navy-custom/30 mb-2">
              Our Directory
            </h2>
            <h3 className="text-3xl md:text-4xl font-black text-navy-custom tracking-tighter leading-none">
              Meet the Builders
            </h3>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="group rounded-3xl bg-white border border-navy-custom/5 hover:border-primary/20 hover:shadow-2xl hover:shadow-navy-custom/5 transition-all duration-500 overflow-hidden"
            >
              {/* Image with hover effects */}
              <div className="aspect-square w-full overflow-hidden bg-navy-custom/5 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className={`size-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-750 ease-out ${member.imagePosition || 'object-center'}`}
                />

                {/* Overlay social buttons */}
                <div className="absolute bottom-4 right-4 flex gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={member.linkedin}
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                    className="size-9 rounded-xl bg-navy-custom text-white hover:bg-primary hover:text-navy-custom flex items-center justify-center transition-colors shadow-lg"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" /></svg>
                  </a>
                  <a
                    href={member.twitter}
                    aria-label="Twitter"
                    target="_blank"
                    rel="noreferrer"
                    className="size-9 rounded-xl bg-navy-custom text-white hover:bg-primary hover:text-navy-custom flex items-center justify-center transition-colors shadow-lg"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  {member.github && (
                    <a
                      href={member.github}
                      aria-label="GitHub"
                      target="_blank"
                      rel="noreferrer"
                      className="size-9 rounded-xl bg-navy-custom text-white hover:bg-primary hover:text-navy-custom flex items-center justify-center transition-colors shadow-lg"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h4 className="text-xl font-black text-navy-custom tracking-tight">
                  {member.name}
                </h4>
                <div className="text-[10px] font-black uppercase tracking-widest text-navy-custom/40 mt-1">
                  {member.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
