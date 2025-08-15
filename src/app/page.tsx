import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

// Dynamic imports for components below the fold
const ClientLogos = dynamic(() => import("@/components/ClientLogos"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
});

const WhatMakesDifferent = dynamic(() => import("@/components/WhatMakesDifferent"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const Work = dynamic(() => import("@/components/Work"), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
});

const HowItWorks = dynamic(() => import("@/components/HowItWorks"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
});

const Blog = dynamic(() => import("@/components/Blog"), {
  loading: () => <div className="h-96 bg-white animate-pulse" />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />,
});



export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Critical above-the-fold content */}
      <Header />
      <Hero />
      <About />

      {/* Below-the-fold content loaded dynamically */}
      <ClientLogos />
      <Services />
      <WhatMakesDifferent />
      <Work />
      <HowItWorks />
      <Blog />
      <Footer />
    </main>
  );
}
