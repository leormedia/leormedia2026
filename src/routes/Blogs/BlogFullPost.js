import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import seoData from "../../assets/data/seo.json";
import { FiCalendar, FiArrowRight, FiCheckCircle, FiShare2 } from 'react-icons/fi';
import axios from 'axios';

function FullBlog() {
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/blogs/${slug}`);
        setPost(response.data);
        setError(null);
      } catch (err) {
        console.error("Failed to load blog post data:", err);
        setError({ message: 'Post not found' });
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-[26px] md:text-[38px] lg:text-[48px] font-FKScreamerBold uppercase tracking-widest text-gray-900 mb-2">Post Not Found</h2>
          <p className="text-gray-500 mb-6 text-[14px] md:text-[16px]">The article you're looking for doesn't exist or has been moved.</p>
          <Link to="/blogs" className="px-8 py-3 bg-primary text-white rounded-full font-bold uppercase tracking-widest hover:bg-orange-600 transition-colors shadow-lg shadow-primary/30">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (!post || !post.content) {
      return { __html: '' };
    }
  
    const htmlContent = post.content;
    // We remove the bold replacement to allow h3 tags to render properly via CSS
    return { __html: htmlContent };
  };
  
  const seo = seoData.blogPost || {
    title: "{postTitle} | Leor Media Blogs",
    description: "Read {postTitle} on Leor Media Blogs. Stay updated with tech and marketing insights.",
    keywords: "Leor Media, {postTitle}, blogs",
    canonical: "https://leormedia.com/blogs/{postSlug}",
    ogImage: "https://leormedia.com/images/Thumbmail-demo.png"
  };
  const dynamicTitle = (seo.title || '').replace('{postTitle}', post.title || '');
  const dynamicDescription = (seo.description || '').replace('{postTitle}', post.title || '');
  const dynamicCanonical = (seo.canonical || '').replace('{postSlug}', slug || '');
  const dynamicKeywords = (seo.keywords || '').replace('{postTitle}', post.title || '');

  // Format date nicely
  const formattedDate = post.date ? new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : 'Recently Updated';

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <Helmet>
        <title>{dynamicTitle}</title>
        <meta name="description" content={dynamicDescription} />
        <meta name="keywords" content={dynamicKeywords} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={dynamicTitle} />
        <meta property="og:description" content={dynamicDescription} />
        <meta property="og:image" content={post.feature_image || seo.ogImage} />
        <meta property="og:url" content={dynamicCanonical} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={dynamicTitle} />
        <meta name="twitter:description" content={dynamicDescription} />
        <meta name="twitter:image" content={post.feature_image || seo.ogImage} />
        <link rel="canonical" href={dynamicCanonical} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src={post.feature_image} 
            alt={post.title} 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-[14px] md:text-[14px] font-bold mb-6 backdrop-blur-sm uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            {post.category || 'Expert Insights'}
          </div>
          <h1 className="text-[18px] md:text-[48px] lg:text-[52px] font-FKScreamerBold uppercase tracking-widest mb-6 leading-[1.1] drop-shadow-lg">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-[14px] font-bold uppercase tracking-widest mt-8">
            <div className="flex items-center gap-2">
              <span>Leor Media</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCalendar className="text-primary text-[14px]" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 md:p-12 border border-slate-100">
          
          {/* Article Body */}
          <article className="prose-custom ">
            <div dangerouslySetInnerHTML={renderContent()} />
          </article>

          {/* Tags / Keywords (if available) */}
          {(() => {
            const keywordsArray = Array.isArray(post.target_keywords)
              ? post.target_keywords
              : (typeof post.target_keywords === 'string'
                  ? post.target_keywords.split(',').map(s => s.trim()).filter(Boolean)
                  : []);
            return keywordsArray.length > 0 && (
              <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-2">
                {keywordsArray.map((keyword, idx) => (
                  <span key={idx} className="px-4 py-1.5 bg-primary/5 text-gray-700 text-[12px] font-bold uppercase tracking-wider rounded-full border border-primary/20">
                    #{keyword}
                  </span>
                ))}
              </div>
            );
          })()}

          {/* Share Section */}
          <div className="mt-10 flex items-center justify-between p-6 md:p-8 bg-gray-50 border border-gray-100 rounded-3xl">
            <div>
              <h4 className="font-FKScreamerBold text-[18px] md:text-[20px] lg:text-[22px] uppercase tracking-widest text-gray-900 mb-1">Found this helpful?</h4>
              <p className="text-sm md:text-base text-gray-500 font-medium">Share this article with your network.</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-bold shadow-sm border border-gray-200 hover:border-primary hover:text-primary transition-all active:scale-95 uppercase tracking-widest text-[14px]">
              <FiShare2 />
              Share Post
            </button>
          </div>
        </div>
      </main>

      {/* Compelling CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-primary/30">
              <FiCheckCircle className="text-[30px]" />
            </div>
            
            <h2 className="text-[26px] md:text-[38px] lg:text-[48px] font-FKScreamerBold uppercase tracking-widest text-white mb-6 leading-tight">
              Ready to Accelerate Your <span className="text-primary block md:inline">Digital Growth?</span>
            </h2>
            
            <p className="text-white/80 text-base md:text-lg mb-10 leading-relaxed max-w-xl mx-auto">
              {post.call_to_action || "Stop struggling with low visibility. Partner with Leor Media to dominate search rankings, capture more leads, and scale your business effortlessly."}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contactus" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-orange-600 text-white rounded-full font-bold text-[14px] md:text-[16px] shadow-[0_0_20px_rgba(255,165,0,0.4)] transition-all flex items-center justify-center gap-2 group uppercase tracking-widest">
                Get a Free Audit
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold text-[14px] md:text-[16px] backdrop-blur-sm border border-white/10 transition-all text-center uppercase tracking-widest">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles for rendering HTML content beautifully */}
      <style dangerouslySetInnerHTML={{ __html: `
        .prose-custom {
          color: #334155;
          line-height: 1.8;
          font-size: 14px;
        }
        @media (min-width: 768px) {
          .prose-custom {
            font-size: 16px;
          }
        }
        .prose-custom p {
          margin-bottom: 1.5em;
          font-size: 14px;
        }
        @media (min-width: 768px) {
          .prose-custom p {
            font-size: 16px;
          }
        }
        .prose-custom h1 {
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
          margin-top: 1.5em;
          margin-bottom: 0.5em;
          line-height: 1.1;
        }
        @media (min-width: 768px) {
          .prose-custom h1 { font-size: 48px; }
        }
        @media (min-width: 1024px) {
          .prose-custom h1 { font-size: 52px; }
        }
        .prose-custom h2 {
          font-size: 18px;
          font-weight: 900;
          color: #0f172a;
          margin-top: 2em;
          margin-bottom: 0.75em;
          line-height: 1.2;
          letter-spacing: -0.025em;
        }
        @media (min-width: 768px) {
          .prose-custom h2 { font-size: 38px; }
        }
        @media (min-width: 1024px) {
          .prose-custom h2 { font-size: 48px; }
        }
        .prose-custom h3 {
          font-size: 18px;
          font-weight: 800;
          color: #1e293b;
          margin-top: 1.75em;
          margin-bottom: 0.75em;
          line-height: 1.3;
        }
        @media (min-width: 768px) {
          .prose-custom h3 { font-size: 26px; }
        }
        @media (min-width: 1024px) {
          .prose-custom h3 { font-size: 30px; }
        }
        .prose-custom h4 {
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
          margin-top: 1.5em;
          margin-bottom: 0.5em;
          line-height: 1.3;
        }
        @media (min-width: 768px) {
          .prose-custom h4 { font-size: 18px; }
        }
        @media (min-width: 1024px) {
          .prose-custom h4 { font-size: 22px; }
        }
        .prose-custom h5 {
          font-size: 16px;
          font-weight: 600;
          color: #334155;
          margin-top: 1.5em;
          margin-bottom: 0.5em;
        }
        @media (min-width: 768px) {
          .prose-custom h5 { font-size: 18px; }
        }
        .prose-custom ul {
          list-style-type: none;
          padding-left: 0;
          margin-bottom: 1.5em;
        }
        .prose-custom ul li {
          position: relative;
          padding-left: 1.75em;
          margin-bottom: 0.75em;
          font-size: 14px;
        }
        .prose-custom ul li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--color-primary, #ff8c00); /* Adjusted to primary-like color */
          font-weight: bold;
        }
        .prose-custom strong {
          color: #0f172a;
          font-weight: 800;
        }
        .prose-custom a {
          color: var(--color-primary, #ff8c00);
          text-decoration: underline;
          text-decoration-thickness: 2px;
          text-underline-offset: 4px;
          font-weight: 700;
          transition: opacity 0.2s;
        }
        .prose-custom a:hover {
          opacity: 0.8;
        }
        .prose-custom blockquote {
          border-left: 4px solid var(--color-primary, #ff8c00);
          padding-left: 1.5em;
          font-style: italic;
          color: #475569;
          background: #f8fafc;
          padding: 1.5em;
          border-radius: 0 1rem 1rem 0;
          margin: 2em 0;
        }
      `}} />
    </div>
  );
}

export default FullBlog;
