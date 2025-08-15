"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Mail, Check } from "lucide-react";
import Link from "next/link";


export default function BlogHero() {
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus("loading");

    // Simulate API call
    setTimeout(() => {
      setNewsletterStatus("success");
      setEmail("");
      setTimeout(() => setNewsletterStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/#blog"
            className="inline-flex items-center text-[#babc6b] hover:text-[#a8aa5a] font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
            Marketing Insights & Expertise
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Stay ahead of the curve with our latest insights on digital marketing,
            brand strategy, and growth tactics that drive real results.
          </p>

          {/* Newsletter Signup */}
          <div className="max-w-md mx-auto bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            {newsletterStatus === "success" ? (
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-green-600">Thanks for subscribing!</h3>
                <p className="text-gray-600 text-sm">You'll receive our latest insights in your inbox.</p>
              </div>
            ) : (
              <>
                <h3 className="font-semibold text-lg mb-3 text-center">Get marketing insights delivered to your inbox</h3>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-gray-200 focus:border-[#babc6b] focus:ring-2 focus:ring-[#babc6b] focus:ring-opacity-20 outline-none transition-all"
                    disabled={newsletterStatus === "loading"}
                  />
                  <Button
                    type="submit"
                    disabled={newsletterStatus === "loading"}
                    className="w-full bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {newsletterStatus === "loading" ? (
                      <div className="flex items-center justify-center">
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                        Subscribing...
                      </div>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        Subscribe
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
