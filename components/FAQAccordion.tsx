"use client";

import { useState } from "react";
import { faqs } from "@/lib/faqs";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E8D9BC]">
      <button
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
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

export default function FAQAccordion() {
  return (
    <>
      {faqs.map((faq) => (
        <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
      ))}
    </>
  );
}
