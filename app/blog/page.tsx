import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Stories, guides, and thoughts on journaling, missionary life, leather care, and living a life worth recording.",
};

const posts = [
  {
    slug: "what-to-write-mission-journal",
    title: "What to Write in Your Mission Journal: A Week-by-Week Guide",
    excerpt:
      "A mission goes fast. Here's how to make sure you record the parts that matter — the lessons, the people, the quiet moments between.",
    image: "/images/journal-open-lined-pages.webp",
    date: "March 15, 2026",
    readTime: "8 min read",
  },
  {
    slug: "how-to-choose-leather-journal-mission",
    title: "How to Choose the Right Leather Journal for Your Mission",
    excerpt:
      "Not all leather journals are created equal. Here's what to look for — and what to avoid — when choosing a journal that will survive two years of daily use.",
    image: "/images/journals-color-spread-wood.webp",
    date: "February 28, 2026",
    readTime: "6 min read",
  },
  {
    slug: "best-gifts-for-a-missionary",
    title: "The Best Gifts for a Missionary (From Someone Who Actually Cares)",
    excerpt:
      "Skip the plastic. Give something that will be carried, worn in, and treasured long after the mission is done.",
    image: "/images/engraving-benjamin-fowler.webp",
    date: "February 10, 2026",
    readTime: "5 min read",
  },
  {
    slug: "how-to-care-for-genuine-leather-journal",
    title: "How to Care for a Genuine Leather Journal",
    excerpt:
      "Leather is a living material. Here's how to keep your journal looking beautiful and aging gracefully for decades.",
    image: "/images/raw-leather-hide.webp",
    date: "January 20, 2026",
    readTime: "4 min read",
  },
  {
    slug: "why-handwritten-journals-still-matter",
    title: "Why Handwritten Journals Still Matter",
    excerpt:
      "In a world of screens, there is still something irreplaceable about putting pen to paper. The science, the history, and the personal case for writing by hand.",
    image: "/images/stitching-detail-closeup.webp",
    date: "January 5, 2026",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Header */}
      <section className="bg-[#FAF7F2] border-b border-[#E8D9BC] py-16 text-center px-4">
        <p
          className="text-xs tracking-[0.35em] uppercase text-[#C49A3C] mb-3"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Stories & Guides
        </p>
        <h1
          className="text-4xl font-bold text-[#2C2C2C]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The Journal
        </h1>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Post */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <span
                className="text-xs tracking-widest uppercase text-[#C49A3C]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Featured
              </span>
              <h2
                className="text-3xl font-bold text-[#2C2C2C] group-hover:text-[#6B3A2A] transition-colors mt-2 mb-3 leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {featured.title}
              </h2>
              <p
                className="text-base text-[#555] leading-relaxed mb-4"
                style={{ fontFamily: "'Lora', serif" }}
              >
                {featured.excerpt}
              </p>
              <p className="text-xs text-[#888]" style={{ fontFamily: "'Lora', serif" }}>
                {featured.date} · {featured.readTime}
              </p>
            </div>
          </div>
        </Link>

        <div className="divider-gold mb-16" />

        {/* Post Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className="relative aspect-video overflow-hidden mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3
                className="text-lg font-semibold text-[#2C2C2C] group-hover:text-[#6B3A2A] transition-colors leading-snug mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {post.title}
              </h3>
              <p
                className="text-sm text-[#555] leading-relaxed mb-3"
                style={{ fontFamily: "'Lora', serif" }}
              >
                {post.excerpt}
              </p>
              <p className="text-xs text-[#888]" style={{ fontFamily: "'Lora', serif" }}>
                {post.date} · {post.readTime}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
