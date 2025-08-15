import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, Target, Eye, Brain, Settings } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stop Drowning in Busywork. Start Scaling Your Business | Catalyst Marketing Agency",
  description: "We design and implement intelligent workflows that handle the repetitive work for you, giving your team back its most valuable asset—time—so you can focus on high-impact strategy.",
  keywords: ["marketing automation", "workflow automation", "business process automation", "lead nurturing", "automated reporting", "content automation"],
};

export default function AutomationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-2 mb-8">
                <Zap className="w-6 h-6 text-[#babc6b]" />
                <span className="text-gray-600 font-medium">Automation</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-8">
                Stop Drowning in Busywork.
                <span className="text-[#babc6b]"> Start Scaling Your Business.</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                We design and implement intelligent workflows that handle the repetitive work for you, giving your team back its most valuable asset—time—so you can focus on high-impact strategy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  Get My Free Automation Audit
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

        {/* What We Automate */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  What We Automate to Drive Your Growth
                </h2>
                <p className="text-xl text-gray-600">
                  From lead nurturing to content distribution, we automate the processes that drain your team's time.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Lead Nurturing */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Lead Nurturing & Sales Pipelines</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Never let a warm lead go cold again. We build intelligent email and SMS sequences that qualify leads and book sales calls automatically, so your team can focus on closing.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Automated lead scoring and qualification</li>
                        <li>• Multi-channel nurture sequences</li>
                        <li>• Intelligent appointment booking</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Automated Reporting */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Automated Reporting & Dashboards</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Wake up to perfectly compiled reports in your inbox. We automate data collection from all your platforms into a single, easy-to-read dashboard, saving hours of manual work.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Daily, weekly, and monthly automated reports</li>
                        <li>• Multi-platform data integration</li>
                        <li>• Custom KPI tracking dashboards</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Social Media & Content */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Brain className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Social Media & Content Distribution</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Schedule and distribute your content across all platforms effortlessly. We ensure a consistent brand presence without the daily manual effort of posting and sharing.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Cross-platform content scheduling</li>
                        <li>• Automated social media engagement</li>
                        <li>• Content performance optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Client Onboarding */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Client Onboarding & Operations</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Create a flawless customer experience. We automate welcome sequences, follow-up communications, and internal notifications for new clients and projects.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Automated client welcome sequences</li>
                        <li>• Project initiation workflows</li>
                        <li>• Internal team notifications</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Metrics */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  The Tangible ROI of Automation
                </h2>
                <p className="text-xl text-gray-600">
                  Measure the impact of automation on your business productivity and growth.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">Hours Saved Per Week</h3>
                  <p className="text-gray-600 text-sm">Track time savings from automated workflows and processes</p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">Lead Response Time</h3>
                  <p className="text-gray-600 text-sm">Faster response times through automated lead nurturing</p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">Manual Errors Reduced</h3>
                  <p className="text-gray-600 text-sm">Eliminate human error through automated processes</p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">Team Productivity Lift</h3>
                  <p className="text-gray-600 text-sm">Measure increased output with automated workflows</p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">Lead Conversion Rate</h3>
                  <p className="text-gray-600 text-sm">Higher conversions through consistent automated nurturing</p>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">Operational Scalability</h3>
                  <p className="text-gray-600 text-sm">Scale operations without proportional staff increases</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Process */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Our 4-Step Automation Blueprint
                </h2>
                <p className="text-xl text-gray-600">
                  From workflow audit to optimization
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">Audit</h3>
                  <p className="text-gray-600 text-sm">We conduct a deep-dive audit of your current workflows to identify the highest-impact opportunities for automation.</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">Design</h3>
                  <p className="text-gray-600 text-sm">We map and design a custom automation engine that connects your existing tools into a single, intelligent system.</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">Implement</h3>
                  <p className="text-gray-600 text-sm">Our team handles the full technical implementation and integration, ensuring a seamless launch.</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    4
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">Optimize</h3>
                  <p className="text-gray-600 text-sm">We continuously monitor your automated systems, providing insights and optimizations to ensure they scale with your business.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-Page CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Build a More Productive, Profitable Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stop letting manual work dictate the limits of your success. Build an automated engine that allows your business to grow efficiently.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  Book My Free Automation Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link href="/work">
                  <Button variant="outline" className="border-gray-600 hover:bg-gray-800 text-white hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300">
                    View Our Process
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Urgency & Social Proof Section */}
        <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Urgency Banner */}
              <div className="bg-[#babc6b] text-black rounded-lg p-4 text-center mb-12">
                <p className="font-bold text-lg">❗ Only 2 Partnership Spots Available This Month</p>
              </div>

              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Don't Let Another Productive Hour Go to Waste.
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  The cost of operational drag is measured in missed opportunities and team burnout. The time to streamline is now.
                </p>
              </div>

              {/* Testimonials */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <p className="text-gray-300 mb-4">"The automation workflows they built saved us 20+ hours per week. Our team can finally focus on strategy instead of repetitive tasks."</p>
                    <p className="text-[#babc6b] font-semibold">Sarah Chen, CEO</p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <p className="text-gray-300 mb-4">"Their lead nurturing automation increased our conversion rate by 45%. No more leads falling through the cracks."</p>
                    <p className="text-[#babc6b] font-semibold">Mike Rodriguez, CMO</p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <p className="text-gray-300 mb-4">"The automated reporting system gives us real-time insights without any manual work. Game-changing for our decision making."</p>
                    <p className="text-[#babc6b] font-semibold">Lisa Park, COO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-800 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">What You Get in Your Automation Audit (Free):</h3>
                <p className="text-gray-300 mb-6">This is not a sales call. It's a strategic session to identify immediate efficiencies.</p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-start space-x-3">
                    <span className="text-[#babc6b] text-xl">✅</span>
                    <p className="text-gray-300">A live analysis of your current processes to find the biggest time-drains.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#babc6b] text-xl">✅</span>
                    <p className="text-gray-300">Your top 3 high-impact opportunities for automation.</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#babc6b] text-xl">✅</span>
                    <p className="text-gray-300">A clear roadmap to implementing a system that saves time and scales growth.</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium px-12 py-6 text-xl rounded-full transition-all duration-300 hover:scale-105">
                  Claim My Free Automation Audit
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
