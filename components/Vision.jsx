"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useState, useCallback } from "react";

const Vision = ({ dict }) => {
  const [currentPage, setCurrentPage] = useState(0);

  // Each element in dict.vision.article is a separate page
  const pages = dict.vision.article || [];

  const scrollNext = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  }, [pages.length]);

  const scrollPrev = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  }, [pages.length]);

  return (
    <div
      id="vision"
      className="relative group w-full min-h-svh max-w-6xl px-6 mx-auto scroll-mt-30"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-pink-400 to-cyan-300 opacity-10 blur-2xl rounded-3xl transition-all duration-500" />

      {/* Title */}
      <h2
        className="mt-15 px-6 text-2xl sm:text-3xl text-transparent bg-clip-text 
        bg-gradient-to-r from-45% from-primary to-secondary to-55%"
      >
        {dict.vision.title}
      </h2>

      {/* Layout */}
      <div className="flex flex-col md:flex-row relative items-start justify-between my-10 gap-6 md:gap-6">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 w-full md:w-1/3 h-[40svh] md:h-[70svh] flex items-start justify-start sm:justify-center"
        >
          <Image
            className="max-h-full max-w-full w-auto h-auto object-contain rounded-lg shadow-xl"
            src={assets.team_image}
            alt="Team"
          />
        </motion.div>

        {/* Text / Pagination */}
        <div className="relative  flex flex-col justify-start h-[60svh]">
          {/* Animated page switch */}
          <div className="flex-1 overflow-y-auto pr-2 scroll-smooth">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-foreground text-base md:text-lg leading-relaxed">
                  {pages[currentPage]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Navigation Controls */}
          <div className="w-full flex flex-col items-center justify-center  pointer-events-none">
            {/* Page Dots */}
            <div className="flex gap-2 mb-2 pointer-events-auto">
              {pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? "bg-secondary w-6"
                      : "bg-foreground/30 hover:bg-foreground/50"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <div className="flex gap-3 pointer-events-auto">
              <button
                onClick={scrollNext}
                aria-label="Scroll to next section"
                className="bg-[#411D1C]/90 p-3 rounded-full cursor-pointer -rotate-90 
                           hover:bg-secondary/20 hover:scale-110 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="#609c2d"
                    fillRule="evenodd"
                    d="M4.293 7.793a1 1 0 0 1 1.414 0L12 14.086l6.293-6.293a1 1 0 1 1 1.414 1.414L13.414 15.5a2 2 0 0 1-2.828 0L4.293 9.207a1 1 0 0 1 0-1.414"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
