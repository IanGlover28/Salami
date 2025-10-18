"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Latest", path: "/latest" },
    { name: "Store", path: "/store" },
    { name: "Fixtures", path: "/fixtures" },
    { name: "Salami", path: "/salami" },
    { name: "Sponsorship", path: "/sponsorship" },
    { name: "Players", path: "/players" },
  ];

  return (
    <motion.footer
      className=" bg-purple-950 text-white py-10 px-6 mt-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Logo & Intro */}
        <div>
<Image
    src="/Salami.png"
    alt="Salami FC Logo"
    width={128}
    height={128}
    className="w-32 h-auto mb-2 mx-auto md:mx-0"
  />
          <p className="text-gray-400 text-sm">
         The official home of Salami Football Club.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="text-gray-300 hover:text-green-400 transition-all duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-5">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-green-400 transition"
            >
              <Facebook />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-green-400 transition"
            >
              <Twitter />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-green-400 transition"
            >
              <Instagram />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-green-400 transition"
            >
              <Youtube />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Salami FC. All Rights Reserved.
      </div>
    </motion.footer>
  );
}
