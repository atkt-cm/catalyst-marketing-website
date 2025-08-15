"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  FileText,
  Image,
  Kanban,
  LogOut,
  Menu,
  X,
  User
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ClientPortalLayoutProps {
  children: ReactNode;
  activeSection: string;
}

export default function ClientPortalLayout({ children, activeSection }: ClientPortalLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const navigation = [
    {
      name: "Dashboard",
      href: "/client-portal/dashboard",
      icon: LayoutDashboard,
      id: "dashboard"
    },
    {
      name: "Reports",
      href: "/client-portal/reports",
      icon: FileText,
      id: "reports"
    },
    {
      name: "Creatives & Ads",
      href: "/client-portal/creatives",
      icon: Image,
      id: "creatives"
    },
    {
      name: "Project Plan",
      href: "/client-portal/project-plan",
      icon: Kanban,
      id: "project-plan"
    }
  ];

  const handleLogout = () => {
    // In a real app, this would clear authentication tokens
    router.push('/client-portal');
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{ x: sidebarOpen ? 0 : '-100%' }}
        className="fixed inset-y-0 left-0 z-50 w-64 bg-[#111111] text-white lg:static lg:translate-x-0 lg:z-auto"
      >
        <div className="flex flex-col h-full">
          {/* Header with logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-800">
            <Link href="/" className="text-xl font-bold">
              Catalyst<span className="text-[#babc6b]">.</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-white hover:bg-gray-800"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* User info */}
          <div className="px-6 py-4 border-b border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#babc6b] rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-black" />
              </div>
              <div>
                <p className="font-medium text-white">TechFlow Inc</p>
                <p className="text-sm text-gray-400">Premium Client</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 py-6">
            <div className="space-y-2">
              {navigation.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-[#babc6b] text-black font-medium'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Logout button */}
          <div className="px-6 pb-6">
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Top bar */}
        <header className="h-16 bg-white border-b border-[#EAEAEA] flex items-center justify-between px-6">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-semibold text-[#111111] lg:ml-0 ml-4">
              {navigation.find(item => item.id === activeSection)?.name || 'Dashboard'}
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-[#111111]">TechFlow Inc</p>
              <p className="text-xs text-gray-600">Premium Client</p>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
