// src/app/articles/[articleId]/page.tsx

import { allArticles } from "@/data/articles";
import ArticleClientPage from "./ArticleClientPage";
import Link from "next/link";
import type { Metadata } from "next";

interface ArticlePageProps {
  params: Promise<{
    articleId: string;
  }>;
}

// ✅ Generate dynamic metadata for social sharing
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { articleId } = await params;
  const currentArticleId = parseInt(articleId);
  const article = allArticles.find((a) => a.id === currentArticleId);

  // Default metadata if article not found
  if (!article) {
    return {
      title: "Article Not Found | Salami FC",
      description: "The requested article could not be found.",
    };
  }

  // Get the first paragraph as description
  const description = article.content
    .find((block) => block.type === "paragraph")?.content
    .slice(0, 160) || article.title;

  // Construct full URL for the article
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://salamirangersfc.com";
  const articleUrl = `${baseUrl}/articles/${article.id}`;
  
  // Construct full URL for the image
  // Ensure we have an absolute URL for social media crawlers
  let imageUrl: string;
  if (article.image.startsWith("http")) {
    imageUrl = article.image;
  } else {
    // Remove leading slash if present to avoid double slashes
    const imagePath = article.image.startsWith("/") ? article.image : `/${article.image}`;
    imageUrl = `${baseUrl}${imagePath}`;
  }

  return {
    title: `${article.title} | Salami FC`,
    description: description,
    
    // Open Graph metadata (Facebook, WhatsApp, LinkedIn)
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
      publishedTime: article.date,
      authors: [article.author],
      tags: [article.category],
    },

    // Twitter Card metadata
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: description,
      images: [imageUrl],
      creator: "@salamifc", // Replace with your actual Twitter handle
      site: "@salamifc",
    },

    // Additional metadata
    alternates: {
      canonical: articleUrl,
    },
  };
}

// ✅ Optional: Generate static params for better performance
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