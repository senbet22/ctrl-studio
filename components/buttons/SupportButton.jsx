"use client";

export default function SupportButton({ dict }) {
  return (
    <button
      className="px-8 py-2.5 bg-secondary/80 cursor-pointer text-foreground text-lg ease-in 
      rounded-lg hover:bg-primary/70 hover:scale-105 transition-colors duration-200"
    >
      {dict.nav.support}
    </button>
  );
}
