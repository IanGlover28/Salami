"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Star,
} from "lucide-react";

const kits = [
  {
    id: 1,
    name: "Home Kit 2025",
    price: "GH₵ 350",
    description:
      "Our iconic purple home jersey with amber accents. Premium breathable fabric with moisture-wicking technology.",
    features: [
      "Official club crest",
      "Player name & number option",
      "Authentic match-day design",
      "Breathable mesh panels",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    videoUrl: "/videos/home-kit.mp4",
    color: "Purple",
  },
  {
    id: 2,
    name: "Away Kit 2025",
    price: "GH₵ 350",
    description:
      "Bold amber away kit with purple details. Stand out on any pitch with this striking design.",
    features: [
      "Lightweight fabric",
      "Enhanced ventilation",
      "Ergonomic fit",
      "UV protection",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    videoUrl: "/videos/away-kit.mp4",
    color: "Amber",
  },
  {
    id: 3,
    name: "GoalKeeper Away Kit 2025",
    price: "GH₵ 350",
    description:
      "Sleek black third kit with purple and amber trim. Perfect for the modern football fan.",
    features: [
      "Premium polyester",
      "Anti-bacterial treatment",
      "Stretch fabric",
      "Quick-dry technology",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    videoUrl: "/videos/gk-away-kit.mp4",
    color: "Black",
  },
  {
    id: 4,
    name: "Goalkeeper Home Kit 2025",
    price: "GH₵ 380",
    description:
      "High-visibility goalkeeper jersey with reinforced padding. Designed for ultimate protection.",
    features: [
      "Padded elbows",
      "Extra length",
      "Grip panels",
      "Reflective details",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    videoUrl: "/videos/gk-home-kit.mp4",
    color: "Neon Green",
  },
  {
    id: 5,
    name: "Third Kit 2025",
    price: "GH₵ 280",
    description:
      "Official training gear worn by the squad. Comfortable for all-day wear and intense workouts.",
    features: [
      "Moisture management",
      "Flexible fit",
      "Durable construction",
      "Club branding",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    videoUrl: "/videos/third-kit.mp4",
    color: "White",
  },
];


export default function KitsClient() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const ownerPhoneNumber = "+23327089200";
  

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % kits.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % kits.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + kits.length) % kits.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const handleShopNow = () => {
    window.location.href = `tel:${ownerPhoneNumber}`;
  };

  const currentKit = kits[currentSlide];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mt-5">

            </div>
            <p className="text-lg font-extrabold md:text-xl text-gray-200 max-w-3xl mx-auto">
              Wear your pride. Official Salami FC kits for the 2025 season.
              Premium quality, authentic designs.
            </p>
          </motion.div>
        </div>
      </section>


       {/* Players Launch Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-purple-950/20 to-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-amber-300 bg-clip-text text-transparent">
              2025 Home Kit Launch
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our squad proudly unveils the new season&apos;s colors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4 ].map((player, index) => (
              <motion.div
                key={player}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="relative group cursor-pointer"
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-purple-900/40 to-amber-900/40 rounded-xl overflow-hidden border-2 border-purple-700/30 group-hover:border-amber-300 transition-all duration-300">
                  {/* Player image */}
                  <Image 
                    src={`/team/player-${player}.jpeg`}
                    alt={`Salami FC Player ${player}`}
                    className="w-full h-full object-cover"
                    width={300}
                    height={400}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Player Number Badge */}
                  <div className="absolute top-3 right-3 bg-amber-300 text-black font-bold w-10 h-10 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {player}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 italic">
              &lsquo;Wearing the badge with honor - representing our community with pride&lsquo;
            </p>
          </motion.div>
        </div>
      </section>
      

      {/* Video Slideshow Section */}
      <section className="py-12 md:py-16 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="relative h-[400px] md:h-[600px] bg-zinc-900 rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {/* Actual Video */}
                  <video
                    key={currentKit.id}
                    src={currentKit.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain md:object-contain scale-[0.9] transition-transform duration-700"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-black/30" />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-amber-300 text-white hover:text-black p-3 md:p-4 rounded-full transition-all duration-300 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-amber-300 text-white hover:text-black p-3 md:p-4 rounded-full transition-all duration-300 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {kits.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-amber-300 w-8"
                        : "bg-white/50 hover:bg-white/80 w-3"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Details Card */}
            <motion.div
              key={currentKit.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 bg-zinc-900 border-2 border-purple-700 rounded-2xl p-6 md:p-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left - Details */}
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold mb-2">
                    {currentKit.name}
                  </h2>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-2xl font-bold text-amber-300">
                      {currentKit.price}
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-amber-300 text-amber-300"
                        />
                      ))}
                      <span className="text-gray-400 ml-2">(245 reviews)</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {currentKit.description}
                  </p>
                  <h3 className="text-lg font-bold mb-3 flex items-center">
                    <Star className="w-5 h-5 text-amber-300 mr-2" />
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {currentKit.features.map((feature, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        <span className="text-amber-300 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right - Actions */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold mb-3">Select Size</h3>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {currentKit.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-6 py-3 border-2 rounded-lg font-semibold transition-all duration-300 ${
                            selectedSize === size
                              ? "border-amber-300 bg-amber-300 text-black"
                              : "border-purple-700 text-white hover:border-amber-300"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button
                      onClick={handleShopNow}
                      className="w-full bg-amber-300 hover:bg-amber-400 text-black font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-lg"
                    >
                      <Phone className="w-6 h-6" />
                      <span>Call to Order Now</span>
                    </button>
            
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
