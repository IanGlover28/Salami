"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "News", path: "/" },
  { name: "Store", path: "/kits" },
  { name: "Fixtures", path: "/fixtures" },
  { name: "Management", path: "/Management" },
  { name: "Team", path: "/team" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

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
          ⚽ Welcome to The Official website of <span className="text-amber-300">Salami Rangers FC</span> — Passion. Pride. Performance. ⚽
          &nbsp;&nbsp;|&nbsp;&nbsp; Stay tuned for the next big matchday!
          &nbsp;&nbsp;|&nbsp;&nbsp; Visit our Store for exclusive kits or Contact Shamoo Sports Wear <a href="tel:+233277089200">+233 27 708 9200</a>
        </motion.div>
      </div>

      {/* 🟡 Navbar */}
      <motion.nav
        className="bg-amber-400 flex justify-between items-center px-6 md:px-12 py-3 shadow-lg backdrop-blur-lg"
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        {/* 🏆 Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/salami.png"
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
          className="md:hidden focus:outline-none text-purple-900 z-50 relative"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* 📱 Mobile Sliding Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay/Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm md:hidden z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Sliding Sidebar Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-gradient-to-b from-purple-900 via-purple-950 to-black shadow-2xl md:hidden z-50 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
              }}
            >
              <div className="flex flex-col h-full">
                {/* Sidebar Header */}
                <div className="p-6 border-b border-purple-700/40">
                  <div className="flex items-center justify-between mb-4">
                    <Image
                      src="/salami.png"
                      alt="Salami FC Logo"
                      width={90}
                      height={35}
                      className="object-contain"
                    />
                    <button
                      onClick={() => setMenuOpen(false)}
                      className="text-white hover:text-amber-400 transition-colors"
                      aria-label="Close menu"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <p className="text-gray-400 text-xs">
                    Passion. Pride. Performance.
                  </p>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-4 py-6">
                  <ul className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.08,
                          duration: 0.3,
                        }}
                      >
                        <Link
                          href={link.path}
                          className="block py-3 px-4 text-white font-semibold text-base rounded-xl hover:bg-purple-800/60 hover:text-amber-400 transition-all duration-300 active:scale-95"
                          onClick={() => setMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Sidebar Footer */}
                <div className="p-6 border-t border-purple-700/40">
                  <Link
                    href="/"
                    className="block w-full bg-amber-400 text-purple-900 font-bold text-center px-6 py-3 rounded-full hover:bg-amber-500 active:scale-95 transition-all duration-300 shadow-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sign Up
                  </Link>

                  {/* Footer Info */}
                  <div className="mt-6 text-center text-gray-500 text-xs space-y-1">
                    <p>© 2025 Salami Rangers FC</p>
                    <p>All Rights Reserved</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}