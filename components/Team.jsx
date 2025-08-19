import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { teamData } from "@/assets/assets.mjs";

const Team = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="team"
      className="w-full  min-h-svh max-w-6xl px-6 mx-auto  py-10 scroll-mt-20"
    >
      <h2
        className=" mt-15    text-2xl sm:text-3xl text-transparent bg-clip-text 
          bg-gradient-to-r from-45% from-primary   to-secondary to-55%"
      >
        The Team
      </h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-auto  gap-6 my-10"
      >
        {teamData.map(({ name, role, avatar, alt, background }, index) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            key={index}
            className="border border-gray-400 rounded-lg
          px-8 py-8 hover:shadow-theme 
          "
          >
            <Image
              src={avatar}
              width="full"
              height="full"
              alt={alt}
              className="w-fit  object-cover h-40 "
            />
            <h3 className="text-lg my-4 text-primary">{name}</h3>
            <p className="text-sm text-foreground/60 mb-2  leading-5">{role}</p>
            <p className="text-sm font-ovo  text-foreground  leading-5">
              {background}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Team;
