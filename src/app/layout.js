import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : siteConfig.url)
  ),
  title: {
    default: "Resolve360 – India’s No.1 Online Physiotherapy Clinic",
    template: "%s | Resolve360"
  },
  description: siteConfig.description,
  keywords: [
    "Online Physiotherapy",
    "Online Physiotherapy India",
    "Online Physical Therapy India",
    "Online Physiotherapy Consultation",
    "Telehealth Physical Therapy",
    "Virtual Physiotherapy",
    "Physiotherapist Online",
    "Knee Pain Online Physiotherapy",
    "Back Pain Online Physiotherapy",
    "Sciatica Online Physical Therapy",
    "Resolve360"
  ],
  authors: [{ name: "Resolve360 Clinical Team" }],
  creator: "Rehabunified Private Limited",
  publisher: "Resolve360",
  formatDetection: {
    email: true,
    address: true,
    telephone: true
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: "Resolve360",
    title: "Resolve360 – India’s No.1 Online Physiotherapy Clinic",
    description: siteConfig.description,
    images: [
      {
        url: "/images/hero/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Resolve360 Online Physiotherapy Clinic"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Resolve360 – India’s No.1 Online Physiotherapy Clinic",
    description: siteConfig.description,
    creator: "@resolve3601",
    images: ["/images/hero/hero-banner.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({ children }) {
  // Global MedicalBusiness & Organization JSON-LD Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "MedicalBusiness"],
        "@id": `${siteConfig.url}/#organization`,
        "name": siteConfig.name,
        "url": siteConfig.url,
        "logo": {
          "@type": "ImageObject",
          "@id": `${siteConfig.url}/#logo`,
          "url": `${siteConfig.url}/images/logo.png`,
          "contentUrl": `${siteConfig.url}/images/logo.png`,
          "caption": "Resolve360 Logo"
        },
        "description": siteConfig.description,
        "telephone": siteConfig.phone,
        "email": siteConfig.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.addresses[0].street,
          "addressLocality": siteConfig.addresses[0].city,
          "addressRegion": siteConfig.addresses[0].region,
          "postalCode": siteConfig.addresses[0].postalCode,
          "addressCountry": "IN"
        },
        "areaServed": [
          "India",
          "United States",
          "United Kingdom",
          "Canada",
          "United Arab Emirates",
          "Australia",
          "Worldwide"
        ],
        "priceRange": "₹0 - ₹4799",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "reviewCount": "69"
        },
        "subjectOf": {
          "@type": "CreativeWork",
          "@id": `${siteConfig.url}/#patent`,
          "name": siteConfig.patent.title,
          "identifier": {
            "@type": "PropertyValue",
            "propertyID": "Patent Number",
            "value": siteConfig.patent.number
          }
        },
        "sameAs": [
          siteConfig.socials.twitter,
          siteConfig.socials.facebook,
          siteConfig.socials.instagram,
          siteConfig.socials.youtube,
          siteConfig.socials.androidApp,
          siteConfig.socials.iosApp
        ]
      }
    ]
  };

  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
