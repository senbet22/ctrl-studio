"use client";

import { useState } from "react";

export default function SubscribeInput() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setEmail("");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full mx-auto ">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 text-foreground font-ovo px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
      />
      <button
        onClick={handleSubmit}
        className=" px-2 sm:px-10 py-2 text-foreground rounded-md bg-secondary/80  hover:bg-primary/70 
        text-lg cursor-pointer   duration-200"
      >
        Subscribe
      </button>
    </div>
  );
}
