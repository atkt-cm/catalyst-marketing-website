"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useState, useEffect, useMemo, useCallback } from "react";
import ConsultationForm from "./ConsultationForm";
import { motion } from "framer-motion";

export default function Hero() {
  const { scrollToElement } = useSmoothScroll();
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Cycling words for "exclusive" with typing animation
  const words = useMemo(() => ["exclusive", "premium", "tailored", "focused"], []);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showSideTab, setShowSideTab] = useState(false);
  const [isSideTabOpen, setIsSideTabOpen] = useState(false);
  const [isBottomTabOpen, setIsBottomTabOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Optimize typing animation with useCallback
  const handleTypingAnimation = useCallback(() => {
    const currentWord = words[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping && !isDeleting) {
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
          setIsTyping(false);
        }, 2000);
      }
    } else if (isDeleting) {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setIsDeleting(false);
        setIsTyping(true);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, currentWordIndex, isTyping, isDeleting, words]);

  useEffect(handleTypingAnimation, [handleTypingAnimation]);

  // Handle mounting and scroll
  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const heroHeight = window.innerHeight;
        const isScrolledDown = window.scrollY > heroHeight * 0.7;
        setShowSideTab(isScrolledDown);
      }
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23babc6b' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="flex items-center space-x-2 mb-8">
              <div className="w-2 h-2 bg-[#babc6b] rounded-full"></div>
              <span className="text-gray-600 font-medium">Hi, we're Catalyst</span>
            </motion.div>

            {/* Main heading - Optimized for performance */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="text-6xl md:text-8xl font-bold text-black leading-tight mb-8"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 700 }}
            >
              Your{" "}
              <span className="text-[#babc6b] relative">
                {displayedText}
                <span
                  className={`inline-block w-0.5 h-[1em] bg-[#babc6b] ml-1 align-middle ${
                    isDeleting ? '' : 'animate-pulse'
                  }`}
                />
              </span>{" "}
              marketing
              <br />
              <span className="text-gray-700">agency that drives</span>
              <br />
              exceptional growth
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                onClick={() => setIsConsultationOpen(true)}
              >
                Request Private Access
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 hover:bg-gray-50 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                onClick={() => scrollToElement('work')}
              >
                View Exclusive Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Simplified decorative elements */}
      <div
        className="absolute top-1/4 left-8 w-24 h-24 bg-[#babc6b]/10 rounded-full blur-xl opacity-60"
        style={{
          animation: 'float 6s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-1/4 right-16 w-32 h-32 bg-[#babc6b]/20 rounded-full blur-2xl opacity-40"
        style={{
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />

      <ConsultationForm
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Video Tab - Simple version that works */}
      <div
        className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-500 ${
          showSideTab ? 'translate-x-0 opacity-100' : 'translate-x-80 opacity-0'
        }`}
      >
        <div
          className={`bg-white shadow-2xl rounded-l-2xl border border-gray-200 transition-transform duration-300 ${
            isSideTabOpen ? 'translate-x-0' : 'translate-x-72'
          }`}
        >
          {/* Tab opener button */}
          <button
            onClick={() => setIsSideTabOpen(!isSideTabOpen)}
            className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-[#babc6b] hover:bg-[#a8aa5a] text-black px-4 py-8 rounded-l-lg shadow-lg transition-all duration-300 flex flex-col items-center justify-center space-y-2 hover:scale-105 lg:font-normal lg:px-[6px]"
          >
            <span className="text-xs font-bold tracking-wider -rotate-90 whitespace-nowrap lg:text-[9px]">
              WATCH
            </span>
            <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isSideTabOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Tab content */}
          <div className="w-80 p-6">
            <div className="relative overflow-hidden aspect-video rounded-lg mb-4">
              <img
                src="/image_(1).png"
                alt="Catalyst Agency - Focused Partners, Tailored Results"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-white/20 hover:bg-white/30 text-white transition-all duration-200 hover:scale-110"
                >
                  <Play className="w-6 h-6" />
                </Button>
              </div>
            </div>

            <h3 className="font-semibold text-lg mb-2">CATALYST: FOCUSED PARTNERS. TAILORED RESULTS</h3>
            <p className="text-sm text-gray-600 mb-4">Stop losing revenue to agencies that see you as just another number.</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#babc6b] to-[#a8aa5a] rounded-full"></div>
                <div>
                  <p className="font-medium text-black text-sm">Hear from Sarah</p>
                  <p className="text-xs text-gray-600">CEO of Catalyst</p>
                </div>
              </div>

              <Button
                variant="link"
                className="p-0 text-sm font-medium hover:text-[#babc6b] transition-colors"
              >
                WATCH NOW
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}
