"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { assets } from "../../assets/assets.mjs";

/**
 * BackToTopButton component.
 *
 * Displays a floating "Back to Top" button when the user scrolls down the page.
 * Clicking the button smoothly scrolls the window back to the top.
 *
 * @component
 * @returns {JSX.Element} The back-to-top button with scroll visibility logic.
 */

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-2 px-2 cursor-pointer rounded-full bg-primary/30 shadow-sm hover:bg-secondary/10 focus:outline-none  shadow-primary transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll back to top of page"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <Image
        src={assets.arrow_up_icon}
        className="size-10"
        alt=""
        role="presentation"
      />
    </button>
  );
}
