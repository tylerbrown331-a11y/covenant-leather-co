import type { MetadataRoute } from "next";
import { getAllProducts } from "@/sanity/queries";
import { blogPosts, categories } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://covenantleatherco.com";

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/products`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${base}/collections/missions`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/collections/gifts`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/faq`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${base}/contact`, priority: 0.6, changeFrequency: "yearly" as const },
  ];

  const products = await getAllProducts();
  const productPages = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
  }));

  const categoryPages = categories.map((c) => ({
    url: `${base}/blog/category/${c.slug}`,
    priority: 0.6,
    changeFrequency: "weekly" as const,
  }));

  return [...staticPages, ...productPages, ...blogPages, ...categoryPages];
}
