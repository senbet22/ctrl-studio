import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { assets, LoreData } from "@/assets/assets.mjs";
import Fade from "embla-carousel-fade";
import { motion } from "motion/react";
export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Fade({ duration: 2 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla h-full w-full ">
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {LoreData.map(({ character, avatar, quote, story }, index) => (
            <div
              key={index}
              className="embla__slide flex flex-col md:flex-row items-start justify-between max-w-6xl w-full min-h-[700px] px-6 gap-6 md:gap-12 py-8"
            >
              {/* Image Container - Constrained height */}
              <motion.div
                initial={{ x: 100, y: -200 }}
                whileInView={{ x: 0, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 w-full md:w-1/3 h-[40svh] md:h-[70svh] flex items-center justify-center"
              >
                <Image
                  src={avatar}
                  alt="In-game character"
                  className="max-h-full max-w-full w-auto h-auto object-contain"
                />
              </motion.div>

              {/* Content Container */}
              <div className="flex-1 flex flex-col justify-start max-h-full overflow-y-auto">
                {/* Navigation Buttons and Character Name */}
                <div className="flex  justify-between">
                  {/* Character Name */}
                  <h1 className="text-2xl md:text-3xl text-primary mb-4">
                    {character}
                  </h1>
                  <div className="flex gap-x-4 md:gap-x-6 justify-end">
                    <button
                      className="embla__prev bg-[#411D1C] py-2 px-4 cursor-pointer hover:bg-secondary/5 transition-colors rounded"
                      onClick={scrollPrev}
                    >
                      <Image
                        src={assets.arrow_btn}
                        alt="prev button"
                        className="w-4 h-4 md:w-6 md:h-6"
                      />
                    </button>
                    <button
                      className="embla__next bg-[#411D1C] py-2 px-4 cursor-pointer hover:bg-secondary/5 transition-colors rounded"
                      onClick={scrollNext}
                    >
                      <Image
                        src={assets.arrow_btn}
                        className="rotate-180 w-4 h-4 md:w-6 md:h-6"
                        alt="next button"
                      />
                    </button>
                  </div>
                </div>
                <p className="text-foreground/70 my-4">{quote}</p>
                <p className="mb-6 text-sm md:text-base leading-relaxed">
                  {story}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
