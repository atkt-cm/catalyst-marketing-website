"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone, FileText, Users, TrendingUp, ArrowRight, CheckCircle, ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ConsultationForm from "./ConsultationForm";

export default function HowItWorks() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const steps = [
    {
      number: 1,
      icon: Phone,
      title: "Discovery Call",
      subtitle: "(No Obligation)",
      description: "Meet the Catalyst. founder directly. Start as we mean to go on, a personal approach to your marketing team. This isn't a sales pitch; it's a mutual interview. In our initial 30-minute call, we focus on one thing: strategic alignment. We'll explore your ambitions, your core challenges, and your vision for market leadership. It's our chance to understand if you're the right fit for our intensive partnership model, and your chance to see if our approach resonates with your goals.",
      commitment: "FREE",
      color: "bg-gradient-to-br from-[#8F8DDB] via-[#A89EE8] to-[#7A77D1]",
      delay: 0
    },
    {
      number: 2,
      icon: FileText,
      title: "The Deep Dive Audit",
      subtitle: "",
      description: "If we're aligned, we move beyond conversation to analysis. Our team conducts a comprehensive audit of your digital ecosystem. Using 50+ years of business and marketing knowledge paired with advanced AI tools, we analyse your current website CRO, competitive landscape, data infrastructure, and market positioning. We dig deep to uncover the foundational insights and hidden opportunities that generic strategies always miss. Looking for business automation implementation? This is where we analyse your internal operational engine and streamline your entire operational workflow. we identify the bottlenecks and repetitive tasks that are costing you time and money. We diagnose exactly where strategic automation can be implemented to build efficiency and unlock capacity within your team. The result is a comprehensive understanding of where the greatest opportunities for growth lie whether through smarter marketing, seamless automation, or both.",
      commitment: "LOW COMMITMENT",
      color: "bg-gradient-to-br from-[#8F8DDB] via-[#9B92E3] to-[#6F6BC8]",
      delay: 0.2
    },
    {
      number: 3,
      icon: Users,
      title: "The Strategic Growth Blueprint",
      subtitle: "",
      description: "Armed with data, we present your bespoke Growth Blueprint. This is a detailed 90-day strategic roadmap not a generic proposal. It outlines clear objectives, measurable KPIs, the exact strategies we'll deploy, and the foundational digital transformation needed to achieve your goals. This document forms the bedrock of our partnership and commitment.",
      commitment: "MEDIUM COMMITMENT",
      color: "bg-gradient-to-br from-[#8F8DDB] via-[#7E7ACF] to-[#9489DD]",
      delay: 0.4
    },
    {
      number: 4,
      icon: TrendingUp,
      title: "Relentless Optimisation & Partnership",
      subtitle: "",
      description: "Our partnership is a living, breathing entity. We operate in agile sprints, continuously monitoring performance and leveraging AI for real-time optimizations. Through regular, data-rich strategic reviews, we adapt, innovate, and act as your relentless advocate, ensuring we are always pushing towards market dominance.",
      commitment: "FULL PARTNERSHIP",
      color: "bg-gradient-to-br from-[#8F8DDB] via-[#B5ACF0] to-[#8B82D9]",
      delay: 0.6
    }
  ];

  return (
    <section className="py-24 bg-white" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="w-2 h-2 bg-[#babc6b] rounded-full"></div>
              <span className="text-gray-600 font-medium">Our Process</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-8">
              HOW IT WORKS
              <span className="block text-2xl md:text-3xl text-gray-600 mt-2">
                (CONSISTENCY + COMMITMENT)
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our proven 4-step process ensures sustainable growth through gradual commitment escalation and consistent value delivery.
            </p>
          </AnimatedSection>

          {/* Flowchart */}
          <div className="relative">
            {/* Animated Path Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2 hidden md:block">
              <motion.div
                className="w-full bg-gradient-to-b from-[#babc6b] to-[#a8aa5a] rounded-full"
                style={{ scaleY: pathLength, transformOrigin: "top" }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-24 md:space-y-32">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: step.delay }}
                  >
                    <div className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? '' : 'md:flex-row-reverse'}`}>

                      {/* Step Content */}
                      <div className={`flex-1 ${isEven ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                        <motion.div
                          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                          whileHover={{ scale: 1.02, y: -5 }}
                        >
                          {/* Step Number & Commitment */}
                          <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                            <span className="text-4xl font-bold text-gray-200">
                              {step.number.toString().padStart(2, '0')}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              step.commitment === "FREE" ? "bg-green-100 text-green-800" :
                              step.commitment === "LOW COMMITMENT" ? "bg-yellow-100 text-yellow-800" :
                              step.commitment === "MEDIUM COMMITMENT" ? "bg-orange-100 text-orange-800" :
                              "bg-purple-100 text-purple-800"
                            }`}>
                              {step.commitment}
                            </span>
                          </div>

                          <h3 className="text-2xl font-bold text-black mb-2">
                            {step.title}
                          </h3>

                          {step.subtitle && (
                            <p className="text-sm text-gray-500 font-medium mb-4">
                              {step.subtitle}
                            </p>
                          )}

                          <p className="text-gray-600 leading-relaxed mb-6">
                            {step.description}
                          </p>

                          {/* Action Button for Step 1 */}
                          {step.number === 1 && (
                            <Button
                              onClick={() => setIsConsultationOpen(true)}
                              className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium rounded-full transition-all duration-300 hover:scale-105"
                            >
                              <Phone className="w-4 h-4 mr-2" />
                              Book Discovery Call
                            </Button>
                          )}
                        </motion.div>
                      </div>

                      {/* Central Icon Node */}
                      <div className="relative z-10">
                        <motion.div
                          className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center shadow-xl ring-4 ring-white ring-opacity-50`}
                          style={{
                            boxShadow: '0 20px 40px rgba(143, 141, 219, 0.3), 0 8px 16px rgba(143, 141, 219, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                          }}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: step.delay + 0.2 }}
                          whileHover={{
                            scale: 1.1,
                            rotate: 5,
                            boxShadow: '0 25px 50px rgba(143, 141, 219, 0.4), 0 12px 24px rgba(143, 141, 219, 0.3)'
                          }}
                        >
                          <IconComponent className="w-10 h-10 text-white drop-shadow-sm" />
                        </motion.div>

                        {/* Connection Arrow */}
                        {index < steps.length - 1 && (
                          <motion.div
                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 hidden md:block"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: step.delay + 0.4 }}
                          >
                            <ArrowDown className="w-6 h-6 text-[#babc6b]" />
                          </motion.div>
                        )}
                      </div>

                      {/* Spacer for mobile */}
                      <div className="flex-1 md:hidden"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <AnimatedSection delay={0.8} className="text-center mt-24">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-black mb-4">
                Ready to Start Your Growth Journey?
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Book your no-obligation discovery call and get strategic insights you can use immediately.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => setIsConsultationOpen(true)}
                    size="lg"
                    className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium px-8 py-4 text-lg rounded-full"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Start with Discovery Call
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>

                <div className="flex items-center space-x-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm">No obligation • 30 minutes • Strategic insights guaranteed</span>
                </div>
              </div>
            </div>
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
