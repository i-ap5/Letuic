import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  category: string;
  excerpt: string;
  createdAt: string;
  readTime: string;
  featuredImage: string;
  slug: string;
  delay?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, category, excerpt, createdAt, readTime, featuredImage, slug, delay }) => {
  const navigate = useNavigate();
  const date = new Date(createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div 
      onClick={() => navigate(`/blog/${slug}`)}
      className="group relative bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-bento hover:shadow-bento-hover transition-all duration-700 cursor-pointer reveal-item opacity-0 translate-y-8"
      style={{ transitionDelay: delay }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-navy-custom/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
        {featuredImage && featuredImage !== "" ? (
          <img 
            src={featuredImage} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
          />
        ) : (
          <div className="w-full h-full bg-navy-custom/5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-1000">
            <span className="text-navy-custom/20 font-black text-[12px]">Letuic Story</span>
          </div>
        )}
        <div className="absolute top-6 left-6 z-20">
          <span className="px-4 py-1.5 rounded-full bg-primary text-navy-custom text-[10px] font-black tracking-wider uppercase shadow-xl">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-center gap-4 mb-4 text-[11px] font-bold text-navy-custom/30">
          <span>{date}</span>
          <span className="size-1 bg-navy-custom/10 rounded-full" />
          <span>{readTime}</span>
        </div>
        
        <h3 className="text-2xl font-black text-navy-custom mb-4 leading-tight group-hover:text-primary transition-colors duration-500 line-clamp-3 break-words overflow-hidden text-ellipsis">
          {title}
        </h3>
        
        <p className="text-navy-custom/50 text-sm font-medium leading-relaxed mb-8 line-clamp-2">
          {excerpt}
        </p>
        
        <button className="flex items-center gap-2 text-navy-custom font-black text-xs group/btn">
          Read Story
          <svg 
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" 
            className="transform group-hover/btn:translate-x-1 transition-transform"
          >
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Hover Sheen */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
};

export default BlogCard;
