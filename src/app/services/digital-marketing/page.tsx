import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, MousePointer, Mail, Share2, Target, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Digital Marketing Services - Catalyst Marketing Agency",
  description: "Drive exceptional growth with our comprehensive digital marketing services. SEO, PPC, social media, email marketing, and conversion optimization for ambitious businesses.",
  keywords: ["digital marketing", "SEO", "PPC", "social media marketing", "email marketing", "conversion optimization"],
};

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-2 mb-8">
                <TrendingUp className="w-6 h-6 text-[#babc6b]" />
                <span className="text-gray-600 font-medium">Digital Marketing Services</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-8">
                Drive Growth with
                <span className="text-[#babc6b]"> Strategic Digital Marketing</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                From SEO and PPC to social media and email marketing, we deliver integrated digital strategies that generate qualified leads and accelerate revenue growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  Get Growth Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-gray-300 hover:bg-gray-50 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  View Results
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Complete Digital Marketing Solutions
                </h2>
                <p className="text-xl text-gray-600">
                  Every channel optimized for maximum impact
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* SEO */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mb-6">
                    <Search className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Search Engine Optimization</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Dominate search results with technical SEO, content optimization, and authority building strategies.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Technical SEO audits</li>
                    <li>• Keyword research & strategy</li>
                    <li>• Content optimization</li>
                    <li>• Link building campaigns</li>
                  </ul>
                </div>

                {/* PPC */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mb-6">
                    <MousePointer className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Pay-Per-Click Advertising</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Maximize ROI with data-driven Google Ads, Facebook Ads, and LinkedIn campaigns.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Campaign strategy & setup</li>
                    <li>• Ad copy & creative testing</li>
                    <li>• Bid optimization</li>
                    <li>• Conversion tracking</li>
                  </ul>
                </div>

                {/* Email Marketing */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mb-6">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Email Marketing</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Build relationships and drive sales with personalized email campaigns and automation.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Email strategy & design</li>
                    <li>• Automation workflows</li>
                    <li>• List segmentation</li>
                    <li>• Performance analytics</li>
                  </ul>
                </div>

                {/* Social Media */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mb-6">
                    <Share2 className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Social Media Marketing</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Build brand awareness and engage audiences across all major social platforms.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Content strategy & creation</li>
                    <li>• Community management</li>
                    <li>• Social advertising</li>
                    <li>• Influencer partnerships</li>
                  </ul>
                </div>

                {/* Conversion Optimization */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Conversion Optimization</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Turn more visitors into customers with data-driven website and funnel optimization.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• A/B testing programs</li>
                    <li>• Landing page optimization</li>
                    <li>• User experience analysis</li>
                    <li>• Funnel optimization</li>
                  </ul>
                </div>

                {/* Analytics */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mb-6">
                    <TrendingUp className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Analytics & Reporting</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Make informed decisions with comprehensive tracking, reporting, and insights.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Custom dashboards</li>
                    <li>• ROI tracking</li>
                    <li>• Performance insights</li>
                    <li>• Strategic recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Proven Results That Matter
                </h2>
                <p className="text-xl text-gray-600">
                  Real growth from real partnerships
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#babc6b] mb-4">347%</div>
                  <h3 className="text-xl font-bold text-black mb-2">Average Lead Increase</h3>
                  <p className="text-gray-600">Within first 6 months of partnership</p>
                </div>

                <div className="text-center">
                  <div className="text-5xl font-bold text-[#babc6b] mb-4">£2.3M</div>
                  <h3 className="text-xl font-bold text-black mb-2">Additional Revenue</h3>
                  <p className="text-gray-600">Generated for partners in 18 months</p>
                </div>

                <div className="text-center">
                  <div className="text-5xl font-bold text-[#babc6b] mb-4">4.8x</div>
                  <h3 className="text-xl font-bold text-black mb-2">ROI Improvement</h3>
                  <p className="text-gray-600">Average return on marketing investment</p>
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
                Ready to Accelerate Growth?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join the select businesses experiencing exponential growth with our integrated digital marketing approach.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  Get Growth Strategy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link href="/work">
                  <Button variant="outline" className="border-gray-600 hover:bg-gray-800 text-white hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300">
                    View Case Studies
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
