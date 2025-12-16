"use client";

import { motion } from "framer-motion";
import Hero from "./components/Hero";

import MatchesSection from "./components/MatchesSection";
import KitsShowcase from "./components/KitsShowcase";
import Sponsors from "./components/Sponsors";
import IntroLoader from "./components/IntroLoader";
import MatchdayPopup from "./components/MatchdayPopup";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* 🏁 Hero Section */}
      {/* <MatchdayPopup /> */}
      <IntroLoader>
      <Hero />
  {/* 🏟️ Matches */}
      <MatchesSection />
      <KitsShowcase />
      {/* ⚽ About Salami FC */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          {/* 🖼️ Video */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <video
              src="/videos/salami-flag.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl shadow-lg object-cover w-full"
            />
          </motion.div>

       
        </div>
      </section>

    


      <Sponsors />

      {/* 🙌 Call to Action */}
      <section className="py-20 text-center bg-black">
        <motion.h2
          className="text-4xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Become Part of the Journey
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Join the Salami FC community — stay updated with news, fixtures, and
          exclusive merchandise. Your support fuels our success!
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-900 text-white font-semibold px-8 py-3 rounded-full"
        >
          Join the Fan Club
        </motion.button>
      </section>
      </IntroLoader>
    </div>
  );
}
