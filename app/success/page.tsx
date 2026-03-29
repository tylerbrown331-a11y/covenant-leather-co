"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";

export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        {/* Wax seal icon */}
        <div
          className="w-20 h-20 rounded-full bg-[#6B3A2A] flex items-center justify-center mx-auto mb-8"
        >
          <svg
            className="w-10 h-10 text-[#F4ECD8]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        <p
          className="text-xs tracking-[0.35em] uppercase text-[#C49A3C] mb-3"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Order Confirmed
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] mb-4 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Your journal is on
          <br />
          <em>its way.</em>
        </h1>

        <div className="h-px w-16 bg-[#C49A3C] mx-auto my-6" />

        <p
          className="text-base text-[#555] leading-relaxed mb-8"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Thank you for your order. A confirmation email is on the way. Your journal is being
          made by hand and will ship within 3–5 business days. May it serve you well.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products" className="btn-primary inline-block">
            Shop More Journals
          </Link>
          <Link href="/" className="btn-outline inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
