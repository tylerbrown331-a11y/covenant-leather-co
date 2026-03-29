import { Metadata } from "next";
import { getProductsByTag } from "@/sanity/queries";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Gift Journals",
  description:
    "Meaningful leather journal gift sets for missionaries, scripture study, and anyone who deserves something handmade and lasting.",
};

export default async function GiftsCollectionPage() {
  const products = await getProductsByTag("gift");

  return (
    <>
      {/* Hero */}
      <section className="bg-[#F4ECD8] py-24 text-center px-4 border-b border-[#E8D9BC]">
        <p
          className="text-xs tracking-[0.35em] uppercase text-[#C49A3C] mb-4"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Give Something That Lasts
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#2C2C2C] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Gift Journals
        </h1>
        <p
          className="text-lg text-[#555] max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Not a gift card. Not a candle. Something they&apos;ll carry for years and remember you gave them.
        </p>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Gift note */}
      <section className="bg-[#6B3A2A] py-16 text-center px-4">
        <p
          className="text-xs tracking-[0.35em] uppercase text-[#C49A3C] mb-3"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Personal Touch
        </p>
        <h2
          className="text-2xl font-bold text-[#FAF7F2] mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Add Their Initials
        </h2>
        <p
          className="text-[#E8D9BC] max-w-md mx-auto text-sm leading-relaxed"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Every journal can be personalized with initials or a name, hand-stamped into the leather.
          Select the personalization option on any product page.
        </p>
      </section>
    </>
  );
}
