"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "../sanity/lib/image";

export default function Team({ teamData }) {
  return (
    <motion.div
      id="team"
      className="w-full min-h-svh max-w-6xl px-6 mx-auto py-10 scroll-mt-20"
    >
      <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
        The Team
      </h2>

      <motion.div className="grid grid-cols-auto gap-6 my-10">
        {teamData.map(({ name, role, avatar, alt, background }, i) => (
          <motion.div
            key={i}
            className="border border-gray-400 rounded-lg px-8 py-8 hover:shadow-theme"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {avatar && (
              <Image
                src={urlFor(avatar).url()}
                alt={alt}
                width={400}
                height={400}
                className="object-cover h-40 w-fit rounded-lg"
              />
            )}
            <h3 className="text-lg my-4 text-primary">{name}</h3>
            <p className="text-sm text-foreground/60 mb-2 leading-5">{role}</p>
            <p className="text-sm font-ovo text-foreground leading-5">
              {background}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
