"use client";

import { assets } from "@/assets/assets.mjs";
import Image from "next/image";

export default function PlayButton({ onPlay }) {
  return (
    <button
      onClick={onPlay}
      className="flex gap-2 px-6 py-3 bg-accent/40 cursor-pointer text-foreground text-lg 
      font-semibold rounded-lg hover:bg-secondary/10 hover:scale-105 transition-colors duration-200"
    >
      <Image
        src={assets.arrow_btn}
        alt="Play Trailer Button"
        className="size-6 rotate-180"
      />{" "}
      Play Trailer
    </button>
  );
}
