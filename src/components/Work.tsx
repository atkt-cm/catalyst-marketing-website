"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ConsultationForm from "./ConsultationForm";

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const filters = ["All", "Branding", "Digital Marketing", "Strategy", "Content", "Social Media"];

  const projects = [
    {
      id: 1,
      title: "Revolutionizing TechFlow's digital presence",
      client: "TechFlow",
      year: "2024",
      category: ["Branding", "Digital Marketing"],
      image: "/image_(1).png",
      description: "Complete brand overhaul and digital marketing strategy that increased conversions by 340%.",
      tags: ["Brand Strategy", "Digital Marketing", "Analytics"]
    },
    {
      id: 2,
      title: "Streamlining operations for Centrally Managed",
      client: "Centrally Managed",
      year: "2024",
      category: ["Strategy", "Digital Marketing"],
      image: "/Centrally_managed_1.png",
      description: "Comprehensive digital transformation and marketing automation that increased operational efficiency by 85%.",
      tags: ["Digital Transformation", "Marketing Automation", "Process Optimization"]
    },
    {
      id: 3,
      title: "Scaling InnovateCorp's market reach",
      client: "InnovateCorp",
      year: "2024",
      category: ["Strategy", "Content"],
      image: "/Aston_Logo.png",
      description: "Strategic content marketing approach that expanded market presence across 5 new territories.",
      tags: ["Content Strategy", "Market Expansion", "Brand Positioning"]
    },
    {
      id: 4,
      title: "Building community for NextGen",
      client: "NextGen",
      year: "2023",
      category: ["Social Media", "Content"],
      image: "/image_(1).png",
      description: "Social media strategy that built an engaged community of 250k+ followers and increased sales by 180%.",
      tags: ["Social Media", "Community Building", "Content Creation"]
    },
    {
      id: 5,
      title: "Launching GlobalReach's new product line",
      client: "GlobalReach",
      year: "2023",
      category: ["Branding", "Strategy"],
      image: "/image_(1).png",
      description: "End-to-end product launch strategy including brand identity, positioning, and go-to-market approach.",
      tags: ["Product Launch", "Brand Identity", "Go-to-Market"]
    }
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));

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
    <section id="work" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="w-2 h-2 bg-[#babc6b] rounded-full"></div>
              <span className="text-gray-600 font-medium">Our Work</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-8">
              Take a look at our success stories
            </h2>
          </AnimatedSection>

          {/* Filter buttons */}
          <AnimatedSection delay={0.2} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <motion.div
                key={filter}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-6 py-2 transition-all duration-300 ${
                    activeFilter === filter
                      ? "bg-[#babc6b] hover:bg-[#a8aa5a] text-black"
                      : "border-gray-300 hover:bg-gray-50 hover:border-[#babc6b]"
                  }`}
                >
                  {filter}
                </Button>
              </motion.div>
            ))}
          </AnimatedSection>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeFilter} // Re-animate when filter changes
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="group border border-gray-200 hover:border-[#babc6b] transition-all duration-300 hover:shadow-xl overflow-hidden h-full">
                  <motion.div
                    className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#babc6b]/20 to-[#a8aa5a]/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {project.client === "Centrally Managed" ? (
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                          <img
                            src="/image_(1).png"
                            alt="Centrally Managed Logo"
                            className="h-16 w-auto object-contain"
                          />
                        </div>
                      ) : (
                        <div className="text-2xl font-bold text-gray-600">{project.client}</div>
                      )}
                    </div>

                    {/* Category badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-white/90 text-gray-700">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 2 && (
                        <Badge variant="secondary" className="bg-white/90 text-gray-700">
                          +{project.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </motion.div>

                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                      <span>{project.year}</span>
                      <span>•</span>
                      <span>{project.client}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-[#babc6b] transition-colors flex-grow">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    <Button variant="link" className="p-0 text-[#babc6b] hover:text-[#a8aa5a] font-medium group self-start">
                      View case study
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <AnimatedSection delay={0.4} className="text-center">
            <h3 className="text-3xl font-bold text-black mb-6">
              Want exclusive access to results like these?
            </h3>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => setIsConsultationOpen(true)}
                className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium px-8 py-3 rounded-full transition-all duration-300"
              >
                Request Private Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>

      <ConsultationForm
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </section>
  );
}
