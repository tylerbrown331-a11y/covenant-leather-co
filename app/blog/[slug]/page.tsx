import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, getPostBySlug, getCategoryBySlug } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.covenantleatherco.com" },
      { "@type": "ListItem", position: 2, name: "Stories", item: "https://www.covenantleatherco.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://www.covenantleatherco.com/blog/${post.slug}` },
    ],
  };

  // JSON-LD Article schema for EEAT
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://covenantleatherco.com${post.image}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
      url: "https://covenantleatherco.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Covenant Leather Co.",
      url: "https://covenantleatherco.com",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="relative aspect-[16/6] overflow-hidden bg-[#2C2C2C]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-4 pb-10">
          <div className="flex items-center gap-3 mb-3">
            <Link
              href="/blog"
              className="text-xs tracking-[0.3em] uppercase text-[#C49A3C] hover:text-[#FAF7F2] transition-colors"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              The Journal
            </Link>
            {post.category && (
              <>
                <span className="text-[#C49A3C]">/</span>
                <Link
                  href={`/blog/category/${post.category}`}
                  className="text-xs tracking-[0.3em] uppercase text-[#C49A3C] hover:text-[#FAF7F2] transition-colors"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {getCategoryBySlug(post.category)?.name}
                </Link>
              </>
            )}
          </div>
          <h1
            className="text-3xl sm:text-4xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Meta */}
        <div className="flex items-center gap-4 mb-10 pb-8 border-b border-[#E8D9BC]">
          <div>
            <p
              className="text-sm font-semibold text-[#6B3A2A]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {post.author}
            </p>
            <p className="text-xs text-[#888] mt-0.5" style={{ fontFamily: "'Lora', serif" }}>
              {post.authorRole} · {post.date} · {post.readTime}
            </p>
          </div>
        </div>

        {/* Content */}
        <div
          className="prose-custom"
          style={{ fontFamily: "'Lora', serif" }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-16 bg-[#F4ECD8] border border-[#E8D9BC] p-8 text-center">
          <p
            className="text-xs tracking-widest uppercase text-[#C49A3C] mb-2"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Handmade by Benjamin S. Fowler
          </p>
          <h3
            className="text-2xl font-bold text-[#2C2C2C] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Find the journal that's yours.
          </h3>
          <p
            className="text-sm text-[#555] mb-6 max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Every journal is made by hand in Saratoga Springs, Utah — genuine leather, waxed linen thread, and acid-free paper.
          </p>
          <Link href="/products" className="btn-primary inline-block">
            Shop Journals
          </Link>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2
              className="text-xl font-bold text-[#2C2C2C] mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Keep Reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {related.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                  <div className="relative aspect-video overflow-hidden mb-4">
                    <Image
                      src={rp.image}
                      alt={rp.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h3
                    className="text-base font-semibold text-[#2C2C2C] group-hover:text-[#6B3A2A] transition-colors leading-snug"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {rp.title}
                  </h3>
                  <p className="text-xs text-[#888] mt-1" style={{ fontFamily: "'Lora', serif" }}>
                    {rp.readTime}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
