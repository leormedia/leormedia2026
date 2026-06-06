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
      }, 3400); // Increased time to allow all text lines to animate
      
      return () => {
        clearTimeout(timer1);
      };
    } else {
      setPhase("exit");
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  // Split text into arrays of words and then letters for the stagger effect
  const text1 = "Crafting Events".split("");
  const text2 = "Digital Success Stories".split("");
  const text3 = "Since 2016".split("");

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
        {/* Crafting Events */}
        <div className="text-center overflow-hidden mb-0 sm:mb-1">
          <div className="flex uppercase flex-nowrap whitespace-nowrap justify-center font-playfair text-[2.8vw] sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 tracking-wide">
            {text1.map((char, i) => (
              <span 
                key={`t1-${i}`} 
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

        {/* Ampersand */}
        <div className="text-center overflow-hidden my-1 sm:my-2">
          <div className="flex flex-nowrap whitespace-nowrap justify-center font-playfair text-[6vw] sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary tracking-wide leading-none">
            <span 
              className="inline-block opacity-0 animate-slide-up-char drop-shadow-lg"
              style={{ 
                animationDelay: `${(text1.length * 35) + 300}ms`
              }}
            >
              &
            </span>
          </div>
        </div>

        {/* Digital Success Stories */}
        <div className="text-center overflow-hidden pt-0">
          <div className="flex flex-nowrap whitespace-nowrap justify-center font-playfair text-[4vw] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-wide">
            {text2.map((char, i) => (
              <span 
                key={`t2-${i}`} 
                className="inline-block opacity-0 animate-slide-up-char"
                style={{ 
                  animationDelay: `${(text1.length * 35) + 100 + (i * 45) + 400}ms`,
                  marginRight: char === ' ' ? '0.3em' : '0'
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </div>
        </div>

        {/* Since 2016 */}
        <div className="text-center overflow-hidden mt-3 sm:mt-4">
          <div className="flex flex-nowrap whitespace-nowrap justify-center text-gray-400 font-bold tracking-[0.3em] uppercase text-[10px] md:text-[12px] lg:text-[14px]">
            {text3.map((char, i) => (
              <span 
                key={`t3-${i}`} 
                className="inline-block opacity-0 animate-slide-up-char"
                style={{ 
                  animationDelay: `${(text1.length * 35) + 100 + (text2.length * 45) + (i * 35) + 600}ms`,
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
        <div className="relative flex flex-col items-center justify-center overflow-hidden py-4 px-8">
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
            className="w-[200px] h-[200px] drop-shadow-xl mx-auto"
          />
        </div>
      </div>
      
    </div>
  );
};

export default LogoLoader;
