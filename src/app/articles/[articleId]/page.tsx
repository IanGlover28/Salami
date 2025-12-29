import { allArticles } from "@/data/articles";
import ArticleClientPage from "./ArticleClientPage";
import Link from "next/link";
import { Metadata } from "next";

interface ArticlePageProps {
  params: Promise<{
    articleId: string;
  }>;
}


export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { articleId } = await params;
  const currentArticleId = parseInt(articleId);
  const article = allArticles.find((a) => a.id === currentArticleId);

  if (!article) {
    return {
      title: "Article Not Found - Salami FC",
      description: "The article you are looking for does not exist.",
    };
  }


  const firstParagraph = article.content.find((block) => block.type === 'paragraph');
  const description = firstParagraph?.content.slice(0, 160) || article.title;


  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://salamirangersfc.com";
  const articleUrl = `${baseUrl}/articles/${article.id}`;
  const imageUrl = `${baseUrl}${article.image}`;

  return {
    title: `${article.title} - Salami FC`,
    description: description,
    
    openGraph: {
      title: article.title,
      description: description,
      url: articleUrl,
      siteName: "Salami FC Official",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: new Date(article.date).toISOString(),
      authors: [article.author],
      section: article.category,
    },


    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: description,
      images: [imageUrl],
      creator: "@SalamiFC",
      site: "@SalamiFC",
    },

    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: articleUrl,
    },
  };
}

// ✅ Generate static params for all articles (optional but recommended for performance)
export async function generateStaticParams() {
  return allArticles.map((article) => ({
    articleId: article.id.toString(),
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { articleId } = await params;
  const currentArticleId = parseInt(articleId);

  const articleExists = allArticles.some((a) => a.id === currentArticleId);

  if (!articleExists) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404 - Article Not Found</h1>
        <p className="text-lg text-gray-600">
          The story you are looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link href="/" className="mt-6 text-blue-600 hover:text-blue-800 font-semibold">
          &larr; Go to Homepage
        </Link>
      </div>
    );
  }

  return <ArticleClientPage currentArticleId={currentArticleId} />;
}