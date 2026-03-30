import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { categories, getCategoryBySlug, getPostsByCategory, type BlogCategory } from "@/lib/blog";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return {};
  return {
    title: `${cat.name} — The Journal`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const posts = getPostsByCategory(category as BlogCategory);

  return (
    <>
      {/* Header */}
      <section className="bg-[#FAF7F2] border-b border-[#E8D9BC] py-16 text-center px-4">
        <Link
          href="/blog"
          className="text-xs tracking-[0.2em] uppercase text-[#888] hover:text-[#6B3A2A] transition-colors mb-3 inline-block"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          &larr; All Stories
        </Link>
        <h1
          className="text-4xl font-bold text-[#2C2C2C] mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {cat.name}
        </h1>
        <p
          className="text-base text-[#555] max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Lora', serif" }}
        >
          {cat.description}
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {posts.length === 0 ? (
          <p
            className="text-center text-[#888] text-lg py-20"
            style={{ fontFamily: "'Lora', serif" }}
          >
            No stories in this category yet. Check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
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
        )}
      </div>
    </>
  );
}
