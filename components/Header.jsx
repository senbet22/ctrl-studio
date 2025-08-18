"use client";

import React, { useState } from "react";
import PlayButton from "./buttons/PlayButton";
import Modal from "./Modal";

const Header = () => {
  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);

  const openTrailerModal = () => setIsTrailerModalOpen(true);
  const closeTrailerModal = () => setIsTrailerModalOpen(false);

  return (
    <div className="relative h-screen w-full bg-[url('/background.jpg')] bg-cover bg-center flex items-center justify-center">
      <div className="relative h-screen w-full bg-background/70 bg-cover bg-center flex justify-center">
        <div className="max-w-6xl mt-30 w-full mx-2">
          <h1 className="text-4xl sm:text-6xl  px-6 text-primary text-shadow-md text-shadow-background/70 ">
            The shadow from <br /> Ringholt
          </h1>
          <div className="absolute  px-6 bottom-20">
            <PlayButton onPlay={openTrailerModal} />
          </div>
        </div>
      </div>

      <Modal
        isOpen={isTrailerModalOpen}
        onClose={closeTrailerModal}
        title="The Shadow from Ringholt - Trailer"
      >
        <div className="flex flex-col items-center bg-background  justify-center  h-full">
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
