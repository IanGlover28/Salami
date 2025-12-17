import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { MapPin, Clock, ArrowRight } from "lucide-react";

const matchData = {
  lastMatch: {
    competition: "ANDFA D3 League",
    location: "DARKUMAN OKWAHU PARK",
    date: "13 DEC 2025",
    time: "3:00 PM",
    ourTeamName: "Jinx Breakers",
    ourTeamLogo: "/jinx.png",
    opponentName: "Salami Rangers FC",
    opponentLogo: "/salami.png",
    score: "3 - 2",
    reportTitle: "MATCH REPORT: SALAMI RANGERS FC 2-3 JINX BREAKERS",
    reportSummary:
      "JINX BREAKERS won 3-2 against SALAMI RANGERS FC this afternoon as the ANDFA D3 league this afternoon at the Darkuman Okwahu Park.",
    reportDate: "13 DEC 25",
    possession: "N/A",
    shotsOnTarget: "N/A",
    corners: "N/A",
  },
  nextMatch: {
    competition: "ANDFA D3 League",
    location: "Darkuman Okwahu Park",
    date: "21 DEC 2025",
    time: "2:00 PM GMT",
    ourTeamName: "Salami Rangers FC",
    ourTeamLogo: "/salami.png",
    opponentName: "Corinthians FC",
    opponentLogo: "/corinthians.png",
    reportTitle: "UPCOMING: Salami Rangers FC vs Corinthians FC",
    reportSummary:
      "A crucial League Cup fixture as we aim to progress to the next round. Corinthians Football Club comes as formidable opponents.",
    reportDate: "Coming Up Soon",
  },
};

export default function MatchHeroSection() {
  const [activeTab, setActiveTab] = useState<"LAST MATCH" | "NEXT MATCH">("LAST MATCH");

  const currentMatch = activeTab === "LAST MATCH" ? matchData.lastMatch : matchData.nextMatch;
  const isLastMatch = activeTab === "LAST MATCH";

  const MatchDetailsCard = () => (
    <motion.div
      className="w-full h-full bg-white text-gray-900 shadow-2xl rounded-lg overflow-hidden flex flex-col"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      key={activeTab}
    >
      {/* Tab Navigation */}
      <div className="flex w-full border-b border-gray-200 flex-shrink-0">
        <button
          className={`flex-1 px-4 py-4 text-sm font-bold tracking-wider transition-all ${
            activeTab === "LAST MATCH"
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("LAST MATCH")}
        >
          LAST MATCH
        </button>
        <button
          className={`flex-1 px-4 py-4 text-sm font-bold tracking-wider transition-all ${
            activeTab === "NEXT MATCH"
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("NEXT MATCH")}
        >
          NEXT MATCH
        </button>
      </div>

      {/* Match Details Content */}
      <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
        {/* Competition */}
        <p className="text-base font-semibold text-gray-900">
          {currentMatch.competition}
        </p>

        {/* Location and Time */}
        <div className="space-y-3">
          <div className="flex items-center text-sm text-gray-700 font-medium gap-2">
            <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
            <span className="font-semibold">{currentMatch.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-700 font-medium gap-2">
            <Clock className="w-5 h-5 text-red-600 flex-shrink-0" />
            <span className="font-semibold ">
              {currentMatch.date} at {currentMatch.time}
            </span>
          </div>
        </div>

        {/* Scoreboard */}
        <div className="flex items-center justify-between px-2 sm:px-8 py-6 border-y border-gray-300 bg-gray-50 rounded-lg my-4">
          {/* Team 1 */}
          <div className="flex flex-col items-center space-y-2">
            <Image
              src={currentMatch.ourTeamLogo}
              alt={currentMatch.ourTeamName}
              width={60}
              height={60}
              className="rounded-full object-cover bg-white p-1 shadow-md"
            />
            <span className="font-bold text-sm text-center text-gray-700">
              {currentMatch.ourTeamName}
            </span>
          </div>

          {/* Score */}
          <div className="flex flex-col items-center">
            {isLastMatch ? (
              <>
                <span className="text-1xl font-extrabold text-gray-900 leading-none">
                  {matchData.lastMatch.score}
                </span>
                <span className="text-xs text-gray-500 mt-2">FINAL</span>
              </>
            ) : (
              <span className="text-2xl font-extrabold text-purple-600 leading-none">
                VS
              </span>
            )}
          </div>

          {/* Team 2 */}
          <div className="flex flex-col items-center space-y-2">
            <Image
              src={currentMatch.opponentLogo}
              alt={currentMatch.opponentName}
              width={60}
              height={60}
              className="rounded-full object-cover bg-white p-1 shadow-md"
            />
            <span className="font-bold text-sm text-center text-gray-700">
              {currentMatch.opponentName}
            </span>
          </div>
        </div>

        {/* Additional Match Info - Only for Last Match */}
        {isLastMatch && (
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Possession</span>
              <span className="font-semibold text-gray-900">{matchData.lastMatch.possession}</span>
            </div>
            <div className="flex justify-between">
              <span>Shots on Target</span>
              <span className="font-semibold text-gray-900">{matchData.lastMatch.shotsOnTarget}</span>
            </div>
            <div className="flex justify-between">
              <span>Corners</span>
              <span className="font-semibold text-gray-900">{matchData.lastMatch.corners}</span>
            </div>
          </div>
        )}

        {/* Preview for Next Match */}
        {!isLastMatch && (
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              Get ready for this crucial fixture! Follow our social media for the latest team news and updates.
            </p>
          </div>
        )}
      </div>

      {/* Tickets Button */}
      
      <button className="w-full bg-gray-900 hover:bg-black text-white px-6 py-4 font-extrabold text-sm tracking-widest transition-colors flex-shrink-0">
        {isLastMatch ? "VIEW FULL STORY" : "GET TICKETS"}
      </button>
    </motion.div>
  );

  const MatchReportContent = () => (
    <div className="relative z-10 pr-0 md:pr-8 text-white flex flex-col h-full justify-end">
      {/* Divider and Header */}
      <div className="flex items-start mb-8 md:mb-12">
        <div className="w-2 bg-purple-400 h-20 mr-6 flex-shrink-0"></div>
        <div className="flex flex-col">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-wide leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            key={activeTab}
          >
            {currentMatch.reportTitle}
          </motion.h2>
          {/* Summary */}
          <motion.p
            className="max-w-2xl text-gray-100 mb-8 font-extrabold text-base md:text-lg leading-relaxed mt-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            key={`${activeTab}-summary`}
          >
            {currentMatch.reportSummary}
          </motion.p >
          <span className="text-xs mt-3 font-extrabold opacity-70">{currentMatch.reportDate}</span>
        </div>
      </div>

      {/* Read More Link */}
      <motion.a
        href="/fixtures"
        className="inline-flex items-center mb-2 text-purple-400 font-bold hover:text-purple-300 transition-colors text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {isLastMatch ? "READ MORE" : "VIEW FIXTURE DETAILS"} <ArrowRight className="w-5 h-5 ml-3" />
      </motion.a>
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden mb-12 md:mb-24">
      {/* Background */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-x-0 bottom-0 h-full md:h-2/3 bg-amber-400"> <Image
          src="/hero-bgg.jpg"
          alt="Stadium Background"
          fill
          className="object-cover"
          priority
        /></div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* LEFT COLUMN: Match Report (2/3 width on large screens) */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <MatchReportContent />
          </div>

          {/* RIGHT COLUMN: Match Details Card (1/3 width, tall, pushed right) */}
          <div className="lg:col-span-1 min-h-[500px] md:min-h-[600px]">
            <MatchDetailsCard />
          </div>
        </div>
      </div>
    </section>
  );
}