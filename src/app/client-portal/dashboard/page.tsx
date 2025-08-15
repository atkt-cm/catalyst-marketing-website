"use client";

import { useState } from "react";
import ClientPortalLayout from "@/components/client-portal/ClientPortalLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye, Calendar, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ClientDashboard() {
  // Mock data for latest reports
  const latestReports = [
    {
      id: 1,
      name: "Monthly Performance Report - December 2024",
      date: "2024-12-15",
      size: "2.4 MB",
      type: "PDF"
    },
    {
      id: 2,
      name: "SEO Analysis & Recommendations",
      date: "2024-12-10",
      size: "1.8 MB",
      type: "PDF"
    },
    {
      id: 3,
      name: "Social Media Campaign Results",
      date: "2024-12-05",
      size: "3.1 MB",
      type: "PDF"
    }
  ];

  const stats = [
    {
      title: "Active Projects",
      value: "4",
      icon: TrendingUp,
      change: "+2 this month"
    },
    {
      title: "Reports Generated",
      value: "12",
      change: "+3 this month"
    },
    {
      title: "Creatives Delivered",
      value: "28",
      change: "+8 this month"
    }
  ];

  return (
    <ClientPortalLayout activeSection="dashboard">
      <div className="space-y-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-[#111111] mb-2">
            Welcome back, TechFlow Inc!
          </h1>
          <p className="text-gray-600">
            Here's an overview of your current projects and latest updates.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="border-[#EAEAEA]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-[#111111]">{stat.value}</p>
                    <p className="text-xs text-[#babc6b] mt-1">{stat.change}</p>
                  </div>
                  {stat.icon && (
                    <stat.icon className="w-8 h-8 text-[#babc6b]" />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Latest Reports Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-[#EAEAEA]">
            <CardHeader>
              <h2 className="text-xl font-bold text-[#111111]">Latest Reports</h2>
              <p className="text-gray-600">Your most recent performance reports and insights</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {latestReports.map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center justify-between p-4 border border-[#EAEAEA] rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#babc6b] rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#111111]">{report.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(report.date).toLocaleDateString()}
                        </span>
                        <span>{report.size}</span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs">{report.type}</span>
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

              <div className="pt-4 border-t border-[#EAEAEA]">
                <Button
                  variant="outline"
                  className="w-full border-[#babc6b] text-[#babc6b] hover:bg-[#babc6b] hover:text-black"
                >
                  View All Reports
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="border-[#EAEAEA]">
            <CardHeader>
              <h2 className="text-xl font-bold text-[#111111]">Quick Actions</h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="h-16 border-[#EAEAEA] hover:border-[#babc6b] hover:text-[#babc6b]"
                >
                  <div className="text-center">
                    <FileText className="w-6 h-6 mx-auto mb-1" />
                    <span>View Latest Report</span>
                  </div>
                </Button>
                <Button
                  variant="outline"
                  className="h-16 border-[#EAEAEA] hover:border-[#babc6b] hover:text-[#babc6b]"
                >
                  <div className="text-center">
                    <TrendingUp className="w-6 h-6 mx-auto mb-1" />
                    <span>Check Project Status</span>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </ClientPortalLayout>
  );
}
