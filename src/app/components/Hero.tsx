"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const newsFeed = [
  {
    id: 1,
    title: "Salami FC climbs to 2nd in Division One League standings",
    image: "/team/scores.jpeg",
    timeAgo: "10 hours ago",
  },
  {
    id: 2,
    title: "Big Moves Ahead: Chairman Walker of Salami FC Meets European Scout",
    image: "/staff2.jpeg",
    timeAgo: "1 day ago",
  },
  {
    id: 3,
    title: "GFA commends Salami FC for community engagement",
    image: "/team/team2.jpeg",
    timeAgo: "3 days ago",
  },
  {
    id: 4,
    title: "Salami FC gears up for Division 2 Cup semi-finals",
    image: "/team/team10.jpeg",
    timeAgo: "5 days ago",
  },
  {
    id: 5,
    title: "Salami FC's Media Team Shares Insights After Stellar Performances",
    image: "/staff6.jpeg",
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
            className="bg-amber-300 text-white  overflow-hidden shadow-md transition-transform duration-300 cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative h-60 w-full">
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-base font-bold mb-5">{news.title}</h3>
            <p className="text-sm text-gray-500">{news.timeAgo}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
