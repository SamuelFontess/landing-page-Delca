import { HeroSection } from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import PartnersSection from "@/components/PartnerSection";
import LocationSection from "@/components/LocalizationSection";
import ContactSection from "@/components/ContactSection";
import ProductsSection from "@/components/ProductsSection";
import type { Metadata } from "next";
import { productsData } from "@/data/products";

export async function generateMetadata(): Promise<Metadata> {
  const allProductNames: string[] = [];
  productsData.forEach(category => {
    category.products.forEach(product => {
      allProductNames.push(product.name);
    });
  });

  const featuredProductNames = allProductNames.slice(0, 5).join(", ");

  return {
    title: `DELCA Construções | Materiais de Construção em Parnamirim, RN - ${featuredProductNames}`,
    description: `Encontre tudo para sua obra na DELCA Construções. Mais de 15 anos de experiência em Parnamirim, RN, com entrega rápida e os melhores preços em cimento, tijolos, tintas, ${featuredProductNames.toLowerCase()} e muito mais.`,
    keywords: `materiais de construção, parnamirim, delca, Delca, DELCA, cimento, tijolo, areia, loja de construção, rn, material, material de construção, ${allProductNames.join(', ')}`,
    openGraph: {
      title: `DELCA Construções | Qualidade e Confiança para sua Obra - ${featuredProductNames}`,
      description: `A sua parceira completa em materiais de construção em Parnamirim, RN, incluindo ${featuredProductNames.toLowerCase()}.`,
      url: "https://www.delcaconstrucoes.com.br/",
      siteName: "DELCA Construções",
      images: [
        {
          url: "/opengraph.jpeg",
          width: 1200,
          height: 630,
        },
      ],
      locale: "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `DELCA Construções | Qualidade e Confiança para sua Obra - ${featuredProductNames}`,
      description: `A sua parceira completa em materiais de construção em Parnamirim, RN, incluindo ${featuredProductNames.toLowerCase()}.`,
      images: ["/opengraph.jpeg"],
    },
  };
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ReviewsSection />
      <PartnersSection />
      <ProductsSection />
      <LocationSection />
      <ContactSection />
    </>
  );
}
