import React, { useState, useEffect } from "react";
import axios from "axios";

const SeoAdmin = () => {
  const [seoData, setSeoData] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedPage, setSelectedPage] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    keywords: "",
    canonical: "",
    ogImage: ""
  });
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchSeoData();
  }, []);

  const fetchSeoData = async () => {
    try {
      const response = await axios.get("/api/seo");
      setSeoData(response.data);
      if (Object.keys(response.data).length > 0) {
        const firstKey = Object.keys(response.data)[0];
        setSelectedPage(firstKey);
        setFormData(response.data[firstKey]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching SEO data:", error);
      setLoading(false);
    }
  };

  const handlePageSelect = (page) => {
    setSelectedPage(page);
    setFormData(seoData[page] || {
      title: "",
      description: "",
      keywords: "",
      canonical: "",
      ogImage: ""
    });
    setMessage("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/seo/${selectedPage}`, formData);
      const updatedData = { ...seoData, [selectedPage]: formData };
      setSeoData(updatedData);
      setMessage("SEO data updated successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Error updating SEO data:", error);
      setMessage("Failed to update SEO data.");
    }
  };

  if (loading) {
    return <div className="p-8 text-center">Loading SEO Data...</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">SEO Manager</h2>
      
      {message && (
        <div className={`p-4 mb-6 rounded ${message.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
          {message}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar for pages */}
        <div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md border border-gray-100 flex flex-col">
          <h3 className="font-semibold text-lg mb-2 border-b pb-2">Pages</h3>
          <input
            type="text"
            placeholder="Search pages (e.g. home)..."
            className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="overflow-y-auto h-[600px] pr-2 space-y-1 custom-scrollbar">
            {Object.keys(seoData)
              .filter(page => page.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((page) => (
              <button
                key={page}
                onClick={() => handlePageSelect(page)}
                className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                  selectedPage === page
                    ? "bg-black text-white font-medium shadow-sm"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1).replace(/-/g, ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Form for editing */}
        <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h3 className="font-semibold text-xl mb-6">Edit SEO for: <span className="text-blue-600">{selectedPage}</span></h3>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title || ""}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Meta Title"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description || ""}
                onChange={handleInputChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Meta Description"
              ></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Keywords</label>
              <textarea
                name="keywords"
                value={formData.keywords || ""}
                onChange={handleInputChange}
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Comma separated keywords"
              ></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Canonical URL</label>
              <input
                type="text"
                name="canonical"
                value={formData.canonical || ""}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="https://..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">OG Image URL</label>
              <input
                type="text"
                name="ogImage"
                value={formData.ogImage || ""}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="https://..."
              />
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors w-full sm:w-auto"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SeoAdmin;
