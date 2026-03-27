import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from './BlogCard';
import { getPublishedPosts, BlogPost } from '../lib/blog';

interface BlogProps {
  onNavigate: (view: 'home' | 'contact' | 'community' | 'careers' | 'blog') => void;
}

const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All Stories');

  const categories = ['All Stories', 'Platform Updates', 'AI Insights', 'Growth', 'Transport', 'Community Voice'];

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPosts();
  }, [selectedCategory]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const data = await getPublishedPosts();
      const filtered = selectedCategory === 'All Stories'
        ? data
        : data.filter(p => p.category === selectedCategory);
      setPosts(filtered);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  // Sort posts by date (newest first) to pick the latest featured post
  const sortedPosts = [...posts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const featuredPost = sortedPosts.find(p => p.isFeatured === true);
  const otherPosts = featuredPost ? sortedPosts.filter(p => p.id !== featuredPost.id) : sortedPosts;

  useEffect(() => {
    if (!loading) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      }, { threshold: 0.1 });

      const revealItems = document.querySelectorAll('.reveal-item');
      revealItems.forEach(item => observer.observe(item));

      return () => observer.disconnect();
    }
  }, [loading, posts]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] selection:bg-primary/30 pb-32 pt-24" ref={scrollRef}>

      <style>{`
        .reveal-item.in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-primary/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-navy-custom/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 container max-w-[1280px] mx-auto px-4 md:px-6">

        <div className="max-w-4xl mb-12 transition-all duration-700">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-12 bg-navy-custom/10"></div>
            <span className="text-[12px] font-black text-navy-custom/30">
              Insights
            </span>
            <div className="h-px w-12 bg-navy-custom/10"></div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-navy-custom tracking-tighter leading-[0.9] mb-10">
            Insights for the <br />
            <span className="text-gradient">Intellectual Hub.</span>
          </h1>

          <p className="text-xl md:text-2xl text-navy-custom/30 font-medium max-w-2xl leading-relaxed">
            Exploring the intersection of technology, education, and human collaboration.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-4 mb-16 transition-all duration-700" style={{ transitionDelay: '300ms' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-2xl text-[13px] font-black transition-all duration-300 border ${selectedCategory === cat
                ? 'bg-navy-custom text-primary border-navy-custom shadow-xl'
                : 'bg-white text-navy-custom/40 border-gray-100 hover:border-primary hover:text-navy-custom'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="w-full">
            {/* Hero Shimmer */}
            <div className="h-[350px] md:h-[450px] bg-navy-custom/[0.03] rounded-[32px] mb-16 w-full animate-pulse flex flex-col justify-end p-8 md:p-14">
              <div className="h-6 w-32 bg-navy-custom/5 rounded-full mb-6" />
              <div className="h-10 w-2/3 bg-navy-custom/5 rounded-xl mb-6" />
              <div className="h-4 w-1/3 bg-navy-custom/5 rounded-full" />
            </div>
            {/* Grid Shimmer */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-[450px] w-full bg-navy-custom/[0.03] rounded-[32px] p-8 animate-pulse">
                   <div className="h-48 w-full bg-navy-custom/5 rounded-2xl mb-8" />
                   <div className="h-4 w-24 bg-navy-custom/5 rounded-full mb-4" />
                   <div className="h-6 w-full bg-navy-custom/5 rounded-lg mb-4" />
                   <div className="h-6 w-2/3 bg-navy-custom/5 rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        ) : posts.length > 0 ? (
          <>
            {/* Featured Hero Card */}
            {featuredPost && (
              <div
                onClick={() => navigate(`/blog/${featuredPost.slug}`)}
                className="mb-16 reveal-item opacity-0 translate-y-8 cursor-pointer overflow-hidden rounded-[32px] shadow-xl"
                style={{ transitionDelay: '300ms' }}
              >
                <div className="relative group bg-navy-custom h-[350px] md:h-[450px] flex flex-col justify-end p-8 md:p-14">
                  <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary to-green-500 z-20" />
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-custom via-navy-custom/40 to-transparent z-10" />
                    {featuredPost.featuredImage && featuredPost.featuredImage !== "" && (
                      <img
                        src={featuredPost.featuredImage}
                        alt="Featured"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s]"
                      />
                    )}
                  </div>

                  <div className="relative z-20 max-w-3xl">
                    <span className="inline-block px-5 py-2 rounded-full bg-primary text-navy-custom text-[10px] font-black tracking-[0.2em] uppercase mb-8 shadow-xl">
                      {featuredPost.isFeatured ? 'Featured Story' : 'Latest Insight'}
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-8 group-hover:text-primary transition-colors duration-500 line-clamp-3 break-words overflow-hidden text-ellipsis">
                      {featuredPost.title}
                    </h2>
                    <div className="flex items-center gap-6">
                      <button className="px-10 py-4 bg-white text-navy-custom rounded-2xl font-black text-sm hover:scale-105 transition-transform">
                        Read Article
                      </button>
                      <div className="flex items-center gap-3 text-white/40 text-[11px] font-bold tracking-wide">
                        <span>{featuredPost.readTime}</span>
                        <span className="size-1 bg-white/20 rounded-full" />
                        <span>By {featuredPost.authorName}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
              {otherPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  {...post}
                  delay={`${(index % 3 + 1) * 100}ms`}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center px-6 py-20 md:py-32 bg-white rounded-[40px] md:rounded-[48px] border border-gray-100 shadow-sm animate-fade-up">
            <div className="size-20 md:size-24 rounded-[24px] md:rounded-[28px] bg-navy-custom/5 flex items-center justify-center mx-auto mb-8 shadow-inner">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-navy-custom/40 transition-transform hover:scale-110"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="m9 16 2 2 4-4" /></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-navy-custom mb-4 tracking-tight">No stories published yet</h3>
            <p className="text-navy-custom/50 text-base md:text-lg font-medium max-w-sm mx-auto mb-10 leading-relaxed">We're currently brewing fresh insights for the <span className="text-navy-custom font-black">{selectedCategory}</span> category.</p>
            <button onClick={() => setSelectedCategory('All Stories')} className="px-10 py-4 bg-navy-custom text-white rounded-2xl font-black text-[13px] hover:bg-primary hover:text-navy-custom transition-all shadow-xl hover:scale-105">
              Explore All Stories
            </button>
          </div>
        )}

        {/* Newsletter CTA */}
        {/* <div className="bg-white rounded-[48px] p-12 md:p-20 border border-gray-100 shadow-bento reveal-item opacity-0 translate-y-8 text-center relative overflow-hidden group">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 size-64 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-black text-navy-custom tracking-tighter mb-8 leading-none">
              Stay ahead of the <br /> <span className="text-gradient">Edu-Curve.</span>
            </h3>
            <p className="text-navy-custom/40 text-lg font-medium mb-12">
              Join 2,000+ educators and students receiving our monthly digest of platform insights and educational innovation.
            </p>

            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-gray-50 border border-gray-100 px-8 py-5 rounded-2xl font-bold text-sm outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="px-12 py-5 bg-navy-custom text-white rounded-2xl font-black text-sm hover:bg-black transition-colors"
              >
                Join Now
              </button>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Blog;
