import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets.mjs";

const About = () => {
  return (
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
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full px-6 gap-12">
          {/* Left Side*/}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl text-primary mb-4">
              Welcome to The shadow from Ringholt
            </h1>
            <p className="mb-6">
              Join Tyri on an epic adventure to uncover what lies in the shadows
              of Ringholt, where ancient secrets whisper through frost-covered
              pines and ethereal lights dance across starlit skies. As a young
              herder with a mysterious connection to the spirit world, he must
              navigate treacherous wilderness and face creatures born from
              forgotten legends.
            </p>
            {/* <button className="text-primary  font-semibold">
              Read More
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
