import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FcHome,
  FcMenu,
  FcServices,
  FcContacts,
  FcBusinessContact,
  FcStatistics,
  FcGlobe,
} from "react-icons/fc";
import { IoMdLogOut } from "react-icons/io";
import { useAuth } from "../../../hooks/AuthContext";

const AdminNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  // Define nav links
  const navLinks = [
    {
      name: "Dashboard",
      path: "/auth/dashboard",
      icon: <FcHome className="text-[18px]" />,
    },
    {
      name: "Manage Blogs",
      path: "/auth/dashboard/blogs",
      icon: <FcServices className="text-[18px]" />,
    },
    {
      name: "Google Analytics",
      path: "/auth/google-analytics",
      icon: <FcStatistics className="text-[18px]" />,
    },
    {
      name: "Contact Forms",
      path: "/auth/contactus",
      icon: <FcContacts className="text-[18px]" />,
    },
    {
      name: "Leads Manager",
      path: "/auth/leads",
      icon: <FcBusinessContact className="text-[18px]" />,
    },
    {
      name: "SEO Manager",
      path: "/auth/seo",
      icon: <FcGlobe className="text-[18px]" />,
    },
    {
      name: "Go to Website",
      path: "/",
      icon: <FcGlobe className="text-[18px]" />,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div
        ref={sidebarRef}
        className={`fixed top-0 z-50 left-0 pt-14 h-full bg-white border-r border-gray-200 transition-all duration-300 ease-in-out md:translate-x-0 md:w-64 ${
          isSidebarOpen ? "translate-x-0 w-64" : "-translate-x-full w-0 md:translate-x-0 md:w-64"
        }`}
      >
        <div className={`flex flex-col overflow-y-auto h-[calc(100vh-120px)] px-3 py-4 ${isSidebarOpen ? "block" : "hidden md:block"}`}>
          <div className="mb-4">
            <div className="text-[12px] font-semibold text-gray-500 uppercase px-3 py-2 tracking-wider">
              Admin Menu
            </div>
            <div className="space-y-1">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  onClick={() => { if (window.innerWidth < 768) closeSidebar(); }}
                  className={`flex items-center p-3 rounded-lg transition-all duration-200 group ${
                    location.pathname === link.path
                      ? "bg-black text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-100 hover:text-black"
                  }`}
                >
                  <div className="mr-3">{link.icon}</div>
                  <span className="font-medium text-[14px]">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={`absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white ${isSidebarOpen ? "block" : "hidden md:block"}`}>
          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-full p-4 text-gray-700 hover:bg-gray-100 hover:text-black rounded-lg transition-all duration-200 group"
          >
            <span className="font-medium text-[14px]">Logout</span>
            <IoMdLogOut className="text-[20px] ml-3" />
          </button>
        </div>
      </div>

      <div className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg h-14">
        <div className="flex items-center justify-between h-full px-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleSidebar}
              className="text-white p-2 hover:bg-gray-800 rounded-lg transition duration-200 md:hidden"
            >
              {isSidebarOpen ? "X" : <FcMenu className="text-[20px]" />}
            </button>
            <Link to="/auth/dashboard" className="flex items-center text-white font-bold text-lg">
              Leor Media Admin
            </Link>
          </div>
          <div className="flex items-center space-x-1">
            <div className="text-[12px] sm:text-[14px] font-semibold text-white">
              {user?.identifier || "Admin"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminNavbar;
