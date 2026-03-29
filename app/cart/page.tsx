"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Checkout failed");
      router.push(data.url);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-32 text-center">
        <h1
          className="text-4xl font-bold text-[#2C2C2C] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Your cart is empty.
        </h1>
        <p
          className="text-[#666] text-base mb-8 leading-relaxed"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Every record begins with a blank page. Let's find yours.
        </p>
        <Link href="/products" className="btn-primary inline-block">
          Shop Journals
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1
        className="text-4xl font-bold text-[#2C2C2C] mb-10"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Your Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Items */}
        <div className="flex-1 space-y-6">
          {items.map((item, index) => (
            <div
              key={`${item.product.id}-${item.selectedSize}-${item.selectedCoverStyle}-${item.selectedPaperType}`}
              className="flex gap-6 border-b border-[#E8D9BC] pb-6"
            >
              {/* Thumbnail */}
              <Link href={`/products/${item.product.slug}`} className="flex-shrink-0">
                <div className="relative w-24 h-32 overflow-hidden bg-[#F4ECD8]">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
              </Link>

              {/* Info */}
              <div className="flex-1">
                <Link
                  href={`/products/${item.product.slug}`}
                  className="text-base font-semibold text-[#2C2C2C] hover:text-[#6B3A2A] transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.product.name}
                </Link>
                <div className="mt-1 space-y-0.5 text-xs text-[#888]" style={{ fontFamily: "'Lora', serif" }}>
                  <p>Size: {item.selectedSize}</p>
                  <p>Cover: {item.selectedCoverStyle}</p>
                  <p>Paper: {item.selectedPaperType}</p>
                </div>

                <div className="mt-3 flex items-center gap-4">
                  {/* Quantity */}
                  <div className="flex items-center border border-[#C8B8A0]">
                    <button
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                      className="px-3 py-1 text-[#2C2C2C] hover:bg-[#F4ECD8] transition-colors text-lg"
                    >
                      −
                    </button>
                    <span
                      className="px-3 py-1 text-sm border-x border-[#C8B8A0] min-w-[2rem] text-center"
                      style={{ fontFamily: "'Lora', serif" }}
                    >
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                      className="px-3 py-1 text-[#2C2C2C] hover:bg-[#F4ECD8] transition-colors text-lg"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(index)}
                    className="text-xs text-[#888] hover:text-red-500 transition-colors underline"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    Remove
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="text-right flex-shrink-0">
                <p
                  className="text-base font-semibold text-[#6B3A2A]"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  ${(item.unitPrice * item.quantity).toFixed(2)}
                </p>
                {item.quantity > 1 && (
                  <p className="text-xs text-[#888] mt-0.5" style={{ fontFamily: "'Lora', serif" }}>
                    ${item.unitPrice} each
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:w-80 flex-shrink-0">
          <div className="bg-[#F4ECD8] p-8 border border-[#E8D9BC]">
            <h2
              className="text-lg font-bold text-[#2C2C2C] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Order Summary
            </h2>

            <div className="space-y-3 text-sm mb-6" style={{ fontFamily: "'Lora', serif" }}>
              <div className="flex justify-between text-[#444]">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[#444]">
                <span>Shipping</span>
                <span className="text-[#6B3A2A]">Calculated at checkout</span>
              </div>
              <div className="h-px bg-[#E8D9BC]" />
              <div className="flex justify-between font-semibold text-[#2C2C2C] text-base">
                <span>Total</span>
                <span style={{ fontFamily: "'Cinzel', serif" }}>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            {error && (
              <p className="text-sm text-red-600 mb-4" style={{ fontFamily: "'Lora', serif" }}>
                {error}
              </p>
            )}

            <button
              onClick={handleCheckout}
              disabled={loading}
              className="w-full btn-primary py-4 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {loading ? "Redirecting…" : "Proceed to Checkout"}
            </button>

            <p className="text-xs text-[#888] text-center mt-4" style={{ fontFamily: "'Lora', serif" }}>
              Secure checkout powered by Stripe
            </p>

            <div className="mt-6 text-center">
              <Link
                href="/products"
                className="text-xs text-[#6B3A2A] underline hover:text-[#4E2A1C]"
                style={{ fontFamily: "'Lora', serif" }}
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
