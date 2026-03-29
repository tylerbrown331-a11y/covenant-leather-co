export type Size = "Pocket (4x6)" | "Standard (5x8)" | "Large (8x10)";
export type CoverStyle = "Classic Wrap" | "Zipper Closure" | "Brass Clasp" | "Open";
export type PaperType = "Lined" | "Blank" | "Dotted" | "Mixed";

export interface ProductVariants {
  size: Size[];
  cover_style: CoverStyle[];
  paper_type: PaperType[];
}

export interface ProductDetails {
  leather_type: string;
  thread_color: string;
  page_count: number;
  paper_weight: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  story: string;
  price_base: number;
  images: string[];
  variants: ProductVariants;
  variant_pricing: {
    size_upcharge: Record<string, number>;
  };
  details: ProductDetails;
  care: string;
  tags: string[];
  in_stock: boolean;
  badge?: "New" | "Best Seller" | "Mission Favorite";
}

export const products: Product[] = [
  {
    id: "001",
    name: "The Covenant Journal",
    slug: "covenant-journal",
    description:
      "Our flagship journal. Full-grain saddle leather, hand-stitched with waxed linen thread, and built to outlast the stories inside it. A journal worthy of the promises you keep.",
    story:
      "Every missionary who carries this journal carries something that will last longer than their time in the field. The leather softens with use, the pages fill with testimony, and years later it still sits on a shelf as a record of who you were when it mattered most. This is not a notebook. It's an heirloom.",
    price_base: 89,
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
      "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=800&q=80",
    ],
    variants: {
      size: ["Pocket (4x6)", "Standard (5x8)", "Large (8x10)"],
      cover_style: ["Classic Wrap", "Zipper Closure", "Brass Clasp", "Open"],
      paper_type: ["Lined", "Blank", "Dotted", "Mixed"],
    },
    variant_pricing: {
      size_upcharge: { "Pocket (4x6)": -5, "Standard (5x8)": 0, "Large (8x10)": 10 },
    },
    details: {
      leather_type: "Full-grain American saddle leather",
      thread_color: "Natural waxed linen",
      page_count: 192,
      paper_weight: "90gsm acid-free",
    },
    care: "Condition every 6–12 months with a quality leather balm. Store away from direct sunlight. The natural oils in your hands will develop a unique patina over time — this is a feature, not a flaw.",
    tags: ["mission", "bestseller", "scripture"],
    in_stock: true,
    badge: "Best Seller",
  },
  {
    id: "002",
    name: "The Mission Companion",
    slug: "mission-companion",
    description:
      "Compact enough for a shirt pocket, durable enough for two years of daily use. Designed with missionaries in mind — rugged, faithful, and always ready.",
    story:
      "It started as a pocket journal and became something more: a daily companion that survived rain in the Philippines, cold in Ukraine, and heat in São Paulo. The Mission Companion is small enough to carry everywhere and substantial enough to hold everything worth remembering.",
    price_base: 64,
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80",
    ],
    variants: {
      size: ["Pocket (4x6)", "Standard (5x8)"],
      cover_style: ["Classic Wrap", "Open"],
      paper_type: ["Lined", "Blank", "Mixed"],
    },
    variant_pricing: {
      size_upcharge: { "Pocket (4x6)": 0, "Standard (5x8)": 8 },
    },
    details: {
      leather_type: "Top-grain cowhide, water-resistant finish",
      thread_color: "Navy waxed linen",
      page_count: 128,
      paper_weight: "80gsm acid-free",
    },
    care: "Wipe clean with a damp cloth. The water-resistant finish will naturally wear over time, developing a beautiful character. Re-condition annually with a light leather balm.",
    tags: ["mission", "pocket", "mission favorite"],
    in_stock: true,
    badge: "Mission Favorite",
  },
  {
    id: "003",
    name: "The Scripture Journal",
    slug: "scripture-journal",
    description:
      "Wide margins for notes, side-stitched for lay-flat use, and finished with a brass clasp that holds it closed between study sessions. Made for deep engagement with the word.",
    story:
      "Some things deserve to be written down. The impressions that come during early-morning study, the cross-references that unlock a passage, the prompting you don't want to forget. The Scripture Journal was designed to sit open beside your scriptures without closing on you — a quiet partner in the work of understanding.",
    price_base: 79,
    images: [
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
      "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=800&q=80",
    ],
    variants: {
      size: ["Standard (5x8)", "Large (8x10)"],
      cover_style: ["Brass Clasp", "Open"],
      paper_type: ["Lined", "Blank", "Mixed"],
    },
    variant_pricing: {
      size_upcharge: { "Standard (5x8)": 0, "Large (8x10)": 12 },
    },
    details: {
      leather_type: "Vegetable-tanned pull-up leather",
      thread_color: "Burgundy waxed linen",
      page_count: 160,
      paper_weight: "100gsm cream, acid-free",
    },
    care: "Vegetable-tanned leather darkens beautifully with use and light. Condition with beeswax balm to deepen the color and protect the surface. Avoid prolonged moisture exposure.",
    tags: ["scripture", "gift", "bestseller"],
    in_stock: true,
    badge: "Best Seller",
  },
  {
    id: "004",
    name: "The Heritage Set",
    slug: "heritage-set",
    description:
      "A full-size journal and a pocket companion, matched in leather and thread. Gift it as a set or keep one for yourself. Built to be passed down.",
    story:
      "Two journals. One story. The Heritage Set pairs our flagship Covenant Journal with the Mission Companion — made from the same hide, stitched with the same thread. Give them together before a mission. Give them at a wedding. Give them whenever the moment calls for something that will last.",
    price_base: 139,
    images: [
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
      "https://images.unsplash.com/photo-1428592953211-077101b2021b?w=800&q=80",
    ],
    variants: {
      size: ["Standard (5x8)"],
      cover_style: ["Classic Wrap", "Brass Clasp"],
      paper_type: ["Lined", "Mixed"],
    },
    variant_pricing: {
      size_upcharge: { "Standard (5x8)": 0 },
    },
    details: {
      leather_type: "Matched full-grain American saddle leather",
      thread_color: "Natural waxed linen",
      page_count: 192 + 128,
      paper_weight: "90gsm acid-free",
    },
    care: "Both journals share the same leather and care routine. Condition every 6–12 months with a quality leather balm. Store together or apart — they'll age in parallel.",
    tags: ["gift", "set", "bestseller"],
    in_stock: true,
    badge: "New",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByTag(tag: string): Product[] {
  return products.filter((p) => p.tags.includes(tag));
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.tags.includes("bestseller")).slice(0, 3);
}
