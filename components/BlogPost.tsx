import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getPostBySlug, getPublishedPosts, BlogPost as BlogPostType } from '../lib/blog';
import BlogCard from './BlogCard';

interface BlogPostProps {
   onNavigate: (view: 'home' | 'contact' | 'community' | 'careers' | 'blog') => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ onNavigate }) => {
   const { slug } = useParams<{ slug: string }>();
   const navigate = useNavigate();
   const [post, setPost] = useState<BlogPostType | null>(null);
   const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
   const [loading, setLoading] = useState(true);
   const [scrollProgress, setScrollProgress] = useState(0);
   const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

   useEffect(() => {
      window.scrollTo(0, 0);
      if (slug) fetchPost(slug);

      const handleScroll = () => {
         const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
         const progress = (window.scrollY / totalHeight) * 100;
         setScrollProgress(progress);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, [slug]);

   const extractHeadings = (markdown: string) => {
      const headingRegex = /^(#{2,3})\s+(.*)$/gm;
      const matches = [];
      let match;
      while ((match = headingRegex.exec(markdown)) !== null) {
         matches.push({
            level: match[1].length,
            text: match[2].replace(/[^\w\s]/gi, ''),
            id: match[2].toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
         });
      }
      setHeadings(matches);
   };

   const fetchPost = async (postSlug: string) => {
      setLoading(true);
      try {
         const data = await getPostBySlug(postSlug);
         if (data) {
            let cleanBody = data.body;
            if (/\\n/.test(cleanBody)) {
               cleanBody = cleanBody.replace(/\\n/g, '\n').replace(/\\r/g, '\r').replace(/\\"/g, '"');
            }
            cleanBody = cleanBody.replace(/\n(?!\n)/g, '\n\n');
            setPost({ ...data, body: cleanBody });
            extractHeadings(cleanBody);

            const allPosts = await getPublishedPosts();
            const related = allPosts.filter(p => p.category === data.category && p.slug !== data.slug).slice(0, 3);
            setRelatedPosts(related);
         } else navigate('/404');
      } catch (error) {
         console.error(error);
         navigate('/blog');
      } finally {
         setLoading(false);
      }
   };

   // Dynamic Native SEO & Open Graph Injection
   useEffect(() => {
      if (!post) return;

      document.title = `${post.title} | Letuic Insights`;

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription && post.excerpt) {
         metaDescription.setAttribute('content', post.excerpt);
      }

      const updateOgMeta = (property: string, content: string) => {
         let meta = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
         if (!meta) {
            meta = document.createElement('meta');
            // Support both name and property depending on the tag
            if (property.startsWith('twitter:')) {
               meta.setAttribute('name', property);
            } else {
               meta.setAttribute('property', property);
            }
            document.head.appendChild(meta);
         }
         meta.setAttribute('content', content);
      };

      updateOgMeta('og:title', post.title);
      updateOgMeta('og:type', 'article');
      if (post.excerpt) updateOgMeta('og:description', post.excerpt);

      if (post.featuredImage && post.featuredImage !== "") {
         updateOgMeta('og:image', post.featuredImage);
         updateOgMeta('twitter:card', 'summary_large_image');
         updateOgMeta('twitter:image', post.featuredImage);
      }

      // Cleanup logic if needed, but standard routing generally re-applies root tags on route change.
      return () => {
         // Optionally, the App.tsx already re-writes some tags.
      };
   }, [post]);

   if (loading || !post) {
      return (
         <div className="min-h-screen bg-[#F8F9FA] pt-40 pb-40 container max-w-[1280px] mx-auto px-4 md:px-6">
            <div className="animate-pulse">
               <div className="h-4 w-32 bg-navy-custom/5 rounded-full mb-10" />
               <div className="h-[55vh] md:h-[65vh] w-full bg-navy-custom/5 rounded-[40px] md:rounded-[56px] mb-12" />
               <div className="max-w-4xl">
                  <div className="h-10 w-2/3 bg-navy-custom/5 rounded-full mb-6" />
                  <div className="h-6 w-1/3 bg-navy-custom/5 rounded-full mb-12" />
                  <div className="space-y-4">
                     {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-4 w-full bg-navy-custom/5 rounded-full" />)}
                  </div>
               </div>
            </div>
         </div>
      );
   }

   const date = new Date(post.createdAt).toLocaleDateString('en-US', {
      month: 'long', day: 'numeric', year: 'numeric'
   });

   return (
      <div className="min-h-screen bg-[#F8F9FA] selection:bg-primary/30 relative overflow-x-hidden">
         {/* Progress Bar */}
         <div className="fixed top-0 left-0 w-full h-1.5 z-[1000] pointer-events-none">
            <div className="h-full bg-primary shadow-[0_0_15px_#dbe890]" style={{ width: `${scrollProgress}%` }} />
         </div>


         <main className="pt-32 pb-40">
            {/* 1. Hero Content & Author Row Wrapper */}
            <div className="container max-w-[1280px] mx-auto px-4 md:px-6 mb-20 animate-fade-up">
               {/* Breadcrumbs */}
               <nav className="flex items-center gap-4 text-[11px] font-black  text-navy-custom/30 mb-10">
                  <button onClick={() => navigate('/')} className="hover:text-primary transition-colors cursor-pointer">Home</button>
                  <span className="text-navy-custom/30 text-xs">»</span>
                  <button onClick={() => navigate('/blog')} className="hover:text-primary transition-colors cursor-pointer">Blog</button>
                  <span className="text-navy-custom/30 text-xs">»</span>
                  <span className="text-navy-custom/60 line-clamp-1 max-w-[150px] md:max-w-sm">{post.title}</span>
               </nav>

               {/* Cinematic Hero Image */}
               <div className="relative rounded-[40px] md:rounded-[56px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] min-h-[55vh] md:min-h-[65vh] flex flex-col justify-end p-8 md:p-12 group mb-12">
                  {post.featuredImage && post.featuredImage !== "" && (
                     <img src={post.featuredImage} alt={post.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105 z-0" />
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-10" />

                  <div className="relative z-20 max-w-4xl mt-32 w-full">
                     <span className="px-4 py-1.5 rounded-full bg-primary text-navy-custom text-[10px] font-black tracking-wider uppercase shadow-xl mb-6 inline-block">
                        {post.category}
                     </span>
                     <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white tracking-tighter leading-[1.05] drop-shadow-lg mb-8 max-w-5xl break-words">
                        {post.title}
                     </h1>
                     {post.excerpt && (
                        <p className="hidden md:block text-lg lg:text-xl font-medium text-white/80 leading-relaxed max-w-3xl drop-shadow-sm line-clamp-2">
                           {post.excerpt}
                        </p>
                     )}
                  </div>
               </div>

               {/* Integrated Author & Share Row - Clean Line Style */}
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-8 border-b border-gray-100">
                  {/* Left: Metadata */}
                  <div className="flex items-center gap-4">
                     <div className="size-12 rounded-full bg-navy-custom text-primary flex items-center justify-center font-black text-lg shadow-lg shrink-0 overflow-hidden">
                        {post.authorName[0]}
                     </div>
                     <div>
                        <div className="text-lg font-black text-navy-custom flex items-center gap-3">
                           {post.authorName}
                           <span className="size-1.5 bg-primary rounded-full" />
                           <span className="text-[12px] font-bold text-navy-custom/40 uppercase tracking-widest">{post.readTime}</span>
                        </div>
                        <div className="text-[14px] font-medium text-navy-custom/50 mt-1 ">
                           Published on {date}
                        </div>
                     </div>
                  </div>

                  {/* Right: Social Share */}
                  <div className="flex items-center gap-4">
                     <span className="text-[11px] font-black text-navy-custom/20 uppercase tracking-[0.25em] mr-2 hidden lg:block">Spread the word</span>
                     <div className="flex items-center gap-2.5">
                        <button onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')} className="size-11 rounded-2xl bg-white border border-gray-100 flex items-center justify-center hover:bg-navy-custom hover:text-white transition-all shadow-sm text-navy-custom/60 cursor-pointer group">
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" /></svg>
                        </button>
                        <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')} className="size-11 rounded-2xl bg-white border border-gray-100 flex items-center justify-center hover:bg-navy-custom hover:text-white transition-all shadow-sm text-navy-custom/60 cursor-pointer">
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </button>
                        <button onClick={() => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`, '_blank')} className="size-11 rounded-2xl bg-white border border-gray-100 flex items-center justify-center hover:bg-navy-custom hover:text-white transition-all shadow-sm text-navy-custom/60 cursor-pointer">
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.414 0 0 5.414 0 12.05c0 2.123.55 4.197 1.594 6.027L0 24l6.135-1.61a11.757 11.757 0 0 0 5.915 1.594h.005c6.637 0 12.05-5.414 12.05-12.05a11.751 11.751 0 0 0-3.41-8.413" /></svg>
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* 2. Grid Content */}
            <div className="container max-w-[1280px] mx-auto px-4 md:px-6 animate-fade-up" style={{ animationDelay: '300ms' }}>
               <div className="flex flex-col lg:flex-row gap-12 xl:gap-24 relative">
                  {/* Left Segment: Table of Contents */}
                  <aside className="hidden lg:block lg:w-[15%] xl:w-[250px] shrink-0">
                     <div className="sticky top-32">
                        <div className="pl-6 border-l-2 border-navy-custom/5">
                           <h4 className="text-[14px] font-black text-navy-custom/30 mb-8 lowercase first-letter:uppercase">Chapters</h4>
                           <nav className="space-y-5">
                              {headings.map((h, i) => (
                                 <a
                                    key={i}
                                    href={`#${h.id}`}
                                    className={`block text-[13px] font-bold leading-relaxed transition-all hover:text-primary ${h.level === 3 ? 'pl-4 text-navy-custom/40 border-l border-transparent' : 'text-navy-custom/80'}`}
                                 >
                                    {h.text}
                                 </a>
                              ))}
                           </nav>
                        </div>
                     </div>
                  </aside>

                  {/* Right Segment: Body Text */}
                  <article className="flex-1 min-w-0 pr-0 xl:pr-12 max-w-4xl">
                     <style>{`
                        .blog-body-text p {
                           font-size: 17px;
                           line-height: 1.65;
                           color: #1a292e;
                           margin-bottom: 1.5rem;
                           font-weight: 500;
                        }
                        @media (min-width: 768px) {
                           .blog-body-text p { font-size: 18px; }
                        }
                        .blog-body-text h1 {
                           font-size: 38px;
                           font-weight: 900;
                           color: #152328;
                           margin-top: 4rem;
                           margin-bottom: 2rem;
                           letter-spacing: -0.03em;
                           line-height: 1.15;
                           scroll-margin-top: 8rem;
                        }
                        @media (min-width: 768px) {
                           .blog-body-text h1 { font-size: 52px; }
                        }
                        .blog-body-text h2 {
                           font-size: 36px;
                           font-weight: 900;
                           color: #152328;
                           margin-top: 4rem;
                           margin-bottom: 1.75rem;
                           letter-spacing: -0.025em;
                           line-height: 1.2;
                           scroll-margin-top: 8rem;
                        }
                        @media (min-width: 768px) {
                           .blog-body-text h2 { font-size: 46px; }
                        }
                        .blog-body-text h3 {
                           font-size: 28px;
                           font-weight: 900;
                           color: #152328;
                           margin-top: 3rem;
                           margin-bottom: 1.5rem;
                           scroll-margin-top: 8rem;
                        }
                        @media (min-width: 768px) {
                           .blog-body-text h3 { font-size: 34px; }
                        }
                        .blog-body-text h4 {
                           font-size: 22px;
                           font-weight: 900;
                           color: #152328;
                           margin-top: 2.5rem;
                           margin-bottom: 1.25rem;
                           scroll-margin-top: 8rem;
                        }
                        @media (min-width: 768px) {
                           .blog-body-text h4 { font-size: 26px; }
                        }
                        .blog-body-text h5 {
                           font-size: 18px;
                           font-weight: 800;
                           color: #152328;
                           margin-top: 2rem;
                           margin-bottom: 1rem;
                           scroll-margin-top: 8rem;
                        }
                        @media (min-width: 768px) {
                           .blog-body-text h5 { font-size: 20px; }
                        }
                        .blog-body-text h6 {
                           font-size: 16px;
                           font-weight: 800;
                           color: #152328;
                           text-transform: uppercase;
                           letter-spacing: 0.05em;
                           margin-top: 2rem;
                           margin-bottom: 0.75rem;
                           scroll-margin-top: 8rem;
                        }
                        @media (min-width: 768px) {
                           .blog-body-text h6 { font-size: 17px; }
                        }
                        .blog-body-text ul {
                           list-style-type: none;
                           padding-left: 0;
                           margin-bottom: 2.5rem;
                        }
                        .blog-body-text ol {
                           padding-left: 1.5rem;
                           margin-bottom: 2.5rem;
                           counter-reset: item;
                           list-style: none;
                        }
                        .blog-body-text ol li {
                           counter-increment: item;
                           padding-left: 0.5rem;
                        }
                        .blog-body-text ol li::before {
                           content: counter(item) '.';
                           font-weight: 900;
                           color: #dbe890;
                           margin-right: 0.5rem;
                        }
                        .blog-body-text li {
                           font-size: 17px;
                           line-height: 1.65;
                           color: #1a292e;
                           margin-bottom: 0.75rem;
                           position: relative;
                           padding-left: 1.5rem;
                           font-weight: 500;
                        }
                        @media (min-width: 768px) {
                           .blog-body-text li { font-size: 18px; }
                        }
                        .blog-body-text ul > li::before {
                           content: '';
                           position: absolute;
                           left: 0;
                           top: 0.6em;
                           width: 6px;
                           height: 6px;
                           border-radius: 50%;
                           background-color: #dbe890;
                        }
                        .blog-body-text blockquote {
                           border-left: 6px solid #dbe890;
                           padding: 2rem;
                           margin: 3.5rem 0;
                           background: rgba(21,35,40,0.02);
                           border-radius: 0 24px 24px 0;
                           font-size: 19px;
                           line-height: 1.6;
                           font-style: italic;
                           font-weight: 800;
                           color: #152328;
                        }
                        @media (min-width: 768px) {
                           .blog-body-text blockquote { font-size: 21px; }
                        }
                        .blog-body-text img {
                           border-radius: 24px;
                           box-shadow: 0 15px 30px -10px rgba(0,0,0,0.1);
                           margin: 3.5rem 0;
                           border: 1px solid rgba(21, 35, 40, 0.05);
                           width: 100%;
                        }
                        .blog-body-text hr {
                           border: none;
                           height: 2px;
                           background: linear-gradient(to right, transparent, rgba(21,35,40,0.08), transparent);
                           margin: 4rem 0;
                        }
                        .blog-body-text a {
                           color: #152328;
                           font-weight: 700;
                           text-decoration: underline;
                           text-decoration-color: #dbe890;
                           text-underline-offset: 4px;
                           transition: text-decoration-color 0.2s;
                        }
                        .blog-body-text a:hover {
                           text-decoration-color: #152328;
                        }
                        .blog-body-text .table-wrapper {
                           width: 100%;
                           overflow-x: auto;
                           -webkit-overflow-scrolling: touch;
                           margin: 3.5rem 0;
                        }
                        .blog-body-text table {
                           width: 100%;
                           border-collapse: separate;
                           border-spacing: 0;
                           margin: 0;
                           font-size: 16px;
                           border-radius: 20px;
                           overflow: hidden;
                           border: 1px solid rgba(21, 35, 40, 0.08);
                           box-shadow: 0 10px 30px -10px rgba(0,0,0,0.05);
                           min-width: 600px;
                        }
                        .blog-body-text th, .blog-body-text td {
                           padding: 1.25rem 1.5rem;
                           text-align: left;
                           border-bottom: 1px solid rgba(21, 35, 40, 0.05);
                        }
                        .blog-body-text th {
                           background-color: #f8f9fa;
                           color: #152328;
                           font-weight: 900;
                           font-size: 14px;
                           border-bottom: 2px solid rgba(21, 35, 40, 0.1);
                        }
                        .blog-body-text tr:last-child td {
                           border-bottom: none;
                        }
                        .blog-body-text tbody tr:hover {
                           background-color: #f8f9fa;
                           transition: background-color 0.2s ease;
                        }
                        .blog-body-text td {
                           color: #1a292e;
                           font-weight: 500;
                           line-height: 1.65;
                        }
                     `}</style>

                     <div className="blog-body-text">
                        <ReactMarkdown
                           remarkPlugins={[remarkGfm]}
                           rehypePlugins={[rehypeRaw as any]}
                           components={{
                              h1: ({ children }) => <h1 id={String(children).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}>{children}</h1>,
                              h2: ({ children }) => <h2 id={String(children).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}>{children}</h2>,
                              h3: ({ children }) => <h3 id={String(children).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}>{children}</h3>,
                              h4: ({ children }) => <h4 id={String(children).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}>{children}</h4>,
                              h5: ({ children }) => <h5 id={String(children).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}>{children}</h5>,
                              h6: ({ children }) => <h6 id={String(children).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}>{children}</h6>,
                              table: ({ children }) => <div className="table-wrapper"><table>{children}</table></div>,
                              code(props: any) {
                                 const { children, className } = props;
                                 const match = /language-(\w+)/.exec(className || '');
                                 if (!match) return <code className="bg-white border border-gray-200 px-2 py-0.5 rounded-md text-navy-custom font-bold shadow-sm">{children}</code>;
                                 return (
                                    <div className="my-16 group/code relative w-full overflow-hidden rounded-[40px] shadow-2xl border border-navy-custom/10">
                                       <div className="absolute top-6 right-8 text-[11px] font-black text-white/30 z-20">{match[1]}</div>
                                       <SyntaxHighlighter language={match[1]} style={vscDarkPlus as any} PreTag="div" className="!bg-navy-custom !p-12 !m-0 font-mono text-[15px] leading-relaxed">
                                          {String(children).replace(/\n$/, '')}
                                       </SyntaxHighlighter>
                                    </div>
                                 );
                              }
                           }}
                        >
                           {post.body}
                        </ReactMarkdown>
                     </div>
                  </article>
               </div>
            </div>
         </main>

         {/* Symmetrical Related Stories Section */}
         {relatedPosts.length > 0 && (
            <section className="bg-white py-32 text-center border-t border-gray-100">
               <div className="container max-w-7xl mx-auto px-6">
                  <h2 className="text-5xl md:text-7xl font-black text-navy-custom tracking-tighter mb-20">Continue <span className="text-primary underline decoration-primary/30">Reading.</span></h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left">
                     {relatedPosts.map((p, i) => (
                        <BlogCard key={i} {...p} delay={`${i * 100}ms`} />
                     ))}
                  </div>
               </div>
            </section>
         )}

         <footer className="bg-navy-custom py-32 text-center px-6">
            <div className="max-w-3xl mx-auto">
               <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-12">Return to <br /> <span className="text-primary">Insights.</span></h3>
               <button onClick={() => navigate('/blog')} className="px-10 py-4 bg-white text-navy-custom rounded-2xl font-black text-[13px] hover:scale-105 transition-transform">
                  View All Posts
               </button>
            </div>
         </footer>
      </div>
   );
};

export default BlogPost;
