"use client";

import { useState, useMemo } from "react";
import { BlogPost } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Clock, User, ArrowRight, Filter, X } from "lucide-react";
import Link from "next/link";


interface BlogContentProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogContent({ posts, categories }: BlogContentProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  const hasActiveFilters = searchQuery !== "" || selectedCategory !== "All";

  return (
    <div className="space-y-16">
      {/* Search and Filter Section */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mx-auto">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 w-full text-lg border-gray-200 focus:border-[#babc6b] focus:ring-[#babc6b] rounded-xl"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="mt-8">
              <div className="flex items-center gap-4 mb-4">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-700">Filter by category:</span>
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-4 h-4 mr-1" />
                    Clear filters
                  </Button>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant={selectedCategory === "All" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("All")}
                  className={`rounded-full ${
                    selectedCategory === "All"
                      ? "bg-[#babc6b] hover:bg-[#a8aa5a] text-black"
                      : "border-gray-300 hover:bg-gray-50 hover:border-[#babc6b]"
                  }`}
                >
                  All ({posts.length})
                </Button>
                {categories.map((category) => {
                  const count = posts.filter(post => post.category === category).length;
                  return (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category)}
                      className={`rounded-full ${
                        selectedCategory === category
                          ? "bg-[#babc6b] hover:bg-[#a8aa5a] text-black"
                          : "border-gray-300 hover:bg-gray-50 hover:border-[#babc6b]"
                      }`}
                    >
                      {category} ({count})
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Search Results Info */}
            {(searchQuery || selectedCategory !== "All") && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600">
                  {filteredPosts.length === 0 ? (
                    <>No articles found</>
                  ) : (
                    <>
                      Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
                      {searchQuery && <> matching "{searchQuery}"</>}
                      {selectedCategory !== "All" && <> in "{selectedCategory}"</>}
                    </>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <div key={post.slug}>
                    <Card className="group border border-gray-200 hover:border-[#babc6b] transition-all duration-300 hover:shadow-xl overflow-hidden h-full">
                      {/* Article image */}
                      <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#babc6b]/10 to-[#a8aa5a]/20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-lg font-semibold text-gray-600">{post.category}</div>
                        </div>

                        {/* Category badge */}
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-white/90 text-gray-700">
                            {post.category}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-8 flex flex-col h-full">
                        {/* Meta information */}
                        <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <span>•</span>
                          <span>{post.date}</span>
                        </div>

                        {/* Title */}
                        <Link href={`/blog/${post.slug}`}>
                          <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-[#babc6b] transition-colors leading-tight cursor-pointer">
                            {post.title}
                          </h3>
                        </Link>

                        {/* Excerpt */}
                        <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                            {post.tags.length > 3 && (
                              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                                +{post.tags.length - 3}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Author and Read More */}
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#babc6b] to-[#a8aa5a] rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-medium text-gray-700">{post.author}</span>
                          </div>

                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-[#babc6b] hover:text-[#a8aa5a] font-medium text-sm transition-colors group"
                          >
                            Read more
                            <ArrowRight className="w-4 h-4 ml-1 inline transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                  <p className="text-gray-500 mb-6">
                    Try adjusting your search or browse different categories.
                  </p>
                  {hasActiveFilters && (
                    <Button
                      onClick={clearFilters}
                      variant="outline"
                      className="border-gray-300 hover:bg-gray-50 hover:border-[#babc6b]"
                    >
                      Clear filters
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
