"use client";
import LanguageDropdown from "./buttons/LanguageDropdown";

import { assets } from "@/assets/assets";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SupportButton from "./buttons/SupportButton";

const Navbar = ({ dict }) => {
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[400px] h-[50px] -z-10 
    bg-gradient-to-br from-[#deda08] via-rose-300 to-secondary
    opacity-80 blur-xl mix-blend-normal transition-all duration-700 rounded-full"
      ></div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
          ${isScroll ? "bg-background/50   backdrop-blur-lg shadow-sm " : ""}`}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            alt="Ctrl-Studio logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul
          className={`hidden font-skranji text-lg md:flex items-center gap-6 lg:gap-8 
  rounded-xl px-12 py-3 duration-500  shadow-black/40 ${isScroll ? "" : "bg-gray-600/80"}`}
        >
          <li className="hover:text-primary duration-100">
            <a href="#top">{dict.nav.home}</a>
          </li>
          <li className="hover:text-primary duration-100">
            <a href="#about">{dict.nav.about}</a>
          </li>
          <li className="hover:text-primary duration-100">
            <a href="#lore">{dict.nav.lore}</a>
          </li>
          <li className="hover:text-primary duration-100">
            <a href="#vision">{dict.nav.vision}</a>
          </li>
          <li className="hover:text-primary duration-100">
            <a href="#team">{dict.nav.team}</a>
          </li>
          <li className="hover:text-primary duration-100">
            <a href="#contact">{dict.nav.contact}</a>
          </li>
          <LanguageDropdown />
        </ul>

        <div className="hidden lg:flex items-center gap-3  ml-4 ">
          <a href="#support">
            <SupportButton dict={dict} />
          </a>
        </div>

        {/* Open Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu} alt="Menu Open Button" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
        top-0 bottom-0 w-64 z-50 h-svh bg-secondary transition duration-500"
        >
          {/* Language Dropdown (Top Left Corner) */}
          <div className="absolute left-6 top-6">
            <LanguageDropdown />
          </div>
          {/* Close Mobile Menu Button */}
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close}
              alt="Menu Close Button"
              className="w-5  cursor-pointer"
            />
          </div>
          <li>
            <a onClick={closeMenu} href="#top">
              {dict.nav.home}
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#about">
              {dict.nav.about}
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#lore">
              {dict.nav.lore}
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#vision">
              {dict.nav.vision}
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#team">
              {dict.nav.team}
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#support">
              {dict.nav.support}
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#contact">
              {dict.nav.contact}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
