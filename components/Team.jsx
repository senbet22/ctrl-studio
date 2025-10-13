import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import { teamData } from "@/assets/assets.mjs";
import TeamMemberModal from "./modals/TeamMemberModal";

const Team = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleReadMore = (member) => {
    setSelectedMember(member);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedMember(null), 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="team"
      className="w-full  min-h-svh max-w-6xl px-6 mx-auto  py-15 scroll-mt-20"
    >
      <h2
        className="   text-2xl sm:text-3xl text-transparent bg-clip-text
           bg-gradient-to-r from-45% from-primary   to-secondary to-55%"
      >
        The Team
      </h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-auto  gap-6 my-10 bg-background"
      >
        {teamData.map((member, index) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            key={index}
            onClick={() => handleReadMore(member)}
            className="rounded-lg
             hover:bg-secondary/5
             p-2 cursor-pointer
          "
          >
            <Image
              src={member.avatar}
              width="full"
              height="full"
              alt={member.alt}
              className="w-fit  object-cover h-40 rounded-lg"
            />
            <h3 className="text-lg my-4 text-primary">{member.name}</h3>
            <p className="text-sm text-foreground/60 mb-2  leading-5">
              {member.role}
            </p>
            <p className="text-sm font-ovo  text-foreground  leading-5">
              {member.background}
            </p>
            <p className="flex text-secondary/70 hover:text-secondary">
              Read More{" "}
              <Image className="w-5 mx-1" src={assets.arrow_up_icon} />
            </p>
          </motion.div>
        ))}
      </motion.div>

      <TeamMemberModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        member={selectedMember}
      />
    </motion.div>
  );
};

export default Team;
