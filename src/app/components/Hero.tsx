"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";


type NewsItem = {
  id: number;
  title: string;
  video: string;
  poster: string;
  timeAgo: string;
  date: string;
  category: string;
};


const newsFeed: NewsItem[] = [
  // {
  //   id: 1,
  //   title: "REACTION: IMPRESSIVE GOOAL FROM SAMMY",
  //   video: "/videos/match00.mp4",
  //   poster: "/match00.png",
  //   timeAgo: "10 hours ago", 
  //   date: "19/10/2025",
  //   category: "MATCH REACTION",
  // },
  {
    id: 2,
    title: "MEDIA: SALAMI FC's MEDIA TEAM INTERVIEW",
    video: "/videos/news00.mp4",
    poster: "/staff6.jpeg",
    timeAgo: "1 day ago",
    date: "9/02/2025",
    category: "MEDIA INTERVIEW",
  },
  {
    id: 3,
    title: "TRAINING: SALAMI FC TRAINING SESSION HIGHLIGHTS",
    video: "/ad.mp4",
    poster: "/team/team2.jpeg", 
    timeAgo: "3 days ago",
    date: "29/05/2025",
    category: "TRAINING SESSION",
  },
  {
    id: 4,
    title: "THE HISTORY OF SALAMI FC",
    video: "/ad.mp4",
    poster: "/team/team10.jpeg", 
    timeAgo: "5 days ago",
    date: "18/10/2025",
    category: "HISTORY",
  },
  {
    id: 5,
    title: "NEXT MATCH PREVIEW: SEMI-FINALS",
    video: "/videos/news00.mp4",
    poster: "/staff6.jpeg", 
    timeAgo: "1 week ago",
    date: "17/10/2025",
    category: "NEWS",
  },
];

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardWidth = 350;

  const BACKGROUND_IMAGE_PATH = "/hero-bgg.jpg";


  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
  
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
   
    <section 
      className={`relative py-21 px-6 lg:px-12 bg-cover bg-center bg-fixed`}
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE_PATH})` }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section: RANGERSTV LATEST & Navigation */}
        <div className="flex justify-between items-center mb-6 text-white">
          <h2 className="text-3xl font-light tracking-wider">
            SALAMITV LATEST
          </h2>
          <div className="flex items-center space-x-4">
            {/* Slideshow Navigation Arrows */}
            <div className="flex space-x-2 text-gray-400">
              <button
                onClick={() => scroll('left')}
                className="p-2 text-white hover:text-gray-300 transition-colors disabled:opacity-50"
                aria-label="Previous video"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2 text-white hover:text-gray-300 transition-colors disabled:opacity-50"
                aria-label="Next video"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            {/* 'ALL VIDEOS' Link */}
            <Link href="/videos" className="flex items-center text-white hover:text-gray-300 transition-colors group">
              <span className="text-sm font-extrabold uppercase mr-1">ALL VIDEOS</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Video Cards Slideshow Container */}
        <motion.div
          ref={scrollRef}
          className="flex space-x-6 pb-4 overflow-x-scroll scrollbar-hide" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {newsFeed.map((news) => (
            <motion.div
              key={news.id}
              className="flex-none w-[320px] sm:w-[350px] text-white overflow-hidden transition-transform duration-300"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {/* Image/Video Container (NOT clickable to avoid confusing UX) */}
              <div className="relative w-full aspect-video overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster={news.poster}
                >
                  <source src={news.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    03:35 {/* Hardcoded time for example */}
                </div>
              </div>
              
              {/* Text Content Area - WRAPPED IN LINK FOR ROUTING */}
              <Link 
                // *** THIS IS THE CRITICAL DYNAMIC ROUTE ***
                href={`/articles/${news.id}`} 
                className="block pt-4 pb-2 px-2 hover:opacity-80 transition-opacity"
              >
                {/* Date and Category */}
                <div className="text-xs font-medium text-gray-200 flex space-x-2 mb-1">
                    <span>{news.date}</span>
                    <span className="uppercase text-purple-400 border border-purple-400 px-2 py-0.5 rounded-md">
                        {news.category}
                    </span>
                </div>
                {/* Title and 'Read More' Text */}
                <h3 className="text-base font-bold mb-1 leading-snug">
                    {news.title}
                </h3>
                <span className="text-sm font-extrabold text-purple-500 hover:text-purple-400 transition-colors mt-1 inline-block">
                    Read More &rarr;
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Optional: Hide scrollbar utility for Tailwind CSS (if needed) */}
        <style jsx global>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}</style>

      </div>
    </section>
  );
}