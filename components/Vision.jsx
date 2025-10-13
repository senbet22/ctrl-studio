import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import { teamData } from "@/assets/assets.mjs";
import TeamMemberModal from "./modals/TeamMemberModal";

const Vision = ({ theme }) => {
  return (
    <div
      className="w-full  min-h-svh max-w-6xl px-6 mx-auto  py-15 scroll-mt-20"
      id="vision"
    >
      {" "}
      <div className="flex flex-col justify-start items-start gap-6 my-10">
        <p className="">
          Ctrl-Studio, founded in 2024. A small team, driven by big goals.
        </p>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className=""
        >
          <Image
            className="w-full max-w-md sm:max-w-lg md:max-w-2xl object-cover rounded-lg  transition-all duration-500 ease-in-out"
            src={assets.team_image}
            alt="Team"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;
