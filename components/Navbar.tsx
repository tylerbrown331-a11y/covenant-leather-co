"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { useState } from "react";

export default function Navbar() {
  const { totalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#FAF7F2] border-b border-[#E8D9BC] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start leading-tight group">
            <span
              className="text-xl font-bold tracking-wider text-[#6B3A2A] uppercase group-hover:text-[#4E2A1C] transition-colors"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Covenant Leather
            </span>
            <span
              className="text-xs tracking-widest text-[#C49A3C] uppercase"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Co.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "/products", label: "Shop" },
              { href: "/collections/missions", label: "Missions" },
              { href: "/collections/gifts", label: "Gifts" },
              { href: "/about", label: "Our Story" },
              { href: "/blog", label: "Journal" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm tracking-widest uppercase text-[#2C2C2C] hover:text-[#6B3A2A] transition-colors"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Cart + Mobile menu */}
          <div className="flex items-center gap-4">
            <Link href="/cart" className="relative group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#2C2C2C] group-hover:text-[#6B3A2A] transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#6B3A2A] text-[#F4ECD8] text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-[#2C2C2C] hover:text-[#6B3A2A] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-[#E8D9BC] pt-3 flex flex-col gap-3">
            {[
              { href: "/products", label: "Shop All" },
              { href: "/collections/missions", label: "Mission Journals" },
              { href: "/collections/gifts", label: "Gifts" },
              { href: "/about", label: "Our Story" },
              { href: "/blog", label: "Journal" },
              { href: "/cart", label: "Cart" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-widest uppercase text-[#2C2C2C] hover:text-[#6B3A2A] transition-colors px-2"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
