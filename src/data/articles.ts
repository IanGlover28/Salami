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
    title: "REACTION: IMPRESSIVE GOOAL FROM SAMMY",
    author: "LEWIS WALKER",
    date: "18 Oct 25",
    category: "MATCH REACTION",
    image: "/leah_eddie_feature.jpg", // Placeholder
    content: [
      { type: 'paragraph', content: "Salami stiker Sammy delivered an impressive goal" },
      { type: 'quote', content: "First of all, I had a concussion in pre-season...", source: 'Speaking to RangersTV' },
      { type: 'paragraph', content: "The soleus tear turned out to be more severe than initially anticipated..." },
      { type: 'image', content: "/leah_eddie_training.jpg", source: 'Leah Eddie during a training session' },
      { type: 'paragraph', content: "“Just taking it day by day and seeing how it went, but it ended up being six or seven weeks, which we had to be careful..." },
      { type: 'quote', content: "Touch wood, everything has been ok so far, and I’m back building up my minutes." },
      { type: 'paragraph', content: "Reflecting on the mental battle, she touched upon the difficulty of being injured while simultaneously navigating a major career transition..." },
      { type: 'paragraph', content: "“It was hard, I think, being away in Italy and trying to get minutes under your belt..." },
    ],
  },
  {
    id: 2,
    title: "MATCH REACTION: IMPRESSIVE GOAL FROM SAMMY",
    author: "RANGERS STAFF",
    date: "19 Oct 25",
    category: "MATCH REACTION",
    image: "/match_reaction_sammy.jpg", // Placeholder
    content: [{ type: 'paragraph', content: "Sammy scored a stunning long-range goal that secured the team's victory in the semi-finals. The manager praised the team's grit..." }],
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