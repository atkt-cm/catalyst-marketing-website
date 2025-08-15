"use client";

import ClientPortalLayout from "@/components/client-portal/ClientPortalLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  User,
  Clock,
  Flag,
  CheckCircle,
  Circle,
  Play
} from "lucide-react";
import { motion } from "framer-motion";

interface Task {
  id: number;
  title: string;
  description: string;
  priority: string;
  assignee: string;
  tags: string[];
  dueDate?: string;
  completedDate?: string;
  progress?: number;
}

interface Column {
  id: string;
  title: string;
  color: string;
  tasks: Task[];
}

export default function ProjectPlanPage() {
  // Mock project tasks data
  const columns: Column[] = [
    {
      id: "todo",
      title: "To Do",
      color: "bg-gray-100",
      tasks: [
        {
          id: 1,
          title: "Q1 Social Media Strategy",
          description: "Develop comprehensive social media strategy for first quarter",
          priority: "high",
          assignee: "Marketing Team",
          dueDate: "2024-12-30",
          tags: ["Strategy", "Social Media"]
        },
        {
          id: 2,
          title: "Website Performance Audit",
          description: "Complete technical audit of website performance and SEO",
          priority: "medium",
          assignee: "Technical Team",
          dueDate: "2025-01-05",
          tags: ["SEO", "Technical"]
        },
        {
          id: 3,
          title: "Brand Guidelines Update",
          description: "Refresh brand guidelines with new visual elements",
          priority: "low",
          assignee: "Creative Team",
          dueDate: "2025-01-15",
          tags: ["Branding", "Design"]
        }
      ]
    },
    {
      id: "inprogress",
      title: "In Progress",
      color: "bg-yellow-100",
      tasks: [
        {
          id: 4,
          title: "Holiday Campaign Creatives",
          description: "Design and develop creative assets for holiday campaign",
          priority: "high",
          assignee: "Creative Team",
          dueDate: "2024-12-20",
          tags: ["Creative", "Campaign"],
          progress: 75
        },
        {
          id: 5,
          title: "PPC Campaign Optimization",
          description: "Optimize current PPC campaigns for better ROI",
          priority: "high",
          assignee: "PPC Specialist",
          dueDate: "2024-12-25",
          tags: ["PPC", "Optimization"],
          progress: 60
        },
        {
          id: 6,
          title: "Email Newsletter Design",
          description: "Create template for monthly newsletter",
          priority: "medium",
          assignee: "Design Team",
          dueDate: "2024-12-28",
          tags: ["Email", "Design"],
          progress: 40
        }
      ]
    },
    {
      id: "completed",
      title: "Completed",
      color: "bg-green-100",
      tasks: [
        {
          id: 7,
          title: "November Performance Report",
          description: "Generate and deliver monthly performance analytics",
          priority: "high",
          assignee: "Analytics Team",
          completedDate: "2024-12-01",
          tags: ["Reporting", "Analytics"]
        },
        {
          id: 8,
          title: "Social Media Content Calendar",
          description: "Create content calendar for December",
          priority: "medium",
          assignee: "Content Team",
          completedDate: "2024-11-28",
          tags: ["Content", "Planning"]
        },
        {
          id: 9,
          title: "Website Speed Optimization",
          description: "Improve website loading speed and performance",
          priority: "high",
          assignee: "Technical Team",
          completedDate: "2024-11-25",
          tags: ["Technical", "Performance"]
        },
        {
          id: 10,
          title: "Competitor Analysis",
          description: "Comprehensive analysis of main competitors",
          priority: "medium",
          assignee: "Strategy Team",
          completedDate: "2024-11-20",
          tags: ["Strategy", "Research"]
        }
      ]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (columnId: string) => {
    switch (columnId) {
      case 'todo': return <Circle className="w-4 h-4 text-gray-500" />;
      case 'inprogress': return <Play className="w-4 h-4 text-yellow-500" />;
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-500" />;
      default: return <Circle className="w-4 h-4" />;
    }
  };

  return (
    <ClientPortalLayout activeSection="project-plan">
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-[#111111] mb-2">Project Plan</h1>
          <p className="text-gray-600">
            Track the progress of your projects and see what our team is working on.
          </p>
        </motion.div>

        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="border-[#EAEAEA]">
            <CardHeader>
              <h2 className="text-xl font-bold text-[#111111]">Project Overview</h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4">
                  <div className="text-2xl font-bold text-[#babc6b] mb-1">
                    {columns.reduce((acc, col) => acc + col.tasks.length, 0)}
                  </div>
                  <div className="text-sm text-gray-600">Total Tasks</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-2xl font-bold text-gray-500 mb-1">
                    {columns.find(col => col.id === 'todo')?.tasks.length || 0}
                  </div>
                  <div className="text-sm text-gray-600">To Do</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-2xl font-bold text-yellow-500 mb-1">
                    {columns.find(col => col.id === 'inprogress')?.tasks.length || 0}
                  </div>
                  <div className="text-sm text-gray-600">In Progress</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-2xl font-bold text-green-500 mb-1">
                    {columns.find(col => col.id === 'completed')?.tasks.length || 0}
                  </div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Kanban Board */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {columns.map((column, columnIndex) => (
            <div key={column.id} className="space-y-4">
              {/* Column Header */}
              <div className={`${column.color} rounded-lg p-4`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(column.id)}
                    <h3 className="font-bold text-[#111111]">{column.title}</h3>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {column.tasks.length}
                  </Badge>
                </div>
              </div>

              {/* Tasks */}
              <div className="space-y-3">
                {column.tasks.map((task, taskIndex) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * taskIndex }}
                  >
                    <Card className="border-[#EAEAEA] hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          {/* Task Header */}
                          <div className="flex items-start justify-between">
                            <h4 className="font-medium text-[#111111] text-sm">{task.title}</h4>
                            <Badge
                              variant="outline"
                              className={`text-xs ${getPriorityColor(task.priority)}`}
                            >
                              {task.priority}
                            </Badge>
                          </div>

                          {/* Task Description */}
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {task.description}
                          </p>

                          {/* Progress Bar (for in-progress tasks) */}
                          {task.progress && (
                            <div className="space-y-1">
                              <div className="flex justify-between text-xs">
                                <span className="text-gray-600">Progress</span>
                                <span className="text-[#babc6b] font-medium">{task.progress}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-[#babc6b] h-2 rounded-full transition-all duration-300"
                                  style={{ width: `${task.progress}%` }}
                                ></div>
                              </div>
                            </div>
                          )}

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1">
                            {task.tags.map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                variant="outline"
                                className="text-xs bg-gray-50"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {/* Task Footer */}
                          <div className="flex items-center justify-between text-xs text-gray-600">
                            <div className="flex items-center space-x-1">
                              <User className="w-3 h-3" />
                              <span>{task.assignee}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>
                                {task.dueDate ? new Date(task.dueDate).toLocaleDateString() :
                                 task.completedDate ? new Date(task.completedDate).toLocaleDateString() : ''}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="border-[#EAEAEA]">
            <CardContent className="p-4">
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
                <div className="flex items-center space-x-2">
                  <Flag className="w-4 h-4 text-red-500" />
                  <span>High Priority</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Flag className="w-4 h-4 text-yellow-500" />
                  <span>Medium Priority</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Flag className="w-4 h-4 text-green-500" />
                  <span>Low Priority</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span>Due Date</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Read-only Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="border-[#babc6b] bg-[#babc6b]/5">
            <CardContent className="p-4">
              <p className="text-center text-sm text-gray-600">
                This is a read-only view of your project plan. Our team manages task updates and progress tracking.
                For questions about specific tasks, please contact your project manager.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </ClientPortalLayout>
  );
}
