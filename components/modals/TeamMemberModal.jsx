"use client";
import { assets } from "@/assets/assets.mjs";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";

const TeamMemberModal = ({ isOpen, onClose, member, dict }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!member) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-transparent rounded-lg shadow-xl w-full h-full sm:my-10 max-w-3xl overflow-hidden backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.key === "Escape" && onClose()}
            tabIndex={-1}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
              duration: 0.4,
            }}
          >
            <div className="flex justify-center bg-background p-6 border-b border-white/20">
              <h1 className="text-2xl text-center mx-8 sm:text-3xl text-primary">
                {member.name}
              </h1>

              <button
                onClick={onClose}
                className="text-white/70 cursor-pointer hover:text-white text-2xl absolute right-5 font-bold"
                aria-label="Close modal"
              >
                <Image src={assets.close} alt="Modal Close button" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto h-full pb-24">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/3">
                    <Image
                      src={member.avatar}
                      width={400}
                      height={400}
                      alt={member.alt}
                      className="w-full max-w-xs mx-auto md:max-w-full h-auto rounded-lg object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 space-y-6">
                    <div>
                      <h2 className="text-xl text-primary mb-2">
                        {member.role}
                      </h2>
                      <p className="text-foreground/80 leading-relaxed">
                        {member.background}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg text-primary mb-2">
                        {dict.team.aboutHeading}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {member.detailedBio}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg text-primary mb-2">
                        {dict.team.responsibilitiesHeading}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {member.responsibilities}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TeamMemberModal;
