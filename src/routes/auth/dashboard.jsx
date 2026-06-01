import React from "react";
import { Helmet } from "react-helmet-async";
import { useAuth } from "../../hooks/AuthContext";
import { Link } from "react-router-dom";
import { FcServices, FcStatistics, FcContacts, FcBusinessContact } from "react-icons/fc";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Helmet>
        <title>Dashboard | Admin Dashboard</title>
      </Helmet>

      <div className="mb-8">
        <h1 className="font-bold text-gray-800">Welcome back, {user?.identifier || 'Admin'}</h1>
        <p className="text-gray-600 mt-2">Here is what's happening with your platform today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link to="/auth/dashboard/blogs" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <FcServices className="text-3xl" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Manage Blogs</h3>
            <p className="text-gray-500">Create & edit content</p>
          </div>
        </Link>

        <Link to="/auth/google-analytics" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <FcStatistics className="text-3xl" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Analytics</h3>
            <p className="text-gray-500">View traffic data</p>
          </div>
        </Link>

        <Link to="/auth/contactus" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <FcContacts className="text-3xl" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Contact Forms</h3>
            <p className="text-gray-500">View submissions</p>
          </div>
        </Link>

        <Link to="/auth/leads" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <FcBusinessContact className="text-3xl" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800">Leads Manager</h3>
            <p className="text-gray-500">Track inquiries</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
