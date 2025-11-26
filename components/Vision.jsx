"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Vision = ({ dict }) => {
  const articles = dict.vision.article || [];
  return (
    <section className="relative w-full min-h-screen max-w-6xl px-6 mx-auto py-25">
      {/* Layout */}
      <div className="flex flex-col md:flex-row items-start gap-10 py-10">
        {/* Image */}
        <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col justify-center items-center md:items-start">
          <h1
            className="text-3xl sm:text-4xl font-semibold mb-10 
                   text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          >
            {dict.vision.title}
          </h1>
          <Image
            className="max-h-[60vh] object-contain  rounded-lg shadow-xl"
            src={assets.team_image}
            alt="Team"
          />
        </div>
        {/* Text Sections */}
        <div className="flex-1 flex flex-col gap-8">
          {articles.map((text, index) => (
            <article key={index} className=" px-4 rounded-xl shadow-sm">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Vision;
