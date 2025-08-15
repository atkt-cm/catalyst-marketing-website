"use client";

import { useState } from "react";
import { BlogPost } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialShare from "@/components/SocialShare";
import RelatedPosts from "@/components/RelatedPosts";
import ConsultationForm from "@/components/ConsultationForm";

interface BlogPostContentProps {
  post: BlogPost;
  allPosts: BlogPost[];
  formattedContent: string;
  currentUrl: string;
}

export default function BlogPostContent({
  post,
  allPosts,
  formattedContent,
  currentUrl
}: BlogPostContentProps) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center text-[#babc6b] hover:text-[#a8aa5a] font-medium mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>

              <div className="mb-6">
                <span className="inline-block bg-[#babc6b] text-black px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {post.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
                {post.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {post.excerpt}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="flex items-center space-x-6 text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Social Share */}
                <div className="flex-shrink-0">
                  <SocialShare
                    url={currentUrl}
                    title={post.title}
                    description={post.excerpt}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                <div
                  dangerouslySetInnerHTML={{ __html: formattedContent }}
                  className="text-gray-700 leading-relaxed"
                  style={{
                    fontSize: '1.125rem',
                    lineHeight: '1.75',
                  }}
                />
              </article>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-[#babc6b] hover:text-black transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Social Share Bottom */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <SocialShare
                  url={currentUrl}
                  title={post.title}
                  description={post.excerpt}
                />
              </div>

              {/* CTA */}
              <div className="mt-16 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl text-center border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Ready to accelerate your growth?</h3>
                <p className="text-gray-600 mb-6">
                  Let's discuss how our proven strategies can transform your marketing results.
                </p>
                <Button
                  onClick={() => setIsConsultationOpen(true)}
                  className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Start a consultation
                </Button>
              </div>

              {/* Related Posts */}
              <RelatedPosts
                currentPost={post}
                allPosts={allPosts}
                maxPosts={3}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ConsultationForm
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
