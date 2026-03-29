import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
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
  ],
  openGraph: {
    title: "Covenant Leather Co.",
    description: "Crafted to Last. Made to Record.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Covenant Leather Co.",
              description: "Handmade genuine leather journals crafted for missionaries, scripture study, and meaningful gifting.",
              url: "https://covenantleatherco.com",
              founder: { "@type": "Person", name: "Benjamin S. Fowler" },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Saratoga Springs",
                addressRegion: "UT",
                addressCountry: "US",
              },
              sameAs: ["https://github.com/tylerbrown331-a11y/covenant-leather-co"],
            }),
          }}
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
