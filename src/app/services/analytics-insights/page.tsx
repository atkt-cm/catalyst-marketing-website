import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, TrendingUp, Target, Eye, Brain, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Turn Data Into Profit - Analytics & Insights | Catalyst Marketing Agency",
  description: "Stop guessing which marketing efforts drive revenue. We implement a comprehensive, data-driven framework that connects your ad spend directly to signed contracts.",
  keywords: ["B2B analytics", "revenue attribution", "data-driven marketing", "marketing ROI", "conversion tracking", "lead-to-sale analytics"],
};

export default function AnalyticsInsightsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-2 mb-8">
                <BarChart3 className="w-6 h-6 text-[#babc6b]" />
                <span className="text-gray-600 font-medium">Analytics & Insights</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-8">
                Turn Data Into
                <span className="text-[#babc6b]"> Profit</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                Stop guessing which marketing efforts drive revenue. We implement a comprehensive, data-driven framework that connects your ad spend directly to signed contracts, revealing exactly what's driving your business growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  Get My Free Data Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-gray-300 hover:bg-gray-50 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  See Our Process Below
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  A Complete Framework for B2B Growth
                </h2>
                <p className="text-xl text-gray-600">
                  From data collection to strategic action, our solutions are built on Google's authoritative lead-to-sale methodology.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Performance Tracking */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Measure What Matters</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        We go beyond vanity metrics. We implement comprehensive tracking (including Google Analytics 4 & Enhanced Conversions) to measure the entire lead-to-sale journey, giving you a clear view of your true ROI.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• End-to-end conversion tracking implementation</li>
                        <li>• Multi-channel revenue attribution modeling</li>
                        <li>• Real-time performance monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Custom Dashboards */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Instant Clarity on Demand</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        No more digging through confusing spreadsheets. We build beautiful, intuitive dashboards that give you instant visibility into your marketing performance and the KPIs that matter most.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Executive summary dashboards</li>
                        <li>• Channel-specific performance views</li>
                        <li>• Automated reporting schedules</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Strategic Insights */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Brain className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Map Your Path to Profit</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Data is useless without insight. We conduct deep-dive analyses to map your customer journey, identify costly bottlenecks, and provide clear, actionable recommendations to increase profitability.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Customer journey & sales cycle analysis</li>
                        <li>• ROI & ROAS optimization insights</li>
                        <li>• Audience & segment performance analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Predictive Analytics */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Activate Your Data for Future Growth</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        We use your historical data to predict future performance. By identifying trends and forecasting revenue, we help you make proactive, data-driven decisions that secure sustained growth.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Revenue forecasting models</li>
                        <li>• Customer lifetime value (LTV) prediction</li>
                        <li>• Churn risk identification</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Metrics That Actually Drive Business Growth
                </h2>
                <p className="text-xl text-gray-600">
                  We track the KPIs that directly impact your bottom line, not just vanity metrics.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">Revenue Attribution</h3>
                  <p className="text-gray-600 text-sm">Track which channels and campaigns generate the most revenue</p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">Customer Acquisition Cost</h3>
                  <p className="text-gray-600 text-sm">Optimize your spending to reduce cost per acquisition</p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">Lifetime Value</h3>
                  <p className="text-gray-600 text-sm">Understand and increase customer lifetime value</p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">Conversion Rates (to Sale)</h3>
                  <p className="text-gray-600 text-sm">Monitor and optimize conversion across all touchpoints</p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">Sales Cycle Length</h3>
                  <p className="text-gray-600 text-sm">Measure meaningful engagement beyond vanity metrics</p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">Lead Quality Score</h3>
                  <p className="text-gray-600 text-sm">Identify trends and predict future performance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Our Proven 4-Step Process
                </h2>
                <p className="text-xl text-gray-600">
                  From data collection to strategic action
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">Audit</h3>
                  <p className="text-gray-600 text-sm">We conduct a deep audit of your current setup and map your entire lead-to-sale journey to identify critical conversion points.</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">Setup</h3>
                  <p className="text-gray-600 text-sm">We implement a robust, privacy-centric measurement framework, connecting your website, ads, and CRM to track what truly matters.</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">Monitor</h3>
                  <p className="text-gray-600 text-sm">We provide continuous monitoring and clear, intuitive dashboards, so you always have a real-time view of your performance.</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    4
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">Optimize</h3>
                  <p className="text-gray-600 text-sm">We translate data into action, providing strategic recommendations and activating your data to power AI-driven campaign optimizations.</p>
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
                Ready to Make Decisions with Confidence?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stop flying blind. Get the analytics and strategic insights you need to drive predictable, sustainable business growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  Book My Free Data Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link href="/work">
                  <Button variant="outline" className="border-gray-600 hover:bg-gray-800 text-white hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300">
                    View Dashboards
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
