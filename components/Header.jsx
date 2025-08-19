"use client";

import React, { useState } from "react";
import PlayButton from "./buttons/PlayButton";
import Modal from "./Modal";
import Image from "next/image";
import { assets } from "@/assets/assets.mjs";

const Header = () => {
  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);

  const openTrailerModal = () => setIsTrailerModalOpen(true);
  const closeTrailerModal = () => setIsTrailerModalOpen(false);

  return (
    <div className="relative h-svh w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={assets.bg_image}
        alt="In-game Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70 bg-scroll" />

      {/* Content */}
      <div className="relative h-svh w-full flex justify-center">
        <div className="max-w-6xl mt-30 w-full mx-2">
          <h1 className="text-4xl sm:text-6xl px-6 text-primary text-shadow-md text-shadow-background/70">
            The shadow from <br /> Ringholt
          </h1>
          <div className="absolute px-6 bottom-20">
            <PlayButton onPlay={openTrailerModal} />
          </div>
        </div>
      </div>

      {/* Trailer Modal */}
      <Modal
        isOpen={isTrailerModalOpen}
        onClose={closeTrailerModal}
        title="The Shadow from Ringholt - Trailer"
      >
        <div className="flex flex-col items-center bg-background justify-center h-full">
          <div className="w-full aspect-video rounded-lg flex items-center justify-center mb-6">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/2_pTX5V4iYg?si=sVlIsuLz9Vt8_sun"
              title="YouTube Trailer Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
