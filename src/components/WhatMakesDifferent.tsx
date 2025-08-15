"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Users, Target, Brain, TrendingUp, Shield } from "lucide-react";

export default function WhatMakesDifferent() {
  const features = [
    {
      icon: Users,
      title: "Selective Partnership",
      description: "We work with only 15 established businesses at any time—ensuring your team receives dedicated attention, not generic solutions.",
      color: "bg-blue-500"
    },
    {
      icon: Brain,
      title: "AI Integration Edge",
      description: "While traditional agencies lag behind, every Catalyst campaign leverages cutting-edge AI for content, automation, and predictive analytics—giving you an unfair advantage.",
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "Embedded Expertise",
      description: "You won't get junior staff or generic strategies. Our hand-picked senior specialists integrate directly into your business infrastructure, becoming your marketing department.",
      color: "bg-green-500"
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "£2.3M additional revenue generated for existing partners across hospitality, consulting, and construction in the past 18 months.",
      color: "bg-orange-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="what-makes-different" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="w-2 h-2 bg-[#babc6b] rounded-full"></div>
              <span className="text-gray-600 font-medium">What Makes Catalyst Different</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
              AUTHORITY + SCARCITY
            </h2>

            <div className="max-w-4xl mx-auto mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
                While other agencies chase volume,
                <br />
                <span className="text-[#babc6b]">we choose impact.</span>
              </h3>
              <p className="text-xl text-gray-600">
                Why we deliberately limit our client roster to maximize your results
              </p>
            </div>

            {/* Partner Counter */}
            <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200 mb-12">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-[#babc6b] rounded-full animate-pulse"></div>
                <span className="text-gray-700 font-medium">Currently Working With</span>
                <span className="text-2xl font-bold text-[#babc6b]">4</span>
                <span className="text-gray-700 font-medium">Select Partners</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Features Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <motion.div
                    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 h-full"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
