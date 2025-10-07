"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const newsFeed = [
  {
    id: 1,
    title: "Salami FC climbs to 2nd in Division One League standings",
    image: "/team/scores.jpeg",
    description:
      "After a stunning 1-0 victory over Largesse, Salami FC moves into the top two of Ghana’s Division One League Zone 3.",
  },
  {
    id: 2,
    title: "Big Moves Ahead: Chairman Walker of Salami FC Meets European Scout",
     image: "/staff2.jpeg",
    description:
"European scout visits Salami FC to discover emerging stars from the club’s thriving youth academy."  },
  {
    id: 3,
    title: "GFA commends Salami FC for community engagement",
   image: "/team/team2.jpeg",
    description:
      "The Ghana Football Association recognizes Salami FC for their consistent efforts in supporting young footballers and hosting rural tournaments.",
  },
  {
    id: 4,
    title: "Salami FC gears up for Division 2 Cup semi-finals",
   image: "/team/team10.jpeg",
    description:
      "Fans are set for a thrilling weekend as Salami FC faces Asokwa United in the Division 2 Cup semi-finals at Baba Yara Stadium.",
  },
  {
    id: 5,
    title: "Salami FC’s Media Team Shares Insights After Stellar Performances",
    image: "/staff6.jpeg",
    description:
      "In a recent interview, Salami FC’s communications staff celebrated the club’s winning momentum and praised the players’ determination on the field.",
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
            className="bg-amber-300 text-white  overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 cursor-pointer"
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
              <h3 className="text-base font-bold mb-1">{news.title}</h3>
              <p className="text-sm text-gray-600">{news.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
