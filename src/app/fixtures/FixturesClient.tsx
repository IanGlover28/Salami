"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FixturesClient() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fixtures = [
    { id: 1, image: "/fixtures/match1.jpeg" },
    { id: 2, image: "/fixtures/match2.jpeg" },
    { id: 3, image: "/fixtures/match3.jpeg" },
    { id: 4, image: "/fixtures/match5.jpeg" },
    { id: 5, image: "/fixtures/match6.jpeg" },
  ];

  return (
    <motion.main
      className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-6 md:px-20 py-16"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* ✅ Hero Section with Parallax */}
      <section
        className="relative w-full h-[50vh] flex flex-col justify-center items-center text-center overflow-hidden mb-20 rounded-2xl"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        <div className="relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-heading tracking-wide"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Upcoming Fixtures
          </motion.h1>
          <motion.p
            className="text-gray-300 mt-4 max-w-xl mx-auto font-sans"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Catch every match here. Stay updated with our latest fixtures
          </motion.p>
        </div>
      </section>

      {/* ✅ Fixtures Grid (Images Only) */}
      <section className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {fixtures.map((fixture, index) => (
          <motion.div
            key={fixture.id}
            className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <Image
              src={fixture.image}
              alt={`Fixture ${fixture.id}`}
              fill
              className="object-contain"
            />
            {/* Optional dark overlay for text contrast */}
            <div className="absolute inset-0 bg-black/10 hover:bg-black/30 transition duration-300"></div>
          </motion.div>
        ))}
      </section>
    </motion.main>
  );
}
