/**
 * Renders a button that, when clicked, navigates the user to the support section.
 * This section provides information on how to support and fund Ctrl Studio.
 * @param {object} dict - The dictionary object containing translations for the button text.
 */
"use client";

export default function SupportButton({ dict }) {
  return (
    <button
      className="px-8 py-2.5 bg-secondary/80 cursor-pointer text-foreground text-lg ease-in 
      rounded-lg hover:bg-primary/70 hover:scale-105 transition-colors duration-200 shadow-md shadow-gray-700"
    >
      {dict.nav.support}
    </button>
  );
}
