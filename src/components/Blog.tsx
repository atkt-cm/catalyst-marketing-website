"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, User } from "lucide-react";
import { getAllPosts, BlogPost } from "@/lib/blog";
import { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Blog() {
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const posts = await getAllPosts();
        setArticles(posts.slice(0, 3)); // Get the latest 3 posts
      } catch (error) {
        console.error('Error loading blog posts:', error);
        // Fallback data if needed
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  if (loading) {
    return (
      <section id="blog" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
                <div className="h-12 bg-gray-200 rounded w-2/3 mx-auto mb-8"></div>
                <div className="grid lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-96 bg-gray-200 rounded-lg"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="w-2 h-2 bg-[#babc6b] rounded-full"></div>
              <span className="text-gray-600 font-medium">Blog</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-8">
              The latest from our marketing experts
            </h2>

            <Link href="/blog">
              <Button className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                View the blog
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </AnimatedSection>

          {/* Articles Grid */}
          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {articles.map((article, index) => (
              <motion.div key={article.slug || index} variants={itemVariants}>
                <Card className="group border border-gray-200 hover:border-[#babc6b] transition-all duration-300 hover:shadow-xl overflow-hidden h-full">
                  {/* Article image */}
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#babc6b]/10 to-[#a8aa5a]/20"></div>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-lg font-semibold text-gray-600">{article.category}</div>
                    </motion.div>

                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700">
                        {article.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-8 flex flex-col h-full">
                    {/* Meta information */}
                    <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-[#babc6b] transition-colors leading-tight flex-grow">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {article.excerpt}
                    </p>

                    {/* Author and Read More */}
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#babc6b] to-[#a8aa5a] rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{article.author}</span>
                      </div>

                      <Button variant="link" className="p-0 text-[#babc6b] hover:text-[#a8aa5a] font-medium group">
                        Read more
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation arrows for mobile */}
          <AnimatedSection delay={0.4} className="flex justify-center space-x-4 mt-12 lg:hidden">
            <Button variant="outline" size="icon" className="rounded-full hover:bg-[#babc6b] hover:text-black transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:bg-[#babc6b] hover:text-black transition-colors">
              <ArrowRight className="w-4 h-4" />
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
