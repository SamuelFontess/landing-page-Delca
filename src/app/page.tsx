import { HeroSection } from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import PartnersSection from "@/components/PartnerSection";
import LocationSection from "@/components/LocalizationSection";
import LocationSectionMap from "@/components/LocationSectionMap";
import ContactSection from "@/components/ContactSection";
import ProductsSection from "@/components/ProductsSection";
import CTABand from "@/components/CTABand";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ReviewsSection />
      <PartnersSection />
      <ProductsSection />
      <LocationSection map={<LocationSectionMap />} />
      <ContactSection />
      <CTABand />
    </>
  );
}
