import Script from 'next/script';

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    "name": "DELCA Construções",
    "url": "https://www.delcaconstrucoes.com.br",
    "logo": "https://www.delcaconstrucoes.com.br/logo.png",
    "telephone": "+55-84-99620-0389",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Estrada pra Pium, 2011",
      "addressLocality": "Parnamirim",
      "addressRegion": "RN",
      "addressCountry": "BR"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "07:00",
        "closes": "12:00"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-84-99620-0389",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.instagram.com/delcaconstrucao/",
      "https://www.facebook.com/delcacons/?locale=pt_BR"
    ]
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
