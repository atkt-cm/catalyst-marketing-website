"use client";

import { useState } from "react";
import ClientPortalLayout from "@/components/client-portal/ClientPortalLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Image as ImageIcon,
  MessageSquare,
  Eye,
  Download,
  Filter,
  Grid,
  List,
  Clock,
  User,
  Send
} from "lucide-react";
import { motion } from "framer-motion";

export default function CreativesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCreative, setSelectedCreative] = useState<number | null>(null);
  const [newComment, setNewComment] = useState("");

  // Mock creatives data
  const creatives = [
    {
      id: 1,
      name: "Facebook Ad Campaign - Holiday Sales",
      type: "Facebook Ad",
      date: "2024-12-15",
      status: "Active",
      thumbnail: "https://via.placeholder.com/400x300/babc6b/000000?text=Facebook+Ad",
      comments: [
        {
          id: 1,
          author: "John Smith",
          date: "2024-12-15",
          message: "Looks great! Can we make the CTA button more prominent?"
        }
      ],
      versions: 3
    },
    {
      id: 2,
      name: "Instagram Story - Product Showcase",
      type: "Instagram Story",
      date: "2024-12-12",
      status: "Review",
      thumbnail: "https://via.placeholder.com/400x600/babc6b/000000?text=Instagram+Story",
      comments: [
        {
          id: 1,
          author: "Sarah Johnson",
          date: "2024-12-12",
          message: "The text is hard to read on mobile. Can we increase the font size?"
        },
        {
          id: 2,
          author: "Catalyst Team",
          date: "2024-12-12",
          message: "We'll adjust the typography and send an updated version."
        }
      ],
      versions: 2
    },
    {
      id: 3,
      name: "Google Ads Banner - New Service",
      type: "Display Ad",
      date: "2024-12-10",
      status: "Approved",
      thumbnail: "https://via.placeholder.com/728x90/babc6b/000000?text=Google+Banner",
      comments: [],
      versions: 1
    },
    {
      id: 4,
      name: "LinkedIn Carousel - Company Update",
      type: "LinkedIn Post",
      date: "2024-12-08",
      status: "Active",
      thumbnail: "https://via.placeholder.com/400x400/babc6b/000000?text=LinkedIn+Post",
      comments: [
        {
          id: 1,
          author: "Marketing Team",
          date: "2024-12-08",
          message: "Perfect! This aligns well with our brand guidelines."
        }
      ],
      versions: 1
    },
    {
      id: 5,
      name: "YouTube Thumbnail - Tutorial Video",
      type: "YouTube Thumbnail",
      date: "2024-12-05",
      status: "Active",
      thumbnail: "https://via.placeholder.com/480x360/babc6b/000000?text=YouTube+Thumbnail",
      comments: [],
      versions: 2
    },
    {
      id: 6,
      name: "Email Header - Newsletter",
      type: "Email Design",
      date: "2024-12-03",
      status: "Approved",
      thumbnail: "https://via.placeholder.com/600x200/babc6b/000000?text=Email+Header",
      comments: [
        {
          id: 1,
          author: "Content Team",
          date: "2024-12-03",
          message: "Great design! The holiday theme works perfectly."
        }
      ],
      versions: 1
    }
  ];

  const handleAddComment = (creativeId: number) => {
    if (!newComment.trim()) return;

    // In a real app, this would make an API call
    console.log(`Adding comment to creative ${creativeId}: ${newComment}`);
    setNewComment("");
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'review': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <ClientPortalLayout activeSection="creatives">
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold text-[#111111] mb-2">Creatives & Ads</h1>
            <p className="text-gray-600">
              View and provide feedback on your marketing creatives and advertisements.
            </p>
          </div>
          <div className="flex space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className={viewMode === 'grid' ? 'bg-[#babc6b] text-black' : 'border-[#EAEAEA]'}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
              className={viewMode === 'list' ? 'bg-[#babc6b] text-black' : 'border-[#EAEAEA]'}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="border-[#EAEAEA]">
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" size="sm" className="border-[#EAEAEA]">
                  <Filter className="w-4 h-4 mr-2" />
                  All Types
                </Button>
                <Button variant="outline" size="sm" className="border-[#EAEAEA]">
                  Active
                </Button>
                <Button variant="outline" size="sm" className="border-[#EAEAEA]">
                  In Review
                </Button>
                <Button variant="outline" size="sm" className="border-[#EAEAEA]">
                  Approved
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Creatives Grid/List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {creatives.map((creative, index) => (
                <motion.div
                  key={creative.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Card className="border-[#EAEAEA] hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-0">
                      <div
                        className="aspect-video bg-gradient-to-br from-[#babc6b] to-[#a8aa5a] rounded-t-lg flex items-center justify-center text-black font-bold"
                        onClick={() => setSelectedCreative(creative.id)}
                      >
                        <ImageIcon className="w-12 h-12" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-medium text-[#111111] text-sm">{creative.name}</h3>
                          {creative.versions > 1 && (
                            <span className="text-xs text-[#babc6b] bg-[#babc6b]/10 px-2 py-1 rounded">
                              v{creative.versions}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-600 mb-3">
                          <span>{creative.type}</span>
                          <span>•</span>
                          <span>{new Date(creative.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(creative.status)}`}>
                            {creative.status}
                          </span>
                          <div className="flex items-center space-x-1 text-xs text-gray-600">
                            <MessageSquare className="w-3 h-3" />
                            <span>{creative.comments.length}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <Card className="border-[#EAEAEA]">
              <CardContent className="p-0">
                {creatives.map((creative, index) => (
                  <motion.div
                    key={creative.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center space-x-4 p-4 border-b border-[#EAEAEA] last:border-b-0 hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => setSelectedCreative(creative.id)}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#babc6b] to-[#a8aa5a] rounded-lg flex items-center justify-center">
                      <ImageIcon className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-[#111111]">{creative.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <span>{creative.type}</span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {new Date(creative.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          {creative.comments.length} comments
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(creative.status)}`}>
                        {creative.status}
                      </span>
                      {creative.versions > 1 && (
                        <span className="text-xs text-[#babc6b] bg-[#babc6b]/10 px-2 py-1 rounded">
                          v{creative.versions}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          )}
        </motion.div>

        {/* Creative Detail Modal */}
        {selectedCreative && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedCreative(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const creative = creatives.find(c => c.id === selectedCreative)!;
                return (
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-[#111111]">{creative.name}</h2>
                        <p className="text-gray-600">{creative.type} • {new Date(creative.date).toLocaleDateString()}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="border-[#EAEAEA]">
                          <Eye className="w-4 h-4 mr-1" />
                          View Full
                        </Button>
                        <Button variant="outline" size="sm" className="border-[#EAEAEA]">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                        {creative.versions > 1 && (
                          <Button variant="outline" size="sm" className="border-[#babc6b] text-[#babc6b]">
                            Version History
                          </Button>
                        )}
                      </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6">
                      {/* Creative Preview */}
                      <div>
                        <div className="aspect-video bg-gradient-to-br from-[#babc6b] to-[#a8aa5a] rounded-lg flex items-center justify-center text-black">
                          <ImageIcon className="w-16 h-16" />
                        </div>
                      </div>

                      {/* Comments Section */}
                      <div>
                        <h3 className="font-bold text-[#111111] mb-4">Comments & Feedback</h3>
                        <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
                          {creative.comments.map((comment) => (
                            <div key={comment.id} className="p-3 bg-gray-50 rounded-lg">
                              <div className="flex items-center space-x-2 mb-2">
                                <User className="w-4 h-4 text-gray-600" />
                                <span className="font-medium text-sm">{comment.author}</span>
                                <span className="text-xs text-gray-500">{new Date(comment.date).toLocaleDateString()}</span>
                              </div>
                              <p className="text-sm text-gray-700">{comment.message}</p>
                            </div>
                          ))}
                          {creative.comments.length === 0 && (
                            <p className="text-gray-500 text-center py-4">No comments yet. Be the first to leave feedback!</p>
                          )}
                        </div>

                        {/* Add Comment */}
                        <div className="space-y-3">
                          <Textarea
                            placeholder="Leave your feedback or comments..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="border-[#EAEAEA] focus:ring-[#babc6b] focus:border-[#babc6b]"
                            rows={3}
                          />
                          <Button
                            onClick={() => handleAddComment(creative.id)}
                            className="w-full bg-[#babc6b] hover:bg-[#a8aa5a] text-black"
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Send Comment
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </div>
    </ClientPortalLayout>
  );
}
