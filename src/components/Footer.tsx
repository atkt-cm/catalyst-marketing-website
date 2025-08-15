"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone, Mail, Linkedin, Twitter, Instagram, Github, AlertTriangle, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import ConsultationForm from "./ConsultationForm";

export default function Footer() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <>
      {/* CTA Section */}
      <section className="py-24 text-white bg-[#000000]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            {/* Warning Banner */}
            <div className="inline-flex items-center gap-2 bg-red-900/30 border border-red-700/50 text-red-200 px-6 py-3 rounded-full mb-12">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-medium">❗ Only [2] Partnership Spots Available This Month</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Don't Let Another Quarter Pass
              <br />
              <span className="text-[#babc6b]">Without Proving Your ROI</span>
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Every day you operate with a broken data feedback loop, you lose ground to your competitors and waste potential revenue. The cost of waiting often exceeds the cost of acting.
            </p>

            {/* Testimonials Slider */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8 text-white">
                What Our Clients Say:
              </h3>

              <div className="relative overflow-hidden rounded-xl">
                <motion.div
                  className="flex gap-6"
                  animate={{ x: [0, -100 * 8] }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ width: "fit-content" }}
                >
                  {/* Testimonial 1 - Samuel Appentsen */}
                  <div className="flex-shrink-0 w-96 bg-white rounded-lg p-4 shadow-lg">
                    <div className="flex items-start gap-3 mb-3">
                      <img src="/image_(1).png" alt="Samuel Appentsen" className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <h4 className="font-bold text-black">Samuel Appentsen</h4>
                        <p className="text-sm text-gray-600">Co Founder @ getonward</p>
                        <p className="text-xs text-gray-500">March 25, 2024</p>
                      </div>
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                      "Extremely helpful, and sharp as anything. Katie was a supportive partner - supporting myself and a few colleagues on key paid search accounts, helping us deliver great performance for our clients' businesses. We intend to work with her again on future projects and wouldn't hesitate to recommend her to others."
                    </p>
                  </div>

                  {/* Testimonial 2 - Sam Wood */}
                  <div className="flex-shrink-0 w-96 bg-white rounded-lg p-4 shadow-lg">
                    <div className="flex items-start gap-3 mb-3">
                      <img src="/Aston_Logo.png" alt="Sam Wood" className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <h4 className="font-bold text-black">Sam Wood</h4>
                        <p className="text-sm text-gray-600">Digital Marketing Manager at Govia Thameslink Railway</p>
                        <p className="text-xs text-gray-500">October 25, 2023</p>
                      </div>
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                      "Had the pleasure of working with Katie on our PPC activities, fantastic knowledge of Google Ads covering both the technical detail and overarching strategy, leading to outstanding results!"
                    </p>
                  </div>

                  {/* Testimonial 3 - Jon Brook */}
                  <div className="flex-shrink-0 w-96 bg-white rounded-lg p-4 shadow-lg">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-black">Jon Brook</h4>
                        <p className="text-sm text-gray-600">Marketing Director | Chief Marketing Officer</p>
                        <p className="text-xs text-gray-500">September 15, 2023</p>
                      </div>
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                      "I really enjoyed working with Katie when she worked on our account at Lights4fun. She has a great knowledge of all things PPC and I found her to be really proactive, going above and beyond to get the job done. Katie is also a great communicator and I wouldn't hesitate in recommending her."
                    </p>
                  </div>

                  {/* Testimonial 4 - Peter Stevenson */}
                  <div className="flex-shrink-0 w-96 bg-white rounded-lg p-4 shadow-lg">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-black">Peter Stevenson</h4>
                        <p className="text-sm text-gray-600">SEO & Digital Marketing at Darwin Escapes</p>
                        <p className="text-xs text-gray-500">September 6, 2023</p>
                      </div>
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                      "Worked with Katie for over a year for our Darwin Escapes brand's PPC requirements. Found Katie to be extremely proficient at making sure that our business KPIs were met within our target budget, punctual with both our reasonable and unreasonable timeframe requests and accommodating with more of our creative campaign concepts."
                    </p>
                  </div>

                  {/* Testimonial 5 - Adam Taylor */}
                  <div className="flex-shrink-0 w-96 bg-white rounded-lg p-4 shadow-lg">
                    <div className="flex items-start gap-3 mb-3">
                      <img src="/Centrally_managed_1.png" alt="Adam Taylor" className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <h4 className="font-bold text-black">Adam Taylor</h4>
                        <p className="text-sm text-gray-600">Owner at Centrally Managed</p>
                        <p className="text-xs text-gray-500">August 27, 2022</p>
                      </div>
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                      "Katie is an expert at all things digital marketing especially Google, Facebook and LinkedIn. Highly recommended"
                    </p>
                  </div>

                  {/* Testimonial 6 - Sarah Finlay Smith */}
                  <div className="flex-shrink-0 w-96 bg-white rounded-lg p-4 shadow-lg">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-black">Sarah Finlay Smith</h4>
                        <p className="text-sm text-gray-600">AV Account Manager @ PHD</p>
                        <p className="text-xs text-gray-500">August 19, 2022</p>
                      </div>
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                      "I worked with Katie over a two year period on various projects. I always knew my paid campaigns were in safe hands with her on my accounts and they always performed excellently. Katie's contributions to campaigns were invaluable and her expertise helped to achieve the desired KPI's and beyond. In addition to this Katie is a team player with great sense of humour which makes her a pleasure to work with."
                    </p>
                  </div>

                  {/* Testimonial 7 - Jessica Callighan */}
                  <div className="flex-shrink-0 w-96 bg-white rounded-lg p-4 shadow-lg">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-black">Jessica Callighan</h4>
                        <p className="text-sm text-gray-600">Senior Growth Manager @ Visualsoft Ltd</p>
                        <p className="text-xs text-gray-500">August 19, 2022</p>
                      </div>
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                      "Katie is very detailed oriented and goes above and beyond when it comes to strategy and methodology for a clients campaign. This shows in the great results and overall performance of the final product."
                    </p>
                  </div>

                  {/* Testimonial 8 - WhatsApp Success Story */}
                  <div className="flex-shrink-0 w-96 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-4 shadow-lg text-white">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-xl">💬</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white">Experts In Hospitality</h4>
                        <p className="text-sm text-white/80">WhatsApp Message</p>
                        <p className="text-xs text-white/60">Real-time Results</p>
                      </div>
                    </div>
                    <div className="bg-black/20 rounded-lg p-3">
                      <p className="text-white font-medium">
                        "Yes I saw the emails coming in<br/>
                        I thought 'shit it's working!'"
                      </p>
                      <p className="text-xs text-white/60 mt-2">12:39</p>
                    </div>
                  </div>

                  {/* Duplicate first few for seamless loop */}
                  <div className="flex-shrink-0 w-96 bg-white rounded-lg p-4 shadow-lg">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-black">Samuel Appentsen</h4>
                        <p className="text-sm text-gray-600">Co Founder @ getonward</p>
                        <p className="text-xs text-gray-500">March 25, 2024</p>
                      </div>
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                      "Extremely helpful, and sharp as anything. Katie was a supportive partner - supporting myself and a few colleagues on key paid search accounts, helping us deliver great performance for our clients' businesses."
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* What You Get Section */}
            <div className="bg-gray-700/50 rounded-2xl p-8 mb-8 border border-gray-600">
              <h3 className="text-2xl font-bold mb-8 text-white">
                What you get in your Discovery Call (Free):
              </h3>

              <p className="text-gray-200 leading-relaxed mb-8">
                This is not a sales call. It's a hands-on strategy session to provide immediate value.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#babc6b] flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <p className="text-gray-200 leading-relaxed">
                      A deep-dive analysis of your current tracking setup to find hidden bottlenecks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#babc6b] flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <p className="text-gray-200 leading-relaxed">
                      A strategic roadmap with 3 immediate improvements you can implement today.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#babc6b] flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <p className="text-gray-200 leading-relaxed">
                      A clear plan to connect your marketing spend directly to sales revenue.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-orange-200 font-medium mb-8">
                Limited availability - Secure your spot now
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setIsConsultationOpen(true)}
                  className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-bold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
                >
                  Secure Your Free Discovery Call
                </Button>

                <Button
                  variant="outline"
                  className="border-gray-500 hover:bg-gray-600 text-white hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300"
                >
                  View Our Process
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-black text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold mb-6">
                  Ready to join our exclusive clients?
                </h3>

                <Button
                  onClick={() => setIsConsultationOpen(true)}
                  className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium mb-8 rounded-full"
                >
                  Request Access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
                    ))}
                  </div>
                  <span className="text-sm">5.0 from 52 reviews</span>
                </div>
              </div>

              {/* Learn */}
              <div>
                <h4 className="font-semibold text-lg mb-6">Learn</h4>
                <ul className="space-y-4">
                  <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/culture" className="text-gray-400 hover:text-white transition-colors">Culture</Link></li>
                  <li><Link href="/process" className="text-gray-400 hover:text-white transition-colors">Our Process</Link></li>
                  <li><Link href="/faqs" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                </ul>
              </div>

              {/* Explore */}
              <div>
                <h4 className="font-semibold text-lg mb-6">Explore</h4>
                <ul className="space-y-4">
                  <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                  <li>
                    <div className="flex items-center space-x-2">
                      <Link href="/work" className="text-gray-400 hover:text-white transition-colors">Work</Link>
                      <span className="bg-[#babc6b] text-black text-xs px-2 py-1 rounded-full font-medium">NEW</span>
                    </div>
                  </li>
                  <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                  <li><Link href="/industries" className="text-gray-400 hover:text-white transition-colors">Industries</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* Get in touch */}
              <div>
                <h4 className="font-semibold text-lg mb-6">Get in touch</h4>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#babc6b]" />
                    <span className="text-gray-400">+1 (555) 123-4567</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#babc6b]" />
                    <span className="text-gray-400">hello@catalystagency.com</span>
                  </div>


                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                    <Twitter className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center text-4xl font-bold text-white mb-8">
                Crafting excellence since 2018
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  <span className="font-semibold text-white">Catalyst.</span>
                  <span>© Catalyst Agency Ltd 2024</span>
                  <span>|</span>
                  <span>Company Reg Number 12345678</span>
                </div>

                <div className="flex items-center space-x-4">
                  <span>Premium Marketing Agency</span>
                  <span>|</span>
                  <span>All Rights Reserved</span>
                  <span>|</span>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy (you really cared?)
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ConsultationForm
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
}
