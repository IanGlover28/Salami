'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, CheckCircle, Clock, Users, Shield, Trophy, Star, TrendingUp, Target } from "lucide-react";

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
        scorers: { name: string; time: string; number: number }[];
        attendance: number;
        manOfMatch?: {
            name: string;
            position: string;
            number: number;
            performance: string;
        };
        stats?: {
            possession: string;
            shotsOnTarget: string;
            corners: string;
            passes: string;
        };
    };
}

const allMatches: Match[] = [
    {
        id: 1,
        status: "upcoming",
        opponent: "Phoenix United",
        opponentLogo: "/olympics.png",
        date: "Sat, Oct 26",
        time: "3:00 PM GMT",
        location: "Home Stadium",
        competition: "Division 3 League Cup Round 3",
    },
    {
        id: 2,
        status: "upcoming",
        opponent: "Vanguard FC",
        opponentLogo: "/olympics.png",
        date: "Sun, Nov 3",
        time: "7:45 PM GMT",
        location: "Vanguard Arena",
        competition: "Division 3 League Cup",
    },
    {
        id: 3,
        status: "completed",
        opponent: "Olympus City",
        opponentLogo:"/olympics.png",
        date: "Sat, Oct 19",
        time: "Full Time",
        location: "Olympus Stadium",
        competition: "Division 3 League Match",
        result: {
            ourScore: 2,
            opponentScore: 1,
            scorers: [
                { name: "O. Stephen", time: "25'", number: 9 },
                { name: "L. Amoani", time: "68'", number: 7 }
            ],
            attendance: 35400,
            manOfMatch: {
                name: "O. Stephen",
                position: "Striker",
                number: 9,
                performance: "Outstanding performance with 2 assists and crucial defensive contributions"
            },
            stats: {
                possession: "58% - 42%",
                shotsOnTarget: "8 - 5",
                corners: "7 - 3",
                passes: "587 - 392"
            }
        },
    },
    {
        id: 4,
        status: "completed",
        opponent: "Thunderbolts",
        opponentLogo: "/olympics.png",
        date: "Sun, Oct 13",
        time: "Full Time",
        location: "Home Stadium",
        competition: "Division 3 League Cup",
        result: {
            ourScore: 0,
            opponentScore: 0,
            scorers: [],
            attendance: 42100,
            stats: {
                possession: "52% - 48%",
                shotsOnTarget: "4 - 4",
                corners: "5 - 6",
                passes: "512 - 489"
            }
        },
    },
    {
        id: 5,
        status: "completed",
        opponent: "Crimson Waves",
        opponentLogo:"/olympics.png",
        date: "Wed, Oct 9",
        time: "Full Time",
        location: "Crimson Field",
        competition: "Division 3 League Match",
        result: {
            ourScore: 1,
            opponentScore: 3,
            scorers: [{ name: "E. Williams", time: "10'", number: 11 }],
            attendance: 29500,
            stats: {
                possession: "45% - 55%",
                shotsOnTarget: "3 - 9",
                corners: "4 - 8",
                passes: "423 - 567"
            }
        },
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
    { number: 2, name: "T. Desmond", position: "Goalkeeper", isStarter: false },
    { number: 14, name: "J. Emma", position: "Midfielder", isStarter: false },
    { number: 21, name: "C. Joshua", position: "Defender", isStarter: false },
    { number: 27, name: "V. Eugene", position: "Forward", isStarter: false },
];

const MatchCard = ({ match, index }: { match: Match; index: number }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isUpcoming = match.status === "upcoming";
    const isWin = match.result && match.result.ourScore > match.result.opponentScore;
    const isLoss = match.result && match.result.ourScore < match.result.opponentScore;


    const cardBg = isUpcoming
        ? "bg-gradient-to-br from-purple-900/40 to-purple-950/40 border-purple-500/50"
        : isWin
        ? "bg-gradient-to-br from-purple-900/30 to-purple-950/30 border-purple-500/50"
        : isLoss
        ? "bg-gradient-to-br from-purple-900/30 to-purple-950/30 border-purple-500/50"
        : "bg-gradient-to-br from-purple-900/30 to-purple-950/30 border-purple-500/50";

    const resultColor = isWin ? "text-green-400" : isLoss ? "text-red-400" : "text-yellow-400";
    const accentColor = isUpcoming ? "text-purple-400" : isWin ? "text-green-400" : "text-gray-400";

    return (
        <motion.div
            className={`${cardBg} border rounded-2xl overflow-hidden transition-all duration-500`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
        >
            {/* Card Header */}
            <div className="p-6 border-b border-gray-700/50">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 flex items-center">
                        <Trophy className="w-3 h-3 mr-1" /> {match.competition}
                    </span>
                    {!isUpcoming && match.result ? (
                        <span className={`text-2xl font-extrabold ${resultColor}`}>
                            {match.result.ourScore} - {match.result.opponentScore}
                        </span>
                    ) : (
                        <span className="text-xs font-bold bg-purple-600 px-3 py-1 rounded-full">UPCOMING</span>
                    )}
                </div>

              {/* Teams */}
<div className="flex items-center justify-between my-6">
    <div className="flex flex-col items-center flex-1">
        <Image
            src="/salami.png"
            alt="Salami FC Logo"
            width={64}
            height={64}
            className="rounded-full object-cover bg-white p-1 shadow-md mb-2"
        />
        <p className="text-sm font-bold text-white">SALAMI FC</p>
    </div>

    <span className="text-xl font-bold text-gray-500 mx-4">VS</span>

    <div className="flex flex-col items-center flex-1">
        <Image
            src={match.opponentLogo}
            alt={match.opponent}
            width={64}
            height={64}
            className="rounded-full object-cover bg-white p-1 shadow-md mb-2"
        />
        <p className="text-sm font-bold text-center">{match.opponent}</p>
    </div>
</div>

                {/* Match Info */}
                <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-300">
                        <Calendar className={`w-4 h-4 mr-2 ${accentColor}`} />
                        <span>{match.date}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                        <Clock className={`w-4 h-4 mr-2 ${accentColor}`} />
                        <span>{match.time}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                        <MapPin className={`w-4 h-4 mr-2 ${accentColor}`} />
                        <span>{match.location}</span>
                    </div>
                </div>
            </div>

            {/* Expandable Details */}
            {!isUpcoming && match.result && (
                <>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="w-full p-4 bg-gray-800/50 hover:bg-gray-800/70 transition-colors text-sm font-semibold text-gray-300 flex items-center justify-center gap-2"
                    >
                        {isExpanded ? "Hide Details" : "View Full Details"}
                        <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                    </button>

                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="p-6 space-y-6 bg-gray-900/50"
                        >
                            {/* Goal Scorers */}
                            {match.result.scorers.length > 0 && (
                                <div>
                                    <h4 className="font-bold text-white mb-3 flex items-center">
                                        <TrendingUp className="w-4 h-4 mr-2 text-purple-400" /> Goal Scorers
                                    </h4>
                                    <div className="space-y-2">
                                        {match.result.scorers.map((scorer, idx) => (
                                            <div key={idx} className="flex items-center justify-between bg-gray-800 p-3 rounded-lg">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">
                                                        {scorer.number}
                                                    </div>
                                                    <span className="text-white font-semibold">{scorer.name}</span>
                                                </div>
                                                <span className="text-amber-300 font-bold">{scorer.time}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Match Stats */}
                            {match.result.stats && (
                                <div>
                                    <h4 className="font-bold text-white mb-3 flex items-center">
                                        <Target className="w-4 h-4 mr-2 text-purple-400" /> Match Statistics
                                    </h4>
                                    <div className="grid grid-cols-2 gap-3">
                                        {Object.entries(match.result.stats).map(([key, value]) => (
                                            <div key={key} className="bg-purple-900/30 rounded-lg p-3 text-center border border-purple-700/30">
                                                <p className="text-xs text-gray-400 capitalize mb-1">
                                                    {key.replace(/([A-Z])/g, " $1")}
                                                </p>
                                                <p className="text-sm font-bold text-amber-300">{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Man of the Match */}
                            {match.result.manOfMatch && (
                                <div className="bg-gradient-to-r from-yellow-900/40 to-amber-900/40 border border-yellow-500/50 rounded-xl p-4">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Star className="w-5 h-5 text-yellow-400" />
                                        <h4 className="text-base font-bold text-yellow-300">Player of the Match</h4>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-yellow-500 text-gray-900 font-bold text-lg flex items-center justify-center">
                                            {match.result.manOfMatch.number}
                                        </div>
                                        <div>
                                            <p className="font-bold text-white">{match.result.manOfMatch.name}</p>
                                            <p className="text-sm text-gray-300">{match.result.manOfMatch.position}</p>
                                            <p className="text-xs text-yellow-300 mt-1">{match.result.manOfMatch.performance}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Attendance */}
                            <div className="flex items-center justify-between bg-purple-600/20 p-3 rounded-lg border border-purple-500/30">
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-purple-400" />
                                    <span className="text-gray-300">Attendance</span>
                                </div>
                                <span className="font-bold text-white">{match.result.attendance.toLocaleString()} Fans</span>
                            </div>
                        </motion.div>
                    )}
                </>
            )}

            {/* Upcoming Match CTA */}
            {isUpcoming && (
                <div className="p-6 bg-gray-900/50">
                    <p className="text-sm text-gray-300 mb-4">
                        Get ready for a crucial fixture! Tickets are available now.
                    </p>
                    <motion.button
                        className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Buy Tickets Now <ArrowRight className="w-4 h-4" />
                    </motion.button>
                </div>
            )}
        </motion.div>
    );
};

const RosterList = ({ roster }: { roster: Player[] }) => (
    <motion.div
        className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 md:p-10 rounded-2xl shadow-2xl border-t-4 border-purple-600"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
    >
        <h3 className="text-3xl font-extrabold mb-8 text-center text-white flex items-center justify-center">
            <Users className="w-7 h-7 mr-3 text-green-400" /> The Squad
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {roster.map((player, index) => (
                <motion.div
                    key={player.number}
                    className="p-3 bg-gray-800 rounded-xl flex flex-col items-center text-center space-y-2 border border-gray-700 hover:bg-gray-700/50 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div
                        className={`w-12 h-12 flex items-center justify-center rounded-full text-lg font-extrabold ${
                            player.isStarter ? "bg-yellow-500 text-gray-900" : "bg-gray-600 text-white"
                        }`}
                    >
                        {player.number}
                    </div>
                    <p className="font-bold text-sm leading-tight text-white">{player.name}</p>
                    <p className="text-xs text-gray-400">{player.position}</p>
                </motion.div>
            ))}
        </div>
    </motion.div>
);

export default function FixturesClient() {
    const upcomingMatches = allMatches.filter((m) => m.status === "upcoming");
    const previousMatches = allMatches.filter((m) => m.status === "completed");

    return (
        <motion.main
            className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white px-4 sm:px-6 lg:px-8 py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Hero Section */}
            <motion.div
                className="text-center mb-16 md:mb-20 pt-10"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-amber-400 to-red-500 mb-4">
                    SALAMI FC MATCH HUB
                </h1>
                <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
                    Stay up-to-date with all our upcoming fixtures, past results, and the full squad roster.
                </p>
            </motion.div>

            {/* Upcoming Matches */}
            <motion.section
                className="mb-16 md:mb-24 max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-10 flex items-center justify-center text-purple-400">
                    <Shield className="w-6 h-6 md:w-7 md:h-7 mr-3" /> Upcoming Fixtures
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {upcomingMatches.map((match, index) => (
                        <MatchCard key={match.id} match={match} index={index} />
                    ))}
                </div>
                {upcomingMatches.length === 0 && (
                    <p className="text-center text-gray-400 text-lg p-10 bg-gray-800 rounded-xl">
                        No upcoming matches scheduled at this time. Check back soon!
                    </p>
                )}
            </motion.section>

            <hr className="border-gray-800 w-1/3 mx-auto mb-16 md:mb-24" />

            {/* Previous Matches */}
            <motion.section
                className="mb-16 md:mb-24 max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-10 flex items-center justify-center text-gray-400">
                    <CheckCircle className="w-6 h-6 md:w-7 md:h-7 mr-3 text-gray-500" /> Past Results
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {previousMatches.map((match, index) => (
                        <MatchCard key={match.id} match={match} index={index} />
                    ))}
                </div>
            </motion.section>

            <hr className="border-gray-800 w-1/3 mx-auto mb-16 md:mb-24" />

            {/* Player Roster */}
            <motion.section
                className="mb-16 md:mb-24 max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <RosterList roster={teamRoster} />
            </motion.section>
        </motion.main>
    );
}