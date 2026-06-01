import React, { useState, useEffect } from "react";
import logoLoaderSvg from "../assets/LeormediaLogo.svg";

const LogoLoader = ({ isLoading }) => {
  const [shouldRender, setShouldRender] = useState(true);
  const [phase, setPhase] = useState("text"); // 'text', 'logo', 'exit'

  const handleTransitionEnd = () => {
    if (!isLoading && phase === "exit") {
      setShouldRender(false);
    }
  };

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true);
      setPhase("text");
      
      // Sequence timing
      const timer1 = setTimeout(() => {
        setPhase("logo");
      }, 2400); // After text animation finishes (2.4s)
      
      return () => {
        clearTimeout(timer1);
      };
    } else {
      setPhase("exit");
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  // Split text into arrays of words and then letters for the stagger effect
  const text1 = "Crafting Extraordinary Events &".split("");
  const text2 = "Digital Success Stories".split("");

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-[9999] bg-[#fdfdfd] transition-opacity duration-1000 ease-in-out ${
        phase === "exit" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      onTransitionEnd={phase === "exit" ? handleTransitionEnd : undefined}
    >
      {/* Phase 1: Text */}
      <div 
        className={`absolute inset-0 flex flex-col justify-center items-center px-4 transition-all duration-700 ease-in-out ${
          phase === "text" ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
        }`}
      >
        <div className="text-center overflow-hidden mb-1 sm:mb-3">
          <div className="flex uppercase flex-nowrap whitespace-nowrap justify-center font-playfair text-[3.2vw] sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 tracking-wide">
            {text1.map((char, i) => (
              <span 
                key={i} 
                className="inline-block opacity-0 animate-slide-up-char"
                style={{ 
                  animationDelay: `${i * 35 + 200}ms`,
                  marginRight: char === ' ' ? '0.3em' : '0'
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
        </div>
        <div className="text-center overflow-hidden pt-1">
          <div className="flex flex-nowrap whitespace-nowrap justify-center font-playfair text-[7vw] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-wide">
            {text2.map((char, i) => (
              <span 
                key={i} 
                className="inline-block opacity-0 animate-slide-up-char"
                style={{ 
                  animationDelay: `${(text1.length * 35) + (i * 45) + 300}ms`,
                  marginRight: char === ' ' ? '0.3em' : '0'
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Phase 2: Logo */}
      <div 
        className={`absolute inset-0 flex justify-center items-center transition-all duration-1000 ease-out ${
          phase === "logo" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="relative w-48 sm:w-64 md:w-80 overflow-hidden py-4">
          {/* A reveal wipe effect for the logo */}
          <div 
            className="absolute inset-0 bg-[#fdfdfd] z-10 origin-right"
            style={{ 
              animation: phase === "logo" ? "wipeRight 1.2s cubic-bezier(0.77, 0, 0.175, 1) 0.2s forwards" : "none"
            }}
          ></div>
          <img
            src={logoLoaderSvg}
            alt="Leor Media Logo"
            className="w-[200px] h-[200px] drop-shadow-xl"
          />
        </div>
      </div>
      
    </div>
  );
};

export default LogoLoader;
