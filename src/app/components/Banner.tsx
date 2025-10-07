"use client";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="w-full overflow-hidden bg-amber-100 text-black font-semibold text-lg md:text-xl py-2 z-[60]">
      <motion.div
        className="whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
      >
        <span className="mx-8">
          ⚽ Upcoming Match: Salami FC vs Titans — Saturday, 5PM at Salami Arena ⚽
        </span>
        <span className="mx-8">
          🎟️ Get Your Tickets Now on the Salami FC Store! 🎟️
        </span>
        <span className="mx-8">
          💚 Join the Fan Club — Together We Are Stronger! 💚
        </span>
      </motion.div>
    </div>
  );
}
