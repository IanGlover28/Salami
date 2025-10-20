// Import the data safely from the dedicated data file
import { allArticles, NewsItem } from "@/data/articles"; 
import ArticleClientPage from "./ArticleClientPage";
import Link from "next/link"; 

// Define the expected structure of the dynamic params
interface ArticlePageProps {
  params: {
    articleId: string;
  };
}

// Server Component for data fetching and routing logic
export default function ArticlePage({ params }: ArticlePageProps) {
  const currentArticleId = parseInt(params.articleId);
  
  // ✅ FIX: allArticles is now a proper array imported from a Server module.
  const articleExists = allArticles.some(a => a.id === currentArticleId);

  if (!articleExists) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Article Not Found</h1>
        <p className="text-lg text-gray-600">The story you are looking for doesn't exist or may have been moved.</p>
        <Link href="/" className="mt-6 text-blue-600 hover:text-blue-800 font-semibold">
          &larr; Go to Homepage
        </Link>
      </div>
    );
  }
  
  // Pass the ID to the client component
  return <ArticleClientPage currentArticleId={currentArticleId} />;
}