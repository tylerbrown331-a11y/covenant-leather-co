"use client";

import { useState } from "react";
import { Metadata } from "next";

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Each journal is made to order. Please allow 3–5 business days for production, plus shipping time. Standard shipping takes 5–7 business days. Priority shipping takes 2–3 business days. You'll receive a tracking email as soon as your order ships.",
  },
  {
    question: "Can I request custom engraving or initials?",
    answer:
      "Yes — every journal can be personalized with initials or a short name, hand-stamped into the leather cover. Select the personalization option on the product page and enter your text. This adds approximately $10 to the order.",
  },
  {
    question: "What type of leather do you use?",
    answer:
      "We use full-grain and top-grain American leather — the highest quality available. Our flagship journals use full-grain saddle leather that develops a beautiful patina over time. We never use bonded or faux leather.",
  },
  {
    question: "Are these journals acid-free?",
    answer:
      "Yes. All of our paper is acid-free and archival quality (80–100gsm depending on the journal). Your writing will not yellow or degrade over time.",
  },
  {
    question: "Do you offer bulk orders for missionary groups or wards?",
    answer:
      "We love bulk orders. Contact us for pricing on orders of 10+ journals. We offer a discount for ward or stake orders, and can work with any lead time. Reach out via the contact page.",
  },
  {
    question: "What's your return policy?",
    answer:
      "We stand behind every journal we make. If your journal arrives damaged or defective, contact us within 14 days for a replacement or full refund. Because each journal is made to order, we cannot accept returns on personalized items unless there's a defect.",
  },
  {
    question: "How do I care for my leather journal?",
    answer:
      "Condition the leather every 6–12 months with a quality leather balm (we recommend beeswax or neatsfoot oil-based products). Keep it away from prolonged direct sunlight and moisture. The natural oils from your hands will develop a unique patina over time — this is a feature, not a flaw.",
  },
  {
    question: "What pen or ink works best?",
    answer:
      "Our paper is fountain pen friendly. We recommend medium or fine nibs on standard-weight paper, and bold nibs on our premium 100gsm sheets. Ballpoint and gel pens work beautifully on all weights.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E8D9BC]">
      <button
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
        onClick={() => setOpen(!open)}
      >
        <span
          className="text-base font-semibold text-[#2C2C2C] group-hover:text-[#6B3A2A] transition-colors"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {question}
        </span>
        <span className="text-[#C49A3C] flex-shrink-0 mt-0.5 text-xl leading-none">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p
          className="pb-5 text-sm text-[#555] leading-relaxed"
          style={{ fontFamily: "'Lora', serif" }}
        >
          {answer}
        </p>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
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
        {faqs.map((faq) => (
          <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}

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
