import Script from "next/script";
import {
  AGGREGATE_RATING,
  GOOGLE_MAPS_URL,
  OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  STORE_GEO,
} from "@/lib/site";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}${OG_IMAGE}`,
    telephone: "+55-84-99620-0389",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Estrada pra Pium, 2011",
      addressLocality: "Parnamirim",
      addressRegion: "RN",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: STORE_GEO.latitude,
      longitude: STORE_GEO.longitude,
    },
    hasMap: GOOGLE_MAPS_URL,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: AGGREGATE_RATING.ratingValue,
      reviewCount: AGGREGATE_RATING.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "07:00",
        closes: "12:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-84-99620-0389",
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
    sameAs: [
      "https://www.instagram.com/delcaconstrucao/",
      "https://www.facebook.com/delcacons/?locale=pt_BR",
    ],
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
