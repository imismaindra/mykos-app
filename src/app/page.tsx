import { Header } from "@/components/custom/header";
import { HeroSection } from "@/components/custom/hero-section";
import { FeaturesSection } from "@/components/custom/features-section";
import { LocationSection } from "@/components/custom/location-section";
import { PricingSection } from "@/components/custom/pricing-section";
import { TestimonialsSection } from "@/components/custom/testimonial";
import { Footer } from "@/components/custom/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <LocationSection />
        <PricingSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
