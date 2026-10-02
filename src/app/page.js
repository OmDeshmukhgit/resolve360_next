import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Conditions from "@/components/Conditions";
import Specialists from "@/components/Specialists";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import PatientVideoStories from "@/components/PatientVideoStories";
import Locations from "@/components/Locations";
import Technology from "@/components/Technology";
import ReelsAndTips from "@/components/ReelsAndTips";
import PressLogos from "@/components/PressLogos";
import SupportedBy from "@/components/SupportedBy";
import FAQ from "@/components/FAQ";
import Articles from "@/components/Articles";
import AppShowcase from "@/components/AppShowcase";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Resolve360 – India’s No.1 Online Physiotherapy Clinic",
  description: "Get pain relief with Resolve360's expert online physical therapy. Trusted by 50,000+ patients with a 4.9 rating. 1:1 personalized care plans start at just ₹499/session!",
  alternates: {
    canonical: "https://resolve360.app/"
  }
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section + 15-min Form + Pricing Ribbon */}
      <Hero />

      {/* 2. What is Online Physiotherapy */}
      <About />

      {/* 3. Why Choose Resolve360 + 6 Pillars + Stats */}
      <WhyChooseUs />

      {/* 4. Services (One-stop solution for all your rehab needs) */}
      <Services limit={6} showViewAll={true} />

      {/* 5. Conditions Treated */}
      <Conditions limit={8} showViewAll={true} />

      {/* 6. Senior Specialists (IAP & UK Trained) */}
      <Specialists limit={6} showViewAll={true} />

      {/* 7. The Real Benefits & Clinic Comparison */}
      <Benefits />

      {/* 8. Patient Written Testimonials (2M+ Sessions) */}
      <Testimonials />

      {/* 9. Authentic Patient Video Recovery Stories (YouTube) */}
      <PatientVideoStories />

      {/* 10. Global & India-Wide Locations */}
      <Locations />

      {/* 11. BEYOND TRADITIONAL PHYSIOTHERAPY - Patent No. 596041 */}
      <Technology />

      {/* 12. Reels & Recovery Tips (Video Guides) */}
      <ReelsAndTips />

      {/* 13. Resolve360 in News (12 Media Publication Logos) */}
      <PressLogos />

      {/* 14. Backed & Supported By (Kalaari, Nexus, etc.) */}
      <SupportedBy />

      {/* 15. FAQ with Accordion & Structured Data */}
      <FAQ limit={8} showAll={false} />

      {/* 16. Evidence-Based Rehabilitation Articles */}
      <Articles limit={3} showViewAll={true} />

      {/* 17. App Showcase: Recovery & rehab, in your pocket */}
      <AppShowcase />

      {/* 18. High-Converting Primary Consultation CTA */}
      <CTA />
    </>
  );
}
