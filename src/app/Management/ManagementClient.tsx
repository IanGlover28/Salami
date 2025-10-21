
'use client';

import { motion } from "framer-motion";
import { Trophy, Users, Target, Shield } from "lucide-react";

const technicalStaff = [
  {
    id: 1,
    name: "David Mensah",
    position: "Head Coach",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
  },
  {
    id: 2,
    name: "Ama Boateng",
    position: "Assistant Coach",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
  },
  {
    id: 3,
    name: "Kofi Owusu",
    position: "Goalkeeper Coach",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
  },
  {
    id: 4,
    name: "Jane Adjei",
    position: "Fitness & Conditioning Coach",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
  },
];

const stats = [
  { icon: Trophy, label: "Titles Won", value: "12" },
  { icon: Users, label: "Staff Members", value: "5" },
  { icon: Target, label: "Years of Excellence", value: "20" }
];

export default function ManagementClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black">
   

      {/* Stats Section */}
      <section className="w-full py-12 md:py-16 px-4 mt-9 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-purple-900/40 to-amber-300/10 border border-amber-300/20 rounded-2xl p-6 sm:p-8 text-center backdrop-blur-sm hover:border-amber-300/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-amber-300" />
                <div className="text-3xl sm:text-4xl font-bold text-amber-300 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="w-full py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-purple-950/80 to-black border border-amber-300/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-300 mb-6 sm:mb-8 text-center">
              Our Story
            </h2>

            <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
              <p>
                Founded in <span className="text-amber-300 font-bold">1975</span> by a group of passionate football enthusiasts in the heart of Accra, <span className="text-amber-300 font-semibold">Salami Football Club</span> began as a modest community team with big dreams. What started in dusty neighborhood pitches has evolved into one of Ghana&lsquo;s most celebrated football institutions.
              </p>

              <p>
                The club&lsquo;s name, &apos;Salami,&apos; was inspired by the founder&alpos;s vision of creating a team that would be as essential and beloved as the popular delicacy—bringing people together across all backgrounds. This philosophy of unity and excellence has remained at the core of our identity for nearly five decades.
              </p>

              {/* Timeline Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 sm:my-8">
                {[
                  { period: "1975-1985", title: "The Foundation Years", desc: "Building from grassroots, establishing club culture and local fanbase" },
                  { period: "1986-2000", title: "Rise to Prominence", desc: "First league title in 1992, establishing youth academy" },
                  { period: "2001-2015", title: "Golden Era", desc: "Multiple championships, continental competitions, stadium renovation" },
                  { period: "2016-Present", title: "Modern Excellence", desc: "Digital innovation, global partnerships, community programs" },
                ].map((era, i) => (
                  <div key={i} className="bg-purple-900/30 rounded-xl p-4 sm:p-5 border border-purple-700/30">
                    <div className="text-amber-300 font-bold text-base sm:text-lg mb-2">
                      {era.period}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {era.desc}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                Throughout our journey, Salami FC has won <span className="text-amber-300 font-bold">15 major titles</span>, produced <span className="text-amber-300 font-bold">over 50 national team players</span>, and touched the lives of thousands through our community programs. Our state-of-the-art <span className="text-amber-300 font-semibold">Salami Stadium</span>, inaugurated in 2010, stands as a testament to our growth and ambition.
              </p>

              <p className="border-l-4 border-amber-300 pl-4 sm:pl-6 italic bg-purple-900/20 py-3 sm:py-4 rounded text-xs sm:text-sm md:text-base">
                &alquot;More than just a football club, Salami FC is a family, a movement and a symbol of what passion and perseverance can achieve. We don&apos;t just play football—we inspire generations.&alquot;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-5xl mx-auto bg-gradient-to-r from-purple-900/40 via-amber-300/10 to-purple-900/40 border border-amber-300/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-300 mb-4 sm:mb-6">
            Our Vision
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
            To be the most respected and successful football club in Africa, known for developing 
            world-class talent, entertaining fans with attacking football, and making a positive 
            impact in our community.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {["Excellence", "Innovation", "Community", "Integrity"].map((item, i) => (
              <span
                key={i}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-purple-700/50 rounded-full border border-purple-500/30 text-xs sm:text-sm font-semibold text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </section>
         {/* Technical Staff Section */}
      <section className="w-full py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex justify-center items-center mb-4">
              <Shield className="w-8 h-8 text-amber-300" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              Technical Coaches
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-2">
              The dedicated team driving our performance and player development.
            </p>
          </motion.div>

          {/* Staff Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {technicalStaff.map((member, idx) => (
              <motion.div
                key={member.id}
                className="group bg-gradient-to-br from-purple-950/60 to-black border border-purple-700/30 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-amber-300/50 transition-all duration-500 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Image Container */}
                <div className="relative w-full aspect-square overflow-hidden bg-purple-900/30">
                  <div className="w-full h-full bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center">
                    <Shield className="w-16 h-16 text-amber-300/30" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors line-clamp-2">
                    {member.name}
                  </h3>
                  <p className="text-amber-300 font-semibold text-xs sm:text-sm">
                    {member.position}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}