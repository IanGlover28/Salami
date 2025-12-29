// Define the type for the article content blocks
export type ArticleContent = {
  type: 'paragraph' | 'image' | 'quote';
  content: string;
  source?: string;
};

// Define the type for a news item
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
    title: "Dadzie: We'll Bounce Back",
    author: "Salami Media Team",
    date: "13 Dec 25",
    category: "POST-MATCH INTERVIEW",
    image: "/dadzie.jpg",
    content: [
      { type: 'paragraph', content: "Captain Emmanuel Dadzie believes his side will win..." },
      { type: 'quote', content: "Honestly we were very disappointed...", source: "Captain Dadzie" },
      { type: 'paragraph', content: "The team lost 3:2 away to Jinx Breakers..." },
      { type: 'image', content: "/match00.png", source: "Dadzie speaks to the media" },
    ],
  },
  {
    id: 2,
    title: "MEDIA: SALAMI FC's MEDIA TEAM INTERVIEW",
    author: "Salami Media Team",
    date: "19 Oct 25",
    category: "MEDIA INTERVIEW",
    image: "/staff6.jpeg",
    content: [
      { type: 'paragraph', content: "The Salami FC Media Team sat down this week..." },
      { type: 'quote', content: "It's a fast-paced environment...", source: "Sarah Jones, Head of Digital Media" },
      { type: 'paragraph', content: "The team discussed their approach to engaging fans..." },
      { type: 'image', content: "/staff6.jpeg", source: "The Salami FC Media Team hard at work" },
    ],
  },
  {
    id: 3,
    title: "TRAINING: HIGH INTENSITY SESSION HIGHLIGHTS",
    author: "RANGERS STAFF",
    date: "19 Oct 25",
    category: "TRAINING",
    image: "/training_highlights.jpg", // Placeholder
    content: [{ type: 'paragraph', content: "The team underwent a rigorous high-intensity training session this week, focusing on fitness and tactical play ahead of the final." }],
  },
];