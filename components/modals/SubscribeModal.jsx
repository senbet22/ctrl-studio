"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { assets } from "@/assets/assets.mjs";

const SubscribeModal = ({ isOpen, onClose, dict }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [status, setStatus] = useState(""); // 'loading', 'success', 'error'

  // Manage Body Scroll
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!marketingConsent) {
      setStatus("consent-required");
      return;
    }
    setStatus("loading");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setName("");
        //  Close modal automatically after success?
        setTimeout(onClose, 2000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-[2px]"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-background/90 rounded-lg shadow-xl w-full mx-4 sm:mx-auto max-w-md overflow-hidden backdrop-blur-sm border border-white/10"
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
            {/* Header */}
            <div className="flex justify-center items-center bg-transparent p-6 border-b border-white/20 relative">
              <h1 className="text-lg md:text-xl text-center font-bold text-primary">
                Join Mailing List
              </h1>
              <button
                onClick={onClose}
                className="text-foreground/70 hover:text-foreground cursor-pointer absolute right-5 top-6 transition-colors"
                aria-label="Close modal"
              >
                <Image src={assets.close} alt="Close" className="w-6 h-6" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground/80 mb-2"
                  >
                    Name <span>(Optional)</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-zinc-700 rounded-lg text-foreground focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground/80 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    required
                    className="w-full px-4 py-3 border border-zinc-700 rounded-lg text-foreground focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  />
                </div>

                {/* Marketing Consent Checkbox */}
                <div className="relative flex items-start gap-3">
                  <div className="flex items-center h-5">
                    <input
                      id="marketing-consent"
                      type="checkbox"
                      checked={marketingConsent}
                      onChange={(e) => setMarketingConsent(e.target.checked)}
                      className="appearance-none peer h-5 w-5 bg-foreground border-2 border-secondary rounded-md checked:bg-secondary checked:border-secondary flex-shrink-0 cursor-pointer"
                    />
                    <svg
                      className="absolute w-3 h-3 ml-1 hidden peer-checked:block pointer-events-none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="ml-2 text-sm">
                    <label
                      htmlFor="marketing-consent"
                      className="text-primary/60 cursor-pointer"
                    >
                      {dict.contact.exclusiveUpdatesConsentText}
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={`w-full py-3 px-4 rounded-lg font-bold text-lg tracking-wide transition-all transform active:scale-95 cursor-pointer ${
                    status === "success"
                      ? "bg-secondary/80 text-foreground shadow-[0_0_15px_rgba(22,163,74,0.5)]"
                      : "bg-primary/70 text-foreground hover:bg-primary/80"
                  }`}
                >
                  {status === "loading"
                    ? "Processing..."
                    : status === "success"
                    ? "Signed Up!"
                    : "Sign Up"}
                </button>

                {/* Status Messages */}
                <div className="h-6 text-center">
                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-secondary text-sm font-medium"
                    >
                      Welcome aboard! Check your inbox.
                    </motion.p>
                  )}
                  {(status === "error" || status === "consent-required") && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-sm font-medium"
                    >
                      {status === "error"
                        ? "Something went wrong. Please try again."
                        : dict.contact.exclusiveUpdatesConsentError}
                    </motion.p>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubscribeModal;
