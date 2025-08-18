import React from "react";

import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="md:mx-10 mx-4 sm:mx-[10%]">
        <div className="flex flex-col md:grid grid-cols-[3fr_1fr_1fr] gap-14 py-10 text-base text-foreground font-ovo">
          {/* Left section */}
          <div>
            <div>
              <Image
                className="mb-20 w-38 "
                src={assets.logo}
                alt="Ctrl-Studio logo"
              />
            </div>

            <p className="w-full md:w2/3 leading-6">
              Ctrl – Studio is a group of friends from Norway on a mission to
              create our dream game and share it with the world.
            </p>
          </div>
          {/* Center section */}
          <div>
            <p className="text-xl font-skranji font-medium mb-5">COMPANY</p>
            <ul className="flex text-lg flex-col gap-2">
              <li>
                <a href="#top">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#support">Support Us</a>
              </li>
            </ul>
          </div>
          {/* Right section */}
          <div>
            <p className="text-xl font-medium mb-5 font-skranji">
              GET IN TOUCH
            </p>
            <ul className="flex flex-col gap-2">
              <li>+47 930 56 667</li>
              <li>ctrlstudio.as@gmail.com</li>
            </ul>
          </div>
        </div>
        {/* Copyright Text */}
        <div>
          <hr className=" text-foreground" />
          <p className="text-foreground py-5 text-sm text-center">
            Copyright 2025 @ Ctrl Studio - All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
