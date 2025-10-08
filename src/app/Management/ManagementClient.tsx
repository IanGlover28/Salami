// src/app/Management/ManagementClient.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy, Users, Target } from "lucide-react";

const managementTeam = [
  {
    id: 1,
    name: "Mr Isaac Walker",
    position: "Club President & Chairman",
    image: "/Ceo.PNG",
    achievements: [
      "Led club to 3 consecutive league titles",
      "Established Salami FC Academy",
      "Secured $5M in infrastructure investment"
    ],
    joinedYear: 2018
  },
  {
    id: 2,
    name: "Staff",
    position: "Chief Executive Officer",
    image: "/staff2.jpeg",
    achievements: [
      "200% increase in commercial revenue",
      "Secured 5 major sponsorship deals",
      "Expanded international brand presence"
    ],
    joinedYear: 2019
  },
  {
    id: 3,
    name: "Staff",
    position: "Technical Director",
    image: "/staff5.jpeg",
    achievements: [
      "Developed 12 players for national team",
      "Implemented data-driven scouting system",
      "Won Coach of the Year 2023"
    ],
    joinedYear: 2020
  },
  {
    id: 4,
    name: "Staff",
    position: "Director of Operations",
    image: "/staff1.png",
    achievements: [
      "Modernized stadium facilities",
      "Achieved FIFA stadium certification",
      "Improved fan satisfaction by 85%"
    ],
    joinedYear: 2019
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
      {/* Hero Section */}

          {/* Management Grid */}
<section className="py-16 px-4 pt-24">
  <div className="max-w-7xl mx-auto">
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-white mb-4">
        Executive Management
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Our experienced leadership team combines passion for football with business excellence
      </p>
    </motion.div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {managementTeam.map((member, idx) => (
        <motion.div
          key={member.id}
          className="group bg-gradient-to-br from-purple-950/60 to-black border border-purple-700/30 rounded-3xl overflow-hidden hover:border-amber-300/50 transition-all duration-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 + idx * 0.1 }}
          whileHover={{ y: -8 }}
        >
          {/* ✅ Replace Placeholder with Actual Image */}
          <div className="relative h-80 overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-contain transition-transform duration-700 group-hover:scale-110"
              priority={idx === 0} // Optimizes loading for the first image
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          </div>

          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-amber-300 font-semibold">{member.position}</p>
                <p className="text-gray-500 text-sm mt-1">Joined {member.joinedYear}</p>
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-6">
              <h4 className="text-sm font-bold text-amber-300 mb-3 uppercase tracking-wider">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {member.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-400">
                    <span className="text-amber-300 mr-2">✓</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

           
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
    
      {/* Stats Section */}
      <section className="py-8 md:py-12 px-4 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-purple-900/40 to-amber-300/10 border border-amber-300/20 rounded-xl md:rounded-2xl p-6 md:p-8 text-center backdrop-blur-sm"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + idx * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(251, 191, 36, 0.5)" }}
            >
              <stat.icon className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-amber-300" />
              <div className="text-3xl md:text-4xl font-bold text-amber-300 mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* History Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-purple-950/80 to-black border border-amber-300/30 rounded-2xl md:rounded-3xl p-6 md:p-12 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex items-center justify-center mb-6 md:mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-300 px-4 md:px-6">Our Story</h2>
              <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent flex-1"></div>
            </div>
            
            <div className="space-y-4 md:space-y-6 text-gray-300 leading-relaxed">
              <p className="text-base md:text-lg">
                Founded in <span className="text-amber-300 font-bold">1975</span> by a group of passionate football enthusiasts in the heart of Accra, <span className="text-amber-300 font-semibold">Salami Football Club</span> began as a modest community team with big dreams. What started in dusty neighborhood pitches has evolved into one of Ghana&apos;s most celebrated football institutions.
              </p>
              
              <p className="text-base md:text-lg">
                The club&apos;s name, &quot;Salami,&quot; was inspired by the founder&apos;s vision of creating a team that would be as essential and beloved as the popular delicacy—bringing people together across all backgrounds. This philosophy of unity and excellence has remained at the core of our identity for nearly five decades.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 my-6 md:my-8">
                <div className="bg-purple-900/30 rounded-xl p-4 md:p-6 border border-purple-700/30">
                  <div className="text-amber-300 font-bold text-lg md:text-xl mb-2">1975-1985</div>
                  <p className="text-sm md:text-base text-gray-400">The Foundation Years - Building from grassroots, establishing club culture and local fanbase</p>
                </div>
                <div className="bg-purple-900/30 rounded-xl p-4 md:p-6 border border-purple-700/30">
                  <div className="text-amber-300 font-bold text-lg md:text-xl mb-2">1986-2000</div>
                  <p className="text-sm md:text-base text-gray-400">Rise to Prominence - First league title in 1992, establishing youth academy</p>
                </div>
                <div className="bg-purple-900/30 rounded-xl p-4 md:p-6 border border-purple-700/30">
                  <div className="text-amber-300 font-bold text-lg md:text-xl mb-2">2001-2015</div>
                  <p className="text-sm md:text-base text-gray-400">Golden Era - Multiple championships, continental competitions, stadium renovation</p>
                </div>
                <div className="bg-purple-900/30 rounded-xl p-4 md:p-6 border border-purple-700/30">
                  <div className="text-amber-300 font-bold text-lg md:text-xl mb-2">2016-Present</div>
                  <p className="text-sm md:text-base text-gray-400">Modern Excellence - Digital innovation, global partnerships, community programs</p>
                </div>
              </div>
              
              <p className="text-base md:text-lg">
                Throughout our journey, Salami FC has won <span className="text-amber-300 font-bold">15 major titles</span>, produced <span className="text-amber-300 font-bold">over 50 national team players</span>, and touched the lives of thousands through our community programs. Our state-of-the-art <span className="text-amber-300 font-semibold">Salami Stadium</span>, inaugurated in 2010, stands as a testament to our growth and ambition.
              </p>
              
              <p className="text-base md:text-lg border-l-4 border-amber-300 pl-4 md:pl-6 italic bg-purple-900/20 py-3 md:py-4 rounded">
                &quot;More than just a football club, Salami FC is a family, a movement, and a symbol of what passion and perseverance can achieve. We don&apos;t just play football—we inspire generations.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </section>




      {/* Vision Statement */}
      <section className="py-16 px-4">
        <motion.div
          className="max-w-5xl mx-auto bg-gradient-to-r from-purple-900/40 via-amber-300/10 to-purple-900/40 border border-amber-300/30 rounded-3xl p-12 text-center backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-amber-300 mb-6">Our Vision</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            To be the most respected and successful football club in Africa, known for developing 
            world-class talent, entertaining fans with attacking football, and making a positive 
            impact in our community.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
            <span className="px-6 py-3 bg-purple-700/50 rounded-full border border-purple-500/30">
              Excellence
            </span>
            <span className="px-6 py-3 bg-purple-700/50 rounded-full border border-purple-500/30">
              Innovation
            </span>
            <span className="px-6 py-3 bg-purple-700/50 rounded-full border border-purple-500/30">
              Community
            </span>
            <span className="px-6 py-3 bg-purple-700/50 rounded-full border border-purple-500/30">
              Integrity
            </span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}