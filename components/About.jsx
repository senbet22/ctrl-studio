"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets.mjs";
import AboutModal from "./modals/AboutModal";

const About = ({ dict }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
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
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20" />

        {/* Content Wrapper */}
        <div className="relative py-10 z-10 h-full w-full flex items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full px-6">
            {/* Left Side*/}
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl text-primary mb-4">{dict.about.title}</h1>
              <p className="mb-6">{dict.about.intro}</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-primary font-semibold cursor-pointer hover:text-secondary"
              >
                {dict.about.readMore}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AboutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="The Shadow from Ringholt"
      >
        <div className="flex flex-col gap-6  max-w-none p-4 md:p-8 mb-25">
          {dict.about.modal}
          <div>
            <Image
              className="max-w-[300px] object-contain w-fit rounded-full"
              src={assets.månetun}
              alt="Tyri character"
            />
          </div>
          <p>{dict.about.modal2}</p>

          <p>{dict.about.modal3}</p>
        </div>
      </AboutModal>
    </>
  );
};

export default About;
