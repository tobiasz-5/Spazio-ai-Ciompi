// src/app/head.tsx
import { DefaultSeo } from "next-seo";

export default function Head() {
  return (
    <>
      <meta name="google-site-verification" content="rZX57f15xG92OZg3j5oYzfIV6SJXYkQbJFv1LjW3cyA" />
      <DefaultSeo
        title="Spazio ai Ciompi - Affitto per Eventi a Firenze"
        description="Affitta uno spazio per eventi, mostre e workshop a Firenze. Scopri Spazio ai Ciompi!"
        
        openGraph={{
          type: "website",
          locale: "it_IT",
          url: "https://www.spazioaiciompi.it",
          site_name: "Spazio ai Ciompi",
        }}
      />
    </>
  );
}
