"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const Footer = ({ dict }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (section) => {
    if (pathname !== "/") {
      // Navigate to homepage first, then scroll
      router.push(`/#${section}`);
    } else {
      // Already on homepage, just scroll
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-900">
      <div className="md:mx-10 mx-4 sm:mx-[10%]">
        <div className="flex flex-col md:grid grid-cols-[3fr_1fr_1fr] gap-14 py-10 text-base text-foreground font-ovo">
          {/* Left section */}
          <div>
            <div>
              <Image
                className="mb-20 w-24 md:w-30"
                src={assets.logo}
                alt="Ctrl-Studio logo"
              />
            </div>
            <p className="w-full md:w-2/3 leading-6">
              {dict.footer.description}
            </p>
          </div>

          {/* Center section */}
          <div>
            <p className="text-xl font-skranji font-medium mb-5">
              {dict.footer.explore}
            </p>
            <ul className="flex text-lg flex-col gap-2">
              <li>
                <a
                  onClick={() => handleNavClick("top")}
                  className="hover:text-secondary cursor-pointer"
                >
                  {dict.footer.home}
                </a>
              </li>
              <li onClick={() => handleNavClick("about")}>
                <a className="hover:text-secondary cursor-pointer">
                  {dict.footer.about}
                </a>
              </li>
              <li onClick={() => handleNavClick("team")}>
                <a className="hover:text-secondary cursor-pointer">
                  {dict.footer.team}
                </a>
              </li>
              <li>
                <a
                  href="contact"
                  className="hover:text-secondary cursor-pointer"
                >
                  {dict.footer.contact}
                </a>
              </li>
              <li onClick={() => handleNavClick("support")}>
                <a className="hover:text-secondary cursor-pointer">
                  {dict.footer.support}
                </a>
              </li>
            </ul>
          </div>

          {/* Right section */}
          <div>
            <p className="text-xl font-medium mb-5 font-skranji">
              {dict.footer.getintouch}
            </p>
            <ul className="flex flex-col gap-2">
              <li>{dict.footer.email}</li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div>
          <hr className="text-foreground" />
          <p className="text-foreground py-5 text-sm text-center">
            {dict.footer.copyright}
          </p>

          <div className="flex justify-center text-xs py-4 items-center">
            {dict.footer.by}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
