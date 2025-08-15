import Script from 'next/script';

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DELCA Construções",
    "url": "https://www.delcaconstrucoes.com.br",
    "logo": "https://www.delcaconstrucoes.com.br/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-84-99620-0389",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.instagram.com/delcaconstrucoes/",
      "https://www.facebook.com/delcacons/?locale=pt_BR",
    ]
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema ) }}
    />
  );
}