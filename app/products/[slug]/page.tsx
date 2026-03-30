import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/sanity/queries";
import type { Metadata } from "next";
import ProductDetail from "./ProductDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    keywords: [
      product.name,
      "handmade leather journal",
      "genuine leather journal",
      "LDS mission journal",
      "missionary gift",
      product.details.leather_type,
    ].filter(Boolean),
    openGraph: {
      title: `${product.name} | Covenant Leather Co.`,
      description: product.description,
      type: "website",
      images: product.images[0]
        ? [{ url: product.images[0], alt: product.name }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: product.images[0] ? [product.images[0]] : [],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const [product, all] = await Promise.all([
    getProductBySlug(slug),
    getAllProducts(),
  ]);
  if (!product) notFound();

  const related = all.filter((p) => p.id !== product.id).slice(0, 3);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images,
    brand: {
      "@type": "Brand",
      name: "Covenant Leather Co.",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Covenant Leather Co.",
      url: "https://www.covenantleatherco.com",
    },
    offers: {
      "@type": "Offer",
      price: product.price_base,
      priceCurrency: "USD",
      availability: product.in_stock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url: `https://www.covenantleatherco.com/products/${product.slug}`,
      seller: {
        "@type": "Organization",
        name: "Covenant Leather Co.",
      },
    },
    material: product.details.leather_type,
    additionalProperty: [
      { "@type": "PropertyValue", name: "Thread", value: product.details.thread_color },
      { "@type": "PropertyValue", name: "Page Count", value: product.details.page_count },
      { "@type": "PropertyValue", name: "Paper Weight", value: product.details.paper_weight },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.covenantleatherco.com" },
      { "@type": "ListItem", position: 2, name: "Journals", item: "https://www.covenantleatherco.com/products" },
      { "@type": "ListItem", position: 3, name: product.name, item: `https://www.covenantleatherco.com/products/${product.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProductDetail product={product} related={related} />
    </>
  );
}
