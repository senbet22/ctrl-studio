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
          <div className="flex text-sm py-4">
            Made with
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 64 64"
              className="text-secondary mx-1"
            >
              <path
                fill="currentColor"
                d="M17.718 7h-.002c-6.814 0-12.18 3.957-14.723 10.855c-5.788 15.71 15.227 29.479 24.2 35.357c1.445.946 3.082 2.019 3.404 2.354L31.851 57l1.397-1.292c.232-.204 1.305-.891 2.342-1.555c8.605-5.508 31.459-20.141 25.402-36.318c-2.566-6.857-7.941-10.79-14.742-10.79c-5.744 0-11.426 2.763-14.313 6.554C28.955 9.75 23.345 7 17.718 7"
              ></path>
            </svg>
            by Senbet.G
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
