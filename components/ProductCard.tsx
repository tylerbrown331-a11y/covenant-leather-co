import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const basePrice = product.price_base;

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-[#F4ECD8] aspect-[3/4]">
        {/* Badge */}
        {product.badge && (
          <span
            className="absolute top-3 left-3 z-10 bg-[#6B3A2A] text-[#F4ECD8] text-xs px-2 py-1 tracking-widest uppercase"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {product.badge}
          </span>
        )}

        {/* Product image */}
        <Image
          src={product.images[0]}
          alt={`${product.name} — handmade leather journal`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Hover overlay with second image */}
        {product.images[1] && (
          <Image
            src={product.images[1]}
            alt={`${product.name} detail`}
            fill
            className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>

      {/* Info */}
      <div className="mt-4 px-1">
        <h3
          className="text-base font-semibold text-[#2C2C2C] group-hover:text-[#6B3A2A] transition-colors leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {product.name}
        </h3>
        <p className="text-xs text-[#888] mt-0.5" style={{ fontFamily: "'Lora', serif" }}>
          {product.details.leather_type}
        </p>
        <p
          className="mt-2 text-sm font-semibold text-[#6B3A2A]"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          From ${basePrice}
        </p>
      </div>
    </Link>
  );
}
