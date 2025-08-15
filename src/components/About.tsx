"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";
import ConsultationForm from "./ConsultationForm";

export default function About() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <AnimatedSection direction="left">
              <div className="flex items-center space-x-2 mb-8">
                <div className="w-2 h-2 bg-[#babc6b] rounded-full"></div>
                <span className="text-gray-600 font-medium">Who are we?</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-8">
                Specialist marketing consultants who become strategic partners, and a relentless advocate for ambitious SMEs ready to disrupt industries. We're Catalyst.
              </h2>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => setIsConsultationOpen(true)}
                  className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Request Private Access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsConsultationOpen(true)}
                  className="border-gray-300 hover:bg-gray-50 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  View Exclusive Portfolio
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </AnimatedSection>

            {/* Right content - stats or additional info */}
            <AnimatedSection direction="right" delay={0.2} className="space-y-8">
              <motion.div
                className="grid grid-cols-2 gap-8"
                variants={statsVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div variants={statItemVariants} className="text-center group">
                  <motion.div
                    className="text-4xl font-bold text-[#babc6b] mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Updated client count */}
                    Just 6
                  </motion.div>
                  <div className="text-gray-600 group-hover:text-gray-800 transition-colors">Private Clients At Any One Time</div>
                </motion.div>
                <motion.div variants={statItemVariants} className="text-center group">
                  <motion.div
                    className="text-4xl font-bold text-[#babc6b] mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    97%
                  </motion.div>
                  <div className="text-gray-600 group-hover:text-gray-800 transition-colors">Client Retention</div>
                </motion.div>
                <motion.div variants={statItemVariants} className="text-center group">
                  <motion.div
                    className="text-4xl font-bold text-[#babc6b] mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    12+
                  </motion.div>
                  <div className="text-gray-600 group-hover:text-gray-800 transition-colors">Month Partnerships</div>
                </motion.div>
                <motion.div variants={statItemVariants} className="text-center group">
                  <motion.div
                    className="text-4xl font-bold text-[#babc6b] mb-2"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    50+
                  </motion.div>
                  <div className="text-gray-600 group-hover:text-gray-800 transition-colors">Years Experience</div>
                </motion.div>
              </motion.div>

              <motion.div
                className="bg-gray-50 rounded-2xl p-8"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-semibold text-lg mb-4">Our Private Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our mission is to engineer explosive growth for a carefully curated portfolio of SME's. We're not just about marketing; we're about building market dominance and integrating deeply into your business. We achieve this through AI-driven innovation, unparalleled strategic insight, and a relentless commitment to delivering results that exceed expectations. We don't chase clients – we cultivate partnerships with companies destined for greatness.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      <ConsultationForm
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </section>
    </>
  );
}
