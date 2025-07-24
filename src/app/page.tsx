import { HeroSection } from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import PartnersSection from "@/components/PartnerSection";
import LocationSection from "@/components/LocalizationSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ReviewsSection />
      <PartnersSection />
      <LocationSection />
      <ContactSection />
    </>
  );
}
