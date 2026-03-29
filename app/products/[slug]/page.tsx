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

  return <ProductDetail product={product} related={related} />;
}
