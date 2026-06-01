import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { FiEdit2, FiTrash2, FiPlus, FiX } from 'react-icons/fi';

const BlogsAdmin = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentBlog, setCurrentBlog] = useState({
        title: '', slug: '', feature_image: '', content: '', date: '', category: '', priority: 0, status: 'published', target_keywords: ''
    });

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('/api/blogs');
            setBlogs(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Failed to fetch blogs", error);
            setLoading(false);
        }
    };

    const handleEdit = (blog) => {
        let keywords = blog.target_keywords;
        if (typeof keywords === 'string') {
            try {
                const parsed = JSON.parse(keywords);
                if (Array.isArray(parsed)) keywords = parsed;
            } catch (e) {}
        }
        
        setCurrentBlog({
            ...blog,
            target_keywords: Array.isArray(keywords) ? keywords.join(', ') : (keywords || '')
        });
        setIsEditing(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
            try {
                await axios.delete(`/api/blogs/${id}`);
                fetchBlogs();
            } catch (error) {
                console.error("Failed to delete blog", error);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...currentBlog,
            target_keywords: currentBlog.target_keywords 
                ? currentBlog.target_keywords
                    .replace(/[\[\]"]/g, '')
                    .split(',')
                    .map(k => k.trim())
                    .filter(k => k)
                : []
        };
        try {
            if (currentBlog.id) {
                await axios.put(`/api/blogs/${currentBlog.id}`, payload);
            } else {
                await axios.post('/api/blogs', payload);
            }
            setIsEditing(false);
            fetchBlogs();
        } catch (error) {
            console.error("Failed to save blog", error);
        }
    };

    return (
        <div className="p-6 max-w-7xl mx-auto">
            <Helmet>
                <title>Manage Blogs | Admin</title>
            </Helmet>

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Manage Blogs</h1>
                {!isEditing && (
                    <button 
                        onClick={() => {
                            setCurrentBlog({ title: '', slug: '', feature_image: '', content: '', date: new Date().toISOString().split('T')[0], category: '', priority: 0, status: 'published', target_keywords: '' });
                            setIsEditing(true);
                        }}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition-colors"
                    >
                        <FiPlus /> Create New Blog
                    </button>
                )}
            </div>

            {isEditing ? (
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-800">{currentBlog.id ? 'Edit Blog' : 'Create New Blog'}</h2>
                        <button onClick={() => setIsEditing(false)} className="text-gray-500 hover:text-gray-800"><FiX size={24} /></button>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                <input type="text" required value={currentBlog.title} onChange={e => setCurrentBlog({...currentBlog, title: e.target.value})} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL friendly)</label>
                                <input type="text" required value={currentBlog.slug} onChange={e => setCurrentBlog({...currentBlog, slug: e.target.value})} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Feature Image URL</label>
                                <input type="text" value={currentBlog.feature_image} onChange={e => setCurrentBlog({...currentBlog, feature_image: e.target.value})} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                <input type="date" value={currentBlog.date} onChange={e => setCurrentBlog({...currentBlog, date: e.target.value})} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">HTML Content</label>
                            <textarea 
                                required 
                                rows="15" 
                                value={currentBlog.content} 
                                onChange={e => setCurrentBlog({...currentBlog, content: e.target.value})} 
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none font-mono text-sm"
                                placeholder="<h1>Title</h1><p>Content goes here...</p>"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Keywords (comma separated)</label>
                                <input type="text" value={currentBlog.target_keywords} onChange={e => setCurrentBlog({...currentBlog, target_keywords: e.target.value})} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                <input type="text" value={currentBlog.category || ''} onChange={e => setCurrentBlog({...currentBlog, category: e.target.value})} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                                <input type="number" value={currentBlog.priority} onChange={e => setCurrentBlog({...currentBlog, priority: parseInt(e.target.value)})} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                <select value={currentBlog.status} onChange={e => setCurrentBlog({...currentBlog, status: e.target.value})} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none">
                                    <option value="published">Published</option>
                                    <option value="draft">Draft</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-end gap-4">
                            <button type="button" onClick={() => setIsEditing(false)} className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">Cancel</button>
                            <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">Save Blog</button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    {loading ? (
                        <div className="p-10 text-center text-gray-500">Loading blogs...</div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 text-gray-700 text-sm">
                                        <th className="p-4 border-b font-medium">Title</th>
                                        <th className="p-4 border-b font-medium">Category</th>
                                        <th className="p-4 border-b font-medium">Date</th>
                                        <th className="p-4 border-b font-medium">Status</th>
                                        <th className="p-4 border-b font-medium text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {blogs.map(blog => (
                                        <tr key={blog.id} className="border-b hover:bg-gray-50">
                                            <td className="p-4 text-gray-800">
                                                <div className="font-medium">{blog.title}</div>
                                                <div className="text-xs text-gray-500 truncate max-w-xs">{blog.slug}</div>
                                            </td>
                                            <td className="p-4 text-gray-600 text-sm">
                                                {blog.category || '-'}
                                            </td>
                                            <td className="p-4 text-gray-600 text-sm">
                                                {blog.date ? new Date(blog.date).toLocaleDateString() : '-'}
                                            </td>
                                            <td className="p-4">
                                                <span className={`px-2 py-1 text-xs rounded-full ${blog.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                    {blog.status}
                                                </span>
                                            </td>
                                            <td className="p-4 text-right">
                                                <button onClick={() => handleEdit(blog)} className="text-blue-600 hover:text-blue-800 p-2"><FiEdit2 /></button>
                                                <button onClick={() => handleDelete(blog.id)} className="text-red-600 hover:text-red-800 p-2"><FiTrash2 /></button>
                                            </td>
                                        </tr>
                                    ))}
                                    {blogs.length === 0 && (
                                        <tr>
                                            <td colSpan="5" className="p-10 text-center text-gray-500">No blogs found.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default BlogsAdmin;
