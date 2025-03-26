// src/app/head.tsx
import { DefaultSeo } from "next-seo";

export default function Head() {
  const eventVenueSchema = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "Spazio ai Ciompi",
    "url": "https://www.spazioaiciompi.com",
    "logo": "https://www.spazioaiciompi.com/logo.png",
    "description": "Affitta uno spazio per eventi, mostre e workshop a Firenze. Scopri Spazio ai Ciompi!",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Piazza dei Ciompi, 17",
      "addressLocality": "Firenze",
      "postalCode": "50122",
      "addressRegion": "FI",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.7709414,
      "longitude": 11.2651021
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+39 3717665575",
      "email": "spazioaiciompi@gmail.com"
    }
    // "sameAs": [
    //   "https://www.facebook.com/yourpage",
    //   "https://www.instagram.com/yourprofile"
    // ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Spazio ai Ciompi",
    "image": "https://www.spazioaiciompi.com/logo.png",
    "@id": "https://www.spazioaiciompi.com",
    "url": "https://www.spazioaiciompi.com",
    "telephone": "+39 3717665575",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Piazza dei Ciompi, 17",
      "addressLocality": "Firenze",
      "postalCode": "50122",
      "addressRegion": "FI",
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.7709414,
      "longitude": 11.2651021
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Spazio ai Ciompi",
    "url": "https://www.spazioaiciompi.com",
    "logo": "https://www.spazioaiciompi.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+39 3717665575",
      "email": "spazioaiciompi@gmail.com"
    }
  };

  return (
    <>
      <meta name="google-site-verification" content="rZX57f15xG92OZg3j5oYzfIV6SJXYkQbJFv1LjW3cyA" />
      <DefaultSeo
        title="Spazio ai Ciompi - Affitto per Eventi a Firenze"
        description="Affitta uno spazio per eventi, mostre e workshop a Firenze. Scopri Spazio ai Ciompi!"
        openGraph={{
          type: "website",
          locale: "it_IT",
          url: "https://www.spazioaiciompi.com",
          site_name: "Spazio ai Ciompi",
        }}
      />
      {/* Schema Markup JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            eventVenueSchema,
            localBusinessSchema,
            organizationSchema
          ])
        }}
      />
    </>
  );
}
