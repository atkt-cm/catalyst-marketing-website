"use client";

import { useState } from "react";
import ClientPortalLayout from "@/components/client-portal/ClientPortalLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FileText,
  Download,
  Eye,
  Calendar,
  Search,
  Filter,
  SortAsc,
  Bell
} from "lucide-react";
import { motion } from "framer-motion";

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date");

  // Mock reports data (in real app, this would come from Google Drive API)
  const reports = [
    {
      id: 1,
      name: "Monthly Performance Report - December 2024",
      date: "2024-12-15",
      size: "2.4 MB",
      type: "PDF",
      category: "Performance",
      isNew: true
    },
    {
      id: 2,
      name: "SEO Analysis & Recommendations",
      date: "2024-12-10",
      size: "1.8 MB",
      type: "PDF",
      category: "SEO",
      isNew: true
    },
    {
      id: 3,
      name: "Social Media Campaign Results",
      date: "2024-12-05",
      size: "3.1 MB",
      type: "PDF",
      category: "Social Media",
      isNew: false
    },
    {
      id: 4,
      name: "PPC Campaign Analysis - November",
      date: "2024-11-28",
      size: "2.1 MB",
      type: "PDF",
      category: "PPC",
      isNew: false
    },
    {
      id: 5,
      name: "Website Analytics Deep Dive",
      date: "2024-11-20",
      size: "4.2 MB",
      type: "PDF",
      category: "Analytics",
      isNew: false
    },
    {
      id: 6,
      name: "Quarterly Strategy Review - Q4",
      date: "2024-10-15",
      size: "5.1 MB",
      type: "PDF",
      category: "Strategy",
      isNew: false
    }
  ];

  const filteredReports = reports.filter(report =>
    report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(reports.map(report => report.category))];

  return (
    <ClientPortalLayout activeSection="reports">
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-[#111111] mb-2">Reports</h1>
          <p className="text-gray-600">
            Access all your performance reports, analytics, and strategic insights.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="border-[#EAEAEA]">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search reports by name or category..."
                    value={searchTerm}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    className="pl-10 border-[#EAEAEA] focus:ring-[#babc6b] focus:border-[#babc6b]"
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="border-[#EAEAEA]">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" className="border-[#EAEAEA]">
                    <SortAsc className="w-4 h-4 mr-2" />
                    Sort
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Notification Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-[#EAEAEA] bg-[#babc6b]/5">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Bell className="w-5 h-5 text-[#babc6b]" />
                  <div>
                    <p className="font-medium text-[#111111]">Email Notifications Enabled</p>
                    <p className="text-sm text-gray-600">You'll be notified when new reports are available</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-[#babc6b] text-[#babc6b]">
                  Manage
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Reports List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="border-[#EAEAEA]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#111111]">All Reports</h2>
                <span className="text-sm text-gray-600">{filteredReports.length} reports</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredReports.map((report, index) => (
                  <motion.div
                    key={report.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center justify-between p-4 border border-[#EAEAEA] rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-[#babc6b] rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-black" />
                        </div>
                        {report.isNew && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium text-[#111111]">{report.name}</h3>
                          {report.isNew && (
                            <span className="px-2 py-1 bg-[#babc6b] text-black text-xs rounded-full font-medium">
                              NEW
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(report.date).toLocaleDateString()}
                          </span>
                          <span>{report.size}</span>
                          <span className="px-2 py-1 bg-gray-100 rounded text-xs">{report.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="border-[#EAEAEA]">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="border-[#EAEAEA]">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Categories Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="border-[#EAEAEA]">
            <CardHeader>
              <h2 className="text-xl font-bold text-[#111111]">Report Categories</h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map((category, index) => {
                  const count = reports.filter(r => r.category === category).length;
                  return (
                    <div
                      key={category}
                      className="text-center p-4 border border-[#EAEAEA] rounded-lg hover:border-[#babc6b] transition-colors cursor-pointer"
                    >
                      <div className="text-2xl font-bold text-[#babc6b]">{count}</div>
                      <div className="text-sm text-gray-600">{category}</div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </ClientPortalLayout>
  );
}
