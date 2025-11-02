"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

export default function MatchdayPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Always show popup after a short delay on every page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Mark as seen in this session
    sessionStorage.setItem("hasSeenMatchdayPopup", "true");
  };

  // Prevent body scroll when popup is open
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />

          {/* Popup Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <motion.div
              className="relative w-full max-w-md md:max-w-lg"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
            >
              {/* Close Button */}
              <motion.button
                onClick={handleClose}
                className="absolute -top-4 -right-4 z-10 bg-amber-400 hover:bg-amber-500 text-purple-900 rounded-full p-2 shadow-lg transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close popup"
              >
                <X size={24} />
              </motion.button>

              {/* Popup Content */}
              <div className="relative bg-gradient-to-br from-purple-900 via-purple-950 to-black rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-400/30">
                {/* Matchday Image */}
                <div className="relative w-full h-auto">
                  <Image
                    src="/matchday-poster.jpeg"
                    alt="Matchday Announcement"
                    width={864}
                    height={1080}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -bottom-2 -right-2 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -top-2 -left-2 w-24 h-24 bg-purple-400/20 rounded-full blur-2xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}