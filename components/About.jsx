"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets.mjs";
import AboutModal from "./modals/AboutModal";

const About = ({ dict }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="about"
        className="scroll-mt-20 relative h-svh w-full overflow-hidden"
      >
        {/* Background Image */}
        <Image
          src={assets.viking_ship}
          alt="Viking Ship background"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0  bg-gradient-to-r from-background via-background/95 to-background/60" />

        {/* Content Wrapper */}
        <div className="relative py-10 z-10 h-full w-full flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full px-6">
            {/* Left Side*/}
            <div className="w-full lg:w-1/2">
              <h1 className="text-2xl md:text-3xl text-primary mb-4">
                {dict.about.title}
              </h1>
              {dict.about.introSections.map((section, index) => (
                <p
                  key={index}
                  className="mb-6 text-base text-foreground/80 md:text-lg"
                >
                  {section}
                </p>
              ))}

              <button
                onClick={() => setIsModalOpen(true)}
                className="flex text-primary  border-2 px-2 border-primary/70 hover:border-primary hover:text-secondary font-semibold cursor-pointer transition-colors duration-300 group"
              >
                {dict.about.readMore}
                <svg
                  className="mt-1 mx-1 transition-colors duration-300 fill-[#f4a0a0] group-hover:fill-[#609c2d]"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 7.793a1 1 0 0 1 1.414 0L12 14.086l6.293-6.293a1 1 0 1 1 1.414 1.414L13.414 15.5a2 2 0 0 1-2.828 0L4.293 9.207a1 1 0 0 1 0-1.414"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AboutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={dict.about.title}
      >
        <div className="flex flex-col text-foreground/90 gap-8  max-w-none p-4 md:p-8 mb-25">
          {dict.about.introSections.map((section, index) => (
            <p key={index} className="">
              {section}
            </p>
          ))}
          <div>
            <Image
              className="max-w-[300px] object-contain w-fit rounded-full"
              src={assets.månetun}
              alt="Tyri character"
            />
          </div>
          {dict.about.modal}
          <p className="text-xl text-secondary md:text-2xl text-center mt-6 mb-2">
            {dict.about.verdenTitle}
          </p>
          {dict.about.verden}
          <div>
            <Image
              className="max-w-[300px] object-contain w-fit rounded-full"
              src={assets.vikmark}
              alt="Tyri character"
            />
          </div>
        </div>
      </AboutModal>
    </>
  );
};

export default About;
