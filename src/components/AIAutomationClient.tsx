"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ConsultationForm from "./ConsultationForm";
import Link from "next/link";

interface AIAutomationClientProps {
  variant?: "hero" | "cta";
}

export default function AIAutomationClient({ variant = "hero" }: AIAutomationClientProps) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  if (variant === "cta") {
    return (
      <>
        {/* CTA Section Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => setIsConsultationOpen(true)}
            className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            Get Free AI Audit
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Link href="/work">
            <Button variant="outline" className="border-gray-600 hover:bg-gray-800 text-white hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300">
              View AI Case Studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Consultation Form */}
        <ConsultationForm
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
        />
      </>
    );
  }

  return (
    <>
      {/* Hero CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={() => setIsConsultationOpen(true)}
          className="bg-[#babc6b] hover:bg-[#a8aa5a] text-black font-medium px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105"
        >
          Get AI Audit
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
        <Link href="/work">
          <Button variant="outline" className="border-gray-300 hover:bg-gray-50 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
            View Case Studies
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>

      {/* Consultation Form */}
      <ConsultationForm
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </>
  );
}
