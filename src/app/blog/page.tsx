import { getAllPosts, getCategories } from "@/lib/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import BlogContent from "@/components/BlogContent";
import BlogHero from "@/components/BlogHero";

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = getCategories();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <BlogHero />

        {/* Blog Content with Search & Filtering */}
        <BlogContent posts={posts} categories={categories} />
      </main>

      <Footer />
    </div>
  );
}
