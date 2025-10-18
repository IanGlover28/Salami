"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Shirt } from "lucide-react";
import { useRouter } from "next/navigation";

const kits = [
  { id: 1, videoUrl: "/videos/home-kit.mp4" },
  { id: 2, videoUrl: "/videos/away-kit.mp4" },
  { id: 3, videoUrl: "/videos/gk-away-kit.mp4" },
  { id: 4, videoUrl: "/videos/gk-home-kit.mp4" },
  { id: 5, videoUrl: "/videos/third-kit.mp4" },
];

export default function KitsShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % kits.length);
    }, 10000); 
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % kits.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + kits.length) % kits.length);

  const handleSlideClick = () => router.push("/kits");

  const currentKit = kits[currentSlide];

  return (
    <section className="py-20 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              2025 KITS COLLECTION
            </h2>
          </div>
          <p className="text-gray-400 text-lg">
            Click to explore our official kits and shop now
          </p>
        </motion.div>

        {/* Slideshow */}
        <div className="relative">
          <div
            onClick={handleSlideClick}
            className="relative h-[400px] md:h-[600px] bg-black rounded-2xl overflow-hidden cursor-pointer group"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <video
                  key={currentKit.id}
                  src={currentKit.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
                />

                {/* Overlay for darkening video slightly */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />
               
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-amber-300 text-white hover:text-black p-3 md:p-4 rounded-full transition-all duration-300 z-30"
              aria-label="Previous kit"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-amber-300 text-white hover:text-black p-3 md:p-4 rounded-full transition-all duration-300 z-30"
              aria-label="Next kit"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
              {kits.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide(index);
                  }}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-purple-300 w-8"
                      : "bg-white/40 hover:bg-white/80 w-3"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Slide Counter */}
          <motion.div
            className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {currentSlide + 1} / {kits.length}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button
            onClick={handleSlideClick}
            className="bg-purple-900 hover:bg-purple-400 text-black font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 inline-flex items-center space-x-2"
          >
            <Shirt className="w-6 h-6" />
            <span>Buy Now</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
