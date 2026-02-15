import { SITE_CONFIG, SERVICES } from "@/lib/constants";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  email: SITE_CONFIG.email,
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
  },
  areaServed: "GB",
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  publisher: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
  },
};

const serviceCreationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: SERVICES.creation.title,
  description: SERVICES.creation.shortDescription,
  provider: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
  },
  areaServed: "GB",
};

const serviceHostingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: SERVICES.hosting.title,
  description: SERVICES.hosting.shortDescription,
  provider: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
  },
  areaServed: "GB",
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceCreationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceHostingSchema),
        }}
      />
    </>
  );
}
