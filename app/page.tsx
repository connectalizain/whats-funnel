import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

// Dynamically load below-the-fold components for better initial performance
const Pricing = dynamic(() => import("@/components/Pricing"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const CTASection = dynamic(() => import("@/components/CTASection"), { ssr: true });

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
