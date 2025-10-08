"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function TeamPage() {
const [selectedImg, setSelectedImg] = useState<string | null>(null);


  const players = [
    { img: "/team/team1.jpeg" },
    { img: "/team/team12.jpeg" },
    { img: "/team/team4.jpeg" },
    { img: "/team/team3.jpeg" },
    { img: "/team/team5.jpeg" },
    { img: "/team/team6.jpeg" },
    { img: "/team/team7.jpeg" },
    { img: "/team/team8.jpeg" },
    { img: "/team/team9.jpeg" },
    { img: "/team/team11.jpeg" },
  ];

  const videos = [
    { id: 1, src: "/team/teamvideo.mp4" },
    { id: 2, src: "/team/teamvideo1.mp4" },
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-gray-950 pt-32 pb-16 px-6 md:px-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white">
          Our Team
        </h1>
        <p className="mt-3 text-gray-500 dark:text-gray-400">
          Meet the passionate players driving{" "}
          <span className="text-amber-400">Salami FC</span> to victory.
        </p>
      </div>

      {/* Player Images Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {players.map((player, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-2xl shadow-md cursor-pointer"
            onClick={() => setSelectedImg(player.img)}
          >
            <Image
              src={player.img}
              alt="Player Image"
              width={300}
              height={200}
              className="object-cover w-full h-48 md:h-56"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Training Videos Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Training Sessions
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Watch our players in action during training and match prep.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {videos.map((video) => (
          <motion.div
            key={video.id}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <video
              src={video.src}
              controls
              className="w-full h-64 md:h-80 object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-[90%]"
            >
              <Image
                src={selectedImg}
                alt="Full view"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl object-contain"
              />
              <button
                className="absolute top-4 right-4 bg-white/20 text-white px-3 py-1 rounded-full text-sm hover:bg-white/40"
                onClick={() => setSelectedImg(null)}
              >
                ✕ Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
