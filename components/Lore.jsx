import React from "react";
import { EmblaCarousel } from "./carousel/EmblaCarousel";

const Lore = () => {
  return (
    <div
      id="lore"
      className="select-none scroll-mt-20 relative h-full w-full bg-[url('/night-cave.jpg')] bg-cover bg-center "
    >
      {/* Overlay */}
      <div className="absolute  inset-0 bg-gradient-to-b from-background/30 via-background to-background/90" />
      <div></div>
      {/* Content Wrapper */}
      <div className="relative max-w-6xl  mx-auto z-10 flex  flex-col items-start ">
        <h2
          className=" mt-15   px-6 text-2xl sm:text-3xl text-transparent bg-clip-text 
          bg-gradient-to-r from-45% from-primary   to-secondary to-55%"
        >
          Lore
        </h2>
        <EmblaCarousel />
      </div>
    </div>
  );
};

export default Lore;
