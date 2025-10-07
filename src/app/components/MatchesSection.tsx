"use client";

import Image from "next/image";
import Link from "next/link";

export default function UpcomingMatches() {
  const matchFlyers = [
    "/fixtures/match1.jpeg",
     "/fixtures/match2.jpeg",
    "/fixtures/match3.jpeg",
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-10">
  {/* Left Side: Title */}
  <div className="flex items-center space-x-3">
    <h2 className="text-1xl md:text-1xl font-bold text-white bg-black px-5 py-2 rounded-full shadow-md">
      Fixtures
    </h2>
  </div>


  <Link
    href="/fixtures"
    className="mt-4 md:mt-0 text-white font-semibold px-5 py-2 rounded-full transition-all duration-300"
  >
    All Fixtures →
  </Link>
</div>

        {/* Image Flyers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {matchFlyers.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={src}
                alt={`Match flyer ${index + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
