import Link from "next/link";
import Image from "next/image";
import { getFeaturedProducts, products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const blogPreviews = [
    {
      slug: "what-to-write-mission-journal",
      title: "What to Write in Your Mission Journal: A Week-by-Week Guide",
      excerpt:
        "A mission goes fast. Here's how to make sure you record the parts that matter — the lessons, the people, the quiet moments between.",
      image: "/images/journal-open-lined-pages.webp",
    },
    {
      slug: "best-gifts-for-a-missionary",
      title: "The Best Gifts for a Missionary (From Someone Who Actually Cares)",
      excerpt:
        "Skip the plastic. Give something that will be carried, worn in, and treasured long after the mission is done.",
      image: "/images/engraving-benjamin-fowler.webp",
    },
  ];

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#2C2C2C]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/journal-tied-cord.webp"
            alt="Handmade leather journal tied with linen cord"
            fill
            className="object-cover opacity-40"
            priority
          />
          {/* Warm amber overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#6B3A2A]/30 via-transparent to-[#2C2C2C]/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p
            className="text-xs tracking-[0.4em] uppercase text-white mb-6"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Crafted to Last. Made to Record.
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#FAF7F2] leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Built to Bear
            <br />
            <em>Witness.</em>
          </h1>
          <p
            className="text-lg sm:text-xl text-[#E8D9BC] max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Handmade genuine leather journals, crafted for a life worth recording.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-primary inline-block text-center">
              Shop Journals
            </Link>
            <Link href="/about" className="btn-outline inline-block text-center border-[#F4ECD8] text-[#F4ECD8] hover:bg-[#F4ECD8] hover:text-[#2C2C2C]">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Collections ────────────────────────────────── */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.3em] uppercase text-[#C49A3C] mb-3"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Collections
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#2C2C2C]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Find Your Journal
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                href: "/collections/missions",
                title: "Mission Journals",
                subtitle: "For two years that define a lifetime",
                image: "/images/journals-distressed-stack.webp",
                accent: "#1a2a4a",
              },
              {
                href: "/collections/gifts",
                title: "Gift Sets",
                subtitle: "Give something that will last",
                image: "/images/journals-set-two-sizes-in-progress.webp",
                accent: "#4E2A1C",
              },
              {
                href: "/products/scripture-journal",
                title: "Scripture Journals",
                subtitle: "Margin room for every prompting",
                image: "/images/journal-open-lined-pages.webp",
                accent: "#2C2C2C",
              },
            ].map((col) => (
              <Link
                key={col.href}
                href={col.href}
                className="group relative aspect-[4/5] overflow-hidden block"
              >
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3
                    className="text-xl font-bold text-[#FAF7F2] mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {col.title}
                  </h3>
                  <p
                    className="text-sm text-[#E8D9BC]"
                    style={{ fontFamily: "'Lora', serif" }}
                  >
                    {col.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Craft Story Strip ──────────────────────────────────── */}
      <section className="bg-[#6B3A2A] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <p
                className="text-xs tracking-[0.35em] uppercase text-[#C49A3C] mb-4"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                The Craft
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#FAF7F2] leading-snug mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Every journal is hand-stitched,
                <br />
                hand-cut, and made to outlast
                <br />
                the stories inside it.
              </h2>
              <p
                className="text-[#E8D9BC] text-base leading-relaxed max-w-md"
                style={{ fontFamily: "'Lora', serif" }}
              >
                We use only full-grain and top-grain leathers, waxed linen thread, and acid-free
                paper. No shortcuts. No machines. Just a maker and material that will age together.
              </p>
              <Link
                href="/about"
                className="inline-block mt-6 text-xs tracking-widest uppercase text-[#C49A3C] border-b border-[#C49A3C] pb-0.5 hover:text-[#D4AA4C] hover:border-[#D4AA4C] transition-colors"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                See the Process →
              </Link>
            </div>
            <div className="flex-shrink-0 w-full md:w-80 aspect-square relative overflow-hidden">
              <Image
                src="/images/workbench-leather-hides.webp"
                alt="Ben Fowler's leather working bench with hides and journals"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Sellers ──────────────────────────────────────── */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.3em] uppercase text-[#C49A3C] mb-3"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Most Loved
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#2C2C2C]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Best Sellers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-outline inline-block">
              View All Journals
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="bg-[#F4ECD8] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.3em] uppercase text-[#C49A3C] mb-3"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              From Our Customers
            </p>
            <h2
              className="text-3xl font-bold text-[#2C2C2C]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Words Worth Keeping
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "I gave this to my son before his mission. He still carries it. Two years in and the leather is only more beautiful.",
                name: "Margaret T.",
                role: "Mother of a Returned Missionary",
              },
              {
                quote:
                  "I've tried every journal on the market. Nothing compares. The paper, the feel, the smell — it makes you want to write.",
                name: "Elder James R.",
                role: "Currently Serving",
              },
              {
                quote:
                  "Our entire ward ordered these for our missionaries. The response was overwhelming. These are not forgotten on a shelf.",
                name: "Bishop Aaron L.",
                role: "Ward Leader",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 border border-[#E8D9BC] relative"
              >
                <span
                  className="text-5xl text-[#C49A3C] leading-none absolute top-4 left-6 opacity-40"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  &ldquo;
                </span>
                <p
                  className="text-[#2C2C2C] text-base leading-relaxed italic mt-4"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {t.quote}
                </p>
                <div className="mt-6 pt-4 border-t border-[#E8D9BC]">
                  <p
                    className="text-sm font-semibold text-[#6B3A2A]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-xs text-[#888] mt-0.5" style={{ fontFamily: "'Lora', serif" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Preview ──────────────────────────────────────── */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.3em] uppercase text-[#C49A3C] mb-3"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              From the Journal
            </p>
            <h2
              className="text-3xl font-bold text-[#2C2C2C]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Stories & Guides
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {blogPreviews.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-video overflow-hidden mb-5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3
                  className="text-xl font-semibold text-[#2C2C2C] group-hover:text-[#6B3A2A] transition-colors leading-snug mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-sm text-[#666] leading-relaxed"
                  style={{ fontFamily: "'Lora', serif" }}
                >
                  {post.excerpt}
                </p>
                <span
                  className="inline-block mt-3 text-xs tracking-widest uppercase text-[#6B3A2A] border-b border-[#6B3A2A] pb-0.5"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Read More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
