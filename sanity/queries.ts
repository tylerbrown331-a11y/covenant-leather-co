import { sanityClient } from "./client";
import type { QueryParams } from "@sanity/client";
import type { Product } from "@/lib/products";

const PRODUCT_FIELDS = `
  "id": _id,
  name,
  "slug": slug.current,
  description,
  story,
  price_base,
  "images": images[].asset->url,
  badge,
  in_stock,
  tags,
  "variants": {
    "size": coalesce(sizes, []),
    "cover_style": coalesce(cover_styles, []),
    "paper_type": coalesce(paper_types, [])
  },
  "size_upcharges_raw": size_upcharges[]{ size, upcharge },
  "details": {
    "leather_type": coalesce(leather_type, ""),
    "thread_color": coalesce(thread_color, ""),
    "page_count": coalesce(page_count, 0),
    "paper_weight": coalesce(paper_weight, "")
  },
  care
`;

type RawProduct = Omit<Product, "variant_pricing" | "badge"> & {
  badge: string | null;
  size_upcharges_raw: { size: string; upcharge: number }[] | null;
};

function toProduct(raw: RawProduct): Product {
  const upcharges = raw.size_upcharges_raw ?? [];
  const size_upcharge: Record<string, number> = {};
  for (const u of upcharges) size_upcharge[u.size] = u.upcharge;
  return {
    ...raw,
    badge: (raw.badge || undefined) as Product["badge"],
    variant_pricing: { size_upcharge },
  };
}

export async function getAllProducts(): Promise<Product[]> {
  const raw: RawProduct[] = await sanityClient.fetch(
    `*[_type == "product"] | order(_createdAt asc) { ${PRODUCT_FIELDS} }`
  );
  return raw.map(toProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const raw: RawProduct | null = await sanityClient.fetch(
    `*[_type == "product" && slug.current == $slug][0] { ${PRODUCT_FIELDS} }`,
    { slug } as unknown as QueryParams
  );
  return raw ? toProduct(raw) : undefined;
}

export async function getProductsByTag(tag: string): Promise<Product[]> {
  const raw: RawProduct[] = await sanityClient.fetch(
    `*[_type == "product" && $tag in tags] | order(_createdAt asc) { ${PRODUCT_FIELDS} }`,
    { tag } as unknown as QueryParams
  );
  return raw.map(toProduct);
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const raw: RawProduct[] = await sanityClient.fetch(
    `*[_type == "product" && "bestseller" in tags][0...3] { ${PRODUCT_FIELDS} }`
  );
  return raw.map(toProduct);
}
