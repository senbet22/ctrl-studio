"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Vision = ({ dict }) => {
  return (
    <div
      className="relative group w-full  min-h-svh max-w-6xl px-6 mx-auto  py-15 scroll-mt-20"
      id="vision"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-secondary via-pink-400 to-cyan-300
                  opacity-10 blur-2xl rounded-3xl transition-all duration-500"
      ></div>
      <h2
        className="mt-15 px-6 text-2xl sm:text-3xl text-transparent bg-clip-text 
          bg-gradient-to-r from-45% from-primary to-secondary to-55%"
      >
        {dict.vision.title}
      </h2>
      {/* Mobile & Tablet: Image on top, description below */}
      <div className="flex flex-col justify-center items-center lg:hidden gap-6 my-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <Image
            className="w-fit h-96 object-cover rounded-lg shadow-xl transition-all duration-500 ease-in-out"
            src={assets.team_image}
            alt="Team"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[600px] bg-gradient-to-br from-background to-secondary p-6 sm:p-8 rounded-br-2xl rounded-tl-2xl shadow-2xl"
          style={{ marginTop: "-3%" }}
        >
          <p className="text-white text-base sm:text-lg leading-relaxed">
            {dict.vision.description}
          </p>
        </motion.div>
      </div>

      {/* Desktop: Overlapping layout */}
      <div className="hidden lg:flex relative items-center justify-center my-10">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 bg-gradient-to-br from-background to-secondary p-10 rounded-br-4xl rounded-tl-3xl shadow-2xl w-full max-w-md md:h-[500px] flex items-center"
          style={{ marginRight: "-3%" }}
        >
          <p className="text-foreground text-lg leading-relaxed">
            {dict.vision.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-0 flex-shrink-0"
        >
          <Image
            className="w-full max-w-2xl md:h-[500px] object-cover rounded-lg shadow-xl transition-all duration-500 ease-in-out"
            src={assets.team_image}
            alt="Team"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;
