"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Product, Size, CoverStyle, PaperType } from "@/lib/products";
import { useCart, computePrice } from "@/lib/cart";
import ProductCard from "@/components/ProductCard";

interface Props {
  product: Product;
  related: Product[];
}

export default function ProductDetail({ product, related }: Props) {
  const router = useRouter();
  const { addItem } = useCart();

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<Size>(product.variants.size[0]);
  const [selectedCover, setSelectedCover] = useState<CoverStyle>(product.variants.cover_style[0]);
  const [selectedPaper, setSelectedPaper] = useState<PaperType>(product.variants.paper_type[0]);
  const [personalization, setPersonalization] = useState("");
  const [added, setAdded] = useState(false);

  const price = computePrice(product, selectedSize);

  const handleAddToCart = () => {
    addItem({
      product,
      quantity: 1,
      selectedSize,
      selectedCoverStyle: selectedCover,
      selectedPaperType: selectedPaper,
      unitPrice: price,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const VariantButton = <T extends string>({
    options,
    selected,
    onSelect,
  }: {
    options: T[];
    selected: T;
    onSelect: (v: T) => void;
  }) => (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          className={`px-3 py-1.5 text-xs border transition-all ${
            selected === opt
              ? "border-[#6B3A2A] bg-[#6B3A2A] text-[#F4ECD8]"
              : "border-[#C8B8A0] text-[#2C2C2C] hover:border-[#6B3A2A]"
          }`}
          style={{ fontFamily: "'Lora', serif" }}
        >
          {opt}
        </button>
      ))}
    </div>
  );

  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <nav className="flex items-center gap-2 text-xs text-[#888]" style={{ fontFamily: "'Lora', serif" }}>
          <Link href="/" className="hover:text-[#6B3A2A] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#6B3A2A] transition-colors">Journals</Link>
          <span>/</span>
          <span className="text-[#2C2C2C]">{product.name}</span>
        </nav>
      </div>

      {/* Main layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Gallery */}
          <div>
            <div className="relative aspect-square overflow-hidden bg-[#F4ECD8]">
              <Image
                src={product.images[activeImage]}
                alt={`${product.name} — view ${activeImage + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {product.badge && (
                <span
                  className="absolute top-4 left-4 bg-[#6B3A2A] text-[#F4ECD8] text-xs px-2 py-1 tracking-widest uppercase z-10"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {product.badge}
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3 mt-4">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-20 h-20 overflow-hidden border-2 flex-shrink-0 transition-all ${
                      i === activeImage ? "border-[#6B3A2A]" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} thumbnail ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1
              className="text-3xl sm:text-4xl font-bold text-[#2C2C2C] leading-tight mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {product.name}
            </h1>
            <p
              className="text-2xl font-semibold text-[#6B3A2A] mb-4"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              ${price}
            </p>
            <div className="h-px bg-[#E8D9BC] mb-6" />
            <p
              className="text-base text-[#444] leading-relaxed mb-8"
              style={{ fontFamily: "'Lora', serif" }}
            >
              {product.description}
            </p>

            {/* Variants */}
            <div className="space-y-6 mb-8">
              <div>
                <label
                  className="block text-xs tracking-widest uppercase text-[#6B3A2A] mb-2"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Size
                </label>
                <VariantButton options={product.variants.size} selected={selectedSize} onSelect={setSelectedSize} />
              </div>
              <div>
                <label
                  className="block text-xs tracking-widest uppercase text-[#6B3A2A] mb-2"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Cover Style
                </label>
                <VariantButton options={product.variants.cover_style} selected={selectedCover} onSelect={setSelectedCover} />
              </div>
              <div>
                <label
                  className="block text-xs tracking-widest uppercase text-[#6B3A2A] mb-2"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Paper Type
                </label>
                <VariantButton options={product.variants.paper_type} selected={selectedPaper} onSelect={setSelectedPaper} />
              </div>

              {/* Personalization */}
              <div>
                <label
                  className="block text-xs tracking-widest uppercase text-[#6B3A2A] mb-2"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Personalization / Initials{" "}
                  <span className="normal-case text-[#888] tracking-normal font-normal" style={{ fontFamily: "'Lora', serif" }}>
                    (optional, +$10)
                  </span>
                </label>
                <input
                  type="text"
                  value={personalization}
                  onChange={(e) => setPersonalization(e.target.value)}
                  placeholder="e.g. J.R.S. or Elder Smith"
                  maxLength={40}
                  className="w-full border border-[#C8B8A0] px-3 py-2 text-sm text-[#2C2C2C] placeholder-[#aaa] focus:outline-none focus:border-[#6B3A2A] bg-white"
                  style={{ fontFamily: "'Lora', serif" }}
                />
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary py-4 text-sm mb-4 transition-all"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {added ? "Added to Cart ✓" : "Add to Cart"}
            </button>
            <button
              onClick={() => {
                handleAddToCart();
                router.push("/cart");
              }}
              className="w-full btn-outline py-4 text-sm"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Buy Now
            </button>

            {/* Details */}
            <div className="mt-10 space-y-6">
              <div className="h-px bg-[#E8D9BC]" />
              <div>
                <h3
                  className="text-xs tracking-widest uppercase text-[#6B3A2A] mb-3"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Craft Details
                </h3>
                <ul className="space-y-1.5 text-sm text-[#444]" style={{ fontFamily: "'Lora', serif" }}>
                  <li><span className="text-[#888]">Leather:</span> {product.details.leather_type}</li>
                  <li><span className="text-[#888]">Thread:</span> {product.details.thread_color}</li>
                  <li><span className="text-[#888]">Pages:</span> {product.details.page_count}</li>
                  <li><span className="text-[#888]">Paper:</span> {product.details.paper_weight}</li>
                </ul>
              </div>

              <div className="h-px bg-[#E8D9BC]" />
              <div>
                <h3
                  className="text-xs tracking-widest uppercase text-[#6B3A2A] mb-3"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  The Story
                </h3>
                <p className="text-sm text-[#444] leading-relaxed italic" style={{ fontFamily: "'Lora', serif" }}>
                  {product.story}
                </p>
              </div>

              <div className="h-px bg-[#E8D9BC]" />
              <div>
                <h3
                  className="text-xs tracking-widest uppercase text-[#6B3A2A] mb-3"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Care
                </h3>
                <p className="text-sm text-[#444] leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                  {product.care}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="bg-[#F4ECD8] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl font-bold text-[#2C2C2C] mb-10 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
