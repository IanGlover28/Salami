import { motion } from "framer-motion";
import { ShoppingBag, Star, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function KitPreviewSection() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const features = [
    { id: 1, label: "Premium Fabric", icon: "✨" },
    { id: 2, label: "Moisture-Wicking", icon: "💧" },
    { id: 3, label: "Official Crest", icon: "🛡️" },
    { id: 4, label: "Match-Day Quality", icon: "⚽" }
  ];

  // Fixed positions for particles to avoid hydration mismatch
  const particlePositions = [
    { top: 15, left: 20 },
    { top: 35, left: 80 },
    { top: 60, left: 10 },
    { top: 75, left: 65 },
    { top: 25, left: 45 },
    { top: 85, left: 30 }
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-zinc-950 via-purple-950/30 to-zinc-950 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-purple-600/20 to-amber-600/20 border border-purple-500/30 rounded-full"
          >
            <span className="text-amber-300 font-semibold text-sm uppercase tracking-wider">
              New Season Collection
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-amber-300 bg-clip-text text-transparent">
              2025 Home Kit
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Experience the perfect blend of tradition and innovation
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Kit Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Rotating Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-amber-500 to-purple-600 rounded-full blur-3xl opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Kit Image Container */}
              <motion.div
                className="relative z-10 bg-gradient-to-br from-purple-900/40 to-amber-900/40 rounded-3xl overflow-hidden border-2 border-purple-600/50 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Replace with actual kit image */}
                <img
                  src="/team/player-1.jpeg"
                  alt="Salami FC 2025 Home Kit"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Price Tag */}
                <motion.div
                  initial={{ scale: 0, rotate: -12 }}
                  whileInView={{ scale: 1, rotate: -12 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute top-6 right-6 bg-amber-300 text-black px-6 py-3 rounded-2xl shadow-xl transform rotate-[-12deg]"
                >
                  <div className="text-sm font-semibold">Starting at</div>
                  <div className="text-2xl font-bold">GH₵ 350</div>
                </motion.div>

                {/* Rating Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, type: "spring" }}
                  className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-purple-500/30"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-300 text-amber-300"
                        />
                      ))}
                    </div>
                    <span className="text-white text-sm font-semibold">4.9</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Particles */}
              {mounted && particlePositions.map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-amber-400 rounded-full"
                  style={{
                    top: `${pos.top}%`,
                    left: `${pos.left}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + (i * 0.3),
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right - Features & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setHoveredFeature(feature.id)}
                  onHoverEnd={() => setHoveredFeature(null)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                    hoveredFeature === feature.id
                      ? "bg-gradient-to-br from-purple-600/30 to-amber-600/30 border-amber-400"
                      : "bg-zinc-900/50 border-purple-700/30"
                  }`}
                >
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h3 className="text-white font-bold text-sm">{feature.label}</h3>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-zinc-900/50 border border-purple-700/30 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                Wear Your Pride
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our iconic purple home jersey with amber accents represents more than just a kit—it's a symbol of our community's passion and pride. Engineered with premium breathable fabric and moisture-wicking technology for ultimate comfort.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
              href="/kits"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Shop Now</span>
              </motion.a>
              
              <motion.a
              href="/kits"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-amber-300 hover:bg-amber-400 text-black font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>View Collection</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-8 text-gray-400 text-sm pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>In Stock</span>
              </div>
              <div>⚡ Fast Delivery</div>
              <div>✓ Authentic Quality</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto"
        >
          {[
            { label: "Happy Fans", value: "2,450+" },
            { label: "5-Star Reviews", value: "245" },
            { label: "Years of Pride", value: "10+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
              className="text-center p-6 bg-zinc-900/50 border border-purple-700/30 rounded-2xl"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-amber-300 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}