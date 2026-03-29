import { Metadata } from "next";
import { getProductsByTag } from "@/sanity/queries";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Mission Journals",
  description:
    "Genuine leather journals made for missionaries. Rugged, faithful, and built for two years of daily use. The best LDS mission journal you can carry.",
};

export default async function MissionsCollectionPage() {
  const products = await getProductsByTag("mission");

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a2a4a] py-24 text-center px-4">
        <p
          className="text-xs tracking-[0.35em] uppercase text-[#C49A3C] mb-4"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          For Those Who Go
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#FAF7F2] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Mission Journals
        </h1>
        <p
          className="text-lg text-[#dce4f0] max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Two years is a short time to serve and a long time to forget. These journals are built
          for missionaries who intend to remember.
        </p>
      </section>

      {/* Editorial block */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2
          className="text-2xl font-bold text-[#2C2C2C] mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          What to Look for in a Mission Journal
        </h2>
        <p
          className="text-base text-[#555] leading-relaxed mb-4"
          style={{ fontFamily: "'Lora', serif" }}
        >
          A mission journal needs to survive two years of daily use — humidity, heat, cold, and
          the wear of a bag that never stops moving. Look for <strong>genuine leather</strong> (not
          bonded or faux), <strong>waxed linen thread</strong> that won&apos;t rot or snap, and
          <strong> acid-free paper</strong> that won&apos;t yellow over the decades it will sit on your shelf.
        </p>
        <p
          className="text-base text-[#555] leading-relaxed"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Size matters too. Pocket journals fit in a shirt pocket for street contacting. Standard
          journals give room to write. Get both if you can — one for the field, one for the desk.
        </p>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="h-px bg-[#E8D9BC] mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
