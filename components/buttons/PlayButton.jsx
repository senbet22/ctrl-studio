"use client";

export default function PlayButton({ onPlay }) {
  return (
    <button
      onClick={onPlay}
      className="px-6 py-3 bg-accent/40 cursor-pointer text-foreground text-lg 
      font-semibold rounded-lg hover:bg-secondary/70 hover:scale-105 transition-colors duration-200"
    >
      ▶ Play Trailer
    </button>
  );
}
