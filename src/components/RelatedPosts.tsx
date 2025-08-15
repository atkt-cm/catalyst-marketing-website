"use client";

import { BlogPost } from "@/lib/blog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface RelatedPostsProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
  maxPosts?: number;
}

export default function RelatedPosts({ currentPost, allPosts, maxPosts = 3 }: RelatedPostsProps) {
  // Find related posts based on category and tags
  const relatedPosts = allPosts
    .filter(post => post.slug !== currentPost.slug)
    .map(post => {
      let score = 0;

      // Same category gets highest score
      if (post.category === currentPost.category) {
        score += 10;
      }

      // Shared tags get points
      if (currentPost.tags && post.tags) {
        const sharedTags = post.tags.filter(tag =>
          currentPost.tags!.includes(tag)
        );
        score += sharedTags.length * 3;
      }

      return { ...post, score };
    })
    .filter(post => post.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxPosts);

  if (relatedPosts.length === 0) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="mt-16 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-black mb-8">Related Articles</h3>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {relatedPosts.map((post, index) => (
          <motion.div key={post.slug} variants={itemVariants}>
            <Card className="group border border-gray-200 hover:border-[#babc6b] transition-all duration-300 hover:shadow-lg overflow-hidden h-full">
              {/* Article image */}
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#babc6b]/10 to-[#a8aa5a]/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-sm font-semibold text-gray-600">{post.category}</div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-white/90 text-gray-700 text-xs">
                    {post.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 flex flex-col h-full">
                {/* Meta information */}
                <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                  <h4 className="text-lg font-semibold text-black mb-3 group-hover:text-[#babc6b] transition-colors leading-tight cursor-pointer line-clamp-2">
                    {post.title}
                  </h4>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>
                )}

                {/* Author and Read More */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#babc6b] to-[#a8aa5a] rounded-full flex items-center justify-center">
                      <User className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-700">{post.author}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#babc6b] hover:text-[#a8aa5a] font-medium text-xs transition-colors group flex items-center"
                  >
                    Read more
                    <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
