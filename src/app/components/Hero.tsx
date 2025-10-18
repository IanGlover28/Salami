"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const newsFeed = [
  {
    id: 1,
    title: "Salami FC climbs to 2nd in 3rd Division League standings",
    video: "/videos/match00.mp4",
    poster: "/match00.png",
    timeAgo: "10 hours ago",
  },
  {
    id: 2,
    title: "Big Moves Ahead: Chairman Walker of Salami FC Meets European Scout",
    video: "/ad.mp4",
    poster: "/staff2.jpeg",
    timeAgo: "1 day ago",
  },
  {
    id: 3,
    title: "GFA commends Salami FC for community engagement",
    video: "/ad.mp4",
    poster: "/team/team2.jpeg",
    timeAgo: "3 days ago",
  },
  {
    id: 4,
    title: "Salami FC gears up for Division 2 Cup semi-finals",
    video: "/ad.mp4",
    poster: "/team/team10.jpeg",
    timeAgo: "5 days ago",
  },
  {
    id: 5,
    title: "Salami FC's Media Team Shares Insights After Stellar Performances",
    video: "/videos/news00.mp4",
    poster: "/staff6.jpeg",
    timeAgo: "1 week ago",
  },
];

export default function Hero() {
  return (
    <section className="min-h-screen bg-amber-300 py-20 px-6 flex flex-col justify-center items-center">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {newsFeed.map((news) => (
          <motion.div
            key={news.id}
            className="bg-amber-300 text-white overflow-hidden shadow-md transition-transform duration-300 cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative w-full aspect-video  overflow-hidden">
              <video
                className="w-full h-full object-cover"
                controls
                poster={news.poster}
              >
                <source src={news.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-4">
              <h3 className="text-base font-bold mb-2">{news.title}</h3>
              <p className="text-sm text-gray-500">{news.timeAgo}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
