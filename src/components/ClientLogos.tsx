"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Users, Target, Brain, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function ClientLogos() {
  const clients = [
    { name: "TechFlow", link: null },
    { name: "InnovateCorp", link: null },
    { name: "Competitor Monitor", link: "https://www.competitormonitor.com/" },
    { name: "Sunshine Transfers Malaga", link: "https://sunshinetransfersmalaga.com/" },
    { name: "Aston Hospitality Experts", link: "https://expertsinhospitality.me/" },
    { name: "Centrally Managed", link: "https://centrallymanaged.com/" },
    { name: "Specialist Mats", link: null },
    { name: "CreativeForce", link: null },
    { name: "MarketLeader", link: null },
    { name: "FutureScape", link: null }
  ];

  return (
    <>
      {/* Why We Choose Impact Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
                While other agencies chase volume,
                <br />
                <span className="text-[#babc6b]">we choose impact.</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Why we deliberately limit our client roster to maximize your results
              </p>
            </AnimatedSection>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedSection direction="left">
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">Selective Partnership</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We work with only 6 established businesses at any time ensuring your team receives dedicated attention, not generic solutions.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Brain className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">AI Integration Edge</h3>
                      <p className="text-gray-600 leading-relaxed">
                        While traditional agencies lag behind, every Catalyst campaign leverages cutting-edge AI for content, automation, and predictive analytics—giving you an unfair advantage.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.2}>
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">Embedded Expertise</h3>
                      <p className="text-gray-600 leading-relaxed">
                        You won't get junior staff or generic strategies. Our hand-picked senior specialists integrate directly into your business infrastructure, becoming your marketing department.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.2}>
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-3">Proven Track Record</h3>
                      <p className="text-gray-600 leading-relaxed">
                        £2.3M additional revenue generated for existing partners across hospitality, consulting, and construction in the past 18 months.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-gray-200">
        <div className="container mx-auto px-6">
          {/* Header */}
          <AnimatedSection className="text-center mb-12">
            <p className="text-gray-600 font-medium mb-4">Trusted by industry leaders</p>
          </AnimatedSection>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-16 items-center"
            animate={{ x: [0, -50 * 16] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {/* First set */}
            {clients.map((client, index) => (
              <motion.div
                key={`first-${index}`}
                className="flex-shrink-0 text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                style={{ minWidth: '150px' }}
                whileHover={{ scale: 1.1, color: "#babc6b" }}
                transition={{ duration: 0.2 }}
              >
                {client.link ? (
                  <Link
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#babc6b] transition-colors"
                  >
                    {client.name}
                  </Link>
                ) : (
                  client.name
                )}
              </motion.div>
            ))}
            {/* Duplicate for seamless scroll */}
            {clients.map((client, index) => (
              <motion.div
                key={`second-${index}`}
                className="flex-shrink-0 text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                style={{ minWidth: '150px' }}
                whileHover={{ scale: 1.1, color: "#babc6b" }}
                transition={{ duration: 0.2 }}
              >
                {client.link ? (
                  <Link
                    href={client.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#babc6b] transition-colors"
                  >
                    {client.name}
                  </Link>
                ) : (
                  client.name
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}
