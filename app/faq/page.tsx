import type { Metadata } from "next";
import { faqs } from "@/lib/faqs";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Covenant Leather Co. handmade journals — shipping, personalization, leather types, care, bulk orders, and more.",
  openGraph: {
    title: "Frequently Asked Questions | Covenant Leather Co.",
    description: "Answers about shipping, leather types, personalization, care, and bulk orders.",
    type: "website",
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-[#FAF7F2] border-b border-[#E8D9BC] py-16 text-center px-4">
        <p
          className="text-xs tracking-[0.35em] uppercase text-[#C49A3C] mb-3"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Questions & Answers
        </p>
        <h1
          className="text-4xl font-bold text-[#2C2C2C]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Frequently Asked Questions
        </h1>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <FAQAccordion />

        <div className="mt-16 bg-[#F4ECD8] border border-[#E8D9BC] p-8 text-center">
          <h2
            className="text-xl font-bold text-[#2C2C2C] mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Still have questions?
          </h2>
          <p
            className="text-sm text-[#555] mb-4"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Reach out — we respond to every message personally.
          </p>
          <a href="mailto:hello@covenantleatherco.com" className="btn-primary inline-block">
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}
