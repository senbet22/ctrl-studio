"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Support = ({ dict }) => {
  return (
    <div
      id="support"
      className="scroll-mt-20 min-h-svh w-full bg-background bg-cover bg-center flex justify-center"
    >
      <div className="mx-auto my-15">
        <div className="flex items-center justify-between w-full max-w-6xl mx-auto text-foreground px-4">
          {/* Left Image container */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-start"
          >
            <Image src={assets.bird_icon} width={40} alt="Bird icon" />
          </motion.div>

          {/* Title */}
          <h1
            className="text-2xl md:text-3xl text-transparent bg-clip-text 
            bg-gradient-to-r from-45% from-primary to-secondary to-55% text-center px-2"
          >
            {dict.support.title}
          </h1>

          {/* Right icon container */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-end"
          >
            <Image
              src={assets.bird_icon}
              width={40}
              alt="Bird icon"
              className="rotate-180"
            />
          </motion.div>
        </div>

        {/* Content below */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-10">
          <div className="relative group">
            <div
              className="absolute inset-0 bg-gradient-to-br from-secondary via-pink-400 to-yellow-300 
                  opacity-50 blur-2xl rounded-3xl group-hover:opacity-80 transition-all duration-500"
            ></div>
            <Image
              src={assets.art_2}
              alt="Game Artwork"
              className="relative max-w-[200px] md:max-w-[260px] rounded-2xl shadow-lg 
               group-hover:scale-105 transition-all duration-500"
            />
          </div>

          {/* List from dict.support.benefits */}
          <div className="mx-auto flex items-start justify-start w-full flex-col gap-4 text-lg">
            {dict.support.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <Image
                  src={assets.check_icon}
                  alt="Check icon"
                  width={24}
                  height={24}
                />
                <p className="text-foreground mx-2 text-base sm:text-lg">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-15 flex flex-col gap-6 my-2 px-2 mx-auto">
          <p className="text-primary font-ovo text-lg sm:text-xl ">
            {dict.support.discord}
          </p>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 hover:text-secondary transition-all ease-in-out"
          >
            Gastahav: Server
            <Image
              src={assets.discord_icon}
              className=""
              alt="Social Icon"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Support;
