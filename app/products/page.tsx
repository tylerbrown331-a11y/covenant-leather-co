import { getAllProducts } from "@/sanity/queries";
import ProductsFilterClient from "@/components/ProductsFilterClient";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <p
          className="text-xs tracking-[0.3em] uppercase text-[#C49A3C] mb-3"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Handmade in the USA
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#2C2C2C]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          All Journals
        </h1>
        <div className="h-px w-24 bg-[#C49A3C] mx-auto mt-4" />
      </div>

      <ProductsFilterClient products={products} />
    </div>
  );
}
