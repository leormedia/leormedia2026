"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaShareAlt,
  FaGlobe,
  FaHeart,
  FaImages,
  FaCommentAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import LogoProfile from "../assets/LogoProfile.png";

export default function Home() {
  const [showConnect, setShowConnect] = useState(false);

  const links = [
    { label: "Leormedia.com", url: "https://www.leormedia.com", icon: <FaGlobe /> },
    { label: "Vivahamco.com ", url: "https://www.vivahamco.com", icon: <FaHeart /> },
    {
      label: "Reviews",
      url: "https://www.google.com/search?sca_esv=246d97976218a45f&sxsrf=ANbL-n6RiSq-8KEpvtyPOSfK_jXtu6xUfQ:1773216271884&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qObqM7PLJrr7NvDCJalAKXt_feGyrLkPwhQsVwApmbpPkSw3phkNM2aswELeHL9J6cGgUNV18Xc4vPQ-AWX93V9QL0GMlgJBEqVP3eC80QzGA_KLGBffRjTghvmBdkYQ3epapHI0Kj70wRxzlKwPQ19kAfMKV&q=Leor+Media+Event+Management+and+Advertising+company+in+AP+Reviews&sa=X&ved=2ahUKEwjakPuvsZeTAxWmTGwGHQ_4ElgQ0bkNegQILhAH&biw=1920&bih=945&dpr=1#lrd=0x3a3943260a034961:0xa55201e3106a886a,1,,,,",
      icon: <FaCommentAlt />,
    },
    {
      label: "Our Gallery",
      url: "https://www.leormedia.com/gallery",
      icon: <FaImages />,
    },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/leor_media/",
      color: "hover:text-pink-500",
    },
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/leormedia/",
      color: "hover:text-blue-600",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/leor-media/",
      color: "hover:text-blue-700",
    },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/919666643456",
      color: "hover:text-green-500",
    },
    {
      icon: <FaMapMarkerAlt />,
      url: "https://bit.ly/4aSvlPH",
      color: "hover:text-red-500",
    },
  ];

  const connectLinks = [
    {
      label: "WhatsApp",
      url: "https://wa.me/919666643456",
      icon: <FaWhatsapp />,
      color: "bg-[#25D366]",
    },
    {
      label: "Call Now",
      url: "tel:+919666643456",
      icon: <FaPhoneAlt />,
      color: "bg-[#007AFF]",
    },
    {
      label: "Email Us",
      url: "mailto:mail@leormedia.com",
      icon: <FaEnvelope />,
      color: "bg-[#EA4335]",
    },
  ];

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: "Leor Media Linktree",
        url: typeof window !== "undefined" ? window.location.href : "",
      });
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-start py-12 px-4 overflow-hidden bg-[#ffffff]">
      {/* Background visual elements - subtle light glow */}
      <div className="absolute top-[-5%] left-[-10%] w-[50%] h-[50%] bg-purple-100/40 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-5%] right-[-10%] w-[50%] h-[50%] bg-blue-100/40 blur-[100px] rounded-full"></div>

      {/* Share Button - refined with brand colors */}
      <button
        onClick={handleShare}
        className="absolute top-6 right-6 p-3 bg-yellow-400/90 backdrop-blur-md rounded-full text-gray-900 hover:bg-orange-500 hover:text-white transition-all border border-yellow-500 z-20 shadow-md hover:shadow-lg"
      >
        <FaShareAlt />
      </button>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[480px] flex flex-col items-center flex-1">
        {/* Profile Image with subtle drop shadow */}
        <div className="relative w-full max-w-[200px] drop-shadow-lg">
          <div className="relative w-full overflow-hidden">
            <Image
              src={LogoProfile}
              alt="Leor Media"
              width={200}
              height={200}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
        <p className="text-sm font-medium text-gray-700 mt-4 mb-8 uppercase">
          Events | Advertising | Marketing | Branding
        </p>
        {/* Social Link Icons - kept as is for brand recognition */}
        <div className="flex gap-6 mb-8 flex-wrap justify-center">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl text-gray-400 ${social.color} transition-all duration-300 hover:scale-125`}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Links Container */}
        <div className="w-full flex flex-col gap-4 mb-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-full py-4 px-6 bg-yellow-400 border border-yellow-500 rounded-2xl text-gray-900 font-semibold tracking-wide hover:bg-orange-500 hover:border-orange-600 hover:text-white hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-xl text-gray-900 group-hover:text-white transition-colors">
                  {link.icon}
                </span>
                {link.label}
              </span>
              {/* Shine effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </a>
          ))}

          {/* Connect with us Toggle */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setShowConnect(!showConnect)}
              className="group relative flex items-center justify-center w-full py-4 px-6 bg-yellow-400 border border-yellow-500 rounded-2xl text-gray-900 font-semibold tracking-wide hover:bg-orange-500 hover:border-orange-600 hover:text-white hover:scale-[1.02] transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-xl text-gray-900 group-hover:text-white transition-colors">
                  {showConnect ? <FaChevronUp /> : <FaChevronDown />}
                </span>
                Connect with us
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>

            {/* Collapsible Sub-buttons - kept original colors for clarity */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${showConnect ? "max-h-[300px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}
            >
              <div className="flex flex-col gap-3 px-4">
                {connectLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className={`flex items-center gap-4 py-3 px-6 rounded-xl text-white font-medium shadow-md transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg ${link.color}`}
                  >
                    <span className="text-xl">{link.icon}</span>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Branding/Footer */}
        <div className="flex flex-col items-center gap-2 opacity-40 mt-auto pt-8">
          <p className="text-gray-900 text-[10px] font-bold tracking-[0.2em] uppercase text-center">
            © 2026 Leor Media
          </p>
        </div>
      </div>
    </main>
  );
}
