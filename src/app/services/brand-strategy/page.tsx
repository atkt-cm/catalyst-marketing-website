import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Target, Users, Lightbulb, Heart, Star } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand Strategy Services - Catalyst Marketing Agency",
  description: "Build a powerful brand that resonates with your audience. Strategic brand positioning, messaging, visual identity, and brand experience design.",
  keywords: ["brand strategy", "brand positioning", "brand messaging", "visual identity", "brand experience", "brand development"],
};

export default function BrandStrategyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-2 mb-8">
                <Star className="w-6 h-6 text-[#babc6b]" />
                <span className="text-gray-600 font-medium">Brand Strategy Services</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-8">
                Build a Brand That
                <span className="text-[#babc6b]"> Commands Attention</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                Transform your business with strategic brand positioning that differentiates you from competitors and creates lasting emotional connections with your ideal customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  Get Brand Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-gray-300 hover:bg-gray-50 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  View Brand Work
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Strategy Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Strategic Brand Development
                </h2>
                <p className="text-xl text-gray-600">
                  From positioning to experience, we craft brands that drive business growth
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Brand Positioning */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Brand Positioning & Strategy</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Define your unique market position with strategic frameworks that differentiate you from competitors and resonate with your target audience.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Market research & analysis</li>
                        <li>• Competitive positioning</li>
                        <li>• Value proposition development</li>
                        <li>• Brand architecture</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Brand Messaging */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Brand Messaging & Voice</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Develop compelling messaging that speaks directly to your audience's needs and establishes your brand's unique voice and personality.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Brand messaging framework</li>
                        <li>• Tone of voice guidelines</li>
                        <li>• Key message development</li>
                        <li>• Content pillars</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Visual Identity */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Palette className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Visual Identity Design</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Create a cohesive visual system that reflects your brand personality and ensures consistent recognition across all touchpoints.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Logo design & variations</li>
                        <li>• Color palette & typography</li>
                        <li>• Brand guidelines</li>
                        <li>• Marketing collateral design</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Brand Experience */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-4">Brand Experience Design</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        Design every customer touchpoint to reinforce your brand promise and create memorable experiences that drive loyalty and advocacy.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Customer journey mapping</li>
                        <li>• Touchpoint optimization</li>
                        <li>• Brand activation strategies</li>
                        <li>• Experience measurement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Our Brand Strategy Process
                </h2>
                <p className="text-xl text-gray-600">
                  From discovery to deployment in 5 strategic phases
                </p>
              </div>

              <div className="grid md:grid-cols-5 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">Discovery</h3>
                  <p className="text-gray-600 text-sm">Deep dive into your business, market, and audience</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">Research</h3>
                  <p className="text-gray-600 text-sm">Market analysis and competitive landscape mapping</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">Strategy</h3>
                  <p className="text-gray-600 text-sm">Brand positioning and messaging framework</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    4
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">Design</h3>
                  <p className="text-gray-600 text-sm">Visual identity and brand experience design</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    5
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">Launch</h3>
                  <p className="text-gray-600 text-sm">Brand rollout and activation across channels</p>
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
                Ready to Build a Powerful Brand?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with strategic brand development that differentiates you from competitors and drives sustainable growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  Start Brand Strategy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link href="/work">
                  <Button variant="outline" className="border-gray-600 hover:bg-gray-800 text-white hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300">
                    View Brand Work
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
