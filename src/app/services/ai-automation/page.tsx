import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Brain, Zap, Target, BarChart3, Clock, Shield } from "lucide-react";
import AIAutomationClient from "@/components/AIAutomationClient";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Automation Services - Catalyst Marketing Agency",
  description: "Transform your marketing with cutting-edge AI automation. Streamline workflows, personalize campaigns, and drive exceptional growth with Catalyst's AI-powered solutions.",
  keywords: ["AI automation", "marketing automation", "artificial intelligence", "machine learning", "automated marketing", "AI-powered campaigns"],
};

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-2 mb-8">
                <Bot className="w-6 h-6 text-[#babc6b]" />
                <span className="text-gray-600 font-medium">AI Automation Services</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-8">
                Save 6+ Hours Weekly with
                <span className="text-[#babc6b]"> AI Automation</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                Stop wasting time on repetitive tasks. Our next-generation AI automation tools handle the heavy lifting, personalize customer experiences at scale, and drive exceptional growth—while you focus on high-impact strategy.
              </p>

              <AIAutomationClient />
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Why Choose AI Automation?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our AI automation doesn't just save time—it multiplies your marketing effectiveness
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#babc6b] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Save 6+ Hours Weekly</h3>
                  <p className="text-gray-600">Free your time from routine tasks for high-impact growth strategy</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#babc6b] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">300% Better Targeting</h3>
                  <p className="text-gray-600">AI-powered audience segmentation and personalization</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#babc6b] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Real-Time Optimization</h3>
                  <p className="text-gray-600">Campaigns automatically adjust based on performance data</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#babc6b] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Error-Free Execution</h3>
                  <p className="text-gray-600">Eliminate human error with precise automated workflows</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Our AI Automation Services
                </h2>
                <p className="text-xl text-gray-600">
                  End-to-end AI solutions tailored to your business needs
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Service 1 */}
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Brain className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Intelligent Lead Scoring</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        AI analyzes prospect behavior, engagement patterns, and demographic data to automatically score and prioritize leads, ensuring your sales team focuses on the highest-value opportunities.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Behavioral scoring algorithms</li>
                        <li>• Predictive conversion modeling</li>
                        <li>• Automated lead routing</li>
                        <li>• Real-time score updates</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Dynamic Content Personalization</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Create unique experiences for every visitor with AI that adapts content, messaging, and offers in real-time based on user behavior and preferences.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Real-time content adaptation</li>
                        <li>• Behavioral trigger campaigns</li>
                        <li>• A/B testing automation</li>
                        <li>• Cross-channel consistency</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Predictive Analytics & Forecasting</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Make data-driven decisions with AI that predicts customer lifetime value, churn probability, and optimal campaign timing for maximum ROI.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Customer lifetime value prediction</li>
                        <li>• Churn prevention algorithms</li>
                        <li>• Revenue forecasting</li>
                        <li>• Optimal timing predictions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Service 4 */}
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Bot className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Automated Campaign Management</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Let AI manage your campaigns 24/7 with automatic bid adjustments, budget optimization, and performance monitoring across all channels.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Automated bid management</li>
                        <li>• Budget allocation optimization</li>
                        <li>• Performance monitoring</li>
                        <li>• Cross-platform coordination</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Our AI Implementation Process
                </h2>
                <p className="text-xl text-gray-600">
                  From audit to activation in 4 strategic phases
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">AI Audit</h3>
                  <p className="text-gray-600">Comprehensive analysis of your current processes and AI opportunities</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Strategy Design</h3>
                  <p className="text-gray-600">Custom AI automation roadmap aligned with your business goals</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Implementation</h3>
                  <p className="text-gray-600">Seamless integration of AI tools into your existing workflows</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    4
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Optimization</h3>
                  <p className="text-gray-600">Continuous monitoring and refinement for maximum performance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Time Savings Breakdown */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Where You'll Save Time Every Week
                </h2>
                <p className="text-xl text-gray-600">
                  Real hours back in your schedule for strategic growth
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#babc6b] mb-2">2.5 hrs</div>
                  <h3 className="text-lg font-bold text-black mb-2">Email Campaign Creation</h3>
                  <p className="text-gray-600 text-sm">AI generates, personalizes, and schedules campaigns automatically</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#babc6b] mb-2">1.5 hrs</div>
                  <h3 className="text-lg font-bold text-black mb-2">Lead Scoring & Routing</h3>
                  <p className="text-gray-600 text-sm">Automated qualification and distribution to sales team</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#babc6b] mb-2">1.5 hrs</div>
                  <h3 className="text-lg font-bold text-black mb-2">Social Media Posting</h3>
                  <p className="text-gray-600 text-sm">Content creation, scheduling, and engagement automation</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#babc6b] mb-2">1 hr</div>
                  <h3 className="text-lg font-bold text-black mb-2">Campaign Optimization</h3>
                  <p className="text-gray-600 text-sm">Real-time bid adjustments and budget allocation</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#babc6b] mb-2">45 min</div>
                  <h3 className="text-lg font-bold text-black mb-2">Performance Reporting</h3>
                  <p className="text-gray-600 text-sm">Automated insights and recommendation generation</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-[#babc6b] mb-2">30 min</div>
                  <h3 className="text-lg font-bold text-black mb-2">Customer Segmentation</h3>
                  <p className="text-gray-600 text-sm">AI-powered audience analysis and targeting</p>
                </div>
              </div>

              <div className="text-center mt-12">
                <div className="inline-flex items-center space-x-4 bg-[#babc6b] text-black px-8 py-4 rounded-full font-bold text-xl">
                  <span>Total Weekly Savings:</span>
                  <span className="text-2xl">7+ Hours</span>
                </div>
                <p className="text-gray-600 mt-4 text-lg">That's an extra workday every week for strategic growth initiatives</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Scale with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the 6 select businesses already transforming their marketing with our AI automation. Limited spots available.
              </p>

              <AIAutomationClient variant="cta" />

              <div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bot className="w-4 h-4" />
                  <span>Custom AI Models</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>24/7 Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </div>
  );
}
