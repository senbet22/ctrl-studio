/**
 * A reusable modal component, typically for embedding video content like a trailer.
 * It features animations for opening and closing, and prevents body scroll when open.
 * The modal can be closed by clicking the overlay, the close button, or pressing the Escape key.
 *
 * @param {boolean} isOpen - Controls whether the modal is open or closed.
 * @param {function} onClose - Function to call when the modal should be closed.
 * @param {string} title - The title to display in the modal header.
 * @param {React.ReactNode} children - The content to be displayed within the modal body (e.g., an iframe).
 */
import { assets } from "@/assets/assets.mjs";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const TrailerModal = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 bg-opacity-50"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-transparent rounded-lg shadow-xl w-full  h-full sm:my-10 max-w-6xl overflow-hidden backdrop-blur-sm"
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
                {title}
              </h1>

              <button
                onClick={onClose}
                className="text-white/70 cursor-pointer hover:text-white text-2xl absolute right-5 font-bold"
                aria-label="Close modal"
              >
                <Image src={assets.close} alt="Modal Close button" />
              </button>
            </div>

            <div className="p-2 overflow-y-auto h-full">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TrailerModal;
