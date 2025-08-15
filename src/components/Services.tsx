"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, Target, FileText, Mail, Monitor, Bot } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: Search,
      title: "SEO",
      description: "The #1 ranking captures 39.8% of all clicks – don't let competitors dominate where it matters",
      color: "bg-blue-500",
      link: "/services/digital-marketing"
    },
    {
      icon: Target,
      title: "PPC",
      description: "25-40% of ad budgets are wasted without proper optimisation – we eliminate waste, maximise ROI",
      color: "bg-green-500",
      link: "/services/digital-marketing"
    },
    {
      icon: FileText,
      title: "Content",
      description: "Personalised content converts 202% better than generic messaging – authority-building that actually converts",
      color: "bg-purple-500",
      link: "/services/content-creation"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Automated emails generate 2,361% better conversions – personal, segmented sequences that work while you sleep",
      color: "bg-orange-500",
      link: "/services/digital-marketing"
    },
    {
      icon: Monitor,
      title: "Web Design",
      description: "Well-optimized landing pages increase conversions by 220% – conversion-engineered experiences that sell",
      color: "bg-pink-500",
      link: "/services/brand-strategy"
    },
    {
      icon: Bot,
      title: "AI & Automation",
      description: "Save 6+ hours per week on routine tasks – next-gen tools that free your time for growth",
      color: "bg-cyan-500",
      link: "/services/ai-automation"
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
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="w-2 h-2 bg-[#babc6b] rounded-full"></div>
              <span className="text-gray-600 font-medium">Our Expertise</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-8">
              How we accelerate your business to the next level
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join the select SMEs who've discovered the competitive advantage of an exclusive tailored agency who are embedded into your business. We limit our client roster to deliver maximum impact, because your success is our reputation. Your Catalyst team use years of industry knowledge powered by the latest AIadvancements to excel in integrated marketing.
            </p>

            <Button className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              See all services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </AnimatedSection>

          {/* Services Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="group border border-gray-200 hover:border-[#babc6b] transition-all duration-300 hover:shadow-xl h-full">
                    <CardContent className="p-8 h-full flex flex-col">
                      <motion.div
                        className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>

                      <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-[#babc6b] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                        {service.description}
                      </p>

                      <Link href={service.link}>
                        <Button variant="link" className="p-0 text-[#babc6b] hover:text-[#a8aa5a] font-medium group self-start">
                          Learn more
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
