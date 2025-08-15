"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun, ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import ConsultationForm from "./ConsultationForm";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollToElement } = useSmoothScroll();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section using Intersection Observer
  useEffect(() => {
    const sections = ['services', 'work', 'about', 'blog'];
    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observers = sections.map(sectionId => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId);
          }
        });
      }, observerOptions);

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToElement(sectionId);
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border border-gray-200/50 rounded-b-3xl mx-4 mt-2'
          : 'bg-white/90 backdrop-blur-md border-b border-gray-100'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="text-2xl font-bold text-black">
              Catalyst<span className="text-[#babc6b]">.</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center space-x-1 text-gray-700 hover:text-black transition-colors relative pb-1 ${
                activeSection === 'services' ? 'text-black' : ''
              }`}>
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
                {activeSection === 'services' && (
                  <motion.header
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#babc6b] rounded-full"
                    layoutId="activeIndicator"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <Link href="/services/digital-marketing" className="w-full">
                    Digital Marketing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/brand-strategy" className="w-full">
                    Brand Strategy
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/content-creation" className="w-full">
                    Content Creation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/social-media" className="w-full">
                    Social Media
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/ai-automation" className="w-full">
                    AI Automation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/analytics-insights" className="w-full">
                    Analytics & Insights
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => handleNavClick('work')}
              className={`relative text-gray-700 hover:text-black transition-colors pb-1 ${
                activeSection === 'work' ? 'text-black' : ''
              }`}
            >
              Work
              {activeSection === 'work' && (
                <motion.header
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#babc6b] rounded-full"
                  layoutId="activeIndicator"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`relative text-gray-700 hover:text-black transition-colors pb-1 ${
                activeSection === 'about' ? 'text-black' : ''
              }`}
            >
              About
              {activeSection === 'about' && (
                <motion.header
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#babc6b] rounded-full"
                  layoutId="activeIndicator"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </button>
            <button
              onClick={() => handleNavClick('blog')}
              className={`relative text-gray-700 hover:text-black transition-colors pb-1 ${
                activeSection === 'blog' ? 'text-black' : ''
              }`}
            >
              Blog
              {activeSection === 'blog' && (
                <motion.header
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#babc6b] rounded-full"
                  layoutId="activeIndicator"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </button>
            <Link
              href="/contact"
              className="relative text-gray-700 hover:text-black transition-colors pb-1"
            >
              Contact
            </Link>

          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="hidden md:flex"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
            </motion.div>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setIsConsultationOpen(true)}
                className="hidden md:flex bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium transition-all duration-300"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="w-6 h-6" />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-6 mt-8">
                  <button
                    onClick={() => handleNavClick('services')}
                    className={`text-lg font-medium text-left hover:text-[#babc6b] transition-colors ${
                      activeSection === 'services' ? 'text-[#babc6b] font-bold' : ''
                    }`}
                  >
                    Services
                  </button>
                  <button
                    onClick={() => handleNavClick('work')}
                    className={`text-lg font-medium text-left hover:text-[#babc6b] transition-colors ${
                      activeSection === 'work' ? 'text-[#babc6b] font-bold' : ''
                    }`}
                  >
                    Work
                  </button>
                  <button
                    onClick={() => handleNavClick('about')}
                    className={`text-lg font-medium text-left hover:text-[#babc6b] transition-colors ${
                      activeSection === 'about' ? 'text-[#babc6b] font-bold' : ''
                    }`}
                  >
                    About
                  </button>
                  <button
                    onClick={() => handleNavClick('blog')}
                    className={`text-lg font-medium text-left hover:text-[#babc6b] transition-colors ${
                      activeSection === 'blog' ? 'text-[#babc6b] font-bold' : ''
                    }`}
                  >
                    Blog
                  </button>
                  <Link href="/contact" className="text-lg font-medium hover:text-[#babc6b] transition-colors">
                    Contact
                  </Link>

                  <Button
                    onClick={() => setIsConsultationOpen(true)}
                    className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium"
                  >
                    Book Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <ConsultationForm
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </motion.header>
  );
}
