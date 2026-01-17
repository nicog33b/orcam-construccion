import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

// ⚡ Static generation global configuration
export const revalidate = false; // No usar ISR - completamente estático
export const dynamic = "force-static"; // Generar como estático en build time
export const fetchCache = "only-cache"; // Solo usar datos cacheados

const siteUrl = "https://orcamconstrucciones.com";
const siteName = "Orcam Construcciones";
const defaultTitle = `${siteName} | Refacciones y Obra Nueva en Uruguay`;
const defaultDescription =
  "Orcam Construcciones: refacciones generales y obra nueva en Uruguay. Baños completos, reformas integrales e instalaciones (electricidad, cañerías, revestimientos y carpintería). Presupuestos sin cargo. WhatsApp: 094 681 285.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },

  description: defaultDescription,

  keywords: [
    "Orcam Construcciones",
    "constructora Uruguay",
    "refacciones Uruguay",
    "obra nueva Uruguay",
    "reformas integrales",
    "baños completos",
    "reforma de baño",
    "electricidad",
    "cañerías",
    "plomería",
    "carpintería",
    "revestimientos",
    "porcelanato",
    "piso vinílico",
    "impermeabilización",
    "membrana",
    "presupuesto sin cargo",
    "presupuesto sin costo",
  ],

  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
    languages: {
      es: "/",
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    siteName,
    locale: "es_UY",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Orcam Construcciones - Refacciones y Obra Nueva en Uruguay",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/orcam_logo.png", type: "image/png" },
    ],
    apple: [{ url: "/orcam_logo.png" }],
  },

  manifest: "/site.webmanifest",

  category: "construction",

  other: {
    // Esto ayuda a WhatsApp/iOS a levantar bien colores/preview en algunos casos
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ✅ JSON-LD (mejor ponelo acá para que esté en todas las páginas)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteName,
    url: siteUrl,
    image: `${siteUrl}/og.jpg`,
    telephone: "+59894681285",
    address: {
      "@type": "PostalAddress",
      addressCountry: "UY",
    },
    areaServed: "Uruguay",
    description: defaultDescription,
    sameAs: [
      "https://www.facebook.com/orcamconstrucciones/",
    ],
    makesOffer: [
      { "@type": "Offer", name: "Refacciones Generales" },
      { "@type": "Offer", name: "Obra nueva y reformas" },
      { "@type": "Offer", name: "Instalaciones eléctricas y cañerías" },
      { "@type": "Offer", name: "Carpintería: puertas y ventanas" },
      { "@type": "Offer", name: "Impermeabilización / Membrana" },
    ],
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <div id="top" />
        <Header />
        <main className="page-content">{children}</main>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
