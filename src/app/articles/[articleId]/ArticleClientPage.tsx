// src/app/articles/[articleId]/ArticleClientPage.tsx

"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// --- Data Structure (Moved here as data is needed by client components too) ---
// Define the type for the main article content
type ArticleContent = {
  type: 'paragraph' | 'image' | 'quote';
  content: string;
  source?: string;
};

// Define the type for a news item for better type safety
export type NewsItem = {
  id: number;
  title: string;
  author: string;
  date: string;
  category: string;
  image: string;
  content: ArticleContent[];
};

// ******************************************************
// COMBINED/DUMMY DATA SOURCE
// ******************************************************
export const allArticles: NewsItem[] = [
  {
    id: 1,
    title: "Dadzie: We'll Bounce Back ",
    author: "LEWIS WALKER",
    date: "13 Dec 25",
    category: "POST-MATCH INTERVIEW",
    image: "/dadzie.jpg", // Placeholder
    content: [
     { 
        type: 'paragraph', 
        content: "Captain Emmanuel Dadzie believes his side will win against Corinthians FC this weekend to bounce back from Saturday's defeat." 
      },
      { 
        type: 'quote', 
        content: "Honestly we were very disappointed with the results on Saturday, I think the red card was harsh and came to early, but the team has bounced back many times and that is what we will be looking to do on Sunday", 
        source: 'Captain Dadzie, speaking after the final whistle' 
      },
      { 
        type: 'paragraph', 
        content: "The team lost 3:2 away to Jinx Breakers in the Accra North District Division Three League on Saturday, The 18-year-old who was a delight to watch in the game against Jinx Breakers Insists he has a lot of faith in his team-mates and believes a win against Corinthians is possible on Sunday."
      },
      { 
        type: 'image', 
        content: "/match00.png", // Using the same image for the in-story picture
        source: 'Caption Dadzie speaks to the media after the game' 
      },
      { 
        type: 'quote', 
        content: "He added : We created a lot of chances but unfortunately things didn't go well. It’s part of the game so we are going to work hard with the aim of getting back to winning ways and I think you will see that on Sunday against Corinthians, I have a lot of faith in this team", 
        source: 'Captain Dadzie' 
      },
      { 
        type: 'paragraph', 
        content: "Salami Rangers will host Corinthians at the Darkuman Okwahu Park on Sunday at 2PM in week 8 of the ANDFA D3 League." 
      },
    ],
  },
{
    // ID remains 2, but all content is updated for the Media Interview
    id: 2,
    title: "MEDIA: SALAMI FC's MEDIA TEAM INTERVIEW",
    author: "SALAMI FC STAFF",
    date: "19 Oct 25",
    category: "MEDIA INTERVIEW", // Updated Category
    image: "/staff6.jpeg", // Placeholder image path from your hero section
    content: [
      // ✅ NEW CONTENT for MEDIA TEAM INTERVIEW
      { 
        type: 'paragraph', 
        content: "The Salami FC Media Team sat down this week for a deep-dive interview, offering fans a rare glimpse into the planning, strategy, and challenges of managing the club's digital presence and content creation across various platforms." 
      },
      { 
        type: 'quote', 
        content: "It's a fast-paced environment. We're not just covering matches; we're telling the story of the club, from the youth academy to community outreach. Our goal is to connect the fans to every part of Salami FC.", 
        source: 'Sarah Jones, Head of Digital Media' 
      },
      { 
        type: 'paragraph', 
        content: "The team discussed their approach to engaging fans on match days, their shift to creating more behind-the-scenes video content, and the importance of maintaining a consistent and engaging voice across social media channels." 
      },
      { 
        type: 'image', 
        content: "/staff6.jpeg", // Reusing the staff image placeholder
        source: 'The Salami FC Media Team hard at work' 
      },
      { 
        type: 'paragraph', 
        content: "They also outlined their strategy for promoting upcoming fixtures and managing player interviews, emphasizing the need to balance transparency with maintaining focus for the squad. The full interview is available exclusively on SalamiTV." 
      },
    ],
  },
 {
    id: 3,
    title: "TRAINING: HIGH INTENSITY SESSION HIGHLIGHTS",
    author: "RANGERS STAFF",
    date: "19 Oct 25",
    category: "TRAINING",
    image: "/team/team2.jpeg", // Placeholder for the main featured image
    content: [
      // ✅ UPDATED CONTENT for TRAINING HIGHLIGHTS
      {
        type: 'paragraph',
        content: "Salami FC's training ground was a hive of activity this week as the squad ramped up preparations with a high-intensity session designed to sharpen both fitness and tactical awareness ahead of the crucial upcoming fixtures. The focus was firmly on rapid ball movement and sustained pressing."
      },
      {
        type: 'quote',
        content: "We're entering the phase of the season where physical conditioning is non-negotiable. The players responded brilliantly; the intensity today was exactly what we needed to replicate match tempo.",
        source: 'Fitness Coach Liam Scott'
      },
      {
        type: 'paragraph',
        content: "Manager Antonio oversaw a series of drills emphasizing quick transitions from defense to attack, followed by small-sided games where competitive spirit was visibly high. Several youth prospects were integrated into the session, gaining valuable experience."
      },
      {
        type: 'image',
        content: "/team/team2.jpeg", // Reusing the team image placeholder
        source: 'The squad executes a tactical drill'
      },
      {
        type: 'paragraph',
        content: "The rigorous session concluded with specific set-piece work and a focus on recovery protocols. The message from the coaching staff is clear: fitness will be the key differentiator in the final stretch of the league campaign."
      },
    ],
  },
];
// ******************************************************


// --- Sub-Components (Unchanged) ---
const NavButton = ({ direction, href }: { direction: 'prev' | 'next', href: string | null }) => (
  <Link 
    href={href || '#'} 
    className={`flex items-center space-x-1 py-1 text-xs font-semibold uppercase transition-colors ${
      href ? 'text-gray-800 hover:text-blue-600' : 'text-gray-400 cursor-not-allowed'
    }`}
    aria-label={direction === 'prev' ? 'Previous article' : 'Next article'}
  >
    {direction === 'prev' && <ChevronLeft size={16} />}
    <span>{direction === 'prev' ? 'Prev Article' : 'Next Article'}</span>
    {direction === 'next' && <ChevronRight size={16} />}
  </Link>
);

const ContentBlock = ({ block }: { block: ArticleContent }) => {
  switch (block.type) {
    case 'paragraph':
      return <p className="mb-6 leading-relaxed text-gray-700">{block.content}</p>;
    case 'quote':
      return (
        <blockquote className="my-8 py-4 border-l-4 border-blue-600 pl-6 bg-gray-50 italic text-lg text-gray-800">
          <p className="mb-2">&apos;{block.content}&apos;</p>
          {block.source && <footer className="text-sm font-semibold not-italic mt-2 text-blue-600">— {block.source}</footer>}
        </blockquote>
      );
    case 'image':
      return (
        <div className="my-8 w-full max-w-4xl mx-auto">
          <Image src={block.content} alt={block.source ?? "Salami FC image"} className="w-full h-auto object-cover rounded-lg shadow-xl" width={600} height={800} />
          {block.source && (
            <p className="mt-2 text-center text-sm text-gray-500">{block.source}</p>
          )}
        </div>
      );
    default:
      return null;
  }
};


// --- Article Client Page Component (Refactored) ---

// Component now accepts the article ID as a prop, not from Next.js 'params'
interface ArticleClientPageProps {
  currentArticleId: number;
}

export default function ArticleClientPage({ currentArticleId }: ArticleClientPageProps) {
  
  // 1. Fetch the specific article data based on the ID
  const article = allArticles.find(a => a.id === currentArticleId);
  
  // Handle the 404 case if the article is not found (although page.tsx should handle this too)
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Article Not Found</h1>
        <Link href="/" className="mt-6 text-blue-600 hover:text-blue-800 font-semibold">
          &larr; Go to Homepage
        </Link>
      </div>
    );
  }

  // 2. Define Navigation HREFs dynamically
  const currentIndex = allArticles.findIndex(a => a.id === currentArticleId);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  const prevArticleHref = prevArticle ? `/articles/${prevArticle.id}` : null;
  const nextArticleHref = nextArticle ? `/articles/${nextArticle.id}` : null;

  // 3. Define Related Articles (excluding the current one)
  const relatedStories = allArticles
    .filter(a => a.id !== currentArticleId)
    .slice(0, 3); // Limit to 3 related stories

  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* 1. Article Header Section */}
      <header className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          
          <div className="flex justify-between items-center mb-6">
            <NavButton direction="prev" href={prevArticleHref} />
            <NavButton direction="next" href={nextArticleHref} />
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-12">
            
            {/* Left Column: Title & Metadata */}
            <div className="w-full lg:w-2/3 mb-6 lg:mb-0 order-2 lg:order-1">
              <div className="flex items-center space-x-4 text-sm font-semibold text-gray-500 mb-4">
                <time dateTime={article.date}>{article.date}</time>
                <span className="uppercase tracking-widest text-blue-600">{article.category}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4 leading-tight">
                {article.title}
              </h1>
              
              <p className="text-base font-medium text-gray-600">BY {article.author}</p>
            </div>
            
            {/* Right Column: Featured Image (Moves up on mobile) */}
            <div className="w-full lg:w-1/3 order-1 lg:order-2">
              <Image
                src={article.image}
                alt={`Featured image for ${article.title}`}
                className="w-full h-auto object-cover rounded-lg shadow-md aspect-[4/3] lg:aspect-[3/4]"
                width={600}
                height={800}
              />
            </div>
          </div>
          
        </div>
      </header>

      {/* 2. Article Body Section */}
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {article.content.map((block, index) => (
              <ContentBlock key={index} block={block} />
            ))}
          </div>
        </div>
      </main>

      <hr className="my-8 border-gray-200" />

      {/* 3. Related Stories Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            More Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedStories.map((story) => (
              <Link 
                key={story.id} 
                href={`/articles/${story.id}`} 
                className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative aspect-video">
                  <Image
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={600}
                    height={400}
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-gray-500 mb-2">
                    <time dateTime={story.date}>{story.date}</time>
                    <span className="uppercase tracking-wider text-blue-600">{story.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {story.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer Nav for a seamless reading experience */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 flex justify-between">
        <NavButton direction="prev" href={prevArticleHref} />
        <NavButton direction="next" href={nextArticleHref} />
      </div>

    </motion.div>
  );
}