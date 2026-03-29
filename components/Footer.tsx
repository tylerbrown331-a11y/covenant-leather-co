"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-[#F4ECD8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <p
              className="text-2xl font-bold tracking-widest text-[#F4ECD8] uppercase mb-1"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Covenant Leather Co.
            </p>
            <div className="h-px w-16 bg-[#C49A3C] mb-4" />
            <p className="text-sm text-[#d9cfc0] leading-relaxed max-w-xs" style={{ fontFamily: "'Lora', serif" }}>
              Handmade genuine leather journals, crafted for a life worth recording. Every journal is
              made by hand — built to outlast the stories inside it.
            </p>
            {/* Email signup */}
            <form className="mt-6 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-[#3a3a3a] border border-[#4a4a4a] text-[#F4ECD8] placeholder-[#888] px-3 py-2 text-sm focus:outline-none focus:border-[#C49A3C]"
              />
              <button
                type="submit"
                className="bg-[#C49A3C] text-[#2C2C2C] px-4 py-2 text-xs tracking-widest uppercase font-bold hover:bg-[#D4AA4C] transition-colors"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Join
              </button>
            </form>
            <p className="text-xs text-[#aaa] mt-2">10% off your first journal when you sign up.</p>
          </div>

          {/* Shop Links */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase text-[#C49A3C] mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Shop
            </h4>
            <ul className="space-y-2 text-sm text-[#d9cfc0]" style={{ fontFamily: "'Lora', serif" }}>
              {[
                { href: "/products", label: "All Journals" },
                { href: "/collections/missions", label: "Mission Journals" },
                { href: "/collections/gifts", label: "Gift Sets" },
                { href: "/products/covenant-journal", label: "The Covenant Journal" },
                { href: "/products/scripture-journal", label: "Scripture Journal" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#F4ECD8] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h4
              className="text-xs tracking-widest uppercase text-[#C49A3C] mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Info
            </h4>
            <ul className="space-y-2 text-sm text-[#d9cfc0]" style={{ fontFamily: "'Lora', serif" }}>
              {[
                { href: "/about", label: "Our Story" },
                { href: "/blog", label: "The Journal" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-[#F4ECD8] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#3a3a3a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#999]" style={{ fontFamily: "'Lora', serif" }}>
            © {new Date().getFullYear()} Covenant Leather Co. All rights reserved. Handmade in the USA.
          </p>
          <div className="flex gap-6 text-xs text-[#999]">
            <Link href="/faq" className="hover:text-[#d9cfc0] transition-colors">
              Shipping & Returns
            </Link>
            <Link href="/faq" className="hover:text-[#d9cfc0] transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
