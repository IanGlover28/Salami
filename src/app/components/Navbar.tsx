"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "News", path: "/" },
  { name: "Store", path: "/kits" },
  { name: "Fixtures", path: "/fixtures" },
  { name: "Management", path: "/Management" },
  { name: "Sponsorships", path: "/sponsorship" },
  { name: "Team", path: "/team" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 🔶 Banner Section (Scrolling Text) */}
      <div className="relative bg-purple-900 text-white overflow-hidden h-8 flex items-center">
        <motion.div
          className="whitespace-nowrap text-sm font-semibold"
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
        >
          ⚽ Welcome to <span className="text-amber-300">Salami FC</span> — Passion. Pride. Performance. ⚽
          &nbsp;&nbsp;|&nbsp;&nbsp; Stay tuned for the next big matchday!
          &nbsp;&nbsp;|&nbsp;&nbsp; Visit our Store for exclusive kits 🛍️
        </motion.div>
      </div>

      {/* 🟡 Navbar */}
      <motion.nav
        className="bg-amber-300  flex justify-between items-center px-6 md:px-12 py-3 shadow-lg backdrop-blur-lg"
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        {/* 🏆 Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/salami-logo.png"
            alt="Salami FC Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* 🧭 Nav Links (Desktop) */}
        <ul className="hidden md:flex space-x-10 mx-auto">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className="font-bold hover:text-purple-950 transition-all duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* 🔘 Sign Up Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/signup"
            className="bg-purple-700 text-white font-semibold px-5 py-2 rounded-full hover:bg-violet-950 transition-all duration-300"
          >
            Sign Up
          </Link>
        </div>

        {/* 📱 Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none text-purple-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* 📱 Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="absolute top-full left-0 w-full bg-amber-300 flex flex-col items-center space-y-6 py-8 text-lg border-t border-purple-700/20 max-h-[80vh] overflow-y-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="hover:text-purple-950 font-semibold transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/signup"
                className="bg-purple-700 text-white font-semibold px-6 py-2 rounded-full hover:bg-violet-950 transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
