import React, { useState, useEffect } from 'react';
import SEO from '../../components/SEO/SEO';
import { Link } from 'react-router-dom';
import { BlogCoverimage } from '../../assets/data/Imagedata';
import seoData from "../../assets/data/seo.json";
import axios from 'axios';
import { FaArrowRight } from "react-icons/fa";
const { title, description, keywords, canonical, ogImage } = seoData.blogs;

function BlogPage() {
  const [blogsData, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/blogs');
        // Filter out drafts if status exists, or just show all if we assume public is published
        setBlogsData(response.data.filter(blog => blog.status === 'published'));
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const limitContent = (content) => {
    if (!content) return '';
    const strippedContent = content.replace(/<[^>]*>/g, '');
    const words = strippedContent.split(' ');
    return words.slice(0, 20).join(' ') + '...';
  };

  const categories = ['All', ...new Set(blogsData.map(blog => blog.category).filter(Boolean))];

  const filteredBlogs = selectedCategory === 'All' 
    ? blogsData 
    : blogsData.filter(blog => blog.category === selectedCategory);

  // Pagination logic
  const blogsPerPage = 10;
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to page 1 when category changes
  };

  return (
    <div className="blogs-page">
      <SEO 
        title={title}
        description={description}
        keywords={keywords}
        image={ogImage}
        url={canonical}
      />

      <main>
        {/* Hero Section */}
        <section
          className="relative py-20 sm:py-40 overflow-hidden"
          style={{
            backgroundImage: `url(${BlogCoverimage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mt-10">
              <h1 className="text-[28px] md:text-5xl lg:text-[52px] fade-in-down font-normal text-white font-FKScreamerBold tracking-wider mb-6">
                BLOGS & RESEARCH
              </h1>
              <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                Research done for our project and Technologies we use for our community.
              </p>
            </div>
          </div>
        </section>

        {/* Categories / Filter Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-[14px] md:text-[14px]">
              FILTER BY TOPIC
            </span>
              <h2 className="font-FKScreamerBold text-[26px] md:text-[38px] lg:text-5xl text-gray-900 mt-4 mb-6">
                EXPLORE OUR INSIGHTS
              </h2>

            {!loading && categories.length > 1 && (
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                {categories.map(category => {
                  const count = category === 'All' ? blogsData.length : blogsData.filter(b => b.category === category).length;
                  return (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`flex items-center px-3 py-2 rounded-lg font-semibold transition-all shadow-sm ${
                        selectedCategory === category 
                          ? 'bg-primary border-primary text-white' 
                          : 'bg-white border text-[12px] border-gray-200 text-gray-800 hover:border-primary hover:text-primary'
                      }`}
                    >
                      {category} ({count})
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Blog Grid */}
        <section className="bg-white pb-24 pt-12 md:pt-24">
          <div className=" mx-auto px-6">
            {loading ? (
              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {currentBlogs.map(post => (
                  <Link
                    key={post.slug}
                    to={`/blogs/${post.slug}`}
                    className="group p-2 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col items-start relative overflow-hidden h-full"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] transform translate-x-8 -translate-y-8 group-hover:translate-x-4 -group-hover:translate-y-4 transition-transform duration-500"></div>

                    <div className="w-full h-48 rounded-2xl bg-gray-50 mb-6 overflow-hidden relative border border-gray-100/50">
                       {post.category && (
                        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur text-primary text-[11px] font-bold px-3 py-1 rounded shadow-sm z-10 uppercase tracking-widest">
                          {post.category}
                        </span>
                      )}
                      <img
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        src={post.feature_image}
                        alt={post.title}
                        loading="lazy"
                      />
                    </div>

                    <h4 className="text-lg md:text-xl lg:text-[22px] font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-6 flex-grow line-clamp-3">
                      {limitContent(post.content)}
                    </p>

                    <span
                      className="mt-auto inline-flex items-center text-[12px] font-bold text-gray-400 group-hover:text-primary transition-colors"
                    >
                      READ MORE <FaArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
                {filteredBlogs.length === 0 && !loading && (
                  <div className="col-span-full text-center py-10 text-gray-500 text-sm md:text-base">
                    No blogs found in this category.
                  </div>
                )}
              </div>
            )}

            {/* Pagination Controls */}
            {!loading && totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 gap-4">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-6 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 font-bold hover:text-primary hover:border-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Previous
                </button>
                <span className="text-gray-500 font-medium">
                  Page {currentPage} of {totalPages}
                </span>
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-6 py-2 rounded-lg bg-primary text-white font-bold hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </section>

       
      </main>
    </div>
  );
}

export default BlogPage;
