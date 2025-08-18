import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className=" scroll-mt-20 relative h-screen w-full bg-[url('/viking-ship.jpg')] bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20" />

      {/* Content Wrapper */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <div className="flex  flex-col  md:flex-row items-center justify-between max-w-6xl w-full px-6 gap-12">
          {/* Left Side*/}
          <div className="w-full lg:w-1/2  ">
            <h1 className="text-3xl text-primary mb-4">
              Welcome to The shadow from Ringholt
            </h1>
            <p className="mb-6">
              Join Tyri on an epic adventure to uncover what lies in the shadows
              of Ringholt, where ancient secrets whisper through frost-covered
              pines and ethereal lights dance across starlit skies. As a young
              herder with a mysterious connection to the spirit world, she must
              navigate treacherous wilderness and face creatures born from
              forgotten legends. Guided by his loyal reindeer companion, Tyri
              discovers his destiny is intertwined with forces that could
              restore balance or plunge his homeland into darkness.
            </p>
            <button className="text-primary cursor-pointer font-semibold ">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
