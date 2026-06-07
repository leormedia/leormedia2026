import React from 'react';
import { Link } from 'react-router-dom';
import LogoLoader from '../../assets/LogoFooter.svg';
import { FaArrowLeft, FaHome } from 'react-icons/fa';

const Error404 = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Decorative Background Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl w-full flex flex-col items-center text-center">
        
        {/* Faint Logo Integration in Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] opacity-[0.03] pointer-events-none select-none">
           <img src={LogoLoader} alt="Logo Background" className="w-[250px] md:w-[450px]" />
        </div>

        {/* Animated 404 Typography */}
        <h1 className="text-[140px] md:text-[220px] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 select-none drop-shadow-2xl font-FKScreamerBold tracking-wider">
          404
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 md:mt-8 tracking-tight">
          Page Not Found
        </h2>
        
        <p className="mt-6 text-gray-400 text-base md:text-xl max-w-lg mx-auto leading-relaxed">
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full sm:w-auto">
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex justify-center items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
          
          <Link 
            to="/" 
            className="w-full sm:w-auto flex justify-center items-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(255,100,0,0.3)] transition-all duration-300 group"
          >
            <FaHome className="group-hover:scale-110 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Helpful Links Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 w-full max-w-2xl flex flex-wrap items-center justify-center gap-6 md:gap-8 text-xs md:text-sm text-gray-500 font-medium tracking-widest uppercase">
          <Link to="/aboutus" className="hover:text-primary transition-colors duration-300">About Us</Link>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-gray-700"></span>
          <Link to="/services" className="hover:text-primary transition-colors duration-300">Services</Link>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-gray-700"></span>
          <Link to="/blogs" className="hover:text-primary transition-colors duration-300">Blog</Link>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-gray-700"></span>
          <Link to="/contactus" className="hover:text-primary transition-colors duration-300">Contact</Link>
        </div>

      </div>
    </div>
  );
};

export default Error404;
