import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Covenant Leather Co. Questions about leather journals, bulk orders for wards or stakes, personalization, or shipping — Ben responds to every message personally.",
  openGraph: {
    title: "Contact Us | Covenant Leather Co.",
    description: "Questions about handmade leather journals, bulk orders, or personalization? Ben responds personally.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
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
              We&apos;d love to hear from you.
            </h2>

            <div className="space-y-8">
              {[
                { title: "General Questions", body: "Wondering about leather types, sizing, or how a journal is made? Ask away.", icon: "✉" },
                { title: "Custom & Bulk Orders", body: "Ordering for a ward, stake, or missionary group? We offer discounts on orders of 10 or more. Let's talk.", icon: "📦" },
                { title: "Personalization", body: "Want a name, initials, or a short phrase stamped into the leather? We can help with that.", icon: "✒" },
                { title: "Orders & Shipping", body: "Questions about an existing order or shipping timeline? Include your order number and we'll look into it right away.", icon: "🚚" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#6B3A2A] mb-1" style={{ fontFamily: "'Cinzel', serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#555] leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-[#F4ECD8] border border-[#E8D9BC]">
              <p className="text-xs tracking-widest uppercase text-[#6B3A2A] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>
                Direct Email
              </p>
              <a
                href="mailto:hello@covenantleatherco.com"
                className="text-base text-[#2C2C2C] hover:text-[#6B3A2A] transition-colors"
                style={{ fontFamily: "'Lora', serif" }}
              >
                hello@covenantleatherco.com
              </a>
              <p className="text-xs text-[#888] mt-2" style={{ fontFamily: "'Lora', serif" }}>
                Saratoga Springs, Utah — Handmade in the USA
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
