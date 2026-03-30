import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.covenantleatherco.com"),
  title: {
    default: "Covenant Leather Co. | Handmade Genuine Leather Journals",
    template: "%s | Covenant Leather Co.",
  },
  description:
    "Handmade genuine leather journals crafted for missionaries, scripture study, and meaningful gifting. Built to outlast the stories inside them.",
  keywords: [
    "handmade leather journal",
    "genuine leather journal for missionaries",
    "LDS mission journal",
    "personalized leather journal",
    "scripture journal leather cover",
    "missionary gift",
    "leather journal Saratoga Springs Utah",
  ],
  authors: [{ name: "Benjamin S. Fowler", url: "https://www.covenantleatherco.com/about" }],
  creator: "Benjamin S. Fowler",
  openGraph: {
    title: "Covenant Leather Co. | Handmade Genuine Leather Journals",
    description: "Handmade genuine leather journals crafted for missionaries, scripture study, and meaningful gifting. Built to outlast the stories inside them.",
    type: "website",
    url: "https://www.covenantleatherco.com",
    siteName: "Covenant Leather Co.",
    locale: "en_US",
    images: [
      {
        url: "/images/journals-brown-olive-spread.webp",
        width: 1200,
        height: 630,
        alt: "Handmade genuine leather journals by Covenant Leather Co.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Covenant Leather Co. | Handmade Genuine Leather Journals",
    description: "Handmade genuine leather journals crafted for missionaries, scripture study, and meaningful gifting.",
    images: ["/images/journals-brown-olive-spread.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Covenant Leather Co.",
    description: "Handmade genuine leather journals crafted for missionaries, scripture study, and meaningful gifting.",
    url: "https://www.covenantleatherco.com",
    logo: "https://www.covenantleatherco.com/images/journals-brown-olive-spread.webp",
    email: "hello@covenantleatherco.com",
    founder: {
      "@type": "Person",
      name: "Benjamin S. Fowler",
      jobTitle: "Founder & Craftsman",
      url: "https://www.covenantleatherco.com/about",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Saratoga Springs",
      addressRegion: "UT",
      addressCountry: "US",
    },
    sameAs: ["https://www.covenantleatherco.com"],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Cinzel:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C2C2C]">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
