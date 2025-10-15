"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  const currentLang = pathname.split("/")[1];
  const otherLang = currentLang === "en" ? "no" : "en";
  const newPath = pathname.replace(`/${currentLang}`, `/${otherLang}`);

  const toggleDropdown = () => setOpen(!open);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Trigger Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 bg-gray-700/80 hover:bg-gray-600/80 
        px-3 py-2 rounded-xl shadow-sm transition-all duration-300 cursor-pointer"
      >
        <Image
          src={`/flags/${currentLang}.png`}
          alt={`${currentLang === "en" ? "English" : "Norwegian"} flag`}
          width={20}
          height={20}
          className="rounded-full"
        />
        <span className="text-sm font-skranji uppercase">{currentLang}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 mt-2 bg-gray-800 rounded-lg shadow-lg 
        overflow-hidden transition-all duration-300 ease-out ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <Link
          href={newPath}
          prefetch={false}
          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 transition-colors duration-200"
          onClick={() => setOpen(false)}
        >
          <Image
            src={`/flags/${otherLang}.png`}
            alt={`${otherLang === "en" ? "English" : "Norwegian"} flag`}
            width={20}
            height={20}
            className="rounded-full"
          />
          <span className="text-sm font-skranji uppercase">{otherLang}</span>
        </Link>
      </div>
    </div>
  );
}
