"use client";

import { useState, useMemo } from "react";
import type { Product, CoverStyle, PaperType, Size } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

const ALL_SIZES: Size[] = ["Pocket (4x6)", "Standard (5x8)", "Large (8x10)"];
const ALL_COVERS: CoverStyle[] = ["Classic Wrap", "Zipper Closure", "Brass Clasp", "Open"];
const ALL_PAPER: PaperType[] = ["Lined", "Blank", "Dotted", "Mixed"];

export default function ProductsFilterClient({ products }: { products: Product[] }) {
  const [sizes, setSizes] = useState<Size[]>([]);
  const [covers, setCovers] = useState<CoverStyle[]>([]);
  const [papers, setPapers] = useState<PaperType[]>([]);

  const toggle = <T,>(arr: T[], setArr: (v: T[]) => void, val: T) => {
    setArr(arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]);
  };

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const sizeMatch = sizes.length === 0 || sizes.some((s) => p.variants.size.includes(s));
      const coverMatch = covers.length === 0 || covers.some((c) => p.variants.cover_style.includes(c));
      const paperMatch = papers.length === 0 || papers.some((pp) => p.variants.paper_type.includes(pp));
      return sizeMatch && coverMatch && paperMatch;
    });
  }, [products, sizes, covers, papers]);

  const FilterGroup = <T extends string>({
    label,
    options,
    selected,
    onToggle,
  }: {
    label: string;
    options: T[];
    selected: T[];
    onToggle: (v: T) => void;
  }) => (
    <div className="mb-8">
      <h3
        className="text-xs tracking-widest uppercase text-[#6B3A2A] mb-3"
        style={{ fontFamily: "'Cinzel', serif" }}
      >
        {label}
      </h3>
      <div className="flex flex-col gap-2">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              checked={selected.includes(opt)}
              onChange={() => onToggle(opt)}
              className="w-4 h-4 accent-[#6B3A2A]"
            />
            <span
              className="text-sm text-[#2C2C2C] group-hover:text-[#6B3A2A] transition-colors"
              style={{ fontFamily: "'Lora', serif" }}
            >
              {opt}
            </span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Filters */}
      <aside className="lg:w-56 flex-shrink-0">
        <div className="flex items-center justify-between mb-6">
          <h2
            className="text-sm tracking-widest uppercase text-[#2C2C2C]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Filter
          </h2>
          {(sizes.length > 0 || covers.length > 0 || papers.length > 0) && (
            <button
              onClick={() => { setSizes([]); setCovers([]); setPapers([]); }}
              className="text-xs text-[#888] hover:text-[#6B3A2A] transition-colors underline"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Clear all
            </button>
          )}
        </div>

        <FilterGroup label="Size" options={ALL_SIZES} selected={sizes} onToggle={(v) => toggle(sizes, setSizes, v)} />
        <div className="divider-gold mb-8" />
        <FilterGroup label="Cover Style" options={ALL_COVERS} selected={covers} onToggle={(v) => toggle(covers, setCovers, v)} />
        <div className="divider-gold mb-8" />
        <FilterGroup label="Paper Type" options={ALL_PAPER} selected={papers} onToggle={(v) => toggle(papers, setPapers, v)} />
      </aside>

      {/* Grid */}
      <div className="flex-1">
        <p
          className="text-sm text-[#888] mb-8"
          style={{ fontFamily: "'Lora', serif" }}
        >
          {filtered.length} {filtered.length === 1 ? "journal" : "journals"}
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p
              className="text-lg text-[#888]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              No journals match those filters.
            </p>
            <button
              onClick={() => { setSizes([]); setCovers([]); setPapers([]); }}
              className="mt-4 text-sm text-[#6B3A2A] underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
