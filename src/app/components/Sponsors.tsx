"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sponsors = [
  { id: 1, name: "Shamoo", logo: "/sponsors/shamoo.png" },
  { id: 2, name: "risefm", logo: "/sponsors/risefm.png" },
  { id: 3, name: "black-hype", logo: "/sponsors/black-hype-logo.png" },
];

export default function Sponsors() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        <motion.div
          className="flex flex-wrap justify-center items-center gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              className="flex items-center justify-center"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.08 }}
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={150}
                height={80}
                className="object-contain  transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
