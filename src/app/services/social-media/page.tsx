import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Share2, Users, Heart, MessageCircle, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Media Marketing Services - Catalyst Marketing Agency",
  description: "Build engaged communities and drive business growth with strategic social media marketing. Content creation, community management, and social advertising.",
  keywords: ["social media marketing", "social media management", "social media advertising", "community management", "influencer marketing"],
};

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-2 mb-8">
                <Share2 className="w-6 h-6 text-[#babc6b]" />
                <span className="text-gray-600 font-medium">Social Media Marketing</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-8">
                Build Communities That
                <span className="text-[#babc6b]"> Drive Business Growth</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                Transform your social presence into a powerful business asset with strategic content, engaged communities, and data-driven advertising that delivers real results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  Get Social Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-gray-300 hover:bg-gray-50 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  View Social Work
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Complete Social Media Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  From strategy to execution across all major platforms
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Social Strategy */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Social Media Strategy</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Develop comprehensive social strategies that align with your business goals and resonate with your target audience across all platforms.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Platform-specific strategies</li>
                        <li>• Audience research & persona development</li>
                        <li>• Content pillar creation</li>
                        <li>• Competitive analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Content Creation */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Content Creation & Curation</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Create scroll-stopping content that captures attention, sparks engagement, and drives meaningful interactions with your brand.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Visual content design</li>
                        <li>• Video production & editing</li>
                        <li>• Copywriting & captions</li>
                        <li>• User-generated content campaigns</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Community Management */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Community Management</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Build and nurture engaged communities around your brand with proactive engagement, customer service, and relationship building.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Daily engagement & monitoring</li>
                        <li>• Customer service via social</li>
                        <li>• Crisis management</li>
                        <li>• Community building initiatives</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Social Advertising */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Social Media Advertising</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Maximize reach and conversions with targeted social advertising campaigns that deliver measurable results and strong ROI.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Facebook & Instagram ads</li>
                        <li>• LinkedIn advertising</li>
                        <li>• TikTok & YouTube campaigns</li>
                        <li>• Retargeting & lookalike audiences</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Expertise */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Platform Expertise
                </h2>
                <p className="text-xl text-gray-600">
                  Native strategies for every major social platform
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">f</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">Facebook</h3>
                  <p className="text-gray-600 text-sm">Community building, targeted advertising, and engagement strategies</p>
                </div>

                <div className="text-center bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">IG</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">Instagram</h3>
                  <p className="text-gray-600 text-sm">Visual storytelling, influencer partnerships, and Shopping integration</p>
                </div>

                <div className="text-center bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">in</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">LinkedIn</h3>
                  <p className="text-gray-600 text-sm">B2B networking, thought leadership, and professional content</p>
                </div>

                <div className="text-center bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">TT</span>
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">TikTok</h3>
                  <p className="text-gray-600 text-sm">Viral content creation, trend utilization, and Gen Z engagement</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Results */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Social Media That Delivers Results
                </h2>
                <p className="text-xl text-gray-600">
                  Real metrics from real partnerships
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#babc6b] mb-4">425%</div>
                  <h3 className="text-xl font-bold text-black mb-2">Engagement Increase</h3>
                  <p className="text-gray-600">Average engagement growth in first 6 months</p>
                </div>

                <div className="text-center">
                  <div className="text-5xl font-bold text-[#babc6b] mb-4">2.8M</div>
                  <h3 className="text-xl font-bold text-black mb-2">Reach Generated</h3>
                  <p className="text-gray-600">Total reach across client accounts monthly</p>
                </div>

                <div className="text-center">
                  <div className="text-5xl font-bold text-[#babc6b] mb-4">6.2x</div>
                  <h3 className="text-xl font-bold text-black mb-2">Social ROI</h3>
                  <p className="text-gray-600">Return on social media advertising investment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Social Presence?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the select businesses building engaged communities and driving real business results through strategic social media marketing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  Get Social Strategy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link href="/work">
                  <Button variant="outline" className="border-gray-600 hover:bg-gray-800 text-white hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300">
                    View Social Results
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
