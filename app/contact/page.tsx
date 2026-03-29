"use client";

import { useState } from "react";
import type { Metadata } from "next";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens mail client with pre-filled message
    const body = encodeURIComponent(`Name: ${form.name}\n\n${form.message}`);
    const subject = encodeURIComponent(form.subject || "Message from CovenantLeatherCo.com");
    window.location.href = `mailto:hello@covenantleatherco.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-[#FAF7F2] border-b border-[#E8D9BC] py-16 text-center px-4">
        <p
          className="text-xs tracking-[0.35em] uppercase text-[#C49A3C] mb-3"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Get in Touch
        </p>
        <h1
          className="text-4xl font-bold text-[#2C2C2C]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Contact Us
        </h1>
        <p
          className="text-[#555] mt-4 max-w-md mx-auto"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Every message is read and responded to personally by Ben. We typically reply within one business day.
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div>
            <h2
              className="text-2xl font-bold text-[#2C2C2C] mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              We'd love to hear from you.
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "General Questions",
                  body: "Wondering about leather types, sizing, or how a journal is made? Ask away.",
                  icon: "✉",
                },
                {
                  title: "Custom & Bulk Orders",
                  body: "Ordering for a ward, stake, or missionary group? We offer discounts on orders of 10 or more. Let's talk.",
                  icon: "📦",
                },
                {
                  title: "Personalization",
                  body: "Want a name, initials, or a short phrase stamped into the leather? We can help with that.",
                  icon: "✒",
                },
                {
                  title: "Orders & Shipping",
                  body: "Questions about an existing order or shipping timeline? Include your order number and we'll look into it right away.",
                  icon: "🚚",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h3
                      className="text-sm font-semibold text-[#6B3A2A] mb-1"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm text-[#555] leading-relaxed"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-[#F4ECD8] border border-[#E8D9BC]">
              <p
                className="text-xs tracking-widest uppercase text-[#6B3A2A] mb-2"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Direct Email
              </p>
              <a
                href="mailto:hello@covenantleatherco.com"
                className="text-base text-[#2C2C2C] hover:text-[#6B3A2A] transition-colors"
                style={{ fontFamily: "'Lora', serif" }}
              >
                hello@covenantleatherco.com
              </a>
              <p
                className="text-xs text-[#888] mt-2"
                style={{ fontFamily: "'Lora', serif" }}
              >
                Saratoga Springs, Utah — Handmade in the USA
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#6B3A2A] flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#F4ECD8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold text-[#2C2C2C] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Your mail app should have opened.
                </h3>
                <p
                  className="text-sm text-[#555]"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  If it didn&apos;t, email us directly at{" "}
                  <a href="mailto:hello@covenantleatherco.com" className="text-[#6B3A2A] underline">
                    hello@covenantleatherco.com
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-xs tracking-widest uppercase text-[#6B3A2A] mb-2"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-[#C8B8A0] px-3 py-2.5 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#6B3A2A] bg-white"
                      style={{ fontFamily: "'Lora', serif" }}
                      placeholder="Ben Fowler"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs tracking-widest uppercase text-[#6B3A2A] mb-2"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-[#C8B8A0] px-3 py-2.5 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#6B3A2A] bg-white"
                      style={{ fontFamily: "'Lora', serif" }}
                      placeholder="you@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs tracking-widest uppercase text-[#6B3A2A] mb-2"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Subject
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full border border-[#C8B8A0] px-3 py-2.5 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#6B3A2A] bg-white"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    <option value="">Select a topic...</option>
                    <option value="General Question">General Question</option>
                    <option value="Bulk / Ward Order">Bulk / Ward Order</option>
                    <option value="Personalization Request">Personalization Request</option>
                    <option value="Order Status">Order Status</option>
                    <option value="Returns & Exchanges">Returns & Exchanges</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-xs tracking-widest uppercase text-[#6B3A2A] mb-2"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-[#C8B8A0] px-3 py-2.5 text-sm text-[#2C2C2C] focus:outline-none focus:border-[#6B3A2A] bg-white resize-none"
                    style={{ fontFamily: "'Lora', serif" }}
                    placeholder="Tell us what you need..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-4"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
