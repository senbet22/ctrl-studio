"use client";
import { assets, teamMembers } from "@/assets/assets";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import TeamMemberModal from "./modals/TeamMemberModal";

const Team = ({ dict }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Merges team members with translations
  const team = useMemo(
    () =>
      teamMembers.map((member, index) => ({
        ...member,
        ...dict.team.members[index],
      })),
    [dict]
  );

  const handleReadMore = (index) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedIndex(null), 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="team"
      className="w-full max-w-6xl px-6 mx-auto py-15 scroll-mt-20"
    >
      <h2 className="text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-45% from-primary to-secondary to-55%">
        {dict.team.title}
      </h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-auto gap-6 my-10 bg-background"
      >
        {team.map((member, index) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            key={member.name}
            onClick={() => handleReadMore(index)}
            className="rounded-lg hover:bg-secondary/5 p-2 cursor-pointer"
          >
            <Image
              src={member.avatar}
              width="full"
              height="full"
              alt={member.alt}
              className="w-fit object-cover h-40 rounded-lg shadow-sm shadow-gray-700 hover:scale-105 transition-all duration-300 ease-in-out"
            />
            <h3 className="text-lg my-4 text-primary">{member.name}</h3>
            <p className="text-sm text-foreground/60 mb-2 leading-5">
              {member.role}
            </p>
            <p className="text-sm font-ovo text-foreground leading-5">
              {member.background}
            </p>
            <p className="flex text-secondary/70 hover:text-secondary">
              {member.readMore}
              <svg
                className="mt-1 mx-1"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#609c2d"
                  fillRule="evenodd"
                  d="M4.293 7.793a1 1 0 0 1 1.414 0L12 14.086l6.293-6.293a1 1 0 1 1 1.414 1.414L13.414 15.5a2 2 0 0 1-2.828 0L4.293 9.207a1 1 0 0 1 0-1.414"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </motion.div>
        ))}
      </motion.div>

      <TeamMemberModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        member={selectedIndex !== null ? team[selectedIndex] : null}
        dict={dict}
      />
    </motion.div>
  );
};

export default Team;
