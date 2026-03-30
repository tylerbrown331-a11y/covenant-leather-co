import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Stories, guides, and thoughts on journaling, missionary life, leather care, and living a life worth recording.",
};


export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

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
