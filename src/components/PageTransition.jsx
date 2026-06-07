import React from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <>
      {/* Left Wedding Curtain */}
      <motion.div
        className="fixed top-0 left-0 w-[50.5vw] h-screen bg-[#fdfbf7] z-[9999] pointer-events-none border-r-[2px] border-yellow-500/30 shadow-[10px_0_30px_rgba(0,0,0,0.05)]"
        initial={{ x: "0%" }}
        animate={{ x: "-100%" }}
        exit={{ x: "0%" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      />
      
      {/* Right Wedding Curtain */}
      <motion.div
        className="fixed top-0 right-0 w-[50.5vw] h-screen bg-[#fdfbf7] z-[9999] pointer-events-none border-l-[2px] border-yellow-500/30 shadow-[-10px_0_30px_rgba(0,0,0,0.05)]"
        initial={{ x: "0%" }}
        animate={{ x: "100%" }}
        exit={{ x: "0%" }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Cinematic Dreamy Content Fade */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="page-transition-content"
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;
