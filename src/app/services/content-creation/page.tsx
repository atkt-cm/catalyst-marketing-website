import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, PenTool, Video, Camera, FileText, Megaphone, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Content Creation Services - Catalyst Marketing Agency",
  description: "Engage your audience with compelling content. Video production, copywriting, social media content, and multimedia campaigns that drive results.",
  keywords: ["content creation", "video production", "copywriting", "social media content", "content strategy", "multimedia campaigns"],
};

export default function ContentCreationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-2 mb-8">
                <PenTool className="w-6 h-6 text-[#babc6b]" />
                <span className="text-gray-600 font-medium">Content Creation Services</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight mb-8">
                Content That
                <span className="text-[#babc6b]"> Captivates & Converts</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                From compelling copy to stunning visuals and engaging videos, we create content that stops the scroll, sparks conversations, and drives meaningful action.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  Get Content Strategy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" className="border-gray-300 hover:bg-gray-50 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  View Portfolio
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Full-Service Content Creation
                </h2>
                <p className="text-xl text-gray-600">
                  Every format, every platform, every audience
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Video Production */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mb-6">
                    <Video className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Video Production</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Professional video content that tells your story and drives engagement across all platforms.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Promotional videos</li>
                    <li>• Product demonstrations</li>
                    <li>• Customer testimonials</li>
                    <li>• Social media videos</li>
                  </ul>
                </div>

                {/* Copywriting */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mb-6">
                    <FileText className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Strategic Copywriting</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Persuasive copy that converts browsers into buyers and readers into loyal customers.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Website copy</li>
                    <li>• Email campaigns</li>
                    <li>• Ad copy & scripts</li>
                    <li>• Sales pages</li>
                  </ul>
                </div>

                {/* Photography */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mb-6">
                    <Camera className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Professional Photography</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    High-quality images that showcase your brand and products in the best light.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Product photography</li>
                    <li>• Corporate headshots</li>
                    <li>• Event photography</li>
                    <li>• Lifestyle imagery</li>
                  </ul>
                </div>

                {/* Social Media Content */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mb-6">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Social Media Content</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Platform-specific content that builds communities and drives engagement.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Instagram stories & posts</li>
                    <li>• LinkedIn articles</li>
                    <li>• TikTok videos</li>
                    <li>• Facebook campaigns</li>
                  </ul>
                </div>

                {/* Podcast Production */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mb-6">
                    <Megaphone className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Podcast Production</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    End-to-end podcast creation from concept to distribution and promotion.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Concept development</li>
                    <li>• Recording & editing</li>
                    <li>• Show notes & transcripts</li>
                    <li>• Distribution strategy</li>
                  </ul>
                </div>

                {/* Blog Content */}
                <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-xl flex items-center justify-center mb-6">
                    <PenTool className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">Blog & Article Writing</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    SEO-optimized articles that establish authority and drive organic traffic.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Thought leadership articles</li>
                    <li>• Industry insights</li>
                    <li>• How-to guides</li>
                    <li>• Case studies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Strategy Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                  Our Content Creation Process
                </h2>
                <p className="text-xl text-gray-600">
                  Strategic content that aligns with your business goals
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">Strategy</h3>
                  <p className="text-gray-600 text-sm">Content audit, audience research, and strategic planning</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">Planning</h3>
                  <p className="text-gray-600 text-sm">Content calendar, topics, and production schedule</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">Creation</h3>
                  <p className="text-gray-600 text-sm">Professional content production and quality assurance</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-[#babc6b] rounded-full flex items-center justify-center mx-auto mb-4 text-black font-bold text-lg">
                    4
                  </div>
                  <h3 className="text-lg font-bold text-black mb-3">Optimize</h3>
                  <p className="text-gray-600 text-sm">Performance analysis and content optimization</p>
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
                Ready to Create Compelling Content?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let us help you tell your story in a way that resonates with your audience and drives meaningful business results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
                  Start Content Strategy
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link href="/work">
                  <Button variant="outline" className="border-gray-600 hover:bg-gray-800 text-white hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300">
                    View Content Portfolio
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
