import React from "react";
import Image from "next/image";
import { EmblaCarousel } from "./carousel/EmblaCarousel";
import { assets } from "@/assets/assets.mjs";

const Lore = ({ dict }) => {
  return (
    <div
      id="lore"
      className="select-none scroll-mt-20 relative h-full w-full overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src={assets.night_cave}
        alt="inside inside a cave"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 from-10% via-background via-30% to-background/90 to-97%" />

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto z-10 flex flex-col items-start">
        <h2
          className="mt-15 px-6 text-2xl sm:text-3xl text-transparent bg-clip-text 
          bg-gradient-to-r from-45% from-primary to-secondary to-55%"
        >
          {dict.lore.title}
        </h2>
        <EmblaCarousel dict={dict} />
      </div>
    </div>
  );
};

export default Lore;
