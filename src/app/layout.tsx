// src/app/layout.tsx
import Navbar from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";
import { Providers } from "./providers";
import "./globals.css";

export const metadata = {
  title: "Spazio ai Ciompi - Affitto per Eventi a Firenze",
  description: "Affitta uno spazio per eventi, mostre e workshop a Firenze. Scopri Spazio ai Ciompi!",
  other: {
    "google-site-verification": "rZX57f15xG92OZg3j5oYzfIV6SJXYkQbJFv1LjW3cyA"
  },
  icons: {
    icon: "/logo.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schemaMarkup = [
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Spazio ai Ciompi",
      "url": "https://www.spazioaiciompi.com",
      "image": "https://www.spazioaiciompi.com/logo.png",
      "description": "Affitto spazio eventi a Firenze: mostre, workshop, lezioni, riunioni.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Piazza dei Ciompi, 17",
        "addressLocality": "Firenze",
        "postalCode": "50122",
        "addressCountry": "IT"
      },
      "telephone": "+39 3717665575"
    },
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "Eventi a Spazio ai Ciompi",
      "location": {
        "@type": "Place",
        "name": "Spazio ai Ciompi",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Piazza dei Ciompi, 17",
          "addressLocality": "Firenze",
          "postalCode": "50122",
          "addressCountry": "IT"
        }
      },
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "description": "Mostre, lezioni, workshop e riunioni culturali nello spazio eventi a Firenze.",
      "organizer": {
        "@type": "Organization",
        "name": "Spazio ai Ciompi",
        "url": "https://www.spazioaiciompi.com"
      }
    }
  ];

  return (
    <html lang="it">
      <head>
        <meta name="google-site-verification" content="rZX57f15xG92OZg3j5oYzfIV6SJXYkQbJFv1LjW3cyA" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaMarkup)
          }}
        />
      </head>
      <body className="bg-gray-100 min-h-screen">
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <CookieBanner />
      </body>
    </html>
  );
}
