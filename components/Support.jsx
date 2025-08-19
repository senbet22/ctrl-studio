import { assets, stayUpdatedData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import SubscribeInput from "./SubscribeInput";
import { motion } from "motion/react";

const Support = () => {
  return (
    <div
      id="support"
      className="scroll-mt-20 min-h-screen w-full bg-background bg-cover bg-center flex justify-center"
    >
      <div className="mx-auto my-15">
        <div className="flex items-center  justify-between w-full max-w-6xl mx-auto text-foreground px-4">
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
            className="text-2xl  md:text-3xl text-transparent bg-clip-text 
            bg-gradient-to-r from-45% from-primary to-secondary to-55% text-center"
          >
            Stay Updated
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
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10">
          <div className="">
            <Image
              src={assets.art_2}
              alt="Game Artwork"
              className="max-w-[200px] md:max-w-[260px]"
            />
          </div>

          {/* List from stayUpdatedData */}
          <div className="mt-auto mx-auto  flex w-full flex-col gap-4 text-lg">
            <h2 className="mb-5 ">Join our mailing list and get:</h2>
            {stayUpdatedData.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Image
                  src={item.check_icon}
                  alt="Check icon"
                  width={24}
                  height={24}
                />
                <p className="text-foreground mx-2 text-base sm:text-lg">
                  {item.title}
                </p>
              </div>
            ))}
            {/* Social Icons */}
            <div className="flex   gap-8 mt-5">
              <div className="cursor-pointer hover:bg-accent-dark p-2 rounded-full">
                <Image
                  src={assets.discord_icon}
                  alt="Social Icon"
                  width={30}
                  height={30}
                />
              </div>
              <div className="cursor-pointer hover:bg-accent-dark p-2 rounded-full">
                <Image
                  src={assets.insta_icon}
                  alt="Social Icon"
                  width={30}
                  height={30}
                />
              </div>
              <div className="cursor-pointer hover:bg-accent-dark p-2 rounded-full">
                <Image
                  src={assets.youtube_icon}
                  alt="Social Icon"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-15">
          <p className="text-primary font-ovo text-lg my-2 mx-auto">
            Join Our Mailing List
          </p>
          <SubscribeInput />
        </div>
      </div>
    </div>
  );
};

export default Support;
