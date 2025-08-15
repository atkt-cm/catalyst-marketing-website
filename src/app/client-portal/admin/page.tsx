"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Users,
  Settings,
  Plus,
  Mail,
  Shield,
  BarChart3,
  FileText,
  Image as ImageIcon,
  Calendar
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AdminDashboard() {
  const [newClientEmail, setNewClientEmail] = useState("");

  // Mock data
  const clients = [
    {
      id: 1,
      name: "TechFlow Inc",
      email: "contact@techflow.com",
      status: "Active",
      lastLogin: "2024-12-15",
      projects: 4,
      reports: 12
    },
    {
      id: 2,
      name: "InnovateCorp",
      email: "hello@innovatecorp.com",
      status: "Active",
      lastLogin: "2024-12-14",
      projects: 3,
      reports: 8
    },
    {
      id: 3,
      name: "NextGen Solutions",
      email: "info@nextgen.com",
      status: "Inactive",
      lastLogin: "2024-12-10",
      projects: 2,
      reports: 6
    }
  ];

  const stats = [
    {
      title: "Total Clients",
      value: clients.length,
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Active Projects",
      value: clients.reduce((acc, client) => acc + client.projects, 0),
      icon: BarChart3,
      color: "text-green-600"
    },
    {
      title: "Reports Generated",
      value: clients.reduce((acc, client) => acc + client.reports, 0),
      icon: FileText,
      color: "text-purple-600"
    },
    {
      title: "Pending Tasks",
      value: 8,
      icon: Calendar,
      color: "text-orange-600"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: "New report uploaded for TechFlow Inc",
      time: "2 hours ago",
      type: "report"
    },
    {
      id: 2,
      action: "Creative approved by InnovateCorp",
      time: "4 hours ago",
      type: "creative"
    },
    {
      id: 3,
      action: "New client invitation sent",
      time: "1 day ago",
      type: "client"
    },
    {
      id: 4,
      action: "Project task completed for NextGen",
      time: "2 days ago",
      type: "task"
    }
  ];

  const handleInviteClient = () => {
    if (!newClientEmail) return;
    // In a real app, this would send an email invitation
    console.log(`Inviting client: ${newClientEmail}`);
    setNewClientEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-[#111111] text-white p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-2xl font-bold">
                Catalyst<span className="text-[#babc6b]">.</span>
              </Link>
              <div className="hidden md:block">
                <Badge className="bg-[#babc6b] text-black">Admin Panel</Badge>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Link href="/client-portal">
                <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                  View Client Portal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-[#111111] mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage clients, content, and portal settings</p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="border-[#EAEAEA]">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-[#111111]">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Client Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-[#EAEAEA] h-fit">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-[#111111]">Client Management</h2>
                  <Button size="sm" className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black">
                    <Plus className="w-4 h-4 mr-1" />
                    New Client
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Invite Client */}
                <div className="p-4 bg-[#babc6b]/10 rounded-lg border border-[#babc6b]/20">
                  <h3 className="font-medium text-[#111111] mb-2">Invite New Client</h3>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="client@company.com"
                      value={newClientEmail}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewClientEmail(e.target.value)}
                      className="flex-1 border-[#EAEAEA]"
                    />
                    <Button
                      onClick={handleInviteClient}
                      size="sm"
                      className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black"
                    >
                      <Mail className="w-4 h-4 mr-1" />
                      Invite
                    </Button>
                  </div>
                </div>

                {/* Client List */}
                <div className="space-y-3">
                  {clients.map((client) => (
                    <div key={client.id} className="flex items-center justify-between p-3 border border-[#EAEAEA] rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#babc6b] rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-black" />
                        </div>
                        <div>
                          <p className="font-medium text-[#111111]">{client.name}</p>
                          <p className="text-sm text-gray-600">{client.email}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`inline-block px-2 py-1 rounded-full text-xs ${
                          client.status === 'Active'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {client.status}
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Last: {new Date(client.lastLogin).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-[#EAEAEA]">
              <CardHeader>
                <h2 className="text-xl font-bold text-[#111111]">Recent Activity</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        activity.type === 'report' ? 'bg-blue-100' :
                        activity.type === 'creative' ? 'bg-purple-100' :
                        activity.type === 'client' ? 'bg-green-100' :
                        'bg-orange-100'
                      }`}>
                        {activity.type === 'report' && <FileText className="w-4 h-4 text-blue-600" />}
                        {activity.type === 'creative' && <ImageIcon className="w-4 h-4 text-purple-600" />}
                        {activity.type === 'client' && <Users className="w-4 h-4 text-green-600" />}
                        {activity.type === 'task' && <Calendar className="w-4 h-4 text-orange-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-[#111111]">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="border-[#EAEAEA]">
            <CardHeader>
              <h2 className="text-xl font-bold text-[#111111]">Quick Actions</h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  className="h-20 border-[#EAEAEA] hover:border-[#babc6b] hover:text-[#babc6b] flex-col"
                >
                  <Settings className="w-6 h-6 mb-2" />
                  <span>Google Drive Settings</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-20 border-[#EAEAEA] hover:border-[#babc6b] hover:text-[#babc6b] flex-col"
                >
                  <Shield className="w-6 h-6 mb-2" />
                  <span>Security Settings</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-20 border-[#EAEAEA] hover:border-[#babc6b] hover:text-[#babc6b] flex-col"
                >
                  <BarChart3 className="w-6 h-6 mb-2" />
                  <span>Analytics Dashboard</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

// Badge component for admin panel
function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
      {children}
    </span>
  );
}
