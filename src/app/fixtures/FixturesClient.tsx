"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Calendar, MapPin, CheckCircle, Clock, Users } from "lucide-react";


interface Player {
    number: number;
    name: string;
    position: string;
    isStarter: boolean;
}

interface Match {
    id: number;
    status: "upcoming" | "completed";
    opponent: string;
    opponentLogo: string;
    date: string;
    time: string;
    location: string;
    competition: string;
    result?: {
        ourScore: number;
        opponentScore: number;
    };
}


const imageFixtures = [
    { id: 101, image: "/fixtures/match1.jpeg" },
    { id: 102, image: "/fixtures/match2.jpeg" },
    { id: 103, image: "/fixtures/match3.jpeg" },
    { id: 104, image: "/fixtures/match5.jpeg" },
    { id: 105, image: "/fixtures/match6.jpeg" },
];

const allMatches: Match[] = [
    // --- Upcoming Matches ---
    {
        id: 1,
        status: "upcoming",
        opponent: "Phoenix United",
        opponentLogo: "/olympics.png", 
        date: "Sat, Oct 26",
        time: "3:00 PM GMT",
        location: "Home Stadium",
        competition: "League Cup Round 3",
    },
    {
        id: 2,
        status: "upcoming",
        opponent: "Vanguard FC",
        opponentLogo: "/vanguard.png",
        date: "Sun, Nov 3",
        time: "7:45 PM GMT",
        location: "Vanguard Arena",
        competition: "National Super League",
    },
    // --- Previous Matches (Completed) ---
    {
        id: 3,
        status: "completed",
        opponent: "Olympus City",
        opponentLogo: "/olympus.png",
        date: "Sat, Oct 19",
        time: "W 2-1",
        location: "Olympus Stadium",
        competition: "National Super League",
        result: { ourScore: 2, opponentScore: 1 },
    },
    {
        id: 4,
        status: "completed",
        opponent: "Thunderbolts",
        opponentLogo: "/thunder.png",
        date: "Sun, Oct 13",
        time: "D 0-0",
        location: "Home Stadium",
        competition: "League Cup Round 2",
        result: { ourScore: 0, opponentScore: 0 },
    },
    {
        id: 5,
        status: "completed",
        opponent: "Crimson Waves",
        opponentLogo: "/crimson.png", 
        date: "Wed, Oct 9",
        time: "L 1-3",
        location: "Crimson Field",
        competition: "National Super League",
        result: { ourScore: 1, opponentScore: 3 },
    },
];

const teamRoster: Player[] = [
    { number: 1, name: "J. Sammy", position: "Goalkeeper", isStarter: true },
    { number: 5, name: "K. Yeboah", position: "Left Back", isStarter: true },
    { number: 4, name: "T. Addo", position: "Center Back", isStarter: true },
    { number: 12, name: "S. Okine", position: "Center Back", isStarter: true },
    { number: 3, name: "B. Ezekiel", position: "Right Back", isStarter: true },
    { number: 8, name: "M. Frimpong", position: "Midfielder (CM)", isStarter: true },
    { number: 18, name: "R. Nii", position: "Midfielder (CM)", isStarter: true },
    { number: 11, name: "E. Williams", position: "Winger (LW)", isStarter: true },
    { number: 7, name: "L. Amoani", position: "Winger (RW)", isStarter: true },
    { number: 9, name: "O. Stephen", position: "Striker (ST)", isStarter: true },
    { number: 17, name: "P. Osei", position: "Striker (ST)", isStarter: true },
    // Substitutes/Other Players
    { number: 2, name: "T. Desmond", position: "Goalkeeper", isStarter: false },
    { number: 14, name: "J. Emma", position: "Midfielder", isStarter: false },
    { number: 21, name: "C. Joshua", position: "Defender", isStarter: false },
    { number: 27, name: "V. Eugene", position: "Forward", isStarter: false },
];

// --- Helper Components ---

// ⚽ Match Card Component (Kept the same)
const MatchCard = ({ match, index }: { match: Match, index: number }) => {
    const isUpcoming = match.status === "upcoming";
    const resultText = match.result
        ? `${match.result.ourScore} - ${match.result.opponentScore}`
        : "";
    const isWin = match.result && match.result.ourScore > match.result.opponentScore;
    const isLoss = match.result && match.result.ourScore < match.result.opponentScore;
    // ... rest of MatchCard logic remains the same
    
    const matchClass = isUpcoming
        ? "border-purple-500 bg-gray-800 hover:bg-gray-700/50" // Upcoming
        : isWin
            ? "border-green-500 bg-green-900/10" // Win
            : isLoss
                ? "border-red-500 bg-red-900/10" // Loss
                : "border-yellow-500 bg-yellow-900/10"; // Draw

    return (
        <motion.div
            className={`p-6 rounded-xl border-t-4 shadow-xl transition-all duration-300 ${matchClass}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${isUpcoming ? 'bg-purple-600/70 text-white' : 'bg-gray-700 text-gray-300'}`}>
                    {match.competition}
                </span>
                {!isUpcoming && (
                    <span className={`text-2xl font-bold tracking-tighter ${isWin ? 'text-green-400' : isLoss ? 'text-red-400' : 'text-yellow-400'}`}>
                        {resultText}
                    </span>
                )}
            </div>

            <div className="flex items-center space-x-4 mb-6">
                {/* Our Team */}
                <div className="flex flex-col items-center flex-1">
                    <Image
                        src="/salami.png" // Replace with your team logo path
                        alt="Our Team"
                        width={50}
                        height={50}
                        className="rounded-full object-cover bg-white p-1"
                    />
                    <p className="mt-2 text-sm font-bold">Salami FC</p>
                </div>
                
                <span className="text-xl font-bold text-gray-400">VS</span>

                {/* Opponent Team */}
                <div className="flex flex-col items-center flex-1">
                    <Image
                        src={match.opponentLogo || '/logos/default.png'}
                        alt={match.opponent}
                        width={50}
                        height={50}
                        className="rounded-full object-cover bg-white p-1"
                    />
                    <p className="mt-2 text-sm font-bold text-center">{match.opponent}</p>
                </div>
            </div>

            <div className="space-y-2 text-sm border-t border-gray-700 pt-4">
                <div className="flex items-center text-gray-300">
                    <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                    <span>{match.date}</span>
                </div>
                <div className="flex items-center text-gray-300">
                    {isUpcoming ? <Clock className="w-4 h-4 mr-2 text-purple-400" /> : <CheckCircle className="w-4 h-4 mr-2 text-gray-400" />}
                    <span>{isUpcoming ? match.time : 'Full Time'}</span>
                </div>
                <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                    <span>{match.location}</span>
                </div>
                {isUpcoming && (
                    <motion.button 
                        className="mt-4 w-full flex items-center justify-center p-2 text-sm font-semibold bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Get Tickets <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
};

// 📋 Roster List Component (Kept the same)
const RosterList = ({ roster }: { roster: Player[] }) => (
    <motion.div
        className="bg-gray-800/70 p-4 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-gray-700 mt-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
    >
        <h3 className="text-2xl sm:text-3xl font-heading mb-6 text-center text-white border-b border-gray-700 pb-3 flex items-center justify-center">
            <Users className="w-6 h-6 mr-2 text-green-400" /> Full Squad Roster
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {roster.map((player, index) => (
                <motion.div
                    key={player.number}
                    className="p-3 bg-gray-900 rounded-lg flex items-center space-x-3 border-l-4 border-purple-500"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold ${player.isStarter ? 'bg-yellow-500 text-gray-900' : 'bg-gray-600 text-white'}`}>
                        {player.number}
                    </div>
                    <div>
                        <p className="font-semibold text-sm leading-none">{player.name}</p>
                        <p className="text-xs text-gray-400">{player.position}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </motion.div>
);


// --- Main Client Component ---

export default function FixturesClient() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const upcomingMatches = allMatches.filter(m => m.status === 'upcoming');
    const previousMatches = allMatches.filter(m => m.status === 'completed');

    return (
        <motion.main
            className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white px-4 md:px-12 lg:px-20 py-16"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            
        

            {/* --- Upcoming Matches Section --- */}
            <motion.section
                className="mb-20 md:mb-28 mt-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-heading text-center mb-10 border-b-2 border-purple-500 pb-3 inline-block mx-auto">
                    Upcoming Matches 🗓️
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {upcomingMatches.map((match, index) => (
                        <MatchCard key={match.id} match={match} index={index} />
                    ))}
                </div>
                {upcomingMatches.length === 0 && (
                    <p className="text-center text-gray-400 text-lg p-10 bg-gray-800/50 rounded-xl">
                        No upcoming matches scheduled at this time. Check back soon!
                    </p>
                )}
            </motion.section>
            
            {/* --- Player Roster Section --- */}
            <motion.section
                className="mb-20 md:mb-28"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
            >
                <RosterList roster={teamRoster} />
            </motion.section>

            {/* --- Previous Matches Section --- */}
            <motion.section
                className="mb-20 md:mb-28"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-heading text-center mb-10 border-b-2 border-gray-500 pb-3 inline-block mx-auto">
                    Previous Match Results 🏆
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {previousMatches.map((match, index) => (
                        <MatchCard key={match.id} match={match} index={index} />
                    ))}
                </div>
            </motion.section>

            {/* --- Image Grid (Restored Initial View) --- */}
            <motion.section 
                className="mb-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-heading text-center mb-10 border-b-2 border-purple-500 pb-3 inline-block mx-auto">
                    Matchday Highlights Gallery 📸
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {imageFixtures.map((fixture, index) => (
                        <motion.div
                            key={fixture.id}
                            className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <Image
                                src={fixture.image}
                                alt={`Match Highlight ${fixture.id}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                            {/* Optional dark overlay for text contrast (if needed) */}
                            <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition duration-300"></div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
            
        </motion.main>
    );
}