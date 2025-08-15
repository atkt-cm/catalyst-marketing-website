import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import BlogPostContent from "@/components/BlogPostContent";

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const allPosts = await getAllPosts();

  if (!post) {
    notFound();
  }

  // Get the current URL for sharing
  const currentUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://catalyst-agency.com'}/blog/${slug}`;

  // Convert content to HTML-like format for better display
  const formattedContent = post.content
    .split('\n\n')
    .map(paragraph => {
      if (paragraph.startsWith('# ')) {
        return `<h1 class="text-3xl font-bold mb-6 mt-8">${paragraph.slice(2)}</h1>`;
      } else if (paragraph.startsWith('## ')) {
        return `<h2 class="text-2xl font-bold mb-4 mt-8">${paragraph.slice(3)}</h2>`;
      } else if (paragraph.startsWith('### ')) {
        return `<h3 class="text-xl font-semibold mb-3 mt-6">${paragraph.slice(4)}</h3>`;
      } else if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').map(item =>
          item.startsWith('- ') ? `<li class="mb-2">${item.slice(2)}</li>` : item
        ).join('');
        return `<ul class="list-disc list-inside mb-6 space-y-2">${items}</ul>`;
      } else if (paragraph.match(/^\d+\./)) {
        const items = paragraph.split('\n').map(item =>
          item.match(/^\d+\./) ? `<li class="mb-2">${item.replace(/^\d+\.\s*/, '')}</li>` : item
        ).join('');
        return `<ol class="list-decimal list-inside mb-6 space-y-2">${items}</ol>`;
      } else if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
        return `<p class="italic text-gray-600 mb-6">${paragraph.slice(1, -1)}</p>`;
      } else {
        return `<p class="mb-6 leading-relaxed">${paragraph}</p>`;
      }
    })
    .join('');

  return (
    <PageTransition>
      <BlogPostContent
        post={post}
        allPosts={allPosts}
        formattedContent={formattedContent}
        currentUrl={currentUrl}
      />
    </PageTransition>
  );
}
