"use client";
import LanguageDropdown from "./buttons/LanguageDropdown";
import Link from "next/link";
import { assets } from "@/assets/assets";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SupportButton from "./buttons/SupportButton";
import { useRouter, usePathname } from "next/navigation";

const Navbar = ({ dict }) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1] || "en";
  const [activeHash, setActiveHash] = useState("");
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  useEffect(() => {
    setActiveHash(window.location.hash.substring(1));
    const handleHashChange = () => {
      setActiveHash(window.location.hash.substring(1));
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  const handleNavClick = (section) => {
    const isHomePage =
      pathname === `/${currentLang}` ||
      pathname === "/" ||
      (currentLang === "en" && pathname === "");

    if (!isHomePage) {
      router.push(`/${currentLang}/#${section}`);
    } else {
      window.history.pushState(null, "", `#${section}`);
      setActiveHash(section);
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (section, path = null) => {
    const isHomePage =
      pathname === `/${currentLang}` ||
      pathname === "/" ||
      (currentLang === "en" && pathname === "");

    if (path) {
      return pathname === `/${currentLang}${path}`;
    }
    return isHomePage && activeHash === section;
  };

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-background/50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <a
          onClick={() => handleNavClick("top")}
          className={`cursor-pointer`}
        >
          <Image
            src={assets.logo}
            alt="Ctrl-Studio logo"
            className="w-16 md:w-24 cursor-pointer mr-14"
          />
        </a>
        <ul
          className={`hidden font-skranji text-lg md:flex items-center gap-6 lg:gap-8 
          rounded-xl px-12 py-3 duration-500 shadow-black/40 ${
            isScroll ? "" : "bg-gray-600/80"
          }`}
        >
          <li
            onClick={() => handleNavClick("about")}
            className={`hover:text-primary duration-100 cursor-pointer ${
              isActive("about") ? "text-primary border-b-2 border-primary" : ""
            }`}
          >
            {dict.nav.about}
          </li>
          <li
            onClick={() => handleNavClick("lore")}
            className={`hover:text-primary duration-100 cursor-pointer ${
              isActive("lore") ? "text-primary border-b-2 border-primary" : ""
            }`}
          >
            {dict.nav.lore}
          </li>
          <li className="hover:text-primary duration-100">
            <Link
              href={`/${currentLang}/vision`}
              className={
                isActive(null, "/vision")
                  ? "text-primary border-b-2 border-primary"
                  : ""
              }
            >
              {dict.nav.vision}
            </Link>
          </li>
          <li
            onClick={() => handleNavClick("team")}
            className={`hover:text-primary duration-100 cursor-pointer ${
              isActive("team") ? "text-primary border-b-2 border-primary" : ""
            }`}
          >
            {dict.nav.team}
          </li>

          <li className="hover:text-primary duration-100">
            <Link
              href={`/${currentLang}/contact`}
              className={
                isActive(null, "/contact")
                  ? "text-primary border-b-2 border-primary"
                  : ""
              }
            >
              {dict.nav.contact}
            </Link>
          </li>

          <LanguageDropdown />
        </ul>

        <div
          className="hidden lg:flex items-center gap-3 ml-4"
          onClick={() => handleNavClick("support")}
        >
          <a className={`cursor-pointer ${isActive("support")}`}>
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
              className="w-5 cursor-pointer"
            />
          </div>
          <li
            onClick={() => {
              closeMenu();
              handleNavClick("about");
            }}
          >
            <a className="cursor-pointer">{dict.nav.about}</a>
          </li>
          <li
            onClick={() => {
              closeMenu();
              handleNavClick("lore");
            }}
          >
            <a className="cursor-pointer">{dict.nav.lore}</a>
          </li>
          <li onClick={closeMenu}>
            <Link href="/vision">{dict.nav.vision}</Link>
          </li>
          <li
            onClick={() => {
              closeMenu();
              handleNavClick("team");
            }}
          >
            <a className="cursor-pointer">{dict.nav.team}</a>
          </li>
          <li onClick={closeMenu}>
            <Link href="/contact">{dict.nav.contact}</Link>
          </li>
          <li
            onClick={() => {
              closeMenu();
              handleNavClick("support");
            }}
          >
            <a className="cursor-pointer">{dict.nav.support}</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
